import ProofStrip from './ProofStrip.jsx'

export default function Hero() {
  return (
    <section id="top" className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <h1 className="font-display text-4xl leading-tight text-neutral-900 sm:text-5xl">
            A Leading Full-Service Law Firm in Lusaka, Zambia
          </h1>
          <p className="mt-5 max-w-xl text-lg text-neutral-900/70">
            Trusted institutional and corporate counsel since 1994 — led by State Counsel,
            connected to a global legal network.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact-us"
              className="rounded-sm bg-primary px-7 py-3.5 text-sm font-semibold text-white hover:bg-primary-dark"
            >
              Request a Consultation
            </a>
            <a
              href="#practice-areas"
              className="rounded-sm border border-neutral-900/20 px-7 py-3.5 text-sm font-semibold text-neutral-900 hover:border-primary hover:text-primary"
            >
              View Practice Areas
            </a>
          </div>
        </div>

        <div className="aspect-[4/3] w-full overflow-hidden rounded-sm bg-neutral-900">
          <img
            src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=1200&q=80"
            alt="Simeza Sangwa & Associates boardroom"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <ProofStrip />
    </section>
  )
}
