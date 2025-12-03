'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Brain, Palette, Users, Database, Smartphone, Sparkles } from 'lucide-react'

export default function SkillsContent() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['Java', 'Python', 'Dart', 'JavaScript', 'C/C++', 'HTML/CSS'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: ['Flutter', 'React Native', 'iOS Development', 'Android Development', 'Xcode', 'Android Studio', 'Cross-Platform'],
    },
    {
      icon: Brain,
      title: 'AI/ML',
      skills: ['OpenAI GPT', 'Natural Language Processing', 'Machine Learning', 'Neural Networks', 'TensorFlow', 'Keras', 'Scikit-learn', 'Pandas', 'NumPy'],
    },
    {
      icon: Database,
      title: 'Backend & Databases',
      skills: ['SQL', 'MySQL', 'Node.js', 'Firebase', 'REST APIs', 'Database Design', 'Cloud Services'],
    },
    {
      icon: Palette,
      title: 'Frontend & Design',
      skills: ['React', 'Tailwind CSS', 'Framer Motion', 'UI/UX Design', 'Responsive Design'],
    },
    {
      icon: Users,
      title: 'Soft Skills',
      skills: ['Team Collaboration', 'Problem Solving', 'Communication', 'Agile Methodology', 'Project Management'],
    },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <motion.div 
      className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: '#1a1a1a' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
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
            Technical expertise and soft skills that drive my work
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const categoryRef = useRef(null);
            const categoryInView = useInView(categoryRef, { once: true, margin: "-50px" });
            
            return (
              <motion.div
                key={index}
                ref={categoryRef}
                initial={{ opacity: 0, y: 30 }}
                animate={categoryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.08, duration: 0.4, ease: "easeOut" }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-white/10 backdrop-blur-sm border rounded-xl p-6 shadow-lg hover:shadow-xl overflow-hidden"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  willChange: 'transform',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      <svg className="absolute w-0 h-0">
                        <defs>
                                <linearGradient id={`skillIconGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                  <stop offset="0%" stopColor="#FFFFFF" />
                                  <stop offset="100%" stopColor="#FFFFFF" />
                                </linearGradient>
                        </defs>
                      </svg>
                      <category.icon 
                        className="w-8 h-8 gradient-icon" 
                        style={{ 
                          stroke: `url(#skillIconGradient-${index})`,
                          fill: 'none'
                        }}
                      />
                    </motion.div>
                          <motion.h3
                            className="text-xl font-bold text-white transition-all"
                            whileHover={{ x: 5 }}
                          >
                            {category.title}
                          </motion.h3>
                  </div>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={categoryInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05, duration: 0.3 }}
                        className="px-3 py-2 border rounded-lg text-sm font-medium transition-all cursor-default"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          borderColor: 'rgba(255, 255, 255, 0.2)',
                          color: '#FFFFFF',
                        }}
                        whileHover={{ scale: 1.05, x: 5 }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                        }}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 text-center"
        >
                <div className="border rounded-lg p-6 max-w-3xl mx-auto" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                  <p className="leading-relaxed" style={{ color: '#6c757d' }}>
              I'm always learning and expanding my skill set. Currently focusing on advanced AI/ML techniques, 
              scalable system design, and creating more intuitive user experiences. 
              I believe in the power of continuous learning and staying current with industry trends.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};


