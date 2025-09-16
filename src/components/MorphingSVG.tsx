import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';

// Note: MorphSVGPlugin requires GSAP license
// For demo purposes, we'll create a simple morphing effect

interface MorphingSVGProps {
  className?: string;
  color?: string;
}

const MorphingSVG: React.FC<MorphingSVGProps> = ({ 
  className = '',
  color = '#dc2626'
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const paths = svg.querySelectorAll('path');
    
    // Create breathing/pulsing animation for justice scales
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    
    paths.forEach((path, index) => {
      tl.to(path, {
        scale: 1.05,
        transformOrigin: 'center',
        duration: 2,
        ease: 'power2.inOut',
        delay: index * 0.2
      }, 0);
    });

    // Add floating animation
    gsap.to(svg, {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut'
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Justice Scales SVG */}
      <g transform="translate(100, 100)">
        {/* Scale Base */}
        <path
          d="M-2 50 L2 50 L2 -30 L-2 -30 Z"
          fill={color}
          className="scale-pole"
        />
        
        {/* Scale Bar */}
        <path
          d="M-40 -30 L40 -30 L40 -26 L-40 -26 Z"
          fill={color}
          className="scale-bar"
        />
        
        {/* Left Scale */}
        <g className="left-scale">
          <path
            d="M-40 -26 Q-50 -20 -50 -10 Q-50 0 -40 6 L-20 6 Q-10 0 -10 -10 Q-10 -20 -20 -26 Z"
            fill={color}
            opacity="0.8"
          />
          <path
            d="M-45 -26 L-45 -30 L-15 -30 L-15 -26"
            stroke={color}
            strokeWidth="2"
            fill="none"
          />
        </g>
        
        {/* Right Scale */}
        <g className="right-scale">
          <path
            d="M40 -26 Q50 -20 50 -10 Q50 0 40 6 L20 6 Q10 0 10 -10 Q10 -20 20 -26 Z"
            fill={color}
            opacity="0.8"
          />
          <path
            d="M45 -26 L45 -30 L15 -30 L15 -26"
            stroke={color}
            strokeWidth="2"
            fill="none"
          />
        </g>
        
        {/* Decorative elements */}
        <circle cx="0" cy="-35" r="5" fill={color} className="top-ornament" />
        <path
          d="M-50 60 Q0 55 50 60"
          stroke={color}
          strokeWidth="3"
          fill="none"
          className="base-curve"
        />
      </g>
    </svg>
  );
};

export default MorphingSVG;