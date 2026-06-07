import Link from "next/link";
import { LogoLockup } from "./Logo";

const LINKS = [
  { href: "/apps", label: "Apps" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/**
 * Top navigation — lives above the hero on every page.
 *
 * The nav itself stays cream (matches body), but the home page's
 * dark hero sits flush underneath it so the brand reads consistently.
 */
export function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-cream-200 bg-cream-50/85 backdrop-blur supports-[backdrop-filter]:bg-cream-50/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <Link href="/" className="group inline-flex items-center gap-2">
          <LogoLockup tone="dark" size={32} />
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-1.5 text-sm text-ink-600 transition-colors hover:bg-cream-100 hover:text-forest-900"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="https://www.get-relaunch.com"
            target="_blank"
            rel="noreferrer"
            className="btn-primary ml-2 text-xs"
          >
            Try Relaunch
          </Link>
        </nav>
        <details className="md:hidden">
          <summary className="cursor-pointer rounded-full p-2 text-ink-600 marker:hidden">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </summary>
          <div className="absolute left-0 right-0 top-full border-b border-cream-200 bg-cream-50 px-6 py-3">
            <nav className="flex flex-col gap-1">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-lg px-3 py-2 text-sm text-ink-600 hover:bg-cream-100"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="https://www.get-relaunch.com"
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-2 text-xs"
              >
                Try Relaunch
              </Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
