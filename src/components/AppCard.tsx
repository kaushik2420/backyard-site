import Link from "next/link";
import type { AppEntry } from "@/lib/apps";

/**
 * App marketplace card — used on the home preview + /apps grid.
 *
 * Each card carries:
 *  - an inline illustration on a forest plate (keeps the brand temp
 *    consistent even on the cream body sections)
 *  - status chip (Live / In progress / Planned)
 *  - audience line so the visitor instantly knows whether it's for them
 *  - clickable through to the app's own URL if live, otherwise an
 *    intent-only card with "Coming soon".
 */
export function AppCard({ app }: { app: AppEntry }) {
  const isLive = app.status === "live";
  const wrapperBase =
    "group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-cream-200 transition-shadow";
  const wrapper = isLive
    ? `${wrapperBase} hover:shadow-cardHover`
    : `${wrapperBase}`;

  const body = (
    <>
      <Illustration name={app.illustration} />
      <div className="flex-1 p-6">
        <div className="flex items-center gap-2">
          <StatusChip status={app.status} />
          <span className="chip">{app.category}</span>
        </div>
        <h3 className="mt-3 text-xl font-bold tracking-tightish text-ink-900">
          {app.name}
        </h3>
        <p className="mt-1 text-sm text-forest-700 font-medium">
          {app.shortPitch}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink-600">
          {app.description}
        </p>
      </div>
      <div className="flex items-center justify-between gap-3 border-t border-cream-200 bg-cream-50 px-6 py-3 text-sm">
        <span className="text-ink-400">{app.audience}</span>
        {isLive && app.href ? (
          <span className="font-semibold text-forest-900 transition-transform group-hover:translate-x-0.5">
            Visit →
          </span>
        ) : (
          <span className="font-semibold text-ink-400">Coming soon</span>
        )}
      </div>
    </>
  );

  if (isLive && app.href) {
    return (
      <Link href={app.href} target="_blank" rel="noreferrer" className={wrapper}>
        {body}
      </Link>
    );
  }
  return <div className={wrapper}>{body}</div>;
}

function StatusChip({ status }: { status: AppEntry["status"] }) {
  if (status === "live") return <span className="chip-live">● Live</span>;
  if (status === "in-progress")
    return <span className="chip-progress">● In progress</span>;
  return <span className="chip">○ Planned</span>;
}

/** Inline illustrations — no external image deps. */
function Illustration({ name }: { name: AppEntry["illustration"] }) {
  if (name === "trellis") {
    return (
      <svg
        viewBox="0 0 600 220"
        className="block h-44 w-full bg-paper sprout-tile"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* A trellis silhouette: three uprights crossed by a few lattice
            bars, with two small leaves curling at the top. Reads as
            "structure that holds growing things". */}
        <defs>
          <linearGradient id="t-grad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#F0E5CE" stopOpacity="0.95" />
            <stop offset="1" stopColor="#F0E5CE" stopOpacity="0.75" />
          </linearGradient>
        </defs>
        {[180, 300, 420].map((x) => (
          <line
            key={x}
            x1={x}
            y1="40"
            x2={x}
            y2="190"
            stroke="url(#t-grad)"
            strokeWidth="5"
            strokeLinecap="round"
          />
        ))}
        {[80, 120, 160].map((y) => (
          <line
            key={y}
            x1="160"
            y1={y}
            x2="440"
            y2={y}
            stroke="#F0E5CE"
            strokeOpacity="0.6"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        ))}
        {/* Two leaves curling around the leftmost upright */}
        <path
          d="M180 60 Q150 55 132 38 Q156 38 180 50 Z"
          fill="#F0E5CE"
          fillOpacity="0.95"
        />
        <path
          d="M420 90 Q450 86 470 70 Q448 68 422 80 Z"
          fill="#F0E5CE"
          fillOpacity="0.9"
        />
        {/* Ground line */}
        <line
          x1="120"
          y1="200"
          x2="480"
          y2="200"
          stroke="#143020"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  // Default: sprout, like the logo mark but stretched horizontally as a
  // banner so it doesn't compete with the wordmark elsewhere.
  return (
    <svg
      viewBox="0 0 600 220"
      className="block h-44 w-full bg-paper sprout-tile"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="300"
        y1="190"
        x2="300"
        y2="80"
        stroke="#F0E5CE"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M300 130 Q260 116 232 84 Q272 86 300 108 Z"
        fill="#F0E5CE"
      />
      <path
        d="M300 110 Q344 96 374 64 Q330 64 300 88 Z"
        fill="#F0E5CE"
      />
      <line
        x1="252"
        y1="198"
        x2="348"
        y2="198"
        stroke="#143020"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
