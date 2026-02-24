import { motion } from 'framer-motion'
import { GraduationCap, Award, Mic, Trophy, Flame } from 'lucide-react'

const highlights = [
  { icon: GraduationCap, value: 'IIIT Hyderabad', label: 'PG Diploma in Software Engineering' },
  { icon: Award, value: '9.14 CGPA', label: 'BSc Statistics, Delhi University' },
  { icon: Trophy, value: 'Impact Award', label: 'McCormick Q3 2025 · 15+ Bravo Awards' },
  { icon: Mic, value: 'IIT Patna Talk', label: 'Speaker · Career in Data Science using AI' },
]

const certifications = ['DP-100 Azure Data Scientist', 'DP-203 Azure Data Engineer', 'PL-900 Power Platform']

function About() {
  return (
    <section id="about" className="py-20 sm:py-28 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl">Who I Am</h2>
        </motion.div>

        {/* Philosophy card */}
        <motion.div
          className="bg-card rounded-2xl border border-border p-8 sm:p-10 shadow-card mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
              <Flame className="w-5 h-5 text-gold" />
            </div>
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-gold/15 text-brown-accent">
              Curious Learner
            </span>
          </div>

          <p className="text-brown text-base sm:text-lg leading-relaxed">
            I&rsquo;m a statistics graduate turned AI engineer who&rsquo;d rather build something that doesn&rsquo;t work yet than play it safe with something that already does.
            I started with Power BI dashboards and SQL, got curious about what sits underneath the data, and fell down the rabbit hole of language models, agents, and training neural networks from scratch.
          </p>
          <p className="text-brown-muted text-base sm:text-lg leading-relaxed mt-4">
            That curiosity took me from building chatbots at a consulting firm to shipping production AI systems at McCormick, from self-funding research into Indic-language LLMs to launching PresGenie for doctors.
            I gave talks at IIT Patna and Delhi University, won a hackathon at IIIT Hyderabad, made it to the Top 5 at the Google Gemini Hackathon, and built a chatbot that got 7,200 requests in its first week.
          </p>
          <p className="text-brown-muted text-base sm:text-lg leading-relaxed mt-4">
            The thread through all of it? I&rsquo;m willing to be bad at something new long enough to become good at it. That&rsquo;s the whole philosophy.
          </p>
        </motion.div>

        {/* Highlights grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 mb-10">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                className="bg-card rounded-xl border border-border p-5 text-center shadow-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-4 h-4 text-gold" />
                </div>
                <p className="font-serif text-base sm:text-lg text-brown leading-tight">{item.value}</p>
                <p className="text-brown-muted text-xs mt-1 leading-tight">{item.label}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Certifications */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="text-xs text-brown-muted font-medium mr-1">Microsoft Certified:</span>
          {certifications.map((cert) => (
            <span
              key={cert}
              className="text-xs px-3 py-1.5 rounded-full bg-white border border-border text-brown-muted"
            >
              {cert}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
