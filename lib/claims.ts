/**
 * CLAIMS REGISTRY — single source of truth for every factual/marketing claim.
 *
 * Why this file exists
 * -------------------
 * The previous site published several absolute claims ("0% duty, every time,
 * without exception", "5,000+ pieces/day", "All fabrics meet EU chemical safety
 * standards") that Kemora cannot document on demand. Rather than silently
 * deleting them, each claim is recorded here with:
 *   - the wording that was published before,
 *   - the wording now published (conservative by default),
 *   - what evidence would be needed to publish a stronger version.
 *
 * RULE: never promote a claim from `needs-verification` to `verified` without
 * a document on file. A partner factory's certificate is NOT a Kemora
 * certificate — see `ownership` notes below.
 *
 * The `publishedCopy` exports at the bottom are imported by the content files,
 * so changing an approved figure in one place updates every page in both
 * languages.
 */

export type ClaimStatus =
  /** Documented, safe to publish as-is. */
  | 'verified'
  /** Published in softened form; stronger version blocked pending evidence. */
  | 'needs-verification'
  /** Removed from the site until evidence exists. */
  | 'removed'

export interface ClaimRecord {
  id: string
  category:
    | 'capacity'
    | 'ownership'
    | 'moq'
    | 'timeline'
    | 'shipping'
    | 'customs'
    | 'certification'
    | 'compliance'
    | 'quality'
    | 'locations'
    | 'social-proof'
    | 'portfolio'
  /** Wording on the live site before this redesign. */
  previousWording: string
  /** Where it appeared. */
  appearedIn: string[]
  /** Why it is a risk or what it contradicts. */
  risk: string
  status: ClaimStatus
  /** What Kemora must produce internally before a stronger claim can ship. */
  evidenceRequired: string
  /** Wording now live (or `null` if the claim was removed entirely). */
  revisedWording: string | null
}

