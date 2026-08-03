import type { PageContent } from '../types'
import { path, productCategoryPath } from '@/lib/i18n'
import { whatsappLink, analyticsEvents } from '@/lib/site'
import { publishedCopy } from '@/lib/claims'

const wa = whatsappLink('en')

const primaryCtas = [
  {
    label: 'Discuss Your Project',
    href: path('contact', 'en'),
    variant: 'primary' as const,
    event: analyticsEvents.sampleRequestClick,
  },
  {
    label: 'Contact Us on WhatsApp',
    href: wa,
    variant: 'whatsapp' as const,
    event: analyticsEvents.whatsappClick,
    external: true,
  },
]

/* ------------------------------------------------------------------ */
/*  HOME                                                               */
/* ------------------------------------------------------------------ */

export const homeEn: PageContent = {
  routeKey: 'home',
  metaTitle: 'Private Label Clothing Manufacturer Egypt | Kemora',
  metaDescription:
    'Private-label clothing manufacturer in Egypt for international brands. MOQ from 50 pieces per colour, sampling, sourcing, branding, packaging, QC and export support.',
  ogTitle: 'Private Label Clothing Manufacturer in Egypt | Kemora',
  ogDescription:
    'Develop and manufacture under your own label with MOQ from 50 pieces per colour, certified production partners and international export support.',
  breadcrumbLabel: 'Home',
  hero: {
    eyebrow: 'Made in Egypt · Built for international brands',
    h1: 'Private-label clothing manufacturing in Egypt',
    lead:
      'Kemora develops and manufactures custom clothing for fashion brands — from sourcing and sampling to private-label production, branding, packaging, quality control and export support.',
    supporting:
      'MOQ starts from 50 pieces per colour for suitable styles. Send a reference photo, sketch, sample or tech pack and we will turn it into a clear production brief.',
    backgroundImage: {
      src: '/egypt-factory.jpeg',
      alt: 'Garment production machine working on dark fabric in an Egyptian factory',
      objectPosition: '46% 50%',
    },
    ctas: [
      {
        label: 'Discuss Your Project',
        href: path('contact', 'en'),
        variant: 'primary',
        event: analyticsEvents.sampleRequestClick,
      },
      {
        label: 'See What We Make',
        href: path('products', 'en'),
        variant: 'secondary',
      },
      {
        label: 'Contact Us on WhatsApp',
        href: wa,
        variant: 'whatsapp',
        event: analyticsEvents.whatsappClick,
        external: true,
      },
    ],
    highlights: [
      'MOQ from 50 pieces per colour',
      'Certified partner factories',
      'High production capacity',
      'International shipping support',
    ],
  },
  sections: [
    {
      kind: 'cards',
      eyebrow: 'What We Do',
      heading: 'A manufacturing partner, not a wholesaler',
      lead:
        'Kemora sits between your brand and the factory floor. We handle product development and production so that you can work with one contact instead of coordinating suppliers yourself.',
      columns: 3,
      items: [
        {
          title: 'Product development',
          body:
            'We review your designs, sketches, reference images or samples and advise on construction, fabric and fit before anything is cut.',
          href: path('privateLabel', 'en'),
        },
        {
          title: 'Fabric sourcing',
          body:
            'We source fabrics and trims to your specification and recommend alternatives when a fabric is unavailable or does not suit the product.',
          href: path('fabrics', 'en'),
        },
        {
          title: 'Pattern and sampling',
          body:
            'Patterns are developed to your measurements, and a physical sample is produced for approval before bulk production begins.',
          href: path('sampling', 'en'),
        },
        {
          title: 'Private-label production',
          body:
            'Bulk production runs against the approved sample and an agreed specification sheet, under your brand’s labels.',
          href: path('howItWorks', 'en'),
        },
        {
          title: 'Branding and finishing',
          body:
            'Printing, embroidery, woven labels, care labels, hang tags, polybags and packaging are prepared to your brand’s specification.',
          href: path('fabrics', 'en'),
        },
        {
          title: 'Quality control and shipping',
          body: `${publishedCopy.qualityControl.en} We also coordinate export documentation and freight.`,
          href: path('howItWorks', 'en'),
        },
      ],
    },
    {
      kind: 'productGrid',
      eyebrow: 'Product Categories',
      heading: 'What we produce',
      lead:
        'Knitted and woven garments across everyday, loungewear, modest and uniform categories. Each category page explains how that product is actually developed.',
      note: publishedCopy.capabilityDisclaimer.en,
    },
    {
      kind: 'imageFeature',
      eyebrow: 'Start Here',
      heading: 'A reference photo is enough to begin',
      lead:
        'The first conversation should not feel like homework. Send what you already have, and we will turn it into the questions that matter for sampling: construction, fabric, fit, quantity and branding.',
      image: {
        src: '/home/reference-puffer-jackets-chevron.jpg',
        alt: 'Chevron-quilted puffer jackets on a garment rail in sage, cream, black and tan colourways',
        objectPosition: '50% 46%',
      },
      items: [
        'Reference image, sketch, tech pack or physical sample',
        'Target quantity, size range and launch market',
        'Preferred fabric feel, weight or target price point',
        'Branding needs such as labels, hang tags and packaging',
      ],
      ctas: [
        {
          label: 'Discuss Your Project',
          href: path('contact', 'en'),
          variant: 'primary',
          event: analyticsEvents.sampleRequestClick,
        },
        {
          label: 'View Selected Work',
          href: path('selectedWork', 'en'),
          variant: 'secondary',
        },
      ],
      tone: 'muted',
      reverse: true,
    },
    {
      kind: 'checklist',
      eyebrow: 'New Brands',
      heading: 'Starting a clothing brand?',
      lead:
        'Most of the brands we work with start without a tech pack. That is normal, and it is not a barrier to getting started.',
      items: [
        'Deciding which products to launch with, and how many',
        'Reducing a long wishlist to a realistic first collection',
        'Fabric recommendations for your product and price point',
        'Fit direction and size range',
        'Sample development and revisions',
        'Writing down the product specification properly',
        'Labels, hang tags and packaging',
        'Planning quantities and production timing',
      ],
      note: publishedCopy.extraServices.en,
      tone: 'muted',
    },
    {
      kind: 'fabrics',
      eyebrow: 'Fabrics & Finishes',
      heading: 'Fabrics, printing, labels and packaging',
      lead:
        'Fabric choice is usually the single biggest decision in a project — it sets the hand feel, the fit behaviour and most of the cost.',
      note: publishedCopy.fabricSelection.en,
      tone: 'muted',
    },
    {
      kind: 'work',
      eyebrow: 'Selected Work',
      heading: 'Samples and selected project work',
      lead:
        'Every image below is labelled so you can see exactly what it is — delivered project work, a physical sample, or a concept visual.',
      note: publishedCopy.confidentiality.en,
      limit: 6,
    },
    {
      kind: 'cards',
      eyebrow: 'Why Kemora',
      heading: 'Why brands work with us',
      columns: 3,
      items: [
        {
          title: 'MOQ from 50 pieces per colour',
          body: publishedCopy.moq.en,
          href: path('lowMoq', 'en'),
        },
        {
          title: 'Certified production partners',
          body: publishedCopy.certifications.en,
          href: path('manufacturerEgypt', 'en'),
        },
        {
          title: 'Capacity that can scale',
          body: publishedCopy.capacity.en,
          href: path('manufacturerEgypt', 'en'),
        },
        {
          title: 'International export coordination',
          body: publishedCopy.internationalShipping.en,
          href: path('international', 'en'),
        },
        {
          title: 'One accountable point of contact',
          body:
            'Product development, fabric, trims, printing, labels, packaging, quality follow-up and freight coordination stay connected through one team.',
          href: path('howItWorks', 'en'),
        },
        {
          title: 'Confidentiality by default',
          body:
            'Your designs and project details are not shared with other clients, and your brand is not published as a reference without permission.',
          href: path('selectedWork', 'en'),
        },
      ],
    },
    {
      kind: 'faq',
      eyebrow: 'FAQ',
      heading: 'Common questions',
      items: [
        {
          question: 'What is private label manufacturing?',
          answer:
            'It means the garments are produced to your brand’s own designs and specification, and sold under your brand. Kemora does not sell a ready-made factory collection — nothing is produced until you have approved what it should be.',
        },
        {
          question: 'Can I send a photo instead of a tech pack?',
          answer:
            'Yes. A photo, a sketch or an existing garment is enough to start. A tech pack makes things faster but it is not required, and most first-time brands do not have one.',
        },
        {
          question: 'What is the minimum order quantity?',
          answer: publishedCopy.moq.en,
        },
        {
          question: 'How long does a sample take?',
          answer: publishedCopy.sampleLeadTime.en,
        },
        {
          question: 'Do you work with brands that are just starting?',
          answer:
            'Yes. A significant part of our work is first collections. We will tell you honestly if a product or quantity is not realistic to produce, rather than taking the order and disappointing you later.',
        },
        {
          question: 'Will you show my designs to anyone else?',
          answer:
            'No. Client designs and project details are confidential, and we do not publish brand names or designs without written permission.',
        },
        {
          question: 'Do you work with certified factories?',
          answer: publishedCopy.certifications.en,
        },
        {
          question: 'Where can you ship?',
          answer: publishedCopy.internationalShipping.en,
        },
      ],
    },
    {
      kind: 'cta',
      heading: 'Send us your design or reference images',
      body:
        'Tell us what you want to make. If you are not sure where to start, that is a normal place to begin a conversation.',
      ctas: primaryCtas,
      tone: 'dark',
    },
  ],
  faqForSchema: [
    {
      question: 'What is private label manufacturing?',
      answer:
        'It means the garments are produced to your brand’s own designs and specification, and sold under your brand. Kemora does not sell a ready-made factory collection — nothing is produced until you have approved what it should be.',
    },
    {
      question: 'Can I send a photo instead of a tech pack?',
      answer:
        'Yes. A photo, a sketch or an existing garment is enough to start. A tech pack makes things faster but it is not required, and most first-time brands do not have one.',
    },
    { question: 'What is the minimum order quantity?', answer: publishedCopy.moq.en },
    { question: 'How long does a sample take?', answer: publishedCopy.sampleLeadTime.en },
    { question: 'Do you work with certified factories?', answer: publishedCopy.certifications.en },
    { question: 'Where can you ship?', answer: publishedCopy.internationalShipping.en },
  ],
}

