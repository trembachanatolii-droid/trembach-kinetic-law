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
  return <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-[#fbfbfd] backdrop-blur-xl border-b border-gray-200/80">
      <div className="max-w-[980px] mx-auto px-6 h-[44px] flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
          <div className="text-red-600 text-xl">⚖️</div>
          <span className="font-semibold text-sm text-[#1d1d1f] tracking-tight">TREMBACH LAW FIRM</span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-7">
          <a href="/" className="text-[#1d1d1f] hover:text-[#1d1d1f]/70 transition-colors text-xs font-normal">
            Home
          </a>
          <div className="flex items-center gap-1">
            <a href="/practice-areas" className="relative text-[#1d1d1f] hover:text-[#1d1d1f]/70 transition-colors text-xs font-medium uppercase tracking-wide after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-red-600 after:transition-[width] after:duration-300 hover:after:w-full">
              Practice Areas
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-[#1d1d1f] hover:text-[#1d1d1f]/70 transition-colors text-xs font-normal outline-none">
                <ChevronDown className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border border-gray-200 z-[60]">
                <DropdownMenuItem className="hover:bg-gray-100 text-[#1d1d1f] focus:bg-gray-100 focus:text-[#1d1d1f] cursor-pointer">
                  <a href="/practice-areas/mesothelioma-asbestos" className="w-full">
                    Mesothelioma & Asbestos
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 text-[#1d1d1f] focus:bg-gray-100 focus:text-[#1d1d1f] cursor-pointer">
                  <a href="/practice-areas/crane-accidents" className="w-full">
                    Crane Accidents
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 text-[#1d1d1f] focus:bg-gray-100 focus:text-[#1d1d1f] cursor-pointer">
                  <a href="/practice-areas/amusement-parks" className="w-full">
                    Amusement Park Injuries
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 text-[#1d1d1f] focus:bg-gray-100 focus:text-[#1d1d1f] cursor-pointer">
                  <a href="/practice-areas/medical-malpractice" className="w-full">
                    Medical Malpractice
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 text-[#1d1d1f] focus:bg-gray-100 focus:text-[#1d1d1f] cursor-pointer">
                  <a href="/practice-areas/personal-injury" className="w-full">
                    Personal Injury
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <a href="/about" className="text-[#1d1d1f] hover:text-[#1d1d1f]/70 transition-colors text-xs font-normal">
            About Us
          </a>
          <a href="/results" className="text-[#1d1d1f] hover:text-[#1d1d1f]/70 transition-colors text-xs font-normal">
            Results
          </a>
          <a href="/testimonials" className="text-[#1d1d1f] hover:text-[#1d1d1f]/70 transition-colors text-xs font-normal">
            Testimonials
          </a>
          <a href="/blog" className="text-[#1d1d1f] hover:text-[#1d1d1f]/70 transition-colors text-xs font-normal">
            Blog
          </a>
          <a href="/contact" className="text-[#1d1d1f] hover:text-[#1d1d1f]/70 transition-colors text-xs font-normal">
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