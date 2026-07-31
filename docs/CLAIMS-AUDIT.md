# Website Claims Audit

**Source of truth: [`lib/claims.ts`](../lib/claims.ts).** That file is imported by the content
files, so approved wording changes in one place and updates both languages. This document is the
readable version of it.

**Rule:** never promote a claim from `needs-verification` to `verified` without a document on file.
A partner factory's certificate is **not** a Kemora certificate.

Status key — 🔴 **Blocked**: was published, now softened or removed, needs evidence ·
🟡 **Softened**: safe as now written · 🟢 **OK**: defensible as written.

---

## Claims requiring business confirmation

| # | Claim | Where it appeared | Risk / contradiction | Status | Evidence required | Now published as |
|---|---|---|---|---|---|---|
| 1 | **"5,000+ Pieces / Day"** hero stat; *"Our factories produce over 5,000 garments per day"* | `Hero.tsx`, `AboutUs.tsx` | Presented as Kemora's capacity in the hero but as partner-factory capacity in About — a direct contradiction. "Our factories" also asserts ownership Kemora does not hold. | 🔴 | Written capacity confirmation per partner factory, stating **lines allocated to Kemora**, not total factory capacity. | Removed from hero. About states Kemora works with partner factories; capacity confirmed per project. |
| 2 | **Factory ownership** — *"our port"*, *"Our factories"*, *"Real factory access in Cairo"* | `WhyKemora.tsx`, `AboutUs.tsx` | Implies Kemora owns the port and the factories. | 🔴 Removed | Ownership/lease documentation. If none, "partner factory" wording must be used sitewide. | "Kemora works with vetted partner factories and workshops in Egypt, selected per product type." |
| 3 | **MOQ 300** vs **500-piece test order** | `WhatWeProduce.tsx` (300), `AboutUs.tsx` (500) | Two different minimums on one page. Business now reports some projects near 50 pcs/style/colour. | 🔴 | **INTERNAL CHECK:** confirm *which categories* can genuinely run ~50 pcs per style **and colour**, and at what price penalty. Do not present 50 as universal. | "MOQ for selected new-brand projects may start from approximately 50 pieces per style and colour. Final MOQ depends on the product, fabric, construction, colours, finishing and sourcing requirements." |
| 4 | **"0% EU Duty"**, *"Save 12% on every shipment"*, *"clear Polish customs at 0% — every time, without exception"* | `Hero.tsx`, `WhyKemora.tsx`, `TrustCompliance.tsx` | Absolute guarantee. Preferential duty depends on goods meeting **rules of origin** and on a valid EUR.1 being accepted. "Without exception" is indefensible. 12% is the MFN rate for many apparel HS codes but not all. | 🔴 | Confirmation that the specific product HS codes meet EU–Egypt rules of origin, plus examples of accepted EUR.1 certificates. Any duty-rate comparison must cite the HS codes it applies to. | "Garments that meet the rules of origin under the EU–Egypt Association Agreement **can qualify** for preferential (0%) import duty when accompanied by a valid EUR.1. Eligibility is confirmed per product and per shipment." |
| 5 | **"EUR.1 included with every shipment"** | `OurProcess.tsx`, `TrustCompliance.tsx` | EUR.1 is issued only for qualifying goods; cannot be promised unconditionally. | 🔴 | Copies of EUR.1 certificates issued for recent shipments. | "For qualifying shipments to the EU, Kemora arranges export documentation including EUR.1 movement certificate support." |
| 6 | **"All fabrics and trims meet EU chemical safety standards. Test reports available on request for every material type."** | `TrustCompliance.tsx`, `WhatWeProduce.tsx` | Blanket compliance guarantee **plus** a promise of reports for *every* material. If a report can't be produced on request, this is a false-advertising exposure. | 🔴 | Supplier declarations and/or third-party test reports on file per fabric and trim supplier. | "REACH-compliant materials **can be sourced on request**. Where a project requires documented chemical compliance, Kemora arranges supplier declarations or third-party testing for the specified materials, quoted per project." |
| 7 | **"Every bulk order goes through AQL 2.5 final random inspection"** | `TrustCompliance.tsx`, `OurProcess.tsx` | Guarantees a specific statistical standard on every order. | 🔴 | Written QC procedure specifying sampling plan and acceptance levels, plus inspection reports from recent orders. | "Bulk orders are inspected before packing, with a photo report shared before shipment. Inspection level — including AQL-based sampling — is agreed per order." |
| 8 | **"ISO 9001 certification in progress"** | `TrustCompliance.tsx` | Does not say **whose**. A partner factory's certification is not Kemora's. "In progress" is unverifiable and adds nothing for a buyer. | 🔴 Removed | Certificate number, issuing body, and the certified legal entity. Republish only once issued. | *(removed entirely)* |
| 9 | **"14-Day Delivery to Poland"**, *"Sea freight from our port takes just 10–14 days"* | `Hero.tsx`, `WhyKemora.tsx`, `OurProcess.tsx` | Presented as **delivery** time; 10–14 days is port-to-port **transit** only, excluding booking, customs clearance and inland delivery. | 🔴 | Bills of lading / forwarder schedules for recent Alexandria→Gdańsk sailings. | "Sea freight from Alexandria to northern European ports typically takes around 10–14 days **in transit**, excluding booking, customs clearance and inland delivery. Confirmed per shipment." |
| 10 | **Ethical manufacturing** — *"strict code of conduct: fair wages, no child labor, safe working conditions"* | `TrustCompliance.tsx` | Presented as an assured standard with no signed code or audit behind it. | 🔴 | A supplier code of conduct **signed** by each partner factory, and/or third-party social audit (BSCI, SEDEX). | "Kemora selects partner factories that operate registered, formal workshops. Where a brand requires audited social compliance, this is agreed at project scoping." |
| 11 | **"20+ Years of experience"** badge | `AboutUs.tsx` | Badge reads as 20+ years of *Kemora* operating history. Kemora is a young company built on longer-standing family relationships. | 🔴 | Confirm Kemora's founding year and the nature of the 20-year relationships. | Experience is now attributed to the **manufacturing relationships**, not to Kemora as a registered company. |
| 12 | **"Trusted by growing European fashion brands"** | `TrustCompliance.tsx` | Unnamed, uncountable social proof with no client references behind it. | 🔴 Removed | Named client references with written permission, or a specific substantiable figure. | *(removed entirely)* |
| 13 | **Portfolio presented as "Pieces Made for Real Collections"** | `SampleWork.tsx` | Mixed a genuine client collaboration with studio/concept imagery under identical styling. A visitor could not tell what was delivered production. | 🔴 | **INTERNAL CHECK:** classify every image in `/public/sample-work`. See "Image provenance" below. | Every image now carries an explicit label + confidentiality statement. Two images withheld. |
| 14 | **Team names, roles and locations** | `AboutUs.tsx`, `Contact.tsx`, `TrustCompliance.tsx` | **Three inconsistent versions** existed simultaneously — see below. | 🔴 | **INTERNAL CHECK:** confirm the definitive founder list, each person's role and location. | A single team list now lives in `content/*/pages.ts` and is used sitewide. Names retained; roles/locations flagged. |
| 15 | **Finishing capabilities** | `WhatWeProduce.tsx` | Risk of publishing enzyme wash / garment dye as in-house when subcontracted or unconfirmed. | 🔴 | **INTERNAL CHECK:** confirm which finishing services are available and whether in-house or subcontracted. | Only embroidery, screen/digital/heat-transfer printing, labels, hang tags, polybags and packaging are published as available. Washes and special finishes are listed **"available on request"**. |

