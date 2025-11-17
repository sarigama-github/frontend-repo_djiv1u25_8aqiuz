import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EQgEIs2r5cMbWroZ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16">
        <p className="uppercase tracking-[0.35em] text-xs text-zinc-300">Luxe Parfumerie</p>
        <h1 className="mt-4 text-4xl sm:text-6xl font-semibold leading-[1.1]">
          A world of scent and beauty,
          <br className="hidden sm:block" />
          refined in black & white
        </h1>
        <p className="mt-6 text-zinc-300 max-w-2xl">
          Discover rare perfumes and modern beauty essentials curated for those who appreciate quiet luxury.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#collection" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-zinc-200 transition-colors">
            Shop Collection
          </a>
          <a href="#about" className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium hover:bg-white/10 transition-colors">
            Our Story
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
    </section>
  )
}
