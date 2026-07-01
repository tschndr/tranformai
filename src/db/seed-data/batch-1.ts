import type { ToolSeed } from "./types";

export const batch1: ToolSeed[] = [
  // ===== TWITTER (10) =====
  {
    slug: "tweet-to-blog-post",
    category: "twitter",
    inputType: "tweet",
    outputType: "blog post",
    promptTemplate:
      "Expand the following tweet into a full blog post of roughly 500-700 words. Keep the original core idea intact, add supporting explanation, examples, and a natural conclusion. Use a clear title and short paragraphs. Return only the blog post, no preamble.\n\nTweet:\n{input}",
    seoTitle: "Turn a Tweet Into a Blog Post — Free AI Expander",
    seoDescription:
      "Paste a single tweet and get a full-length blog post built around its idea, with a title, structure, and supporting detail. Free, no signup.",
    h1: "Tweet to Blog Post",
    introCopy:
      "A good tweet is often just a compressed version of a longer idea you haven't written yet. This tool takes that one-liner and pulls the thread on it, generating a structured blog post with a title, an opening hook, a few developed sections, and a close. It's built for writers who tweet first and blog later, or who want to repurpose a tweet that got traction into something more permanent and searchable. Unlike a thread expansion, the output here is prose meant for a blog, not a numbered sequence of short posts.",
    exampleInput:
      "hot take: most productivity advice is just procrastination with extra steps",
    exampleOutput:
      "Why Most Productivity Advice Is Procrastination in Disguise\n\nThere's a specific kind of person who has read every productivity book, tried every app, and color-coded every calendar — and still isn't shipping the thing they set out to build. If that sounds familiar, the problem probably isn't a lack of systems. It's that researching systems has quietly become the task itself.\n\nProductivity content is seductive because it feels like progress. Reading about the perfect morning routine gives you a small hit of accomplishment without the risk of actually doing hard work. It's procrastination wearing the costume of self-improvement...\n\n(continues with sections on recognizing the pattern, a simpler alternative, and a closing takeaway)",
    faq: [
      {
        question: "Will the blog post just repeat the tweet with filler?",
        answer:
          "No — the model is instructed to develop the idea with real explanation and examples, not pad it out. You may still want to add a personal anecdote for extra authenticity.",
      },
      {
        question: "How long is the output?",
        answer:
          "Typically 500-700 words, which is enough for a short-to-medium blog post but leaves room for you to extend further if needed.",
      },
      {
        question: "Does it work with tweets that are opinions vs. facts?",
        answer:
          "Both work well. Opinion-style tweets tend to produce more argumentative posts, while factual tweets produce more explanatory ones.",
      },
    ],
  },
  {
    slug: "thread-to-linkedin-post",
    category: "twitter",
    inputType: "twitter thread",
    outputType: "LinkedIn post",
    promptTemplate:
      "Rewrite the following Twitter/X thread as a single LinkedIn post. Combine the ideas into flowing paragraphs, adopt a more professional but still personal tone, and remove any Twitter-specific formatting like numbering or hashtags mid-sentence. End with a short reflective line or question to invite engagement. Return only the LinkedIn post, no preamble.\n\nThread:\n{input}",
    seoTitle: "Convert a Twitter Thread to a LinkedIn Post — Free Tool",
    seoDescription:
      "Turn a numbered Twitter/X thread into a polished, professional LinkedIn post ready to repost. Free AI converter, no signup.",
    h1: "Thread to LinkedIn Post",
    introCopy:
      "Threads and LinkedIn posts look similar but read very differently — a thread is built for quick, punchy scrolling while LinkedIn rewards a slower, more narrative style. This tool merges your numbered tweets into cohesive paragraphs, softens the punchiness into professional-but-personal prose, and strips out the 1/, 2/, 3/ formatting that looks out of place off Twitter. It's meant for creators who write once on X and want a same-day repost on LinkedIn without manually rewriting every line.",
    exampleInput:
      "1/ I quit my job 6 months ago to build full time\n2/ revenue is still $0\n3/ but I've learned more in 6 months than 3 years at my last job\n4/ here's what surprised me most",
    exampleOutput:
      "Six months ago I left my job to build full-time. Revenue is still $0.\n\nAnd yet I've learned more in these six months than in three years at my last company.\n\nA few things surprised me along the way — how much of \"building\" is actually just talking to people, how little the idea mattered compared to execution, and how much slower everything moves without a team around you.\n\nWould I do it again? Without hesitation. What's the biggest thing you learned the hard way this year?",
    faq: [
      {
        question: "Does it keep the numbered list format?",
        answer:
          "No — LinkedIn posts read better as flowing paragraphs, so the numbering and tweet breaks are removed and merged into connected prose.",
      },
      {
        question: "Will it add hashtags like a typical LinkedIn post?",
        answer:
          "It avoids stuffing hashtags automatically since usage varies a lot by industry; you can add 2-3 relevant ones yourself after generating.",
      },
      {
        question: "What if my thread already sounds professional?",
        answer:
          "It'll still restructure the pacing for LinkedIn's format and add a closing line, since even professional threads often need a different rhythm on LinkedIn.",
      },
    ],
  },
  {
    slug: "tweet-to-professional-tone",
    category: "twitter",
    inputType: "tweet",
    outputType: "professional-tone tweet",
    promptTemplate:
      "Rewrite the following tweet in a more professional, polished tone while preserving its core message and length constraints suitable for Twitter/X (under 280 characters). Remove slang, excessive punctuation, and casual abbreviations. Return only the rewritten tweet, no preamble.\n\nTweet:\n{input}",
    seoTitle: "Make a Tweet Sound Professional — Free AI Rewriter",
    seoDescription:
      "Instantly rewrite a casual tweet into a polished, professional version that still fits Twitter's character limit. Free, no signup.",
    h1: "Tweet to Professional Tone",
    introCopy:
      "Some tweets are written in the heat of the moment and need a cleaner version before they go out under a company or personal brand account. This tool takes a casual, slang-heavy, or ranty tweet and rewrites it with a more measured, professional tone, while keeping it short enough to actually post. It's the fastest fix when you've drafted something honest but rough and need a version safe to share on a brand account or in a more formal community.",
    exampleInput:
      "ngl our onboarding flow is straight up broken rn and idk who approved it lol",
    exampleOutput:
      "Our onboarding flow currently has significant issues, and we're reviewing how it was approved in its current state.",
    faq: [
      {
        question: "Will it still fit within the tweet character limit?",
        answer:
          "Yes, the rewrite is constrained to stay under 280 characters so it can be posted as-is without further trimming.",
      },
      {
        question: "Does it remove emojis too?",
        answer:
          "It typically strips or minimizes emojis since they read as casual, but the core message and any names or numbers are preserved.",
      },
      {
        question: "Is this the same as the reply generator tool?",
        answer:
          "No — this rewrites your own standalone tweet's tone. The reply generator instead drafts a new reply to someone else's tweet.",
      },
    ],
  },
  {
    slug: "thread-summarizer",
    category: "twitter",
    inputType: "twitter thread",
    outputType: "summary",
    promptTemplate:
      "Summarize the following Twitter/X thread into a concise 2-4 sentence summary that captures the main point and any key conclusion. Do not include minor examples or asides. Return only the summary, no preamble.\n\nThread:\n{input}",
    seoTitle: "Summarize a Twitter Thread — Free AI Thread Summarizer",
    seoDescription:
      "Paste a long Twitter/X thread and get a tight 2-4 sentence summary of the main point. Free, fast, no signup required.",
    h1: "Thread Summarizer",
    introCopy:
      "Long threads are great for making an argument step by step, but terrible for skimming — you often have to read all 15 tweets to find the actual point. This tool condenses a full thread down to a few sentences that capture only the core claim and conclusion, cutting the anecdotes and asides along the way. It's built for people who bookmark threads to read later and never do, or who want to quote-tweet a thread with a one-line summary instead of forcing readers to click through.",
    exampleInput:
      "1/ spent 3 years optimizing my morning routine\n2/ tried cold showers, 5am wakeups, journaling, all of it\n3/ turns out the only thing that mattered was sleep\n4/ everything else was noise\n5/ if you fix one thing, fix your sleep first",
    exampleOutput:
      "After three years experimenting with elaborate morning routines, the author found that sleep quality was the only factor that actually mattered — everything else (cold showers, early wakeups, journaling) was noise. Their advice: prioritize fixing sleep before adopting any other routine.",
    faq: [
      {
        question: "How long is the summary?",
        answer:
          "Two to four sentences, enough to capture the main claim and conclusion without needing to read the full thread.",
      },
      {
        question: "Does it preserve the original author's opinion or neutralize it?",
        answer:
          "It preserves the thread's actual stance and conclusion rather than flattening it into a neutral restatement, since that's usually the point worth summarizing.",
      },
      {
        question: "Can I use this on threads that aren't mine?",
        answer:
          "Yes, it works on any thread text you paste in — just be mindful of attribution if you share the summary publicly.",
      },
    ],
  },
  {
    slug: "tweet-to-bio",
    category: "twitter",
    inputType: "tweet or description",
    outputType: "Twitter bio",
    promptTemplate:
      "Using the following tweet or description of a person, write a Twitter/X bio under 160 characters that captures their voice, role, and personality. Return only the bio text, no preamble.\n\nInput:\n{input}",
    seoTitle: "Generate a Twitter Bio — Free AI Bio Writer",
    seoDescription:
      "Turn a tweet or a rough description of yourself into a punchy Twitter/X bio under 160 characters. Free, no signup.",
    h1: "Tweet to Bio",
    introCopy:
      "Writing your own bio is oddly harder than writing almost anything else — you know too much about yourself to know what to cut. This tool takes either a representative tweet of yours or a loose description of who you are and what you do, and compresses it into a bio that fits Twitter's 160-character limit while keeping some personality intact. It's aimed at people rebranding an account, launching a new one, or just tired of their current bio and wanting a few fresh options to riff on.",
    exampleInput:
      "i'm a backend engineer who got tired of corporate work and now writes about databases and building small tools on the side, based in austin",
    exampleOutput:
      "Backend engineer turned indie builder. Writing about databases and small tools. Austin, TX.",
    faq: [
      {
        question: "What if I paste in a tweet instead of a description?",
        answer:
          "That works too — the tool infers voice and tone from the tweet's style and content, then distills it into bio form.",
      },
      {
        question: "Will it guarantee the bio stays under 160 characters?",
        answer:
          "Yes, the output is written to fit Twitter/X's current bio limit so you can paste it in directly without trimming.",
      },
      {
        question: "Can I get a funnier or more serious version?",
        answer:
          "Run it again with a tweet or description written in the tone you want — the output tone tends to mirror the input's voice closely.",
      },
    ],
  },
  {
    slug: "thread-to-newsletter",
    category: "twitter",
    inputType: "twitter thread",
    outputType: "newsletter section",
    promptTemplate:
      "Rewrite the following Twitter/X thread as a section of an email newsletter. Use a conversational but complete prose style suitable for email, remove numbering, and add a short intro line as if introducing the topic to subscribers. Return only the newsletter section, no preamble.\n\nThread:\n{input}",
    seoTitle: "Turn a Twitter Thread Into a Newsletter Section — Free Tool",
    seoDescription:
      "Convert a Twitter/X thread into a ready-to-paste newsletter section with an intro line and email-friendly prose. Free, no signup.",
    h1: "Thread to Newsletter",
    introCopy:
      "If you write threads regularly, you've probably got a backlog of ideas that would also make solid newsletter content — but reformatting a thread for email takes real effort. This tool converts the numbered tweet format into a newsletter section with a short framing intro and prose that reads naturally in an inbox rather than a feed. It's meant for creators repurposing thread content into a weekly or monthly send, distinct from the LinkedIn version which targets a more corporate audience and tone.",
    exampleInput:
      "1/ tried 4 different note-taking apps this year\n2/ obsidian, notion, apple notes, and roam\n3/ ended up back on apple notes\n4/ turns out the best tool is the one with zero friction",
    exampleOutput:
      "This week: a small experiment in tool-hopping that ended right where it started.\n\nI spent this year testing four different note-taking apps — Obsidian, Notion, Apple Notes, and Roam — each promising to finally fix how I capture ideas. After months of switching, I landed back on Apple Notes, the plainest option of the bunch.\n\nThe lesson wasn't about features. It was that the best tool is whichever one has zero friction between having a thought and writing it down. Everything else is a distraction dressed up as productivity.",
    faq: [
      {
        question: "Does it add a subject line too?",
        answer:
          "No — this tool focuses on the body section. Pair it with the newsletter subject line generator tool for a matching subject.",
      },
      {
        question: "Will it sound too casual for a professional newsletter?",
        answer:
          "The tone is conversational by default, which fits most independent newsletters; you can ask the professional-tone tweet tool to adjust individual lines first if needed.",
      },
      {
        question: "Can I use this for a thread with multiple unrelated points?",
        answer:
          "It works best on threads with one central idea. For multi-topic threads, consider running each section through separately for cleaner results.",
      },
    ],
  },
  {
    slug: "tweet-storm-generator",
    category: "twitter",
    inputType: "topic or idea",
    outputType: "tweet thread",
    promptTemplate:
      "Write a Twitter/X thread of 6-8 tweets based on the following topic or idea. Number each tweet, keep each one under 280 characters, start with a strong hook tweet, and end with a clear closing tweet. Return only the numbered thread, no preamble.\n\nTopic:\n{input}",
    seoTitle: "Generate a Twitter Thread From a Topic — Free AI Tool",
    seoDescription:
      "Turn a raw topic or idea into a full 6-8 tweet thread with a hook and closer. Free thread generator, no signup required.",
    h1: "Tweet Storm Generator",
    introCopy:
      "Sometimes you have the idea for a great thread but not the time to structure eight individual tweets around it. This tool takes a topic — even just a sentence describing what you want to say — and builds out a full numbered thread with a strong opening hook, a logical middle, and a close that ties it together. Unlike the thread hook generator, which only writes the first tweet, this produces the entire thread ready to post or edit.",
    exampleInput: "why most startups fail because of distribution, not product",
    exampleOutput:
      "1/ Everyone obsesses over building a great product. Almost nobody obsesses over how people will find it. That imbalance kills more startups than bad code ever will.\n\n2/ You can build the best tool in your category and still lose to a worse product with a better distribution engine.\n\n3/ Distribution isn't just marketing spend. It's the compounding channel — SEO, word of mouth, an existing audience — that gets cheaper over time instead of more expensive.\n\n4/ Product-market fit gets all the attention because it's satisfying to talk about. Distribution is unglamorous, so founders under-invest in it.\n\n5/ The best founders I know treat distribution as a first-class problem from day one, not something to figure out after launch.\n\n6/ If you're pre-launch, ask yourself: who already has the audience I need, and how do I get in front of them? That question matters more than your roadmap.\n\n7/ Building in public, partnerships, and SEO are slow but compounding. Paid ads are fast but you're renting attention, not owning it.\n\n8/ Product gets you in the door. Distribution decides whether anyone shows up. Build both, or don't be surprised when a great product goes nowhere.",
    faq: [
      {
        question: "How many tweets does it generate?",
        answer:
          "Between 6 and 8 tweets, each kept under Twitter/X's character limit so you can post the thread without editing for length.",
      },
      {
        question: "Can I feed it just a few words instead of a full sentence?",
        answer:
          "Yes, a short topic phrase is enough — the more context you give, the more specific and less generic the thread will be.",
      },
      {
        question: "How is this different from the thread hook generator?",
        answer:
          "The hook generator writes only the opening tweet to test different angles. This tool writes the complete thread from start to finish.",
      },
    ],
  },
  {
    slug: "reply-generator",
    category: "twitter",
    inputType: "tweet",
    outputType: "reply",
    promptTemplate:
      "Write a thoughtful, engaging reply to the following tweet. The reply should add value, a perspective, or a relevant question — not just agree generically. Keep it under 280 characters. Return only the reply text, no preamble.\n\nTweet:\n{input}",
    seoTitle: "Generate a Reply to Any Tweet — Free AI Tool",
    seoDescription:
      "Paste a tweet and get a thoughtful, on-topic reply draft in seconds. Free reply generator for Twitter/X, no signup.",
    h1: "Reply Generator",
    introCopy:
      "Replying well is one of the most underrated ways to grow on Twitter/X, but staring at someone else's tweet trying to think of something worth saying wastes more time than it should. This tool reads the original tweet and drafts a reply that adds a genuine angle, a related point, or a good question — not a generic \"great point!\" This is specifically for replying to someone else's post, unlike the tweet-storm generator which writes original standalone content.",
    exampleInput:
      "unpopular opinion: remote work has made most teams worse at communicating, not better",
    exampleOutput:
      "Curious what you mean by worse — less bandwidth per message, or just less context since nobody's overhearing the hallway conversation anymore? I've seen both, and the fix looks pretty different depending on which one it is.",
    faq: [
      {
        question: "Will the reply sound like generic engagement bait?",
        answer:
          "No — it's specifically instructed to avoid generic agreement and instead add a perspective or question tied to the actual content of the tweet.",
      },
      {
        question: "Can I use this to reply to my own audience's comments?",
        answer:
          "Yes, it works on any tweet text, including replies to your own posts if you want a substantive response rather than a quick emoji.",
      },
      {
        question: "Does it match the tone of the original tweet?",
        answer:
          "It aims for a tone that fits naturally as a reply — generally conversational — though you can always edit before posting if it needs adjusting.",
      },
    ],
  },
  {
    slug: "tweet-to-quote-graphic-caption",
    category: "twitter",
    inputType: "tweet",
    outputType: "quote graphic caption",
    promptTemplate:
      "Extract the single most quotable sentence or short phrase from the following tweet, suitable for overlaying on a quote graphic image. It should be concise, punchy, and stand alone without needing extra context. Return only the extracted quote text, no preamble.\n\nTweet:\n{input}",
    seoTitle: "Turn a Tweet Into a Quote Graphic Caption — Free Tool",
    seoDescription:
      "Extract the most quotable line from a tweet for use in a shareable quote graphic. Free AI extractor, no signup needed.",
    h1: "Tweet to Quote Graphic Caption",
    introCopy:
      "Quote graphics work because they isolate one striking line and let it breathe on its own — but tweets are often full of setup and context that don't belong on an image. This tool scans a tweet and pulls out just the single sentence or phrase with the most standalone punch, trimmed so it makes sense without the rest of the tweet around it. It's built for people turning their best tweets into shareable Instagram or LinkedIn graphics using a design tool afterward.",
    exampleInput:
      "spent all morning debugging only to find out the bug was a typo in an env variable name. the amount of time we lose to things that aren't even hard is wild",
    exampleOutput:
      "\"The amount of time we lose to things that aren't even hard is wild.\"",
    faq: [
      {
        question: "What if my tweet doesn't have one obvious standout line?",
        answer:
          "The tool will still pick the strongest candidate, but for tweets without a clear punchy phrase, you may get better results rewording the tweet first.",
      },
      {
        question: "Does it add quotation marks automatically?",
        answer:
          "Yes, the output is formatted as a standalone quote, ready to drop directly into a graphic design template.",
      },
      {
        question: "Can I use this for other people's tweets I want to feature?",
        answer:
          "Yes, but be sure to credit the original author on the graphic itself since this tool only extracts text, not attribution.",
      },
    ],
  },
  {
    slug: "thread-hook-generator",
    category: "twitter",
    inputType: "topic or thread draft",
    outputType: "hook tweet options",
    promptTemplate:
      "Based on the following topic or thread draft, write 5 different opening hook tweets that could start a thread on this subject. Each should use a different angle (bold claim, question, personal story, statistic, contrarian take) and be under 280 characters. Return only the 5 numbered options, no preamble.\n\nInput:\n{input}",
    seoTitle: "Generate Thread Hooks — Free AI Twitter Hook Tool",
    seoDescription:
      "Get 5 different opening hook options for your next Twitter/X thread, each using a different angle. Free, no signup required.",
    h1: "Thread Hook Generator",
    introCopy:
      "The first tweet of a thread decides whether anyone reads tweet two, which makes it disproportionately important compared to every line that follows. This tool takes your topic or a rough draft and generates five distinct hook options — a bold claim, a question, a personal story angle, a statistic-driven opener, and a contrarian take — so you can pick whichever fits your voice best. Unlike the full tweet-storm generator, this focuses entirely on nailing the opening line and leaves the rest of the thread to you.",
    exampleInput: "thread about why I stopped using to-do lists",
    exampleOutput:
      "1. I deleted every to-do list app on my phone six months ago. Productivity went up, not down. Here's why.\n2. What if to-do lists are actually making you less productive?\n3. Three years ago I was a to-do list evangelist. Today I don't use one. Here's what changed.\n4. 73% of items on the average to-do list never get done. That statistic broke something for me.\n5. Unpopular opinion: to-do lists are where tasks go to be forgotten, not finished.",
    faq: [
      {
        question: "Why does it give 5 options instead of just one?",
        answer:
          "Hooks are highly subjective and what lands depends on your audience and voice, so multiple angles let you pick or combine the strongest fit rather than accepting one guess.",
      },
      {
        question: "Can I paste in a full thread draft instead of just a topic?",
        answer:
          "Yes — pasting a rough draft often produces more specific hooks since the tool can reference actual details from your content.",
      },
      {
        question: "Should I use this before or after writing the full thread?",
        answer:
          "Either works, but many writers get better results drafting the thread body first, then generating hooks once they know exactly what the thread delivers.",
      },
    ],
  },

  // ===== BLOG (10) =====
  {
    slug: "blog-to-social-posts",
    category: "blog",
    inputType: "blog post",
    outputType: "social media posts",
    promptTemplate:
      "Read the following blog post and generate 3 short social media posts promoting it, each under 280 characters, each highlighting a different angle or takeaway from the post. Return only the 3 numbered posts, no preamble.\n\nBlog post:\n{input}",
    seoTitle: "Turn a Blog Post Into Social Posts — Free AI Tool",
    seoDescription:
      "Generate 3 distinct social media promo posts from any blog post, each with a different angle. Free, no signup required.",
    h1: "Blog to Social Posts",
    introCopy:
      "Promoting a blog post usually means writing several different social posts so you're not repeating the same line across every platform and every day. This tool reads your full post and generates three distinct promotional posts, each pulling a different takeaway or angle rather than just restating the title. It's meant for the promotion phase after publishing, as opposed to the blog-to-twitter-thread tool, which repackages the actual content of the post rather than just teasing it.",
    exampleInput:
      "A 900-word blog post arguing that most companies over-hire too early, diluting culture and slowing decision-making before product-market fit is even confirmed.",
    exampleOutput:
      "1. Hiring fast feels like progress. Often it's just how startups slow themselves down before they've even found product-market fit. New post breaks down why.\n\n2. Culture doesn't erode all at once — it dilutes one rushed hire at a time. Wrote about the real cost of over-hiring early.\n\n3. The best time to slow down your hiring plan might be right now, before you've confirmed the thing you're scaling actually works. New post ↓",
    faq: [
      {
        question: "Will each post repeat the same message?",
        answer:
          "No — each of the three posts is generated to highlight a different takeaway or angle from the post so you can space them out over time without sounding repetitive.",
      },
      {
        question: "Does it include a link placeholder?",
        answer:
          "It doesn't insert a literal link since URLs vary, but the posts are written to work naturally with a link added at the end.",
      },
      {
        question: "Can I use these on LinkedIn instead of Twitter?",
        answer:
          "Yes, the posts are platform-agnostic in tone, though very long blog posts may work better summarized with the blog-to-linkedin-article tool for LinkedIn specifically.",
      },
    ],
  },
  {
    slug: "blog-to-newsletter",
    category: "blog",
    inputType: "blog post",
    outputType: "newsletter",
    promptTemplate:
      "Rewrite the following blog post as an email newsletter. Add a short greeting line at the top, condense the content to fit an email format, and end with a friendly sign-off. Keep the tone warmer and more personal than the original blog post. Return only the newsletter email, no preamble.\n\nBlog post:\n{input}",
    seoTitle: "Convert a Blog Post Into a Newsletter — Free AI Tool",
    seoDescription:
      "Turn any blog post into a ready-to-send email newsletter with a greeting and sign-off. Free converter, no signup needed.",
    h1: "Blog to Newsletter",
    introCopy:
      "Blog posts and newsletters serve different jobs even when they cover the same content — a blog post lives on a page and gets discovered, while a newsletter lands directly in someone's inbox and needs to feel like it was written just for them. This tool takes your published post and reformats it into an email, adding a greeting, trimming it to newsletter length, and closing with a sign-off. It's the natural companion to the newsletter-to-blog-post tool, which does the reverse conversion.",
    exampleInput:
      "A blog post reviewing five project management tools tested over a month, concluding that simpler tools outperformed feature-heavy ones for a 4-person team.",
    exampleOutput:
      "Hey there,\n\nI spent the last month testing five different project management tools with my team, expecting the fanciest one to win. It didn't.\n\nThe tools packed with automations, custom fields, and dashboards actually slowed us down — more setup, more decisions, more places for a task to get lost. The simplest tool in the group won by a wide margin, mostly because nobody had to think about how to use it.\n\nIf you're a small team drowning in project management software options, my take: start with the simplest tool that does the one thing you need, and add complexity only when you actually feel the pain of not having it.\n\nTalk soon,\n[Your name]",
    faq: [
      {
        question: "Does it shorten the original post significantly?",
        answer:
          "It typically condenses the content somewhat to fit a scannable email length, while keeping the core argument and conclusion intact.",
      },
      {
        question: "Will it add my own greeting and name?",
        answer:
          "It adds a generic greeting and sign-off placeholder that you can personalize with your own name and any specific details.",
      },
      {
        question: "Is the tone different from the original blog post?",
        answer:
          "Yes, it's adjusted to be warmer and more direct, since newsletter readers respond better to a personal voice than a formal blog tone.",
      },
    ],
  },
  {
    slug: "blog-to-seo-meta-description",
    category: "blog",
    inputType: "blog post",
    outputType: "SEO meta description",
    promptTemplate:
      "Write an SEO meta description for the following blog post. It must be between 140-160 characters, summarize the post's value clearly, and encourage clicks from search results. Return only the meta description text, no preamble.\n\nBlog post:\n{input}",
    seoTitle: "Generate an SEO Meta Description — Free AI Tool",
    seoDescription:
      "Paste your blog post and get a click-worthy, properly sized SEO meta description in seconds. Free, no signup required.",
    h1: "Blog to SEO Meta Description",
    introCopy:
      "A meta description doesn't affect ranking directly, but it's the pitch that decides whether someone clicks your result over the nine others on the page — and it has to fit inside a strict character window or Google truncates it. This tool reads your full blog post and writes a meta description sized correctly at 140-160 characters, summarizing the value of the post in a way built to earn the click, not just describe the content. It's a narrower, more technical sibling of the general blog summary tool.",
    exampleInput:
      "A long-form blog post explaining how to set up automated backups for a self-hosted database using cron jobs and cloud storage, aimed at solo developers.",
    exampleOutput:
      "Set up automated database backups with cron jobs and cloud storage — a step-by-step guide built for solo developers running self-hosted infrastructure.",
    faq: [
      {
        question: "Will it always hit the character limit exactly?",
        answer:
          "It targets the 140-160 character range consistently, though you should double check length in your CMS since some platforms count characters slightly differently.",
      },
      {
        question: "Does it include the target keyword automatically?",
        answer:
          "It generally reflects the main topic and terms used in your post, but for a specific target keyword, make sure that phrase appears clearly in the pasted content.",
      },
      {
        question: "Can I generate multiple options to A/B test?",
        answer:
          "Run the tool more than once for slightly different phrasings — each run may emphasize a different angle of the post's value.",
      },
    ],
  },
  {
    slug: "blog-to-summary",
    category: "blog",
    inputType: "blog post",
    outputType: "summary",
    promptTemplate:
      "Summarize the following blog post in a single paragraph of 3-5 sentences, capturing the main argument and conclusion without including minor supporting details. Return only the summary, no preamble.\n\nBlog post:\n{input}",
    seoTitle: "Summarize a Blog Post — Free AI Blog Summarizer",
    seoDescription:
      "Paste any blog post and get a tight 3-5 sentence summary of the main argument. Free, fast, no signup needed.",
    h1: "Blog to Summary",
    introCopy:
      "Not every blog post needs to be read in full to be useful — sometimes you just need the argument and the conclusion so you can decide whether to read further or cite it elsewhere. This tool compresses a full post into a single tight paragraph, skipping supporting anecdotes and examples in favor of the core claim. It's a general-purpose summary, distinct from the key-takeaways tool, which instead breaks a post into a scannable bulleted list rather than flowing prose.",
    exampleInput:
      "A 1,200-word post arguing that A/B testing on small websites is often statistically meaningless because traffic volumes are too low to reach significance, and that founders should instead rely on qualitative user interviews for early-stage decisions.",
    exampleOutput:
      "The post argues that A/B testing is frequently misapplied on small websites, since low traffic volumes make it nearly impossible to reach statistical significance within a reasonable timeframe. Instead of chasing inconclusive quantitative tests, the author recommends early-stage founders rely on qualitative user interviews to guide product decisions. The core message is that rigor in method matters less than having enough data for that method to actually produce a trustworthy answer.",
    faq: [
      {
        question: "How long is the summary?",
        answer:
          "Three to five sentences in a single paragraph — long enough to capture the argument, short enough to skim in a few seconds.",
      },
      {
        question: "Does it work on very long posts?",
        answer:
          "Yes, it handles long-form posts well and focuses on distilling the core thesis rather than trying to represent every section equally.",
      },
      {
        question: "How is this different from the key takeaways tool?",
        answer:
          "This produces one flowing paragraph focused on the main argument; the key takeaways tool produces a bulleted list of separate points, which suits skimmable content better.",
      },
    ],
  },
  {
    slug: "blog-to-twitter-thread",
    category: "blog",
    inputType: "blog post",
    outputType: "Twitter thread",
    promptTemplate:
      "Convert the following blog post into a numbered Twitter/X thread of 6-10 tweets. Break the post's structure into individual tweet-sized points, each under 280 characters, starting with a hook and ending with a summarizing final tweet. Return only the numbered thread, no preamble.\n\nBlog post:\n{input}",
    seoTitle: "Turn a Blog Post Into a Twitter Thread — Free AI Tool",
    seoDescription:
      "Convert any blog post into a full numbered Twitter/X thread, ready to post. Free AI converter, no signup required.",
    h1: "Blog to Twitter Thread",
    introCopy:
      "Repurposing a blog post into a thread means more than chopping paragraphs into 280-character chunks — it means finding the individual, tweet-sized ideas buried inside the longer piece and sequencing them so the thread reads well on its own. This tool reads your full post and restructures its argument into a proper thread with a hook, a logical build, and a close. It's meant for content that's already written, unlike the tweet-storm generator, which builds a thread from just a topic with no source material.",
    exampleInput:
      "A blog post on why documentation is usually written for the wrong audience — written for people who already understand the system, rather than newcomers trying to learn it.",
    exampleOutput:
      "1/ Most documentation is written for people who already understand the system. That's backwards — the people who need docs most are the ones who don't.\n\n2/ If you can write the docs easily, you're probably not the right person to test whether they actually work.\n\n3/ Good documentation should be tested on someone who has zero context, not reviewed by someone who wrote the code.\n\n4/ The fix isn't more detail. It's writing from the reader's starting point instead of your own.\n\n5/ Next time you write docs, find someone new to the team and watch where they get stuck. That's your real table of contents.\n\n6/ Documentation isn't a record of what you built. It's a bridge for someone who wasn't there when you built it.",
    faq: [
      {
        question: "How many tweets will the thread have?",
        answer:
          "Between 6 and 10, depending on how many distinct points the original blog post naturally breaks into.",
      },
      {
        question: "Will it preserve code snippets or technical details?",
        answer:
          "Short technical references can carry over, but very long code blocks don't fit the tweet format well and may need to be summarized or linked separately.",
      },
      {
        question: "Does the thread include a link back to the blog post?",
        answer:
          "No link is inserted automatically — add your blog URL to the final tweet yourself so readers can go deeper.",
      },
    ],
  },
  {
    slug: "blog-title-generator",
    category: "blog",
    inputType: "blog post or topic",
    outputType: "title options",
    promptTemplate:
      "Based on the following blog post or topic description, generate 5 different blog post title options. Vary the style across the options (how-to, listicle, question, bold statement, curiosity-driven). Return only the 5 numbered titles, no preamble.\n\nInput:\n{input}",
    seoTitle: "Generate Blog Post Titles — Free AI Title Generator",
    seoDescription:
      "Get 5 varied blog post title options from your topic or draft, spanning different styles. Free title generator, no signup.",
    h1: "Blog Title Generator",
    introCopy:
      "A title decides whether your post gets clicked or scrolled past, but writing five good variations to compare usually takes longer than writing the post itself. This tool takes your topic or draft content and produces five distinctly styled options — a how-to, a listicle, a question, a bold statement, and a curiosity-driven headline — so you can compare formats side by side rather than fixating on one phrasing. Use it before you write, to shape the angle of the post, or after, to headline something you've already drafted.",
    exampleInput:
      "post about switching from a corporate job to freelance design work and what actually changed financially",
    exampleOutput:
      "1. How I Went From Corporate Designer to Freelancer (And What It Actually Did to My Income)\n2. 7 Things Nobody Tells You About Freelance Income Before You Quit Your Job\n3. Is Freelancing Actually More Profitable Than a Corporate Design Job?\n4. I Quit My Corporate Design Job. Here's the Real Financial Breakdown.\n5. The Freelance Income Surprise Nobody Warns You About",
    faq: [
      {
        question: "Can I use this before writing the post?",
        answer:
          "Yes — pasting in just a topic description works fine and can help you decide the angle before you start drafting.",
      },
      {
        question: "Will the titles be SEO-optimized?",
        answer:
          "They're written to be compelling and click-worthy first; for strict keyword optimization, make sure your target keyword appears in the topic you paste in.",
      },
      {
        question: "Why does it vary the style across options instead of giving 5 similar titles?",
        answer:
          "Different formats perform differently depending on platform and audience, so varying the style gives you a genuine choice rather than five near-duplicates.",
      },
    ],
  },
  {
    slug: "blog-to-linkedin-article",
    category: "blog",
    inputType: "blog post",
    outputType: "LinkedIn article",
    promptTemplate:
      "Adapt the following blog post into a LinkedIn article. Keep most of the depth and structure, but adjust the tone to be more personal and professional, add a brief personal framing at the start, and format it for LinkedIn's article editor with short paragraphs. Return only the adapted article, no preamble.\n\nBlog post:\n{input}",
    seoTitle: "Turn a Blog Post Into a LinkedIn Article — Free AI Tool",
    seoDescription:
      "Adapt a full blog post into a LinkedIn article with a personal framing and professional tone. Free converter, no signup.",
    h1: "Blog to LinkedIn Article",
    introCopy:
      "LinkedIn's article format can hold as much depth as a blog post, but readers there expect a more personal on-ramp — why you're writing this, why now — before you get into the substance. This tool preserves most of your original post's structure and depth while adding that personal framing up top and adjusting sentence rhythm for LinkedIn's editor. It differs from the blog-to-social-posts tool by keeping the full argument intact rather than compressing it into a short promotional teaser.",
    exampleInput:
      "A blog post analyzing why mid-size SaaS companies struggle to ship features as fast as smaller competitors, pointing to process overhead as the core cause.",
    exampleOutput:
      "I've spent the last few years watching mid-size SaaS teams slow down in a very specific, predictable way — and I think it's worth naming clearly.\n\nWhen a company crosses from 'small team, ship fast' into 'mid-size, more process,' feature velocity drops even though headcount goes up. The instinct is to blame the org chart. The real cause is usually process overhead: more approvals, more meetings to align, more people who need to sign off before code ships.\n\nSmaller competitors don't have better engineers. They just have fewer gates between an idea and a shipped feature.\n\nIf your team has grown but your shipping speed hasn't kept pace, the fix probably isn't more people — it's fewer steps between decision and execution.",
    faq: [
      {
        question: "Does it shorten the post significantly?",
        answer:
          "Not dramatically — LinkedIn articles support long-form content, so most of the original depth and structure is preserved with tone and framing adjustments.",
      },
      {
        question: "How is this different from the thread-to-linkedin-post tool?",
        answer:
          "That tool converts short tweet threads into a single post; this one adapts a full-length blog post into LinkedIn's long-form article format, keeping much more detail.",
      },
      {
        question: "Will it keep any headers or subheadings from the original post?",
        answer:
          "Subheadings are generally kept or lightly adjusted since they help readability in LinkedIn's article format, which supports the same kind of structure as a blog.",
      },
    ],
  },
  {
    slug: "blog-intro-generator",
    category: "blog",
    inputType: "blog topic or outline",
    outputType: "blog introduction",
    promptTemplate:
      "Write a compelling introduction paragraph (3-5 sentences) for a blog post based on the following topic or outline. It should hook the reader, establish why the topic matters, and set up what the post will cover, without generic filler phrases like \"in today's world.\" Return only the introduction, no preamble.\n\nTopic or outline:\n{input}",
    seoTitle: "Generate a Blog Post Introduction — Free AI Tool",
    seoDescription:
      "Turn a topic or outline into a strong, hook-driven blog introduction paragraph. Free intro generator, no signup needed.",
    h1: "Blog Intro Generator",
    introCopy:
      "The introduction is where most blog posts lose readers, usually because writers pad it with generic throat-clearing before getting to the actual point. This tool takes your topic or a rough outline and writes an intro paragraph that hooks immediately, explains why the topic matters, and previews what's coming — deliberately avoiding stock openers like \"in today's fast-paced world.\" It's built for the moment you're staring at a blank page with a clear idea but no opening line, so you can get past the hardest paragraph first.",
    exampleInput:
      "outline: post about why remote teams should default to async communication instead of scheduling constant meetings",
    exampleOutput:
      "Every remote team eventually hits the same wall: too many meetings, not enough actual work getting done. The instinct is to blame the tools or the time zones, but the real problem is usually a default setting nobody questioned — treating synchronous meetings as the norm instead of the exception. This post makes the case for flipping that default, and what changes when async becomes the starting point instead of the fallback.",
    faq: [
      {
        question: "Will it avoid clichéd opening lines?",
        answer:
          "Yes, the prompt specifically avoids generic phrases like \"in today's world\" that tend to signal filler rather than a real hook.",
      },
      {
        question: "Can I use just a topic instead of a full outline?",
        answer:
          "Yes, a single sentence describing the topic is enough, though a rough outline with your key points tends to produce a more specific, less generic intro.",
      },
      {
        question: "Does it write the rest of the post too?",
        answer:
          "No, this tool is scoped to just the introduction paragraph so you can maintain your own voice through the body of the post.",
      },
    ],
  },
  {
    slug: "blog-to-key-takeaways",
    category: "blog",
    inputType: "blog post",
    outputType: "key takeaways list",
    promptTemplate:
      "Extract the key takeaways from the following blog post as a bulleted list of 4-6 concise points. Each bullet should stand alone as a complete, useful insight. Return only the bulleted list, no preamble.\n\nBlog post:\n{input}",
    seoTitle: "Extract Key Takeaways From a Blog Post — Free AI Tool",
    seoDescription:
      "Turn a long blog post into a scannable list of 4-6 key takeaways. Free extractor tool, no signup required.",
    h1: "Blog to Key Takeaways",
    introCopy:
      "Some readers want the argument in full, and some just want the bullet points they can skim in ten seconds and act on. This tool reads a blog post and extracts its key insights as a standalone bulleted list, formatted for the top of a post or a quick-reference recap. Unlike the blog-to-summary tool, which produces a flowing paragraph explaining the overall argument, this one is built for skimmability — each bullet works independently, without needing the surrounding sentences for context.",
    exampleInput:
      "A blog post covering common mistakes in early-stage pricing strategy, including underpricing to win customers, changing prices too often, and not testing pricing with real prospects before launch.",
    exampleOutput:
      "- Underpricing to win early customers often backfires — it attracts price-sensitive users who churn once you raise rates.\n- Changing your pricing structure too frequently erodes trust with existing customers and complicates sales conversations.\n- Skipping pricing conversations with real prospects before launch means you're guessing at willingness to pay instead of testing it.\n- Anchoring your price too low makes it psychologically hard to raise later, even if the product's value has grown.\n- Pricing should be revisited as a strategic decision, not left on autopilot once it's set.",
    faq: [
      {
        question: "How many takeaways does it generate?",
        answer:
          "Between 4 and 6 bullets, enough to cover the main insights without turning into a full outline of the post.",
      },
      {
        question: "Can I put this at the top of my published post?",
        answer:
          "Yes, many publishers add a takeaways list near the top or in a sidebar so skimmers can get the value without reading the full piece.",
      },
      {
        question: "Does it work well on opinion pieces, not just how-to posts?",
        answer:
          "Yes, it adapts to opinion content by extracting the core claims and conclusions rather than forcing them into a how-to structure.",
      },
    ],
  },
  {
    slug: "blog-outline-from-topic",
    category: "blog",
    inputType: "topic",
    outputType: "blog outline",
    promptTemplate:
      "Create a detailed blog post outline for the following topic. Include a suggested title, an introduction angle, 4-6 main section headers with a one-line description of what each covers, and a closing section. Return only the outline, no preamble.\n\nTopic:\n{input}",
    seoTitle: "Generate a Blog Post Outline — Free AI Outline Tool",
    seoDescription:
      "Turn any topic into a structured blog outline with a title, sections, and a closing angle. Free, no signup required.",
    h1: "Blog Outline From Topic",
    introCopy:
      "Staring at a blank document with only a topic in mind is where most blog posts stall out before they even start. This tool takes that raw topic and builds a full outline — a suggested title, an intro angle, several main sections each with a one-line description, and a closing direction — so you have scaffolding to write into instead of a blank page. It's meant for the planning stage before writing, unlike the blog-intro-generator, which drafts finished prose for just the opening paragraph.",
    exampleInput: "topic: how solo founders should think about hiring their first employee",
    exampleOutput:
      "Suggested title: Your First Hire Will Make or Break Your Solo Startup — Here's How to Get It Right\n\nIntro angle: Open with the common mistake of hiring too early or for the wrong role, and frame the post as a decision framework rather than generic hiring advice.\n\n1. Signs you're actually ready to hire (not just busy) — distinguishing overwhelm from a real capacity problem.\n2. Choosing the role: generalist vs. specialist for a first hire, and why it depends on your bottleneck.\n3. Where to find your first hire without a recruiting budget — networks, communities, and direct outreach.\n4. Structuring the interview process for a team of one — what to actually test for.\n5. Onboarding without an existing team culture to lean on.\n6. What changes about your own role once you're no longer solo.\n\nClosing: End with a reminder that the first hire sets the tone for every hire after, so it's worth being deliberate even when the instinct is to hire fast out of exhaustion.",
    faq: [
      {
        question: "How detailed is the outline?",
        answer:
          "It includes a title suggestion, an intro angle, 4-6 main sections with one-line descriptions each, and a closing direction — enough structure to write from without being a full draft.",
      },
      {
        question: "Can I ask for more or fewer sections?",
        answer:
          "The tool defaults to 4-6 sections, which fits most blog post lengths; for a much longer or shorter post, adjust the sections manually after generating.",
      },
      {
        question: "Does it write the actual content of each section?",
        answer:
          "No — this tool stops at the planning stage. Use the blog-intro-generator for the opening paragraph once you're ready to start writing from the outline.",
      },
    ],
  },

  // ===== NEWSLETTER (10) =====
  {
    slug: "newsletter-to-blog-post",
    category: "newsletter",
    inputType: "newsletter",
    outputType: "blog post",
    promptTemplate:
      "Convert the following email newsletter into a standalone blog post. Remove email-specific elements like greetings and sign-offs, add a proper title, and adjust the tone to suit a public blog rather than a direct-to-subscriber email. Return only the blog post, no preamble.\n\nNewsletter:\n{input}",
    seoTitle: "Turn a Newsletter Into a Blog Post — Free AI Tool",
    seoDescription:
      "Convert any email newsletter into a standalone, publishable blog post with a title. Free converter, no signup needed.",
    h1: "Newsletter to Blog Post",
    introCopy:
      "Newsletter content is often too good to live only in an inbox, but it's written with assumptions — a direct greeting, insider references, a casual sign-off — that don't belong on a public page. This tool strips those email-specific elements, adds a proper title, and adjusts the tone so the piece reads as a standalone blog post rather than a letter to subscribers. It's the reverse of the blog-to-newsletter tool, and useful for archiving newsletter content on a site for SEO and long-term discoverability.",
    exampleInput:
      "Hey everyone,\n\nQuick one this week — I finally automated my invoicing after putting it off for a year. Took about two hours with a simple script and saved me probably 3 hours a month since. Sometimes the boring tasks are the highest leverage ones to fix.\n\nTalk soon,\nJ",
    exampleOutput:
      "Why I Finally Automated the Most Boring Task on My List\n\nFor over a year, I put off automating my invoicing process. It wasn't hard — it was just boring, and boring tasks are easy to keep deprioritizing in favor of more interesting work.\n\nWhen I finally sat down and wrote a simple script to handle it, the whole thing took about two hours. Since then, it's saved roughly three hours a month — time that used to disappear into a repetitive task I dreaded every billing cycle.\n\nThe lesson wasn't really about invoicing. It was a reminder that the least exciting item on your list is often the highest-leverage one to fix, precisely because nobody wants to deal with it.",
    faq: [
      {
        question: "Does it remove the greeting and sign-off automatically?",
        answer:
          "Yes, email-specific elements like \"Hey everyone\" and sign-offs are stripped out and replaced with a proper blog title and structure.",
      },
      {
        question: "Will it work on newsletters with multiple sections?",
        answer:
          "It works best on single-topic newsletter sends; for multi-section newsletters, consider running each section through separately for a cleaner standalone post.",
      },
      {
        question: "Is the tone different from the original email?",
        answer:
          "Slightly — it's adjusted to suit a public audience rather than existing subscribers, since blog readers won't have the same context as your list.",
      },
    ],
  },
  {
    slug: "newsletter-subject-line-generator",
    category: "newsletter",
    inputType: "newsletter content",
    outputType: "subject line options",
    promptTemplate:
      "Based on the following newsletter content, generate 5 email subject line options. Vary the style (curiosity gap, direct benefit, question, personal, urgency) and keep each under 60 characters. Return only the 5 numbered options, no preamble.\n\nNewsletter content:\n{input}",
    seoTitle: "Generate Newsletter Subject Lines — Free AI Tool",
    seoDescription:
      "Get 5 varied, open-worthy subject line options for your email newsletter. Free subject line generator, no signup.",
    h1: "Newsletter Subject Line Generator",
    introCopy:
      "Open rates live and die by the subject line, and it's usually the last thing writers think about after spending an hour on the actual content. This tool reads your newsletter body and generates five subject line options across different psychological angles — a curiosity gap, a direct benefit, a question, something personal, and one with urgency — each kept under 60 characters so it doesn't get cut off in an inbox. Compare a few styles instead of guessing which one phrase will get opened.",
    exampleInput:
      "Newsletter about a case study where switching to a 4-day work week increased output per employee by 18% over six months at a 12-person agency.",
    exampleOutput:
      "1. We cut our work week by a day. Output went up.\n2. The 4-day week experiment: 6 months of real data\n3. Does a shorter work week actually work?\n4. What 18% more output taught us about time\n5. Last call: the 4-day week results are in",
    faq: [
      {
        question: "Will all 5 options fit within typical inbox preview limits?",
        answer:
          "Yes, each is kept under 60 characters, which covers most desktop and mobile inbox previews without truncation.",
      },
      {
        question: "Can I combine two of the generated options?",
        answer:
          "Yes, many writers mix elements from two options — for example, the curiosity angle from one with the specificity of another — to land on a final version.",
      },
      {
        question: "Does it write a preview text line too?",
        answer:
          "No, this tool focuses only on the subject line itself; preview text is a separate field you'd want to write to complement, not repeat, the subject.",
      },
    ],
  },
  {
    slug: "newsletter-summary",
    category: "newsletter",
    inputType: "newsletter",
    outputType: "summary",
    promptTemplate:
      "Summarize the following newsletter in 2-3 sentences, capturing the main point or news being shared. Return only the summary, no preamble.\n\nNewsletter:\n{input}",
    seoTitle: "Summarize a Newsletter — Free AI Newsletter Summarizer",
    seoDescription:
      "Paste a full email newsletter and get a tight 2-3 sentence summary. Free, fast, no signup required.",
    h1: "Newsletter Summary",
    introCopy:
      "If you subscribe to more newsletters than you can realistically read, this tool exists for exactly that backlog — paste in a full send and get back just the core point in two or three sentences. It's built for readers triaging a crowded inbox, or for writers who curate other newsletters and need a quick summary to reference or quote. Unlike the newsletter recap generator, which is meant to summarize your own multi-week content for subscribers, this tool condenses a single newsletter for personal use.",
    exampleInput:
      "A newsletter from a marketing consultant covering three quick updates: a new client case study showing a 40% lift in email conversion after subject line testing, a recommended book on positioning, and an announcement of a live workshop next month.",
    exampleOutput:
      "This edition shares a case study where subject line testing lifted email conversion by 40% for a client, recommends a book on brand positioning, and announces an upcoming live workshop next month.",
    faq: [
      {
        question: "Does it work on newsletters with several unrelated sections?",
        answer:
          "Yes, it condenses multi-topic newsletters by touching on each distinct item briefly rather than only summarizing the first section.",
      },
      {
        question: "How is this different from newsletter-recap-generator?",
        answer:
          "This summarizes a single newsletter issue for a reader. The recap generator instead compiles highlights across multiple past issues into one piece, typically for your own subscribers.",
      },
      {
        question: "Can I use this to decide which newsletters to keep subscribing to?",
        answer:
          "That's a common use case — running a few recent issues through the tool gives you a quick sense of whether the content is still worth your time.",
      },
    ],
  },
  {
    slug: "newsletter-to-social-teaser",
    category: "newsletter",
    inputType: "newsletter",
    outputType: "social media teaser",
    promptTemplate:
      "Write a short social media teaser post (under 280 characters) based on the following newsletter content, designed to make people want to subscribe or click through to read the full issue. Do not give away the full content. Return only the teaser text, no preamble.\n\nNewsletter:\n{input}",
    seoTitle: "Turn a Newsletter Into a Social Teaser — Free AI Tool",
    seoDescription:
      "Generate a short, curiosity-driven social media teaser for your newsletter issue. Free teaser generator, no signup.",
    h1: "Newsletter to Social Teaser",
    introCopy:
      "A social post promoting a newsletter issue has a different job than the newsletter itself — it needs to create just enough curiosity to earn a click or a subscribe, without giving away the payoff. This tool reads your full newsletter and writes a short teaser built to withhold the punchline while still hinting at what's inside. It's distinct from the newsletter-to-social-teaser's cousin, blog-to-social-posts, in that this one is specifically aimed at driving subscriptions or opens rather than promoting evergreen content.",
    exampleInput:
      "Newsletter issue breaking down exactly how a small e-commerce brand cut its customer acquisition cost in half by switching ad platforms and reworking its creative testing process.",
    exampleOutput:
      "One small e-commerce brand cut their customer acquisition cost in half. Not with a new product — with two changes most brands skip entirely. Full breakdown in this week's issue.",
    faq: [
      {
        question: "Will it reveal the full story in the teaser?",
        answer:
          "No — the prompt is specifically designed to hold back the key details so readers have a reason to click through and read the full issue.",
      },
      {
        question: "Can I use this for a paid or gated newsletter?",
        answer:
          "Yes, the teaser format works well for gated content since it's built around curiosity rather than summarizing content the reader can't yet access.",
      },
      {
        question: "Does it work for every type of newsletter, including personal ones?",
        answer:
          "Yes, though highly personal or reflective newsletters may need light editing afterward since the tool defaults to a slightly more promotional tone.",
      },
    ],
  },
  {
    slug: "newsletter-intro-generator",
    category: "newsletter",
    inputType: "newsletter topic or content",
    outputType: "newsletter intro",
    promptTemplate:
      "Write an opening paragraph (2-4 sentences) for an email newsletter based on the following topic or content. It should feel personal and conversational, like the writer is speaking directly to a subscriber, and lead naturally into the main content. Return only the intro paragraph, no preamble.\n\nTopic or content:\n{input}",
    seoTitle: "Generate a Newsletter Intro — Free AI Opening Line Tool",
    seoDescription:
      "Turn a topic into a warm, conversational newsletter opening paragraph. Free intro generator, no signup required.",
    h1: "Newsletter Intro Generator",
    introCopy:
      "A newsletter intro has to do something a blog intro doesn't — it has to feel like a message to one specific person rather than an announcement to the internet. This tool takes your topic or draft content and writes an opening paragraph in that direct, conversational voice, built to lead naturally into whatever comes next rather than standing alone as a hook. It complements the blog-intro-generator, which is tuned instead for a public-facing, SEO-oriented opening rather than a one-to-one tone.",
    exampleInput:
      "content: sharing that I switched from a paid analytics tool to a free open-source one and it actually works better for my use case",
    exampleOutput:
      "Quick confession before we get into it: I spent two years paying for an analytics tool I barely used a third of. Last month I finally switched to a free, open-source option — and it's genuinely better for what I actually need. Here's what changed.",
    faq: [
      {
        question: "How is this different from a blog intro?",
        answer:
          "This is written in a more direct, one-to-one voice suited for email, while the blog intro tool is tuned for a public page and often needs to work harder to hook a cold reader.",
      },
      {
        question: "Can I use this for a very short newsletter, like a single announcement?",
        answer:
          "Yes, it scales down fine for short sends — the intro will simply be a brief personal lead-in rather than a lengthy setup.",
      },
      {
        question: "Will it match my newsletter's usual tone?",
        answer:
          "It defaults to a warm, conversational tone; if your newsletter has a more irreverent or formal voice, you may want to tweak a few word choices after generating.",
      },
    ],
  },
  {
    slug: "newsletter-to-plain-text",
    category: "newsletter",
    inputType: "newsletter",
    outputType: "plain text email",
    promptTemplate:
      "Rewrite the following newsletter as a plain, simple text email — remove any markdown formatting, bullet-heavy structure, or promotional styling, and make it read like a personal email from one person to another. Return only the plain text email, no preamble.\n\nNewsletter:\n{input}",
    seoTitle: "Convert a Newsletter to Plain Text — Free AI Tool",
    seoDescription:
      "Strip formatting from a newsletter and turn it into a simple, personal-sounding plain text email. Free, no signup.",
    h1: "Newsletter to Plain Text",
    introCopy:
      "Heavily formatted newsletters can read as promotional even when the content is genuinely personal, and plain text emails consistently get better open and reply rates because they look like they came from an actual person. This tool takes a newsletter with headers, bullets, and other structured formatting and rewrites it as simple prose that reads like a direct email. It's especially useful for cold outreach-adjacent sends or for writers testing whether a more personal format improves engagement compared to their usual designed template.",
    exampleInput:
      "**This Week's Update**\n\n- Launched the new pricing page\n- Hit 500 subscribers\n- Working on a podcast for next month\n\nThanks for reading!",
    exampleOutput:
      "Hey,\n\nA few updates from this week. We launched the new pricing page, which I'd been putting off for way too long. We also crossed 500 subscribers, which feels like a nice milestone even if the number itself doesn't mean much on its own.\n\nI'm also quietly working on a podcast that should be ready sometime next month — more on that soon.\n\nThanks for reading, as always.",
    faq: [
      {
        question: "Does it remove bullet points entirely?",
        answer:
          "Yes, bullets and headers are converted into flowing sentences since plain text emails read more naturally as prose than as a formatted list.",
      },
      {
        question: "Why would I want a less formatted version?",
        answer:
          "Plain text emails often perform better for open and reply rates because they read as personal rather than promotional, especially for smaller or relationship-driven lists.",
      },
      {
        question: "Will it still include all the same information?",
        answer:
          "Yes, the content itself is preserved — only the formatting and structure change, not the substance of what's being communicated.",
      },
    ],
  },
  {
    slug: "newsletter-cta-generator",
    category: "newsletter",
    inputType: "newsletter content",
    outputType: "call-to-action",
    promptTemplate:
      "Based on the following newsletter content, write 3 different call-to-action options suitable for the end of the email, matched to the content's topic. Each should be a single sentence. Return only the 3 numbered options, no preamble.\n\nNewsletter content:\n{input}",
    seoTitle: "Generate a Newsletter Call-to-Action — Free AI Tool",
    seoDescription:
      "Get 3 tailored call-to-action lines for the end of your newsletter, matched to your content. Free, no signup needed.",
    h1: "Newsletter CTA Generator",
    introCopy:
      "Newsletters often end abruptly or default to a generic \"let me know what you think,\" which wastes the moment when a reader is most engaged. This tool reads your content and generates three call-to-action options actually matched to what you wrote — whether that's replying with feedback, checking out a product, or sharing the issue — instead of a one-size-fits-all closer. It pairs well with the newsletter-intro-generator to bookend an issue with two dedicated pieces of writing rather than an afterthought sign-off.",
    exampleInput:
      "Newsletter announcing a new free template pack for freelance invoicing, available to download from a link in the email.",
    exampleOutput:
      "1. Grab the free invoice template pack here before it's gone from the top of your inbox.\n2. Hit reply and tell me what other freelance templates would actually save you time.\n3. If this pack helps, forward this email to one freelancer friend who's still invoicing from scratch.",
    faq: [
      {
        question: "Will the CTAs match the specific content of my newsletter?",
        answer:
          "Yes, each option is generated based on what's actually in your newsletter content, rather than defaulting to a generic subscribe or share prompt.",
      },
      {
        question: "Can I use more than one of the three CTAs?",
        answer:
          "You can, though using a single clear CTA per email typically performs better than stacking multiple asks in one send.",
      },
      {
        question: "Does it work for non-promotional, personal newsletters?",
        answer:
          "Yes, for personal newsletters the CTAs tend to lean toward conversation-starting asks like replying or sharing feedback rather than a hard sell.",
      },
    ],
  },
  {
    slug: "newsletter-recap-generator",
    category: "newsletter",
    inputType: "multiple newsletter excerpts",
    outputType: "recap newsletter",
    promptTemplate:
      "Combine the following newsletter excerpts from recent issues into a single recap newsletter that highlights the best or most important items from each. Organize it with a short intro and then a few highlighted sections. Return only the recap newsletter, no preamble.\n\nExcerpts:\n{input}",
    seoTitle: "Generate a Newsletter Recap — Free AI Recap Tool",
    seoDescription:
      "Combine several past newsletter issues into one highlights recap for subscribers. Free recap generator, no signup.",
    h1: "Newsletter Recap Generator",
    introCopy:
      "Periodic \"best of\" recaps are a proven way to re-engage subscribers who've fallen behind, but manually re-reading a month of past issues to pick highlights is tedious. This tool takes several newsletter excerpts you paste in and compiles them into a single recap issue, organized with a short framing intro followed by the standout items from each. Unlike the newsletter-summary tool, which condenses a single issue for a reader's own reference, this generates new, publishable content meant to go back out to your list.",
    exampleInput:
      "Issue 1 excerpt: covered a client win where a landing page redesign doubled signups.\nIssue 2 excerpt: shared a framework for prioritizing feature requests.\nIssue 3 excerpt: interviewed a designer about burnout and boundaries.",
    exampleOutput:
      "In case you missed anything from the last few weeks, here's a quick recap of the highlights.\n\nWe covered a client win where a simple landing page redesign doubled signups — a good reminder that clarity beats cleverness most of the time.\n\nWe also shared a framework for prioritizing feature requests when everyone insists their request is the most urgent one.\n\nAnd we sat down with a designer to talk honestly about burnout and the boundaries that actually protect creative work, not just the ones that sound good in theory.\n\nIf any of these resonated, hit reply — I read every response.",
    faq: [
      {
        question: "How many past issues can I combine?",
        answer:
          "There's no hard limit, but 3-5 excerpts tends to produce the cleanest recap; too many at once can make the output feel like a list rather than a curated highlight reel.",
      },
      {
        question: "Will it just paste my excerpts back-to-back?",
        answer:
          "No, it reframes each excerpt into a highlighted section with connecting narration, plus a short intro and close, rather than just concatenating the text.",
      },
      {
        question: "Is this meant to replace regular issues or supplement them?",
        answer:
          "It's typically used as an occasional supplement — for example, a monthly \"best of\" send — rather than a replacement for your regular content.",
      },
    ],
  },
  {
    slug: "newsletter-to-linkedin-post",
    category: "newsletter",
    inputType: "newsletter",
    outputType: "LinkedIn post",
    promptTemplate:
      "Adapt the following newsletter content into a LinkedIn post. Keep the core insight, adjust the tone to be professional but still personal, remove any email-specific phrasing, and end with a line that invites engagement. Return only the LinkedIn post, no preamble.\n\nNewsletter:\n{input}",
    seoTitle: "Turn a Newsletter Into a LinkedIn Post — Free AI Tool",
    seoDescription:
      "Convert your email newsletter content into a professional, engagement-ready LinkedIn post. Free converter, no signup.",
    h1: "Newsletter to LinkedIn Post",
    introCopy:
      "Your subscriber list and your LinkedIn audience often overlap less than you'd think, which makes newsletter content a genuinely useful, mostly-untapped source of LinkedIn posts. This tool takes a newsletter issue and reworks it into a standalone post — trimming email-specific phrasing like greetings, adjusting tone to be professional but still personal, and closing with an engagement prompt suited to LinkedIn's format. It complements newsletter-to-social-teaser, which drives people back to the newsletter itself rather than delivering the insight directly on the platform.",
    exampleInput:
      "Hey all,\n\nThis week I want to share something uncomfortable: I raised my prices 30% and lost exactly zero clients. I'd been undercharging out of fear for two years.\n\nMore soon,\nR",
    exampleOutput:
      "Something uncomfortable I learned this year: I raised my prices 30% and lost zero clients.\n\nFor two years I kept rates artificially low out of fear — fear that clients would leave, fear that I'd priced myself out of the market, fear that hadn't actually been tested against reality.\n\nTurns out the fear was doing more damage than the price increase ever could have.\n\nIf you've been sitting on a price increase you know is overdue, what's actually stopping you?",
    faq: [
      {
        question: "Does it keep the newsletter's greeting and sign-off?",
        answer:
          "No, those are removed since they only make sense in an email context; the post opens directly with the substance instead.",
      },
      {
        question: "Will the post reveal that it originally came from an email?",
        answer:
          "No, it's rewritten to stand alone as native LinkedIn content without referencing that it was first sent as a newsletter.",
      },
      {
        question: "Can I use this on a newsletter with multiple topics?",
        answer:
          "It works best on newsletters focused on one main idea; for multi-topic issues, consider isolating the section you want and pasting just that part in.",
      },
    ],
  },
  {
    slug: "newsletter-segment-generator",
    category: "newsletter",
    inputType: "topic and audience note",
    outputType: "newsletter segment",
    promptTemplate:
      "Write a short newsletter segment (2-3 paragraphs) based on the following topic and audience note. Match the tone and depth to the described audience, and write it as a self-contained section that could be inserted into a larger newsletter issue. Return only the segment, no preamble.\n\nTopic and audience:\n{input}",
    seoTitle: "Generate a Newsletter Segment — Free AI Section Writer",
    seoDescription:
      "Write a self-contained newsletter section tailored to a specific topic and audience. Free segment generator, no signup.",
    h1: "Newsletter Segment Generator",
    introCopy:
      "Multi-section newsletters — a roundup, a tips segment, a spotlight — need each piece written distinctly enough to feel like its own moment rather than a continuation of the last section. This tool takes a topic plus a short note about your audience and writes a self-contained segment matched to that specific readership, ready to slot into a larger issue alongside other sections. It differs from the newsletter-intro-generator by producing a body section rather than the opening paragraph, and from newsletter-recap-generator by writing new content rather than compiling past issues.",
    exampleInput:
      "topic: a quick tip on writing better subject lines. audience: solo creators with small but engaged lists, casual and encouraging tone.",
    exampleOutput:
      "Quick tip this week, especially if your list is small but mighty: stop trying to write the clever subject line. Write the honest one.\n\nWith a small, engaged list, you don't need a curiosity trick to get opens — your readers already trust you. What actually helps is being specific about what's inside, so the two minutes they spend reading feels earned every single time.\n\nNext send, try writing your subject line last, after you know exactly what the email says. It's a small change, but it tends to produce lines that undersell less and mislead never.",
    faq: [
      {
        question: "How long is each generated segment?",
        answer:
          "Typically 2-3 paragraphs — long enough to deliver real value as a standalone section, short enough to sit alongside other segments in one issue.",
      },
      {
        question: "Can I generate multiple segments for the same issue?",
        answer:
          "Yes, run the tool once per topic and audience note to build out several distinct segments for a single multi-part newsletter.",
      },
      {
        question: "Does the audience note actually change the output?",
        answer:
          "Yes — describing your audience's tone and context shifts the vocabulary and depth of the segment, so a technical audience note produces noticeably different prose than a casual one.",
      },
    ],
  },

  // ===== SOCIAL CAPTION (10) =====
  {
    slug: "photo-caption-generator",
    category: "social-caption",
    inputType: "photo description",
    outputType: "caption",
    promptTemplate:
      "Write a short, engaging social media caption based on the following photo description. Keep it natural and not overly salesy, suitable for a general audience across platforms. Return only the caption, no preamble.\n\nPhoto description:\n{input}",
    seoTitle: "Generate a Photo Caption — Free AI Caption Writer",
    seoDescription:
      "Describe your photo and get a natural, ready-to-post social caption in seconds. Free caption generator, no signup.",
    h1: "Photo Caption Generator",
    introCopy:
      "Staring at a photo you're about to post with no idea what to write underneath it is one of the smallest but most common blocks in social media. This tool takes a plain description of what's in your photo and turns it into a natural-sounding caption that doesn't read like an ad, meant to work across most platforms rather than being tuned to one. It's the general-purpose starting point in this category — for Instagram or Facebook-specific formatting and tone, use those dedicated tools instead.",
    exampleInput: "sunset over the mountains, hiked 8 miles to get there, exhausted but worth it",
    exampleOutput:
      "8 miles and every step worth it for this view. Some sunsets you have to earn.",
    faq: [
      {
        question: "Does it work for any type of photo?",
        answer:
          "Yes, it works for travel, food, everyday moments, product shots, and more — just describe what's in the photo and the context around it.",
      },
      {
        question: "Is this platform-specific?",
        answer:
          "No, this is intentionally general-purpose. For Instagram or Facebook-tuned tone and formatting, use the instagram-caption-generator or facebook-post-generator instead.",
      },
      {
        question: "Will it add hashtags automatically?",
        answer:
          "No, this tool focuses purely on the caption text — pair it with the caption-to-hashtags tool if you want tailored hashtags added afterward.",
      },
    ],
  },
  {
    slug: "instagram-caption-generator",
    category: "social-caption",
    inputType: "photo or post description",
    outputType: "Instagram caption",
    promptTemplate:
      "Write an Instagram caption based on the following description. Use a warm, engaging tone typical of Instagram, include a natural line break or two for readability, and end with a short question or line inviting comments. Do not include hashtags. Return only the caption, no preamble.\n\nDescription:\n{input}",
    seoTitle: "Generate an Instagram Caption — Free AI Tool",
    seoDescription:
      "Turn a photo description into an engaging, comment-friendly Instagram caption. Free Instagram caption generator, no signup.",
    h1: "Instagram Caption Generator",
    introCopy:
      "Instagram captions have their own rhythm — a little more personal and story-driven than a generic caption, usually with a line break for readability and a soft prompt at the end to nudge comments. This tool is tuned specifically to that format, distinct from the general photo-caption-generator, which is platform-agnostic and skips the comment-baiting close. It's built for creators and small brands who want a caption that feels native to the app rather than something copy-pasted from elsewhere.",
    exampleInput: "new apartment, finally unpacked all the boxes after 3 weeks",
    exampleOutput:
      "Three weeks, way too many boxes, and finally — it feels like home.\n\nWhat's the one room that always takes the longest to finish unpacking for you?",
    faq: [
      {
        question: "Does it include hashtags in the caption?",
        answer:
          "No, hashtags are intentionally left out so you can pair the caption with the caption-to-hashtags tool for hashtags tailored specifically to your content.",
      },
      {
        question: "Why does it end with a question?",
        answer:
          "Instagram's algorithm and general engagement both favor captions that prompt a response, so a soft closing question is included by default to encourage comments.",
      },
      {
        question: "Can I use this for Reels captions too?",
        answer:
          "Yes, the tone works well for Reels captions, though very short-form Reels may benefit from trimming the output down using the caption-shortener tool.",
      },
    ],
  },
  {
    slug: "facebook-post-generator",
    category: "social-caption",
    inputType: "post description or update",
    outputType: "Facebook post",
    promptTemplate:
      "Write a Facebook post based on the following description or update. Use a friendly, slightly more conversational and longer tone than a typical Instagram caption, appropriate for Facebook's older, community-oriented audience. Return only the post, no preamble.\n\nDescription or update:\n{input}",
    seoTitle: "Generate a Facebook Post — Free AI Post Writer",
    seoDescription:
      "Turn an update or description into a friendly, community-toned Facebook post. Free Facebook post generator, no signup.",
    h1: "Facebook Post Generator",
    introCopy:
      "Facebook's audience and culture skew toward longer, more conversational posts than Instagram's visually-driven, shorter captions — a post that works great on one platform can feel oddly clipped or oddly long on the other. This tool is tuned specifically for Facebook's tone: friendlier, a bit more explanatory, and comfortable with a longer paragraph or two, which suits its more community- and family-oriented audience. Use the instagram-caption-generator instead if you're posting the same content to a more visually-driven, younger audience.",
    exampleInput: "our small bakery just hit 5 years in business, want to thank the community",
    exampleOutput:
      "Five years ago today, we opened our doors not knowing if anyone would walk through them. Today, we're still here — and it's entirely because of this community.\n\nTo everyone who's stopped in for a morning coffee, ordered a birthday cake, or just told a friend about us: thank you. This milestone belongs to you as much as it does to us. Here's to the next five years!",
    faq: [
      {
        question: "How is this different from the Instagram caption tool?",
        answer:
          "Facebook posts here are written longer and more conversationally, matching the platform's community-oriented culture, while the Instagram tool favors shorter, punchier captions with line breaks.",
      },
      {
        question: "Does it work for business pages as well as personal profiles?",
        answer:
          "Yes, it adapts to both — a business update like a milestone or announcement reads naturally, as does a more personal life update.",
      },
      {
        question: "Should I add hashtags to a Facebook post?",
        answer:
          "Hashtags are far less impactful on Facebook than Instagram, so this tool doesn't include them; a plain, readable post performs better on this platform.",
      },
    ],
  },
  {
    slug: "caption-to-hashtags",
    category: "social-caption",
    inputType: "caption",
    outputType: "hashtags",
    promptTemplate:
      "Based on the following social media caption, generate a list of 10-15 relevant hashtags, mixing broad and niche tags. Return only the hashtags separated by spaces, no preamble.\n\nCaption:\n{input}",
    seoTitle: "Generate Hashtags From a Caption — Free AI Tool",
    seoDescription:
      "Paste a caption and get 10-15 relevant hashtags mixing broad and niche reach. Free hashtag generator, no signup.",
    h1: "Caption to Hashtags",
    introCopy:
      "Picking hashtags manually usually means either reusing the same tired set every time or spending ten minutes searching for what's relevant. This tool reads your actual caption and generates a mixed set of 10-15 hashtags, combining broad, high-traffic tags with more niche ones specific to your content, so your post has a shot at both wide discovery and a more targeted audience. It's meant to run after you've already written a caption with one of the other tools in this category, not as a standalone captioning tool.",
    exampleInput:
      "homemade sourdough loaf, first successful bake after 6 failed attempts",
    exampleOutput:
      "#sourdough #homebaking #breadmaking #sourdoughbread #bakingfromscratch #homemadebread #breadbaking #sourdoughstarter #bakersofinstagram #breadlover #artisanbread #kitchenwins #bakingjourney #foodie",
    faq: [
      {
        question: "Does it mix broad and niche hashtags?",
        answer:
          "Yes, the output combines high-traffic broad tags with more specific niche ones, since relying only on broad tags tends to get posts buried.",
      },
      {
        question: "How many hashtags does it generate?",
        answer:
          "Between 10 and 15, which fits comfortably within most platforms' practical limits without looking spammy.",
      },
      {
        question: "Can I use these hashtags on platforms other than Instagram?",
        answer:
          "Yes, though hashtag culture varies by platform — TikTok and Twitter/X tend to perform better with fewer, more targeted tags than the full list generated here.",
      },
    ],
  },
  {
    slug: "caption-tone-shifter",
    category: "social-caption",
    inputType: "caption",
    outputType: "tone-adjusted caption",
    promptTemplate:
      "Rewrite the following social media caption in a different tone as specified within the input if given, otherwise default to a more playful and witty tone. Keep the core message the same. Return only the rewritten caption, no preamble.\n\nCaption:\n{input}",
    seoTitle: "Change a Caption's Tone — Free AI Caption Rewriter",
    seoDescription:
      "Rewrite any social caption in a different tone — playful, formal, witty, and more. Free caption tone shifter, no signup.",
    h1: "Caption Tone Shifter",
    introCopy:
      "The same photo can call for a completely different caption tone depending on the account posting it — a witty caption for a personal account might feel wrong for a brand page, and vice versa. This tool takes a caption you've already written and shifts its tone, defaulting to playful and witty if you don't specify a target tone, while preserving the actual message underneath. It's meant for adapting one caption across multiple accounts or moods, not for generating a caption from scratch — pair it with the photo-caption-generator for that first step.",
    exampleInput: "our new product is finally live after months of work",
    exampleOutput:
      "It's alive. Actually alive. After months of caffeine and mild chaos, our new product is officially out in the world.",
    faq: [
      {
        question: "What tone does it default to if I don't specify one?",
        answer:
          "If no target tone is given, it defaults to playful and witty, since that's a commonly requested shift from a flatter, more literal original caption.",
      },
      {
        question: "Can I specify a tone directly in what I paste in?",
        answer:
          "Yes, include something like \"make this more formal\" alongside your caption text and the rewrite will follow that direction instead of the default.",
      },
      {
        question: "Will it change the actual meaning of the caption?",
        answer:
          "No, the core message and any specific details are preserved — only the voice, word choice, and energy of the caption change.",
      },
    ],
  },
  {
    slug: "product-photo-caption",
    category: "social-caption",
    inputType: "product description",
    outputType: "product caption",
    promptTemplate:
      "Write a social media caption for a product photo based on the following product description. Highlight a key benefit or feature naturally, avoid sounding like a hard sales pitch, and keep it concise. Return only the caption, no preamble.\n\nProduct description:\n{input}",
    seoTitle: "Generate a Product Photo Caption — Free AI Tool",
    seoDescription:
      "Turn a product description into a natural, benefit-led social caption that doesn't sound like an ad. Free, no signup.",
    h1: "Product Photo Caption",
    introCopy:
      "Product captions walk a narrow line — too salesy and people scroll past, too vague and the post does nothing for the business. This tool takes a plain product description and writes a caption that leads with a real benefit or feature but stays conversational rather than reading like ad copy. It's specifically scoped to product photography, unlike the general photo-caption-generator, which doesn't account for the need to actually sell something without sounding like a pitch.",
    exampleInput:
      "ceramic travel mug, keeps coffee hot for 6 hours, leak-proof lid, comes in 4 colors",
    exampleOutput:
      "Still hot six hours later. No joke. Our ceramic travel mug is finally back in stock in all four colors — leak-proof lid included, because nobody wants coffee in their bag.",
    faq: [
      {
        question: "Will it sound like a hard sales pitch?",
        answer:
          "No, the prompt specifically avoids a hard-sell tone in favor of a natural caption that highlights one benefit, similar to how a real customer might describe the product.",
      },
      {
        question: "Can I include multiple product features?",
        answer:
          "You can list several in your description, but the caption will typically lead with the most compelling one rather than cramming all of them in.",
      },
      {
        question: "Does it include a call-to-action to buy?",
        answer:
          "Not automatically — for a dedicated CTA, run the output through the caption-cta-generator tool afterward to add a purchase-focused closing line.",
      },
    ],
  },
  {
    slug: "event-caption-generator",
    category: "social-caption",
    inputType: "event description",
    outputType: "event caption",
    promptTemplate:
      "Write a social media caption promoting the following event. Include a sense of excitement or urgency, and make clear what the event is and why someone should attend, without listing every logistical detail. Return only the caption, no preamble.\n\nEvent description:\n{input}",
    seoTitle: "Generate an Event Caption — Free AI Event Post Writer",
    seoDescription:
      "Turn event details into an exciting, attendance-driving social media caption. Free event caption generator, no signup.",
    h1: "Event Caption Generator",
    introCopy:
      "Event promotion posts often fail by either burying the pitch under a wall of logistics, or being so vague nobody understands what's actually happening. This tool takes your event details and writes a caption focused on why someone should show up, conveying urgency or excitement without turning into a flyer of times and addresses. It's built specifically for promotion before an event, distinct from the general caption tools in this category which aren't tuned for driving RSVPs or ticket sales.",
    exampleInput:
      "local pop-up market this saturday, 20+ small businesses, live music, free entry",
    exampleOutput:
      "This Saturday only: 20+ local small businesses, live music, and zero entry fee. Bring cash, bring friends, and come support the makers in your own backyard.",
    faq: [
      {
        question: "Does it include all the logistical details like time and address?",
        answer:
          "It focuses on the compelling reason to attend rather than listing every detail — add specific times, dates, and locations manually so they're easy to find and update.",
      },
      {
        question: "Can I use this for a recurring event?",
        answer:
          "Yes, just describe it as recurring in your input (e.g. \"every Saturday\") and the caption will reflect that framing rather than implying a one-time event.",
      },
      {
        question: "Is this good for both free and ticketed events?",
        answer:
          "Yes, describe whether it's free or ticketed in your input and the caption's urgency and framing will adjust accordingly.",
      },
    ],
  },
  {
    slug: "caption-shortener",
    category: "social-caption",
    inputType: "long caption",
    outputType: "short caption",
    promptTemplate:
      "Shorten the following social media caption to a single punchy sentence under 100 characters, preserving the core message or feeling. Return only the shortened caption, no preamble.\n\nCaption:\n{input}",
    seoTitle: "Shorten a Social Caption — Free AI Caption Trimmer",
    seoDescription:
      "Trim a long caption down to a punchy one-liner under 100 characters. Free caption shortener, no signup needed.",
    h1: "Caption Shortener",
    introCopy:
      "Not every platform or placement wants a paragraph — a Reel, a Story sticker, or a TikTok caption often works better as one punchy line rather than a full caption. This tool takes a longer caption you've already written and compresses it down to a single sentence under 100 characters, keeping the core feeling intact rather than just cutting it off mid-thought. It's the natural next step after using the instagram-caption-generator or facebook-post-generator when you need a shorter version for a different placement.",
    exampleInput:
      "Three weeks, way too many boxes, and finally — it feels like home. What's the one room that always takes the longest to finish unpacking for you?",
    exampleOutput: "Three weeks of boxes later, it finally feels like home.",
    faq: [
      {
        question: "How short does it get the caption?",
        answer:
          "Under 100 characters, condensed into a single punchy sentence rather than a truncated fragment of the original.",
      },
      {
        question: "Does it keep the same tone as the original?",
        answer:
          "Yes, it preserves the feeling and voice of the longer caption, just expressed more economically.",
      },
      {
        question: "What's this useful for specifically?",
        answer:
          "Story stickers, TikTok captions, Reels text overlays, and any placement where a full caption would be too long or get cut off.",
      },
    ],
  },
  {
    slug: "caption-to-carousel-copy",
    category: "social-caption",
    inputType: "topic or caption",
    outputType: "carousel slide copy",
    promptTemplate:
      "Based on the following topic or caption, write copy for a 5-slide Instagram carousel post. Each slide should have a short headline (under 8 words) and one supporting line. Slide 1 should hook the reader, and slide 5 should wrap up or include a call-to-action. Return only the 5 numbered slides, no preamble.\n\nTopic or caption:\n{input}",
    seoTitle: "Generate Carousel Post Copy — Free AI Slide Writer",
    seoDescription:
      "Turn a topic or caption into 5 slides of ready-to-design Instagram carousel copy. Free carousel copy generator, no signup.",
    h1: "Caption to Carousel Copy",
    introCopy:
      "Carousels outperform single-image posts on reach for a lot of accounts, but writing five slides of copy that build on each other is a different skill than writing one caption. This tool takes a topic or an existing caption and expands it into a 5-slide structure — a hook slide, a build, and a closing slide with a call-to-action — each with a short headline and one supporting line, ready to drop into a design template. It's the most structurally different tool in this category, producing multi-part content instead of a single caption.",
    exampleInput: "3 mistakes people make when starting a home garden",
    exampleOutput:
      "1. Headline: You're probably killing your garden\nSupporting: Three mistakes almost every beginner makes without realizing it.\n\n2. Headline: Mistake #1: Overwatering\nSupporting: More plants die from too much water than too little.\n\n3. Headline: Mistake #2: Wrong sunlight spot\nSupporting: Most vegetables need 6+ hours of direct sun to thrive.\n\n4. Headline: Mistake #3: Planting too close\nSupporting: Crowded roots compete for nutrients and stunt growth.\n\n5. Headline: Save this for planting day\nSupporting: Follow, and share this with a friend starting their first garden.",
    faq: [
      {
        question: "How many slides does it generate?",
        answer:
          "Five slides, each with a short headline and one supporting line, which fits the most common carousel length for engagement.",
      },
      {
        question: "Do I need to design the slides myself?",
        answer:
          "Yes, this tool provides only the copy; you'll still need a design tool like Canva to turn the text into finished slide graphics.",
      },
      {
        question: "Can I ask for more than 5 slides?",
        answer:
          "The tool is tuned for a 5-slide structure by default; for longer carousels, consider running it twice and combining or extending the results manually.",
      },
    ],
  },
  {
    slug: "caption-cta-generator",
    category: "social-caption",
    inputType: "caption",
    outputType: "call-to-action line",
    promptTemplate:
      "Based on the following social media caption, write a single call-to-action line to add at the end, matched naturally to the content (e.g. comment, share, save, visit link). Return only the call-to-action line, no preamble.\n\nCaption:\n{input}",
    seoTitle: "Generate a Caption Call-to-Action — Free AI Tool",
    seoDescription:
      "Add a natural, content-matched call-to-action line to any social caption. Free CTA generator, no signup required.",
    h1: "Caption CTA Generator",
    introCopy:
      "A caption without a call-to-action leaves engagement to chance, but a mismatched CTA — asking people to \"shop now\" under a purely personal post — reads as tone-deaf. This tool reads your caption and generates a single CTA line genuinely matched to the content, choosing between a comment prompt, a share request, a save suggestion, or a link visit based on what actually fits. It's meant to be the final step after writing a caption with any of the other tools in this category, not a standalone caption generator.",
    exampleInput:
      "Behind the scenes of how we pack every order by hand in our tiny studio.",
    exampleOutput: "Save this if you love seeing the process behind small businesses.",
    faq: [
      {
        question: "How does it decide which type of CTA to use?",
        answer:
          "It reads the content and tone of your caption to pick a naturally fitting action — a personal post tends to get a comment or save prompt, while a product post may get a link-visit CTA.",
      },
      {
        question: "Can I request a specific type of CTA?",
        answer:
          "Yes, mention the type you want (e.g. \"add a comment-focused CTA\") alongside your caption text and it will follow that direction.",
      },
      {
        question: "Should I always add a CTA to every post?",
        answer:
          "Not necessarily — some posts perform fine without one, but for posts meant to drive a specific action, a matched CTA line generally helps rather than hurts.",
      },
    ],
  },

  // ===== PRESS RELEASE (10) =====
  {
    slug: "press-release-to-summary",
    category: "press-release",
    inputType: "press release",
    outputType: "summary",
    promptTemplate:
      "Summarize the following press release in 2-3 sentences, capturing the core news, who it involves, and why it matters. Remove boilerplate and quotes. Return only the summary, no preamble.\n\nPress release:\n{input}",
    seoTitle: "Summarize a Press Release — Free AI Summarizer",
    seoDescription:
      "Paste a press release and get a tight 2-3 sentence summary of the actual news. Free, fast, no signup required.",
    h1: "Press Release to Summary",
    introCopy:
      "Press releases are written to satisfy legal review and boilerplate conventions as much as to communicate news, which means the actual announcement is often buried under three paragraphs of company background and a quote from a VP. This tool strips all of that away and returns just the core news in two or three sentences — what happened, who's involved, and why it matters. It's built for journalists, investors, or anyone scanning a stack of releases who needs the signal without the padding.",
    exampleInput:
      "FOR IMMEDIATE RELEASE. Acme Robotics, a leader in industrial automation solutions since 2014, today announced the close of a $40 million Series C funding round led by Meridian Capital, with participation from existing investors. The funding will be used to expand manufacturing capacity and accelerate international expansion. \"We're thrilled to partner with Meridian as we enter this next chapter,\" said CEO Jane Doe...",
    exampleOutput:
      "Acme Robotics has closed a $40 million Series C funding round led by Meridian Capital, with participation from existing investors. The company plans to use the funds to expand manufacturing capacity and accelerate international expansion.",
    faq: [
      {
        question: "Does it remove the boilerplate \"About\" section?",
        answer:
          "Yes, standard boilerplate company descriptions and quotes are excluded so the summary focuses purely on the actual news being announced.",
      },
      {
        question: "Will it include the executive quotes?",
        answer:
          "No, quotes are left out of the summary by default since they rarely add new information beyond what's already stated as fact.",
      },
      {
        question: "Can I use this to quickly scan multiple releases?",
        answer:
          "Yes, this is a common use case — running several releases through the tool lets you triage which ones are worth reading in full.",
      },
    ],
  },
  {
    slug: "press-release-to-social-post",
    category: "press-release",
    inputType: "press release",
    outputType: "social media post",
    promptTemplate:
      "Convert the following press release into a short, engaging social media post announcing the news, under 280 characters. Avoid formal press language and write it as a natural announcement. Return only the post, no preamble.\n\nPress release:\n{input}",
    seoTitle: "Turn a Press Release Into a Social Post — Free AI Tool",
    seoDescription:
      "Convert formal press release language into a short, natural social media announcement. Free converter, no signup.",
    h1: "Press Release to Social Post",
    introCopy:
      "Press release language — \"today announced,\" \"is pleased to unveil\" — reads as stiff and corporate the moment it's dropped into a social feed next to everyone else's casual posts. This tool takes the formal announcement and rewrites it as a short, natural social post that still conveys the news accurately but drops the press-speak entirely. It's specifically for the announcement itself, distinct from the funding-announcement-generator, which is built to draft a full release rather than convert an existing one into a short post.",
    exampleInput:
      "FOR IMMEDIATE RELEASE. TechFlow Inc. today announced the launch of its new customer analytics platform, TechFlow Insights, designed to help mid-market companies unify data from multiple sources into a single dashboard...",
    exampleOutput:
      "Big news: we just launched TechFlow Insights, a new analytics platform that pulls all your customer data into one dashboard. Built specifically for mid-market teams tired of juggling five different tools.",
    faq: [
      {
        question: "Will it sound like a corporate announcement?",
        answer:
          "No, the goal is specifically to drop the formal press release tone — words like \"today announced\" or \"is pleased to\" are avoided in favor of natural language.",
      },
      {
        question: "Does it fit within Twitter/X's character limit?",
        answer:
          "Yes, the output is kept under 280 characters so it can be posted directly without further trimming.",
      },
      {
        question: "Can I use this for LinkedIn instead of Twitter?",
        answer:
          "Yes, the tone works for LinkedIn as well, though you may want to expand it slightly since LinkedIn posts can comfortably run longer than 280 characters.",
      },
    ],
  },
  {
    slug: "announcement-to-press-release",
    category: "press-release",
    inputType: "informal announcement",
    outputType: "press release",
    promptTemplate:
      "Convert the following informal announcement or update into a properly formatted press release, including a headline, dateline, opening paragraph covering the who/what/when/where/why, a placeholder quote section, and standard formal press release language. Return only the press release, no preamble.\n\nAnnouncement:\n{input}",
    seoTitle: "Turn an Announcement Into a Press Release — Free AI Tool",
    seoDescription:
      "Convert a casual announcement or update into a properly formatted, professional press release. Free, no signup required.",
    h1: "Announcement to Press Release",
    introCopy:
      "Most founders and marketers know their news is press-release-worthy long before they know how to actually format one — the headline conventions, the dateline, the who/what/when/where/why lead paragraph, the quote placeholder. This tool takes a casual internal announcement or update and restructures it into a properly formatted press release ready for a journalist or wire service to skim. It's the reverse of the press-release-to-summary tool, building formal structure up from informal notes rather than stripping it away.",
    exampleInput:
      "we're opening our second location downtown next month, been planning this for over a year, will create about 15 new jobs",
    exampleOutput:
      "FOR IMMEDIATE RELEASE\n\n[Company Name] to Open Second Location Downtown, Creating 15 New Jobs\n\n[City, State] — [Company Name] today announced plans to open its second location in downtown [City] next month, following more than a year of planning. The new location is expected to create approximately 15 new jobs in the local community.\n\n\"[Placeholder quote from company leadership about the significance of the expansion.]\"\n\nThe new location will [placeholder: describe offerings/services]. For more information, visit [website].\n\n### \n\nAbout [Company Name]\n[Placeholder boilerplate company description.]",
    faq: [
      {
        question: "Will it invent fake quotes or details?",
        answer:
          "No, it inserts clearly marked placeholders for quotes and details it doesn't have, like the company name or a leadership quote, rather than fabricating specifics.",
      },
      {
        question: "Does it follow standard press release formatting?",
        answer:
          "Yes, it includes the standard elements — a headline, dateline, lead paragraph, quote section, and boilerplate placeholder — that journalists and wire services expect.",
      },
      {
        question: "Can I use this for a product launch, not just a company update?",
        answer:
          "Yes, it works for any newsworthy announcement, including product launches, partnerships, or milestones — just describe the news in plain language as your input.",
      },
    ],
  },
  {
    slug: "press-release-headline-generator",
    category: "press-release",
    inputType: "press release content or topic",
    outputType: "headline options",
    promptTemplate:
      "Based on the following press release content or topic, generate 5 headline options in standard press release style — clear, factual, and free of hype language. Return only the 5 numbered headlines, no preamble.\n\nContent or topic:\n{input}",
    seoTitle: "Generate a Press Release Headline — Free AI Tool",
    seoDescription:
      "Get 5 clear, professional press release headline options from your content or topic. Free headline generator, no signup.",
    h1: "Press Release Headline Generator",
    introCopy:
      "Press release headlines follow a different set of rules than blog or social headlines — they need to be factual and free of hype words like \"revolutionary\" or \"game-changing,\" since journalists and editors tend to discount releases that oversell. This tool generates five headline options in that clear, restrained press style, focused on communicating the news precisely rather than generating clicks. Use it alongside the announcement-to-press-release tool when you need several headline options to choose from before finalizing a release.",
    exampleInput:
      "topic: company is launching a carbon offset tracking tool for small businesses",
    exampleOutput:
      "1. [Company] Launches Carbon Offset Tracking Tool for Small Businesses\n2. New Platform Helps Small Businesses Track and Manage Carbon Offsets\n3. [Company] Introduces Carbon Tracking Solution Aimed at Small Business Market\n4. [Company] Debuts Tool to Simplify Carbon Offset Reporting for Small Businesses\n5. Small Business Carbon Tracking Gets Easier With New [Company] Platform",
    faq: [
      {
        question: "Will the headlines include hype words?",
        answer:
          "No, the prompt specifically avoids hype language like \"revolutionary\" or \"game-changing,\" since factual, restrained headlines are the industry standard for press releases.",
      },
      {
        question: "How is this different from the blog title generator?",
        answer:
          "Blog titles are written to maximize clicks and can use curiosity or bold claims; press release headlines follow a stricter journalistic convention focused on clarity and fact over persuasion.",
      },
      {
        question: "Should I include my company name in the input?",
        answer:
          "Yes, including your actual company name produces more usable headlines directly, rather than generic placeholder text you'd need to edit in afterward.",
      },
    ],
  },
  {
    slug: "press-release-to-blog-post",
    category: "press-release",
    inputType: "press release",
    outputType: "blog post",
    promptTemplate:
      "Rewrite the following press release as a blog post for the company's own website. Use a more conversational tone than formal press language, add context for readers who aren't journalists, and remove boilerplate. Return only the blog post, no preamble.\n\nPress release:\n{input}",
    seoTitle: "Turn a Press Release Into a Blog Post — Free AI Tool",
    seoDescription:
      "Convert a formal press release into a conversational blog post for your company site. Free converter, no signup needed.",
    h1: "Press Release to Blog Post",
    introCopy:
      "A press release is written for journalists who already understand the industry context, but the same news posted on a company blog needs to speak to customers and prospects who don't. This tool takes a formal release and rewrites it in a more conversational tone, adding the context a general reader needs and dropping the boilerplate that only makes sense in a media context. It's meant for the company's own site, unlike press-release-to-social-post, which compresses the same news into a much shorter, single-post format.",
    exampleInput:
      "FOR IMMEDIATE RELEASE. Acme Software today announced a strategic partnership with DataSync Corp to integrate real-time data synchronization into its flagship platform, effective Q3...",
    exampleOutput:
      "We're excited to share some news: starting this quarter, Acme Software is partnering with DataSync Corp to bring real-time data syncing directly into our platform.\n\nIf you've ever had to manually refresh a dashboard or wait for an overnight sync job to catch up, you know exactly why this matters. This partnership means your data updates as it happens, not hours later.\n\nWe'll be rolling this out gradually over Q3, and we'll share more details as the integration goes live. In the meantime, here's a bit about why we chose to partner with DataSync specifically...",
    faq: [
      {
        question: "Does it keep the formal press release structure?",
        answer:
          "No, it drops the dateline, boilerplate, and formal structure entirely in favor of a normal blog post format with a title and conversational paragraphs.",
      },
      {
        question: "Will it explain industry jargon from the original release?",
        answer:
          "It adds general context where needed for a non-journalist reader, though highly technical jargon may still need a manual explanation depending on your audience.",
      },
      {
        question: "Can I publish this directly on my company blog?",
        answer:
          "It's meant as a strong first draft — many companies add a specific call-to-action or internal link before publishing, but the core content is publish-ready.",
      },
    ],
  },
  {
    slug: "press-release-simplifier",
    category: "press-release",
    inputType: "press release",
    outputType: "plain-language summary",
    promptTemplate:
      "Rewrite the following press release in plain, simple language that a general reader with no industry background could understand. Avoid jargon and corporate phrasing. Keep it to one short paragraph. Return only the plain-language version, no preamble.\n\nPress release:\n{input}",
    seoTitle: "Simplify a Press Release — Free AI Plain-Language Tool",
    seoDescription:
      "Turn jargon-heavy press release language into a plain, easy-to-understand paragraph. Free simplifier tool, no signup.",
    h1: "Press Release Simplifier",
    introCopy:
      "Press releases, especially in tech, finance, and healthcare, tend to accumulate jargon that makes sense to insiders but leaves everyone else guessing what actually happened. This tool strips out that industry-specific language and corporate phrasing, rewriting the release in plain terms a general reader could understand in one short paragraph. It's aimed at communications teams checking their own releases for clarity, or readers trying to understand a release from an unfamiliar industry, and is more aggressive about simplification than press-release-to-summary, which condenses length but doesn't necessarily simplify vocabulary.",
    exampleInput:
      "MedTech Solutions today announced FDA clearance for its novel Class II diagnostic device leveraging proprietary biomarker analysis to enable point-of-care detection of early-stage cardiac biomarkers with improved sensitivity over existing modalities.",
    exampleOutput:
      "MedTech Solutions got approval to sell a new medical device that can detect early signs of heart problems right at the doctor's office, using a blood test method that's more accurate than current options.",
    faq: [
      {
        question: "How is this different from the summary tool?",
        answer:
          "The summary tool shortens length while keeping industry terminology intact; this tool specifically targets jargon and complex phrasing, replacing it with plain, everyday language even if the result is similar in length.",
      },
      {
        question: "Will it lose important technical accuracy?",
        answer:
          "It aims to preserve the actual facts and claims while changing only the vocabulary and phrasing, though highly technical or regulatory language may need review by a subject matter expert.",
      },
      {
        question: "Who typically uses this tool?",
        answer:
          "Communications and PR teams checking their own drafts for readability, plus general readers or reporters covering an unfamiliar industry who want the plain-English version first.",
      },
    ],
  },
  {
    slug: "press-release-to-email",
    category: "press-release",
    inputType: "press release",
    outputType: "email announcement",
    promptTemplate:
      "Rewrite the following press release as an email announcement to send to a company's customer or subscriber list. Add a greeting, make the tone warmer and more direct, and end with a clear next step or call-to-action. Return only the email, no preamble.\n\nPress release:\n{input}",
    seoTitle: "Turn a Press Release Into an Email — Free AI Tool",
    seoDescription:
      "Convert a formal press release into a warm, direct email announcement for your customer list. Free converter, no signup.",
    h1: "Press Release to Email",
    introCopy:
      "The same news that goes out to journalists as a press release often needs to go to customers too, but customers don't want dateline formatting and a boilerplate \"About\" section — they want to know what changed for them and what to do next. This tool converts a formal release into a direct customer email, adding a greeting, warming up the tone, and closing with a clear next step. It's distinct from press-release-to-blog-post in that it's written for a one-to-one inbox context rather than a public page.",
    exampleInput:
      "FOR IMMEDIATE RELEASE. CloudBase today announced the general availability of its new API rate limiting feature, allowing enterprise customers to set custom throttling rules across all endpoints...",
    exampleOutput:
      "Hi there,\n\nWe've got a feature update we think you'll actually use: custom API rate limiting is now live for all enterprise customers.\n\nYou can now set your own throttling rules across every endpoint, giving you much finer control over how your integrations behave under load — no more one-size-fits-all limits.\n\nHead to your dashboard's API settings to configure your first rule. If you run into any questions, just reply to this email and we'll help you get set up.\n\nBest,\nThe CloudBase Team",
    faq: [
      {
        question: "Does it include a greeting and sign-off?",
        answer:
          "Yes, both are added automatically since those are expected in a customer email but wouldn't appear in a formal press release.",
      },
      {
        question: "Will it still sound professional, just less formal?",
        answer:
          "Yes, the tone is warmed up and made more direct without becoming overly casual, since it's still representing the company to its customer base.",
      },
      {
        question: "Does it add a specific call-to-action?",
        answer:
          "Yes, the email closes with a clear next step relevant to the announcement, such as trying a new feature or visiting a page, rather than ending abruptly.",
      },
    ],
  },
  {
    slug: "funding-announcement-generator",
    category: "press-release",
    inputType: "funding details",
    outputType: "funding announcement",
    promptTemplate:
      "Write a press release announcing a funding round based on the following details (amount, round, lead investor, and any use-of-funds information provided). Follow standard press release structure with a headline, opening paragraph, and a placeholder quote. Return only the press release, no preamble.\n\nFunding details:\n{input}",
    seoTitle: "Generate a Funding Announcement — Free AI Press Release Tool",
    seoDescription:
      "Turn your funding round details into a properly structured press release announcement. Free funding announcement generator, no signup.",
    h1: "Funding Announcement Generator",
    introCopy:
      "Funding announcements follow a fairly predictable structure — amount, round, lead investor, use of funds, a founder quote — but getting the phrasing and formality right from scratch still takes longer than it should when you're mid-raise and busy with everything else. This tool takes your raw funding details and builds them into a properly structured press release with a headline and placeholder quote section, following the same conventions investors and journalists expect to see. It's more specific than announcement-to-press-release, which handles any type of news rather than being tuned to funding rounds specifically.",
    exampleInput:
      "raised $8 million Series A led by Horizon Ventures, participation from angel investors, funds going toward engineering hires and expanding into the EU market",
    exampleOutput:
      "FOR IMMEDIATE RELEASE\n\n[Company Name] Raises $8 Million Series A Led by Horizon Ventures\n\n[City, State] — [Company Name] today announced it has raised $8 million in Series A funding, led by Horizon Ventures with participation from existing angel investors. The company plans to use the funds to expand its engineering team and enter the European market.\n\n\"[Placeholder quote from founder on the significance of the round and what it enables.]\"\n\nThe new capital brings [Company Name]'s total funding to [placeholder: total raised, if applicable].\n\n###\n\nAbout [Company Name]\n[Placeholder boilerplate description.]",
    faq: [
      {
        question: "What details should I include for the best result?",
        answer:
          "At minimum, the amount raised, the round type, and the lead investor. Adding use-of-funds information and any notable participating investors makes the release more complete.",
      },
      {
        question: "Will it fill in a fake company name or quote?",
        answer:
          "No, it uses clearly marked placeholders for anything you didn't provide, like your company name or a founder quote, so you can fill those in accurately.",
      },
      {
        question: "Can I use this for a seed round or later-stage round too?",
        answer:
          "Yes, it works for any round type — just specify the round (seed, Series A, Series B, etc.) in your input and the structure adjusts accordingly.",
      },
    ],
  },
  {
    slug: "product-launch-announcement",
    category: "press-release",
    inputType: "product details",
    outputType: "launch press release",
    promptTemplate:
      "Write a product launch press release based on the following product details. Include a headline, an opening paragraph covering what the product is and who it's for, a features/benefits section, and a placeholder quote. Return only the press release, no preamble.\n\nProduct details:\n{input}",
    seoTitle: "Generate a Product Launch Announcement — Free AI Tool",
    seoDescription:
      "Turn your product details into a structured product launch press release. Free launch announcement generator, no signup.",
    h1: "Product Launch Announcement",
    introCopy:
      "Launching a product involves a dozen deliverables, and the press release is often the one that gets rushed or skipped entirely because it feels like a formality. This tool takes your raw product details — what it is, who it's for, key features — and builds a proper launch press release with a headline, an opening paragraph, a features section, and a placeholder quote. It's scoped specifically to product launches, unlike the funding-announcement-generator, which follows a completely different structure built around investment terms rather than product features.",
    exampleInput:
      "launching a mobile app called Routely that auto-generates optimized delivery routes for small delivery businesses, saves an average of 25% on drive time based on beta testing",
    exampleOutput:
      "FOR IMMEDIATE RELEASE\n\n[Company Name] Launches Routely, an App That Cuts Delivery Drive Time by 25%\n\n[City, State] — [Company Name] today announced the launch of Routely, a mobile app that automatically generates optimized delivery routes for small delivery businesses. In beta testing, businesses using Routely reduced average drive time by 25%.\n\nRoutely is designed for small delivery operations that lack the resources for enterprise-grade logistics software, offering automatic route optimization without the complexity or cost of larger platforms.\n\nKey features include real-time route recalculation, multi-stop optimization, and integration with existing delivery scheduling tools.\n\n\"[Placeholder quote from founder on the problem Routely solves and its impact on beta customers.]\"\n\nRoutely is available now on iOS and Android.\n\n###\n\nAbout [Company Name]\n[Placeholder boilerplate description.]",
    faq: [
      {
        question: "Does it include a features and benefits section?",
        answer:
          "Yes, in addition to the standard opening paragraph, the release includes a dedicated section highlighting key product features and benefits based on the details you provide.",
      },
      {
        question: "Can I use this for a feature update instead of a full new product?",
        answer:
          "Yes, describe it as a feature or update in your input rather than a new product, and the release will frame it accordingly as an enhancement rather than a launch.",
      },
      {
        question: "How is this different from the announcement-to-press-release tool?",
        answer:
          "That tool works from a casual, already-written announcement and formalizes it. This tool is built to generate a launch release directly from a list of product details and features.",
      },
    ],
  },
  {
    slug: "press-release-quote-generator",
    category: "press-release",
    inputType: "announcement context",
    outputType: "executive quote",
    promptTemplate:
      "Based on the following announcement context, write a press release quote attributed to a company executive, capturing the significance of the news in an authentic, non-generic voice. Provide 2 alternative quote options. Return only the 2 numbered quotes, no preamble.\n\nAnnouncement context:\n{input}",
    seoTitle: "Generate a Press Release Quote — Free AI Quote Writer",
    seoDescription:
      "Get 2 authentic-sounding executive quote options for your press release. Free press release quote generator, no signup.",
    h1: "Press Release Quote Generator",
    introCopy:
      "The executive quote in a press release is often the most generic sentence in the entire document — some version of \"we're thrilled to embark on this exciting journey\" that says nothing specific. This tool reads the context of your announcement and generates two alternative quotes that sound like they came from someone who actually understands the news, rather than a template phrase with the company name swapped in. Use it as the finishing touch after drafting a release with the announcement-to-press-release or funding-announcement-generator tools, which leave this section as a placeholder.",
    exampleInput:
      "context: company just launched a free tier of its previously paid analytics product, aimed at solo developers and hobbyists who couldn't afford the paid plan",
    exampleOutput:
      "1. \"We built this product to help people understand their data, and it never made sense that price was the reason a solo developer couldn't use it. This free tier fixes that,\" said [Name], [Title].\n\n2. \"Some of our best feature ideas have come from hobbyist developers who couldn't afford a seat. Opening up a free tier means we finally get to build with that entire community, not just the ones with a budget,\" said [Name], [Title].",
    faq: [
      {
        question: "Will the quotes sound generic like typical press release quotes?",
        answer:
          "No, the tool is specifically instructed to avoid generic phrasing like \"thrilled to embark on this journey\" in favor of a quote that reflects the actual specifics of the announcement.",
      },
      {
        question: "Why does it give 2 options instead of 1?",
        answer:
          "Quotes are subjective and often need sign-off from the person being quoted, so two distinct options give you a starting point to choose from or blend together.",
      },
      {
        question: "Do I need to fill in the executive's name and title?",
        answer:
          "Yes, the quotes use placeholder name and title fields since the tool doesn't know who's being quoted — just swap those in before publishing.",
      },
    ],
  },
];
