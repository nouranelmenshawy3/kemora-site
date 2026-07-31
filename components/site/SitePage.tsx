import type { PageContent } from '@/content/types'
import { path, type Locale } from '@/lib/i18n'
import { whatsappLink } from '@/lib/site'
import {
  getCommon,
  getProductCategories,
  getFabrics,
  getFinishing,
  getWork,
} from '@/content'
import {
  organizationSchema,
  websiteSchema,
  webPageSchema,
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from '@/lib/seo'
import type { Crumb } from '../ui/Breadcrumbs'

import Navbar from './Navbar'
import Footer from './Footer'
import Hero from './Hero'
import SectionRenderer from './SectionRenderer'
import WhatsAppFloat from './WhatsAppFloat'
import JsonLd from './JsonLd'

/**
 * Composes a full page from a PageContent object.
 *
 * Route files stay thin: they export `metadata` and render <SitePage>. All copy
 * lives in content/{locale}, so a copywriter never has to open a route file.
 */
export default function SitePage({
  locale,
  page,
  currentPath,
  extraCrumbs = [],
  children,
}: {
  locale: Locale
  page: PageContent
  currentPath: string
  /** Additional crumbs between Home and the current page. */
  extraCrumbs?: Crumb[]
  /** Rendered between the hero and the content sections. */
  children?: React.ReactNode
}) {
  const common = getCommon(locale)
  const categories = getProductCategories(locale)
  const whatsappHref = whatsappLink(locale)
  const isHome = page.routeKey === 'home'

  const crumbs: Crumb[] = isHome
    ? []
    : [
        { name: common.breadcrumbHome, path: path('home', locale) },
        ...extraCrumbs,
        { name: page.breadcrumbLabel, path: currentPath },
      ]

  const ctx = {
    locale,
    common,
    categories,
    fabrics: getFabrics(locale),
    finishing: getFinishing(locale),
    work: getWork(locale),
    whatsappHref,
  }

  const structuredData: unknown[] = [
    organizationSchema,
    websiteSchema(locale),
    webPageSchema({
      locale,
      path: currentPath,
      name: page.metaTitle,
      description: page.metaDescription,
    }),
  ]

  if (isHome) structuredData.push(serviceSchema(locale))
  if (crumbs.length > 1) structuredData.push(breadcrumbSchema(crumbs))
  // FAQ schema is emitted only when the FAQs are actually rendered on the page.
  if (page.faqForSchema?.length) structuredData.push(faqSchema(page.faqForSchema))

  return (
    <>
      <JsonLd data={structuredData} />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        {common.skipToContent}
      </a>

      <Navbar locale={locale} common={common} whatsappHref={whatsappHref} />

      <main id="main">
        <Hero hero={page.hero} variant={isHome ? 'home' : 'page'} crumbs={crumbs} />
        {children}
        {page.sections.map((section, i) => (
          <SectionRenderer key={`${section.kind}-${i}`} section={section} ctx={ctx} />
        ))}
      </main>

      <Footer locale={locale} common={common} whatsappHref={whatsappHref} />
      <WhatsAppFloat href={whatsappHref} label={common.cta.whatsapp} />
    </>
  )
}
