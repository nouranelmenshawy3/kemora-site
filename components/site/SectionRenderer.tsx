import Link from 'next/link'
import Image from 'next/image'
import { Suspense } from 'react'
import type { Section, CommonContent, ProductCategory, Fabric, WorkItem } from '@/content/types'
import { productCategoryPath, type Locale } from '@/lib/i18n'
import AnimateIn from '../ui/AnimateIn'
import CtaButton from '../ui/CtaButton'
import WorkCard from './WorkCard'
import InquiryForm from './InquiryForm'
import ContactChannels from './ContactChannels'

interface RenderContext {
  locale: Locale
  common: CommonContent
  categories: ProductCategory[]
  fabrics: Fabric[]
  finishing: { confirmed: { title: string; body: string }[]; onRequest: string[] }
  work: WorkItem[]
  whatsappHref: string
}

const toneClasses = {
  default: 'bg-white',
  muted: 'bg-sand',
  dark: 'bg-primary texture-dark',
} as const

const headingColor = (tone?: string) => (tone === 'dark' ? 'text-white' : 'text-primary')
const bodyColor = (tone?: string) => (tone === 'dark' ? 'text-white/60' : 'text-k-muted')
const cardClass = (tone?: string) =>
  tone === 'dark'
    ? 'border-white/10 bg-white/[0.06] hover:border-white/20'
    : 'border-k-border bg-white shadow-sm shadow-black/[0.03] hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-black/[0.07]'

/** Renders **bold** spans without pulling in a markdown dependency. */
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('**') && part.endsWith('**') ? (
          <strong key={i} className="font-semibold text-primary">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  )
}

