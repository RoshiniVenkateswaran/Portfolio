import { motion } from 'framer-motion';
import { useEffect, useState, memo } from 'react';

const AnimatedBackground = memo(() => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let ticking = false;
    
    const handleMouseMove = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setMousePosition({ x: e.clientX, y: e.clientY });
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10" style={{ willChange: 'transform' }}>
      {/* Colorful gradient orbs */}
      <motion.div
        style={{
          x: mousePosition.x / 25,
          y: mousePosition.y / 25,
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          scale: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          },
          opacity: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          },
          x: { type: "spring", stiffness: 50, damping: 20 },
          y: { type: "spring", stiffness: 50, damping: 20 },
        }}
        className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl"
        style={{
                background: 'radial-gradient(circle, rgba(55, 65, 81, 0.2), rgba(13, 14, 18, 0.8))',
        }}
      />
      <motion.div
        style={{
          x: -mousePosition.x / 30,
          y: -mousePosition.y / 30,
        }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          scale: {
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          },
          opacity: {
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          },
          x: { type: "spring", stiffness: 50, damping: 20 },
          y: { type: "spring", stiffness: 50, damping: 20 },
        }}
        className="absolute bottom-20 right-20 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
                background: 'radial-gradient(circle, rgba(107, 114, 128, 0.15), rgba(13, 14, 18, 0.85))',
        }}
      />
      <motion.div
        style={{
          x: mousePosition.x / 35,
          y: mousePosition.y / 35,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          scale: {
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          },
          opacity: {
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          },
          x: { type: "spring", stiffness: 50, damping: 20 },
          y: { type: "spring", stiffness: 50, damping: 20 },
        }}
        className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full blur-3xl"
        style={{
                background: 'radial-gradient(circle, rgba(156, 163, 175, 0.12), rgba(13, 14, 18, 0.9))',
        }}
      />
      
      {/* Subtle grid pattern with gradient colors */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
                  linear-gradient(rgba(55, 65, 81, 0.08) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(55, 65, 81, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
});

AnimatedBackground.displayName = 'AnimatedBackground';

export default AnimatedBackground;

