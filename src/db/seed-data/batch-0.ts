import type { ToolSeed } from "./types";

// Sourced from the user-supplied text_transformations.csv (33 tools).
export const batch0: ToolSeed[] = [
  {
    slug: "email-to-professional-tone",
    category: "email",
    inputType: "email",
    outputType: "tone",
    promptTemplate:
      "Rewrite the input email into a professional, polite, and clear tone. Preserve meaning and length — adjust word choice and phrasing only, don't shorten or expand the content. Return only the rewritten email, no preamble.\n\nEmail:\n{input}",
    seoTitle: "Convert Emails to Professional Tone Instantly — Free AI Tool",
    seoDescription:
      "Rewrite informal emails into professional workplace communication in seconds. Free, no signup required.",
    h1: "Convert Emails to Professional Tone Instantly",
    introCopy:
      "There's a specific register people expect in workplace email — not stiff, but not the way you'd text a friend either. This tool adjusts only the tone of what you've written: word choice, phrasing, and formality level. It doesn't shorten your email or add new points; if you wrote three sentences, you get three sentences back, just in language suited for a manager, client, or someone outside your immediate team. That distinction matters if you already have the right content and length and just need the delivery to read as more polished before you hit send on something like a status update or a request to a stakeholder.",
    exampleInput: "hey can you send that file asap",
    exampleOutput: "Could you please send that file at your earliest convenience?",
    faq: [
      {
        question: "Does this shorten my email like a summary tool would?",
        answer: "No. This tool only adjusts tone and word choice — it keeps your email roughly the same length and structure. Use the Concise Summary tool if you want it shortened too.",
      },
      {
        question: "Will it sound robotic or overly formal?",
        answer: "No — it aims for a natural professional register, not stiff corporate-speak. You can always tweak the result afterward.",
      },
      {
        question: "Can I use this for emails to my own team, not just clients?",
        answer: "Yes. It works for any workplace email where you want a more polished, professional tone, internal or external.",
      },
    ],
  },
  {
    slug: "email-to-concise-summary",
    category: "email",
    inputType: "email",
    outputType: "summary",
    promptTemplate:
      "Summarize the input email while preserving all key points, requests, and deadlines. Keep it under 3 sentences where possible. Return only the summary, no preamble.\n\nEmail:\n{input}",
    seoTitle: "Shorten Emails Without Losing Meaning — Free AI Summarizer",
    seoDescription: "Turn long emails into short, accurate summaries in seconds. Free, no signup required.",
    h1: "Shorten Emails Without Losing Meaning",
    introCopy:
      "Long email threads are easy to skim past and hard to act on. This tool compresses a wordy email down to the two or three sentences that actually matter — the ask, the context, and any deadline — without dropping information you'd need to respond correctly. It's built for forwarding a thread to a colleague who needs the gist, catching up on a message you meant to answer days ago, or drafting a quick reply without rereading five paragraphs first. The summary keeps names, dates, and specific requests intact rather than generalizing them away.",
    exampleInput:
      "just wanted to follow up on the invoice we sent last week and check if you had a chance to review it",
    exampleOutput: "Following up on last week's invoice—have you reviewed it?",
    faq: [
      { question: "Will it drop important details like dates or names?", answer: "No — the summary is built to preserve specific details like deadlines, names, and requests, not just the general topic." },
      { question: "How short will the summary be?", answer: "Typically one to three sentences, depending on how much the original email actually contains." },
      { question: "Can I use this on email threads with multiple messages?", answer: "It works best on a single email. For a full thread, paste the most recent message plus any context you need summarized." },
    ],
  },
  {
    slug: "email-to-friendly-tone",
    category: "email",
    inputType: "email",
    outputType: "tone",
    promptTemplate:
      "Rewrite the input email in a friendly, warm tone while preserving the original meaning and request. Return only the rewritten email, no preamble.\n\nEmail:\n{input}",
    seoTitle: "Make Your Email Sound Friendly — Free AI Tone Converter",
    seoDescription: "Rewrite blunt or terse emails to sound warm and approachable. Free, no signup required.",
    h1: "Make Email Sound Friendly",
    introCopy:
      "Short, task-focused emails can come across colder than intended, especially with people you work with regularly. This tool warms up the tone — adding the kind of light, human phrasing that makes a request feel like it's coming from a person, not a ticket queue — while keeping your actual ask exactly the same. It's useful for messages to teammates, vendors, or clients you have an ongoing relationship with, where a slightly warmer note helps the working relationship without turning a quick request into a long email.",
    exampleInput: "send me the report",
    exampleOutput: "Hey! Could you send me the report when you get a chance? Appreciate it!",
    faq: [
      { question: "Is this the opposite of the professional tone tool?", answer: "Sort of — this leans warmer and more casual, while the professional tone tool leans more formal. Both preserve your original meaning." },
      { question: "Will it make my email too casual for work?", answer: "It aims for friendly-but-appropriate, not unprofessional. It's best suited for colleagues and familiar contacts rather than first contact with executives." },
      { question: "Does it add exclamation points or emoji automatically?", answer: "It may add light warmth like an exclamation point where natural, but won't add emoji or anything that changes your message's substance." },
    ],
  },
  {
    slug: "paragraph-to-bullet-points",
    category: "paragraph",
    inputType: "paragraph",
    outputType: "bullets",
    promptTemplate:
      "Convert the input paragraph into clear, concise bullet points, one idea per bullet. Return only the bullet list, no preamble.\n\nParagraph:\n{input}",
    seoTitle: "Turn Paragraphs into Bullet Points — Free AI Tool",
    seoDescription: "Convert dense paragraphs into scannable bullet points in seconds. Free, no signup required.",
    h1: "Turn Paragraphs into Bullet Points",
    introCopy:
      "Dense paragraphs are hard to scan, especially in documents people skim rather than read closely — status reports, project updates, internal wikis. This tool breaks a paragraph into one idea per line, keeping the substance intact while making it far easier to read at a glance. It's not a summary; nothing gets cut, just restructured. Paste in a paragraph you'd otherwise have to manually chop into a list, and get back something ready to drop into a slide, a doc, or a Slack message.",
    exampleInput: "we launched the product last week and saw strong engagement across channels",
    exampleOutput: "- Product launched\n- Strong engagement\n- Multi-channel traction",
    faq: [
      { question: "Does this remove any information from my paragraph?", answer: "No — every idea in the original paragraph should appear as its own bullet. If something feels missing, the source text was likely too dense for a single bullet and got split further." },
      { question: "Can I use this for any kind of paragraph?", answer: "Yes, though it works best on paragraphs that already contain distinct, separable ideas rather than a single continuous argument." },
      { question: "Will the bullets be full sentences or short phrases?", answer: "Typically short phrases, matching how bullet points are normally written — not full restated sentences." },
    ],
  },
  {
    slug: "paragraph-to-executive-summary",
    category: "paragraph",
    inputType: "paragraph",
    outputType: "summary",
    promptTemplate:
      "Convert the input paragraph into a short executive summary suitable for leadership — outcome-focused, no unnecessary detail. Return only the summary, no preamble.\n\nParagraph:\n{input}",
    seoTitle: "Paragraph to Executive Summary — Free AI Tool",
    seoDescription: "Convert detailed paragraphs into leadership-ready executive summaries. Free, no signup required.",
    h1: "Paragraph to Executive Summary",
    introCopy:
      "Executives read differently than the people writing the reports — they want the outcome and the implication, not the process that got you there. This tool strips a paragraph down to that leadership-facing framing: what changed, why it matters, skip the rest. It's meant for the moment you're about to paste a detailed update into a board deck or a leadership email and need it translated into something that respects a reader with five minutes and twenty other updates to get through.",
    exampleInput: "team improved onboarding process to reduce friction",
    exampleOutput: "Team improved onboarding to increase user activation and reduce friction.",
    faq: [
      { question: "How is this different from the plain summary tool?", answer: "This one is tuned specifically for a leadership audience — it emphasizes outcomes and business impact rather than just condensing the text generally." },
      { question: "How long will the summary be?", answer: "Usually one to two sentences — short enough to sit in a status deck or a leadership update email." },
      { question: "Can I use this for technical updates?", answer: "Yes — it's especially useful for translating technical or operational detail into language non-technical stakeholders will find meaningful." },
    ],
  },
  {
    slug: "paragraph-to-simple-explanation",
    category: "paragraph",
    inputType: "paragraph",
    outputType: "simplified",
    promptTemplate:
      "Rewrite the input paragraph in simple, plain language without changing its meaning. Avoid jargon. Return only the rewritten text, no preamble.\n\nParagraph:\n{input}",
    seoTitle: "Simplify Paragraphs — Free AI Plain Language Tool",
    seoDescription: "Rewrite complex paragraphs into simple, easy-to-understand language. Free, no signup required.",
    h1: "Simplify Paragraphs",
    introCopy:
      "Technical or academic writing often carries more jargon than the idea actually requires. This tool rewrites a paragraph in plain language — the kind you'd use explaining the same idea to a colleague outside your field, or a reader encountering the topic for the first time. It keeps the meaning exact; nothing is dumbed down or oversimplified past the point of accuracy, but the vocabulary and sentence structure become far more approachable. Useful for documentation, onboarding material, or any writing meant for a broader audience than the one it was originally drafted for.",
    exampleInput: "system utilizes asynchronous architecture",
    exampleOutput: "System runs tasks at the same time to improve speed.",
    faq: [
      { question: "Will this oversimplify technical accuracy?", answer: "No — the goal is plainer language, not a loss of precision. If a technical term is essential, it may still appear with a short explanation." },
      { question: "Who is this tool best suited for?", answer: "Anyone writing for a non-expert audience — documentation writers, educators, product teams explaining technical work to stakeholders." },
      { question: "Is this the same as the general text simplifier tool?", answer: "It's closely related — this one is tuned specifically for paragraph-length technical or dense writing rather than any arbitrary text." },
    ],
  },
  {
    slug: "meeting-notes-to-action-items",
    category: "notes",
    inputType: "notes",
    outputType: "actions",
    promptTemplate:
      "Extract clear action items from the input meeting notes. Include an owner if mentioned. Return only the bullet list, no preamble.\n\nNotes:\n{input}",
    seoTitle: "Extract Action Items from Meeting Notes — Free AI Tool",
    seoDescription: "Turn messy meeting notes into a clean, structured task list. Free, no signup required.",
    h1: "Extract Action Items from Notes",
    introCopy:
      "Meeting notes are usually written fast, in fragments, mixing decisions, discussion, and to-dos together. This tool pulls out just the action items — who's doing what — and presents them as a clean checklist you can drop straight into a task tracker or a follow-up email. It skips the general discussion and commentary, focusing only on the parts that require someone to actually do something next. If an owner was mentioned in the notes, it's kept attached to their task.",
    exampleInput: "update landing page john design review copy marketing",
    exampleOutput: "- Update landing page (John)\n- Review copy (Marketing)",
    faq: [
      { question: "What if my notes don't mention who owns each task?", answer: "The tool will list the action item without an owner rather than guessing who's responsible." },
      { question: "Does it work with rough, unstructured notes?", answer: "Yes — it's designed for exactly that. Fragmented, shorthand notes work fine as input." },
      { question: "What's the difference between this and the meeting summary tool?", answer: "This tool only extracts tasks; the summary tool gives you a narrative overview of what was discussed and decided." },
    ],
  },
  {
    slug: "meeting-notes-to-summary",
    category: "notes",
    inputType: "notes",
    outputType: "summary",
    promptTemplate:
      "Summarize the input meeting notes into a short, clear paragraph covering what was discussed and decided. Return only the summary, no preamble.\n\nNotes:\n{input}",
    seoTitle: "Meeting Notes Summary Generator — Free AI Tool",
    seoDescription: "Turn raw meeting notes into a clear summary anyone can read. Free, no signup required.",
    h1: "Meeting Notes Summary",
    introCopy:
      "Raw meeting notes rarely make sense to anyone who wasn't in the room — they're shorthand for people who already have the context. This tool turns those fragments into a short, readable paragraph describing what was discussed and decided, suitable for sharing with someone who missed the meeting or for your own records later. It's not an action-item extractor; it's meant to capture the shape of the conversation, not just the resulting tasks.",
    exampleInput: "discussed launch timeline assign tasks finalize design",
    exampleOutput: "Discussed launch timeline, task assignments, and design finalization.",
    faq: [
      { question: "Will this include action items too?", answer: "It may mention that tasks were assigned, but for a structured task list, use the Action Items tool instead." },
      { question: "How long is the summary?", answer: "Usually one to three sentences, depending on how much your notes cover." },
      { question: "Can I share this summary with people who missed the meeting?", answer: "Yes — that's exactly what it's designed for. It gives enough context for someone catching up after the fact." },
    ],
  },
  {
    slug: "meeting-notes-to-decision-log",
    category: "notes",
    inputType: "notes",
    outputType: "log",
    promptTemplate:
      "Extract only the decisions made from the input meeting notes, as a bullet list. Ignore general discussion. Return only the bullet list, no preamble.\n\nNotes:\n{input}",
    seoTitle: "Create a Decision Log from Meeting Notes — Free AI Tool",
    seoDescription: "Extract just the decisions made in a meeting, for tracking and accountability. Free, no signup required.",
    h1: "Create Decision Log",
    introCopy:
      "Decisions made in meetings tend to get buried in the surrounding discussion and are the hardest thing to find again weeks later. This tool filters meeting notes down to only the decisions — what was actually agreed on — and skips the debate that led there. It's useful for teams that want a running record of what's been decided, separate from a general summary, especially when decisions need to be referenced or defended later.",
    exampleInput: "we decided to launch next friday and delay feature x",
    exampleOutput: "- Launch set for next Friday\n- Feature X delayed",
    faq: [
      { question: "Will this include unresolved discussion points?", answer: "No — only items that were explicitly decided. Open questions and ongoing debate are left out." },
      { question: "How is this different from the action items tool?", answer: "Decisions are choices made (e.g. \"we're launching Friday\"); action items are tasks assigned to someone. This tool only extracts the former." },
      { question: "Can I use this to build a running project decision log?", answer: "Yes — many teams paste the output from each meeting into a shared decision log doc over time." },
    ],
  },
  {
    slug: "resume-bullet-to-impact-statement",
    category: "resume",
    inputType: "resume",
    outputType: "impact",
    promptTemplate:
      "Rewrite the input resume bullet as a strong impact statement that emphasizes outcome, not just duties. Keep it realistic. Return only the rewritten bullet, no preamble.\n\nResume bullet:\n{input}",
    seoTitle: "Improve Resume Bullet Points — Free AI Tool",
    seoDescription: "Turn plain job duties into achievement-focused resume bullets. Free, no signup required.",
    h1: "Improve Resume Bullet Points",
    introCopy:
      "Most resume bullets describe what someone's job was, not what they accomplished — \"managed X\" or \"responsible for Y.\" Hiring managers respond more to outcomes than duties. This tool rewrites a duty-focused bullet into one framed around impact, staying realistic rather than inventing achievements you can't back up in an interview. It's a starting point for tightening your resume language, not a replacement for adding your own real numbers where you have them.",
    exampleInput: "managed social media accounts",
    exampleOutput: "Managed social media accounts, increasing engagement through consistent strategy.",
    faq: [
      { question: "Will this make up fake achievements or numbers?", answer: "No — it reframes your bullet around impact using realistic, general language. Use the Quantified Achievement tool if you want to add specific metrics you provide." },
      { question: "Can I use this for any job, not just marketing?", answer: "Yes — it works across roles and industries, from engineering to operations to customer support." },
      { question: "Should I still edit the result?", answer: "Yes, always review and adjust so it reflects your actual work accurately before adding it to your resume." },
    ],
  },
  {
    slug: "resume-bullet-to-quantified-achievement",
    category: "resume",
    inputType: "resume",
    outputType: "metrics",
    promptTemplate:
      "Rewrite the input resume bullet to include a realistic, plausible metric that illustrates impact. Return only the rewritten bullet, no preamble.\n\nResume bullet:\n{input}",
    seoTitle: "Add Metrics to Resume Bullets — Free AI Tool",
    seoDescription: "Add measurable, realistic impact to your resume bullet points. Free, no signup required.",
    h1: "Add Metrics to Resume Bullets",
    introCopy:
      "Resume bullets with a number in them tend to stand out more than ones without — \"reduced response time by 35%\" reads stronger than \"improved response time.\" This tool suggests a plausible metric framing for a bullet that doesn't have one yet, giving you a template to fill in with your real number once you look it up. Treat the specific figure as a placeholder to verify and replace, not a claim to submit as-is.",
    exampleInput: "improved customer service process",
    exampleOutput: "Improved customer service process, reducing response time by 35%.",
    faq: [
      { question: "Are the numbers in the output accurate to my real work?", answer: "No — they're illustrative placeholders showing how a metric could be framed. Always replace them with your actual, verifiable numbers." },
      { question: "What if I don't know my exact metrics?", answer: "Use the output as a template for the kind of metric worth tracking down — from performance reviews, analytics, or a manager who might remember." },
      { question: "Is it dishonest to use a placeholder metric?", answer: "Only if you leave it in your final resume. Use this tool to see the framing, then swap in your real, honest number." },
    ],
  },
  {
    slug: "resume-bullet-to-power-verbs",
    category: "resume",
    inputType: "resume",
    outputType: "verbs",
    promptTemplate:
      "Rewrite the input resume bullet using stronger, more active verbs in place of weak or passive language. Return only the rewritten bullet, no preamble.\n\nResume bullet:\n{input}",
    seoTitle: "Upgrade Resume Language with Power Verbs — Free AI Tool",
    seoDescription: "Replace weak resume verbs with strong, active language. Free, no signup required.",
    h1: "Upgrade Resume Language",
    introCopy:
      "Words like \"helped with\" or \"was involved in\" undersell what someone actually did. This tool swaps weak, passive phrasing for stronger active verbs — led, launched, negotiated, built — that better reflect ownership of the work. It's a fast way to tighten resume language across every bullet, especially useful if you tend to write modestly about your own contributions and need the wording to match the level of ownership you actually had.",
    exampleInput: "helped with project management",
    exampleOutput: "Led and executed project management initiatives to improve delivery.",
    faq: [
      { question: "Will this overstate my role?", answer: "It aims to match your actual level of involvement more accurately, not exaggerate it. If you only assisted, consider keeping language like \"supported\" or \"contributed to.\"" },
      { question: "Does this work for entry-level resumes too?", answer: "Yes — strong verbs matter at every career stage, including internships and first jobs." },
      { question: "Can I run every bullet on my resume through this?", answer: "Yes, that's exactly the intended use — run each bullet through individually for consistent, stronger language throughout." },
    ],
  },
  {
    slug: "text-to-executive-summary",
    category: "text",
    inputType: "text",
    outputType: "summary",
    promptTemplate:
      "Summarize the input text for a leadership audience, focused on outcome and business relevance. Return only the summary, no preamble.\n\nText:\n{input}",
    seoTitle: "Create Executive Summary from Text — Free AI Tool",
    seoDescription: "Condense any text into a leadership-ready executive summary. Free, no signup required.",
    h1: "Create Executive Summary",
    introCopy:
      "Whatever the source — a project update, a research note, a long Slack message — leadership generally wants the same thing: what happened, and why it matters. This tool condenses arbitrary text down to that framing, cutting the process detail and keeping the outcome. It's a general-purpose version of the same idea behind the paragraph-specific executive summary tool, built for any length or format of source text.",
    exampleInput: "project improved backend performance and reduced latency",
    exampleOutput: "Optimized backend systems, improving performance and reducing latency.",
    faq: [
      { question: "How is this different from the Paragraph to Executive Summary tool?", answer: "This one accepts any general text, not just a single paragraph — longer or less structured input works fine." },
      { question: "How long is the output?", answer: "Typically one to two sentences, kept short enough for a leadership-facing update." },
      { question: "Can I paste in a long document?", answer: "Yes, within reason — very long documents may be better broken into sections and summarized individually." },
    ],
  },
  {
    slug: "text-to-simple-explanation",
    category: "text",
    inputType: "text",
    outputType: "simplified",
    promptTemplate:
      "Rewrite the input text in simple, plain language, preserving its meaning. Return only the rewritten text, no preamble.\n\nText:\n{input}",
    seoTitle: "Simplify Complex Text — Free AI Plain Language Tool",
    seoDescription: "Make technical or complex text easy to understand. Free, no signup required.",
    h1: "Simplify Complex Text",
    introCopy:
      "Technical writing accumulates jargon fast, and what's obvious to the writer often isn't obvious to the reader. This tool rewrites any input text into plain, accessible language without losing the underlying meaning — useful for translating internal documentation for a wider audience, or just making your own writing easier to read on a second pass. It's the general-purpose version of the simplifier; a dedicated paragraph tool exists if your source is specifically a single dense paragraph.",
    exampleInput: "microservices architecture reduces coupling",
    exampleOutput: "Microservices break systems into smaller parts that work independently.",
    faq: [
      { question: "Will important technical meaning get lost?", answer: "No — the goal is plainer wording, not a loss of accuracy. Core technical meaning is preserved, just explained more accessibly." },
      { question: "Is this the same as the Paragraph Simplifier tool?", answer: "Very similar in purpose — this version is for general text of any length or shape, not specifically a single paragraph." },
      { question: "Who is this best for?", answer: "Writers translating technical material for non-expert readers — documentation, onboarding guides, and stakeholder updates." },
    ],
  },
  {
    slug: "text-to-key-takeaways",
    category: "text",
    inputType: "text",
    outputType: "takeaways",
    promptTemplate:
      "Extract the key takeaways from the input text as a short bullet list. Return only the bullet list, no preamble.\n\nText:\n{input}",
    seoTitle: "Extract Key Takeaways from Text — Free AI Tool",
    seoDescription: "Pull the main points out of any text instantly. Free, no signup required.",
    h1: "Extract Key Takeaways",
    introCopy:
      "Not every piece of text needs a full summary — sometimes you just want the two or three points worth remembering. This tool scans the input and returns only the key takeaways as a short bullet list, skipping supporting detail and context. It's built for skimming articles, reports, or long messages quickly, or for pulling the headline points out of something you plan to reference later without rereading the whole thing.",
    exampleInput: "company grew revenue and expanded markets",
    exampleOutput: "- Revenue growth\n- Market expansion",
    faq: [
      { question: "How many takeaways will it list?", answer: "Usually two to five, depending on how much substantive content the source text actually contains." },
      { question: "How is this different from a summary?", answer: "A summary is a condensed narrative; takeaways are just the standalone key points as a list, with no connecting prose." },
      { question: "Can I use this on long articles?", answer: "Yes — it's especially useful for long-form content where you want the highlights without reading the full piece." },
    ],
  },
  {
    slug: "idea-dump-to-structured-outline",
    category: "ideas",
    inputType: "ideas",
    outputType: "outline",
    promptTemplate:
      "Organize the input list of raw ideas into a clear, numbered outline with logical grouping. Return only the outline, no preamble.\n\nIdeas:\n{input}",
    seoTitle: "Organize Ideas into a Structured Outline — Free AI Tool",
    seoDescription: "Turn a messy idea dump into a clean, structured outline. Free, no signup required.",
    h1: "Organize Ideas into Outline",
    introCopy:
      "Brainstorms produce ideas faster than structure — a stream of concepts in no particular order, some related, some not. This tool takes that raw dump and organizes it into a numbered outline with related ideas grouped together, giving you something you can actually build from instead of a wall of scattered thoughts. It doesn't invent new ideas or judge which ones are good; it just imposes structure on what you already wrote down.",
    exampleInput: "app idea ai writing seo monetization subscription",
    exampleOutput: "1. App Idea\n2. AI Writing\n3. SEO Strategy\n4. Monetization",
    faq: [
      { question: "Will it add ideas I didn't write?", answer: "No — it only organizes and groups the ideas you provided, without adding new ones." },
      { question: "What if my ideas are very unrelated to each other?", answer: "They'll still be organized into a numbered list, just without much grouping if there's little natural overlap between them." },
      { question: "How is this different from the roadmap tool?", answer: "This tool organizes ideas by theme; the roadmap tool sequences them into an ordered set of execution steps." },
    ],
  },
  {
    slug: "idea-dump-to-roadmap",
    category: "ideas",
    inputType: "ideas",
    outputType: "roadmap",
    promptTemplate:
      "Convert the input list of raw ideas into a sequenced roadmap of execution steps. Return only the roadmap, no preamble.\n\nIdeas:\n{input}",
    seoTitle: "Turn Ideas into a Roadmap — Free AI Tool",
    seoDescription: "Convert a raw idea dump into an ordered, actionable roadmap. Free, no signup required.",
    h1: "Turn Ideas into Roadmap",
    introCopy:
      "Ideas alone don't tell you what to do first. This tool takes a raw list of concepts and sequences them into a roadmap — a rough execution order, from foundational steps to later-stage additions — so you have a starting point for planning rather than just a pile of possibilities. It's a first pass meant to be refined, not a substitute for real prioritization once you know your constraints and goals.",
    exampleInput: "build app launch seo grow users monetize",
    exampleOutput: "1. Build MVP\n2. Launch\n3. SEO growth\n4. Monetize",
    faq: [
      { question: "Will the sequencing match my actual priorities?", answer: "It's a reasonable default sequence based on common execution order, not a plan tailored to your specific constraints — treat it as a starting draft." },
      { question: "Can I use this for a roadmap that isn't about building a product?", answer: "Yes — it works for any list of ideas that could plausibly be sequenced into steps, not just product development." },
      { question: "How is this different from the structured outline tool?", answer: "The outline groups ideas by theme; the roadmap orders them by execution sequence." },
    ],
  },
  {
    slug: "idea-dump-to-feature-list",
    category: "ideas",
    inputType: "ideas",
    outputType: "features",
    promptTemplate:
      "Extract a clean product feature list from the input raw ideas. Return only the bullet list, no preamble.\n\nIdeas:\n{input}",
    seoTitle: "Generate a Feature List from Ideas — Free AI Tool",
    seoDescription: "Turn a rough idea dump into a clear product feature list. Free, no signup required.",
    h1: "Generate Feature List",
    introCopy:
      "When you're sketching out a product, ideas and features tend to blur together in early notes. This tool pulls a clean, scoped feature list out of a raw idea dump, phrased the way you'd want it in a spec or a pitch deck — one feature per line, no fluff. It's useful early in product planning, when you have more concepts than clarity and need a first pass at defining actual scope.",
    exampleInput: "ai writing tool seo api export",
    exampleOutput: "- AI writing\n- SEO tools\n- API access\n- Export options",
    faq: [
      { question: "Will it prioritize features for me?", answer: "No — it extracts and lists features as stated, without ranking them. Prioritization is still a judgment call for you to make." },
      { question: "Can I use this for a non-software product?", answer: "Yes, though it's most naturally suited to software or digital product ideas given the phrasing style." },
      { question: "Does it expand on vague ideas with detail?", answer: "It phrases each idea as a clear feature line, but doesn't add scope or detail you didn't provide." },
    ],
  },
  {
    slug: "linkedin-post-to-twitter-thread",
    category: "linkedin",
    inputType: "linkedin",
    outputType: "thread",
    promptTemplate:
      "Convert the input LinkedIn post into a numbered Twitter/X thread, breaking the content into short, punchy tweet-sized segments. Return only the thread, no preamble.\n\nLinkedIn post:\n{input}",
    seoTitle: "Convert LinkedIn Posts to Twitter Threads — Free AI Tool",
    seoDescription: "Repurpose a LinkedIn post into a ready-to-post Twitter/X thread. Free, no signup required.",
    h1: "Convert LinkedIn Post to Twitter Thread",
    introCopy:
      "LinkedIn and Twitter/X reward different formats — long-form paragraphs on one, short punchy segments on the other. This tool takes a LinkedIn post you've already written and breaks it into a numbered thread, shortening and splitting the content so each part reads well as a standalone tweet. It saves the work of manually re-chunking a post you've already spent time drafting, so you can repost the same idea across platforms without starting from scratch.",
    exampleInput: "we launched new product improves workflow",
    exampleOutput: "1/ New product launched 🚀\n2/ Improves workflow",
    faq: [
      { question: "Will it keep my original message intact?", answer: "Yes — it restructures the format and length, not the underlying point you're making." },
      { question: "How many tweets will the thread have?", answer: "It varies based on how much content your original post contains — usually enough to cover the same ground in shorter segments." },
      { question: "Does it add hashtags automatically?", answer: "No — it focuses on restructuring your content into thread format, not adding hashtags or extra elements." },
    ],
  },
  {
    slug: "linkedin-post-to-professional-summary",
    category: "linkedin",
    inputType: "linkedin",
    outputType: "summary",
    promptTemplate:
      "Rewrite the input LinkedIn post as a polished professional summary suitable for a LinkedIn profile About section. Return only the rewritten text, no preamble.\n\nLinkedIn post:\n{input}",
    seoTitle: "Rewrite LinkedIn Posts as Profile Summaries — Free AI Tool",
    seoDescription: "Turn a LinkedIn post into a polished profile summary. Free, no signup required.",
    h1: "Rewrite for LinkedIn Summary",
    introCopy:
      "A post announcing something you did and a profile summary describing your work are written differently — one is a moment-in-time update, the other is a standing description of your professional story. This tool takes the content of a post and reframes it into summary-style language suitable for a LinkedIn About section or bio, useful when something you posted actually deserves a permanent home on your profile, not just a feed appearance.",
    exampleInput: "excited to launch new tool",
    exampleOutput: "Built and launched new productivity tool focused on workflow improvement.",
    faq: [
      { question: "Can I use the output directly in my LinkedIn About section?", answer: "It's a strong starting point — review it alongside the rest of your profile summary so the tone and tense stay consistent." },
      { question: "Will it remove first-person excitement language?", answer: "Yes — it shifts from post-style personal announcement language to more standard profile-summary phrasing." },
      { question: "Does this work for posts about other people's work, not just my own?", answer: "It's designed for posts about your own accomplishments — for describing someone else's work, you'd want different phrasing." },
    ],
  },
  {
    slug: "linkedin-post-to-hook-variants",
    category: "linkedin",
    inputType: "linkedin",
    outputType: "hooks",
    promptTemplate:
      "Generate multiple alternative opening hook lines for the input LinkedIn post topic. Return only the list of hooks, no preamble.\n\nLinkedIn post:\n{input}",
    seoTitle: "Generate Viral LinkedIn Hooks — Free AI Tool",
    seoDescription: "Generate multiple attention-grabbing opening lines for your LinkedIn post. Free, no signup required.",
    h1: "Generate Viral Hooks",
    introCopy:
      "The first line of a LinkedIn post determines whether anyone reads the rest — it's what shows before the \"see more\" cutoff. This tool takes your post topic and generates a few alternative opening hooks, so instead of committing to the first line you thought of, you can compare a handful of options and pick the one most likely to stop someone mid-scroll. It doesn't rewrite your whole post, just the opening.",
    exampleInput: "we launched product",
    exampleOutput: "- We built something that changes workflow\n- This tool saves hours daily",
    faq: [
      { question: "Does this rewrite my whole post?", answer: "No — it focuses specifically on generating alternative opening hook lines, not the full post body." },
      { question: "How many hook options will I get?", answer: "Usually two to four variations, giving you a few different angles to choose from." },
      { question: "Can I use this for other platforms besides LinkedIn?", answer: "The hooks are tuned for LinkedIn's style, though the underlying idea can translate to other platforms with minor edits." },
    ],
  },
  {
    slug: "text-to-simple-explanation-v2",
    category: "text",
    inputType: "text",
    outputType: "simplified",
    promptTemplate:
      "Rewrite the input text using extremely simple language, as if explaining to someone with no background in the topic. Return only the rewritten text, no preamble.\n\nText:\n{input}",
    seoTitle: "Ultra Simple Explanation Generator — Free AI Tool",
    seoDescription: "Rewrite text in the simplest possible language for a beginner audience. Free, no signup required.",
    h1: "Ultra Simple Explanation",
    introCopy:
      "Sometimes plain language still isn't plain enough — you need the explain-it-like-I'm-new-to-this version. This tool pushes simplification further than the standard simplifier: shorter sentences, more basic vocabulary, no assumed background knowledge at all. It's meant for explaining something to a true beginner, a non-technical stakeholder with zero context, or anyone who needs the absolute simplest version of an idea before building up from there.",
    exampleInput: "data pipeline processes events",
    exampleOutput: "System moves data step by step automatically.",
    faq: [
      { question: "How is this different from the regular Simplify Text tool?", answer: "This version goes further — shorter sentences and more basic vocabulary, aimed at someone with zero background in the topic." },
      { question: "Will it lose important nuance?", answer: "Some nuance is necessarily traded for maximum clarity. Use the standard simplifier if you want to keep more technical precision." },
      { question: "Who is this best for?", answer: "Explaining something to a true beginner — a new hire, a non-technical stakeholder, or someone completely outside the field." },
    ],
  },
  {
    slug: "text-to-executive-summary-v2",
    category: "text",
    inputType: "text",
    outputType: "summary",
    promptTemplate:
      "Summarize the input text into exactly two sentences suitable for a leadership audience. Return only the summary, no preamble.\n\nText:\n{input}",
    seoTitle: "Short Executive Summary Generator — Free AI Tool",
    seoDescription: "Condense text into an ultra-short two-sentence executive summary. Free, no signup required.",
    h1: "Executive Summary Short",
    introCopy:
      "Sometimes even a standard executive summary is too long for the moment — a status line in a dashboard, a one-line update in a shared doc. This tool forces the input down to exactly two sentences, the shortest form that still captures the outcome and why it matters. It's the more aggressive sibling of the standard executive summary tool, for when brevity is the whole point.",
    exampleInput: "system improved performance and reliability",
    exampleOutput: "System improvements increased performance and reliability across services.",
    faq: [
      { question: "Will it always be exactly two sentences?", answer: "That's the target — very short or already-concise input may naturally collapse to fewer, but it aims for a strict two-sentence output." },
      { question: "How is this different from the standard Executive Summary tool?", answer: "This version enforces a stricter two-sentence limit; the standard tool allows a bit more room when the content calls for it." },
      { question: "Can I use this for status dashboards or one-line updates?", answer: "Yes — that's exactly the use case it's built for." },
    ],
  },
  {
    slug: "text-to-action-items",
    category: "text",
    inputType: "text",
    outputType: "actions",
    promptTemplate:
      "Extract clear action items from the input text as a bullet list. Return only the bullet list, no preamble.\n\nText:\n{input}",
    seoTitle: "Extract Action Items from Text — Free AI Tool",
    seoDescription: "Turn any text into a structured, actionable task list. Free, no signup required.",
    h1: "Extract Action Items from Text",
    introCopy:
      "Tasks often show up buried inside longer messages — a Slack thread, a project update, an email — rather than as a clean list. This tool scans any input text and pulls out the concrete action items, phrased the way you'd write them on a task board. It's a general-purpose version of the meeting-notes-specific action item extractor, useful for any text where tasks are mixed in with other content.",
    exampleInput: "we need to update docs fix bugs deploy",
    exampleOutput: "- Update docs\n- Fix bugs\n- Deploy release",
    faq: [
      { question: "How is this different from the Meeting Notes to Action Items tool?", answer: "This one works on any general text, not specifically meeting notes — useful for Slack messages, emails, or project updates." },
      { question: "Will it invent tasks that weren't mentioned?", answer: "No — it only extracts action items that are actually present or clearly implied in the source text." },
      { question: "Can I paste in a long project update?", answer: "Yes — longer text works fine as long as it contains identifiable tasks to extract." },
    ],
  },
  {
    slug: "text-to-email-response",
    category: "text",
    inputType: "text",
    outputType: "email",
    promptTemplate:
      "Write a professional email reply based on the input text. Return only the email reply, no preamble.\n\nText:\n{input}",
    seoTitle: "Generate an Email Reply from Text — Free AI Tool",
    seoDescription: "Turn a quick note into a full professional email reply. Free, no signup required.",
    h1: "Generate Email Reply",
    introCopy:
      "Sometimes you know exactly what you want to say back but not how to phrase it as a full email. This tool takes a short note — even just a phrase describing your response — and expands it into a complete, professional email reply, ready to send or lightly edit. It's the reverse of a summarizer: instead of shortening, it fleshes out a quick thought into proper email form.",
    exampleInput: "thanks for update",
    exampleOutput: "Thanks for the update. I appreciate the information and will review it shortly.",
    faq: [
      { question: "Do I need to write a full draft first?", answer: "No — a short phrase or note describing what you want to say is enough; the tool expands it into a complete reply." },
      { question: "Will it match the tone of the email I'm replying to?", answer: "It generates a generally professional tone. If you need a specific tone match, mention it as part of your input." },
      { question: "Can I use this for non-work emails too?", answer: "It's tuned for professional replies — for casual personal emails, you may want to adjust the result afterward." },
    ],
  },
  {
    slug: "text-to-social-post",
    category: "text",
    inputType: "text",
    outputType: "social",
    promptTemplate:
      "Rewrite the input text as an engaging, concise social media post. Return only the post, no preamble.\n\nText:\n{input}",
    seoTitle: "Convert Text to a Social Media Post — Free AI Tool",
    seoDescription: "Turn any text into a ready-to-post social media update. Free, no signup required.",
    h1: "Convert Text to Social Post",
    introCopy:
      "Internal writing — release notes, project updates, plain descriptions — doesn't read like something meant for a public feed. This tool takes that raw text and reshapes it into a short, engaging social media post: punchier phrasing, a hook, a tone built for scrolling readers rather than internal ones. It's a fast way to repurpose content you've already written for an external audience without starting the post from a blank page.",
    exampleInput: "product improves workflow",
    exampleOutput: "This product improves workflow efficiency and saves time daily.",
    faq: [
      { question: "Which platform is the output formatted for?", answer: "It's platform-agnostic, general social copy — for platform-specific formatting like threads, use the LinkedIn or Twitter-specific tools." },
      { question: "Will it add hashtags?", answer: "No — it focuses on rewriting the core message into engaging post copy, not adding hashtags or platform-specific elements." },
      { question: "Can I use this for product announcements?", answer: "Yes — that's a common use case, alongside general updates, milestones, and content repurposing." },
    ],
  },
  {
    slug: "job-description-to-resume-bullet",
    category: "job",
    inputType: "job",
    outputType: "bullet",
    promptTemplate:
      "Rewrite the input job description or task into a strong resume bullet point. Return only the rewritten bullet, no preamble.\n\nJob description:\n{input}",
    seoTitle: "Turn Job Description into Resume Bullet — Free AI Tool",
    seoDescription: "Convert job tasks or descriptions into polished resume bullet points. Free, no signup required.",
    h1: "Turn Job Description into Resume Bullet",
    introCopy:
      "There's a real gap between how a job is described on paper — a list of responsibilities — and how you'd want it to appear on your own resume once you've actually done it. This tool converts a job description or task list into resume-ready bullet language, translating duties into the kind of active, accomplishment-framed phrasing hiring managers expect to see. Useful when updating your resume after a role and working from the original job posting as a starting reference.",
    exampleInput: "worked on backend APIs",
    exampleOutput: "Developed and optimized backend APIs to improve system performance.",
    faq: [
      { question: "Should the input be from a job posting or my own experience?", answer: "Either works — a job posting's listed duties, or a rough description of what you actually did, both convert well into bullet form." },
      { question: "Will it exaggerate what the role involved?", answer: "It reframes duties into stronger resume language without inventing specific claims — you should still tailor it to reflect your real experience." },
      { question: "How is this different from the Impact Statement tool?", answer: "This tool focuses on turning a description into a resume-style bullet; the Impact Statement tool goes further to emphasize outcomes." },
    ],
  },
  {
    slug: "job-description-to-impact-statement",
    category: "job",
    inputType: "job",
    outputType: "impact",
    promptTemplate:
      "Convert the input job description into an impact statement emphasizing outcomes achieved. Return only the rewritten statement, no preamble.\n\nJob description:\n{input}",
    seoTitle: "Job Description to Impact Statement — Free AI Tool",
    seoDescription: "Turn job tasks into outcome-focused impact statements for your resume. Free, no signup required.",
    h1: "Job to Impact Statement",
    introCopy:
      "A job description tells you what someone was responsible for; an impact statement tells you what changed because of them. This tool takes the duty-based framing typical of a job posting or task description and rewrites it around outcomes — what improved, what got built, what got resolved — which is the framing that actually reads well on a resume or in an interview answer.",
    exampleInput: "handled customer support",
    exampleOutput: "Managed customer support operations, improving response quality and speed.",
    faq: [
      { question: "Do I need real metrics for this to work?", answer: "No — it produces a general outcome-focused statement. Add your own specific numbers afterward if you have them." },
      { question: "Can I use this directly on my resume?", answer: "It's a strong starting draft — review and adjust it to make sure it accurately reflects your actual contribution." },
      { question: "Is this the same as the resume bullet impact tool?", answer: "Very similar in purpose — this version is built to start from a job description rather than an existing resume bullet." },
    ],
  },
  {
    slug: "job-description-to-skills-list",
    category: "job",
    inputType: "job",
    outputType: "skills",
    promptTemplate:
      "Extract a clean list of skills mentioned or implied in the input job description. Return only the bullet list, no preamble.\n\nJob description:\n{input}",
    seoTitle: "Extract Skills from a Job Description — Free AI Tool",
    seoDescription: "Turn a job description into a clear list of relevant skills. Free, no signup required.",
    h1: "Extract Skills from Job",
    introCopy:
      "Job descriptions bury the actual skill requirements inside sentences and responsibilities rather than presenting them as a clean list. This tool extracts the skills mentioned or clearly implied in a job description or work history note, giving you a scannable list — useful for tailoring a resume's skills section to match a posting, or for auditing what a past role actually required.",
    exampleInput: "worked with aws python sql",
    exampleOutput: "- AWS\n- Python\n- SQL",
    faq: [
      { question: "Will it list skills that are only implied, not explicitly named?", answer: "Yes — it can surface clearly implied skills, not just ones stated outright, though explicit mentions are the most reliable." },
      { question: "Can I use this to tailor my resume to a specific job posting?", answer: "Yes — paste in the posting and use the extracted list to check your resume's skills section against it." },
      { question: "Does it rank skills by importance?", answer: "No — it lists them as extracted, without ranking. You'd need to judge relative importance yourself." },
    ],
  },
  {
    slug: "resume-bullet-to-interview-answer",
    category: "resume",
    inputType: "resume",
    outputType: "answer",
    promptTemplate:
      "Expand the input resume bullet into a short, natural-sounding spoken interview answer explaining the work. Return only the answer, no preamble.\n\nResume bullet:\n{input}",
    seoTitle: "Turn Resume Bullet into Interview Answer — Free AI Tool",
    seoDescription: "Expand a resume bullet into a natural interview talking point. Free, no signup required.",
    h1: "Turn Resume Bullet into Interview Answer",
    introCopy:
      "A resume bullet is written to be scanned; an interview answer needs to be spoken and sound natural coming out of your mouth. This tool takes a condensed resume line and expands it into a short explanation — the kind of answer you'd actually give when asked \"tell me about this\" in an interview. It's a starting point for interview prep, not a script to memorize word-for-word.",
    exampleInput: "led project delivery",
    exampleOutput: "I led project delivery by coordinating teams and ensuring timely execution.",
    faq: [
      { question: "Should I memorize the output word-for-word?", answer: "No — use it as a starting structure and put it in your own words so it sounds natural when spoken." },
      { question: "Is this the same as the STAR format tool?", answer: "Related but different — this gives a short natural explanation; the STAR tool structures the same content into Situation/Task/Action/Result." },
      { question: "Can I use this to prep for behavioral interview questions?", answer: "Yes — it's a good first step, especially combined with the STAR format tool for more structured behavioral answers." },
    ],
  },
  {
    slug: "resume-bullet-to-star-format",
    category: "resume",
    inputType: "resume",
    outputType: "star",
    promptTemplate:
      "Rewrite the input resume bullet using the STAR method (Situation, Task, Action, Result). Return only the STAR breakdown, no preamble.\n\nResume bullet:\n{input}",
    seoTitle: "STAR Method Interview Answer Generator — Free AI Tool",
    seoDescription: "Convert a resume bullet into a structured STAR-format interview answer. Free, no signup required.",
    h1: "STAR Method Generator",
    introCopy:
      "The STAR method — Situation, Task, Action, Result — is the standard structure interviewers expect for behavioral questions, but resume bullets don't naturally break down that way. This tool takes a condensed bullet and expands it into the four STAR components, giving you a structured starting point for interview prep instead of having to reconstruct the framework yourself under pressure.",
    exampleInput: "improved sales process",
    exampleOutput:
      "Situation: sales process was inefficient\nTask: improve efficiency\nAction: redesigned workflow\nResult: increased conversion rates",
    faq: [
      { question: "Will the details be accurate to what I actually did?", answer: "It builds a plausible STAR structure from your bullet — you should fill in and adjust the specifics to match your real situation." },
      { question: "Do I need to use all four STAR components when answering?", answer: "Generally yes — interviewers listen for all four parts, so the structured breakdown helps make sure you don't skip one." },
      { question: "Can I use this for any resume bullet?", answer: "Yes, though it works best on bullets that describe a specific initiative or problem you addressed, rather than an ongoing routine duty." },
    ],
  },
  {
    slug: "paragraph-to-summary-v2",
    category: "paragraph",
    inputType: "paragraph",
    outputType: "summary",
    promptTemplate:
      "Summarize the input paragraph briefly, in one sentence where possible. Return only the summary, no preamble.\n\nParagraph:\n{input}",
    seoTitle: "Compact Paragraph Summary Generator — Free AI Tool",
    seoDescription: "Condense a paragraph into a single, compact summary sentence. Free, no signup required.",
    h1: "Compact Summary Generator",
    introCopy:
      "This is the more aggressive version of paragraph summarization — instead of a few sentences, it targets a single compact sentence that still captures the core point. It's useful when you need the shortest possible restatement of a paragraph, like a caption, a one-line description, or a preview snippet, rather than a fuller executive-style summary with more context retained.",
    exampleInput: "team improved onboarding and reduced friction",
    exampleOutput: "Team improved onboarding and reduced user friction.",
    faq: [
      { question: "How is this different from the Executive Summary tool?", answer: "This version targets a single compact sentence; the executive summary tool allows a bit more room and leadership-specific framing." },
      { question: "Will it always fit in one sentence?", answer: "That's the goal for most input — very dense paragraphs may occasionally need two short sentences to stay accurate." },
      { question: "What's this useful for?", answer: "Captions, preview snippets, or any place you need the shortest accurate restatement of a paragraph's point." },
    ],
  },
  {
    slug: "paragraph-to-keywords",
    category: "paragraph",
    inputType: "paragraph",
    outputType: "keywords",
    promptTemplate:
      "Extract the most relevant keywords from the input paragraph, comma-separated. Return only the keyword list, no preamble.\n\nParagraph:\n{input}",
    seoTitle: "Extract Keywords from a Paragraph — Free AI Tool",
    seoDescription: "Pull the most relevant SEO keywords out of any paragraph. Free, no signup required.",
    h1: "Extract Keywords from Paragraph",
    introCopy:
      "Identifying the keywords that actually represent a paragraph's content is useful for SEO tagging, content categorization, or just understanding what a piece of text is really about at a glance. This tool extracts the most relevant terms from a paragraph and returns them as a clean, comma-separated list — the kind of thing you'd drop into a CMS tag field or a metadata description.",
    exampleInput: "product improves workflow efficiency",
    exampleOutput: "workflow, efficiency, productivity, product",
    faq: [
      { question: "How many keywords will it return?", answer: "Typically four to eight, depending on how much distinct topical content the paragraph contains." },
      { question: "Can I use these directly as SEO meta keywords?", answer: "They're a solid starting point — pair them with your own SEO research since search intent varies by context this tool can't see." },
      { question: "Will it include multi-word phrases, not just single words?", answer: "Yes — where relevant, it can extract short phrases as well as single keywords." },
    ],
  },
];
