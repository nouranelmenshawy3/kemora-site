import type { CommonContent } from '@/content/types'
import type { Locale } from '@/lib/i18n'
import { siteConfig, contactConfig, analyticsEvents } from '@/lib/site'
import TrackedLink from '../ui/TrackedLink'

export default function ContactChannels({
  locale,
  common,
  whatsappHref,
}: {
  locale: Locale
  common: CommonContent
  whatsappHref: string
}) {
  const isAr = locale === 'ar'

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-primary">
        {isAr ? 'أو تواصل معنا مباشرة' : 'Or contact us directly'}
      </h2>
      <p className="text-sm leading-relaxed text-k-muted">
        {isAr
          ? 'واتساب عادةً أسرع طريقة، خصوصًا لإرسال الصور المرجعية.'
          : 'WhatsApp is usually fastest, especially for sending reference images.'}
      </p>

      <TrackedLink
        href={whatsappHref}
        external
        event={analyticsEvents.whatsappClick}
        className="flex items-start gap-4 rounded-xl border border-k-border p-4 transition-all duration-200 hover:border-accent/40 hover:shadow-md"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#128C7E] text-white">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </span>
        <span>
          <span className="mb-0.5 block text-xs font-medium uppercase tracking-wide text-k-muted">
            {common.footer.whatsappLabel}
          </span>
          <span className="block text-sm font-semibold text-primary ltr-inline">
            {contactConfig.whatsappPrimaryDisplay}
          </span>
        </span>
      </TrackedLink>

      <a
        href={`mailto:${siteConfig.email}`}
        className="flex items-start gap-4 rounded-xl border border-k-border p-4 transition-all duration-200 hover:border-accent/40 hover:shadow-md"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sand text-accent">
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </span>
        <span>
          <span className="mb-0.5 block text-xs font-medium uppercase tracking-wide text-k-muted">
            {common.footer.emailLabel}
          </span>
          <span className="block text-sm font-semibold text-primary ltr-inline">
            {siteConfig.email}
          </span>
          <span className="mt-0.5 block text-xs text-k-muted">{common.form.successDetail}</span>
        </span>
      </a>

      <div className="rounded-xl border border-k-border bg-sand p-4">
        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-primary">
          {isAr ? 'لغات التواصل' : 'Languages'}
        </p>
        <p className="text-sm leading-relaxed text-k-muted">
          {isAr ? 'العربية · الإنجليزية · البولندية' : 'Arabic · English · Polish'}
        </p>
      </div>
    </div>
  )
}
