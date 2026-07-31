# Kemora — Website Audit, Architecture & 30-Day Plan

## 1. Audit of the previous website

The live site (`kemoratex.com`) was a **single page**: one route (`/`), six anchor sections
(`#why #products #process #about #trust #contact`), plus a standalone `/privacy`. The sitemap
contained exactly one URL.

### Structural findings

| Finding | Impact |
|---|---|
| Entire site was one page | Nothing to rank except the homepage. No page could target "abaya manufacturer" or "sample development" separately. |
| Sitemap listed 1 URL | Nothing else existed to crawl. |
| No Arabic version, no `hreflang`, no language switcher | Middle East traffic had no entry point. |
| `lang="en"` hardcoded in the single root layout | No way to serve `dir="rtl"` without restructuring — this drove the architecture decision below. |
| Meta keywords tag with 15 stuffed terms | Ignored by Google; mild spam signal. |
| Visible FAQ but **no FAQPage schema** | Missed rich-result eligibility on the one thing the site did well. |
| No breadcrumbs, no BreadcrumbList schema | N/A on a one-pager, but blocking for the new structure. |
| Font subset was `latin` only | Arabic text would have fallen back to inconsistent system fonts. |
| Contact form captured name/company/email/message only | No country, WhatsApp, product category, quantity, or "do you have designs?" — every enquiry needed a follow-up round trip. |
| No reduced-motion handling; `.reveal` starts at `opacity: 0` | Users with reduced-motion preferences could see blank sections. |

### Positioning findings

The copy was written exclusively for European (specifically Polish) buyers — *"14-Day Delivery to
Poland"*, *"Alexandria to Gdańsk"*, *"Your contact is in the same timezone"*, *"Questions European
Brands Ask"*, form placeholders `Jan Kowalski` / `Your Brand Sp. z o.o.`. A buyer in Riyadh or Dubai
would read the whole page as addressed to someone else.

It also positioned Kemora ambiguously: *"Pieces Made for Real Collections"* and a product grid read
like a catalogue, while the actual business is build-to-order private label.

### Factual findings

**15 claims required correction or removal.** Full table with evidence requirements and revised
wording: [`CLAIMS-AUDIT.md`](./CLAIMS-AUDIT.md). The most serious:

1. **Two third-party brand campaign images published as Kemora's own work.**
   `checked-colorways.webp` carries a visible `www.meejhu.com` watermark;
   `white-lounge-set.webp` carries the campaign typography *"Someday, Somewhere — The Checked Out
   Collection"*. Both were re-titled generically ("Colorway exploration", "Lightweight leisurewear")
   under a heading reading *"Pieces Made for Real Collections"*. **Both are now withheld.**
2. **Contradictory MOQ on the same page** — 300 pieces (Products) vs a 500-piece test order (About).
3. **Contradictory team** — three mutually inconsistent versions of who the founders are and where
   they work, across About, Contact and the founders' quote.
4. **Absolute customs guarantee** — *"0% import duty — every time, without exception"*, when
   preferential duty depends on rules of origin and an accepted EUR.1.
5. **Blanket compliance guarantee** — *"All fabrics and trims meet EU chemical safety standards"* plus
   a promise of test reports for *every* material type.
6. **Capacity claim presented two ways** — "5,000+ Pieces / Day" as a Kemora stat in the hero, but
   "our factories produce over 5,000" in About, alongside "our port" and "Our factories" implying
   ownership Kemora does not hold.

---

## 2. Urgent corrections (do these first)

| # | Action | Why |
|---|---|---|
| 1 | Confirm rights to `checked-colorways.webp` and `white-lounge-set.webp`, or delete them | Third-party brand creative published as own work — reputational and IP exposure |
| 2 | Decide the real MOQ per category (can ~50 pcs/style/colour genuinely run?) | The site cannot state a number until the business does |
| 3 | Confirm the definitive founder list, roles and locations | Three contradictory versions were live simultaneously |
| 4 | Produce (or drop) evidence for REACH, AQL 2.5, EUR.1 and capacity claims | All four are now softened; stronger wording is blocked pending documents |
| 5 | Add an Egyptian/Gulf WhatsApp number to `contactConfig.whatsappRegional` | Arabic pages currently fall back to the Poland number. **No number was invented.** |
| 6 | Classify each gallery image as project / sample / concept | Currently defaulted to `sample` conservatively |

---

## 3. Bilingual sitemap

English at root, Arabic under `/ar`. 36 indexable routes + `/privacy` (noindex).

| English | Arabic |
|---|---|
| `/` | `/ar` |
| `/private-label` | `/ar/private-label` |
| `/products` | `/ar/products` |
| `/products/t-shirts-polos-basics` | `/ar/products/t-shirts-polos-basics` |
| `/products/hoodies-sweatshirts-joggers` | `/ar/products/hoodies-sweatshirts-joggers` |
| `/products/pajamas-loungewear` | `/ar/products/pajamas-loungewear` |
| `/products/dresses-womens-wear` | `/ar/products/dresses-womens-wear` |
| `/products/abayas-modest-wear` | `/ar/products/abayas-modest-wear` |
| `/products/activewear` | `/ar/products/activewear` |
| `/products/workwear-uniforms` | `/ar/products/workwear-uniforms` |
| `/sampling` | `/ar/sampling` |
| `/fabrics` | `/ar/fabrics` |
| `/how-it-works` | `/ar/how-it-works` |
| `/selected-work` | `/ar/selected-work` |
| `/start-clothing-brand` | `/ar/start-clothing-brand` |
| `/about` | `/ar/about` |
| `/faq` | `/ar/faq` |
| `/contact` | `/ar/contact` |
| `/privacy` (noindex) | — (links to English) |

