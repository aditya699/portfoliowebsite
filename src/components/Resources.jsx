import { useRef, useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Youtube,
  FileText,
  BookOpen,
  Briefcase,
  Code2,
  Database,
  Brain,
  BarChart3,
  Server,
  Award,
  ListChecks,
  Sparkles,
  FolderOpen,
  FileCode,
  ExternalLink,
  Bot,
  Network,
  MessagesSquare,
  ScrollText,
  LineChart,
} from 'lucide-react'

const categories = [
  {
    title: 'Courses & Programs',
    items: [
      {
        icon: GraduationCap,
        title: 'AI Engineering — Free Course',
        source: 'YouTube · Playlist',
        description: 'End-to-end AI engineering fundamentals, all free.',
        href: 'https://www.youtube.com/playlist?list=PLSdiMs6f-QAc8Iq1kKJMP8kSYAEUONLgE',
      },
      {
        icon: Sparkles,
        title: 'AI Engineering Full Course',
        source: 'Udemy · Featured',
        description: 'My complete AI Engineering course on Udemy. Must-do.',
        href: 'https://www.udemy.com/course/ai-engineering/?instructorPreviewMode=guest&couponCode=SKILLS4SALEA',
        featured: true,
      },
      {
        icon: Briefcase,
        title: 'How to Be an AI PM',
        source: 'Drive · PDF',
        description: 'Practical guide to breaking into AI product management.',
        href: 'https://drive.google.com/file/d/11ck1JjeZMK0ioR278EMC6Wyy5El27ARD/view',
      },
    ],
  },
  {
    title: 'Project Tutorials',
    items: [
      {
        icon: LineChart,
        title: 'Data Analytics Project',
        source: 'YouTube · Tutorial',
        description: 'Walkthrough of a real-world data analytics build.',
        href: 'https://www.youtube.com/watch?v=E41JQb8qNEI',
      },
      {
        icon: MessagesSquare,
        title: 'GenAI Chatbot Project',
        source: 'YouTube · Tutorial',
        description: 'Build a production-style GenAI chatbot from scratch.',
        href: 'https://www.youtube.com/watch?v=iSh_USpOZP8',
      },
      {
        icon: Network,
        title: 'RAG Lecture',
        source: 'YouTube · Lecture',
        description: 'Retrieval-Augmented Generation explained end-to-end.',
        href: 'https://www.youtube.com/watch?v=NcCL1gJYyzw',
      },
      {
        icon: Bot,
        title: 'Industry-Ready GenAI',
        source: 'YouTube · Playlist',
        description: 'Build production-grade GenAI applications.',
        href: 'https://www.youtube.com/playlist?list=PLSdiMs6f-QAcGVpnZ1ougPScXkAuvqIU6',
      },
      {
        icon: BarChart3,
        title: 'Power BI End-to-End Project',
        source: 'YouTube · Tutorial',
        description: 'Complete Power BI dashboard build, ready for portfolio.',
        href: 'https://www.youtube.com/watch?v=IcU7qYBLu88&list=PLSdiMs6f-QAeOKeTIyMYKdUkFa_E4sIzx&index=2&t=2159s',
      },
    ],
  },
  {
    title: 'Topic Playlists',
    items: [
      {
        icon: Youtube,
        title: 'Data Science Project Ideas',
        source: 'YouTube · Playlist',
        description: 'A library of project ideas to build your portfolio.',
        href: 'https://www.youtube.com/playlist?list=PLSdiMs6f-QAcq0FIaqVz_kwX1qkaRv7_N',
      },
      {
        icon: Brain,
        title: 'Deep Learning Projects',
        source: 'YouTube · Playlist',
        description: 'Hands-on DL projects across domains.',
        href: 'https://www.youtube.com/playlist?list=PLSdiMs6f-QAfxa_HhxIJR_K6UaWIISYar',
      },
      {
        icon: Brain,
        title: 'PyTorch Playlist',
        source: 'YouTube · Playlist',
        description: 'Learn PyTorch from basics to advanced.',
        href: 'https://www.youtube.com/playlist?list=PLSdiMs6f-QAezDaYYhFAFu4ZXSeEegNHh',
      },
      {
        icon: BarChart3,
        title: 'Power BI Playlist',
        source: 'YouTube · Playlist',
        description: 'Complete Power BI tutorial series.',
        href: 'https://www.youtube.com/watch?v=Ba3xgVBZXCg&list=PLSdiMs6f-QAetJ2pAE3aizcHBdqaoCNRK&index=17',
      },
      {
        icon: Database,
        title: 'SQL Playlist',
        source: 'YouTube · Playlist',
        description: 'SQL from zero to job-ready.',
        href: 'https://www.youtube.com/watch?v=1F_ssBKZePU&list=PLSdiMs6f-QAdig5qfO_z68Tf4SyhviUh1',
      },
      {
        icon: Brain,
        title: 'NLP Playlist',
        source: 'YouTube · Playlist',
        description: 'Natural Language Processing concepts and projects.',
        href: 'https://www.youtube.com/playlist?list=PLSdiMs6f-QAdx_k-sjXEnhqq3ng-bAZIv',
      },
      {
        icon: Server,
        title: 'Flask Playlist',
        source: 'YouTube · Playlist',
        description: 'Build web apps and APIs with Flask.',
        href: 'https://www.youtube.com/playlist?list=PLSdiMs6f-QAe5nVYUZkw4ri_I0S7BrLdT',
      },
    ],
  },
  {
    title: 'Practice & Cheat Sheets',
    items: [
      {
        icon: Code2,
        title: 'Python Practice Sheet',
        source: 'Google Doc',
        description: 'Python practice problems for Data Science / Analytics.',
        href: 'https://docs.google.com/document/d/12dFCPtp9yPhwN-vXl2VyHPf5hz3IpmMzjYCE0YKXsLY/edit?tab=t.0',
      },
      {
        icon: Database,
        title: 'SQL Practice Sheet',
        source: 'Google Doc',
        description: 'SQL practice problems for Data Science / Analytics.',
        href: 'https://docs.google.com/document/d/1AhXjteVFwISUFlvvuKDn5tFoxJomkQGx/edit',
      },
      {
        icon: ScrollText,
        title: 'Free Cheat Sheets',
        source: 'Drive · Folder',
        description: 'Curated cheat sheets across DS, ML, and analytics.',
        href: 'https://drive.google.com/drive/folders/1AqljqYrrns_zdhpTZlukwRx6-N-L5VcN',
      },
    ],
  },
  {
    title: 'Books & Interview Prep',
    items: [
      {
        icon: BookOpen,
        title: 'AI Books',
        source: 'Drive · Folder',
        description: 'My recommended AI / ML book collection.',
        href: 'https://drive.google.com/drive/folders/1c2afEqY613bJvbU3cmzyhJwclCRBsDQ5',
      },
      {
        icon: FileCode,
        title: 'Interview Prep',
        source: 'Drive · PDF',
        description: 'Interview question bank for DS / AI roles.',
        href: 'https://drive.google.com/file/d/1LMLy71UnVeItScyMHJe1GmxOCtsPXANk/view',
      },
    ],
  },
  {
    title: 'Career',
    items: [
      {
        icon: FileText,
        title: 'Sample Resume',
        source: 'Drive · Folder',
        description: 'Reference resumes for AI / Data Science roles.',
        href: 'https://drive.google.com/drive/folders/1cjVgS-Gd-_Cgdvo6AIlnNmqu5Kg5xffX',
      },
      {
        icon: ListChecks,
        title: 'AI Project Ideas',
        source: 'LinkedIn · Profile',
        description: 'Project ideas pulled from my live LinkedIn portfolio.',
        href: 'https://www.linkedin.com/in/adityaabhatt/details/projects/',
      },
      {
        icon: Award,
        title: 'Certifications to Do',
        source: 'LinkedIn · Profile',
        description: 'The certifications I recommend, with links.',
        href: 'https://www.linkedin.com/in/adityaabhatt/details/certifications/',
      },
    ],
  },
]

