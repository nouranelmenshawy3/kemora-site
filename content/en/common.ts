import type { CommonContent } from '../types'
import { publishedCopy } from '@/lib/claims'

export const commonEn: CommonContent = {
  locale: 'en',
  nav: [
    { key: 'home', label: 'Home' },
    { key: 'privateLabel', label: 'Private Label' },
    { key: 'products', label: 'Products' },
    { key: 'sampling', label: 'Sampling' },
    { key: 'fabrics', label: 'Fabrics & Finishes' },
    { key: 'howItWorks', label: 'How It Works' },
    { key: 'europeanBrands', label: 'European Brands' },
    { key: 'selectedWork', label: 'Selected Work' },
    { key: 'about', label: 'About' },
    { key: 'faq', label: 'FAQ' },
    { key: 'contact', label: 'Contact' },
  ],
  brandTagline:
    'Private-label garment manufacturing and product development from Egypt, for fashion brands in Europe and the Middle East.',
  skipToContent: 'Skip to main content',
  languageSwitch: {
    label: 'Language',
    toEnglish: 'English',
    toArabic: 'العربية',
  },
  cta: {
    startProject: 'Start Your Project',
    requestSample: 'Request a Sample',
    sendDesign: 'Send Your Design',
    bookMeeting: 'Book a Meeting',
    whatsapp: 'Contact Us on WhatsApp',
    contact: 'Contact Us',
    viewAll: 'View all',
    learnMore: 'Learn more',
  },
  workLabels: {
    project: 'Selected Project Work',
    sample: 'Sample Development',
    concept: 'Concept Visual — For Direction Only',
  },
  confidentialityNote: publishedCopy.confidentiality.en,
  capabilityDisclaimer: publishedCopy.capabilityDisclaimer.en,
  footer: {
    about:
      'Kemora is an Egypt-based private-label garment manufacturing and product-development partner. We develop and produce to each brand’s own designs — we do not sell a ready-made collection.',
    navHeading: 'Navigation',
    contactHeading: 'Contact',
    emailLabel: 'Email',
    whatsappLabel: 'WhatsApp',
    rights: 'All rights reserved.',
    privacy: 'Privacy Policy',
    locations: 'Egypt · Poland',
    status: 'Currently accepting new projects',
  },
  form: {
    heading: 'Tell us about your project',
    lead:
      'Share what you have — a sketch, a reference photo, an existing sample or a full tech pack. A tech pack is not required to start.',
    name: 'Name',
    namePlaceholder: 'Your full name',
    brand: 'Brand name',
    brandOptional: 'optional',
    email: 'Email',
    whatsapp: 'WhatsApp number',
    whatsappHint: 'Optional — email is enough if you prefer. Include your country code if you share WhatsApp.',
    country: 'Country',
    countryPlaceholder: 'e.g. Saudi Arabia, Egypt, Poland',
    preferredLanguage: 'Preferred language',
    languageOptions: [
      { value: 'english', label: 'English' },
      { value: 'arabic', label: 'Arabic' },
    ],
    productCategory: 'Product category',
    productCategoryPlaceholder: 'Select a category',
    quantity: 'Estimated quantity',
    quantityPlaceholder: 'e.g. 100 pieces per style',
    hasDesigns: 'Do you have designs or reference images?',
    hasDesignsOptions: [
      { value: 'tech-pack', label: 'Yes — full tech pack' },
      { value: 'sketches', label: 'Yes — sketches or reference images' },
      { value: 'sample', label: 'Yes — an existing physical sample' },
      { value: 'none', label: 'Not yet — I need help developing the product' },
    ],
    message: 'Message',
    messagePlaceholder:
      'Tell us about the product, fabric, fit or quantity you have in mind. Anything you are unsure about is fine to leave open.',
    consent:
      'I consent to Kemora processing my details solely to respond to this enquiry, as described in the',
    consentLink: 'Privacy Policy',
    submit: 'Send Enquiry',
    sending: 'Sending…',
    success: 'Thank you — your enquiry has been sent.',
    successDetail: 'We typically respond within one business day.',
    error:
      'Something went wrong and your enquiry was not sent. Please try again, or email us directly at info@kemoratex.com.',
    attachmentTooLargeError:
      'The attached files are too large for this form. Please attach up to 5 files, 3 MB total, or send larger PDFs by email or WhatsApp after submitting.',
    required: 'required',
    optional: 'optional',
    noTechPackNote:
      'No tech pack? That is completely normal for a first collection — a photo or sketch is enough to begin.',
  },
  breadcrumbHome: 'Home',
}
