import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface VisualEffectsProps {
  children: React.ReactNode;
  className?: string;
}

export const ThreeDVisualEffects: React.FC<VisualEffectsProps> = ({ children, className = "" }) => {
  // Disabled 3D effects to prevent blur issues
  return (
    <div className={`relative ${className}`}>
      {/* Content without 3D transforms */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ThreeDVisualEffects;