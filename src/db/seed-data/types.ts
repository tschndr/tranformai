export interface ToolSeed {
  slug: string;
  category: string;
  inputType: string;
  outputType: string;
  promptTemplate: string; // must contain the literal placeholder {input}
  seoTitle: string;
  seoDescription: string;
  h1: string;
  introCopy: string; // genuinely unique, tool-specific prose (80-150 words)
  exampleInput: string;
  exampleOutput: string;
  faq: { question: string; answer: string }[]; // exactly 3 entries
}
