import React, { ReactNode } from 'react';

interface ThreeDVisualEffectsProps {
  children: ReactNode;
}

const ThreeDVisualEffects: React.FC<ThreeDVisualEffectsProps> = ({ children }) => {
  return (
    <div className="premium-3d-container">
      {children}
    </div>
  );
};

export default ThreeDVisualEffects;