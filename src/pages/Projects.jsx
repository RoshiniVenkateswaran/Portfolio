import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Smartphone, Bot, Wifi, Users, ArrowRight, Sparkles, Brain, TrendingUp, GraduationCap, Shield, Trophy } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 'swapy_hacknyu',
      name: 'Swapy - AI-Powered Campus Barter System',
      description: '2nd Place Winner @ HACKnyu',
      details: 'Built an AI-powered campus barter system that understands items, values them fairly, and unlocks multi-hop trades. Implemented Google Gemini 2.0 Flash for deep semantic analysis of items, extracting subcategory, materials, condition, and brand attributes. Developed a hybrid AI + deterministic valuation engine that generates fair, consistent prices. Created a graph-based matching system using DFS cycle detection to enable complex 3-way and 4-way trades that were previously impossible. Built real-time trends intelligence dashboard with 6-score metrics (demand, supply, scarcity, velocity, popularity, saturation) powered by AI semantic understanding.',
      narration: ['Won 2nd place at HACKnyu Fall 2025 in the Sustainability category. Built a complete AI-driven value network that turns unused campus goods into a smart, circular, cashless economy.'],
      icon: Trophy,
      tech: ['Next.js 14', 'Google Gemini 2.0', 'Firebase', 'TypeScript', 'Graph Algorithms', 'AI/ML', 'OpenRouter', 'Computer Vision'],
      role: 'Team Member',
      period: 'Nov 2025',
      link: 'https://lnkd.in/gMP_i8Vu',
      githubLink: 'https://github.com/RoshiniVenkateswaran/swapy',
    },
    {
      id: 'prommuni_roommate_finder',
      name: 'Prommuni - Roommate Finder',
      description: 'Live on Stores',
      details: 'Built a cross-platform roommate-finder app in Flutter using MVVM + GetX architecture to ensure scalability, maintainability, and clean state management. Implemented Firebase authentication, session storage, and real-time chat, ensuring secure, low-latency communication for 500+ test users. Integrated Mapbox SDK with geolocation, dynamic radius search, and location pinning, improving roommate matching accuracy by 40%. Implemented reusable UI components and modular APIs, reducing code duplication by 30% and standardizing development practices. Optimized API calls, caching, and rendering pipelines, reducing map load time by 30% and boosting app responsiveness.',
      narration: ['Live on App Store and Google Play Store'],
      icon: Smartphone,
      tech: ['Flutter', 'GetX', 'Supabase', 'Mapbox', 'iOS', 'Android', 'Real-time Chat', 'Geolocation', 'Firebase', 'GitHub Actions', 'CI/CD'],
      role: 'Software Developer Intern',
      period: 'Oct 2025 – Present',
      appStoreLink: 'https://apps.apple.com/us/app/prommuni/id6747644654Prommuni',
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.prommuni.app&pcampaignid=web_share',
    },
    {
      id: 'lora_historical_narratives',
      name: 'LoRA Fine-tuning for Historical Narratives',
      description: 'LLM Adaptation & Creative Storytelling',
      details: 'Fine-tuned pre-trained LLMs (Mistral-7B) using LoRA, enabling creative historical narratives with "what-if" scenarios. Curated and preprocessed a domain-specific historical dataset from Wikipedia for storytelling fine-tuning. Applied low-rank adaptation to efficiently fine-tune large models with minimal computational resources. Generated context-aware, interactive narratives using prompt engineering, embeddings, and evaluation of coherence and creativity.',
      narration: ['Developed an innovative approach to historical storytelling using advanced LLM fine-tuning techniques.'],
      icon: Brain,
      tech: ['Mistral-7B', 'LoRA', 'Python', 'LLM Fine-tuning', 'Wikipedia Dataset', 'Historical Narratives'],
      githubLink: 'https://github.com/Keerthirajan58/Historical-Event-Narrator',
    },
    {
      id: 'amazon_retail_forecasting',
      name: 'Amazon Retail Sales Forecasting',
      description: 'Machine Learning & Predictive Analytics',
      details: 'Led the development of a machine learning model using Python and XGBoost to forecast Amazon retail sales. Engineered a predictive solution that provided granular SKU-level insights, achieving a Mean Absolute Error (MAE) of 119. Developed and implemented robust data pipelines for data preprocessing and feature engineering. Presented findings, demonstrating the model\'s value in optimizing logistics and inventory.',
      narration: ['Led a team to develop a machine learning solution for retail sales forecasting with significant business impact.'],
      icon: Brain,
      tech: ['Python', 'XGBoost', 'Machine Learning', 'Data Preprocessing', 'Feature Engineering', 'Predictive Analytics'],
      role: 'Team Lead',
      period: 'Jan 2025 – Apr 2025',
      githubLink: 'https://github.com/prithvisaran3/Amazon-Sales-Forecasting',
    },
    {
      id: 'botify_medica',
      name: 'Botify – AI-Powered Chatbot Assistant',
      description: 'AI Chatbot for Healthcare (Medica Internship)',
      details: 'Developed Botify, a prototype AI chatbot for Medica\'s website, assisting members, providers, and visitors with conversational support. Built responsive frontend UI with HTML, CSS, JavaScript, including a floating chat icon for seamless user access. Implemented backend with Flask, integrating Mistral 7B Instruct LLM and FAISS search for context-aware responses. Processed website data using BeautifulSoup and Sentence Transformers, enabling accurate embeddings and fast, relevant answer retrieval.',
      narration: ['Created an intelligent chatbot solution that enhances customer support through AI-powered conversational interfaces.'],
      icon: Bot,
      tech: ['Flask', 'Mistral 7B', 'FAISS', 'BeautifulSoup', 'Sentence Transformers', 'HTML/CSS/JavaScript'],
      role: 'Intern',
      period: 'Jun 2025 – Aug 2025',
    },
    {
      id: 'expends_mobile',
      name: 'Expends – Expense Tracking App',
      description: 'Cross-Platform Mobile Application',
      details: 'Built cross-platform expense tracker using Flutter, GetX, Laravel, MySQL, enabling seamless multi-device functionality. Developed RESTful APIs for real-time expense synchronization, improving data reliability and consistency. Enhanced UI/UX with Rive animations and smooth navigation, boosting user engagement and retention. Implemented dashboards, categorization, and reports, helping users track finances and analyze spending efficiently.',
      narration: ['Delivered a comprehensive expense tracking solution with beautiful animations and robust backend infrastructure.'],
      icon: TrendingUp,
      tech: ['Flutter', 'GetX', 'Laravel', 'MySQL', 'RESTful APIs', 'Rive Animations'],
      role: 'Team Lead',
      period: 'Sep 2024 – Nov 2024',
      githubLink: 'https://github.com/RoshiniVenkateswaran/CSCI6221_ExSpends_Frontend',
    },
    {
      id: 'university_admit_predictor',
      name: 'University Admit Eligibility Predictor',
      description: 'Data Science & Predictive Analytics',
      details: 'Analyzed large datasets and applied regression algorithms to predict student admission eligibility to universities. Designed and implemented an interactive dashboard for visualizing eligibility scores and key admission factors. Provided stakeholders with a data-driven tool to better understand and compare admission requirements.',
      narration: ['Developed a predictive analytics solution that helps students and institutions make informed admission decisions.'],
      icon: GraduationCap,
      tech: ['Python', 'Regression Algorithms', 'Data Visualization', 'Dashboard', 'Machine Learning'],
      period: 'Sep 2022 – Nov 2022',
      githubLink: 'https://github.com/RoshiniVenkateswaran/IBM-Project-19392-1659697170',
    },
    {
      id: 'face_mask_detection',
      name: 'Face Mask Detection with OpenCV',
      description: 'Computer Vision & Deep Learning',
      details: 'Led the design and development of a real-time mask detection system using OpenCV and deep learning models. Achieved 93% detection accuracy, enabling effective monitoring of compliance with mask mandates. Deployed the solution in university settings, reducing manual monitoring efforts by 60% and improving safety enforcement.',
      narration: ['Created an AI-powered safety solution that combines computer vision with practical deployment strategies.'],
      icon: Shield,
      tech: ['OpenCV', 'Deep Learning', 'Computer Vision', 'Python', 'Real-time Detection'],
      role: 'Team Lead',
      period: 'Feb 2022 – Apr 2022',
    },
    {
      id: 'iot_bus_tracker',
      name: 'IoT Bus Tracker',
      description: 'IoT & Systems Thinking',
      details: 'Developed a comprehensive IoT solution for real-time bus tracking and monitoring using GPS modules and IoT sensors. Built a responsive web dashboard with HTML and CSS that displays live bus locations, estimated arrival times, and route information. Implemented basic backend processing to handle sensor data, calculate optimal routes, and manage real-time communication between buses and the central system. Integrated GPS tracking modules with IoT sensors to monitor bus status, passenger capacity, and environmental conditions. Designed an intuitive user interface that allows passengers to track buses in real-time and receive notifications about delays or route changes.',
      narration: ['Built an innovative IoT system that connects physical sensors with digital interfaces, revolutionizing public transportation tracking.'],
      icon: Wifi,
      tech: ['IoT Sensors', 'GPS Modules', 'HTML', 'CSS', 'Real-time Tracking', 'Web Dashboard'],
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
            className="text-xl max-w-2xl mx-auto"
            style={{ color: '#6c757d' }}
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
                  willChange: 'transform',
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
                      <p className="text-sm mb-1">
                        {project.id === 'prommuni_roommate_finder' || project.id === 'swapy_hacknyu' ? (
                          <span style={{ color: '#10b981' }}>{project.description}</span>
                        ) : (
                          <span style={{ color: '#6c757d' }}>{project.description}</span>
                        )}
                      </p>
                      {(project.role || project.period) && (
                        <p className="text-xs mb-2" style={{ color: '#6c757d' }}>
                          {project.role && `${project.role}`}
                          {project.role && project.period && ' • '}
                          {project.period && project.period}
                        </p>
                      )}
                    </div>
                  </div>

                  <motion.p
                    className="mb-6 leading-relaxed"
                    style={{ color: '#6c757d' }}
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

                  {/* Store Links for Prommuni */}
                  {project.id === 'prommuni_roommate_finder' && (project.appStoreLink || project.playStoreLink) && (
                    <div className="mb-4 flex flex-wrap gap-3">
                      {project.appStoreLink && (
                        <motion.a
                          href={project.appStoreLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-black border rounded-lg font-medium transition-all"
                          style={{
                            borderColor: 'rgba(255, 255, 255, 0.3)',
                            color: '#ffffff',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                            e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 1)';
                          }}
                        >
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.96-3.24-1.44-2.24-1.16-4.37-2.26-6.23-3.85C1.26 13.84 0 11.75 0 9.65c0-2.12 1.19-3.95 3-5.35 1.39-1.05 3.05-1.58 4.78-1.58 1.56 0 3.03.56 4.18 1.6 1.15-1.04 2.62-1.6 4.18-1.6 1.73 0 3.39.53 4.78 1.58 1.81 1.4 3 3.23 3 5.35 0 2.1-1.26 4.19-3.4 6.15-1.86 1.59-3.99 2.69-6.23 3.85-1.16.48-2.15.94-3.24 1.44-1.03.48-2.1.55-3.08-.4z"/>
                          </svg>
                          <span className="text-sm">App Store</span>
                        </motion.a>
                      )}
                      {project.playStoreLink && (
                        <motion.a
                          href={project.playStoreLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-black border rounded-lg font-medium transition-all"
                          style={{
                            borderColor: 'rgba(255, 255, 255, 0.3)',
                            color: '#ffffff',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                            e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 1)';
                          }}
                        >
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.05L14.69,12L3.84,21.95C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.94C20.5,11.34 20.67,11.87 20.67,12.44C20.67,13.01 20.5,13.53 20.16,13.94L17.74,16.35L14.69,13.3L17.74,10.25L20.16,10.94M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                          </svg>
                          <span className="text-sm">Play Store</span>
                        </motion.a>
                      )}
                    </div>
                  )}

                  {/* Devpost and GitHub Links for Swapy */}
                  {project.id === 'swapy_hacknyu' && (project.link || project.githubLink) && (
                    <div className="mb-4 flex flex-wrap gap-3">
                      {project.link && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-black border rounded-lg font-medium transition-all"
                          style={{
                            borderColor: 'rgba(255, 255, 255, 0.3)',
                            color: '#ffffff',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                            e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 1)';
                          }}
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span className="text-sm">View on Devpost</span>
                        </motion.a>
                      )}
                      {project.githubLink && (
                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-black border rounded-lg font-medium transition-all"
                          style={{
                            borderColor: 'rgba(255, 255, 255, 0.3)',
                            color: '#ffffff',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                            e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 1)';
                          }}
                        >
                          <Github className="w-5 h-5" />
                          <span className="text-sm">View on GitHub</span>
                        </motion.a>
                      )}
                    </div>
                  )}

                  {/* GitHub Link for All Other Projects */}
                  {project.id !== 'swapy_hacknyu' && project.githubLink && (
                    <div className="mb-4 flex flex-wrap gap-3">
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-black border rounded-lg font-medium transition-all"
                        style={{
                          borderColor: 'rgba(255, 255, 255, 0.3)',
                          color: '#ffffff',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 1)';
                        }}
                      >
                        <Github className="w-5 h-5" />
                        <span className="text-sm">View on GitHub</span>
                      </motion.a>
                    </div>
                  )}

                  {/* Project Highlights */}
                  <motion.div
                    className="mt-4 pt-4 border-t"
                    style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
                    initial={{ opacity: 0 }}
                    animate={cardInView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.15 + 0.3 }}
                  >
                    <p className="text-sm italic flex items-start gap-2" style={{ color: '#6c757d' }}>
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

      </div>
    </motion.div>
  );
};

export default Projects;

