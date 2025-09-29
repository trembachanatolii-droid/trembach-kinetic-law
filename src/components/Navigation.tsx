import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import Logo from './Logo';

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
        <Logo size="sm" className={isScrolled ? 'text-foreground' : 'text-white'} />

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <DropdownMenu>
            <DropdownMenuTrigger className={`flex items-center gap-1 hover:text-primary transition-colors font-medium ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}>
              Practice Areas
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem>
                <a href="/practice-areas/mesothelioma-asbestos" className="w-full">
                  Mesothelioma & Asbestos
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/practice-areas/crane-accidents" className="w-full">
                  Crane Accidents
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/practice-areas/amusement-parks" className="w-full">
                  Amusement Park Injuries
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/practice-areas/medical-malpractice" className="w-full">
                  Medical Malpractice
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/practice-areas/personal-injury" className="w-full">
                  Personal Injury
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#practice-areas" className="w-full">
                  View All Practice Areas
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <a href="#results" className={`hover:text-primary transition-colors font-medium ${
            isScrolled ? 'text-foreground' : 'text-white'
          }`}>
            Why Us
          </a>
          <a href="#about" className={`hover:text-primary transition-colors font-medium ${
            isScrolled ? 'text-foreground' : 'text-white'
          }`}>
            About
          </a>
          <a href="#locations" className={`hover:text-primary transition-colors font-medium ${
            isScrolled ? 'text-foreground' : 'text-white'
          }`}>
            Locations
          </a>
          <a href="#contact" className={`hover:text-primary transition-colors font-medium ${
            isScrolled ? 'text-foreground' : 'text-white'
          }`}>
            Contact
          </a>
        </div>

        {/* CTA Button */}
          <Button 
            size="sm" 
            className={`magnetic font-semibold transition-all duration-300 relative ${
              isScrolled 
                ? 'bg-red-600 hover:bg-red-700 text-white' 
                : 'bg-red-600/90 hover:bg-red-700 text-white glow-accent'
            }`}
            onClick={() => window.location.href = 'tel:8181234567'}
          >
            <span className="relative z-10 text-white">Call (818) 123-4567</span>
          </Button>
      </div>
    </nav>
  );
};

export default Navigation;