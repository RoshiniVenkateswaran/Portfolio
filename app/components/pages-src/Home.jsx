import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FolderKanban, Briefcase, Code, User, ArrowRight, Sparkles } from 'lucide-react';

const Home = () => {
  const containerRef = useRef(null);
  const nameContainerRef = useRef(null);
  const exploreRef = useRef(null);
  const featuredRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Track scroll progress relative to the hero section
  // When hero section starts entering viewport to when it exits
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Transform scroll progress to horizontal movement
  // Scroll down (progress increases from 0 to 1) → move left (negative x in vw)
  // Scroll up (progress decreases from 1 to 0) → move right (back to 0)
  // Movement range for name animation - responsive based on screen size
  const nameX = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -800 : -1950]);

  const exploreInView = useInView(exploreRef, { once: true, margin: "-100px" });
  const featuredInView = useInView(featuredRef, { once: true, margin: "-100px" });

  // Explore cards data
  const exploreCards = [
    {
      icon: FolderKanban,
      title: 'Projects',
      description: 'Explore my portfolio of innovative projects and solutions',
      link: '/projects',
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      icon: Briefcase,
      title: 'Experience',
      description: 'My professional journey and career milestones',
      link: '/experience',
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      icon: Code,
      title: 'Skills',
      description: 'Technical expertise and technologies I work with',
      link: '/skills',
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      icon: User,
      title: 'About',
      description: 'Learn more about me, my values, and interests',
      link: '/about',
      color: 'from-orange-500/20 to-red-500/20'
    },
  ];

  // Featured project
  const featuredProject = {
    name: 'Swapy - AI-Powered Campus Barter System',
    description: '2nd Place Winner @ HACKnyu',
    tagline: 'Built an AI-powered campus barter system that understands items, values them fairly, and unlocks multi-hop trades. Won 2nd place at HACKnyu Fall 2025 in the Sustainability category.',
    tech: ['Next.js 14', 'Google Gemini 2.0', 'Firebase', 'TypeScript', 'Graph Algorithms', 'AI/ML'],
    link: '/projects'
  };

  return (
    <div className="relative" style={{ overflowX: 'hidden' }}>
      {/* Hero Section - Fabian Creativo Style */}
      <motion.section 
        ref={containerRef}
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative z-10" 
        style={{ 
          minHeight: '100vh',
          backgroundColor: '#1a1a1a',
          overflow: 'hidden',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto w-full relative" style={{ minHeight: isMobile ? 'calc(100vh - 3rem)' : 'calc(100vh - 5rem)' }}>
          {/* Text on Left, Photo on Right */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 pt-16 lg:pt-20 mb-20 sm:mb-24 lg:mb-32">
            {/* Text Content on Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-start lg:items-start flex-1 max-w-2xl"
            >
              {/* Arrow Icon and Role Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-start gap-4 mb-8"
              >
                {/* Arrow Icon - Pointing Right */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mt-2"
                >
                  <svg 
                    width="36" 
                    height="36" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.div>

                {/* Role Text */}
                <div className="text-white space-y-1">
                  <p className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide">
                    Software Engineer &
                  </p>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide">
                    AI/ML Enthusiast
                  </p>
                </div>
              </motion.div>

              {/* Availability */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-6"
              >
                <p className="text-base md:text-lg" style={{ color: '#10b981' }}>
                  Available from May 2026
                </p>
              </motion.div>

              {/* About Section - 2 Lines */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="space-y-3 max-w-lg"
                style={{ color: '#6c757d' }}
              >
                <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed">
                  Building intelligent interfaces and systems that bridge the gap between technology and human needs.
                </p>
                <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed">
                  Passionate about creating impactful solutions through code, design, and innovation.
                </p>
              </motion.div>
            </motion.div>

            {/* Photo on Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="relative flex-shrink-0"
            >
              <img
                src="/images/Picture-removebg-preview.png"
                alt="Roshini Venkateswaran"
                className="w-64 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[500px] object-cover object-center"
                style={{
                  filter: 'brightness(1) contrast(1.05) saturate(1)',
                  imageRendering: 'high-quality',
                }}
                loading="eager"
                draggable="false"
              />
            </motion.div>
          </div>

          {/* Name at Bottom of Grey Container - Scroll-based Movement */}
          <div 
            ref={nameContainerRef}
            className="absolute left-0 py-2 sm:py-4 lg:py-8"
            style={{
              bottom: isMobile ? '-2rem' : '-3rem',
              width: '100vw',
              overflow: 'visible',
              pointerEvents: 'none',
              zIndex: 10,
              marginLeft: 'calc(-50vw + 50%)',
            }}
          >
            <motion.div
              className="text-white whitespace-nowrap"
              style={{
                x: nameX,
                fontSize: isMobile ? 'clamp(1.5rem, 12vw, 4rem)' : 'clamp(2rem, 18vw, 13rem)',
                lineHeight: '0.9',
                fontWeight: '700',
                letterSpacing: isMobile ? '-0.02em' : '-0.04em',
                paddingLeft: isMobile ? '1rem' : '0',
                paddingRight: isMobile ? '2rem' : '4vw',
                display: 'inline-block',
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Roshini Venkateswaran
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Explore Section */}
      <section ref={exploreRef} className="bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={exploreInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Header */}
            <div className="text-center">
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                animate={exploreInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              >
                Explore My Work
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={exploreInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl md:text-2xl max-w-2xl mx-auto"
                style={{ color: '#6c757d' }}
              >
                Discover my projects, experience, skills, and learn more about who I am
              </motion.p>
            </div>

            {/* Explore Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {exploreCards.map((card, index) => {
                const CardIcon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={exploreInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <Link
                      to={card.link}
                      className="group block h-full"
                    >
                      <div
                        className="relative bg-white/10 backdrop-blur-sm border rounded-xl p-6 transition-all shadow-lg hover:shadow-xl overflow-hidden h-full"
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
                      >
                        {/* Gradient overlay on hover */}
                        <motion.div
                          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${card.color}`}
                        />
                        
                        <div className="relative z-10">
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 0.5 }}
                            className="mb-4"
                          >
                            <CardIcon className="w-10 h-10 text-white" />
                          </motion.div>
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                            {card.title}
                          </h3>
                          <p className="text-sm mb-4 leading-relaxed" style={{ color: '#6c757d' }}>
                            {card.description}
                          </p>
                          <div className="flex items-center gap-2 group-hover:text-white transition-colors" style={{ color: '#6c757d' }}>
                            <span className="text-sm font-medium">Explore</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section ref={featuredRef} className="bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={featuredInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={featuredInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center justify-center gap-2 mb-4"
              >
                <svg className="absolute w-0 h-0">
                  <defs>
                    <linearGradient id="featuredIconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="100%" stopColor="#FFFFFF" />
                    </linearGradient>
                  </defs>
                </svg>
                <Sparkles className="w-6 h-6 gradient-icon" style={{ stroke: 'url(#featuredIconGradient)' }} />
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Featured Project
                </h2>
              </motion.div>
            </div>

            {/* Featured Project Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={featuredInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.01 }}
            >
              <Link to={featuredProject.link} className="block group">
                <div
                  className="relative bg-white/10 backdrop-blur-sm border rounded-2xl p-8 md:p-12 transition-all shadow-lg hover:shadow-xl overflow-hidden"
                    style={{
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                    e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  {/* Gradient overlay */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/10 to-purple-500/10"
                  />
                  
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
                      <div>
                        <motion.h3
                          className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-white transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          {featuredProject.name}
                        </motion.h3>
                        <p className="text-sm mb-3" style={{ color: '#6c757d' }}>
                          {featuredProject.description}
                        </p>
                        <p className="text-lg leading-relaxed max-w-2xl" style={{ color: '#6c757d' }}>
                          {featuredProject.tagline}
                        </p>
                </div>
                      <motion.div
                        animate={{
                          x: [0, 5, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="flex-shrink-0"
                      >
                        <ArrowRight className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                      </motion.div>
                </div>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-3 mt-6">
                      {featuredProject.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={featuredInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.5 + techIndex * 0.1 }}
                          className="px-4 py-2 border rounded-full text-sm font-medium"
                    style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            borderColor: 'rgba(255, 255, 255, 0.2)',
                            color: '#FFFFFF',
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
