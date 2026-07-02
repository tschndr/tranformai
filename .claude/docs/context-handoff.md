# Rewrite Anything — Context Handoff

_Last updated: 2026-07-02. This is the source-of-truth handoff for continuing work on this project._

---

## Project overview

**Rewrite Anything** (`rewrite-anything.com`) is a programmatic-SEO web app: a hub of **334 single-purpose AI text-transformation tools**, each on its own page (e.g. "turn an email into a professional-tone version", "turn notes into action items"). Traffic strategy is long-tail search intent; monetization is a freemium paywall (free tier → prepaid credits → unlimited subscription), with AdSense deferred until there's real traffic.

- **Local path:** `C:\Users\schne\Downloads\tool-app`
- **Live URL:** https://rewrite-anything.com (also https://tranformai.vercel.app)
- **GitHub:** https://github.com/tschndr/tranformai (branch `main`)
- **Original spec:** `project-brief.md` (product intent, URL architecture, non-negotiables)
- **Deploy guide:** `DEPLOYMENT.md` · **Readme:** `README.md`

### Stack
- Next.js 16 (App Router) + TypeScript + Tailwind v4
- Postgres via **Neon** (serverless driver) + **Drizzle ORM**
- LLM: **Anthropic** (`@anthropic-ai/sdk`), server-side only. Default model `claude-haiku-4-5-20251001`.
- Auth: **Auth.js v5 (NextAuth)** with Drizzle adapter + **Resend** email magic links (database sessions)
- Payments: **Stripe** (subscriptions + one-time credit packs)
- Hosting: **Vercel** (project `troy-schneiders-projects/tranformai`)

---

## Current state (what's live and working)

Everything below is deployed and verified working end-to-end:

- ✅ **334 tools** seeded in Neon; browsable by category, searchable.
- ✅ **Live on Vercel** at the custom domain `rewrite-anything.com` with valid SSL.
- ✅ **Rebrand complete** — "TransformAI" → "Rewrite Anything" with official logo SVGs, logo-matched gradient, icon set, and a categories nav dropdown. Clean monochrome UI (black pill buttons, big tight headlines) + pink→purple→blue accents.
- ✅ **AI generations work** (Anthropic account funded ~$5; smoke test returns real output).
- ✅ **Paywall** — 2 free rewrites/day → prepaid credits → unlimited subscription. Tested: credit purchase + subscription + billing portal all confirmed via real Stripe test-mode checkout.
- ✅ **SEO** — metadata/title-template/OG/Twitter, per-page canonicals, FAQPage + BreadcrumbList + WebApplication JSON-LD, dynamic OG image, sitemap.xml + robots.txt.
- ✅ **Email sign-in** works (currently limited — see constraints).

### Deployment mechanics
- Push to `main` → Vercel auto-builds & deploys to production.
- **Pushing requires:** `git -c credential.helper=manager push origin main` (the global git credential helper is `cache`, which fails GitHub auth; the `manager` helper uses stored creds. GitHub user `tschndr`.)
- **Vercel CLI is installed and logged in as `tschndr`.** Useful: `vercel env ls production`, `vercel env add/rm <NAME> production`, `vercel ls tranformai`, `vercel redeploy <url>`, `vercel domains inspect rewrite-anything.com`, `vercel inspect <domain>`.
- Env-var changes **require a redeploy** to take effect. `vercel env pull` shows **empty values for Sensitive vars** even though runtime has them — do not trust it to read values.

### Production environment variables (all set in Vercel Production)
`DATABASE_URL`, `ANTHROPIC_API_KEY`, `ANTHROPIC_MODEL`, `IP_HASH_SALT`, `AUTH_SECRET`, `RESEND_API_KEY`, `EMAIL_FROM`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_PRICE_ID_MONTHLY`, `STRIPE_PRICE_ID_ANNUAL`, `STRIPE_PRICE_ID_CREDITS_SMALL/MEDIUM/LARGE`, `NEXT_PUBLIC_APP_URL` (= `https://rewrite-anything.com`).
Local dev uses `.env` (gitignored; contains real values). Off-Vercel hosts also need `AUTH_TRUST_HOST=true`.

