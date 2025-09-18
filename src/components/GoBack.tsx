import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface GoBackProps {
  className?: string;
  fallbackPath?: string;
}

const GoBack: React.FC<GoBackProps> = ({ className = "", fallbackPath = "/" }) => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 160);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const baseClasses = "fixed top-28 left-4 z-[60]";
  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses;
  return (
    <div
      className={`${combinedClasses} transition-opacity duration-200 ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      aria-hidden={!visible}
    >
      <Button
        variant="default"
        size="lg"
        onClick={() => {
          if (window.history.length > 1) {
            navigate(-1);
          } else {
            navigate(fallbackPath);
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
