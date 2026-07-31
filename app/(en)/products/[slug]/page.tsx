import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProductCategoryPage from '@/components/site/ProductCategoryPage'
import { getProductCategories, getProductCategory } from '@/content'
import { buildCategoryMetadata } from '@/lib/metadata'

export function generateStaticParams() {
  return getProductCategories('en').map((category) => ({ slug: category.slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const category = getProductCategory('en', slug)
  if (!category) return {}
  return buildCategoryMetadata(category, 'en')
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = getProductCategory('en', slug)
  if (!category) notFound()
  return <ProductCategoryPage locale="en" category={category} />
}
