import { motion } from 'framer-motion'
import { FlaskConical, Cpu, Zap, TrendingDown } from 'lucide-react'

const researchAreas = [
  'Flash Attention',
  'RoPE',
  'Scaling Laws',
  'Mixture of Experts',
  'Indic Languages',
  'LLM Training',
  'Knowledge Distillation',
  'Continual Pretraining',
  'Financial Sentiment (BERT)',
  'Reinforcement Learning',
]

const researchProjects = [
  {
    icon: FlaskConical,
    title: 'EduMOE',
    badge: 'Active Research',
    description:
      'Building tools for training LLMs with Mixture of Experts architecture, focused on Indic language research. Validating techniques like Flash Attention, RoPE, and scaling laws through hands-on implementation and systematic experiments.',
  },
  {
    icon: TrendingDown,
    title: 'Scaling Laws Validation',
    badge: 'Completed',
    description:
      'Trained 5 transformer models (869K → 19M parameters) and achieved 92% perplexity reduction — confirming that larger models with adequate training improve generation quality. GPT-2 / MOE implementation trained a LLM with over 125M parameters from scratch.',
  },
  {
    icon: Zap,
    title: 'Financial Sentiment BERT',
    badge: 'Live on Hugging Face',
    description:
      'Fine-tuned a lightweight BERT model for financial sentiment analysis using synthetic data. Now live on Hugging Face for the community to use.',
  },
]

function Research() {
  return (
    <section id="research" className="py-20 sm:py-28 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl">AI Research</h2>
          <p className="text-brown-muted text-lg mt-4 max-w-lg mx-auto">
            I train language models from scratch to understand what makes them work — then write about it.
          </p>
        </motion.div>

        {/* Research projects */}
        <div className="space-y-6 mb-12">
          {researchProjects.map((project, idx) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.title}
                className="bg-card rounded-2xl border border-border p-8 sm:p-10 shadow-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-gold/15 text-brown-accent">
                    {project.badge}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif mb-3">{project.title}</h3>
                <p className="text-brown-muted text-base leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Research areas */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Cpu className="w-4 h-4 text-gold" />
            <span className="text-sm text-brown-muted font-medium">Research Areas</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {researchAreas.map((area, i) => (
              <motion.span
                key={area}
                className="px-5 py-2 rounded-full bg-white border border-border text-sm sm:text-base text-brown font-medium shadow-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.05,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                {area}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Research
