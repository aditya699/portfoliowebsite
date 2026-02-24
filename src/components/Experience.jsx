import { motion } from 'framer-motion'
import { Building2, Server, Bot, BarChart3, Shield, Trophy, Briefcase, Users } from 'lucide-react'

const roles = [
  {
    company: 'McCormick & Company',
    role: 'Associate Data Scientist',
    period: 'Jun 2024 – Present',
    icon: Building2,
    featured: true,
    description:
      'Building production AI systems serving 13,000+ employees — RAG chatbots, multi-agent workflows, MCP server architecture, and data quality agents on Azure OpenAI.',
    highlights: [
      { icon: Bot, text: 'RAG chatbots with streaming & dual-LLM architecture' },
      { icon: Server, text: 'MCP server unifying 5 enterprise services into one AI interface' },
      { icon: BarChart3, text: 'AUTO_RAG: 2-week RAG deployment → 2 hours' },
      { icon: Shield, text: 'Data Quality Agent with self-healing code execution' },
    ],
    awards: [
      'Impact Award Q3 2025 for AI Initiatives',
      '15+ Bravo Awards for GenAI & Agentic AI',
      'Led AI training sessions for 200+ employees',
    ],
    tech: ['Azure OpenAI', 'FastAPI', 'MongoDB', 'LangChain', 'GPT-5', 'Docker'],
  },
  {
    company: 'McCormick & Company',
    role: 'Supply Chain Analyst / Junior Data Scientist',
    period: 'Apr 2024 – Jun 2024',
    icon: Building2,
    featured: false,
    description:
      'Built ETL pipelines on Azure Synapse, saved $15K through AI-powered translation, and developed an LLM classification system that reduced manual labeling by 80%.',
    highlights: [],
    awards: [],
    tech: ['Azure Synapse', 'GPT-4', 'Gemini', 'Power BI', 'LangChain'],
  },
  {
    company: 'Neenopal',
    role: 'Business Analyst',
    period: 'Jul 2022 – Apr 2024',
    icon: Briefcase,
    featured: false,
    description:
      'Global management consulting — built Power BI dashboards for logistics, finance, and SaaS clients. Created sales plug-and-play models with AI forecasting (Prophet) and orchestrated marketing analytics across Facebook, LinkedIn, Google Ads, and GA4.',
    highlights: [],
    awards: ['Employee of the Quarter Q2 2023', 'Special Mention Q4 2023'],
    tech: ['Power BI', 'BigQuery', 'Tableau', 'Python', 'SQL', 'Power Apps'],
  },
]

function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl">Where I&rsquo;ve Worked</h2>
        </motion.div>

        <div className="space-y-6">
          {roles.map((job, idx) => {
            const JobIcon = job.icon
            return (
              <motion.div
                key={`${job.company}-${job.role}`}
                className={`bg-card rounded-2xl border border-border shadow-card ${
                  job.featured ? 'p-8 sm:p-10' : 'p-6 sm:p-8'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="flex items-start sm:items-center justify-between flex-col sm:flex-row gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`${job.featured ? 'w-12 h-12' : 'w-10 h-10'} rounded-xl bg-gold/15 flex items-center justify-center`}>
                      <JobIcon className={`${job.featured ? 'w-6 h-6' : 'w-5 h-5'} text-gold`} />
                    </div>
                    <div>
                      <h3 className={`${job.featured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'} font-serif`}>
                        {job.company}
                      </h3>
                      <p className="text-brown-muted text-sm">{job.role}</p>
                    </div>
                  </div>
                  <span className="text-xs text-brown-muted bg-cream border border-border px-3 py-1 rounded-full">
                    {job.period}
                  </span>
                </div>

                <p className="text-brown-muted text-base leading-relaxed mt-2">
                  {job.description}
                </p>

                {job.highlights.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                    {job.highlights.map((item) => {
                      const Icon = item.icon
                      return (
                        <div key={item.text} className="flex items-center gap-3 text-sm text-brown">
                          <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-4 h-4 text-gold" />
                          </div>
                          {item.text}
                        </div>
                      )
                    })}
                  </div>
                )}

                {job.awards.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2 mt-5">
                    <Trophy className="w-3.5 h-3.5 text-gold" />
                    {job.awards.map((award) => (
                      <span
                        key={award}
                        className="text-xs px-2.5 py-1 rounded-full bg-gold/10 text-brown-accent font-medium"
                      >
                        {award}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-border">
                  {job.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1.5 rounded-full bg-cream border border-border text-brown-muted font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience
