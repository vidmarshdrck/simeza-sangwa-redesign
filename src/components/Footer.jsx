const LINKS = ['About', 'Practice Areas', 'Lawyers', 'News & Insights', 'Portfolio', 'Contact Us']

export default function Footer() {
  return (
    <footer className="bg-neutral-900 py-10 text-white/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-white">Simeza Sangwa &amp; Associates</p>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {LINKS.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="hover:text-white">
              {l}
            </a>
          ))}
        </nav>
        <p className="text-xs">&copy; {new Date().getFullYear()} Simeza Sangwa &amp; Associates. Lusaka, Zambia.</p>
      </div>
    </footer>
  )
}
