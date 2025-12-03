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
      style={{ backgroundColor: '#1a1a1a' }}
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
                      style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
                      onError={(e) => {
                        console.error('Image failed to load:', '/images/Picture.png');
                      }}
                    />
                  </div>
                  
                  {/* Name and Info */}
                    <div className="flex-1">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                      Roshini Venkateswaran
                    </h2>
                    <p className="text-xl md:text-2xl mb-3" style={{ color: '#6c757d' }}>
                      Software Developer Intern @ Prommuni
                    </p>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" style={{ color: '#6c757d' }} />
                      <p className="text-lg" style={{ color: '#6c757d' }}>
                        Washington, DC
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Cards Below Name */}
                <div className="flex flex-col gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="inline-flex items-center gap-3 px-6 py-4 bg-white/10 border rounded-lg cursor-pointer"
                    style={{
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      transition: 'border-color 0.2s ease, background-color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    }}
                  >
                    <GraduationCap className="w-6 h-6 text-white" />
                    <div>
                      <p className="text-white font-semibold">George Washington University</p>
                      <p className="text-sm" style={{ color: '#6c757d' }}>MS Computer Science • Graduating May 2026</p>
                    </div>
                  </motion.div>
                  
                  {/* Availability and Experience - Side by Side */}
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="px-6 py-4 bg-white/10 border rounded-lg"
                      style={{
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        transition: 'border-color 0.2s ease, background-color 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                      }}
                    >
                      <p className="text-white font-semibold mb-1">Availability</p>
                      <p className="text-sm" style={{ color: '#6c757d' }}>May 2026 • Internships & Full-time</p>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="px-6 py-4 bg-white/10 border rounded-lg"
                      style={{
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        transition: 'border-color 0.2s ease, background-color 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                      }}
                    >
                      <p className="text-white font-semibold mb-1">Experience</p>
                      <p className="text-sm" style={{ color: '#6c757d' }}>5 Internships</p>
                  </motion.div>
                  </div>
                  
                  {/* Achievement Card */}
                  <motion.a
                    href="https://lnkd.in/gMP_i8Vu"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="px-6 py-4 bg-white/10 border rounded-lg cursor-pointer"
                    style={{
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      transition: 'border-color 0.2s ease, background-color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <Trophy className="w-5 h-5 text-white" />
                      <div>
                        <p className="text-white font-semibold mb-1">Achievement</p>
                        <p className="text-sm" style={{ color: '#6c757d' }}>2nd Place @ HACKnyu</p>
                      </div>
                    </div>
                  </motion.a>
                  
                  {/* Download Resume Button */}
                  <motion.button
                    onClick={handleResumeDownload}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white/10 border rounded-lg cursor-pointer"
                    style={{
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      transition: 'border-color 0.2s ease, background-color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    }}
                  >
                    <Download className="w-5 h-5 text-white" />
                    <span className="text-white font-semibold">Download Resume</span>
                  </motion.button>

                  {/* What I'm Looking For Section - Right below Download Resume */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-0"
                  >
                    <p className="text-sm mb-3" style={{ color: '#9ca3af' }}>
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
                          className="px-3 py-1.5 bg-white/5 border rounded-full text-xs"
                          style={{
                            borderColor: 'rgba(255, 255, 255, 0.1)',
                            color: '#d1d5db',
                            transition: 'all 0.3s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                            e.currentTarget.style.color = '#ffffff';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                            e.currentTarget.style.color = '#d1d5db';
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
                <div className="bg-white/10 border rounded-lg p-6" style={{ borderColor: 'rgba(255, 255, 255, 0.2)', backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                  <p className="text-lg leading-relaxed mb-4" style={{ color: '#6c757d' }}>
                    Hi, I'm Roshini Venkateswaran, a passionate Software Developer and AI enthusiast currently pursuing my M.S. in Computer Science at The George Washington University. With a foundation in full-stack development and a growing focus on machine learning, automation, and cloud technologies, I love building meaningful digital experiences that blend intelligent systems with clean, user-focused design.
                  </p>
                  <p className="text-lg leading-relaxed mb-4" style={{ color: '#6c757d' }}>
                    Over the years, I've developed products across industries - from an AI-powered chatbot at Medica to a cross-platform roommate finder app at Prommuni and a real-time expense tracker in Flutter. My journey began with a curiosity for how systems think and evolved into crafting scalable, data-driven solutions using Python, Java, Flutter, AWS, and TensorFlow.
                  </p>
                  <p className="text-lg leading-relaxed mb-4" style={{ color: '#6c757d' }}>
                    When I'm not developing or experimenting with AI, you'll find me on the badminton court, painting, or sipping coffee.
                  </p>
                  <p className="text-lg leading-relaxed" style={{ color: '#6c757d' }}>
                    I'm always looking for opportunities to build real products, push my technical limits, and work with teams who like asking "why not?" as much as "how?"
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
            className="text-4xl md:text-5xl font-bold text-white mb-12 flex items-center gap-4 justify-center"
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
                    style={{ color: '#ffffff' }}
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
                    style={{ color: '#ffffff' }}
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
                        className="flex-shrink-0 bg-white/10 border rounded-xl overflow-hidden cursor-pointer group flex flex-col"
                style={{
                          width: `calc((100% - ${(cardsPerPage - 1) * 24}px) / ${cardsPerPage})`,
                          minHeight: '280px',
                          borderColor: 'rgba(255, 255, 255, 0.2)',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                          e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <div className="aspect-[4/3] bg-white/5 flex items-center justify-center overflow-hidden relative flex-1">
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
                            <GraduationCap className="w-16 h-16 text-white/30" />
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="text-white font-semibold text-lg mb-1">{cert.title}</h3>
                          <p className="text-sm mb-1" style={{ color: '#6c757d' }}>{cert.issuer}</p>
                          <p className="text-xs" style={{ color: '#6c757d' }}>{cert.date}</p>
                </div>
                      </motion.a>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-white/60">Add your certifications to display them here</p>
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
            className="text-4xl font-bold text-white mb-8 flex items-center justify-center gap-2"
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
              {/* Navigation Buttons */}
              {testimonials.length > testimonialCardsPerPage && (
                <>
                  <motion.button
                    onClick={prevTestimonials}
                    disabled={!canGoPrevTestimonial}
                    whileHover={canGoPrevTestimonial ? { scale: 1.1 } : {}}
                    whileTap={canGoPrevTestimonial ? { scale: 0.9 } : {}}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    <ChevronLeft 
                      className="w-6 h-6 text-white" 
                      style={{ 
                        opacity: canGoPrevTestimonial ? 1 : 0.5 
                      }}
                    />
                  </motion.button>
                  <motion.button
                    onClick={nextTestimonials}
                    disabled={!canGoNextTestimonial}
                    whileHover={canGoNextTestimonial ? { scale: 1.1 } : {}}
                    whileTap={canGoNextTestimonial ? { scale: 0.9 } : {}}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    <ChevronRight 
                      className="w-6 h-6 text-white" 
                      style={{ 
                        opacity: canGoNextTestimonial ? 1 : 0.5 
                      }}
                    />
                  </motion.button>
                </>
              )}

              {/* Testimonials Carousel */}
              <div className="overflow-hidden relative">
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
                        className="flex-shrink-0 bg-white/10 border rounded-xl p-6 flex flex-col"
                style={{
                          width: `calc((100% - ${(testimonialCardsPerPage - 1) * 24}px) / ${testimonialCardsPerPage})`,
                          minHeight: '280px',
                          borderColor: 'rgba(255, 255, 255, 0.2)',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                          e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <Quote className="w-8 h-8 text-white/30 mb-4 flex-shrink-0" />
                        <p className="italic mb-4 leading-relaxed flex-grow text-base" style={{ color: '#6c757d' }}>
                          "{testimonial.quote}"
                        </p>
                        <div className="flex items-center gap-3 mt-auto">
                          <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 overflow-hidden">
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
                            <p className="text-white font-semibold text-lg">{testimonial.name}</p>
                            <p className="text-sm" style={{ color: '#6c757d' }}>{testimonial.title}</p>
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
              <p className="text-white/60">Add your testimonials to display them here</p>
          </div>
          )}
        </motion.section>

      </div>
    </motion.div>
  );
};


