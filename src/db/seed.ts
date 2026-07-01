import "dotenv/config";
import { db } from "./index";
import { transformations } from "./schema";
import { allTools } from "./seed-data";

const BATCH_SIZE = 100;

async function seed() {
  console.log(`Seeding ${allTools.length} transformations...`);

  for (let i = 0; i < allTools.length; i += BATCH_SIZE) {
    const chunk = allTools.slice(i, i + BATCH_SIZE);
    await db.insert(transformations).values(chunk).onConflictDoNothing({
      target: transformations.slug,
    });
    console.log(`  Inserted ${Math.min(i + BATCH_SIZE, allTools.length)}/${allTools.length}`);
  }

  console.log("Seed complete.");
}

seed()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
