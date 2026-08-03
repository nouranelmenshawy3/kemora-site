/**
 * Bilingual routing + locale helpers.
 *
 * English is served from the site root ("/"), Arabic from "/ar".
 * Every page has an entry in `routeMap` so the language switcher can send a
 * visitor to the *equivalent* page rather than dumping them on the homepage.
 */

export const locales = ['en', 'ar'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

export const localeConfig: Record<
  Locale,
  { label: string; htmlLang: string; dir: 'ltr' | 'rtl'; ogLocale: string }
> = {
  en: { label: 'English', htmlLang: 'en', dir: 'ltr', ogLocale: 'en_US' },
  ar: { label: 'العربية', htmlLang: 'ar', dir: 'rtl', ogLocale: 'ar_EG' },
}

/** Canonical page keys shared by both languages. */
export type RouteKey =
  | 'home'
  | 'privateLabel'
  | 'products'
  | 'sampling'
  | 'fabrics'
  | 'howItWorks'
  | 'manufacturerEgypt'
  | 'lowMoq'
  | 'international'
  | 'europeanBrands'
  | 'selectedWork'
  | 'startBrand'
  | 'guides'
  | 'guideMoq'
  | 'guideReferenceBrief'
  | 'guideFleece'
  | 'about'
  | 'faq'
  | 'contact'
  | 'privacy'

/**
 * Path for each page in each language.
 * `null` means the page does not exist in that language yet — the language
 * switcher falls back to that language's homepage instead of 404-ing.
 */
export const routeMap: Record<RouteKey, Record<Locale, string | null>> = {
  home: { en: '/', ar: '/ar' },
  privateLabel: { en: '/private-label', ar: '/ar/private-label' },
  products: { en: '/products', ar: '/ar/products' },
  sampling: { en: '/sampling', ar: '/ar/sampling' },
  fabrics: { en: '/fabrics', ar: '/ar/fabrics' },
  howItWorks: { en: '/how-it-works', ar: '/ar/how-it-works' },
  manufacturerEgypt: {
    en: '/clothing-manufacturer-egypt',
    ar: '/ar/clothing-manufacturer-egypt',
  },
  lowMoq: {
    en: '/low-moq-clothing-manufacturer',
    ar: '/ar/low-moq-clothing-manufacturer',
  },
  international: {
    en: '/international-clothing-manufacturing',
    ar: '/ar/international-clothing-manufacturing',
  },
  europeanBrands: { en: '/manufacturing-for-european-brands', ar: null },
  selectedWork: { en: '/selected-work', ar: '/ar/selected-work' },
  startBrand: { en: '/start-clothing-brand', ar: '/ar/start-clothing-brand' },
  guides: { en: '/guides', ar: '/ar/guides' },
  guideMoq: {
    en: '/guides/how-clothing-moq-is-calculated',
    ar: '/ar/guides/how-clothing-moq-is-calculated',
  },
  guideReferenceBrief: {
    en: '/guides/how-to-send-clothing-reference-images',
    ar: '/ar/guides/how-to-send-clothing-reference-images',
  },
  guideFleece: {
    en: '/guides/french-terry-vs-brushed-fleece',
    ar: '/ar/guides/french-terry-vs-brushed-fleece',
  },
  about: { en: '/about', ar: '/ar/about' },
  faq: { en: '/faq', ar: '/ar/faq' },
  contact: { en: '/contact', ar: '/ar/contact' },
  // Legal copy is reviewed in English only for now.
  privacy: { en: '/privacy', ar: null },
}

export const path = (key: RouteKey, locale: Locale): string =>
  routeMap[key][locale] ?? routeMap.home[locale] ?? '/'

/**
 * Privacy policy is maintained in English only. Arabic pages link to the
 * English document rather than to a translated page that does not exist.
 */
export const privacyPath = (locale: Locale): string =>
  routeMap.privacy[locale] ?? routeMap.privacy.en ?? '/privacy'

/**
 * Product-category slugs are intentionally identical in both languages.
 * Latin slugs keep URLs stable, shareable and free of percent-encoding, while
 * the on-page content is fully localised.
 */
export const productCategorySlugs = [
  't-shirts-polos-basics',
  'hoodies-sweatshirts-joggers',
  'pajamas-loungewear',
  'dresses-womens-wear',
  'abayas-modest-wear',
  'activewear',
  'streetwear',
  'resortwear',
  'puffer-jackets-outerwear',
  'workwear-uniforms',
] as const

export type ProductCategorySlug = (typeof productCategorySlugs)[number]

export const productCategoryPath = (slug: string, locale: Locale): string =>
  locale === 'ar' ? `/ar/products/${slug}` : `/products/${slug}`

/** Given a path in one language, return the equivalent path in the other. */
export function alternatePath(currentPath: string, target: Locale): string {
  const normalised = currentPath.replace(/\/+$/, '') || '/'

  const categoryMatch = normalised.match(/^(?:\/ar)?\/products\/([^/]+)$/)
  if (categoryMatch) return productCategoryPath(categoryMatch[1], target)

  const source: Locale = normalised === '/ar' || normalised.startsWith('/ar/') ? 'ar' : 'en'
  const entry = (Object.keys(routeMap) as RouteKey[]).find(
    (key) => routeMap[key][source] === normalised
  )

  return entry ? path(entry, target) : path('home', target)
}

/**
 * hreflang + canonical block for Next.js `metadata.alternates`.
 * Every page self-references its canonical URL and declares both languages,
 * with English as x-default.
 */
export function alternatesFor(enPath: string | null, arPath: string | null, current: Locale) {
  const canonical = current === 'ar' ? arPath : enPath
  const languages: Record<string, string> = {}
  if (enPath) languages['en'] = enPath
  if (arPath) languages['ar'] = arPath
  if (enPath) languages['x-default'] = enPath

  return { canonical: canonical ?? '/', languages }
}

export const alternatesForKey = (key: RouteKey, current: Locale) =>
  alternatesFor(routeMap[key].en, routeMap[key].ar, current)

export const alternatesForCategory = (slug: string, current: Locale) =>
  alternatesFor(productCategoryPath(slug, 'en'), productCategoryPath(slug, 'ar'), current)

/** Direction-aware helper for the rare cases Tailwind logical utilities can't cover. */
export const dirOf = (locale: Locale) => localeConfig[locale].dir
