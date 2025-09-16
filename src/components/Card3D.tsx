import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

const Card3D: React.FC<Card3DProps> = ({ 
  children, 
  className = '',
  intensity = 1
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -10 * intensity;
      const rotateY = ((x - centerX) / centerX) * 10 * intensity;
      
      gsap.to(card, {
        rotationX: rotateX,
        rotationY: rotateY,
        transformPerspective: 1000,
        transformOrigin: 'center',
        duration: 0.3,
        ease: 'power2.out'
      });
      
      // Add glow effect
      const glowIntensity = Math.min(
        Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)) / 
        Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2)), 
        1
      );
      
      gsap.to(card, {
        boxShadow: `0 ${10 + glowIntensity * 20}px ${30 + glowIntensity * 20}px rgba(220, 38, 38, ${0.1 + glowIntensity * 0.2})`,
        duration: 0.3
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        duration: 0.5,
        ease: 'power2.out'
      });
    };

    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.02,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    card.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
      card.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [intensity]);

  return (
    <div
      ref={cardRef}
      className={`transform-gpu perspective-1000 ${className}`}
      style={{ 
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden'
      }}
    >
      {children}
    </div>
  );
};

export default Card3D;