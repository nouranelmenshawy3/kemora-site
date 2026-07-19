import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhyKemora from '@/components/WhyKemora'
import WhatWeProduce from '@/components/WhatWeProduce'
import SampleWork from '@/components/SampleWork'
import OurProcess from '@/components/OurProcess'
import AboutUs from '@/components/AboutUs'
import TrustCompliance from '@/components/TrustCompliance'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'
import SeoJsonLd from '@/components/SeoJsonLd'

export default function HomePage() {
  return (
    <>
      <SeoJsonLd />
      <Navbar />
      <main>
        <Hero />
        <WhyKemora />
        <WhatWeProduce />
        <SampleWork />
        <OurProcess />
        <AboutUs />
        <TrustCompliance />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
