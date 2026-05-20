import AnimateIn from './AnimateIn'

const items = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'EU REACH Compliant Materials',
    body: 'All fabrics and trims meet EU chemical safety standards. Test reports are available on request for every material type we use.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'EUR.1 Movement Certificate',
    body: 'We provide this document with every shipment so you clear Polish customs at 0% import duty — every time, without exception.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: 'AQL 2.5 Quality Assurance',
    body: 'Every bulk order goes through a final random inspection following AQL 2.5 protocol. You receive a full photo report before we ship.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Ethical Manufacturing',
    body: 'Our partner factories follow a strict code of conduct: fair wages, no child labor, and safe working conditions. ISO 9001 certification in progress.',
  },
]

export default function TrustCompliance() {
  return (
    <section id="trust" className="py-24 sm:py-32 bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn className="text-center mb-16">
          <p className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-3">Certifications</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Trust &amp; Compliance
          </h2>
          <p className="mt-4 text-k-muted max-w-xl mx-auto leading-relaxed">
            Every detail of our operation is designed to meet European standards — from
            the thread we use to the paperwork we provide.
          </p>
        </AnimateIn>

        {/* Items grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {items.map(({ icon, title, body }, i) => (
            <AnimateIn key={title} delay={i * 100}>
              <div className="flex gap-5 p-6 bg-white rounded-xl border border-k-border hover:border-accent/30 hover:shadow-md transition-all duration-300">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                  {icon}
                </div>
                {/* Content */}
                <div>
                  <h3 className="font-bold text-primary mb-1.5">{title}</h3>
                  <p className="text-k-muted text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Reassurance bar */}
        <AnimateIn>
          <div className="rounded-2xl bg-primary px-8 py-8 text-center">
            <p className="text-white/60 text-sm mb-2">
              Trusted by growing European fashion brands.
            </p>
            <p className="text-white font-semibold text-lg max-w-2xl mx-auto leading-relaxed">
              "We are a family business that delivers European-grade service
              with Egyptian manufacturing value."
            </p>
            <p className="text-accent text-sm font-medium mt-4">— Nouran &amp; Youssif Elmenshawy, Co-Founders</p>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