---

## Key decisions

### Content
- **334 tools** = 33 from a user CSV (`batch-0`) + 300 generated across 6 category-grouped batches (`batch-1..6`, 50 each) + 1 hand-authored flagship. `batch-2` was written by hand after an agent hit its session limit.
- Tool definitions live in `src/db/seed-data/batch-0..6.ts` (typed `ToolSeed`), combined + slug-deduped by `src/db/seed-data/index.ts` (flagship first, wins conflicts).
- **Hard rule (from brief):** no variable-swapped template content — every tool needs genuinely unique `introCopy` + FAQ. Validate with `node scripts/validate-batches.mjs`.
- The brand name is **not** in any tool's DB content — only in site chrome — so rebrands don't require re-seeding.

### Paywall economics (chosen with the user)
Three tiers, checked **in order** in the transform API route:
1. **Subscription** → unlimited.
2. **Free** → **2 rewrites/day TOTAL across all tools** (not per-tool), keyed by user id (signed in) or hashed IP (anon), 24h rolling window.
3. **Credits** → signed-in users spend prepaid credits (atomic decrement, reserved before the LLM call, **refunded on failure**).
4. Else → HTTP `402` upgrade gate.

`usage_logs.source` (`free` | `credit` | `subscription`) marks how each generation was paid, so credit/subscription usage does **not** count against the free 2/day.

**Pricing:** subscription **$8/mo · $64/yr**; credit packs **100/$6 · 300/$15 · 1000/$40** (never expire; require an account). Cost basis ~$0.003–0.006/generation on Haiku 4.5, so credits clear API + Stripe fees comfortably.

### Design / brand
- Direction: **clean monochrome UI** (black pill buttons, generous whitespace, big tight-tracked headlines, two-tone statement text) inspired by a Twinkle.ai reference, with the **logo's pink→purple→blue gradient** (#F358E4 → #7D62DD → #3068D9) used for hero/accents.
- Official assets: `public/emblem.svg` (mark; also `src/app/icon.svg` favicon) and `public/wordmark.svg` (full lockup, white bg removed). `src/components/logo.tsx` renders the wordmark in header/footer and the emblem for icon-only spots.
- Icon set + category→icon mapper in `src/components/icons.tsx` (`CategoryIcon`).

### Infra / correctness decisions
- **DB client is build-safe:** `src/db/index.ts` falls back to a placeholder connection string when `DATABASE_URL` is absent (neon() throws on empty string at import; this broke the Vercel build until fixed).
- **Stripe client is lazy-init** (`getStripe()` in `src/lib/stripe.ts`) — the SDK throws on an empty key at import, which broke page-data collection until made lazy.
- **Stripe redirect URLs are derived from the request** (`src/lib/app-url.ts` reads `x-forwarded-host`), **not** from build-time `NEXT_PUBLIC_APP_URL` — that var was resolving to `localhost` in prod and sent post-checkout users to an unreachable localhost URL.
- `current_period_end` lives on the **subscription item** (`sub.items.data[0]`), not the subscription object, in the current Stripe SDK.
- Checkout buttons **surface API errors** instead of failing silently.
- Custom domain uses the **A-record method** (A `@`→`76.76.21.21`, CNAME `www`→`cname.vercel-dns.com`) at GoDaddy; nameservers stay GoDaddy, so `vercel domains inspect` shows a harmless nameserver-mismatch ☓.

---

## Open tasks / next steps

**None blocking — the product is live and fully functional.** Remaining items are optional and were paused pending the user's go-ahead:

1. **Resend domain verification (recommended next).** Currently `EMAIL_FROM` uses the shared `onboarding@resend.dev` sender, which **only delivers sign-in emails to the account owner's own address**. To let anyone sign in: verify `rewrite-anything.com` in Resend (add its DNS records at GoDaddy), then set `EMAIL_FROM=Rewrite Anything <auth@rewrite-anything.com>` in Vercel + redeploy.
2. **Stripe go-live.** Currently in **TEST mode** (no real money). To take real payments: create live products/prices/webhook by running `scripts/stripe-setup.mts` with a live `sk_live_…` key (it auto-detects mode), then swap the 7 `STRIPE_*` env vars in Vercel + redeploy. Also enable the Stripe **Customer Portal** in live mode (one dashboard click).
3. **Search Console.** Submit `https://rewrite-anything.com/sitemap.xml`; wait for impression data before building tier-2 (modifier) pages or applying for AdSense (per the brief).
4. **Legal pages.** Footer "Privacy" / "Terms" links currently point to `/` (placeholders) — write real pages before serious traffic/AdSense.
5. **Deferred by design:** tier-2 (modifier) pages — do **not** generate until a parent tool proves search demand; AdSense — apply after real traffic + content depth.

