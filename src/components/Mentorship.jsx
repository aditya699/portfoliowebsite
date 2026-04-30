import { motion } from 'framer-motion'
import { GraduationCap, Check, ArrowRight, Clock, Users } from 'lucide-react'

const perks = [
  'Work with me on real product projects, in real time',
  'One-on-one guidance — no cohorts, no recordings',
  'Build, ship, and learn AI the way it actually happens',
  'Direct access for questions, reviews, and decisions',
]

function Mentorship() {
  return (
    <section id="mentorship" className="py-20 sm:py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 mb-5">
            <GraduationCap className="w-3.5 h-3.5 text-gold" />
            <span className="text-xs uppercase tracking-wider text-gold font-medium">
              1:1 Mentorship
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-balance">
            Want to work and learn AI{' '}
            <span className="font-serif italic">with me</span>?
          </h2>
          <p className="text-brown-muted text-lg mt-4 max-w-2xl mx-auto">
            Join my one-on-one mentorship program. Work with me on product projects and
            real-time builds — whatever you want to ship as part of your AI journey.
          </p>
        </motion.div>

        <motion.div
          className="relative bg-card rounded-2xl border border-border shadow-card p-8 sm:p-10 ring-1 ring-gold/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-brown mb-5">
                What you get
              </h3>
              <ul className="space-y-3">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-gold" />
                    </span>
                    <span className="text-brown-muted leading-relaxed">{perk}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-cream/60 rounded-xl border border-border p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-gold" />
                </div>
                <p className="text-[10px] uppercase tracking-wider text-brown-muted/80">
                  One-on-One Program
                </p>
              </div>

              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-serif text-4xl sm:text-5xl text-brown">₹10,000</span>
              </div>
              <p className="text-brown-muted text-sm mb-5">All-inclusive program fee</p>

              <div className="flex items-center gap-2 text-sm text-brown-muted mb-6">
                <Clock className="w-4 h-4 text-gold" />
                <span>Duration: 1 month only</span>
              </div>

              <a
                href="https://www.instagram.com/your_data_scientist/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-brown-accent text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-brown-hover transition-colors"
              >
                DM on Instagram to apply
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-xs text-brown-muted/80 mt-3 text-center">
                Note: only for one month
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Mentorship
