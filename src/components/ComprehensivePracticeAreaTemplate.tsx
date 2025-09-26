import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';

import SEO from '@/components/SEO';

gsap.registerPlugin(ScrollTrigger);

interface ComprehensivePracticeAreaTemplateProps {
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
  hero: {
    backgroundImage: string;
    title: string;
    subtitle: string;
    description: string;
  };
  children: React.ReactNode;
}

const ComprehensivePracticeAreaTemplate: React.FC<ComprehensivePracticeAreaTemplateProps> = ({
  seo,
  hero,
  children
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Removed GSAP animations for immediate text visibility
    return () => {};
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: `url(${hero.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              {hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              {hero.subtitle}
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-3xl leading-relaxed">
              {hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                Free Case Review
              </Button>
              <Button variant="secondary" size="lg" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 transition-colors">
                Call (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Main Content */}
      <div ref={contentRef} className="container mx-auto px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ComprehensivePracticeAreaTemplate;