import Image from 'next/image'
import AnimateIn from './AnimateIn'

const collaboration = {
  eyebrow: 'Central Studio x Kemora',
  title: 'T-shirts representing Egypt in the dance scene',
  note: 'Custom merchandise worn by Central Studio at the pyramids.',
  src: '/sample-work/central-studio-pyramids-team.jpg',
}

const samples = [
  {
    title: 'White studio sample',
    note: 'Clean styling sample for brand-ready campaign content.',
    src: '/sample-work/white-studio-merch.jpg',
    aspect: 'portrait',
    objectPosition: '50% 42%',
  },
  {
    title: 'Washed fleece set',
    note: 'Soft fleece co-ord with a relaxed, premium studio look.',
    src: '/sample-work/washed-fleece-studio-set.jpg',
    aspect: 'portrait',
    objectPosition: '50% 42%',
  },
  // {
  //   title: 'Fleece finishing detail',
  //   note: 'Close-up on fabric texture, waistband, and drawcord finish.',
  //   src: '/sample-work/washed-fleece-detail.jpg',
  //   aspect: 'portrait',
  //   objectPosition: '50% 48%',
  // },
  {
    title: 'Studio lounge set',
    note: 'Color, fit, and styling ready for brand campaigns.',
    src: '/sample-work/burgundy-studio-set.webp',
    aspect: 'portrait',
  },
  {
    title: 'Black knit separates',
    note: 'Minimal everyday pieces with a premium hand feel.',
    src: '/sample-work/black-studio-set.webp',
    aspect: 'portrait',
  },
  {
    title: 'Pink vacation set',
    note: 'Poolside campaign sample with a wrap top and soft skirt drape.',
    src: '/sample-work/pink-vacation-set.jpg',
    aspect: 'portrait',
    objectPosition: '50% 40%',
  },
  {
    title: 'Resortwear co-ord set',
    note: 'Full outfit sample with soft drape and clean finishing.',
    src: '/sample-work/brown-resort-set.webp',
    aspect: 'portrait',
  },
  {
    title: 'Lightweight leisurewear',
    note: 'Relaxed shapes for warm-weather collections.',
    src: '/sample-work/white-lounge-set.webp',
    aspect: 'portrait',
  },
  {
    title: 'Sample development board',
    note: 'Detail shots, fit notes, and product presentation.',
    src: '/sample-work/gray-lounge-sample.webp',
    aspect: 'portrait',
  },
  {
    title: 'Colorway exploration',
    note: 'Multiple sample directions for collection planning.',
    src: '/sample-work/checked-colorways.webp',
    aspect: 'portrait',
  },
]

const getAspectClass = (aspect: string) => {
  if (aspect === 'square') return 'aspect-square'
  return 'aspect-[3/4]'
}

export default function SampleWork() {
  return (
    <section id="samples" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">
          <AnimateIn className="lg:sticky lg:top-28">
            <p className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-3">
              Sample Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
              Pieces Made for Real Collections
            </h2>
            <p className="mt-5 text-k-muted leading-relaxed">
              These examples show the kind of garments Kemora can help develop with partner
              factories: studio samples, fleece sets, collaboration merchandise, and
              collection-ready colorways.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-k-border pt-8">
              {[
                ['Samples', 'Fit, fabric, color'],
                ['Merch', 'Team and event T-shirts'],
                ['Collections', 'From idea to order'],
                ['Production', 'Factory support'],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-primary font-bold">{label}</p>
                  <p className="text-k-muted text-sm mt-1">{value}</p>
                </div>
              ))}
            </div>
          </AnimateIn>

          <div className="space-y-4">
            <AnimateIn delay={40}>
              <article className="group overflow-hidden rounded-lg border border-k-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-black/10">
                <div className="relative aspect-[16/10] overflow-hidden bg-primary">
                  <Image
                    src={collaboration.src}
                    alt={collaboration.title}
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: '50% 48%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <p className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
                      {collaboration.eyebrow}
                    </p>
                    <h3 className="mt-2 max-w-lg text-xl sm:text-2xl font-bold leading-tight text-white">
                      {collaboration.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-white/75">
                      {collaboration.note}
                    </p>
                  </div>
                </div>
              </article>
            </AnimateIn>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {samples.map(({ title, note, src, aspect, objectPosition }, index) => (
                <AnimateIn key={title} delay={index * 60}>
                  <article className="group h-full overflow-hidden rounded-lg border border-k-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-black/10">
                    <div className={`relative overflow-hidden ${getAspectClass(aspect)}`}>
                      <Image
                        src={src}
                        alt={title}
                        fill
                        sizes="(min-width: 1024px) 18vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        style={objectPosition ? { objectPosition } : undefined}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-primary font-bold text-sm sm:text-base">{title}</h3>
                      <p className="text-k-muted text-xs sm:text-sm leading-relaxed mt-1">{note}</p>
                    </div>
                  </article>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
