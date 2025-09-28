import React, { useEffect } from 'react';

export const BlurFix: React.FC = () => {
  useEffect(() => {
    // Remove any remaining 3D transforms that cause blur
    const fixBlur = () => {
      // Find all elements with 3D transforms
      const elements = document.querySelectorAll('[style*="translateZ"], [style*="perspective"], .floating-layer, .animate-float-back, .animate-float-mid, .animate-float-front');
      
      elements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        
        // Remove problematic 3D transforms
        if (htmlElement.style.transform && htmlElement.style.transform.includes('translateZ')) {
          htmlElement.style.transform = htmlElement.style.transform.replace(/translateZ\([^)]*\)/g, '');
        }
        
        // Remove perspective that causes blur
        if (htmlElement.style.perspective) {
          htmlElement.style.perspective = '';
        }
        
        // Remove transform-style preserve-3d
        if (htmlElement.style.transformStyle === 'preserve-3d') {
          htmlElement.style.transformStyle = '';
        }
      });
      
      // Also check for CSS classes that apply 3D transforms
      const classElements = document.querySelectorAll('.pharmaceutical-3d-container, .floating-layer-back, .floating-layer-mid, .floating-layer-front');
      classElements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        htmlElement.style.transform = '';
        htmlElement.style.perspective = '';
        htmlElement.style.transformStyle = '';
      });
    };
    
    // Run immediately
    fixBlur();
    
    // Run after a short delay to catch any dynamically added elements
    const timeoutId = setTimeout(fixBlur, 100);
    
    // Set up a mutation observer to catch any new elements
    const observer = new MutationObserver(fixBlur);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class']
    });
    
    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);
  
  return null;
};

export default BlurFix;