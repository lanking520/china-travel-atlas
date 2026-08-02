import { Header } from "@/components/Header";
import { ExploreClient } from "@/components/ExploreClient";
import { routes } from "@/content";

export default function HomePage() {
  const heroImage = routes[0]?.coverImage;

  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden">
          {heroImage && (
            <div
              className="absolute inset-0 bg-cover bg-center opacity-[0.12]"
              style={{ backgroundImage: `url(${heroImage})` }}
              aria-hidden
            />
          )}
          <div className="relative mx-auto max-w-5xl px-4 pb-0.5 pt-1.5 sm:px-6 sm:pb-3 sm:pt-8">
            <p className="hidden text-sm font-medium tracking-[0.08em] text-sky-700 sm:block sm:text-base">
              从北京出发 · 慢慢看中国
            </p>
            <h1 className="font-display mt-0.5 hidden text-[1.65rem] font-bold leading-[1.2] text-sky-950 sm:mt-1 sm:block sm:text-4xl">
              爸妈中国旅游地图
            </h1>
            <p className="mt-1 hidden max-w-xl text-base leading-snug text-sky-800/90 sm:mt-2 sm:block sm:text-lg sm:leading-relaxed">
              先浏览全部景点，或用地图选大区；需要时再加季节、行程与主题筛选。
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-10 pt-1 sm:px-6">
          <ExploreClient />
        </section>
      </main>
    </>
  );
}
