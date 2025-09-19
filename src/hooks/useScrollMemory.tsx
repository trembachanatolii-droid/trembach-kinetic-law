import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Hook to remember and restore scroll position when navigating back
export const useScrollMemory = () => {
  const location = useLocation();
  const scrollPositions = useRef<Record<string, number>>({});

  useEffect(() => {
    const handleScroll = () => {
      scrollPositions.current[location.pathname] = window.scrollY;
    };

    const handleBeforeUnload = () => {
      sessionStorage.setItem('scrollPositions', JSON.stringify(scrollPositions.current));
    };

    // Restore scroll position
    const savedPositions = sessionStorage.getItem('scrollPositions');
    if (savedPositions) {
      scrollPositions.current = JSON.parse(savedPositions);
      const savedPosition = scrollPositions.current[location.pathname];
      if (savedPosition) {
        setTimeout(() => {
          window.scrollTo(0, savedPosition);
        }, 100);
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [location.pathname]);

  return scrollPositions.current;
};