export const claimsAudit: ClaimRecord[] = [
  {
    id: 'capacity-5000-per-day',
    category: 'capacity',
    previousWording: '"5,000+ Pieces / Day" (hero stat) and "Our factories produce over 5,000 garments per day" (About).',
    appearedIn: ['components/Hero.tsx', 'components/AboutUs.tsx'],
    risk:
      'Presented as Kemora capacity in the hero, but as partner-factory capacity in About — a direct contradiction. "Our factories" also implies factory ownership Kemora does not hold.',
    status: 'needs-verification',
    evidenceRequired:
      'Written capacity confirmation from each partner factory, stating lines allocated to Kemora orders (not total factory capacity).',
    revisedWording:
      'Removed from the hero. About now says Kemora works with partner factories in Egypt and that capacity is confirmed per project.',
  },
  {
    id: 'factory-ownership',
    category: 'ownership',
    previousWording: '"our port", "Our factories", "Real factory access in Cairo".',
    appearedIn: ['components/WhyKemora.tsx', 'components/AboutUs.tsx'],
    risk:
      'Implies Kemora owns the port and the factories. Kemora is a manufacturing and sourcing partner working with partner factories.',
    status: 'removed',
    evidenceRequired:
      'Ownership or lease documentation. If none exists, "partner factory" wording must be used everywhere.',
    revisedWording:
      'Kemora works with vetted partner factories and workshops in Egypt, selected per product type.',
  },
  {
    id: 'moq-300',
    category: 'moq',
    previousWording:
      '"Flexible MOQs starting from 300 pieces per style" (Products) vs "From a 500-piece private label test order" (About).',
    appearedIn: ['components/WhatWeProduce.tsx', 'components/AboutUs.tsx'],
    risk:
      'Two different minimums on the same page. Business now reports some new-brand projects starting near 50 pieces per style/colour.',
    status: 'needs-verification',
    evidenceRequired:
      'INTERNAL CHECK REQUIRED: confirm which product categories can genuinely run at ~50 pieces per style and colour, and at what price penalty. Do not present 50 as universally available.',
    revisedWording:
      'MOQ for selected new-brand projects may start from approximately 50 pieces per style and colour. Final MOQ depends on the product, fabric, construction, colours, finishing and sourcing requirements.',
  },
  {
    id: 'sample-timeline',
    category: 'timeline',
    previousWording: '"2–3 week turnaround" for pre-production samples.',
    appearedIn: ['components/OurProcess.tsx', 'lib/seo.ts'],
    risk: 'Single fixed window presented for every product regardless of fabric or complexity.',
    status: 'verified',
    evidenceRequired: 'None — range widened and made conditional, which is defensible.',
    revisedWording:
      'Sample development typically takes approximately 7–21 working days depending on fabric availability, product complexity, trims and revisions.',
  },
  {
    id: 'bulk-timeline',
    category: 'timeline',
    previousWording: '"Typically 3–5 weeks depending on quantity."',
    appearedIn: ['components/OurProcess.tsx', 'lib/seo.ts'],
    risk: 'Stated before order details are known; no dependency on fabric lead time.',
    status: 'verified',
    evidenceRequired: 'None — now explicitly confirmed after sample approval.',
    revisedWording:
      'Bulk production timing is confirmed after sample approval and final order details, and depends on quantity, fabric availability and finishing.',
  },
  {
    id: 'shipping-14-days',
    category: 'shipping',
    previousWording:
      '"14-Day Delivery to Poland", "Alexandria to Gdańsk in two weeks", "Sea freight from our port takes just 10–14 days".',
    appearedIn: ['components/Hero.tsx', 'components/WhyKemora.tsx', 'components/OurProcess.tsx'],
    risk:
      'Presented as delivery time; 10–14 days is port-to-port transit only and excludes booking, customs clearance and inland delivery. "Our port" implies ownership.',
    status: 'needs-verification',
    evidenceRequired:
      'Bills of lading or forwarder schedules for recent Alexandria→Gdańsk sailings showing actual transit times.',
    revisedWording:
      'Shipments are coordinated by air or sea depending on order size, urgency and destination. Routing, documentation requirements and expected transit timing are confirmed per shipment.',
  },
  {
    id: 'eu-duty-zero',
    category: 'customs',
    previousWording:
      '"0% EU Duty", "Save 12% on every shipment", "you clear Polish customs at 0% import duty — every time, without exception".',
    appearedIn: ['components/Hero.tsx', 'components/WhyKemora.tsx', 'components/TrustCompliance.tsx'],
    risk:
      'Absolute guarantee. Preferential duty under the EU–Egypt Association Agreement depends on the goods meeting rules of origin and on a valid EUR.1 / origin declaration being accepted. "Without exception" is not defensible; the 12% figure is the MFN rate for many apparel HS codes but not all.',
    status: 'needs-verification',
    evidenceRequired:
      'Confirmation that the specific product HS codes meet EU–Egypt rules of origin, plus examples of accepted EUR.1 certificates. Duty-rate comparison should cite the HS codes it applies to.',
    revisedWording:
      'EUR.1 documentation support may be available for eligible EU shipments, subject to applicable rules of origin and customs requirements.',
  },
  {
    id: 'reach-compliance',
    category: 'compliance',
    previousWording:
      '"All fabrics and trims meet EU chemical safety standards. Test reports are available on request for every material type we use."',
    appearedIn: ['components/TrustCompliance.tsx', 'components/WhatWeProduce.tsx'],
    risk:
      'Blanket compliance guarantee across all materials, plus a promise of test reports for every material. If a report cannot be produced on request, this is a false advertising exposure.',
    status: 'needs-verification',
    evidenceRequired:
      'Supplier declarations and/or third-party test reports on file per fabric and trim supplier. Until then, only offer testing on request for specified materials.',
    revisedWording:
      'REACH-compliant materials can be sourced on request. Where a project requires documented chemical compliance, Kemora arranges supplier declarations or third-party testing for the specified fabrics and trims, quoted per project.',
  },
  {
    id: 'aql-25',
    category: 'quality',
    previousWording: '"Every bulk order goes through a final random inspection following AQL 2.5 protocol."',
    appearedIn: ['components/TrustCompliance.tsx', 'components/OurProcess.tsx'],
    risk:
      'Guarantees a specific statistical standard on every order. Needs a documented inspection procedure and records to be defensible.',
    status: 'needs-verification',
    evidenceRequired:
      'Written QC procedure specifying sampling plan and acceptance levels, plus inspection reports from recent orders.',
    revisedWording:
      'Bulk orders are inspected before packing, with a photo report shared before shipment. Inspection level — including AQL-based sampling — is agreed per order.',
  },
  {
    id: 'iso-9001',
    category: 'certification',
    previousWording: '"ISO 9001 certification in progress."',
    appearedIn: ['components/TrustCompliance.tsx'],
    risk:
      'Does not say whose certification. A partner factory\'s certification is not Kemora\'s. "In progress" is unverifiable and adds no value to a buyer.',
    status: 'removed',
    evidenceRequired:
      'A certificate number and issuing body, plus explicit statement of the certified legal entity. Only republish once issued.',
    revisedWording: null,
  },
  {
    id: 'eur1-every-shipment',
    category: 'customs',
    previousWording: '"EUR.1 certificate included with every shipment."',
    appearedIn: ['components/OurProcess.tsx', 'components/TrustCompliance.tsx'],
    risk: 'EUR.1 is issued only for goods that qualify; it cannot be promised unconditionally.',
    status: 'needs-verification',
    evidenceRequired: 'Copies of EUR.1 certificates issued for recent shipments.',
    revisedWording:
      'For qualifying shipments to the EU, Kemora arranges export documentation including EUR.1 movement certificate support.',
  },
  {
    id: 'ethical-manufacturing',
    category: 'compliance',
    previousWording:
      '"Our partner factories follow a strict code of conduct: fair wages, no child labor, and safe working conditions."',
    appearedIn: ['components/TrustCompliance.tsx'],
    risk: 'Presented as an assured standard with no audit or signed code behind it.',
    status: 'needs-verification',
    evidenceRequired:
      'A written supplier code of conduct signed by each partner factory, and/or a third-party social audit report (e.g. BSCI, SEDEX).',
    revisedWording:
      'Kemora selects partner factories that operate registered, formal workshops. Where a brand requires audited social compliance, this is agreed at project scoping and arranged with the relevant facility.',
  },
  {
    id: 'experience-20-years',
    category: 'ownership',
    previousWording: '"20+ Years of experience", "more than 20 years of textile manufacturing relationships in Cairo".',
    appearedIn: ['components/AboutUs.tsx'],
    risk:
      'The badge reads as 20+ years of Kemora operating history. Kemora is a young company built on longer-standing family manufacturing relationships.',
    status: 'needs-verification',
    evidenceRequired:
      'Confirm the founding year of Kemora and the nature of the 20-year relationships, so the sentence can attribute the experience correctly.',
    revisedWording:
      'Kemora was founded on long-standing family relationships with garment manufacturers in Cairo. Experience is attributed to those manufacturing relationships, not to Kemora as a registered company.',
  },
  {
    id: 'social-proof-european-brands',
    category: 'social-proof',
    previousWording: '"Trusted by growing European fashion brands."',
    appearedIn: ['components/TrustCompliance.tsx'],
    risk: 'Unnamed, uncountable social proof with no client references behind it.',
    status: 'removed',
    evidenceRequired:
      'Named client references with written permission to be listed, or an anonymised but specific figure (e.g. "brands in 4 European countries") that can be substantiated.',
    revisedWording: null,
  },
  {
    id: 'portfolio-real-collections',
    category: 'portfolio',
    previousWording:
      'Gallery headed "Pieces Made for Real Collections", mixing a genuine client collaboration with studio/concept imagery under identical styling.',
    appearedIn: ['components/SampleWork.tsx'],
    risk:
      'A visitor cannot tell which images are delivered production, which are samples, and which are concept visuals. Several gallery images are concept/AI-assisted visuals presented as completed work.',
    status: 'needs-verification',
    evidenceRequired:
      'INTERNAL CHECK REQUIRED: classify every image in /public/sample-work as (a) real project work, (b) physical sample, or (c) concept visual. Update `workType` in content/*/selected-work.ts accordingly.',
    revisedWording:
      'Every image now carries an explicit label: "Selected Project Work", "Sample Development" or "Concept Visual — For Direction Only", plus a confidentiality statement.',
  },
  {
    id: 'team-locations',
    category: 'locations',
    previousWording:
      'About names "Asma Elmahde and Mirna Elmenshawy" in Cairo, but the team cards show "Nouran Elmenshawy — Co-Founder & Production Director, Cairo". The Contact block lists Youssif, Abdalla, Asma and Mirna but not Nouran. The founders quote is signed "Nouran, Youssif & Abdalla".',
    appearedIn: ['components/AboutUs.tsx', 'components/Contact.tsx', 'components/TrustCompliance.tsx'],
    risk: 'Three inconsistent versions of who works where and who founded the company.',
    status: 'needs-verification',
    evidenceRequired:
      'INTERNAL CHECK REQUIRED: confirm the definitive founder list, each person\'s role, and their location. One list must then be used sitewide.',
    revisedWording:
      'A single team list is now defined in content/*/about.ts and reused on About and Contact. Names retained from the previous site; roles and locations flagged for confirmation.',
  },
  {
    id: 'special-finishes',
    category: 'quality',
    previousWording: 'Fabric/finishing capabilities listed without qualification.',
    appearedIn: ['components/WhatWeProduce.tsx'],
    risk:
      'Publishing enzyme wash, garment dye or specialist finishing as an in-house capability when it is subcontracted or unconfirmed.',
    status: 'needs-verification',
    evidenceRequired:
      'INTERNAL CHECK REQUIRED: confirm which finishing services are genuinely available and whether in-house or subcontracted, before adding washes/special finishes to the Fabrics page.',
    revisedWording:
      'Only embroidery, screen printing, digital printing, heat transfer, labels, hang tags, polybags and packaging are published as available. Washes and special finishes are marked as available on request subject to confirmation.',
  },
]

