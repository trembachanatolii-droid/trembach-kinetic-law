import "./steps.css";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Checkmark = ({ index }: { index: number }) => (
  <svg className="apple-checkmark" viewBox="0 0 16 16" fill="none">
    <path
      className={`checkmark-path checkmark-${index}`}
      d="M13.5 4L6 11.5L2.5 8"
      stroke="url(#checkGradient)"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="20"
      strokeDashoffset="20"
    />
    <defs>
      <linearGradient id="checkGradient">
        <stop offset="0%" stopColor="#32de84" />
        <stop offset="100%" stopColor="#30d158" />
      </linearGradient>
    </defs>
  </svg>
);

// Step Icons with breathing animation
const PhoneIcon = () => (
  <svg className="step-icon icon-breathe" viewBox="0 0 48 48" fill="none">
    <rect x="14" y="6" width="20" height="36" rx="3" stroke="currentColor" strokeWidth="2"/>
    <line x1="20" y1="37" x2="28" y2="37" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="24" cy="15" r="2" fill="currentColor" opacity="0.5"/>
  </svg>
);

const DocumentIcon = () => (
  <svg className="step-icon icon-breathe" viewBox="0 0 48 48" fill="none">
    <path d="M12 6h18l6 6v30H12V6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M30 6v6h6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <line x1="18" y1="20" x2="30" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="18" y1="26" x2="30" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="18" y1="32" x2="26" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const MoneyIcon = () => (
  <svg className="step-icon icon-breathe" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2"/>
    <path d="M24 14v20M19 19h7a3 3 0 010 6h-6a3 3 0 000 6h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="24" cy="24" r="3" fill="currentColor" opacity="0.3"/>
  </svg>
);


