import AnimateIn from './AnimateIn'

const reasons = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: '0% Customs Duty',
    headline: 'Save 12% on every shipment',
    body: 'Under the EU–Egypt Free Trade Agreement, your brand pays zero import duty when goods arrive in the EU. That\'s a 12% cost advantage compared to Asian suppliers — on every order, every time.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V12m6 9V12" />
      </svg>
    ),
    label: '14-Day Shipping',
    headline: 'Alexandria to Gdańsk in two weeks',
    body: 'Sea freight from our port takes just 10–14 days to reach Poland — not 40+ like Asia. Faster restocks, less safety stock, and more predictable lead times for your planning.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Poland-Based Manager',
    headline: 'Your contact is in the same timezone',
    body: 'Youssif, our co-founder, lives and works in Poland. You get face-to-face meetings, same-timezone WhatsApp, and European standards of communication — without paying European factory prices.',
  },
]

export default function WhyKemora() {
  return (
    <section id="why" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn className="text-center mb-16">
          <p className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-3">Our Advantages</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Why Choose Kemora?
          </h2>
          <p className="mt-4 text-k-muted max-w-xl mx-auto leading-relaxed">
            We combine the cost advantages of Egyptian manufacturing with the service standards
            and communication speed of a European partner.
          </p>
        </AnimateIn>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map(({ icon, label, headline, body }, i) => (
            <AnimateIn key={label} delay={i * 100}>
              <div className="group h-full p-8 rounded-2xl border border-k-border hover:border-accent/40 hover:shadow-xl hover:shadow-black/5 transition-all duration-300 bg-white">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-sand flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {icon}
                </div>

                {/* Label pill */}
                <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-k-muted mb-2">
                  {label}
                </span>

                {/* Headline */}
                <h3 className="text-xl font-bold text-primary mb-3 leading-snug">{headline}</h3>

                {/* Body */}
                <p className="text-k-muted leading-relaxed text-[15px]">{body}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
