import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className={`trembach-logo flex items-center gap-3 ${className}`}>
      <div className="scales text-primary text-2xl filter drop-shadow-lg">⚖️</div>
      <div className="text">
        <div className={`company font-bold ${sizeClasses[size]} leading-tight tracking-wide`}>
          TREMBACH
        </div>
        <div className="tagline text-xs text-muted-foreground font-medium tracking-wider uppercase">
          LAW FIRM
        </div>
      </div>
    </div>
  );
};

export default Logo;