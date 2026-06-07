import type { Config } from "tailwindcss";

/**
 * Backyard SaaS palette — locked to the logo system so the site, the
 * lockups, and any future app marketing share the same colour story.
 *
 *   forest-900  deep canopy, used for hero plates
 *   forest-700  mid-tone gradient + heading accent
 *   forest-500  underline/CTA accent on cream
 *   cream-50    primary background for body sections
 *   cream-200   muted card background, soft borders
 *   ink-900     primary text on cream
 *   ink-600     secondary text
 *   ink-400     tertiary / captions
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          900: "#1A3826",
          700: "#2C5239",
          500: "#3F6E4D",
          300: "#7FA28C",
        },
        cream: {
          50: "#FAF5E9",
          100: "#F4ECD8",
          200: "#E8DFC7",
          300: "#D9CDAE",
        },
        ink: {
          900: "#1C2220",
          600: "#58665C",
          400: "#8C998F",
        },
        accent: {
          DEFAULT: "#C8DAC4",
        },
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        serif: [
          "ui-serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "serif",
        ],
      },
      letterSpacing: {
        tightish: "-0.012em",
      },
      boxShadow: {
        card: "0 1px 2px rgba(28,34,32,0.05), 0 8px 24px -12px rgba(28,34,32,0.10)",
        cardHover:
          "0 1px 2px rgba(28,34,32,0.06), 0 16px 40px -16px rgba(28,34,32,0.18)",
      },
    },
  },
  plugins: [],
};
export default config;
