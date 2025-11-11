import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import Navigation from './Navigation';
import Chatbot from './Chatbot';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';

const Layout = () => {
  const location = useLocation();
  
  // Memoize to prevent unnecessary re-renders
  const pageKey = useMemo(() => location.pathname, [location.pathname]);

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: location.pathname === '/' ? '#1a1a1a' : '#FFFFFF' }}>
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
        <Outlet key={pageKey} />
      </div>
      {location.pathname !== '/' && <Footer />}
      <Chatbot />
    </div>
  );
};

export default Layout;

