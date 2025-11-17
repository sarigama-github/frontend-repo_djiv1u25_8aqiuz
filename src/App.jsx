import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Collection from './components/Collection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <Collection />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

export default App
