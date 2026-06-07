import Link from "next/link";
import { LogoMark } from "./Logo";

const LINKEDIN_URL =
  "https://www.linkedin.com/company/backyard-saas-relaunch/about";

/**
 * Footer — keeps the same warm forest plate the hero uses, so the page
 * starts and ends with the same brand temperature.
 */
export function Footer() {
  return (
    <footer className="bg-paper text-cream-100 sprout-tile">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <LogoMark size={42} tone="dark" />
              <div className="leading-tight">
                <div className="text-cream-50 font-bold tracking-tightish">
                  Backyard SaaS
                </div>
                <div className="text-xs text-cream-200/80">
                  Built in the backyard. Made for the real world.
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm text-cream-200/80 leading-relaxed">
              A small studio shipping small, sharp software for problems worth
              solving — starting with the parts of work and life that the big
              SaaS companies don't bother with.
            </p>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-cream-200/70">
              Explore
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link className="hover:text-cream-50" href="/apps">
                  Apps
                </Link>
              </li>
              <li>
                <Link className="hover:text-cream-50" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:text-cream-50" href="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  className="hover:text-cream-50"
                  href="https://www.get-relaunch.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Relaunch ↗
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-cream-200/70">
              Reach us
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  className="hover:text-cream-50"
                  href="mailto:hello@backyardsaas.com"
                >
                  hello@backyardsaas.com
                </a>
              </li>
              <li>Mumbai, India</li>
              <li>
                <a
                  className="hover:text-cream-50"
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-10 border-cream-100/10" />
        <div className="flex flex-col items-start justify-between gap-3 text-xs text-cream-200/60 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Backyard SaaS. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hover:text-cream-50">
              Say hi
            </Link>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cream-50"
            >
              Follow on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
