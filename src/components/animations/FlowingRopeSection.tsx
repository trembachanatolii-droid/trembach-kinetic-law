import React from 'react';
import { LusionRope, LUSION_PATHS } from './LusionRope';

interface FlowingRopeSectionProps {
  children: React.ReactNode;
  ropeType?: keyof typeof LUSION_PATHS;
  customPath?: string;
  className?: string;
  id?: string;
}

export const FlowingRopeSection: React.FC<FlowingRopeSectionProps> = ({
  children,
  ropeType = 'flowing',
  customPath,
  className = "",
  id
}) => {
  const pathData = customPath || LUSION_PATHS[ropeType];

  return (
    <section id={id} className={`relative ${className}`}>
      {/* Background rope animation */}
      <LusionRope 
        pathData={pathData}
        trigger={id ? `#${id}` : undefined}
      />
      
      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </section>
  );
};