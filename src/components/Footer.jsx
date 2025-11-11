import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Sparkles } from 'lucide-react';

const Footer = () => {
  const links = [
    { icon: Linkedin, href: 'https://linkedin.com/in/roshini-venkateswaran', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/roshiniv', label: 'GitHub' },
    { icon: Mail, href: 'mailto:roshiniv@gwu.edu', label: 'Email' },
  ];

  return (
    <footer className="relative border-t py-12 px-6 overflow-hidden" style={{ 
      background: 'linear-gradient(180deg, #0D0E12 0%, #111827 100%)',
      borderColor: 'rgba(107, 114, 128, 0.2)',
    }}>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.h3
            className="text-2xl font-bold mb-4 inline-block gradient-text"
            whileHover={{ scale: 1.1 }}
          >
            Beyond the Code
          </motion.h3>
          <motion.p
            className="text-text-grey mb-8 max-w-2xl mx-auto text-lg italic"
            whileHover={{ scale: 1.05 }}
          >
            "This portfolio is not just about what I've built — it's about what I'm becoming."
          </motion.p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            {links.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.2, y: -8, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className="group relative w-14 h-14 border-2 rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
                  style={{
                    backgroundColor: 'rgba(55, 65, 81, 0.1)',
                    borderColor: 'rgba(107, 114, 128, 0.3)',
                    color: '#9CA3AF',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #374151, #6B7280)';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.borderColor = '#6B7280';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(55, 65, 81, 0.1)';
                    e.currentTarget.style.color = '#9CA3AF';
                    e.currentTarget.style.borderColor = 'rgba(107, 114, 128, 0.3)';
                  }}
                  aria-label={link.label}
                >
                  <svg className="absolute w-0 h-0">
                    <defs>
                            <linearGradient id={`footerIconGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#9CA3AF" />
                              <stop offset="100%" stopColor="#D1D5DB" />
                            </linearGradient>
                    </defs>
                  </svg>
                  <Icon className="w-5 h-5 gradient-icon" style={{ stroke: `url(#footerIconGradient-${index})` }} />
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 blur-xl"
                          style={{ backgroundColor: '#6B7280' }}
                    animate={{
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.a>
              );
            })}
          </div>

          <motion.div
            className="text-text-grey text-sm space-y-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="font-semibold text-text-primary">Roshini Venkateswaran</p>
            <p>Software Developer • AI/ML Enthusiast</p>
            <p>George Washington University</p>
            <motion.p
              className="text-text-grey mt-4 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <svg className="absolute w-0 h-0">
                <defs>
                            <linearGradient id="footerSparkleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#9CA3AF" />
                              <stop offset="100%" stopColor="#D1D5DB" />
                            </linearGradient>
                </defs>
              </svg>
              <Sparkles className="w-4 h-4 gradient-icon" style={{ stroke: 'url(#footerSparkleGradient)' }} />
              <span>© 2024 Beyond the Code</span>
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
