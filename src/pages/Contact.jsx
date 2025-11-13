import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Github, FileText, Send, Sparkles, MessageCircle } from 'lucide-react';

// LinkedIn Logo SVG Component
const LinkedInLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// GitHub Logo SVG Component
const GitHubLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const Contact = () => {
  const handleResumeDownload = (e) => {
    e.preventDefault();
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Roshini_Venkateswaran_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'roshiniv@gwu.edu',
      link: 'mailto:roshiniv@gwu.edu',
      isLogo: false,
      showIcon: true,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/roshini-venkateswaran',
      link: 'https://www.linkedin.com/in/roshini-venkat/',
      isLogo: true,
      LogoComponent: LinkedInLogo,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/RoshiniVenkateswaran',
      link: 'https://github.com/RoshiniVenkateswaran',
      isLogo: true,
      LogoComponent: GitHubLogo,
    },
    {
      icon: FileText,
      label: 'Resume',
      value: 'Download Resume',
      link: '#',
      isLogo: false,
      onClick: handleResumeDownload,
      showIcon: true,
    },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <motion.div 
      className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        backgroundColor: '#000000',
      }}
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
            Let's Connect
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl max-w-2xl mx-auto"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology
          </motion.p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const methodRef = useRef(null);
            const methodInView = useInView(methodRef, { once: true, margin: "-50px" });
            
            return (
              <motion.a
                key={index}
                ref={methodRef}
                href={method.link}
                onClick={method.onClick}
                target={method.link.startsWith('http') ? '_blank' : '_self'}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                initial={{ opacity: 0, y: 30 }}
                animate={methodInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.08, duration: 0.4, ease: "easeOut" }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group relative bg-white/10 backdrop-blur-sm border rounded-xl p-6 shadow-lg hover:shadow-xl overflow-hidden cursor-pointer"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  willChange: 'transform',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)';
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 31, 63, 0.05), rgba(255, 220, 0, 0.05))',
                  }}
                />
                
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background: 'linear-gradient(110deg, transparent 40%, rgba(255,255,255,0.4) 50%, transparent 60%)',
                  }}
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut"
                  }}
                />

                <div className="relative z-10 flex items-center gap-4">
                  <svg className="absolute w-0 h-0">
                    <defs>
                      <linearGradient id={`contactIconGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FFFFFF" />
                        <stop offset="100%" stopColor="#FFFFFF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <motion.div
                    className="p-4 border rounded-xl"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                      transition: 'border-color 0.2s ease, background-color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {method.isLogo && method.LogoComponent ? (
                      <method.LogoComponent className="w-6 h-6 text-white" />
                    ) : (
                      <method.icon 
                        className="w-6 h-6 text-white" 
                      />
                    )}
                  </motion.div>
                  <div className="flex-1">
                          <p className="font-medium text-sm mb-1 group-hover:text-white" style={{ color: '#6c757d' }}>{method.label}</p>
                          <p className="text-white text-lg">{method.value}</p>
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
                  >
                      <Send className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Contact Form Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          whileHover={{ scale: 1.02, y: -5 }}
          className="group relative bg-white/10 backdrop-blur-sm border rounded-xl p-8 shadow-lg overflow-hidden"
          style={{
            borderColor: 'rgba(255, 255, 255, 0.2)',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
          }}
        >
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <svg className="absolute w-0 h-0">
                <defs>
                  <linearGradient id="messageIconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="100%" stopColor="#FFFFFF" />
                  </linearGradient>
                </defs>
              </svg>
              <MessageCircle className="w-6 h-6 gradient-icon" style={{ stroke: 'url(#messageIconGradient)' }} />
                    <h2 className="text-2xl font-bold text-white">
                      Send a Message
                    </h2>
                  </div>
                  <p className="mb-6" style={{ color: '#6c757d' }}>
                    Prefer to send an email directly? Feel free to reach out at{' '}
              <motion.a
                href="mailto:roshiniv@gwu.edu"
                className="text-white hover:underline font-semibold relative inline-block"
                whileHover={{ scale: 1.1 }}
              >
                roshiniv@gwu.edu
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5"
                    style={{
                      background: '#FFFFFF',
                    }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              {' '}or use the chatbot to start a conversation!
            </p>
            <motion.div
              className="flex items-center gap-2 text-white text-sm rounded-lg p-3"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Try the chatbot in the bottom right corner for instant responses!</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative bg-white/10 backdrop-blur-sm border rounded-xl p-8 shadow-lg overflow-hidden"
            style={{
              borderColor: 'rgba(255, 255, 255, 0.2)',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
            }}
          >
            <p className="leading-relaxed relative z-10 text-lg" style={{ color: '#6c757d' }}>
              Whether you're interested in collaboration, have questions about my work, 
              or just want to connect, I'd love to hear from you. Let's build something amazing together!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;

