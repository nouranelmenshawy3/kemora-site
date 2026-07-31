# SEO — Keyword Map, Metadata & Technical Checklist

## 1. Keyword → page map

Each cluster has **one** target page per language. Keywords are used in the H1, an H2, body copy and
internal anchor text — not stuffed into a meta keywords tag (which was removed; Google ignores it and
the old one carried 15 stuffed terms).

### Arabic

| Cluster (primary → secondary) | Target page | Where it appears |
|---|---|---|
| `مصنع ملابس في مصر` → `مصنع ملابس مصر`, `تصنيع ملابس في مصر` | `/ar` | H1, hero lead, About section |
| `تصنيع ملابس Private Label` → `تصنيع ملابس بعلامة تجارية خاصة`, `ما هو Private Label` | `/ar/private-label` | H1, first H2, FAQ |
| `مصنع ملابس للبراندات` → `تصنيع ملابس للبراندات` | `/ar` + `/ar/about` | Hero, "شريك تصنيع، وليس تاجر جملة" |
| `مصنع تيشيرتات في مصر` → `تصنيع تيشيرتات`, `مصنع بولو` | `/ar/products/t-shirts-polos-basics` | H1, styles list, dev notes |
| `تصنيع هوديز وسويت شيرت` → `مصنع هوديز`, `تصنيع جوجرز` | `/ar/products/hoodies-sweatshirts-joggers` | H1, fabric list, FAQ |
| `مصنع بيجامات وملابس نوم` → `تصنيع ملابس نوم`, `مصنع بيجامات حريمي` | `/ar/products/pajamas-loungewear` | H1, intro, dev notes |
| `مصنع ملابس Loungewear` → `تصنيع ملابس منزلية` | `/ar/products/pajamas-loungewear` | H2, styles list |
| `مصنع عبايات` → `تصنيع عبايات`, `مصنع ملابس محتشمة` | `/ar/products/abayas-modest-wear` | H1, intro, dev notes |
| `تصنيع ملابس رياضية` → `مصنع لجن`, `تصنيع حمالات رياضية` | `/ar/products/activewear` | H1, styles list |
| `تصنيع عينة ملابس` → `تطوير عينات`, `كم تستغرق العينة` | `/ar/sampling` | H1, process steps, FAQ |
| `مصنع ملابس بكميات قليلة` → `أقل كمية لتصنيع الملابس`, `الحد الأدنى للكمية` | `/ar/sampling` + `/ar/faq` | MOQ block, FAQ answer |
| `بدء براند ملابس` → `كيف أبدأ براند ملابس`, `مشروع براند ملابس` | `/ar/start-clothing-brand` | H1, checklist, advice cards |
| `تصنيع ملابس للتصدير` → `تصدير ملابس من مصر` | `/ar/how-it-works` | "الشحن والمستندات" section |
| `الخامات` → `أنواع أقمشة التريكو`, `فرنش تيري`, `بيكيه` | `/ar/fabrics` | H1, fabric cards |
| `يونيفورم` → `تصنيع يونيفورم`, `ملابس عمل` | `/ar/products/workwear-uniforms` | H1, styles list |
| `تصنيع فساتين` → `ملابس نسائية` | `/ar/products/dresses-womens-wear` | H1, styles list |

### English

| Cluster | Target page |
|---|---|
| `private label clothing manufacturer Egypt` | `/` |
| `what is private label manufacturing` | `/private-label` |
| `clothing sample development` / `garment sampling process` | `/sampling` |
| `t-shirt manufacturer Egypt` / `polo shirt manufacturer` | `/products/t-shirts-polos-basics` |
| `hoodie manufacturer Egypt` / `sweatshirt manufacturer` | `/products/hoodies-sweatshirts-joggers` |
| `pyjama manufacturer` / `loungewear manufacturer` | `/products/pajamas-loungewear` |
| `abaya manufacturer` / `modest wear manufacturer` | `/products/abayas-modest-wear` |
| `activewear manufacturer Egypt` | `/products/activewear` |
| `workwear and uniform manufacturer` | `/products/workwear-uniforms` |
| `dress manufacturer` / `women's wear manufacturer` | `/products/dresses-womens-wear` |
| `how to start a clothing brand` | `/start-clothing-brand` |
| `low MOQ clothing manufacturer` | `/sampling` + `/faq` |
| `garment export Egypt to Europe` / `EU–Egypt trade` | `/how-it-works` |
| `fabric types for clothing` | `/fabrics` |

**Anti-stuffing rule:** a target keyword appears once in the H1, at most once in an H2, and
naturally in body copy. It is never repeated to hit a density target, and never inserted in a way
that breaks Arabic grammar.

---

## 2. Meta titles and descriptions

All titles and descriptions live in `content/{en,ar}/pages.ts` and `content/{en,ar}/products.ts` and
are emitted by `lib/metadata.ts`. **Verified: no duplicate titles or descriptions across all 37
routes.** English titles ≤ 62 chars, descriptions ≤ 165 chars. Arabic titles ≤ 63 chars (Arabic
renders more compactly than Latin in SERPs).

Selected examples:

