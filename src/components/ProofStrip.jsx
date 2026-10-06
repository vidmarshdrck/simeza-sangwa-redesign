const ITEMS = ['Est. 1994', 'State Counsel-led', 'TAG Law Global Network']

export default function ProofStrip() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 border-y border-neutral-200 bg-neutral-50 px-5 py-4 text-sm font-medium tracking-wide text-neutral-900/70">
      {ITEMS.map((item, i) => (
        <span key={item} className="flex items-center gap-8">
          {item}
          {i < ITEMS.length - 1 && <span className="hidden h-1 w-1 rounded-full bg-primary sm:block" />}
        </span>
      ))}
    </div>
  )
}
