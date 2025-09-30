import React from 'react';
import { cn } from '@/lib/utils';

interface DottedSurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export const DottedSurface: React.FC<DottedSurfaceProps> = ({ 
  children, 
  className, 
  ...props 
}) => {
  return (
    <div 
      className={cn(
        "relative overflow-hidden",
        "before:absolute before:inset-0",
        "before:bg-[radial-gradient(circle_at_1px_1px,hsl(var(--foreground)/.15)_1px,transparent_0)]",
        "before:bg-[length:20px_20px]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};