/* ------------------------------------------------------------------ */
/*  PRIVATE LABEL                                                      */
/* ------------------------------------------------------------------ */

export const privateLabelEn: PageContent = {
  routeKey: 'privateLabel',
  metaTitle: 'Private Label Clothing Manufacturer in Egypt | Kemora',
  metaDescription:
    'Custom private-label clothing manufacturing in Egypt: product development, sampling, sourcing, branding, packaging, QC and export support for fashion brands.',
  breadcrumbLabel: 'Private Label',
  hero: {
    eyebrow: 'Private Label',
    h1: 'Private-label clothing manufacturing for your brand',
    lead:
      'Your garment is developed to your design, fit, fabric, colours and branding, then produced under your own label. Kemora does not sell a fixed ready-made collection.',
    ctas: primaryCtas,
  },
  sections: [
    {
      kind: 'prose',
      heading: 'Production is developed for your brand',
      paragraphs: [
        'When you work with a private-label manufacturer, you are not buying stock that already exists. You are asking for a product to be made according to your designs, your fabric, your fit, your colours and your quantity.',
        'That means the first stage is not ordering — it is deciding what the product actually is. Everything after that follows from what is agreed at this stage.',
      ],
    },
    {
      kind: 'checklist',
      heading: 'What you can send us',
      lead: 'You do not need technical documents to start a conversation. Any of the following is enough:',
      items: [
        'Reference images or screenshots of products you like',
        'Hand sketches or simple drawings',
        'An existing physical sample or a garment you already own',
        'A tech pack, if you have one',
        'A written description of what you want, if you have nothing visual yet',
      ],
      note:
        'A tech pack is never a requirement. Most first-time brand founders do not have one, and it is completely normal to begin from a photo.',
      tone: 'muted',
    },
    {
      kind: 'steps',
      heading: 'How a private-label order actually works',
      items: [
        {
          title: 'We review the design',
          body:
            'We look at what you have sent and tell you what is realistic — including where a design would be difficult or expensive to produce, and what we would change.',
        },
        {
          title: 'We recommend fabric and construction',
          body:
            'We propose suitable fabrics and a way of constructing the garment, based on the product, the fit you want and your target price.',
        },
        {
          title: 'A sample is developed first',
          body:
            'A physical sample is made so you can see and feel the actual product before committing to a production quantity.',
        },
        {
          title: 'You review and revise',
          body:
            'You tell us what to change. Adjusting fit, fabric or details at sample stage costs far less than discovering a problem after bulk production.',
        },
        {
          title: 'Bulk production starts only after approval',
          body:
            'Nothing goes into production until you have approved the sample and the final specification has been documented.',
        },
        {
          title: 'Branding and finishing are included in the plan',
          body:
            'Labels, care labels, hang tags, printing, embroidery, trims and packaging are agreed as part of the project, not added as an afterthought.',
        },
      ],
    },
    {
      kind: 'cards',
      heading: 'What private label is not',
      columns: 2,
      items: [
        {
          title: 'It is not buying ready-made stock',
          body:
            'We do not hold a finished collection that you choose from and rebrand. If you need stock immediately with no development, private label is not the right route.',
          href: path('products', 'en'),
        },
        {
          title: 'It is not instant',
          body:
            'Sampling and production take time because the product is being created. Plan for development, not just delivery.',
          href: path('sampling', 'en'),
        },
        {
          title: 'It is not a design service by default',
          body:
            'We advise on construction, fabric and feasibility as part of the project. Full creative direction, logo design and brand identity are separate services and would be quoted separately.',
          href: path('startBrand', 'en'),
        },
        {
          title: 'It is not shared',
          body:
            'Your designs are produced for you. We do not resell your product to other clients or show your designs to them.',
          href: path('selectedWork', 'en'),
        },
      ],
      tone: 'muted',
    },
    {
      kind: 'prose',
      heading: 'Your designs stay confidential',
      paragraphs: [publishedCopy.confidentiality.en],
    },
    {
      kind: 'cta',
      heading: 'Send your design or reference images',
      body: 'We will tell you what is realistic, what it would take, and what we would recommend changing.',
      ctas: primaryCtas,
      tone: 'dark',
    },
  ],
}

/* ------------------------------------------------------------------ */
/*  PRODUCTS OVERVIEW                                                  */
/* ------------------------------------------------------------------ */

export const productsEn: PageContent = {
  routeKey: 'products',
  metaTitle: 'Clothing Products We Manufacture in Egypt | Kemora',
  metaDescription:
    'Private-label T-shirts, hoodies, loungewear, modest wear, activewear, streetwear, resortwear, puffer jackets and uniforms manufactured in Egypt.',
  breadcrumbLabel: 'Products',
  hero: {
    eyebrow: 'Products',
    h1: 'What we manufacture',
    lead:
      'Knitted and woven garments across basics, loungewear, women’s wear, modest wear, activewear, streetwear, resortwear, outerwear and uniforms — all made to your brand specification.',
    ctas: primaryCtas,
  },
  sections: [
    {
      kind: 'productGrid',
      heading: 'Product categories',
      lead: 'Each category page explains how that product is developed, which fabrics are typically used, and what to decide before sampling.',
      note: publishedCopy.capabilityDisclaimer.en,
    },
    {
      kind: 'checklist',
      heading: 'Also produced',
      lead: 'These do not have their own page but are regularly part of projects:',
      items: [
        'Shirts and woven tops',
        'Shorts',
        'Knitwear (subject to confirmation per project)',
        'Caps and selected accessories',
      ],
      note: publishedCopy.capabilityDisclaimer.en,
      tone: 'muted',
    },
    {
      kind: 'cta',
      heading: 'Not sure which category fits your product?',
      body: 'Send a reference image and we will tell you how it would be made and what it would need.',
      ctas: primaryCtas,
      tone: 'dark',
    },
  ],
}

/* ------------------------------------------------------------------ */
/*  SAMPLING                                                           */
/* ------------------------------------------------------------------ */

export const samplingEn: PageContent = {
  routeKey: 'sampling',
  metaTitle: 'Clothing Sample Development | Sampling Process | Kemora',
  metaDescription:
    'Develop a clothing sample in Egypt from a reference image, sketch, tech pack or physical garment. Timing and pricing are confirmed after design review.',
  breadcrumbLabel: 'Sampling',
  hero: {
    eyebrow: 'Sampling',
    h1: 'Sample development',
    lead:
      'The sample is the point where your product stops being an idea and becomes a specification. Nothing goes into bulk production before you have approved one.',
    ctas: [
      {
        label: 'Request a Sample',
        href: path('contact', 'en'),
        variant: 'primary',
        event: analyticsEvents.sampleRequestClick,
      },
      {
        label: 'Contact Us on WhatsApp',
        href: wa,
        variant: 'whatsapp',
        event: analyticsEvents.whatsappClick,
        external: true,
      },
    ],
  },
  sections: [
    {
      kind: 'steps',
      heading: 'The sampling process',
      items: [
        {
          title: 'Design review',
          body:
            'We review your reference images, sketches, sample or tech pack, and confirm exactly what is being developed — including anything still undecided.',
        },
        {
          title: 'Fabric selection',
          body:
            'We propose fabrics by composition, weight and hand feel, and confirm availability before proceeding.',
        },
        {
          title: 'Pattern development',
          body:
            'A pattern is developed to your measurements and intended fit, or from a physical sample you send us.',
        },
        {
          title: 'Sample development',
          body: 'The sample is cut and sewn in the selected fabric, with the intended construction.',
        },
        {
          title: 'Client review',
          body:
            'You receive the sample and send specific feedback. Measurements are far more useful to us than general impressions.',
        },
        {
          title: 'Revisions',
          body:
            'Requested changes are applied. Depending on how much changes, a second sample may be produced.',
        },
        {
          title: 'Approval',
          body:
            'Once approved, the sample and its measurement chart become the written reference for bulk production.',
        },
      ],
      note: publishedCopy.sampleLeadTime.en,
    },
    {
      kind: 'cards',
      heading: 'What affects the timeline',
      columns: 2,
      lead:
        'There is no single fixed sampling time that applies to every product. These are the factors that actually move it:',
      items: [
        { title: 'Fabric availability', body: 'A fabric held locally is much faster than one that has to be sourced or imported.' },
        { title: 'Product complexity', body: 'A plain T-shirt and a lined dress are not comparable in development time.' },
        { title: 'Trims and finishing', body: 'Custom labels, drawcords, zips and packaging have their own lead times.' },
        { title: 'Revisions', body: 'Each round of changes adds time. Consolidated feedback is faster than several separate messages.' },
      ],
      tone: 'muted',
    },
    {
      kind: 'cards',
      heading: 'Sample costs',
      columns: 2,
      items: [
        {
          title: 'Sample pricing is project-specific',
          body: publishedCopy.samplePricing.en,
        },
        {
          title: 'The cost depends on the product',
          body:
            'A jersey T-shirt and a lined dress in imported fabric are not the same cost. We quote the sample for your specific product rather than publishing a single price.',
        },
        {
          title: 'Shipping is quoted separately',
          body: 'Courier cost to your country is quoted separately where applicable.',
        },
        {
          title: 'Production price comes after',
          body:
            'The final production price is confirmed after the product has been reviewed and the sample developed, when the actual fabric consumption and construction are known.',
        },
      ],
    },
    {
      kind: 'cta',
      heading: 'Ready to develop a sample?',
      body: 'Send what you have — a photo is enough to begin.',
      ctas: primaryCtas,
      tone: 'dark',
    },
  ],
}

