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
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Simple card entrance with stagger
      gsap.from(cardsRef.current, {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".apple-steps-grid",
          start: "top 85%",
        }
      });

      // Animate stats counter
      if (statsRef.current) {
        const counters = statsRef.current.querySelectorAll('.stat-number');
        counters.forEach((counter) => {
          const target = parseInt(counter.getAttribute('data-target') || '0');
          gsap.from(counter, {
            textContent: 0,
            duration: 2,
            ease: "power1.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
            },
            onUpdate: function() {
              counter.textContent = Math.ceil(this.targets()[0].textContent).toString();
            }
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="apple-steps-section">
      {/* Subtle mesh gradient background */}
      <div className="gradient-mesh"></div>

      <div className="apple-steps-container">
        {/* FREE Consultation Banner */}
        <div className="free-consultation-banner">
          <span className="banner-icon">✓</span>
          <span className="banner-text">FREE Case Evaluation • No Obligation • Confidential</span>
        </div>

        <h2 className="apple-steps-headline">
          Steps to File a California Personal Injury Lawsuit
        </h2>
        
        <p className="apple-steps-subheadline">
          Our proven 3-step process makes getting justice simple and stress-free.
        </p>

        {/* Trust Stats */}
        <div ref={statsRef} className="trust-stats">
          <div className="stat-item">
            <div className="stat-number" data-target="1000">0</div>
            <div className="stat-label">Free Evaluations</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number" data-target="100">0</div>
            <div className="stat-label">% No Win, No Fee</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number" data-target="24">0</div>
            <div className="stat-label">Hour Response</div>
          </div>
        </div>

        <div className="apple-steps-grid">
          {/* Step 1 */}
          <div 
            className="apple-step-card" 
            ref={el => el && (cardsRef.current[0] = el)}
          >
            <div className="step-label">Step 1 of 3</div>
            <div className="step-icon-wrapper">
              <PhoneIcon />
            </div>
            <div className="apple-step-number">1</div>
            <h3 className="apple-step-title">
              Contact Our Attorneys
              <span className="apple-free-badge">FREE</span>
            </h3>
            <div className="timeline-estimate">~5 minutes</div>
            <p className="apple-step-description">
              Get a <strong>FREE</strong> consultation with our experienced California personal injury team. We'll evaluate your case and explain your legal options—with zero obligation.
            </p>
            <ul className="apple-step-features">
              <li>
                <Checkmark />
                <span><strong className="free-text">FREE</strong> case evaluation</span>
              </li>
              <li>
                <Checkmark />
                <span>No upfront fees required</span>
              </li>
              <li>
                <Checkmark />
                <span>Proven California track record</span>
              </li>
            </ul>
          </div>

          {/* Step 2 */}
          <div 
            className="apple-step-card apple-step-card-featured" 
            ref={el => el && (cardsRef.current[1] = el)}
          >
            <div className="step-label">Step 2 of 3</div>
            <div className="step-icon-wrapper">
              <DocumentIcon />
            </div>
            <div className="apple-step-number">2</div>
            <h3 className="apple-step-title">
              We Handle Everything
              <span className="apple-free-badge">$0 COST</span>
            </h3>
            <div className="timeline-estimate">We do the work</div>
            <p className="apple-step-description">
              We handle all legal paperwork and communications at <strong>ZERO COST</strong> to you. Our team gathers evidence, works with experts, and builds your strong case.
            </p>
            <ul className="apple-step-features">
              <li>
                <Checkmark />
                <span>Expert California statute handling</span>
              </li>
              <li>
                <Checkmark />
                <span><strong className="free-text">$0</strong> upfront fees—we cover costs</span>
              </li>
              <li>
                <Checkmark />
                <span>Direct insurance negotiation</span>
              </li>
            </ul>
          </div>

          {/* Step 3 */}
          <div 
            className="apple-step-card" 
            ref={el => el && (cardsRef.current[2] = el)}
          >
            <div className="step-label">Step 3 of 3</div>
            <div className="step-icon-wrapper">
              <MoneyIcon />
            </div>
            <div className="apple-step-number">3</div>
            <h3 className="apple-step-title">
              Get Maximum Compensation
            </h3>
            <div className="timeline-estimate">You get paid</div>
            <p className="apple-step-description">
              We fight for every dollar you deserve. You pay <strong>NOTHING</strong> unless we win—our fee only comes from your settlement or court award.
            </p>
            <ul className="apple-step-features">
              <li>
                <Checkmark />
                <span>Proven settlement results</span>
              </li>
              <li>
                <Checkmark />
                <span>No win = <strong className="free-text">NO FEE</strong> guarantee</span>
              </li>
              <li>
                <Checkmark />
                <span>Maximum injury compensation</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="steps-cta-section">
          <div className="trust-badge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                    fill="#34c759" stroke="#34c759" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
            <span>No Win = No Fee Guarantee</span>
          </div>
          <a href="#free-evaluation" className="primary-cta-button">
            Start Your Free Evaluation
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <p className="cta-subtext">Confidential consultation • No obligation • 24-hour response time</p>
        </div>
      </div>
    </section>
  );
};

export default ThreeStepProcess;
