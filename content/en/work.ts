import type { WorkItem } from '../types'

/**
 * PORTFOLIO — provenance matters more than presentation here.
 *
 * `workType` must reflect what the image actually is:
 *   project — a garment Kemora produced for a client
 *   sample  — a physical sample developed by Kemora
 *   concept — a visual for direction only, NOT produced work
 *
 * `published: false` keeps an item in the file (nothing is silently deleted)
 * while excluding it from the site until `permissionNote` is resolved.
 *
 * TODO [BUSINESS INPUT REQUIRED]: confirm each classification below with the
 * production team. Items are currently classified conservatively as "sample"
 * where Kemora's role in the finished garment has not been confirmed in writing.
 */
export const workEn: WorkItem[] = [
  {
    id: 'central-studio',
    title: 'Central Studio — team merchandise',
    note: 'Custom printed T-shirts produced for Central Studio and worn by the team at the Giza pyramids.',
    src: '/sample-work/central-studio-pyramids-team.jpg',
    alt: 'Dance team wearing black custom-printed Central Studio T-shirts produced by Kemora, photographed at the Giza pyramids',
    workType: 'project',
    published: true,
    permissionNote:
      'Brand named with permission. Keep a written permission record on file for this collaboration.',
    featured: true,
    objectPosition: '50% 48%',
  },
  {
    id: 'white-studio-merch',
    title: 'White T-shirt sample',
    note: 'Fit and fabric sample for a printed cotton T-shirt programme.',
    src: '/sample-work/white-studio-merch.jpg',
    alt: 'Model wearing a plain white cotton T-shirt sample developed for private-label production',
    workType: 'sample',
    published: true,
    objectPosition: '50% 42%',
  },
  {
    id: 'washed-fleece-detail',
    title: 'Fleece finishing detail',
    note: 'Close-up of waistband construction, drawcord and fabric surface on a brushed fleece sample.',
    src: '/sample-work/washed-fleece-detail.jpg',
    alt: 'Close-up of a brushed fleece garment showing waistband construction and drawcord finishing',
    workType: 'sample',
    published: true,
    objectPosition: '50% 48%',
  },
  {
    id: 'burgundy-set',
    title: 'Burgundy fleece co-ord',
    note: 'Sweat top and wide-leg trouser sample developed in brushed fleece.',
    src: '/sample-work/burgundy-studio-set.webp',
    alt: 'Model wearing a burgundy brushed fleece co-ord set with a sweat top and wide-leg trousers',
    workType: 'sample',
    published: true,
  },
  {
    id: 'black-knit-set',
    title: 'Black knit separates',
    note: 'Fitted long-sleeve top and relaxed fleece trouser developed as a two-piece sample.',
    src: '/sample-work/black-studio-set.webp',
    alt: 'Model wearing a black fitted long-sleeve top with relaxed black fleece trousers',
    workType: 'sample',
    published: true,
  },
  {
    id: 'pink-vacation-set',
    title: 'Pink jersey co-ord',
    note: 'Halter top and long skirt sample in a lightweight stretch jersey.',
    src: '/sample-work/pink-vacation-set.jpg',
    alt: 'Model wearing a pink lightweight jersey halter top and matching long skirt',
    workType: 'sample',
    published: true,
    objectPosition: '50% 40%',
  },
  {
    id: 'brown-resort-set',
    title: 'Brown jersey co-ord',
    note: 'Draped top and column skirt sample showing fabric fall and finishing.',
    src: '/sample-work/brown-resort-set.webp',
    alt: 'Model wearing a brown draped jersey top and matching long column skirt',
    workType: 'sample',
    published: true,
  },
  {
    id: 'gray-lounge-sample',
    title: 'Grey loungewear sample sheet',
    note: 'Front, back and detail views of a marl fleece set, presented as a development sheet.',
    src: '/sample-work/gray-lounge-sample.webp',
    alt: 'Development sheet showing front, back and close-up detail views of a grey marl fleece loungewear set',
    workType: 'sample',
    published: true,
    permissionNote:
      'TODO: garment carries a small embroidered brand mark. Confirm the client has approved public display before keeping this live.',
  },

  /* ---------------------------------------------------------------- */
  /*  WITHHELD — third-party brand campaign assets.                     */
  /*  Do not set published: true without written permission.            */
  /* ---------------------------------------------------------------- */
  {
    id: 'white-lounge-set',
    title: 'Striped shirt and trouser set',
    note: 'Withheld from the public gallery pending permission.',
    src: '/sample-work/white-lounge-set.webp',
    alt: 'Model wearing a striped oversized shirt and matching trousers',
    workType: 'project',
    published: false,
    permissionNote:
      'URGENT: image carries another brand’s campaign typography ("Someday, Somewhere — The Checked Out Collection"). It was previously published under the generic title "Lightweight leisurewear", which implies it is Kemora’s own work. Do not republish until Kemora confirms (a) that it produced these garments and (b) that the brand has given written permission to display its campaign creative.',
  },
  {
    id: 'checked-colorways',
    title: 'Checked shirt colourways',
    note: 'Withheld from the public gallery pending permission.',
    src: '/sample-work/checked-colorways.webp',
    alt: 'Two colourways of a striped shirt and trouser set shown side by side',
    workType: 'project',
    published: false,
    permissionNote:
      'URGENT: image carries a visible "www.meejhu.com" watermark — it is a third-party brand’s marketing asset. It was previously published as "Colorway exploration". Remove permanently unless Kemora produced this range AND holds written permission to use the brand’s creative.',
  },
]
