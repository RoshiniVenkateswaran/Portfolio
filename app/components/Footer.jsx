'use client'

import { motion } from 'framer-motion'

// LinkedIn Logo SVG Component
const LinkedInLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

// GitHub Logo SVG Component
const GitHubLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

// Medium Logo SVG Component
const MediumLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 6.75c0-.414.271-.574.45-.574.108 0 .152.036.225.126l4.509 6.472v4.316c0 .18-.09.36-.27.36H2.36c-.18 0-.36-.18-.36-.36V6.75ZM8.921 15.37 5.58 10.394 8.79 6.238c.09-.108.135-.144.243-.144.153 0 .243.108.243.288v4.968l2.872-5.014c.072-.117.126-.18.243-.18.144 0 .207.09.243.18l3.168 5.545V7.37c0-.162.054-.27.198-.27.126 0 .18.09.252.18l2.61 3.375c.018.027.027.063.027.099 0 .072-.054.126-.126.126-.027 0-.063-.009-.09-.027l-.99-.63c-.117-.072-.207-.108-.27-.108-.153 0-.234.117-.234.342v6.246c0 .18-.09.36-.27.36h-3.168c-.18 0-.27-.18-.27-.36v-4.536l-1.89 3.267c-.072.126-.144.18-.261.18-.144 0-.198-.054-.27-.18L9.27 11.51v3.601c0 .18-.18.36-.36.36H8.921Z" />
  </svg>
)

export default function Footer() {
  const links = [
    {
      href: 'https://linkedin.com/in/roshini-venkat',
      label: 'LinkedIn',
      LogoComponent: LinkedInLogo,
    },
    {
      href: 'https://github.com/RoshiniVenkateswaran',
      label: 'GitHub',
      LogoComponent: GitHubLogo,
    },
    {
      href: 'https://medium.com/@roshiniv',
      label: 'Medium',
      LogoComponent: MediumLogo,
    },
  ]

  return (
    <footer
      className="relative border-t py-6 px-6"
      style={{
        background: 'linear-gradient(180deg, #0D0E12 0%, #0F141B 100%)',
        borderColor: 'rgba(107, 114, 128, 0.2)',
      }}
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          <div className="flex items-center gap-4">
            {links.map(({ href, label, LogoComponent }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="group relative w-11 h-11 rounded-full border border-white/10 text-[#6c757d] flex items-center justify-center transition-all duration-200 hover:text-white hover:border-white/30 hover:bg-white/10"
                aria-label={label}
              >
                <LogoComponent className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          <motion.p
            className="text-sm md:text-base font-medium"
            style={{ color: '#6c757d' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            Roshini Venkateswaran · © {new Date().getFullYear()} All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}

