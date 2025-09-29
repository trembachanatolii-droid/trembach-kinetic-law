import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Car, User } from 'lucide-react';
gsap.registerPlugin(ScrollTrigger);
const Navigation = () => {
  const navRef = useRef<HTMLElement>(null);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  
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
          <div 
            className="relative"
            onMouseEnter={() => setShowMegaMenu(true)}
            onMouseLeave={() => setShowMegaMenu(false)}
          >
            <a 
              href="/practice-areas" 
              className="relative text-[#1d1d1f] hover:text-[#1d1d1f]/70 transition-colors text-xs font-medium uppercase tracking-wide after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-red-600 after:transition-[width] after:duration-300 hover:after:w-full"
            >
              Practice Areas
            </a>
            
            {/* Mega Menu */}
            {showMegaMenu && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[560px] bg-white shadow-2xl border border-gray-200 z-[100] rounded-xl">
                <div className="p-10">
                  <h2 className="text-4xl font-bold text-[#1d1d1f] mb-6">Cases We Handle</h2>
                  <p className="text-base text-gray-600 mb-10 max-w-xl leading-relaxed">
                    We fight for every case—big or small. As one of the leading injury firms, you get a team of legal professionals dedicated to getting you every dollar you deserve.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-16">
                    {/* Auto Accidents Column */}
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <Car className="w-10 h-10 text-red-600" />
                        <h3 className="text-2xl font-bold text-[#1d1d1f]">Auto Accidents</h3>
                      </div>
                      <ul className="space-y-4">
                        <li>
                          <a href="/practice-areas/truck-accidents" className="text-base text-[#1d1d1f] hover:text-red-600 transition-colors">
                            Truck Accidents
                          </a>
                        </li>
                        <li>
                          <a href="/practice-areas/car-accidents" className="text-base text-[#1d1d1f] hover:text-red-600 transition-colors">
                            Car Accidents
                          </a>
                        </li>
                        <li>
                          <a href="/practice-areas/motorcycle-accidents" className="text-base text-[#1d1d1f] hover:text-red-600 transition-colors">
                            Motorcycle Accidents
                          </a>
                        </li>
                        <li>
                          <a href="/practice-areas/uber-lyft" className="text-base text-[#1d1d1f] hover:text-red-600 transition-colors">
                            Uber & Lyft Accidents
                          </a>
                        </li>
                        <li>
                          <a href="/practice-areas/pedestrian-accidents" className="text-base text-[#1d1d1f] hover:text-red-600 transition-colors">
                            Pedestrian Accidents
                          </a>
                        </li>
                        <li className="pt-3">
                          <a href="/practice-areas?category=auto" className="text-base font-semibold text-[#1d1d1f] hover:text-red-600 transition-colors inline-flex items-center gap-2">
                            See All →
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Personal Injury Column */}
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <User className="w-10 h-10 text-red-600" />
                        <h3 className="text-2xl font-bold text-[#1d1d1f]">Personal Injury</h3>
                      </div>
                      <ul className="space-y-4">
                        <li>
                          <a href="/practice-areas/dog-bite" className="text-base text-[#1d1d1f] hover:text-red-600 transition-colors">
                            Dog Bite Injuries
                          </a>
                        </li>
                        <li>
                          <a href="/practice-areas/social-security" className="text-base text-[#1d1d1f] hover:text-red-600 transition-colors">
                            Social Security Disability
                          </a>
                        </li>
                        <li>
                          <a href="/practice-areas/birth-injury" className="text-base text-[#1d1d1f] hover:text-red-600 transition-colors">
                            Birth Injury
                          </a>
                        </li>
                        <li>
                          <a href="/practice-areas/burn-injury" className="text-base text-[#1d1d1f] hover:text-red-600 transition-colors">
                            Burn/Fire Injury
                          </a>
                        </li>
                        <li>
                          <a href="/practice-areas/brain-injury" className="text-base text-[#1d1d1f] hover:text-red-600 transition-colors">
                            Brain Injury
                          </a>
                        </li>
                        <li className="pt-3">
                          <a href="/practice-areas?category=personal" className="text-base font-semibold text-[#1d1d1f] hover:text-red-600 transition-colors inline-flex items-center gap-2">
                            See All →
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
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