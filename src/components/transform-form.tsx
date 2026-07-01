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
  const [upgradeRequired, setUpgradeRequired] = useState(false);
  const [remaining, setRemaining] = useState<number | null>(null);
  const [unlimited, setUnlimited] = useState(false);
  const [copied, setCopied] = useState(false);

  async function handleTransform() {
    if (!input.trim()) return;
    setLoading(true);
    setError(null);
    setUpgradeRequired(false);
    setCopied(false);

    try {
      const res = await fetch(`/api/transform/${slug}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input }),
      });
      const data = await res.json();

      if (res.status === 402) {
        setUpgradeRequired(true);
        return;
      }
      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setOutput(data.output);
      setRemaining(typeof data.remaining === "number" ? data.remaining : null);
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
    <div className="grid gap-8 sm:grid-cols-2">
      <div className="flex flex-col gap-3">
        <label htmlFor="transform-input" className="text-sm font-medium text-neutral-700">
          Your text
        </label>
        <textarea
          id="transform-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={10}
          className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm focus:border-neutral-400 focus:bg-white focus:outline-none"
        />
        <div className="flex items-center gap-3">
          <button
            onClick={handleTransform}
            disabled={loading}
            className="self-start rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white hover:bg-neutral-700 disabled:opacity-50"
          >
            {loading ? "Transforming…" : "Transform →"}
          </button>
          {unlimited && <span className="text-xs font-medium text-neutral-500">Unlimited plan</span>}
          {!unlimited && remaining !== null && (
            <span className="text-xs font-medium text-neutral-500">
              {remaining} free {remaining === 1 ? "use" : "uses"} left today
            </span>
          )}
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        {upgradeRequired && (
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm">
            <p className="font-medium text-neutral-900">
              You&apos;ve used your 3 free generations for this tool today.
            </p>
            <p className="mt-1 text-neutral-600">
              Subscribe for unlimited generations across every tool on the site.
            </p>
            <Link
              href="/pricing"
              className="mt-3 inline-block rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white hover:bg-neutral-700"
            >
              View plans →
            </Link>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-neutral-700">Result</span>
          <button
            onClick={handleCopy}
            className="text-sm font-medium text-neutral-500 hover:text-neutral-900"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <div className="min-h-[260px] whitespace-pre-wrap rounded-2xl border border-neutral-200 bg-white p-4 text-sm shadow-sm">
          {output}
        </div>
      </div>
    </div>
  );
}
