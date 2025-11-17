export default function Features() {
  const features = [
    {
      title: 'Scent Architecture',
      desc: 'Layered notes engineered for longevity and sillage.',
    },
    {
      title: 'Clean Ingredients',
      desc: 'Formulas free from parabens, phthalates, and cruelty.',
    },
    {
      title: 'Modern Rituals',
      desc: 'Minimalist beauty for everyday luxury.',
    },
  ]

  return (
    <section id="about" className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="border border-white/10 rounded-xl p-6 bg-white/5">
              <h3 className="text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
