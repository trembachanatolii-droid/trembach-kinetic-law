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
            
            {/* Mega Menu - Full Screen Overlay */}
            {showMegaMenu && (
              <div className="fixed left-0 right-0 top-[44px] bg-white border-b border-gray-200 z-[100] min-h-[50vh]">
                <div className="max-w-[1200px] mx-auto px-6 py-16">
                  <div className="grid grid-cols-3 gap-16">
                    {/* Left Column - Introduction */}
                    <div>
                      <h2 className="text-4xl font-bold text-[#1d1d1f] mb-6">Cancer</h2>
                      <p className="text-base text-gray-600 leading-relaxed">
                        We fight for every case—big or small. As Michigan's largest injury firm, you get a team of legal professionals dedicated to getting you every dollar you deserve. And with over $2 billion recovered, thousands of clients served, and decades of experience, we know what it takes to win. Why call anyone else?
                      </p>
                    </div>

                    {/* Middle Column - Occupational Cancer */}
                    <div>
                      <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <svg className="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 11l3 3L22 4" />
                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-[#1d1d1f]">Occupational Cancer</h3>
                      </div>
                      <ul className="space-y-4">
                        <li>
                          <a href="/practice-areas/mesothelioma" className="text-base text-gray-700 hover:text-red-600 transition-colors">
                            Mesothelioma
                          </a>
                        </li>
                        <li>
                          <a href="/practice-areas/asbestos-exposure" className="text-base text-gray-700 hover:text-red-600 transition-colors">
                            Asbestos Exposure
                          </a>
                        </li>
                        <li>
                          <a href="/practice-areas/lung-cancer" className="text-base text-gray-700 hover:text-red-600 transition-colors">
                            Lung Cancer
                          </a>
                        </li>
                        <li>
                          <a href="/practice-areas/chemical-exposure" className="text-base text-gray-700 hover:text-red-600 transition-colors">
                            Chemical Exposure Cancer
                          </a>
                        </li>
                        <li>
                          <a href="/practice-areas/industrial-cancer" className="text-base text-gray-700 hover:text-red-600 transition-colors">
                            Industrial Cancer
                          </a>
                        </li>
                        <li className="pt-4">
                          <a href="/practice-areas?category=occupational" className="text-base font-semibold text-[#1d1d1f] hover:text-red-600 transition-colors inline-flex items-center gap-2">
                            See All →
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Right Column - Environmental Cancer */}
                    <div>
                      <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <svg className="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2a10 10 0 1 0 10 10" />
                            <path d="M12 2v10l5 5" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-[#1d1d1f]">Environmental Cancer</h3>
                      </div>
                      <ul className="space-y-4">
                        <li>
                          <a href="/practice-areas/toxic-exposure" className="text-base text-gray-700 hover:text-red-600 transition-colors">
                            Toxic Exposure
                          </a>
                        </li>
                        <li>
                          <a href="/practice-areas/contaminated-water" className="text-base text-gray-700 hover:text-red-600 transition-colors">
                            Contaminated Water
                          </a>
                        </li>
                        <li>
                          <a href="/practice-areas/radiation-exposure" className="text-base text-gray-700 hover:text-red-600 transition-colors">
                            Radiation Exposure
                          </a>
                        </li>
                        <li>
                          <a href="/practice-areas/defective-products" className="text-base text-gray-700 hover:text-red-600 transition-colors">
                            Defective Products Cancer
                          </a>
                        </li>
                        <li>
                          <a href="/practice-areas/pharmaceutical-cancer" className="text-base text-gray-700 hover:text-red-600 transition-colors">
                            Pharmaceutical Cancer
                          </a>
                        </li>
                        <li className="pt-4">
                          <a href="/practice-areas?category=environmental" className="text-base font-semibold text-[#1d1d1f] hover:text-red-600 transition-colors inline-flex items-center gap-2">
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