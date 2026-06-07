import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Backyard SaaS — Built in the backyard. Made for the real world.",
    template: "%s — Backyard SaaS",
  },
  description:
    "Backyard SaaS picks up real problems faced by tech and non-tech workers and ships small, focused tools to solve them. Home of Relaunch, Trellis, and more.",
  keywords: [
    "Backyard SaaS",
    "Relaunch",
    "Trellis",
    "indie software",
    "Mumbai",
    "small SaaS",
  ],
  openGraph: {
    title: "Backyard SaaS",
    description:
      "Small, sharp software for problems worth solving. Built in the backyard. Made for the real world.",
    url: SITE_URL,
    siteName: "Backyard SaaS",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "Backyard SaaS" },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Backyard SaaS",
    description:
      "Built in the backyard. Made for the real world. Home of Relaunch, Trellis, and more.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#1A3826",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
