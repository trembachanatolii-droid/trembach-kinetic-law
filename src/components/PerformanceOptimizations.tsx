import { useEffect, useRef } from 'react';

// Intersection Observer hook for lazy loading animations
export const useIntersectionObserver = (
  callback: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit = {}
) => {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      callback(entry);
    }, {
      threshold: 0,
      rootMargin: '1200px',
      ...options
    });

    const currentTarget = targetRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [callback, options]);

  return targetRef;
};

// Image lazy loading component with blur placeholder
export const LazyImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
  blurDataURL?: string;
}> = ({ src, alt, className = '', blurDataURL }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useIntersectionObserver((entry) => {
    if (entry.isIntersecting && imgRef.current) {
      imgRef.current.classList.remove('opacity-0');
      imgRef.current.classList.add('opacity-100');
    }
  });

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        alt={alt}
        className="w-full h-full object-cover transition-opacity duration-150 opacity-0"
        src={src}
        loading="lazy"
        decoding="async"
        onLoad={() => {
          if (imgRef.current) {
            imgRef.current.classList.remove('opacity-0');
            imgRef.current.classList.add('opacity-100');
          }
        }}
        onError={() => {
          if (imgRef.current) {
            imgRef.current.classList.remove('opacity-0');
            imgRef.current.classList.add('opacity-100');
          }
        }}
        style={{
          backgroundImage: blurDataURL ? `url(${blurDataURL})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
    </div>
  );
};

// Debounced scroll handler
export const useDebounceScroll = (callback: () => void, delay: number = 100) => {
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleScroll = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(callback, delay);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [callback, delay]);
};