**On product landing pages:** all 7 recommended categories were created because each has genuinely
distinct development content — hood construction and dye-lot matching for sweats, opacity-under-stretch
for activewear, drape and market-specific length for abayas, repeatability for uniforms. Shirts,
shorts, knitwear, jackets and caps are listed under "Also produced" on `/products` **without** their
own pages, because there is not yet enough distinct content to justify one. Adding them now would
create exactly the thin duplicate pages the brief warned against.

---

## 4. Architecture

**Multiple root layouts via route groups.** `app/(en)/` serves English at root URLs; `app/(ar)/ar/`
serves Arabic. Each group has its own root layout rendering `<html lang dir>` **on the server**.

This was necessary rather than stylistic: in the App Router `<html>` can only be rendered by a root
layout, so a single layout cannot serve both `dir="ltr"` and `dir="rtl"`. The alternative — mutating
`document.documentElement` on the client — would ship `lang="en"` in the server HTML that crawlers
read. The language switcher uses a plain `<a>` (not `next/link`) so the document reloads and the
direction actually changes.

**Content is data.** All copy lives in `content/{en,ar}/` as typed objects; a `Section` union is
rendered by one `SectionRenderer`. Route files are ~12 lines (metadata + `<SitePage>`). A copywriter
never opens a `.tsx` route file, and the two languages cannot structurally drift.

**Provenance is data too.** `content/*/work.ts` carries `workType` and `published` per image.
`getWork()` filters to published items, so an unapproved image cannot reach the page by accident.
Arabic inherits provenance from English by design — an image's classification is a fact, not
translatable copy, so the two languages can never disagree about what an image is.

### Key files

```
lib/i18n.ts          locales, EN↔AR route map, alternatePath(), hreflang builders
lib/claims.ts        claims registry + approved copy (MOQ, lead times, disclaimers)
lib/seo.ts           schema builders (Organization, WebPage, Breadcrumb, FAQ, Service)
lib/site.ts          contact config, WhatsApp builder, analytics event names
lib/metadata.ts      buildMetadata() / buildCategoryMetadata()
lib/fonts.ts         Inter + IBM Plex Sans Arabic
content/types.ts     Section union, PageContent, WorkItem, ProductCategory
content/{en,ar}/     common.ts · pages.ts · products.ts · fabrics.ts · work.ts
components/site/     SitePage, ProductCategoryPage, SectionRenderer, Navbar, Footer,
                     Hero, InquiryForm, ContactChannels, WorkCard, WhatsAppFloat, JsonLd
components/ui/       CtaButton, TrackedLink, LanguageSwitcher, Breadcrumbs, AnimateIn
```

---

## 5. 30-day implementation plan

### Week 1 — Business verification (blocks publishing)
- [ ] Resolve image rights for the two withheld files (**day 1**)
- [ ] Confirm MOQ per category; update `publishedCopy.moq` in `lib/claims.ts`
- [ ] Confirm founder list, roles, locations; update the team cards in `content/*/pages.ts`
- [ ] Gather or drop evidence for REACH / AQL / EUR.1 / capacity
- [ ] Add regional WhatsApp number to `contactConfig.whatsappRegional`
- [ ] Native Arabic speaker reviews all `/ar` copy (a translator was **not** used — copy is originally written, but a regional read-through is still worth doing)

### Week 2 — Content completion
- [ ] Classify every gallery image; update `workType` in `content/en/work.ts`
- [ ] Shoot or source 3–5 additional genuine sample photos (the gallery is thin once withheld images are removed)
- [ ] Add contextual in-body internal links from category dev-notes → `/fabrics`, `/sampling`
- [ ] Arabic OG image (current `og-image.jpg` is English-only)
- [ ] Decide whether the privacy policy needs an Arabic version (legal input)

### Week 3 — Launch
- [ ] Set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` in Vercel; **send a real test enquiry with an attachment**
- [ ] Deploy to a preview URL; check Arabic rendering on real iOS and Android devices
- [ ] Run Lighthouse on `/` and `/ar` (mobile)
- [ ] Validate schema in Google Rich Results Test — `/`, `/ar`, `/faq`, one category page
- [ ] Submit both sitemaps in Search Console; confirm hreflang pairs are detected
- [ ] Deploy to production

### Week 4 — Measure and iterate
- [ ] Confirm analytics events are recording (see [`ANALYTICS.md`](./ANALYTICS.md))
- [ ] Watch Search Console for Arabic impressions and hreflang errors
- [ ] Add a booking tool and wire `meeting_booking_click`
- [ ] Review enquiry quality: are the new form fields reducing follow-up round trips?
- [ ] Consider country landing pages (Saudi Arabia, UAE, Iraq, Jordan) — **only** once there is
      genuinely country-specific content: real shipping routes, real transit times, real client
      questions. Do not create these as country-name swaps.

---

## 6. Deliberate omissions

| Item | Why |
|---|---|
| Country landing pages (Saudi/UAE/Iraq/Jordan) | The brief also forbids thin duplicate pages. Real per-country content (shipping routes, transit times, payment norms) is not available yet. Outlined in Week 4 instead of shipped empty. |
| `meeting_booking_click` CTA | No booking tool is configured; a "Book a Meeting" button would be a dead link. Event name is reserved and documented. |
| LocalBusiness / ProfessionalService schema | Requires a verifiable street address Kemora has not published. |
| Arabic privacy policy | Legal text, not marketing copy — needs legal input, not translation. |
| ESLint run | The repo has **no ESLint config**; `next lint` (deprecated in Next 15) prompts interactively to create one. Pre-existing gap, not introduced here. `tsc --noEmit` and the Next build's type check both pass clean. |
