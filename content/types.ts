import type { Locale, RouteKey } from '@/lib/i18n'

export interface Cta {
  label: string
  href: string
  /** Visual weight. */
  variant?: 'primary' | 'secondary' | 'whatsapp'
  /** Analytics event fired on click (from lib/site.ts `analyticsEvents`). */
  event?: string
  external?: boolean
}

export interface Card {
  title: string
  body: string
  /** Optional bullet list under the body. */
  points?: string[]
  href?: string
}

export interface Step {
  title: string
  body: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface Fabric {
  name: string
  use: string
  feel: string
  /** Only stated where a realistic range is known; omitted otherwise. */
  gsm?: string
  advantage: string
}

/**
 * How a portfolio image may be presented. This is deliberately explicit so no
 * image can be published without the team declaring what it actually is.
 */
export type WorkType = 'project' | 'sample' | 'concept'

export interface WorkItem {
  id: string
  title: string
  note: string
  src: string
  alt: string
  workType: WorkType
  /**
   * Whether the image may be shown publicly. Items are kept in the content file
   * even when withheld, so nothing is silently deleted — set to `true` only once
   * `permissionNote` has been resolved.
   */
  published: boolean
  /** Outstanding rights/permission question, or provenance note. */
  permissionNote?: string
  featured?: boolean
  objectPosition?: string
}

export interface ProductCategory {
  slug: string
  /** Short label used in grids and navigation. */
  name: string
  /** One-line summary used on the products overview page. */
  summary: string
  /** Page-level copy. */
  title: string
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string
  /** Specific garment types within the category. */
  items: string[]
  /** Fabric names typically used for this category. */
  fabrics: string[]
  /** Finishing / branding options relevant to this category. */
  finishing: string[]
  /** Category-specific development notes — this is what stops these being thin pages. */
  developmentNotes: { title: string; body: string }[]
  faqs: FaqItem[]
}

export type Section =
  | {
      kind: 'prose'
      eyebrow?: string
      heading?: string
      lead?: string
      paragraphs?: string[]
      tone?: 'default' | 'muted' | 'dark'
    }
  | {
      kind: 'cards'
      eyebrow?: string
      heading?: string
      lead?: string
      items: Card[]
      columns?: 2 | 3 | 4
      note?: string
      tone?: 'default' | 'muted' | 'dark'
    }
  | {
      kind: 'steps'
      eyebrow?: string
      heading?: string
      lead?: string
      items: Step[]
      note?: string
      tone?: 'default' | 'muted' | 'dark'
    }
  | {
      kind: 'checklist'
      eyebrow?: string
      heading?: string
      lead?: string
      items: string[]
      note?: string
      tone?: 'default' | 'muted' | 'dark'
    }
  | {
      kind: 'faq'
      eyebrow?: string
      heading?: string
      lead?: string
      items: FaqItem[]
      tone?: 'default' | 'muted' | 'dark'
    }
  | {
      kind: 'productGrid'
      eyebrow?: string
      heading?: string
      lead?: string
      note?: string
      tone?: 'default' | 'muted' | 'dark'
    }
  | {
      kind: 'work'
      eyebrow?: string
      heading?: string
      lead?: string
      note?: string
      limit?: number
      grouped?: boolean
      tone?: 'default' | 'muted' | 'dark'
    }
  | {
      kind: 'fabrics'
      eyebrow?: string
      heading?: string
      lead?: string
      note?: string
      tone?: 'default' | 'muted' | 'dark'
    }
  | {
      kind: 'imageFeature'
      eyebrow?: string
      heading: string
      lead: string
      image: {
        src: string
        alt: string
        objectPosition?: string
      }
      items: string[]
      ctas?: Cta[]
      tone?: 'default' | 'muted' | 'dark'
      reverse?: boolean
    }
  | {
      kind: 'cta'
      heading: string
      body?: string
      ctas: Cta[]
      tone?: 'default' | 'muted' | 'dark'
    }
  | { kind: 'contactForm'; eyebrow?: string; heading?: string; lead?: string }

export interface PageHero {
  eyebrow?: string
  h1: string
  lead: string
  supporting?: string
  /** Optional real image used as the hero background. */
  backgroundImage?: {
    src: string
    alt: string
    objectPosition?: string
  }
  ctas?: Cta[]
  /** Small trust/qualifier strip under the CTAs. */
  highlights?: string[]
}

export interface PageContent {
  routeKey: RouteKey
  metaTitle: string
  metaDescription: string
  ogTitle?: string
  ogDescription?: string
  breadcrumbLabel: string
  hero: PageHero
  sections: Section[]
  /** FAQs rendered on the page; also used to emit FAQPage schema. */
  faqForSchema?: FaqItem[]
}

export interface NavEntry {
  key: RouteKey
  label: string
}

export interface CommonContent {
  locale: Locale
  nav: NavEntry[]
  /** Extended navigation used in the footer without crowding the main menu. */
  footerNav?: NavEntry[]
  brandTagline: string
  skipToContent: string
  languageSwitch: { label: string; toEnglish: string; toArabic: string }
  cta: {
    startProject: string
    requestSample: string
    sendDesign: string
    bookMeeting: string
    whatsapp: string
    contact: string
    viewAll: string
    learnMore: string
  }
  workLabels: Record<WorkType, string>
  confidentialityNote: string
  capabilityDisclaimer: string
  footer: {
    about: string
    navHeading: string
    contactHeading: string
    emailLabel: string
    whatsappLabel: string
    rights: string
    privacy: string
    locations: string
    status: string
  }
  form: {
    heading: string
    lead: string
    name: string
    namePlaceholder: string
    brand: string
    brandOptional: string
    email: string
    whatsapp: string
    whatsappHint: string
    country: string
    countryPlaceholder: string
    preferredLanguage: string
    languageOptions: { value: string; label: string }[]
    productCategory: string
    productCategoryPlaceholder: string
    quantity: string
    quantityPlaceholder: string
    hasDesigns: string
    hasDesignsOptions: { value: string; label: string }[]
    message: string
    messagePlaceholder: string
    messageOptional: string
    messageHint: string
    projectDetailsRequired: string
    consent: string
    consentLink: string
    submit: string
    sending: string
    success: string
    successDetail: string
    error: string
    attachmentTooLargeError: string
    required: string
    optional: string
    noTechPackNote: string
  }
  breadcrumbHome: string
}
