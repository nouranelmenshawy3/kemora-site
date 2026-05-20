'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '#why', label: 'Why Kemora' },
  { href: '#products', label: 'Products' },
  { href: '#process', label: 'Process' },
  { href: '#about', label: 'About' },
  { href: '#trust', label: 'Trust' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-k-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={`text-xl font-bold tracking-widest transition-colors duration-300 ${
            scrolled ? 'text-primary' : 'text-white'
          }`}
          aria-label="Kemora – Home"
        >
          KEMORA
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors duration-200 ${
                scrolled
                  ? 'text-gray-600 hover:text-accent'
                  : 'text-white/75 hover:text-white'
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2 bg-accent hover:bg-accent-dark text-white text-sm font-semibold rounded-md transition-colors duration-200"
          >
            Request a Sample
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className={`md:hidden p-2 rounded-md transition-colors ${
            scrolled ? 'text-primary hover:bg-gray-100' : 'text-white hover:bg-white/10'
          }`}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-k-border px-4 pt-2 pb-5 space-y-1">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block px-2 py-3 text-gray-700 font-medium border-b border-gray-50 last:border-0 hover:text-accent transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block mt-3 text-center py-3 bg-accent hover:bg-accent-dark text-white font-semibold rounded-md transition-colors"
          >
            Request a Sample
          </a>
        </div>
      )}
    </header>
  )
}