/** Claims that still block a stronger public statement. Surfaced in the handover report. */
export const unverifiedClaims = claimsAudit.filter((c) => c.status === 'needs-verification')

/* ------------------------------------------------------------------ */
/*  Approved copy — imported by content files so figures stay in sync. */
/* ------------------------------------------------------------------ */

export const publishedCopy = {
  moq: {
    en: 'MOQ for selected new-brand projects may start from approximately 50 pieces per style and colour. Final MOQ depends on the product, fabric, construction, colours, finishing and sourcing requirements.',
    ar: 'قد يبدأ الحد الأدنى لبعض مشروعات البراندات الجديدة من حوالي 50 قطعة للموديل واللون الواحد، ويُحدد بشكل نهائي حسب نوع المنتج، الخامة، طريقة التنفيذ، عدد الألوان، التشطيبات ومتطلبات التوريد.',
  },
  sampleLeadTime: {
    en: 'Sample development typically takes approximately 7–21 working days depending on fabric availability, product complexity, trims and revisions.',
    ar: 'تستغرق عملية تطوير العينة عادةً من 7 إلى 21 يوم عمل تقريبًا، حسب توفر الخامة، تعقيد المنتج، الإكسسوارات والتعديلات المطلوبة.',
  },
  capabilityDisclaimer: {
    en: 'Production capability depends on the fabric, construction, finishing, quantity and individual project requirements.',
    ar: 'تعتمد إمكانية التنفيذ على نوع الخامة، الباترون، طريقة التصنيع، التشطيبات، الكمية ومتطلبات كل مشروع.',
  },
  fabricSelection: {
    en: 'Final fabric composition, GSM, stretch, colour and finishing are selected according to the product, season, fit, target price and required quality level.',
    ar: 'يتم تحديد تركيب الخامة، الوزن، نسبة المطاطية، اللون والتشطيب النهائي وفقًا لنوع المنتج، الموسم، القَصّة، السعر المستهدف ومستوى الجودة المطلوب.',
  },
  confidentiality: {
    en: 'Kemora respects client confidentiality. Certain brand names, designs and project details are not publicly disclosed unless permission has been granted.',
    ar: 'تحترم Kemora خصوصية عملائها، ولذلك لا يتم نشر بعض أسماء البراندات أو التصميمات أو تفاصيل المشروعات إلا بعد الحصول على موافقة.',
  },
  extraServices: {
    en: 'Additional product-development or brand-support services may be quoted separately depending on the project scope.',
    ar: 'قد يتم تسعير خدمات تطوير المنتجات أو الدعم الإضافي للبراند بشكل منفصل حسب نطاق المشروع.',
  },
} as const
