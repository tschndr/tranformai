import { and, eq, gte, sql } from "drizzle-orm";
import { db } from "@/db";
import { usageLogs } from "@/db/schema";

const DAILY_FREE_LIMIT = 2;

// Counts only "free"-source generations in the last 24h, across ALL tools,
// keyed by user id (signed in) or hashed IP (anonymous).
export async function checkDailyFreeLimit(identity: {
  userId?: string;
  ipHash: string;
}) {
  const since = new Date(Date.now() - 24 * 60 * 60 * 1000);

  const identityCondition = identity.userId
    ? eq(usageLogs.userId, identity.userId)
    : eq(usageLogs.ipHash, identity.ipHash);

  const [row] = await db
    .select({ count: sql<number>`count(*)::int` })
    .from(usageLogs)
    .where(
      and(
        identityCondition,
        eq(usageLogs.source, "free"),
        gte(usageLogs.createdAt, since)
      )
    );

  const count = row?.count ?? 0;

  return {
    allowed: count < DAILY_FREE_LIMIT,
    remaining: Math.max(0, DAILY_FREE_LIMIT - count),
    limit: DAILY_FREE_LIMIT,
  };
}
