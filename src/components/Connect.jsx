import { motion } from 'framer-motion'
import { Mail, Youtube, Linkedin } from 'lucide-react'

const socials = [
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:ab0358031@gmail.com',
    display: 'ab0358031@gmail.com',
  },
  {
    icon: Youtube,
    label: 'YouTube',
    href: 'https://www.youtube.com/channel/UCGKE__9Wmi0udQD5904NvCA',
  },
  {
    icon: null,
    label: 'Instagram',
    href: 'https://www.instagram.com/your_data_scientist/',
    customIcon: true,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/adityaabhatt/',
  },
]

function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function Connect() {
  return (
    <section id="connect" className="py-20 sm:py-28 px-4">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-balance">
          Let&rsquo;s build something{' '}
          <span className="font-serif italic">together</span>.
        </h2>
        <p className="text-brown-muted text-lg mt-4 sm:mt-6">
          I&rsquo;m always open to collaborating on AI products, research, or just geeking out about language models.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8 sm:mt-10">
          {socials.map((social) => {
            const Icon = social.customIcon ? InstagramIcon : social.icon
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border border-border text-brown-muted hover:text-brown px-5 py-2.5 rounded-full text-sm font-medium shadow-card hover:shadow-card-hover transition-all"
              >
                <Icon className="w-4 h-4" />
                {social.label}
              </a>
            )
          })}
        </div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="mailto:ab0358031@gmail.com"
            className="inline-flex items-center gap-2 bg-brown-accent text-white px-8 py-3.5 rounded-full text-base font-medium hover:bg-brown-hover transition-colors"
          >
            <Mail className="w-4 h-4" />
            ab0358031@gmail.com
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Connect
