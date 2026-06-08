# 4P3X Verse™ Investor Portfolio

**Powered by 4P3X Intelligent AI™ · Created by Kyzel Kreates™**

> Demo Mode shows the product. Live Mode runs the product.

A futuristic, investor-ready, installable PWA portfolio for the 4P3X Verse™ modular AI-powered software ecosystem. One reusable architecture, 10+ live deployed product variants, and a clear pathway from demo mode to fully live systems.

---

## Quick Start (Local Development)

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/4p3x-investor-portfolio.git
cd 4p3x-investor-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
# → Opens at http://localhost:3000
```

---

## Build for Production

```bash
npm run build
# Output → dist/

npm run preview
# Preview the production build locally at http://localhost:4173
```

---

## Deploy to Vercel (Recommended)

### Option A: GitHub → Vercel (Recommended)

1. Push your repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Vercel auto-detects Vite — settings are pre-configured via `vercel.json`
5. Click **Deploy**
6. (Optional) Set environment variables for TextBee notifications (see below)

### Option B: Vercel CLI

```bash
npm install -g vercel
vercel
# Follow prompts — Vercel reads vercel.json automatically
```

---

## Environment Variables (Vercel Dashboard)

Set these in **Vercel dashboard → Settings → Environment Variables**.

⚠️ **NEVER put real values in code, .env files committed to Git, or README screenshots.**

| Variable | Purpose | Required |
|---|---|---|
| `TEXTBEE_API_KEY` | TextBee SMS API key | Optional (graceful fallback) |
| `TEXTBEE_DEVICE_ID` | TextBee registered device ID | Optional |
| `TEXTBEE_RECIPIENT_PHONE` | Your phone number for lead notifications | Optional |

Copy `.env.example` → `.env.local` for local development (gitignored).

---

## Project Structure

```
4p3x-investor-portfolio/
├── index.html              ← Main HTML (Vite entry point)
├── src/
│   ├── main.js             ← All JavaScript (data, rendering, agents, forms)
│   └── styles.css          ← All CSS (futuristic dark theme)
├── public/
│   ├── assets/
│   │   ├── 4p3x-landscape-logo.png  ← Landscape logo (hero, header, footer)
│   │   └── 4p3x-square-logo.png     ← Square logo (favicon, PWA icon, cards)
│   ├── manifest.webmanifest         ← PWA manifest
│   ├── sw.js                        ← Service worker (offline caching)
│   ├── offline.html                 ← Offline fallback page
│   └── 4p3x-verse-investor-info-pack.json  ← Downloadable investor JSON pack
├── api/
│   └── textbee-lead.js     ← Vercel serverless function (TextBee notifications)
├── package.json
├── vite.config.js
├── vercel.json
├── .gitignore
├── .env.example            ← Safe template — never commit real values
└── README.md
```

---

## Logo Usage

| Logo | Used For |
|---|---|
| `4p3x-landscape-logo.png` | Hero section, desktop header, investor section, footer brand strip |
| `4p3x-square-logo.png` | Favicon, PWA icon, mobile header, loading states, AI agent cards, admin panel |

Both logos live in `public/assets/` and are served at `/assets/` in production.

---

## PWA Setup

- **Manifest**: `/manifest.webmanifest` — sets app name, icons, theme, shortcuts
- **Service Worker**: `/sw.js` — caches core assets for offline access
- **Offline fallback**: `/offline.html` — shown when offline and no cache match
- **Install prompt**: Handled in `src/main.js` via `beforeinstallprompt` event
- After first load, the core portfolio shell is available offline

---

## Demo Mode vs Live Mode

| | Demo Mode | Live Mode |
|---|---|---|
| Contact form | Saves to localStorage | Sends to backend + TextBee SMS |
| Lead inbox | localStorage only | Real database |
| TextBee notifications | Not sent | Sent via `/api/textbee-lead.js` |
| Backend | Not required | Supabase / Firebase / REST API |
| Data persistence | Browser only | Real users, real records |

To activate Live Mode: configure backend and set Vercel environment variables.

---

## TextBee Notification Setup

1. Get your API key and Device ID from [textbee.dev](https://textbee.dev)
2. Add to Vercel environment variables:
   - `TEXTBEE_API_KEY`
   - `TEXTBEE_DEVICE_ID`
   - `TEXTBEE_RECIPIENT_PHONE`
3. Test using the Admin panel → **Test TextBee** button
4. The `/api/textbee-lead.js` serverless function handles all notification sending server-side

---

## Security — 4P3X API Config Guard™

**Never expose in frontend code, localStorage, or committed files:**
- TextBee API keys
- OpenAI / Groq / Anthropic API keys
- Stripe secret keys
- Supabase service role keys
- Database URLs or connection strings
- JWT secrets or webhook secrets
- GitHub personal access tokens

If credentials were accidentally committed: **revoke immediately**, regenerate, and remove from Git history before redeploying.

---

## Portfolio Page Map

| Section | Anchor | Description |
|---|---|---|
| Home / Hero | `#top` | Primary hero, metrics, navigation |
| About Me | `#about` | Founder story, Ciaran / Kyzel Kreates™ |
| Investor Overview | `#investor` | Why it matters, metrics, commercial pathways |
| Business Plan | `#business` | Full investor business plan |
| Timeline | `#timeline` | V1 → V6 evolution |
| Live Projects | `#products` | 10+ live deployed product links |
| Kyzel Clarity™ | `#clarity` | AI explainer PWA feature |
| Possible Uses | `#uses` | 8 sector use-case categories |
| Architecture | `#architecture` | 6 system diagrams |
| AI Agents | `#agents` | 3 embedded portfolio agents |
| Contact | `#contact` | Investor interest form |
| Admin | `#admin` | Lead inbox, TextBee setup, security |
| Install PWA | `#pwa` | PWA install prompt + info pack download |

