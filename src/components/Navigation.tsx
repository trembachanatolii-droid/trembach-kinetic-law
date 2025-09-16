import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const Navigation = () => {
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    // Scroll-triggered navigation changes
    ScrollTrigger.create({
      trigger: document.body,
      start: "100px top",
      onUpdate: (self) => {
        setIsScrolled(self.progress > 0);
      }
    });

    // Navigation entrance animation
    gsap.fromTo(
      nav,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 2 }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-display font-bold text-white">
          <span className="text-primary">Trembach</span> Law Firm
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#practice-areas" className="text-white hover:text-primary transition-colors font-medium">
            Practice Areas
          </a>
          <a href="#results" className="text-white hover:text-primary transition-colors font-medium">
            Results
          </a>
          <a href="#about" className="text-white hover:text-primary transition-colors font-medium">
            About
          </a>
          <a href="#locations" className="text-white hover:text-primary transition-colors font-medium">
            Locations
          </a>
          <a href="#contact" className="text-white hover:text-primary transition-colors font-medium">
            Contact
          </a>
        </div>

        {/* CTA Button */}
        <Button 
          size="sm" 
          className="magnetic bg-accent hover:bg-accent-glow text-accent-foreground font-semibold glow-accent transition-all duration-300"
          onClick={() => window.location.href = 'tel:855-TREMBACH-WINS'}
        >
          Call Now - 24/7
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;