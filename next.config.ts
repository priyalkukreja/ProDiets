import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow serving the static HTML from public/
  async headers() {
    return [
      {
        source: "/prodiets-app.html",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Content-Security-Policy", value: "frame-ancestors 'self'" },
        ],
      },
    ];
  },
  // Future: enable React strict mode
  reactStrictMode: true,
};

export default nextConfig;
