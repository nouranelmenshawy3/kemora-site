import type { ProductCategory } from '../types'

/**
 * Product-category pages.
 *
 * Each page carries category-specific development notes and FAQs so it is a
 * genuinely useful page rather than a thin SEO duplicate. Nothing here promises
 * that every listed style is always available — the capability disclaimer is
 * rendered on every category page.
 */
export const productCategoriesEn: ProductCategory[] = [
  {
    slug: 't-shirts-polos-basics',
    name: 'T-Shirts, Polos & Basics',
    summary: 'Jersey and piqué basics — the usual starting point for a new brand.',
    title: 'T-Shirts, Polos & Basics',
    metaTitle: 'T-Shirt & Polo Manufacturer in Egypt | Kemora',
    metaDescription:
      'Private-label T-shirt and polo shirt manufacturing in Egypt. Combed cotton jersey and piqué, custom fit, printing, embroidery and branded labels for fashion brands.',
    h1: 'T-Shirt, Polo & Basics Manufacturing',
    intro:
      'Jersey basics are where most brands start, and where fit and fabric weight make the biggest difference to how a garment is judged. We develop tees and polos to your own pattern and specification rather than adapting a stock block.',
    items: [
      'Crew neck T-shirts',
      'V-neck T-shirts',
      'Oversized and boxy T-shirts',
      'Fitted and tapered T-shirts',
      'Long-sleeve T-shirts',
      'Piqué polo shirts',
      'Jersey polo shirts',
      'Tank tops and vests',
    ],
    fabrics: [
      'Combed cotton single jersey',
      'Cotton interlock',
      'Cotton piqué',
      'Cotton/elastane jersey',
      'Cotton rib (for collars and cuffs)',
    ],
    finishing: [
      'Screen printing',
      'Digital printing',
      'Embroidery',
      'Woven or printed neck labels',
      'Side seam labels',
      'Hang tags and polybags',
    ],
    developmentNotes: [
      {
        title: 'Fabric weight changes the whole product',
        body: 'A 150 gsm tee and a 220 gsm tee are different products at different price points. Heavier jersey holds an oversized shape and reads as more premium; lighter jersey drapes and suits warm-climate markets. We usually recommend confirming weight before pattern development, because it affects both the fit and the cost.',
      },
      {
        title: 'Neck construction is the detail buyers notice',
        body: 'Rib composition, collar width, shoulder taping and whether the neck is set in flat or overlocked all affect how the garment survives washing. These are specified on the sample and checked again before bulk.',
      },
      {
        title: 'Print method follows the artwork and the quantity',
        body: 'Solid one- or two-colour logos are usually most economical as screen print. Photographic or multi-colour artwork, and small runs, are generally better digitally printed. We advise on this once we see the artwork.',
      },
    ],
    faqs: [
      {
        question: 'Can you match a T-shirt I already own?',
        answer:
          'Yes. Sending a physical sample is the most accurate brief you can give us. We measure it, identify the fabric and construction, and develop a sample to match — or to improve on it where you want something changed.',
      },
      {
        question: 'Can I order different colours of the same style?',
        answer:
          'Yes, though each colour is treated as a separate minimum because fabric is dyed per colour. Adding colours usually raises the total order more than adding sizes does.',
      },
    ],
  },
  {
    slug: 'hoodies-sweatshirts-joggers',
    name: 'Hoodies, Sweatshirts & Joggers',
    summary: 'French terry and brushed fleece, from lightweight crews to heavy winter hoodies.',
    title: 'Hoodies, Sweatshirts & Joggers',
    metaTitle: 'Hoodie & Sweatshirt Manufacturer in Egypt | Kemora',
    metaDescription:
      'Private-label hoodie, sweatshirt and jogger manufacturing in Egypt. French terry and brushed fleece, custom fit, embroidery, printing and branded trims.',
    h1: 'Hoodie, Sweatshirt & Jogger Manufacturing',
    intro:
      'Sweat products carry more construction detail than jersey basics — hoods, drawcords, pockets, cuffs and waistbands all have to be specified. This is also where fabric weight most obviously separates a premium product from a cheap one.',
    items: [
      'Pullover hoodies',
      'Zip-through hoodies',
      'Crew neck sweatshirts',
      'Oversized and boxy sweatshirts',
      'Cropped sweatshirts',
      'Joggers and cuffed sweatpants',
      'Wide-leg and straight sweatpants',
      'Sweat shorts',
    ],
    fabrics: [
      'French terry',
      'Brushed fleece',
      'Heavier loopback cotton',
      'Cotton/polyester blends',
      'Cotton rib (for cuffs and waistbands)',
    ],
    finishing: [
      'Embroidery (including puff and 3D embroidery on request)',
      'Screen printing',
      'Digital printing',
      'Custom drawcords and metal or plastic tips',
      'Woven labels and branded waistband tape',
      'Hang tags and polybags',
    ],
    developmentNotes: [
      {
        title: 'Hood construction defines the silhouette',
        body: 'A two-panel hood, a three-panel hood and a lined hood all sit differently on the shoulders. Hood depth, opening width and whether the hood is self-lined are specified at sample stage — this is the detail brands most often want revised after seeing the first sample.',
      },
      {
        title: 'Rib and body fabric are dyed to match',
        body: 'Cuffs, waistbands and the main body are different constructions, so matching the colour requires them to be dyed together in the same lot. This is a normal part of planning but it affects lead time, particularly for custom colours.',
      },
      {
        title: 'Fleece weight and shrinkage',
        body: 'Heavier brushed fleece is warmer but shrinks differently to French terry. We account for this in the pattern, and confirm it against a washed sample before bulk so that graded sizes stay accurate after the customer washes the garment.',
      },
    ],
    faqs: [
      {
        question: 'What fabric weight should I choose for a hoodie?',
        answer:
          'It depends on your market and season. Around 280–320 gsm is a common all-year weight. Heavier fleece around 350–400 gsm reads as more premium and suits colder markets, but costs more in both fabric and freight. We can develop samples in two weights if you want to compare.',
      },
      {
        question: 'Can you produce matching hoodie and jogger sets?',
        answer:
          'Yes. Sets are usually developed together in the same fabric and dye lot so the colours match exactly. Each piece still counts separately towards the order quantity.',
      },
    ],
  },
  {
    slug: 'pajamas-loungewear',
    name: 'Pyjamas & Loungewear',
    summary: 'Knitted and woven sleep sets, from cotton jersey to poplin and satin.',
    title: 'Pyjamas & Loungewear',
    metaTitle: 'Pyjama & Loungewear Manufacturer in Egypt | Kemora',
    metaDescription:
      'Private-label pyjama and loungewear manufacturing in Egypt. Cotton jersey, poplin, satin and viscose sets developed to your brand’s designs, fit and packaging.',
    h1: 'Pyjama & Loungewear Manufacturing',
    intro:
      'Sleepwear and loungewear is one of the most active categories for brands across the Middle East. It sits between knitted and woven production, and the fabric choice changes the product more than the pattern does.',
    items: [
      'Two-piece pyjama sets',
      'Short-sleeve and short-leg sets',
      'Long-sleeve winter sets',
      'Nightdresses and slip dresses',
      'Robes and kimono-style overlayers',
      'Lounge sets and co-ords',
      'Lounge trousers and shorts',
      'Camisole and short sets',
    ],
    fabrics: [
      'Cotton single jersey',
      'Viscose jersey',
      'Cotton poplin',
      'Satin',
      'Brushed cotton for winter sets',
      'Linen blends for summer sets',
    ],
    finishing: [
      'Contrast piping and binding',
      'Embroidery and monogramming',
      'Printed and woven labels',
      'Custom buttons',
      'Gift-style packaging',
      'Individual polybags',
    ],
    developmentNotes: [
      {
        title: 'Knitted and woven sleepwear are different products',
        body: 'A jersey set is cut and sewn like a T-shirt and forgives fit variation. A poplin or satin set is closer to shirting — it needs button placement, plackets, collars and cuffs specified, and it shows fit errors much more clearly. Cost and lead time differ accordingly.',
      },
      {
        title: 'Satin needs handling allowance',
        body: 'Satin moves during cutting and marks easily during sewing, so it typically has a higher wastage allowance and a slower line speed. It is very achievable, but it should not be costed as if it were jersey.',
      },
      {
        title: 'Packaging is part of the product here',
        body: 'Sleepwear is bought as a gift more often than most categories, so folding, tissue, boxes and hang tags carry real weight. We can prepare packaging to your specification and include it in the sample so you see the finished presentation.',
      },
    ],
    faqs: [
      {
        question: 'Can you produce modest-length sleepwear?',
        answer:
          'Yes. Sleeve length, neckline height, hem length and opacity can all be specified. Fabric opacity is worth confirming on the sample, particularly for lighter colours in viscose or satin.',
      },
      {
        question: 'Can each set be packed ready for retail?',
        answer:
          'Yes. Sets can be folded, bagged, tagged and cartoned to your packing list so they arrive ready to sell or ship directly.',
      },
    ],
  },
  {
    slug: 'dresses-womens-wear',
    name: 'Dresses & Women’s Wear',
    summary: 'Jersey and woven dresses, tops and co-ord sets developed to your fit.',
    title: 'Dresses & Women’s Wear',
    metaTitle: 'Dress & Women’s Wear Manufacturer in Egypt | Kemora',
    metaDescription:
      'Private-label dress and women’s wear manufacturing in Egypt. Jersey and woven dresses, tops and co-ord sets developed to your designs, fit and size grading.',
    h1: 'Dress & Women’s Wear Manufacturing',
    intro:
      'Women’s wear is the category where fit and grading matter most, and where a first sample is least likely to be right first time. We plan for at least one round of fit revision as a normal part of development rather than an exception.',
    items: [
      'Jersey dresses',
      'Woven and shirt dresses',
      'Slip and column dresses',
      'Wrap dresses',
      'Women’s tops and blouses',
      'Camisoles and halter tops',
      'Skirts',
      'Co-ord sets',
    ],
    fabrics: [
      'Viscose jersey',
      'Cotton/elastane jersey',
      'Poplin',
      'Satin',
      'Linen blends',
      'Ribbed knits',
    ],
    finishing: [
      'Linings where the fabric requires it',
      'Invisible and standard zips',
      'Custom buttons and trims',
      'Embroidery',
      'Branded labels and hang tags',
    ],
    developmentNotes: [
      {
        title: 'Size grading is a design decision, not an afterthought',
        body: 'The way measurements increase between sizes determines who the garment actually fits. We confirm your intended size range and grading rules before sampling, because regrading after bulk pattern preparation costs time.',
      },
      {
        title: 'Drape has to be judged physically',
        body: 'How a viscose or satin dress falls cannot be assessed from a flat drawing or a screen. This is the category where reviewing a physical sample on a body — not on a hanger — genuinely changes the outcome.',
      },
      {
        title: 'Linings and opacity',
        body: 'Lighter fabrics and pale colours often need lining or a heavier base cloth. We check this on the sample and flag it, since it affects both the cost and the fit.',
      },
    ],
    faqs: [
      {
        question: 'How many fit revisions are normal?',
        answer:
          'One to two rounds is typical for dresses and fitted tops. Each round adds time, so we try to resolve as much as possible from the first sample review by asking for specific measurements rather than general impressions.',
      },
      {
        question: 'Can you work from a dress I send you?',
        answer:
          'Yes, and it is often the fastest route. We can match the fit, change specific measurements, or keep the fit and change the fabric — whichever you need.',
      },
    ],
  },
  {
    slug: 'abayas-modest-wear',
    name: 'Abayas & Modest Wear',
    summary: 'Abayas, overlayers and modest cuts developed for Gulf and regional markets.',
    title: 'Abayas & Modest Wear',
    metaTitle: 'Abaya & Modest Wear Manufacturer in Egypt | Kemora',
    metaDescription:
      'Private-label abaya and modest wear manufacturing in Egypt. Abayas, overlayers, modest dresses and sets developed to your brand’s fabric, cut and finishing.',
    h1: 'Abaya & Modest Wear Manufacturing',
    intro:
      'Modest wear is a category where fabric weight, drape and finishing quality carry the product. Regional buyers judge an abaya on how it falls and how clean the edges are, so we treat fabric selection and hem finishing as the core development questions.',
    items: [
      'Open-front abayas',
      'Closed abayas',
      'Kimono-style overlayers',
      'Modest dresses',
      'Wide-leg sets and co-ords',
      'Modest tops with extended sleeves',
      'Inner slip dresses',
      'Matching scarves and shawls',
    ],
    fabrics: [
      'Nida and similar formal crepe fabrics (subject to sourcing confirmation)',
      'Viscose crepe',
      'Viscose jersey',
      'Linen blends',
      'Satin',
      'Lightweight woven blends',
    ],
    finishing: [
      'Clean-finished and narrow hems',
      'Embroidery and monogramming',
      'Contrast piping and binding',
      'Custom closures',
      'Woven labels and branded packaging',
    ],
    developmentNotes: [
      {
        title: 'Drape is the product',
        body: 'The same pattern in two different crepes produces two visibly different abayas. Where possible we develop the sample in the exact fabric you intend to sell in, rather than a substitute, because substituting the fabric at bulk stage changes the garment.',
      },
      {
        title: 'Length and sleeve specification vary by market',
        body: 'Expectations for length, sleeve width and cuff finish differ between Gulf markets, the Levant and North Africa. Tell us which market you are selling into and we will reflect it in the measurement chart rather than assuming a default.',
      },
      {
        title: 'Fabric sourcing needs confirming per project',
        body: 'Some formal abaya fabrics are imported rather than locally woven, which affects both lead time and minimum quantity. We confirm availability for your specific fabric before quoting, rather than quoting first and discovering a constraint later.',
      },
    ],
    faqs: [
      {
        question: 'Can you source the specific abaya fabric I want?',
        answer:
          'We source to your requirement where the fabric is available to us. If a fabric has a long lead time or a high minimum, we will tell you at quotation stage and suggest alternatives with a similar weight and drape.',
      },
      {
        question: 'Can you produce matching sets?',
        answer:
          'Yes — abaya with an inner dress, or sets with matching scarves. Producing them together keeps the colour consistent across pieces.',
      },
    ],
  },
  {
    slug: 'activewear',
    name: 'Activewear',
    summary: 'Stretch-based leggings, sports bras and training tops.',
    title: 'Activewear',
    metaTitle: 'Activewear Manufacturer in Egypt | Kemora',
    metaDescription:
      'Private-label activewear manufacturing in Egypt. Leggings, sports bras, training tops and sets in stretch fabrics, developed to your fit and branding.',
    h1: 'Activewear Manufacturing',
    intro:
      'Activewear is the most technical category we work in. Stretch percentage, recovery, seam construction and opacity under stretch all have to be specified and then verified on a physical sample — this is not a category to approve from a drawing.',
    items: [
      'Leggings',
      'Cycling shorts',
      'Sports bras',
      'Training tops and tanks',
      'Long-sleeve training tops',
      'Lightweight training shorts',
      'Matching activewear sets',
    ],
    fabrics: [
      'Polyester/elastane knits',
      'Nylon/elastane knits',
      'Cotton/elastane jersey for lower-intensity products',
      'Power mesh for panelling and support',
    ],
    finishing: [
      'Flatlock and coverstitch seaming',
      'Heat transfer branding',
      'Reflective transfers on request',
      'Silicone or printed labels',
      'Elastic waistbands with branded tape',
    ],
    developmentNotes: [
      {
        title: 'Opacity under stretch must be tested',
        body: 'A legging fabric that looks opaque flat can become transparent when stretched over the body, particularly in lighter colours. This is checked physically on the sample in the intended colours, not assumed from the fabric specification.',
      },
      {
        title: 'Support level drives the sports bra pattern',
        body: 'Low, medium and high support are different constructions with different panelling, elastic and closures. We need the intended support level defined before pattern development, because it is not a variation that can be adjusted late.',
      },
      {
        title: 'Technical performance claims need testing',
        body: 'We do not publish moisture-wicking, UV or antibacterial performance claims on your behalf without test data. If your brand needs to make those claims, testing has to be arranged and quoted separately.',
      },
    ],
    faqs: [
      {
        question: 'Can you produce high-support sports bras?',
        answer:
          'Support level and construction are confirmed per project before development. Higher-support styles need more complex patterns and specific elastics, so we confirm feasibility and minimums with the relevant facility before quoting.',
      },
      {
        question: 'Can you match a legging I already sell?',
        answer:
          'Yes. Send a physical sample and tell us what you want kept and what you want changed — waistband height and fabric weight are the two most common changes brands ask for.',
      },
    ],
  },
  {
    slug: 'workwear-uniforms',
    name: 'Workwear & Uniforms',
    summary: 'Corporate, hospitality and staff uniforms with consistent repeat sizing.',
    title: 'Workwear & Uniforms',
    metaTitle: 'Workwear & Uniform Manufacturer in Egypt | Kemora',
    metaDescription:
      'Workwear and uniform manufacturing in Egypt for corporate, hospitality and staff programmes. Durable fabrics, consistent sizing and repeatable reorders.',
    h1: 'Workwear & Uniform Manufacturing',
    intro:
      'Uniform programmes are judged on consistency rather than novelty. The same garment has to look and measure the same on a reorder twelve months later, so we document specification tightly and keep approved samples as the reference.',
    items: [
      'Corporate polo shirts',
      'Staff T-shirts',
      'Hospitality shirts and aprons',
      'Work trousers',
      'Utility jackets and overshirts',
      'Branded caps',
      'Event and promotional wear',
    ],
    fabrics: [
      'Cotton/polyester blends for durability and easy care',
      'Cotton piqué',
      'Poplin and twill',
      'Heavier woven cloth for utility garments',
    ],
    finishing: [
      'Embroidered logos and name badges',
      'Screen printing',
      'Heat transfer for individual names and numbers',
      'Reinforced seams on request',
      'Size-run packing per location',
    ],
    developmentNotes: [
      {
        title: 'Repeatability is the requirement',
        body: 'We keep an approved reference sample and a signed measurement chart so a reorder matches the original. Without that, fabric lots and small pattern drift make repeat orders visibly inconsistent — the most common complaint in uniform supply.',
      },
      {
        title: 'Wash durability over appearance',
        body: 'Uniforms are washed far more often than retail garments. Fabric blend, stitch density and label choice are selected for wash performance, which sometimes means recommending against a fabric that feels nicer in the hand.',
      },
      {
        title: 'Size runs and distribution',
        body: 'We can pack by size run, by location or by individual name so that deliveries can be distributed without being re-sorted on arrival.',
      },
    ],
    faqs: [
      {
        question: 'Can we reorder the same uniform later?',
        answer:
          'Yes. The approved sample and measurement chart are kept as the reference for reorders. Exact fabric colour matching across separate dye lots should be confirmed at the time of reorder.',
      },
      {
        question: 'Can you add individual staff names?',
        answer:
          'Yes, usually by embroidery or heat transfer. Individual personalisation adds handling time, so it is quoted per unit rather than included in the base garment price.',
      },
    ],
  },
]

/** Categories that do not have their own page but are produced. */
export const additionalCategoriesEn = [
  'Shirts and woven tops',
  'Shorts',
  'Knitwear (subject to confirmation per project)',
  'Jackets and selected outerwear',
  'Caps and selected accessories',
]
