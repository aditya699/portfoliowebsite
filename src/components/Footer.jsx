import { Sparkles } from 'lucide-react'

function Footer() {
  return (
    <footer className="border-t border-border py-10 sm:py-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center sm:justify-between gap-6 sm:gap-0">
        <a href="#" className="flex items-center gap-2 text-brown">
          <Sparkles className="w-5 h-5 text-gold" />
          <span className="font-serif text-lg">Aditya Bhatt</span>
        </a>

        <div className="flex items-center gap-6 text-sm text-brown-muted">
          <a href="#products" className="hover:text-brown transition-colors">Products</a>
          <a href="#research" className="hover:text-brown transition-colors">Research</a>
          <a href="#content" className="hover:text-brown transition-colors">Content</a>
          <a href="#connect" className="hover:text-brown transition-colors">Contact</a>
        </div>

        <p className="text-xs text-brown-muted">
          Made with <span className="text-red-400">&#10084;</span> in India
        </p>
      </div>

      <p className="text-center text-xs text-brown-muted/60 mt-8">
        &copy; {new Date().getFullYear()} Aditya Bhatt. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
