import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface GoBackProps {
  className?: string;
  fallbackPath?: string;
}

const GoBack: React.FC<GoBackProps> = ({ className = "", fallbackPath = "/" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Store scroll position when component mounts
  useEffect(() => {
    const storeScrollPosition = () => {
      sessionStorage.setItem(`scrollPosition_${location.pathname}`, window.scrollY.toString());
    };

    window.addEventListener('beforeunload', storeScrollPosition);
    return () => window.removeEventListener('beforeunload', storeScrollPosition);
  }, [location.pathname]);

  const handleGoBack = () => {
    // Store current scroll position before navigating
    sessionStorage.setItem(`scrollPosition_${location.pathname}`, window.scrollY.toString());
    
    if (window.history.length > 1) {
      // Get the previous page from history or estimate it
      const currentPath = location.pathname;
      let targetPath = fallbackPath;
      
      // Try to determine the previous page based on current path
      if (currentPath.includes('/practice-areas/pfas-exposure')) {
        targetPath = '/practice-areas';
      } else if (currentPath.includes('/pfas-case-evaluation')) {
        targetPath = '/practice-areas/pfas-exposure';
      } else if (currentPath.includes('/pfas-resources')) {
        targetPath = '/practice-areas/pfas-exposure';
      }
      
      navigate(-1);
      
      // Restore scroll position after a short delay
      setTimeout(() => {
        const savedPosition = sessionStorage.getItem(`scrollPosition_${targetPath}`);
        if (savedPosition) {
          window.scrollTo({
            top: parseInt(savedPosition, 10),
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      navigate(fallbackPath);
    }
  };

  const baseClasses = "fixed top-28 left-4 z-[60]";
  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses;
  
  return (
    <div
      className={`${combinedClasses} transition-opacity duration-500 ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      aria-hidden={!visible}
    >
      <Button
        variant="default"
        size="lg"
        onClick={handleGoBack}
        className="flex items-center gap-2 bg-background/90 text-foreground hover:bg-background border border-border shadow-lg rounded-full px-5 backdrop-blur supports-[backdrop-filter]:backdrop-blur font-medium animate-fade-in"
        aria-label="Go back to previous page"
      >
        <ArrowLeft className="w-5 h-5" />
        Go Back
      </Button>
    </div>
  );
};

export default GoBack;
