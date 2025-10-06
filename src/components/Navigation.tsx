import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Car, User } from 'lucide-react';
gsap.registerPlugin(ScrollTrigger);
const Navigation = () => {
  const navRef = useRef<HTMLElement>(null);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showResourcesMenu, setShowResourcesMenu] = useState(false);
  
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
  return <nav ref={navRef} className="site-nav fixed top-0 left-0 right-0 z-50 bg-[#fbfbfd] backdrop-blur-xl border-b border-gray-200/80">
      <div className="max-w-[980px] mx-auto px-6 h-[44px] flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
          <div className="text-red-600 text-xl">⚖️</div>
          <span className="font-semibold text-sm text-[#1d1d1f] tracking-tight">TREMBACH LAW FIRM</span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-7">
          <a href="/" className="relative text-[#1d1d1f] visited:!text-[#1d1d1f] hover:!text-[#1d1d1f] hover:visited:!text-[#1d1d1f] !no-underline visited:!no-underline hover:!no-underline hover:visited:!no-underline transition-colors text-xs font-normal after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-red-600 after:transition-[width] after:duration-300 hover:after:w-full">
            Home
          </a>
          <div 
            className="relative"
            onMouseEnter={() => setShowMegaMenu(true)}
            onMouseLeave={() => setShowMegaMenu(false)}
          >
            <a 
              href="/practice-areas" 
              className="relative text-[#1d1d1f] visited:!text-[#1d1d1f] hover:!text-[#1d1d1f] hover:visited:!text-[#1d1d1f] !no-underline visited:!no-underline hover:!no-underline hover:visited:!no-underline transition-colors text-xs font-medium tracking-wide after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-red-600 after:transition-[width] after:duration-300 hover:after:w-full"
            >
              Practice Areas
            </a>
            
            {/* Mega Menu - Full Screen Overlay */}
            {showMegaMenu && (
              <>
                {/* Backdrop blur overlay */}
                <div 
                  className="mega-blur-overlay fixed inset-0 top-[44px] z-[90] animate-in fade-in duration-200" 
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)'
                  }}
                />
                <div className="fixed left-0 right-0 top-[44px] bg-white border-b border-gray-200 z-[100] min-h-[50vh]">
                <div className="max-w-[1200px] mx-auto px-6 py-16">
                  <div className="grid grid-cols-3 gap-16">
                    {/* Left Column - Cancer Cases */}
                    <div>
                      <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <svg className="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
                            <path d="M12 6v6l4 2" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-[#1d1d1f]">Cancer Cases</h3>
                      </div>
                      <ul className="space-y-4">
                        <li>
                          <a href="/practice-areas/mesothelioma-asbestos" className="text-base text-gray-700 hover:text-red-600 transition-colors">
                            Mesothelioma & Asbestos
                          </a>
                        </li>
                        <li>
                          <a href="/practice-areas/talc-baby-powder-cancer" className="text-base text-gray-700 hover:text-red-600 transition-colors">
                            Talc/Baby Powder Cancer
                          </a>
                        </li>
                        <li>
                          <a href="/practice-areas/benzene-exposure" className="text-base text-gray-700 hover:text-red-600 transition-colors">
                            Benzene Exposure Cancer
                          </a>
                        </li>
                        <li>
                          <a href="/practice-areas/camp-lejeune" className="text-base text-gray-700 hover:text-red-600 transition-colors">
                            Camp Lejeune Cancer
                          </a>
                        </li>
                        <li>
                          <a href="/practice-areas/silicosis-injuries" className="text-base text-gray-700 hover:text-red-600 transition-colors">
                            Silicosis Injuries
                          </a>
                        </li>
        <li className="pt-4">
          <a href="/practice-areas?category=cancer" className="inline-flex items-center gap-2 bg-[#30d158] hover:bg-[#28cd4c] !text-black hover:!text-black active:!text-black visited:!text-black font-medium px-4 py-2 rounded-full text-sm transition-colors no-underline hover:no-underline visited:no-underline">
            See All →
          </a>
        </li>
                      </ul>
                    </div>

                    {/* Middle Column - Auto Accidents */}
                    <div>
                      <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <svg className="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            <path d="M5 17h-2v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-[#1d1d1f]">Auto Accidents</h3>
                      </div>
                      <ul className="space-y-4">
                        <li>
                          <a href="/practice-areas/truck-accidents" className="text-base text-gray-700 hover:text-red-600 transition-colors">
                            Truck Accidents
                          </a>
                        </li>
                        <li>
                          <a href="/practice-areas/car-accidents" className="text-base text-gray-700 hover:text-red-600 transition-colors">
                            Car Accidents
                          </a>
                        </li>
                        <li>
                          <a href="/practice-areas/motorcycle-accidents" className="text-base text-gray-700 hover:text-red-600 transition-colors">
                            Motorcycle Accidents
                          </a>
                        </li>
                        <li>
                          <a href="/practice-areas/uber-lyft" className="text-base text-gray-700 hover:text-red-600 transition-colors">
                            Uber & Lyft Accidents
                          </a>
                        </li>
                        <li>
                          <a href="/practice-areas/pedestrian-accidents" className="text-base text-gray-700 hover:text-red-600 transition-colors">
                            Pedestrian Accidents
                          </a>
                        </li>
        <li className="pt-4">
          <a href="/practice-areas?category=auto" className="inline-flex items-center gap-2 bg-[#30d158] hover:bg-[#28cd4c] !text-black hover:!text-black active:!text-black visited:!text-black font-medium px-4 py-2 rounded-full text-sm transition-colors no-underline hover:no-underline visited:no-underline">
            See All →
          </a>
        </li>
                      </ul>
                    </div>

                    {/* Right Column - Personal Injury */}
                    <div>
                      <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <svg className="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-[#1d1d1f]">Personal Injury</h3>
                      </div>
                      <ul className="space-y-4">
                        <li>
                          <a href="/practice-areas/dog-bite" className="text-base text-gray-700 hover:text-red-600 transition-colors">
                            Dog Bite Injuries
                          </a>
                        </li>
                        <li>
                          <a href="/practice-areas/birth-injury" className="text-base text-gray-700 hover:text-red-600 transition-colors">
                            Birth Injury
                          </a>
                        </li>
                        <li>
                          <a href="/practice-areas/burn-injury" className="text-base text-gray-700 hover:text-red-600 transition-colors">
                            Burn/Fire Injury
                          </a>
                        </li>
                        <li>
                          <a href="/practice-areas/brain-injury" className="text-base text-gray-700 hover:text-red-600 transition-colors">
                            Brain Injury
                          </a>
                        </li>
        <li>
          <a href="/practice-areas/medical-malpractice" className="text-base text-gray-700 hover:text-red-600 transition-colors">
            Medical Malpractice
          </a>
        </li>
        <li className="pt-4">
          <a href="/practice-areas?category=personal" className="inline-flex items-center gap-2 bg-[#30d158] hover:bg-[#28cd4c] !text-black hover:!text-black active:!text-black visited:!text-black font-medium px-4 py-2 rounded-full text-sm transition-colors no-underline hover:no-underline visited:no-underline">
            See All →
          </a>
        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                </div>
              </>
            )}
          </div>
          <a href="/about" className="relative text-[#1d1d1f] visited:!text-[#1d1d1f] hover:!text-[#1d1d1f] hover:visited:!text-[#1d1d1f] !no-underline visited:!no-underline hover:!no-underline hover:visited:!no-underline transition-colors text-xs font-normal after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-red-600 after:transition-[width] after:duration-300 hover:after:w-full">
            About Us
          </a>
          <div 
            className="relative"
            onMouseEnter={() => setShowResourcesMenu(true)}
            onMouseLeave={() => setShowResourcesMenu(false)}
          >
            <button 
              className="relative text-[#1d1d1f] visited:!text-[#1d1d1f] hover:!text-[#1d1d1f] hover:visited:!text-[#1d1d1f] !no-underline visited:!no-underline hover:!no-underline hover:visited:!no-underline transition-colors text-xs font-medium tracking-wide after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-red-600 after:transition-[width] after:duration-300 hover:after:w-full bg-transparent border-none cursor-pointer"
            >
              RESOURCES
            </button>
            
            {/* Resources Mega Menu */}
            {showResourcesMenu && (
              <>
                {/* Backdrop blur overlay */}
                <div 
                  className="mega-blur-overlay fixed inset-0 top-[44px] z-[90] animate-in fade-in duration-200" 
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)'
                  }}
                />
                <div className="fixed left-0 right-0 top-[44px] bg-white border-b border-gray-200 z-[100] min-h-[50vh]">
                  <div className="max-w-[1200px] mx-auto px-6 py-16">
                    <div className="grid grid-cols-2 gap-24">
                      {/* Left Column - Resources */}
                      <div>
                        <div className="flex items-center gap-3 mb-8">
                          <div className="w-12 h-12 flex items-center justify-center">
                            <svg className="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                              <polyline points="13 2 13 9 20 9" />
                            </svg>
                          </div>
                          <h3 className="text-2xl font-bold text-[#1d1d1f]">Resources</h3>
                        </div>
                        <ul className="space-y-4">
                          <li>
                            <a href="/calculators" className="text-base text-gray-700 hover:text-red-600 transition-colors">
                              Calculators
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-base text-gray-700 hover:text-red-600 transition-colors pointer-events-none">
                              Results and Reviews
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-base text-gray-700 hover:text-red-600 transition-colors pointer-events-none">
                              MI No-Fault Benefits Guide
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-base text-gray-700 hover:text-red-600 transition-colors pointer-events-none">
                              Blog: Legal Tips & News
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-base text-gray-700 hover:text-red-600 transition-colors pointer-events-none">
                              Areas Served
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-base text-gray-700 hover:text-red-600 transition-colors pointer-events-none">
                              FIREPROOF
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-base text-gray-700 hover:text-red-600 transition-colors pointer-events-none">
                              Careers
                            </a>
                          </li>
                        </ul>
                      </div>

                      {/* Right Column - Community */}
                      <div>
                        <div className="flex items-center gap-3 mb-8">
                          <div className="w-12 h-12 flex items-center justify-center">
                            <svg className="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                              <circle cx="9" cy="7" r="4" />
                              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                          </div>
                          <h3 className="text-2xl font-bold text-[#1d1d1f]">Community</h3>
                        </div>
                        <ul className="space-y-4">
                          <li>
                            <a href="#" className="text-base text-gray-700 hover:text-red-600 transition-colors pointer-events-none">
                              Project Backpack
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-base text-gray-700 hover:text-red-600 transition-colors pointer-events-none">
                              Meet Your Best Friend
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-base text-gray-700 hover:text-red-600 transition-colors pointer-events-none">
                              Ride Free NYE
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-base text-gray-700 hover:text-red-600 transition-colors pointer-events-none">
                              Scholarships
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-base text-gray-700 hover:text-red-600 transition-colors pointer-events-none">
                              Joel Morse Endowed
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-base text-gray-700 hover:text-red-600 transition-colors pointer-events-none">
                              Winning in the Community
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <a href="/results" className="relative text-[#1d1d1f] visited:!text-[#1d1d1f] hover:!text-[#1d1d1f] hover:visited:!text-[#1d1d1f] !no-underline visited:!no-underline hover:!no-underline hover:visited:!no-underline transition-colors text-xs font-normal after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-red-600 after:transition-[width] after:duration-300 hover:after:w-full">
            Results
          </a>
          <a href="/free-consultation" className="relative text-[#1d1d1f] visited:!text-[#1d1d1f] hover:!text-[#1d1d1f] hover:visited:!text-[#1d1d1f] !no-underline visited:!no-underline hover:!no-underline hover:visited:!no-underline transition-colors text-xs font-normal after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-red-600 after:transition-[width] after:duration-300 hover:after:w-full">
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