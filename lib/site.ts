import type { Locale } from './i18n'

export const siteConfig = {
  name: 'Kemora',
  url: 'https://kemoratex.com',
  email: 'info@kemoratex.com',
  logo: '/kemora-mark.png',
  favicon: '/favicon.png',
  ogImage: '/og-image.jpg',
}

/**
 * Contact channels.
 *
 * `whatsappPrimary` is the number already published on the live site (Poland).
 *
 * TODO [BUSINESS INPUT REQUIRED] — Middle East enquiries:
 * If Kemora has an Egyptian or Gulf WhatsApp number for regional clients, add it
 * as `whatsappRegional` below and it will automatically be used on all Arabic
 * pages. No number has been invented here. While `whatsappRegional` is null, the
 * Arabic pages fall back to the existing international number.
 */
export const contactConfig = {
  whatsappPrimary: '48575379875',
  whatsappRegional: null as string | null,
  email: siteConfig.email,
  /** Displayed formatting for the primary number. */
  whatsappPrimaryDisplay: '+48 575 379 875',
}

export const whatsappNumberFor = (locale: Locale): string =>
  (locale === 'ar' ? contactConfig.whatsappRegional : null) ?? contactConfig.whatsappPrimary

/** Pre-filled WhatsApp deep link, localised. */
export function whatsappLink(locale: Locale, message?: string): string {
  const text =
    message ??
    (locale === 'ar'
      ? 'مرحبًا، أرغب في مناقشة مشروع تصنيع ملابس بنظام Private Label مع Kemora.'
      : 'Hello, I would like to discuss a private-label clothing project with Kemora.')

  return `https://wa.me/${whatsappNumberFor(locale)}?text=${encodeURIComponent(text)}`
}

/**
 * Analytics event names (Vercel Analytics custom events).
 * Documented in docs/ANALYTICS.md — keep the two in sync.
 * No new analytics vendor is introduced.
 */
export const analyticsEvents = {
  whatsappClick: 'whatsapp_click',
  contactFormSubmit: 'contact_form_submit',
  sampleRequestClick: 'sample_request_click',
  meetingBookingClick: 'meeting_booking_click',
  languageSwitch: 'language_switch',
  designUploadIntent: 'design_upload_intent',
} as const
