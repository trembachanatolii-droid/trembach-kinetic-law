import React from 'react';
import logoImage from '@/assets/logo-final.png';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12'
  };

  return (
    <img 
      src={logoImage} 
      alt="Trembach Law Firm Logo" 
      className={`trembach-logo ${sizeClasses[size]} ${className}`}
    />
  );
};

export default Logo;