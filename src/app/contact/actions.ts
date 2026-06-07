"use server";
import { z } from "zod";
import { Resend } from "resend";
import { serverConfig } from "@/lib/config";

const TopicEnum = z.enum([
  "general",
  "indie-builder",
  "press",
  "support",
]);

const Input = z.object({
  name: z.string().min(1, "Please share your name").max(120),
  email: z.string().email("That doesn't look like a valid email"),
  topic: TopicEnum.default("general"),
  message: z
    .string()
    .min(8, "Please share a little more so we can help")
    .max(4000),
  // Honeypot. Bots fill this; humans don't see it.
  website: z.string().max(0).optional(),
});

export type ContactResult =
  | { ok: true }
  | { ok: false; error: string; fieldErrors?: Record<string, string[]> };

const TOPIC_LABEL: Record<z.infer<typeof TopicEnum>, string> = {
  general: "General",
  "indie-builder": "Indie builder pitch",
  press: "Press / partnerships",
  support: "Support for an existing app",
};

export async function submitContactAction(
  _prev: ContactResult | null,
  formData: FormData,
): Promise<ContactResult> {
  const parsed = Input.safeParse({
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    topic: String(formData.get("topic") ?? "general"),
    message: String(formData.get("message") ?? "").trim(),
    website: String(formData.get("website") ?? ""),
  });

  if (!parsed.success) {
    return {
      ok: false,
      error: "Please check the form and try again.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  // Silently drop bot submissions — return ok so they don't probe further.
  if (parsed.data.website) {
    return { ok: true };
  }

  const cfg = serverConfig();
  if (!cfg.RESEND_API_KEY) {
    console.error("[contact] RESEND_API_KEY not set; submission lost");
    return {
      ok: false,
      error:
        "Our inbox is offline for a moment — please write to hello@backyardsaas.com directly.",
    };
  }

  try {
    const resend = new Resend(cfg.RESEND_API_KEY);
    const { name, email, topic, message } = parsed.data;
    const topicLabel = TOPIC_LABEL[topic];
    const cc = cfg.CONTACT_CC_EMAIL ? [cfg.CONTACT_CC_EMAIL] : undefined;

    await resend.emails.send({
      from: `Backyard SaaS <${cfg.FROM_EMAIL}>`,
      to: cfg.CONTACT_TO_EMAIL,
      cc,
      replyTo: email,
      subject: `[Backyard] ${topicLabel} — ${name}`,
      text:
        `New Backyard SaaS contact form submission\n\n` +
        `Name:    ${name}\n` +
        `Email:   ${email}\n` +
        `Topic:   ${topicLabel}\n\n` +
        `Message:\n${message}\n`,
    });

    return { ok: true };
  } catch (err) {
    console.error("[contact] resend send failed", err);
    return {
      ok: false,
      error:
        "Couldn't deliver the message just now. Please write to hello@backyardsaas.com directly and we'll pick it up.",
    };
  }
}
