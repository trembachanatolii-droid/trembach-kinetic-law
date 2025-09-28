import React from 'react';
import { ScrollRopeContainer } from './ScrollRopeContainer';

interface RopeSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  ropeConfig?: {
    type?: 'flowing' | 'vertical' | 'artistic' | 'elegant' | 'justice';
    color?: string;
    width?: number;
    opacity?: number;
    position?: 'left' | 'right' | 'center';
    multiple?: boolean;
  };
  backgroundColor?: string;
}

export const RopeSection: React.FC<RopeSectionProps> = ({
  children,
  id,
  className = "",
  ropeConfig = {},
  backgroundColor
}) => {
  const {
    type = 'flowing',
    color = "hsl(var(--primary))",
    width = 3,
    opacity = 0.4,
    position = 'right',
    multiple = false
  } = ropeConfig;

  return (
    <section 
      id={id}
      className={`relative min-h-screen overflow-hidden ${className}`}
      style={{ backgroundColor }}
    >
      <ScrollRopeContainer
        ropeType={type}
        ropeColor={color}
        ropeWidth={width}
        ropeOpacity={opacity}
        position={position}
        multiple={multiple}
        className="min-h-screen"
      >
        {children}
      </ScrollRopeContainer>
    </section>
  );
};

// Pre-configured rope sections for different themes
export const JusticeRopeSection: React.FC<Omit<RopeSectionProps, 'ropeConfig'>> = (props) => (
  <RopeSection
    {...props}
    ropeConfig={{
      type: 'justice',
      color: "hsl(var(--primary))",
      width: 4,
      opacity: 0.5,
      position: 'right',
      multiple: true
    }}
  />
);

export const ElegantRopeSection: React.FC<Omit<RopeSectionProps, 'ropeConfig'>> = (props) => (
  <RopeSection
    {...props}
    ropeConfig={{
      type: 'elegant',
      color: "hsl(var(--primary))",
      width: 2,
      opacity: 0.3,
      position: 'center',
      multiple: false
    }}
  />
);

export const ArtisticRopeSection: React.FC<Omit<RopeSectionProps, 'ropeConfig'>> = (props) => (
  <RopeSection
    {...props}
    ropeConfig={{
      type: 'artistic',
      color: "hsl(var(--accent))",
      width: 3,
      opacity: 0.4,
      position: 'left',
      multiple: true
    }}
  />
);