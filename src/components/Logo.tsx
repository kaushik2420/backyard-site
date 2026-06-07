/**
 * Inline-SVG Backyard SaaS sprout mark. Uses the same geometry as the
 * PIL renderer (see /outputs/backyard_logo.py) so it stays consistent
 * with the printed/marketing logo set, but ships as crisp SVG so it
 * scales without raster blur.
 *
 * Props let the mark sit on cream (`tone="dark"`) or on green
 * (`tone="light"`) without re-mixing colours each time.
 */
type Tone = "dark" | "light";

export function LogoMark({
  size = 36,
  tone = "dark",
  withPlate = true,
  className,
}: {
  size?: number;
  tone?: Tone;
  withPlate?: boolean;
  className?: string;
}) {
  const plate = tone === "dark" ? "url(#bg-dark)" : "url(#bg-light)";
  const stroke = tone === "dark" ? "#F0E5CE" : "#1A3826";
  const fill = tone === "dark" ? "#F0E5CE" : "#1A3826";
  const horizon = tone === "dark" ? "#143020" : "#3F6E4D";
  const radius = size * 0.234;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-label="Backyard SaaS"
      className={className}
    >
      <defs>
        <linearGradient id="bg-dark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1A3826" />
          <stop offset="1" stopColor="#2C5239" />
        </linearGradient>
        <linearGradient id="bg-light" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F4ECD8" />
          <stop offset="1" stopColor="#E8DFC7" />
        </linearGradient>
      </defs>
      {withPlate && (
        <rect
          x="0"
          y="0"
          width="100"
          height="100"
          rx={(radius / size) * 100}
          ry={(radius / size) * 100}
          fill={plate}
        />
      )}
      {/* stem */}
      <line
        x1="50"
        y1="78"
        x2="50"
        y2="32"
        stroke={stroke}
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      {/* left leaf */}
      <path
        d="M50 56 Q34 50 25 36 Q40 36 50 45 Z"
        fill={fill}
        stroke={fill}
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
      {/* right leaf */}
      <path
        d="M50 47 Q66 41 75 25 Q60 26 50 38 Z"
        fill={fill}
        stroke={fill}
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
      {/* horizon */}
      <line
        x1="32"
        y1="82"
        x2="68"
        y2="82"
        stroke={horizon}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LogoLockup({
  tone = "dark",
  size = 36,
  className,
}: {
  tone?: Tone;
  size?: number;
  className?: string;
}) {
  const textTone = tone === "dark" ? "text-cream-50" : "text-forest-900";
  return (
    <div className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      <LogoMark size={size} tone={tone} />
      <div className="leading-tight">
        <div
          className={`font-bold text-[1.05rem] tracking-tightish ${textTone}`}
        >
          Backyard <span className="font-semibold">SaaS</span>
        </div>
      </div>
    </div>
  );
}
