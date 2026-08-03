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
    id: 'white-lounge-set',
    title: 'Meejhu — Checked Out collection',
    note: 'Striped shirt and trouser set produced as completed project work for the Checked Out collection.',
    src: '/sample-work/meejhu-checked-out-garden.webp',
    alt: 'Model wearing a beige striped oversized shirt and matching trousers from the Checked Out collection',
    workType: 'project',
    published: true,
    permissionNote:
      'Confirmed by Kemora team as completed project work. Keep client approval to display campaign creative on file.',
    objectPosition: '50% 48%',
  },
  {
    id: 'checked-colorways',
    title: 'Checked Out colourways',
    note: 'Beige and pink striped set colourways produced as completed project work.',
    src: '/sample-work/meejhu-checked-out-colorways.webp',
    alt: 'Beige and pink striped shirt and trouser colourways from the Checked Out collection',
    workType: 'project',
    published: true,
    permissionNote:
      'Confirmed by Kemora team as completed project work. Keep client approval to display campaign creative on file.',
    objectPosition: '50% 50%',
  },
  {
    id: 'puffer-jackets-colourways',
    title: 'Puffer jacket colourways',
    note: 'Quilted puffer jackets produced as completed project work in multiple colourways with stand collar and zip front.',
    src: '/sample-work/puffer-jackets-colourways-model-216.jpg',
    alt: 'Quilted puffer jackets on a rail in caramel, taupe, black and sage colourways',
    workType: 'project',
    published: true,
    objectPosition: '50% 42%',
  },
  {
    id: 'lightweight-puffer-jackets',
    title: 'Lightweight puffer jackets',
    note: 'Lightweight quilted outerwear produced as completed project work with horizontal baffles, side pockets and elasticated cuffs.',
    src: '/sample-work/lightweight-puffer-jackets-model-40.jpg',
    alt: 'Lightweight quilted puffer jackets on a rail in stone, black and white colourways',
    workType: 'project',
    published: true,
    objectPosition: '50% 44%',
  },
  {
    id: 'white-studio-merch',
    title: 'White cropped tee & jogger set',
    note: 'Matching white set with cropped printed T-shirt and relaxed jogger trousers.',
    src: '/sample-work/white-studio-merch.jpg',
    alt: 'Model wearing a white cropped printed T-shirt with matching relaxed white jogger trousers',
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
    title: 'Off-shoulder fleece co-ord — Burgundy',
    note: 'Matching off-shoulder top and wide-leg trouser set developed in burgundy fleece.',
    src: '/sample-work/burgundy-studio-set.webp',
    alt: 'Model wearing a burgundy off-shoulder fleece top with matching wide-leg trousers',
    workType: 'sample',
    published: true,
  },
  {
    id: 'black-knit-set',
    title: 'Off-shoulder fleece co-ord — Black',
    note: 'Same two-piece silhouette developed in black, with fitted long-sleeve top and relaxed wide-leg trousers.',
    src: '/sample-work/black-studio-set.webp',
    alt: 'Model wearing a black fitted long-sleeve top with relaxed black wide-leg fleece trousers',
    workType: 'sample',
    published: true,
  },
  {
    id: 'pink-vacation-set',
    title: 'Resort jersey co-ord — Pink',
    note: 'Pink halter-style top and long skirt set in lightweight stretch jersey.',
    src: '/sample-work/pink-vacation-set.jpg',
    alt: 'Model wearing a pink lightweight jersey halter top and matching long skirt',
    workType: 'sample',
    published: true,
    objectPosition: '50% 40%',
  },
  {
    id: 'brown-resort-set',
    title: 'Resort jersey co-ord — Brown',
    note: 'Same resort co-ord silhouette developed in brown, with draped top and long column skirt.',
    src: '/sample-work/brown-resort-set.webp',
    alt: 'Model wearing a brown draped jersey top and matching long column skirt',
    workType: 'sample',
    published: true,
  },
  {
    id: 'gray-lounge-sample',
    title: 'Grey off-shoulder co-ord sheet',
    note: 'Front, back and detail views of a grey off-shoulder top and trouser set.',
    src: '/sample-work/gray-lounge-sample.webp',
    alt: 'Development sheet showing front, back and detail views of a grey off-shoulder top and matching trouser set',
    workType: 'sample',
    published: true,
    permissionNote:
      'Owner confirmed permission to display the visible client mark on 3 August 2026. Keep the permission record on file.',
  },
]
