import type { PageHero } from '@/content/types'
import CtaButton from '../ui/CtaButton'
import Breadcrumbs, { type Crumb } from '../ui/Breadcrumbs'

/**
 * Page hero. The homepage variant is taller and darker; inner pages use a
 * compact light variant so the H1 and breadcrumb stay above the fold.
 */
export default function Hero({
  hero,
  variant = 'page',
  crumbs,
}: {
  hero: PageHero
  variant?: 'home' | 'page'
  crumbs?: Crumb[]
}) {
  const isHome = variant === 'home'

  return (
    <section
      className={
        isHome
          ? 'relative overflow-hidden bg-primary texture-dark py-24 sm:py-32'
          : 'border-b border-k-border bg-sand/60 py-14 sm:py-20'
      }
    >
      {isHome && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#162232] to-primary opacity-90" />
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.45) 100%)',
            }}
          />
        </>
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {crumbs && <Breadcrumbs items={crumbs} onDark={isHome} />}

        <div className={isHome ? 'max-w-4xl' : 'max-w-3xl'}>
          {hero.eyebrow && (
            <p
              className={`mb-4 text-xs font-bold uppercase tracking-[0.2em] ${
                isHome ? 'text-accent' : 'text-accent'
              }`}
            >
              {hero.eyebrow}
            </p>
          )}

          <h1
            className={`font-bold tracking-tight ${
              isHome
                ? 'text-3xl leading-[1.2] text-white sm:text-4xl md:text-5xl'
                : 'text-3xl leading-tight text-primary sm:text-4xl'
            }`}
          >
            {hero.h1}
          </h1>

          <p
            className={`mt-5 leading-relaxed ${
              isHome ? 'max-w-2xl text-base text-white/70 sm:text-lg' : 'text-base text-k-muted'
            }`}
          >
            {hero.lead}
          </p>

          {hero.supporting && (
            <p
              className={`mt-4 text-sm leading-relaxed ${
                isHome ? 'max-w-2xl text-white/50' : 'text-k-muted'
              }`}
            >
              {hero.supporting}
            </p>
          )}

          {hero.ctas && hero.ctas.length > 0 && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {hero.ctas.map((cta) => (
                <CtaButton key={cta.label} cta={cta} onDark={isHome} />
              ))}
            </div>
          )}

          {hero.highlights && hero.highlights.length > 0 && (
            <ul
              className={`mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t pt-6 text-sm ${
                isHome ? 'border-white/10 text-white/60' : 'border-k-border text-k-muted'
              }`}
            >
              {hero.highlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 shrink-0 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}
