import AnimateIn from './AnimateIn'

const teamMembers = [
  {
    name: 'Youssif Elmenshawy',
    role: 'Co-Founder & Client Relations',
    location: '📍 Wrocław, Poland',
    note: 'Your direct contact for quotes, samples, and strategic planning.',
    linkedinUrl: 'https://www.linkedin.com/in/youssif-elmenshawy-bb6996283/',
  },
  {
    name: 'Nouran Elmenshawy',
    role: 'Co-Founder & Production Manager',
    location: '📍 Cairo, Egypt',
    note: 'On the factory floor daily, ensuring quality and on-time delivery.',
    linkedinUrl: 'https://www.linkedin.com/in/nouran-elmenshawy',
  },
  {
    name: 'Abdalla Elmenshawy',
    role: 'Co-Founder & Operations Director',
    location: '📍 Łódź, Poland',
    note: 'Manages shipping, logistics, and sample handling from Cairo to your door.',
    linkedinUrl: 'https://www.linkedin.com/in/abdalla-elmenshawy-b216a8293/',
  },
]

const legacyPoints = [
  {
    label: 'Family textile roots',
    detail: 'Built from long-standing manufacturing relationships in Cairo.',
  },
  {
    label: 'Hands-on factory access',
    detail: 'Direct contact with sample rooms, production teams, and finishing.',
  },
  {
    label: 'One accountable team',
    detail: 'Production, client contact, and operations managed by one family.',
  },
]

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
                Today, Kemora is led by the Elmenshawy family:{' '}
                <span className="font-semibold text-primary">
                  Nouran, Youssif, and Abdalla Elmenshawy
                </span>.
                Youssif manages client relationships from Poland, Nouran oversees production
                and quality control in Cairo, and Abdalla handles logistics, shipping, and
                sample movement from Poland.
              </p>
              <p className="text-k-muted leading-relaxed mb-8">
                This unique structure means you get the cost advantages of Egyptian manufacturing
                with the trust and convenience of a local European partner. Our factories produce
                over 5,000 garments per day. From a 500-piece test order to a 50,000-piece
                seasonal run — we scale with you.
              </p>
            </AnimateIn>
          </div>

          {/* Image – right */}
          <AnimateIn delay={120} className="lg:order-none">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary via-[#1a2f44] to-[#0d1b2a] overflow-hidden relative">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                      45deg, rgba(255,255,255,0.3) 0px, rgba(255,255,255,0.3) 1px,
                      transparent 1px, transparent 20px
                    )`,
                  }}
                />

                <div className="absolute inset-0 p-7 sm:p-9 flex flex-col">
                  <div>
                    <p className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-3">
                      Behind Kemora
                    </p>
                    <h3 className="text-white text-2xl sm:text-3xl font-bold tracking-tight leading-tight max-w-sm">
                      Built on family relationships inside the textile industry
                    </h3>
                  </div>

                  <div className="relative flex-1 my-8">
                    <div className="absolute inset-x-10 top-1/2 h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent" />
                    <div className="absolute left-1/2 top-10 bottom-10 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-accent/25 to-transparent" />

                    <div className="relative h-full flex flex-col justify-center gap-4">
                      {legacyPoints.map(({ label, detail }, index) => (
                        <div
                          key={label}
                          className={`relative rounded-lg border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm sm:w-[82%] ${
                            index % 2 === 0 ? 'sm:self-start' : 'sm:self-end'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5 w-7 h-7 rounded-full border border-accent/50 bg-accent/10 text-accent flex items-center justify-center shrink-0">
                              <span className="text-xs font-bold">{index + 1}</span>
                            </div>
                            <div>
                              <p className="text-white font-bold text-sm">{label}</p>
                              <p className="text-white/50 text-xs leading-relaxed mt-1">{detail}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-lg border border-accent/20 bg-accent/10 p-4">
                    <p className="text-white/70 text-sm leading-relaxed">
                      Not a directory of anonymous suppliers. Kemora is a family-run bridge
                      into a trusted production network.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-5 -right-5 bg-accent rounded-xl shadow-xl p-4 text-white text-center">
                <p className="text-2xl font-bold leading-none">20+</p>
                <p className="text-[10px] text-white/80 mt-0.5 font-medium">Years of<br />experience</p>
              </div>
            </div>
          </AnimateIn>
        </div>

        {/* Team cards */}
        <AnimateIn delay={160} className="mt-14">
          <div className="grid md:grid-cols-3 gap-4">
            {teamMembers.map(({ name, role, location, note, linkedinUrl }) => {
              const cardClass =
                'group block p-5 rounded-xl border border-k-border bg-sand transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-black/5'

              const content = (
                <>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/30 to-accent/60 flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-primary text-sm">{name}</h4>
                  <p className="text-accent text-xs font-semibold mt-0.5">{role}</p>
                  <p className="text-k-muted text-xs mt-1">{location}</p>
                  <p className="text-k-muted text-xs mt-2 leading-relaxed">{note}</p>
                  {linkedinUrl && (
                    <p className="text-accent text-xs font-bold mt-4">View LinkedIn profile</p>
                  )}
                </>
              )

              return linkedinUrl ? (
                <a
                  key={name}
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClass}
                >
                  {content}
                </a>
              ) : (
                <div key={name} className={cardClass}>
                  {content}
                </div>
              )
            })}
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
