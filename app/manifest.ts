import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "中国旅游地图",
    short_name: "中国旅游地图",
    description: "中国旅行路线图鉴；兼顾北京家与郑州家出发",
    start_url: `${basePath}/`,
    display: "standalone",
    background_color: "#f0f9ff",
    theme_color: "#0369a1",
    lang: "zh-CN",
    icons: [
      {
        src: `${basePath}/icon-192.svg`,
        sizes: "192x192",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: `${basePath}/icon-512.svg`,
        sizes: "512x512",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
