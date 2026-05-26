import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async rewrites() {
    return [
      {
        // Decap CMS fetches config.yml relative to /admin (no trailing slash)
        // which resolves to /config.yml — rewrite it to the correct path
        source: "/config.yml",
        destination: "/admin/config.yml",
      },
    ];
  },
};

export default nextConfig;
