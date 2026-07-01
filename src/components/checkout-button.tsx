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
  const router = useRouter();

  async function handleClick() {
    setLoading(true);
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

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setLoading(false);
      }
    } catch {
      setLoading(false);
    }
  }

  return (
    <button onClick={handleClick} disabled={loading} className={className}>
      {loading ? "Redirecting…" : children}
    </button>
  );
}
