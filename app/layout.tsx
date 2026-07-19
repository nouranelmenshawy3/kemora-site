import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { seoKeywords, siteConfig } from '@/lib/seo'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'Private Label Clothing Manufacturer Egypt | Kemora',
    template: '%s | Kemora',
  },
  description:
    'Private label clothing manufacturer in Egypt for European brands. Custom T-shirts, hoodies, workwear, abayas, hijabs and EU export support.',
  applicationName: siteConfig.name,
  keywords: seoKeywords,
  authors: [{ name: 'Kemora' }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [{ url: siteConfig.favicon, type: 'image/png', sizes: '96x96' }],
    apple: [{ url: siteConfig.favicon, type: 'image/png', sizes: '96x96' }],
  },
  openGraph: {
    title: 'Private Label Clothing Manufacturer Egypt | Kemora',
    description:
      'Kemora helps European fashion brands source custom clothing from Egypt, including T-shirts, hoodies, workwear, abayas, hijabs, and EU-ready export documentation.',
    url: '/',
    siteName: siteConfig.name,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Kemora custom T-shirts produced in Egypt for a Central Studio collaboration',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private Label Clothing Manufacturer Egypt | Kemora',
    description: 'Custom garment manufacturing in Egypt for European fashion brands.',
    images: [siteConfig.ogImage],
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
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
