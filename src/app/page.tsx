import Link from "next/link";
import { eq, sql } from "drizzle-orm";
import { db } from "@/db";
import { transformations } from "@/db/schema";
import { CategoryIcon, Briefcase, GraduationCap, PenLine, ArrowRight } from "@/components/icons";

export const dynamic = "force-dynamic";

const CATEGORY_SHOWCASE = [
  { slug: "email", label: "Email", desc: "Professional, concise & friendly rewrites" },
  { slug: "resume", label: "Resume", desc: "Impact bullets, metrics & power verbs" },
  { slug: "blog", label: "Blog", desc: "Posts, outlines, summaries & threads" },
  { slug: "code", label: "Code", desc: "Explain, comment, docstrings & commits" },
  { slug: "customer-support", label: "Support", desc: "Replies, macros & de-escalation" },
  { slug: "social-caption", label: "Social", desc: "Captions, hooks & hashtags" },
];

const ROLES = [
  {
    title: "Professionals",
    body: "Turn rough emails and meeting notes into polished, send-ready writing.",
    Icon: Briefcase,
  },
  {
    title: "Job seekers",
    body: "Sharpen resume bullets and turn job descriptions into targeted talking points.",
    Icon: GraduationCap,
  },
  {
    title: "Writers & students",
    body: "Turn idea dumps into structured outlines and dense text into plain language.",
    Icon: PenLine,
  },
];

const QUICK_CHIPS = ["email", "summarize", "resume", "professional", "simplify", "bullet points"];

export default async function Home() {
  const [featured] =
    (await db
      .select()
      .from(transformations)
      .where(eq(transformations.slug, "email-to-professional-rewrite"))
      .limit(1)) ?? [];

  const [{ count }] = await db
    .select({ count: sql<number>`count(*)::int` })
    .from(transformations);

  const clip = (s: string, n: number) => (s.length > n ? s.slice(0, n).trimEnd() + "…" : s);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="bg-brand-glow pointer-events-none absolute inset-x-0 top-0 h-[560px]" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 pb-14 pt-16 text-center sm:pt-24">
          <span className="animate-rise inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs font-medium text-neutral-600 shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {count} focused AI tools · Free to start · No signup
          </span>

          <h1 className="animate-rise mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-neutral-900 sm:text-7xl">
            Rewrite <span className="text-gradient">anything</span>
            <br />
            in seconds.
          </h1>

          <p className="animate-rise mx-auto mt-5 max-w-xl text-lg text-neutral-600">
            {count} single-purpose tools that rewrite, summarize, and transform your text —
            no prompts to write, no signup to start.
          </p>

          <form
            action="/transform"
            method="GET"
            className="animate-rise mt-8 flex w-full max-w-lg items-center gap-2 rounded-full border border-neutral-200 bg-white p-1.5 shadow-lg shadow-neutral-900/5 focus-within:border-neutral-400"
          >
            <input
              name="q"
              aria-label="Search tools"
              placeholder="Search tools — try “email” or “summarize”…"
              className="w-full bg-transparent px-4 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
            >
              Search
            </button>
          </form>

          <div className="animate-rise mt-4 flex flex-wrap items-center justify-center gap-2">
            {QUICK_CHIPS.map((chip) => (
              <Link
                key={chip}
                href={`/transform?q=${encodeURIComponent(chip)}`}
                className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-600 transition-colors hover:border-neutral-400 hover:text-neutral-900"
              >
                {chip}
              </Link>
            ))}
          </div>
        </div>

        {/* Hero product card */}
        {featured && (
          <div className="mx-auto max-w-4xl px-6 pb-20">
            <div className="bg-brand-gradient rounded-3xl p-2 shadow-2xl shadow-violet-900/20">
              <div className="rounded-[1.25rem] bg-white p-5 sm:p-7">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-wide text-neutral-400 uppercase">
                    Live example
                  </span>
                  <span className="text-xs font-medium text-neutral-500">{featured.h1}</span>
                </div>
                <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-stretch">
                  <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-left">
                    <p className="mb-2 text-xs font-medium text-neutral-400">Your text</p>
                    <p className="text-sm leading-relaxed text-neutral-600">
                      {clip(featured.exampleInput, 150)}
                    </p>
                  </div>
                  <div className="hidden items-center justify-center sm:flex">
                    <span className="bg-brand-gradient flex h-9 w-9 items-center justify-center rounded-full text-white">
                      →
                    </span>
                  </div>
                  <div className="rounded-2xl border border-neutral-900/10 bg-white p-4 text-left shadow-sm ring-1 ring-neutral-900/5">
                    <p className="mb-2 text-xs font-medium text-accent">Rewritten</p>
                    <p className="text-sm leading-relaxed whitespace-pre-line text-neutral-800">
                      {clip(featured.exampleOutput, 170)}
                    </p>
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <Link
                    href={`/transform/${featured.slug}`}
                    className="inline-flex rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
                  >
                    Try this tool →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Stat strip */}
      <section className="border-y border-neutral-100 bg-neutral-50/50">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-6 py-8 text-center sm:grid-cols-4">
          {[
            [`${count}`, "focused tools"],
            ["38", "categories"],
            ["2 / day", "free, no signup"],
            ["~2s", "to a clean rewrite"],
          ].map(([big, small]) => (
            <div key={small}>
              <p className="text-2xl font-semibold tracking-tight text-neutral-900">{big}</p>
              <p className="mt-1 text-sm text-neutral-500">{small}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Two-tone statement */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="text-3xl font-semibold leading-snug tracking-tight text-neutral-900 sm:text-4xl">
          Paste your text, pick a tool, and get a clean rewrite{" "}
          <span className="text-neutral-400">— professional, concise, or simplified —</span>{" "}
          without writing a single prompt{" "}
          <span className="text-neutral-400">or signing up.</span>
        </p>
      </section>

      {/* Category showcase */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="mb-10 text-center">
          <p className="text-sm font-medium text-accent">Explore by category</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            A tool for every kind of text
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORY_SHOWCASE.map((c) => (
            <Link
              key={c.slug}
              href={`/transform/category/${c.slug}`}
              className="group rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-lg hover:shadow-neutral-900/5"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <CategoryIcon slug={c.slug} className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">{c.label}</h3>
              <p className="mt-1 text-sm text-neutral-500">{c.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-neutral-900 transition-colors group-hover:text-accent">
                Browse <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/transform" className="text-sm font-medium text-neutral-600 underline-offset-4 hover:text-neutral-900 hover:underline">
            See all {count} tools →
          </Link>
        </div>
      </section>

      {/* Roles */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid gap-8 sm:grid-cols-3">
          {ROLES.map((role) => (
            <div key={role.title}>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <role.Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-neutral-900">{role.title}</h3>
              <p className="mt-1 text-sm text-neutral-600">{role.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-neutral-900 px-8 py-20 text-center">
          <div aria-hidden className="bg-brand-gradient pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl" />
          <div className="relative">
            <h2 className="mx-auto max-w-lg text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Ready to rewrite anything?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-neutral-400">
              Start free — 2 rewrites a day, no signup. Buy credits or go unlimited whenever you need more.
            </p>
            <Link
              href="/transform"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-200"
            >
              Start rewriting →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