/* ------------------------------------------------------------------ */
/*  FABRICS                                                            */
/* ------------------------------------------------------------------ */

export const fabricsPageEn: PageContent = {
  routeKey: 'fabrics',
  metaTitle: 'Fabrics & Finishes | Clothing Manufacturing | Kemora',
  metaDescription:
    'Compare garment fabrics, GSM, stretch and hand feel, plus printing, embroidery, labels, trims, hang tags and private-label packaging options.',
  breadcrumbLabel: 'Fabrics & Finishes',
  hero: {
    eyebrow: 'Fabrics & Finishes',
    h1: 'Common fabric options we work with',
    lead:
      'Fabric is usually the biggest single decision in a garment project. It determines hand feel, how the fit behaves, how the garment survives washing, and most of the cost.',
    ctas: primaryCtas,
  },
  sections: [
    {
      kind: 'fabrics',
      heading: 'Fabric options',
      lead:
        'These are the constructions we work with most often. GSM ranges describe what is typically used for that construction, not a guaranteed stock range.',
      note: publishedCopy.fabricSelection.en,
    },
    {
      kind: 'cta',
      heading: 'Not sure which fabric suits your product?',
      body:
        'Tell us the product, the market and roughly what you want it to sell for, and we will recommend options.',
      ctas: primaryCtas,
      tone: 'dark',
    },
  ],
}

/* ------------------------------------------------------------------ */
/*  HOW IT WORKS                                                       */
/* ------------------------------------------------------------------ */

export const howItWorksEn: PageContent = {
  routeKey: 'howItWorks',
  metaTitle: 'How It Works | Clothing Production Process | Kemora',
  metaDescription:
    'Kemora’s clothing production process: brief review, sourcing, sample development, approval, certified factory allocation, bulk production, QC and export support.',
  breadcrumbLabel: 'How It Works',
  hero: {
    eyebrow: 'How It Works',
    h1: 'From first conversation to shipment',
    lead:
      'A clear sequence, so you know what happens next at every stage and what is expected from you.',
    ctas: primaryCtas,
  },
  sections: [
    {
      kind: 'steps',
      heading: 'The production process',
      items: [
        {
          title: 'Initial consultation',
          body:
            'We discuss what you want to make, roughly how many, your target price and when you need it. This is where we tell you if something is not realistic.',
        },
        {
          title: 'Design review',
          body:
            'We review your images, sketches, sample or tech pack in detail and list what still needs deciding.',
        },
        {
          title: 'Fabric selection',
          body:
            'Fabrics and trims are proposed and confirmed, including availability and any effect on minimums or lead time.',
        },
        {
          title: 'Sample development',
          body: 'A pattern is developed and a physical sample is produced.',
        },
        {
          title: 'Client approval',
          body:
            'You approve the sample. The final specification — measurements, fabric, colours, trims, labels and packing — is documented in writing.',
        },
        {
          title: 'Bulk production',
          body:
            'A suitably certified partner factory is allocated for the product. Production runs against the approved sample and documented specification, with timing confirmed once quantity and fabric are known.',
        },
        {
          title: 'Quality control',
          body: publishedCopy.qualityControl.en,
        },
        {
          title: 'Packing',
          body:
            'Garments are folded, bagged, tagged and cartoned according to your packing list.',
        },
        {
          title: 'Shipping coordination',
          body:
            'We coordinate freight and export documentation with your forwarder or ours, by air or sea depending on urgency.',
        },
      ],
      note:
        'Exact timing is confirmed after we review your project. Production begins only after sample and order approval, and final specifications are documented in writing before bulk production starts.',
    },
    {
      kind: 'cards',
      heading: 'Shipping and documentation',
      columns: 2,
      items: [
        {
          title: 'Middle East',
          body:
            'Shipments to Gulf and regional markets typically move by air for smaller or urgent orders and by sea for larger ones. Routing, cost and transit time are confirmed per shipment.',
        },
        {
          title: 'Europe',
          body:
            'Shipments to European markets are coordinated by air or sea depending on order size, urgency and destination. Routing, documentation requirements and expected transit timing are confirmed per shipment.',
        },
        {
          title: 'UK and USA',
          body:
            'Orders can be coordinated to the UK and the USA where the product, route and shipment are feasible. Freight method, import responsibilities, documentation and timing are confirmed before production.',
        },
        {
          title: 'EU origin-documentation support',
          body: publishedCopy.eur1.en,
        },
        {
          title: 'Export documentation',
          body:
            'Commercial invoice, packing list and other applicable export documents are coordinated for the confirmed route. Requirements vary by destination and shipment.',
        },
      ],
      tone: 'muted',
    },
    {
      kind: 'cta',
      heading: 'Start with a conversation',
      body: 'Tell us what you want to produce and we will explain exactly what it would involve.',
      ctas: primaryCtas,
      tone: 'dark',
    },
  ],
}

/* ------------------------------------------------------------------ */
/*  CLOTHING MANUFACTURER IN EGYPT                                    */
/* ------------------------------------------------------------------ */

const manufacturerEgyptFaqEn = [
  {
    question: 'Is Kemora a clothing manufacturer in Egypt?',
    answer:
      'Kemora is an Egypt-based clothing manufacturing and product-development partner. We coordinate each project through a suitably specialised partner factory rather than forcing every product into one facility.',
  },
  {
    question: 'What is the minimum order quantity?',
    answer: publishedCopy.moq.en,
  },
  {
    question: 'Do the factories hold certifications?',
    answer: publishedCopy.certifications.en,
  },
  {
    question: 'Can production scale after a first order?',
    answer: publishedCopy.capacity.en,
  },
  {
    question: 'Can Kemora manufacture for international brands?',
    answer: publishedCopy.internationalShipping.en,
  },
  {
    question: 'Do I need a tech pack?',
    answer:
      'No. A reference image, sketch or physical sample is enough to start. We identify the missing decisions before quoting sample development.',
  },
]

export const manufacturerEgyptEn: PageContent = {
  routeKey: 'manufacturerEgypt',
  metaTitle: 'Clothing Manufacturer in Egypt for Fashion Brands | Kemora',
  metaDescription:
    'Egypt-based clothing manufacturing for international brands. MOQ from 50 pieces per colour, certified partner factories, high capacity, sampling, QC and export support.',
  ogTitle: 'Clothing Manufacturing in Egypt for International Brands | Kemora',
  ogDescription:
    'Develop custom garments in Egypt with certified production partners, flexible opening quantities and one team from sampling to export.',
  breadcrumbLabel: 'Clothing Manufacturer in Egypt',
  hero: {
    eyebrow: 'Manufacturing in Egypt',
    h1: 'A clothing manufacturing partner in Egypt',
    lead:
      'Kemora connects fashion brands with the right production capability in Egypt, then coordinates product development, sampling, bulk production, quality follow-up, branding, packing and export support.',
    supporting:
      'We work through specialised partner factories with relevant certifications, giving suitable projects a practical path from a 50-piece-per-colour opening run to higher-volume repeat production.',
    ctas: primaryCtas,
    highlights: [
      'MOQ from 50 pieces per colour',
      'Certified factory network',
      'High production capacity',
      'International export support',
    ],
  },
  sections: [
    {
      kind: 'prose',
      heading: 'The right facility for the product',
      paragraphs: [
        'A clothing manufacturer is only useful when its machinery, technicians and sourcing suit the garment being developed. A jersey T-shirt, a padded jacket and a structured uniform need different production strengths.',
        'Kemora reviews the product first, then matches it to a relevant partner factory in Egypt. This lets the brand keep one commercial and production contact while the technical work is placed where it can be executed properly.',
      ],
    },
    {
      kind: 'cards',
      heading: 'What Kemora coordinates',
      columns: 3,
      items: [
        {
          title: 'Product development',
          body: 'Design review, construction decisions, fit direction and a written development brief.',
          href: path('privateLabel', 'en'),
        },
        {
          title: 'Fabric and trim sourcing',
          body: 'Fabric, GSM, stretch, colour, zips, elastics and trims selected for the product and price point.',
          href: path('fabrics', 'en'),
        },
        {
          title: 'Sample development',
          body: 'Pattern and physical sample development before the brand commits to bulk production.',
          href: path('sampling', 'en'),
        },
        {
          title: 'Private-label production',
          body: 'Bulk production under your labels, following the approved sample and specification.',
          href: path('privateLabel', 'en'),
        },
        {
          title: 'Brand presentation',
          body: 'Printing, embroidery, labels, hang tags, polybags and packaging coordinated to the agreed brief.',
          href: path('fabrics', 'en'),
        },
        {
          title: 'QC and export support',
          body: 'Production follow-up, pre-packing checks, applicable export documents and freight coordination.',
          href: path('international', 'en'),
        },
      ],
    },
    {
      kind: 'cards',
      eyebrow: 'Buyer Assurance',
      heading: 'How we reduce production risk',
      columns: 2,
      items: [
        {
          title: 'Relevant factory certification',
          body: publishedCopy.certifications.en,
        },
        {
          title: 'Approval before bulk',
          body:
            'The physical sample, measurements, materials, colours, trims, labels and packing details are approved before production starts.',
        },
        {
          title: 'Capacity matched to the order',
          body: publishedCopy.capacity.en,
        },
        {
          title: 'Quality checks defined per project',
          body: publishedCopy.qualityControl.en,
        },
        {
          title: 'Confidential product development',
          body: publishedCopy.confidentiality.en,
        },
        {
          title: 'Destination-aware export planning',
          body: publishedCopy.internationalShipping.en,
        },
      ],
      tone: 'muted',
    },
    {
      kind: 'productGrid',
      heading: 'Explore production categories',
      lead:
        'Each page covers product-specific fabrics, construction decisions, finishing options and sampling questions.',
      note: publishedCopy.capabilityDisclaimer.en,
    },
    {
      kind: 'faq',
      heading: 'Questions about manufacturing in Egypt',
      items: manufacturerEgyptFaqEn,
    },
    {
      kind: 'cta',
      heading: 'Send your product brief',
      body:
        'Share the product, quantity by colour, target market and any design files. We will tell you what is feasible and what needs to be clarified.',
      ctas: primaryCtas,
      tone: 'dark',
    },
  ],
  faqForSchema: manufacturerEgyptFaqEn,
}

