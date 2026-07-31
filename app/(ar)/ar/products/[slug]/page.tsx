import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProductCategoryPage from '@/components/site/ProductCategoryPage'
import { getProductCategories, getProductCategory } from '@/content'
import { buildCategoryMetadata } from '@/lib/metadata'

export function generateStaticParams() {
  return getProductCategories('ar').map((category) => ({ slug: category.slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const category = getProductCategory('ar', slug)
  if (!category) return {}
  return buildCategoryMetadata(category, 'ar')
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = getProductCategory('ar', slug)
  if (!category) notFound()
  return <ProductCategoryPage locale="ar" category={category} />
}