function ResourceCard({ item, index, categoryIndex }) {
  const Icon = item.icon
  return (
    <motion.a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative bg-card rounded-xl border border-border p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 block w-72 sm:w-80 shrink-0 snap-start cursor-pointer ${
        item.featured ? 'ring-1 ring-gold/40' : ''
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.45,
        ease: [0.25, 0.1, 0.25, 1],
        delay: categoryIndex * 0.08 + index * 0.05,
      }}
      whileHover={{ scale: 1.02 }}
    >
      {item.featured && (
        <span className="absolute top-4 right-4 text-[10px] uppercase tracking-wider font-medium text-gold bg-gold/10 px-2 py-0.5 rounded-full">
          Featured
        </span>
      )}
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-gold" />
        </div>
        {!item.featured && (
          <ExternalLink className="w-4 h-4 text-brown-muted/50 group-hover:text-brown-muted transition-colors" />
        )}
      </div>
      <p className="text-[10px] uppercase tracking-wider text-brown-muted/80 mb-1.5">
        {item.source}
      </p>
      <h4 className="text-lg font-serif font-normal mb-2 leading-snug text-brown">
        {item.title}
      </h4>
      <p className="text-brown-muted text-sm leading-relaxed">{item.description}</p>
    </motion.a>
  )
}

