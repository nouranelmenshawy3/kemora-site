import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: { absolute: 'Privacy Policy | Kemora' },
  description: 'How Kemora collects, uses, stores and protects website enquiry information.',
  alternates: { canonical: '/privacy' },
  robots: { index: false, follow: false },
}

const Section = ({
  number,
  title,
  children,
}: {
  number: number
  title: string
  children: React.ReactNode
}) => (
  <section>
    <h2 className="mb-3 text-xl font-bold text-primary">
      {number}. {title}
    </h2>
    {children}
  </section>
)

export default function PrivacyPage() {
  return (
    <>
      <header className="bg-primary px-6 py-5">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 text-lg font-bold tracking-widest text-white">
            <Image src="/kemora-mark.png" alt="" width={34} height={36} />
            KEMORA
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to site
          </Link>
        </div>
      </header>

      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <div className="mb-12">
            <h1 className="mb-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="text-sm text-k-muted">Last updated: 3 August 2026</p>
          </div>

          <div className="space-y-10 text-sm leading-relaxed text-gray-700">
            <Section number={1} title="Who we are">
              <p>
                Kemora is an Egypt-based private-label clothing manufacturing and product-development
                partner. This policy explains how we handle information submitted through{' '}
                <a href={siteConfig.url} className="text-accent hover:underline">
                  {siteConfig.url.replace('https://', '')}
                </a>{' '}
                or sent to us directly.
              </p>
              <div className="mt-4 space-y-1 rounded-lg border border-k-border bg-sand p-4">
                <p>
                  <span className="font-semibold text-primary">Website brand:</span> Kemora
                </p>
                <p>
                  <span className="font-semibold text-primary">Privacy contact:</span>{' '}
                  <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
                    {siteConfig.email}
                  </a>
                </p>
              </div>
            </Section>

            <Section number={2} title="Information we collect">
              <p>When you use the enquiry form, we may collect:</p>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>Your name, email address and optional brand name or WhatsApp number.</li>
                <li>Your country, preferred language, product category and estimated quantity.</li>
                <li>Your answers about the stage of your designs.</li>
                <li>Your message, if provided.</li>
                <li>Designs, reference images or PDF files that you choose to attach.</li>
              </ul>
              <p className="mt-4">
                If you contact us through email or WhatsApp, we receive the information you send through
                that service. Please do not include sensitive personal information in a message or file
                unless it is necessary for your request.
              </p>
              <p className="mt-4">
                Our hosting provider may process ordinary technical and security data, such as request
                times, browser information and IP-related network data. Vercel Web Analytics records
                anonymised page and event data and does not use cookies. We do not send your message,
                email address or uploaded files to analytics.
              </p>
            </Section>

            <Section number={3} title="Why we use the information">
              <ul className="list-disc space-y-1 pl-5">
                <li>To review your enquiry and respond to you.</li>
                <li>To assess product feasibility, sampling, quantities and quotation requirements.</li>
                <li>To continue discussions or take steps you request before entering a contract.</li>
                <li>To operate, secure and improve the website and enquiry process.</li>
                <li>To meet legal, accounting or dispute-resolution obligations where applicable.</li>
              </ul>
              <p className="mt-4">
                Depending on the context, processing may rely on your consent, steps requested before a
                contract, Kemora&apos;s legitimate interests in responding to business enquiries and securing
                the website, or a legal obligation. The enquiry form is not used to enrol you in unrelated
                marketing.
              </p>
            </Section>

            <Section number={4} title="Service providers and project partners">
              <p>Information may be processed by or shared with:</p>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>Kemora personnel who need it to respond to or manage the enquiry.</li>
                <li>Vercel, which hosts the website and provides privacy-focused web analytics.</li>
                <li>Resend, which delivers enquiry emails and attachments to Kemora.</li>
                <li>
                  A relevant production, sourcing, testing or logistics partner when this is necessary to
                  assess or carry out your project.
                </li>
                <li>Professional advisers or public authorities where disclosure is required by law.</li>
              </ul>
              <p className="mt-4">Kemora does not sell or rent enquiry information.</p>
            </Section>

            <Section number={5} title="International processing">
              <p>
                Kemora is based in Egypt and serves international clients. Your enquiry may therefore be
                accessed or processed in Egypt and in countries where our hosting, email, production or
                logistics providers operate. Where data-protection law requires a transfer safeguard,
                Kemora and the relevant provider are responsible for using an appropriate mechanism.
              </p>
            </Section>

            <Section number={6} title="How long we keep information">
              <p>
                We keep enquiry and project information only for as long as reasonably necessary to answer
                the request, manage a potential or active business relationship, maintain project records,
                resolve disputes and meet legal or accounting obligations. The period depends on whether
                the enquiry becomes a project and on the type of record. You may ask us to delete an enquiry
                that is no longer needed, subject to any legal reason we must retain it.
              </p>
            </Section>

            <Section number={7} title="Your privacy rights">
              <p>
                Depending on where you live and which law applies, you may have rights to request access,
                correction, deletion, restriction, portability or objection, and to withdraw consent where
                consent is the basis for processing.
              </p>
              <p className="mt-4">
                Send a request to{' '}
                <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
                  {siteConfig.email}
                </a>
                . We may need enough information to verify the request. You may also complain to the
                data-protection authority that applies in your country.
              </p>
            </Section>

            <Section number={8} title="Cookies and analytics">
              <p>
                The current website does not use advertising cookies. Vercel Web Analytics is configured
                as a cookie-free, anonymised analytics service. If Kemora later introduces advertising,
                session-recording or other non-essential tracking, this policy and any required consent
                controls must be updated before that tracking is enabled.
              </p>
            </Section>

            <Section number={9} title="Security">
              <p>
                The website uses HTTPS, access controls and service-provider security measures intended to
                protect submitted information. No online service can guarantee absolute security. If you
                believe information has been sent to us in error or exposed, contact us promptly at{' '}
                <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
                  {siteConfig.email}
                </a>
                .
              </p>
            </Section>

            <Section number={10} title="Changes to this policy">
              <p>
                We may update this policy when our website, providers or legal obligations change. The
                current version and update date will remain available on this page.
              </p>
            </Section>
          </div>

          <div className="mt-16 border-t border-k-border pt-8">
            <Link href="/" className="inline-flex items-center gap-2 font-medium text-accent transition-colors hover:text-accent-dark">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Kemora
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-primary px-6 py-5 text-center">
        <p className="text-xs text-white/40">© {new Date().getFullYear()} Kemora. All rights reserved.</p>
      </footer>
    </>
  )
}
