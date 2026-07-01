# AI Content Transformation Hub — Project Brief

## What this is
A programmatic-SEO web app where each page offers one specific text transformation
(e.g. "turn an email into a professional-tone version," "turn meeting notes into
action items"). Traffic comes from long-tail search intent; monetization is
Google AdSense (pageviews), later a freemium tier.

## Stack
- Next.js (App Router), TypeScript
- Hosting: Vercel
- Database: Postgres (Supabase or Neon)
- LLM: user's own Anthropic/OpenAI API key, called server-side only from API routes — never exposed client-side
- Styling: Tailwind

## URL architecture
- `/transform` — hub page, links to all category pages
- `/transform/[category]` — category page (e.g. `/transform/email`)
- `/transform/[input]-to-[output]` — tier-1 core transformation page (~10 to start)
- `/transform/[input]-to-[output]/[modifier]` — tier-2 expansion page (industry/role variants), built ONLY after a tier-1 page proves it gets impressions in Search Console. Do not mass-generate these upfront — Google's helpful-content system penalizes templated near-duplicate pages.

## Database schema

```
transformations
  id, slug, input_type, output_type, category
  prompt_template          -- instruction sent to the LLM
  seo_title, seo_description, h1
  intro_copy                -- unique, human-quality, 150-300 words. Required per page.
  example_input, example_output   -- pre-generated, cached, shown to crawlers/first-time visitors (no API call)
  created_at

modifiers                    -- tier-2 rows, FK to transformations
  id, transformation_id, slug, extra_context
  unique_example_input, unique_example_output

usage_logs
  id, transformation_id, ip_hash, tokens_used, created_at
```

## Cost control (critical)
- Crawlers and first-time visitors see the cached `example_output`, not a live API call.
- LLM only fires when a user submits their own text.
- Rate-limit by IP (e.g. 5 free transforms/day) before requiring signup.
- Log tokens per transformation type to track cost vs. ad revenue per page.

## Page template (every transformation page)
1. H1 + one-sentence value prop
2. Textarea input + Transform button, above the fold
3. Output panel + copy button
4. Unique 150-300 word explainer (why/when to use this transformation)
5. Pre-filled example input → output
6. FAQ block (3-5 Q&As)
7. Internal links to 3-4 related transformations

## Launch set (first 10 tier-1 pages)
1. Email → Professional rewrite
2. Email → Concise rewrite
3. Paragraph → Bullet points
4. Notes → Action items
5. Resume bullet → Impact statement
6. Idea dump → Structured outline
7. Text → Simplified explanation
8. Text → Executive summary
9. LinkedIn post → Twitter/X thread
10. Job description → Resume bullet suggestions

## Build sequence
1. Scaffold Next.js app, DB schema, one working transformation page end-to-end (API route + UI + caching)
2. Replicate template across the 10 launch transformations with real, unique intro copy per page (not templated filler)
3. Build `/transform` hub + category pages, sitemap.xml, robots.txt
4. Submit to Search Console; wait for impression data before building any tier-2 pages
5. AdSense application once there's real traffic and content depth

## Non-negotiables
- Never expose the LLM API key client-side
- Every page's `intro_copy` must be genuinely unique, not a variable-swapped template
- No tier-2 (modifier) pages until the parent tier-1 page has proven search demand
