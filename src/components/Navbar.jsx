import { useEffect, useState } from 'react'
import { Menu, Search, ShoppingBag } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Navbar() {
  useScrollReveal()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-20 border-b border-white/10 transition-colors ${scrolled ? 'bg-black/70 backdrop-blur' : 'bg-transparent'}`} data-reveal>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16 text-white">
        <div className="flex items-center gap-3">
          <button className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10" aria-label="menu">
            <Menu size={18} />
          </button>
          <span className="text-sm uppercase tracking-[0.35em]">Luxe</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
          <a href="#collection" className="hover:text-white">Collection</a>
          <a href="#beauty" className="hover:text-white">Beauty</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10" aria-label="search">
            <Search size={18} />
          </button>
          <button className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10" aria-label="cart">
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}
