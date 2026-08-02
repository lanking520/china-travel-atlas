import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "爸妈中国旅游地图",
    short_name: "爸妈旅游地图",
    description: "为北京父母设计的中国旅行路线地图",
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
