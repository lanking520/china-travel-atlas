import { Header } from "@/components/Header";
import { ExploreClient } from "@/components/ExploreClient";
import { routes } from "@/content";

export default function HomePage() {
  const heroImage = routes[0]?.coverImage;

  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-b from-sky-100 via-sky-50 to-emerald-50/30">
          {heroImage && (
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: `url(${heroImage})` }}
              aria-hidden
            />
          )}
          <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
            <p className="text-lg font-medium tracking-wide text-sky-700 sm:text-xl">
              china-travel-atlas
            </p>
            <h1 className="mt-2 text-4xl font-bold leading-tight text-sky-950 sm:text-5xl">
              爸妈中国旅游地图
            </h1>
            <p className="mt-4 max-w-2xl text-xl leading-relaxed text-sky-800 sm:text-2xl">
              从北京出发，按季节与节奏挑选慢游路线——字大、好点、少折腾。
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
          <ExploreClient />
        </section>
      </main>
    </>
  );
}
