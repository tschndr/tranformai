import { eq } from "drizzle-orm";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/db";
import { transformations } from "@/db/schema";
import { CategoryIcon } from "@/components/icons";

export const dynamic = "force-dynamic";

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

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
    title: `${label} AI Tools — Free ${label} Rewriters`,
    description: `Free AI ${label.toLowerCase()} tools to rewrite, summarize, and transform your text. No signup required for your first 2 rewrites a day.`,
    alternates: { canonical: `/transform/category/${category}` },
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: appUrl },
      { "@type": "ListItem", position: 2, name: "All tools", item: `${appUrl}/transform` },
      { "@type": "ListItem", position: 3, name: `${label} tools`, item: `${appUrl}/transform/category/${category}` },
    ],
  };

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="text-center">
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center justify-center gap-1.5 text-xs text-neutral-400">
          <Link href="/" className="hover:text-neutral-600">Home</Link>
          <span>/</span>
          <Link href="/transform" className="hover:text-neutral-600">Tools</Link>
        </nav>
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
          <CategoryIcon slug={category} className="h-6 w-6" />
        </div>
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
          {label} tools
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-neutral-600">
          {tools.length} free {label.toLowerCase()} tool{tools.length === 1 ? "" : "s"} — 2
          rewrites a day, no signup required.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/transform/${tool.slug}`}
            className="group flex flex-col justify-between gap-6 rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-lg hover:shadow-neutral-900/5"
          >
            <div>
              <h2 className="text-base font-semibold text-neutral-900">{tool.h1}</h2>
              <p className="mt-2 line-clamp-2 text-sm text-neutral-500">{tool.seoDescription}</p>
            </div>
            <span className="text-sm font-medium text-neutral-900 transition-colors group-hover:text-accent">
              Try it →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
