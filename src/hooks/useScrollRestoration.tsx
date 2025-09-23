import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollRestoration = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a saved scroll position for this path
    const savedPosition = sessionStorage.getItem(`scrollPosition_${location.pathname}`);
    
    if (savedPosition) {
      const scrollTop = parseInt(savedPosition, 10);
      
      // Delay scroll restoration to ensure content is loaded
      const timeoutId = setTimeout(() => {
        window.scrollTo({
          top: scrollTop,
          behavior: 'smooth'
        });
        
        // Additional attempt after more time for heavy content
        setTimeout(() => {
          window.scrollTo({
            top: scrollTop,
            behavior: 'smooth'
          });
        }, 500);
      }, 100);

      return () => clearTimeout(timeoutId);
    } else {
      // If no saved position, scroll to top
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  // Store scroll position when leaving the page
  useEffect(() => {
    const handleRouteChange = () => {
      sessionStorage.setItem(`scrollPosition_${location.pathname}`, window.scrollY.toString());
    };

    window.addEventListener('beforeunload', handleRouteChange);
    
    return () => {
      window.removeEventListener('beforeunload', handleRouteChange);
      // Store position when component unmounts (route change)
      sessionStorage.setItem(`scrollPosition_${location.pathname}`, window.scrollY.toString());
    };
  }, [location.pathname]);
};

export default useScrollRestoration;