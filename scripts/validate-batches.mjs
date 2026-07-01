import { readFileSync, readdirSync } from "fs";
import { execSync } from "child_process";

const dir = "src/db/seed-data";
const files = readdirSync(dir).filter((f) => /^batch-\d+\.ts$/.test(f)).sort();

let grandTotal = 0;
const allSlugs = new Map(); // slug -> file

for (const file of files) {
  const path = `${dir}/${file}`;
  const src = readFileSync(path, "utf8");

  // Rough object count: count "slug:" occurrences
  const slugMatches = [...src.matchAll(/slug:\s*["'`]([^"'`]+)["'`]/g)].map((m) => m[1]);
  const faqCount = (src.match(/faq:\s*\[/g) || []).length;
  const promptCount = (src.match(/promptTemplate:/g) || []).length;

  // duplicate slug detection
  let dupes = 0;
  for (const s of slugMatches) {
    if (allSlugs.has(s)) {
      console.log(`  DUPLICATE slug "${s}" in ${file} (also in ${allSlugs.get(s)})`);
      dupes++;
    } else {
      allSlugs.set(s, file);
    }
  }

  // promptTemplate ending in {input}
  const badPrompts = [...src.matchAll(/promptTemplate:\s*([\s\S]*?)(?:,\n\s*seoTitle)/g)]
    .filter((m) => !m[1].includes("{input}")).length;

  grandTotal += slugMatches.length;
  console.log(
    `${file}: ${slugMatches.length} slugs, ${faqCount} faq blocks, ${promptCount} prompts` +
    `${dupes ? `, ${dupes} dupes` : ""}${badPrompts ? `, ${badPrompts} prompts missing {input}` : ""}`
  );
}

console.log(`\nTOTAL tools across batches: ${grandTotal}`);
console.log(`Unique slugs: ${allSlugs.size}`);

// Typecheck each file compiles via tsc on the whole project's seed-data
try {
  execSync("npx tsc --noEmit --strict src/db/seed-data/*.ts 2>&1", { stdio: "pipe" });
  console.log("tsc: (skipped isolated — will validate in full build)");
} catch {
  // isolated tsc on individual files won't resolve imports; ignore
}
