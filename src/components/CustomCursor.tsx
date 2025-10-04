import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface CustomCursorProps {
  hoveredColor?: string;
  isHovering?: boolean;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ 
  hoveredColor = '#000000',
  isHovering = false 
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const trailIdRef = useRef(0);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // Add trail point
      if (isHovering) {
        trailIdRef.current += 1;
        setTrails(prev => [...prev, { 
          x: e.clientX, 
          y: e.clientY, 
          id: trailIdRef.current 
        }].slice(-8)); // Keep last 8 trail points
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovering]);

  // Animate main cursor
  useEffect(() => {
    if (!cursorRef.current) return;

    gsap.to(cursorRef.current, {
      x: mousePos.x,
      y: mousePos.y,
      duration: 0.3,
      ease: 'power2.out',
    });
  }, [mousePos]);

  // Animate cursor dot
  useEffect(() => {
    if (!cursorDotRef.current) return;

    gsap.to(cursorDotRef.current, {
      x: mousePos.x,
      y: mousePos.y,
      duration: 0.1,
      ease: 'power2.out',
    });
  }, [mousePos]);

  // Scale cursor on hover
  useEffect(() => {
    if (!cursorRef.current) return;

    gsap.to(cursorRef.current, {
      scale: isHovering ? 1.5 : 1,
      duration: 0.4,
      ease: 'elastic.out(1, 0.5)',
    });
  }, [isHovering]);

  // Clean up old trails
  useEffect(() => {
    if (trails.length === 0) return;

    const timeout = setTimeout(() => {
      setTrails(prev => prev.slice(1));
    }, 100);

    return () => clearTimeout(timeout);
  }, [trails]);

  return (
    <>
      {/* Trail points */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="fixed pointer-events-none z-[9999] mix-blend-difference"
          style={{
            left: 0,
            top: 0,
            transform: `translate(${trail.x}px, ${trail.y}px) translate(-50%, -50%)`,
            width: `${8 - index}px`,
            height: `${8 - index}px`,
            borderRadius: '50%',
            backgroundColor: hoveredColor,
            opacity: 0.3 - (index * 0.03),
          }}
        />
      ))}

      {/* Main cursor ring */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: 0,
          top: 0,
          transform: 'translate(-50%, -50%)',
          width: '40px',
          height: '40px',
          border: `2px solid ${hoveredColor}`,
          borderRadius: '50%',
          transition: 'border-color 0.3s ease',
        }}
      />

      {/* Inner dot */}
      <div
        ref={cursorDotRef}
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: 0,
          top: 0,
          transform: 'translate(-50%, -50%)',
          width: '6px',
          height: '6px',
          backgroundColor: hoveredColor,
          borderRadius: '50%',
          transition: 'background-color 0.3s ease',
        }}
      />
    </>
  );
};

export default CustomCursor;
