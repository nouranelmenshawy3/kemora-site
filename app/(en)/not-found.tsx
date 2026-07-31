import Link from 'next/link'
import { path } from '@/lib/i18n'

export default function NotFound() {
  return (
    <main
      id="main"
      className="flex min-h-screen flex-col items-center justify-center bg-sand px-6 text-center"
    >
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        This page could not be found
      </h1>
      <p className="mt-4 max-w-md leading-relaxed text-k-muted">
        The page may have moved or the link may be incorrect.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href={path('home', 'en')}
          className="rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          Back to home
        </Link>
        <Link
          href={path('contact', 'en')}
          className="rounded-md border border-k-border bg-white px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:border-accent hover:text-accent"
        >
          Contact us
        </Link>
      </div>
    </main>
  )
}
