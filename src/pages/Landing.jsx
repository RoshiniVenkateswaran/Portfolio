import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Code, Brain, Heart, ArrowRight } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div 
      style={{ 
        minHeight: '100vh',
        backgroundColor: '#0B0C10',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '40px 20px'
      }}
    >
      {/* Animated background */}
      <div style={{ 
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        zIndex: 0
      }}>
        <motion.div 
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ 
            position: 'absolute',
            top: '20%',
            left: '15%',
            width: '400px',
            height: '400px',
            backgroundColor: '#66FCF1',
            opacity: 0.1,
            borderRadius: '50%',
            filter: 'blur(100px)'
          }} 
        />
        <motion.div 
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ 
            position: 'absolute',
            bottom: '20%',
            right: '15%',
            width: '400px',
            height: '400px',
            backgroundColor: '#45A29E',
            opacity: 0.1,
            borderRadius: '50%',
            filter: 'blur(100px)'
          }} 
        />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10,
          width: '100%'
        }}
      >
        <div 
          style={{ 
            backgroundColor: 'rgba(11, 12, 16, 0.85)',
            border: '1px solid rgba(102, 252, 241, 0.3)',
            borderRadius: '16px',
            padding: '60px 40px',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 0 30px rgba(102, 252, 241, 0.2), inset 0 0 30px rgba(102, 252, 241, 0.05)'
          }}
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '40px' }}
          >
            <h1 
              style={{ 
                color: '#66FCF1',
                fontSize: '3.5rem',
                fontWeight: 'bold',
                marginBottom: '16px',
                fontFamily: 'Space Mono, monospace',
                textShadow: '0 0 20px rgba(102, 252, 241, 0.5), 0 0 40px rgba(102, 252, 241, 0.3)',
                lineHeight: '1.2'
              }}
            >
              Hi, I'm Roshini
            </h1>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '12px',
              marginTop: '20px',
              flexWrap: 'wrap'
            }}>
              <span style={{ color: '#45A29E', fontSize: '1rem', fontFamily: 'Space Mono, monospace' }}>
                Graduate Student
              </span>
              <span style={{ color: '#66FCF1', fontSize: '1.2rem' }}>•</span>
              <span style={{ color: '#45A29E', fontSize: '1rem', fontFamily: 'Space Mono, monospace' }}>
                Computer Science
              </span>
              <span style={{ color: '#66FCF1', fontSize: '1.2rem' }}>•</span>
              <span style={{ color: '#45A29E', fontSize: '1rem', fontFamily: 'Space Mono, monospace' }}>
                George Washington University
              </span>
            </div>
          </motion.div>

          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ marginBottom: '40px' }}
          >
            <p 
              style={{ 
                color: '#C5C6C7',
                fontSize: '1.25rem',
                lineHeight: '1.8',
                textAlign: 'center',
                marginBottom: '30px',
                maxWidth: '800px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              I'm a passionate developer who believes technology should serve humanity. 
              Through my work at <span style={{ color: '#66FCF1' }}>Prommuni</span>, <span style={{ color: '#66FCF1' }}>Medica</span>, 
              <span style={{ color: '#66FCF1' }}> Advantage Capital</span>, and <span style={{ color: '#66FCF1' }}>Etuper Technologies</span>, 
              I've built intelligent, scalable, and empathetic tech solutions that bridge the gap between 
              artificial intelligence and human connection.
            </p>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '30px',
              marginBottom: '40px',
              flexWrap: 'wrap'
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <Code style={{ width: '32px', height: '32px', color: '#66FCF1', margin: '0 auto 8px' }} />
              <p style={{ color: '#C5C6C7', fontSize: '0.95rem', fontFamily: 'Space Mono, monospace' }}>
                App Development
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Brain style={{ width: '32px', height: '32px', color: '#66FCF1', margin: '0 auto 8px' }} />
              <p style={{ color: '#C5C6C7', fontSize: '0.95rem', fontFamily: 'Space Mono, monospace' }}>
                AI/ML
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Heart style={{ width: '32px', height: '32px', color: '#66FCF1', margin: '0 auto 8px' }} />
              <p style={{ color: '#C5C6C7', fontSize: '0.95rem', fontFamily: 'Space Mono, monospace' }}>
                Human-Centered Design
              </p>
            </div>
          </motion.div>

          {/* Aspiration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            style={{ 
              backgroundColor: 'rgba(102, 252, 241, 0.05)',
              border: '1px solid rgba(102, 252, 241, 0.2)',
              borderRadius: '12px',
              padding: '30px',
              marginBottom: '40px',
              textAlign: 'center'
            }}
          >
            <h2 
              style={{ 
                color: '#66FCF1',
                fontSize: '1.5rem',
                fontWeight: '600',
                marginBottom: '16px',
                fontFamily: 'Space Mono, monospace'
              }}
            >
              What I Aspire To Be
            </h2>
            <p 
              style={{ 
                color: '#C5C6C7',
                fontSize: '1.1rem',
                lineHeight: '1.8',
                fontStyle: 'italic',
                maxWidth: '700px',
                margin: '0 auto'
              }}
            >
              "I envision building intelligent systems that understand and empathize with users. 
              I want to create the next generation of AI assistants and empathetic interfaces that don't just solve problems— 
              they understand people. My dream is to be part of a team that sees technology as a tool for connection and positive change."
            </p>
            <p 
              style={{ 
                color: '#45A29E',
                fontSize: '1rem',
                marginTop: '20px',
                fontFamily: 'Space Mono, monospace'
              }}
            >
              This portfolio is not just about what I've built — it's about what I'm becoming.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            style={{ textAlign: 'center' }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(102, 252, 241, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/story')}
              style={{ 
                backgroundColor: 'rgba(102, 252, 241, 0.15)', 
                border: '2px solid #66FCF1',
                color: '#66FCF1',
                borderRadius: '8px',
                padding: '18px 40px',
                fontFamily: 'Space Mono, monospace',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                transition: 'all 0.3s',
                boxShadow: '0 0 15px rgba(102, 252, 241, 0.3), inset 0 0 15px rgba(102, 252, 241, 0.1)'
              }}
            >
              <Sparkles style={{ width: '20px', height: '20px' }} />
              Explore My Journey
              <ArrowRight style={{ width: '20px', height: '20px' }} />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Landing;