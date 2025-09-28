import React, { useEffect, useState } from 'react';
import Logo from '@/components/Logo';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import About from '../components/About';
import TruthAboutCase from '../components/TruthAboutCase';
import { MarqueeBand } from '../components/Marquee';
import CriticalStepsSection from '../components/CriticalStepsSection';
import EveryProblemSolved from '../components/EveryProblemSolved';
import CapabilityStripes from '../components/CapabilityStripes';
import FeaturedResults from '../components/FeaturedResults';
import PracticeAreasReference from '../components/PracticeAreasReference';
import Process from '../components/Process';
import SEO from '../components/SEO';
import Preloader from '../components/Preloader';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Initialize smooth scrolling and animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Refresh ScrollTrigger after component mount
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
    setShowContent(true);
    
    // Refresh ScrollTrigger after showing content
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  };

  useEffect(() => {
    if (isLoading) {
      const t = setTimeout(() => {
        handlePreloaderComplete();
      }, 1200);
      return () => clearTimeout(t);
    }
  }, [isLoading]);

  // Global failsafe: ensure all sections are visible even if animations fail
  useEffect(() => {
    if (!showContent) return;
    const ensureVisible = () => {
      const sections = Array.from(document.querySelectorAll('section')) as HTMLElement[];
      sections.forEach((el) => {
        const op = parseFloat(getComputedStyle(el).opacity || '1');
        if (!isNaN(op) && op < 0.99) {
          el.style.opacity = '1';
        }
      });
      ScrollTrigger.refresh();
    };

    const id = setTimeout(ensureVisible, 200);
    return () => clearTimeout(id);
  }, [showContent]);

  return (
    <>
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      
    <main className="relative bg-background text-foreground" style={{ opacity: showContent ? 1 : 0 }}>
      <SEO 
        title="Trembach Law Firm | California Injury & Asbestos Attorney"
        description="Former insurance defense attorney helping Californians. New firm, insider tactics, no fees unless we win."
        canonical="/"
      />
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Truth About Your Case Section */}
      <TruthAboutCase />

      {/* Practice Areas */}
      <PracticeAreasReference key="practice-areas-v2" />

      {/* Marquee Bands */}
      <div className="relative z-10">
        <MarqueeBand 
          items={[
            'Mesothelioma',
            'Silicosis', 
            'Talc/Talcum',
            'Car Accidents',
            'Dog Bites',
            'Product Liability',
            'Wrongful Death'
          ]}
          direction="left"
        />
        
        <MarqueeBand 
          items={[
            'USC Gould',
            'No Fees Unless We Win',
            'Multilingual',
            'All 58 Counties'
          ]}
          direction="right"
        />
      </div>

      {/* Critical Steps Section */}
      <CriticalStepsSection />

      {/* Every Problem Solved */}
      <EveryProblemSolved />

      {/* Featured Results */}
      <FeaturedResults />

      {/* Process */}
      <Process />

      {/* Footer */}
      <footer className="relative py-20 bg-surface/20 border-t border-border/20">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Firm Info */}
            <div>
              <Logo size="lg" className="mb-4" />
              <p className="text-body text-muted-foreground leading-relaxed mb-6">
                Former insurance defense attorney now fighting exclusively for California injury victims.
              </p>
              <div className="space-y-2 text-small text-muted-foreground">
                <p>27001 Agoura Road, Suite 350</p>
                <p>Calabasas, CA 91301</p>
                <p className="text-primary font-medium">(800) 555-0000</p>
                <p>info@trembachlawfirm.com</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-title font-display font-semibold text-foreground mb-6">
                Quick Links
              </h4>
              <div className="space-y-3">
                {[
                  'Practice Areas',
                  'About Attorney',
                  'California Law',
                  'Locations',
                  'Free Consultation'
                ].map((link, index) => (
                  <a 
                    key={index}
                    href="#"
                    className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Legal Disclaimer */}
            <div>
              <h4 className="text-title font-display font-semibold text-foreground mb-6">
                Legal Notice
              </h4>
              <div className="text-xs text-muted-foreground leading-relaxed space-y-3">
                <p>
                  The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation.
                </p>
                <p>
                  This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.
                </p>
                <p>
                  Prior results do not guarantee a similar outcome. Every case is different.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border/20 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-small text-muted-foreground">
              © 2024 Trembach Law Firm, APC. All rights reserved.
            </p>
            <div className="flex space-x-6 text-small text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors duration-300">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
    </>
  );
};

export default Index;
