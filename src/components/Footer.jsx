import useScrollReveal from '../hooks/useScrollReveal'

export default function Footer() {
  useScrollReveal()
  return (
    <footer id="contact" className="bg-black text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid sm:grid-cols-2 gap-8">
        <div data-reveal>
          <p className="uppercase tracking-[0.35em] text-xs text-zinc-400">Luxe Parfumerie</p>
          <p className="mt-3 text-sm text-zinc-400">Fine fragrance and beauty essentials. Crafted with intention.</p>
        </div>
        <div className="sm:justify-self-end" data-reveal data-reveal-delay="100">
          <p className="text-sm text-zinc-400">© {new Date().getFullYear()} Luxe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
