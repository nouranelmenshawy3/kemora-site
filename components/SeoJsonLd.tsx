import { homepageStructuredData } from '@/lib/seo'

export default function SeoJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(homepageStructuredData).replace(/</g, '\\u003c'),
      }}
    />
  )
}
