import type { Locale } from '@/lib/i18n'

export default function AvailabilityNotice({ locale }: { locale: Locale }) {
  return (
    <aside aria-label={locale === 'ar' ? 'حالة استقبال المشاريع' : 'Project availability'} className="border-b border-amber-300/60 bg-amber-50 px-5 py-4 text-center text-sm leading-relaxed text-amber-950">
      <p className="mx-auto max-w-5xl">
        <strong className="font-semibold">{locale === 'ar' ? 'لا نستقبل مشاريع جديدة حاليًا.' : 'We are not accepting new projects at the moment.'}</strong>{' '}
        {locale === 'ar'
          ? 'الطاقة الإنتاجية للمصانع مكتملة حاليًا. يُرجى التواصل معنا في وقت لاحق للاستفسار عن التوفر.'
          : 'Our partner factories are currently at full production capacity. Please contact us again at a later date to check availability.'}
      </p>
    </aside>
  )
}