---

## Investor Review Checklist

- [ ] Hero section visible with landscape logo
- [ ] All 6 navigation links work (desktop + mobile)
- [ ] Investor overview page loaded
- [ ] Business plan page loaded
- [ ] Timeline shows V1 → V6 with live links
- [ ] All 10+ live project links open in new tabs
- [ ] Kyzel Clarity™ section visible with working link
- [ ] Architecture diagrams render (no external images required)
- [ ] AI agents respond to test questions
- [ ] Contact form submits and shows success message
- [ ] Admin lead inbox shows submitted lead
- [ ] PWA install prompt appears (Chrome/Edge desktop)
- [ ] Info pack JSON downloads successfully
- [ ] Offline fallback works after first load
- [ ] No secrets in browser console, localStorage, or network tab

---

## Known Limitations

- AI agents are demo agents — they use pattern-matching, not a live LLM API. Connect a real AI backend in live mode for full conversational intelligence.
- PWA install prompt only appears in Chrome and Edge (desktop) when served over HTTPS. Not available in Firefox or Safari desktop.
- Contact form stores locally in demo mode. A real backend is required for persistent lead storage.
- TextBee notifications require Vercel deployment and environment variable configuration — they will not work in local dev without `.env.local`.

---

## Final Validation Checklist

- [x] Site builds without errors (`npm run build`)
- [x] All navigation anchors work
- [x] All live project URLs open in new tabs
- [x] No secrets exposed in frontend code
- [x] Logos display correctly (landscape + square)
- [x] PWA manifest valid
- [x] Service worker does not break routing
- [x] Offline page functional
- [x] Install prompt section present
- [x] Downloadable investor JSON present
- [x] Mobile layouts responsive from 320px to 1920px
- [x] Architecture diagrams readable on mobile
- [x] Admin page does not expose secrets
- [x] TextBee route uses environment variables only
- [x] Contact capture works in demo/local mode
- [x] Business plan page exists and linked in nav
- [x] README explains full setup
- [x] Vercel deployment ready

---

## Deployment Instructions Summary

1. `git init && git add . && git commit -m "Initial 4P3X Verse™ investor portfolio"`
2. Create GitHub repository and push
3. Connect to Vercel → import repository → deploy
4. Set environment variables in Vercel dashboard (optional for TextBee)
5. Share your Vercel URL with investors

---

*© 2025 Kyzel Kreates™. 4P3X Verse™ and 4P3X Intelligent AI™ are trademarks of Kyzel Kreates™. All rights reserved.*
