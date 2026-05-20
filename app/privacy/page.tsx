import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy – Kemora',
  description: 'Privacy Policy for Kemora – how we collect, use, and protect your personal data.',
  robots: { index: false, follow: false },
}

export default function PrivacyPage() {
  return (
    <>
      {/* Minimal header */}
      <header className="bg-primary py-5 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white tracking-widest">
            KEMORA
          </Link>
          <Link
            href="/"
            className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to site
          </Link>
        </div>
      </header>

      <main className="bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-16">
          {/* Title */}
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-3 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-k-muted text-sm">Last updated: May 2026</p>
          </div>

          {/* Content */}
          <div className="prose prose-gray max-w-none space-y-10 text-gray-700">

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">1. Who We Are</h2>
              <p className="leading-relaxed text-sm">
                Kemora is an Egyptian garment manufacturing and export company. This Privacy
                Policy explains how we collect, use, and protect your personal data when you
                visit our website or contact us.
              </p>
              <div className="mt-4 p-4 rounded-lg bg-sand border border-k-border text-sm space-y-1">
                <p><span className="font-semibold text-primary">Data Controller:</span> Kemora, Cairo, Egypt</p>
                <p>
                  <span className="font-semibold text-primary">Contact:</span>{' '}
                  <a href="mailto:nouran@kemora-eg.com" className="text-accent hover:underline">
                    nouran@kemora-eg.com
                  </a>
                </p>
                <p className="text-k-muted pt-1">
                  EU representative: Youssif Elmenshawy, Warsaw, Poland —{' '}
                  <a href="mailto:nouran@kemora-eg.com" className="text-accent hover:underline">
                    nouran@kemora-eg.com
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">2. What Data We Collect</h2>
              <h3 className="font-semibold text-primary mb-2 text-base">
                A. Information You Provide (via the contact form)
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Your name</li>
                <li>Your email address</li>
                <li>Your company name (optional)</li>
                <li>Any information you include in your message</li>
              </ul>
              <h3 className="font-semibold text-primary mb-2 mt-5 text-base">
                B. Automatic Data (via website hosting)
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>IP address (anonymised where possible)</li>
                <li>Browser type and version</li>
                <li>Date, time, and pages visited</li>
              </ul>
              <p className="text-sm mt-3 text-k-muted">
                This data is collected via standard server logs and is not used to identify you
                personally.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-4">3. How We Use Your Data</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-sand">
                      <th className="text-left p-3 border border-k-border font-semibold text-primary">Purpose</th>
                      <th className="text-left p-3 border border-k-border font-semibold text-primary">Legal Basis (GDPR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Responding to your inquiry or request for a sample/quote', 'Legitimate interest (business communication)'],
                      ['Sending information about our services, if requested', 'Your consent (withdrawable at any time)'],
                      ['Improving our website and ensuring its security', 'Legitimate interest (technical maintenance)'],
                    ].map(([purpose, basis]) => (
                      <tr key={purpose}>
                        <td className="p-3 border border-k-border align-top text-gray-700">{purpose}</td>
                        <td className="p-3 border border-k-border align-top text-k-muted">{basis}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm mt-3 text-k-muted">
                We do not use your data for automated decision-making or profiling. We do not
                sell, rent, or trade your personal data to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">4. Cookies</h2>
              <p className="text-sm leading-relaxed">
                We keep cookies to an absolute minimum. Our website uses only essential/functional
                cookies required for the website to display correctly (e.g., saving your cookie
                consent choice). These do not track you. Optional analytics cookies will only be
                added with your explicit consent and this policy will be updated accordingly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">5. Who We Share Your Data With</h2>
              <p className="text-sm leading-relaxed">
                We share your data only with trusted service providers who help us operate:
                website hosting, email provider, and legal authorities if required by law. All
                providers are GDPR-compliant or covered by equivalent data protection agreements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">6. How Long We Keep Your Data</h2>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Contact form messages — up to 3 years after last communication, then securely deleted.</li>
                <li>Server logs — rotated and deleted within 30 days.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">7. Your Rights (GDPR)</h2>
              <p className="text-sm mb-3">As a user in the European Union, you have the right to:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li><span className="font-semibold text-primary">Access</span> — request a copy of the data we hold about you.</li>
                <li><span className="font-semibold text-primary">Rectification</span> — correct any inaccurate or incomplete data.</li>
                <li><span className="font-semibold text-primary">Erasure</span> — request deletion of your data ("right to be forgotten").</li>
                <li><span className="font-semibold text-primary">Restriction</span> — request a temporary halt on processing.</li>
                <li><span className="font-semibold text-primary">Objection</span> — object to processing based on legitimate interest.</li>
                <li><span className="font-semibold text-primary">Data portability</span> — receive your data in a machine-readable format.</li>
                <li><span className="font-semibold text-primary">Withdraw consent</span> — at any time, without affecting prior processing.</li>
              </ul>
              <p className="text-sm mt-4 text-k-muted">
                To exercise any right, email{' '}
                <a href="mailto:nouran@kemora-eg.com" className="text-accent hover:underline">
                  nouran@kemora-eg.com
                </a>
                . We will respond within 30 days. If unsatisfied, you may lodge a complaint with
                your local supervisory authority (in Poland:{' '}
                <span className="font-medium text-gray-700">Urząd Ochrony Danych Osobowych</span>).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">8. International Data Transfers</h2>
              <p className="text-sm leading-relaxed">
                Our company is based in Egypt, outside the EEA. By submitting your data through
                our contact form, you acknowledge that your data will be transferred to and
                processed in Egypt. We implement Standard Contractual Clauses or equivalent
                safeguards with all service providers, and apply robust technical and
                organisational security measures.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">9. Security</h2>
              <p className="text-sm leading-relaxed">
                Our entire site uses HTTPS encryption. Contact form submissions are transmitted
                securely. Our email and hosting accounts are protected by strong passwords and
                two-factor authentication. Only Nouran and Youssif Elmenshawy have access to
                inquiry emails.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">10. Changes to This Policy</h2>
              <p className="text-sm leading-relaxed">
                We may update this Privacy Policy from time to time. The latest version will
                always be posted on this page with the "Last updated" date. Significant changes
                will be communicated more prominently.
              </p>
            </section>
          </div>

          {/* Back link */}
          <div className="mt-16 pt-8 border-t border-k-border">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-dark font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Kemora
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-primary py-5 px-6 text-center">
        <p className="text-white/30 text-xs">© {new Date().getFullYear()} Kemora. All rights reserved.</p>
      </footer>
    </>
  )
}
