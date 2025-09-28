import React from 'react';
import { TrembachRope } from './TrembachRope';

interface RopeSectionProps {
  children: React.ReactNode;
  id: string;
  direction: 'tl-br' | 'tr-bl' | 'bl-tr' | 'br-tl';
  className?: string;
  alt?: boolean;
}

export const RopeSection: React.FC<RopeSectionProps> = ({
  children,
  id,
  direction,
  className = "",
  alt = false
}) => {
  return (
    <section 
      id={id}
      className={`rope-block ${alt ? 'alt' : ''} ${className}`}
      style={{
        position: 'relative',
        minHeight: '180vh', // Per rope section scroll length
        display: 'grid',
        alignItems: 'start',
        paddingTop: '12vh',
        backgroundColor: alt ? '#12151b' : undefined,
      }}
    >
      <div 
        className="container mx-auto px-8"
        style={{ 
          position: 'relative', 
          zIndex: 2,
          width: 'min(1100px, 92vw)',
          margin: '0 auto',
          padding: '3rem 0'
        }}
      >
        {children}
      </div>
      <TrembachRope sectionId={id} direction={direction} />
    </section>
  );
};