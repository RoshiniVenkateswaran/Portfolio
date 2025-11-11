import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import dialogue from '../data/dialogue.json';

const ScrollNarrator = ({ scrollProgress }) => {
  const [currentAct, setCurrentAct] = useState('act1');
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    // Determine which act based on scroll progress
    if (scrollProgress < 33) {
      setCurrentAct('act1');
      setCurrentLine(Math.floor((scrollProgress / 33) * dialogue.act1.narration.length));
    } else if (scrollProgress < 66) {
      setCurrentAct('act2');
    } else {
      setCurrentAct('act3');
      const act3Start = 66;
      const act3Progress = (scrollProgress - act3Start) / (100 - act3Start);
      setCurrentLine(Math.floor(act3Progress * dialogue.act3.narration.length));
    }
  }, [scrollProgress]);

  const getCurrentNarration = () => {
    if (currentAct === 'act1') {
      return dialogue.act1.narration[currentLine] || dialogue.act1.narration[0];
    } else if (currentAct === 'act3') {
      return dialogue.act3.narration[currentLine] || dialogue.act3.narration[0];
    }
    return '';
  };

  if (currentAct === 'act2') return null; // Project sections handle their own narration

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50 max-w-3xl mx-auto px-6 pointer-events-none"
    >
      <div className="bg-dark/90 backdrop-blur-md border border-cyan/30 rounded-lg p-6 glow-border">
        <p className="text-cyan font-mono text-sm mb-2">{currentAct.toUpperCase()}</p>
        <p className="text-lightGray text-lg font-sans leading-relaxed">
          {getCurrentNarration()}
        </p>
      </div>
    </motion.div>
  );
};

export default ScrollNarrator;
