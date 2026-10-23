import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Gallery from './components/Gallery.jsx'
import Pricing from './components/Pricing.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Gallery />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
