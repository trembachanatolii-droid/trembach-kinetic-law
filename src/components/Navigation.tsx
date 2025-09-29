import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
gsap.registerPlugin(ScrollTrigger);
const Navigation = () => {
  const navRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    // Navigation entrance animation
    gsap.fromTo(nav, {
      y: -100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      delay: 0.5
    });
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-[980px] mx-auto px-6 h-[44px] flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
          <div className="text-red-600 text-xl">⚖️</div>
          <span className="font-semibold text-sm text-white tracking-tight">TREMBACH LAW FIRM</span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-white/90 hover:text-white transition-colors text-xs">
            Home
          </a>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-white/90 hover:text-white transition-colors text-xs outline-none">
              Practice Areas
              <ChevronDown className="w-3 h-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-black border border-white/20 z-[60]">
              <DropdownMenuItem className="hover:bg-white/10 text-white/90 focus:bg-white/10 focus:text-white">
                <a href="/practice-areas/mesothelioma-asbestos" className="w-full">
                  Mesothelioma & Asbestos
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10 text-white/90 focus:bg-white/10 focus:text-white">
                <a href="/practice-areas/crane-accidents" className="w-full">
                  Crane Accidents
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10 text-white/90 focus:bg-white/10 focus:text-white">
                <a href="/practice-areas/amusement-parks" className="w-full">
                  Amusement Park Injuries
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10 text-white/90 focus:bg-white/10 focus:text-white">
                <a href="/practice-areas/medical-malpractice" className="w-full">
                  Medical Malpractice
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10 text-white/90 focus:bg-white/10 focus:text-white">
                <a href="/practice-areas/personal-injury" className="w-full">
                  Personal Injury
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <a href="/about" className="text-white/90 hover:text-white transition-colors text-xs">
            About Us
          </a>
          <a href="/results" className="text-white/90 hover:text-white transition-colors text-xs">
            Results
          </a>
          <a href="/testimonials" className="text-white/90 hover:text-white transition-colors text-xs">
            Testimonials
          </a>
          <a href="/blog" className="text-white/90 hover:text-white transition-colors text-xs">
            Blog
          </a>
          <a href="/contact" className="text-white/90 hover:text-white transition-colors text-xs">
            Contact
          </a>
        </div>

        {/* CTA Phone */}
        <Button 
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-1 rounded-full text-xs h-[28px] shadow-lg hover:shadow-xl transition-all" 
          onClick={() => window.location.href = 'tel:8181234567'}
        >
          (818) 123-4567
        </Button>
      </div>
    </nav>;
};
export default Navigation;