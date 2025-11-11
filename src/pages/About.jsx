import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Coffee, Book, Camera, Sparkles, GraduationCap, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  // Personal interests - Update these with your actual interests
  const personalInterests = [
    { icon: Book, title: 'Reading', description: 'Exploring new worlds through books' },
    { icon: Coffee, title: 'Coffee Enthusiast', description: 'Finding the perfect brew' },
    { icon: Camera, title: 'Photography', description: 'Capturing moments and memories' },
    { icon: Heart, title: 'Volunteering', description: 'Giving back to the community' },
  ];

  // Personal values/philosophy - Update with your own
  const personalValues = [
    {
      title: 'Family Time',
      description: 'The priority is time with family and loved ones.',
      icon: '👨‍👩‍👧‍👦'
    },
    {
      title: 'Continuous Learning',
      description: 'Always seeking to grow and learn new things.',
      icon: '📚'
    },
    {
      title: 'Work-Life Balance',
      description: 'Taking breaks and enjoying the moment is essential.',
      icon: '🌅'
    },
    {
      title: 'Collaboration',
      description: 'Harmony and unity in teamwork leads to better outcomes.',
      icon: '🤝'
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
            About Me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-white/80"
          >
            Who I am beyond the professional
          </motion.p>
        </motion.div>

        {/* Personal Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-20"
        >
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Who am I beyond the professional
            </h2>
            <div className="bg-white/10 border rounded-lg p-6 mb-6" style={{ borderColor: 'rgba(255, 255, 255, 0.2)', backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
              <p className="text-lg text-white/80 leading-relaxed mb-3">
                I'm actively seeking software engineering opportunities where I can leverage my technical skills and passion for building innovative solutions.
              </p>
              <p className="text-lg text-white/80 leading-relaxed mb-3">
                With a strong foundation in full-stack development, AI/ML integration, and a commitment to creating user-centered applications, I'm excited to contribute to impactful projects.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                I'm open to roles that challenge me to grow, collaborate with talented teams, and make a meaningful difference through technology.
              </p>
            </div>
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
                <p className="text-white/80 text-sm">MS Computer Science • Graduating May 2026</p>
              </div>
            </motion.div>
          </div>

          {/* Personal Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {personalValues.map((value, index) => {
              const valueRef = useRef(null);
              const valueInView = useInView(valueRef, { once: true, margin: "-50px" });
              
              return (
                <motion.div
                  key={index}
                  ref={valueRef}
                  initial={{ opacity: 0, y: 30 }}
                  animate={valueInView ? { opacity: 1, y: 0 } : {}}
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
                  <div className="relative z-10 flex items-start gap-4">
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "easeInOut"
                      }}
                      className="text-5xl"
                    >
                      {value.icon}
                    </motion.div>
                    <div className="flex-1">
                       <motion.h3
                         className="text-xl font-bold mb-2 text-white"
                         whileHover={{ x: 5 }}
                       >
                         <span className="text-white">
                           {value.title}
                         </span>
                       </motion.h3>
                       <p className="text-white/80">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Personal Interests */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-2xl font-bold text-white mb-6 flex items-center gap-2"
            >
              My Interests
              <svg className="absolute w-0 h-0">
                <defs>
                      <linearGradient id="aboutIconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FFFFFF" />
                        <stop offset="100%" stopColor="#FFFFFF" />
                      </linearGradient>
                </defs>
              </svg>
              <Sparkles className="w-5 h-5 gradient-icon" style={{ stroke: 'url(#aboutIconGradient)' }} />
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {personalInterests.map((interest, index) => {
                const interestRef = useRef(null);
                const interestInView = useInView(interestRef, { once: true, margin: "-50px" });
                
                return (
                  <motion.div
                    key={index}
                    ref={interestRef}
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={interestInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5, ease: "easeOut" }}
                    whileHover={{ 
                      y: -8, 
                      scale: 1.05, 
                      rotate: [0, -5, 5, 0],
                    }}
                    className="group bg-white/10 border rounded-xl p-4 text-center shadow-md cursor-pointer"
                    style={{
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                      e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <interest.icon 
                        className="w-8 h-8 gradient-icon mx-auto mb-2" 
                        style={{ stroke: 'url(#aboutIconGradient)' }}
                      />
                    </motion.div>
                    <p className="text-sm font-bold text-white mb-1">{interest.title}</p>
                    <p className="text-xs text-white/70">{interest.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Photo Placeholder Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white/10 border rounded-lg p-8 text-center shadow-sm"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  transition: 'border-color 0.2s ease, background-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }}
              >
                <div className="w-full h-48 bg-white/5 rounded-lg mb-4 flex items-center justify-center">
                  <Camera className="w-12 h-12 text-white/30" />
                </div>
                <p className="text-sm text-white/70">Add personal photos here</p>
              </div>
            ))}
          </motion.div>
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
            className="text-4xl font-bold text-white mb-8 flex items-center gap-2"
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Testimonial 1 */}
            {(() => {
              const testimonialRef = useRef(null);
              const testimonialInView = useInView(testimonialRef, { once: true, margin: "-50px" });
              
              return (
                <motion.div
                  ref={testimonialRef}
                  initial={{ opacity: 0, y: 20 }}
                  animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9, duration: 0.4 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white/10 border rounded-xl p-6 flex flex-col h-full"
                  style={{
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
                  <p className="text-white/80 italic mb-4 leading-relaxed flex-grow">
                    "Roshini was a joy to work with throughout her internship at Medica. Her ability to pick up on new things and leverage her technical knowledge made her a valuable and productive team member."
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-white/60 text-xs font-semibold">PS</span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-white font-semibold text-sm">Philipp Spanowsky</p>
                      <p className="text-white/60 text-xs">UiPath System Engineer at Medica</p>
                    </div>
                  </div>
                </motion.div>
              );
            })()}

            {/* Testimonial 2 */}
            {(() => {
              const testimonialRef = useRef(null);
              const testimonialInView = useInView(testimonialRef, { once: true, margin: "-50px" });
              
              return (
                <motion.div
                  ref={testimonialRef}
                  initial={{ opacity: 0, y: 20 }}
                  animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.0, duration: 0.4 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white/10 border rounded-xl p-6 flex flex-col h-full"
                  style={{
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
                  <p className="text-white/80 italic mb-4 leading-relaxed flex-grow">
                    "Roshini Venkateswaran is a highly dedicated and talented individual with strong technical, leadership, and teamwork skills. Her curiosity, perseverance, and passion for learning make her stand out, and I'm confident she'll bring the same excellence and commitment to everything she pursues."
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-white/60 text-xs font-semibold">VK</span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-white font-semibold text-sm">Vinodh Kumar S</p>
                      <p className="text-white/60 text-xs">Professor and Academic Head</p>
                    </div>
                  </div>
                </motion.div>
              );
            })()}
          </div>
        </motion.section>

        {/* Professional Career Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="mb-16"
        >
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-white mb-4">
              My career in design, development & AI/ML
            </h2>
            <p className="text-lg text-white/80 leading-relaxed max-w-3xl">
              More than 5 years in the digital world. I studied Computer Science at George Washington University, 
              where I discovered my passion for the digital realm. From an early age, I loved everything related 
              to technology and how it can serve humanity.
            </p>
          </div>

          <div className="bg-white/10 border rounded-lg p-8 mb-8" style={{ borderColor: 'rgba(255, 255, 255, 0.2)', backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
            <p className="text-lg text-white/80 leading-relaxed">
              In my journey, I've learned that the roles of developer, designer, and AI engineer aren't separate— 
              they're interconnected. This experience provided me with a holistic view of digital creation.
            </p>
            <p className="text-lg text-white/80 leading-relaxed mt-4">
              Thanks to this, I've had the opportunity to work with clients and teams from around the world, 
              enriching my perspective and expanding my professional horizon.
            </p>
          </div>

          <div className="flex gap-4">
              <Link
                to="/projects"
                className="px-6 py-3 text-black rounded-lg font-semibold hover:shadow-lg bg-white hover:bg-white/90"
                style={{ transition: 'background-color 0.2s ease, box-shadow 0.2s ease' }}
              >
                Get to know my work
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 bg-transparent border-2 rounded-lg font-semibold hover:shadow-md text-white"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                }}
              >
                Let's talk?
              </Link>
          </div>
        </motion.section>

      </div>
    </motion.div>
  );
};

export default About;