### Open questions / watch-items
- The user's **local machine may briefly show GoDaddy's old placeholder** due to DNS cache TTL — not a real issue; authoritative DNS + Google resolver already point to Vercel.
- No automated tests exist; verification is via `npm run build`, `npm run lint`, `npx tsc --noEmit`, and the `scripts/*.mts` smoke tests.

---

## Important technical notes / constraints

### Repo / tooling gotchas (this machine)
- **`.npmrc`** in the project sets `allow-scripts=` to override a global `~/.npmrc` (`allow-scripts=@higgsfield/cli`) that otherwise **breaks project-scoped `npm install`**. Any new Node project here hits the same error without that local override.
- **No Docker/Postgres locally.** To visually verify DB-driven pages without touching prod, historically we temporarily swapped `src/db/index.ts` to PGlite (`@electric-sql/pglite` + `drizzle-orm/pglite`) + `serverExternalPackages` in `next.config.ts`, seeded a `.pglite-data` dir, then reverted all three and uninstalled. **Simpler now:** local `.env` points at the real Neon DB, so `npm run dev` works directly (read-only rendering is safe).
- **Port 3000** is sometimes occupied by a stray node process; `.claude/launch.json` has `"autoPort": true` so the preview picks a free port.
- Git prints CRLF warnings on commit (harmless); commit with `git -c core.autocrlf=false` to keep line endings.

### Commands
- `npm run dev` — local dev server (reads `.env`)
- `npm run build` / `npm run lint` — CI checks (both must pass before deploy)
- `npm run db:push` — apply Drizzle schema to Neon · `npm run db:seed` — seed all 334 tools (idempotent, `onConflictDoNothing`)
- `npx tsx scripts/smoke-test.mts` — end-to-end DB + Anthropic check
- `npx tsx scripts/stripe-setup.mts` — create Stripe products/prices/webhook (test or live, auto-detected from key)
- `node scripts/validate-batches.mjs` — content integrity (counts, dup slugs, `{input}` placeholders)

### Architecture pointers
- **Schema:** `src/db/schema.ts` — `transformations`, `modifiers` (tier-2, unused), Auth.js tables (`user`/`account`/`session`/`verificationToken`), `subscriptions`, `credits`, `usage_logs` (has `source` column).
- **Paywall libs:** `src/lib/rate-limit.ts` (`checkDailyFreeLimit`), `src/lib/credits.ts` (atomic consume/add/get), `src/lib/subscription.ts` (`getActiveSubscription`).
- **LLM:** `src/lib/llm.ts` (`runTransformation`, `import "server-only"`). Prompt templates contain a literal `{input}` placeholder.
- **API routes:** `src/app/api/transform/[slug]/route.ts` (the paywall gate + LLM call + usage log), `src/app/api/stripe/{checkout,webhook,portal}/route.ts`, `src/app/api/auth/[...nextauth]/route.ts`.
- **Pages:** homepage `src/app/page.tsx`; tool page `src/app/transform/[slug]/page.tsx` (cached example shown so crawlers/first visits never trigger an LLM call); hub `src/app/transform/page.tsx`; category `src/app/transform/category/[category]/page.tsx`; `pricing`, `account`, `sign-in`, custom `not-found`.
- All pages are `force-dynamic` (per-request DB reads); `DATABASE_URL` must still be present at build (handled by the placeholder fallback).

### Cost control (per brief)
Crawlers and first-time visitors see the cached `example_output` from the DB — the LLM only fires when a user submits their own text. `usage_logs` records tokens per generation.
