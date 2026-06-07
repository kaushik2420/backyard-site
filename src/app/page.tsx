import Link from "next/link";
import { APPS } from "@/lib/apps";
import { AppCard } from "@/components/AppCard";
import { LogoMark } from "@/components/Logo";

export default function HomePage() {
  return (
    <>
      {/* ---------- Hero ----------------------------------------- */}
      <section className="relative overflow-hidden bg-paper sprout-tile text-cream-50">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-cream-50/10 px-3 py-1 text-xs font-medium text-cream-100 ring-1 ring-cream-100/15">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              A small studio from Mumbai
            </div>
            <h1 className="h-display mt-6 text-5xl font-bold leading-[1.05] text-cream-50 md:text-7xl">
              Small, sharp software for{" "}
              <span className="text-accent">problems worth solving.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream-100/90 md:text-xl">
              Backyard SaaS picks up the everyday frictions of work and life —
              the parts that big SaaS won&apos;t touch — and ships focused
              tools that actually move the needle. Built in the backyard. Made
              for the real world.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/apps" className="btn-cream">
                See what we&apos;ve built
              </Link>
              <Link href="/about" className="btn-outline border-cream-50/30 text-cream-50 hover:bg-cream-50/5">
                Our story
              </Link>
            </div>
          </div>

          {/* Decorative sprout cluster on the right — purely visual */}
          <div className="pointer-events-none absolute right-[-40px] top-12 hidden opacity-90 md:block">
            <LogoMark size={260} tone="dark" withPlate={false} />
          </div>
        </div>
      </section>

      {/* ---------- Mission ----------------------------------------- */}
      <section className="bg-cream-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-700">
                Mission
              </div>
              <div className="mt-3 underline-accent" />
            </div>
            <div className="md:col-span-8">
              <h2 className="h-display text-3xl font-bold leading-tight text-ink-900 md:text-4xl">
                We build software the way a neighbour builds something useful
                in their garage — close to the problem, free of fanfare, and
                ready to be borrowed by anyone who needs it.
              </h2>
              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <Pillar
                  title="One problem at a time"
                  body="Every app under Backyard solves a single, sharp problem we&apos;ve seen up close. No bloat, no feature drag — just the smallest thing that actually helps."
                />
                <Pillar
                  title="For real people, not personas"
                  body="We design for the person stuck in the problem at 11pm on a Tuesday — not for the slide that needs to be sold next quarter."
                />
                <Pillar
                  title="Quiet by design"
                  body="No dark patterns, no growth-hacking nudges, no manufactured urgency. Software that respects your attention is the only kind worth shipping."
                />
                <Pillar
                  title="Open to neighbours"
                  body="As Backyard grows, we want other indie builders to plant their app under the same umbrella — and benefit from a shared audience that already trusts the brand."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Vision ----------------------------------------- */}
      <section className="bg-cream-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-700">
                Vision
              </div>
              <div className="mt-3 underline-accent" />
            </div>
            <div className="md:col-span-8">
              <p className="text-2xl leading-snug text-ink-900 md:text-3xl">
                A backyard you can rely on — a small constellation of apps,
                each modest on its own, that together cover the corners of
                everyday work and life nobody else is bothering with.
              </p>
              <p className="mt-6 text-base leading-relaxed text-ink-600">
                Today that&apos;s <strong>Relaunch</strong>, an empathy-first
                job-search helper for laid-off tech workers, and{" "}
                <strong>Trellis</strong>, a calm CRM for solopreneurs (in
                progress). Tomorrow it&apos;s whatever the people around us
                are stuck on next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- App marketplace preview ----------------------- */}
      <section className="bg-cream-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-700">
                The marketplace
              </div>
              <div className="mt-3 underline-accent" />
              <h2 className="h-display mt-6 text-3xl font-bold tracking-tightish text-ink-900 md:text-4xl">
                What we&apos;re building in the backyard
              </h2>
            </div>
            <Link
              href="/apps"
              className="hidden whitespace-nowrap text-sm font-semibold text-forest-900 hover:underline md:block"
            >
              See all apps →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {APPS.map((app) => (
              <AppCard key={app.slug} app={app} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/apps"
              className="text-sm font-semibold text-forest-900 hover:underline"
            >
              See all apps →
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Founder card (teaser → /about) ---------------- */}
      <section className="bg-cream-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <FounderAvatar />
            </div>
            <div className="md:col-span-8">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-700">
                About me
              </div>
              <div className="mt-3 underline-accent" />
              <h2 className="h-display mt-6 text-3xl font-bold leading-tight text-ink-900 md:text-4xl">
                Hi, I&apos;m Kaushik — the one tending this backyard.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-600">
                I&apos;ve spent my career around product and tech in Mumbai,
                watching brilliant people get stuck on small, fixable problems
                that nobody had the patience to solve well. Relaunch was the
                first one I couldn&apos;t walk past — and Backyard SaaS is the
                home I&apos;m building so the next one, and the one after,
                have somewhere to land.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link href="/about" className="btn-primary">
                  Read the full story
                </Link>
                <Link
                  href="https://www.linkedin.com/company/backyard-saas-relaunch/about"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                >
                  Follow Backyard on LinkedIn ↗
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Final CTA -------------------------------------- */}
      <section className="bg-paper sprout-tile text-cream-50">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-24">
          <h2 className="h-display text-3xl font-bold leading-tight text-cream-50 md:text-5xl">
            Have a problem worth solving?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-cream-100/85">
            If you&apos;ve felt the friction yourself — or you&apos;re an
            indie builder looking for a shared roof — write to us. The
            backyard&apos;s big enough for more.
          </p>
          <div className="mt-9 flex justify-center gap-3">
            <Link href="/contact" className="btn-cream">
              Say hello
            </Link>
            <Link
              href="/apps"
              className="btn-outline border-cream-50/30 text-cream-50 hover:bg-cream-50/5"
            >
              Browse the apps
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---- subcomponents ---- */

function Pillar({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="text-base font-bold text-ink-900">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{body}</p>
    </div>
  );
}

function FounderAvatar() {
  // Placeholder until Kaushik shares a photo — uses initials in a
  // forest plate so it reads as intentional, not "image missing".
  return (
    <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-3xl bg-paper sprout-tile">
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center">
          <div className="font-serif text-7xl font-bold text-cream-50">K</div>
          <div className="mt-2 text-sm tracking-wider text-cream-100/70">
            FOUNDER
          </div>
        </div>
      </div>
    </div>
  );
}
