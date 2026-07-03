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
- ✅ **Email sign-in works for all users** — Resend domain `rewrite-anything.com` is verified (SPF/DKIM at GoDaddy); sender is `Rewrite Anything <noreply@rewrite-anything.com>`. Confirmed with a live magic-link test.
- ✅ **Legal pages** — real `/privacy` and `/terms` (accurate to actual data practices: submitted text is never stored), linked from the footer and included in the sitemap. A **Terms + Privacy acknowledgment checkbox** is required at **sign-in** (`name="terms"`, client `required` + server-enforced via `formData.get("terms")` in the sign-in server action). Checkout has no separate checkbox — paying requires being signed in, so consent is already captured at sign-in. Optional future upgrade: Stripe's native `consent_collection.terms_of_service: "required"` at checkout once a ToS URL is set in the Stripe dashboard.
- ✅ **Favicon / icons** — emblem-based multi-resolution `favicon.ico` (16–256px, at `src/app/favicon.ico`) + macOS `public/emblem.icns`, generated from `public/emblem.svg` via `sharp` + `png2icons`.

### Deployment mechanics
- Push to `main` → Vercel auto-builds & deploys to production.
- **Pushing requires:** `git -c credential.helper=manager push origin main` (the global git credential helper is `cache`, which fails GitHub auth; the `manager` helper uses stored creds. GitHub user `tschndr`.)
- **Vercel CLI is installed and logged in as `tschndr`.** Useful: `vercel env ls production`, `vercel env add/rm <NAME> production`, `vercel ls tranformai`, `vercel redeploy <url>`, `vercel domains inspect rewrite-anything.com`, `vercel inspect <domain>`.
- Env-var changes **require a redeploy** to take effect. `vercel env pull` shows **empty values for Sensitive vars** even though runtime has them — do not trust it to read values.

### Production environment variables (all set in Vercel Production)
`DATABASE_URL`, `ANTHROPIC_API_KEY`, `ANTHROPIC_MODEL`, `IP_HASH_SALT`, `AUTH_SECRET`, `RESEND_API_KEY`, `EMAIL_FROM`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_PRICE_ID_MONTHLY`, `STRIPE_PRICE_ID_ANNUAL`, `STRIPE_PRICE_ID_CREDITS_SMALL/MEDIUM/LARGE`, `NEXT_PUBLIC_APP_URL` (= `https://rewrite-anything.com`), `EMAIL_FROM` (= `Rewrite Anything <noreply@rewrite-anything.com>` — swapped off the `onboarding@resend.dev` shared sender once the domain verified).
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
1. **Subscription** → unlimited, **premium model + longer inputs** (see below).
2. **Free** → **2 rewrites/day TOTAL across all tools** (not per-tool), keyed by user id (signed in) or hashed IP (anon), 24h rolling window.
3. **Credits** → signed-in users spend prepaid credits (atomic decrement, reserved before the LLM call, **refunded on failure**).
4. Else → HTTP `402` upgrade gate.

**Paid differentiation (the "why pay vs. free ChatGPT" wedge, added pre-Stripe-go-live):**
- **Model tier:** free + credits run the standard model (`ANTHROPIC_MODEL`, Haiku 4.5); **subscribers get a higher-quality model** (`ANTHROPIC_MODEL_PREMIUM`, defaults to `claude-sonnet-5`) with a larger `max_tokens`. Selected via `runTransformation(..., { premium })` in `src/lib/llm.ts`; the transform route passes `premium: source === "subscription"`. Margins have huge headroom (a subscriber's ~100 gens/mo cost well under $1 even on Sonnet). **Validate the premium model ID works on the Anthropic account before real subscribers exist (i.e., at Stripe go-live).** Env var is optional (code defaults) but can be set in Vercel to override.
- **Input limits:** free + credits capped at **4,000 chars**, subscribers **12,000** (`FREE_MAX_INPUT` / `PREMIUM_MAX_INPUT` in the transform route). A non-subscriber over 4,000 gets a `402` with `reason:"length"`; the client renders a conversion gate (View plans / Sign in). Pricing copy reflects both tiers.
- **Future paid expansions (noted, deferred until after Stripe):** saved history + brand-voice presets, batch/CSV mode, Chrome extension. Primary revenue for long-tail SEO traffic is still **AdSense** (most visitors won't subscribe).

`usage_logs.source` (`free` | `credit` | `subscription`) marks how each generation was paid, so credit/subscription usage does **not** count against the free 2/day.

**Pricing:** subscription **$8/mo · $80/yr** (annual = ~2 months free; tightened from $64 to recover margin); credit packs **100/$6 · 300/$15 · 1000/$40** (never expire; require an account). Cost basis ~$0.003–0.006/gen on Haiku (free/credits), ~$0.006–0.018/gen on Sonnet (subscribers), so both clear API + Stripe fees comfortably. **Fair-use cap:** "unlimited" subscriptions are capped at **200 rewrites/day** (`SUBSCRIBER_FAIR_USE_DAILY` in `src/lib/rate-limit.ts`, `checkSubscriberFairUse`) — real users never hit it; bounds abuse/worst-case Sonnet cost; over-limit returns `429`. Terms note fair-use. **Prices held at $8/$80 pending launch/conversion data — revisit raising for new users post-launch (grandfather early adopters).** Annual amount also updated in `scripts/stripe-setup.mts` (8000 cents) so the live products get $80.

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

**None blocking — the product is live and fully functional.** ✅ **Done since last handoff:** Resend domain verification (email now works for everyone), and real Privacy/Terms pages. Current roadmap (being worked through in order):

1. **Stripe go-live.** Currently in **TEST mode** (no real money). To take real payments: create live products/prices/webhook by running `scripts/stripe-setup.mts` with a live `sk_live_…` key (it auto-detects mode), then swap the 7 `STRIPE_*` env vars in Vercel + redeploy. Also enable the Stripe **Customer Portal** in live mode (one dashboard click). *Needs a live key from the user.*
2. **Search Console.** Verify ownership + submit `https://rewrite-anything.com/sitemap.xml`; wait for impression data before building tier-2 (modifier) pages or applying for AdSense (per the brief). *Needs the user's Google account.*
3. **Google AdSense.** Now unblocked (legal pages exist). Apply, add account/verification + `ads.txt` + ad slots. Gated on real traffic + content depth per the brief. *Needs the user's AdSense account.*
4. **SEO / search-potential optimization.** Pure code — internal linking, structured-data coverage, metadata quality, LCP/performance, crawlability, content depth. Can be driven solo.
5. **Sponsorship monetization.** Scope to confirm with the user (direct sponsor placements / sponsored tool slots / GitHub-Sponsors-style vs. ad-network sponsorship), then build placement UI + management path.
6. **Deferred by design:** tier-2 (modifier) pages — do **not** generate until a parent tool proves search demand.

Contact-email note: the legal pages reference `support@rewrite-anything.com`; set up GoDaddy email forwarding for it so mail is actually received. Governing-law clause in `/terms` is generic ("United States and the state in which we operate") — name a specific state if desired.

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
