import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ProjectNodes from './ProjectNodes';
import dialogue from '../data/dialogue.json';

const StoryScenes = () => {
  const act1Ref = useRef(null);
  const act2Ref = useRef(null);
  const act3Ref = useRef(null);

  const act1InView = useInView(act1Ref, { once: true, margin: "-100px" });
  const act2InView = useInView(act2Ref, { once: true, margin: "-100px" });
  const act3InView = useInView(act3Ref, { once: true, margin: "-100px" });

  return (
    <div className="relative">
      {/* Act 1: Curiosity */}
      <section
        ref={act1Ref}
        className="min-h-screen flex items-center justify-center px-6 relative"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={act1InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h2 className="text-6xl font-bold text-cyan text-glow mb-8 font-mono">
              {dialogue.act1.title}
            </h2>
            <div className="space-y-6 text-lg text-lightGray max-w-3xl mx-auto">
              {dialogue.act1.narration.map((line, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={act1InView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="leading-relaxed"
                >
                  {line}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Animated terminal cursor */}
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="mt-12 text-cyan font-mono text-2xl"
          >
            ▊
          </motion.div>
        </div>
      </section>

      {/* Act 2: Evolution - Projects */}
      <section
        ref={act2Ref}
        className="min-h-screen py-20 px-6 relative"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={act2InView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-6xl font-bold text-cyan text-glow mb-16 text-center font-mono">
            Evolution
          </h2>
          <ProjectNodes />
        </motion.div>
      </section>

      {/* Act 3: Vision */}
      <section
        ref={act3Ref}
        className="min-h-screen flex items-center justify-center px-6 relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={act3InView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-6xl font-bold text-cyan text-glow mb-8 font-mono">
            {dialogue.act3.title}
          </h2>
          <div className="space-y-6 text-lg text-lightGray max-w-3xl mx-auto">
            {dialogue.act3.narration.map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={act3InView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="leading-relaxed"
              >
                {line}
              </motion.p>
            ))}
          </div>

          {/* Neural network visualization */}
          <motion.div
            initial={{ scale: 0 }}
            animate={act3InView ? { scale: 1 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16"
          >
            <div className="relative w-64 h-64 mx-auto">
              {/* Simple neural network nodes */}
              {[...Array(9)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-cyan rounded-full"
                  style={{
                    left: `${(i % 3) * 50}%`,
                    top: `${Math.floor(i / 3) * 50}%`,
                  }}
                  animate={{
                    boxShadow: [
                      '0 0 10px #66FCF1',
                      '0 0 20px #66FCF1',
                      '0 0 10px #66FCF1',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default StoryScenes;
