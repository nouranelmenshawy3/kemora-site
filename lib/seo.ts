export const siteConfig = {
  name: 'Kemora',
  url: 'https://kemoratex.com',
  email: 'info@kemoratex.com',
  phone: '+48575379875',
  whatsapp: 'https://wa.me/48575379875',
  logo: '/kemora-mark.png',
  favicon: '/favicon.png',
  ogImage: '/og-image.jpg',
}

const absoluteUrl = (path: string) => `${siteConfig.url}${path}`

export const seoKeywords = [
  'private label clothing manufacturer Egypt',
  'garment manufacturer Egypt',
  'apparel supplier Egypt',
  'custom clothing manufacturer Egypt',
  'hoodie manufacturer Egypt',
  'T-shirt manufacturer Egypt',
  'abaya manufacturer Egypt',
  'hijab manufacturer',
  'workwear manufacturer Egypt',
  'clothing export partner for European brands',
  'Egyptian garment factory',
  'private label apparel manufacturer',
  'EU duty free clothing manufacturing',
  'garment export Egypt to Europe',
  'fashion production Egypt',
]

export const faqItems = [
  {
    question: 'Is Kemora a private label clothing manufacturer in Egypt?',
    answer:
      'Yes. Kemora connects European fashion brands with private label clothing manufacturing in Cairo, Egypt, with direct factory oversight and a Poland-based client contact.',
  },
  {
    question: 'What garments can Kemora manufacture?',
    answer:
      'We support custom T-shirts, hoodies, sweatshirts, polo shirts, denim, workwear, uniforms, abayas, resortwear, lounge sets, bags, and accessories, depending on fabric, construction, and order size.',
  },
  {
    question: 'Do you work with European fashion brands?',
    answer:
      'Yes. Kemora is built for European brands that want Egyptian manufacturing value with clearer communication, EU-focused documentation, and support from Poland, Cairo, and export partners.',
  },
  {
    question: 'What are the usual sample and production timelines?',
    answer:
      'Pre-production samples usually take 2-3 weeks. Bulk production usually takes 3-5 weeks after sample approval and deposit, depending on quantity, fabric availability, and garment complexity.',
  },
  {
    question: 'Can you export clothing from Egypt to the European Union?',
    answer:
      'Yes. Kemora ships FOB Alexandria and provides export documentation, including EUR.1 certificate support for eligible shipments under the EU-Egypt trade agreement.',
  },
]

export const homepageStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: `${siteConfig.url}/`,
    logo: absoluteUrl(siteConfig.logo),
    image: absoluteUrl(siteConfig.ogImage),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    description:
      'Kemora is an Egyptian private label clothing manufacturer and garment export partner for European fashion brands.',
    areaServed: [
      { '@type': 'Place', name: 'European Union' },
      { '@type': 'Country', name: 'Poland' },
      { '@type': 'Country', name: 'Egypt' },
    ],
    knowsAbout: seoKeywords,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: siteConfig.email,
        telephone: siteConfig.phone,
        availableLanguage: ['English', 'Arabic', 'Polish'],
        areaServed: ['EU', 'PL', 'EG'],
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: `${siteConfig.url}/`,
    inLanguage: 'en',
    publisher: { '@id': `${siteConfig.url}/#organization` },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${siteConfig.url}/#webpage`,
    url: `${siteConfig.url}/`,
    name: 'Private Label Clothing Manufacturer Egypt | Kemora',
    description:
      'Private label garment manufacturing in Egypt for European brands, including custom T-shirts, hoodies, workwear, abayas, and EU export support.',
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    about: { '@id': `${siteConfig.url}/#organization` },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: absoluteUrl(siteConfig.ogImage),
      width: 1200,
      height: 630,
    },
    keywords: seoKeywords.join(', '),
    inLanguage: 'en',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}/#private-label-clothing-manufacturing`,
    name: 'Private label clothing manufacturing in Egypt',
    serviceType: 'Garment manufacturing and apparel export',
    provider: { '@id': `${siteConfig.url}/#organization` },
    areaServed: [
      { '@type': 'Place', name: 'European Union' },
      { '@type': 'Country', name: 'Poland' },
      { '@type': 'Country', name: 'Germany' },
      { '@type': 'Country', name: 'Netherlands' },
      { '@type': 'Country', name: 'France' },
    ],
    description:
      'Custom apparel manufacturing and export support for European fashion brands sourcing from Egypt.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Kemora garment manufacturing categories',
      itemListElement: [
        'Private label T-shirt manufacturing',
        'Custom hoodie and sweatshirt manufacturing',
        'Workwear and uniform manufacturing',
        'Abaya and modestwear manufacturing',
        'Hijab and scarf manufacturing',
        'Denim and woven garment production',
        'Resortwear and lounge set production',
      ].map((name) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name,
        },
      })),
    },
  },
]
