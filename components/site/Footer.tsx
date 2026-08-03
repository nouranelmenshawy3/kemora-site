import Link from 'next/link'
import { path, privacyPath, type Locale } from '@/lib/i18n'
import type { CommonContent } from '@/content/types'
import { siteConfig, contactConfig, analyticsEvents } from '@/lib/site'
import TrackedLink from '../ui/TrackedLink'

export default function Footer({
  locale,
  common,
  whatsappHref,
}: {
  locale: Locale
  common: CommonContent
  whatsappHref: string
}) {
  const privacyHref = privacyPath(locale)
  const footerLinks = common.footerNav ?? common.nav

  return (
    <footer data-header-theme="dark" className="bg-primary texture-dark">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="mb-3 text-xl font-bold tracking-widest text-white ltr-inline">KEMORA</p>
            <p className="mb-5 max-w-md text-sm leading-relaxed text-white/50">
              {common.footer.about}
            </p>
            <p className="flex items-center gap-2 text-xs text-white/35">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" aria-hidden="true" />
              {common.footer.status}
            </p>
          </div>

          <nav aria-label={common.footer.navHeading} className="lg:col-span-4">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white/60">
              {common.footer.navHeading}
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3 lg:grid-cols-2">
              {footerLinks.map(({ key, label }) => (
                <li key={key}>
                  <Link
                    href={path(key, locale)}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white/60">
              {common.footer.contactHeading}
            </p>
            <div className="space-y-3 text-sm">
              <div>
                <p className="mb-0.5 text-xs text-white/35">{common.footer.emailLabel}</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-white/60 transition-colors hover:text-white ltr-inline"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <p className="mb-0.5 text-xs text-white/35">{common.footer.whatsappLabel}</p>
                <TrackedLink
                  href={whatsappHref}
                  external
                  event={analyticsEvents.whatsappClick}
                  className="text-white/60 transition-colors hover:text-white ltr-inline"
                >
                  {contactConfig.whatsappPrimaryDisplay}
                </TrackedLink>
              </div>
              <TrackedLink
                href={path('contact', locale)}
                event={analyticsEvents.sampleRequestClick}
                className="mt-2 inline-flex rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-accent-dark"
              >
                {common.cta.requestSample}
              </TrackedLink>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-white/35 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} Kemora. {common.footer.rights}
          </p>
          <div className="flex items-center gap-5">
            <Link href={privacyHref} className="transition-colors hover:text-white/60">
              {common.footer.privacy}
            </Link>
            <span>{common.footer.locations}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
