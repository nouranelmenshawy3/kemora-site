import AnimateIn from './AnimateIn'

const categories = [
  {
    label: 'T-Shirts',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 16 L12 8 L19 13 C20 13.5 22 14 24 14 C26 14 28 13.5 29 13 L36 8 L44 16 L38 21 L38 40 L10 40 L10 21 Z" />
      </svg>
    ),
    note: 'Crew neck, V-neck, oversized, fitted',
  },
  {
    label: 'Hoodies & Sweatshirts',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 18 L14 8 C16 6 20 6 24 4 C28 6 32 6 34 8 L42 18 L36 22 L36 40 L12 40 L12 22 Z" />
        <path d="M17 40 L17 35 C17 32 31 32 31 35 L31 40" />
        <path d="M14 8 L18 12 L24 10 L30 12 L34 8" />
      </svg>
    ),
    note: 'Pullover, zip-up, fleece, French terry',
  },
  {
    label: 'Polo Shirts',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 16 L14 8 L20 12 L24 10 L28 12 L34 8 L42 16 L36 20 L36 40 L12 40 L12 20 Z" />
        <path d="M20 12 L20 20 C20 22 28 22 28 20 L28 12" />
        <line x1="22" y1="14" x2="22" y2="20" />
      </svg>
    ),
    note: 'Piqué, performance, long-sleeve',
  },
  {
    label: 'Denim',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 8 L38 8 L36 22 L30 22 L24 16 L18 22 L12 22 Z" />
        <path d="M12 22 L10 44 L20 44 L24 32 L28 44 L38 44 L36 22" />
      </svg>
    ),
    note: 'Jeans, denim jackets, shorts',
  },
  {
    label: 'Workwear & Uniforms',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 16 L14 8 L18 12 L24 10 L30 12 L34 8 L44 16 L38 22 L38 44 L10 44 L10 22 Z" />
        <path d="M18 12 L18 18 M30 12 L30 18" />
        <path d="M10 28 L38 28" />
        <line x1="24" y1="10" x2="24" y2="44" />
      </svg>
    ),
    note: 'Hi-vis, corporate, promotional',
  },
  {
    label: 'Bags & Accessories',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="18" width="32" height="24" rx="2" />
        <path d="M17 18 L17 13 C17 9 31 9 31 13 L31 18" />
        <line x1="8" y1="26" x2="40" y2="26" />
      </svg>
    ),
    note: 'Tote bags, backpacks, caps',
  },
]

export default function WhatWeProduce() {
  return (
    <section id="products" className="py-24 sm:py-32 bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn className="text-center mb-16">
          <p className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-3">Our Range</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            What We Produce
          </h2>
          <p className="mt-4 text-k-muted max-w-xl mx-auto leading-relaxed">
            From essentials to outerwear — private label manufacturing across the full
            garment spectrum, for brands of every size.
          </p>
        </AnimateIn>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {categories.map(({ label, icon, note }, i) => (
            <AnimateIn key={label} delay={i * 70}>
              <div className="group bg-white rounded-xl p-6 border border-k-border hover:border-accent/40 hover:shadow-lg hover:shadow-black/5 transition-all duration-300 text-center">
                <div className="flex justify-center text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                  {icon}
                </div>
                <h3 className="font-bold text-primary text-base mb-1">{label}</h3>
                <p className="text-k-muted text-xs leading-relaxed">{note}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Fabric note */}
        <AnimateIn>
          <div className="text-center max-w-2xl mx-auto p-6 rounded-xl bg-white border border-k-border">
            <p className="text-sm text-k-muted leading-relaxed">
              <span className="font-semibold text-primary">Full fabric range:</span> cotton combed,
              cotton-poly blends, polyester, fleece, French terry, jersey, denim, and more.
              All materials are sourced under{' '}
              <span className="font-semibold text-primary">EU REACH compliance standards</span>.
              Flexible MOQs starting from 300 pieces per style depending on fabric and construction.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
