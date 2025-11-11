import { useEffect, useState } from 'react';

// Component to wrap icons with gradient styling
export const GradientIconWrapper = ({ children, className = "" }) => {
  const [gradientId] = useState(() => `gradient-${Math.random().toString(36).substr(2, 9)}`);

  return (
    <>
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="50%" stopColor="#9333ea" />
            <stop offset="100%" stopColor="#db2777" />
          </linearGradient>
        </defs>
      </svg>
      <div 
        className={className}
        style={{
          color: `url(#${gradientId})`,
        }}
      >
        {children}
      </div>
    </>
  );
};

// Higher-order component to apply gradient to icon
export const withGradient = (Icon, gradientId) => {
  return ({ className = "", size, ...props }) => {
    return (
      <>
        <svg className="absolute w-0 h-0" aria-hidden="true">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4f46e5" />
              <stop offset="50%" stopColor="#9333ea" />
              <stop offset="100%" stopColor="#db2777" />
            </linearGradient>
          </defs>
        </svg>
        <Icon 
          className={className}
          size={size}
          style={{
            stroke: `url(#${gradientId})`,
            fill: 'none',
          }}
          {...props}
        />
      </>
    );
  };
};

