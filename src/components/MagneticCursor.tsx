import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const MagneticCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    
    if (!cursor || !cursorDot) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        duration: 0.3,
        x: e.clientX,
        y: e.clientY,
        ease: "power2.out"
      });
      
      gsap.to(cursorDot, {
        duration: 0.1,
        x: e.clientX,
        y: e.clientY,
        ease: "power2.out"
      });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('magnetic') || target.closest('.magnetic')) {
        gsap.to(cursor, {
          duration: 0.3,
          scale: 1.5,
          mixBlendMode: 'difference'
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        duration: 0.3,
        scale: 1,
        mixBlendMode: 'normal'
      });
    };

    // Add event listeners
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    // Magnetic effect for buttons
    const magneticElements = document.querySelectorAll('.magnetic');
    
    magneticElements.forEach(element => {
      const handleMagneticMove = (e: MouseEvent) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(element, {
          duration: 0.3,
          x: x * 0.3,
          y: y * 0.3,
          ease: "power2.out"
        });
      };

      const handleMagneticLeave = () => {
        gsap.to(element, {
          duration: 0.3,
          x: 0,
          y: 0,
          ease: "elastic.out(1, 0.3)"
        });
      };

      element.addEventListener('mousemove', handleMagneticMove);
      element.addEventListener('mouseleave', handleMagneticLeave);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 border border-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-1 h-1 bg-primary rounded-full pointer-events-none z-[9999]"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
};

export default MagneticCursor;