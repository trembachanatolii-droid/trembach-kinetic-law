import "./steps.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Checkmark = () => (
  <svg className="apple-checkmark" viewBox="0 0 16 16" fill="none">
    <path
      className="checkmark-path"
      d="M13.5 4L6 11.5L2.5 8"
      stroke="#34c759"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="20"
      strokeDashoffset="20"
    />
  </svg>
);

// Step Icons
const PhoneIcon = () => (
  <svg className="step-icon" viewBox="0 0 48 48" fill="none">
    <rect x="14" y="6" width="20" height="36" rx="3" stroke="currentColor" strokeWidth="2"/>
    <line x1="20" y1="37" x2="28" y2="37" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const DocumentIcon = () => (
  <svg className="step-icon" viewBox="0 0 48 48" fill="none">
    <path d="M12 6h18l6 6v30H12V6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M30 6v6h6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <line x1="18" y1="20" x2="30" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="18" y1="26" x2="30" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="18" y1="32" x2="26" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const MoneyIcon = () => (
  <svg className="step-icon" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2"/>
    <path d="M24 14v20M19 19h7a3 3 0 010 6h-6a3 3 0 000 6h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ThreeStepProcess = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const numbersRef = useRef<HTMLDivElement[]>([]);
  const progressPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax effect on numbers
      numbersRef.current.forEach((number, index) => {
        if (!number) return;
        
        gsap.to(number, {
          y: -100,
          scale: 1.2,
          opacity: 0.3,
          scrollTrigger: {
            trigger: number,
            start: "top center",
            end: "bottom top",
            scrub: 1,
          }
        });
      });

      // Card entrance animations with stagger
      gsap.from(cardsRef.current, {
        y: 100,
        opacity: 0,
        rotateX: -15,
        scale: 0.9,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".apple-steps-grid",
          start: "top 80%",
        }
      });

      // Animate progress path
      if (progressPathRef.current) {
        gsap.from(progressPathRef.current, {
          strokeDashoffset: 1000,
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".apple-steps-grid",
            start: "top 60%",
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="apple-steps-section">
      {/* Animated mesh gradient background */}
      <div className="gradient-mesh"></div>
      <div className="floating-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{ 
            left: `${Math.random() * 100}%`, 
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>

      <div className="apple-steps-container">
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
        <svg className="progress-connector" viewBox="0 0 1200 120" preserveAspectRatio="none">
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
              <stop offset="0%" stopColor="#2997ff" stopOpacity="0.3"/>
              <stop offset="50%" stopColor="#64d2ff" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#2997ff" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
        </svg>

        <div className="apple-steps-grid">
          {/* Step 1 */}
          <div 
            className="apple-step-card" 
            ref={el => el && (cardsRef.current[0] = el)}
            data-tilt
          >
            <div className="card-glow"></div>
            <div className="step-icon-wrapper">
              <PhoneIcon />
            </div>
            <div 
              className="apple-step-number" 
              ref={el => el && (numbersRef.current[0] = el)}
            >1</div>
            <h3 className="apple-step-title">
              Contact Our California Attorneys
              <span className="apple-free-badge pulse-badge">FREE</span>
            </h3>
            <p className="apple-step-description">
              Reach out to our experienced California personal injury team for a{" "}
              <strong>FREE</strong> consultation. We'll evaluate your case and explain your legal options under California law—with no obligation.
            </p>
            <ul className="apple-step-features">
              <li>
                <Checkmark />
                <span><strong>FREE</strong> case evaluation by California personal injury lawyers</span>
              </li>
              <li>
                <Checkmark />
                <span>No upfront fees required under California law</span>
              </li>
              <li>
                <Checkmark />
                <span><strong>STRONG</strong> track record with California insurance companies</span>
              </li>
            </ul>
          </div>

          {/* Step 2 */}
          <div 
            className="apple-step-card apple-step-card-featured" 
            ref={el => el && (cardsRef.current[1] = el)}
            data-tilt
          >
            <div className="card-glow"></div>
            <div className="step-icon-wrapper">
              <DocumentIcon />
            </div>
            <div 
              className="apple-step-number" 
              ref={el => el && (numbersRef.current[1] = el)}
            >2</div>
            <h3 className="apple-step-title">
              We'll File Your California Claim
              <span className="apple-free-badge pulse-badge">FREE</span>
            </h3>
            <p className="apple-step-description">
              Once you hire us, we handle all California legal paperwork and communications at{" "}
              <strong>ZERO COST</strong> to you. We'll gather evidence, work with experts, and build a strong California personal injury case.
            </p>
            <ul className="apple-step-features">
              <li>
                <Checkmark />
                <span>Expert handling of California statute of limitations</span>
              </li>
              <li>
                <Checkmark />
                <span><strong>ZERO</strong> upfront attorney fees—we pay all case costs</span>
              </li>
              <li>
                <Checkmark />
                <span>Direct negotiation with California insurance adjusters</span>
              </li>
            </ul>
          </div>

          {/* Step 3 */}
          <div 
            className="apple-step-card" 
            ref={el => el && (cardsRef.current[2] = el)}
            data-tilt
          >
            <div className="card-glow"></div>
            <div className="step-icon-wrapper">
              <MoneyIcon />
            </div>
            <div 
              className="apple-step-number" 
              ref={el => el && (numbersRef.current[2] = el)}
            >3</div>
            <h3 className="apple-step-title">
              Get Maximum California Compensation
            </h3>
            <p className="apple-step-description">
              We fight for every dollar you deserve under California personal injury law. You pay{" "}
              <strong>NOTHING</strong> unless we win your case—our fee only comes from your settlement or court award.
            </p>
            <ul className="apple-step-features">
              <li>
                <Checkmark />
                <span>Proven results with California injury settlements</span>
              </li>
              <li>
                <Checkmark />
                <span>No win = <strong>NO FEE</strong> under our California contingency agreement</span>
              </li>
              <li>
                <Checkmark />
                <span>Maximum compensation for your California injuries</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeStepProcess;
