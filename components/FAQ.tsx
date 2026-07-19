import AnimateIn from './AnimateIn'
import { faqItems } from '@/lib/seo'

export default function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn className="text-center mb-12">
          <p className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Questions European Brands Ask Before Producing in Egypt
          </h2>
          <p className="mt-4 text-k-muted max-w-2xl mx-auto leading-relaxed">
            Straight answers for brands comparing Egyptian garment manufacturers,
            private label suppliers, and export partners for EU-ready clothing production.
          </p>
        </AnimateIn>

        <div className="space-y-3">
          {faqItems.map(({ question, answer }, index) => (
            <AnimateIn key={question} delay={index * 60}>
              <details className="group rounded-xl border border-k-border bg-sand/60 p-5 transition-all duration-300 open:border-accent/40 open:bg-white open:shadow-md open:shadow-black/5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-bold text-primary [&::-webkit-details-marker]:hidden">
                  <span>{question}</span>
                  <svg
                    className="h-5 w-5 shrink-0 text-accent transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-k-muted">{answer}</p>
              </details>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
