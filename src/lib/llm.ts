import "server-only";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const MODEL = process.env.ANTHROPIC_MODEL ?? "claude-haiku-4-5-20251001";

export async function runTransformation(promptTemplate: string, input: string) {
  const prompt = promptTemplate.replace("{input}", input);

  const message = await anthropic.messages.create({
    model: MODEL,
    max_tokens: 1024,
    messages: [{ role: "user", content: prompt }],
  });

  const output = message.content
    .filter((block) => block.type === "text")
    .map((block) => block.text)
    .join("\n")
    .trim();

  const tokensUsed = message.usage.input_tokens + message.usage.output_tokens;

  return { output, tokensUsed };
}
