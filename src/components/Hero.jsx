import { motion } from 'framer-motion'
import { ArrowRight, BookOpen } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

function Hero() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 px-4 overflow-hidden">
      {/* Floating decorative dots */}
      <div className="absolute top-24 left-[8%] w-3 h-3 rounded-full bg-gold/20 animate-float hidden sm:block" />
      <div className="absolute top-44 right-[6%] w-2 h-2 rounded-full bg-gold/30 animate-float-delayed" />
      <div className="absolute top-60 left-[15%] w-2.5 h-2.5 rounded-full bg-gold/15 animate-float-slow hidden md:block" />
      <div className="absolute bottom-20 right-[12%] w-2 h-2 rounded-full bg-gold/25 animate-float hidden lg:block" />
      <div className="absolute bottom-32 left-[5%] w-3.5 h-3.5 rounded-full bg-gold/10 animate-float-delayed hidden sm:block" />

      <motion.div
        className="max-w-3xl mx-auto text-center relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Pill badge */}
        <motion.span
          className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 text-sm text-brown-muted border border-border shadow-card"
          variants={itemVariants}
        >
          AI Engineer & Builder
        </motion.span>

        {/* Main quote */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mt-6 sm:mt-8 text-balance"
          variants={itemVariants}
        >
          &ldquo;My willingness to{' '}
          <span className="relative inline-block">
            fail
            <svg
              className="absolute -bottom-1 sm:-bottom-2 left-0 w-full"
              viewBox="0 0 200 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0 4C25 0 50 8 75 4C100 0 125 8 150 4C175 0 200 8 200 4"
                stroke="#C4956A"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </span>{' '}
          gives me the ability to succeed.&rdquo;
        </motion.h1>

        {/* Attribution */}
        <motion.p
          className="text-sm text-brown-muted mt-3"
          variants={itemVariants}
        >
          &mdash; Vinod Khosla
        </motion.p>

        {/* Subtitle */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-brown-muted mt-6 sm:mt-8 max-w-xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          I&rsquo;m Aditya Bhatt. I build AI products, train language models, and ship enterprise systems &mdash; from India.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          variants={itemVariants}
        >
          <a
            href="#products"
            className="inline-flex items-center gap-2 bg-brown-accent text-white px-8 py-3.5 rounded-full text-base sm:text-lg font-medium hover:bg-brown-hover transition-colors"
          >
            See My Work
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="https://aiwithaditya.odoo.com/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border border-border text-brown px-8 py-3.5 rounded-full text-base sm:text-lg font-medium hover:shadow-card-hover transition-all"
          >
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
            Read My Blog
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
