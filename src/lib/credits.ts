import { and, eq, gt, sql } from "drizzle-orm";
import { db } from "@/db";
import { credits } from "@/db/schema";

export async function getCreditBalance(userId: string): Promise<number> {
  const [row] = await db
    .select({ balance: credits.balance })
    .from(credits)
    .where(eq(credits.userId, userId))
    .limit(1);
  return row?.balance ?? 0;
}

// Atomically decrement one credit only if the balance is positive.
// Returns the new balance, or null if there were no credits to spend
// (so callers can gate on it without a race).
export async function consumeCredit(userId: string): Promise<number | null> {
  const rows = await db
    .update(credits)
    .set({ balance: sql`${credits.balance} - 1`, updatedAt: new Date() })
    .where(and(eq(credits.userId, userId), gt(credits.balance, 0)))
    .returning({ balance: credits.balance });

  return rows[0]?.balance ?? null;
}

// Grant credits (from a completed purchase, or a refund of a failed generation).
export async function addCredits(userId: string, amount: number): Promise<number> {
  const rows = await db
    .insert(credits)
    .values({ userId, balance: amount })
    .onConflictDoUpdate({
      target: credits.userId,
      set: { balance: sql`${credits.balance} + ${amount}`, updatedAt: new Date() },
    })
    .returning({ balance: credits.balance });

  return rows[0]?.balance ?? amount;
}
