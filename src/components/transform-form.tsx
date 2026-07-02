"use client";

import { useState } from "react";
import Link from "next/link";

export function TransformForm({
  slug,
  exampleInput,
  exampleOutput,
}: {
  slug: string;
  exampleInput: string;
  exampleOutput: string;
}) {
  const [input, setInput] = useState(exampleInput);
  const [output, setOutput] = useState(exampleOutput);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [gate, setGate] = useState<{ needsAccount: boolean } | null>(null);
  const [remaining, setRemaining] = useState<number | null>(null);
  const [credits, setCredits] = useState<number | null>(null);
  const [unlimited, setUnlimited] = useState(false);
  const [copied, setCopied] = useState(false);

  async function handleTransform() {
    if (!input.trim()) return;
    setLoading(true);
    setError(null);
    setGate(null);
    setCopied(false);

    try {
      const res = await fetch(`/api/transform/${slug}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input }),
      });
      const data = await res.json();

      if (res.status === 402) {
        setGate({ needsAccount: !!data.needsAccount });
        return;
      }
      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setOutput(data.output);
      setRemaining(typeof data.remaining === "number" ? data.remaining : null);
      setCredits(typeof data.creditsRemaining === "number" ? data.creditsRemaining : null);
      setUnlimited(!!data.unlimited);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleCopy() {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
      <div className="flex flex-col gap-3">
        <label htmlFor="transform-input" className="text-sm font-medium text-neutral-700">
          Your text
        </label>
        <textarea
          id="transform-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={10}
          className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm leading-relaxed transition-colors focus:border-neutral-400 focus:bg-white focus:outline-none"
        />
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleTransform}
            disabled={loading}
            className="self-start rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 disabled:opacity-60"
          >
            {loading ? "Rewriting…" : "Rewrite →"}
          </button>
          {unlimited && (
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Unlimited plan
            </span>
          )}
          {!unlimited && credits !== null && (
            <span className="text-xs font-medium text-neutral-500">
              {credits} {credits === 1 ? "credit" : "credits"} left
            </span>
          )}
          {!unlimited && credits === null && remaining !== null && (
            <span className="text-xs font-medium text-neutral-500">
              {remaining} free {remaining === 1 ? "use" : "uses"} left today
            </span>
          )}
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        {gate && (
          <div className="rounded-2xl border border-accent/20 bg-accent-soft p-4 text-sm">
            <p className="font-medium text-neutral-900">
              You&apos;ve used your 2 free rewrites for today.
            </p>
            <p className="mt-1 text-neutral-600">
              {gate.needsAccount
                ? "Create a free account to buy credits, or subscribe for unlimited rewrites."
                : "Buy a credit pack, or subscribe for unlimited rewrites across every tool."}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                href="/pricing"
                className="inline-block rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
              >
                View plans →
              </Link>
              {gate.needsAccount && (
                <Link
                  href="/sign-in"
                  className="inline-block rounded-full border border-neutral-300 bg-white px-5 py-2 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-400"
                >
                  Sign in
                </Link>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-accent">Rewritten</span>
          <button
            onClick={handleCopy}
            className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <div className="min-h-[260px] flex-1 whitespace-pre-wrap rounded-2xl border border-neutral-200 bg-white p-4 text-sm leading-relaxed text-neutral-800 shadow-sm ring-1 ring-neutral-900/5">
          {output}
        </div>
      </div>
    </div>
  );
}
