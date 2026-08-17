import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return [
      // ─── Home page ────────────────────────────────────────────────────────
      // Statically generated — let the Vercel Edge CDN cache it for 1 day and
      // serve stale for up to 7 days while revalidating in the background.
      // Browsers also cache for 1 hour so back-navigation is instant.
      {
        source: "/",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
          },
        ],
      },

      // ─── Public project screenshots ───────────────────────────────────────
      // These images are static assets that never change in-place.
      // 1-year immutable caching — zero round-trips on repeat visits.
      {
        source: "/projects/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },

      // ─── MCP API route ────────────────────────────────────────────────────
      // Must never be cached — each MCP request needs a fresh server response.
      {
        source: "/api/mcp",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
