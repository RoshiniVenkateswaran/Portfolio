import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Smartphone, Bot, Wifi, Users, ArrowRight, Sparkles } from 'lucide-react';
import dialogue from '../data/dialogue.json';

const Projects = () => {
  const projects = [
    {
      id: 'pawfect',
      name: 'Pawfect',
      description: 'Empathy & App Design',
      details: dialogue.act2.projects.pawfect.details,
      narration: dialogue.act2.projects.pawfect.narration,
      icon: Smartphone,
      tech: ['React Native', 'Real-time Matching', 'User Profiles', 'Adoption Workflows'],
    },
    {
      id: 'botify',
      name: 'Botify',
      description: 'AI & NLP Implementation',
      details: dialogue.act2.projects.botify.details,
      narration: dialogue.act2.projects.botify.narration,
      icon: Bot,
      tech: ['OpenAI GPT', 'NLP Pipelines', 'Intent Recognition', 'Context-Aware Responses'],
    },
    {
      id: 'iot_bus_tracker',
      name: 'IoT Bus Tracker',
      description: 'IoT & Systems Thinking',
      details: dialogue.act2.projects.iot_bus_tracker.details,
      narration: dialogue.act2.projects.iot_bus_tracker.narration,
      icon: Wifi,
      tech: ['IoT Sensors', 'GPS Modules', 'React', 'Node.js'],
    },
    {
      id: 'expends',
      name: 'Expends',
      description: 'Teamwork & Cross-Platform Design',
      details: dialogue.act2.projects.expends.details,
      narration: dialogue.act2.projects.expends.narration,
      icon: Users,
      tech: ['React Native', 'Firebase', 'iOS', 'Android', 'Web'],
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
      <div className="max-w-7xl mx-auto relative z-10">
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
            My work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            A collection of projects that showcase my passion for building intelligent, 
            human-centered technology solutions
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const cardRef = useRef(null);
            const cardInView = useInView(cardRef, { once: true, margin: "-50px" });
            
            return (
              <motion.div
                key={project.id}
                ref={cardRef}
                initial={{ opacity: 0, y: 30 }}
                animate={cardInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
                whileHover={{ y: -8, scale: 1.02 }}
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
                {/* Animated gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'rgba(55, 65, 81, 0.05)',
                  }}
                  initial={false}
                />
                
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background: 'linear-gradient(110deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%)',
                  }}
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut"
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      <svg className="absolute w-0 h-0">
                        <defs>
                                <linearGradient id={`iconGradient-${project.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                  <stop offset="0%" stopColor="#FFFFFF" />
                                  <stop offset="100%" stopColor="#FFFFFF" />
                                </linearGradient>
                        </defs>
                      </svg>
                      <project.icon 
                        className="w-12 h-12 flex-shrink-0" 
                        style={{ 
                          stroke: `url(#iconGradient-${project.id})`,
                          fill: 'none',
                          color: 'transparent'
                        }}
                      />
                    </motion.div>
                    <div className="flex-1">
                      <motion.h3
                        className="text-2xl font-bold mb-1 text-white transition-all"
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-white">
                          {project.name}
                        </span>
                      </motion.h3>
                      <p className="text-white/70 text-sm mb-2">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <motion.p
                    className="text-white/80 mb-6 leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {project.details}
                  </motion.p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <p className="text-sm text-white font-medium mb-3">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={cardInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: index * 0.15 + techIndex * 0.05, duration: 0.3 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-3 py-1.5 border rounded-full text-xs font-medium transition-all cursor-default"
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            borderColor: 'rgba(255, 255, 255, 0.2)',
                            color: '#FFFFFF',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Project Highlights */}
                  <motion.div
                    className="mt-4 pt-4 border-t"
                    style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
                    initial={{ opacity: 0 }}
                    animate={cardInView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.15 + 0.3 }}
                  >
                    <p className="text-sm text-white/70 italic flex items-start gap-2">
                      <Sparkles className="w-4 h-4 gradient-icon mt-0.5 flex-shrink-0" style={{ stroke: `url(#iconGradient-${project.id})` }} />
                      {project.narration[0]}
                    </p>
                  </motion.div>

                  {/* Hover arrow */}
                  <motion.div
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <ArrowRight className="w-5 h-5 gradient-icon" style={{ stroke: `url(#iconGradient-${project.id})` }} />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-white/80 mb-4">
            Want to see more? Check out my GitHub or let's chat about these projects!
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;