/* ------------------------------------------------------------------ */
/*  LOW MOQ MANUFACTURING                                              */
/* ------------------------------------------------------------------ */

const lowMoqFaqEn = [
  {
    question: 'What does MOQ from 50 pieces per colour mean?',
    answer:
      'For suitable styles, one colour can start from 50 pieces split across the agreed size range. A second colour normally creates a second 50-piece minimum because fabric and production setup are managed by colour.',
  },
  {
    question: 'Is 50 pieces available for every garment?',
    answer:
      'No. Fifty pieces per colour is a starting point for suitable styles. Technical construction, custom fabric, specialist trims, printing setup or factory requirements may create a higher minimum.',
  },
  {
    question: 'Can I order many styles at 50 pieces each?',
    answer:
      'It may be possible, but a focused first collection is usually more economical. Each style creates separate pattern, sample, sourcing and production setup work.',
  },
  {
    question: 'Does low MOQ mean ready-made white label stock?',
    answer:
      'No. Kemora develops custom private-label garments to your specification. The product is sampled before bulk production; we do not relabel a stock catalogue.',
  },
  {
    question: 'Can repeat orders be larger?',
    answer:
      'Yes. The partner-factory network has high production capacity. Available line allocation, timing and pricing are reconfirmed for each repeat order.',
  },
]

export const lowMoqEn: PageContent = {
  routeKey: 'lowMoq',
  metaTitle: 'Low MOQ Clothing Manufacturer: From 50 Pieces | Kemora',
  metaDescription:
    'Low MOQ private-label clothing manufacturing in Egypt from 50 pieces per colour for suitable styles, with sample development, branding, packaging and scale-up support.',
  breadcrumbLabel: 'Low MOQ Manufacturing',
  hero: {
    eyebrow: 'Lower Opening Quantities',
    h1: 'Low MOQ clothing manufacturing from 50 pieces per colour',
    lead:
      'Launch a focused private-label collection without committing to oversized opening inventory. Suitable styles can start from 50 pieces per colour, split across an agreed size range.',
    supporting:
      'The final minimum is confirmed after we review the fabric, construction, colour count, trims, branding and production method.',
    ctas: primaryCtas,
    highlights: [
      'Custom development, not stock blanks',
      'Sample approval before production',
      'Brand labels and packaging',
      'Capacity for repeat orders',
    ],
  },
  sections: [
    {
      kind: 'prose',
      heading: 'A lower MOQ still needs a production-ready brief',
      paragraphs: [
        'Low MOQ does not remove the technical work behind a garment. Pattern development, fabric selection, colour matching, labels, printing and packing still have to be decided and approved.',
        'The best small first run is usually a focused product with controlled colours and trims. That keeps setup costs proportionate and gives the brand a cleaner test of fit, quality and customer demand.',
      ],
    },
    {
      kind: 'cards',
      heading: 'What can raise the minimum',
      columns: 3,
      items: [
        {
          title: 'Custom fabric or colour',
          body: 'A mill may require a larger fabric order than the garment quantity itself needs.',
        },
        {
          title: 'Complex construction',
          body: 'Outerwear, tailored pieces and technical activewear require more setup and specialist operations.',
        },
        {
          title: 'Multiple colourways',
          body: 'Each colour is planned separately, so adding colours increases the total more quickly than adding sizes.',
        },
        {
          title: 'Custom trims',
          body: 'Zips, hardware, elastics, drawcords and moulded components can have supplier minimums.',
        },
        {
          title: 'Print and embroidery setup',
          body: 'Artwork method, number of colours and placement affect setup cost and minimum efficiency.',
        },
        {
          title: 'Special testing or finishing',
          body: 'Performance testing, specialist washes or compliance documents are scoped and quoted separately.',
        },
      ],
      tone: 'muted',
    },
    {
      kind: 'steps',
      heading: 'Plan a commercially sensible first order',
      items: [
        {
          title: 'Choose one hero product',
          body: 'Start with the product that most clearly represents the brand rather than launching every idea at once.',
        },
        {
          title: 'Limit the opening colours',
          body: 'One or two strong colourways usually create a better opening order than several very small colour splits.',
        },
        {
          title: 'Agree the size split',
          body: 'The per-colour quantity is divided across sizes according to your customer and target market.',
        },
        {
          title: 'Approve one complete sample',
          body: 'Fit, fabric, branding and finishing are approved together before the bulk quantity is committed.',
        },
        {
          title: 'Document the specification',
          body: 'Measurements, materials, colours, labels and packing are written down so a repeat can be controlled.',
        },
        {
          title: 'Scale from real demand',
          body: 'Repeat quantities can grow once sales data, customer feedback and preferred colourways are clearer.',
        },
      ],
    },
    {
      kind: 'cards',
      heading: 'Useful next steps',
      columns: 3,
      items: [
        {
          title: 'Starting a clothing brand',
          body: 'Plan a focused first collection and understand what needs to be decided before sampling.',
          href: path('startBrand', 'en'),
        },
        {
          title: 'How MOQ is calculated',
          body: 'Read the detailed guide to colour, fabric, trim and production minimums.',
          href: path('guideMoq', 'en'),
        },
        {
          title: 'Sample development',
          body: 'See how your design becomes a physical approval sample.',
          href: path('sampling', 'en'),
        },
      ],
    },
    {
      kind: 'faq',
      heading: 'Low MOQ questions',
      items: lowMoqFaqEn,
    },
    {
      kind: 'cta',
      heading: 'Check whether your style can start at 50 pieces per colour',
      body:
        'Send a reference image, product type, colour count, size range and destination. We will confirm the realistic minimum for that brief.',
      ctas: primaryCtas,
      tone: 'dark',
    },
  ],
  faqForSchema: lowMoqFaqEn,
}

/* ------------------------------------------------------------------ */
/*  INTERNATIONAL MANUFACTURING                                       */
/* ------------------------------------------------------------------ */

const internationalFaqEn = [
  {
    question: 'Which markets can Kemora ship to?',
    answer: publishedCopy.internationalShipping.en,
  },
  {
    question: 'Does Kemora arrange customs clearance in my country?',
    answer:
      'Import clearance and duties depend on the agreed Incoterm and destination. We coordinate export-side documents and freight, then confirm which responsibilities sit with Kemora, the forwarder and the buyer before shipment.',
  },
  {
    question: 'Can EUR.1 documentation be provided for EU shipments?',
    answer: publishedCopy.eur1.en,
  },
  {
    question: 'How are shipping costs and timing confirmed?',
    answer:
      'After the packed volume, weight, destination and preferred method are known. Courier, air freight and sea freight are compared where practical; no fixed transit promise is made before a route is quoted.',
  },
  {
    question: 'Can samples be sent internationally?',
    answer:
      'Yes, where courier service is available. Sample courier cost and any destination charges are quoted or handled according to the agreed arrangement.',
  },
]

