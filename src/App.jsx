import { useScrollReveal } from './hooks/useScrollReveal'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsStrip from './components/StatsStrip'
import About from './components/About'
import Founder from './components/Founder'
import Platform from './components/Platform'
import DecisionEngine from './components/DecisionEngine'
import HowItWorks from './components/HowItWorks'
import WhyWasteWise from './components/WhyWasteWise'
import MarketPricing from './components/MarketPricing'
import RequestPilot from './components/RequestPilot'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <About />
        <Founder />
        <Platform />
        <DecisionEngine />
        <HowItWorks />
        <WhyWasteWise />
        <MarketPricing />
        <RequestPilot />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
