import AnimateIn from './AnimateIn'

export default function AboutUs() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text – left */}
          <div>
            <AnimateIn>
              <p className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-3">Our Story</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight leading-tight mb-6">
                A Family Legacy in Garment Manufacturing
              </h2>
            </AnimateIn>

            <AnimateIn delay={80}>
              <p className="text-k-muted leading-relaxed mb-4">
                Kemora was born from over 20 years of family expertise in Cairo's textile
                industry. We don't just find factories — we are part of a manufacturing
                network built across generations.
              </p>
              <p className="text-k-muted leading-relaxed mb-4">
                Today, Kemora is led by siblings{' '}
                <span className="font-semibold text-primary">Nouran and Youssif Elmenshawy</span>.
                Youssif manages client relationships from Poland, ensuring European service
                standards and personal contact. Nouran oversees production and quality control
                directly in Cairo.
              </p>
              <p className="text-k-muted leading-relaxed mb-8">
                This unique structure means you get the cost advantages of Egyptian manufacturing
                with the trust and convenience of a local European partner. Our factories produce
                over 5,000 garments per day. From a 500-piece test order to a 50,000-piece
                seasonal run — we scale with you.
              </p>
            </AnimateIn>

            {/* Team cards */}
            <AnimateIn delay={160}>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    name: 'Youssif Elmenshawy',
                    role: 'Co-Founder & Client Relations',
                    location: '📍 Warsaw, Poland',
                    note: 'Your direct contact for quotes, samples, and strategic planning.',
                  },
                  {
                    name: 'Nouran Elmenshawy',
                    role: 'Co-Founder & Production Manager',
                    location: '📍 Cairo, Egypt',
                    note: 'On the factory floor daily, ensuring quality and on-time delivery.',
                  },
                ].map(({ name, role, location, note }) => (
                  <div
                    key={name}
                    className="p-5 rounded-xl border border-k-border bg-sand"
                  >
                    {/* Avatar placeholder */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/30 to-accent/60 flex items-center justify-center mb-3">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-primary text-sm">{name}</h4>
                    <p className="text-accent text-xs font-semibold mt-0.5">{role}</p>
                    <p className="text-k-muted text-xs mt-1">{location}</p>
                    <p className="text-k-muted text-xs mt-2 leading-relaxed">{note}</p>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* Image – right */}
          <AnimateIn delay={120} className="lg:order-none">
            <div className="relative">
              {/* Main image placeholder */}
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary via-[#1a2f44] to-[#0d1b2a] overflow-hidden relative">
                {/* Decorative fabric pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                      45deg, rgba(255,255,255,0.3) 0px, rgba(255,255,255,0.3) 1px,
                      transparent 1px, transparent 20px
                    )`,
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-white/30 text-sm">Replace with team / factory photo</p>
                </div>
              </div>

              {/* Floating stat badge */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-xl border border-k-border p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-bold text-primary leading-none">5,000+</p>
                  <p className="text-xs text-k-muted mt-0.5">Pieces per day</p>
                </div>
              </div>

              {/* Second floating badge */}
              <div className="absolute -top-5 -right-5 bg-accent rounded-xl shadow-xl p-4 text-white text-center">
                <p className="text-2xl font-bold leading-none">20+</p>
                <p className="text-[10px] text-white/80 mt-0.5 font-medium">Years of<br />experience</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
