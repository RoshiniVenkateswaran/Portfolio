import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Etuper Technologies',
      role: 'Software Developer',
      location: 'Remote',
      period: '2023 - Present',
      description: 'Built intelligent, scalable, and empathetic tech solutions. Worked on full-stack development projects focusing on AI integration and user experience.',
      achievements: [
        'Developed scalable web applications with modern frameworks',
        'Integrated AI/ML capabilities into existing systems',
        'Collaborated with cross-functional teams to deliver high-quality products',
      ],
    },
    {
      company: 'Advantage Capital',
      role: 'Software Developer',
      location: 'Remote',
      period: '2022 - 2023',
      description: 'Contributed to building robust financial technology solutions. Focused on creating efficient, secure, and user-friendly applications.',
      achievements: [
        'Built secure financial data processing systems',
        'Implemented real-time data synchronization features',
        'Optimized application performance and scalability',
      ],
    },
    {
      company: 'Medica',
      role: 'Software Developer',
      location: 'Remote',
      period: '2021 - 2022',
      description: 'Developed healthcare technology solutions with a focus on patient care and medical data management.',
      achievements: [
        'Created patient management systems',
        'Ensured HIPAA compliance in all applications',
        'Improved system efficiency and user experience',
      ],
    },
    {
      company: 'Prommuni',
      role: 'Software Developer',
      location: 'Remote',
      period: '2020 - 2021',
      description: 'Worked on community-focused technology platforms. Built applications that connect people and facilitate community engagement.',
      achievements: [
        'Developed community engagement platforms',
        'Implemented real-time communication features',
        'Created intuitive user interfaces for diverse user bases',
      ],
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
      <div className="max-w-4xl mx-auto relative z-10">
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
            Experience
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-white/80"
          >
            My professional journey and growth
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated Timeline Line */}
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-0.5"
            style={{
              background: 'linear-gradient(180deg, #FFFFFF, rgba(255, 255, 255, 0.5), #FFFFFF)',
              originY: 0,
            }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const expRef = useRef(null);
              const expInView = useInView(expRef, { once: true, margin: "-50px" });
              
              return (
                <motion.div
                  key={index}
                  ref={expRef}
                  initial={{ opacity: 0, x: -50 }}
                  animate={expInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
                  className="relative pl-20"
                >
                  {/* Animated Timeline Dot */}
                  <motion.div
                    className="absolute left-6 w-4 h-4 rounded-full border-4 border-white shadow-lg"
                    style={{
                      backgroundColor: '#FFFFFF',
                    }}
                    initial={{ scale: 0 }}
                    animate={expInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.15, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.5 }}
                  />

                  {/* Content */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="group relative bg-white/10 backdrop-blur-sm border rounded-xl p-6 transition-all shadow-lg hover:shadow-xl overflow-hidden"
                    style={{
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                      e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                    }}
                    style={{ willChange: 'transform' }}
                  >
                    <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                       <p className="text-xl text-white mb-2 font-semibold">
                         {exp.company}
                       </p>
                    </div>
                    <div className="text-right sm:mt-0 mt-2">
                      <div className="flex items-center gap-2 text-white/70 text-sm mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/70 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-white/80 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div>
                    <p className="text-white font-medium text-sm mb-3 flex items-center gap-2">
                      <svg className="absolute w-0 h-0">
                        <defs>
                          <linearGradient id={`expIconGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#FFFFFF" />
                            <stop offset="100%" stopColor="#FFFFFF" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <Sparkles className="w-4 h-4 gradient-icon" style={{ stroke: `url(#expIconGradient-${index})` }} />
                      Key Achievements:
                    </p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={expInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.15 + achIndex * 0.1, duration: 0.4 }}
                          whileHover={{ x: 5 }}
                          className="text-white/80 text-sm flex items-start gap-2 group/item cursor-default"
                        >
                          <motion.span
                            className="text-white mt-1 text-lg"
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 1, delay: index * 0.15 + achIndex * 0.1 }}
                          >
                            •
                          </motion.span>
                          <span className="group-hover/item:text-white transition-colors">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;

