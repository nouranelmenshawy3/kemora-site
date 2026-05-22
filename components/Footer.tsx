import Link from 'next/link'

const navLinks = [
  { href: '#why', label: 'Why Kemora' },
  { href: '#products', label: 'Products' },
  { href: '#process', label: 'Process' },
  { href: '#about', label: 'About' },
  { href: '#trust', label: 'Trust & Compliance' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-primary texture-dark">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="text-xl font-bold text-white tracking-widest mb-3">KEMORA</p>
            <p className="text-white/45 text-sm leading-relaxed mb-5 max-w-xs">
              Egyptian private-label garment manufacturing for European brands.
              Quality production, European service, zero customs duty.
            </p>
            <div className="flex items-center gap-2 text-white/30 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Currently accepting new clients
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white/60 text-xs font-bold tracking-widest uppercase mb-4">Navigation</p>
            <ul className="space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-white/45 hover:text-white text-sm transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/60 text-xs font-bold tracking-widest uppercase mb-4">Contact</p>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-white/30 text-xs mb-0.5">Email</p>
                <a
                  href="mailto:hello@kemoratex.com"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  hello@kemoratex.com
                </a>
              </div>
              <div>
                <p className="text-white/30 text-xs mb-0.5">WhatsApp</p>
                <a
                  href="https://wa.me/48575379875"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  +48 575 379 875
                </a>
              </div>
              <div>
                <p className="text-white/30 text-xs mb-0.5">Client Relations (Poland)</p>
                <p className="text-white/60">Youssif Elmenshawy, Wrocław</p>
              </div>
              <div>
                <p className="text-white/30 text-xs mb-0.5">Operations (Poland)</p>
                <p className="text-white/60">Abdalla Elmenshawy, Łódź</p>
              </div>
              <div>
                <p className="text-white/30 text-xs mb-0.5">Production (Egypt)</p>
                <p className="text-white/60">Nouran Elmenshawy, Cairo</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Kemora. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <span>Cairo, Egypt · Wrocław &amp; Łódź, Poland</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
