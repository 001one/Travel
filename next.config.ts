import type { NextConfig } from "next";

const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // still catch-all
      },
    ],
    dangerouslyAllowSVG: true, // optional, for SVGs
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
} satisfies NextConfig;

export default nextConfig;
