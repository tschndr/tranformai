import {
  pgTable,
  serial,
  integer,
  text,
  timestamp,
  jsonb,
  primaryKey,
} from "drizzle-orm/pg-core";
import type { AdapterAccountType } from "next-auth/adapters";

export const transformations = pgTable("transformations", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  inputType: text("input_type").notNull(),
  outputType: text("output_type").notNull(),
  category: text("category").notNull(),
  promptTemplate: text("prompt_template").notNull(),
  seoTitle: text("seo_title").notNull(),
  seoDescription: text("seo_description").notNull(),
  h1: text("h1").notNull(),
  introCopy: text("intro_copy").notNull(),
  exampleInput: text("example_input").notNull(),
  exampleOutput: text("example_output").notNull(),
  faq: jsonb("faq").$type<{ question: string; answer: string }[]>().notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const modifiers = pgTable("modifiers", {
  id: serial("id").primaryKey(),
  transformationId: integer("transformation_id")
    .notNull()
    .references(() => transformations.id),
  slug: text("slug").notNull(),
  extraContext: text("extra_context").notNull(),
  uniqueExampleInput: text("unique_example_input").notNull(),
  uniqueExampleOutput: text("unique_example_output").notNull(),
});

// --- Auth.js (NextAuth v5) tables — required schema for the Drizzle adapter ---

export const users = pgTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").notNull().unique(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
});

export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccountType>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => [
    primaryKey({ columns: [account.provider, account.providerAccountId] }),
  ]
);

export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => [primaryKey({ columns: [vt.identifier, vt.token] })]
);

// --- Billing ---

export const subscriptions = pgTable("subscriptions", {
  id: serial("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .unique()
    .references(() => users.id, { onDelete: "cascade" }),
  stripeCustomerId: text("stripe_customer_id").notNull().unique(),
  stripeSubscriptionId: text("stripe_subscription_id").unique(),
  status: text("status").notNull(), // active | trialing | past_due | canceled | incomplete
  plan: text("plan"), // "monthly" | "annual"
  currentPeriodEnd: timestamp("current_period_end", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

// Prepaid generation credits (1 credit = 1 generation), purchased in one-off packs.
// Never expire. Only usable by signed-in users.
export const credits = pgTable("credits", {
  userId: text("user_id")
    .primaryKey()
    .references(() => users.id, { onDelete: "cascade" }),
  balance: integer("balance").notNull().default(0),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

// --- Usage / rate limiting ---

export const usageLogs = pgTable("usage_logs", {
  id: serial("id").primaryKey(),
  transformationId: integer("transformation_id")
    .notNull()
    .references(() => transformations.id),
  userId: text("user_id").references(() => users.id, { onDelete: "cascade" }),
  ipHash: text("ip_hash").notNull(),
  tokensUsed: integer("tokens_used").notNull(),
  // How this generation was paid for — "free" counts against the daily free
  // allowance; "credit" and "subscription" do not.
  source: text("source").notNull().default("free"), // free | credit | subscription
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});
