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
    note: 'جاكيتات بافر مبطنة نُفذت كمشروع مكتمل، مع ياقة عالية وسوستة أمامية، ومعروضة بعدة ألوان.',
    alt: 'جاكيتات بافر مبطنة على حامل ملابس بألوان جملي وتوب وأسود وأخضر فاتح',
  },
  'lightweight-puffer-jackets': {
    title: 'جاكيتات بافر خفيفة',
    note: 'جاكيتات خارجية مبطنة خفيفة نُفذت كمشروع مكتمل، بخطوط أفقية وجيوب جانبية وأساور مطاطية.',
    alt: 'جاكيتات بافر خفيفة على حامل ملابس بألوان حجري وأسود وأبيض',
  },
  'white-studio-merch': {
    title: 'طقم تيشيرت قصير وجوجر أبيض',
    note: 'طقم أبيض متطابق يضم تيشيرت قصير مطبوع وبنطلون جوجر واسع.',
    alt: 'عارضة ترتدي تيشيرت أبيض قصير مطبوع مع بنطلون جوجر أبيض مطابق',
  },
  'washed-fleece-detail': {
    title: 'تفاصيل تشطيب الفليس',
    note: 'لقطة قريبة توضح تنفيذ الحزام، الدكة وملمس سطح خامة الفليس المكرشة.',
    alt: 'لقطة قريبة لقطعة من الفليس المكرش توضح تنفيذ الحزام والدكة والتشطيب',
  },
  'burgundy-set': {
    title: 'طقم فليس أوف شولدر — نبيذي',
    note: 'طقم متطابق من توب أوف شولدر وبنطلون واسع، نُفذ بخامة الفليس باللون النبيذي.',
    alt: 'عارضة ترتدي توب فليس أوف شولدر باللون النبيذي مع بنطلون واسع مطابق',
  },
  'black-knit-set': {
    title: 'طقم فليس أوف شولدر — أسود',
    note: 'نفس القَصّة المكوّنة من قطعتين نُفذت باللون الأسود، مع توب بأكمام طويلة وبنطلون واسع.',
    alt: 'عارضة ترتدي توب أسود بأكمام طويلة مع بنطلون فليس أسود واسع',
  },
  'pink-vacation-set': {
    title: 'طقم جيرسيه ريزورت — وردي',
    note: 'طقم وردي من توب هالتر وتنورة طويلة بخامة جيرسيه خفيفة مطاطية.',
    alt: 'عارضة ترتدي توب هالتر وردي مع تنورة طويلة مطابقة من جيرسيه خفيف مطاطي',
  },
  'brown-resort-set': {
    title: 'طقم جيرسيه ريزورت — بني',
    note: 'نفس قَصّة طقم الريزورت نُفذت باللون البني، مع توب منسدل وتنورة طويلة مستقيمة.',
    alt: 'عارضة ترتدي توب بني منسدل مع تنورة طويلة مستقيمة مطابقة',
  },
  'gray-lounge-sample': {
    title: 'ورقة طقم أوف شولدر رمادي',
    note: 'لقطات أمامية وخلفية وتفصيلية لطقم رمادي من توب أوف شولدر وبنطلون مطابق.',
    alt: 'ورقة تطوير توضح لقطات أمامية وخلفية وتفصيلية لطقم رمادي من توب أوف شولدر وبنطلون مطابق',
  },
}

export const workAr: WorkItem[] = workEn.map((item) => ({
  ...item,
  ...(arabicCopy[item.id] ?? {}),
}))
