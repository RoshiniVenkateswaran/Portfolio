'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, Calendar, MapPin, Sparkles } from 'lucide-react'

export default function ExperienceContent() {
  const experiences = [
    {
      company: 'Prommuni',
      role: 'Software Developer Intern',
      location: 'Germantown, MD',
      period: 'Oct 2025 – Present',
      description: 'Building a cross-platform roommate-finder app in Flutter, focusing on scalable architecture and real-time features.',
      achievements: [
        'Built a cross-platform roommate-finder app in Flutter using MVVM + GetX to ensure scalability, maintainability, and clean state management',
        'Implemented Firebase authentication, session storage, and real-time chat, ensuring secure, low-latency communication for 500+ test users',
        'Integrated Mapbox SDK with geolocation, dynamic radius search, and location pinning, improving roommate matching accuracy by 40%',
        'Implemented reusable UI components and modular APIs, reducing code duplication by 30% and standardizing development practices',
        'Optimized API calls, caching, and rendering pipelines, reducing map load time by 30% and boosting app responsiveness',
        'Implemented automated deployments with GitHub Actions CI/CD in an Agile environment, reducing build errors and delivery time by 25%',
        'Deployed app on Google Play and App Store, ensuring compliance with store guidelines and smooth rollout processes',
      ],
    },
    {
      company: 'Medica',
      role: 'Automation Development Intern',
      location: 'Minnetonka, MN',
      period: 'May 2025 – Aug 2025',
      description: 'Designed and implemented UiPath automation workflows to streamline operations and reduce manual processing time.',
      achievements: [
        'Designed UiPath automation workflows, integrating API automation and data extraction that reduced manual processing time by 40%',
        'Built scalable, reusable RPA solutions applying workflow design, exception handling, and task scheduling and monitoring in UiPath Orchestrator, ensuring 24/7 automation uptime and proactive issue alerts while reducing downtime by 15%',
        'Executed process optimization, automating repetitive operations to achieve 30% reduction in operational costs and enhance efficiency',
        'Contributed to the migration of a legacy desktop application using C#, integrating MSTest discovery and execution components',
        'Resolved complex backend and assembly-loading challenges to modernize the testing framework and improve maintainability by 20%',
      ],
    },
    {
      company: 'Advantage Capital Pvt Ltd',
      role: 'AI/ML Intern',
      location: 'Chennai, India',
      period: 'Dec 2023 – Apr 2024',
      description: 'Developed and integrated advanced NLP models for chatbot systems, improving response accuracy and user satisfaction.',
      achievements: [
        'Developed and integrated advanced NLP models, improving response accuracy by 25% and analyzing over 100K user interactions using Python, Pandas, and Scikit-learn',
        'Managed the full project lifecycle, optimizing chatbot logic and ML pipelines to enhance user experience and boost satisfaction by 30%',
        'Built a customer intent classification model using TensorFlow and Keras, applying feature engineering, hyperparameter tuning, and cross-validation, achieving 92% accuracy and deploying it via Flask API for real-time inference',
      ],
    },
    {
      company: 'Etuper Technologies',
      role: 'Software Engineer Intern',
      location: 'Kochi, India',
      period: 'Jun 2022 – Aug 2022',
      description: 'Developed full-stack web application for the hospitality domain using Spring Boot, MySQL, and REST APIs.',
      achievements: [
        'Developed the Brilliant Rewards full-stack web application for the hospitality domain using Spring Boot, MySQL, and REST APIs',
        'Applied object-oriented design principles to build modular, maintainable backend services and reusable components',
        'Built secure APIs with Spring Security and JWT authentication, improving data integrity and user access control',
        'Built secure backend services for user rewards and bookings, implementing CRUD operations and optimizing SQL queries by 25%',
        'Designed responsive UI components with HTML, CSS, and JavaScript, ensuring smooth client–server communication',
        'Conducted code reviews and unit testing with JUnit, accelerating delivery by 15% in an Agile environment',
      ],
    },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <motion.div 
      className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: 'var(--page-bg)' }}
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
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Experience
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl"
            style={{ color: 'var(--text-secondary)' }}
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
              backgroundColor: 'var(--card-border)',
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
                    className="absolute left-6 w-4 h-4 rounded-full border-4 shadow-md"
                    style={{
                      borderColor: 'var(--card-border-strong)',
                      backgroundColor: 'var(--accent)',
                    }}
                    initial={{ scale: 0 }}
                    animate={expInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.15, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.5 }}
                  />

                  {/* Content */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="group relative backdrop-blur-sm border rounded-xl p-6 transition-all shadow-md hover:shadow-lg overflow-hidden border-l-4"
                    style={{
                      borderColor: 'var(--card-border)',
                      borderLeftColor: 'var(--accent)',
                      backgroundColor: 'var(--card-bg)',
                      willChange: 'transform',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--card-border-strong)';
                      e.currentTarget.style.borderLeftColor = 'var(--accent)';
                      e.currentTarget.style.boxShadow = '0 12px 24px -8px rgba(0, 0, 0, 0.12)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--card-border)';
                      e.currentTarget.style.borderLeftColor = 'var(--accent)';
                      e.currentTarget.style.boxShadow = '';
                    }}
                  >
                    <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-3">
                    <div className="flex-1">
                      <h3
                        className="text-2xl font-bold mb-2 transition-colors"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {exp.role}
                      </h3>
                      <motion.div
                        className="flex items-center gap-2"
                        whileHover={{ x: 4 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <Building2 className="w-5 h-5 flex-shrink-0 transition-transform group-hover:scale-110" style={{ color: 'var(--accent)' }} />
                        <p className="text-xl font-semibold" style={{ color: 'var(--accent)' }}>
                          {exp.company}
                        </p>
                      </motion.div>
                    </div>
                    <motion.div
                      className="text-right sm:mt-0 space-y-1.5 flex flex-col items-end sm:items-end"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                        <Calendar className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--accent)' }} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                        <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--accent)' }} />
                        <span>{exp.location}</span>
                      </div>
                    </motion.div>
                  </div>

                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {exp.description}
                  </p>

                  <div>
                    <p className="font-medium text-sm mb-3 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                      <Sparkles className="w-4 h-4" style={{ color: 'var(--accent)' }} />
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
                          className="text-sm flex items-start gap-2 group/item cursor-default"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          <motion.span
                            className="mt-1 text-lg"
                            style={{ color: 'var(--text-primary)' }}
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 1, delay: index * 0.15 + achIndex * 0.1 }}
                          >
                            •
                          </motion.span>
                          <span className="transition-colors" style={{ color: 'var(--text-secondary)' }}>{achievement}</span>
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


