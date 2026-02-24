import { motion } from 'framer-motion'
import { Youtube, BookOpen, GraduationCap, PenTool, FolderOpen, Instagram } from 'lucide-react'

const contentItems = [
  {
    icon: Youtube,
    title: 'YouTube',
    description: 'Transformer architectures, production deployment, and modern AI techniques.',
    href: 'https://www.youtube.com/channel/UCGKE__9Wmi0udQD5904NvCA',
  },
  {
    icon: GraduationCap,
    title: 'Free AI Course',
    description: 'Complete playlist covering AI engineering fundamentals — from scratch.',
    href: 'https://www.youtube.com/playlist?list=PLSdiMs6f-QAc8Iq1kKJMP8kSYAEUONLgE',
  },
  {
    icon: BookOpen,
    title: 'Udemy Course',
    description: 'Comprehensive AI Engineering course with hands-on projects.',
    href: 'https://www.udemy.com/course/ai-engineering/',
  },
  {
    icon: PenTool,
    title: 'Blog',
    description: 'Technical writing on scaling laws, distillation, Flash Attention, and more.',
    href: 'https://aiwithaditya.odoo.com/blog',
  },
  {
    icon: FolderOpen,
    title: 'Free Resources',
    description: 'Cheat sheets, practice sheets, interview prep, and mentorship sessions.',
    href: 'https://aiwithaditya.odoo.com/resources',
  },
  {
    icon: Instagram,
    title: '@your_data_scientist',
    description: 'AI content, research breakdowns, and behind-the-scenes of building products.',
    href: 'https://www.instagram.com/your_data_scientist/',
  },
]

function Content() {
  return (
    <section id="content" className="py-20 sm:py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl">Learn With Me</h2>
          <p className="text-brown-muted text-lg mt-4 max-w-lg mx-auto">
            I create educational content bridging AI research and engineering. Thousands of learners, all free.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {contentItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-xl border border-border p-6 sm:p-7 shadow-card hover:shadow-card-hover transition-shadow duration-300 block"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: index * 0.1,
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-lg font-serif font-normal mb-2">{item.title}</h3>
                <p className="text-brown-muted text-sm leading-relaxed">{item.description}</p>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Content
