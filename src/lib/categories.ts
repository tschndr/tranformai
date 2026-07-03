// One-line descriptions for each tool category, shown on the browse hub so
// visitors can tell categories apart at a glance. Keyed by category slug.
export const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  academic: "Papers, abstracts, and citations in a scholarly voice.",
  "ad-copy": "Punchy ad headlines and copy that converts.",
  apology: "Sincere, professional apologies that repair trust.",
  blog: "Posts, outlines, intros, and repurposed content.",
  code: "Explain, comment, and document your code.",
  "commit-message": "Clear, conventional commit messages from diffs.",
  "cover-letter": "Tailored cover letters that land interviews.",
  "creative-writing": "Stories, scenes, and vivid prose, elevated.",
  "customer-support": "Helpful, on-brand replies and macros.",
  "elevator-pitch": "Tight, memorable pitches in seconds.",
  email: "Professional, concise, and friendly rewrites.",
  faq: "Clear answers and tidy FAQ entries.",
  hr: "Policies, job posts, and people-team comms.",
  ideas: "Brainstorm and shape rough ideas fast.",
  "interview-prep": "Sharp answers and STAR-format stories.",
  job: "Turn job descriptions into targeted material.",
  legal: "Plain-language versions of dense legal text.",
  linkedin: "Posts, hooks, and profile-ready summaries.",
  "meeting-agenda": "Structured agendas and clear action items.",
  newsletter: "Engaging issues, subject lines, and recaps.",
  notes: "Turn messy notes into clean summaries.",
  paragraph: "Reshape, tighten, or expand any paragraph.",
  "podcast-transcript": "Show notes, summaries, and highlights.",
  presentation: "Slide copy, talking points, and outlines.",
  "press-release": "Newsworthy releases and simplified versions.",
  "product-description": "Descriptions and bullets that sell.",
  proposal: "Persuasive proposals and clean summaries.",
  "real-estate": "Listings that make properties shine.",
  recipe: "Clear, well-structured recipes and steps.",
  resume: "Impact bullets, metrics, and power verbs.",
  review: "Balanced, helpful reviews and responses.",
  "sales-email": "Outreach and follow-ups that get replies.",
  "social-caption": "Captions, hooks, and hashtags that pop.",
  survey: "Clear questions and readable result summaries.",
  tagline: "Memorable taglines and brand one-liners.",
  text: "Rewrite, summarize, or restyle any text.",
  "text-message": "Quick, well-worded texts for any moment.",
  twitter: "Threads, hooks, and tweet-ready rewrites.",
};

export function categoryDescription(slug: string): string {
  return (
    CATEGORY_DESCRIPTIONS[slug] ??
    "AI tools to rewrite, summarize, and transform your text."
  );
}
