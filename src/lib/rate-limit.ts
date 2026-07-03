import { and, eq, gte, sql } from "drizzle-orm";
import { db } from "@/db";
import { usageLogs } from "@/db/schema";

const DAILY_FREE_LIMIT = 2;

// Generous soft cap on "unlimited" subscriptions — real users effectively never
// hit it, but it bounds abuse (scripting/reselling) and worst-case API cost.
const SUBSCRIBER_FAIR_USE_DAILY = 200;

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

// Fair-use check for subscribers — counts "subscription"-source generations in
// the last 24h for this user.
export async function checkSubscriberFairUse(userId: string) {
  const since = new Date(Date.now() - 24 * 60 * 60 * 1000);

  const [row] = await db
    .select({ count: sql<number>`count(*)::int` })
    .from(usageLogs)
    .where(
      and(
        eq(usageLogs.userId, userId),
        eq(usageLogs.source, "subscription"),
        gte(usageLogs.createdAt, since)
      )
    );

  const count = row?.count ?? 0;

  return {
    allowed: count < SUBSCRIBER_FAIR_USE_DAILY,
    limit: SUBSCRIBER_FAIR_USE_DAILY,
  };
}
