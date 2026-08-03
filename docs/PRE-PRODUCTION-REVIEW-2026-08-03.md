# Kemora Final Pre-Production Review

Date: 3 August 2026
Branch: `codex/sitewide-trust-seo`
Preview: `http://localhost:3001`
Deployment status: **Owner approved the confirmed wording and deployment; final checks and release pending.**

## Five Changes Clients Will Notice First

1. **A clearer offer immediately:** the homepage now says Kemora is an Egypt-based private-label
   clothing manufacturing partner, not a ready-made wholesaler.
2. **Commercial facts up front:** the opening view presents the conditional 50-piece-per-colour
   starting MOQ, certified partner factories, scalable capacity and international shipping support.
3. **A more useful product journey:** buyers can go directly to ten product categories, including
   streetwear, resortwear, modest wear, activewear and puffer jackets.
4. **An easier enquiry:** a reference photo is enough, WhatsApp is optional, and a client can attach
   several files without writing a long message.
5. **More credible proof:** selected project work and samples are clearly labelled, while process,
   quality, shipping and customs wording avoids unsupported guarantees.

## Logo Decision

The previous logo remains active:

- Header asset: `/kemora-mark.png`
- Privacy-page asset: `/kemora-mark.png`
- Schema asset: `/kemora-mark.png`
- Favicon: `/favicon.png`

The higher-quality SVG experiment is not present in the final working tree. It can be replaced later
when a final redraw has been approved.

## Complete Page Inventory

Every sitemap page below was either rewritten, added, or receives the new shared navigation,
metadata, schema, footer and conversion treatment.

### English core pages: changed

| URL | Main change |
|---|---|
| `/` | Shorter homepage, clear manufacturing position, proof points, product routes and FAQs. |
| `/private-label` | Clear scope, custom-development process, confidentiality and production prerequisites. |
| `/products` | Ten-category manufacturing hub with capability disclaimer. |
| `/sampling` | Sample-development process, conditional timing and pricing, and approval steps. |
| `/fabrics` | Fabric/GSM guidance, printing, embroidery, trims, labels and packaging. |
| `/how-it-works` | End-to-end process, certified partner allocation, QC, packing and export support. |
| `/manufacturing-for-european-brands` | Europe-specific process, products and conditional EUR.1 wording. |
| `/selected-work` | Project/sample provenance labels, confidentiality and category links. |
| `/start-clothing-brand` | Practical first-collection guidance for new brands. |
| `/about` | Accurate partner-network model and international coordination; unverified team cards removed. |
| `/faq` | MOQ, samples, certification, shipping, EUR.1, pricing and confidentiality questions. |
| `/contact` | Quote-focused enquiry, optional WhatsApp and multi-file support. |
| `/privacy` | Actual data flow, providers, uploads, retention criteria and rights; `noindex`. |

### English core pages: added

| URL | Search intent |
|---|---|
| `/clothing-manufacturer-egypt` | Clothing manufacturer in Egypt for international fashion brands. |
| `/low-moq-clothing-manufacturer` | Lower opening quantities from 50 pieces per colour for suitable styles. |
| `/international-clothing-manufacturing` | Europe, UK, USA, Middle East and other feasible markets. |
| `/guides` | Manufacturing knowledge hub. |
| `/guides/how-clothing-moq-is-calculated` | How fabric, colour, trims and construction determine MOQ. |
| `/guides/how-to-send-clothing-reference-images` | How to brief a manufacturer without a tech pack. |
| `/guides/french-terry-vs-brushed-fleece` | Practical fabric comparison for sweats. |

### English product-category pages

| URL | Status |
|---|---|
| `/products/t-shirts-polos-basics` | Reviewed; new shared service schema and conversion links. |
| `/products/hoodies-sweatshirts-joggers` | Reviewed; new shared service schema and conversion links. |
| `/products/pajamas-loungewear` | Reviewed; new shared service schema and conversion links. |
| `/products/dresses-womens-wear` | Reviewed; new shared service schema and conversion links. |
| `/products/abayas-modest-wear` | Reviewed; new shared service schema and conversion links. |
| `/products/activewear` | Reviewed; new shared service schema and conversion links. |
| `/products/streetwear` | Added. |
| `/products/resortwear` | Added; burkini/technical swimwear is not claimed. |
| `/products/puffer-jackets-outerwear` | Reviewed; completed puffer work linked from portfolio. |
| `/products/workwear-uniforms` | Reviewed; new shared service schema and conversion links. |

### Arabic core pages: changed

