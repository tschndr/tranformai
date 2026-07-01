import type { ToolSeed } from "./types";

export const batch3: ToolSeed[] = [
  // ---------- AD COPY ----------
  {
    slug: "product-features-to-ad-copy",
    category: "ad-copy",
    inputType: "product features",
    outputType: "ad copy",
    promptTemplate:
      "Turn the following list of product features into persuasive ad copy for a paid social ad. Lead with the biggest benefit, keep it punchy, and end with a clear call to action. Return only the ad copy, no preamble.\n\nProduct features:\n{input}",
    seoTitle: "Free Product Features to Ad Copy Generator",
    seoDescription:
      "Paste in a raw feature list and get back persuasive, benefit-led ad copy ready for paid social. Free, no signup required.",
    h1: "Turn Product Features Into Ad Copy",
    introCopy:
      "Most product teams write feature lists, not ads — dry, technical, ordered by build sequence rather than what actually sells. This tool takes that raw list and rewrites it as ad copy that leads with the single biggest customer benefit and folds the rest in as supporting detail. It's meant for the moment you have a spec sheet or changelog and need something you could run as a Facebook or Instagram ad by end of day, not a polished brand campaign requiring five rounds of review.",
    exampleInput:
      "Noise-cancelling headphones, 40-hour battery life, foldable design, USB-C fast charging, built-in mic for calls.",
    exampleOutput:
      "Silence the world. Power through your week.\n\nOur headphones deliver true noise cancellation with 40 hours of battery — so you're never scrambling for a charger. Fold them flat, toss them in your bag, and take calls crystal-clear with the built-in mic.\n\nShop now and hear the difference.",
    faq: [
      {
        question: "Does this work for B2B products, not just consumer goods?",
        answer:
          "Yes. Feed it a B2B feature list and it will still lead with the strongest benefit, just phrased around business outcomes like time saved or risk reduced rather than lifestyle appeal.",
      },
      {
        question: "Will it invent features I didn't list?",
        answer:
          "No — it only reorganizes and reframes what you give it. If a feature isn't in your input, it won't appear in the output.",
      },
      {
        question: "Can I specify which platform the ad is for?",
        answer:
          "Paste a note like \"for Instagram\" or \"for LinkedIn\" alongside your features and the tool will adjust tone and length accordingly, though for strict platform formatting you may prefer the dedicated platform adapter tool.",
      },
    ],
  },
  {
    slug: "ad-copy-variant-generator",
    category: "ad-copy",
    inputType: "ad copy",
    outputType: "ad copy variants",
    promptTemplate:
      "Generate 5 distinct variants of the following ad copy, each with a different angle or hook (e.g. urgency, social proof, curiosity, benefit-driven, humor) while keeping the same core offer. Return only the 5 variants, numbered, no preamble.\n\nAd copy:\n{input}",
    seoTitle: "Free Ad Copy Variant Generator — 5 Angles Fast",
    seoDescription:
      "Turn one ad into five distinct angles — urgency, social proof, curiosity, and more — for faster A/B testing. Free tool.",
    h1: "Generate Ad Copy Variants",
    introCopy:
      "A single ad, no matter how good, is a single bet on what will resonate. This tool takes one piece of ad copy and produces five variants built on different psychological angles — urgency, social proof, curiosity, straightforward benefit, and a lighter humorous take — so you have real creative diversity to test rather than five versions of the same idea with synonyms swapped. It's built for media buyers who need a fresh test set without waiting on a copywriter, especially when an existing ad's performance has started to plateau.",
    exampleInput:
      "Get 20% off your first order of our organic skincare line. Free shipping on orders over $40.",
    exampleOutput:
      "1. (Urgency) 20% off ends tonight — your skin (and wallet) will thank you.\n2. (Social proof) Over 50,000 customers switched to organic skincare. Get 20% off your first order.\n3. (Curiosity) What's actually in your skincare? Find out — first order 20% off.\n4. (Benefit) Clearer skin, cleaner ingredients. 20% off your first order, free shipping over $40.\n5. (Humor) Your skin called. It wants organic. 20% off first orders, no drama.",
    faq: [
      {
        question: "How is this different from the A/B variant generator tool?",
        answer:
          "This tool varies the psychological angle (urgency vs. social proof vs. humor, etc.) so each version feels like a different creative strategy. The A/B variant tool instead produces close variations of the same angle for more controlled split testing.",
      },
      {
        question: "Can I get more than 5 variants?",
        answer:
          "The tool is tuned to output 5 by default since that covers the most common testing angles without diluting quality. Run it twice on the same input if you want additional options.",
      },
      {
        question: "Will each variant keep the same offer details?",
        answer:
          "Yes — the discount, price, or promotion in your original copy is preserved exactly across all five variants; only the framing and hook change.",
      },
    ],
  },
  {
    slug: "ad-headline-generator",
    category: "ad-copy",
    inputType: "product description",
    outputType: "ad headlines",
    promptTemplate:
      "Write 8 short, scroll-stopping ad headlines (under 8 words each) based on the following product description. Vary the style across the set. Return only the numbered list of headlines, no preamble.\n\nProduct description:\n{input}",
    seoTitle: "Free Ad Headline Generator — Scroll-Stopping Hooks",
    seoDescription:
      "Generate 8 short, punchy ad headlines from a product description in seconds. Free, no signup, no fluff.",
    h1: "Generate Ad Headlines",
    introCopy:
      "The headline is the only part of an ad guaranteed to be read, which is why it carries more weight than every other line combined. This tool takes a product description and compresses it into eight short headline options — each under eight words, each trying a different hook, so you're not stuck staring at a blank line trying to out-clever yourself. It's meant for the top-of-funnel moment: display ads, search headlines, or the bold text above a social post, not full-body copy.",
    exampleInput:
      "A meal-prep delivery service that sends fully cooked, chef-designed dinners in recyclable packaging, ready in 3 minutes.",
    exampleOutput:
      "1. Dinner, solved. 3 minutes flat.\n2. Chef-made meals, zero cooking.\n3. Recyclable packaging. Real chef flavor.\n4. Skip the stove tonight.\n5. Your chef just moved in.\n6. 3 minutes to a real dinner.\n7. Cooked by chefs, not you.\n8. Meal prep, minus the prep.",
    faq: [
      {
        question: "Is 8 words really a hard limit?",
        answer:
          "The tool aims for under 8 words per headline since that's the range most ad platforms display in full without truncation, though a headline may run slightly over if it reads much better that way.",
      },
      {
        question: "Can I use these for Google Search ads specifically?",
        answer:
          "Yes, these work well as Search headline assets — just double check character counts against the specific platform's limit since Google Search headlines cap at 30 characters.",
      },
      {
        question: "Do the headlines include a call to action?",
        answer:
          "Some do and some don't by design — headlines are meant to stop the scroll, and the CTA typically lives in the body copy or button, which this tool doesn't generate.",
      },
    ],
  },
  {
    slug: "ad-copy-shortener",
    category: "ad-copy",
    inputType: "long ad copy",
    outputType: "short ad copy",
    promptTemplate:
      "Condense the following ad copy down to under 125 characters while preserving the core offer and call to action. Return only the shortened copy, no preamble.\n\nAd copy:\n{input}",
    seoTitle: "Free Ad Copy Shortener — Fit Any Character Limit",
    seoDescription:
      "Cut long ad copy down to under 125 characters without losing the offer or CTA. Free tool for tight ad platform limits.",
    h1: "Shorten Ad Copy",
    introCopy:
      "Ad platforms don't care how good your copy is if it doesn't fit — Meta truncates primary text, Google Search caps descriptions, and a headline that wraps to a second line loses impact. This tool takes copy that's grown too long, usually after a round of edits where everyone added \"just one more sentence,\" and compresses it back under 125 characters while keeping the actual offer and the call to action intact. It's a fix for the specific problem of good copy that no longer fits its box, not a general rewriting tool.",
    exampleInput:
      "Are you tired of spending hours meal planning every single week? Our new app creates a personalized weekly meal plan based on your preferences, dietary restrictions, and what's already in your fridge, saving you time and reducing food waste. Try it free for 14 days.",
    exampleOutput:
      "Stop meal planning the hard way. Personalized weekly plans based on your fridge. Try free for 14 days.",
    faq: [
      {
        question: "What happens if the copy can't be cut to fit and still make sense?",
        answer:
          "The tool prioritizes keeping the offer and CTA intact over hitting the character count exactly, so in rare cases the output may run slightly over 125 characters rather than becoming incoherent.",
      },
      {
        question: "Does it work for headline limits too, like 30 characters?",
        answer:
          "It's calibrated for the common ~125-character body copy limit. For very tight headline limits, run the output through again and mention the specific character count you need.",
      },
      {
        question: "Will it remove the discount or price if that's what's making it long?",
        answer:
          "No — specific numbers like prices, percentages, and deadlines are treated as essential and are kept even if generic descriptive language has to be cut instead.",
      },
    ],
  },
  {
    slug: "benefit-to-ad-copy",
    category: "ad-copy",
    inputType: "customer benefit",
    outputType: "ad copy",
    promptTemplate:
      "Take the following single customer benefit and expand it into a full short ad (2-3 sentences plus a call to action) that makes this one benefit feel urgent and desirable. Return only the ad copy, no preamble.\n\nBenefit:\n{input}",
    seoTitle: "Free Benefit-to-Ad-Copy Generator | One Benefit, Full Ad",
    seoDescription:
      "Turn a single customer benefit into a complete, urgent ad with a call to action. Free, fast, no signup.",
    h1: "Turn a Benefit Into Ad Copy",
    introCopy:
      "Sometimes the hardest part of writing an ad isn't the polish, it's starting from nothing more than a one-line benefit a founder mentioned in passing — \"it saves people about 5 hours a week.\" This tool takes exactly that kind of single-sentence input and builds it out into a complete short ad, adding the emotional stakes and a call to action around that one core benefit rather than trying to cram in every feature. Use it when you're validating a new positioning angle and want to see how a single benefit performs as a standalone ad before investing in a full campaign.",
    exampleInput: "Saves small business owners about 5 hours a week on invoicing.",
    exampleOutput:
      "5 hours a week. That's what our invoicing tool gives back to small business owners — no more chasing payments or formatting spreadsheets at midnight. Automate it once, get your time back every week after.\n\nStart your free trial today.",
    faq: [
      {
        question: "What if I have more than one benefit to include?",
        answer:
          "This tool is built to go deep on a single benefit rather than juggling several. If you have multiple benefits, the product-features-to-ad-copy tool is a better fit since it's designed to prioritize and blend a list.",
      },
      {
        question: "Can the tone be adjusted, like more playful or more serious?",
        answer:
          "Add a tone note to your input, such as \"benefit: saves 5 hours a week, keep it playful,\" and the ad will be written accordingly.",
      },
      {
        question: "Is this good for testing which benefit resonates most with an audience?",
        answer:
          "Yes — a common workflow is running your top 3-4 candidate benefits through this tool separately to get standalone ads for each, then A/B testing them against each other.",
      },
    ],
  },
  {
    slug: "ad-copy-platform-adapter",
    category: "ad-copy",
    inputType: "ad copy",
    outputType: "platform-specific ad copy",
    promptTemplate:
      "Rewrite the following ad copy three times, adapted for: (1) Facebook/Instagram feed, (2) LinkedIn, and (3) Google Search ad description. Match the tone, length, and conventions typical of each platform. Label each version clearly. Return only the three versions, no preamble.\n\nAd copy:\n{input}",
    seoTitle: "Free Ad Copy Platform Adapter — FB, LinkedIn, Google",
    seoDescription:
      "Adapt one piece of ad copy for Facebook, LinkedIn, and Google Search automatically. Free, matches each platform's tone and length.",
    h1: "Adapt Ad Copy Across Platforms",
    introCopy:
      "Copy that crushes it on Instagram usually falls flat on LinkedIn, and Google Search doesn't even give you room for a hook — it wants a direct, keyword-relevant description. This tool takes one piece of ad copy and rewrites it three ways: casual and scroll-friendly for Facebook/Instagram, more professional and outcome-focused for LinkedIn, and tightly compressed and literal for Google Search. It exists for the run-a-multi-channel-campaign-from-one-brief workflow, so you write the core message once and let the tool handle platform-native adaptation instead of manually rewriting for each channel.",
    exampleInput:
      "Our project management tool helps remote teams stay aligned with real-time task tracking and automated status updates. Try it free for 30 days.",
    exampleOutput:
      "Facebook/Instagram: Remote team chaos? Not anymore 👋 Real-time task tracking + automatic status updates so nobody's left guessing. Try it free for 30 days.\n\nLinkedIn: Distributed teams need visibility, not more meetings. Our platform delivers real-time task tracking and automated status updates so alignment happens without the check-in calls. Start your free 30-day trial.\n\nGoogle Search: Real-time task tracking for remote teams. Automated status updates. Free 30-day trial — no credit card required.",
    faq: [
      {
        question: "Can it also adapt for TikTok or X?",
        answer:
          "The tool is currently tuned specifically for Facebook/Instagram, LinkedIn, and Google Search since those cover the most common paid channels with distinctly different conventions. You can paste the Facebook/Instagram output into another tool pass and ask for a TikTok-style rewrite manually if needed.",
      },
      {
        question: "Does the Google Search version respect character limits?",
        answer:
          "It targets the roughly 90-character description limit typical of Google Search ads, but always verify against the current limit in Google Ads before publishing.",
      },
      {
        question: "Will the offer stay consistent across all three versions?",
        answer:
          "Yes, the core offer and any numbers (price, discount, trial length) are preserved exactly in every version — only tone, structure, and length adapt to the platform.",
      },
    ],
  },
  {
    slug: "ad-copy-cta-generator",
    category: "ad-copy",
    inputType: "ad copy",
    outputType: "call-to-action options",
    promptTemplate:
      "Based on the following ad copy, generate 8 different call-to-action phrases that would fit as a button or closing line, ranging from direct/transactional to soft/low-commitment. Return only the numbered list, no preamble.\n\nAd copy:\n{input}",
    seoTitle: "Free Ad CTA Generator — 8 Call-to-Action Options",
    seoDescription:
      "Get 8 call-to-action phrases matched to your ad copy, from direct to low-commitment. Free tool for testing button text.",
    h1: "Generate Ad Calls to Action",
    introCopy:
      "\"Learn More\" is the default because it's safe, not because it converts best — and most advertisers never test past it. This tool reads your ad copy and generates eight CTA options spanning the full commitment spectrum, from direct and transactional (\"Buy Now\", \"Start My Trial\") down to soft, low-friction options (\"See How It Works\", \"Peek Inside\") appropriate for colder audiences. It's built for the specific job of button-text testing, which is a smaller and more overlooked lever than headline or body copy but often moves click-through rate meaningfully on its own.",
    exampleInput:
      "Our budgeting app connects to your bank and automatically categorizes every purchase, so you always know where your money goes.",
    exampleOutput:
      "1. Start Budgeting Free\n2. Connect Your Bank\n3. See Your Spending\n4. Get the App\n5. Try It Free\n6. Take Control of Your Money\n7. See How It Works\n8. Peek at Your Spending Habits",
    faq: [
      {
        question: "Should I use the most direct CTA or the softest one?",
        answer:
          "It depends on funnel stage — direct CTAs like \"Buy Now\" work better on warm, retargeting audiences, while softer CTAs like \"See How It Works\" tend to perform better on cold, top-of-funnel traffic.",
      },
      {
        question: "Are these meant for buttons or for the last line of the ad text?",
        answer:
          "Both — most are short enough to work as a button label, and you can also drop any of them as the closing line of your ad copy.",
      },
      {
        question: "Can I request CTAs specific to a B2B sales cycle, like requesting a demo?",
        answer:
          "Yes, add context like \"this is B2B, prefer demo requests over purchases\" to your input and the generated CTAs will lean toward options like \"Book a Demo\" or \"Talk to Sales.\"",
      },
    ],
  },
  {
    slug: "ad-copy-tone-shifter",
    category: "ad-copy",
    inputType: "ad copy",
    outputType: "re-toned ad copy",
    promptTemplate:
      "Rewrite the following ad copy in a more {input}",
    seoTitle: "Free Ad Copy Tone Shifter — Rewrite the Vibe",
    seoDescription:
      "Rewrite existing ad copy in a new tone — bolder, warmer, funnier, more formal — while keeping the offer intact. Free tool.",
    h1: "Shift the Tone of Ad Copy",
    introCopy:
      "The same offer can be sold a dozen different ways depending on voice — playful for a younger audience, matter-of-fact for a professional one, bold and confident for a challenger brand. This tool exists for when your ad copy's substance is right but the voice is off for the audience or channel you're now targeting. Unlike the platform adapter, which changes format and length for a specific channel, this tool changes only the emotional register — same message, same length roughly, different personality — which makes it useful when repurposing copy for a different segment of the same campaign.",
    exampleInput:
      "playful and irreverent tone: Our accounting software automatically tracks expenses and generates tax-ready reports, saving business owners hours every month.",
    exampleOutput:
      "Tax season used to make us want to scream into a spreadsheet. Not anymore. Our accounting software tracks every expense and spits out tax-ready reports while you do literally anything else with your time. You're welcome.",
    faq: [
      {
        question: "What tones can I ask for?",
        answer:
          "Almost anything expressible in a few words works — playful, luxury, urgent, warm and reassuring, blunt and no-nonsense, formal and corporate. State it directly at the start of your input.",
      },
      {
        question: "Will the offer details change when the tone changes?",
        answer:
          "No — prices, numbers, and the core call to action stay the same. Only word choice, sentence rhythm, and emotional framing shift.",
      },
      {
        question: "Is this the same as the sales-email tone softener tool?",
        answer:
          "No, that tool is built specifically for one-to-one sales emails and softens pushy language for outreach. This one is for ad copy and can shift toward bolder or louder tones, not just softer ones.",
      },
    ],
  },
  {
    slug: "competitor-comparison-ad-copy",
    category: "ad-copy",
    inputType: "product vs. competitor notes",
    outputType: "comparison ad copy",
    promptTemplate:
      "Using the following notes comparing our product to a competitor, write ad copy that highlights our advantages without directly disparaging the competitor by name. Keep it factual and confident. Return only the ad copy, no preamble.\n\nComparison notes:\n{input}",
    seoTitle: "Free Competitor Comparison Ad Copy Generator",
    seoDescription:
      "Turn rough competitive notes into confident, compliant comparison ad copy that highlights your edge. Free tool.",
    h1: "Write Competitor Comparison Ad Copy",
    introCopy:
      "Comparison ads convert well because they answer the question a shopper is already asking — \"why this one and not the other one?\" — but they're also the easiest ad type to get legally or tonally wrong by naming a competitor and trashing them. This tool takes your raw comparison notes, usually a scrappy list like \"we're cheaper, they don't have 24/7 support, our onboarding is faster,\" and turns them into confident ad copy that highlights your advantages on the merits without disparaging language, so the output is closer to ad-platform-compliant out of the gate.",
    exampleInput:
      "We cost $29/mo vs their $49/mo. We offer live chat support 24/7, they only do email support with 48-hour response. Our setup takes 10 minutes, theirs takes a full onboarding call.",
    exampleOutput:
      "Why pay more for less? Get full-featured project management for $29/mo — not $49. Get real answers from real humans on live chat, 24/7, instead of waiting two days for an email reply. And you'll be up and running in 10 minutes, no onboarding call required.\n\nSwitch and see the difference.",
    faq: [
      {
        question: "Will it name my competitor directly?",
        answer:
          "No — the prompt is designed to highlight your advantages on the merits without naming or disparaging a specific competitor, which keeps the output safer across most ad platform policies.",
      },
      {
        question: "What if I only have pricing to compare, not features?",
        answer:
          "That's enough to work with — paste just the pricing difference and the tool will build ad copy around value-for-money positioning.",
      },
      {
        question: "Can this be used for a landing page instead of an ad?",
        answer:
          "The output is written in ad-length copy, but the comparison framing works well as an opening section for a landing page too — you'd just want to expand it with more detail below.",
      },
    ],
  },
  {
    slug: "ad-copy-a-b-variant-generator",
    category: "ad-copy",
    inputType: "ad copy",
    outputType: "A/B test variants",
    promptTemplate:
      "Create 3 tightly controlled A/B test variants of the following ad copy. Change only one variable at a time across the set (e.g. variant 1 changes only the headline, variant 2 changes only the CTA, variant 3 changes only the opening line), keeping everything else identical to the original. Label what changed in each. Return only the 3 variants, no preamble.\n\nAd copy:\n{input}",
    seoTitle: "Free A/B Ad Copy Variant Generator — Isolate Variables",
    seoDescription:
      "Generate controlled A/B test variants that change one element at a time, so you know exactly what moved the needle. Free tool.",
    h1: "Generate A/B Test Ad Variants",
    introCopy:
      "Real A/B testing requires isolating a single variable, but most \"variant generators\" just produce three unrelated rewrites that make it impossible to know what actually caused a performance difference. This tool does the opposite of the general variant generator: it keeps your ad copy almost entirely fixed and changes exactly one element per variant — the headline in one, the CTA in another, the opening line in a third — and labels what changed. It's built for media buyers running disciplined split tests, not for brainstorming new creative directions.",
    exampleInput:
      "Stop losing track of receipts. Our expense app scans and organizes them automatically. Try it free.",
    exampleOutput:
      "Variant 1 (headline changed): Never lose a receipt again. Our expense app scans and organizes them automatically. Try it free.\n\nVariant 2 (CTA changed): Stop losing track of receipts. Our expense app scans and organizes them automatically. Get started now.\n\nVariant 3 (opening line changed): Receipts everywhere? Our expense app scans and organizes them automatically. Try it free.",
    faq: [
      {
        question: "How is this different from the general ad copy variant generator?",
        answer:
          "The general variant generator changes the whole angle (urgency vs. humor vs. social proof) for creative exploration. This tool deliberately holds everything constant except one labeled element, which is what proper A/B testing requires.",
      },
      {
        question: "Why does it label what changed in each variant?",
        answer:
          "So you can track results back to a specific variable in your ad platform's reporting instead of guessing which change drove a performance difference.",
      },
      {
        question: "Can I test more than 3 variables at once?",
        answer:
          "You can run the tool again on the winning variant to layer in a second round of single-variable testing, but testing more than one variable per round defeats the purpose of a clean A/B test.",
      },
    ],
  },

  // ---------- PRODUCT DESCRIPTION ----------
  {
    slug: "features-to-product-description",
    category: "product-description",
    inputType: "product features",
    outputType: "product description",
    promptTemplate:
      "Write a compelling e-commerce product description (100-150 words) based on the following list of features. Focus on benefits, use natural persuasive language, and avoid sounding like a spec sheet. Return only the description, no preamble.\n\nFeatures:\n{input}",
    seoTitle: "Free Features to Product Description Generator",
    seoDescription:
      "Turn a raw feature list into a persuasive 100-150 word product description. Free, instant, no signup required.",
    h1: "Turn Features Into a Product Description",
    introCopy:
      "Feature lists are what engineering hands off and what shoppers never want to read on their own. This tool is the general-purpose starting point for that handoff: give it a bullet list of specs and features, and it writes a natural, benefit-forward product description in the 100-150 word range most e-commerce product pages expect. It's the tool to reach for when a product page doesn't exist yet at all, as opposed to the shortener or SEO-optimizer tools, which assume a description already exists and needs to be adjusted.",
    exampleInput:
      "Stainless steel water bottle, 24oz, double-wall vacuum insulation, keeps drinks cold 24 hours or hot 12 hours, leak-proof lid, fits most cup holders.",
    exampleOutput:
      "Meet the water bottle that keeps up with you. Double-wall vacuum insulation means your drinks stay ice-cold for 24 hours or steaming hot for 12 — whether you're on a trail at dawn or stuck in back-to-back meetings. The 24oz stainless steel body is built to last, the leak-proof lid means your bag stays dry, and the slim profile fits right into your car's cup holder. It's the kind of everyday gear you stop thinking about because it just works.",
    faq: [
      {
        question: "Does the output follow a fixed word count exactly?",
        answer:
          "It targets 100-150 words, which fits most e-commerce templates, but exact length can vary slightly depending on how many features you provide.",
      },
      {
        question: "Can I use this for B2B or industrial products, not just consumer goods?",
        answer:
          "Yes — feed it technical features and it will still translate them into benefit language, though for highly technical buyers you may want to keep some spec details verbatim alongside the generated copy.",
      },
      {
        question: "What if my features list is very short, like just 2 items?",
        answer:
          "The tool will still generate a full description, but with more features to work with it can build a richer, less repetitive result — so add as much detail as you have.",
      },
    ],
  },
  {
    slug: "product-description-shortener",
    category: "product-description",
    inputType: "long product description",
    outputType: "short product description",
    promptTemplate:
      "Condense the following product description down to 2-3 concise sentences, keeping only the most compelling selling points. Return only the shortened description, no preamble.\n\nProduct description:\n{input}",
    seoTitle: "Free Product Description Shortener Tool",
    seoDescription:
      "Cut a long product description down to 2-3 punchy sentences for mobile, thumbnails, or category pages. Free and instant.",
    h1: "Shorten a Product Description",
    introCopy:
      "The full product description you wrote for the main page is too long for a category grid, a search result snippet, or a mobile card view where space is measured in characters, not paragraphs. This tool trims a long description down to 2-3 sentences that keep only the strongest selling points, dropping secondary details that matter on the full page but just create clutter in a smaller context. Use it any time you need the same product represented in a tighter space without writing an entirely new description from scratch.",
    exampleInput:
      "Our ergonomic office chair is designed with your spine in mind. It features adjustable lumbar support that moves with you throughout the day, breathable mesh backing to keep you cool during long work sessions, and a fully adjustable armrest system that adapts to any desk height. The seat cushion uses high-density memory foam that retains its shape even after years of daily use, and the 5-star base with smooth-rolling casters lets you move freely without damaging your floors. Backed by a 10-year warranty, this chair is an investment in your comfort and productivity.",
    exampleOutput:
      "An ergonomic office chair with adjustable lumbar support, breathable mesh, and memory foam that holds its shape for years. Backed by a 10-year warranty.",
    faq: [
      {
        question: "Will it keep the warranty or guarantee information?",
        answer:
          "If a warranty or guarantee is one of the strongest selling points in your original text, the tool will typically preserve it since that kind of trust signal is high-value even in a short version.",
      },
      {
        question: "How short can I ask it to go?",
        answer:
          "It's tuned for 2-3 sentences by default, which works well for category pages and search snippets. If you need a single line, the product-to-social-caption tool is a better fit.",
      },
      {
        question: "Is this good for meta description use on the product page?",
        answer:
          "It can work as a starting point, but for search-engine-specific optimization with keyword targeting, the SEO optimizer tool is purpose-built for that use case.",
      },
    ],
  },
  {
    slug: "product-description-seo-optimizer",
    category: "product-description",
    inputType: "product description",
    outputType: "SEO-optimized description",
    promptTemplate:
      "Rewrite the following product description to be SEO-optimized: naturally incorporate likely search keywords a shopper would use, include a strong opening sentence for search snippets, and keep it scannable with the product's key selling points. Do not keyword-stuff. Return only the rewritten description, no preamble.\n\nProduct description:\n{input}",
    seoTitle: "Free SEO Product Description Optimizer",
    seoDescription:
      "Rewrite your product description with natural keyword targeting and a strong search-snippet opener. Free SEO tool, no signup.",
    h1: "Optimize a Product Description for SEO",
    introCopy:
      "A product description written purely for persuasion often misses the actual words shoppers type into Google or a marketplace search bar. This tool rewrites an existing description to naturally weave in the terms a real buyer would search for — material, use case, size, common synonyms — while keeping a strong, snippet-worthy opening sentence, without tipping into the kind of keyword stuffing that gets pages penalized or just reads badly to humans. It's built specifically for organic search and marketplace search visibility, not for ad copy or social captions.",
    exampleInput:
      "A cozy blanket that's soft and great for the couch. Comes in several colors.",
    exampleOutput:
      "This soft fleece throw blanket is the perfect addition to any couch, bed, or reading nook. Made from plush, breathable fabric, it's lightweight enough for spring evenings and warm enough for winter nights. Available in 8 colors, this cozy throw blanket makes an easy gift or everyday comfort upgrade for your living room.",
    faq: [
      {
        question: "How do you know what keywords to target if I don't provide them?",
        answer:
          "The tool infers likely search terms from the product category and details you provide, based on common shopper search patterns. For precise keyword targeting from your own research, mention the specific terms you want included in your input.",
      },
      {
        question: "Will this hurt readability by stuffing in too many keywords?",
        answer:
          "No — the prompt explicitly avoids keyword stuffing and prioritizes natural, scannable language, since search engines and marketplaces increasingly penalize copy that reads as spammy.",
      },
      {
        question: "Does this work for Amazon listings specifically?",
        answer:
          "It's a good general SEO pass, but Amazon has its own listing structure and keyword conventions — for that platform specifically, the Amazon listing description generator tool follows Amazon's format more closely.",
      },
    ],
  },
  {
    slug: "spec-sheet-to-description",
    category: "product-description",
    inputType: "spec sheet",
    outputType: "product description",
    promptTemplate:
      "Convert the following raw technical spec sheet into a flowing, readable product description that translates specs into what they mean for the user. Keep technical accuracy but make it approachable. Return only the description, no preamble.\n\nSpec sheet:\n{input}",
    seoTitle: "Free Spec Sheet to Product Description Converter",
    seoDescription:
      "Turn a raw technical spec sheet into a readable, benefit-oriented product description. Free tool for technical and consumer products.",
    h1: "Turn a Spec Sheet Into a Product Description",
    introCopy:
      "Spec sheets are written for engineers to verify against a datasheet, not for a customer trying to decide if a product fits their life. This tool takes literal spec-sheet input — dimensions, materials, voltage, capacity, whatever raw numbers a manufacturer provides — and translates each figure into what it actually means for the person using the product, while keeping the technical facts accurate. It differs from the general features-to-description tool in that it's built to handle dense, jargon-heavy, table-like input rather than an already-readable feature list.",
    exampleInput:
      "Capacity: 1.7L. Power: 1500W. Material: BPA-free plastic housing, stainless steel heating element. Auto shut-off: yes. Cordless base: 360-degree.",
    exampleOutput:
      "With a 1500W heating element, this kettle brings a full 1.7 liters of water to a boil fast enough for a whole pot of tea without the wait. The BPA-free housing and stainless steel element mean nothing but clean water flavor comes through, and the auto shut-off means you can walk away without worrying. The cordless 360-degree base lets you lift and pour from any angle, so it fits comfortably on any counter.",
    faq: [
      {
        question: "Will it get technical facts wrong when translating them?",
        answer:
          "The tool is instructed to keep technical accuracy while making the language approachable, but for safety-critical products (electronics, appliances, medical devices) always verify the final copy against your actual spec sheet before publishing.",
      },
      {
        question: "Can I paste in a table format, like columns and rows?",
        answer:
          "Yes, paste it as plain text even if it was originally a table — the tool will parse label-value pairs like \"Capacity: 1.7L\" without needing special formatting.",
      },
      {
        question: "What if some specs don't have an obvious user benefit?",
        answer:
          "The tool will still mention purely technical specs (like exact dimensions) directly when there's no natural benefit angle, rather than omitting information a buyer might need.",
      },
    ],
  },
  {
    slug: "product-description-tone-shifter",
    category: "product-description",
    inputType: "product description",
    outputType: "re-toned product description",
    promptTemplate:
      "Rewrite the following product description in a more {input}",
    seoTitle: "Free Product Description Tone Shifter",
    seoDescription:
      "Rewrite a product description in a different tone — luxury, casual, playful, minimal — while keeping the same details. Free tool.",
    h1: "Shift the Tone of a Product Description",
    introCopy:
      "The same coffee mug can be described in language that feels like a Sunday brunch ad or language that feels like a premium minimalist catalog — same product, completely different brand feel. This tool takes an existing product description and rewrites it in whatever tone you specify, whether that's more luxurious, more playful, more minimal, or more technical, without changing the underlying facts. It's the tool for when the writing itself is accurate but doesn't match a rebrand, a new marketplace, or a different customer segment you're now targeting with the same inventory.",
    exampleInput:
      "luxury and minimal tone: This candle smells really nice and burns for a long time. It comes in a jar you can reuse.",
    exampleOutput:
      "Poured by hand in small batches, this candle offers a refined, understated scent that lingers without overwhelming. A slow, even burn of up to 60 hours ensures lasting presence, housed in a reusable glass vessel designed to outlive the flame.",
    faq: [
      {
        question: "Can I request more than one tone at once to compare?",
        answer:
          "Run the tool once per tone you want to test — each request is optimized for a single clear tonal direction rather than blending multiple tones, which tends to produce muddled results.",
      },
      {
        question: "Will factual details like size or materials change?",
        answer:
          "No, only the voice and word choice shift. Any concrete facts present in your original description are preserved in the rewrite.",
      },
      {
        question: "Is this useful for translating one listing across multiple marketplaces with different vibes?",
        answer:
          "Yes — a common use is writing one detailed description, then running it through this tool multiple times to match the tone expectations of different marketplaces or sub-brands.",
      },
    ],
  },
  {
    slug: "product-description-to-bullets",
    category: "product-description",
    inputType: "product description",
    outputType: "bullet points",
    promptTemplate:
      "Convert the following product description into 4-6 scannable bullet points highlighting the key selling points, ordered from most to least compelling. Return only the bullet points, no preamble.\n\nProduct description:\n{input}",
    seoTitle: "Free Product Description to Bullet Points Converter",
    seoDescription:
      "Turn a paragraph-style product description into 4-6 scannable, ranked bullet points. Free tool for listings and spec sections.",
    h1: "Turn a Description Into Bullet Points",
    introCopy:
      "Shoppers scan product pages, they rarely read them start to finish, which is why most marketplaces put ranked bullet points above the paragraph description, not below it. This tool takes a written, paragraph-style description and extracts its selling points into 4-6 bullets, ordered from most to least compelling so the strongest hook is the first thing a scanning eye catches. It's the reverse operation of the features-to-description tool — useful once you already have prose and need the scannable version, rather than starting from a raw feature list.",
    exampleInput:
      "This backpack was designed for people who commute by bike or on foot in unpredictable weather. It's made from a fully waterproof recycled nylon shell that keeps your laptop and belongings dry even in a downpour. Inside, a padded 15-inch laptop sleeve protects your device, while a separate exterior pocket keeps wet items away from the rest of your gear. Reflective piping on the straps adds visibility at night, and the ergonomic strap design reduces shoulder strain even when the bag is fully loaded.",
    exampleOutput:
      "- Fully waterproof recycled nylon shell keeps everything dry, even in a downpour\n- Padded 15-inch laptop sleeve protects your device\n- Separate exterior pocket keeps wet items isolated from the rest of your gear\n- Reflective piping improves nighttime visibility\n- Ergonomic straps reduce shoulder strain, even fully loaded",
    faq: [
      {
        question: "How does the tool decide bullet order?",
        answer:
          "It ranks bullets by how compelling or differentiating each selling point is likely to be to a shopper, putting the strongest hook first rather than following the original paragraph's order.",
      },
      {
        question: "Can I get more than 6 bullets if my description is very detailed?",
        answer:
          "The tool targets 4-6 since that range stays scannable on most product pages; for very detailed products, some minor details may be consolidated into a single bullet rather than listed separately.",
      },
      {
        question: "Does this work well for Amazon-style listings?",
        answer:
          "Yes, this bullet format matches the standard e-commerce feature-bullet section used on Amazon and most marketplaces, though the Amazon listing generator tool is tailored more specifically to Amazon's exact conventions.",
      },
    ],
  },
  {
    slug: "amazon-listing-description-generator",
    category: "product-description",
    inputType: "product details",
    outputType: "Amazon listing description",
    promptTemplate:
      "Using the following product details, write an Amazon-style product listing: a strong title-friendly opening line, 5 benefit-driven bullet points (each starting with a capitalized short label), and a brief closing description paragraph. Follow Amazon listing conventions. Return only the listing content, no preamble.\n\nProduct details:\n{input}",
    seoTitle: "Free Amazon Listing Description Generator",
    seoDescription:
      "Generate an Amazon-style listing with 5 benefit bullets and a description paragraph from raw product details. Free tool.",
    h1: "Generate an Amazon Listing Description",
    introCopy:
      "Amazon listings follow a specific, well-worn format that differs from a generic product page: a keyword-rich opening, five bullet points that each lead with a short capitalized label like a mini-headline, and a closing paragraph that reinforces trust. This tool is built to output exactly that structure from raw product details, rather than a generic description you'd then have to reformat by hand. It's meant specifically for sellers listing on Amazon or similar marketplaces that use this bullet-label convention, not for a standalone brand website.",
    exampleInput:
      "Silicone baking mat set, 3 pack, non-stick, oven safe up to 480°F, reusable replaces parchment paper, fits half sheet pans.",
    exampleOutput:
      "PREMIUM NON-STICK BAKING MATS — 3-PACK FOR EVERY SHEET PAN\n\n- REUSABLE & ECO-FRIENDLY: Replace hundreds of sheets of parchment paper with mats you can use for years\n- HEAT SAFE UP TO 480°F: Bake cookies, roast vegetables, or make candy with confidence\n- TRUE NON-STICK SURFACE: Food releases cleanly every time, no sprays or oils needed\n- FITS STANDARD HALF SHEET PANS: Sized to fit perfectly with no trimming required\n- EASY CLEANUP: Just rinse or run through the dishwasher after use\n\nUpgrade your baking routine with a 3-pack of silicone mats built to replace disposable parchment paper for good. Oven-safe up to 480°F and durable enough for years of daily baking, these mats fit standard half sheet pans and clean up in seconds.",
    faq: [
      {
        question: "Does it generate an Amazon-compliant title too?",
        answer:
          "It generates a strong title-friendly opening line as part of the listing, but for a dedicated, character-limit-aware product title, you may want to craft that separately following Amazon's specific title guidelines.",
      },
      {
        question: "Why do the bullets start with capitalized labels?",
        answer:
          "That's a widely used Amazon listing convention — leading each bullet with a short capitalized phrase (like \"REUSABLE & ECO-FRIENDLY\") improves scannability and matches what shoppers expect on the platform.",
      },
      {
        question: "Can this be used for Etsy or Walmart Marketplace instead?",
        answer:
          "The bullet-label structure is common enough to work reasonably well on other marketplaces, but it was specifically modeled on Amazon conventions, so review it against your target platform's listing guidelines before publishing.",
      },
    ],
  },
  {
    slug: "product-description-formal-casual-rewrite",
    category: "product-description",
    inputType: "product description",
    outputType: "rewritten product description",
    promptTemplate:
      "Rewrite the following product description in a {input}",
    seoTitle: "Free Product Description Formal/Casual Rewriter",
    seoDescription:
      "Switch a product description between formal and casual style while keeping every detail intact. Free tool, instant results.",
    h1: "Rewrite a Product Description Formal or Casual",
    introCopy:
      "Formal and casual aren't just \"tone\" in the broad sense the general tone shifter tool handles — they're a specific, common axis: sentence length, contractions, directness of address, and how much personality is allowed to show. This tool is scoped narrowly to that one axis, so state clearly whether you want \"more formal\" or \"more casual\" style and it will move the writing along that specific spectrum rather than guessing at a broader creative direction. It's most useful when the same product sells in both a professional B2B context and a consumer-facing store and each needs its own register.",
    exampleInput:
      "more formal style: This blender is super powerful and can crush ice no problem. It's got a bunch of settings and cleans up easy too.",
    exampleOutput:
      "This blender delivers powerful, consistent performance, including effortless ice crushing. It offers multiple speed settings to accommodate a range of recipes, and its components are designed for straightforward cleaning after use.",
    faq: [
      {
        question: "How is this different from the general tone shifter tool?",
        answer:
          "The general tone shifter can move toward any tone you name — luxury, playful, urgent, and so on. This tool is scoped specifically to the formal-versus-casual axis, which makes it faster to use when that's the only dimension you need to adjust.",
      },
      {
        question: "Will formal rewrites sound stiff or robotic?",
        answer:
          "The goal is professional and polished, not robotic — the tool avoids jargon for its own sake and keeps sentences readable even in the more formal version.",
      },
      {
        question: "Does casual mean it will use slang?",
        answer:
          "It leans toward contractions, shorter sentences, and a conversational feel rather than heavy slang, so the result stays broadly appropriate for most consumer brands.",
      },
    ],
  },
  {
    slug: "product-description-benefit-focused-rewrite",
    category: "product-description",
    inputType: "feature-heavy product description",
    outputType: "benefit-focused product description",
    promptTemplate:
      "Rewrite the following product description so that every feature mentioned is immediately followed by the concrete benefit it provides to the customer. Do not just list features. Return only the rewritten description, no preamble.\n\nProduct description:\n{input}",
    seoTitle: "Free Feature-to-Benefit Product Description Rewriter",
    seoDescription:
      "Rewrite a feature-heavy product description so every feature is paired with its real customer benefit. Free tool, no signup.",
    h1: "Rewrite a Description to Focus on Benefits",
    introCopy:
      "It's a common trap: a product description that lists \"304 stainless steel, double-wall construction, silicone base\" without ever answering the question a customer is actually asking, which is \"so what does that mean for me?\" This tool takes a feature-heavy description and rewrites it so that every feature mentioned is immediately paired with the concrete benefit it delivers, rather than leaving the customer to do that translation themselves. It's narrower than the general features-to-description tool because it assumes you already have written prose and specifically want the feature-benefit pairing fixed, not a full rewrite.",
    exampleInput:
      "This yoga mat is made of 6mm thick natural rubber with a textured surface. It has alignment lines printed on it and comes with a carrying strap.",
    exampleOutput:
      "This yoga mat is built from 6mm thick natural rubber, giving your joints real cushioning during floor work so poses stay comfortable, not painful. The textured surface grips the floor and your hands and feet, so you won't slip mid-pose even when you're sweating. Printed alignment lines help you check your form at a glance without needing a mirror, and the included carrying strap means you can sling it over your shoulder and actually get to class without wrestling with a rolled-up mat.",
    faq: [
      {
        question: "What if a feature genuinely has no obvious customer benefit?",
        answer:
          "The tool will do its best to infer a reasonable benefit, but if a feature is purely technical with no real customer-facing upside, it may mention it more briefly rather than force an unconvincing benefit claim.",
      },
      {
        question: "Will this make the description longer than the original?",
        answer:
          "Usually somewhat, since pairing each feature with its benefit adds a few words per point — but the tool avoids padding and keeps each addition concrete and specific.",
      },
      {
        question: "Is this different from just running the shortener in reverse?",
        answer:
          "Yes — the shortener removes content to fit a smaller space. This tool doesn't aim to change length at all; it restructures existing content so each feature has its benefit attached.",
      },
    ],
  },
  {
    slug: "product-description-to-social-caption",
    category: "product-description",
    inputType: "product description",
    outputType: "social media caption",
    promptTemplate:
      "Turn the following product description into a short, engaging social media caption (2-3 sentences, casual tone, can include up to 3 relevant hashtags). Return only the caption, no preamble.\n\nProduct description:\n{input}",
    seoTitle: "Free Product Description to Social Caption Generator",
    seoDescription:
      "Turn a product description into a short, casual social media caption with hashtags. Free tool for Instagram, TikTok, and more.",
    h1: "Turn a Product Description Into a Social Caption",
    introCopy:
      "A product page description and a social caption are trying to do different jobs — one needs to inform and convert a visitor who's already looking to buy, the other needs to stop a scroll and feel native to a casual feed. This tool takes your existing product description and compresses it into a short, casual caption with a couple of relevant hashtags, dropping the formal selling-point structure in favor of something that reads like a person, not a product page, wrote it. It's the shortest-format tool in this category, built for Instagram, TikTok, or Facebook post captions specifically rather than any on-site use.",
    exampleInput:
      "Our reusable produce bags are made from breathable mesh fabric that keeps fruits and vegetables fresh longer while eliminating single-use plastic. Each set includes 5 bags in various sizes with a drawstring closure and tare weight printed on the tag for easy checkout.",
    exampleOutput:
      "Say bye to plastic produce bags for good 🥬 These breathable mesh bags keep your fruits and veggies fresher AND make checkout easy with the tare weight right on the tag. Small swap, big difference. #zerowaste #sustainableliving #ecofriendly",
    faq: [
      {
        question: "Will it always include hashtags?",
        answer:
          "It includes up to 3 relevant hashtags by default since that's a common convention on Instagram and TikTok, but you can note \"no hashtags\" in your input if you want a clean caption only.",
      },
      {
        question: "Can I get a longer caption if I want more storytelling?",
        answer:
          "This tool is intentionally scoped to 2-3 sentences for a punchy, scroll-friendly result. For longer-form social content, you'd want to draft that separately with more narrative detail.",
      },
      {
        question: "Does it work for LinkedIn too, or just casual platforms like Instagram?",
        answer:
          "It defaults to a casual tone suited to Instagram, TikTok, or Facebook. For LinkedIn, mention that in your input and the tool will shift toward a more professional register while keeping the short caption format.",
      },
    ],
  },

  // ---------- TAGLINE ----------
  {
    slug: "business-description-to-tagline",
    category: "tagline",
    inputType: "business description",
    outputType: "tagline",
    promptTemplate:
      "Based on the following business description, write 5 short tagline options (under 8 words each) that capture what makes this business distinct. Return only the numbered list of taglines, no preamble.\n\nBusiness description:\n{input}",
    seoTitle: "Free Business Description to Tagline Generator",
    seoDescription:
      "Turn a business description into 5 short, distinct tagline options in seconds. Free tool, no signup required.",
    h1: "Turn a Business Description Into a Tagline",
    introCopy:
      "Most taglines fail because they describe the industry instead of the business — \"quality service you can trust\" could sit under any logo in any sector. This tool takes a fuller business description, the kind you'd write for an About page or an investor deck, and distills it into five short tagline candidates that try to capture what's actually distinct about this specific business, not the category it belongs to. It's the entry point of the tagline category — the tool to start with when a business doesn't have a tagline yet at all.",
    exampleInput:
      "We're a mobile dog grooming service that comes to your house in a fully equipped van, so pet owners never have to deal with car rides, waiting rooms, or stressed-out pets.",
    exampleOutput:
      "1. Grooming that comes to you\n2. Happier pets, no car ride\n3. Your driveway is our salon\n4. Stress-free grooming, right outside\n5. We bring the salon home",
    faq: [
      {
        question: "How long should my business description input be?",
        answer:
          "A few sentences is enough — ideally covering what you do, who it's for, and what makes you different. More detail generally produces more specific, less generic taglines.",
      },
      {
        question: "Can I ask for a specific number of options instead of 5?",
        answer:
          "The default is 5 to give a good spread without overwhelming you, but you can mention a different number in your input, like \"give me 10 options.\"",
      },
      {
        question: "What's the difference between this and the mission-statement-to-tagline tool?",
        answer:
          "This tool works from a factual business description (what you do, who you serve). The mission statement tool starts from a values-and-purpose statement and tends to produce more aspirational, values-driven taglines.",
      },
    ],
  },
  {
    slug: "tagline-variant-generator",
    category: "tagline",
    inputType: "tagline",
    outputType: "tagline variants",
    promptTemplate:
      "Generate 6 alternative versions of the following tagline, exploring different phrasings, word orders, and lengths while preserving the core idea. Return only the numbered list, no preamble.\n\nTagline:\n{input}",
    seoTitle: "Free Tagline Variant Generator — Explore Phrasings",
    seoDescription:
      "Get 6 alternative phrasings of your existing tagline to compare and test. Free tool, instant results.",
    h1: "Generate Tagline Variants",
    introCopy:
      "You already have a tagline and mostly like the idea behind it, but the exact wording feels slightly off — maybe it's a syllable too long, or the word order buries the best part at the end. This tool takes an existing tagline and generates six alternative phrasings that keep the same core idea while varying structure, word choice, and length, so you can compare options side by side rather than staring at one version wondering if it's right. Use it as a refinement step, after the brainstorm tool has already generated raw concepts.",
    exampleInput: "Coffee that wakes up your morning, not just your body.",
    exampleOutput:
      "1. Wake up more than your body.\n2. More than a wake-up call.\n3. Your morning, fully awake.\n4. Coffee for a morning that matters.\n5. Not just caffeine. A wake-up.\n6. Wakes up your morning, too.",
    faq: [
      {
        question: "Will the variants keep the same length as the original?",
        answer:
          "Not necessarily — the tool intentionally explores both shorter and slightly longer phrasings of the same idea so you can see how the concept holds up at different lengths.",
      },
      {
        question: "How is this different from the tagline shortener tool?",
        answer:
          "The shortener has one job: make an existing tagline shorter while preserving meaning. This tool explores a range of phrasings, which may be shorter, similar length, or occasionally longer, prioritizing variety over compression.",
      },
      {
        question: "Can I run this tool multiple times on the same tagline for more options?",
        answer:
          "Yes, running it again will generate a fresh set of six variants, which is useful if none of the first batch felt quite right.",
      },
    ],
  },
  {
    slug: "mission-statement-to-tagline",
    category: "tagline",
    inputType: "mission statement",
    outputType: "tagline",
    promptTemplate:
      "Distill the following mission statement into 5 short, memorable tagline options that capture its essence in a way that could work on a homepage or business card. Return only the numbered list, no preamble.\n\nMission statement:\n{input}",
    seoTitle: "Free Mission Statement to Tagline Generator",
    seoDescription:
      "Distill a full mission statement into 5 short, punchy tagline options. Free tool, no signup required.",
    h1: "Turn a Mission Statement Into a Tagline",
    introCopy:
      "A mission statement is written to be comprehensive — it's meant to guide internal decisions and survive years of scrutiny, which is exactly why it's too long and too abstract to put on a homepage. This tool takes that fuller, values-oriented statement and compresses it down to five tagline candidates that try to keep the emotional core while cutting everything a visitor doesn't need in three seconds of reading. Unlike the business-description tool, which works from factual \"what we do\" input, this one leans into purpose and values language, so the results tend to feel more aspirational.",
    exampleInput:
      "Our mission is to make financial literacy accessible to everyone, regardless of income or background, by providing free, jargon-free educational tools and one-on-one coaching so that anyone can build a secure financial future.",
    exampleOutput:
      "1. Financial literacy for everyone.\n2. Money knowledge, no jargon.\n3. Your financial future, made clear.\n4. Understanding money shouldn't cost money.\n5. Security starts with understanding.",
    faq: [
      {
        question: "Will the tagline sound preachy or overly corporate?",
        answer:
          "The tool aims for memorable and human phrasing rather than corporate mission-speak, but if a result feels stiff, try trimming your mission statement input down to its most emotionally resonant sentence before running it again.",
      },
      {
        question: "Can I use this for a nonprofit or cause-driven organization?",
        answer:
          "Yes, this tool works especially well for mission-driven organizations since it's designed to preserve purpose and values language rather than commercial selling points.",
      },
      {
        question: "Should I use my full mission statement or just a summary?",
        answer:
          "Either works, but a full statement gives the tool more to distill from. If your mission statement is very long, consider trimming it to its core paragraph first for a tighter result.",
      },
    ],
  },
  {
    slug: "tagline-shortener",
    category: "tagline",
    inputType: "tagline",
    outputType: "shorter tagline",
    promptTemplate:
      "Shorten the following tagline to 5 words or fewer while preserving its core meaning and impact. Provide 3 options. Return only the numbered list, no preamble.\n\nTagline:\n{input}",
    seoTitle: "Free Tagline Shortener — 5 Words or Less",
    seoDescription:
      "Compress a wordy tagline down to 5 words or fewer, with 3 options to choose from. Free, instant tool.",
    h1: "Shorten a Tagline",
    introCopy:
      "There's a point past which a tagline stops being a tagline and becomes a sentence, and most first drafts cross that line without anyone noticing until it's on a business card next to a logo, looking cramped. This tool takes a tagline that's grown too wordy and produces three options at five words or fewer, forcing the core idea to survive without its supporting clauses. It's a compression tool, not a rewrite tool — if the underlying idea itself isn't working, the variant generator or brainstorm tool will serve you better than trying to shorten a weak concept.",
    exampleInput: "We help small businesses grow faster by simplifying their accounting so they can focus on what matters.",
    exampleOutput:
      "1. Accounting made simple.\n2. Simple accounting, faster growth.\n3. Less accounting. More growing.",
    faq: [
      {
        question: "What if 5 words isn't short enough for my use case, like a favicon or app icon badge?",
        answer:
          "Mention your target length directly in the input, such as \"shorten to 3 words,\" and the tool will aim for that tighter constraint instead of the default 5.",
      },
      {
        question: "Will shortening lose important nuance from the original?",
        answer:
          "Some nuance is inevitable when compressing this aggressively — that's the nature of a tagline. The tool prioritizes keeping the single strongest idea intact rather than trying to preserve every detail.",
      },
      {
        question: "Can I shorten a tagline that's already short, like 6 words?",
        answer:
          "Yes, though the gains will be smaller. It will still look for ways to trim it further while keeping the meaning clear.",
      },
    ],
  },
  {
    slug: "product-to-slogan",
    category: "tagline",
    inputType: "product description",
    outputType: "slogan",
    promptTemplate:
      "Based on the following product description, write 5 catchy slogan options suitable for packaging or a product label. Slogans should be punchy and product-specific, not generic. Return only the numbered list, no preamble.\n\nProduct description:\n{input}",
    seoTitle: "Free Product to Slogan Generator",
    seoDescription:
      "Turn a product description into 5 catchy, product-specific slogan options for packaging or labels. Free tool.",
    h1: "Turn a Product Into a Slogan",
    introCopy:
      "There's a meaningful difference between a company tagline, which represents an entire brand across every product, and a slogan tied to one specific product, which needs to work on that item's packaging alongside its own name and branding. This tool is scoped to the product level: describe one specific product and get five slogan options meant to live on that product's label or packaging, distinct from the umbrella brand tagline the company might already have. It's especially useful for companies with multiple product lines that each want their own hook.",
    exampleInput:
      "A cold brew concentrate that you mix with water or milk, made from single-origin beans, steeped for 20 hours for a smooth, low-acid flavor.",
    exampleOutput:
      "1. Steeped slow. Poured fast.\n2. Smooth by design.\n3. 20 hours in the making, 20 seconds to pour.\n4. Bold flavor, low acid, zero rush.\n5. Cold brew, uncompromised.",
    faq: [
      {
        question: "How is a slogan different from a tagline in this context?",
        answer:
          "A tagline typically represents the whole brand or company, while a slogan here refers to product-specific copy meant for packaging or a label — shorter-lived and tied to one item rather than the whole business.",
      },
      {
        question: "Can I use this for a limited-edition or seasonal product?",
        answer:
          "Yes, this works well for seasonal or limited-run products since it's built to key off the specific product description you provide rather than long-term brand identity.",
      },
      {
        question: "Will it work if I only have a rough product idea, not a finished description?",
        answer:
          "It works best with concrete details like ingredients, format, or a key differentiator, so add whatever specifics you have even if the product isn't fully finalized.",
      },
    ],
  },
  {
    slug: "tagline-brainstorm-generator",
    category: "tagline",
    inputType: "rough notes or keywords",
    outputType: "tagline options",
    promptTemplate:
      "Using the following rough notes or keywords about a business, brainstorm 10 varied tagline directions — don't converge on one style, explore playful, serious, clever, and literal options. Return only the numbered list, no preamble.\n\nNotes or keywords:\n{input}",
    seoTitle: "Free Tagline Brainstorm Generator — 10 Directions",
    seoDescription:
      "Turn rough keywords or notes into 10 varied tagline directions to spark ideas. Free brainstorming tool, no signup.",
    h1: "Brainstorm Tagline Ideas",
    introCopy:
      "Sometimes you don't have a polished business description or mission statement yet — just scattered notes, a few keywords, maybe a phrase someone said in a meeting that stuck. This tool is built for that earlier, messier stage: feed it rough notes and it deliberately explores ten different directions — playful, serious, clever wordplay, plain and literal — rather than converging on one polished style. It's meant to widen your options before you've committed to a direction, whereas the variant generator narrows and refines a single tagline you've already chosen.",
    exampleInput: "pet sitting app, trust, local, verified sitters, real-time GPS tracking, insured",
    exampleOutput:
      "1. Trust, tracked in real time.\n2. Verified sitters. Verified peace of mind.\n3. Know where your pet is, always.\n4. Local sitters you can actually trust.\n5. Insured. Verified. Right down the street.\n6. Pet sitting, without the guesswork.\n7. See the walk. Skip the worry.\n8. Your neighborhood's most trusted sitters.\n9. Because \"I hope they're fine\" isn't good enough.\n10. Real sitters. Real tracking. Real trust.",
    faq: [
      {
        question: "Do I need full sentences as input, or can I just list keywords?",
        answer:
          "Keywords alone work fine — the tool is specifically built to work from fragmentary input like a word list or short notes rather than requiring polished prose.",
      },
      {
        question: "Why does it give such different styles instead of one consistent voice?",
        answer:
          "That's intentional — this is the widest, earliest-stage tool in the tagline category, meant to surface a range of directions so you can pick a style before refining it further with the variant generator.",
      },
      {
        question: "What should I do with the results once I've picked a favorite direction?",
        answer:
          "Take the tagline you like best and run it through the variant generator or shortener tool to refine the exact wording and length.",
      },
    ],
  },
  {
    slug: "brand-values-to-tagline",
    category: "tagline",
    inputType: "brand values",
    outputType: "tagline",
    promptTemplate:
      "Based on the following list of brand values, write 5 tagline options that embody these values without stating them literally (avoid just listing the words back). Return only the numbered list, no preamble.\n\nBrand values:\n{input}",
    seoTitle: "Free Brand Values to Tagline Generator",
    seoDescription:
      "Turn a list of brand values into 5 tagline options that embody them, without just restating the words. Free tool.",
    h1: "Turn Brand Values Into a Tagline",
    introCopy:
      "The laziest tagline is one that just restates a value word for word — a brand that lists \"honesty\" as a value and then puts \"Honest. Simple. Reliable.\" on its homepage hasn't actually said anything memorable. This tool takes a list of stated brand values and is explicitly instructed to embody them rather than repeat them literally, finding language that demonstrates the value through image or implication instead of naming it directly. It's the tool to use once a brand workshop has already produced a values list and the next step is translating that internal document into outward-facing language.",
    exampleInput: "Transparency, sustainability, community, craftsmanship",
    exampleOutput:
      "1. Made in the open, built to last.\n2. Every seam, every source, no secrets.\n3. Crafted for you and the ones after you.\n4. Nothing hidden. Nothing wasted.\n5. Built by hand, backed by honesty.",
    faq: [
      {
        question: "Why won't it just use the value words directly, like \"sustainable\"?",
        answer:
          "The prompt specifically avoids restating values literally because that tends to produce generic, forgettable taglines. Instead it looks for imagery or phrasing that demonstrates the value in action.",
      },
      {
        question: "What if I only have one core value instead of a list?",
        answer:
          "That works fine — the tool can generate tagline options around a single value, though a short list of 3-5 values tends to give it more to work with for a distinctive result.",
      },
      {
        question: "How is this different from the mission-statement-to-tagline tool?",
        answer:
          "A mission statement describes purpose and what the organization is trying to achieve. This tool starts from a values list — adjectives or principles like \"transparency\" or \"craftsmanship\" — and is a more targeted, shorter input.",
      },
    ],
  },
  {
    slug: "tagline-tone-shifter",
    category: "tagline",
    inputType: "tagline",
    outputType: "re-toned tagline",
    promptTemplate:
      "Rewrite the following tagline in a more {input}",
    seoTitle: "Free Tagline Tone Shifter",
    seoDescription:
      "Rewrite an existing tagline in a new tone — bold, playful, serious, luxurious — while keeping the core idea. Free tool.",
    h1: "Shift the Tone of a Tagline",
    introCopy:
      "A tagline that reads as confidently bold to one founder can read as arrogant to another, and the gap between those reactions is usually just tone, not substance. This tool takes an existing tagline you already like structurally and shifts its emotional register in a specified direction — bolder, more playful, more serious, more luxurious — without changing the underlying idea it's built on. It's useful during rebrands or when the same company is testing a tagline across audiences that respond to different registers, such as a playful consumer app versus its more serious enterprise offering.",
    exampleInput: "more playful tone: Reliable software for growing teams.",
    exampleOutput: "Software that grows up with you (and doesn't crash the party).",
    faq: [
      {
        question: "Can I go from playful to serious, not just serious to playful?",
        answer:
          "Yes, the tool works in either direction — just state the tone you want to move toward, such as \"more serious and professional\" if your current tagline feels too casual.",
      },
      {
        question: "Will the length change a lot when the tone shifts?",
        answer:
          "It can shift somewhat, since a bolder or more playful phrasing sometimes needs a few extra words to land, but the tool tries to stay close to the original length unless you ask otherwise.",
      },
      {
        question: "Is this useful for adapting one tagline for two different sub-brands?",
        answer:
          "Yes, that's a common use case — run the same original tagline through this tool twice with two different tone directions to get sub-brand-appropriate versions that still share a common idea.",
      },
    ],
  },
  {
    slug: "elevator-pitch-to-tagline",
    category: "tagline",
    inputType: "elevator pitch",
    outputType: "tagline",
    promptTemplate:
      "Compress the following elevator pitch into 5 short tagline options that capture its single most compelling idea. Return only the numbered list, no preamble.\n\nElevator pitch:\n{input}",
    seoTitle: "Free Elevator Pitch to Tagline Generator",
    seoDescription:
      "Compress a full elevator pitch down into 5 short tagline options built around its strongest idea. Free tool.",
    h1: "Turn an Elevator Pitch Into a Tagline",
    introCopy:
      "An elevator pitch is designed to be said out loud in thirty seconds and typically covers the problem, the solution, and the market — far too much ground for a tagline, which has to survive at a glance with no spoken context. This tool takes that fuller pitch and forces a hard choice: it identifies the single most compelling idea buried in the pitch and builds five tagline options around that one thing, discarding the market sizing and secondary points that make a pitch complete but would make a tagline bloated. It's ideal for founders who've refined their pitch in investor conversations and now need a public-facing line to match.",
    exampleInput:
      "We're building a tool that helps freelancers automatically track billable hours across every app they use, so they stop losing money to unbilled time — freelancers lose an average of 5 hours a week to work they never invoice for.",
    exampleOutput:
      "1. Never lose billable time again.\n2. Every hour, tracked. Every hour, paid.\n3. Stop working for free.\n4. Bill for every minute you work.\n5. Your time, automatically accounted for.",
    faq: [
      {
        question: "What if my elevator pitch has multiple strong ideas I don't want to lose?",
        answer:
          "The tool will pick the single strongest idea to build the tagline around, since trying to fit multiple ideas into one tagline usually weakens it. Consider running it again focusing your pitch on a different angle to see alternate directions.",
      },
      {
        question: "Should I include the problem statement or just the solution in my pitch?",
        answer:
          "Including both tends to help — the tool often finds the strongest tagline material in the tension between the problem and the solution, not just the solution alone.",
      },
      {
        question: "Is this the same as the business-description-to-tagline tool?",
        answer:
          "They're similar in purpose but different in input style — a business description is typically factual and structured, while an elevator pitch is more narrative and persuasive, often including a problem/stakes framing this tool is tuned to extract from.",
      },
    ],
  },
  {
    slug: "event-name-to-tagline",
    category: "tagline",
    inputType: "event description",
    outputType: "event tagline",
    promptTemplate:
      "Based on the following event description, write 5 short, energetic tagline options suitable for event marketing (e.g. for a banner, invite, or landing page). Return only the numbered list, no preamble.\n\nEvent description:\n{input}",
    seoTitle: "Free Event Tagline Generator",
    seoDescription:
      "Turn an event description into 5 energetic tagline options for banners, invites, and landing pages. Free tool.",
    h1: "Generate a Tagline for Your Event",
    introCopy:
      "Event taglines have a shelf life and a job that's different from a company tagline — they need to build anticipation for a specific date rather than represent an ongoing brand identity, and they usually need to work equally well shouted from a banner and printed small on a ticket. This tool takes a description of a specific event, whether that's a conference, a product launch party, a community fundraiser, or a festival, and generates five tagline options tuned for that short-term, high-energy context. It's distinct from the other tagline tools in this batch because it optimizes for urgency and excitement around a date, not durability over years.",
    exampleInput:
      "A one-day marketing conference for small business owners, featuring hands-on workshops instead of just keynote talks, held in a converted warehouse space.",
    exampleOutput:
      "1. Marketing you actually do, not just hear about.\n2. Workshops, not just talking heads.\n3. One day. Hands-on. All action.\n4. Skip the keynote. Build the campaign.\n5. Marketing, made by doing.",
    faq: [
      {
        question: "Can I use this for a recurring annual event?",
        answer:
          "Yes — describe the event as you would for any edition, and if it's a specific year's theme, mention that detail so the tagline can reflect what's unique about this particular edition.",
      },
      {
        question: "Will it include the event date or location?",
        answer:
          "No, taglines generated here focus on the hook and energy of the event rather than logistics — dates and locations are better placed separately in your actual event marketing materials.",
      },
      {
        question: "Is this suitable for a virtual or online-only event?",
        answer:
          "Yes, just mention that it's virtual in your description so the tagline doesn't imply an in-person gathering if that's not accurate.",
      },
    ],
  },

  // ---------- SALES EMAIL ----------
  {
    slug: "cold-outreach-generator",
    category: "sales-email",
    inputType: "prospect and product notes",
    outputType: "cold email",
    promptTemplate:
      "Write a short, personalized cold outreach email (under 120 words) based on the following notes about the prospect and what we're selling. Keep it conversational, avoid generic sales language, and end with a low-friction ask. Return only the email, no preamble.\n\nNotes:\n{input}",
    seoTitle: "Free Cold Outreach Email Generator",
    seoDescription:
      "Generate a short, personalized cold email from prospect notes, with a low-friction ask. Free tool, no signup.",
    h1: "Generate a Cold Outreach Email",
    introCopy:
      "Cold email gets a bad reputation because most of it is generic and clearly mass-sent, and the fix isn't better formatting, it's specificity about the actual person you're emailing. This tool asks for notes about the prospect, not just the product, so the output can reference something real — their role, their company's situation, a recent trigger event — rather than opening with \"I hope this finds you well.\" It ends with a low-friction ask by design, since cold email that asks for a 30-minute call upfront converts far worse than one that asks a simple yes/no question.",
    exampleInput:
      "Prospect: Sarah, VP of Ops at a 200-person logistics company, just posted on LinkedIn about warehouse inefficiencies. We sell inventory forecasting software that reduces stockouts by 30%.",
    exampleOutput:
      "Hi Sarah,\n\nSaw your post about warehouse inefficiencies this week — that resonated, since it's exactly the problem we built our forecasting software to solve. We've helped logistics teams similar in size to yours cut stockouts by around 30% by predicting demand shifts before they hit the floor.\n\nWorth a quick look? Happy to send a 2-minute overview, no meeting required.\n\nBest,\n[Your name]",
    faq: [
      {
        question: "What information do I need to provide about the prospect?",
        answer:
          "Anything specific helps — their role, company, a recent post or news mention, or a pain point you know they have. The more specific the notes, the less generic the email will read.",
      },
      {
        question: "Why does it avoid asking for a meeting directly?",
        answer:
          "Cold emails that ask for a big commitment like a 30-minute call upfront tend to get ignored. The tool defaults to a low-friction ask, like a quick yes/no question or an offer to send more info, which tends to get more replies.",
      },
      {
        question: "Can I use this for a warm lead instead of a totally cold one?",
        answer:
          "It works fine for lukewarm leads too, but if you already have a relationship or prior conversation with the person, the sales follow-up generator tool is a better fit since it assumes prior context.",
      },
    ],
  },
  {
    slug: "sales-follow-up-generator",
    category: "sales-email",
    inputType: "meeting or call notes",
    outputType: "follow-up email",
    promptTemplate:
      "Write a sales follow-up email based on the following notes from a recent call or meeting. Summarize what was discussed, reinforce the value proposition, and propose a clear next step. Return only the email, no preamble.\n\nNotes:\n{input}",
    seoTitle: "Free Sales Follow-Up Email Generator",
    seoDescription:
      "Turn meeting or call notes into a polished sales follow-up email with a clear next step. Free tool, no signup.",
    h1: "Generate a Sales Follow-Up Email",
    introCopy:
      "The follow-up email after a good sales call is where deals quietly stall — not because the conversation went badly, but because the recap gets written in a rush and buries the actual next step. This tool takes your raw call notes, however messy, and turns them into a follow-up that briefly recaps what was discussed, reinforces why your product solves the problem that came up, and proposes one clear next step rather than three vague options. Unlike cold outreach, this assumes an existing relationship and real context from a real conversation, so the tone is warmer and more specific from the first line.",
    exampleInput:
      "Call with Tom, IT director. He's frustrated with current ticketing system's slow response time. Liked our automated triage feature. Wants to see pricing for 50 seats. Next step: send pricing and case study from similar-sized company.",
    exampleOutput:
      "Hi Tom,\n\nGreat talking today — sounds like your team's ticketing response times have been a real pain point, and it was great to hear the automated triage feature stood out as a potential fix.\n\nAs promised, I'll send over pricing for 50 seats along with a case study from a company your size that saw a big drop in response times after switching over.\n\nOnce you've had a chance to look, would it make sense to grab 15 minutes to walk through any questions?\n\nBest,\n[Your name]",
    faq: [
      {
        question: "Do I need detailed notes, or can I use a quick bullet list?",
        answer:
          "A quick bullet list works well — the tool is built to work from rough, unpolished notes and turn them into a coherent, professional email.",
      },
      {
        question: "Will it always include a next step, even if I didn't specify one?",
        answer:
          "It will propose a reasonable next step based on context, but for the best result, include what was actually agreed on so the email reflects a real commitment rather than a generic suggestion.",
      },
      {
        question: "How is this different from the demo request follow-up tool?",
        answer:
          "This tool is for general sales call or meeting follow-ups. The demo request follow-up tool is scoped specifically to the moment right after a product demo, with framing built around reinforcing what was shown.",
      },
    ],
  },
  {
    slug: "sales-email-shortener",
    category: "sales-email",
    inputType: "long sales email",
    outputType: "short sales email",
    promptTemplate:
      "Condense the following sales email down to under 100 words while keeping the core value proposition and call to action. Cut unnecessary background and filler. Return only the shortened email, no preamble.\n\nSales email:\n{input}",
    seoTitle: "Free Sales Email Shortener — Cut to Under 100 Words",
    seoDescription:
      "Trim a bloated sales email down to under 100 words while keeping the value prop and CTA. Free tool, instant results.",
    h1: "Shorten a Sales Email",
    introCopy:
      "Sales emails accumulate length the same way any collaboratively edited document does — one more sentence of context here, one more proof point there, until a punchy pitch becomes a wall of text nobody opens on their phone. This tool takes an email that's grown too long and compresses it to under 100 words, protecting the core value proposition and call to action while cutting the background information and hedging language that crept in along the way. It's a rescue tool for existing copy, not a generator — pair it with the cold outreach or follow-up generators if you're starting from scratch.",
    exampleInput:
      "Hi there, I hope this email finds you well. I wanted to reach out because I noticed your company has been growing quickly over the past year, which is really exciting to see. As you scale, I imagine you might be running into some challenges around onboarding new employees efficiently, especially when it comes to IT provisioning and access management, which can become a real bottleneck as headcount increases. Our platform automates the entire employee onboarding and offboarding process, handling everything from account creation to access permissions across all your tools, which can save your IT team dozens of hours per month. I'd love to find some time to show you a quick demo if you're interested. Let me know what works for your schedule.",
    exampleOutput:
      "Hi there,\n\nScaling fast usually means IT provisioning becomes a bottleneck. Our platform automates onboarding and offboarding across all your tools, saving IT teams dozens of hours a month.\n\nWorth a quick demo? Let me know what works for your schedule.",
    faq: [
      {
        question: "Will it cut the call to action if the email is way over the limit?",
        answer:
          "No — the CTA and core value proposition are treated as essential and are preserved even if other content has to be cut more aggressively to hit the word count.",
      },
      {
        question: "Can I set a different word limit, like 50 words?",
        answer:
          "Yes, mention your target length in the input, such as \"shorten to under 50 words,\" and the tool will aim for that instead of the default 100.",
      },
      {
        question: "Does this work on follow-up emails too, or just first-touch emails?",
        answer:
          "It works on any sales email regardless of where it falls in the sequence — the tool doesn't distinguish by email type, only by identifying what's essential versus what's filler.",
      },
    ],
  },
  {
    slug: "meeting-request-email-generator",
    category: "sales-email",
    inputType: "reason for meeting",
    outputType: "meeting request email",
    promptTemplate:
      "Write a brief, polite email requesting a meeting based on the following context. Make the value of the meeting clear to the recipient and suggest 2-3 possible time frames. Return only the email, no preamble.\n\nContext:\n{input}",
    seoTitle: "Free Meeting Request Email Generator",
    seoDescription:
      "Generate a polite, clear meeting request email that explains the value and suggests time frames. Free tool.",
    h1: "Generate a Meeting Request Email",
    introCopy:
      "A meeting request email fails most often for one reason: it asks for the recipient's time without making clear what's in it for them. This tool is built around that single fix — every generated email states plainly why the meeting is worth the recipient's time before it asks for a slot, and it suggests two or three time frames rather than leaving scheduling as an open-ended back-and-forth. It's a narrower, more mechanical tool than the full sales pitch or follow-up generators — use it specifically for the ask-for-time moment, whether that's a first meeting or a scheduling request mid-deal.",
    exampleInput:
      "Requesting a meeting with a potential partner to discuss a co-marketing opportunity between our two companies, given overlapping customer bases in the fitness space.",
    exampleOutput:
      "Hi [Name],\n\nI've noticed a fair amount of overlap between our customer bases in the fitness space, and I think there could be a strong co-marketing opportunity worth exploring together.\n\nWould you have 20-30 minutes sometime next week to discuss? I'm generally free Tuesday afternoon, Wednesday morning, or Thursday after 2pm, but happy to work around your schedule.\n\nLooking forward to it,\n[Your name]",
    faq: [
      {
        question: "Does it always suggest specific times, or can it be more open-ended?",
        answer:
          "By default it suggests 2-3 time frames since concrete options tend to get faster responses than an open \"let me know when works.\" If you'd prefer fully open-ended scheduling, mention that in your input.",
      },
      {
        question: "Can this be used for internal meetings, not just external sales ones?",
        answer:
          "Yes, the structure works for internal requests too — just describe the internal context and audience, and the tool will adjust formality accordingly.",
      },
      {
        question: "What if I don't have a strong reason for the meeting yet?",
        answer:
          "Try to identify at least one concrete reason the meeting benefits the recipient specifically, not just you — that's the detail that makes the biggest difference in response rate.",
      },
    ],
  },
  {
    slug: "sales-pitch-to-email",
    category: "sales-email",
    inputType: "sales pitch",
    outputType: "sales email",
    promptTemplate:
      "Convert the following verbal-style sales pitch into a well-structured sales email with a subject line, greeting, body, and sign-off. Tighten the language for written form. Return only the email, no preamble.\n\nSales pitch:\n{input}",
    seoTitle: "Free Sales Pitch to Email Converter",
    seoDescription:
      "Turn a verbal-style sales pitch into a structured, polished email with subject line and sign-off. Free tool.",
    h1: "Turn a Sales Pitch Into an Email",
    introCopy:
      "The way you'd pitch a product out loud on a call rarely translates directly to a written email — spoken pitches ramble, circle back, and rely on tone of voice to land points that need to be explicit on the page. This tool takes a pitch written the way you'd say it, transcript-style or just stream-of-consciousness notes, and restructures it into a proper email with a subject line, greeting, tightened body copy, and sign-off. It's especially useful right after a discovery call, when the pitch is fresh in your head but hasn't been formalized into something you can actually send.",
    exampleInput:
      "So basically what we do is we take all your customer data that's scattered across different tools and we bring it into one dashboard so your team isn't jumping between five different logins just to get a full picture of a customer, and it usually takes like a day to set up which is way faster than most competitors.",
    exampleOutput:
      "Subject: One dashboard for all your customer data\n\nHi [Name],\n\nYour team probably jumps between five different logins just to get a full picture of a customer — we built our platform to fix exactly that. It pulls all your scattered customer data into a single dashboard, and setup typically takes about a day, far faster than most alternatives.\n\nWould it be worth a quick look?\n\nBest,\n[Your name]",
    faq: [
      {
        question: "Can I paste in a rough voice-to-text transcript?",
        answer:
          "Yes, that's exactly the kind of input this tool is designed for — messy, spoken-style text with run-on sentences and filler words that need tightening for written form.",
      },
      {
        question: "Will it generate a subject line automatically?",
        answer:
          "Yes, a subject line is included as part of the standard email structure this tool outputs, based on the core hook of your pitch.",
      },
      {
        question: "Is this meant for a first-touch email or a later-stage one?",
        answer:
          "It works for either — the tool doesn't assume a specific stage in the sales process, just that you have pitch content in spoken form that needs to become a proper email.",
      },
    ],
  },
  {
    slug: "objection-response-email",
    category: "sales-email",
    inputType: "prospect objection",
    outputType: "objection response email",
    promptTemplate:
      "Write a thoughtful email response to the following sales objection from a prospect. Acknowledge the concern genuinely before addressing it, don't be dismissive or overly defensive, and end with a next step. Return only the email, no preamble.\n\nObjection:\n{input}",
    seoTitle: "Free Sales Objection Response Email Generator",
    seoDescription:
      "Generate a thoughtful email that acknowledges a sales objection and addresses it without sounding defensive. Free tool.",
    h1: "Respond to a Sales Objection by Email",
    introCopy:
      "The instinct when a prospect raises an objection is to immediately counter it, which usually reads as defensive and makes the prospect dig in further. This tool is built around a specific sequence instead: acknowledge the concern as genuinely reasonable first, then address it, rather than leading with a rebuttal. It's meant for the specific, high-stakes moment in a deal when a prospect has pushed back on price, timing, a competitor, or internal buy-in, and the response needs to keep the conversation open rather than sound like a canned script defending the product.",
    exampleInput:
      "The prospect said our pricing is too high compared to a competitor they're also evaluating, and they're not sure the extra cost is justified.",
    exampleOutput:
      "Hi [Name],\n\nThat's a fair question, and I appreciate you being upfront about it — price comparisons matter, especially when you're evaluating a few options at once.\n\nThe difference usually comes down to what's included: our support and onboarding are hands-on from day one, which most customers tell us saves them more in time and fewer errors than the price gap accounts for. Happy to walk through a side-by-side breakdown so you can see exactly where the value lands for your situation.\n\nWould a quick call this week help clarify things?\n\nBest,\n[Your name]",
    faq: [
      {
        question: "Will it sound apologetic instead of confident?",
        answer:
          "No — the tool acknowledges the concern as valid without being apologetic about the product or pricing itself. It's designed to validate the prospect's reasoning while still making a confident case.",
      },
      {
        question: "Can I use this for objections other than price, like timing or authority?",
        answer:
          "Yes, describe whatever objection came up — budget, timing, feature gaps, needing buy-in from someone else — and the response will be tailored to that specific concern.",
      },
      {
        question: "What if I don't have a strong counterargument to the objection?",
        answer:
          "Include whatever context or proof points you do have, even if incomplete, and the tool will build the strongest reasonable response from that; for objections with no real answer, honesty about trade-offs often lands better than a forced rebuttal.",
      },
    ],
  },
  {
    slug: "sales-email-subject-line-generator",
    category: "sales-email",
    inputType: "sales email",
    outputType: "subject line options",
    promptTemplate:
      "Based on the following sales email, generate 8 subject line options: a mix of curiosity-driven, direct/benefit-driven, and personalized-style options. Keep each under 60 characters. Return only the numbered list, no preamble.\n\nSales email:\n{input}",
    seoTitle: "Free Sales Email Subject Line Generator",
    seoDescription:
      "Get 8 subject line options for your sales email — curiosity-driven, direct, and personalized. Free tool, under 60 characters each.",
    h1: "Generate Sales Email Subject Lines",
    introCopy:
      "Subject line is the single highest-leverage line in a sales email since it entirely determines whether the rest gets read, yet it's usually written last and fastest, as an afterthought once the body is done. This tool reads your finished email and generates eight subject line options spanning three distinct approaches — curiosity-driven lines that create an information gap, direct benefit-driven lines that state the value plainly, and personalized-style lines that reference the recipient — all kept under 60 characters so they don't truncate in most inboxes.",
    exampleInput:
      "Hi Maria, I noticed your team recently expanded into the EU market. Our compliance software automates GDPR reporting so your legal team doesn't have to manually track every data request. Would you be open to a quick call this week?",
    exampleOutput:
      "1. Quick question about your EU expansion\n2. GDPR reporting, fully automated\n3. Maria, saw your team's EU move\n4. Stop tracking data requests by hand\n5. A faster way to handle GDPR\n6. Your legal team will thank you\n7. Compliance shouldn't slow down expansion\n8. 15 minutes on EU compliance?",
    faq: [
      {
        question: "Which type of subject line converts best — curiosity or direct?",
        answer:
          "It varies by audience and industry, which is exactly why the tool gives a mix rather than picking one style. Testing a few of each against your specific list is the only reliable way to know what works for your prospects.",
      },
      {
        question: "Will personalized-style subject lines use the actual recipient's name?",
        answer:
          "If a name or specific detail about the recipient appears in your email input, the tool will reference it in the personalized-style options; otherwise it will use a placeholder like [Name].",
      },
      {
        question: "Why keep subject lines under 60 characters?",
        answer:
          "Most email clients, especially on mobile, truncate subject lines somewhere around 60 characters, so keeping options under that limit ensures the full line is visible in the inbox.",
      },
    ],
  },
  {
    slug: "re-engagement-email-generator",
    category: "sales-email",
    inputType: "past interaction notes",
    outputType: "re-engagement email",
    promptTemplate:
      "Write a re-engagement email to a prospect who has gone quiet, based on the following notes about the past interaction. Keep it low-pressure, briefly remind them of the value, and make it easy to say no. Return only the email, no preamble.\n\nNotes:\n{input}",
    seoTitle: "Free Re-Engagement Email Generator for Cold Leads",
    seoDescription:
      "Generate a low-pressure re-engagement email for prospects who've gone quiet. Free tool, easy to send, easy to say no.",
    h1: "Generate a Re-Engagement Email",
    introCopy:
      "A prospect who's gone quiet after initial interest is a different problem from one who never responded at all — they showed real interest once, so the fix isn't pitching harder, it's lowering the pressure enough that responding feels easy again. This tool writes re-engagement emails that briefly remind the prospect of the value discussed, avoid guilt-tripping language like \"just following up again,\" and explicitly make it easy to say no, since an email a prospect can dismiss with a one-word reply often gets more engagement than one demanding a decision.",
    exampleInput:
      "Prospect showed strong interest 3 weeks ago after a demo, asked good questions about integrations, then went silent despite two follow-up emails.",
    exampleOutput:
      "Hi [Name],\n\nI know things get busy, so no worries if this has slipped down the priority list. I just wanted to check back in since you had some great questions about integrations during our demo a few weeks back.\n\nIf now isn't the right time, totally understand — just let me know and I'll check back down the road. If it's still relevant, happy to pick up where we left off.\n\nEither way works,\n[Your name]",
    faq: [
      {
        question: "How many follow-ups should happen before sending a re-engagement email like this?",
        answer:
          "This tool works best after a couple of standard follow-ups have already gone unanswered — it's meant as a tone shift once normal follow-up cadence has stalled, not a replacement for the first follow-up.",
      },
      {
        question: "Why does it make it easy to say no?",
        answer:
          "Counterintuitively, giving the prospect an easy exit tends to increase reply rates — it removes the awkwardness of ignoring another pushy email and often prompts either a clear no or renewed interest.",
      },
      {
        question: "Can this be used for a lead that never responded at all, not just one who went quiet after interest?",
        answer:
          "It's built specifically for leads who showed real interest before going quiet. For leads who never engaged at all, the cold outreach generator with a fresh angle is usually a better fit than a re-engagement email.",
      },
    ],
  },
  {
    slug: "demo-request-follow-up",
    category: "sales-email",
    inputType: "demo notes",
    outputType: "follow-up email",
    promptTemplate:
      "Write a follow-up email to send after a product demo, based on the following notes on what was shown and how the prospect reacted. Reinforce the features that resonated most and propose a clear next step. Return only the email, no preamble.\n\nDemo notes:\n{input}",
    seoTitle: "Free Demo Request Follow-Up Email Generator",
    seoDescription:
      "Turn demo notes into a follow-up email that reinforces what resonated and proposes a next step. Free tool.",
    h1: "Generate a Post-Demo Follow-Up Email",
    introCopy:
      "Right after a product demo, a prospect has seen a lot in a short window, and much of it will blur together within a day unless the follow-up email reinforces the specific moments that landed. This tool is scoped specifically to that post-demo moment — different from a general sales follow-up because it's built to reference exact features or moments the prospect reacted to during the demo itself, re-anchoring their memory on what impressed them rather than summarizing the whole session generically. Use it within a day of the demo while the reactions you noted are still specific and fresh.",
    exampleInput:
      "Demo with a mid-size retail company. Prospect got most engaged during the automated reorder alerts feature and asked several follow-up questions about it. Less interested in the reporting dashboard. Next step: send pricing tiers based on their SKU count.",
    exampleOutput:
      "Hi [Name],\n\nThanks for making time for the demo today — it was great to see how much the automated reorder alerts resonated with your team, especially given the questions you raised about how it handles your SKU volume.\n\nAs promised, I'll follow up shortly with pricing tiers based on your SKU count so you can see exactly where you'd land.\n\nLet me know if any other questions come up in the meantime.\n\nBest,\n[Your name]",
    faq: [
      {
        question: "What if the prospect didn't react strongly to any particular feature?",
        answer:
          "Include whatever notes you have, even general ones — the tool will still produce a solid recap and next-step email, though referencing at least one specific reaction tends to make the follow-up feel more personal and effective.",
      },
      {
        question: "Should I mention the parts of the demo that didn't land well?",
        answer:
          "You can, but the tool is designed to lead with what resonated rather than dwell on lukewarm reactions — reinforcing strengths tends to move a deal forward more than revisiting weaker moments.",
      },
      {
        question: "How is this different from the general sales follow-up generator?",
        answer:
          "The general follow-up tool works from any call or meeting notes. This one is specifically tuned for the post-demo context, expecting notes about which features were shown and how the prospect reacted to each.",
      },
    ],
  },
  {
    slug: "sales-email-tone-softener",
    category: "sales-email",
    inputType: "sales email",
    outputType: "softened sales email",
    promptTemplate:
      "Rewrite the following sales email to sound less pushy and more consultative — reduce urgency language, soften the call to action, and make it feel more like helpful advice than a sales pitch. Return only the rewritten email, no preamble.\n\nSales email:\n{input}",
    seoTitle: "Free Sales Email Tone Softener — Less Pushy, More Human",
    seoDescription:
      "Rewrite a pushy sales email to sound consultative and helpful instead of salesy. Free tool, softens urgency and CTAs.",
    h1: "Soften the Tone of a Sales Email",
    introCopy:
      "Some sales emails read as aggressive without anyone intending it that way — a deadline in every paragraph, three exclamation points, a CTA that leaves no room for \"not now.\" This tool specifically targets that failure mode: it takes an existing sales email and dials back urgency language and pressure-heavy phrasing, softening the call to action so the email reads more like useful advice from someone who understands the prospect's problem than a pitch trying to close today. It's particularly useful for outbound sequences aimed at more senior or skeptical buyers, who tend to disengage fastest from anything that feels like a hard sell.",
    exampleInput:
      "Don't miss out! This offer ends Friday and spots are filling up fast. You need to act now before it's too late — click below to lock in your discount before time runs out!",
    exampleOutput:
      "Just a heads up that this offer wraps up Friday, in case the timing is useful for your planning. No pressure either way — happy to answer any questions if you want to take a closer look before then.",
    faq: [
      {
        question: "Will it remove the deadline or urgency entirely?",
        answer:
          "It typically softens the framing rather than removing factual details like a real deadline — the goal is to state timing calmly as useful information, not as pressure, rather than erasing it altogether.",
      },
      {
        question: "Is this the same as the general ad copy tone shifter?",
        answer:
          "No — the ad copy tone shifter can move toward any tone including bolder or louder. This tool moves in one specific direction: less pushy and more consultative, tailored to one-to-one sales email rather than broadcast ad copy.",
      },
      {
        question: "Won't a softer email convert worse?",
        answer:
          "Not necessarily — for skeptical or senior buyers, an overly pushy email often gets ignored entirely, so a more consultative tone can improve response rates even though it feels less aggressive on the page.",
      },
    ],
  },

  // ---------- PROPOSAL ----------
  {
    slug: "project-scope-to-proposal",
    category: "proposal",
    inputType: "project scope notes",
    outputType: "proposal",
    promptTemplate:
      "Turn the following rough project scope notes into a structured client proposal with sections for Overview, Scope of Work, Timeline, and Investment. Use professional but approachable language. Return only the proposal, no preamble.\n\nProject scope notes:\n{input}",
    seoTitle: "Free Project Scope to Proposal Generator",
    seoDescription:
      "Turn rough project scope notes into a structured client proposal with overview, scope, timeline, and pricing. Free tool.",
    h1: "Turn Project Scope Notes Into a Proposal",
    introCopy:
      "Most proposals start life as a messy set of notes taken during or right after a discovery call — scope items in no particular order, a rough timeline scribbled down, a price that was mentioned verbally but never formalized. This tool is the full-document generator in this category: it takes that raw material and organizes it into a structured proposal with clear Overview, Scope of Work, Timeline, and Investment sections, ready to send or lightly edit. It's the broadest tool here — for a shorter version of an existing proposal, use the summary or one-pager tools instead.",
    exampleInput:
      "Website redesign for a 12-person law firm. Need new homepage, about page, 4 practice area pages, contact form with intake questions. Client wants mobile-first design. Timeline: 6 weeks. Price: $8,500, half upfront.",
    exampleOutput:
      "Overview\nThis proposal outlines a full website redesign for your firm, focused on a modern, mobile-first experience that reflects your practice areas clearly and makes it easy for prospective clients to reach out.\n\nScope of Work\n- New homepage design\n- New About page\n- 4 practice area pages\n- Custom contact form with built-in intake questions\n- Fully responsive, mobile-first design across all pages\n\nTimeline\nThe project will be completed over 6 weeks from kickoff, with milestone check-ins for design approval and content review along the way.\n\nInvestment\nTotal project cost: $8,500, with 50% due upfront to begin work and the remaining balance due upon completion.",
    faq: [
      {
        question: "Do I need to provide notes for all four sections?",
        answer:
          "Provide as much as you have — the tool will build out reasonable structure even from partial notes, but sections like pricing will be more accurate the more specific detail you give it.",
      },
      {
        question: "Can I add more sections, like a team bio or case studies?",
        answer:
          "Mention any additional sections you want in your notes, such as \"include a section about our past clients,\" and the tool will incorporate them into the structure.",
      },
      {
        question: "How is this different from the scope-of-work generator tool?",
        answer:
          "This tool produces a full client-facing proposal with pricing and timeline framing meant to win the work. The scope-of-work tool focuses narrowly on defining deliverables and boundaries, often used as an internal or contractual reference document rather than a pitch.",
      },
    ],
  },
  {
    slug: "proposal-summary-generator",
    category: "proposal",
    inputType: "full proposal",
    outputType: "proposal summary",
    promptTemplate:
      "Summarize the following full proposal into a concise 3-4 sentence overview suitable for a busy stakeholder skimming quickly. Capture the what, the timeline, and the cost. Return only the summary, no preamble.\n\nProposal:\n{input}",
    seoTitle: "Free Proposal Summary Generator",
    seoDescription:
      "Condense a full proposal into a 3-4 sentence summary covering scope, timeline, and cost. Free tool for busy stakeholders.",
    h1: "Summarize a Proposal",
    introCopy:
      "A full proposal often gets forwarded to a decision-maker who wasn't part of the original conversation and won't read six pages before a meeting — they need the what, the when, and the how much in a few sentences, fast. This tool takes an already-written proposal and compresses it into a short summary built for exactly that skimming reader, distinct from the executive summary tool in that it's meant as a forward-along blurb or email preview text rather than a formal document section with its own heading and place in the proposal itself.",
    exampleInput:
      "Overview: This proposal covers a full brand identity overhaul including new logo, color palette, typography system, and brand guidelines document. Scope of Work: Logo design (3 concepts, 2 revision rounds), full color and type system, 20-page brand guidelines PDF. Timeline: 5 weeks from kickoff. Investment: $6,200 total, invoiced in two installments.",
    exampleOutput:
      "This proposal covers a full brand identity overhaul — new logo (3 concepts, 2 revision rounds), color and typography system, and a 20-page brand guidelines document. The project runs 5 weeks from kickoff and totals $6,200, invoiced in two installments.",
    faq: [
      {
        question: "Will it always mention the price?",
        answer:
          "Yes, if a price or investment figure appears anywhere in your input, the summary is built to include it since cost is typically one of the first things a busy stakeholder wants to know.",
      },
      {
        question: "Can I use this as the opening paragraph of the proposal itself?",
        answer:
          "It can work that way, but it's phrased more like a standalone blurb for forwarding or a preview than a formal opening section — for that, the executive summary tool is written more explicitly as a proposal's lead section.",
      },
      {
        question: "What if my proposal doesn't have clear section headers?",
        answer:
          "That's fine — paste the proposal as continuous text and the tool will still identify the scope, timeline, and cost details even without formal headers.",
      },
    ],
  },
  {
    slug: "proposal-executive-summary",
    category: "proposal",
    inputType: "proposal details",
    outputType: "executive summary",
    promptTemplate:
      "Write a compelling executive summary section (150-200 words) for a proposal, based on the following details. It should be written to persuade a decision-maker and lead with the client's problem before presenting the solution. Return only the executive summary, no preamble.\n\nProposal details:\n{input}",
    seoTitle: "Free Proposal Executive Summary Generator",
    seoDescription:
      "Write a persuasive 150-200 word executive summary for your proposal, leading with the client's problem. Free tool.",
    h1: "Write a Proposal Executive Summary",
    introCopy:
      "An executive summary isn't a shorter version of the proposal, it's a different genre entirely — the one section actually written to persuade, meant to be read even by someone who reads nothing else in the document. This tool is built to lead with the client's problem before introducing your solution, since decision-makers respond to a summary that proves you understood their situation before it pivots to selling something. It differs from the plain summary generator, which is descriptive and neutral for quick skimming — this one is deliberately persuasive and belongs as the opening section of the proposal itself, not a forwarding blurb.",
    exampleInput:
      "Client is a regional hospital network struggling with patient no-show rates around 22%, costing an estimated $1.2M annually in lost appointment slots. We're proposing an automated appointment reminder and rebooking system via SMS and email, projected to cut no-shows by half based on results with similar clients.",
    exampleOutput:
      "Patient no-shows are quietly costing your hospital network an estimated $1.2 million each year — roughly 22% of scheduled appointments go unfilled, leaving both revenue and care capacity on the table. This proposal outlines an automated reminder and rebooking system, delivered via SMS and email, designed specifically to close that gap.\n\nBased on results with hospital networks of similar size, we project this system can cut no-show rates by roughly half, recovering both lost revenue and valuable appointment capacity for patients who need it. The sections that follow detail the full scope, implementation timeline, and investment required to bring this system online.",
    faq: [
      {
        question: "Why does it lead with the problem instead of our company or solution?",
        answer:
          "Decision-makers are more persuaded by a summary that demonstrates a clear understanding of their specific problem before pivoting to the fix — leading with your company or solution tends to read as generic sales copy instead.",
      },
      {
        question: "Should I include specific numbers, like cost estimates or projected results?",
        answer:
          "Yes, concrete numbers make the executive summary significantly more persuasive. Include any hard figures you have — cost of the problem, projected improvement, timeline — even if approximate.",
      },
      {
        question: "Is 150-200 words a strict limit?",
        answer:
          "That range is a good target for most executive summaries, but the tool prioritizes making a complete, persuasive case over hitting an exact word count, so it may run slightly longer for complex proposals.",
      },
    ],
  },
  {
    slug: "freelance-proposal-generator",
    category: "proposal",
    inputType: "job post and freelancer notes",
    outputType: "freelance proposal",
    promptTemplate:
      "Write a personalized freelance proposal/cover letter responding to the following client job post and freelancer background notes. Address the client's specific need directly, briefly establish credibility, and end with a clear next step. Keep it under 200 words. Return only the proposal, no preamble.\n\nJob post and freelancer notes:\n{input}",
    seoTitle: "Free Freelance Proposal Generator",
    seoDescription:
      "Generate a personalized freelance proposal or cover letter for a job post, under 200 words. Free tool for Upwork and more.",
    h1: "Generate a Freelance Proposal",
    introCopy:
      "Freelance marketplace proposals live or die on the first two sentences, since clients posting a job often skim dozens of near-identical pitches that open with \"I am a highly skilled professional with X years of experience.\" This tool is built to avoid that opening entirely — it reads the actual job post details you provide and addresses the client's specific stated need directly, then briefly establishes relevant credibility from your background notes, before ending with a clear, low-friction next step. It's scoped specifically for the one-to-one, marketplace-style proposal (Upwork, Fiverr, direct client outreach), not for a formal multi-page agency-style document.",
    exampleInput:
      "Job post: Need a freelance copywriter to rewrite our SaaS website homepage, currently too technical and jargon-heavy, want it to convert better for non-technical buyers. Freelancer background: 6 years writing SaaS copy, worked with 3 similar B2B companies, portfolio available.",
    exampleOutput:
      "Hi there,\n\nJargon-heavy SaaS copy is one of the most common conversion killers I see — if non-technical buyers can't quickly understand the value, they bounce before they ever get to your pricing page.\n\nI've spent the last 6 years writing SaaS copy specifically, including homepage rewrites for 3 other B2B companies facing this exact issue, translating technical features into language their buyers actually respond to. I'd love to take a look at your current homepage and share a couple of quick thoughts on where the biggest opportunities are, no obligation.\n\nHappy to share relevant portfolio samples too — let me know if you'd like to chat.\n\nBest,\n[Your name]",
    faq: [
      {
        question: "Should I paste the entire job post, or just a summary?",
        answer:
          "The entire job post works best since the tool pulls specific details from it to personalize the proposal — the more specific the client's stated problem, the more targeted the response.",
      },
      {
        question: "Will it exaggerate my experience if I don't provide much background?",
        answer:
          "No, it only uses the credibility details you actually provide. If your background notes are thin, consider adding at least one concrete, relevant detail before generating, since vague credibility claims tend to blend in with every other proposal.",
      },
      {
        question: "Is 200 words too short for a more complex project?",
        answer:
          "For most marketplace job posts, shorter performs better since clients are skimming many proposals — you can always follow up with more detail once they respond, rather than front-loading everything in the initial pitch.",
      },
    ],
  },
  {
    slug: "proposal-to-one-pager",
    category: "proposal",
    inputType: "full proposal",
    outputType: "one-pager",
    promptTemplate:
      "Condense the following full proposal into a single-page format: a short intro, 3-5 key bullet points covering scope and value, and a pricing/next-steps line at the bottom. Return only the one-pager content, no preamble.\n\nProposal:\n{input}",
    seoTitle: "Free Proposal to One-Pager Converter",
    seoDescription:
      "Condense a full proposal into a single-page format with key bullets and a pricing line. Free tool, ready to send.",
    h1: "Turn a Proposal Into a One-Pager",
    introCopy:
      "Some audiences will never open a multi-page proposal document but will read a single page pinned to a Slack message or handed across a table in a meeting. This tool takes a full proposal and restructures it into that one-page format specifically — a short intro, three to five bullets covering scope and value, and a pricing or next-steps line at the very bottom — rather than just shortening prose the way the summary tool does. Think of it as a different document type built for a different moment: a leave-behind or a quick-reference version, not a preview blurb.",
    exampleInput:
      "Overview: Full SEO audit and 6-month content strategy for an e-commerce client currently ranking on page 3 for their main category terms. Scope: technical audit, keyword research, 24 blog posts over 6 months, monthly reporting. Timeline: 6 months, starting within 2 weeks of signing. Investment: $12,000 total, billed monthly at $2,000.",
    exampleOutput:
      "SEO Growth Plan — One Pager\n\nCurrently ranking on page 3 for your core category terms — this plan is built to change that over 6 months.\n\n- Full technical SEO audit to fix what's holding rankings back\n- In-depth keyword research targeting your actual buyers\n- 24 blog posts published over 6 months to build topical authority\n- Monthly reporting so progress is never a mystery\n- Kickoff within 2 weeks of signing\n\nInvestment: $12,000 total, billed monthly at $2,000. Ready to move forward? Let's get started.",
    faq: [
      {
        question: "Will it fit on an actual single printed page?",
        answer:
          "The content is sized to fit comfortably on one page at a normal font size, though final formatting (fonts, margins, branding) will depend on how you lay it out in your document or design tool.",
      },
      {
        question: "How does this differ from the proposal summary tool?",
        answer:
          "The summary tool produces a few sentences of flowing prose meant for quick skimming or forwarding. This tool produces a structured, bulleted single-page document meant to be shared or printed as its own artifact.",
      },
      {
        question: "Can I use this as a leave-behind after an in-person pitch meeting?",
        answer:
          "Yes, that's one of the most common uses — a scannable one-pager works well as something to hand over or email immediately after a meeting while the conversation is still fresh.",
      },
    ],
  },
  {
    slug: "scope-of-work-generator",
    category: "proposal",
    inputType: "project notes",
    outputType: "scope of work",
    promptTemplate:
      "Turn the following project notes into a clear, specific scope of work document: list deliverables, what is explicitly included, and what is explicitly excluded to prevent scope creep. Return only the scope of work, no preamble.\n\nProject notes:\n{input}",
    seoTitle: "Free Scope of Work Generator",
    seoDescription:
      "Turn project notes into a clear scope of work with deliverables and explicit exclusions to prevent scope creep. Free tool.",
    h1: "Generate a Scope of Work Document",
    introCopy:
      "A proposal is written to win the work; a scope of work is written to protect both sides once the work has started, which is why this tool is deliberately more precise and less persuasive than the proposal generator. It takes project notes and produces a document centered on two things most scope documents skip: an explicit list of what's included, and an equally explicit list of what's excluded, since the exclusions are usually what prevents scope creep and awkward mid-project renegotiation. Use this after a proposal has been accepted, as the operational or contractual companion document, not as the pitch itself.",
    exampleInput:
      "Redesigning a client's e-commerce checkout flow. Includes new checkout UI, payment integration testing, mobile optimization. Does not include full site redesign, new payment provider setup, or ongoing maintenance after launch.",
    exampleOutput:
      "Scope of Work: Checkout Flow Redesign\n\nDeliverables\n- Redesigned checkout UI (desktop and mobile)\n- Payment integration testing across existing providers\n- Mobile-specific optimization of the checkout flow\n\nIncluded\n- Design and development of the checkout experience only\n- QA testing of payment flows with current providers\n- Responsive behavior across mobile and desktop\n\nExcluded\n- Redesign of any pages outside the checkout flow\n- Setup or integration of new payment providers\n- Post-launch maintenance or ongoing support\n\nAny work outside the items listed above will require a separate scope and quote.",
    faq: [
      {
        question: "Why does the tool focus so much on what's excluded?",
        answer:
          "Explicit exclusions are what actually prevent scope creep — clients and vendors both benefit from knowing upfront what's not covered, so this tool treats the exclusion list as equally important as the deliverables list.",
      },
      {
        question: "Is this a legal contract?",
        answer:
          "No, this is a working scope document, not a legal contract. For binding terms, payment enforcement, or liability language, have a real contract or statement of work reviewed by a legal professional.",
      },
      {
        question: "How is this different from the project-scope-to-proposal tool?",
        answer:
          "That tool produces a persuasive, client-facing pitch document meant to win the work, including pricing framed to sell. This tool produces a more neutral, precise reference document meant to define boundaries once the work is already agreed upon.",
      },
    ],
  },
  {
    slug: "proposal-pricing-section-generator",
    category: "proposal",
    inputType: "pricing details",
    outputType: "pricing section",
    promptTemplate:
      "Write a clear, professional pricing/investment section for a proposal based on the following raw pricing details. Present it in a way that justifies the cost by tying it back to value, not just listing numbers. Return only the pricing section, no preamble.\n\nPricing details:\n{input}",
    seoTitle: "Free Proposal Pricing Section Generator",
    seoDescription:
      "Turn raw pricing details into a clear proposal pricing section that ties cost back to value. Free tool, no signup.",
    h1: "Write a Proposal Pricing Section",
    introCopy:
      "A pricing section that's just a number on a line invites the reader to think purely in terms of cost, whereas a pricing section that briefly reconnects the number to the value delivered keeps the reader thinking in terms of return. This tool is scoped narrowly to that one section of a proposal — take your raw pricing details, whatever the structure (flat fee, tiered, milestone-based, hourly), and it writes the presentation of that pricing in a way that justifies it rather than just listing figures. It's meant to slot into a larger, already-drafted proposal rather than stand alone as a full document.",
    exampleInput:
      "Total project: $15,000. Broken into 3 milestones: $5,000 at kickoff, $5,000 at midpoint review, $5,000 at final delivery.",
    exampleOutput:
      "Investment\n\nThe total investment for this project is $15,000, structured across three milestones to keep progress aligned with payment: $5,000 due at kickoff to begin work, $5,000 at the midpoint review once core deliverables are in place, and the final $5,000 upon completion and delivery.\n\nThis milestone structure ensures you're only paying as value is delivered at each stage, with full visibility into progress along the way.",
    faq: [
      {
        question: "Can it handle hourly pricing, not just flat fees?",
        answer:
          "Yes, describe your rate and estimated hours or a not-to-exceed cap, and the tool will present it clearly, including framing around flexibility if that's relevant to your engagement.",
      },
      {
        question: "Will it inflate the perceived value in a way that feels dishonest?",
        answer:
          "The tool ties pricing back to value already present in your notes rather than inventing claims — for the best results, provide any real value context (time saved, results expected) so the framing stays grounded in fact.",
      },
      {
        question: "Should this replace the full proposal generator or work alongside it?",
        answer:
          "It's meant to work alongside — use the project-scope-to-proposal tool for the full document, then use this tool if you want to polish or regenerate just the pricing section specifically.",
      },
    ],
  },
  {
    slug: "proposal-tone-formalizer",
    category: "proposal",
    inputType: "proposal draft",
    outputType: "formalized proposal",
    promptTemplate:
      "Rewrite the following proposal draft in a more formal, polished, corporate-appropriate tone suitable for a larger enterprise client, without losing any of the specific content or numbers. Return only the rewritten proposal, no preamble.\n\nProposal draft:\n{input}",
    seoTitle: "Free Proposal Tone Formalizer",
    seoDescription:
      "Rewrite a casual proposal draft in a formal, enterprise-appropriate tone without losing any content. Free tool.",
    h1: "Formalize the Tone of a Proposal",
    introCopy:
      "A proposal drafted quickly for a small business client, in a casual and friendly voice, often needs a different register entirely when the same service is pitched to a large enterprise with a formal procurement process. This tool takes an existing, casually-written proposal draft and elevates the tone to something more polished and corporate-appropriate, while explicitly preserving every specific detail and number rather than just adding stiff-sounding filler words. It's a one-directional tool — formal only — built for the specific scenario of repurposing proven proposal content for a more conservative buyer.",
    exampleInput:
      "So here's what we're thinking — we'll redo your whole onboarding flow, should take about 8 weeks, and it'll run you $22,000. We're pretty confident this will cut your support tickets way down.",
    exampleOutput:
      "We propose a comprehensive redesign of your onboarding flow, with an estimated timeline of 8 weeks from project kickoff. The total investment for this engagement is $22,000. Based on our experience with comparable implementations, we anticipate this redesign will meaningfully reduce the volume of support tickets your team currently manages.",
    faq: [
      {
        question: "Will formalizing the tone make the numbers or scope less clear?",
        answer:
          "No — all specific numbers, timelines, and scope details from your draft are preserved exactly. Only word choice and sentence structure become more formal.",
      },
      {
        question: "Is there a tool that goes the opposite direction, formal to casual?",
        answer:
          "For proposals specifically, this tool is one-directional toward formal since that's the more common need in this category. For a two-way formal/casual adjustment, the product description formal/casual rewrite tool covers that pattern in a different category.",
      },
      {
        question: "How formal does the output get — stiff and jargon-heavy, or just more polished?",
        answer:
          "It aims for polished and professional rather than jargon-heavy or stiff — the goal is language appropriate for an enterprise procurement audience, not artificially inflated corporate-speak.",
      },
    ],
  },
  {
    slug: "rfp-response-generator",
    category: "proposal",
    inputType: "RFP requirements and vendor notes",
    outputType: "RFP response",
    promptTemplate:
      "Using the following RFP requirements and our vendor notes, draft a structured RFP response that addresses each requirement directly and clearly demonstrates fit. Organize the response to mirror the order of the requirements. Return only the response, no preamble.\n\nRFP requirements and vendor notes:\n{input}",
    seoTitle: "Free RFP Response Generator",
    seoDescription:
      "Draft a structured RFP response that addresses each requirement directly, mirroring the RFP's own order. Free tool.",
    h1: "Generate an RFP Response",
    introCopy:
      "RFP evaluators are typically scoring responses against a checklist derived directly from their own requirements document, which means a response that wanders off in its own structure, however well-written, actively makes their job harder and can cost points on formality alone. This tool is built around that constraint: it takes the RFP's stated requirements alongside your vendor notes and drafts a response that mirrors the requirements' own order, addressing each point directly rather than reorganizing the pitch around your preferred narrative. It's the most structurally rigid tool in this category by design, since RFP responses are graded, not just read.",
    exampleInput:
      "RFP requirements: 1) Vendor must have 5+ years experience in healthcare data migration. 2) Solution must be HIPAA compliant. 3) Vendor must provide 24/7 support. Vendor notes: We have 8 years in healthcare data migration, fully HIPAA compliant with SOC 2 Type II, offer 24/7 support via phone and chat with a 15-minute response SLA.",
    exampleOutput:
      "1. Experience in Healthcare Data Migration\nOur team brings 8 years of dedicated experience in healthcare data migration, exceeding the 5-year requirement, with a track record across multiple large-scale implementations.\n\n2. HIPAA Compliance\nOur solution is fully HIPAA compliant and further validated by SOC 2 Type II certification, providing an additional layer of assurance around data security and handling.\n\n3. 24/7 Support\nWe provide around-the-clock support via both phone and chat, backed by a 15-minute response SLA, ensuring issues are addressed promptly regardless of when they arise.",
    faq: [
      {
        question: "What if we don't fully meet one of the requirements?",
        answer:
          "Be honest about it in your vendor notes — the tool will present partial fit as accurately and favorably as possible without fabricating a capability you don't have, since misrepresenting fit in an RFP response can disqualify a bid entirely.",
      },
      {
        question: "Will it number the response to match the RFP's own numbering?",
        answer:
          "Yes, the response is structured to mirror the order and numbering of the requirements you provide, which is standard practice for making RFP responses easy for evaluators to score.",
      },
      {
        question: "Can I paste in a long, multi-page RFP requirements list?",
        answer:
          "Yes, paste as many requirements as you have alongside corresponding vendor notes for each — the more complete your notes per requirement, the more specific and convincing each corresponding section of the response will be.",
      },
    ],
  },
  {
    slug: "proposal-follow-up-email",
    category: "proposal",
    inputType: "proposal details",
    outputType: "follow-up email",
    promptTemplate:
      "Write a brief follow-up email to send after submitting the following proposal, checking in without being pushy and offering to answer questions. Reference the core value of the proposal briefly. Return only the email, no preamble.\n\nProposal details:\n{input}",
    seoTitle: "Free Proposal Follow-Up Email Generator",
    seoDescription:
      "Generate a brief, non-pushy follow-up email to send after a proposal, referencing its core value. Free tool.",
    h1: "Generate a Proposal Follow-Up Email",
    introCopy:
      "After a proposal goes out, there's an awkward window where following up too aggressively can feel like pressure, but not following up at all lets a genuinely interested prospect's attention drift to something else entirely. This tool writes the specific, brief check-in email meant for that window — it references the core value of the proposal in one line to jog memory without re-pitching the whole thing, and offers to answer questions rather than pushing for a decision. It's the natural next step after using the project-scope-to-proposal tool, once enough time has passed that a check-in feels reasonable rather than premature.",
    exampleInput:
      "Sent a proposal 5 days ago for a $9,000 email marketing overhaul project, projected to increase open rates by 15%, no response yet.",
    exampleOutput:
      "Hi [Name],\n\nJust wanted to check in on the proposal I sent over last week for the email marketing overhaul — happy to answer any questions or walk through the projected 15% open rate improvement in more detail if that would help.\n\nNo rush at all, just wanted to make sure it didn't get buried in your inbox.\n\nBest,\n[Your name]",
    faq: [
      {
        question: "How soon after sending a proposal should I send this follow-up?",
        answer:
          "There's no universal rule, but a common cadence is checking in around 3-7 days after sending if you haven't heard back, giving the recipient reasonable time to review before you reach out again.",
      },
      {
        question: "Will it re-explain the whole proposal?",
        answer:
          "No, by design it references the core value in just a line or two rather than re-pitching the full proposal, since the goal is a light touch that prompts a response, not a repeat of the original pitch.",
      },
      {
        question: "What if this is my second or third follow-up with no response at all?",
        answer:
          "For a proposal that's gone unanswered after multiple follow-ups, the re-engagement email generator tool is a better fit since it's built specifically for lowering pressure further and making it easy for the prospect to simply say no.",
      },
    ],
  },
];
