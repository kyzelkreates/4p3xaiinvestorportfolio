/**
 * 4P3X Verse™ — TextBee Lead Notification Serverless Function
 * Powered by 4P3X Intelligent AI™ · Created by Kyzel Kreates™
 *
 * SECURITY: All credentials are Vercel environment variables — never in frontend code.
 *
 * Required Vercel Environment Variables (set in Vercel dashboard → Settings → Env Vars):
 *   TEXTBEE_API_KEY        = your TextBee API key
 *   TEXTBEE_DEVICE_ID      = your TextBee device ID
 *   TEXTBEE_RECIPIENT_PHONE = recipient phone number (e.g. +447000000000)
 *
 * Deploy: Push to GitHub → connect to Vercel → set env vars → done.
 */

export default async function handler(req, res) {
  // CORS for same-origin requests
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  // Check credentials — fail gracefully (demo mode friendly)
  const { TEXTBEE_API_KEY, TEXTBEE_DEVICE_ID, TEXTBEE_RECIPIENT_PHONE } = process.env;
  if (!TEXTBEE_API_KEY || !TEXTBEE_DEVICE_ID || !TEXTBEE_RECIPIENT_PHONE) {
    return res.status(503).json({
      ok: false,
      error: 'TextBee is not configured. Set TEXTBEE_API_KEY, TEXTBEE_DEVICE_ID, and TEXTBEE_RECIPIENT_PHONE as Vercel environment variables.',
      demo_mode: true
    });
  }

  // Parse and validate body
  const lead = req.body || {};
  if (!lead.name && !lead.email) {
    return res.status(400).json({ ok: false, error: 'Invalid lead payload.' });
  }

  // Build SMS message
  const timestamp = new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' });
  const message = [
    '🔔 4P3X Verse™ New Lead',
    `Name: ${lead.name || 'Unknown'}`,
    lead.company ? `Company: ${lead.company}` : null,
    `Email: ${lead.email || '—'}`,
    lead.phone ? `Phone: ${lead.phone}` : null,
    `Interest: ${lead.interest || '—'}`,
    lead.productInterest ? `Product: ${lead.productInterest}` : null,
    lead.message ? `Message: ${String(lead.message).slice(0, 100)}` : null,
    `Time: ${timestamp}`
  ].filter(Boolean).join('\n');

  try {
    const response = await fetch(
      `https://api.textbee.dev/api/v1/gateway/devices/${TEXTBEE_DEVICE_ID}/send-sms`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': TEXTBEE_API_KEY
        },
        body: JSON.stringify({
          recipients: [TEXTBEE_RECIPIENT_PHONE],
          message
        })
      }
    );

    const data = await response.json().catch(() => ({}));

    if (response.ok) {
      return res.status(200).json({ ok: true, message: 'Lead notification sent via TextBee.' });
    } else {
      console.error('TextBee API error:', data);
      return res.status(502).json({ ok: false, error: 'TextBee API returned an error.', data });
    }
  } catch (error) {
    console.error('TextBee fetch error:', error.message);
    return res.status(500).json({ ok: false, error: 'TextBee request failed. Check Vercel function logs.' });
  }
}
