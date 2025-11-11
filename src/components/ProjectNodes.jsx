import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import dialogue from '../data/dialogue.json';
import { Sparkles, Brain, Wifi, Users } from 'lucide-react';

const ProjectNodes = () => {
  const containerRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      key: 'pawfect',
      ...dialogue.act2.projects.pawfect,
      icon: Sparkles,
      position: { top: '20%', left: '10%' },
    },
    {
      key: 'botify',
      ...dialogue.act2.projects.botify,
      icon: Brain,
      position: { top: '20%', right: '10%' },
    },
    {
      key: 'iot_bus_tracker',
      ...dialogue.act2.projects.iot_bus_tracker,
      icon: Wifi,
      position: { bottom: '20%', left: '10%' },
    },
    {
      key: 'expends',
      ...dialogue.act2.projects.expends,
      icon: Users,
      position: { bottom: '20%', right: '10%' },
    },
  ];

  const containerInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div ref={containerRef} className="relative min-h-[800px]">
      {/* Neural network lines (connecting nodes) */}
      {containerInView && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
          {/* Draw lines between nodes */}
          <motion.line
            x1="10%"
            y1="20%"
            x2="90%"
            y2="20%"
            stroke="#66FCF1"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.line
            x1="10%"
            y1="80%"
            x2="90%"
            y2="80%"
            stroke="#66FCF1"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
          <motion.line
            x1="10%"
            y1="20%"
            x2="10%"
            y2="80%"
            stroke="#66FCF1"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
          />
          <motion.line
            x1="90%"
            y1="20%"
            x2="90%"
            y2="80%"
            stroke="#66FCF1"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 2 }}
          />
        </svg>
      )}

      {/* Project Nodes */}
      {projects.map((project, index) => {
        const Icon = project.icon;

        return (
          <motion.div
            key={project.key}
            initial={{ opacity: 0, scale: 0 }}
            animate={containerInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.3, duration: 0.6 }}
            className="absolute"
            style={project.position}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedProject(selectedProject === project.key ? null : project.key)}
              className="relative group"
            >
              {/* Node circle */}
              <div className="w-24 h-24 rounded-full bg-cyan/20 border-2 border-cyan flex items-center justify-center glow-border">
                <Icon className="w-10 h-10 text-cyan" />
              </div>

              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-cyan opacity-0 group-hover:opacity-20 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />

              {/* Project name */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={containerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.3 + 0.3 }}
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 whitespace-nowrap"
              >
                <p className="text-cyan font-mono font-bold text-lg">{project.name}</p>
                <p className="text-lightGray text-sm">{project.description}</p>
              </motion.div>
            </motion.button>

            {/* Expanded project details */}
            {selectedProject === project.key && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute top-32 left-1/2 transform -translate-x-1/2 w-80 bg-dark/95 backdrop-blur-md border border-cyan/30 rounded-lg p-6 glow-border z-50"
              >
                <h3 className="text-cyan font-mono text-xl font-bold mb-3">{project.name}</h3>
                <p className="text-lightGray text-sm mb-4 leading-relaxed">
                  {project.narration.join(' ')}
                </p>
                <p className="text-aqua text-xs mb-4">{project.details}</p>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-cyan text-sm font-mono hover:underline"
                >
                  Close
                </button>
              </motion.div>
            )}
          </motion.div>
        );
      })}

      {/* Center message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={containerInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
      >
        <p className="text-lightGray text-lg max-w-md">
          Click on any project node to learn more
        </p>
      </motion.div>
    </div>
  );
};

export default ProjectNodes;
