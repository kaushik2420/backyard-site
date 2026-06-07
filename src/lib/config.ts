import { z } from "zod";

/**
 * Env validation. Server schema only — no client config beyond the
 * public site URL, which is read from process.env where needed.
 */
const serverSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  RESEND_API_KEY: z.string().optional(),
  FROM_EMAIL: z.string().email().default("hello@backyardsaas.com"),
  CONTACT_TO_EMAIL: z.string().email().default("kaushikn2416@gmail.com"),
  CONTACT_CC_EMAIL: z.string().email().optional(),
});

let _cfg: ReturnType<typeof serverSchema.parse> | undefined;
export function serverConfig() {
  if (typeof window !== "undefined") {
    throw new Error("serverConfig() is server-only");
  }
  if (_cfg) return _cfg;
  const parsed = serverSchema.safeParse(process.env);
  if (!parsed.success) {
    console.error("Invalid env:", parsed.error.flatten().fieldErrors);
    throw new Error("Invalid server environment variables");
  }
  _cfg = parsed.data;
  return _cfg;
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.backyardsaas.com";
