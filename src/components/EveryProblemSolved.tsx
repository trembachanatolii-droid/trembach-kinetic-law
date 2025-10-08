import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Scale, Shield, Clock, TrendingUp, FileCheck, Users } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const EveryProblemSolved = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null);
  
  const problems = [
    {
      number: 1,
      problem: "I don't know what my case is worth",
      solution: "Former defense attorney reveals exact formula insurance companies use to value cases (then we 10X it).",
      icon: Scale,
      color: 'from-blue-500/20 to-blue-600/20',
      accentColor: '#007AFF',
      link: '/free-consultation'
    },
    {
      number: 2,
      problem: "Insurance offered me pennies",
      solution: "We know their entire playbook. Average settlement increase: 347% above initial offer.",
      icon: TrendingUp,
      color: 'from-purple-500/20 to-purple-600/20',
      accentColor: '#7B68EE',
      link: '/about'
    },
    {
      number: 3,
      problem: "I can't afford a lawyer",
      solution: "$0 upfront. $0 unless we win. We even advance all case costs.",
      icon: Shield,
      color: 'from-cyan-500/20 to-cyan-600/20',
      accentColor: '#64D2FF',
      link: '/free-consultation'
    },
    {
      number: 4,
      problem: "This will take forever",
      solution: "Most cases settle in 3-6 months using our insider negotiation tactics.",
      icon: Clock,
      color: 'from-green-500/20 to-green-600/20',
      accentColor: '#30D158',
      link: '/about'
    },
    {
      number: 5,
      problem: "They're denying liability",
      solution: "We know every excuse they use and exactly how to destroy each one.",
      icon: FileCheck,
      color: 'from-orange-500/20 to-orange-600/20',
      accentColor: '#FF9F0A',
      link: '/practice-areas'
    },
    {
      number: 6,
      problem: "I'm overwhelmed",
      solution: "We handle 100% of everything. You focus on healing.",
      icon: Users,
      color: 'from-pink-500/20 to-pink-600/20',
      accentColor: '#FF375F',
      link: '/contact'
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const headline = headlineRef.current;
    const subheading = subheadingRef.current;
    const cards = cardsRef.current.filter(Boolean);

    if (!section || !headline || !subheading || cards.length === 0) return;

    // Set initial states
    gsap.set([headline, subheading], { opacity: 0, y: 40 });
    gsap.set(cards, { opacity: 0, y: 60, scale: 0.9 });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none reverse"
      }
    });

    // Animations
    tl.to(headline, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    })
    .to(subheading, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5")
    .to(cards, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    }, "-=0.4");

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative py-32 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden"
      aria-labelledby="problems-solved-heading"
    >
      {/* Background Elements - Apple Style */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header - Apple Typography */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 
            ref={headlineRef}
            id="problems-solved-heading"
            className="text-5xl lg:text-7xl font-bold text-[#1d1d1f] mb-6 tracking-tight leading-[1.05]"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}
          >
            Every Problem Solved
          </h2>
          <p 
            ref={subheadingRef}
            className="text-xl lg:text-2xl text-[#424245] font-normal leading-relaxed"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}
          >
            Here's how we eliminate every obstacle between you and maximum compensation
          </p>
        </div>

        {/* Cards Grid - Bento-Style Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {problems.map((item, index) => {
            const IconComponent = item.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <Link
                key={index}
                to={item.link}
                ref={el => { cardsRef.current[index] = el; }}
                className="group relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onFocus={() => setHoveredCard(index)}
                onBlur={() => setHoveredCard(null)}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <article
                  className={`
                    relative overflow-hidden rounded-3xl p-8
                    bg-white/80 backdrop-blur-xl
                    border border-gray-200/50
                    shadow-sm hover:shadow-2xl
                    transition-all duration-500 ease-out
                    ${isHovered ? 'scale-[1.02] -translate-y-2' : ''}
                  `}
                  style={{
                    transformStyle: 'preserve-3d',
                    willChange: 'transform',
                  }}
                >
                  {/* Background Gradient on Hover */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon with Breathing Effect */}
                    <div className="mb-6 flex items-center justify-between">
                      <div 
                        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{ 
                          backgroundColor: `${item.accentColor}15`,
                          color: item.accentColor
                        }}
                      >
                        <IconComponent 
                          className="w-7 h-7 transition-transform duration-500 group-hover:rotate-12" 
                          style={{ color: item.accentColor }}
                        />
                      </div>
                      
                      {/* Number Badge */}
                      <div 
                        className="text-6xl font-black opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                        style={{ 
                          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                          color: item.accentColor
                        }}
                      >
                        {item.number}
                      </div>
                    </div>

                    {/* Problem Quote */}
                    <blockquote className="mb-4">
                      <p className="text-[#1d1d1f] text-lg font-semibold leading-snug mb-4 italic">
                        "{item.problem}"
                      </p>
                    </blockquote>

                    {/* Divider */}
                    <div 
                      className="h-0.5 w-12 mb-4 rounded-full transition-all duration-500 group-hover:w-full"
                      style={{ backgroundColor: item.accentColor }}
                    ></div>

                    {/* Solution Label */}
                    <div className="text-xs font-bold text-[#86868b] mb-2 tracking-wider uppercase">
                      Our Solution
                    </div>

                    {/* Solution Text */}
                    <p className="text-[#424245] text-base leading-relaxed font-normal">
                      {item.solution}
                    </p>

                    {/* Learn More Arrow */}
                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-300" style={{ color: item.accentColor }}>
                      <span>Learn more</span>
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Shine Effect on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent rounded-3xl"></div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {/* CTA Section - Apple Glass Morphism */}
        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl p-12 text-center backdrop-blur-xl bg-white/60 border border-gray-200/50 shadow-xl">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold text-[#1d1d1f] mb-4 tracking-tight leading-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}>
                Ready to Get Maximum Compensation?
              </h3>
              <p className="text-lg text-[#424245] mb-8 font-normal leading-relaxed" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}>
                Don't let insurance companies take advantage of you. Get your free case review now.
              </p>
              <Link
                to="/free-consultation"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-[#007AFF] to-[#0051D5] hover:from-[#0051D5] hover:to-[#003DA5] text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <span>Get My Free Case Review</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
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
        })}
      </script>
    </section>
  );
};

export default EveryProblemSolved;
