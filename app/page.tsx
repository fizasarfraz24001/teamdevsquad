import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import TeamMembers from '@/components/TeamMembers'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <TeamMembers />
      <Testimonials />
      <FAQ />
      <CTA />
      <ContactForm />
      <Footer />
    </main>
  )
}

