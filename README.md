# Backyard SaaS — marketing site

The umbrella site for **Backyard SaaS**, the studio behind
[Relaunch](https://www.get-relaunch.com), Trellis, and the apps growing
under the same roof.

> Built in the backyard. Made for the real world.

This is the public-facing marketing site — four pages (home, apps,
about, contact), one contact form that emails via Resend, and zero
infrastructure that we have to babysit.

---

## Stack

- **Next.js 14 (App Router)** + TypeScript
- **Tailwind CSS** — palette locked to the Backyard logo system
  (forest / cream / ink)
- **Resend** — contact-form delivery (reuses the Relaunch account)
- **Vercel** — hosting, deploys on every push to `main`
- **Inline SVG** for all illustrations — no third-party image deps

## Running locally

```bash
npm install
cp .env.example .env.local      # fill in RESEND_API_KEY
npm run dev                     # http://localhost:3000
```

### Required env

| Variable             | Required for | Notes                                     |
| -------------------- | ------------ | ----------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | metadata    | e.g. `https://www.backyardsaas.com`       |
| `RESEND_API_KEY`     | contact form | reuse the Relaunch key — same domain ok    |
| `FROM_EMAIL`         | contact form | default: `hello@backyardsaas.com`          |
| `CONTACT_TO_EMAIL`   | contact form | default: `kaushikn2416@gmail.com`          |
| `CONTACT_CC_EMAIL`   | contact form | optional: `hello@get-relaunch.com`         |

If `RESEND_API_KEY` is missing, the contact form falls back to a
friendly error pointing the visitor at the direct mailto.

## Project structure

```
src/
├── app/
│   ├── layout.tsx          shared shell (nav + footer)
│   ├── page.tsx            home (hero → mission → vision → apps → about → CTA)
│   ├── apps/page.tsx       marketplace grid + indie-builder CTA
│   ├── about/page.tsx      founder story + principles
│   ├── contact/
│   │   ├── page.tsx
│   │   ├── ContactForm.tsx (client form)
│   │   └── actions.ts      (server action → Resend)
│   └── globals.css         brand tokens + components
├── components/
│   ├── Logo.tsx            inline-SVG sprout mark + lockup
│   ├── Nav.tsx
│   ├── Footer.tsx
│   └── AppCard.tsx         marketplace card
└── lib/
    ├── config.ts           env validation (zod)
    └── apps.ts             app catalogue (single source of truth)
```

When a new app ships, add it to `src/lib/apps.ts` — the home preview
and the `/apps` grid pick it up automatically.

## Deploying to Vercel

1. Push this repo to GitHub (`backyard-saas/backyard-site`).
2. In Vercel → **New Project** → import the repo.
3. Framework preset: **Next.js** (auto-detected).
4. Add env vars under Settings → Environment Variables (Production at minimum):
   - `NEXT_PUBLIC_SITE_URL=https://www.backyardsaas.com`
   - `RESEND_API_KEY=<value>`
   - `CONTACT_TO_EMAIL=kaushikn2416@gmail.com`
   - `CONTACT_CC_EMAIL=hello@get-relaunch.com`
   - `FROM_EMAIL=hello@backyardsaas.com`
5. Vercel → Settings → Domains → add `backyardsaas.com` and
   `www.backyardsaas.com`. Follow the DNS instructions Vercel shows
   (apex + www CNAME).
6. In Resend → Domains, add `backyardsaas.com` and verify the DNS
   records so the contact emails ship from `hello@backyardsaas.com`.

That's the whole infra. No database, no cron, no background workers.

## Brand notes

The site colour system mirrors the Backyard logo:

| Token        | Hex       | Use                                          |
| ------------ | --------- | -------------------------------------------- |
| `forest-900` | `#1A3826` | hero plate, footer, primary buttons          |
| `forest-700` | `#2C5239` | gradient bottom, hover                       |
| `forest-500` | `#3F6E4D` | underline accent on cream                    |
| `cream-50`   | `#FAF5E9` | body background                              |
| `cream-100`  | `#F4ECD8` | alternating section + card bg                |
| `ink-900`    | `#1C2220` | primary text on cream                        |
| `ink-600`    | `#58665C` | secondary text                               |
| `accent`     | `#C8DAC4` | sage highlight on the dark hero              |

Don't introduce new brand colours here — any new accent should also
be added to `tailwind.config.ts` and used consistently across logo +
site + future apps.

## What's NOT in this site

- No auth / login portal (that's the next phase — a single
  Backyard-level account that routes into Relaunch / Trellis / etc).
- No database. Contact form is fire-and-forget email.
- No analytics yet — add PostHog or Plausible if/when needed.
