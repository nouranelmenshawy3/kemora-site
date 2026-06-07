import Image from 'next/image'
import AnimateIn from './AnimateIn'

const teamMembers = [
  {
    name: 'Youssif Elmenshawy',
    role: 'Co-Founder & Client Relations Director',
    location: '📍 Wrocław, Poland',
    note: 'Your direct contact for quotes, samples, and strategic planning.',
    // linkedinUrl: 'https://www.linkedin.com/in/youssif-elmenshawy-bb6996283/',
    linkedinUrl: '',
  },
  {
    name: 'Nouran Elmenshawy',
    role: 'Co-Founder & Production Director',
    location: '📍 Cairo, Egypt',
    note: 'On the factory floor, coordinating samples, quality checks, and delivery timing.',
    // linkedinUrl: 'https://www.linkedin.com/in/nouran-elmenshawy',
    linkedinUrl: '',
  },
]

export default function AboutUs() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text – left */}
          <div className="min-w-0">
            <AnimateIn>
              <p className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-3">Our Story</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight leading-tight mb-6">
                A Direct Link to Cairo Garment Production
              </h2>
            </AnimateIn>

            <AnimateIn delay={80}>
              <p className="text-k-muted leading-relaxed mb-4">
                Kemora was built from more than 20 years of textile manufacturing
                relationships in Cairo. We connect European brands to Egyptian production
                with direct oversight, not anonymous sourcing.
              </p>
              <p className="text-k-muted leading-relaxed mb-4">
                <span className="font-semibold text-primary">Youssif Elmenshawy</span>{' '}
                manages client communication from Poland, while{' '}
                <span className="font-semibold text-primary">Nouran Elmenshawy</span>{' '}
                oversees samples, production, and quality control on the factory floor in
                Cairo. Abdalla supports logistics and shipment coordination between Egypt
                and Europe.
              </p>
              <p className="text-k-muted leading-relaxed mb-8">
                That structure gives you the cost advantages of Egyptian manufacturing
                with a clear European point of contact. Our factories produce over 5,000
                garments per day. From a 500-piece test order to a 50,000-piece seasonal
                run, we scale with you.
              </p>
            </AnimateIn>
          </div>

          {/* Image – right */}
          <AnimateIn delay={120} className="min-w-0 lg:order-none">
            <div className="relative">
              <div className="relative min-h-[520px] overflow-hidden rounded-2xl bg-primary shadow-2xl shadow-primary/20 sm:aspect-[4/5] sm:min-h-0">
                <Image
                  src="/egypt-factory.jpeg"
                  alt="Kemora partner factory floor in Egypt with garment production machinery"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  loading="eager"
                  unoptimized
                  className="object-cover"
                  style={{ objectPosition: '52% 50%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/20 to-primary/90" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/35 via-transparent to-primary/20" />

                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col">
                  <div>
                    <p className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-3">
                      Behind Kemora
                    </p>
                    <h3 className="text-white text-2xl sm:text-3xl font-bold leading-tight max-w-sm">
                      Real factory access in Cairo
                    </h3>
                  </div>

                  <div className="mt-auto max-w-md border-l-2 border-accent bg-primary/50 p-4 pl-5 backdrop-blur-sm">
                    <p className="text-white text-sm font-semibold">
                      Sample rooms, production lines, finishing checks.
                    </p>
                    <p className="mt-2 text-white/75 text-sm leading-relaxed">
                      Daily coordination with the people cutting, sewing, and finishing
                      your garments.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-5 right-3 sm:-right-5 bg-accent rounded-xl shadow-xl p-4 text-white text-center">
                <p className="text-2xl font-bold leading-none">20+</p>
                <p className="text-[10px] text-white/80 mt-0.5 font-medium">Years of<br />experience</p>
              </div>
            </div>
          </AnimateIn>
        </div>

        {/* Team cards */}
        <AnimateIn delay={160} className="mt-14">
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
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
