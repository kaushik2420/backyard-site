import Link from "next/link";
import type { Metadata } from "next";
import { LogoMark } from "@/components/Logo";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Backyard SaaS — a small studio from Mumbai building empathetic, focused software for real-world problems.",
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-paper sprout-tile text-cream-50">
        <div className="mx-auto max-w-4xl px-6 pt-16 pb-16 md:pt-20 md:pb-20">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cream-100/80">
            About
          </div>
          <h1 className="h-display mt-4 text-4xl font-bold leading-tight md:text-6xl">
            A small backyard,{" "}
            <span className="text-accent">tended carefully.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-cream-100/85">
            Backyard SaaS is what happens when you stop chasing the next big
            platform and start fixing the small things that were quietly
            ruining people&apos;s days.
          </p>
        </div>
      </section>

      {/* Founder story */}
      <section className="bg-cream-50">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <div className="flex items-center gap-5">
            <FounderPlate />
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-700">
                Founder
              </div>
              <div className="text-xl font-bold text-ink-900">Kaushik N.</div>
              <div className="text-sm text-ink-600">
                Mumbai, India · Building Backyard SaaS
              </div>
            </div>
          </div>

          <div className="prose-bnyrd mt-12 space-y-6 text-base leading-relaxed text-ink-900">
            <p>
              Hi — I&apos;m Kaushik, and I started Backyard SaaS for a very
              simple reason: I kept watching the people closest to me get
              stuck on problems that were absolutely solvable, but that no
              existing software actually solved well.
            </p>
            <p>
              In late 2024 and early 2025, friends and former colleagues in
              tech started losing their jobs in waves. The advice they got
              was the same advice everyone gets — &quot;update your LinkedIn,
              tailor your résumé, reach out to your network&quot; — except
              when you&apos;re grieving a layoff, every one of those
              instructions costs you energy you don&apos;t have. The tools
              were either built for recruiters, or built to sell more tools.
              Nobody was building for the person sitting at home at 11pm
              wondering how to even start.
            </p>
            <p>
              That&apos;s where <strong>Relaunch</strong> came from. Drop in
              your résumé and it does the heavy lifting every morning —
              finds real openings, tailors a résumé and cover letter for
              each, names two people in your network worth reaching out to,
              and even writes the InMail. It&apos;s the empathy I wish my
              friends had been handed when their world tilted.
            </p>
            <p>
              Once Relaunch was out, the next thing was obvious: there were
              going to be more problems like this. Small, sharp, specific.
              Worth solving. I didn&apos;t want to keep building under a
              brand named after a single product, because the next thing
              wouldn&apos;t be about layoffs at all. So I built the
              backyard — a place where each of these little tools can grow
              under one roof.
            </p>
            <p>
              Next up:{" "}
              <strong>
                <Link
                  href="/apps"
                  className="text-forest-900 underline decoration-forest-500 decoration-2 underline-offset-4 hover:bg-forest-900/5"
                >
                  Trellis
                </Link>
              </strong>
              , a calm CRM + task system for solopreneurs who lose more deals
              to forgotten follow-ups than to bad pitches. After that, we
              listen — the next backyard project will come from whoever in
              our community shouts loudest about the thing they&apos;re
              quietly stuck on.
            </p>
            <p className="text-forest-700 font-medium">
              If you&apos;re building in a similar spirit, or you&apos;ve got
              a problem worth solving, the backyard gate is open.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-3">
            <Link href="/contact" className="btn-primary">
              Say hello
            </Link>
            <Link
              href="https://www.linkedin.com/company/backyard-saas-relaunch/about"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              Follow on LinkedIn ↗
            </Link>
          </div>
        </div>
      </section>

      {/* Principles strip */}
      <section className="bg-cream-100">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-700">
            What we believe
          </div>
          <div className="mt-3 underline-accent" />
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <Belief
              n="01"
              title="Care is a product feature."
              body="Empathy isn't decoration — it shapes copy, flows, defaults, and what we refuse to build."
            />
            <Belief
              n="02"
              title="Stay close to the user."
              body="Every Backyard app starts from a real conversation with someone in the problem. No personas, no proxies."
            />
            <Belief
              n="03"
              title="Ship small. Iterate often."
              body="A small app shipped this month beats a big one promised next year. The backyard rewards consistency."
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Belief({
  n,
  title,
  body,
}: {
  n: string;
  title: string;
  body: string;
}) {
  return (
    <div>
      <div className="font-serif text-3xl text-forest-500">{n}</div>
      <h3 className="mt-2 text-lg font-bold text-ink-900">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{body}</p>
    </div>
  );
}

function FounderPlate() {
  return (
    <div className="relative h-20 w-20 overflow-hidden rounded-2xl bg-paper sprout-tile">
      <div className="absolute inset-0 grid place-items-center">
        <LogoMark size={48} tone="dark" withPlate={false} />
      </div>
    </div>
  );
}
