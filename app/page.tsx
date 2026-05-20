import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhyKemora from '@/components/WhyKemora'
import WhatWeProduce from '@/components/WhatWeProduce'
import OurProcess from '@/components/OurProcess'
import AboutUs from '@/components/AboutUs'
import TrustCompliance from '@/components/TrustCompliance'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyKemora />
        <WhatWeProduce />
        <OurProcess />
        <AboutUs />
        <TrustCompliance />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
