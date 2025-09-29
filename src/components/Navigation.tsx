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
    gsap.fromTo(
      nav,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <nav 
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm"
    >
      <div className="container mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="trembach-logo flex items-center gap-3">
          <div className="text-red-600 text-2xl">⚖️</div>
          <div className="text">
            <div className="font-bold text-xl leading-tight tracking-wide text-gray-900">
              <span className="text-red-600">TREMBACH</span><span className="text-gray-700">LAWFIRM</span>
            </div>
            <div className="text-xs text-gray-500 font-medium tracking-wider uppercase">
              California's Premier Injury Law Firm
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-red-600 transition-colors font-medium text-gray-700 uppercase text-sm">
              CASES WE HANDLE
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white border border-gray-200">
              <DropdownMenuItem className="hover:bg-gray-50">
                <a href="/practice-areas/mesothelioma-asbestos" className="w-full">
                  Mesothelioma & Asbestos
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-50">
                <a href="/practice-areas/crane-accidents" className="w-full">
                  Crane Accidents
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-50">
                <a href="/practice-areas/amusement-parks" className="w-full">
                  Amusement Park Injuries
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-50">
                <a href="/practice-areas/medical-malpractice" className="w-full">
                  Medical Malpractice
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-50">
                <a href="/practice-areas/personal-injury" className="w-full">
                  Personal Injury
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <a href="#team" className="hover:text-red-600 transition-colors font-medium text-gray-700 uppercase text-sm">
            MEET YOUR TEAM
          </a>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-red-600 transition-colors font-medium text-gray-700 uppercase text-sm">
              RESOURCES
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-white border border-gray-200">
              <DropdownMenuItem className="hover:bg-gray-50">
                <a href="/blog" className="w-full">Blog</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-50">
                <a href="/faq" className="w-full">FAQ</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-50">
                <a href="/testimonials" className="w-full">Testimonials</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <a href="#contact" className="hover:text-red-600 transition-colors font-medium text-gray-700 uppercase text-sm">
            CONTACT US
          </a>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-end">
          <div className="text-xs text-gray-500 font-medium mb-1">AVAILABLE 24/7</div>
          <Button 
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2 rounded text-lg"
            onClick={() => window.location.href = 'tel:8181234567'}
          >
            (818) 123-4567
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;