| Page | Title | Description |
|---|---|---|
| `/` | Private-Label Clothing Manufacturer in Egypt \| Kemora | Egypt-based private-label garment manufacturer and product-development partner for fashion brands in the Middle East and Europe. |
| `/ar` | مصنع ملابس Private Label في مصر للبراندات \| Kemora | Kemora شركة مقرها مصر لتصنيع الملابس بنظام Private Label وتطوير المنتجات للبراندات في الشرق الأوسط وأوروبا… |
| `/private-label` | What Is Private Label Manufacturing? \| Kemora | Private label means garments made to your own designs and sold under your brand… |
| `/ar/private-label` | ما هو التصنيع بنظام Private Label؟ \| Kemora | التصنيع بنظام Private Label يعني إنتاج الملابس وفق تصميمات براندك وبيعها باسمك… |
| `/ar/products/abayas-modest-wear` | مصنع عبايات وملابس محتشمة في مصر \| تصنيع Private Label \| Kemora | تصنيع عبايات وملابس محتشمة بنظام Private Label في مصر… |
| `/sampling` | Clothing Sample Development \| Sampling Process \| Kemora | How Kemora develops clothing samples… Typically 7–21 working days. |

### Image alt text

Alt text is written per image in `content/{en,ar}/work.ts` and describes **what is actually in the
photograph**, not a keyword string. Examples:

- `central-studio-pyramids-team.jpg` → *"Dance team wearing black custom-printed Central Studio T-shirts produced by Kemora, photographed at the Giza pyramids"*
- AR: *"فريق رقص يرتدي تيشيرتات سوداء مطبوعة من إنتاج Kemora لصالح Central Studio أمام أهرامات الجيزة"*
- `washed-fleece-detail.jpg` → *"Close-up of a brushed fleece garment showing waistband construction and drawcord finishing"*

The logo image in the navbar uses `alt=""` because the adjacent text "KEMORA" already names the link —
duplicating it would make screen readers announce the brand twice.

---

## 3. Internal linking

- **Every page** links to Contact and WhatsApp via the closing CTA band.
- **Home** links to all 7 category pages (product grid), Sampling, Fabrics, Selected Work, Private Label.
- **Products overview** → all 7 category pages.
- **Every category page** → Products (breadcrumb), Contact, WhatsApp.
- **Footer** links all 10 pages in both languages — this is the main crawl path for Arabic.
- **Breadcrumbs** on every non-home page, with `BreadcrumbList` schema.
- Language switcher links each page to its **exact equivalent** (`alternatePath()` in `lib/i18n.ts`),
  including category pages — not a blanket redirect to the homepage.

**Recommended next:** add contextual in-body links from category dev-notes to `/fabrics` and
`/sampling` (e.g. from "confirm weight before pattern development" → Fabrics).

---

## 4. Technical SEO checklist

| Item | Status | Implementation |
|---|---|---|
| `lang="en"` / `dir="ltr"` | ✅ | `app/(en)/layout.tsx` — server-rendered |
| `lang="ar"` / `dir="rtl"` | ✅ | `app/(ar)/layout.tsx` — server-rendered, **not** client-patched |
| hreflang `en`, `ar`, `x-default` | ✅ | `alternatesFor*()` in `lib/i18n.ts`; verified 3 alternates on all 36 indexable routes |
| Self-referencing canonical | ✅ | Verified on all 37 routes |
| XML sitemap with alternates | ✅ | `app/sitemap.ts` — 36 URLs, `xhtml:link` alternates per entry |
| robots.txt | ✅ | `app/robots.ts` — allows all, disallows `/api/`, declares host + sitemap |
| Organization schema | ✅ | `lib/seo.ts`, single `@id`, `areaServed` covers ME + EU |
| WebSite / WebPage schema | ✅ | Per page, `inLanguage` set correctly |
| BreadcrumbList schema | ✅ | Emitted only when breadcrumbs render |
| FAQPage schema | ✅ | **Only** where FAQs are visibly rendered (`page.faqForSchema`) |
| Service schema | ✅ | Homepage only |
| LocalBusiness / ProfessionalService | ⚠️ **Deliberately omitted** | Those types expect a verifiable street address. Kemora has no published verified address; publishing an unverified one is worse than omitting. Add once confirmed. |
| Open Graph title/description/image/locale | ✅ | Per page, with `og:locale:alternate` |
| Twitter card | ✅ | `summary_large_image` |
| One `<h1>` per page | ✅ | Verified across all 37 routes |
| No duplicate titles/descriptions | ✅ | Verified |
| Meta keywords tag | ✅ **Removed** | Was 15 stuffed terms; ignored by Google, mild spam signal |
| WebP/AVIF | ✅ | `next.config.ts` `formats: ['image/webp','image/avif']` |
| Lazy loading + explicit dimensions | ✅ | `next/image` with `fill` + `sizes`; only the hero logo is `priority` |
| Reduced-motion support | ✅ | `globals.css` media query pins `.reveal` visible |
| Skip-to-content link | ✅ | `SitePage.tsx` / `ProductCategoryPage.tsx` |
| Focus states | ✅ | `:focus-visible` outline, lighter variant on dark sections |
| 404 handling | ✅ | Localised `not-found.tsx` per language; invalid category slugs 404 (`dynamicParams = false`) |

### Duplicate-content protection

English and Arabic are separate URLs with reciprocal `hreflang` and self-referencing canonicals, and
the sitemap declares alternates per entry. Category slugs are intentionally **identical Latin strings**
in both languages (`/products/abayas-modest-wear` ↔ `/ar/products/abayas-modest-wear`) so the pairing
is unambiguous and URLs stay free of percent-encoding.

Arabic copy is **originally written**, not machine-translated — the Arabic category pages carry
different development notes and FAQs from their English counterparts where the regional context
differs (e.g. abaya length expectations by market).
