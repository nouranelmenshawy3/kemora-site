import type { PageContent } from '../types'
import { path } from '@/lib/i18n'
import { whatsappLink, analyticsEvents } from '@/lib/site'
import { publishedCopy } from '@/lib/claims'

const wa = whatsappLink('en')

const primaryCtas = [
  {
    label: 'Start Your Project',
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
  metaTitle: 'Private-Label Clothing Manufacturer in Egypt | Kemora',
  metaDescription:
    'Egypt-based private-label garment manufacturer and product-development partner for fashion brands in the Middle East and Europe.',
  ogTitle: 'Private-Label Garment Manufacturing from Egypt | Kemora',
  ogDescription:
    'We develop and manufacture to your brand’s own designs — fabric sourcing, sampling, production, labels, packaging and quality control.',
  breadcrumbLabel: 'Home',
  hero: {
    eyebrow: 'Egypt · Middle East · Europe',
    h1: 'Private-Label Garment Manufacturing for Brands in Europe and the Middle East',
    lead:
      'From fabric sourcing and sample development to private-label production, labels, packaging and quality control — Kemora helps fashion brands develop and manufacture their collections in Egypt.',
    supporting:
      'We do not sell a ready-made factory collection. Every order is produced to your own designs, fabrics, fit, colours and quality requirements.',
    ctas: [
      {
        label: 'Start Your Project',
        href: path('contact', 'en'),
        variant: 'primary',
        event: analyticsEvents.sampleRequestClick,
      },
      {
        label: 'Request a Sample',
        href: path('sampling', 'en'),
        variant: 'secondary',
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
    highlights: [
      'Works with new and established brands',
      'Samples before bulk production',
      'Client designs kept confidential',
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
        },
        {
          title: 'Fabric sourcing',
          body:
            'We source fabrics and trims to your specification and recommend alternatives when a fabric is unavailable or does not suit the product.',
        },
        {
          title: 'Pattern and sampling',
          body:
            'Patterns are developed to your measurements, and a physical sample is produced for approval before bulk production begins.',
        },
        {
          title: 'Private-label production',
          body:
            'Bulk production runs against the approved sample and an agreed specification sheet, under your brand’s labels.',
        },
        {
          title: 'Branding and finishing',
          body:
            'Printing, embroidery, woven labels, care labels, hang tags, polybags and packaging are prepared to your brand’s specification.',
        },
        {
          title: 'Quality control and shipping',
          body:
            'Orders are inspected before packing with a photo report shared before shipment, and we coordinate export documentation and freight.',
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
      kind: 'steps',
      eyebrow: 'Sampling',
      heading: 'How a sample is developed',
      lead:
        'The sample is where the product is actually decided. Bulk production only starts once you have approved it.',
      items: [
        { title: 'Design review', body: 'We go through your designs, references or existing sample and confirm what is being made.' },
        { title: 'Fabric selection', body: 'We propose fabrics by weight, composition and hand feel against your target price.' },
        { title: 'Pattern development', body: 'A pattern is made to your measurements and intended fit.' },
        { title: 'Sample development', body: 'The physical sample is cut and sewn.' },
        { title: 'Client review', body: 'You review the sample and send specific comments and measurements.' },
        { title: 'Revisions', body: 'Adjustments are made and, where needed, a revised sample is produced.' },
        { title: 'Approval', body: 'The approved sample becomes the reference for bulk production.' },
      ],
      note: publishedCopy.sampleLeadTime.en,
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
      kind: 'steps',
      eyebrow: 'How It Works',
      heading: 'From first conversation to shipment',
      items: [
        { title: 'Initial consultation', body: 'We discuss the product, quantity, target price and timing.' },
        { title: 'Design review', body: 'We review what you have and identify anything still to be decided.' },
        { title: 'Fabric selection', body: 'Fabric and trims are proposed and confirmed.' },
        { title: 'Sample development', body: 'A physical sample is produced for your approval.' },
        { title: 'Client approval', body: 'You approve the sample and the final specification is documented.' },
        { title: 'Bulk production', body: 'Production runs against the approved sample and specification.' },
        { title: 'Quality control', body: 'Garments are inspected before packing and a photo report is shared.' },
        { title: 'Packing and shipping', body: 'Orders are packed to your packing list and freight is coordinated.' },
      ],
      note:
        'Exact timing is confirmed after we review your project. Production begins only after the sample and order details are approved.',
      tone: 'dark',
    },
    {
      kind: 'cards',
      eyebrow: 'Why Kemora',
      heading: 'Why brands work with us',
      columns: 3,
      items: [
        {
          title: 'Egyptian manufacturing, closer to both markets',
          body:
            'Egypt sits within short shipping distance of both the Gulf and Europe, which shortens restock cycles compared with sourcing from East Asia.',
        },
        {
          title: 'Preferential EU access for qualifying goods',
          body:
            'Garments that meet the rules of origin under the EU–Egypt Association Agreement can qualify for preferential (0%) import duty into the EU with a valid EUR.1 movement certificate. Eligibility is confirmed per product and per shipment.',
        },
        {
          title: 'Arabic, English and Polish',
          body:
            'You can work with us in your own language, in your own working hours, whether you are in Riyadh, Cairo, Dubai or Warsaw.',
        },
        {
          title: 'Built for smaller first orders',
          body: publishedCopy.moq.en,
        },
        {
          title: 'One point of contact',
          body:
            'Fabric, trims, printing, labels and packaging are coordinated by us rather than by you across several suppliers.',
        },
        {
          title: 'Confidentiality by default',
          body:
            'Your designs and project details are not shared with other clients, and your brand is not published as a reference without permission.',
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
  ],
}

/* ------------------------------------------------------------------ */
/*  PRIVATE LABEL                                                      */
/* ------------------------------------------------------------------ */

export const privateLabelEn: PageContent = {
  routeKey: 'privateLabel',
  metaTitle: 'What Is Private Label Manufacturing? | Kemora',
  metaDescription:
    'Private label means garments made to your own designs and sold under your brand. How Kemora develops a product from a reference image to bulk production.',
  breadcrumbLabel: 'Private Label',
  hero: {
    eyebrow: 'Private Label',
    h1: 'What is private label manufacturing?',
    lead:
      'Private label means the product is developed specifically for your brand and sold under your name. Kemora does not sell a fixed, ready-made factory collection — there is no catalogue to order from.',
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
        },
        {
          title: 'It is not instant',
          body:
            'Sampling and production take time because the product is being created. Plan for development, not just delivery.',
        },
        {
          title: 'It is not a design service by default',
          body:
            'We advise on construction, fabric and feasibility as part of the project. Full creative direction, logo design and brand identity are separate services and would be quoted separately.',
        },
        {
          title: 'It is not shared',
          body:
            'Your designs are produced for you. We do not resell your product to other clients or show your designs to them.',
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
  metaTitle: 'Products We Manufacture | Private Label Clothing | Kemora',
  metaDescription:
    'T-shirts, hoodies, joggers, pyjamas, loungewear, dresses, abayas, activewear and uniforms — produced to your own designs in Egypt.',
  breadcrumbLabel: 'Products',
  hero: {
    eyebrow: 'Products',
    h1: 'What we manufacture',
    lead:
      'Knitted and woven garments across everyday basics, loungewear, women’s wear, modest wear, activewear and uniforms — all produced to your own designs.',
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
        'Jackets and selected outerwear',
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
    'How Kemora develops clothing samples: design review, fabric selection, patterns, sampling and approval. Typically 7–21 working days.',
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
          title: 'Samples are paid',
          body:
            'Sample development is charged. It covers pattern work, fabric, trims and the labour of producing a single unit, which is far higher per piece than bulk.',
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
    'Common fabrics we work with — combed cotton jersey, interlock, piqué, French terry, fleece, rib, viscose, poplin, satin and linen blends.',
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
    'From consultation and design review to fabric selection, sampling, approval, production, quality control, packing and shipping.',
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
            'Production runs against the approved sample and documented specification. Timing is confirmed at this point, once quantity and fabric are known.',
        },
        {
          title: 'Quality control',
          body:
            'Garments are inspected before packing and a photo report is shared with you before shipment.',
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
            'Sea freight from Alexandria to northern European ports typically takes around 10–14 days in transit, excluding booking, customs clearance and inland delivery.',
        },
        {
          title: 'EU preferential duty',
          body:
            'Garments that meet the rules of origin under the EU–Egypt Association Agreement can qualify for preferential (0%) import duty into the EU when accompanied by a valid EUR.1 movement certificate. Eligibility is confirmed per product and per shipment.',
        },
        {
          title: 'Export documentation',
          body:
            'For qualifying shipments we arrange the export documentation, including EUR.1 movement certificate support where the goods are eligible.',
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
        },
        {
          title: 'Colours cost more than sizes',
          body:
            'Each colour is dyed separately and carries its own minimum. Adding a colour affects your order value much more than adding a size does.',
        },
        {
          title: 'Budget for sampling',
          body:
            'Sampling is a real cost before you have any stock to sell. Plan for it, and plan for at least one revision round.',
        },
        {
          title: 'Fabric decides the price',
          body:
            'If you have a target retail price, tell us early. It is the fastest way for us to steer you to a fabric that works commercially.',
        },
        {
          title: 'Leave time for production',
          body:
            'Working backwards from a launch date is the most common planning mistake. Development, sampling, production and freight all need time.',
        },
        {
          title: 'A tech pack is not required',
          body:
            'We can build the specification with you. Bring a photo of what you want and we will turn it into something producible.',
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
/*  ABOUT                                                              */
/* ------------------------------------------------------------------ */

export const aboutEn: PageContent = {
  routeKey: 'about',
  metaTitle: 'About Kemora | Garment Manufacturing Partner in Egypt',
  metaDescription:
    'Kemora is an Egypt-based garment manufacturing and product-development partner serving brands in Europe and the Middle East.',
  breadcrumbLabel: 'About',
  hero: {
    eyebrow: 'About Kemora',
    h1: 'An Egypt-based manufacturing and product-development partner',
    lead:
      'We develop and produce garments for fashion brands in the Middle East and Europe, working with manufacturing and sourcing partners in Egypt according to what each project requires.',
    ctas: primaryCtas,
  },
  sections: [
    {
      kind: 'prose',
      heading: 'What we actually do',
      paragraphs: [
        'Kemora is based in Egypt and works with manufacturing and sourcing partners rather than operating a single facility. Different products need different capabilities: a jersey T-shirt, a satin pyjama set and a supportive sports bra are not efficiently made in the same place. Matching a product to the right facility is part of the job.',
        'Our role covers product development, fabric and trim sourcing, pattern and sample development, production coordination, quality follow-up and shipping coordination. For the brand, that means one point of contact instead of managing a chain of suppliers from another country.',
        'Kemora grew out of long-standing family relationships with garment manufacturers in Cairo. That access is what makes it practical for us to run smaller development-heavy projects that a large factory would not usually take on directly.',
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
          title: 'We do not own the factories',
          body:
            'We work with partner factories and workshops, selected per product type. We are direct with clients about this rather than implying ownership.',
        },
        {
          title: 'We work in your language',
          body: 'Arabic, English and Polish, within your working hours.',
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
      ],
      tone: 'muted',
    },
    {
      kind: 'cards',
      heading: 'The team',
      columns: 2,
      // TODO [BUSINESS INPUT REQUIRED] — see claims.ts `team-locations`.
      // The previous site gave three inconsistent versions of who the founders
      // are and where they are based. Confirm names, roles and locations, then
      // update this single list — it is now the only place the team is defined.
      items: [
        {
          title: 'Youssif Elmenshawy — Client relations',
          body:
            'Based in Poland. First point of contact for quotes, project scoping and European clients.',
        },
        {
          title: 'Nouran Elmenshawy — Production',
          body:
            'Based in Egypt. Coordinates sampling, production follow-up and quality checks with partner factories.',
        },
        {
          title: 'Abdalla Elmenshawy — Logistics',
          body: 'Based in Poland. Coordinates shipping and delivery between Egypt and Europe.',
        },
        {
          title: 'Cairo production team',
          body:
            'Asma Elmahde and Mirna Elmenshawy work with the partner factories on samples, production follow-up and quality control.',
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
    answer:
      'Yes. We coordinate shipping to the Middle East and Europe by air or sea depending on the order size and urgency, and prepare the export documentation. Routing and transit time are confirmed per shipment.',
  },
  {
    question: 'Do you share other clients’ designs?',
    answer:
      'No. Client designs and project details are confidential, and we do not show them to other clients. We also do not publish a brand name or its designs as a reference without written permission.',
  },
]

export const faqEn: PageContent = {
  routeKey: 'faq',
  metaTitle: 'Frequently Asked Questions | Kemora',
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
  metaTitle: 'Contact Kemora | Start Your Private-Label Project',
  metaDescription:
    'Send your designs or reference images, request a sample, book a call or message Kemora on WhatsApp. We typically respond within one business day.',
  breadcrumbLabel: 'Contact',
  hero: {
    eyebrow: 'Contact',
    h1: 'Start your project',
    lead:
      'Send us what you have. A reference photo is enough — you do not need a tech pack to get a useful answer.',
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
  selectedWork: selectedWorkEn,
  startBrand: startBrandEn,
  about: aboutEn,
  faq: faqEn,
  contact: contactEn,
}
