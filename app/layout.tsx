import type { Metadata, Viewport } from "next";
import { Noto_Sans_SC, Noto_Serif_SC } from "next/font/google";
import { BottomNav } from "@/components/BottomNav";
import { PwaRegister } from "@/components/PwaRegister";
import "./globals.css";

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-sc",
  display: "swap",
});

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-noto-serif-sc",
  display: "swap",
});

export const metadata: Metadata = {
  title: "爸妈中国旅游地图 | china-travel-atlas",
  description:
    "为北京父母设计的中国旅行地图：大字易读、按地区季节筛选、慢游快览分明。",
  appleWebApp: {
    capable: true,
    title: "爸妈旅游地图",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  themeColor: "#0369a1",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${notoSansSC.variable} ${notoSerifSC.variable} h-full`}
    >
      <body className="min-h-full font-sans text-sky-950 antialiased">
        <PwaRegister />
        <div className="pb-[calc(2.85rem+env(safe-area-inset-bottom,0px))] sm:pb-0">
          {children}
        </div>
        <BottomNav />
      </body>
    </html>
  );
}
