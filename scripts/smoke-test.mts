import "dotenv/config";
import { neon } from "@neondatabase/serverless";
import Anthropic from "@anthropic-ai/sdk";

// End-to-end check: pull a real tool from Neon, run its prompt through Anthropic
// exactly as src/lib/llm.ts does, and print the result + token usage.
const sql = neon(process.env.DATABASE_URL!);
const rows = await sql`
  SELECT slug, prompt_template, example_input
  FROM transformations
  WHERE slug = 'email-to-professional-rewrite' LIMIT 1
`;
const t = rows[0];
console.log(`DB OK — loaded tool: ${t.slug}`);

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const model = process.env.ANTHROPIC_MODEL ?? "claude-haiku-4-5-20251001";

const prompt = (t.prompt_template as string).replace(
  "{input}",
  "hey did you get my msg about the meeting friday, need to know if that time works or not"
);

const msg = await anthropic.messages.create({
  model,
  max_tokens: 1024,
  messages: [{ role: "user", content: prompt }],
});

const output = msg.content
  .filter((b) => b.type === "text")
  .map((b) => (b as { text: string }).text)
  .join("\n")
  .trim();

console.log(`Anthropic OK — model: ${model}`);
console.log(`Tokens: ${msg.usage.input_tokens} in / ${msg.usage.output_tokens} out`);
console.log("\n--- Sample output ---\n" + output + "\n---------------------");
process.exit(0);
