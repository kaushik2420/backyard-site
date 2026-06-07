/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // We render OG + favicon as static files in /public; no remote images.
  images: { unoptimized: true },
};

export default nextConfig;
