import type { ToolSeed } from "./types";
import { batch0 } from "./batch-0";
import { batch1 } from "./batch-1";
import { batch2 } from "./batch-2";
import { batch3 } from "./batch-3";
import { batch4 } from "./batch-4";
import { batch5 } from "./batch-5";
import { batch6 } from "./batch-6";

// The hand-authored flagship tool that predates the batch pipeline.
const flagship: ToolSeed = {
  slug: "email-to-professional-rewrite",
  inputType: "email",
  outputType: "professional email",
  category: "email",
  promptTemplate:
    "You are an expert business communication editor. Rewrite the following email so it reads as professional, polished, and appropriate for a workplace audience. Preserve the original meaning, key facts, and requests exactly — do not add or remove information. Fix grammar, tighten wording, and adjust tone so it sounds confident and courteous without becoming stiff or robotic. Return only the rewritten email text, with no preamble, no explanation, and no quotation marks around it.\n\nOriginal email:\n{input}",
  seoTitle: "Email to Professional Rewrite — Free AI Tone Converter",
  seoDescription:
    "Paste a casual or rough email and get a polished, professional rewrite in seconds. Free, no signup required for your first 3 rewrites a day.",
  h1: "Turn Any Email Into a Professional, Polished Version",
  introCopy: `Most of us write emails the way we talk — in a hurry, mid-thought, sometimes venting a little more than we should. That's fine for a text to a friend, but it can undercut you when the reader is a manager, a client, or someone you've never met. A message that reads as blunt, rushed, or overly casual can make a strong point land wrong, no matter how solid the underlying request is.

This tool takes an email you've already drafted — however rough — and rewrites it in a tone suited for professional correspondence: clear sentences, courteous phrasing, and language that respects the reader's time without sounding stiff or corporate. It doesn't invent new requests or soften your actual ask; it keeps your meaning intact and simply presents it the way a skilled colleague would before hitting send.

It's built for the moments when tone matters more than usual: following up with a client who hasn't paid an invoice, pushing back on a deadline from a manager, or introducing yourself to someone senior at a company you want to work with. Paste in what you'd actually type in a hurry, and get back something you can send with confidence — or use as a starting point for your own final edits.

Every rewrite runs through the same model, so the voice stays consistent rewrite after rewrite, and nothing you paste in is stored beyond what's needed to generate the response.`,
  exampleInput:
    "hey just wanted to check if you got my last email about the invoice, its been like 2 weeks and we still havent been paid. can you let me know whats going on with this? kind of need to sort this out soon",
  exampleOutput: `Hi [Name],

I wanted to follow up on my previous email regarding the outstanding invoice. It has now been two weeks since it was sent, and we have not yet received payment.

Could you please let me know the current status? I'd appreciate it if we could get this resolved as soon as possible.

Thank you for your attention to this matter.

Best regards,
[Your name]`,
  faq: [
    {
      question: "Will this change the meaning of my email?",
      answer:
        "No. The rewrite preserves your original facts, requests, and intent — it only adjusts grammar, structure, and tone so the email reads as more professional.",
    },
    {
      question: "Is my email text stored or used to train AI models?",
      answer:
        "Your input is sent to the AI model only to generate the rewrite. It is used to produce your result and is not used to train any models.",
    },
    {
      question: "How many free rewrites do I get?",
      answer:
        "You can run up to 3 free rewrites per day for this tool without signing up. Subscribe for unlimited generations across every tool on the site.",
    },
    {
      question: "Can I use this for emails in languages other than English?",
      answer:
        "Right now this tool is optimized for English-language emails. Support for additional languages is on the roadmap.",
    },
    {
      question: "What's the difference between this and the concise rewrite tool?",
      answer:
        "This tool focuses on professional tone while keeping your email's length roughly the same. Our Concise Rewrite tool additionally trims the email down to the essentials.",
    },
  ],
};

const raw: ToolSeed[] = [
  flagship,
  ...batch0,
  ...batch1,
  ...batch2,
  ...batch3,
  ...batch4,
  ...batch5,
  ...batch6,
];

// Dedupe by slug — first occurrence wins (flagship + earlier batches take priority).
const seen = new Set<string>();
export const allTools: ToolSeed[] = raw.filter((tool) => {
  if (seen.has(tool.slug)) return false;
  seen.add(tool.slug);
  return true;
});
