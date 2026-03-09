'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function SkillsContent() {
  const skillCategories = [
    { title: 'Languages', skills: ['Python', 'Java', 'TypeScript'] },
    { title: 'Backend', skills: ['FastAPI', 'REST APIs', 'System Architecture'] },
    { title: 'AI Systems', skills: ['Computer Vision', 'Generative AI', 'RAG Pipelines', 'Vector Databases'] },
    { title: 'Frontend', skills: ['Flutter', 'React', 'Next.js'] },
    { title: 'Infrastructure', skills: ['Firebase', 'Supabase', 'Cloudflare', 'Git'] },
  ]

  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <motion.div
      className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: '#1a1a1a' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-4 text-white"
          >
            Skills
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl max-w-2xl mx-auto"
            style={{ color: '#6c757d' }}
          >
            Technical expertise that drives my work
          </motion.p>
        </motion.div>

        {/* Skills by category — recruiter-readable */}
        <div className="space-y-8">
          {skillCategories.map((category, index) => {
            const categoryRef = useRef(null)
            const categoryInView = useInView(categoryRef, { once: true, margin: '-50px' })
            const skillsLine = category.skills.join(' • ')

            return (
              <motion.div
                key={category.title}
                ref={categoryRef}
                initial={{ opacity: 0, y: 20 }}
                animate={categoryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.06, duration: 0.4, ease: 'easeOut' }}
                className="border-b border-white/10 pb-6 last:border-0 last:pb-0"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-2 text-white/90">
                  {category.title}
                </h3>
                <p className="text-base sm:text-lg font-light leading-relaxed" style={{ color: '#9ca3af' }}>
                  {skillsLine}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div
            className="border rounded-lg p-6 max-w-3xl mx-auto"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(255, 255, 255, 0.2)' }}
          >
            <p className="leading-relaxed" style={{ color: '#6c757d' }}>
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


