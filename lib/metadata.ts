import type { Metadata } from 'next'
import type { PageContent, ProductCategory } from '@/content/types'
import {
  alternatesForKey,
  alternatesForCategory,
  localeConfig,
  productCategoryPath,
  path,
  type Locale,
} from './i18n'
import { siteConfig } from './site'

const ogLocaleAlternate = (locale: Locale) => (locale === 'ar' ? 'en_US' : 'ar_EG')

/**
 * Builds page metadata with a self-referencing canonical, hreflang alternates
 * (including x-default) and Open Graph / Twitter tags.
 *
 * `title.absolute` is used so the layout template does not append a second
 * "| Kemora" to titles that already contain the brand.
 */
export function buildMetadata(page: PageContent, locale: Locale): Metadata {
  const url = path(page.routeKey, locale)

  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: alternatesForKey(page.routeKey, locale),
    openGraph: {
      title: page.ogTitle ?? page.metaTitle,
      description: page.ogDescription ?? page.metaDescription,
      url,
      siteName: siteConfig.name,
      type: 'website',
      locale: localeConfig[locale].ogLocale,
      alternateLocale: [ogLocaleAlternate(locale)],
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt:
            locale === 'ar'
              ? 'Kemora — تصنيع ملابس بنظام Private Label من مصر'
              : 'Kemora — private-label garment manufacturing from Egypt',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.ogTitle ?? page.metaTitle,
      description: page.ogDescription ?? page.metaDescription,
      images: [siteConfig.ogImage],
    },
  }
}

export function buildCategoryMetadata(category: ProductCategory, locale: Locale): Metadata {
  const url = productCategoryPath(category.slug, locale)

  return {
    title: { absolute: category.metaTitle },
    description: category.metaDescription,
    alternates: alternatesForCategory(category.slug, locale),
    openGraph: {
      title: category.metaTitle,
      description: category.metaDescription,
      url,
      siteName: siteConfig.name,
      type: 'website',
      locale: localeConfig[locale].ogLocale,
      alternateLocale: [ogLocaleAlternate(locale)],
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: category.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: category.metaTitle,
      description: category.metaDescription,
      images: [siteConfig.ogImage],
    },
  }
}
