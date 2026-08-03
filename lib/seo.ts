import { siteConfig, contactConfig } from './site'
import type { Locale } from './i18n'

export { siteConfig }

const abs = (p: string) => (p.startsWith('http') ? p : `${siteConfig.url}${p}`)

/**
 * Keywords are no longer injected as a meta tag (ignored by Google and a
 * spam signal when over-stuffed). They are kept only to populate the
 * Organization `knowsAbout` field, which is a legitimate schema property.
 */
export const topicsEn = [
  'private label clothing manufacturer Egypt',
  'garment manufacturer Egypt',
  'clothing manufacturer Egypt',
  'custom clothing manufacturer for fashion brands',
  'low MOQ clothing manufacturer Egypt',
  'clothing manufacturer for startups',
  'apparel product development',
  'sample development and pattern making',
  'clothing manufacturer for European brands',
  'clothing manufacturer for Middle East brands',
  'clothing manufacturer for UK brands',
  'clothing manufacturer for USA brands',
  'certified clothing production partners',
  'international garment export coordination',
  'T-shirt and polo shirt manufacturing',
  'hoodie and sweatshirt manufacturing',
  'loungewear and pyjama manufacturing',
  'abaya and modest wear manufacturing',
  'activewear manufacturing',
  'streetwear manufacturing',
  'resortwear manufacturing',
  'uniform manufacturing',
]

export const topicsAr = [
  'مصنع ملابس في مصر',
  'مصنع ملابس للبراندات',
  'شركة تصنيع ملابس في مصر',
  'تصنيع ملابس Private Label',
  'تصنيع ملابس بعلامة تجارية خاصة',
  'تصنيع عينة ملابس',
  'مصنع ملابس بكميات قليلة',
  'مصنع ملابس MOQ منخفض',
  'بدء براند ملابس',
  'مصنع تيشيرتات في مصر',
  'تصنيع هوديز وسويت شيرت',
  'تصنيع بيجامات وملابس نوم',
  'مصنع عبايات في مصر',
  'تصنيع ملابس محتشمة',
  'تصنيع ملابس رياضية',
  'تصنيع ستريت وير',
  'تصنيع ريسورت وير',
  'تنسيق تصدير الملابس',
]

/* ------------------------------------------------------------------ */
/*  Structured data builders                                           */
/* ------------------------------------------------------------------ */

/**
 * Organization only.
 *
 * NOTE: LocalBusiness / ProfessionalService is deliberately NOT used. Those
 * types expect a verifiable street address and opening hours for a place
 * customers can visit. Kemora has no published, verified business address, and
 * publishing an unverified one would be worse than omitting the schema.
 * Add ProfessionalService only once a registered address is confirmed.
 */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: `${siteConfig.url}/`,
  logo: abs(siteConfig.logo),
  image: abs(siteConfig.ogImage),
  email: siteConfig.email,
  description:
    'Kemora is an Egypt-based private-label clothing manufacturing and product-development partner coordinating certified production facilities, sampling, branding, packing and international export support.',
  areaServed: [
    { '@type': 'Place', name: 'Middle East' },
    { '@type': 'Place', name: 'European Union' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'Egypt' },
    { '@type': 'Country', name: 'Saudi Arabia' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'Kuwait' },
    { '@type': 'Country', name: 'Qatar' },
    { '@type': 'Country', name: 'Jordan' },
    { '@type': 'Country', name: 'Iraq' },
    { '@type': 'Country', name: 'Poland' },
    { '@type': 'Country', name: 'Germany' },
    { '@type': 'Country', name: 'Netherlands' },
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Belgium' },
    { '@type': 'Place', name: 'Scandinavia' },
  ],
  knowsAbout: [...topicsEn, ...topicsAr],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: siteConfig.email,
      telephone: `+${contactConfig.whatsappPrimary}`,
      availableLanguage: ['Arabic', 'English'],
    },
  ],
}

export const websiteSchema = (locale: Locale) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: `${siteConfig.url}/`,
  inLanguage: [locale],
  publisher: { '@id': `${siteConfig.url}/#organization` },
})

export const webPageSchema = ({
  locale,
  path,
  name,
  description,
}: {
  locale: Locale
  path: string
  name: string
  description: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${abs(path)}#webpage`,
  url: abs(path),
  name,
  description,
  inLanguage: locale,
  isPartOf: { '@id': `${siteConfig.url}/#website` },
  about: { '@id': `${siteConfig.url}/#organization` },
})

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: abs(item.path),
  })),
})

/** Only ever emit this for FAQs that are actually rendered on the page. */
export const faqSchema = (items: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
})

export const serviceSchema = (locale: Locale) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${siteConfig.url}/#private-label-manufacturing`,
  name:
    locale === 'ar'
      ? 'تصنيع الملابس بنظام Private Label من مصر'
      : 'Private-label garment manufacturing and product development',
  serviceType:
    locale === 'ar' ? 'تصنيع ملابس وتطوير منتجات' : 'Garment manufacturing and product development',
  provider: { '@id': `${siteConfig.url}/#organization` },
  areaServed: [
    { '@type': 'Place', name: 'Middle East' },
    { '@type': 'Place', name: 'European Union' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'United States' },
  ],
  description:
    locale === 'ar'
      ? 'تطوير المنتجات، اختيار الخامات، تطوير العينات، التصنيع عبر مصانع شريكة معتمدة، الطباعة والتطريز، الليبلات والتغليف ومراقبة الجودة ودعم التصدير للبراندات.'
      : 'Product development, fabric sourcing, sampling, production through certified partner factories, printing and embroidery, labels, packaging, quality follow-up and export support for fashion brands.',
})

export const articleSchema = ({
  locale,
  path,
  headline,
  description,
}: {
  locale: Locale
  path: string
  headline: string
  description: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${abs(path)}#article`,
  headline,
  description,
  inLanguage: locale,
  mainEntityOfPage: { '@id': `${abs(path)}#webpage` },
  author: { '@id': `${siteConfig.url}/#organization` },
  publisher: { '@id': `${siteConfig.url}/#organization` },
  image: abs(siteConfig.ogImage),
})

export const productManufacturingServiceSchema = ({
  locale,
  path,
  name,
  description,
}: {
  locale: Locale
  path: string
  name: string
  description: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${abs(path)}#service`,
  name,
  description,
  serviceType: locale === 'ar' ? 'تصنيع ملابس بنظام Private Label' : 'Private-label clothing manufacturing',
  provider: { '@id': `${siteConfig.url}/#organization` },
  areaServed: [
    { '@type': 'Place', name: 'Middle East' },
    { '@type': 'Place', name: 'Europe' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'United States' },
  ],
})
