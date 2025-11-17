import { useEffect, useState } from 'react'

export default function Collection() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/products`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setItems([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const skeleton = (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="aspect-[4/5] rounded-xl bg-white/5 border border-white/10 animate-pulse" />
      ))}
    </div>
  )

  return (
    <section id="collection" className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">New Arrivals</h2>
          <a href="#" className="text-sm text-zinc-300 hover:text-white">View all</a>
        </div>

        {loading ? (
          skeleton
        ) : items.length === 0 ? (
          <div className="text-zinc-300">No products yet. Seed the catalog from the test page.</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p) => (
              <article key={p.id} className="group border border-white/10 rounded-xl overflow-hidden bg-white/5">
                {p.image && (
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="text-base font-medium">{p.title}</h3>
                  <p className="text-sm text-zinc-300 mt-1">{p.category}</p>
                  <div className="mt-3 font-semibold">${'{'}p.price?.toFixed ? p.price.toFixed(2) : p.price{'}'}</div>
                  <button className="mt-4 w-full rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white hover:text-black transition-colors">Add to bag</button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
