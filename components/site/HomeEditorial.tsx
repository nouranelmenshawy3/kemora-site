import Image from 'next/image'
import Link from 'next/link'
import type { CommonContent, PageContent, ProductCategory, WorkItem } from '@/content/types'
import { path, productCategoryPath, type Locale } from '@/lib/i18n'
import CtaButton from '../ui/CtaButton'
import Hero from './Hero'

export default function HomeEditorial({ locale, page, common, work, categories }: {
  locale: Locale
  page: PageContent
  common: CommonContent
  work: WorkItem[]
  categories: ProductCategory[]
}) {
  const ar = locale === 'ar'
  const partner = page.sections.find(section => section.kind === 'partnerSpotlight')
  const featured = ['central-studio', 'white-lounge-set', 'puffer-jackets-colourways']
    .flatMap(id => work.filter(item => item.id === id && item.published))
  const steps = ar ? [
    { title: 'نطوّر الفكرة', body: 'صورة أو رسمة تكفي للبدء. نراجع التصميم والخامة والقَصّة ونرتّب تفاصيل المنتج.', key: 'privateLabel' as const },
    { title: 'نعتمد العينة', body: 'نحوّل التفاصيل إلى عينة تراجعها وتوافق عليها قبل بدء الإنتاج بالكميات.', key: 'sampling' as const },
    { title: 'نصنّع ونجهّز', body: 'إنتاج تحت اسم براندك، مع متابعة الجودة والليبلات والتغليف وتنسيق الشحن.', key: 'howItWorks' as const },
  ] : [
    { title: 'Develop the idea', body: 'Start with a photo or sketch. We work through the fabric, fit and construction with you.', key: 'privateLabel' as const },
    { title: 'Perfect the sample', body: 'See and approve a physical sample before your collection moves into bulk production.', key: 'sampling' as const },
    { title: 'Make it yours', body: 'Production under your label, with quality follow-up, branded packaging and shipping coordination.', key: 'howItWorks' as const },
  ]
  const arrow = ar ? '←' : '→'
  return (
    <>
      <Hero hero={page.hero} variant="home" />

      <section className="editorial-container py-16 sm:py-24" aria-labelledby="home-work">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-6">
          <div><p className="editorial-eyebrow">{ar ? 'من أعمالنا' : 'The work speaks'}</p><h2 id="home-work" className="editorial-heading mt-3">{ar ? 'من الفكرة، إلى قطعة تُلبس.' : 'From a brief. Into the world.'}</h2></div>
          <Link href={path('selectedWork', locale)} className="editorial-link">{ar ? 'كل الأعمال' : 'View selected work'} {arrow}</Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {featured.map((item, index) => <Link href={path('selectedWork', locale)} key={item.id} className="group block">
            <div className="relative aspect-[4/3] overflow-hidden bg-sand md:aspect-[4/4.5]">
              <Image src={item.src} alt={item.alt} fill sizes="(min-width: 768px) 32vw, 92vw" className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.025]" style={{ objectPosition: item.objectPosition }} />
              <span className="absolute start-3 top-3 bg-offwhite/95 px-2.5 py-1.5 text-[10px] font-semibold text-primary">{common.workLabels[item.workType]}</span>
            </div>
            <div className="mt-4 flex items-start gap-3"><span className="pt-0.5 text-xs text-accent">0{index + 1}</span><div><h3 className="text-base font-semibold text-primary group-hover:text-accent">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-k-muted">{item.note}</p></div></div>
          </Link>)}
        </div>
        <p className="mt-8 text-xs leading-relaxed text-k-muted">{common.confidentialityNote}</p>
      </section>

      <section className="bg-primary py-16 text-white sm:py-24" aria-labelledby="home-process">
        <div className="editorial-container">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-20"><div><p className="editorial-eyebrow !text-[#dba57d]">{ar ? 'كيف نعمل معك' : 'A clear way forward'}</p><h2 id="home-process" className="editorial-heading mt-3 !text-white">{ar ? 'براندك. شريك واحد.\nمن البداية للنهاية.' : 'Your label. One partner.\nEvery step connected.'}</h2></div><p className="max-w-lg self-end leading-relaxed text-white/65">{ar ? 'نربط تطوير المنتج بالخامات والعينات والمصنع المناسب، وتتعامل مع فريق واحد ينسّق الرحلة معك.' : 'We connect product development, sourcing, sampling and the right production partners. You work with one team that keeps the whole process moving.'}</p></div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">{steps.map((step, index) => <Link key={step.key} href={path(step.key, locale)} className="group border-t border-white/25 pt-6"><span className="text-sm text-[#dba57d]">0{index + 1}</span><h3 className="mt-6 text-2xl font-medium">{step.title} <span className="inline-block text-accent-light transition-transform group-hover:translate-x-1" aria-hidden="true">{arrow}</span></h3><p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">{step.body}</p></Link>)}</div>
        </div>
      </section>

      <section className="editorial-container grid gap-10 py-16 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20" aria-labelledby="home-categories">
        <div><p className="editorial-eyebrow">{ar ? 'ما نصنّعه' : 'Made for your collection'}</p><h2 id="home-categories" className="editorial-heading mt-3">{ar ? 'قطع يومية.\nوتفاصيل تصنع الفرق.' : 'Everyday essentials.\nDistinctly your own.'}</h2><p className="mt-5 max-w-sm leading-relaxed text-k-muted">{ar ? 'من التيشيرتات والستريت وير إلى الملابس النسائية واليونيفورم، نطوّر كل قطعة وفقًا لتفاصيل مشروعك.' : 'From everyday tees and streetwear to womenswear and uniforms. Each piece is developed around your brief.'}</p><p className="mt-5 max-w-sm text-xs leading-relaxed text-k-muted">{common.capabilityDisclaimer}</p></div>
        <div className="grid content-start sm:grid-cols-2 sm:gap-x-8">{categories.map(category => <Link key={category.slug} href={productCategoryPath(category.slug, locale)} className="group flex items-center justify-between gap-3 border-b border-k-border py-4 text-sm font-medium text-primary hover:text-accent"><span>{category.name}</span><span className="text-accent" aria-hidden="true">↗</span></Link>)}</div>
      </section>

      {partner?.kind === 'partnerSpotlight' && <section id="whytech" className="scroll-mt-24 border-y border-k-border bg-[#f5f6f7] px-5 py-16 sm:py-20" aria-labelledby="home-partner">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-xl border border-k-border bg-white lg:grid-cols-[1.2fr_1fr]">
          <div className="p-7 sm:p-12 lg:p-14">
            <p className="editorial-eyebrow">{ar ? 'خطوتك التالية كبراند' : 'Beyond the collection'}</p>
            <div className="mt-6 flex items-center gap-4 text-xl font-semibold text-primary" dir="ltr"><span className="tracking-widest">KEMORA</span><span className="font-serif text-3xl font-normal text-accent">×</span><span>WhyTech</span></div>
            <h2 id="home-partner" className="editorial-heading mt-8">{ar ? 'التصنيع مع Kemora.\nوالتقنية مع WhyTech.' : 'Manufacturing by Kemora.\nTechnology by WhyTech.'}</h2>
            <p className="mt-5 text-sm leading-relaxed text-k-muted">{partner.lead}</p>
            <div className="mt-7 border-s-2 border-accent ps-4"><p className="text-sm font-semibold text-primary">{partner.offerTitle}</p><p className="mt-2 text-sm leading-relaxed text-k-muted">{partner.offerBody}</p></div>
            <div className="mt-8 flex flex-wrap gap-3">{partner.ctas.slice(0, 1).map(cta => <CtaButton key={cta.href} cta={cta} />)}</div>
            <p className="mt-3 text-xs text-k-muted">{ar ? 'يفتح موقع WhyTech في نافذة جديدة' : 'Visit WhyTech · opens in a new tab'}</p>
          </div>
          <div className="relative flex flex-col justify-center bg-primary p-7 text-white sm:p-12 lg:p-14">
            <p className="text-xs font-bold uppercase tracking-widest text-accent-light">{ar ? 'شريك تقني مستقل' : 'Our independent technology partner'}</p>
            <p className="mt-4 text-3xl font-semibold">WhyTech<span className="text-accent">.</span></p>
            <p className="mt-4 text-sm leading-relaxed text-white/65">{ar ? 'هل يحتاج براندك إلى موقع أو متجر إلكتروني أو نظام لإدارة العمل؟ ناقش احتياجاتك مباشرة مع فريق WhyTech، واذكر إحالة Kemora.' : 'Need a website, online store or a system to run your brand? Discuss your requirements directly with the WhyTech team and mention your Kemora referral.'}</p>
            <ul className="mt-8">{partner.capabilities.map((item, index) => <li key={item} className="flex items-start gap-4 border-t border-white/15 py-4 text-sm leading-relaxed"><span className="text-xs text-accent-light" aria-hidden="true">0{index + 1}</span>{item}</li>)}</ul>
          </div>
        </div>
      </section>}
    </>
  )
}
