
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className, size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        <span className={`${sizeClasses[size]} font-serif font-bold text-beauty-700 tracking-tight`}>
          Beauty<span className="text-beauty-500">Buddy</span>
        </span>
        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-beauty-400 rounded-full animate-pulse-soft"></div>
      </div>
    </div>
  );
};

export default Logo;
