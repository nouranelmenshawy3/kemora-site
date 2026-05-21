import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Kemora – Egyptian Private Label Clothing Manufacturer for European Brands',
  description:
    'Kemora offers private label clothing manufacturing with 0% EU duty, 14-day delivery to Poland, and a Poland-based client manager. T-shirts, hoodies, uniforms, and more.',
  keywords: [
    'garment manufacturing',
    'private label clothing',
    'Egypt manufacturer',
    'European clothing brands',
    'Polish fashion brands',
    'EU duty free',
    'textile export Egypt',
  ],
  authors: [{ name: 'Kemora' }],
  metadataBase: new URL('https://kemoratex.com'),
  openGraph: {
    title: 'Kemora – Egyptian Private Label Clothing Manufacturer',
    description:
      'Private Label | 0% EU Duty | 14-Day Delivery to Poland. Quality garment manufacturing from Egypt for European brands.',
    url: 'https://kemoratex.com',
    siteName: 'Kemora',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kemora – Egyptian Garment Manufacturer for European Brands',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kemora – Egyptian Private Label Clothing Manufacturer',
    description: 'Private Label | 0% EU Duty | 14-Day Delivery to Poland',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
