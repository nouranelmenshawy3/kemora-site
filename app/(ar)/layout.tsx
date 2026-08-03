import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { inter, arabic } from '@/lib/fonts'
import { siteConfig } from '@/lib/site'
import '../globals.css'

/**
 * Arabic root layout — `lang="ar"` and `dir="rtl"` are server-rendered.
 * Every page under /ar inherits this layout.
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'مصنع ملابس للبراندات في مصر | Kemora',
    template: '%s | Kemora',
  },
  description:
    'Kemora شريك لتطوير وتصنيع ملابس Private Label في مصر للبراندات الدولية، مع عينات ومصانع شريكة معتمدة ودعم للتصدير.',
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

export default function ArRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${inter.variable} ${arabic.variable} scroll-smooth`}>
      <body className="bg-white font-arabic">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
