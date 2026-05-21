import Image from 'next/image'
import AnimateIn from './AnimateIn'

const samples = [
  {
    title: 'Resortwear co-ord set',
    note: 'Full outfit sample with soft drape and clean finishing.',
    src: '/sample-work/brown-resort-set.webp',
    featured: true,
  },
  {
    title: 'Studio lounge set',
    note: 'Color, fit, and styling ready for brand campaigns.',
    src: '/sample-work/burgundy-studio-set.webp',
  },
  {
    title: 'Black knit separates',
    note: 'Minimal everyday pieces with a premium hand feel.',
    src: '/sample-work/black-studio-set.webp',
  },
  {
    title: 'Lightweight leisurewear',
    note: 'Relaxed shapes for warm-weather collections.',
    src: '/sample-work/white-lounge-set.webp',
  },
  {
    title: 'Sample development board',
    note: 'Detail shots, fit notes, and product presentation.',
    src: '/sample-work/gray-lounge-sample.webp',
  },
  {
    title: 'Colorway exploration',
    note: 'Multiple sample directions for collection planning.',
    src: '/sample-work/checked-colorways.webp',
  },
]

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
              These samples show the kind of garments Kemora can help develop with partner
              factories: coordinated sets, resortwear, lounge pieces, styling samples, and
              collection-ready colorways.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-k-border pt-8">
              {[
                ['Samples', 'Fit, fabric, color'],
                ['Private label', 'Brand-ready output'],
                ['Collections', 'From idea to order'],
                ['Production', 'Factory network support'],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-primary font-bold">{label}</p>
                  <p className="text-k-muted text-sm mt-1">{value}</p>
                </div>
              ))}
            </div>
          </AnimateIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {samples.map(({ title, note, src, featured }, index) => (
              <AnimateIn
                key={title}
                delay={index * 60}
                className={featured ? 'col-span-2 row-span-2' : ''}
              >
                <article className="group h-full overflow-hidden rounded-lg border border-k-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-black/10">
                  <div className={`relative overflow-hidden ${featured ? 'aspect-[4/5]' : 'aspect-[3/4]'}`}>
                    <Image
                      src={src}
                      alt={title}
                      fill
                      sizes={featured ? '(min-width: 1024px) 45vw, 100vw' : '(min-width: 1024px) 18vw, 50vw'}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
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
    </section>
  )
}