### The team contradiction (claim 14), in detail

The live site says all three of these at once:

- **About body text:** *"Asma Elmahde and Mirna Elmenshawy oversee samples, production and quality control … in Cairo."*
- **About team cards:** *"Nouran Elmenshawy — Co-Founder & Production Director, 📍 Cairo, Egypt"*
- **Contact locations list:** Youssif (Wrocław), Abdalla (Łódź), Asma Elmahde (Cairo), Mirna (Cairo) — **Nouran is absent**
- **Founders quote signed:** *"— Nouran, Youssif & Abdalla Elmenshawy, Co-Founders"* while `WhyKemora` says *"Youssif, **our co-founder**"* (singular framing)

A visitor comparing the About and Contact sections sees a different company in each.

---

## Claims that are fine as now written

| Claim | Status | Note |
|---|---|---|
| Sample lead time **7–21 working days**, conditional on fabric/complexity/trims/revisions | 🟢 | Replaces the fixed "2–3 weeks". Range + stated dependencies is defensible. |
| Bulk production timing **confirmed after sample approval** | 🟢 | Replaces "typically 3–5 weeks" stated before order details were known. |
| Egypt's proximity shortening restock cycles vs East Asia | 🟢 | Geographic fact, no numeric guarantee attached. |
| Arabic / English / Polish language support | 🟢 | Verifiable internally. |

---

## Image provenance — urgent

Two images in `/public/sample-work` are **another brand's campaign creative**, and were published
under generic Kemora titles inside a section headed *"Pieces Made for Real Collections"*:

| File | Evidence | Was published as | Action taken |
|---|---|---|---|
| `checked-colorways.webp` | Visible **`www.meejhu.com`** watermark | "Colorway exploration — Multiple sample directions for collection planning" | **Withheld** (`published: false`) |
| `white-lounge-set.webp` | Overlaid campaign typography **"Someday, Somewhere — The Checked Out Collection"** (same brand/campaign) | "Lightweight leisurewear — Relaxed shapes for warm-weather collections" | **Withheld** (`published: false`) |

Both remain in `content/en/work.ts` with a `permissionNote` so nothing is silently deleted, but they
are excluded from rendering. Republish **only** if Kemora confirms both that it produced those
garments **and** that the brand has given written permission to display its campaign creative.

**Correction to an earlier assumption:** the remaining gallery images were checked individually and
are **genuine photographs, not AI-generated**. They are classified conservatively as
`sample` (physical samples) rather than `project`, pending confirmation of Kemora's role in each
finished garment. `gray-lounge-sample.webp` carries a small embroidered brand mark and is flagged
for a permission check.

---

## Other items for the business to decide

1. **No Egyptian / Gulf WhatsApp number exists in the codebase.** Arabic pages currently fall back
   to the Poland number (+48). Add one to `contactConfig.whatsappRegional` in `lib/site.ts` and every
   Arabic page picks it up automatically. **No number has been invented.**
2. **Privacy policy is GDPR-framed and English-only.** It is `noindex` and excluded from the sitemap.
   Whether it needs an Arabic version or Middle East data-protection wording is a legal question, not
   a copy question.
3. **Nida / formal abaya fabrics** are published as *"subject to sourcing confirmation"*. Confirm
   whether these are reliably sourceable before softening that qualifier.
