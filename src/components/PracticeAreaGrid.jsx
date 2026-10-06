import { Landmark, Building2, Scale, Briefcase, ShieldCheck, Globe2 } from 'lucide-react'

const AREAS = [
  { icon: Landmark, title: 'Banking & Finance', blurb: 'Advising lenders and borrowers on complex financing transactions.' },
  { icon: Building2, title: 'Corporate & Commercial', blurb: 'Structuring, governance, and transactional support for growing businesses.' },
  { icon: Scale, title: 'Litigation & Dispute Resolution', blurb: 'Representing clients before Zambian courts and arbitral tribunals.' },
  { icon: Briefcase, title: 'Employment Law', blurb: 'Advising employers on compliance, contracts, and workplace disputes.' },
  { icon: ShieldCheck, title: 'Regulatory & Compliance', blurb: 'Navigating licensing and regulatory regimes across sectors.' },
  { icon: Globe2, title: 'Cross-Border Transactions', blurb: 'Supporting international clients through the TAG Law network.' },
]

export default function PracticeAreaGrid() {
  return (
    <section id="practice-areas" className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="font-display text-3xl text-neutral-900">Practice Areas</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map(({ icon: Icon, title, blurb }) => (
            <div key={title} className="rounded-sm border border-neutral-200 bg-white p-6">
              <Icon className="text-primary" size={28} strokeWidth={1.5} />
              <h3 className="font-display mt-4 text-lg text-neutral-900">{title}</h3>
              <p className="mt-2 text-sm text-neutral-900/65">{blurb}</p>
              <a href="#contact-us" className="mt-4 inline-block text-sm font-semibold text-primary hover:text-primary-dark">
                Learn more &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
