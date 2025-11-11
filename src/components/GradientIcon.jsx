import { motion } from 'framer-motion';

const GradientIcon = ({ Icon, className = "", size = 24, ...props }) => {
  return (
    <div className={`relative inline-block ${className}`} {...props}>
      <Icon 
        size={size} 
        className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
        style={{
          stroke: 'url(#gradient)',
          fill: 'none',
        }}
      />
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="50%" stopColor="#9333ea" />
            <stop offset="100%" stopColor="#db2777" />
          </linearGradient>
        </defs>
      </svg>
      <style jsx>{`
        svg text {
          fill: url(#gradient);
        }
      `}</style>
    </div>
  );
};

export default GradientIcon;

