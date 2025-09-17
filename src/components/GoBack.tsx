import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface GoBackProps {
  className?: string;
}

const GoBack: React.FC<GoBackProps> = ({ className = "" }) => {
  const baseClasses = "pt-20 pb-4";
  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses;
  
  return (
    <div className={combinedClasses}>
      <Button
        variant="ghost"
        onClick={() => window.history.back()}
        className="flex items-center gap-2 hover:bg-primary/10 bg-transparent z-[60] relative text-foreground ml-6"
        aria-label="Go back to previous page"
      >
        <ArrowLeft className="w-4 h-4" />
        Go Back
      </Button>
    </div>
  );
};

export default GoBack;
