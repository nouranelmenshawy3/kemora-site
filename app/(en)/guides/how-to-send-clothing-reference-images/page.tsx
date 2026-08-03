import type { Metadata } from 'next'
import SitePage from '@/components/site/SitePage'
import { pagesEn } from '@/content/en/pages'
import { buildMetadata } from '@/lib/metadata'
import { path } from '@/lib/i18n'

const page = pagesEn.guideReferenceBrief

export const metadata: Metadata = buildMetadata(page, 'en')

export default function Page() {
  return <SitePage locale="en" page={page} currentPath={path(page.routeKey, 'en')} />
}
