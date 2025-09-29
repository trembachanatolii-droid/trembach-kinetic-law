import React from 'react';
import { RopeScrollPath, ROPE_PATHS } from './RopeScrollPath';

interface ScrollRopeContainerProps {
  children: React.ReactNode;
  ropeType?: keyof typeof ROPE_PATHS;
  customPath?: string;
  ropeColor?: string;
  ropeWidth?: number;
  ropeOpacity?: number;
  position?: 'left' | 'right' | 'center';
  className?: string;
  multiple?: boolean;
}

export const ScrollRopeContainer: React.FC<ScrollRopeContainerProps> = ({
  children,
  ropeType = 'flowing',
  customPath,
  ropeColor = "hsl(var(--primary))",
  ropeWidth = 3,
  ropeOpacity = 0.6,
  position = 'right',
  className = "",
  multiple = false
}) => {
  const pathData = customPath || ROPE_PATHS[ropeType];

  const getPositionClasses = () => {
    switch (position) {
      case 'left':
        return 'left-0 w-1/3';
      case 'center':
        return 'left-1/2 transform -translate-x-1/2 w-1/2';
      case 'right':
      default:
        return 'right-0 w-1/3';
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Main rope path */}
      <div className={`absolute top-0 h-full ${getPositionClasses()} pointer-events-none z-10`}>
        <RopeScrollPath
          pathData={pathData}
          strokeColor={ropeColor}
          strokeWidth={ropeWidth}
          opacity={ropeOpacity}
          viewBox="0 0 1200 2000"
          start="top 90%"
          end="bottom 10%"
          scrub={1.2}
        />
      </div>

      {/* Additional rope for multiple effect */}
      {multiple && (
        <>
          <div className={`absolute top-0 h-full ${position === 'right' ? 'left-0 w-1/4' : 'right-0 w-1/4'} pointer-events-none z-10`}>
            <RopeScrollPath
              pathData={ROPE_PATHS.elegant}
              strokeColor={ropeColor}
              strokeWidth={ropeWidth - 1}
              opacity={ropeOpacity * 0.5}
              viewBox="0 0 1200 2000"
              start="top 80%"
              end="bottom 20%"
              scrub={0.8}
              reverse={true}
            />
          </div>
          
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/6 h-full pointer-events-none z-10">
            <RopeScrollPath
              pathData={ROPE_PATHS.vertical}
              strokeColor={ropeColor}
              strokeWidth={ropeWidth - 1}
              opacity={ropeOpacity * 0.3}
              viewBox="0 0 1200 2000"
              start="top 85%"
              end="bottom 15%"
              scrub={1.5}
            />
          </div>
        </>
      )}

      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};