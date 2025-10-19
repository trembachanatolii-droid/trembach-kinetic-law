import React, { useEffect, useState } from 'react';
import '../components/CriticalFixes.css'; // Emergency visibility fixes
import Logo from '@/components/Logo';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import TruthAboutCaseProfessional from '../components/TruthAboutCaseProfessional';
import { MarqueeBand } from '../components/Marquee';
import StepsToFileSection from '../components/StepsToFileSection';
import WhyChoose from '../components/WhyChoose';
import EveryProblemSolved from '../components/EveryProblemSolved';
import CapabilityStripes from '../components/CapabilityStripes';
import FeaturedResults from '../components/FeaturedResults';
import PracticeAreasReference from '../components/PracticeAreasReference';
import PracticeAreasLusion from '../components/PracticeAreasLusion';
import Process from '../components/Process';
import SEO from '../components/SEO';
import GlobalVisibilityFix from '../components/GlobalVisibilityFix';
import BlurFix from '../components/BlurFix';
import ThreeStepProcess from '../components/ThreeStepProcess';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Initialize smooth scrolling and animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Refresh ScrollTrigger after component mount
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
  };

  return (
    <>
      <GlobalVisibilityFix />
      <BlurFix />
      
    <main className="relative bg-background text-foreground">
      <SEO 
        title="Trembach Law Firm | California Injury & Asbestos Attorney"
        description="Former insurance defense attorney helping Californians. New firm, insider tactics, no fees unless we win."
        canonical="/"
      />
      {/* Hero Section */}
      <Hero />

      {/* Steps to File Section */}
      <StepsToFileSection />

      {/* Why Choose Trembach Law Firm */}
      <section id="why-choose" className="relative z-20">
        <WhyChoose />
      </section>

      {/* Three Step Process Section */}
      <section id="three-step-process" className="relative z-0">
        <ThreeStepProcess />
      </section>

      {/* Practice Areas */}
      <section id="practice-areas">
        <PracticeAreasLusion key="practice-areas-lusion" />
      </section>

      {/* Newsletter Section - Apple Glass Blue Style */}
      <section className="relative bg-gradient-to-b from-white via-blue-50/30 to-blue-100/40 py-24 overflow-hidden">
        {/* Glassmorphism Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative">
          <div className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-5xl font-bold mb-6 text-center text-[#1d1d1f] tracking-tight">
              Newsletter Sign Up
            </h2>
            <p className="text-lg text-[#424245] mb-10 max-w-2xl mx-auto text-center leading-relaxed">
              Never miss out on the latest updates! Get important legal insights, fun
              event information, and more. Sign up today and stay connected!
            </p>

            <form
              onSubmit={handleSubscribe}
              className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4"
            >
              <Input
                type="email"
                placeholder="example@subscribe.com *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-14 px-6 text-base bg-white/80 backdrop-blur-sm border-white/60 focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20 rounded-xl transition-all"
              />
              <Button
                type="submit"
                className="h-14 px-10 font-semibold text-base bg-gradient-to-r from-[#007AFF] to-[#0051D5] hover:from-[#0051D5] hover:to-[#003DA5] text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                SUBSCRIBE
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Truth About Your Case Section - Professional Apple Style */}
      <section id="truth">
        <TruthAboutCaseProfessional />
      </section>

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


      {/* Every Problem Solved */}
      <section id="problems">
        <EveryProblemSolved />
      </section>

      {/* Featured Results */}
      <section id="results">
        <FeaturedResults />
      </section>

      {/* Process */}
      <section id="process">
        <Process />
      </section>

      {/* Footer Section - Apple Blue Glass Style */}
      <footer className="relative bg-gradient-to-b from-white via-blue-50/30 to-blue-100/40 overflow-hidden">
        {/* Structured Data for Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Trembach Law Firm, APC",
            "url": "https://www.trembachlawfirm.com",
            "logo": "https://www.trembachlawfirm.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-818-123-4567",
              "contactType": "customer service",
              "availableLanguage": "English",
              "areaServed": "US-CA"
            },
            "sameAs": [
              "https://www.facebook.com/trembachlawfirm",
              "https://www.linkedin.com/company/trembachlawfirm"
            ]
          })}
        </script>

        {/* Glassmorphism Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative">
          {/* Main Footer Content - 4 Column Grid */}
          <div className="py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              
              {/* Newsletter Column with Glass Card */}
              <div className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-[#1d1d1f] mb-2 tracking-tight">
                  Stay Informed
                </h3>
                <p className="text-sm text-[#6e6e73] mb-6">Get legal insights delivered</p>
                
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-11 px-4 text-sm bg-white/80 backdrop-blur-sm border-white/60 focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20 rounded-xl transition-all"
                  />
                  <Button
                    type="submit"
                    className="w-full h-11 font-semibold text-sm bg-gradient-to-r from-[#007AFF] to-[#0051D5] hover:from-[#0051D5] hover:to-[#003DA5] text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Subscribe
                  </Button>
                </form>
              </div>

              {/* Practice Areas Column */}
              <div className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-[#1d1d1f] mb-6 tracking-tight">
                  Practice Areas
                </h3>
                <nav>
                  <ul className="space-y-3">
                    {[
                      { label: 'Mesothelioma & Asbestos', href: '/practice-areas/mesothelioma-asbestos' },
                      { label: 'Silicosis Injuries', href: '/practice-areas/silicosis-injuries' },
                      { label: 'Talc & Baby Powder Cancer', href: '/practice-areas/talc-baby-powder-cancer' },
                      { label: 'Car Accidents', href: '/practice-areas/car-accidents' },
                      { label: 'Truck Accidents', href: '/practice-areas/truck-accidents' },
                      { label: 'Motorcycle Accidents', href: '/practice-areas/motorcycle-accidents' },
                      { label: 'Wrongful Death', href: '/practice-areas/wrongful-death' }
                    ].map((link, index) => (
                      <li key={index}>
                        <Link
                          to={link.href}
                          className="group flex items-center text-sm text-[#424245] hover:text-[#007AFF] transition-all duration-300"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="w-1 h-1 bg-[#007AFF] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/practice-areas"
                    className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#007AFF] hover:text-[#0051D5] transition-all group"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    View All Practice Areas
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </nav>
              </div>

              {/* Resources Column */}
              <div className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-[#1d1d1f] mb-6 tracking-tight">
                  Resources
                </h3>
                <nav>
                  <ul className="space-y-3">
                    {[
                      { label: 'Blog & Legal Insights', href: '/blog' },
                      { label: 'About Our Firm', href: '/about' },
                      { label: 'Free Consultation', href: '/free-consultation' },
                      { label: 'Contact Us', href: '/contact' }
                    ].map((link, index) => (
                      <li key={index}>
                        <Link
                          to={link.href}
                          className="group flex items-center text-sm text-[#424245] hover:text-[#007AFF] transition-all duration-300"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span className="w-1 h-1 bg-[#007AFF] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Contact Column */}
              <div className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-[#1d1d1f] mb-2 tracking-tight">
                  Contact Us
                </h3>
                <p className="text-sm text-[#6e6e73] mb-6">Available 24/7</p>
                
                <div className="space-y-4 mb-6">
                  <a 
                    href="tel:+18181234567"
                    className="block group"
                  >
                    <p className="text-xs text-[#6e6e73] mb-1">Phone</p>
                    <p className="text-2xl font-bold text-[#007AFF] group-hover:text-[#0051D5] transition-colors">
                      (818) 123-4567
                    </p>
                  </a>
                  
                  <div className="pt-4 border-t border-white/60">
                    <p className="text-xs text-[#6e6e73] mb-2">Hours</p>
                    <p className="text-sm font-semibold text-[#1d1d1f]">
                      24/7 Emergency Service
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Link
                    to="/free-consultation"
                    className="flex items-center justify-between px-4 py-2.5 bg-gradient-to-r from-[#007AFF] to-[#0051D5] hover:from-[#0051D5] hover:to-[#003DA5] text-white rounded-xl text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg group"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <span>Free Case Review</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Legal Section with Glass Effect */}
          <div className="border-t border-white/40 backdrop-blur-sm">
            <div className="py-8">
              <div className="backdrop-blur-xl bg-white/40 rounded-2xl p-6 mb-6">
                <p className="text-[#6e6e73] text-xs leading-relaxed">
                  The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship. Past results do not guarantee future outcomes.
                </p>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <Link 
                  to="/privacy-policy" 
                  className="text-xs text-[#007AFF] hover:text-[#0051D5] font-medium transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Privacy Policy
                </Link>
                
                <p className="text-[#86868b] text-xs">
                  Copyright © 2025 Trembach Law Firm, APC. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
    </>
  );
};

export default Index;
