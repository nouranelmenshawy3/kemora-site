import type { PageHero } from '@/content/types'
import Image from 'next/image'
import CtaButton from '../ui/CtaButton'
import Breadcrumbs, { type Crumb } from '../ui/Breadcrumbs'

/**
 * Page hero. The homepage variant is taller; inner pages use the same dark
 * brand treatment in a more compact frame.
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
  const isDark = true
  const hasBackgroundImage = Boolean(hero.backgroundImage)
  const visibleCtas = hero.ctas?.filter((cta) => cta.variant !== 'whatsapp') ?? []

  return (
    <section
      data-header-theme="dark"
      className={
        isHome
          ? 'relative overflow-hidden bg-primary texture-dark pb-24 pt-32 sm:pb-32 sm:pt-40'
          : 'relative overflow-hidden border-b border-white/10 bg-primary texture-dark pb-16 pt-28 sm:pb-20 sm:pt-32'
      }
    >
      {hero.backgroundImage && (
        <Image
          src={hero.backgroundImage.src}
          alt={hero.backgroundImage.alt}
          fill
          priority={isHome}
          sizes="100vw"
          className="object-cover"
          style={
            hero.backgroundImage.objectPosition
              ? { objectPosition: hero.backgroundImage.objectPosition }
              : undefined
          }
        />
      )}
      <div
        className={
          hasBackgroundImage
            ? 'absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/45'
            : `absolute inset-0 bg-gradient-to-br from-primary via-[#162232] to-primary ${
                isHome ? 'opacity-90' : 'opacity-95'
              }`
        }
      />
      {hasBackgroundImage && <div className="absolute inset-0 bg-primary/25" />}
      <div
        className="absolute inset-0"
        style={{
          background: hasBackgroundImage
            ? 'radial-gradient(ellipse at 18% 45%, rgba(212,118,74,0.24), transparent 34%), radial-gradient(ellipse at center, transparent 48%, rgba(0,0,0,0.55) 100%)'
            : isHome
            ? 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.45) 100%)'
            : 'radial-gradient(ellipse at 70% 35%, rgba(212,118,74,0.12), transparent 36%), radial-gradient(ellipse at center, transparent 48%, rgba(0,0,0,0.35) 100%)',
        }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {crumbs && <Breadcrumbs items={crumbs} onDark={isDark} />}

        <div className={isHome ? 'max-w-3xl' : 'max-w-3xl'}>
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
                : 'text-3xl leading-tight text-white sm:text-4xl'
            }`}
          >
            {hero.h1}
          </h1>

          <p
            className={`mt-5 leading-relaxed ${
              isHome ? 'max-w-2xl text-base text-white/70 sm:text-lg' : 'text-base text-white/65'
            }`}
          >
            {hero.lead}
          </p>

          {hero.supporting && (
            <p
              className={`mt-4 text-sm leading-relaxed ${
                isHome ? 'max-w-2xl text-white/50' : 'text-white/50'
              }`}
            >
              {hero.supporting}
            </p>
          )}

          {visibleCtas.length > 0 && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {visibleCtas.map((cta) => (
                <CtaButton key={cta.label} cta={cta} onDark={isDark} />
              ))}
            </div>
          )}

          {hero.highlights && hero.highlights.length > 0 && (
            <ul
              className={`mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t pt-6 text-sm ${
                isDark ? 'border-white/10 text-white/60' : 'border-k-border text-k-muted'
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
