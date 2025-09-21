import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollRestoration = () => {
  const location = useLocation();

  useEffect(() => {
    // Restore scroll position when component mounts
    const restoreScrollPosition = () => {
      const savedPosition = sessionStorage.getItem(`scrollPosition_${location.pathname}`);
      if (savedPosition) {
        setTimeout(() => {
          window.scrollTo({
            top: parseInt(savedPosition, 10),
            behavior: 'auto' // Use auto for immediate positioning on page load
          });
        }, 50); // Small delay to ensure DOM is rendered
      }
    };

    restoreScrollPosition();

    // Store scroll position periodically and on scroll
    const storeScrollPosition = () => {
      sessionStorage.setItem(`scrollPosition_${location.pathname}`, window.scrollY.toString());
    };

    // Store position on scroll (throttled)
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(storeScrollPosition, 100);
    };

    // Store position when navigating away
    const handleBeforeUnload = () => {
      sessionStorage.setItem(`scrollPosition_${location.pathname}`, window.scrollY.toString());
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      // Store final position when component unmounts
      sessionStorage.setItem(`scrollPosition_${location.pathname}`, window.scrollY.toString());
    };
  }, [location.pathname]);
};

export default useScrollRestoration;