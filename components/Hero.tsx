export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary texture-dark">
      {/* Gradient depth layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#162232] to-primary opacity-90" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)' }} />

      {/* Accent vertical line – decorative */}
      <div className="absolute left-0 top-1/4 h-1/2 w-px bg-gradient-to-b from-transparent via-accent/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="hero-enter inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 text-white/65 text-sm font-medium mb-8 tracking-wide">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse-slow" />
          Egypt &rarr; European Union &nbsp;·&nbsp; Free Trade Agreement
        </div>

        {/* H1 */}
        <h1 className="hero-enter-delay-1 text-4xl sm:text-5xl md:text-[3.5rem] font-bold text-white tracking-tight leading-[1.15] mb-5">
          Egyptian Clothing Manufacturing
          <br />
          <span className="text-accent">for European Brands</span>
        </h1>

        {/* Sub-headline */}
        <p className="hero-enter-delay-2 text-base sm:text-lg text-white/65 font-medium tracking-wide mb-3">
          Private Label &nbsp;·&nbsp; 0% EU Duty &nbsp;·&nbsp; 14-Day Delivery to Poland
        </p>
        <p className="hero-enter-delay-2 text-sm sm:text-base text-white/45 max-w-xl mx-auto mb-10">
          Quality garments from Cairo, managed from Wrocław. A family business built on
          transparency, speed, and European service standards.
        </p>

        {/* CTAs */}
        <div className="hero-enter-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-md transition-all duration-200 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5"
          >
            Request a Sample
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a
            href="#why"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white/75 hover:text-white hover:border-white/40 font-medium rounded-md transition-all duration-200"
          >
            Learn More
          </a>
        </div>

        {/* Key stats strip */}
        <div className="hero-enter-delay-3 mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto border-t border-white/10 pt-10">
          {[
            { value: '5,000+', label: 'Pieces / Day' },
            { value: '14', label: 'Days to Poland' },
            { value: '0%', label: 'EU Import Duty' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">{value}</div>
              <div className="text-xs text-white/45 font-medium mt-0.5 tracking-wide">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/30 text-[10px] font-semibold tracking-[0.2em] uppercase">Scroll</span>
        <div className="scroll-bounce">
          <svg className="w-5 h-5 text-white/25" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
