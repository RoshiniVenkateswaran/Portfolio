'use client'

import { usePathname } from 'next/navigation'
import Navigation from './Navigation'
import Footer from './Footer'
import ScrollProgress from './ScrollProgress'

export default function ClientLayout({ children }) {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: isHome ? '#1a1a1a' : '#FFFFFF' }}>
      {/* Global SVG Gradient Definitions */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <linearGradient id="globalIconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9CA3AF" />
            <stop offset="100%" stopColor="#D1D5DB" />
          </linearGradient>
        </defs>
      </svg>
      <ScrollProgress />
      <Navigation />
      <div style={{ minHeight: '100vh' }}>
        {children}
      </div>
      <Footer />
    </div>
  )
}

