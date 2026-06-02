import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Hero from './sections/Hero'
import ProductCategories from './sections/ProductCategories'
import About from './sections/About'
import Contact from './sections/Contact'
import { useDarkMode } from './hooks/useDarkMode'
import { useScrollReveal } from './hooks/useScrollReveal'

function App() {
  const { isDark, toggle } = useDarkMode()
  useScrollReveal()

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Navbar isDark={isDark} toggleDark={toggle} />
      <main>
        <Hero />
        <ProductCategories />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
