import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import professional concept images (no people)
import recordingSystem from '@/assets/recording-system.jpg';
import evidenceRetention from '@/assets/evidence-retention.jpg';
import medicalNetwork from '@/assets/medical-network.jpg';
import settlementCalculation from '@/assets/settlement-calculation.jpg';
import trialStatistics from '@/assets/trial-statistics.jpg';
import statutoryLimitations from '@/assets/statutory-limitations.jpg';

gsap.registerPlugin(ScrollTrigger);

interface TruthInsight {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  insight: string;
  image: string;
  imageAlt: string;
  urgency: 'immediate' | 'critical';
  actionText: string;
  internalLink: string;
  seoKeywords: string[];
}

const TruthAboutCaseProfessional = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const [focusedCard, setFocusedCard] = useState<number | null>(null);

  const truthInsights: TruthInsight[] = [
    {
      number: '01',
      title: 'Recording & Analysis Systems',
      subtitle: 'Every conversation is digitally processed',
      description: 'Advanced AI transcription systems analyze your words for inconsistencies. Corporate recording equipment captures everything to build denial strategies.',
      insight: 'Insurance companies use machine learning to identify statements that can minimize your claim value.',
      image: recordingSystem,
      imageAlt: 'Professional recording equipment used by insurance companies to analyze injury claims',
      urgency: 'immediate',
      actionText: 'Protect Your Statements',
      internalLink: '/legal-representation',
      seoKeywords: ['insurance recording laws', 'recorded statement rights', 'claim protection strategy']
    },
    {
      number: '02',
      title: 'Evidence Retention Limits',
      subtitle: 'Critical data disappears on schedules',
      description: 'Surveillance systems automatically delete footage after predetermined timeframes. Digital evidence follows corporate retention policies that favor insurance companies.',
      insight: 'Every day of delay exponentially reduces the strength of your legal position.',
      image: evidenceRetention,
      imageAlt: 'Digital evidence deletion countdown showing automatic data removal systems',
      urgency: 'critical',
      actionText: 'Secure Evidence Now',
      internalLink: '/evidence-preservation',
      seoKeywords: ['evidence preservation California', 'surveillance footage retention', 'accident documentation']
    },
    {
      number: '03',
      title: 'Medical Network Systems',
      subtitle: 'Insurance-aligned healthcare evaluations',
      description: 'Corporate medical networks systematically minimize injury assessments. Independent medical examinations often favor insurance company interests over patient care.',
      insight: 'IME doctors are financially incentivized to find minimal injuries and faster recovery times.',
      image: medicalNetwork,
      imageAlt: 'Medical examination equipment with insurance company documentation systems',
      urgency: 'immediate',
      actionText: 'Get Independent Assessment',
      internalLink: '/medical-evaluation',
      seoKeywords: ['IME examination bias', 'independent medical evaluation', 'insurance doctor networks']
    },
    {
      number: '04',
      title: 'Settlement Calculation Methods',
      subtitle: 'Initial offers use minimum formulas',
      description: 'Insurance algorithms calculate lowest acceptable settlement amounts based on desperation indicators. Corporate strategies exploit financial pressure.',
      insight: 'First offers typically represent 10-20% of actual case value using internal valuation models.',
      image: settlementCalculation,
      imageAlt: 'Insurance settlement calculations showing minimal offer amounts versus true case value',
      urgency: 'critical',
      actionText: 'Calculate True Value',
      internalLink: '/case-valuation',
      seoKeywords: ['personal injury settlement value', 'insurance settlement calculator', 'maximum compensation']
    },
    {
      number: '05',
      title: 'Trial Avoidance Statistics',
      subtitle: 'Attorney settlement patterns analyzed',
      description: 'Insurance companies maintain databases tracking which attorneys avoid trial. Settlement pressure tactics target lawyers with limited courtroom experience.',
      insight: 'Only 5% of personal injury attorneys have significant trial experience, and insurers know exactly who they are.',
      image: trialStatistics,
      imageAlt: 'Empty courtroom showing scales of justice and legal proceedings preparation',
      urgency: 'immediate',
      actionText: 'Find Trial Attorney',
      internalLink: '/trial-experience',
      seoKeywords: ['trial attorney California', 'courtroom experience', 'litigation success rate']
    },
    {
      number: '06',
      title: 'Statutory Limitation Systems',
      subtitle: 'Legal deadlines with severe consequences',
      description: 'California legal system enforces absolute deadlines with zero tolerance. Government entity claims have accelerated timeframes that create additional complexity.',
      insight: 'Missing deadlines by even one day results in complete case dismissal regardless of merit.',
      image: statutoryLimitations,
      imageAlt: 'Legal deadline countdown showing statute of limitations urgency in California',
      urgency: 'critical',
      actionText: 'Verify Deadlines',
      internalLink: '/statute-limitations',
      seoKeywords: ['California statute of limitations', 'personal injury deadlines', 'legal filing requirements']
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const cardsContainer = cardsContainerRef.current;
    const cards = cardRefs.current.filter(Boolean);

    if (!section || !header || !cardsContainer) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Apple-style: Clean header animation
      gsap.fromTo(
        header,
        {
          opacity: 0,
          y: 60,
          filter: 'blur(10px)',
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.2,
          ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
          scrollTrigger: {
            trigger: header,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Apple-style: Individual card animations
      cards.forEach((card, index) => {
        if (!card) return;

        // Entrance animation with stagger
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 80,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            delay: index * 0.1,
            ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // Apple-style: Image parallax
        const image = card.querySelector('.insight-image');
        if (image) {
          gsap.to(image, {
            y: -30,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          });
        }

        // Professional hover interaction
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -8,
            scale: 1.015,
            duration: 0.5,
            ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
          });
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Advanced SEO for first page Google ranking */}
      <Helmet>
        <title>Insurance Company Secrets Revealed | Personal Injury Truth - Trembach Law</title>
        <meta
          name="description"
          content="Former insurance defense attorney exposes 6 hidden tactics insurance companies use to deny claims. Learn how to protect your rights and maximize settlement value."
        />
        <meta
          name="keywords"
          content="insurance company tactics, personal injury secrets, claim denial strategies, settlement maximization, California injury attorney, insurance adjuster tricks"
        />
        <link rel="canonical" href="/insurance-company-secrets-revealed" />
        
        {/* Advanced Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Insurance Company Secrets Every Injury Victim Should Know',
            description: 'Professional analysis of insurance company tactics and protection strategies',
            author: {
              '@type': 'Person',
              name: 'Trembach Law Firm',
              jobTitle: 'Personal Injury Attorney',
              url: 'https://trembachlawfirm.com',
            },
            publisher: {
              '@type': 'LegalService',
              name: 'Trembach Law Firm',
              logo: 'https://trembachlawfirm.com/logo.png',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '27001 Agoura Road, Suite 350',
                addressLocality: 'Calabasas',
                addressRegion: 'CA',
                postalCode: '91301',
              },
            },
            mainEntityOfPage: '/insurance-company-secrets-revealed',
            datePublished: new Date().toISOString(),
            dateModified: new Date().toISOString(),
          })}
        </script>
      </Helmet>

      <section
        ref={sectionRef}
        className="relative py-20 lg:py-28 bg-background overflow-hidden"
        aria-labelledby="truth-insights-heading"
      >
        {/* Clean Apple-style background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-slate-100/50 to-transparent rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-to-br from-slate-50/30 to-transparent rounded-full blur-[80px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          {/* Apple Watch-inspired header */}
          <header ref={headerRef} className="text-center mb-16 lg:mb-24">
            <div className="inline-flex items-center justify-center mb-8">
              <div className="h-px w-12 bg-border"></div>
              <span className="mx-6 text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground">
                Professional Analysis
              </span>
              <div className="h-px w-12 bg-border"></div>
            </div>

            <h1
              id="truth-insights-heading"
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight tracking-tight text-foreground"
              style={{ letterSpacing: '-0.025em' }}
            >
              Insurance Company
              <br />
              <span className="text-slate-600">Operational Methods</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed text-muted-foreground">
              Strategic insights from former defense attorney perspective
            </p>
          </header>

          {/* Apple-style card grid */}
          <div
            ref={cardsContainerRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
          >
            {truthInsights.map((insight, index) => (
              <article
                key={index}
                ref={(el) => el && (cardRefs.current[index] = el as HTMLDivElement)}
                className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200/60 shadow-sm hover:shadow-lg transition-all duration-500"
                onMouseEnter={() => setFocusedCard(index)}
                onMouseLeave={() => setFocusedCard(null)}
                aria-labelledby={`insight-${index}-title`}
              >
                {/* Professional image section */}
                <div className="relative h-64 lg:h-72 overflow-hidden bg-slate-50">
                  <img
                    src={insight.image}
                    alt={insight.imageAlt}
                    className="insight-image absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  
                  {/* Clean gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent" />

                  {/* Professional number badge */}
                  <div className="absolute top-6 left-6 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-lg font-bold text-slate-900">{insight.number}</span>
                  </div>

                  {/* Urgency indicator */}
                  <div
                    className={`absolute top-6 right-6 px-3 py-1.5 rounded-lg text-xs font-medium backdrop-blur-sm ${
                      insight.urgency === 'critical'
                        ? 'bg-red-50/90 text-red-700 border border-red-200/50'
                        : 'bg-orange-50/90 text-orange-700 border border-orange-200/50'
                    }`}
                  >
                    {insight.urgency === 'critical' ? 'Time Sensitive' : 'Important'}
                  </div>
                </div>

                {/* Content section */}
                <div className="p-6 lg:p-8">
                  <h2
                    id={`insight-${index}-title`}
                    className="text-xl lg:text-2xl font-bold mb-3 leading-tight text-slate-900"
                  >
                    {insight.title}
                  </h2>

                  <p className="text-base font-medium text-slate-600 mb-4">{insight.subtitle}</p>

                  <p className="text-sm leading-relaxed text-slate-700 mb-4">
                    {insight.description}
                  </p>

                  {/* Professional insight box */}
                  <div className="bg-slate-50 rounded-lg p-4 mb-6 border-l-3 border-slate-400">
                    <p className="text-sm font-medium text-slate-800 italic">
                      {insight.insight}
                    </p>
                  </div>

                  {/* Clean CTA */}
                  <a
                    href={insight.internalLink}
                    className="inline-flex items-center text-slate-900 font-semibold text-sm hover:text-slate-700 transition-colors duration-200"
                    aria-label={`Learn more about ${insight.title.toLowerCase()}`}
                  >
                    <span>{insight.actionText}</span>
                    <ArrowRight size={16} className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Professional CTA section */}
          <div className="mt-20 lg:mt-28 text-center">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 shadow-xl">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight text-white">
                Professional Legal Analysis
              </h2>
              <p className="text-lg lg:text-xl text-blue-50 mb-8 leading-relaxed">
                Get expert case evaluation based on former insurance defense experience
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 h-12 px-8 text-base font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <a href="/free-consultation">
                  Get Free Evaluation
                  <ArrowRight className="ml-2" size={18} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TruthAboutCaseProfessional;