'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, Smartphone, Bot, Wifi, Brain, TrendingUp, GraduationCap, Shield, Trophy, Monitor, ChevronDown } from 'lucide-react'

const INITIAL_PROJECTS = 4
const LOAD_MORE_COUNT = 4

function ProjectCard({ project, index }) {
  const cardRef = useRef(null)
  const cardInView = useInView(cardRef, { once: true, margin: '-50px' })
  const ProjectIcon = project.icon

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.4, ease: 'easeOut' }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative bg-white/10 backdrop-blur-sm border rounded-xl p-6 transition-all shadow-lg hover:shadow-xl overflow-hidden"
      style={{
        borderColor: 'var(--card-border)',
        backgroundColor: 'var(--card-bg)',
        willChange: 'transform',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--card-border-strong)'
        e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.3)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--card-border)'
        e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
      }}
    >
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'rgba(55, 65, 81, 0.05)' }}
        initial={false}
      />
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        style={{
          background: 'linear-gradient(110deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%)',
        }}
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
      />
      <div className="relative z-10">
        <div className="flex items-start gap-4 mb-4">
          <div className="relative flex-shrink-0">
            <ProjectIcon
              className="w-12 h-12"
              style={{ color: 'var(--text-primary)' }}
            />
          </div>
          <div className="flex-1">
            <motion.h3 className="text-2xl font-bold mb-1 transition-all" style={{ color: 'var(--text-primary)' }} whileHover={{ x: 5 }}>
              <span style={{ color: 'var(--text-primary)' }}>{project.name}</span>
            </motion.h3>
            <p className="text-sm mb-1">
              {project.id === 'prommuni_roommate_finder' || project.id === 'swapy_hacknyu' || project.id === 'pitchpulse_hacklytics' || project.id === 'snapback_george_hacks' ? (
                <span style={{ color: 'var(--accent)' }}>{project.description}</span>
              ) : (
                <span style={{ color: 'var(--text-secondary)' }}>{project.description}</span>
              )}
            </p>
            {(project.role || project.period) && (
              <p className="text-xs mb-2" style={{ color: 'var(--text-secondary)' }}>
                {project.role && `${project.role}`}
                {project.role && project.period && ' • '}
                {project.period && project.period}
              </p>
            )}
          </div>
        </div>
        <motion.p
          className="mb-6 leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        >
          {project.details}
        </motion.p>
        <div className="mb-6">
          <p className="text-sm font-medium mb-3" style={{ color: 'var(--text-primary)' }}>Tech Stack:</p>
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
                  backgroundColor: 'var(--card-bg-alt)',
                  borderColor: 'var(--card-border)',
                  color: 'var(--text-primary)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--card-border-strong)'
                  e.currentTarget.style.backgroundColor = 'var(--card-bg)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--card-border)'
                  e.currentTarget.style.backgroundColor = 'var(--card-bg-alt)'
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
        {(project.githubLink || project.link || project.appStoreLink || project.playStoreLink) && (
          <div className="mt-4 pt-4 border-t flex items-center gap-3" style={{ borderColor: 'var(--card-border)' }}>
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 border rounded-lg transition-all hover:opacity-80"
                style={{ borderColor: 'var(--card-border)', backgroundColor: 'var(--card-bg-alt)', color: 'var(--text-primary)' }}
                title="Code (GitHub)"
                aria-label="View code on GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {(project.link || project.appStoreLink || project.playStoreLink) && (
              <a
                href={project.link || project.appStoreLink || project.playStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 border rounded-lg transition-all hover:opacity-80"
                style={{ borderColor: 'var(--card-border)', backgroundColor: 'var(--card-bg-alt)', color: 'var(--text-primary)' }}
                title="Demo"
                aria-label="View demo"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'mobile', label: 'Mobile Development' },
  { key: 'ai', label: 'AI/ML' },
  { key: 'web', label: 'Web Development' },
  { key: 'data', label: 'Data Science' },
  { key: 'iot', label: 'IoT' },
]

export default function ProjectsContent() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_PROJECTS)
  const [activeFilter, setActiveFilter] = useState('all')
  const projects = [
    {
      id: 'swapy_hacknyu',
      categories: ['ai', 'web'],
      name: 'Swapy - AI-Driven Multi-Hop Barter Marketplace',
      description: '2nd Place Winner @ HACKnyu',
      details: 'Built an AI-powered campus barter system using Google Gemini 2.0 for semantic item analysis and fair valuation. Developed a graph-based matching system with DFS cycle detection to enable complex multi-hop trades. Delivered a real-time trends dashboard with demand, supply, and scarcity metrics.',
      narration: ['Built a complete AI-driven value network that turns unused campus goods into a smart, circular, cashless economy.'],
      icon: Trophy,
      tech: ['Next.js 14', 'Google Gemini 2.0', 'Firebase', 'TypeScript', 'Graph Algorithms', 'AI/ML', 'OpenRouter', 'Computer Vision'],
      role: 'Team Lead',
      period: 'Nov 2025',
      link: 'https://lnkd.in/gMP_i8Vu',
      githubLink: 'https://github.com/RoshiniVenkateswaran/swapy',
    },
    {
      id: 'pitchpulse_hacklytics',
      categories: ['ai', 'mobile'],
      name: 'PitchPulse - AI Sports Injury Prediction Platform',
      description: 'Hacklytics @ Georgia Tech',
      details: 'AI-powered system that predicts injury risk and generates tactical recovery plans using computer vision vitals extraction, workload analytics, and a RAG-based decision engine. Built FastAPI backend, RAG pipeline, and Flutter mobile interface for real-time athlete monitoring and actionable insights for coaches.',
      narration: ['Combines CV vitals, workload analytics, and RAG for injury prediction and recovery planning.'],
      icon: Trophy,
      tech: ['Python', 'FastAPI', 'Flutter', 'Vector DB', 'Generative AI', 'RAG', 'Computer Vision', 'Workload Analytics', 'Dart', 'REST APIs'],
      period: 'Feb 2026',
      link: 'https://devpost.com/software/pitchpulse-32pbyx',
      githubLink: 'https://github.com/RoshiniVenkateswaran/PitchPulseDB',
    },
    {
      id: 'snapback_george_hacks',
      categories: ['mobile', 'ai'],
      name: 'SNAPback – Nutrition & Cashback for SNAP Families',
      description: '1st Place @ George Hacks',
      details:
        'Flutter app for SNAP and WIC households: snap a grocery receipt for culturally-aware nutrition scores (24 cuisines) against a USDA rubric via Gemini 2.5 Flash multimodal. Firebase Auth, Firestore, and Storage with Node 20 Cloud Functions enforce tiered cashback, monthly caps, and a health-score gate before redemption. Live dashboards and recipe suggestions update in real time.',
      narration: [
        'Receipt-to-guidance pipeline with behavioral incentives for sustained healthier shopping.',
      ],
      icon: Trophy,
      tech: [
        'Flutter',
        'Dart',
        'Provider',
        'go_router',
        'Firebase Auth',
        'Cloud Firestore',
        'Cloud Storage',
        'Cloud Functions',
        'Node 20',
        'Gemini 2.5 Flash',
        'JSON Schema',
        'fl_chart',
        'google_nav_bar',
      ],
      role: 'Team Lead',
      period: 'Feb 2026',
      link: 'https://devpost.com/software/snapback-2s1lb7',
      githubLink: 'https://github.com/RoshiniVenkateswaran/SNAPback',
    },
    {
      id: 'prommuni_roommate_finder',
      categories: ['mobile'],
      name: 'Prommuni - Roommate Finder',
      description: 'Live on Stores',
      details: 'Built a cross-platform roommate-finder app in Flutter with GetX and Firebase auth. Integrated Mapbox for geolocation and dynamic search, improving match accuracy. Implemented real-time chat, reusable UI components, and optimized rendering for 500+ test users.',
      narration: ['Live on App Store and Google Play Store'],
      icon: Smartphone,
      tech: ['Flutter', 'GetX', 'Supabase', 'Mapbox', 'iOS', 'Android', 'Real-time Chat', 'Geolocation', 'Firebase', 'GitHub Actions', 'CI/CD'],
      role: 'Software Developer Intern',
      period: 'Oct 2025 – Dec 2025',
      appStoreLink: 'https://apps.apple.com/us/app/prommuni/id6747644654',
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.prommuni.app&pcampaignid=web_share',
    },
    {
      id: 'lora_historical_narratives',
      categories: ['ai'],
      name: 'LoRA Fine-tuning for Historical Narratives',
      description: 'LLM Adaptation & Creative Storytelling',
      details: 'Fine-tuned Mistral-7B with LoRA for creative historical narratives and "what-if" scenarios. Curated a Wikipedia-based dataset and applied low-rank adaptation for efficient training. Generated context-aware stories using prompt engineering and coherence evaluation.',
      narration: ['Developed an innovative approach to historical storytelling using advanced LLM fine-tuning techniques.'],
      icon: Brain,
      tech: ['Mistral-7B', 'LoRA', 'Python', 'LLM Fine-tuning', 'Wikipedia Dataset', 'Historical Narratives'],
      githubLink: 'https://github.com/Keerthirajan58/Historical-Event-Narrator',
    },
    {
      id: 'amazon_retail_forecasting',
      categories: ['ai', 'data'],
      name: 'Amazon Retail Sales Forecasting',
      description: 'Machine Learning & Predictive Analytics',
      details: 'Led development of an XGBoost-based ML model to forecast Amazon retail sales with SKU-level insights (MAE 119). Built data pipelines for preprocessing and feature engineering. Presented findings for logistics and inventory optimization.',
      narration: ['Led a team to develop a machine learning solution for retail sales forecasting with significant business impact.'],
      icon: Brain,
      tech: ['Python', 'XGBoost', 'Machine Learning', 'Data Preprocessing', 'Feature Engineering', 'Predictive Analytics'],
      role: 'Team Lead',
      period: 'Jan 2025 – Apr 2025',
      githubLink: 'https://github.com/prithvisaran3/Amazon-Sales-Forecasting',
    },
    {
      id: 'botify_medica',
      categories: ['ai', 'web'],
      name: 'Botify – AI-Powered Chatbot Assistant',
      description: 'AI Chatbot for Healthcare (Medica Internship)',
      details: 'Developed an AI chatbot for Medica\'s website with Flask and Mistral 7B. Built a responsive UI with floating chat and used FAISS plus Sentence Transformers for context-aware answers from scraped site data.',
      narration: ['Created an intelligent chatbot solution that enhances customer support through AI-powered conversational interfaces.'],
      icon: Bot,
      tech: ['Flask', 'Mistral 7B', 'FAISS', 'BeautifulSoup', 'Sentence Transformers', 'HTML/CSS/JavaScript'],
      role: 'Intern',
      period: 'Jun 2025 – Aug 2025',
      githubLink: 'https://github.com/RoshiniVenkateswaran/Botify_Medica_Chatbot',
    },
    {
      id: 'expends_mobile',
      categories: ['mobile'],
      name: 'Expends – Expense Tracking App',
      description: 'Cross-Platform Mobile Application',
      details: 'Built a cross-platform expense tracker with Flutter, GetX, Laravel, and MySQL. Delivered RESTful APIs for real-time sync, Rive animations, and dashboards with categorization and reports for spending analysis.',
      narration: ['Delivered a comprehensive expense tracking solution with beautiful animations and robust backend infrastructure.'],
      icon: TrendingUp,
      tech: ['Flutter', 'GetX', 'Laravel', 'MySQL', 'RESTful APIs', 'Rive Animations'],
      role: 'Team Lead',
      period: 'Sep 2024 – Nov 2024',
      githubLink: 'https://github.com/RoshiniVenkateswaran/CSCI6221_ExSpends_Frontend',
    },
    {
      id: 'university_admit_predictor',
      categories: ['data'],
      name: 'University Admit Eligibility Predictor',
      description: 'Data Science & Predictive Analytics',
      details: 'Applied regression on large datasets to predict university admission eligibility. Built an interactive dashboard to visualize scores and admission factors, helping students and institutions compare requirements.',
      narration: ['Developed a predictive analytics solution that helps students and institutions make informed admission decisions.'],
      icon: GraduationCap,
      tech: ['Python', 'Regression Algorithms', 'Data Visualization', 'Dashboard', 'Machine Learning'],
      period: 'Sep 2022 – Nov 2022',
      githubLink: 'https://github.com/RoshiniVenkateswaran/IBM-Project-19392-1659697170',
    },
    {
      id: 'face_mask_detection',
      categories: ['ai'],
      name: 'Face Mask Detection with OpenCV',
      description: 'Computer Vision & Deep Learning',
      details: 'Led development of a real-time mask detection system with OpenCV and deep learning (93% accuracy). Deployed in university settings, cutting manual monitoring by 60% and improving safety enforcement.',
      narration: ['Created an AI-powered safety solution that combines computer vision with practical deployment strategies.'],
      icon: Shield,
      tech: ['OpenCV', 'Deep Learning', 'Computer Vision', 'Python', 'Real-time Detection'],
      role: 'Team Lead',
      period: 'Feb 2022 – Apr 2022',
    },
    {
      id: 'iot_bus_tracker',
      categories: ['iot'],
      name: 'IoT Bus Tracker',
      description: 'IoT & Systems Thinking',
      details: 'Built an IoT solution for real-time bus tracking with GPS and sensors. Delivered a web dashboard showing live locations, arrival times, and routes. Implemented backend processing for sensor data and passenger notifications.',
      narration: ['Built an innovative IoT system that connects physical sensors with digital interfaces, revolutionizing public transportation tracking.'],
      icon: Wifi,
      tech: ['IoT Sensors', 'GPS Modules', 'HTML', 'CSS', 'Real-time Tracking', 'Web Dashboard'],
    },
    {
      id: 'portfolio_website',
      categories: ['web'],
      name: 'Portfolio Website',
      description: 'Modern React Portfolio',
      details: 'Built a modern portfolio with React, Vite, and Tailwind CSS. Implemented responsive design, Framer Motion animations, and a multi-page layout with projects, experience, skills, and contact. Optimized rendering and transitions.',
      narration: ['A showcase of modern web development practices, combining beautiful design with smooth user experience.'],
      icon: Monitor,
      tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'React Router', 'JavaScript'],
      githubLink: 'https://github.com/RoshiniVenkateswaran/Portfolio',
    },
  ]

  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.categories && p.categories.includes(activeFilter))
  const visibleProjects = activeFilter === 'all'
    ? filteredProjects.slice(0, visibleCount)
    : filteredProjects
  const hasMore = activeFilter === 'all' && visibleCount < projects.length
  const loadMore = () => setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, projects.length))
  const setFilter = (key) => {
    setActiveFilter(key)
    if (key === 'all') setVisibleCount(INITIAL_PROJECTS)
  }

  return (
    <motion.div 
      className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: 'var(--page-bg)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
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
            Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Things I’ve built - from apps to AI tools
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          {FILTERS.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all border"
              style={{
                borderColor: activeFilter === key ? 'var(--accent)' : 'var(--card-border)',
                backgroundColor: activeFilter === key ? 'var(--accent)' : 'var(--card-bg-alt)',
                color: activeFilter === key ? '#ffffff' : 'var(--text-primary)',
              }}
            >
              {label}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {hasMore && (
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.button
              type="button"
              onClick={loadMore}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all border"
              style={{
                backgroundColor: 'var(--card-bg)',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                color: 'var(--text-primary)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)'
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'
              }}
            >
              <ChevronDown className="w-5 h-5" />
              Load more
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

