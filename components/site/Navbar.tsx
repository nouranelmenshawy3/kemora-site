'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { path, type Locale } from '@/lib/i18n'
import type { CommonContent } from '@/content/types'
import LanguageSwitcher from '../ui/LanguageSwitcher'
import TrackedLink from '../ui/TrackedLink'
import { analyticsEvents } from '@/lib/site'

export default function Navbar({
  locale,
  common,
  whatsappHref,
}: {
  locale: Locale
  common: CommonContent
  whatsappHref: string
}) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

  return (
    <header className="sticky top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-sm border-b border-k-border">
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4"
        aria-label="Main"
      >
        <Link
          href={path('home', locale)}
          className="flex items-center gap-2 text-lg font-bold tracking-widest text-primary shrink-0"
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
          {desktopLinks.map(({ key, label }) => (
            <Link
              key={key}
              href={path(key, locale)}
              className="text-sm font-medium text-k-muted hover:text-accent transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <LanguageSwitcher locale={locale} labels={common.languageSwitch} />
          <TrackedLink
            href={whatsappHref}
            external
            event={analyticsEvents.whatsappClick}
            className="inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            {common.cta.requestSample}
          </TrackedLink>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher locale={locale} labels={common.languageSwitch} />
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className="p-2 -me-2 rounded-md text-primary hover:bg-sand transition-colors"
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
            {common.nav.map(({ key, label }) => (
              <li key={key}>
                <Link
                  href={path(key, locale)}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-sand-dark/60 py-3.5 font-medium text-primary hover:text-accent transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
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
