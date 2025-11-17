import useScrollReveal from '../hooks/useScrollReveal'

export default function Section({ id, className = '', children }) {
  useScrollReveal()
  return (
    <section id={id} className={`[&_*[data-reveal]]:will-change-transform ${className}`}>
      {children}
    </section>
  )
}
