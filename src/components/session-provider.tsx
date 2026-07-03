"use client";

// Client boundary so the (server) root layout can wrap the tree in next-auth's
// SessionProvider, enabling client-side `useSession()` in the header. This keeps
// the server render free of per-request auth, so content pages can be cached.
export { SessionProvider } from "next-auth/react";
