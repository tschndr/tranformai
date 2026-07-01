import { eq } from "drizzle-orm";
import { db } from "@/db";
import { subscriptions } from "@/db/schema";

const ACTIVE_STATUSES = new Set(["active", "trialing"]);

export async function getActiveSubscription(userId: string) {
  const [sub] = await db
    .select()
    .from(subscriptions)
    .where(eq(subscriptions.userId, userId))
    .limit(1);

  if (!sub || !ACTIVE_STATUSES.has(sub.status)) return null;
  return sub;
}
