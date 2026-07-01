import { eq } from "drizzle-orm";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/db";
import { transformations } from "@/db/schema";

export const dynamic = "force-dynamic";

function titleCase(value: string) {
  return value
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

async function getCategoryTools(category: string) {
  return db
    .select({
      slug: transformations.slug,
      h1: transformations.h1,
      seoDescription: transformations.seoDescription,
    })
    .from(transformations)
    .where(eq(transformations.category, category));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const label = titleCase(category);
  return {
    title: `${label} AI Tools — TransformAI`,
    description: `Browse every free ${label} text transformation tool on TransformAI.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const tools = await getCategoryTools(category);
  if (tools.length === 0) notFound();

  const label = titleCase(category);

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-16">
      <div className="text-center">
        <p className="text-sm font-medium text-neutral-500">• Category</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900">
          {label} Tools
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-neutral-600">
          {tools.length} free {label.toLowerCase()} transformation{tools.length === 1 ? "" : "s"}
          . No signup required for your first 3 uses a day per tool.
        </p>
        <Link href="/transform" className="mt-4 inline-block text-sm text-neutral-500 underline hover:text-neutral-900">
          ← Back to all categories
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/transform/${tool.slug}`}
            className="flex flex-col justify-between gap-6 rounded-2xl border border-neutral-200 bg-white p-6 hover:border-neutral-400"
          >
            <div>
              <h2 className="text-lg font-semibold text-neutral-900">{tool.h1}</h2>
              <p className="mt-2 line-clamp-2 text-sm text-neutral-600">{tool.seoDescription}</p>
            </div>
            <span className="text-sm font-medium text-neutral-900">Try it →</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
