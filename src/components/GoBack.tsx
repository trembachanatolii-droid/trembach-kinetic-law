import React from 'react';

// Temporary no-op GoBack component to satisfy existing imports while we complete cleanup.
// Renders nothing, so no UI appears.
export type GoBackProps = {
  fallbackPath?: string;
  className?: string;
  forceVisible?: boolean;
  onGoBack?: () => void;
  fromSection?: string;
};

const GoBack: React.FC<GoBackProps> = () => null;

export default GoBack;
