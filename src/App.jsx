import StickyNav from './components/StickyNav.jsx'
import Hero from './components/Hero.jsx'
import PracticeAreaGrid from './components/PracticeAreaGrid.jsx'
import AttorneySpotlight from './components/AttorneySpotlight.jsx'
import Testimonial from './components/Testimonial.jsx'
import CTABand from './components/CTABand.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <StickyNav />
      <Hero />
      <PracticeAreaGrid />
      <AttorneySpotlight />
      <Testimonial />
      <CTABand />
      <Footer />
    </div>
  )
}
