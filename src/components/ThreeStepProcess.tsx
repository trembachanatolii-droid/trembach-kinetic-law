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
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const progressPathRef = useRef<SVGPathElement>(null);


  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Simple card entrance animations
      gsap.from(cardsRef.current, {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".apple-steps-grid",
          start: "top 80%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);


  const stepData = [
    {
      icon: PhoneIcon,
      number: 1,
      title: "Contact Our California Attorneys",
      badge: "100% FREE",
      description: "Reach out to our experienced California personal injury team for a completely FREE consultation. We'll evaluate your case and explain your legal options—with absolutely no obligation or upfront costs.",
      features: [
        { text: "100% FREE case evaluation—no hidden fees", highlight: "100% FREE" },
        { text: "Zero upfront costs or retainer fees", highlight: "Zero" },
        { text: "Trusted by California injury victims" }
      ],
      timeline: "24 Hours",
      guarantee: "No Cost to Start"
    },
    {
      icon: DocumentIcon,
      number: 2,
      title: "We Handle All Legal Paperwork",
      badge: "100% FREE",
      description: "Once you hire us, we manage everything at zero cost to you. We gather evidence, work with experts, and build your strongest possible case under California law.",
      features: [
        { text: "Expert handling of all California legal requirements" },
        { text: "Zero upfront attorney fees—we cover all costs", highlight: "Zero" },
        { text: "Direct communication with insurance companies" }
      ],
      timeline: "2-4 Weeks",
      guarantee: "We Pay All Costs"
    },
    {
      icon: MoneyIcon,
      number: 3,
      title: "Get Maximum Compensation",
      badge: "",
      description: "We fight for every dollar you deserve. You pay nothing unless we win—our fee only comes from your settlement or court award. It's that simple.",
      features: [
        { text: "Proven track record with California settlements" },
        { text: "No Win = No Fee—guaranteed", highlight: "No Win = No Fee" },
        { text: "Maximum compensation for your injuries" }
      ],
      timeline: "3-6 Months",
      guarantee: "No Win, No Fee"
    }
  ];

  return (
    <section ref={sectionRef} className="apple-steps-section" role="region" aria-label="Three Step Process">
      {/* Simplified background */}
      <div className="simple-gradient-bg"></div>
      
      <div className="apple-steps-container">
        {/* FREE Consultation Banner */}
        <div className="free-consultation-banner">
          <div className="free-badge-large">100% FREE CONSULTATION</div>
          <div className="no-fee-guarantee">No Fees Unless We Win Your Case</div>
        </div>

        <h2 className="apple-steps-headline">
          Steps to File a California Personal Injury Lawsuit
        </h2>
        
        <p className="apple-steps-subheadline">
          Our simple 3-step process makes getting justice easy and stress-free.
        </p>

        {/* Simple cards grid */}
        <div className="apple-steps-grid">
          {stepData.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <div 
                key={index}
                className="apple-step-card"
                ref={el => cardsRef.current[index] = el}
                role="article"
                aria-label={`Step ${step.number}: ${step.title}`}
              >
                {/* Simple card background */}
                <div className="card-simple-bg" aria-hidden="true"></div>
                
                {/* Step icon */}
                <div className="step-icon-wrapper">
                  <Icon />
                </div>
                
                {/* Step number */}
                <div className="apple-step-number" aria-hidden="true">
                  {step.number}
                </div>
                
                {/* Guarantee badge */}
                <div className="guarantee-badge" aria-label={step.guarantee}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1l2 4 4.5 0.5-3.5 3 1 4.5-4-2.5-4 2.5 1-4.5-3.5-3 4.5-0.5z" fill="currentColor"/>
                  </svg>
                  {step.guarantee}
                </div>
                
                {/* Title with prominent badge */}
                <h3 className="apple-step-title">
                  {step.title}
                </h3>
                {step.badge && (
                  <div className="apple-free-badge" aria-label="Free service">
                    {step.badge}
                  </div>
                )}
                
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
              </div>
            );
          })}
        </div>

        {/* Trust badges */}
        <div className="trust-badges">
          <div className="trust-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>No Win, No Fee</span>
          </div>
          <div className="trust-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L4 7v5c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V7l-8-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Licensed CA Attorneys</span>
          </div>
          <div className="trust-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>24/7 Support</span>
          </div>
        </div>

        {/* Prominent CTA Section */}
        <div className="steps-cta-section">
          <h3 className="cta-headline">Ready to Get Started?</h3>
          <p className="cta-description">Get your free case evaluation today. No obligations, no upfront costs.</p>
          <a 
            href="#free-evaluation" 
            className="hero-cta-button"
          >
            <span className="cta-button-text">Start Your Free Evaluation</span>
            <span className="cta-arrow">→</span>
          </a>
          <p className="cta-subtext">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M6 9l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            100% Free Consultation • No Fees Unless We Win • Zero Risk
          </p>
        </div>

      </div>
    </section>
  );
};

export default ThreeStepProcess;