export const internationalEn: PageContent = {
  routeKey: 'international',
  metaTitle: 'International Private Label Clothing Manufacturing | Kemora',
  metaDescription:
    'Private-label clothing manufacturing in Egypt for Europe, the UK, USA and Middle East, with sampling, QC, export documentation and shipping coordination.',
  breadcrumbLabel: 'International Manufacturing',
  hero: {
    eyebrow: 'International Clients',
    h1: 'Private-label clothing manufacturing for international brands',
    lead:
      'Develop and produce garments in Egypt with one team coordinating the sample, certified production partner, quality follow-up, packing, export documents and freight.',
    supporting:
      'Kemora serves Europe, the UK, the USA, the Middle East and other markets where the product and shipping route are feasible.',
    ctas: primaryCtas,
    highlights: [
      'Europe and UK',
      'USA',
      'Middle East',
      'Other feasible markets',
    ],
  },
  sections: [
    {
      kind: 'cards',
      heading: 'Support shaped around the destination',
      columns: 2,
      items: [
        {
          title: 'European Union',
          body:
            'Sampling, production, packing lists and freight coordination for EU destinations, with eligible EUR.1 documentation assessed per product and shipment.',
          href: path('europeanBrands', 'en'),
        },
        {
          title: 'United Kingdom',
          body:
            'Sample courier and bulk freight coordination to the UK where feasible, with documentation and import responsibilities confirmed before shipment.',
        },
        {
          title: 'United States',
          body:
            'Product development and shipment coordination for US-bound projects where the garment, quantity and route are practical. No customs treatment is assumed in advance.',
        },
        {
          title: 'Middle East',
          body:
            'Arabic or English project communication and freight coordination for Gulf and regional markets, with route, documents and timing confirmed per shipment.',
        },
      ],
    },
    {
      kind: 'steps',
      heading: 'How an international order is prepared',
      items: [
        {
          title: 'Confirm destination early',
          body: 'The sales market affects sizing, labels, packing, documentation and freight planning.',
        },
        {
          title: 'Develop and approve the sample',
          body: 'A physical sample establishes fit, material, construction and finishing before bulk production.',
        },
        {
          title: 'Allocate the right factory',
          body: 'A relevant certified partner is selected for the product, quantity, quality requirements and timing.',
        },
        {
          title: 'Confirm packing data',
          body: 'Carton count, dimensions, gross weight and packing list are prepared after production and packing details are known.',
        },
        {
          title: 'Prepare export documents',
          body: 'Commercial and packing documentation is coordinated for the route, plus eligible origin documents where applicable.',
        },
        {
          title: 'Book the agreed method',
          body: 'Courier, air or sea is selected according to shipment size, urgency, destination and quoted cost.',
        },
      ],
    },
    {
      kind: 'checklist',
      heading: 'Include this in an international enquiry',
      items: [
        'Destination country and postcode or port, if known',
        'Product references, sketch, sample or tech pack',
        'Quantity by style and colour',
        'Size range and target customer',
        'Required labels, language, packaging and carton marks',
        'Target launch date rather than an assumed factory deadline',
        'Any compliance or certification documents your buyer requires',
        'Preferred Incoterm or freight arrangement, if already decided',
      ],
      note:
        'Import rules, duties, labelling obligations and product-specific compliance remain the buyer’s responsibility unless a different scope is agreed in writing.',
      tone: 'muted',
    },
    {
      kind: 'faq',
      heading: 'International order questions',
      items: internationalFaqEn,
    },
    {
      kind: 'cta',
      heading: 'Tell us where the order needs to go',
      body:
        'Send the product, quantity and destination. We will assess manufacturing and shipment feasibility together.',
      ctas: primaryCtas,
      tone: 'dark',
    },
  ],
  faqForSchema: internationalFaqEn,
}

/* ------------------------------------------------------------------ */
/*  EUROPEAN BRANDS                                                    */
/* ------------------------------------------------------------------ */

const europeanBrandsFaqEn = [
  {
    question: 'Can Kemora manufacture for European clothing brands?',
    answer:
      'Yes. Kemora coordinates product development, sampling, private-label production, quality follow-up, export documentation and shipping coordination from Egypt for brands selling in European markets.',
  },
  {
    question: 'Do I need a tech pack before contacting you?',
    answer:
      'No. A tech pack helps, but a reference image, sketch, existing sample or written description is enough to start a useful conversation.',
  },
  {
    question: 'Can you support EUR.1 documentation for EU shipments?',
    answer: publishedCopy.eur1.en,
  },
  {
    question: 'Which products can be developed for European brands?',
    answer:
      'Common projects include T-shirts, polos, hoodies, sweatshirts, joggers, loungewear, womenswear, puffer jackets, activewear and uniforms. Feasibility depends on fabric, construction, quantity, finishing and project requirements.',
  },
  {
    question: 'How is shipping handled?',
    answer: publishedCopy.internationalShipping.en,
  },
  {
    question: 'What is the starting MOQ?',
    answer: publishedCopy.moq.en,
  },
  {
    question: 'Do you work with certified factories?',
    answer: publishedCopy.certifications.en,
  },
]

export const europeanBrandsEn: PageContent = {
  routeKey: 'europeanBrands',
  metaTitle: 'Clothing Manufacturing in Egypt for European Brands | Kemora',
  metaDescription:
    'Private-label clothing manufacturing in Egypt for European brands: sampling, fabric sourcing, labels, QC, export-documentation support and shipping coordination.',
  ogTitle: 'Egypt-Based Clothing Manufacturing for European Brands | Kemora',
  ogDescription:
    'Develop samples and private-label garments in Egypt with one point of contact for fabrics, production, QC, export documents and shipping coordination.',
  breadcrumbLabel: 'European Brands',
  hero: {
    eyebrow: 'Europe',
    h1: 'Clothing manufacturing in Egypt for European brands',
    lead:
      'Kemora helps European fashion brands develop and produce private-label garments in Egypt, with clear sampling, communication, quality follow-up and export-documentation coordination.',
    supporting:
      'We do not sell ready-made stock. Your project starts from your design, reference image, sample or tech pack and is developed into a production-ready specification.',
    ctas: primaryCtas,
  },
  sections: [
    {
      kind: 'prose',
      heading: 'A practical manufacturing bridge from Egypt',
      paragraphs: [
        'European brands often need a manufacturing partner who can turn early product ideas into workable samples, then manage production details without asking the founder or buying team to coordinate every supplier separately.',
        'Kemora works from Egypt with manufacturing and sourcing partners selected according to the product. Our role is to review the garment, recommend realistic materials and construction, coordinate sample development, follow production and keep the brand updated before shipment.',
      ],
    },
    {
      kind: 'cards',
      heading: 'What we coordinate for European projects',
      columns: 3,
      items: [
        {
          title: 'Product review',
          body:
            'We review your reference images, sketch, sample or tech pack and identify what must be decided before sampling.',
          href: path('privateLabel', 'en'),
        },
        {
          title: 'Sample development',
          body:
            'A physical sample is produced before bulk production, so fit, fabric and construction can be approved first.',
          href: path('sampling', 'en'),
        },
        {
          title: 'Fabric and trims',
          body:
            'Fabrics, GSM, trims, labels, hang tags and packaging are confirmed according to the product and market.',
          href: path('fabrics', 'en'),
        },
        {
          title: 'Production coordination',
          body:
            'A suitably certified partner factory is selected for the product. Bulk production follows the approved sample and documented specification.',
          href: path('howItWorks', 'en'),
        },
        {
          title: 'Quality follow-up',
          body: publishedCopy.qualityControl.en,
          href: path('howItWorks', 'en'),
        },
        {
          title: 'Export documentation',
          body: publishedCopy.eur1.en,
          href: path('howItWorks', 'en'),
        },
      ],
    },
    {
      kind: 'cards',
      heading: 'Products often developed for European brands',
      lead:
        'These category pages explain what usually matters before sampling, from fabric weight to fit and finishing.',
      columns: 4,
      items: [
        {
          title: 'T-shirts and polos',
          body: 'Combed cotton jersey, interlock, piqué, embroidery, printing and branded labels.',
          href: productCategoryPath('t-shirts-polos-basics', 'en'),
        },
        {
          title: 'Hoodies and joggers',
          body: 'French terry, brushed fleece, rib matching, drawcords, cuffs and wash behaviour.',
          href: productCategoryPath('hoodies-sweatshirts-joggers', 'en'),
        },
        {
          title: 'Pajamas and loungewear',
          body: 'Cotton jersey, poplin, satin and viscose styles developed as sets.',
          href: productCategoryPath('pajamas-loungewear', 'en'),
        },
        {
          title: 'Puffer jackets',
          body: 'Quilting, shell fabric, lining, padding weight, zips, cuffs and colourways.',
          href: productCategoryPath('puffer-jackets-outerwear', 'en'),
        },
        {
          title: 'Womenswear and dresses',
          body: 'Jersey and woven dresses, tops, skirts and co-ord sets developed by fit and drape.',
          href: productCategoryPath('dresses-womens-wear', 'en'),
        },
        {
          title: 'Activewear',
          body: 'Stretch fabrics, support level, opacity, seams, elastic and branded finishing.',
          href: productCategoryPath('activewear', 'en'),
        },
        {
          title: 'Workwear and uniforms',
          body: 'Repeatable staff programmes with practical fabrics, sizing and branding.',
          href: productCategoryPath('workwear-uniforms', 'en'),
        },
        {
          title: 'All products',
          body: 'See the full category list and compare which page fits your project best.',
          href: path('products', 'en'),
        },
      ],
      tone: 'muted',
      note: publishedCopy.capabilityDisclaimer.en,
    },
    {
      kind: 'steps',
      heading: 'A simple order path for European brands',
      items: [
        {
          title: 'Send references',
          body:
            'Share images, a sketch, a sample or a tech pack, plus target quantity and launch market.',
        },
        {
          title: 'Confirm feasibility',
          body:
            'We explain suitable fabrics, construction choices, approximate MOQ logic and any obvious production constraints.',
        },
        {
          title: 'Develop a sample',
          body: `A physical sample is produced so you can review fit, fabric, colour, trims and finishing before bulk. ${publishedCopy.samplePricing.en}`,
        },
        {
          title: 'Approve specification',
          body:
            'Measurements, materials, colours, trims, labels, packing and quantity are documented before production.',
        },
        {
          title: 'Produce and check',
          body: publishedCopy.qualityControl.en,
        },
        {
          title: 'Coordinate shipping',
          body:
            'Freight method, export documents, packing list and any eligible origin documentation are confirmed per shipment.',
        },
      ],
    },
    {
      kind: 'faq',
      heading: 'Questions from European brands',
      items: europeanBrandsFaqEn,
      tone: 'muted',
    },
    {
      kind: 'cta',
      heading: 'Send a reference image or tech pack',
      body:
        'Tell us what you want to produce, where you plan to sell it and roughly how many pieces you are considering.',
      ctas: primaryCtas,
      tone: 'dark',
    },
  ],
  faqForSchema: europeanBrandsFaqEn,
}

