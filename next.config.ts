import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/china-travel-atlas" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  // Dev-only route indicator sits bottom-left and can intercept clicks on
  // Explore's bottom sheets during Playwright verification; never renders
  // in the static export users see.
  devIndicators: false,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "live.staticflickr.com",
      },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
