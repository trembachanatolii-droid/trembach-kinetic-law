import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Scale, Shield, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EveryProblemSolved = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineWordsRef = useRef<HTMLSpanElement[]>([]);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const gridRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const problems = [
    {
      number: 1,
      problem: "I don't know what my case is worth",
      solution: "Former defense attorney reveals exact formula insurance companies use to value cases (then we 10X it).",
      icon: Scale,
      link: "/free-consultation",
      ctaText: "Get Case Valuation",
      gradient: "from-blue-500/20 via-cyan-500/20 to-blue-600/20"
    },
    {
      number: 2,
      problem: "Insurance offered me pennies",
      solution: "We know their entire playbook. Average settlement increase: 347% above initial offer.",
      icon: Shield,
      link: "/practice-areas",
      ctaText: "Fight Back Now",
      gradient: "from-purple-500/20 via-pink-500/20 to-purple-600/20"
    },
    {
      number: 3,
      problem: "I can't afford a lawyer",
      solution: "$0 upfront. $0 unless we win. We even advance all case costs.",
      icon: Clock,
      link: "/free-consultation",
      ctaText: "Start Free Review",
      gradient: "from-emerald-500/20 via-teal-500/20 to-emerald-600/20"
    },
    {
      number: 4,
      problem: "This will take forever",
      solution: "Most cases settle in 3-6 months using our insider negotiation tactics.",
      icon: Scale,
      link: "/practice-areas",
      ctaText: "Fast-Track My Case",
      gradient: "from-orange-500/20 via-amber-500/20 to-orange-600/20"
    },
    {
      number: 5,
      problem: "They're denying liability",
      solution: "We know every excuse they use and exactly how to destroy each one.",
      icon: Shield,
      link: "/free-consultation",
      ctaText: "Break Their Defense",
      gradient: "from-red-500/20 via-rose-500/20 to-red-600/20"
    },
    {
      number: 6,
      problem: "I'm overwhelmed",
      solution: "We handle 100% of everything. You focus on healing.",
      icon: Clock,
      link: "/free-consultation",
      ctaText: "Get Support Today",
      gradient: "from-indigo-500/20 via-violet-500/20 to-indigo-600/20"
    }
  ];

  // Mouse tracking for magnetic effects and spotlight
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setMousePosition({ x, y });

      // Magnetic effect on cards
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        
        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;
        
        const deltaX = e.clientX - cardCenterX;
        const deltaY = e.clientY - cardCenterY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        if (distance < 250 && hoveredCard === index) {
          const force = (250 - distance) / 250;
          const moveX = (deltaX * force * 0.1);
          const moveY = (deltaY * force * 0.1);
          const rotateY = (deltaX * force * 0.03);
          const rotateX = -(deltaY * force * 0.03);
          
          gsap.to(card, {
            x: moveX,
            y: moveY,
            rotateY: rotateY,
            rotateX: rotateX,
            duration: 0.4,
            ease: "power2.out"
          });
        } else if (hoveredCard !== index) {
          gsap.to(card, {
            x: 0,
            y: 0,
            rotateY: 0,
            rotateX: 0,
            duration: 0.6,
            ease: "power2.out"
          });
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [hoveredCard]);

  // GSAP Scroll Animations
  useEffect(() => {
    if (!sectionRef.current || !gridRef.current) return;

    const section = sectionRef.current;
    const headlineWords = headlineWordsRef.current.filter(Boolean);
    const subheading = subheadingRef.current;
    const cards = cardsRef.current.filter(Boolean);
    const grid = gridRef.current;

    if (headlineWords.length === 0 || !subheading || cards.length === 0) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Set initial states
    gsap.set([section], { opacity: 0 });
    gsap.set(headlineWords, { 
      opacity: 0, 
      y: prefersReducedMotion ? 0 : 30,
      scale: prefersReducedMotion ? 1 : 0.95
    });
    gsap.set(subheading, { 
      opacity: 0, 
      y: prefersReducedMotion ? 0 : 20 
    });
    gsap.set(cards, { 
      opacity: 0, 
      y: prefersReducedMotion ? 0 : 60,
      scale: prefersReducedMotion ? 1 : 0.9,
      rotateX: prefersReducedMotion ? 0 : -15
    });

    // Create master timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Section fade in
    tl.to(section, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out"
    })
    // Headline words with stagger and scale
    .to(headlineWords, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: prefersReducedMotion ? 0.4 : 0.7,
      stagger: prefersReducedMotion ? 0.05 : 0.12,
      ease: "expo.out"
    }, "-=0.2")
    // Subheading
    .to(subheading, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.4")
    // Cards grid entrance
    .to(cards, {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      duration: 0.8,
      stagger: {
        amount: 0.6,
        from: "start",
        grid: "auto",
        ease: "power2.inOut"
      },
      ease: "expo.out"
    }, "-=0.3");

    // Parallax effect on scroll
    gsap.to(grid, {
      y: -50,
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative py-32 lg:py-40 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)',
        isolation: 'isolate'
      }}
    >
      {/* Animated gradient mesh background */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(0, 122, 255, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(123, 104, 238, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(100, 210, 255, 0.1) 0%, transparent 60%)
          `,
          animation: 'meshMove 20s ease-in-out infinite'
        }}
      />

      {/* Spotlight following mouse */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 122, 255, 0.08), transparent)`,
          opacity: hoveredCard !== null ? 1 : 0
        }}
      />

      {/* Grain texture */}
      <div 
        className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 lg:mb-28">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#007AFF]/10 border border-[#007AFF]/20 mb-6">
            <Sparkles className="w-4 h-4 text-[#007AFF]" />
            <span className="text-sm font-semibold text-[#007AFF]">Complete Solutions</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6"
              style={{
                fontFamily: '-apple-system, "SF Pro Display", system-ui, BlinkMacSystemFont, sans-serif',
                letterSpacing: '-0.02em',
                lineHeight: '1.1'
              }}>
            {['Every', 'Problem', 'Solved'].map((word, index) => (
              <span
                key={index}
                ref={el => { if (el) headlineWordsRef.current[index] = el; }}
                className="inline-block mr-4 last:mr-0"
                style={{
                  background: 'linear-gradient(180deg, #ffffff 0%, #d2d2d7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {word}
              </span>
            ))}
          </h2>
          
          <p 
            ref={subheadingRef}
            className="text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto font-normal"
            style={{
              fontFamily: '-apple-system, "SF Pro Text", system-ui, BlinkMacSystemFont, sans-serif',
              letterSpacing: '0.005em',
              lineHeight: '1.5'
            }}
          >
            Here's how we eliminate every obstacle between you and maximum compensation
          </p>
        </div>

        {/* Cards Grid - Apple-style Bento Layout */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
          style={{ perspective: '2000px' }}
        >
          {problems.map((item, index) => {
            const IconComponent = item.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <article
                key={index}
                ref={el => { if (el) cardsRef.current[index] = el; }}
                className="group relative"
                style={{
                  transformStyle: 'preserve-3d',
                  willChange: 'transform'
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div 
                  className={`relative h-full rounded-3xl p-8 transition-all duration-500 ease-out ${
                    isHovered ? 'scale-[1.02]' : 'scale-100'
                  }`}
                  style={{
                    background: isHovered 
                      ? 'rgba(255, 255, 255, 0.08)'
                      : 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    backdropFilter: 'blur(40px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                    boxShadow: isHovered 
                      ? '0 20px 60px rgba(0, 122, 255, 0.3), 0 0 80px rgba(0, 122, 255, 0.15)'
                      : '0 4px 20px rgba(0, 0, 0, 0.3)',
                    transform: isHovered ? 'translateZ(20px)' : 'translateZ(0)'
                  }}
                >
                  {/* Gradient overlay */}
                  <div 
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#007AFF]/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <IconComponent className="w-7 h-7 text-[#007AFF]" />
                      </div>
                    </div>

                    {/* Problem Number */}
                    <div className="text-xs font-bold text-[#007AFF] mb-3 tracking-wider uppercase">
                      Problem #{item.number}
                    </div>

                    {/* Problem Statement */}
                    <blockquote className="text-lg font-semibold text-white italic mb-4 leading-tight">
                      "{item.problem}"
                    </blockquote>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-4 group-hover:via-[#007AFF]/50 transition-all duration-500" />

                    {/* Solution Heading */}
                    <div className="text-xs font-bold text-gray-400 mb-2 tracking-wide uppercase">
                      WE SOLVE THIS:
                    </div>

                    {/* Solution Text */}
                    <p className="text-sm text-gray-300 leading-relaxed mb-6">
                      {item.solution}
                    </p>

                    {/* CTA Link */}
                    <Link
                      to={item.link}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#007AFF] hover:gap-3 transition-all duration-300 group/link"
                    >
                      <span>{item.ctaText}</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>

                  {/* Large number watermark */}
                  <div 
                    className="absolute bottom-4 right-4 text-[120px] font-black leading-none pointer-events-none select-none"
                    style={{
                      color: '#007AFF',
                      opacity: 0.08,
                      fontFamily: '-apple-system, "SF Pro Display", system-ui',
                      textShadow: '0 0 80px rgba(0, 122, 255, 0.3)'
                    }}
                  >
                    {item.number}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 lg:mt-28 text-center">
          <div 
            className="max-w-3xl mx-auto rounded-3xl p-10 lg:p-12"
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(40px)',
              WebkitBackdropFilter: 'blur(40px)'
            }}
          >
            <h3 
              className="text-3xl lg:text-4xl font-bold text-white mb-4"
              style={{
                fontFamily: '-apple-system, "SF Pro Display", system-ui',
                letterSpacing: '-0.02em'
              }}
            >
              Ready to Get Maximum Compensation?
            </h3>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Don't let insurance companies take advantage of you. Get your free case review now.
            </p>
            <Link
              to="/free-consultation"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-semibold text-white text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              style={{
                background: 'linear-gradient(135deg, #007AFF 0%, #0051D5 100%)',
                boxShadow: '0 10px 40px rgba(0, 122, 255, 0.4)'
              }}
            >
              <span>Get My Free Case Review</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* SEO Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": problems.map(item => ({
            "@type": "Question",
            "name": item.problem,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.solution
            }
          }))
        })
      }} />
    </section>
  );
};

export default EveryProblemSolved;