/* ------------------------------------------------------------------ */
/*  SELECTED WORK                                                      */
/* ------------------------------------------------------------------ */

export const selectedWorkEn: PageContent = {
  routeKey: 'selectedWork',
  metaTitle: 'Selected Work & Sample Development | Kemora',
  metaDescription:
    'Selected project work and sample development from Kemora, clearly labelled by type. Client names are not disclosed without permission.',
  breadcrumbLabel: 'Selected Work',
  hero: {
    eyebrow: 'Selected Work',
    h1: 'Selected work and sample development',
    lead:
      'Every image is labelled by what it actually is. We would rather show less than imply that a concept visual is delivered production.',
    ctas: primaryCtas,
  },
  sections: [
    {
      kind: 'work',
      grouped: true,
      note: publishedCopy.confidentiality.en,
    },
    {
      kind: 'cards',
      heading: 'Explore related product categories',
      lead:
        'If a sample or project is close to what you want to make, these pages explain the product-specific development decisions.',
      columns: 4,
      items: [
        {
          title: 'T-shirts and polos',
          body: 'For printed tees, polos, everyday basics and jersey programmes.',
          href: productCategoryPath('t-shirts-polos-basics', 'en'),
        },
        {
          title: 'Hoodies and joggers',
          body: 'For fleece co-ords, sweatshirts, joggers and casualwear sets.',
          href: productCategoryPath('hoodies-sweatshirts-joggers', 'en'),
        },
        {
          title: 'Puffer jackets',
          body: 'For quilted outerwear, shell fabrics, padding, lining and colourways.',
          href: productCategoryPath('puffer-jackets-outerwear', 'en'),
        },
        {
          title: 'Womenswear and sets',
          body: 'For dresses, tops, skirts, resort co-ords and woven or jersey pieces.',
          href: productCategoryPath('dresses-womens-wear', 'en'),
        },
      ],
      tone: 'muted',
    },
    {
      kind: 'prose',
      heading: 'How we label images',
      paragraphs: [
        '**Selected Project Work** — garments produced for a client, shown with permission.',
        '**Sample Development** — physical samples developed by Kemora during product development.',
        '**Concept Visual — For Direction Only** — a visual used to communicate direction. Not produced work.',
      ],
      tone: 'muted',
    },
    {
      kind: 'cta',
      heading: 'Want to see something closer to your product?',
      body:
        'Tell us the category you are working in and we can talk through comparable development we have done.',
      ctas: primaryCtas,
      tone: 'dark',
    },
  ],
}

/* ------------------------------------------------------------------ */
/*  START A CLOTHING BRAND                                             */
/* ------------------------------------------------------------------ */

export const startBrandEn: PageContent = {
  routeKey: 'startBrand',
  metaTitle: 'Starting a Clothing Brand? | Kemora',
  metaDescription:
    'Practical support for new clothing brands: first collection, fabrics, fit, sampling, labels, packaging and production planning.',
  breadcrumbLabel: 'Starting a Brand',
  hero: {
    eyebrow: 'New Brands',
    h1: 'Starting a clothing brand?',
    lead:
      'Most people who contact us are producing for the first time. You do not need technical documents, industry vocabulary or a large budget to start a useful conversation.',
    ctas: primaryCtas,
  },
  sections: [
    {
      kind: 'checklist',
      heading: 'Where we can help',
      items: [
        'Choosing the right first collection for your market and budget',
        'Reducing the number of products so your first order is realistic',
        'Fabric recommendations for your product and price point',
        'Fit direction and deciding your size range',
        'Sample development and revisions',
        'Writing your product specifications down properly',
        'Labels, care labels, hang tags and packaging',
        'Planning quantities and production timing',
      ],
      note: publishedCopy.extraServices.en,
    },
    {
      kind: 'cards',
      heading: 'Honest advice about first collections',
      columns: 3,
      items: [
        {
          title: 'Start with fewer products',
          body:
            'Most first collections are too wide. Three well-made products in the right fabric usually outperform ten average ones, and cost far less to develop.',
          href: path('products', 'en'),
        },
        {
          title: 'Colours cost more than sizes',
          body:
            'Each colour is dyed separately and carries its own minimum. Adding a colour affects your order value much more than adding a size does.',
          href: path('fabrics', 'en'),
        },
        {
          title: 'Budget for sampling',
          body:
            'Sampling is a real cost before you have any stock to sell. Plan for it, and plan for at least one revision round.',
          href: path('sampling', 'en'),
        },
        {
          title: 'Fabric decides the price',
          body:
            'If you have a target retail price, tell us early. It is the fastest way for us to steer you to a fabric that works commercially.',
          href: path('fabrics', 'en'),
        },
        {
          title: 'Leave time for production',
          body:
            'Working backwards from a launch date is the most common planning mistake. Development, sampling, production and freight all need time.',
          href: path('howItWorks', 'en'),
        },
        {
          title: 'A tech pack is not required',
          body:
            'We can build the specification with you. Bring a photo of what you want and we will turn it into something producible.',
          href: path('contact', 'en'),
        },
      ],
      tone: 'muted',
    },
    {
      kind: 'cta',
      heading: 'Tell us what you want to make',
      body: 'Even if it is just an idea and a reference photo, that is enough to start.',
      ctas: primaryCtas,
      tone: 'dark',
    },
  ],
}

/* ------------------------------------------------------------------ */
/*  GUIDES                                                             */
/* ------------------------------------------------------------------ */

export const guidesEn: PageContent = {
  routeKey: 'guides',
  metaTitle: 'Clothing Manufacturing Guides for Fashion Brands | Kemora',
  metaDescription:
    'Practical guides to clothing MOQ, reference images, fabrics, sampling and starting a private-label fashion brand, written for real production decisions.',
  breadcrumbLabel: 'Guides',
  hero: {
    eyebrow: 'Manufacturing Guides',
    h1: 'Clear answers before you start production',
    lead:
      'Practical guidance for founders and buying teams planning samples, fabrics, quantities and private-label production.',
    supporting:
      'These guides explain the decisions that affect feasibility, price, minimums and quality — without pretending every project works the same way.',
    ctas: primaryCtas,
  },
  sections: [
    {
      kind: 'cards',
      heading: 'Start with the question you have now',
      columns: 3,
      items: [
        {
          title: 'How clothing MOQ is calculated',
          body: 'Understand why colour, fabric, trims and production setup affect the real minimum order.',
          href: path('guideMoq', 'en'),
        },
        {
          title: 'How to send useful reference images',
          body: 'Turn screenshots and inspiration into a brief a pattern and sampling team can act on.',
          href: path('guideReferenceBrief', 'en'),
        },
        {
          title: 'French terry vs brushed fleece',
          body: 'Compare construction, warmth, weight, season and the products each fabric suits.',
          href: path('guideFleece', 'en'),
        },
        {
          title: 'Starting a clothing brand',
          body: 'Plan a focused first collection and avoid the decisions that make small launches unnecessarily expensive.',
          href: path('startBrand', 'en'),
        },
        {
          title: 'Clothing sample development',
          body: 'See the full path from design review and pattern work to a sample approved for production.',
          href: path('sampling', 'en'),
        },
        {
          title: 'Fabric and finishing options',
          body: 'Compare common fabric constructions, GSM, printing, embroidery, labels and packaging.',
          href: path('fabrics', 'en'),
        },
      ],
    },
    {
      kind: 'cta',
      heading: 'Need an answer about your actual product?',
      body:
        'A guide can explain the principle. A reference image and quantity let us answer for your specific project.',
      ctas: primaryCtas,
      tone: 'dark',
    },
  ],
}

const guideMoqFaqEn = [
  {
    question: 'Does MOQ apply per style or per colour?',
    answer:
      'Both can matter, but colour is often the practical driver because fabric, dyeing and production setup are planned separately by colour. Kemora’s starting point is 50 pieces per colour for suitable styles.',
  },
  {
    question: 'Can sizes be mixed within the minimum?',
    answer:
      'Usually yes. The per-colour quantity can be split across an agreed size range, provided no special size requires different fabric width, trims or construction.',
  },
  {
    question: 'Why can a custom fabric raise MOQ?',
    answer:
      'The fabric mill may require a minimum knitting, weaving or dyeing quantity that is larger than the fabric needed for 50 garments. That supplier minimum becomes part of the garment minimum.',
  },
]

