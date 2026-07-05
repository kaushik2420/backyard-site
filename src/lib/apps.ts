/**
 * Catalogue of apps shipped under the Backyard SaaS umbrella.
 *
 * Each entry is rendered as an <AppCard /> on the home page preview
 * and on /apps. Add new apps here when they ship.
 */
export type AppStatus = "live" | "in-progress" | "planned";

export interface AppEntry {
  slug: string;
  name: string;
  shortPitch: string;
  description: string;
  audience: string;
  status: AppStatus;
  href: string | null;
  /** Inline SVG illustration id — see <AppCard /> for the renderer. */
  illustration: "sprout" | "trellis";
  /** Short label that sits in the chip on the card. */
  category: string;
}

export const APPS: AppEntry[] = [
  {
    slug: "relaunch",
    name: "Relaunch",
    shortPitch: "An empathy-first job-search helper for laid-off tech workers.",
    description:
      "Drop in your résumé and Relaunch pulls fresh matches from across the web every morning, tailors a résumé and cover letter for each one, names two people in your network worth reaching out to, and writes the opening message for you. Built for the days after a layoff — when motivation is the rarest resource.",
    audience: "For tech workers navigating a layoff.",
    status: "live",
    href: "https://www.get-relaunch.com",
    illustration: "sprout",
    category: "Job search",
  },
  {
    slug: "trellis",
    name: "Trellis",
    shortPitch:
      "A calm contact organiser for solopreneurs — contacts, tasks, and reminders that actually get followed up on.",
    description:
      "Most solopreneurs lose deals not because they don't have leads, but because the follow-up slips. Trellis is a quiet, well-mannered system that remembers every contact, surfaces the right person to ping today, and turns one-line notes into next actions. No pipeline theatre. Just the next nudge, on time.",
    audience: "For solopreneurs and small teams in services + consulting.",
    status: "in-progress",
    href: null,
    illustration: "trellis",
    category: "Contact Organiser and Reminders",
  },
];

export function appsByStatus(status: AppStatus): AppEntry[] {
  return APPS.filter((a) => a.status === status);
}
