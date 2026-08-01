import type { CommonContent } from '../types'
import { publishedCopy } from '@/lib/claims'

export const commonAr: CommonContent = {
  locale: 'ar',
  nav: [
    { key: 'home', label: 'الرئيسية' },
    { key: 'privateLabel', label: 'التصنيع بنظام Private Label' },
    { key: 'products', label: 'المنتجات' },
    { key: 'sampling', label: 'تطوير العينات' },
    { key: 'fabrics', label: 'الخامات والتشطيبات' },
    { key: 'howItWorks', label: 'خطوات العمل' },
    { key: 'selectedWork', label: 'نماذج من الأعمال' },
    { key: 'about', label: 'من نحن' },
    { key: 'faq', label: 'الأسئلة الشائعة' },
    { key: 'contact', label: 'تواصل معنا' },
  ],
  brandTagline:
    'تصنيع ملابس بنظام Private Label وتطوير منتجات من مصر، للبراندات في الشرق الأوسط وأوروبا.',
  skipToContent: 'الانتقال إلى المحتوى الرئيسي',
  languageSwitch: {
    label: 'اللغة',
    toEnglish: 'English',
    toArabic: 'العربية',
  },
  cta: {
    startProject: 'ابدأ مشروعك',
    requestSample: 'اطلب عينة',
    sendDesign: 'أرسل تصميمك أو الصور المرجعية',
    bookMeeting: 'احجز مكالمة',
    whatsapp: 'تواصل معنا عبر واتساب',
    contact: 'تواصل معنا',
    viewAll: 'عرض الكل',
    learnMore: 'اعرف المزيد',
  },
  workLabels: {
    project: 'نماذج مختارة من الأعمال',
    sample: 'تطوير العينات',
    concept: 'صورة تصورية — للاتجاه البصري فقط',
  },
  confidentialityNote: publishedCopy.confidentiality.ar,
  capabilityDisclaimer: publishedCopy.capabilityDisclaimer.ar,
  footer: {
    about:
      'Kemora شركة مقرها مصر متخصصة في تصنيع الملابس بنظام Private Label وتطوير المنتجات. ننفّذ الإنتاج وفق تصميمات كل براند، ولا نبيع مجموعة جاهزة.',
    navHeading: 'روابط الموقع',
    contactHeading: 'التواصل',
    emailLabel: 'البريد الإلكتروني',
    whatsappLabel: 'واتساب',
    rights: 'جميع الحقوق محفوظة.',
    privacy: 'سياسة الخصوصية',
    locations: 'مصر · بولندا',
    status: 'نستقبل مشروعات جديدة حاليًا',
  },
  form: {
    heading: 'أخبرنا عن مشروعك',
    lead:
      'أرسل ما لديك: رسم أولي، صورة مرجعية، عينة جاهزة أو ملف تقني كامل. لا يشترط وجود ملف تقني (Tech Pack) للبدء.',
    name: 'الاسم',
    namePlaceholder: 'الاسم بالكامل',
    brand: 'اسم البراند',
    brandOptional: 'اختياري',
    email: 'البريد الإلكتروني',
    whatsapp: 'رقم الواتساب',
    whatsappHint: 'اختياري — البريد الإلكتروني يكفي إذا كنت تفضل ذلك. أضف كود الدولة إذا كتبت رقم واتساب.',
    country: 'الدولة',
    countryPlaceholder: 'مثال: السعودية، مصر، الإمارات',
    preferredLanguage: 'لغة التواصل المفضلة',
    languageOptions: [
      { value: 'arabic', label: 'العربية' },
      { value: 'english', label: 'الإنجليزية' },
    ],
    productCategory: 'فئة المنتج',
    productCategoryPlaceholder: 'اختر الفئة',
    quantity: 'الكمية التقديرية',
    quantityPlaceholder: 'مثال: 100 قطعة لكل موديل',
    hasDesigns: 'هل لديك تصميمات أو صور مرجعية؟',
    hasDesignsOptions: [
      { value: 'tech-pack', label: 'نعم — ملف تقني كامل' },
      { value: 'sketches', label: 'نعم — رسومات أو صور مرجعية' },
      { value: 'sample', label: 'نعم — عينة جاهزة لدي' },
      { value: 'none', label: 'ليس بعد — أحتاج مساعدة في تطوير المنتج' },
    ],
    message: 'الرسالة',
    messagePlaceholder:
      'اكتب لنا عن المنتج، الخامة، القَصّة أو الكمية التي تفكر فيها. لا مشكلة إذا كانت بعض التفاصيل غير محددة بعد.',
    consent:
      'أوافق على معالجة Kemora لبياناتي بغرض الرد على هذا الطلب فقط، وفقًا لما هو موضح في',
    consentLink: 'سياسة الخصوصية',
    submit: 'إرسال الطلب',
    sending: 'جارٍ الإرسال…',
    success: 'شكرًا لك — تم إرسال طلبك بنجاح.',
    successDetail: 'نرد عادةً خلال يوم عمل واحد.',
    error:
      'حدث خطأ ولم يتم إرسال الطلب. يرجى المحاولة مرة أخرى، أو مراسلتنا مباشرة على info@kemoratex.com.',
    attachmentTooLargeError:
      'الملفات المرفقة كبيرة جدًا لهذا النموذج. يرجى إرفاق حتى 5 ملفات بحجم إجمالي 3 ميجابايت، أو إرسال ملفات PDF الأكبر عبر البريد الإلكتروني أو واتساب بعد إرسال الطلب.',
    required: 'مطلوب',
    optional: 'اختياري',
    noTechPackNote:
      'لا يوجد لديك ملف تقني؟ هذا أمر طبيعي تمامًا في أول مجموعة — تكفي صورة أو رسم أولي للبدء.',
  },
  breadcrumbHome: 'الرئيسية',
}
