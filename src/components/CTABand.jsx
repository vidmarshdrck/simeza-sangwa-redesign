export default function CTABand() {
  return (
    <section id="contact-us" className="bg-primary py-16 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl">Speak to a lawyer today</h2>
          <a href="tel:+260211227574" className="mt-2 block text-lg font-medium text-white/90">
            +260 211 227574
          </a>
        </div>
        <a
          href="mailto:info@simezasangwa.com"
          className="rounded-sm bg-white px-7 py-3.5 text-sm font-semibold text-primary hover:bg-neutral-100"
        >
          Request a Consultation
        </a>
      </div>
    </section>
  )
}
