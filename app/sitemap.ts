import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site'
import { routeMap, productCategoryPath, productCategorySlugs, type RouteKey } from '@/lib/i18n'

/**
 * Bilingual sitemap.
 *
 * Every entry declares its alternates so Google can pair the English and Arabic
 * versions of the same page, which is what stops them being read as duplicates.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const abs = (p: string) => `${siteConfig.url}${p}`

  const entries: MetadataRoute.Sitemap = []

  const priorityFor = (key: RouteKey) => {
    if (key === 'home') return 1
    if (key === 'privateLabel' || key === 'products' || key === 'contact') return 0.9
    if (key === 'privacy') return 0.3
    return 0.8
  }

  for (const key of Object.keys(routeMap) as RouteKey[]) {
    // The privacy page is served with `robots: noindex`; listing it in the
    // sitemap would contradict that directive.
    if (key === 'privacy') continue

    const { en, ar } = routeMap[key]
    const languages: Record<string, string> = {}
    if (en) languages.en = abs(en)
    if (ar) languages.ar = abs(ar)
    if (en) languages['x-default'] = abs(en)

    for (const url of [en, ar]) {
      if (!url) continue
      entries.push({
        url: abs(url),
        changeFrequency: key === 'home' ? 'weekly' : 'monthly',
        priority: priorityFor(key),
        alternates: { languages },
      })
    }
  }

  for (const slug of productCategorySlugs) {
    const en = productCategoryPath(slug, 'en')
    const ar = productCategoryPath(slug, 'ar')
    const languages = { en: abs(en), ar: abs(ar), 'x-default': abs(en) }

    for (const url of [en, ar]) {
      entries.push({
        url: abs(url),
        changeFrequency: 'monthly',
        priority: 0.8,
        alternates: { languages },
      })
    }
  }

  return entries
}
