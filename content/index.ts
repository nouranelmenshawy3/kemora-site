import type { Locale } from '@/lib/i18n'
import type { CommonContent, Fabric, ProductCategory, WorkItem } from './types'

import { commonEn } from './en/common'
import { commonAr } from './ar/common'
import { pagesEn } from './en/pages'
import { pagesAr } from './ar/pages'
import { productCategoriesEn } from './en/products'
import { productCategoriesAr } from './ar/products'
import { fabricsEn, finishingEn } from './en/fabrics'
import { fabricsAr, finishingAr } from './ar/fabrics'
import { workEn } from './en/work'
import { workAr } from './ar/work'

export const getCommon = (locale: Locale): CommonContent => (locale === 'ar' ? commonAr : commonEn)

export const getPages = (locale: Locale) => (locale === 'ar' ? pagesAr : pagesEn)

export const getProductCategories = (locale: Locale): ProductCategory[] =>
  locale === 'ar' ? productCategoriesAr : productCategoriesEn

export const getProductCategory = (locale: Locale, slug: string): ProductCategory | undefined =>
  getProductCategories(locale).find((c) => c.slug === slug)

export const getFabrics = (locale: Locale): Fabric[] => (locale === 'ar' ? fabricsAr : fabricsEn)

export const getFinishing = (locale: Locale) => (locale === 'ar' ? finishingAr : finishingEn)

/** All work items, including those withheld from publication. */
export const getAllWork = (locale: Locale): WorkItem[] => (locale === 'ar' ? workAr : workEn)

/** Only items cleared for public display. Always use this for rendering. */
export const getWork = (locale: Locale): WorkItem[] =>
  getAllWork(locale).filter((item) => item.published)

export type { CommonContent, Fabric, ProductCategory, WorkItem }
