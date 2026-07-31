'use client'

import { usePathname } from 'next/navigation'
import { track } from '@vercel/analytics'
import { alternatePath, type Locale } from '@/lib/i18n'
import { analyticsEvents } from '@/lib/site'

/**
 * Sends the visitor to the equivalent page in the other language.
 *
 * A plain <a> is used rather than next/link on purpose: English and Arabic have
 * separate root layouts (different `lang`/`dir` on <html>), so a full document
 * load is required for the direction to switch correctly.
 */
export default function LanguageSwitcher({
  locale,
  labels,
  onDark = false,
  onNavigate,
}: {
  locale: Locale
  labels: { toEnglish: string; toArabic: string }
  onDark?: boolean
  onNavigate?: () => void
}) {
  const pathname = usePathname() || '/'

  const options: { code: Locale; label: string }[] = [
    { code: 'en', label: labels.toEnglish },
    { code: 'ar', label: labels.toArabic },
  ]

  const base = onDark ? 'text-white/60' : 'text-k-muted'
  const activeClass = onDark ? 'text-white font-semibold' : 'text-primary font-semibold'

  return (
    <div className={`flex items-center gap-1 text-sm ${base}`}>
      {options.map((option, i) => {
        const isActive = option.code === locale
        const href = isActive ? pathname : alternatePath(pathname, option.code)

        return (
          <span key={option.code} className="flex items-center gap-1">
            {i > 0 && (
              <span aria-hidden="true" className={onDark ? 'text-white/25' : 'text-k-border'}>
                |
              </span>
            )}
            {isActive ? (
              <span className={activeClass} aria-current="true" lang={option.code}>
                {option.label}
              </span>
            ) : (
              <a
                href={href}
                lang={option.code}
                hrefLang={option.code}
                className="hover:text-accent transition-colors"
                onClick={() => {
                  track(analyticsEvents.languageSwitch, { from: locale, to: option.code })
                  onNavigate?.()
                }}
              >
                {option.label}
              </a>
            )}
          </span>
        )
      })}
    </div>
  )
}
