import { motion } from 'framer-motion'
import { ArrowUpRight, Stethoscope, Headphones, Video, Brain, FileText, MessageCircle, LayoutDashboard, Shield } from 'lucide-react'

const products = [
  {
    icon: Stethoscope,
    name: 'PresGenie',
    tagline: 'AI prescription writing platform for doctors.',
    status: 'Live',
    statusColor: 'bg-green-100 text-green-700',
    tags: ['Healthcare', 'AI', 'SaaS'],
    href: 'https://www.presgenie.in/',
  },
  {
    icon: Headphones,
    name: 'SunoSekho',
    tagline: 'AI audio learning in 12 Indian languages — summaries, stories, podcasts, and debates.',
    status: 'Coming Soon',
    statusColor: 'bg-gold/15 text-brown-accent',
    tags: ['EdTech', 'Audio AI', 'Indic Languages'],
    href: 'https://sunosekho.com',
  },
  {
    icon: FileText,
    name: 'Scribe AI',
    tagline: 'Real-time medical transcription — doctors speak, AI writes clinical notes.',
    status: 'Project',
    statusColor: 'bg-brown-accent/10 text-brown-muted',
    tags: ['HealthTech', 'Speech-to-Text', 'NLP'],
    href: null,
  },
  {
    icon: Video,
    name: 'NCERTVideoGen',
    tagline: 'Turn NCERT textbook chapters into AI-generated educational videos.',
    status: 'Project',
    statusColor: 'bg-brown-accent/10 text-brown-muted',
    tags: ['EdTech', 'Video AI', 'Generative'],
    href: null,
  },
  {
    icon: Brain,
    name: 'Deep Analysis Agent',
    tagline: 'Queue-driven multi-agent system that processes CSV data, extracts KPIs, generates visualizations, and delivers executive-level insights.',
    status: 'Project',
    statusColor: 'bg-brown-accent/10 text-brown-muted',
    tags: ['Agents', 'RAG', 'Multi-LLM'],
    href: null,
  },
  {
    icon: MessageCircle,
    name: 'SAIBABA-GPT',
    tagline: 'Conversational chatbot that received 7,200+ requests in its first week — helping people find comfort through AI.',
    status: 'Shipped',
    statusColor: 'bg-purple-100 text-purple-700',
    tags: ['Chatbot', 'LangChain', 'Viral'],
    href: null,
  },
  {
    icon: Shield,
    name: 'Gemma Kavach',
    tagline: 'AI crowd safety system using Gemma 3n multimodal processing — stampede prevention through real-time analysis and Hindi voice commands.',
    status: 'Project',
    statusColor: 'bg-brown-accent/10 text-brown-muted',
    tags: ['Safety', 'Multimodal', 'Edge AI'],
    href: null,
  },
  {
    icon: LayoutDashboard,
    name: 'AUTO-DASH',
    tagline: 'Open-source tool to create internal dashboards (like Power BI) in seconds, not days.',
    status: 'Building',
    statusColor: 'bg-blue-100 text-blue-700',
    tags: ['Open Source', 'Analytics', 'GenAI'],
    href: null,
  },
]

function Products() {
  return (
    <section id="products" className="py-20 sm:py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl">Things I&rsquo;m Building</h2>
          <p className="text-brown-muted text-lg mt-4 max-w-lg mx-auto">
            Products focused on healthcare, education, and making AI useful for real people.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {products.map((product, index) => {
            const Icon = product.icon
            const Wrapper = product.href ? 'a' : 'div'
            const wrapperProps = product.href
              ? { href: product.href, target: '_blank', rel: 'noopener noreferrer' }
              : {}

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
                <Wrapper
                  {...wrapperProps}
                  className="block bg-card rounded-xl border border-border p-6 sm:p-7 shadow-card hover:shadow-card-hover transition-shadow duration-300 h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${product.statusColor}`}>
                        {product.status}
                      </span>
                      {product.href && <ArrowUpRight className="w-4 h-4 text-brown-muted" />}
                    </div>
                  </div>

                  <h3 className="text-xl font-serif font-normal mb-2">{product.name}</h3>
                  <p className="text-brown-muted text-sm leading-relaxed mb-4">{product.tagline}</p>

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
                </Wrapper>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Products
