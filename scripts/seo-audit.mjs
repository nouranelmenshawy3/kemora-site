const baseUrl = process.env.AUDIT_BASE_URL || 'http://localhost:3001'
const productionOrigin = 'https://www.kemoratex.com'
const productionEmail = 'info@kemoratex.com'
const productionWhatsApp = '48575379875'

const failures = []
const warnings = []

const fail = (message) => failures.push(message)
const warn = (message) => warnings.push(message)

const decodeHtml = (value = '') =>
  value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')

const attr = (tag, name) => {
  const match = tag.match(new RegExp(`\\s${name}=["']([^"']*)["']`, 'i'))
  return match ? decodeHtml(match[1]) : null
}

const tags = (html, tagName) => html.match(new RegExp(`<${tagName}\\b[^>]*>`, 'gi')) ?? []

async function get(pathname) {
  const response = await fetch(new URL(pathname, baseUrl), { redirect: 'manual' })
  return { response, text: await response.text() }
}

const sitemapResult = await get('/sitemap.xml')
if (sitemapResult.response.status !== 200) {
  fail(`sitemap.xml returned ${sitemapResult.response.status}`)
}

const sitemapLocations = [
  ...sitemapResult.text.matchAll(/<loc>([^<]+)<\/loc>/g),
].map((match) => decodeHtml(match[1]))

const uniqueLocations = [...new Set(sitemapLocations)]
if (uniqueLocations.length !== sitemapLocations.length) fail('Sitemap contains duplicate URLs')
if (uniqueLocations.length < 40) fail(`Sitemap contains only ${uniqueLocations.length} URLs`)

const routePaths = uniqueLocations.map((location) => new URL(location).pathname)
const pageResults = new Map()

for (let index = 0; index < routePaths.length; index += 6) {
  const batch = routePaths.slice(index, index + 6)
  const resolved = await Promise.all(
    batch.map(async (pathname) => [pathname, await get(pathname)])
  )
  for (const [pathname, result] of resolved) pageResults.set(pathname, result)
}

const titleOwners = new Map()
const descriptionOwners = new Map()
const internalLinks = new Set(['/privacy'])
const forbiddenClaims = [
  /0% EU duty/i,
  /5,000\+? pieces/i,
  /14-day delivery/i,
  /without exception/i,
  /all fabrics and trims meet EU/i,
]
const forbiddenCompanyReferences = [
  /Seif Clothing/i,
  /placeholder compan(?:y|ies)/i,
  /example compan(?:y|ies)/i,
]

