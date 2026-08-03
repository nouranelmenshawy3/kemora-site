import type { ProductCategory } from '@/content/types'
import Link from 'next/link'
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
  productManufacturingServiceSchema,
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

  const relatedLinks = [
    {
      href: path('sampling', locale),
      title: isAr ? 'تطوير عينة لهذا المنتج' : 'Sample development for this product',
      body: isAr
        ? 'افهم كيف تتحول الصورة المرجعية أو التصميم إلى عينة فعلية قابلة للمراجعة.'
        : 'See how a reference image or design becomes a physical sample you can review.',
    },
    {
      href: path('fabrics', locale),
      title: isAr ? 'الخامات والتشطيبات المناسبة' : 'Relevant fabrics and finishes',
      body: isAr
        ? 'راجع الخامات، الأوزان، الطباعة، التطريز، الليبلات وخيارات التغليف.'
        : 'Review fabric constructions, weights, printing, embroidery, labels and packing options.',
    },
    {
      href: path('privateLabel', locale),
      title: isAr ? 'التصنيع بنظام Private Label' : 'Private-label manufacturing',
      body: isAr
        ? 'اعرف كيف يُنتج المنتج وفق تصميمات براندك ومواصفاته وليس من كتالوج جاهز.'
        : 'Understand how the product is made to your brand specification, not from a stock catalogue.',
    },
    {
      href: path('selectedWork', locale),
      title: isAr ? 'نماذج من الأعمال والعينات' : 'Selected work and samples',
      body: isAr
        ? 'شاهد صورًا مصنفة بوضوح بين أعمال منفذة وعينات تطوير.'
        : 'View images clearly labelled as completed project work or physical sample development.',
    },
    {
      href: path('products', locale),
      title: isAr ? 'كل فئات المنتجات' : 'All product categories',
      body: isAr
        ? 'قارن هذه الفئة مع فئات أخرى مثل الهوديز، البيجامات، العبايات والملابس الرياضية.'
        : 'Compare this category with hoodies, loungewear, abayas, activewear and other products.',
    },
    {
      href: path('contact', locale),
      title: isAr ? 'أرسل صورة مرجعية' : 'Send a reference image',
      body: isAr
        ? 'أرسل التصميم أو الصورة المرجعية وسنوضح ما يحتاجه المشروع قبل العينة.'
        : 'Send the design or reference image and we will explain what the project needs before sampling.',
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
    productManufacturingServiceSchema({
      locale,
      path: currentPath,
      name: category.h1,
      description: category.metaDescription,
    }),
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

        <section data-header-theme="light" className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimateIn className="mb-8 max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                {isAr ? 'صفحات مرتبطة بهذا المنتج' : 'Related pages for this product'}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-k-muted">
                {isAr
                  ? 'هذه الروابط تساعدك على فهم الخامة، العينة، طريقة التصنيع وما نحتاجه منك قبل عرض السعر.'
                  : 'Use these pages to understand fabric decisions, sampling, production flow and what we need before quoting.'}
              </p>
            </AnimateIn>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedLinks.map((item, i) => (
                <AnimateIn key={item.href} delay={i * 40} className="h-full">
                  <Link
                    href={item.href}
                    className="group relative block h-full overflow-hidden rounded-lg border border-k-border bg-sand/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white hover:shadow-lg hover:shadow-black/[0.06]"
                  >
                    <span
                      className="absolute inset-x-0 top-0 h-1 bg-accent/80"
                      aria-hidden="true"
                    />
                    <h3 className="text-sm font-bold text-primary group-hover:text-accent">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-k-muted">{item.body}</p>
                  </Link>
                </AnimateIn>
              ))}
            </div>
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
