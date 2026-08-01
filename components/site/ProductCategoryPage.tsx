import type { ProductCategory } from '@/content/types'
import { path, productCategoryPath, type Locale } from '@/lib/i18n'
import { whatsappLink, analyticsEvents } from '@/lib/site'
import { publishedCopy } from '@/lib/claims'
import { getCommon, getProductCategories, getFabrics, getFinishing, getWork } from '@/content'
import {
  organizationSchema,
  websiteSchema,
  webPageSchema,
  breadcrumbSchema,
  faqSchema,
} from '@/lib/seo'

import Navbar from './Navbar'
import Footer from './Footer'
import Hero from './Hero'
import SectionRenderer from './SectionRenderer'
import WhatsAppFloat from './WhatsAppFloat'
import JsonLd from './JsonLd'
import AnimateIn from '../ui/AnimateIn'
import type { Crumb } from '../ui/Breadcrumbs'

export default function ProductCategoryPage({
  locale,
  category,
}: {
  locale: Locale
  category: ProductCategory
}) {
  const common = getCommon(locale)
  const whatsappHref = whatsappLink(locale)
  const isAr = locale === 'ar'
  const currentPath = productCategoryPath(category.slug, locale)

  const crumbs: Crumb[] = [
    { name: common.breadcrumbHome, path: path('home', locale) },
    { name: isAr ? 'المنتجات' : 'Products', path: path('products', locale) },
    { name: category.name, path: currentPath },
  ]

  const ctas = [
    {
      label: common.cta.requestSample,
      href: path('contact', locale),
      variant: 'primary' as const,
      event: analyticsEvents.sampleRequestClick,
    },
    {
      label: common.cta.whatsapp,
      href: whatsappHref,
      variant: 'whatsapp' as const,
      event: analyticsEvents.whatsappClick,
      external: true,
    },
  ]

  const ctx = {
    locale,
    common,
    categories: getProductCategories(locale),
    fabrics: getFabrics(locale),
    finishing: getFinishing(locale),
    work: getWork(locale),
    whatsappHref,
  }

  const structuredData: unknown[] = [
    organizationSchema,
    websiteSchema(locale),
    webPageSchema({
      locale,
      path: currentPath,
      name: category.metaTitle,
      description: category.metaDescription,
    }),
    breadcrumbSchema(crumbs),
  ]
  if (category.faqs.length > 0) structuredData.push(faqSchema(category.faqs))

  const listBlock = (title: string, items: string[]) => (
    <div className="relative overflow-hidden rounded-lg border border-k-border bg-white p-6 shadow-sm shadow-black/[0.03]">
      <span className="absolute inset-x-0 top-0 h-1 bg-accent/80" aria-hidden="true" />
      <h2 className="mb-4 text-base font-bold text-primary">{title}</h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-k-muted">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <>
      <JsonLd data={structuredData} />

      <Navbar
        locale={locale}
        common={common}
        whatsappHref={whatsappHref}
        initialTheme="dark"
      />

      <main id="main">
        <Hero
          hero={{ eyebrow: isAr ? 'المنتجات' : 'Products', h1: category.h1, lead: category.intro, ctas }}
          crumbs={crumbs}
        />

        <section data-header-theme="light" className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimateIn>
              <div className="grid gap-5 lg:grid-cols-3">
                {listBlock(isAr ? 'الموديلات' : 'Styles we produce', category.items)}
                {listBlock(isAr ? 'الخامات الشائعة' : 'Fabrics typically used', category.fabrics)}
                {listBlock(isAr ? 'التشطيبات والبراندنج' : 'Finishing and branding', category.finishing)}
              </div>
            </AnimateIn>

            <AnimateIn>
              <p className="mt-8 rounded-xl border border-k-border bg-sand/60 p-5 text-sm leading-relaxed text-k-muted">
                {publishedCopy.capabilityDisclaimer[locale]}
              </p>
            </AnimateIn>
          </div>
        </section>

        <section data-header-theme="light" className="bg-sand py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimateIn className="mb-12 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                {isAr ? 'ملاحظات التطوير' : 'Development notes'}
              </h2>
              <p className="mt-4 leading-relaxed text-k-muted">
                {isAr
                  ? 'النقاط التي تحدد نتيجة هذا المنتج تحديدًا، ويجب حسمها قبل تنفيذ العينة.'
                  : 'The decisions that actually determine the outcome for this product, and are best settled before sampling.'}
              </p>
            </AnimateIn>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {category.developmentNotes.map((note, i) => (
                <AnimateIn key={note.title} delay={i * 60} className="h-full">
                  <div className="relative h-full overflow-hidden rounded-lg border border-k-border bg-white p-6 shadow-sm shadow-black/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-black/[0.07]">
                    <span className="absolute inset-x-0 top-0 h-1 bg-accent/80" aria-hidden="true" />
                    <h3 className="mb-2 text-base font-bold text-primary">{note.title}</h3>
                    <p className="text-sm leading-relaxed text-k-muted">{note.body}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>

            <AnimateIn>
              <p className="mt-8 rounded-xl border border-k-border bg-white p-5 text-sm leading-relaxed text-k-muted">
                {publishedCopy.moq[locale]}
              </p>
            </AnimateIn>
          </div>
        </section>

        {category.faqs.length > 0 && (
          <SectionRenderer
            section={{
              kind: 'faq',
              heading: isAr ? 'أسئلة شائعة عن هذه الفئة' : 'Questions about this category',
              items: category.faqs,
            }}
            ctx={ctx}
          />
        )}

        <SectionRenderer
          section={{
            kind: 'cta',
            heading: isAr ? 'أرسل تصميمك أو الصور المرجعية' : 'Send your design or reference images',
            body: isAr
              ? 'سنخبرك بطريقة التنفيذ، والخامة المناسبة، وما الذي يحتاجه المشروع.'
              : 'We will tell you how it would be made, which fabric suits it, and what the project would need.',
            ctas,
            tone: 'dark',
          }}
          ctx={ctx}
        />
      </main>

      <Footer locale={locale} common={common} whatsappHref={whatsappHref} />
      <WhatsAppFloat href={whatsappHref} label={common.cta.whatsapp} />
    </>
  )
}
