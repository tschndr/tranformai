import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

// At build / prerender time DATABASE_URL may be unset (e.g. collecting page data
// for /_not-found). neon() throws on an empty string, so fall back to a
// syntactically valid placeholder to keep the build working. neon() does not open
// a connection until a query actually runs, and every real request has the true
// DATABASE_URL from the environment.
const url =
  process.env.DATABASE_URL ??
  "postgresql://user:pass@ep-placeholder.us-east-1.aws.neon.tech/db?sslmode=require";

const sql = neon(url);

export const db = drizzle(sql, { schema });