export const guideMoqEn: PageContent = {
  routeKey: 'guideMoq',
  metaTitle: 'How Is Clothing MOQ Calculated? A Practical Guide | Kemora',
  metaDescription:
    'Learn how clothing MOQ is affected by colour, fabric, trims, printing, construction and size range, plus how to plan a lower-risk first production run.',
  breadcrumbLabel: 'How Clothing MOQ Is Calculated',
  hero: {
    eyebrow: 'Guide · MOQ',
    h1: 'How clothing MOQ is actually calculated',
    lead:
      'Minimum order quantity is not an arbitrary number. It comes from the smallest practical fabric, trim and production setup needed to make the garment consistently.',
    supporting: publishedCopy.moq.en,
    ctas: primaryCtas,
  },
  sections: [
    {
      kind: 'prose',
      heading: 'Start with style, colour and fabric — not one headline number',
      paragraphs: [
        'A factory may be able to cut and sew 50 pieces, but the selected fabric, zip supplier or printing method may have a larger setup minimum. That is why a credible manufacturer reviews the complete product before confirming MOQ.',
        'For suitable styles, Kemora starts from 50 pieces per colour. Sizes can normally be mixed within that colour quantity, while each additional colour creates its own fabric and production planning requirement.',
      ],
    },
    {
      kind: 'cards',
      heading: 'The six main MOQ drivers',
      columns: 3,
      items: [
        {
          title: 'Fabric availability',
          body: 'Locally available stock fabric can support a lower opening quantity than a custom-knit, custom-woven or specially dyed fabric.',
        },
        {
          title: 'Colour count',
          body: 'Each colour needs separate fabric planning, cutting control and production setup. More colours normally increase total order quantity.',
        },
        {
          title: 'Garment complexity',
          body: 'A basic jersey tee needs fewer specialist operations than padded outerwear, tailoring or high-support activewear.',
        },
        {
          title: 'Trims and hardware',
          body: 'Custom zips, elastics, snaps, moulded hardware, drawcords and branded tapes may have their own supplier minimums.',
        },
        {
          title: 'Decoration',
          body: 'Embroidery digitising, screen setup, transfer sheets and print colour count affect the economical batch size.',
        },
        {
          title: 'Packaging and labels',
          body: 'Woven labels, hang tags, printed bags and custom boxes can have separate minimums even when garment production is lower.',
        },
      ],
      tone: 'muted',
    },
    {
      kind: 'checklist',
      heading: 'How to keep a first MOQ manageable',
      items: [
        'Start with fewer styles and make each one commercially meaningful',
        'Use one or two opening colours instead of splitting demand across many colourways',
        'Choose a proven fabric construction before developing a custom textile',
        'Use standard-quality trims where they do not weaken the design',
        'Combine the final size split only after identifying the target customer',
        'Approve artwork placement and colours before print setup begins',
        'Plan labels and packaging at the same time as the garment',
        'Confirm sample pricing before committing to the bulk order',
      ],
      note:
        'Lower MOQ usually means a higher unit cost because development and setup are spread across fewer garments. The useful comparison is total launch risk, not unit price alone.',
    },
    {
      kind: 'cards',
      heading: 'Continue planning your first order',
      columns: 3,
      items: [
        {
          title: 'Low MOQ manufacturing',
          body: 'See how Kemora handles suitable opening runs from 50 pieces per colour.',
          href: path('lowMoq', 'en'),
        },
        {
          title: 'Sampling before bulk',
          body: 'Understand why fit, fabric and finishing must be approved before production.',
          href: path('sampling', 'en'),
        },
        {
          title: 'Start a clothing brand',
          body: 'Turn an initial product idea into a focused, production-ready first collection.',
          href: path('startBrand', 'en'),
        },
      ],
    },
    { kind: 'faq', heading: 'Questions about clothing MOQ', items: guideMoqFaqEn },
    {
      kind: 'cta',
      heading: 'Get the realistic MOQ for your product',
      body:
        'Send the style, colour count, size range, branding and target market. We will assess the complete brief rather than quoting a number in isolation.',
      ctas: primaryCtas,
      tone: 'dark',
    },
  ],
  faqForSchema: guideMoqFaqEn,
}

const referenceBriefFaqEn = [
  {
    question: 'Can I use photos from another brand as a reference?',
    answer:
      'You can use references to explain silhouette, fit or details, but your product should not copy protected artwork, branding or distinctive design elements. Tell us what you want to keep, change and make original.',
  },
  {
    question: 'Is one photo enough?',
    answer:
      'One photo is enough to start a conversation, but front, back and detail views produce a more accurate first brief. Missing information is listed before sampling.',
  },
  {
    question: 'Do I need measurements?',
    answer:
      'Not for the first message. A target size, intended fit and any key measurements are helpful. A full measurement chart is developed or confirmed before the sample is approved.',
  },
]

export const guideReferenceBriefEn: PageContent = {
  routeKey: 'guideReferenceBrief',
  metaTitle: 'How to Send Clothing Reference Images to a Manufacturer | Kemora',
  metaDescription:
    'Learn what reference images, measurements, fabric notes, quantities and branding details help a clothing manufacturer create a useful sampling brief.',
  breadcrumbLabel: 'How to Send Reference Images',
  hero: {
    eyebrow: 'Guide · Product Brief',
    h1: 'How to send reference images a manufacturer can use',
    lead:
      'A good reference brief does not need to look technical. It needs to make clear what you like, what you want changed and which details matter most.',
    supporting:
      'A screenshot is enough to begin; a few organised notes can prevent an unnecessary sample revision later.',
    ctas: primaryCtas,
  },
  sections: [
    {
      kind: 'steps',
      heading: 'Build a useful brief in six steps',
      items: [
        {
          title: 'Show the overall silhouette',
          body: 'Include the clearest full-garment front view you have, then a back or side view if available.',
        },
        {
          title: 'Mark the details that matter',
          body: 'Crop or annotate necklines, pockets, seams, closures, cuffs, waistbands and other important construction details.',
        },
        {
          title: 'Describe the intended fit',
          body: 'Use practical words such as fitted, straight, oversized, cropped, high-waisted or floor-length, plus the target base size.',
        },
        {
          title: 'Explain the fabric direction',
          body: 'Say whether it should feel light, structured, soft, brushed, fluid, compressive or breathable, even if you do not know the fabric name.',
        },
        {
          title: 'List what must change',
          body: 'Be explicit about longer sleeves, a higher neckline, different pocket shape, added lining or original branding.',
        },
        {
          title: 'Add the commercial facts',
          body: 'Include quantity by colour, size range, target market, launch date and any target price you are working toward.',
        },
      ],
    },
    {
      kind: 'checklist',
      heading: 'The ideal first message includes',
      items: [
        'Product name and intended customer',
        'Front, back and detail reference images where available',
        'What you like in each image and what should change',
        'Target fit and base size',
        'Fabric feel, weight or season',
        'Quantity per colour and planned number of colours',
        'Printing, embroidery, labels, trims and packaging',
        'Destination market and target launch timing',
      ],
      note:
        'Do not worry about answering everything perfectly. The purpose of the first review is to identify what is known, what is missing and which decisions affect feasibility or price.',
      tone: 'muted',
    },
    {
      kind: 'cards',
      heading: 'What happens after you send it',
      columns: 3,
      items: [
        {
          title: 'Feasibility review',
          body: 'We identify construction risks, missing views and details that need clarification.',
          href: path('privateLabel', 'en'),
        },
        {
          title: 'Fabric direction',
          body: 'Suitable fabric constructions, GSM and finishing options are proposed for the intended result.',
          href: path('fabrics', 'en'),
        },
        {
          title: 'Sample development brief',
          body: 'Once the product is clear enough, pattern and sample development can be quoted and started.',
          href: path('sampling', 'en'),
        },
      ],
    },
    { kind: 'faq', heading: 'Reference-image questions', items: referenceBriefFaqEn },
    {
      kind: 'cta',
      heading: 'Send the references you already have',
      body:
        'Attach up to five images or PDFs in the enquiry form. A short note is enough; we will ask the production questions that follow.',
      ctas: primaryCtas,
      tone: 'dark',
    },
  ],
  faqForSchema: referenceBriefFaqEn,
}

const fleeceFaqEn = [
  {
    question: 'Which is warmer: French terry or brushed fleece?',
    answer:
      'Brushed fleece is generally warmer because the inside loops are brushed into a soft insulating pile. Actual warmth still depends on GSM, fibre blend and garment construction.',
  },
  {
    question: 'Can both fabrics be used for hoodies and joggers?',
    answer:
      'Yes. French terry suits lighter or trans-seasonal sets, while brushed fleece is common for colder-weather hoodies, sweatshirts and joggers.',
  },
  {
    question: 'Does higher GSM always mean better quality?',
    answer:
      'No. GSM describes weight, not fibre quality, recovery, pilling, colourfastness or construction. The right weight depends on the product and intended season.',
  },
]

export const guideFleeceEn: PageContent = {
  routeKey: 'guideFleece',
  metaTitle: 'French Terry vs Brushed Fleece for Clothing Brands | Kemora',
  metaDescription:
    'Compare French terry and brushed fleece by construction, warmth, GSM, drape, season and product use before developing hoodies, sweatshirts or joggers.',
  breadcrumbLabel: 'French Terry vs Brushed Fleece',
  hero: {
    eyebrow: 'Guide · Fabrics',
    h1: 'French terry vs brushed fleece',
    lead:
      'Both are common sweat fabrics, but they do not create the same garment. The inside finish changes warmth, bulk, drape and the season the product suits.',
    ctas: primaryCtas,
  },
  sections: [
    {
      kind: 'cards',
      heading: 'The practical difference',
      columns: 2,
      items: [
        {
          title: 'French terry',
          body:
            'Smooth knit face with visible loops on the inside. It feels substantial without a fluffy pile and is often chosen for lighter hoodies, sweatshirts, joggers and year-round co-ords.',
          points: ['Commonly 240–350 gsm', 'More breathable', 'Cleaner looped inside', 'Good for trans-seasonal products'],
        },
        {
          title: 'Brushed fleece',
          body:
            'The inside loops are brushed into a soft raised pile. It feels warmer and fuller, making it common for winter hoodies, sweatshirts and heavier joggers.',
          points: ['Commonly 280–400 gsm', 'Warmer hand feel', 'Soft brushed inside', 'Good for colder seasons'],
        },
      ],
    },
    {
      kind: 'checklist',
      heading: 'Choose based on the finished product',
      items: [
        'Target season and selling climate',
        'Desired garment weight and retail positioning',
        'Oversized, regular or fitted silhouette',
        'Need for breathability versus insulation',
        'Rib weight and recovery at cuffs and waistband',
        'Expected shrinkage, pilling and wash behaviour',
        'Printing or embroidery method',
        'Colour matching between body fabric, rib and trims',
      ],
      note:
        'Final composition, GSM, colour, shrinkage and surface finish should be confirmed on the selected fabric and physical sample rather than assumed from the fabric name alone.',
      tone: 'muted',
    },
    {
      kind: 'cards',
      heading: 'Related production pages',
      columns: 3,
      items: [
        {
          title: 'Hoodies, sweatshirts and joggers',
          body: 'See product-specific construction, rib, drawcord and development decisions.',
          href: productCategoryPath('hoodies-sweatshirts-joggers', 'en'),
        },
        {
          title: 'Fabric and finishing options',
          body: 'Compare more garment fabrics plus printing, embroidery, labels and packing.',
          href: path('fabrics', 'en'),
        },
        {
          title: 'Sample development',
          body: 'Approve the actual fabric, fit and finishing before a bulk order starts.',
          href: path('sampling', 'en'),
        },
      ],
    },
    { kind: 'faq', heading: 'French terry and fleece questions', items: fleeceFaqEn },
    {
      kind: 'cta',
      heading: 'Compare fabrics for your product',
      body:
        'Send the garment, season, target weight and reference images. We will recommend suitable constructions to sample.',
      ctas: primaryCtas,
      tone: 'dark',
    },
  ],
  faqForSchema: fleeceFaqEn,
}

