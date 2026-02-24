import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Research', href: '#research' },
  { label: 'Content', href: '#content' },
  { label: 'Blog', href: 'https://aiwithaditya.odoo.com/blog', external: true },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div
        className={`max-w-4xl mx-auto mt-3 sm:mt-4 flex items-center justify-between rounded-full border border-border px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 shadow-nav ${
          scrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <a href="#" className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-gold" />
          <span className="font-serif text-lg text-brown">Aditya Bhatt</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="text-sm text-brown-muted hover:text-brown transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#connect"
          className="inline-flex items-center gap-1.5 bg-brown-accent text-white text-sm font-medium px-4 sm:px-5 py-2 rounded-full hover:bg-brown-hover transition-colors"
        >
          <span className="hidden sm:inline">Let's Talk</span>
          <span className="sm:hidden">Contact</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.nav>
  )
}

export default Navbar
