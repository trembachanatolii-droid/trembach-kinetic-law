import React, { useEffect } from 'react';

/**
 * Global visibility fix component to ensure all text and elements are visible
 * This fixes stuck animations and opacity issues across the entire site
 */
const GlobalVisibilityFix: React.FC = () => {
  useEffect(() => {
    const ensureVisibility = () => {
      // Force visibility for all text elements
      const textSelectors = [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'p', 'span', 'div', 'li', 'label',
        '.text-body', '.text-heading', '.text-display',
        '.hero-line', '.card-title', '.card-content'
      ];
      
      textSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el: Element) => {
          const htmlEl = el as HTMLElement;
          const computedStyle = window.getComputedStyle(htmlEl);
          
          // Fix stuck opacity animations
          if (computedStyle.opacity === '0') {
            htmlEl.style.opacity = '1';
          }
          
          // Fix invisible text (white on white, etc.)
          if (computedStyle.color === 'rgba(0, 0, 0, 0)' || 
              computedStyle.color === 'rgb(255, 255, 255)' && 
              computedStyle.backgroundColor === 'rgb(255, 255, 255)') {
            htmlEl.style.color = '#111111';
          }
          
          // Ensure visibility
          if (computedStyle.visibility === 'hidden') {
            htmlEl.style.visibility = 'visible';
          }
        });
      });
      
      // Fix stuck GSAP animations
      const gsapElements = document.querySelectorAll('[style*="opacity: 0"]');
      gsapElements.forEach((el: Element) => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.opacity = '1';
      });
      
      // Remove any stuck loading states
      const loadingElements = document.querySelectorAll('.loading, .spinner, [data-loading="true"]');
      loadingElements.forEach((el: Element) => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.display = 'none';
      });
      
      console.log('GlobalVisibilityFix: Applied visibility fixes');
    };
    
    // Apply fixes immediately
    ensureVisibility();
    
    // Apply fixes after a delay to catch late-loading content
    const timeouts = [100, 500, 1000, 2000].map(delay => 
      setTimeout(ensureVisibility, delay)
    );
    
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []);
  
  return null; // This component doesn't render anything
};

export default GlobalVisibilityFix;