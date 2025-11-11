import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Github, FileText, Send, Sparkles, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'roshiniv@gwu.edu',
      link: 'mailto:roshiniv@gwu.edu',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/roshini-venkateswaran',
      link: 'https://linkedin.com/in/roshini-venkateswaran',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/RoshiniVenkateswaran',
      link: 'https://github.com/RoshiniVenkateswaran',
    },
    {
      icon: FileText,
      label: 'Resume',
      value: 'Download Resume',
      link: '#',
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
            className="text-xl text-white/90 max-w-2xl mx-auto"
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
                target={method.link.startsWith('http') ? '_blank' : '_self'}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                initial={{ opacity: 0, y: 30 }}
                animate={methodInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.08, duration: 0.4, ease: "easeOut" }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group relative bg-white/10 backdrop-blur-sm border rounded-xl p-6 transition-all shadow-lg hover:shadow-xl overflow-hidden"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  willChange: 'transform',
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
                    className="p-4 border rounded-xl transition-all"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderColor: 'rgba(255, 255, 255, 0.3)',
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
                    <method.icon 
                      className="w-6 h-6 gradient-icon" 
                      style={{ stroke: `url(#contactIconGradient-${index})` }}
                    />
                  </motion.div>
                  <div className="flex-1">
                          <p className="text-white/70 font-medium text-sm mb-1 group-hover:text-white transition-all">{method.label}</p>
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
                  <p className="text-white/80 mb-6">
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
            <p className="text-white/80 leading-relaxed relative z-10 text-lg">
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

