import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import LiveProducts from './components/LiveProducts'
import Products from './components/Products'
import Experience from './components/Experience'
import Research from './components/Research'
import Blog from './components/Blog'
import Content from './components/Content'
import Resources from './components/Resources'
import Mentorship from './components/Mentorship'
import Connect from './components/Connect'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <LiveProducts />
        <Products />
        <Experience />
        <Research />
        <Blog />
        <Content />
        <Resources />
        <Mentorship />
        <Connect />
      </main>
      <Footer />
    </div>
  )
}

export default App
