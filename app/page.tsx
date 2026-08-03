import { Header } from "@/components/Header";
import { ExploreClient } from "@/components/ExploreClient";
import { catalogRoutes } from "@/lib/explore-catalog";

export default function HomePage() {
  const heroImage = catalogRoutes[0]?.coverImage;

  return (
    <>
      <Header />
      <main>
        {/* Desktop hero only — mobile brand lives in Header「中国旅游地图」 */}
        <section className="relative hidden overflow-hidden sm:block">
          {heroImage && (
            <div
              className="absolute inset-0 bg-cover bg-center opacity-[0.12]"
              style={{ backgroundImage: `url(${heroImage})` }}
              aria-hidden
            />
          )}
          <div className="relative mx-auto max-w-5xl px-6 pb-3 pt-8">
            <p className="text-base font-medium tracking-[0.08em] text-sky-700">
              从北京出发 · 慢慢看中国
            </p>
            <h1 className="font-display mt-1 text-4xl font-bold leading-[1.2] text-sky-950">
              中国旅游地图
            </h1>
            <p className="mt-2 max-w-xl text-lg leading-relaxed text-sky-800/90">
              先浏览全部景点；需要时用地区、季节、长短与主题筛选收窄。
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-8 pt-1.5 sm:px-6 sm:pb-10 sm:pt-2">
          <ExploreClient />
        </section>
      </main>
    </>
  );
}
