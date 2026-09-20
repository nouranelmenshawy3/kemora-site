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
  const links = (keys: RouteKey[]) => entries.filter(item => keys.includes(item.key)).map(item => (
    <Link key={item.key} href={path(item.key, locale)} onClick={close} aria-current={pathname === path(item.key, locale) ? 'page' : undefined}
      className="rounded-md px-3 py-3 text-sm text-primary transition-colors hover:bg-sand hover:text-accent aria-[current=page]:text-accent">{item.label}</Link>
  ))
  return (
    <header ref={header} className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-primary/95 text-white backdrop-blur-md"
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) close() }}>
      <nav aria-label={ar ? 'القائمة الرئيسية' : 'Main navigation'} className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between gap-4 px-5 lg:px-7 xl:px-10">
        <Link href={path('home', locale)} onClick={close} aria-label="Kemora" className="flex shrink-0 items-center gap-2.5 text-lg font-bold tracking-[0.16em]">
          <Image src="/kemora-mark.png" alt="" width={38} height={40} priority className="h-9 w-auto" /><span className="ltr-inline">KEMORA</span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex xl:gap-3">
          <button type="button" aria-expanded={open === 'manufacturing'} aria-controls="nav-manufacturing" onClick={(event) => { trigger.current = event.currentTarget; setOpen(open === 'manufacturing' ? null : 'manufacturing') }} className="nav-label">{groups[0].label}<span aria-hidden="true" className="text-xs">⌄</span></button>
          <Link href={path('products', locale)} onClick={close} className="nav-label">{ar ? 'المنتجات' : 'Products'}</Link>
          <Link href={path('selectedWork', locale)} onClick={close} className="nav-label">{ar ? 'أعمالنا' : 'Our work'}</Link>
          <button type="button" aria-expanded={open === 'resources'} aria-controls="nav-resources" onClick={(event) => { trigger.current = event.currentTarget; setOpen(open === 'resources' ? null : 'resources') }} className="nav-label">{groups[1].label}<span aria-hidden="true" className="text-xs">⌄</span></button>
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
      {groups.map(group => open === group.id && (
        <div key={group.id} id={`nav-${group.id}`} className="absolute inset-x-0 hidden border-y border-k-border bg-white text-primary shadow-xl lg:block">
          <div className="mx-auto grid max-w-6xl grid-cols-[240px_1fr] gap-10 px-8 py-8">
            <div className="border-e border-k-border pe-8"><p className="text-xs font-semibold uppercase tracking-widest text-accent">KEMORA</p><p className="mt-3 text-2xl font-semibold">{group.label}</p><p className="mt-3 text-sm leading-relaxed text-k-muted">{ar ? 'كل ما تحتاجه لتطوير مجموعة ملابس تحمل اسم براندك.' : 'Everything you need to develop a collection under your own label.'}</p></div>
            <div><div className="grid grid-cols-2 gap-x-4">{links(group.keys)}</div>{group.id === 'resources' && <Link href={`${path('home', locale)}#whytech`} onClick={close} className="mt-3 block border-t border-k-border px-3 pt-4 text-sm font-semibold text-accent">{ar ? 'شريكنا التقني' : 'Our technology partner'} · WhyTech ↗</Link>}<div className="mt-4 xl:hidden"><LanguageSwitcher locale={locale} labels={common.languageSwitch} onNavigate={close} /></div></div>
          </div>
        </div>
      ))}
      {open === 'mobile' && (
        <div id="nav-mobile" className="max-h-[calc(100dvh-76px)] overflow-y-auto overscroll-contain border-t border-k-border bg-white px-5 pb-8 text-primary lg:hidden">
          <div className="grid grid-cols-2 gap-3 border-b border-k-border py-5">
            <TrackedLink href={`${path('contact', locale)}#inquiry-form`} event={analyticsEvents.sampleRequestClick} onNavigate={close} className="rounded-md bg-accent px-3 py-3 text-center text-sm font-semibold text-white">{common.cta.requestSample}</TrackedLink>
            <TrackedLink href={meetingRequestHref(locale)} event={analyticsEvents.meetingBookingClick} onNavigate={close} className="rounded-md border border-k-border px-3 py-3 text-center text-sm font-semibold">{common.cta.bookMeeting}</TrackedLink>
          </div>
          <div className="grid grid-cols-2 py-3">{links(['home', 'products', 'selectedWork'])}</div>
          {groups.map(group => <div key={group.id} className="border-t border-k-border py-4"><p className="px-3 text-xs font-bold uppercase tracking-widest text-accent">{group.label}</p><div className="mt-2 grid sm:grid-cols-2">{links(group.keys)}</div></div>)}
          <Link href={`${path('home', locale)}#whytech`} onClick={close} className="block rounded-md bg-sand p-4 text-sm font-semibold">KEMORA × WhyTech ↗</Link>
          <TrackedLink href={whatsappHref} external event={analyticsEvents.whatsappClick} onNavigate={close} className="mt-3 block p-3 text-center text-sm font-semibold text-[#128C7E]">{common.cta.whatsapp}</TrackedLink>
        </div>
      )}
    </header>
  )
}