for (const [pathname, result] of pageResults) {
  const { response, text: html } = result
  if (response.status !== 200) {
    fail(`${pathname} returned ${response.status}`)
    continue
  }

  const title = decodeHtml(html.match(/<title>([^<]+)<\/title>/i)?.[1] ?? '').trim()
  const descriptionTag = tags(html, 'meta').find(
    (tag) => attr(tag, 'name')?.toLowerCase() === 'description'
  )
  const description = attr(descriptionTag ?? '', 'content')?.trim() ?? ''
  const canonicalTag = tags(html, 'link').find(
    (tag) => attr(tag, 'rel')?.toLowerCase() === 'canonical'
  )
  const canonical = attr(canonicalTag ?? '', 'href')
  const expectedCanonical = `${productionOrigin}${pathname === '/' ? '' : pathname}`
  const h1Count = (html.match(/<h1\b/gi) ?? []).length
  const htmlTag = tags(html, 'html')[0] ?? ''
  const expectedLocale = pathname === '/ar' || pathname.startsWith('/ar/') ? 'ar' : 'en'
  const expectedDirection = expectedLocale === 'ar' ? 'rtl' : 'ltr'

  if (!title) fail(`${pathname} has no title`)
  if (title && !/\bKemora\b/i.test(title)) fail(`${pathname} title does not use the Kemora brand`)
  if (!description) fail(`${pathname} has no meta description`)
  if (canonical !== expectedCanonical) {
    fail(`${pathname} canonical is ${canonical ?? 'missing'}, expected ${expectedCanonical}`)
  }
  if (h1Count !== 1) fail(`${pathname} has ${h1Count} H1 elements`)
  if (attr(htmlTag, 'lang') !== expectedLocale) fail(`${pathname} has incorrect html lang`)
  if (attr(htmlTag, 'dir') !== expectedDirection) fail(`${pathname} has incorrect text direction`)

  if (title) {
    const owner = titleOwners.get(title)
    if (owner) fail(`Duplicate title on ${owner} and ${pathname}: ${title}`)
    else titleOwners.set(title, pathname)
  }
  if (description) {
    const owner = descriptionOwners.get(description)
    if (owner) fail(`Duplicate description on ${owner} and ${pathname}`)
    else descriptionOwners.set(description, pathname)
  }

  const alternateTags = tags(html, 'link').filter(
    (tag) => attr(tag, 'rel')?.toLowerCase() === 'alternate'
  )
  const hreflangs = new Map(
    alternateTags.map((tag) => [attr(tag, 'hreflang'), attr(tag, 'href')])
  )
  if (!hreflangs.has(expectedLocale)) fail(`${pathname} is missing self hreflang`)
  if (expectedLocale === 'en' && !hreflangs.has('x-default')) {
    fail(`${pathname} is missing x-default hreflang`)
  }

  const ogTitle = tags(html, 'meta').find((tag) => attr(tag, 'property') === 'og:title')
  const ogDescription = tags(html, 'meta').find(
    (tag) => attr(tag, 'property') === 'og:description'
  )
  const ogImage = tags(html, 'meta').find((tag) => attr(tag, 'property') === 'og:image')
  if (!attr(ogTitle ?? '', 'content')) fail(`${pathname} has no Open Graph title`)
  if (!attr(ogDescription ?? '', 'content')) fail(`${pathname} has no Open Graph description`)
  if (!attr(ogImage ?? '', 'content')) fail(`${pathname} has no Open Graph image`)

  for (const scriptMatch of html.matchAll(
    /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
  )) {
    try {
      JSON.parse(scriptMatch[1])
    } catch {
      fail(`${pathname} contains invalid JSON-LD`)
    }
  }

  const imageTags = tags(html, 'img')
  for (const imageTag of imageTags) {
    if (attr(imageTag, 'alt') === null) fail(`${pathname} contains an image without alt text`)
    const isFillImage = attr(imageTag, 'data-nimg') === 'fill'
    if (!isFillImage && (!attr(imageTag, 'width') || !attr(imageTag, 'height'))) {
      warn(`${pathname} contains an image without explicit width and height`)
    }
  }

  for (const anchorTag of tags(html, 'a')) {
    const href = attr(anchorTag, 'href')
    if (!href || href.startsWith('#') || href.startsWith('tel:')) continue
    if (href.startsWith('mailto:')) {
      if (href.toLowerCase() !== `mailto:${productionEmail}`) {
        fail(`${pathname} contains an unexpected email link: ${href}`)
      }
      continue
    }
    if (href.startsWith('https://wa.me/')) {
      if (!href.startsWith(`https://wa.me/${productionWhatsApp}`)) {
        fail(`${pathname} contains an unexpected WhatsApp link: ${href}`)
      }
      continue
    }
    const url = new URL(href, productionOrigin)
    if (url.origin === productionOrigin) internalLinks.add(url.pathname)
  }

  for (const pattern of forbiddenClaims) {
    if (pattern.test(html)) fail(`${pathname} contains an old unsupported claim: ${pattern}`)
  }

  for (const pattern of forbiddenCompanyReferences) {
    if (pattern.test(html)) fail(`${pathname} contains an old or placeholder company reference: ${pattern}`)
  }

  if (/https?:\/\/(?:localhost|127\.0\.0\.1)(?::\d+)?/i.test(html)) {
    fail(`${pathname} contains a localhost URL in rendered production content`)
  }

  const brandText = decodeHtml(html)
    .replace(/https?:\/\/(?:www\.)?kemoratex\.com[^"'<\s]*/gi, '')
    .replace(/(?:info|website)@kemoratex\.com/gi, '')
    .replace(/(?:www\.)?kemoratex\.com/gi, '')
  if (/\bKemoratex\b/i.test(brandText)) {
    fail(`${pathname} uses Kemoratex as a visible company name instead of Kemora`)
  }
}

for (const pathname of internalLinks) {
  const result = pageResults.get(pathname) ?? (await get(pathname))
  if (result.response.status < 200 || result.response.status >= 400) {
    fail(`Internal link ${pathname} returned ${result.response.status}`)
  }
}

const robotsResult = await get('/robots.txt')
if (robotsResult.response.status !== 200) fail(`robots.txt returned ${robotsResult.response.status}`)
if (!robotsResult.text.includes('Sitemap: https://www.kemoratex.com/sitemap.xml')) {
  fail('robots.txt does not reference the production sitemap')
}
if (!robotsResult.text.includes('Disallow: /api/')) fail('robots.txt does not block API routes')

const homeHeaders = pageResults.get('/')?.response.headers
const requiredHeaders = new Map([
  ['x-content-type-options', 'nosniff'],
  ['x-frame-options', 'DENY'],
  ['referrer-policy', 'strict-origin-when-cross-origin'],
])
for (const [name, expected] of requiredHeaders) {
  if (homeHeaders?.get(name) !== expected) fail(`Missing or incorrect ${name} response header`)
}

console.log(`Checked ${pageResults.size} sitemap pages and ${internalLinks.size} internal paths.`)
if (warnings.length) {
  console.log(`Warnings (${warnings.length}):`)
  for (const message of warnings) console.log(`- ${message}`)
}
if (failures.length) {
  console.error(`Failures (${failures.length}):`)
  for (const message of failures) console.error(`- ${message}`)
  process.exitCode = 1
} else {
  console.log('SEO route audit passed.')
}