| URL | Main change |
|---|---|
| `/ar` | Original Arabic homepage copy, regional intent, RTL and international positioning. |
| `/ar/private-label` | Natural Arabic explanation of Private Label production. |
| `/ar/products` | Arabic product hub with all ten categories. |
| `/ar/sampling` | Arabic sample process, timing dependencies and costs. |
| `/ar/fabrics` | Arabic fabric, GSM, finishing and packaging guidance. |
| `/ar/how-it-works` | Arabic production, quality and shipping process. |
| `/ar/selected-work` | Arabic provenance labels and portfolio descriptions. |
| `/ar/start-clothing-brand` | New-brand guidance for Middle Eastern clients. |
| `/ar/about` | Partner network, service model and international support. |
| `/ar/faq` | Regional Arabic manufacturing questions. |
| `/ar/contact` | RTL enquiry form, optional WhatsApp and attachments. |

### Arabic core pages: added

| URL | Search intent |
|---|---|
| `/ar/clothing-manufacturer-egypt` | مصنع ملابس في مصر للبراندات. |
| `/ar/low-moq-clothing-manufacturer` | تصنيع ملابس من 50 قطعة لكل لون للموديلات المناسبة. |
| `/ar/international-clothing-manufacturing` | التصنيع والتصدير للأسواق الدولية. |
| `/ar/guides` | أدلة تصنيع الملابس. |
| `/ar/guides/how-clothing-moq-is-calculated` | كيفية حساب MOQ. |
| `/ar/guides/how-to-send-clothing-reference-images` | إرسال صور مرجعية للمصنع. |
| `/ar/guides/french-terry-vs-brushed-fleece` | مقارنة الفرنش تيري والفليس. |

### Arabic product-category pages

- `/ar/products/t-shirts-polos-basics`
- `/ar/products/hoodies-sweatshirts-joggers`
- `/ar/products/pajamas-loungewear`
- `/ar/products/dresses-womens-wear`
- `/ar/products/abayas-modest-wear`
- `/ar/products/activewear`
- `/ar/products/streetwear`
- `/ar/products/resortwear`
- `/ar/products/puffer-jackets-outerwear`
- `/ar/products/workwear-uniforms`

### Technical endpoints changed or affected

- `/sitemap.xml` — 57 canonical English/Arabic pages with language alternates.
- `/robots.txt` — sitemap declared and `/api/` disallowed.
- `/api/contact` — validation, attachment handling and Resend delivery.
- `/_not-found` — verified to return HTTP 404 through Next.js.

## Factual Claim Approval Register

No certificate name, factory count, daily capacity figure, fixed bulk lead time, fixed freight time,
duty rate, price, testimonial, rating or guaranteed customs outcome is published.

| Topic | Exact current public position | Status before deployment |
|---|---|---|
| Factory capacity | “Kemora works through a high-capacity network of specialised partner factories. Available production allocation is confirmed against the product, quantity and required delivery window.” | **Owner supplied:** high capacity. Approve this exact non-numeric wording. Keep allocation evidence privately. |
| Certifications | “Kemora works only with partner factories that hold relevant certifications. The applicable facility, certification scope and supporting documents are confirmed during project qualification.” | **Owner supplied:** only relevant-certified factories. Confirm “only” is literally true for every production partner. Keep certificates, scopes and expiry dates; no names are public. |
| MOQ | “MOQ starts from 50 pieces per colour for suitable styles. Final MOQ depends on the product, fabric, construction, number of colours, finishing and sourcing requirements.” | **Owner supplied.** Confirm it means 50 per colour, normally split across sizes, and identify internally which categories are suitable. |
| EUR.1 | “EUR.1 documentation can often be provided for eligible EU shipments, subject to applicable rules of origin and customs requirements.” | **Owner supplied.** Keep recent eligible examples. No duty result is guaranteed. |
| International shipping | Kemora coordinates shipping to Europe, UK, USA, Middle East and other markets where the project and route are feasible; method, cost, documents and timing are shipment-specific. | **Owner supplied.** Confirm the USA is a currently feasible destination and that this means coordination, not guaranteed clearance or delivery. |
| Sample lead time | “Sample lead time is confirmed after reviewing the design and production requirements.” | **Owner confirmed.** No numerical range is published. |
| Bulk lead time | Confirmed only after sample approval, quantity, fabric and finishing are known. | Safe conditional wording; no fixed number is published. |
| Shipping lead time | Confirmed only after route, packed volume, method and destination are known. | Safe conditional wording; no fixed number is published. |
| Quality control | Production is reviewed against the approved sample and agreed specifications. Inspection scope and any reporting are confirmed for the specific order. | **Owner confirmed.** No fixed AQL level or automatic photo report is public. |
| Sample pricing | “Sample pricing is confirmed after reviewing the design and production requirements.” | **Owner confirmed.** The site does not state that every sample is paid. |
| Languages | Contact pages and schema state Arabic and English support only. | **Owner confirmed.** No Polish-language support claim is public. |
| Availability | Footer says “Currently accepting new projects.” | **Owner confirmed.** |
| Portfolio | Central Studio, Meejhu/Checked Out and puffer images are labelled completed project work; other pieces are labelled samples. | Project status was supplied previously. Permission for the grey sample’s visible mark was confirmed on 3 August 2026. Keep written permission records. |
| Hero image | Described as garment production in an Egyptian factory. | Confirm provenance and public-use permission for `/egypt-factory.jpeg`. |
| Confidentiality | Client names/designs are not disclosed without permission. | Confirm this reflects Kemora’s actual operating practice. |
| Legal identity | The privacy notice identifies Kemora as the website brand and does not publish a legal entity or registered address. | **Intentionally omitted** until the owner supplies confirmed details. Obtain legal review before adding them. |
| Contact details | `info@kemoratex.com` and `+48 575 379 875` are used for both English and Arabic enquiries. | **Owner confirmed.** |

