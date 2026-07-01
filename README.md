# TransformAI — AI Content Transformation Hub

Programmatic-SEO web app: **334 single-purpose AI text-transformation tools** across 38
categories, each with its own page (e.g. "turn an email into a professional-tone version").
Free tier is 3 generations/day per tool; a Stripe subscription unlocks unlimited use.
See [project-brief.md](./project-brief.md) for the original product spec and
[DEPLOYMENT.md](./DEPLOYMENT.md) for full production setup.

## Stack

- Next.js (App Router) + TypeScript + Tailwind
- Postgres via [Neon](https://neon.tech), accessed with [Drizzle ORM](https://orm.drizzle.team)
- LLM calls via the Anthropic SDK, **server-side only** (`src/lib/llm.ts`)
- Auth: [Auth.js](https://authjs.dev) v5 with the Drizzle adapter + Resend email magic links
- Billing: [Stripe](https://stripe.com) subscriptions (monthly/annual)

## Quick start (local)

```bash
npm install
cp .env.example .env.local     # then fill in the values (see DEPLOYMENT.md)
npm run db:push                # create all tables
npm run db:seed                # insert all 334 tools (idempotent)
npm run dev
```

Then visit `http://localhost:3000`. At minimum you need `DATABASE_URL`, `AUTH_SECRET`, and
`ANTHROPIC_API_KEY` set; auth email and Stripe need their keys to exercise those flows. The
full variable list and third-party setup is in [DEPLOYMENT.md](./DEPLOYMENT.md).

## How it works

### Content & SEO
- `src/db/seed-data/` — all 334 tool definitions, split into `batch-0`…`batch-6` plus a
  hand-authored flagship, combined and deduped by `src/db/seed-data/index.ts`.
- `src/app/transform/[slug]/page.tsx` — renders a tool page server-side using the cached
  `example_output` from the DB, so crawlers and first-time visitors never trigger an LLM call.
- `src/app/transform/page.tsx` — hub page (category grid), with `?q=` search.
- `src/app/transform/category/[category]/page.tsx` — per-category landing pages.
- `src/app/sitemap.ts` / `src/app/robots.ts` — dynamic sitemap (all tools + categories) and robots.

### Paywall
- `src/lib/rate-limit.ts` — 3 generations/day **per tool**, keyed by user id (signed in) or
  hashed IP (anonymous), over a rolling 24h window.
- `src/app/api/transform/[slug]/route.ts` — validates input, checks subscription, enforces the
  limit (returns `402` with an upgrade prompt when exceeded), calls the LLM, logs token usage.
- Subscribers bypass the limit entirely (`src/lib/subscription.ts`).

### Auth & billing
- `src/auth.ts` — Auth.js config (database sessions, Resend magic-link provider).
- `src/app/api/stripe/checkout` / `portal` / `webhook` — Stripe Checkout, Customer Portal, and
  the webhook that syncs subscription status into the `subscriptions` table.
- `src/app/pricing/page.tsx`, `src/app/account/page.tsx`, `src/app/sign-in/` — the UI.

## Adding a new tool

Add a `ToolSeed` object to a batch file in `src/db/seed-data/` (see `types.ts` for the shape),
then re-run `npm run db:seed`. Every tool needs genuinely unique `introCopy` and a real
`exampleInput`/`exampleOutput` pair — not variable-swapped filler. Run
`node scripts/validate-batches.mjs` to check counts, duplicate slugs, and `{input}` placeholders.

## Deploy

See [DEPLOYMENT.md](./DEPLOYMENT.md) for the full env var checklist, Stripe/Resend setup, and a
post-deploy verification checklist.

## Deliberately deferred

- Tier-2 (modifier) pages — don't generate until a parent tool proves search demand in Search Console.
- AdSense — apply once there's real traffic and content depth.
