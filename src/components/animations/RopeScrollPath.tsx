import React, { useRef } from 'react';
import { useRopeScrollAnimation } from '../../hooks/useRopeScrollAnimation';

interface RopeScrollPathProps {
  pathData: string;
  className?: string;
  strokeColor?: string;
  strokeWidth?: number;
  opacity?: number;
  viewBox?: string;
  start?: string;
  end?: string;
  reverse?: boolean;
  scrub?: boolean | number;
}

export const RopeScrollPath: React.FC<RopeScrollPathProps> = ({
  pathData,
  className = "",
  strokeColor = "hsl(var(--primary))",
  strokeWidth = 2,
  opacity = 0.8,
  viewBox = "0 0 1200 2000",
  start = "top 80%",
  end = "bottom 20%",
  reverse = false,
  scrub = 1
}) => {
  const pathRef = useRef<SVGPathElement>(null);

  useRopeScrollAnimation(pathRef, {
    start,
    end,
    scrub,
    reverse
  });

  return (
    <svg
      viewBox={viewBox}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ zIndex: 1 }}
    >
      <defs>
        <filter id="ropeGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
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
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={opacity}
        filter="url(#ropeGlow)"
      />
    </svg>
  );
};

// Predefined rope paths for common use cases
export const ROPE_PATHS = {
  // Flowing S-curve rope
  flowing: "M100 100 Q300 200 500 150 T900 200 Q1100 250 1200 180 Q1100 300 900 350 T500 400 Q300 450 100 380 Q200 500 400 550 T800 600 Q1000 650 1100 580 Q900 700 700 750 T300 800 Q100 850 200 950 Q400 1000 600 950 T1000 1000 Q1200 1050 1100 1150 Q900 1200 700 1150 T300 1200 Q100 1250 200 1350 Q400 1400 600 1350 T1000 1400 Q1200 1450 1100 1550 Q900 1600 700 1550 T300 1600 Q100 1650 200 1750 Q400 1800 600 1750 T1000 1800 Q1200 1850 1100 1900",
  
  // Vertical flowing rope
  vertical: "M600 0 Q650 100 600 200 Q550 300 600 400 Q650 500 600 600 Q550 700 600 800 Q650 900 600 1000 Q550 1100 600 1200 Q650 1300 600 1400 Q550 1500 600 1600 Q650 1700 600 1800 Q550 1900 600 2000",
  
  // Complex artistic rope
  artistic: "M50 50 Q200 100 150 250 T400 300 Q600 350 500 500 T800 550 Q1000 600 900 750 T600 800 Q400 850 500 1000 T800 1050 Q1000 1100 900 1250 T600 1300 Q400 1350 500 1500 T800 1550 Q1000 1600 900 1750 T600 1800 Q200 1850 300 1950",
  
  // Simple elegant curve
  elegant: "M100 200 Q300 100 600 200 Q900 300 1100 200 Q900 400 600 500 Q300 600 100 500 Q300 700 600 800 Q900 900 1100 800 Q900 1000 600 1100 Q300 1200 100 1100 Q300 1300 600 1400 Q900 1500 1100 1400 Q900 1600 600 1700 Q300 1800 100 1700",
  
  // Justice-themed rope (scales pattern)
  justice: "M600 0 Q500 100 600 200 Q700 100 600 0 M400 300 Q500 400 600 300 Q700 400 800 300 M200 600 Q400 500 600 600 Q800 500 1000 600 M300 900 Q500 800 600 900 Q700 800 900 900 M400 1200 Q500 1300 600 1200 Q700 1300 800 1200 M600 1500 Q500 1400 600 1300 Q700 1400 600 1500 M600 1500 Q650 1600 600 1700 Q550 1800 600 1900 Q650 2000 600 2100"
};