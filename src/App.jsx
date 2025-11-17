import Navbar from './components/Navbar'
import FeaturedCarousel from './components/FeaturedCarousel'
import ModelShowcase from './components/ModelShowcase'
import Features from './components/Features'
import Collection from './components/Collection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <FeaturedCarousel />
        <ModelShowcase />
        <Collection />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

export default App
