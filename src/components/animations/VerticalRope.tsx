import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface VerticalRopeProps {
  startElement?: string;
  className?: string;
}

export const VerticalRope: React.FC<VerticalRopeProps> = ({ 
  startElement = "#about",
  className = ""
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
        trigger: startElement,
        start: "top center",
        end: "bottom bottom",
        scrub: 1.2,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [startElement]);

  return (
    <div className={`fixed left-8 top-0 w-4 h-full pointer-events-none z-10 ${className}`}>
      <svg
        ref={svgRef}
        className="w-full h-full"
        viewBox="0 0 100 2000"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="verticalRopeGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <path
          ref={pathRef}
          d="M50,100 Q60,300 45,500 Q35,700 55,900 Q65,1100 40,1300 Q30,1500 50,1700 Q60,1900 50,2000"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.7"
          filter="url(#verticalRopeGlow)"
        />
      </svg>
    </div>
  );
};