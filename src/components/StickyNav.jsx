import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const LINKS = ['About', 'Practice Areas', 'Lawyers', 'News & Insights', 'Portfolio', 'Contact Us']

export default function StickyNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow ${
        scrolled ? 'shadow-md' : 'shadow-none border-b border-neutral-200'
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all ${
          scrolled ? 'py-2' : 'py-4'
        }`}
      >
        <a href="#top" className="font-display text-xl font-semibold text-primary">
          Simeza Sangwa &amp; Associates
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              className="text-sm font-medium tracking-wide text-neutral-900/80 hover:text-primary"
            >
              {label.toUpperCase()}
            </a>
          ))}
          <a
            href="#contact-us"
            className="rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark"
          >
            Request a Consultation
          </a>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="#contact-us"
            className="rounded-sm bg-primary px-4 py-2 text-xs font-semibold text-white hover:bg-primary-dark"
          >
            Request a Consultation
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="text-neutral-900"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-neutral-200 bg-white px-5 py-4 lg:hidden">
          {LINKS.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              onClick={() => setOpen(false)}
              className="py-3 text-sm font-medium text-neutral-900/80 hover:text-primary"
            >
              {label.toUpperCase()}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
