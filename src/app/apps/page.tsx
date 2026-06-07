import Link from "next/link";
import type { Metadata } from "next";
import { APPS } from "@/lib/apps";
import { AppCard } from "@/components/AppCard";

export const metadata: Metadata = {
  title: "Apps",
  description:
    "The full Backyard SaaS marketplace — Relaunch, Trellis, and the apps we're growing next.",
};

export default function AppsPage() {
  return (
    <>
      {/* Page header — slim dark band, so the marketplace below sits on cream. */}
      <section className="bg-paper sprout-tile text-cream-50">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-20 md:pb-24">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cream-100/80">
            The marketplace
          </div>
          <h1 className="h-display mt-4 text-4xl font-bold leading-tight md:text-6xl">
            Small apps,{" "}
            <span className="text-accent">big care.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-cream-100/85">
            Every app under Backyard is built for a specific person in a
            specific corner. Browse what&apos;s live, what&apos;s in progress,
            and what we&apos;re planting next.
          </p>
        </div>
      </section>

      {/* Marketplace grid */}
      <section className="bg-cream-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid gap-6 md:grid-cols-2">
            {APPS.map((app) => (
              <AppCard key={app.slug} app={app} />
            ))}
          </div>

          {/* Contributors note */}
          <div className="mt-14 rounded-2xl bg-white p-8 ring-1 ring-cream-200 shadow-card md:p-10">
            <div className="grid gap-6 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-700">
                  For indie builders
                </div>
                <h2 className="mt-3 text-2xl font-bold text-ink-900">
                  Want to plant your app under the Backyard roof?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  If you&apos;ve built something small and sharp for a real
                  problem, we&apos;d love to host it as a contributor app.
                  You keep your product, your pricing, and your users — we
                  bring distribution and a shared brand that already stands
                  for care.
                </p>
              </div>
              <div className="md:col-span-4 md:text-right">
                <Link href="/contact" className="btn-primary">
                  Pitch your app
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
