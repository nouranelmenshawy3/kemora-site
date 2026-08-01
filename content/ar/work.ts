import type { WorkItem } from '../types'
import { workEn } from '../en/work'

/**
 * Arabic titles/notes/alt text for the portfolio.
 *
 * Provenance fields (`workType`, `published`, `permissionNote`, `src`) are
 * inherited from content/en/work.ts on purpose: an image's classification and
 * publishing rights are facts about the image, not translatable copy. This
 * makes it impossible for the two languages to disagree about what an image is.
 */
const arabicCopy: Record<string, Pick<WorkItem, 'title' | 'note' | 'alt'>> = {
  'central-studio': {
    title: 'Central Studio — ملابس الفريق',
    note: 'تيشيرتات قطنية مطبوعة نُفذت لصالح Central Studio، وارتداها الفريق في أهرامات الجيزة.',
    alt: 'فريق رقص يرتدي تيشيرتات سوداء مطبوعة من إنتاج Kemora لصالح Central Studio أمام أهرامات الجيزة',
  },
  'white-lounge-set': {
    title: 'Meejhu — مجموعة Checked Out',
    note: 'طقم قميص وبنطلون مقلم نُفذ كمشروع مكتمل لصالح مجموعة Checked Out.',
    alt: 'عارضة ترتدي قميصًا واسعًا مقلمًا باللون البيج مع بنطلون مطابق من مجموعة Checked Out',
  },
  'checked-colorways': {
    title: 'ألوان مجموعة Checked Out',
    note: 'ألوان بيج ووردي لطقم قميص وبنطلون مقلم نُفذت كمشروع مكتمل.',
    alt: 'لونان بيج ووردي لطقم قميص وبنطلون مقلم من مجموعة Checked Out',
  },
  'puffer-jackets-colourways': {
    title: 'جاكيتات بافر بألوان متعددة',
    note: 'مرجع عينة لجاكيت بافر مبطن، مع ياقة عالية وسوستة أمامية، معروض بعدة ألوان.',
    alt: 'جاكيتات بافر مبطنة على حامل ملابس بألوان جملي وتوب وأسود وأخضر فاتح',
  },
  'lightweight-puffer-jackets': {
    title: 'جاكيتات بافر خفيفة',
    note: 'مرجع عينة لجاكيت خارجي مبطن بخطوط أفقية، جيوب جانبية وأساور مطاطية.',
    alt: 'جاكيتات بافر خفيفة على حامل ملابس بألوان حجري وأسود وأبيض',
  },
  'white-studio-merch': {
    title: 'عينة تيشيرت أبيض',
    note: 'عينة للقَصّة والخامة ضمن مشروع تيشيرتات قطنية مطبوعة.',
    alt: 'عارضة ترتدي عينة تيشيرت قطني أبيض سادة مخصص للتصنيع بنظام Private Label',
  },
  'washed-fleece-detail': {
    title: 'تفاصيل تشطيب الفليس',
    note: 'لقطة قريبة توضح تنفيذ الحزام، الدكة وملمس سطح خامة الفليس المكرشة.',
    alt: 'لقطة قريبة لقطعة من الفليس المكرش توضح تنفيذ الحزام والدكة والتشطيب',
  },
  'burgundy-set': {
    title: 'طقم فليس بلون النبيذي',
    note: 'عينة بلوزة وبنطلون واسع من خامة الفليس المكرش.',
    alt: 'عارضة ترتدي طقمًا من الفليس المكرش بلون نبيذي مكوّن من بلوزة وبنطلون واسع',
  },
  'black-knit-set': {
    title: 'قطع تريكو سوداء',
    note: 'عينة من قطعتين: بلوزة بأكمام طويلة وقَصّة ضيقة مع بنطلون فليس واسع.',
    alt: 'عارضة ترتدي بلوزة سوداء بأكمام طويلة مع بنطلون فليس أسود واسع',
  },
  'pink-vacation-set': {
    title: 'طقم جيرسيه وردي',
    note: 'عينة توب وتنورة طويلة من خامة الجيرسيه الخفيفة المطاطية.',
    alt: 'عارضة ترتدي توب وتنورة طويلة من الجيرسيه الوردي الخفيف',
  },
  'brown-resort-set': {
    title: 'طقم جيرسيه بني',
    note: 'عينة توب بتفاصيل منسدلة مع تنورة طويلة توضح انسدال الخامة والتشطيب.',
    alt: 'عارضة ترتدي توبًا منسدلًا من الجيرسيه البني مع تنورة طويلة مطابقة',
  },
  'gray-lounge-sample': {
    title: 'ورقة عينة لملابس منزلية رمادية',
    note: 'لقطات أمامية وخلفية وتفصيلية لطقم فليس رمادي، معروضة كورقة تطوير عينة.',
    alt: 'ورقة تطوير عينة توضح لقطات أمامية وخلفية وتفصيلية لطقم ملابس منزلية من الفليس الرمادي',
  },
}

export const workAr: WorkItem[] = workEn.map((item) => ({
  ...item,
  ...(arabicCopy[item.id] ?? {}),
}))
