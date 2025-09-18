import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface GoBackProps {
  className?: string;
}

const GoBack: React.FC<GoBackProps> = ({ className = "" }) => {
  const baseClasses = "absolute top-20 left-6 z-[60]";
  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses;
  
  return (
    <div className={combinedClasses}>
      <Button
        variant="default"
        size="lg"
        onClick={() => {
          // Navigate back to the Medical Malpractice section if coming from there
          const referrer = document.referrer;
          if (referrer.includes('/practice-areas/medical-malpractice') || window.location.pathname.includes('medical-malpractice')) {
            window.location.href = '/practice-areas/medical-malpractice';
          } else {
            window.history.back();
          }
        }}
        className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg rounded-full px-5"
        aria-label="Go back to previous page"
      >
        <ArrowLeft className="w-5 h-5" />
        Go Back
      </Button>
    </div>
  );
};

export default GoBack;
