import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Write to the Backyard SaaS team — for support, indie-builder pitches, partnerships, or just a hello.",
};

const LINKEDIN_URL =
  "https://www.linkedin.com/company/backyard-saas-relaunch/about";

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-paper sprout-tile text-cream-50">
        <div className="mx-auto max-w-4xl px-6 pt-16 pb-16 md:pt-20 md:pb-20">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cream-100/80">
            Contact
          </div>
          <h1 className="h-display mt-4 text-4xl font-bold leading-tight md:text-6xl">
            Knock on the gate.{" "}
            <span className="text-accent">We&apos;re in.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-cream-100/85">
            Whether you&apos;ve got a problem worth solving, an app
            you&apos;d like to plant under our roof, or just a question —
            write to us. Every note lands with a real person.
          </p>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="bg-cream-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-7">
            <ContactForm />
          </div>

          <aside className="md:col-span-5">
            <div className="rounded-2xl bg-cream-100 p-6 ring-1 ring-cream-200 md:p-8">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-700">
                Other ways to reach us
              </div>
              <div className="mt-3 underline-accent" />
              <ul className="mt-6 space-y-5 text-sm">
                <Reach
                  icon={<MailIcon />}
                  label="Email"
                  value={
                    <a
                      className="text-forest-900 underline decoration-forest-500 decoration-2 underline-offset-4"
                      href="mailto:hello@backyardsaas.com"
                    >
                      hello@backyardsaas.com
                    </a>
                  }
                  note="We read every email. Most replies go out within a day."
                />
                <Reach
                  icon={<PinIcon />}
                  label="Based in"
                  value={<span className="font-semibold">Mumbai, India</span>}
                  note="Open to async calls across IST overlapping hours."
                />
                <Reach
                  icon={<LinkedInIcon />}
                  label="LinkedIn"
                  value={
                    <a
                      className="text-forest-900 underline decoration-forest-500 decoration-2 underline-offset-4"
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Backyard SaaS · Relaunch
                    </a>
                  }
                  note="Follow for build updates and behind-the-scenes notes."
                />
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-dashed border-forest-300/50 bg-white p-6">
              <div className="text-sm font-semibold text-forest-900">
                For folks navigating a layoff
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                Looking for the Relaunch job-search helper? Head to{" "}
                <a
                  href="https://www.get-relaunch.com"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-forest-900 underline decoration-forest-500 underline-offset-4"
                >
                  get-relaunch.com
                </a>
                . If you&apos;d like to talk to a human first, write here and
                we&apos;ll guide you in personally.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Reach({
  icon,
  label,
  value,
  note,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  note?: string;
}) {
  return (
    <li className="flex gap-3">
      <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white text-forest-700 ring-1 ring-cream-200">
        {icon}
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-ink-400">
          {label}
        </div>
        <div className="text-sm text-ink-900">{value}</div>
        {note && <div className="mt-0.5 text-xs text-ink-600">{note}</div>}
      </div>
    </li>
  );
}

/* ---- Icons (inline SVG, no library) ---- */
function MailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s-7-7.16-7-12a7 7 0 0 1 14 0c0 4.84-7 12-7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.4 8h4.2v14H.4V8zm7.2 0h4v1.93h.06A4.4 4.4 0 0 1 15.7 7.7c4.21 0 4.99 2.77 4.99 6.37V22h-4.2v-6.32c0-1.5-.03-3.43-2.09-3.43-2.09 0-2.41 1.63-2.41 3.32V22h-4.2V8z" />
    </svg>
  );
}
