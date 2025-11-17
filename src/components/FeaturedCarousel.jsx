import { useEffect, useRef, useState, useMemo } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

export default function FeaturedCarousel() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const scrollerRef = useRef(null)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/products`)
        const data = await res.json()
        setItems(Array.isArray(data) ? data.slice(0, 8) : [])
      } catch (e) {
        setItems([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const scrollByCards = (dir) => {
    const node = scrollerRef.current
    if (!node) return
    const card = node.querySelector('[data-card]')
    const step = card ? card.clientWidth + 24 : node.clientWidth * 0.8
    node.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  const skeleton = (
    <div className="flex gap-6 overflow-hidden">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="min-w-[280px] sm:min-w-[360px] lg:min-w-[420px] aspect-[5/6] rounded-2xl bg-white/5 border border-white/10 animate-pulse" />
      ))}
    </div>
  )

  return (
    <section className="relative w-full bg-black text-white py-12 sm:py-16 overflow-hidden">
      {/* Subtle backdrop accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="uppercase tracking-[0.35em] text-xs text-zinc-400">Featured</p>
            <h1 className="mt-3 text-3xl sm:text-5xl font-semibold leading-tight">Essential Picks</h1>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button aria-label="Previous" onClick={() => scrollByCards(-1)} className="h-10 w-10 grid place-items-center rounded-full border border-white/15 hover:bg-white hover:text-black transition-colors">
              <ChevronLeft size={18} />
            </button>
            <button aria-label="Next" onClick={() => scrollByCards(1)} className="h-10 w-10 grid place-items-center rounded-full border border-white/15 hover:bg-white hover:text-black transition-colors">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="relative">
          {/* Mobile arrows overlay */}
          <div className="sm:hidden absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
            <button onClick={() => scrollByCards(-1)} className="pointer-events-auto ml-2 h-8 w-8 grid place-items-center rounded-full bg-black/60 border border-white/15">
              <ChevronLeft size={16} />
            </button>
            <button onClick={() => scrollByCards(1)} className="pointer-events-auto mr-2 h-8 w-8 grid place-items-center rounded-full bg-black/60 border border-white/15">
              <ChevronRight size={16} />
            </button>
          </div>

          <div
            ref={scrollerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-px-6 pb-2 no-scrollbar"
          >
            {loading ? (
              skeleton
            ) : items.length === 0 ? (
              <div className="text-zinc-300">No featured products yet. Seed the catalog from the test page.</div>
            ) : (
              items.map((p, idx) => (
                <article
                  key={p.id || idx}
                  data-card
                  className="group min-w-[280px] sm:min-w-[360px] lg:min-w-[420px] snap-start"
                >
                  <div className="relative aspect-[5/6] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                    {p.image && (
                      <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    )}
                    <div className="absolute inset-x-4 bottom-4 rounded-xl backdrop-blur-md bg-black/40 border border-white/10 p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-medium line-clamp-1">{p.title}</h3>
                        <span className="text-sm font-semibold">${p.price?.toFixed ? p.price.toFixed(2) : p.price}</span>
                      </div>
                      <div className="mt-1 flex items-center gap-2 text-xs text-zinc-300">
                        <Star size={14} className="text-white" />
                        <span>{p.category}</span>
                      </div>
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        <button className="rounded-full border border-white/20 px-3 py-1.5 text-xs hover:bg-white hover:text-black transition-colors">Add to bag</button>
                        <a href="#collection" className="rounded-full border border-white/20 px-3 py-1.5 text-center text-xs hover:bg-white/10 transition-colors">View details</a>
                      </div>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
