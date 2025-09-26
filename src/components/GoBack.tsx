import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface GoBackProps {
  className?: string;
  fallbackPath?: string;
  forceVisible?: boolean;
}

const GoBack: React.FC<GoBackProps> = ({ className = "", fallbackPath = "/", forceVisible = false }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (forceVisible) {
      setVisible(true);
      return;
    }
    const onScroll = () => {
      // Show button after scrolling past hero section (typically 300-400px)
      setVisible(window.scrollY > 300);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [forceVisible]);

  // Enhanced scroll position tracking
  useEffect(() => {
    const storeScrollPosition = () => {
      sessionStorage.setItem(`scrollPosition_${location.pathname}`, window.scrollY.toString());
    };

    // Store scroll position on scroll (throttled)
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(storeScrollPosition, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', storeScrollPosition);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', storeScrollPosition);
      clearTimeout(scrollTimeout);
    };
  }, [location.pathname]);

  const handleGoBack = () => {
    // Store current scroll position for this page
    sessionStorage.setItem(`scrollPosition_${location.pathname}`, String(window.scrollY));

    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(fallbackPath);
    }
  };

  const baseClasses = "fixed top-28 left-4 z-[999] transition-all duration-500 ease-in-out";
  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses;
  const isVisible = forceVisible || visible;
  
  return (
    <div
      className={`${combinedClasses} ${isVisible ? 'opacity-100 pointer-events-auto transform translate-y-0' : 'opacity-0 pointer-events-none transform -translate-y-2'}`}
      aria-hidden={!isVisible}
    >
      <Button
        variant="default"
        size="lg"
        onClick={handleGoBack}
        className="flex items-center gap-2 bg-background/90 text-foreground hover:bg-background border border-border shadow-lg rounded-full px-5 backdrop-blur supports-[backdrop-filter]:backdrop-blur font-medium animate-fade-in"
        aria-label="Go back to previous page"
      >
        <ArrowLeft className="w-5 h-5" />
        <span
          className="text-foreground underline-offset-2 hover:underline cursor-pointer"
          role="link"
          tabIndex={0}
          onClick={handleGoBack}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleGoBack(); } }}
        >
          Go Back
        </span>
      </Button>
    </div>
  );
};

export default GoBack;
