'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Server, Brain, Layout, Cloud, Sparkles } from 'lucide-react'

const categoryIcons = {
  Languages: Code,
  Backend: Server,
  'AI Systems': Brain,
  Frontend: Layout,
  'Infrastructure & Tools': Cloud,
}

export default function SkillsContent() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'Java', 'TypeScript', 'Dart', 'JavaScript', 'C/C++', 'HTML/CSS'],
      accent: 'from-amber-500/20 to-orange-600/20',
      borderGlow: 'rgba(251, 191, 36, 0.15)',
    },
    {
      title: 'Backend',
      skills: ['FastAPI', 'REST APIs', 'System Architecture', 'SQL', 'MySQL', 'Node.js', 'Database Design', 'Distributed Systems', 'Microservices'],
      accent: 'from-emerald-500/20 to-teal-600/20',
      borderGlow: 'rgba(16, 185, 129, 0.15)',
    },
    {
      title: 'AI Systems',
      skills: [
        'Computer Vision',
        'Generative AI',
        'RAG Pipelines',
        'Vector Databases',
        'NLP',
        'Machine Learning',
        'TensorFlow',
        'Scikit-learn',
        'Pandas',
        'NumPy',
      ],
      accent: 'from-violet-500/20 to-purple-600/20',
      borderGlow: 'rgba(139, 92, 246, 0.15)',
    },
    {
      title: 'Frontend',
      skills: ['Flutter', 'React', 'Next.js', 'React Native', 'Tailwind CSS', 'Framer Motion', 'UI/UX Design', 'Responsive Design'],
      accent: 'from-cyan-500/20 to-blue-600/20',
      borderGlow: 'rgba(6, 182, 212, 0.15)',
    },
    {
      title: 'Infrastructure & Tools',
      skills: ['AWS', 'Firebase', 'Supabase', 'Cloudflare', 'Git', 'Jira', 'VS Code', 'Xcode', 'Android Studio', 'Cloud Services'],
      accent: 'from-rose-500/20 to-pink-600/20',
      borderGlow: 'rgba(244, 63, 94, 0.15)',
    },
  ]

  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <motion.div
      className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: 'var(--page-bg)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
            style={{
              borderColor: 'rgba(255, 255, 255, 0.12)',
              backgroundColor: 'var(--card-bg)',
            }}
          >
            <Sparkles className="w-4 h-4 text-amber-400/80" />
            <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Technical expertise</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Skills
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            A blend of languages, systems, and tools that power full-stack and AI-driven work
          </motion.p>
        </motion.div>

        {/* Skills grid — cards with icons and recruiter-readable lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillCategories.map((category, index) => {
            const categoryRef = useRef(null)
            const categoryInView = useInView(categoryRef, { once: true, margin: '-40px' })
            const Icon = categoryIcons[category.title] || Code

            return (
              <motion.div
                key={category.title}
                ref={categoryRef}
                initial={{ opacity: 0, y: 24 }}
                animate={categoryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl p-6 overflow-hidden transition-all duration-300"
                style={{
                  backgroundColor: 'var(--card-bg)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 4px 24px -4px rgba(0, 0, 0, 0.25)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.14)'
                  e.currentTarget.style.boxShadow = `0 12px 40px -8px rgba(0, 0, 0, 0.4), 0 0 0 1px ${category.borderGlow}`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'
                  e.currentTarget.style.boxShadow = '0 4px 24px -4px rgba(0, 0, 0, 0.25)'
                }}
              >
                {/* Top accent bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.accent} opacity-80`}
                />

                <div className="flex items-start gap-4">
                  <motion.div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${category.accent} border border-white/10`}
                    whileHover={{ rotate: 6, scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    <Icon className="w-6 h-6" style={{ color: 'var(--text-primary)' }} strokeWidth={1.8} />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--text-secondary)' }}>
                      {category.title}
                    </h3>
                    <p
                      className="text-[15px] sm:text-base font-light leading-relaxed"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {category.skills.join(' • ')}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div
            className="rounded-2xl p-6 max-w-3xl mx-auto border"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'rgba(255, 255, 255, 0.08)',
            }}
          >
            <p className="leading-relaxed text-[15px]" style={{ color: 'var(--text-secondary)' }}>
              I'm always learning and expanding my skill set. Currently focusing on advanced AI/ML techniques,
              scalable system design, and creating more intuitive user experiences.
              I believe in the power of continuous learning and staying current with industry trends.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
