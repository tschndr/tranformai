"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type CheckoutBody =
  | { plan: "monthly" | "annual" }
  | { kind: "credits"; pack: "small" | "medium" | "large" };

export function CheckoutButton({
  request,
  children,
  className,
}: {
  request: CheckoutBody;
  children: React.ReactNode;
  className?: string;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleClick() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request),
      });

      if (res.status === 401) {
        router.push("/sign-in");
        return;
      }

      let data: { url?: string; error?: string } | null = null;
      try {
        data = await res.json();
      } catch {
        // non-JSON response (e.g. a 500 HTML error page)
      }

      if (data?.url) {
        window.location.href = data.url;
        return;
      }

      setError(data?.error ?? `Checkout failed (HTTP ${res.status}). Please try again.`);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <span className="flex flex-col gap-1">
      <button onClick={handleClick} disabled={loading} className={className}>
        {loading ? "Redirecting…" : children}
      </button>
      {error && <span className="text-xs text-red-500">{error}</span>}
    </span>
  );
}
