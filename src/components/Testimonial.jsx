const QUOTES = [
  {
    quote:
      'Simeza Sangwa guided our transaction from term sheet to close without a single surprise — precise, responsive, and commercially sharp.',
    name: 'Managing Director',
    role: 'Manufacturing Sector Client',
  },
  {
    quote:
      'Their litigation team represented our interests with a command of the facts and the law that gave us real confidence in the outcome.',
    name: 'General Counsel',
    role: 'Financial Services Client',
  },
]

export default function Testimonial() {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-5xl px-5">
        <h2 className="font-display text-3xl text-neutral-900">What Clients Say</h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {QUOTES.map((q) => (
            <blockquote key={q.name} className="rounded-sm border border-neutral-200 bg-white p-7">
              <p className="text-neutral-900/80">&ldquo;{q.quote}&rdquo;</p>
              <footer className="mt-4 text-sm font-semibold text-neutral-900">
                {q.name}
                <span className="block font-normal text-neutral-900/55">{q.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
