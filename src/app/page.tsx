import Link from "next/link";
import { db } from "@/db";
import { transformations } from "@/db/schema";
import { GradientOrb } from "@/components/gradient-orb";

export const dynamic = "force-dynamic";

const CATEGORY_CARDS = [
  { label: "Email", q: "email", color: "bg-pink-100" },
  { label: "Notes", q: "notes", color: "bg-indigo-100" },
  { label: "Resume", q: "resume", color: "bg-cyan-100" },
  { label: "Ideas", q: "idea", color: "bg-orange-100" },
];

const ROLES = [
  {
    title: "Professionals & Managers",
    body: "Turn rough emails and meeting notes into polished, send-ready writing.",
  },
  {
    title: "Job Seekers",
    body: "Sharpen resume bullets and turn job descriptions into targeted talking points.",
  },
  {
    title: "Students & Writers",
    body: "Turn idea dumps into structured outlines and dense text into simple explanations.",
  },
];

export default async function Home() {
  const [featured] = await db.select().from(transformations).limit(1);

  return (
    <>
      <section className="relative overflow-hidden">
        <GradientOrb className="left-1/2 top-[-160px] h-[520px] w-[720px] -translate-x-1/2" />
        <div className="mx-auto flex max-w-3xl flex-col items-center px-6 pb-20 pt-12 text-center">
          <p className="text-sm font-medium text-neutral-500">• AI Writing Tools</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-neutral-900 sm:text-6xl">
            Instant, Focused
            <br />
            Text Transformations.
          </h1>
          <p className="mt-4 max-w-xl text-neutral-600">
            Paste your text, pick a tool, get a clean result in seconds — free, no signup
            required.
          </p>
          <form
            action="/transform"
            method="GET"
            className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              name="q"
              placeholder="Search for a tool, e.g. 'email' or 'resume'..."
              className="w-full rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm shadow-sm focus:border-neutral-500 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium whitespace-nowrap text-white hover:bg-neutral-700"
            >
              Explore →
            </button>
          </form>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-pink-50 via-indigo-50 to-white py-24">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-medium text-neutral-500">• How it works</p>
          <h2 className="mt-3 text-center text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Paste, Transform, Done.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-neutral-600">
            No prompts to write, no settings to tweak. Every page runs one specific
            transformation, tuned for that job.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {CATEGORY_CARDS.map((c) => (
              <Link
                key={c.q}
                href={`/transform?q=${c.q}`}
                className="rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-sm font-medium text-neutral-700 hover:border-neutral-400"
              >
                {c.label}
              </Link>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-md overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-neutral-100 px-6 py-4">
              <span className="text-sm font-medium text-neutral-900">Your text</span>
              <span className="text-xs text-neutral-500">Pasted</span>
            </div>
            <div className="flex items-center justify-between border-b border-neutral-100 px-6 py-4">
              <span className="text-sm font-medium text-neutral-900">AI Transform</span>
              <span className="text-xs text-neutral-500">~2s</span>
            </div>
            <div className="flex items-center justify-between px-6 py-4">
              <span className="text-sm font-medium text-neutral-900">Clean result</span>
              <span className="text-xs text-neutral-500">Ready to copy</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-center text-sm font-medium text-neutral-500">• Example</p>
          <h2 className="mt-3 text-center text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Instant Rewrites in Seconds.
          </h2>

          {featured && (
            <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-2xl bg-neutral-900 shadow-lg">
              <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <span className="ml-3 text-xs text-neutral-400">{featured.h1}</span>
              </div>
              <div className="space-y-4 p-6 font-mono text-sm">
                <div>
                  <p className="text-neutral-500"># Input</p>
                  <p className="mt-1 whitespace-pre-wrap text-neutral-300">
                    {featured.exampleInput}
                  </p>
                </div>
                <div>
                  <p className="text-neutral-500"># Output</p>
                  <p className="mt-1 whitespace-pre-wrap text-green-300">
                    {featured.exampleOutput}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 text-center">
            {featured && (
              <Link
                href={`/transform/${featured.slug}`}
                className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-700"
              >
                Try it yourself →
              </Link>
            )}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-medium text-neutral-500">• Roles</p>
          <h2 className="mt-3 text-center text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Solutions for Every Kind of Writer.
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {ROLES.map((role) => (
              <div key={role.title} className="flex flex-col gap-2">
                <span className="h-9 w-9 rounded-full bg-neutral-900" />
                <h3 className="text-base font-semibold text-neutral-900">{role.title}</h3>
                <p className="text-sm text-neutral-600">{role.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {featured && (
        <section className="mx-auto max-w-5xl px-6 pb-24">
          <div className="grid overflow-hidden rounded-3xl bg-neutral-900 sm:grid-cols-2">
            <div className="flex items-center justify-center p-10">
              <span className="h-20 w-20 rounded-full bg-gradient-to-br from-pink-400 via-indigo-400 to-cyan-400 blur-md" />
            </div>
            <div className="flex flex-col justify-center gap-4 bg-indigo-600 p-10 text-white">
              <p className="text-sm font-medium text-indigo-200">• TransformAI</p>
              <h2 className="text-2xl font-semibold tracking-tight">
                AI Tools for Clearer Writing.
              </h2>
              <p className="text-sm text-indigo-100">
                Your 24/7 writing assistant. Paste rough text, get a clean, on-tone result.
              </p>
              <ul className="flex flex-col gap-1.5 text-sm text-indigo-100">
                <li>· Instant rewrites</li>
                <li>· Tone &amp; clarity fixes</li>
                <li>· Copy, paste, done</li>
              </ul>
              <Link
                href={`/transform/${featured.slug}`}
                className="mt-2 w-fit rounded-full bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-indigo-50"
              >
                Start Transforming →
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-medium text-neutral-500">
            • Explore by category
          </p>
          <h2 className="mt-3 text-center text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Find the Right Tool, Fast.
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORY_CARDS.map((c) => (
              <Link
                key={c.q}
                href={`/transform?q=${c.q}`}
                className={`flex h-48 flex-col justify-between rounded-2xl p-6 ${c.color}`}
              >
                <h3 className="text-lg font-semibold text-neutral-900">{c.label}</h3>
                <span className="text-sm font-medium text-neutral-700">Browse →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-neutral-900 px-8 py-20 text-center">
          <h2 className="max-w-lg text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Write clearer, let AI handle the tone.
          </h2>
          <p className="max-w-md text-sm text-neutral-400">
            No account required to start. Paste your text and see the result in seconds.
          </p>
          <Link
            href="/transform"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-200"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
