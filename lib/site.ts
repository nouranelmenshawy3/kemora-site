import type { Locale } from './i18n'

export const siteConfig = {
  name: 'Kemora',
  url: 'https://www.kemoratex.com',
  email: 'info@kemoratex.com',
  logo: '/kemora-mark.png',
  favicon: '/favicon.png',
  ogImage: '/og-image.jpg',
}

/** Public WhatsApp contact for English and Arabic enquiries. */
export const contactConfig = {
  whatsappPrimary: '201109309608',
  whatsappRegional: null as string | null,
  email: siteConfig.email,
  /** Displayed formatting for the primary number. */
  whatsappPrimaryDisplay: '+20 110 930 9608',
}

/**
 * Official digital-technology partner for brands referred through Kemora.
 * The partnership page explains the offer before sending visitors into the
 * WhyTech enquiry flow, where the `source=kemora` parameter preserves referral
 * context. UTM tags identify the partnership campaign on the destination site.
 */
export const technologyPartner = {
  name: 'WhyTech',
  partnershipUrl: 'https://whytechglobal.com/partners/kemora?utm_source=kemora&utm_medium=referral&utm_campaign=partnership',
  inquiryUrl: 'https://whytechglobal.com/contact?source=kemora&utm_source=kemora&utm_medium=referral&utm_campaign=partnership',
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
  languageSwitch: 'language_switch',
  designUploadIntent: 'design_upload_intent',
  technologyPartnerClick: 'technology_partner_click',
} as const