/* ------------------------------------------------------------------ */
/*  ABOUT                                                              */
/* ------------------------------------------------------------------ */

export const aboutEn: PageContent = {
  routeKey: 'about',
  metaTitle: 'About Kemora | Garment Manufacturing Partner in Egypt',
  metaDescription:
    'Meet Kemora, an Egypt-based private-label clothing manufacturing partner coordinating certified factories, product development, QC and international export support.',
  breadcrumbLabel: 'About',
  hero: {
    eyebrow: 'About Kemora',
    h1: 'An Egypt-based manufacturing and product-development partner',
    lead:
      'We develop and produce garments for international fashion brands through specialised, certified partner factories in Egypt selected for each project.',
    ctas: primaryCtas,
  },
  sections: [
    {
      kind: 'prose',
      heading: 'What we actually do',
      paragraphs: [
        'Kemora is based in Egypt and works with manufacturing and sourcing partners rather than operating a single facility. Different products need different capabilities: a jersey T-shirt, a satin pyjama set and a supportive sports bra are not efficiently made in the same place. Matching a product to the right facility is part of the job.',
        'Our role covers product development, fabric and trim sourcing, pattern and sample development, production coordination, quality follow-up and shipping coordination. For the brand, that means one point of contact instead of managing a chain of suppliers from another country.',
        'We only work with partner factories that hold relevant certifications. Our network gives projects access to high production capacity while still allowing suitable first runs to start from 50 pieces per colour.',
      ],
    },
    {
      kind: 'cards',
      heading: 'How we work',
      columns: 3,
      items: [
        {
          title: 'We are not a fashion brand',
          body:
            'We do not design or sell our own collection. Everything we produce belongs to the brand that commissioned it.',
        },
        {
          title: 'We are not a stock wholesaler',
          body:
            'There is no ready-made catalogue. Products are developed to each brand’s specification.',
        },
       
        {
          title: 'We work in your language',
          body: 'We communicate in Arabic and English, with clear written updates from sampling through shipping.',
        },
        {
          title: 'We say when something will not work',
          body:
            'If a design, quantity or price point is not realistic, we would rather tell you at the start than discover it during production.',
        },
        {
          title: 'We keep client work confidential',
          body: publishedCopy.confidentiality.en,
        },
        {
          title: 'We coordinate international delivery',
          body: publishedCopy.internationalShipping.en,
        },
      ],
      tone: 'muted',
    },
    {
      kind: 'cards',
      heading: 'How the Kemora team supports a project',
      columns: 3,
      items: [
        {
          title: 'Client and product brief',
          body:
            'One commercial contact keeps the design brief, quotations, approvals and project decisions organised.',
        },
        {
          title: 'Production follow-up in Egypt',
          body:
            'The Egypt team coordinates sampling, factory allocation, production follow-up and quality checks with the selected facility.',
        },
        {
          title: 'Export and shipment coordination',
          body:
            'Packing information, export paperwork and freight details are coordinated for the confirmed destination and route.',
        },
      ],
    },
    {
      kind: 'cta',
      heading: 'Work with us',
      body: 'Tell us about your brand and what you want to produce.',
      ctas: primaryCtas,
      tone: 'dark',
    },
  ],
}

/* ------------------------------------------------------------------ */
/*  FAQ                                                                */
/* ------------------------------------------------------------------ */

const faqItemsEn = [
  {
    question: 'What is private label manufacturing?',
    answer:
      'Garments are produced to your brand’s own designs and specification, and sold under your brand name. Kemora does not sell a ready-made factory collection — the product is developed for you before anything is produced.',
  },
  {
    question: 'Can I send a photo instead of a tech pack?',
    answer:
      'Yes. A reference photo, a sketch or an existing garment is enough to start. A tech pack speeds things up but it is not required, and most first-time founders do not have one.',
  },
  {
    question: 'Can Kemora recommend fabrics?',
    answer:
      'Yes. We propose fabrics based on the product, the fit you want, the season and your target price, and explain the trade-offs between the options.',
  },
  {
    question: 'Is a sample produced before bulk production?',
    answer:
      'Yes. A physical sample is developed and approved before bulk production begins. We do not start production from a drawing alone.',
  },
  {
    question: 'How long does a sample take?',
    answer: publishedCopy.sampleLeadTime.en,
  },
  {
    question: 'What is the minimum order quantity?',
    answer: publishedCopy.moq.en,
  },
  {
    question: 'Can you manufacture for a brand that is just starting?',
    answer:
      'Yes. New brands are a significant part of our work. We can help narrow a first collection down to something realistic to produce and sell.',
  },
  {
    question: 'Can you produce labels and packaging?',
    answer:
      'Yes — woven and printed neck labels, size labels, care and composition labels, hang tags, polybags and carton packing, prepared to your specification.',
  },
  {
    question: 'Can you provide printing and embroidery?',
    answer:
      'Yes. Screen printing, digital printing, heat transfer and embroidery are available. Which method is best depends on your artwork, fabric and quantity.',
  },
  {
    question: 'How is the production price calculated?',
    answer:
      'From fabric consumption and cost, trims, printing or embroidery, labour for the specific construction, finishing, packing and quantity. This is why the final price is confirmed after the product has been reviewed and sampled.',
  },
  {
    question: 'Can you ship internationally?',
    answer: publishedCopy.internationalShipping.en,
  },
  {
    question: 'Do you work with certified factories?',
    answer: publishedCopy.certifications.en,
  },
  {
    question: 'Can you provide EUR.1 documentation?',
    answer: publishedCopy.eur1.en,
  },
  {
    question: 'Do you share other clients’ designs?',
    answer:
      'No. Client designs and project details are confidential, and we do not show them to other clients. We also do not publish a brand name or its designs as a reference without written permission.',
  },
]

export const faqEn: PageContent = {
  routeKey: 'faq',
  metaTitle: 'Clothing Manufacturing FAQ: MOQ, Samples & Shipping | Kemora',
  metaDescription:
    'Answers about private label manufacturing, MOQ, sample timelines, fabrics, labels and packaging, printing, pricing, shipping and confidentiality.',
  breadcrumbLabel: 'FAQ',
  hero: {
    eyebrow: 'FAQ',
    h1: 'Frequently asked questions',
    lead: 'Straight answers about how production actually works with us.',
    ctas: primaryCtas,
  },
  sections: [
    { kind: 'faq', items: faqItemsEn },
    {
      kind: 'cta',
      heading: 'Still have a question?',
      body: 'Message us on WhatsApp — it is usually the fastest way to get a specific answer.',
      ctas: primaryCtas,
      tone: 'dark',
    },
  ],
  faqForSchema: faqItemsEn,
}

/* ------------------------------------------------------------------ */
/*  CONTACT                                                            */
/* ------------------------------------------------------------------ */

export const contactEn: PageContent = {
  routeKey: 'contact',
  metaTitle: 'Request a Clothing Manufacturing Quote | Kemora',
  metaDescription:
    'Request a private-label clothing quote from Egypt. Send up to five reference files, your quantity and target market. WhatsApp and a tech pack are optional.',
  breadcrumbLabel: 'Contact',
  hero: {
    eyebrow: 'Contact',
    h1: 'Discuss your clothing project',
    lead:
      'Send us what you have. A reference photo is enough, WhatsApp is optional, and you do not need a tech pack to get a useful answer.',
    ctas: [
      {
        label: 'Contact Us on WhatsApp',
        href: wa,
        variant: 'whatsapp',
        event: analyticsEvents.whatsappClick,
        external: true,
      },
    ],
  },
  sections: [{ kind: 'contactForm' }],
}

export const pagesEn = {
  home: homeEn,
  privateLabel: privateLabelEn,
  products: productsEn,
  sampling: samplingEn,
  fabrics: fabricsPageEn,
  howItWorks: howItWorksEn,
  manufacturerEgypt: manufacturerEgyptEn,
  lowMoq: lowMoqEn,
  international: internationalEn,
  europeanBrands: europeanBrandsEn,
  selectedWork: selectedWorkEn,
  startBrand: startBrandEn,
  guides: guidesEn,
  guideMoq: guideMoqEn,
  guideReferenceBrief: guideReferenceBriefEn,
  guideFleece: guideFleeceEn,
  about: aboutEn,
  faq: faqEn,
  contact: contactEn,
}
