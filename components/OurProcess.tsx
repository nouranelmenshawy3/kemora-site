import AnimateIn from './AnimateIn'

const steps = [
  {
    number: '01',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Send Your Design',
    description: 'Share your tech pack, reference images, or detailed specification. No design? Our team can assist.',
  },
  {
    number: '02',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'Pre-Production Sample',
    description: '2–3 week turnaround. A physical sample is shipped to you for approval before we proceed.',
  },
  {
    number: '03',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Bulk Production',
    description: 'After sample approval and deposit, production begins. Typically 3–5 weeks depending on quantity.',
  },
  {
    number: '04',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'Quality Control & Packing',
    description: 'AQL 2.5 final random inspection. Photo report sent to you before shipment. Export-standard carton packing.',
  },
  {
    number: '05',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: 'Shipping to Poland',
    description: 'Sea freight 10–14 days, with full documentation including the EUR.1 certificate for 0% customs duty.',
  },
]

export default function OurProcess() {
  return (
    <section id="process" className="py-24 sm:py-32 bg-primary texture-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn className="text-center mb-16">
          <p className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-3">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Our Production Process
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto leading-relaxed">
            A clear, transparent timeline from your first sketch to goods arriving at your
            warehouse in Poland.
          </p>
        </AnimateIn>

        {/* Desktop: horizontal steps */}
        <div className="hidden lg:block">
          <div className="relative grid grid-cols-5 gap-0">
            {/* Connecting line */}
            <div className="absolute top-[2.4rem] left-[10%] right-[10%] h-px bg-gradient-to-r from-accent via-accent/30 to-accent/10" />

            {steps.map(({ number, icon, title, description }, i) => (
              <AnimateIn key={number} delay={i * 120}>
                <div className="relative flex flex-col items-center text-center px-4">
                  {/* Step circle */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-primary border-2 border-accent flex items-center justify-center text-accent mb-5">
                    {icon}
                  </div>

                  {/* Number */}
                  <span className="text-[10px] font-bold tracking-widest text-accent/60 uppercase mb-2">
                    Step {number}
                  </span>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">{title}</h3>

                  {/* Description */}
                  <p className="text-white/45 text-[13px] leading-relaxed">{description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* Mobile: vertical steps */}
        <div className="lg:hidden space-y-0">
          {steps.map(({ number, icon, title, description }, i) => (
            <AnimateIn key={number} delay={i * 80}>
              <div className="relative flex gap-5 pb-8 last:pb-0">
                {/* Left column: circle + line */}
                <div className="flex flex-col items-center">
                  <div className="w-11 h-11 rounded-full bg-primary border-2 border-accent text-accent flex items-center justify-center flex-shrink-0">
                    {icon}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 mt-2 bg-gradient-to-b from-accent/40 to-accent/10" />
                  )}
                </div>

                {/* Right column: content */}
                <div className="pt-1.5 pb-4">
                  <span className="text-[10px] font-bold tracking-widest text-accent/60 uppercase">
                    Step {number}
                  </span>
                  <h3 className="text-base font-bold text-white mt-1 mb-1.5">{title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* FOB note */}
        <AnimateIn>
          <div className="mt-16 text-center">
            <p className="inline-flex items-center gap-2 text-sm text-white/40 px-6 py-3 rounded-full border border-white/10 bg-white/5">
              <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              We ship <span className="text-white/60 font-semibold">FOB Alexandria</span>.
              EUR.1 certificate included with every shipment for 0% EU customs duty.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
