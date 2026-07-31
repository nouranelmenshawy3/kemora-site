import type { Fabric } from '../types'

/**
 * Common fabric options.
 *
 * GSM ranges are given only where a conventional industry range exists for that
 * construction. They describe what is typically used, not a guaranteed stock
 * range — the disclaimer on the page makes that explicit.
 */
export const fabricsEn: Fabric[] = [
  {
    name: 'Combed cotton single jersey',
    use: 'T-shirts, basic tops, printed tees',
    feel: 'Smooth and even, with less surface fuzz than carded cotton',
    gsm: 'commonly 140–220 gsm',
    advantage: 'The most versatile knit for print and embroidery, and the easiest to cost predictably.',
  },
  {
    name: 'Cotton interlock',
    use: 'Heavier tops, children’s wear, structured basics',
    feel: 'Denser and smoother on both faces, with more body than single jersey',
    gsm: 'commonly 180–260 gsm',
    advantage: 'Both sides look finished, so it holds shape well and resists curling at the edges.',
  },
  {
    name: 'Cotton piqué',
    use: 'Polo shirts, collared knitwear',
    feel: 'Textured surface with a fine waffle structure',
    gsm: 'commonly 180–240 gsm',
    advantage: 'The standard polo fabric — breathable, and the texture hides light creasing.',
  },
  {
    name: 'French terry',
    use: 'Sweatshirts, hoodies, joggers, loungewear',
    feel: 'Flat outside, soft looped inside, unbrushed',
    gsm: 'commonly 240–350 gsm',
    advantage: 'Warmer than jersey but far lighter than fleece — works across more of the year.',
  },
  {
    name: 'Brushed fleece',
    use: 'Winter hoodies, sweat sets, heavier joggers',
    feel: 'Soft brushed pile on the inside face',
    gsm: 'commonly 280–400 gsm',
    advantage: 'The warmest common sweat fabric, and the most forgiving on fit.',
  },
  {
    name: 'Cotton rib',
    use: 'Cuffs, collars, waistbands, fitted tops',
    feel: 'Elastic and ridged, recovers back to shape',
    advantage: 'Essential trim fabric — usually matched to the main fabric colour in the same dye lot.',
  },
  {
    name: 'Lycra (elastane) jersey',
    use: 'Fitted tops, leggings, activewear, bodysuits',
    feel: 'Stretch in two or four directions with strong recovery',
    advantage: 'Holds a close fit through wear and washing; elastane percentage is set by the fit required.',
  },
  {
    name: 'Viscose jersey',
    use: 'Drapey tops, dresses, lightweight loungewear',
    feel: 'Fluid and cool with a soft surface sheen',
    advantage: 'Falls closer to the body than cotton, which suits softer silhouettes and modest wear.',
  },
  {
    name: 'Poplin',
    use: 'Shirts, dresses, pyjama sets, uniforms',
    feel: 'Crisp, smooth and flat woven',
    advantage: 'Clean, structured finish — the default woven for shirting and tailored sleepwear.',
  },
  {
    name: 'Satin',
    use: 'Sleepwear, occasion dresses, linings, modest wear',
    feel: 'Lustrous face with a fluid drape',
    advantage: 'Adds a premium visual finish at a lower cost than silk; requires careful cutting and handling.',
  },
  {
    name: 'Linen blends',
    use: 'Summer shirts, co-ord sets, relaxed trousers',
    feel: 'Dry, textured, breathable',
    advantage: 'Blending with cotton or viscose keeps the linen character while reducing creasing.',
  },
]

/** Branding and finishing services. Only genuinely offered services are listed. */
export const finishingEn = {
  confirmed: [
    {
      title: 'Embroidery',
      body: 'Logos, monograms and text on knitwear, fleece, caps and woven garments. Digitising is done from your artwork before production.',
    },
    {
      title: 'Screen printing',
      body: 'Best value for larger runs in a limited number of colours. Suits solid logos and graphic prints on cotton.',
    },
    {
      title: 'Digital printing',
      body: 'For photographic or multi-colour artwork and short runs, where screen setup would not be economical.',
    },
    {
      title: 'Heat transfer',
      body: 'Useful for small quantities, size-run variations and detailed artwork on performance fabrics.',
    },
    {
      title: 'Labels and care labels',
      body: 'Woven or printed neck labels, size labels and composition/care labels made to your brand’s specification.',
    },
    {
      title: 'Hang tags',
      body: 'Branded tags, string or safety-pin attachment, applied in the factory before packing.',
    },
    {
      title: 'Polybags and packaging',
      body: 'Individual polybags, branded stickers, tissue and carton packing prepared to your packing list.',
    },
  ],
  /**
   * TODO [BUSINESS INPUT REQUIRED] — see claims.ts `special-finishes`.
   * Do not move these into `confirmed` until the production team confirms
   * whether each is available and whether it is in-house or subcontracted.
   */
  onRequest: [
    'Garment washes and softening treatments',
    'Enzyme wash and other specialist denim finishes',
    'Garment dyeing',
    'Documented chemical-compliance testing (e.g. REACH) for specified materials',
  ],
}
