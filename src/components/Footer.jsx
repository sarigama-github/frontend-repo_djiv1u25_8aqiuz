export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid sm:grid-cols-2 gap-8">
        <div>
          <p className="uppercase tracking-[0.35em] text-xs text-zinc-400">Luxe Parfumerie</p>
          <p className="mt-3 text-sm text-zinc-400">Fine fragrance and beauty essentials. Crafted with intention.</p>
        </div>
        <div className="sm:justify-self-end">
          <p className="text-sm text-zinc-400">© {new Date().getFullYear()} Luxe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
