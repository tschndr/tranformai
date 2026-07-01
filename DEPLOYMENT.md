# Deployment Guide — TransformAI

This app is a Next.js (App Router) programmatic-SEO site with 334 AI text-transformation
tools, email magic-link auth (Auth.js), and a Stripe subscription paywall (3 free
generations/day per tool, then unlimited for subscribers).

## 1. Prerequisites / accounts

- **Neon** (or any Postgres) — database
- **Anthropic** — LLM API key
- **Resend** — transactional email for magic-link sign-in (needs a verified sending domain)
- **Stripe** — subscription billing
- **Vercel** (recommended host) — or any Node host that supports Next.js

## 2. Environment variables

Copy `.env.example` to `.env.local` (local) and set the same values in your host's
environment (production). All of these are **server-side secrets** except
`NEXT_PUBLIC_APP_URL`.

| Variable | Purpose |
| --- | --- |
| `DATABASE_URL` | Neon/Postgres connection string (pooled URL for serverless) |
| `ANTHROPIC_API_KEY` | Anthropic key, used server-side only in `src/lib/llm.ts` |
| `ANTHROPIC_MODEL` | Optional; defaults to `claude-haiku-4-5-20251001` |
| `IP_HASH_SALT` | Random string; salts hashed IPs for anonymous rate limiting |
| `AUTH_SECRET` | Auth.js session secret — generate with `npx auth secret` |
| `RESEND_API_KEY` | Resend API key for sending magic-link emails |
| `EMAIL_FROM` | From address, e.g. `TransformAI <auth@yourdomain.com>` (domain must be verified in Resend) |
| `STRIPE_SECRET_KEY` | Stripe secret key (`sk_live_...` in prod) |
| `STRIPE_WEBHOOK_SECRET` | Signing secret from the Stripe webhook endpoint (`whsec_...`) |
| `STRIPE_PRICE_ID_MONTHLY` | Price ID for the monthly plan |
| `STRIPE_PRICE_ID_ANNUAL` | Price ID for the annual plan |
| `NEXT_PUBLIC_APP_URL` | Full public URL, e.g. `https://yourdomain.com` (used for Stripe redirect/return URLs and sitemap) |

If you deploy somewhere other than Vercel, also set `AUTH_TRUST_HOST=true` so Auth.js
trusts the host header.

## 3. Database setup

```bash
npm install
npm run db:push     # creates all tables (transformations, auth tables, subscriptions, usage_logs)
npm run db:seed     # inserts all 334 tools (idempotent — safe to re-run)
```

`db:push` applies the Drizzle schema in `src/db/schema.ts` directly. For versioned
migrations instead, use `npm run db:generate` and apply the SQL in `drizzle/`.

## 4. Stripe setup

1. In the Stripe dashboard, create a **Product** ("TransformAI Unlimited") with two
   recurring **Prices**: one monthly, one annual. Copy each price ID into
   `STRIPE_PRICE_ID_MONTHLY` / `STRIPE_PRICE_ID_ANNUAL`.
2. Create a **webhook endpoint** pointing at `https://yourdomain.com/api/stripe/webhook`,
   subscribed to:
   - `checkout.session.completed`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   Copy its signing secret into `STRIPE_WEBHOOK_SECRET`.
3. Enable the **Customer Portal** in Stripe billing settings (the `/account` page links to
   it for managing/cancelling subscriptions).

Local webhook testing: `stripe listen --forward-to localhost:3000/api/stripe/webhook`.

## 5. Resend setup

1. Verify your sending domain in Resend.
2. Set `RESEND_API_KEY` and `EMAIL_FROM` (using an address on the verified domain).

Until a domain is verified you can test with Resend's `onboarding@resend.dev` sender, but
deliverability is limited — do not ship to production that way.

## 6. Deploy

On Vercel: import the repo, add all environment variables, and deploy. The build command
is the default `next build`. Every page renders dynamically (per-request DB reads), so no
build-time database access is required — but `DATABASE_URL` must still be present at build.

## 7. Post-deploy checklist

- [ ] `https://yourdomain.com/` loads; hero + sections render
- [ ] `/transform` shows the category grid (38 categories)
- [ ] A tool page (e.g. `/transform/email-to-professional-rewrite`) loads with its cached example
- [ ] Submitting the form returns a real transformation (confirms `ANTHROPIC_API_KEY`)
- [ ] After 3 submissions on one tool while signed out, the 4th shows the upgrade gate
- [ ] `/sign-in` sends a magic-link email that logs you in
- [ ] `/pricing` → subscribe runs a real Stripe Checkout; on success `/account` shows "Unlimited"
- [ ] A subscribed user is no longer rate-limited
- [ ] `/sitemap.xml` lists all tool + category URLs; `/robots.txt` references it
- [ ] Submit the sitemap in Google Search Console

## 8. Notes on cost control (per the original brief)

- Crawlers and first-time visitors see the cached `example_output` from the DB — no LLM call
  fires until a user submits their own text.
- Anonymous users are limited to 3 generations/day per tool (hashed IP); signed-in free users
  by user id; subscribers are unlimited.
- `usage_logs` records tokens per transformation so you can track cost vs. ad/subscription
  revenue per tool.

## 9. Not yet built (intentionally deferred)

- Tier-2 (modifier) pages — per the brief, don't generate these until a parent tool proves
  search demand in Search Console.
- AdSense — apply once there's real traffic and content depth.
