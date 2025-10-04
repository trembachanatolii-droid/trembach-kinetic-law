import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, FileText, Phone } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import recordingSystem from '@/assets/recording-system.jpg';

gsap.registerPlugin(ScrollTrigger);

const LegalRepresentation = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.from('.hero-title', {
      opacity: 0,
      y: 60,
      duration: 1.2,
      ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
    });

    gsap.from('.hero-subtitle', {
      opacity: 0,
      y: 40,
      duration: 1,
      delay: 0.2,
      ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
    });

    gsap.from('.content-section', {
      opacity: 0,
      y: 80,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.content-container',
        start: 'top 80%',
      },
      ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Legal Representation & Statement Protection | Trembach Law Firm</title>
        <meta name="description" content="Protect your rights during insurance company recorded statements. Expert legal guidance on statement analysis systems and claim protection strategies." />
        <meta name="keywords" content="insurance recorded statements, legal representation, claim protection, statement rights, insurance tactics" />
        <link rel="canonical" href="/legal-representation" />
      </Helmet>

      <main className="bg-background">
        {/* Apple-style Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
          <div className="absolute inset-0">
            <img 
              src={recordingSystem} 
              alt="Legal protection against insurance recording systems" 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="hero-title font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Protect Your
              <br />
              <span className="text-slate-300">Legal Rights</span>
            </h1>
            <p className="hero-subtitle text-xl sm:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Expert legal representation against insurance company statement analysis systems
            </p>
          </div>
        </section>

        {/* Content Container */}
        <div className="content-container container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-20">
          
          {/* Recording Systems Explained */}
          <section className="content-section mb-20">
            <div className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mr-4">
                  <Shield className="text-white" size={24} />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">How Recording Systems Work</h2>
              </div>
              
              <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
                <p>
                  Insurance companies employ sophisticated AI-powered transcription and analysis systems that process every word you say during recorded statements. These systems are designed to identify inconsistencies, minimize liability, and build denial strategies.
                </p>
                
                <div className="bg-slate-50 rounded-2xl p-6 border-l-4 border-slate-900">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">What They Analyze</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <span className="text-slate-400 mr-3">•</span>
                      <span>Timeline inconsistencies in your accident description</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-400 mr-3">•</span>
                      <span>Emotional state and confidence level indicators</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-400 mr-3">•</span>
                      <span>Medical terminology usage and injury descriptions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-slate-400 mr-3">•</span>
                      <span>Comparative statements against previous conversations</span>
                    </li>
                  </ul>
                </div>

                <p>
                  Having legal representation before any recorded statement ensures your rights are protected and your words cannot be manipulated against your claim.
                </p>
              </div>
            </div>
          </section>

          {/* Protection Strategies */}
          <section className="content-section mb-20">
            <div className="bg-slate-900 rounded-3xl p-8 lg:p-12 text-white">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4">
                  <FileText className="text-slate-900" size={24} />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold">Your Protection Strategy</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-100">Before Speaking</h3>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start">
                      <ArrowRight className="text-slate-400 mr-3 mt-1 flex-shrink-0" size={20} />
                      <span>Never provide recorded statements without legal counsel</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="text-slate-400 mr-3 mt-1 flex-shrink-0" size={20} />
                      <span>Understand your legal rights to representation</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="text-slate-400 mr-3 mt-1 flex-shrink-0" size={20} />
                      <span>Request preparation time to organize facts</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-100">With Legal Support</h3>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start">
                      <ArrowRight className="text-slate-400 mr-3 mt-1 flex-shrink-0" size={20} />
                      <span>Attorney reviews statement strategy beforehand</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="text-slate-400 mr-3 mt-1 flex-shrink-0" size={20} />
                      <span>Legal objections to improper questions</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="text-slate-400 mr-3 mt-1 flex-shrink-0" size={20} />
                      <span>Professional documentation of the entire process</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="content-section text-center">
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 lg:p-12 border border-slate-200">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center">
                  <Phone className="text-white" size={32} />
                </div>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Get Legal Protection Now
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Don't face insurance company tactics alone. Our experienced attorneys protect your rights and maximize your claim value.
              </p>
              
              <Button 
                size="lg" 
                className="bg-slate-900 text-white hover:bg-slate-800 h-14 px-10 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default LegalRepresentation;