## Brand and Contact Consistency Review

- Brand displayed in headers, footers, metadata and schema: **Kemora**.
- Header and legal page use the original `/kemora-mark.png`.
- No public source reference to Seif Clothing.
- No placeholder company names.
- No localhost URL in rendered production content.
- No visible “Kemoratex” company name. `kemoratex.com` remains only as the real domain/email.
- Canonical origin: `https://www.kemoratex.com`.
- Email destination: `info@kemoratex.com`.
- WhatsApp destination: `+48 575 379 875` / `wa.me/48575379875`.
- Automated audit now fails on future forbidden company names, localhost URLs or unexpected
  email/WhatsApp links.

## Enquiry Form and Attachment Readiness

### Verified in code and local production build

- Required: name, valid email, privacy consent and either a message or at least one attachment.
- Optional: brand, WhatsApp, country, category, quantity and message when files are attached.
- Accepted attachments: JPG, JPEG, PNG, WEBP and PDF.
- Maximum: five files, 3 MB total.
- Files selected in separate chooser actions accumulate instead of replacing earlier files.
- Individual files can be removed and all files can be cleared.
- Filenames are sanitised; extension, count and decoded total size are revalidated server-side.
- Text and HTML email bodies escape submitted content.
- Email reply-to is set to the client’s submitted email.
- Validation tests passed for missing details, optional WhatsApp, attachment-only enquiry, invalid
  email, invalid file type and more than five files.

### Production dependency that cannot be confirmed locally

Only `.env.example` exists locally. Vercel must have all three variables:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`

The sender in `CONTACT_FROM_EMAIL` must belong to a domain verified in Resend. Without the API key,
the form deliberately returns an error and does not pretend that an enquiry was sent.

Immediately after deployment, run three genuine smoke tests and verify arrival in the destination
inbox plus reply-to behavior:

1. Message-only enquiry with no WhatsApp number.
2. Attachment-only enquiry with two small images selected in separate chooser actions.
3. One PDF plus two images, remaining below 3 MB total.

Therefore: **the form logic and attachment pipeline are verified; final email delivery is not proven
until the Vercel/Resend variables and verified sender are checked on the deployed project.**

## Short Manual Test Checklist

### Desktop

- Open `/`, scroll slowly and confirm the header changes between dark and light backgrounds.
- Check every primary navigation item, language switch and “Request a Sample” button.
- Open `/products`, one product page, `/selected-work`, `/contact` and `/privacy`.
- Confirm images are sharp, correctly cropped and labelled as project or sample.
- Submit the three production form smoke tests above and verify inbox delivery.
- Open the WhatsApp link and verify the displayed number/message before sending anything.
- Inspect the footer links, email, WhatsApp number and privacy link.

### Mobile

- Test at approximately 390 px wide on iPhone Safari and Android Chrome.
- Open and scroll the full mobile menu; close it and verify the page can scroll again.
- Switch English ↔ Arabic from equivalent service and product pages.
- Check RTL alignment, Arabic line wrapping and logo/header spacing.
- Add five small files in more than one selection; remove one; clear all; add them again.
- Confirm no text, button, floating WhatsApp control or footer item overlaps another element.
- Rotate once to landscape and confirm the header/form recover cleanly.

## Final Quality Gates

- Next.js 15.5.22 production build: passed, 65 app pages generated.
- ESLint: passed non-interactively.
- TypeScript: passed.
- Route/SEO audit: 57 sitemap pages and 58 internal paths passed.
- Dependency audit: zero known vulnerabilities.
- English/Arabic language and RTL checks: passed.
- Internal links, canonical URLs, `hreflang`, metadata and JSON-LD: passed.
- 404, sitemap, robots and security headers: passed.
- Browser console on visual-review pages: no warnings or errors.
- Desktop/mobile visual captures: completed; no overlap found in reviewed views.

## Deployment Gate

The owner approved the public claims, contact details, Arabic/English language scope, current-project
availability and the visible sample mark. The legal entity and address remain intentionally omitted.

Before declaring the release complete: verify the Vercel Resend environment variables and sender
domain through a production form smoke test, then submit the priority URLs and sitemap in Search Console.
