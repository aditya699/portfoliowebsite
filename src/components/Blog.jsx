import { motion } from 'framer-motion'
import {
  MessageSquare,
  BarChart3,
  Mic,
  Brain,
  Users,
  Webhook,
  ArrowUpRight,
  GitBranch,
  Server,
  Sparkles,
} from 'lucide-react'

const features = [
  {
    icon: MessageSquare,
    title: 'Conversations, Not Checkboxes',
    description:
      'Respondents talk naturally. The AI knows when to probe deeper, when to move on, and when to wrap up — like a trained researcher.',
  },
  {
    icon: Mic,
    title: 'Text, Voice & Video',
    description:
      'Chat in the browser, speak with real-time transcription and TTS streaming, or talk to a video avatar (coming soon).',
  },
  {
    icon: Brain,
    title: 'Bring Your Own LLM',
    description:
      'OpenAI, Anthropic, or Gemini. Pluggable provider architecture — each survey can use a different model. Your keys, your choice.',
  },
  {
    icon: BarChart3,
    title: 'Analytics That Write Themselves',
    description:
      'Per-interview scoring, sentiment detection, theme identification. Aggregate reports synthesize all interviews into actionable insight.',
  },
  {
    icon: Users,
    title: 'Built for Teams',
    description:
      'Organizations, role-based access, teams with survey visibility controls. Email invites with OTP verification baked in.',
  },
  {
    icon: Webhook,
    title: 'Webhooks & Notifications',
    description:
      'POST results to Slack, Zapier, or anywhere. Thank-you emails, creator alerts, and abandoned interview detection included.',
  },
]

const techStack = [
  'Python 3.12+',
  'FastAPI',
  'React 19',
  'MongoDB',
  'Docker',
  'Tailwind CSS',
  'Framer Motion',
  'Streaming SSE',
]

function Blog() {
  return (
    <section id="blog" className="py-20 sm:py-28 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium px-4 py-1.5 rounded-full bg-green-100 text-green-700 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Open Source &middot; MIT Licensed
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl">
            Stop Sending Static Forms
          </h2>
          <p className="text-brown-muted text-lg mt-4 max-w-2xl mx-auto">
            SurveyAgent interviews your users for you. Every respondent gets a 1-on-1 conversation with an AI that listens, adapts, and digs deeper — like a real researcher, but at infinite scale.
          </p>
        </motion.div>

        {/* The problem card */}
        <motion.div
          className="bg-card rounded-2xl border border-border p-8 sm:p-10 shadow-card mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-gold" />
            </div>
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-gold/15 text-brown-accent">
              The Problem
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif mb-4">
            The gap nobody talks about
          </h3>
          <p className="text-brown-muted text-base leading-relaxed mb-6">
            Surveys scale but miss nuance. Interviews capture depth but don't scale. You've always had to pick one.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl bg-cream border border-border p-5">
              <p className="text-sm font-medium text-brown mb-1">Google Forms</p>
              <p className="text-sm text-brown-muted">"Rate your experience 1-5"</p>
            </div>
            <div className="rounded-xl bg-brown-accent/5 border border-gold/20 p-5">
              <p className="text-sm font-medium text-brown mb-1">SurveyAgent</p>
              <p className="text-sm text-brown-muted">
                "Tell me more about the onboarding issues you mentioned."
              </p>
            </div>
          </div>
          <p className="text-brown-muted text-sm mt-5">
            That's the difference between data and insight.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                className="bg-card rounded-xl border border-border p-6 sm:p-7 shadow-card hover:shadow-card-hover transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: index * 0.08,
                }}
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-lg font-serif mb-2">{feature.title}</h3>
                <p className="text-brown-muted text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Self-host + open source card */}
        <motion.div
          className="bg-card rounded-2xl border border-border p-8 sm:p-10 shadow-card mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
              <Server className="w-5 h-5 text-gold" />
            </div>
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-gold/15 text-brown-accent">
              Self-Hostable
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif mb-3">
            Your data never leaves your infrastructure
          </h3>
          <p className="text-brown-muted text-base leading-relaxed mb-6">
            MIT licensed. No telemetry. No vendor lock-in. Single Docker container — backend API, frontend SPA, and Gunicorn workers. Production-ready in two minutes.
          </p>
          <div className="bg-brown-accent rounded-xl p-5 font-mono text-sm text-cream/90 overflow-x-auto">
            <span className="text-gold/70 select-none">$ </span>docker compose up -d
          </div>
        </motion.div>

        {/* Tech stack pills */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex items-center justify-center gap-2 mb-5">
            <GitBranch className="w-4 h-4 text-gold" />
            <span className="text-sm text-brown-muted font-medium">Tech Stack</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
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
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <a
            href="https://getsurveyagent.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-brown-accent text-white rounded-full text-sm font-medium hover:bg-brown-hover transition-colors"
          >
            Try It Live
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/aditya699/surveyagent"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white border border-border rounded-full text-sm font-medium text-brown hover:shadow-card-hover transition-all"
          >
            <GitBranch className="w-4 h-4" />
            View on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
