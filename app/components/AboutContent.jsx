'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Heart, Coffee, Book, Camera, Sparkles, GraduationCap, Quote, ChevronLeft, ChevronRight, MapPin, FileText, Download, Trophy, Briefcase } from 'lucide-react'

export default function AboutContent() {
  // Resume download handler
  const handleResumeDownload = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Roshini_Venkateswaran_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  // Helper to encode image paths with spaces
  const encodeImagePath = (path) => {
    // For Vite public folder, we need to encode spaces in the filename
    // Split path and encode only the filename part
    const lastSlash = path.lastIndexOf('/');
    if (lastSlash === -1) return encodeURIComponent(path);
    
    const dir = path.substring(0, lastSlash + 1);
    const filename = path.substring(lastSlash + 1);
    return dir + encodeURIComponent(filename);
  };

  // Certifications data
  const certifications = [
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'Issued: May 2, 2025 • Expires: May 2, 2028',
      image: '/images/aws-cloud-practitioner.png',
      link: 'https://aws.amazon.com/verification',
    },
    {
      title: 'AWS Academy Machine Learning Foundations',
      issuer: 'AWS Academy',
      date: 'Issued: April 15, 2025 • 20 hours',
      image: '/images/aws-ml-foundations.png',
      link: 'https://www.credly.com/go/OfrxHug2',
    },
    {
      title: 'AWS Academy Cloud Operations',
      issuer: 'AWS Academy',
      date: 'Issued: April 4, 2025 • 40 hours',
      image: '/images/aws-cloud-operations.png',
      link: 'https://www.credly.com/go/Fbj4xkgn',
    },
    {
      title: 'AWS Academy Cloud Foundations',
      issuer: 'AWS Academy',
      date: 'Issued: March 20, 2025 • 20 hours',
      image: '/images/aws-cloud-foundations.png',
      link: 'https://www.credly.com',
    },
    {
      title: 'AWS Academy Cloud Architecting',
      issuer: 'AWS Academy',
      date: 'Issued: March 15, 2025 • 40 hours',
      image: '/images/aws-cloud-architecting.png',
      link: 'https://www.credly.com',
    },
    {
      title: 'AWS Academy Cloud Security',
      issuer: 'AWS Academy',
      date: 'Issued: March 10, 2025 • 20 hours',
      image: '/images/aws-cloud-security.png',
      link: 'https://www.credly.com',
    },
    {
      title: 'AWS Academy Cloud Development',
      issuer: 'AWS Academy',
      date: 'Issued: March 5, 2025 • 40 hours',
      image: '/images/aws-cloud-development.png',
      link: 'https://www.credly.com',
    },
  ];

  const [currentCertIndex, setCurrentCertIndex] = useState(0);
  const cardsPerPage = 3; // Number of cards visible at once

  const maxIndex = Math.max(0, certifications.length - cardsPerPage);
  const canGoNext = currentCertIndex < maxIndex;
  const canGoPrev = currentCertIndex > 0;

  const nextCerts = () => {
    if (canGoNext) {
      setCurrentCertIndex((prev) => Math.min(prev + 1, maxIndex));
    }
  };

  const prevCerts = () => {
    if (canGoPrev) {
      setCurrentCertIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  // Testimonials data
  const testimonials = [
    {
      quote: "Roshini was a joy to work with throughout her internship at Medica. Her ability to pick up on new things and leverage her technical knowledge made her a valuable and productive team member.",
      name: "Philipp Spanowsky",
      title: "UiPath System Engineer at Medica",
      image: "/images/philipp.jpeg",
      initials: "PS"
    },
    {
      quote: "Roshini Venkateswaran is a highly dedicated and talented individual with strong technical, leadership, and teamwork skills. Her curiosity, perseverance, and passion for learning make her stand out, and I'm confident she'll bring the same excellence and commitment to everything she pursues.",
      name: "Vinodh Kumar S",
      title: "Professor and Academic Head",
      image: "/images/vinod kumar.jpeg",
      initials: "VK"
    },
    {
      quote: "Roshini brings a great mix of speed, clarity, and attention to detail to mobile development. She learns fast, communicates well, and consistently turns ideas into smooth, usable features. Her initiative and follow-through make her a valuable part of any mobile team.",
      name: "Bradley Mascarenhas",
      title: "Founder of Prommuni | Consultant @ Deloitte",
      image: "/images/bradley.png",
      initials: "BM"
    }
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [testimonialCardsPerPage, setTestimonialCardsPerPage] = useState(2);

  // Responsive cards per page for testimonials
  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth >= 768) {
        setTestimonialCardsPerPage(2); // Desktop: 2 cards
      } else {
        setTestimonialCardsPerPage(1); // Mobile: 1 card
      }
    };
    updateCardsPerPage();
    window.addEventListener('resize', updateCardsPerPage);
    return () => window.removeEventListener('resize', updateCardsPerPage);
  }, []);

  // Reset index when cards per page changes
  useEffect(() => {
    const maxIdx = Math.max(0, testimonials.length - testimonialCardsPerPage);
    if (currentTestimonialIndex > maxIdx) {
      setCurrentTestimonialIndex(maxIdx);
    }
  }, [testimonialCardsPerPage, testimonials.length, currentTestimonialIndex]);

  const testimonialMaxIndex = Math.max(0, testimonials.length - testimonialCardsPerPage);
  const canGoNextTestimonial = currentTestimonialIndex < testimonialMaxIndex;
  const canGoPrevTestimonial = currentTestimonialIndex > 0;

  const nextTestimonials = () => {
    const maxIdx = Math.max(0, testimonials.length - testimonialCardsPerPage);
    setCurrentTestimonialIndex((prev) => Math.min(prev + 1, maxIdx));
  };

  const prevTestimonials = () => {
    setCurrentTestimonialIndex((prev) => Math.max(prev - 1, 0));
  };


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
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Personal Section */}
        <motion.section
          ref={containerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-20"
        >
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column: Name and Cards */}
              <div>
                {/* Name and Title */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="mb-6 flex items-center gap-6"
                >
                  {/* Profile Picture */}
                  <div className="flex-shrink-0">
                    <img
                      src="/images/Picture.png"
                      alt="Roshini Venkateswaran"
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2"
                      style={{ borderColor: 'var(--card-border)' }}
                      onError={(e) => {
                        console.error('Image failed to load:', '/images/Picture.png');
                      }}
                    />
                  </div>
                  
                  {/* Name and Info */}
                    <div className="flex-1">
                    <h2 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                      Roshini Venkateswaran
                    </h2>
                    <p className="text-xl md:text-2xl mb-3" style={{ color: 'var(--text-secondary)' }}>
                      Software Developer Intern @ Prommuni
                    </p>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" style={{ color: 'var(--text-secondary)' }} />
                      <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                        Washington, DC
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Cards Below Name */}
                <div className="flex flex-col gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="inline-flex items-center gap-3 px-6 py-4 border rounded-lg cursor-pointer shadow-sm"
                    style={{
                      borderColor: 'var(--card-border)',
                      backgroundColor: 'var(--card-bg-alt)',
                      transition: 'border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--card-border-strong)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--card-border)';
                      e.currentTarget.style.boxShadow = '';
                    }}
                  >
                    <GraduationCap className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
                    <div>
                      <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>George Washington University</p>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>MS Computer Science • Graduating May 2026</p>
                    </div>
                  </motion.div>
                  
                  {/* Availability and Experience - Side by Side */}
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="px-6 py-4 border rounded-lg shadow-sm"
                      style={{
                        borderColor: 'var(--card-border)',
                        backgroundColor: 'var(--card-bg-alt)',
                        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--card-border-strong)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--card-border)';
                        e.currentTarget.style.boxShadow = '';
                      }}
                    >
                      <p className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Availability</p>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>May 2026 • Internships & Full-time</p>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="px-6 py-4 border rounded-lg shadow-sm"
                      style={{
                        borderColor: 'var(--card-border)',
                        backgroundColor: 'var(--card-bg-alt)',
                        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--card-border-strong)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--card-border)';
                        e.currentTarget.style.boxShadow = '';
                      }}
                    >
                      <p className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Experience</p>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>5 Internships</p>
                  </motion.div>
                  </div>
                  
                  {/* Achievement Card */}
                  <motion.a
                    href="https://lnkd.in/gMP_i8Vu"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="px-6 py-4 border rounded-lg cursor-pointer shadow-sm"
                    style={{
                      borderColor: 'var(--card-border)',
                      backgroundColor: 'var(--card-bg-alt)',
                      transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--card-border-strong)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--card-border)';
                      e.currentTarget.style.boxShadow = '';
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <Trophy className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
                      <div>
                        <p className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Achievement</p>
                        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>2nd Place @ HACKnyu</p>
                      </div>
                    </div>
                  </motion.a>
                  
                  {/* Download Resume Button */}
                  <motion.button
                    onClick={handleResumeDownload}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 border rounded-lg cursor-pointer shadow-sm"
                    style={{
                      borderColor: 'var(--card-border)',
                      backgroundColor: 'var(--card-bg-alt)',
                      transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--card-border-strong)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--card-border)';
                      e.currentTarget.style.boxShadow = '';
                    }}
                  >
                    <Download className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
                    <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Download Resume</span>
                  </motion.button>

                  {/* What I'm Looking For Section - Right below Download Resume */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-0"
                  >
                    <p className="text-sm mb-3" style={{ color: 'var(--text-muted)' }}>
                      Open to opportunities in:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Software Developer', 'ML Engineer', 'Mobile App Developer', 'Flutter Developer'].map((role, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-1.5 border rounded-full text-xs"
                          style={{
                            borderColor: 'var(--card-border)',
                            backgroundColor: 'var(--card-bg-alt)',
                            color: 'var(--text-secondary)',
                            transition: 'all 0.3s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'var(--card-border-strong)';
                            e.currentTarget.style.color = 'var(--text-primary)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'var(--card-border)';
                            e.currentTarget.style.color = 'var(--text-secondary)';
                          }}
                        >
                          {role}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Right Column: Bio */}
              <div>
                <div className="about-bio-block border rounded-lg p-6 shadow-md border-l-4" style={{ borderColor: 'var(--card-border-strong)', borderLeftColor: 'var(--card-border-strong)', backgroundColor: 'var(--card-bg-alt)' }}>
                  <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                    I'm a software developer focused on building full-stack applications and intelligent systems that combine backend engineering with applied AI. My work involves designing scalable APIs, building responsive web applications, and integrating machine learning capabilities into real-world products.
                  </p>
                  <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                    Through my internships, I've worked on automation systems and software tools aimed at improving operational efficiency and supporting production workflows. These experiences strengthened my ability to translate real-world problems into practical, reliable software solutions.
                  </p>
                  <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                    Alongside this, I enjoy developing AI-driven applications that move beyond experimentation and focus on usability and impact. My projects explore areas such as intelligent marketplaces, AI-powered analytics platforms, and systems that combine modern web development with machine learning.
                  </p>
                  <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    I'm actively seeking opportunities in software engineering roles where I can contribute to building scalable systems, intelligent applications, and impactful technology products.
                  </p>
                </div>
              </div>
              
            </div>
          </div>

        </motion.section>

        {/* Certifications Section */}
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-4 justify-center"
            style={{ color: 'var(--text-primary)' }}
          >
            <svg className="absolute w-0 h-0">
              <defs>
                <linearGradient id="certificationsIconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="100%" stopColor="#FFFFFF" />
                </linearGradient>
              </defs>
            </svg>
            Certifications
            <GraduationCap className="w-8 h-8 gradient-icon" style={{ stroke: 'url(#certificationsIconGradient)' }} />
          </motion.h2>

          {certifications.length > 0 ? (
            <div className="relative">
              {/* Navigation Buttons */}
              {certifications.length > cardsPerPage && (
                <>
                  <motion.button
                    onClick={prevCerts}
                    disabled={!canGoPrev}
                    whileHover={canGoPrev ? { scale: 1.1 } : {}}
                    whileTap={canGoPrev ? { scale: 0.9 } : {}}
                    className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 rounded-full border transition-all ${
                      canGoPrev 
                        ? 'bg-white/10 border-white/20 hover:bg-white/20 cursor-pointer' 
                        : 'bg-white/5 border-white/10 cursor-not-allowed opacity-50'
                    }`}
                    style={{ color: 'var(--text-primary)' }}
                    aria-label="Previous certifications"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </motion.button>
                  <motion.button
                    onClick={nextCerts}
                    disabled={!canGoNext}
                    whileHover={canGoNext ? { scale: 1.1 } : {}}
                    whileTap={canGoNext ? { scale: 0.9 } : {}}
                    className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 rounded-full border transition-all ${
                      canGoNext 
                        ? 'bg-white/10 border-white/20 hover:bg-white/20 cursor-pointer' 
                        : 'bg-white/5 border-white/10 cursor-not-allowed opacity-50'
                    }`}
                    style={{ color: 'var(--text-primary)' }}
                    aria-label="Next certifications"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </motion.button>
                </>
              )}

              {/* Certifications Carousel */}
              <div className="overflow-hidden relative">
                <motion.div
                  className="flex gap-6"
                  animate={{
                    x: `-${currentCertIndex * (100 / cardsPerPage)}%`,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {certifications.map((cert, index) => {
                    const certRef = useRef(null);
                    const certInView = useInView(certRef, { once: true, margin: "-50px" });
                    
                    return (
                      <motion.a
                        key={index}
                        ref={certRef}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={certInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        className="flex-shrink-0 border rounded-xl overflow-hidden cursor-pointer group flex flex-col shadow-sm"
                style={{
                          width: `calc((100% - ${(cardsPerPage - 1) * 24}px) / ${cardsPerPage})`,
                          minHeight: '280px',
                          borderColor: 'var(--card-border)',
                          backgroundColor: 'var(--card-bg)',
                          transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = 'var(--card-border-strong)';
                          e.currentTarget.style.boxShadow = '0 12px 24px -8px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'var(--card-border)';
                          e.currentTarget.style.boxShadow = '';
                        }}
                      >
                        <div className="aspect-[4/3] flex items-center justify-center overflow-hidden relative flex-1" style={{ backgroundColor: 'var(--card-bg-alt)' }}>
                          <img
                            src={encodeImagePath(cert.image)}
                            alt={cert.title}
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                            style={{ maxHeight: '100%', width: 'auto' }}
                            loading="lazy"
                            onError={(e) => {
                              console.error('Image failed to load:', cert.image, 'Encoded:', encodeImagePath(cert.image));
                              e.target.style.display = 'none';
                              const fallback = e.target.parentElement.querySelector('.cert-fallback');
                              if (fallback) fallback.style.display = 'flex';
                            }}
                            onLoad={(e) => {
                              const fallback = e.target.parentElement.querySelector('.cert-fallback');
                              if (fallback) fallback.style.display = 'none';
                            }}
                          />
                          <div className="cert-fallback hidden absolute inset-0 w-full h-full items-center justify-center">
                            <GraduationCap className="w-16 h-16" style={{ color: 'var(--text-muted)' }} />
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-lg mb-1" style={{ color: 'var(--text-primary)' }}>{cert.title}</h3>
                          <p className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>{cert.issuer}</p>
                          <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{cert.date}</p>
                </div>
                      </motion.a>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <p style={{ color: 'var(--text-muted)' }}>Add your certifications to display them here</p>
            </div>
          )}
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-4xl font-bold mb-8 flex items-center justify-center gap-2"
            style={{ color: 'var(--text-primary)' }}
          >
            <svg className="absolute w-0 h-0">
              <defs>
                <linearGradient id="testimonialsIconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="100%" stopColor="#FFFFFF" />
                </linearGradient>
              </defs>
            </svg>
            Testimonials
            <Quote className="w-6 h-6 gradient-icon" style={{ stroke: 'url(#testimonialsIconGradient)' }} />
          </motion.h2>

          {testimonials.length > 0 ? (
            <div className="relative">
              {/* Navigation Buttons - sit in side margins so they don't clip content */}
              {testimonials.length > testimonialCardsPerPage && (
                <>
                  <motion.button
                    onClick={prevTestimonials}
                    disabled={!canGoPrevTestimonial}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      borderColor: 'var(--card-border)',
                      backgroundColor: 'var(--card-bg)',
                    }}
                  >
                    <ChevronLeft 
                      className="w-6 h-6"
                      style={{ color: 'var(--text-primary)', opacity: canGoPrevTestimonial ? 1 : 0.5 }}
                    />
                  </motion.button>
                  <motion.button
                    onClick={nextTestimonials}
                    disabled={!canGoNextTestimonial}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      borderColor: 'var(--card-border)',
                      backgroundColor: 'var(--card-bg)',
                    }}
                  >
                    <ChevronRight 
                      className="w-6 h-6"
                      style={{ color: 'var(--text-primary)', opacity: canGoNextTestimonial ? 1 : 0.5 }}
                    />
                  </motion.button>
                </>
              )}

              {/* Testimonials Carousel - inset so last card and arrows aren't clipped */}
              <div className="overflow-hidden relative mx-14">
                <motion.div
                  className="flex gap-6"
                  animate={{
                    x: `-${currentTestimonialIndex * (100 / testimonialCardsPerPage)}%`,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {testimonials.map((testimonial, index) => {
                    const testimonialRef = useRef(null);
                    const testimonialInView = useInView(testimonialRef, { once: true, margin: "-50px" });
                    
                    return (
                      <motion.div
                        key={index}
                        ref={testimonialRef}
                        initial={{ opacity: 0, y: 20 }}
                        animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        className="flex-shrink-0 border rounded-xl p-6 flex flex-col shadow-sm"
                style={{
                          width: `calc((100% - ${(testimonialCardsPerPage - 1) * 24}px) / ${testimonialCardsPerPage})`,
                          minHeight: '280px',
                          borderColor: 'var(--card-border)',
                          backgroundColor: 'var(--card-bg)',
                          transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = 'var(--card-border-strong)';
                          e.currentTarget.style.boxShadow = '0 12px 24px -8px rgba(0, 0, 0, 0.15)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'var(--card-border)';
                          e.currentTarget.style.boxShadow = '';
                        }}
                      >
                        <Quote className="w-8 h-8 mb-4 flex-shrink-0" style={{ color: 'var(--text-muted)' }} />
                        <p className="italic mb-4 leading-relaxed flex-grow text-base" style={{ color: 'var(--text-secondary)' }}>
                          "{testimonial.quote}"
                        </p>
                        <div className="flex items-center gap-3 mt-auto">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden" style={{ backgroundColor: 'var(--card-bg-alt)', border: '1px solid var(--card-border)' }}>
                            <img 
                              src={testimonial.image.includes('vinod') ? encodeURI(testimonial.image) : testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover rounded-full"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentElement.innerHTML = `<span class="text-xs font-semibold" style="color: #6c757d;">${testimonial.initials}</span>`;
                              }}
                            />
                          </div>
                          <div className="min-w-0">
                            <p className="font-semibold text-lg" style={{ color: 'var(--text-primary)' }}>{testimonial.name}</p>
                            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{testimonial.title}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <p style={{ color: 'var(--text-muted)' }}>Add your testimonials to display them here</p>
          </div>
          )}
        </motion.section>

      </div>
    </motion.div>
  );
};


