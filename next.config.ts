import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Sitio 100 % estático — compatible con Cloudflare Pages (sin Worker Next) */
  output: "export",
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
