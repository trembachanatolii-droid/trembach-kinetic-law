import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const scrollTrigger = ScrollTrigger.create({
      trigger: "body",
      start: "top -10px",
      end: "bottom bottom",
      onUpdate: (self) => {
        setIsScrolled(self.direction === 1 && self.progress > 0.01);
      }
    });

    // Navigation entrance animation
    if (navRef.current) {
      gsap.fromTo(navRef.current, 
        { 
          y: -80,
          opacity: 0
        },
        { 
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out"
        }
      );
    }

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <nav 
      ref={navRef}
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-white'
        }
      `}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex flex-col">
              <div className="text-2xl font-bold">
                <span className="text-red-600">mike</span>
                <span className="text-black">morse</span>
                <span className="text-red-600">law</span>
                <span className="text-black">firm</span>
              </div>
              <div className="text-xs text-gray-600 -mt-1">
                Michigan's Largest Injury Law Firm
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            
            {/* Cases We Handle Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger 
                className="flex items-center text-sm font-semibold text-gray-700 hover:text-red-600 transition-colors uppercase tracking-wide"
              >
                CASES WE HANDLE
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>Car Accidents</DropdownMenuItem>
                <DropdownMenuItem>Truck Accidents</DropdownMenuItem>
                <DropdownMenuItem>Motorcycle Accidents</DropdownMenuItem>
                <DropdownMenuItem>Slip & Fall</DropdownMenuItem>
                <DropdownMenuItem>Medical Malpractice</DropdownMenuItem>
                <DropdownMenuItem>Workers' Compensation</DropdownMenuItem>
                <DropdownMenuItem>Wrongful Death</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a 
              href="/team" 
              className="text-sm font-semibold text-gray-700 hover:text-red-600 transition-colors uppercase tracking-wide"
            >
              MEET YOUR TEAM
            </a>
            
            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger 
                className="flex items-center text-sm font-semibold text-gray-700 hover:text-red-600 transition-colors uppercase tracking-wide"
              >
                RESOURCES
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>Blog</DropdownMenuItem>
                <DropdownMenuItem>FAQ</DropdownMenuItem>
                <DropdownMenuItem>Legal Resources</DropdownMenuItem>
                <DropdownMenuItem>Case Results</DropdownMenuItem>
                <DropdownMenuItem>Testimonials</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <a 
              href="/contact" 
              className="text-sm font-semibold text-gray-700 hover:text-red-600 transition-colors uppercase tracking-wide"
            >
              CONTACT US
            </a>
          </div>

          {/* Phone Number */}
          <div className="flex flex-col items-end">
            <div className="text-xs text-gray-500 font-medium">AVAILABLE 24/7</div>
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-6 py-2 -mt-1"
              onClick={() => window.location.href = 'tel:+18553742904'}
            >
              (855) 374-2904
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;