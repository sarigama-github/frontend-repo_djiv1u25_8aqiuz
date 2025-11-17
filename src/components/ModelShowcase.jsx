import Spline from '@splinetool/react-spline'

export default function ModelShowcase() {
  const scene = import.meta.env.VITE_SPLINE_MODEL_SCENE || 'https://prod.spline.design/EQgEIs2r5cMbWroZ/scene.splinecode'

  return (
    <section id="model" className="relative w-full bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="uppercase tracking-[0.35em] text-xs text-zinc-400">3D Showcase</p>
          <h2 className="mt-4 text-3xl sm:text-5xl font-semibold leading-tight">Sculpted minimalism</h2>
          <p className="mt-6 text-zinc-300 max-w-xl">
            Explore our hero bottle in real-time 3D. Rotate, pan, and immerse yourself in the subtle details that define our design language.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#collection" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-zinc-200 transition-colors">Shop now</a>
            <a href="#about" className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium hover:bg-white/10 transition-colors">Learn more</a>
          </div>
        </div>
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-b from-zinc-900 to-black">
          <Spline scene={scene} style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