function ResourceRail({ category, categoryIndex }) {
  const scrollerRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const updateEdges = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }, [])

  useEffect(() => {
    updateEdges()
    const el = scrollerRef.current
    if (!el) return
    el.addEventListener('scroll', updateEdges, { passive: true })
    window.addEventListener('resize', updateEdges)
    return () => {
      el.removeEventListener('scroll', updateEdges)
      window.removeEventListener('resize', updateEdges)
    }
  }, [updateEdges])

  const scrollByAmount = (dir) => {
    const el = scrollerRef.current
    if (!el) return
    const amount = Math.max(el.clientWidth * 0.85, 280)
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <motion.div
      className="mb-12 sm:mb-14 last:mb-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="flex items-baseline justify-between mb-5 px-1">
        <h3 className="text-xl sm:text-2xl font-serif font-normal text-brown">
          {category.title}
        </h3>
        <span className="text-xs text-brown-muted/70">
          {category.items.length} {category.items.length === 1 ? 'item' : 'items'}
        </span>
      </div>
      <div className="relative group/rail">
        {/* Left fade mask */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute left-0 top-0 bottom-4 w-16 sm:w-20 z-10 bg-gradient-to-r from-cream via-cream/90 to-transparent transition-opacity duration-200 ${
            canScrollLeft ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* Right fade mask */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute right-0 top-0 bottom-4 w-16 sm:w-20 z-10 bg-gradient-to-l from-cream via-cream/90 to-transparent transition-opacity duration-200 ${
            canScrollRight ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* Left arrow */}
        <button
          type="button"
          aria-label={`Scroll ${category.title} left`}
          onClick={() => scrollByAmount(-1)}
          className={`hidden sm:flex absolute left-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-border shadow-card hover:shadow-card-hover items-center justify-center text-brown transition-all duration-200 ${
            canScrollLeft
              ? 'opacity-0 group-hover/rail:opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        {/* Right arrow */}
        <button
          type="button"
          aria-label={`Scroll ${category.title} right`}
          onClick={() => scrollByAmount(1)}
          className={`hidden sm:flex absolute right-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-border shadow-card hover:shadow-card-hover items-center justify-center text-brown transition-all duration-200 ${
            canScrollRight
              ? 'opacity-0 group-hover/rail:opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
        <div
          ref={scrollerRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {category.items.map((item, i) => (
            <ResourceCard
              key={item.title}
              item={item}
              index={i}
              categoryIndex={categoryIndex}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function Resources() {
  return (
    <section id="resources" className="py-20 sm:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 mb-5">
            <FolderOpen className="w-3.5 h-3.5 text-gold" />
            <span className="text-xs uppercase tracking-wider text-gold font-medium">
              Resource Hub
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl">Everything You Need to Learn</h2>
          <p className="text-brown-muted text-lg mt-4 max-w-xl mx-auto">
            Courses, project walkthroughs, cheat sheets, and career assets — curated for AI,
            Data Science, and Analytics. Browse the rails below.
          </p>
        </motion.div>

        {categories.map((cat, ci) => (
          <ResourceRail key={cat.title} category={cat} categoryIndex={ci} />
        ))}
      </div>
    </section>
  )
}

export default Resources
