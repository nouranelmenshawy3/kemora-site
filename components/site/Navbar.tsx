'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { path, type Locale, type RouteKey } from '@/lib/i18n'
import type { CommonContent } from '@/content/types'
import LanguageSwitcher from '../ui/LanguageSwitcher'
import TrackedLink from '../ui/TrackedLink'
import { analyticsEvents, meetingRequestHref } from '@/lib/site'

export default function Navbar({ locale, common, whatsappHref }: {
  locale: Locale
  common: CommonContent
  whatsappHref: string
  initialTheme?: 'light' | 'dark'
}) {
  const pathname = usePathname()
  const header = useRef<HTMLElement>(null)
  const trigger = useRef<HTMLButtonElement | null>(null)
  const [open, setOpen] = useState<string | null>(null)
  const ar = locale === 'ar'
  const groups: { id: string; label: string; keys: RouteKey[] }[] = [
    { id: 'manufacturing', label: ar ? 'التصنيع' : 'Manufacturing', keys: ['privateLabel', 'sampling', 'fabrics', 'howItWorks', 'manufacturerEgypt', 'lowMoq', 'international', 'europeanBrands'] },
    { id: 'resources', label: ar ? 'عن Kemora' : 'About & guides', keys: ['about', 'startBrand', 'guides', 'faq', 'contact'] },
  ]
  const entries = common.footerNav ?? common.nav
  const close = () => setOpen(null)
  useEffect(() => {
    if (!open) return
    const outside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(null)
    }
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(null); trigger.current?.focus() }
    }
    document.addEventListener('pointerdown', outside)
    document.addEventListener('keydown', escape)
    return () => { document.removeEventListener('pointerdown', outside); document.removeEventListener('keydown', escape) }
  }, [open])
  const links = (keys: RouteKey[], light = false) => keys.flatMap(key => entries.filter(item => item.key === key)).map(item => (
    <Link key={item.key} href={path(item.key, locale)} onClick={close} aria-current={pathname === path(item.key, locale) ? 'page' : undefined}
      className={`block rounded-md px-3 py-2.5 text-sm transition-colors ${light ? 'text-primary hover:bg-sand/70 hover:text-accent-dark aria-[current=page]:bg-sand' : 'text-white/85 hover:bg-white/5 hover:text-accent-light aria-[current=page]:text-accent-light'}`}>{item.label}</Link>
  ))
  const desktopGroup = (group: typeof groups[number]) => (
    <div className="relative flex h-[76px] items-center">
      <button type="button" aria-expanded={open === group.id} aria-controls={`nav-${group.id}`}
        onClick={(event) => { trigger.current = event.currentTarget; setOpen(open === group.id ? null : group.id) }}
        className="nav-label aria-expanded:text-white">
        {group.label}<svg className={`h-3 w-3 transition-transform ${open === group.id ? 'rotate-180' : ''}`} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m4 6 4 4 4-4" /></svg>
      </button>
      {open === group.id && <div id={`nav-${group.id}`} className="absolute start-0 top-[calc(100%+8px)] max-h-[calc(100dvh-100px)] w-[288px] overflow-y-auto overscroll-contain rounded-xl border border-k-border bg-[#fdfcf9] p-2 text-primary shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
        {group.id === 'manufacturing' ? <>{links(group.keys.slice(0, 4), true)}<div className="mx-3 my-2 border-t border-k-border" />{links(group.keys.slice(4), true)}</> : links(group.keys, true)}
        {group.id === 'resources' && <Link href={`${path('home', locale)}#whytech`} onClick={close} className="mt-2 block border-t border-k-border px-3 py-3 text-sm font-medium text-accent-dark hover:bg-sand/70">{ar ? 'شريكنا التقني' : 'Technology partner'} · WhyTech ↗</Link>}
      </div>}
    </div>
  )
  return (
    <header ref={header} className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-primary/95 text-white backdrop-blur-md"
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) close() }}>
      <nav aria-label={ar ? 'القائمة الرئيسية' : 'Main navigation'} className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between gap-4 px-5 lg:px-7 xl:px-10">
        <Link href={path('home', locale)} onClick={close} aria-label="Kemora" className="flex shrink-0 items-center gap-2.5 text-lg font-bold tracking-[0.16em]">
          <Image src="/kemora-mark.png" alt="" width={38} height={40} priority className="h-9 w-auto" /><span className="ltr-inline">KEMORA</span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex xl:gap-3">
          {desktopGroup(groups[0])}
          <Link href={path('products', locale)} onClick={close} className="nav-label">{ar ? 'المنتجات' : 'Products'}</Link>
          <Link href={path('selectedWork', locale)} onClick={close} className="nav-label">{ar ? 'أعمالنا' : 'Our work'}</Link>
          {desktopGroup(groups[1])}
        </div>
        <div className="flex shrink-0 items-center gap-2 xl:gap-3">
          <LanguageSwitcher locale={locale} labels={common.languageSwitch} onNavigate={close} compact onDark />
          <TrackedLink href={meetingRequestHref(locale)} event={analyticsEvents.meetingBookingClick} onNavigate={close} className="hidden rounded-md border border-white/25 px-3 py-2.5 text-xs font-semibold transition-colors hover:border-accent lg:inline-flex">{common.cta.bookMeeting}</TrackedLink>
          <TrackedLink href={`${path('contact', locale)}#inquiry-form`} event={analyticsEvents.sampleRequestClick} onNavigate={close} className="hidden rounded-md bg-accent px-3 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-accent-dark lg:inline-flex">{common.cta.requestSample}</TrackedLink>
          <button type="button" aria-label={ar ? 'القائمة' : 'Navigation menu'} aria-expanded={open === 'mobile'} aria-controls="nav-mobile" onClick={(event) => { trigger.current = event.currentTarget; setOpen(open === 'mobile' ? null : 'mobile') }} className="flex h-11 w-11 items-center justify-center rounded-md border border-white/25 lg:hidden">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d={open === 'mobile' ? 'M6 6l12 12M6 18L18 6' : 'M4 8h16M4 16h16'} /></svg>
          </button>
        </div>
      </nav>
      {open === 'mobile' && (
        <div id="nav-mobile" className="max-h-[calc(100dvh-76px)] overflow-y-auto overscroll-contain border-t border-white/15 bg-[#192630] px-5 pb-8 text-white lg:hidden">
          <div className="grid grid-cols-2 gap-3 border-b border-white/15 py-5">
            <TrackedLink href={`${path('contact', locale)}#inquiry-form`} event={analyticsEvents.sampleRequestClick} onNavigate={close} className="rounded-md bg-accent px-3 py-3 text-center text-sm font-semibold text-white">{common.cta.requestSample}</TrackedLink>
            <TrackedLink href={meetingRequestHref(locale)} event={analyticsEvents.meetingBookingClick} onNavigate={close} className="rounded-md border border-white/25 px-3 py-3 text-center text-sm font-semibold">{common.cta.bookMeeting}</TrackedLink>
          </div>
          <div className="grid grid-cols-2 py-3">{links(['home', 'products', 'selectedWork'])}</div>
          {groups.map(group => <div key={group.id} className="border-t border-white/15 py-4"><p className="px-3 text-xs font-bold uppercase tracking-widest text-accent-light">{group.label}</p><div className="mt-2 grid sm:grid-cols-2">{links(group.keys)}</div></div>)}
          <Link href={`${path('home', locale)}#whytech`} onClick={close} className="block rounded-md bg-white/5 p-4 text-sm font-semibold">KEMORA × WhyTech ↗</Link>
          <TrackedLink href={whatsappHref} external event={analyticsEvents.whatsappClick} onNavigate={close} className="mt-3 block p-3 text-center text-sm font-semibold text-[#6bd6b8]">{common.cta.whatsapp}</TrackedLink>
        </div>
      )}
    </header>
  )
}
