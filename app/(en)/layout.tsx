import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { inter, arabic } from '@/lib/fonts'
import { siteConfig } from '@/lib/site'
import '../globals.css'

/**
 * English root layout.
 *
 * English and Arabic use separate root layouts (via the (en) / (ar) route
 * groups) so that `lang` and `dir` are rendered on the server per language,
 * rather than being patched on the client.
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Private-Label Clothing Manufacturer in Egypt | Kemora',
    template: '%s | Kemora',
  },
  description:
    'Kemora is an Egypt-based private-label garment manufacturer and product-development partner for fashion brands in the Middle East and Europe.',
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  icons: {
    icon: [{ url: siteConfig.favicon, type: 'image/png', sizes: '96x96' }],
    apple: [{ url: siteConfig.favicon, type: 'image/png', sizes: '96x96' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'Apparel manufacturing',
  formatDetection: { email: false, address: false, telephone: false },
}

export default function EnRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${inter.variable} ${arabic.variable} scroll-smooth`}>
      <body className="bg-white font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
