import { and, eq, gte, sql } from "drizzle-orm";
import { db } from "@/db";
import { usageLogs } from "@/db/schema";

const DAILY_LIMIT_PER_TOOL = 3;

export async function checkRateLimit(
  transformationId: number,
  identity: { userId?: string; ipHash: string }
) {
  const since = new Date(Date.now() - 24 * 60 * 60 * 1000);

  const identityCondition = identity.userId
    ? eq(usageLogs.userId, identity.userId)
    : eq(usageLogs.ipHash, identity.ipHash);

  const [row] = await db
    .select({ count: sql<number>`count(*)::int` })
    .from(usageLogs)
    .where(
      and(
        eq(usageLogs.transformationId, transformationId),
        identityCondition,
        gte(usageLogs.createdAt, since)
      )
    );

  const count = row?.count ?? 0;

  return {
    allowed: count < DAILY_LIMIT_PER_TOOL,
    remaining: Math.max(0, DAILY_LIMIT_PER_TOOL - count),
    limit: DAILY_LIMIT_PER_TOOL,
  };
}
