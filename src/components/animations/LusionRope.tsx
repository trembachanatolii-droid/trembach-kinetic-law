import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface LusionRopeProps {
  pathData?: string;
  className?: string;
  trigger?: string;
}

export const LusionRope: React.FC<LusionRopeProps> = ({ 
  pathData = "M-100,300 Q200,100 400,300 T800,200 Q1000,400 1200,300 Q1400,100 1600,400 T2000,300",
  className = "",
  trigger = "body"
}) => {
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!pathRef.current) return;

    const path = pathRef.current;
    const pathLength = path.getTotalLength();

    // Set initial state - path is completely hidden
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    // Create scroll-triggered animation
    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 1,
      ease: "none",
      scrollTrigger: {
        trigger: trigger,
        start: "top center",
        end: "bottom center",
        scrub: 1.5,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [trigger]);

  return (
    <svg
      ref={svgRef}
      className={`fixed inset-0 w-full h-full pointer-events-none z-10 ${className}`}
      viewBox="0 0 1920 1080"
      preserveAspectRatio="none"
    >
      <defs>
        <filter id="ropeGlow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <path
        ref={pathRef}
        d={pathData}
        fill="none"
        stroke="#4F46E5"
        strokeWidth="40"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
        filter="url(#ropeGlow)"
      />
    </svg>
  );
};

// Specific rope paths matching Lusion style
export const LUSION_PATHS = {
  hero: "M-200,400 Q300,200 600,400 Q900,600 1200,300 Q1500,100 1800,400 Q2000,500 2200,300",
  flowing: "M-100,600 Q200,300 500,600 Q800,900 1100,500 Q1400,200 1700,600 Q2000,800 2300,400",
  curved: "M0,500 Q400,200 800,500 Q1200,800 1600,400 Q2000,100 2400,500",
  wave: "M-300,400 Q100,100 500,400 Q900,700 1300,300 Q1700,000 2100,400 Q2500,600 2800,200"
};