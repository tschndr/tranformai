import Link from "next/link";
import { LogoMark } from "@/components/logo";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center gap-6 px-6 py-24 text-center">
      <LogoMark className="h-10 w-10" />
      <div>
        <p className="text-sm font-medium text-accent">404</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900">
          We couldn&apos;t find that page
        </h1>
        <p className="mt-3 text-neutral-600">
          The page may have moved. Try searching our 334 tools instead.
        </p>
      </div>

      <form
        action="/transform"
        method="GET"
        className="flex w-full items-center gap-2 rounded-full border border-neutral-200 bg-white p-1.5 shadow-sm focus-within:border-neutral-400"
      >
        <input
          name="q"
          aria-label="Search tools"
          placeholder="Search tools…"
          className="w-full bg-transparent px-4 py-2 text-sm placeholder:text-neutral-400 focus:outline-none"
        />
        <button type="submit" className="shrink-0 rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white hover:bg-neutral-700">
          Search
        </button>
      </form>

      <div className="flex gap-3 text-sm">
        <Link href="/" className="font-medium text-neutral-900 underline-offset-4 hover:underline">
          Home
        </Link>
        <Link href="/transform" className="font-medium text-neutral-900 underline-offset-4 hover:underline">
          All tools
        </Link>
        <Link href="/pricing" className="font-medium text-neutral-900 underline-offset-4 hover:underline">
          Pricing
        </Link>
      </div>
    </main>
  );
}
