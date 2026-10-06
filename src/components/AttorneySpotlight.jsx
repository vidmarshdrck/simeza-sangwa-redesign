const ATTORNEYS = [
  {
    name: 'Robert Simeza SC',
    title: 'Founding Partner, State Counsel',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'John Sangwa SC',
    title: 'Founding Partner, State Counsel',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  },
]

export default function AttorneySpotlight() {
  return (
    <section id="lawyers" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="font-display text-3xl text-neutral-900">Led by State Counsel</h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {ATTORNEYS.map((a) => (
            <div key={a.name} className="flex items-center gap-5 rounded-sm border border-neutral-200 p-6">
              <img src={a.photo} alt={a.name} className="h-20 w-20 rounded-full object-cover" />
              <div>
                <p className="font-display text-lg text-neutral-900">{a.name}</p>
                <p className="text-sm text-neutral-900/65">{a.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