const ThreeStepProcess = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);
  const numbersRef = useRef<(HTMLDivElement | null)[]>([]);
  const progressPathRef = useRef<SVGPathElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const timelineProgressRef = useRef<HTMLDivElement>(null);
  
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for magnetic effect and spotlight
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setMousePosition({ x, y });

      // Update spotlight position
      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(circle 400px at ${x}px ${y}px, rgba(41, 151, 255, 0.15), transparent)`;
      }

      // Magnetic effect on cards
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        
        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2 - rect.left;
        const cardCenterY = cardRect.top + cardRect.height / 2 - rect.top;
        
        const deltaX = x - cardCenterX;
        const deltaY = y - cardCenterY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        if (distance < 300) {
          const force = (300 - distance) / 300;
          const moveX = (deltaX * force * 0.15);
          const moveY = (deltaY * force * 0.15);
          const rotateY = (deltaX * force * 0.02);
          const rotateX = -(deltaY * force * 0.02);
          
          gsap.to(card, {
            x: moveX,
            y: moveY,
            rotateY: rotateY,
            rotateX: rotateX,
            duration: 0.3,
            ease: "power2.out"
          });
        } else {
          gsap.to(card, {
            x: 0,
            y: 0,
            rotateY: 0,
            rotateX: 0,
            duration: 0.5,
            ease: "power2.out"
          });
        }
      });
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Number count-up animation
      numbersRef.current.forEach((number, index) => {
        if (!number) return;
        
        // Parallax effect on numbers
        gsap.to(number, {
          y: -80,
          scale: 1.15,
          opacity: 0.4,
          scrollTrigger: {
            trigger: number,
            start: "top center",
            end: "bottom top",
            scrub: 1,
          }
        });

        // Count-up animation
        gsap.from(number, {
          textContent: 0,
          duration: 1.5,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: number,
            start: "top 80%",
          },
          onUpdate: function() {
            if (number) {
              number.textContent = Math.round(parseFloat(number.textContent || "0")).toString();
            }
          }
        });
      });

      // Enhanced card entrance animations with stagger
      gsap.from(cardsRef.current, {
        y: 120,
        opacity: 0,
        rotateX: -20,
        scale: 0.85,
        stagger: {
          each: 0.15,
          from: "start"
        },
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".apple-steps-grid",
          start: "top 75%",
        }
      });

      // Animate progress path
      if (progressPathRef.current) {
        gsap.from(progressPathRef.current, {
          strokeDashoffset: 1000,
          duration: 2.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".apple-steps-grid",
            start: "top 65%",
          }
        });
      }

      // Timeline progress indicator
      if (timelineProgressRef.current) {
        gsap.to(timelineProgressRef.current, {
          scaleX: 1,
          scrollTrigger: {
            trigger: ".apple-steps-section",
            start: "top center",
            end: "bottom center",
            scrub: 1,
          }
        });
      }

      // Background gradient animation
      gsap.to(".apple-steps-section", {
        backgroundPosition: "50% 100%",
        scrollTrigger: {
          trigger: ".apple-steps-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      });

      // Dynamic color shift based on scroll
      gsap.to(".gradient-mesh", {
        filter: "hue-rotate(30deg)",
        scrollTrigger: {
          trigger: ".apple-steps-section",
          start: "top center",
          end: "bottom center",
          scrub: 1,
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Click to expand card
  const handleCardClick = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (expandedCard === null) return;
      
      if (e.key === 'Escape') {
        setExpandedCard(null);
      } else if (e.key === 'ArrowLeft') {
        setExpandedCard(Math.max(0, expandedCard - 1));
      } else if (e.key === 'ArrowRight') {
        setExpandedCard(Math.min(2, expandedCard + 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [expandedCard]);

  const stepData = [
    {
      icon: PhoneIcon,
      number: 1,
      title: "Contact Our California Attorneys",
      badge: "FREE",
      description: "Reach out to our experienced California personal injury team for a FREE consultation. We'll evaluate your case and explain your legal options under California law—with no obligation.",
      features: [
        { text: "FREE case evaluation by California personal injury lawyers", highlight: "FREE" },
        { text: "No upfront fees required under California law" },
        { text: "STRONG track record with California insurance companies", highlight: "STRONG" }
      ],
      timeline: "24 Hours"
    },
    {
      icon: DocumentIcon,
      number: 2,
      title: "We'll File Your California Claim",
      badge: "FREE",
      description: "Once you hire us, we handle all California legal paperwork and communications at ZERO COST to you. We'll gather evidence, work with experts, and build a strong California personal injury case.",
      features: [
        { text: "Expert handling of California statute of limitations" },
        { text: "ZERO upfront attorney fees—we pay all case costs", highlight: "ZERO" },
        { text: "Direct negotiation with California insurance adjusters" }
      ],
      timeline: "2-4 Weeks"
    },
    {
      icon: MoneyIcon,
      number: 3,
      title: "Get Maximum California Compensation",
      badge: "",
      description: "We fight for every dollar you deserve under California personal injury law. You pay NOTHING unless we win your case—our fee only comes from your settlement or court award.",
      features: [
        { text: "Proven results with California injury settlements" },
        { text: "No win = NO FEE under our California contingency agreement", highlight: "NO FEE" },
        { text: "Maximum compensation for your California injuries" }
      ],
      timeline: "3-6 Months"
    }
  ];

  return (
    <section ref={sectionRef} className="apple-steps-section" role="region" aria-label="Three Step Process" style={{ position: 'relative', isolation: 'isolate', zIndex: 1 }}>
      {/* Animated mesh gradient background */}
      <div className="gradient-mesh" style={{ position: 'absolute', zIndex: 0 }}></div>
      
      {/* Spotlight effect */}
      <div ref={spotlightRef} className="spotlight-effect" style={{ position: 'absolute', zIndex: 1 }}></div>
      
      {/* Floating particles */}
      <div className="floating-particles" aria-hidden="true" style={{ position: 'absolute', zIndex: 2 }}>
        {[...Array(25)].map((_, i) => (
          <div 
            key={i} 
            className="particle" 
            style={{ 
              left: `${Math.random() * 100}%`, 
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${12 + Math.random() * 15}s`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`
            }}
          ></div>
        ))}
      </div>

      {/* Grain texture overlay */}
      <div className="grain-overlay" aria-hidden="true"></div>

      <div className="apple-steps-container">
        {/* Timeline progress indicator */}
        <div className="timeline-indicator" aria-hidden="true">
          <div ref={timelineProgressRef} className="timeline-progress"></div>
        </div>

        <h2 className="apple-steps-headline">
          Steps to File a California Personal Injury Lawsuit
        </h2>
        
        <p className="apple-steps-subheadline">
          Our proven 3-step process makes getting justice in California simple and stress-free.{" "}
          <span className="apple-steps-free-text shimmer-text">
            100% FREE TO START - NO FEES UNLESS WE WIN
          </span>
        </p>

        {/* Progress connector SVG */}
        <svg className="progress-connector" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
          <path 
            ref={progressPathRef}
            d="M 50 60 Q 300 20, 600 60 T 1150 60" 
            stroke="url(#progressGradient)" 
            strokeWidth="2" 
            fill="none"
            strokeDasharray="1000"
            strokeDashoffset="0"
          />
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2997ff" stopOpacity="0.4"/>
              <stop offset="33%" stopColor="#7b68ee" stopOpacity="0.6"/>
              <stop offset="66%" stopColor="#64d2ff" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#2997ff" stopOpacity="0.4"/>
            </linearGradient>
          </defs>
        </svg>

        {/* Bento-style grid */}
        <div className="apple-steps-grid bento-layout">
          {stepData.map((step, index) => {
            const Icon = step.icon;
            const isExpanded = expandedCard === index;
            const isFeatured = index === 1;
            
            return (
              <a
                href="/free-consultation"
                key={index}
                className={`apple-step-card ${isFeatured ? 'apple-step-card-featured' : ''} ${isExpanded ? 'card-expanded' : ''}`}
                ref={el => cardsRef.current[index] = el}
                onClick={(e) => {
                  if (!e.metaKey && !e.ctrlKey) {
                    e.preventDefault();
                    handleCardClick(index);
                    setTimeout(() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      window.location.href = '/free-consultation';
                    }, 300);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick(index);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
                aria-label={`Step ${step.number}: ${step.title}. Click to start free consultation.`}
              >
                
                {/* Step icon with breathing animation */}
                <div className="step-icon-wrapper">
                  <Icon />
                </div>
                
                {/* Large animated number */}
                <div 
                  className="apple-step-number" 
                  ref={el => numbersRef.current[index] = el}
                  aria-hidden="true"
                >
                  {step.number}
                </div>
                
                {/* Timeline badge */}
                <div className="timeline-badge" aria-label={`Typical duration: ${step.timeline}`}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1"/>
                    <path d="M6 3v3l2 2" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                  </svg>
                  {step.timeline}
                </div>
                
                {/* Title with badge */}
                <h3 className="apple-step-title">
                  {step.title}
                {step.badge && (
                    <span className="apple-free-badge pulse-badge" aria-label="Free service">
                      {step.badge}
                    </span>
                  )}
                </h3>
                
                {/* Description */}
                <p className="apple-step-description">
                  {step.description}
                </p>
                
                {/* Features list */}
                <ul className="apple-step-features">
                  {step.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <Checkmark index={index * 3 + featureIndex} />
                      <span>
                        {feature.highlight ? (
                          <>
                            {feature.text.split(feature.highlight)[0]}
                            <strong>{feature.highlight}</strong>
                            {feature.text.split(feature.highlight)[1]}
                          </>
                        ) : (
                          feature.text
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
                
                {/* Expand indicator */}
                <div className="expand-indicator" aria-hidden="true">
                  <span>{isExpanded ? 'Click to collapse' : 'Click to expand'}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path 
                      d={isExpanded ? "M4 10L8 6L12 10" : "M4 6L8 10L12 6"} 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                
              </a>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="steps-cta-container">
          <a 
            href="/free-consultation" 
            className="hero-cta-button"
            aria-label="Start your free case evaluation"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              window.location.href = '/free-consultation';
            }}
          >
            <span className="cta-button-text">Start Your Free Evaluation</span>
            <svg className="cta-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ThreeStepProcess;