function SectionHeader({
  eyebrow,
  heading,
  lead,
  tone,
}: {
  eyebrow?: string
  heading?: string
  lead?: string
  tone?: string
}) {
  if (!eyebrow && !heading && !lead) return null
  return (
    <AnimateIn className="mb-12 max-w-3xl">
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      )}
      {heading && (
        <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${headingColor(tone)}`}>
          {heading}
        </h2>
      )}
      {lead && <p className={`mt-4 leading-relaxed ${bodyColor(tone)}`}>{lead}</p>}
    </AnimateIn>
  )
}

function Note({ children, tone }: { children: React.ReactNode; tone?: string }) {
  return (
    <AnimateIn>
      <p
        className={`mt-10 rounded-xl border p-5 text-sm leading-relaxed ${
          tone === 'dark'
            ? 'border-white/10 bg-white/5 text-white/60'
            : 'border-k-border bg-white text-k-muted'
        }`}
      >
        {children}
      </p>
    </AnimateIn>
  )
}

export default function SectionRenderer({
  section,
  ctx,
}: {
  section: Section
  ctx: RenderContext
}) {
  const tone = 'tone' in section ? section.tone : undefined
  const wrapper = `py-20 sm:py-24 ${toneClasses[tone ?? 'default']}`
  const container = 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
  const sectionTheme = tone === 'dark' ? 'dark' : 'light'

  switch (section.kind) {
    case 'prose':
      return (
        <section data-header-theme={sectionTheme} className={wrapper}>
          <div className={container}>
            <SectionHeader
              eyebrow={section.eyebrow}
              heading={section.heading}
              lead={section.lead}
              tone={tone}
            />
            {section.paragraphs && (
              <AnimateIn className="max-w-3xl space-y-4">
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i} className={`leading-relaxed ${bodyColor(tone)}`}>
                    <RichText text={paragraph} />
                  </p>
                ))}
              </AnimateIn>
            )}
          </div>
        </section>
      )

    case 'cards': {
      const cols =
        section.columns === 2
          ? 'sm:grid-cols-2'
          : section.columns === 4
            ? 'sm:grid-cols-2 lg:grid-cols-4'
            : 'sm:grid-cols-2 lg:grid-cols-3'
      return (
        <section data-header-theme={sectionTheme} className={wrapper}>
          <div className={container}>
            <SectionHeader
              eyebrow={section.eyebrow}
              heading={section.heading}
              lead={section.lead}
              tone={tone}
            />
            <div className={`grid gap-5 ${cols}`}>
              {section.items.map((item, i) => {
                const cardInner = (
                  <>
                    <span
                      className="absolute inset-x-0 top-0 h-1 bg-accent/80"
                      aria-hidden="true"
                    />
                    <h3 className={`mb-2 text-base font-bold ${headingColor(tone)}`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${bodyColor(tone)}`}>{item.body}</p>
                    {item.points && (
                      <ul className={`mt-3 space-y-1.5 text-sm ${bodyColor(tone)}`}>
                        {item.points.map((point) => (
                          <li key={point} className="flex gap-2">
                            <span className="text-accent" aria-hidden="true">
                              ·
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {item.href && (
                      <span className="mt-4 inline-flex text-sm font-semibold text-accent">
                        {ctx.common.cta.learnMore} {ctx.locale === 'ar' ? '←' : '→'}
                      </span>
                    )}
                  </>
                )

                const cardClasses = `relative h-full overflow-hidden rounded-lg border p-6 transition-all duration-300 ${cardClass(tone)}`

                return (
                  <AnimateIn key={item.title} delay={i * 60} className="h-full">
                    {item.href ? (
                      <Link href={item.href} className={`block ${cardClasses}`}>
                        {cardInner}
                      </Link>
                    ) : (
                      <div className={cardClasses}>{cardInner}</div>
                    )}
                  </AnimateIn>
                )
              })}
            </div>
            {section.note && <Note tone={tone}>{section.note}</Note>}
          </div>
        </section>
      )
    }

    case 'steps':
      return (
        <section data-header-theme={sectionTheme} className={wrapper}>
          <div className={container}>
            <SectionHeader
              eyebrow={section.eyebrow}
              heading={section.heading}
              lead={section.lead}
              tone={tone}
            />
            <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((step, i) => (
                <AnimateIn key={step.title} delay={i * 50} className="h-full">
                  <li
                    className={`relative flex h-full flex-col overflow-hidden rounded-lg border p-6 transition-all duration-300 ${cardClass(tone)}`}
                  >
                    <span
                      className="absolute inset-x-0 top-0 h-1 bg-accent/80"
                      aria-hidden="true"
                    />
                    <span
                      className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-bold text-white"
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <h3 className={`mb-2 text-base font-bold ${headingColor(tone)}`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${bodyColor(tone)}`}>{step.body}</p>
                  </li>
                </AnimateIn>
              ))}
            </ol>
            {section.note && <Note tone={tone}>{section.note}</Note>}
          </div>
        </section>
      )

    case 'checklist':
      return (
        <section data-header-theme={sectionTheme} className={wrapper}>
          <div className={container}>
            <SectionHeader
              eyebrow={section.eyebrow}
              heading={section.heading}
              lead={section.lead}
              tone={tone}
            />
            <AnimateIn>
              <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {section.items.map((item) => (
                  <li key={item} className={`flex items-start gap-3 ${bodyColor(tone)}`}>
                    <svg
                      className="mt-1 h-4 w-4 shrink-0 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimateIn>
            {section.note && <Note tone={tone}>{section.note}</Note>}
          </div>
        </section>
      )

    case 'faq':
      return (
        <section data-header-theme={sectionTheme} className={wrapper}>
          <div className={container}>
            <SectionHeader
              eyebrow={section.eyebrow}
              heading={section.heading}
              lead={section.lead}
              tone={tone}
            />
            <div className="max-w-3xl space-y-3">
              {section.items.map((item, i) => (
                <AnimateIn key={item.question} delay={i * 40}>
                  <details className="group rounded-xl border border-k-border bg-sand/50 p-5 transition-all duration-300 open:border-accent/40 open:bg-white open:shadow-md open:shadow-black/5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-start font-bold text-primary [&::-webkit-details-marker]:hidden">
                      <span>{item.question}</span>
                      <svg
                        className="h-5 w-5 shrink-0 text-accent transition-transform duration-200 group-open:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-4 text-sm leading-relaxed text-k-muted">{item.answer}</p>
                  </details>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      )

    case 'productGrid':
      return (
        <section data-header-theme={sectionTheme} className={wrapper}>
          <div className={container}>
            <SectionHeader
              eyebrow={section.eyebrow}
              heading={section.heading}
              lead={section.lead}
              tone={tone}
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {ctx.categories.map((category, i) => (
                <AnimateIn key={category.slug} delay={i * 50} className="h-full">
                  <Link
                    href={productCategoryPath(category.slug, ctx.locale)}
                    className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-k-border bg-white p-6 shadow-sm shadow-black/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-black/[0.07]"
                  >
                    <span
                      className="absolute inset-x-0 top-0 h-1 bg-accent/80"
                      aria-hidden="true"
                    />
                    <h3 className="mb-2 text-base font-bold text-primary group-hover:text-accent">
                      {category.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-k-muted">{category.summary}</p>
                    <span className="mt-4 text-sm font-semibold text-accent">
                      {ctx.common.cta.learnMore} {ctx.locale === 'ar' ? '←' : '→'}
                    </span>
                  </Link>
                </AnimateIn>
              ))}
            </div>
            {section.note && <Note tone={tone}>{section.note}</Note>}
          </div>
        </section>
      )

    case 'work': {
      if (section.grouped) {
        const groups = (['project', 'sample', 'concept'] as const)
          .map((type) => ({
            type,
            label: ctx.common.workLabels[type],
            items: ctx.work.filter((w) => w.workType === type),
          }))
          .filter((group) => group.items.length > 0)

        return (
          <section data-header-theme={sectionTheme} className={wrapper}>
            <div className={container}>
              <SectionHeader
                eyebrow={section.eyebrow}
                heading={section.heading}
                lead={section.lead}
                tone={tone}
              />
              <div className="space-y-16">
                {groups.map((group) => (
                  <div key={group.type}>
                    <h2 className="mb-6 text-xl font-bold text-primary">{group.label}</h2>
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {group.items.map((item) => (
                        <WorkCard
                          key={item.id}
                          item={item}
                          label={group.label}
                          className={item.featured ? 'sm:col-span-2 lg:col-span-2' : undefined}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {section.note && <Note tone={tone}>{section.note}</Note>}
            </div>
          </section>
        )
      }

      const items = section.limit ? ctx.work.slice(0, section.limit) : ctx.work
      return (
        <section data-header-theme={sectionTheme} className={wrapper}>
          <div className={container}>
            <SectionHeader
              eyebrow={section.eyebrow}
              heading={section.heading}
              lead={section.lead}
              tone={tone}
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item, i) => (
                <AnimateIn
                  key={item.id}
                  delay={i * 50}
                  className={`h-full ${item.featured ? 'sm:col-span-2 lg:col-span-2' : ''}`}
                >
                  <WorkCard item={item} label={ctx.common.workLabels[item.workType]} />
                </AnimateIn>
              ))}
            </div>
            {section.note && <Note tone={tone}>{section.note}</Note>}
          </div>
        </section>
      )
    }

    case 'fabrics':
      return (
        <section data-header-theme={sectionTheme} className={wrapper}>
          <div className={container}>
            <SectionHeader
              eyebrow={section.eyebrow}
              heading={section.heading}
              lead={section.lead}
              tone={tone}
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {ctx.fabrics.map((fabric, i) => (
                <AnimateIn key={fabric.name} delay={i * 40} className="h-full">
                  <div className="h-full rounded-2xl border border-k-border bg-white p-6">
                    <h3 className="text-base font-bold text-primary">{fabric.name}</h3>
                    {fabric.gsm && (
                      <p className="mt-1 text-xs font-medium text-accent">{fabric.gsm}</p>
                    )}
                    <dl className="mt-4 space-y-2 text-sm text-k-muted">
                      <div>
                        <dt className="inline font-semibold text-primary">
                          {ctx.locale === 'ar' ? 'الاستخدام: ' : 'Used for: '}
                        </dt>
                        <dd className="inline">{fabric.use}</dd>
                      </div>
                      <div>
                        <dt className="inline font-semibold text-primary">
                          {ctx.locale === 'ar' ? 'الملمس: ' : 'Feel: '}
                        </dt>
                        <dd className="inline">{fabric.feel}</dd>
                      </div>
                      <div>
                        <dt className="inline font-semibold text-primary">
                          {ctx.locale === 'ar' ? 'الميزة: ' : 'Advantage: '}
                        </dt>
                        <dd className="inline">{fabric.advantage}</dd>
                      </div>
                    </dl>
                  </div>
                </AnimateIn>
              ))}
            </div>

            <div className="mt-16 grid gap-10 lg:grid-cols-2">
              <div>
                <h3 className="mb-5 text-xl font-bold text-primary">
                  {ctx.locale === 'ar' ? 'خدمات التشطيب والبراندنج' : 'Finishing and branding'}
                </h3>
                <div className="space-y-4">
                  {ctx.finishing.confirmed.map((service) => (
                    <div key={service.title} className="rounded-xl border border-k-border bg-white p-5">
                      <h4 className="font-semibold text-primary">{service.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-k-muted">{service.body}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="mb-5 text-xl font-bold text-primary">
                  {ctx.locale === 'ar' ? 'متاح عند الطلب' : 'Available on request'}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-k-muted">
                  {ctx.locale === 'ar'
                    ? 'تُؤكَّد هذه الخدمات لكل مشروع على حدة قبل إدراجها في عرض السعر، وقد تُنفَّذ لدى منشآت متخصصة.'
                    : 'These are confirmed per project before being included in a quotation, and may be carried out by specialist facilities.'}
                </p>
                <ul className="space-y-2">
                  {ctx.finishing.onRequest.map((service) => (
                    <li
                      key={service}
                      className="flex items-start gap-3 rounded-lg border border-dashed border-k-border bg-white/60 px-4 py-3 text-sm text-k-muted"
                    >
                      <span className="mt-0.5 text-accent" aria-hidden="true">
                        ·
                      </span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {section.note && <Note tone={tone}>{section.note}</Note>}
          </div>
        </section>
      )

    case 'imageFeature': {
      const image = (
        <AnimateIn className={section.reverse ? 'lg:order-2' : undefined}>
          <div className="relative overflow-hidden rounded-lg border border-k-border bg-white shadow-xl shadow-black/[0.08]">
            <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5]">
              <Image
                src={section.image.src}
                alt={section.image.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
                style={
                  section.image.objectPosition
                    ? { objectPosition: section.image.objectPosition }
                    : undefined
                }
              />
            </div>
          </div>
        </AnimateIn>
      )

      const copy = (
        <AnimateIn delay={100} className={section.reverse ? 'lg:order-1' : undefined}>
          {section.eyebrow && (
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              {section.eyebrow}
            </p>
          )}
          <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${headingColor(tone)}`}>
            {section.heading}
          </h2>
          <p className={`mt-4 leading-relaxed ${bodyColor(tone)}`}>{section.lead}</p>
          <ul className="mt-8 grid gap-3">
            {section.items.map((item) => (
              <li
                key={item}
                className={`flex items-start gap-3 rounded-lg border px-4 py-3 text-sm leading-relaxed ${
                  tone === 'dark'
                    ? 'border-white/10 bg-white/[0.04] text-white/65'
                    : 'border-k-border bg-white text-k-muted'
                }`}
              >
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {section.ctas && section.ctas.length > 0 && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {section.ctas.map((cta) => (
                <CtaButton key={cta.label} cta={cta} onDark={tone === 'dark'} />
              ))}
            </div>
          )}
        </AnimateIn>
      )

      return (
        <section data-header-theme={sectionTheme} className={wrapper}>
          <div className={container}>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              {image}
              {copy}
            </div>
          </div>
        </section>
      )
    }

    case 'partnerSpotlight':
      return (
        <section
          data-header-theme="dark"
          className="relative overflow-hidden bg-primary py-20 texture-dark sm:py-24"
        >
          <div
            className="pointer-events-none absolute -end-24 -top-24 h-80 w-80 rounded-full border border-accent/20"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -end-10 top-12 h-48 w-48 rounded-full border border-white/10"
            aria-hidden="true"
          />
          <div className={container}>
            <AnimateIn>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] shadow-2xl shadow-black/20 backdrop-blur-sm">
                <div className="border-b border-white/10 px-6 py-5 sm:px-8 lg:px-10">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/35 bg-accent/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-accent-light">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                      {section.eyebrow}
                    </p>
                    <div
                      className="ltr-inline flex items-center gap-3 text-white"
                      aria-label="Kemora and WhyTech"
                    >
                      <span className="text-sm font-bold tracking-[0.22em] sm:text-base">KEMORA</span>
                      <span className="text-xl font-light text-accent" aria-hidden="true">
                        ×
                      </span>
                      <span className="text-lg font-bold tracking-tight sm:text-xl">WhyTech</span>
                    </div>
                  </div>
                </div>

                <div className="grid gap-10 px-6 py-10 sm:px-8 sm:py-12 lg:grid-cols-12 lg:gap-14 lg:px-10 lg:py-14">
                  <div className="lg:col-span-7">
                    <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.12]">
                      {section.heading}
                    </h2>
                    <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
                      {section.lead}
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                      {section.ctas.map((cta) => (
                        <CtaButton key={cta.label} cta={cta} onDark />
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                      {section.capabilities.map((capability, i) => (
                        <li
                          key={capability}
                          className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.055] px-4 py-3.5 text-sm font-medium text-white/80"
                        >
                          <span
                            className="ltr-inline flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-[10px] font-bold text-accent-light"
                            aria-hidden="true"
                          >
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span>{capability}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 rounded-xl border border-accent/30 bg-accent/10 p-5">
                      <p className="font-bold text-white">{section.offerTitle}</p>
                      <p className="mt-2 text-sm leading-relaxed text-white/60">
                        {section.offerBody}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>
      )

    case 'cta': {
      const isDark = tone === 'dark'

      return (
        <section data-header-theme={sectionTheme} className={`relative overflow-hidden ${wrapper}`}>
          {isDark && (
            <>
              <div
                className="pointer-events-none absolute -end-28 -top-28 h-80 w-80 rounded-full border border-accent/20"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -end-6 top-10 h-52 w-52 rounded-full border border-white/10"
                aria-hidden="true"
              />
            </>
          )}

          <div className={container}>
            <AnimateIn>
              <div
                className={`relative overflow-hidden rounded-3xl border px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14 ${
                  isDark
                    ? 'border-white/10 bg-white/[0.045] shadow-2xl shadow-black/20'
                    : 'border-k-border bg-sand/60 shadow-xl shadow-black/[0.05]'
                }`}
              >
                <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
                  <div className="max-w-3xl">
                    <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                      <span className="h-px w-8 bg-accent" aria-hidden="true" />
                      {ctx.locale === 'ar' ? 'الخطوة التالية' : 'Next step'}
                    </p>
                    <h2
                      className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
                        isDark ? 'text-white' : 'text-primary'
                      }`}
                    >
                      {section.heading}
                    </h2>
                    {section.body && (
                      <p
                        className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${
                          isDark ? 'text-white/60' : 'text-k-muted'
                        }`}
                      >
                        {section.body}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:max-w-sm lg:justify-end">
                    {section.ctas.map((cta) => (
                      <CtaButton key={cta.label} cta={cta} onDark={isDark} />
                    ))}
                  </div>
                </div>

                <div
                  className={`mt-10 h-px w-full ${isDark ? 'bg-white/10' : 'bg-k-border'}`}
                  aria-hidden="true"
                />
                <div
                  className={`mt-5 flex items-center justify-between gap-6 text-xs font-medium uppercase tracking-[0.16em] ${
                    isDark ? 'text-white/30' : 'text-k-muted/70'
                  }`}
                >
                  <span className="ltr-inline">KEMORA</span>
                  <span>{ctx.locale === 'ar' ? 'من الفكرة إلى الإنتاج' : 'From idea to production'}</span>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>
      )
    }

    case 'contactForm':
      return (
        <section id="inquiry-form" data-header-theme="light" className="scroll-mt-24 py-20 sm:py-24 bg-white">
          <div className={container}>
            <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
              <div className="lg:col-span-3">
                <h2 className="text-2xl font-bold text-primary">{ctx.common.form.heading}</h2>
                <p className="mt-3 mb-8 leading-relaxed text-k-muted">{ctx.common.form.lead}</p>
                <Suspense
                  fallback={
                    <div className="rounded-2xl border border-k-border bg-sand/40 p-8 text-sm text-k-muted">
                      {ctx.locale === 'ar' ? 'جارٍ تحميل نموذج التواصل…' : 'Loading enquiry form…'}
                    </div>
                  }
                >
                  <InquiryForm
                    locale={ctx.locale}
                    common={ctx.common}
                    categories={ctx.categories}
                  />
                </Suspense>
              </div>
              <div className="lg:col-span-2">
                <ContactChannels
                  locale={ctx.locale}
                  common={ctx.common}
                  whatsappHref={ctx.whatsappHref}
                />
              </div>
            </div>
          </div>
        </section>
      )

    default:
      return null
  }
}
