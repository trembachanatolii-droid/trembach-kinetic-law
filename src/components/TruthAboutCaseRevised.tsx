import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import high-quality images
import recordingImage from '@/assets/truth-recording.jpg';
import evidenceImage from '@/assets/truth-evidence.jpg';
import doctorImage from '@/assets/truth-doctor.jpg';
import offerImage from '@/assets/truth-offer.jpg';
import trialImage from '@/assets/truth-trial.jpg';
import timeImage from '@/assets/truth-time.jpg';

gsap.registerPlugin(ScrollTrigger);

interface TruthCard {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  type: 'warning' | 'critical';
  cta: string;
  internalLink: string;
  seoKeywords: string[];
}

const TruthAboutCaseRevised = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const truths: TruthCard[] = [
    {
      number: '01',
      title: "They're Recording Everything",
      subtitle: 'Every word is being analyzed against you',
      description: "That friendly adjuster? They're building a case to deny your claim. Every conversation is recorded, transcribed, and analyzed by AI to find inconsistencies. One misstatement can cost you tens of thousands.",
      image: recordingImage,
      imageAlt: 'Insurance adjuster recording phone conversation to deny personal injury claim',
      type: 'critical',
      cta: 'Learn How to Protect Yourself',
      internalLink: '#protect-rights',
      seoKeywords: ['insurance recording', 'claim denial tactics', 'recorded statement dangers']
    },
    {
      number: '02',
      title: 'Evidence Disappears in Days',
      subtitle: 'The clock is ticking faster than you think',
      description: 'Surveillance footage gets deleted in 30 days. Witnesses forget critical details. Skid marks fade. Medical records get "lost." Every hour you wait makes your case exponentially weaker and their defense stronger.',
      image: evidenceImage,
      imageAlt: 'Security camera footage being deleted, evidence disappearing from accident scene',
      type: 'critical',
      cta: 'Preserve Your Evidence Now',
      internalLink: '#evidence-preservation',
      seoKeywords: ['evidence preservation', 'accident scene documentation', 'surveillance footage retention']
    },
    {
      number: '03',
      title: 'Your Doctor Works for Them',
      subtitle: 'Insurance medical networks minimize injuries',
      description: "Insurance companies maintain networks of doctors who systematically minimize injuries. They'll pressure you to see their doctor who will say you're fine, destroying your case value before trial.",
      image: doctorImage,
      imageAlt: 'Insurance company doctor minimizing injuries in medical examination',
      type: 'warning',
      cta: 'Get an Independent Evaluation',
      internalLink: '#medical-evaluation',
      seoKeywords: ['IME examination', 'insurance doctor bias', 'independent medical evaluation']
    },
    {
      number: '04',
      title: 'First Offers Are Insulting',
      subtitle: 'They prey on your desperation',
      description: 'They know bills are piling up. They know you need money now. So they offer 10-15% of true case value, banking on your desperation. Most people accept, leaving hundreds of thousands on the table.',
      image: offerImage,
      imageAlt: 'Lowball insurance settlement offer compared to actual case value',
      type: 'warning',
      cta: 'Know Your True Case Value',
      internalLink: '/calculators',
      seoKeywords: ['settlement value', 'lowball offer', 'maximum compensation']
    },
    {
      number: '05',
      title: 'Most Lawyers Fear Trial',
      subtitle: '95% never see a courtroom',
      description: "95% of personal injury attorneys have never tried a case to verdict. Insurance companies know this. They lowball because they know your lawyer will pressure you to settle cheap. I'm not afraid. They know it.",
      image: trialImage,
      imageAlt: 'Trial attorney in courtroom prepared to fight insurance companies',
      type: 'warning',
      cta: 'Meet a Trial-Ready Attorney',
      internalLink: '#trial-experience',
      seoKeywords: ['trial lawyer', 'courtroom experience', 'litigation attorney']
    },
    {
      number: '06',
      title: 'Deadlines Are Absolute',
      subtitle: 'Miss them and you get nothing',
      description: 'California statute of limitations: 2 years for most claims, 6 months for government entities. Miss it by one day and your case is worthless. But evidence disappears much faster than deadlines.',
      image: timeImage,
      imageAlt: 'Legal deadline clock showing statute of limitations ticking down',
      type: 'critical',
      cta: 'Check Your Deadlines',
      internalLink: '#statute-limitations',
      seoKeywords: ['statute of limitations California', 'claim deadline', 'legal time limits']
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
      // Apple-style: Header reveals with elegant blur-to-focus
      gsap.fromTo(
        header,
        {
          opacity: 0,
          y: 80,
          filter: 'blur(20px)',
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          scale: 1,
          duration: 1.4,
          ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
          scrollTrigger: {
            trigger: header,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Apple-style: Cards with staggered entrance and scroll-linked reveals
      cards.forEach((card, index) => {
        if (!card) return;

        // Entrance animation
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        });

        tl.fromTo(
          card,
          {
            opacity: 0,
            y: 100,
            scale: 0.92,
            filter: 'blur(15px)',
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: 1.2,
            delay: index * 0.12,
            ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }
        );

        // Apple-style: Scroll-linked parallax for images
        const image = card.querySelector('.truth-image');
        if (image) {
          gsap.to(image, {
            y: -40,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
          });
        }

        // Apple-style: Magnetic hover effect
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -12,
            scale: 1.02,
            duration: 0.6,
            ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
          });
        });
      });

      // Apple-style: Dynamic background color transition
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => gsap.to(section, { backgroundColor: 'hsl(var(--background))', duration: 0.8 }),
        onLeaveBack: () => gsap.to(section, { backgroundColor: 'hsl(var(--surface))', duration: 0.8 }),
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Advanced SEO Optimization */}
      <Helmet>
        <title>The Truth About Insurance Claims | What They Don't Want You to Know</title>
        <meta
          name="description"
          content="Former insurance defense attorney reveals 6 secrets insurance companies use to deny personal injury claims. Learn how to protect your rights and maximize compensation."
        />
        <meta
          name="keywords"
          content="insurance claim secrets, personal injury truth, claim denial tactics, settlement strategies, insurance adjuster tricks, California injury lawyer"
        />
        <link rel="canonical" href="/truth-about-insurance-claims" />
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'The Truth About Your Personal Injury Case',
            description: 'Six critical truths insurance companies hide from injury victims',
            author: {
              '@type': 'Person',
              name: 'Trembach Law Firm',
              jobTitle: 'Personal Injury Attorney',
            },
            publisher: {
              '@type': 'LegalService',
              name: 'Trembach Law Firm',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Calabasas',
                addressRegion: 'CA',
                postalCode: '91301',
              },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': '/truth-about-insurance-claims',
            },
          })}
        </script>
      </Helmet>

      <section
        ref={sectionRef}
        className="relative min-h-screen py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-background via-surface/30 to-background"
        aria-labelledby="truth-heading"
      >
        {/* Apple-style: Subtle animated gradient background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          {/* Apple-style: Premium header with superior typography */}
          <header ref={headerRef} className="text-center mb-20 lg:mb-28">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-primary/80 bg-primary/10 px-6 py-2 rounded-full">
                Insider Secrets
              </span>
            </div>

            <h1
              id="truth-heading"
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-[0.95] tracking-tight"
              style={{ letterSpacing: '-0.02em' }}
            >
              The{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                Truth
              </span>
              <br />
              About Your Case
            </h1>

            <p className="text-xl sm:text-2xl lg:text-3xl max-w-4xl mx-auto leading-relaxed text-muted-foreground font-light">
              What insurance companies don't want you to know
            </p>

            {/* Apple-style: Elegant divider */}
            <div className="mt-12 flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-border" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-border" />
            </div>
          </header>

          {/* Apple-style: Premium card grid with perfect spacing */}
          <div
            ref={cardsContainerRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          >
            {truths.map((truth, index) => (
              <article
                key={index}
                ref={(el) => el && (cardRefs.current[index] = el as HTMLDivElement)}
                className={`
                  group relative overflow-hidden rounded-3xl
                  bg-surface/80 backdrop-blur-xl
                  border border-border/50
                  transition-all duration-700
                  hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10
                  ${truth.type === 'critical' ? 'ring-2 ring-destructive/20' : ''}
                `}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                aria-labelledby={`truth-${index}-title`}
              >
                {/* Apple-style: Large premium image with parallax */}
                <div className="relative h-72 lg:h-80 overflow-hidden bg-gradient-to-br from-surface to-muted/20">
                  <img
                    src={truth.image}
                    alt={truth.imageAlt}
                    className="truth-image absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Apple-style: Gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent" />

                  {/* Apple-style: Floating number badge */}
                  <div
                    className={`
                      absolute top-6 left-6 w-16 h-16 rounded-2xl
                      flex items-center justify-center
                      font-bold text-2xl
                      backdrop-blur-md border
                      transition-all duration-500
                      ${
                        truth.type === 'critical'
                          ? 'bg-destructive/90 text-destructive-foreground border-destructive/50'
                          : 'bg-primary/90 text-primary-foreground border-primary/50'
                      }
                      ${activeCard === index ? 'scale-110 rotate-3' : ''}
                    `}
                  >
                    {truth.number}
                  </div>

                  {/* Apple-style: Type badge */}
                  <div
                    className={`
                      absolute top-6 right-6 px-4 py-2 rounded-full
                      text-xs font-bold uppercase tracking-wider
                      backdrop-blur-md border
                      ${
                        truth.type === 'critical'
                          ? 'bg-destructive/90 text-destructive-foreground border-destructive/50'
                          : 'bg-amber-500/90 text-white border-amber-400/50'
                      }
                    `}
                  >
                    {truth.type === 'critical' ? '⚠️ Critical' : '⚡ Warning'}
                  </div>
                </div>

                {/* Apple-style: Premium content section */}
                <div className="p-8 lg:p-10">
                  <h2
                    id={`truth-${index}-title`}
                    className="text-3xl lg:text-4xl font-bold mb-3 leading-tight tracking-tight"
                    style={{ letterSpacing: '-0.015em' }}
                  >
                    {truth.title}
                  </h2>

                  <p className="text-lg font-semibold text-primary mb-5">{truth.subtitle}</p>

                  <p className="text-base lg:text-lg leading-relaxed text-muted-foreground mb-8">
                    {truth.description}
                  </p>

                  {/* Apple-style: CTA button with arrow */}
                  <a
                    href={truth.internalLink}
                    className="inline-flex items-center gap-2 text-primary font-semibold group/link"
                    aria-label={`Learn more about ${truth.title.toLowerCase()}`}
                  >
                    <span className="relative">
                      {truth.cta}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/link:w-full" />
                    </span>
                    <ChevronRight
                      size={20}
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </a>
                </div>

                {/* Apple-style: Subtle hover glow */}
                <div
                  className={`
                    absolute inset-0 rounded-3xl opacity-0 pointer-events-none
                    transition-opacity duration-700
                    ${activeCard === index ? 'opacity-100' : ''}
                    ${
                      truth.type === 'critical'
                        ? 'bg-gradient-to-br from-destructive/5 to-transparent'
                        : 'bg-gradient-to-br from-primary/5 to-transparent'
                    }
                  `}
                />
              </article>
            ))}
          </div>

          {/* Apple-style: Premium CTA section */}
          <div className="mt-24 lg:mt-32 text-center">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 backdrop-blur-xl rounded-[2.5rem] p-12 lg:p-16 border border-primary/20">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
                Don't Let Them Win
              </h2>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-10 leading-relaxed">
                Get the truth. Get maximum compensation. Get justice.
              </p>
              <Button
                size="lg"
                className="h-14 px-10 text-lg rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Get Free Case Review
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>

        {/* Apple-style: Animated gradient background */}
        <style>{`
          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient {
            background-size: 200% auto;
            animation: gradient 8s ease infinite;
          }
        `}</style>
      </section>
    </>
  );
};

export default TruthAboutCaseRevised;
