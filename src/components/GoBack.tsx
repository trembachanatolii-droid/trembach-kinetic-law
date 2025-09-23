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
    const onScroll = () => {
      // Show button after scrolling past hero section (typically 300-400px)
      setVisible(window.scrollY > 300);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
    // Store current scroll position before navigating
    sessionStorage.setItem(`scrollPosition_${location.pathname}`, window.scrollY.toString());
    
    if (window.history.length > 1) {
      // Enhanced path mapping for Uber/Lyft pages
      const currentPath = location.pathname;
      let targetPath = fallbackPath;
      
      // Map Uber/Lyft related pages
      if (currentPath.includes('/uber-lyft/case-evaluation')) {
        targetPath = '/practice-areas/uber-lyft-accidents';
      } else if (currentPath.includes('/uber-lyft/compensation-calculator')) {
        targetPath = '/practice-areas/uber-lyft-accidents';
      } else if (currentPath.includes('/uber-lyft/faq')) {
        targetPath = '/practice-areas/uber-lyft-accidents';
      } else if (currentPath.includes('/uber-lyft/legal-guidance')) {
        targetPath = '/practice-areas/uber-lyft-accidents';
      } else if (currentPath.includes('/uber-lyft/medical-guidance')) {
        targetPath = '/practice-areas/uber-lyft-accidents';
      } else if (currentPath.includes('/uber-lyft/resources')) {
        targetPath = '/practice-areas/uber-lyft-accidents';
      } else if (currentPath.includes('/uber-lyft/app-safety')) {
        targetPath = '/practice-areas/uber-lyft-accidents';
      } else if (currentPath.includes('/uber-lyft/driver-screening')) {
        targetPath = '/practice-areas/uber-lyft-accidents';
      } else if (currentPath.includes('/uber-lyft/insurance-claims')) {
        targetPath = '/practice-areas/uber-lyft-accidents';
      } else if (currentPath.includes('/uber-lyft/passenger-rights')) {
        targetPath = '/practice-areas/uber-lyft-accidents';
      } else if (currentPath.includes('/practice-areas/pfas-exposure')) {
        targetPath = '/practice-areas';
      } else if (currentPath.includes('/pfas-case-evaluation')) {
        targetPath = '/practice-areas/pfas-exposure';
      } else if (currentPath.includes('/pfas-resources')) {
        targetPath = '/practice-areas/pfas-exposure';
      }
      
      navigate(-1);
      
      // Enhanced scroll restoration with retry mechanism
      setTimeout(() => {
        const savedPosition = sessionStorage.getItem(`scrollPosition_${targetPath}`);
        if (savedPosition) {
          const scrollTop = parseInt(savedPosition, 10);
          
          // Try immediate scroll first
          window.scrollTo({
            top: scrollTop,
            behavior: 'smooth'
          });
          
          // Backup scroll attempt after content loads
          setTimeout(() => {
            window.scrollTo({
              top: scrollTop,
              behavior: 'smooth'
            });
          }, 300);
        }
      }, 150);
    } else {
      navigate(fallbackPath);
    }
  };

  const baseClasses = "fixed top-28 left-4 z-[60] transition-all duration-500 ease-in-out";
  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses;
  
  return (
    <div
      className={`${combinedClasses} ${visible ? 'opacity-100 pointer-events-auto transform translate-y-0' : 'opacity-0 pointer-events-none transform -translate-y-2'}`}
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
        <span className="text-foreground">Go Back</span>
      </Button>
    </div>
  );
};

export default GoBack;
