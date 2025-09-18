import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface GoBackProps {
  className?: string;
}

const GoBack: React.FC<GoBackProps> = ({ className = "" }) => {
  const navigate = useNavigate();
  const baseClasses = "fixed top-20 left-6 z-[1000]";
  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses;
  return (
    <div className={combinedClasses}>
      <Button
        variant="default"
        size="lg"
        onClick={() => {
          if (window.history.length > 1) {
            navigate(-1);
          } else {
            navigate('/');
          }
        }}
        className="flex items-center gap-2 bg-background/80 text-foreground hover:bg-background/90 border border-border shadow-lg rounded-full px-5 backdrop-blur supports-[backdrop-filter]:backdrop-blur"
        aria-label="Go back to previous page"
      >
        <ArrowLeft className="w-5 h-5" />
        Go Back
      </Button>
    </div>
  );
};

export default GoBack;
