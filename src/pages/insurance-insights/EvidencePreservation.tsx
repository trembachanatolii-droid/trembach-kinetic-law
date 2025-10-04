import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import evidenceDeletion from '@/assets/evidence-deletion.jpg';

gsap.registerPlugin(ScrollTrigger);

const EvidencePreservation = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.from('.hero-content', {
      opacity: 0,
      y: 60,
      duration: 1.2,
      ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
    });

    gsap.from('.feature-card', {
      opacity: 0,
      y: 60,
      duration: 1,
      stagger: 0.15,
      scrollTrigger: {
        trigger: '.features-grid',
        start: 'top 80%',
      },
      ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Evidence Preservation & Data Protection | Trembach Law Firm</title>
        <meta name="description" content="Secure critical accident evidence before it's deleted. Expert guidance on surveillance footage retention, digital evidence preservation, and documentation strategies." />
        <meta name="keywords" content="evidence preservation, surveillance footage, digital evidence, accident documentation, California evidence law" />
        <link rel="canonical" href="/evidence-preservation" />
      </Helmet>

      <main className="bg-background">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-white">
          <div className="absolute inset-0">
            <img 
              src={evidenceDeletion} 
              alt="Evidence preservation and data protection" 
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/60"></div>
          </div>

          <div className="hero-content container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center bg-blue-600/20 border border-blue-500/50 rounded-full px-6 py-2 mb-8 backdrop-blur-sm">
              <AlertTriangle className="text-blue-700 mr-2" size={20} />
              <span className="text-blue-900 font-semibold">Time-Sensitive Action Required</span>
            </div>
            
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Evidence Disappears
              <br />
              <span className="text-slate-700">On Schedules</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-800 max-w-3xl mx-auto leading-relaxed">
              Critical surveillance footage and digital evidence are automatically deleted. Act now to preserve your case.
            </p>
          </div>
        </section>

        {/* Evidence Retention Timeline */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-20">
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Retention Timelines</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Different evidence types have varying retention periods. Missing these windows means losing critical proof.
              </p>
            </div>

            <div className="features-grid grid md:grid-cols-3 gap-6">
              <div className="feature-card bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-500">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Clock className="text-blue-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">24-72 Hours</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Retail stores, gas stations, and small business surveillance systems
                </p>
                <div className="text-sm font-semibold text-blue-600">Extremely Urgent</div>
              </div>

              <div className="feature-card bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-500">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Clock className="text-blue-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">7-30 Days</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Traffic cameras, intersection monitoring, and municipal systems
                </p>
                <div className="text-sm font-semibold text-blue-600">Critical Timeline</div>
              </div>

              <div className="feature-card bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-500">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Clock className="text-blue-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">30-90 Days</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Corporate facilities, apartment complexes, and parking structures
                </p>
                <div className="text-sm font-semibold text-blue-600">Important Action</div>
              </div>
            </div>
          </section>

          {/* Preservation Process */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 lg:p-12 text-white shadow-xl">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">How We Preserve Evidence</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1 backdrop-blur-sm">
                      <span className="text-lg font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Immediate Identification</h3>
                      <p className="text-blue-50">We quickly identify all potential evidence sources at the accident scene and surrounding areas.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1 backdrop-blur-sm">
                      <span className="text-lg font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Legal Preservation Letters</h3>
                      <p className="text-blue-50">We send formal spoliation letters requiring evidence preservation by law.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1 backdrop-blur-sm">
                      <span className="text-lg font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Rapid Collection</h3>
                      <p className="text-blue-50">Our team works quickly to collect and secure all available evidence before deletion.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1 backdrop-blur-sm">
                      <span className="text-lg font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Professional Documentation</h3>
                      <p className="text-blue-50">Every piece of evidence is properly documented and preserved for legal proceedings.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 lg:p-12 border-2 border-blue-200 shadow-lg">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-md">
                  <AlertTriangle className="text-white" size={32} />
                </div>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Don't Wait Until It's Too Late
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Every hour counts when preserving critical evidence. Contact us immediately to secure your case.
              </p>
              
              <Button 
                asChild
                size="lg" 
                className="bg-blue-600 text-white hover:bg-blue-700 h-14 px-10 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <a href="/free-consultation">
                  Secure Evidence Now
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default EvidencePreservation;
