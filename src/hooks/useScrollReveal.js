import { useEffect } from 'react'

/**
 * Adds reveal-on-scroll animations to elements with data-reveal attribute.
 * Usage: add data-reveal and optional data-reveal-delay (ms) to any element.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('[data-reveal]'))
    if (els.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target
          if (entry.isIntersecting) {
            target.classList.add('reveal-in')
            target.classList.remove('reveal-hide')
          } else {
            target.classList.add('reveal-hide')
            target.classList.remove('reveal-in')
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    )

    els.forEach((el) => {
      const delay = el.getAttribute('data-reveal-delay') || '0'
      el.style.setProperty('--reveal-delay', `${delay}ms`)
      el.classList.add('reveal-base', 'reveal-hide')
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}
