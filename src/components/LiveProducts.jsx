import { motion } from 'framer-motion'
import { ArrowUpRight, Clapperboard, GraduationCap, Stethoscope, ClipboardList, Rocket } from 'lucide-react'

const liveProducts = [
  {
    icon: Clapperboard,
    name: 'AI Creator Adda',
    eyebrow: 'Applied research lab',
    badge: 'Next venture · WIP',
    badgeColor: 'bg-gold/15 text-brown-accent',
    headline: 'Spend your time on the story, not the busywork.',
    description:
      'AI Creator Adda gives directors and storytellers AI for scripting, analysis, and editing, so your attention stays on the film. When AI handles the mechanical work, and even the craft, deciding what to tell becomes the most important thing — taste, and the story you choose, is the part that stays yours.',
    tags: ['Film', 'Creative AI', 'Research Lab'],
    href: 'https://aicreatoradda.com/',
  },
  {
    icon: GraduationCap,
    name: 'AI College Buddy',
    eyebrow: 'The open classroom for CS',
    badge: 'Live',
    badgeColor: 'bg-green-100 text-green-700',
    headline: 'The open classroom for CS, hosted by your senior who passed.',
    description:
      'Every resource, every sprint, every roadmap — free, and chattable with AI in one click. No DMs, no paywalls.',
    tags: ['EdTech', 'Open Access', 'CS'],
    href: 'https://aicollegebuddy.com/',
  },
  {
    icon: Stethoscope,
    name: 'PresGenie',
    eyebrow: 'Clinical AI assistant',
    badge: 'Live',
    badgeColor: 'bg-green-100 text-green-700',
    headline: 'Streamline your prescription workflow with AI.',
    description:
      'The first doctor-focused AI assistant dedicated to prescription writing and clinical decision support.',
    tags: ['Healthcare', 'Clinical AI', 'SaaS'],
    href: 'https://presgenie.azurewebsites.net/',
  },
  {
    icon: ClipboardList,
    name: 'SurveyAgent',
    eyebrow: 'Open-source AI survey platform',
    badge: 'Live',
    badgeColor: 'bg-green-100 text-green-700',
    headline: 'Conversational interviews that adapt and probe deeper.',
    description:
      'An open-source AI survey platform — conversational interviews that adapt, probe deeper, and deliver rich insights at scale.',
    tags: ['Open Source', 'AI Surveys', 'Conversational'],
    href: 'https://getsurveyagent.com/',
  },
]

function LiveProducts() {
  return (
    <section id="live-products" className="py-20 sm:py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 mb-5">
            <Rocket className="w-3.5 h-3.5 text-gold" />
            <span className="text-xs uppercase tracking-wider text-gold font-medium">
              Shipped &amp; Running
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl">Current Live Products</h2>
          <p className="text-brown-muted text-lg mt-4 max-w-lg mx-auto">
            Products people can use right now — across film, education, healthcare, and research.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {liveProducts.map((product, index) => {
            const Icon = product.icon
            return (
              <motion.div
                key={product.name}
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
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-card rounded-xl border border-border p-6 sm:p-7 shadow-card hover:shadow-card-hover transition-shadow duration-300 h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${product.badgeColor}`}>
                        {product.badge}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-brown-muted/60 group-hover:text-brown-muted transition-colors" />
                    </div>
                  </div>

                  <p className="text-[10px] uppercase tracking-wider text-brown-muted/80 mb-1.5">
                    {product.eyebrow}
                  </p>
                  <h3 className="text-xl font-serif font-normal mb-2 text-brown">{product.name}</h3>
                  <p className="text-brown font-medium text-sm leading-relaxed mb-2">
                    {product.headline}
                  </p>
                  <p className="text-brown-muted text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-cream border border-border text-brown-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default LiveProducts
