import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, FileText, Phone, Scale, FileCheck, Clock } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import recordingSystem from '@/assets/recording-system.jpg';
import './legal-protection.css';

gsap.registerPlugin(ScrollTrigger);

const LegalRepresentation = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Hero animations
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

    // Number count-up animations
    const numberElements = document.querySelectorAll('.step-number');
    numberElements.forEach((element) => {
      const target = parseInt(element.textContent || '0');
      gsap.from(element, {
        textContent: 0,
        duration: 2,
        ease: 'power2.out',
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
        },
        onUpdate: function() {
          element.textContent = String(Math.ceil(this.targets()[0].textContent));
        }
      });
    });

    // Card entrance animations with stagger
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.from(card, {
          opacity: 0,
          y: 100,
          rotateX: -15,
          duration: 1.2,
          delay: index * 0.15,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
        });
      }
    });

    // Icon breathe animations
    gsap.to('.step-icon', {
      scale: 1.05,
      duration: 2,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });
  }, []);

  // Mouse tracking for spotlight and magnetic effect
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setMousePosition({ x, y });

      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, {
          x: x - 400,
          y: y - 400,
          duration: 0.3,
          ease: 'power2.out',
        });
      }

      // Magnetic effect on cards
      cardsRef.current.forEach((card) => {
        if (!card) return;
        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2 - rect.left;
        const cardCenterY = cardRect.top + cardRect.height / 2 - rect.top;
        
        const distance = Math.sqrt(
          Math.pow(x - cardCenterX, 2) + Math.pow(y - cardCenterY, 2)
        );

        if (distance < 200) {
          const angle = Math.atan2(y - cardCenterY, x - cardCenterX);
          const strength = Math.max(0, (200 - distance) / 200) * 10;
          
          gsap.to(card, {
            x: Math.cos(angle) * strength,
            y: Math.sin(angle) * strength,
            rotateY: (x - cardCenterX) * 0.02,
            rotateX: -(y - cardCenterY) * 0.02,
            duration: 0.3,
            ease: 'power2.out',
          });
        } else {
          gsap.to(card, {
            x: 0,
            y: 0,
            rotateY: 0,
            rotateX: 0,
            duration: 0.5,
            ease: 'power2.out',
          });
        }
      });
    };

    section.addEventListener('mousemove', handleMouseMove);
    return () => section.removeEventListener('mousemove', handleMouseMove);
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

        {/* Process Steps Section - Bento Box Layout */}
        <section 
          ref={sectionRef}
          className="relative py-32 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50"
        >
          {/* Spotlight Effect */}
          <div
            ref={spotlightRef}
            className="absolute w-[800px] h-[800px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(148, 163, 184, 0.15) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />

          {/* Animated Gradient Mesh */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '4s' }} />
          </div>

          {/* Grain Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.015] pointer-events-none"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noise)" /%3E%3C/svg%3E")',
            }}
          />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            {/* Section Header */}
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent" style={{ letterSpacing: '-0.02em' }}>
                Your Protection Process
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Three powerful steps to safeguard your rights and maximize your claim value
              </p>
            </div>

            {/* Bento Box Grid */}
            <div className="grid grid-cols-12 gap-6 mb-20">
              {/* Step 1 - Wider Card */}
              <div
                ref={(el) => (cardsRef.current[0] = el)}
                className="col-span-12 lg:col-span-7 group"
                style={{ perspective: '1000px' }}
              >
                <div className="relative h-full rounded-3xl overflow-hidden backdrop-blur-xl bg-white/70 border border-slate-200/60 shadow-2xl transition-all duration-500 hover:shadow-slate-300/50">
                  {/* Card Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Frosted Glass Edge */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-60 pointer-events-none" />

                  <div className="relative p-10 lg:p-12">
                    {/* Icon & Number */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30 step-icon">
                          <Shield className="text-white" size={36} />
                        </div>
                        <div className="absolute -top-3 -right-3 w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-xl">
                          <span className="step-number">1</span>
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
                        24 Hours
                      </div>
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
                      Legal Shield Activation
                    </h3>
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                      Immediate attorney assignment and comprehensive case evaluation. We analyze insurance tactics and build your protection strategy before any statements are made.
                    </p>

                    {/* Features */}
                    <div className="space-y-3">
                      {[
                        'AI-powered statement analysis prevention',
                        'Insurance tactic identification',
                        'Rights protection documentation',
                        'Strategic communication planning'
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-start group/item">
                          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5 group-hover/item:bg-blue-200 transition-colors">
                            <FileCheck className="text-blue-600" size={14} />
                          </div>
                          <span className="text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 - Featured Card (Taller) */}
              <div
                ref={(el) => (cardsRef.current[1] = el)}
                className="col-span-12 lg:col-span-5 group"
                style={{ perspective: '1000px' }}
              >
                <div className="relative h-full rounded-3xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/60 shadow-2xl transition-all duration-500 hover:shadow-slate-900/50">
                  {/* Animated Border Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                  
                  {/* Badge */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse-glow">
                      FEATURED
                    </div>
                  </div>

                  <div className="relative p-10 lg:p-12 h-full flex flex-col">
                    {/* Icon & Number */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/30 step-icon">
                          <Scale className="text-white" size={36} />
                        </div>
                        <div className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-900 font-bold text-lg shadow-xl">
                          <span className="step-number">2</span>
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-purple-200 bg-purple-900/30 px-4 py-2 rounded-full">
                        2-4 Weeks
                      </div>
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                      Case Building
                    </h3>
                    <p className="text-lg text-slate-300 mb-6 leading-relaxed flex-grow">
                      Evidence collection, expert consultations, and comprehensive case valuation. We build an ironclad case while managing all insurance company communications.
                    </p>

                    {/* Success Rate */}
                    <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
                      <div className="text-5xl font-bold text-white mb-2">98%</div>
                      <div className="text-slate-300">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 - Bottom Wide Card */}
              <div
                ref={(el) => (cardsRef.current[2] = el)}
                className="col-span-12 group"
                style={{ perspective: '1000px' }}
              >
                <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/70 border border-slate-200/60 shadow-2xl transition-all duration-500 hover:shadow-slate-300/50">
                  {/* Card Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative p-10 lg:p-12">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div>
                        {/* Icon & Number */}
                        <div className="flex items-center mb-6">
                          <div className="relative">
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 step-icon">
                              <Clock className="text-white" size={36} />
                            </div>
                            <div className="absolute -top-3 -right-3 w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-xl">
                              <span className="step-number">3</span>
                            </div>
                          </div>
                          <div className="ml-6 text-sm font-semibold text-cyan-600 bg-cyan-50 px-4 py-2 rounded-full">
                            Settlement or Trial
                          </div>
                        </div>

                        <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
                          Maximum Compensation
                        </h3>
                        <p className="text-lg text-slate-600 leading-relaxed">
                          Aggressive negotiation and trial-ready preparation ensure you receive the maximum compensation you deserve. We don't settle for less.
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { label: 'Average Settlement', value: '3.2x', subtitle: 'Higher than solo claims' },
                          { label: 'Trial Win Rate', value: '94%', subtitle: 'Courtroom victories' }
                        ].map((stat, idx) => (
                          <div key={idx} className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200">
                            <div className="text-4xl font-bold text-slate-900 mb-1">{stat.value}</div>
                            <div className="text-sm font-semibold text-slate-600 mb-1">{stat.label}</div>
                            <div className="text-xs text-slate-500">{stat.subtitle}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Timeline */}
            <div className="max-w-4xl mx-auto">
              <div className="relative h-2 bg-slate-200 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
              </div>
              <div className="flex justify-between mt-4 text-sm text-slate-600">
                <span>Start</span>
                <span>Case Building</span>
                <span>Resolution</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Container */}
        <div className="content-container container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-20">

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
