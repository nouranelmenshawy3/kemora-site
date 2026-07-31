import { Inter, IBM_Plex_Sans_Arabic } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

/**
 * Inter has no Arabic coverage, so Arabic pages would otherwise fall back to a
 * system font and render inconsistently across devices. IBM Plex Sans Arabic
 * pairs with Inter and covers the Latin brand name inside Arabic copy.
 */
export const arabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic', 'latin'],
  variable: '--font-arabic',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})
