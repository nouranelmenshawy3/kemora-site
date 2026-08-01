'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { path, type Locale } from '@/lib/i18n'
import type { CommonContent } from '@/content/types'
import LanguageSwitcher from '../ui/LanguageSwitcher'
import TrackedLink from '../ui/TrackedLink'
import { analyticsEvents } from '@/lib/site'

export default function Navbar({
  locale,
  common,
  whatsappHref,
  initialTheme = 'light',
}: {
  locale: Locale
  common: CommonContent
  whatsappHref: string
  initialTheme?: 'light' | 'dark'
}) {
  const headerRef = useRef<HTMLElement>(null)
  const pathname = usePathname() || '/'
  const [headerOnDark, setHeaderOnDark] = useState(initialTheme === 'dark')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let frame = 0

    const updateTheme = () => {
      const headerHeight = headerRef.current?.offsetHeight ?? 64
      const probeY = Math.max(24, Math.min(headerHeight / 2, window.innerHeight - 1))
      const sections = document.querySelectorAll<HTMLElement>('[data-header-theme]')
      const activeSection = Array.from(sections).find((section) => {
        const rect = section.getBoundingClientRect()
        return rect.top <= probeY && rect.bottom >= probeY
      })

      setHeaderOnDark(activeSection?.dataset.headerTheme === 'dark')
    }

    const requestUpdate = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(updateTheme)
    }

    updateTheme()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [initialTheme])

  // Prevent background scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Nav is dense with 10 entries — show a primary subset on desktop.
  const primaryKeys = ['privateLabel', 'products', 'sampling', 'fabrics', 'selectedWork', 'about'] as const
  const desktopLinks = common.nav.filter((n) =>
    (primaryKeys as readonly string[]).includes(n.key)
  )
  const normalisedPath = pathname.replace(/\/+$/, '') || '/'
  const isActiveHref = (href: string) => {
    const normalisedHref = href.replace(/\/+$/, '') || '/'
    if (normalisedHref === '/') return normalisedPath === '/'
    return normalisedPath === normalisedHref || normalisedPath.startsWith(`${normalisedHref}/`)
  }
  const onDark = headerOnDark && !menuOpen
  const headerClass = onDark
    ? 'fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-primary/70 shadow-lg shadow-black/10 backdrop-blur-md transition-colors duration-300'
    : 'fixed top-0 inset-x-0 z-50 border-b border-k-border bg-white/95 shadow-sm shadow-black/[0.03] backdrop-blur-sm transition-colors duration-300'
  const brandClass = onDark ? 'text-white' : 'text-primary'
  const desktopLinkClass = onDark
    ? 'text-white/75 hover:text-white'
    : 'text-k-muted hover:text-primary'
  const activeDesktopLinkClass = onDark ? 'text-white' : 'text-primary'
  const mobileButtonClass = onDark
    ? 'text-white hover:bg-white/10'
    : 'text-primary hover:bg-sand'

  return (
    <header ref={headerRef} className={headerClass}>
      <nav
        className="h-16 w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 flex items-center justify-between gap-4"
        aria-label="Main"
      >
        <Link
          href={path('home', locale)}
          className={`flex items-center gap-2 text-lg font-bold tracking-widest shrink-0 transition-colors ${brandClass}`}
          aria-label="Kemora"
        >
          <Image
            src="/kemora-mark.png"
            alt=""
            width={38}
            height={40}
            className="h-9 w-auto shrink-0"
            priority
          />
          <span className="ltr-inline">KEMORA</span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {desktopLinks.map(({ key, label }) => {
            const href = path(key, locale)
            const active = isActiveHref(href)

            return (
              <Link
                key={key}
                href={href}
                aria-current={active ? 'page' : undefined}
                className={`relative py-2 text-sm font-medium transition-colors after:absolute after:start-0 after:bottom-0 after:h-0.5 after:w-full after:origin-start after:rounded-full after:bg-accent after:transition-transform ${
                  active
                    ? `${activeDesktopLinkClass} after:scale-x-100`
                    : `${desktopLinkClass} after:scale-x-0 hover:after:scale-x-100`
                }`}
              >
                {label}
              </Link>
            )
          })}
        </div>

        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <LanguageSwitcher locale={locale} labels={common.languageSwitch} onDark={onDark} />
          <TrackedLink
            href={path('contact', locale)}
            event={analyticsEvents.sampleRequestClick}
            className="inline-flex items-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            {common.cta.requestSample}
          </TrackedLink>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher locale={locale} labels={common.languageSwitch} onDark={onDark} />
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className={`p-2 -me-2 rounded-md transition-colors ${mobileButtonClass}`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          id="mobile-nav"
          className="lg:hidden border-t border-k-border bg-white max-h-[calc(100vh-4rem)] overflow-y-auto"
        >
          <ul className="px-4 py-2">
            {common.nav.map(({ key, label }) => {
              const href = path(key, locale)
              const active = isActiveHref(href)

              return (
                <li key={key}>
                  <Link
                    href={href}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => setMenuOpen(false)}
                    className={`block border-b border-sand-dark/60 py-3.5 font-medium transition-colors ${
                      active ? 'text-accent' : 'text-primary hover:text-accent'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="px-4 pb-6 pt-2 space-y-3">
            <TrackedLink
              href={whatsappHref}
              external
              event={analyticsEvents.whatsappClick}
              onNavigate={() => setMenuOpen(false)}
              className="flex w-full items-center justify-center rounded-md bg-[#128C7E] px-4 py-3.5 font-semibold text-white"
            >
              {common.cta.whatsapp}
            </TrackedLink>
            <TrackedLink
              href={path('contact', locale)}
              event={analyticsEvents.sampleRequestClick}
              onNavigate={() => setMenuOpen(false)}
              className="flex w-full items-center justify-center rounded-md bg-accent px-4 py-3.5 font-semibold text-white"
            >
              {common.cta.requestSample}
            </TrackedLink>
          </div>
        </div>
      )}
    </header>
  )
}
