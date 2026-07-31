import type { Metadata } from 'next'
import SitePage from '@/components/site/SitePage'
import { pagesAr } from '@/content/ar/pages'
import { buildMetadata } from '@/lib/metadata'
import { path } from '@/lib/i18n'

const page = pagesAr.selectedWork

export const metadata: Metadata = buildMetadata(page, 'ar')

export default function Page() {
  return <SitePage locale="ar" page={page} currentPath={path(page.routeKey, 'ar')} />
}
