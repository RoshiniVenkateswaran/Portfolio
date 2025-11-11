// Utility to style icons with gradient
export const gradientIconStyle = {
  background: 'linear-gradient(135deg, #4f46e5 0%, #9333ea 50%, #db2777 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fill: 'url(#iconGradient)',
};

// Alternative: Use stroke-based gradient for outline icons
export const createGradientIcon = (Icon, className = "", size = 24) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg className="absolute inset-0 w-0 h-0 pointer-events-none">
        <defs>
          <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="50%" stopColor="#9333ea" />
            <stop offset="100%" stopColor="#db2777" />
          </linearGradient>
        </defs>
      </svg>
      <Icon 
        size={size}
        style={{
          stroke: 'url(#iconGradient)',
          color: 'transparent',
        }}
        className="relative z-10"
      />
    </div>
  );
};

