import "server-only";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// Standard model for the free tier and prepaid credits.
const STANDARD_MODEL = process.env.ANTHROPIC_MODEL ?? "claude-haiku-4-5-20251001";
// Higher-quality model reserved for subscribers — the core paid upgrade.
const PREMIUM_MODEL = process.env.ANTHROPIC_MODEL_PREMIUM ?? "claude-sonnet-5";

export async function runTransformation(
  promptTemplate: string,
  input: string,
  options: { premium?: boolean } = {}
) {
  const prompt = promptTemplate.replace("{input}", input);
  const premium = options.premium ?? false;

  const message = await anthropic.messages.create({
    model: premium ? PREMIUM_MODEL : STANDARD_MODEL,
    // Subscribers can submit longer inputs, so allow longer outputs too.
    max_tokens: premium ? 4096 : 1024,
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
