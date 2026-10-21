'use client'

import Link from 'next/link'
import { track } from '@vercel/analytics'
import { technologyPartner } from '@/lib/site'

interface TrackedLinkProps {
  href: string
  event?: string
  eventData?: Record<string, string | number | boolean>
  external?: boolean
  className?: string
  children: React.ReactNode
  ariaLabel?: string
  onNavigate?: () => void
}

/**
 * Link wrapper that reports a custom event to the existing Vercel Analytics
 * integration. No new analytics vendor is introduced.
 * Event names are defined in lib/site.ts and documented in docs/ANALYTICS.md.
 */
export default function TrackedLink({
  href,
  event,
  eventData,
  external,
  className,
  children,
  ariaLabel,
  onNavigate,
}: TrackedLinkProps) {
  const handleClick = () => {
    if (event) track(event, eventData)
    onNavigate?.()
  }

  if (external) {
    // Share only our origin with these explicit partner destinations, never
    // the current page path or query. Other external links remain private.
    const allowPartnerReferrer = href === technologyPartner.partnershipUrl || href === technologyPartner.inquiryUrl
    return (
      <a
        href={href}
        target="_blank"
        rel={allowPartnerReferrer ? 'noopener' : 'noopener noreferrer'}
        referrerPolicy={allowPartnerReferrer ? 'strict-origin' : 'no-referrer'}
        className={className}
        aria-label={ariaLabel}
        onClick={handleClick}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={className} aria-label={ariaLabel} onClick={handleClick}>
      {children}
    </Link>
  )
}
