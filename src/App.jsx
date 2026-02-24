import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Experience from './components/Experience'
import Research from './components/Research'
import Content from './components/Content'
import Connect from './components/Connect'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Experience />
        <Research />
        <Content />
        <Connect />
      </main>
      <Footer />
    </div>
  )
}

export default App
