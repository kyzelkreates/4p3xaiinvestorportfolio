/**
 * 4P3X Verse™ — Save TextBee Config to Vercel Env Vars
 * Powered by 4P3X Intelligent AI™ · Created by Kyzel Kreates™
 *
 * Receives TextBee credentials + Vercel API token from the admin UI.
 * Saves them as Vercel environment variables via the Vercel REST API.
 * Credentials are used once server-side and never stored or logged.
 *
 * POST body:
 *   { apiKey, deviceId, phone, vercelToken, projectId, teamId? }
 */

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });

  const { apiKey, deviceId, phone, vercelToken, projectId, teamId } = req.body || {};

  if (!apiKey || !deviceId || !phone) {
    return res.status(400).json({ ok: false, error: 'TextBee API key, device ID, and phone number are all required.' });
  }
  if (!vercelToken || !projectId) {
    return res.status(400).json({ ok: false, error: 'Vercel API token and project ID are required to save environment variables.' });
  }

  // Build env var payload
  const envVars = [
    { key: 'TEXTBEE_API_KEY',        value: apiKey,   type: 'encrypted', target: ['production', 'preview'] },
    { key: 'TEXTBEE_DEVICE_ID',      value: deviceId, type: 'encrypted', target: ['production', 'preview'] },
    { key: 'TEXTBEE_RECIPIENT_PHONE', value: phone,   type: 'encrypted', target: ['production', 'preview'] }
  ];

  const teamQuery = teamId ? `?teamId=${encodeURIComponent(teamId)}` : '';
  const baseUrl = `https://api.vercel.com/v10/projects/${encodeURIComponent(projectId)}/env${teamQuery}`;

  const results = [];
  let allOk = true;

  for (const envVar of envVars) {
    try {
      // Try POST (create) first
      let response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${vercelToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(envVar)
      });

      // If already exists (409), PATCH to update it
      if (response.status === 409) {
        // Get existing env ID
        const listRes = await fetch(
          `https://api.vercel.com/v10/projects/${encodeURIComponent(projectId)}/env${teamQuery}`,
          { headers: { 'Authorization': `Bearer ${vercelToken}` } }
        );
        const listData = await listRes.json().catch(() => ({ envs: [] }));
        const existing = (listData.envs || []).find(e => e.key === envVar.key);

        if (existing?.id) {
          response = await fetch(
            `https://api.vercel.com/v10/projects/${encodeURIComponent(projectId)}/env/${existing.id}${teamQuery}`,
            {
              method: 'PATCH',
              headers: {
                'Authorization': `Bearer ${vercelToken}`,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ value: envVar.value, type: 'encrypted', target: envVar.target })
            }
          );
        }
      }

      const data = await response.json().catch(() => ({}));
      if (response.ok) {
        results.push({ key: envVar.key, status: 'saved' });
      } else {
        results.push({ key: envVar.key, status: 'error', detail: data.error?.message || response.status });
        allOk = false;
      }
    } catch (err) {
      results.push({ key: envVar.key, status: 'error', detail: err.message });
      allOk = false;
    }
  }

  if (allOk) {
    return res.status(200).json({
      ok: true,
      message: 'All 3 TextBee environment variables saved to Vercel. Redeploy your project for them to take effect.',
      results
    });
  } else {
    return res.status(207).json({
      ok: false,
      message: 'Some variables could not be saved. Check the results and verify your Vercel token and project ID.',
      results
    });
  }
}
