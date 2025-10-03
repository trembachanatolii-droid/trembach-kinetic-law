import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Shield, Target, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface SubsectionProps {
  headline: string;
  paragraph: string;
  points: Array<string | { title: string; sub?: string }>;
  index: number;
  icon?: React.ReactNode;
}

const Subsection: React.FC<SubsectionProps> = ({ headline, paragraph, points, index, icon }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const pointsRef = useRef<HTMLUListElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Apple-style smooth reveal with subtle scale
      gsap.set([headlineRef.current, paragraphRef.current, iconRef.current], {
        y: 40,
        opacity: 0,
        scale: 0.98,
        willChange: "transform, opacity"
      });

      const pointItems = pointsRef.current?.querySelectorAll('li');
      if (pointItems) {
        gsap.set(pointItems, {
          y: 30,
          opacity: 0,
          scale: 0.98,
          willChange: "transform, opacity"
        });
      }

      // Apple-inspired smooth timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none none"
        }
      });

      // Icon appears first
      if (iconRef.current) {
        tl.to(iconRef.current, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "power4.out"
        });
      }

      // Headline and paragraph with Apple's signature ease
      tl.to([headlineRef.current, paragraphRef.current], {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",
        clearProps: "willChange"
      }, "-=0.6");

      // Points cascade in
      if (pointItems) {
        tl.to(pointItems, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power4.out",
          clearProps: "willChange"
        }, "-=0.7");
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <article 
      ref={sectionRef}
      className="relative py-24 lg:py-36 px-6 lg:px-16 transition-colors duration-700 hover:bg-muted/5"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-16 lg:gap-24 items-start">
          {/* Left: Icon, Headline + Paragraph */}
          <div className="space-y-10">
            {icon && (
              <div 
                ref={iconRef}
                className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center backdrop-blur-sm border border-primary/10 transition-all duration-500 hover:scale-110 hover:bg-primary/20 hover:border-primary/30"
              >
                <div className="text-primary transition-transform duration-500">
                  {icon}
                </div>
              </div>
            )}
            
            <h3 
              ref={headlineRef}
              className="text-[clamp(32px,4.5vw,56px)] font-bold leading-[1.1] tracking-[-0.03em] text-foreground"
              itemProp="name"
            >
              {headline}
            </h3>
            
            <p 
              ref={paragraphRef}
              className="text-[clamp(16px,1.8vw,19px)] text-muted-foreground leading-[1.65] font-normal max-w-[600px]"
              itemProp="description"
            >
              {paragraph}
            </p>
          </div>

          {/* Right: Point List with Apple-style hover effects */}
          <div className="flex items-start lg:pt-12">
            <ul 
              ref={pointsRef} 
              className="space-y-8 w-full"
              role="list"
            >
              {points.map((point, i) => (
                <li 
                  key={i}
                  className="group relative text-[clamp(24px,3.2vw,42px)] font-semibold leading-[1.15] tracking-[-0.02em] text-foreground transition-all duration-500 cursor-default"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  itemProp="serviceOutput"
                >
                  <div className="flex items-start gap-4">
                    <ArrowRight 
                      className={`w-6 h-6 lg:w-8 lg:h-8 mt-2 flex-shrink-0 transition-all duration-500 ${
                        hoveredIndex === i 
                          ? 'text-primary translate-x-2 opacity-100' 
                          : 'text-muted-foreground/30 translate-x-0 opacity-60'
                      }`}
                    />
                    <div className="flex-1">
                      {typeof point === 'string' ? (
                        <span className="group-hover:text-primary transition-colors duration-500">
                          {point}
                        </span>
                      ) : (
                        <>
                          <div className="group-hover:text-primary transition-colors duration-500">
                            {point.title}
                          </div>
                          {point.sub && (
                            <div className="text-[clamp(14px,1.6vw,17px)] text-muted-foreground font-normal mt-2 tracking-normal leading-relaxed">
                              {point.sub}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                  
                  {/* Apple-style subtle hover line */}
                  <div className={`absolute left-0 bottom-0 h-[1px] bg-gradient-to-r from-primary/40 to-transparent transition-all duration-700 ${
                    hoveredIndex === i ? 'w-full opacity-100' : 'w-0 opacity-0'
                  }`} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

const WhyChoose: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Apple-style header animation with scale
      gsap.fromTo(
        headerRef.current,
        {
          y: 50,
          opacity: 0,
          scale: 0.98,
          willChange: "transform, opacity"
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power4.out",
          clearProps: "willChange",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Elegant line expansion from center
      gsap.fromTo(
        lineRef.current,
        {
          scaleX: 0,
          opacity: 0
        },
        {
          scaleX: 1,
          opacity: 1,
          duration: 1.4,
          ease: "power4.out",
          scrollTrigger: {
            trigger: lineRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  const subsections = [
    {
      headline: "We Were Their Secret Weapon. Now We're Yours.",
      paragraph: "For years, our founder Anatolii Trembach defended the biggest corporations and insurance companies in California. He learned every tactic, every formula, every trick they use to underpay victims. Then he switched sides to protect injured people. Now we use their own playbook against them — to win maximum payouts for people just like you.",
      points: [
        "Former Corporate & Insurance Insider",
        "We Know Their Every Move",
        "Now We Fight ONLY for Victims"
      ],
      icon: <Shield className="w-10 h-10 lg:w-12 lg:h-12" />
    },
    {
      headline: "We Know Their Secrets Because We Created Them",
      paragraph: "When Anatolii worked for insurers, he sat in the closed-door meetings where they plotted how to lowball, delay, and deny. Now he leads our firm in exposing and destroying those same tactics for our clients. Insurance companies panic when they see his name.",
      points: [
        "Their Playbook Is Our Weapon",
        "Their Experts Are Our Targets",
        "Their Pressure Points Are Our Advantage"
      ],
      icon: <Target className="w-10 h-10 lg:w-12 lg:h-12" />
    },
    {
      headline: "We Rip Apart Their Dirtiest Strategies",
      paragraph: "Insurance companies spend millions training adjusters to beat victims. They try to scare you, stall you, and trap you into saying the wrong thing. We know every one of these tricks — and we crush them in court and across the negotiating table.",
      points: [
        { title: "Lowball Offers", sub: "15¢ on the dollar" },
        { title: "Delay & Deny", sub: "Stall until you quit" },
        { title: "Twist Your Words", sub: "One slip = $50K gone" }
      ],
      icon: <Zap className="w-10 h-10 lg:w-12 lg:h-12" />
    },
    {
      headline: "Led by the Lawyer Who Switched Sides",
      paragraph: "After years defending billion-dollar insurers, Anatolii walked away. He couldn't stomach watching them ruin lives. Now he leads us in flipping their entire system upside down. They hate it. Our clients love it.",
      points: [
        "We Know Their Settlement Triggers",
        "We Break Their Paid Doctors",
        "We Turn Defense Tactics Into Cash for Victims"
      ],
      icon: <Shield className="w-10 h-10 lg:w-12 lg:h-12" />
    },
    {
      headline: "They're Paid to Rip You Off — And They're Damn Good at It",
      paragraph: "Insurance adjusters earn bonuses for underpaying claims. They already set aside 10X more than what they offered you — hoping you'll never know. We make sure they pay full value, and we do it fast.",
      points: [
        { title: "Trained to Pay Less", sub: "It's Their Job" },
        { title: "93% Take First Offer", sub: "Don't Be a Statistic" },
        { title: "Every Day You Wait", sub: "= More Money Lost" }
      ],
      icon: <Target className="w-10 h-10 lg:w-12 lg:h-12" />
    },
    {
      headline: "No Risk. No Excuses. Maximum Results.",
      paragraph: "With us, you pay nothing unless we win. Most cases settle before trial because insurers know fighting us is suicide — we have their insider. Already have an offer? Perfect. Our average client gets over 3X MORE than the first number.",
      points: [
        "Zero Risk: No Win = No Fee",
        "95% Settle Without Trial",
        "Led by Anatolii Trembach, Former Insurance Defense Insider"
      ],
      icon: <Zap className="w-10 h-10 lg:w-12 lg:h-12" />
    }
  ];

  return (
    <section 
      className="relative bg-background py-24 lg:py-40 overflow-hidden"
      itemScope
      itemType="https://schema.org/LegalService"
      aria-labelledby="why-choose-heading"
    >
      {/* Apple-style ambient gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background pointer-events-none" />
      
      {/* Section Header */}
      <header className="px-6 lg:px-16 mb-20 lg:mb-32 relative">
        <div className="max-w-[1400px] mx-auto">
          <div ref={headerRef} className="text-center space-y-6">
            <h2 
              id="why-choose-heading"
              className="text-[clamp(48px,7vw,96px)] font-bold text-foreground tracking-[-0.04em] leading-[0.95]"
              itemProp="name"
            >
              Why Choose Trembach Law Firm
            </h2>
            <p className="text-[clamp(18px,2.2vw,24px)] text-muted-foreground font-normal max-w-[800px] mx-auto leading-relaxed">
              California's premier personal injury attorneys with insider knowledge
            </p>
          </div>
          
          {/* Apple-style divider with gradient */}
          <div 
            ref={lineRef}
            className="w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent origin-center mt-12"
          />
        </div>
      </header>

      {/* Subsections with structured data */}
      <div className="relative">
        {subsections.map((section, index) => (
          <Subsection
            key={index}
            headline={section.headline}
            paragraph={section.paragraph}
            points={section.points}
            index={index}
            icon={section.icon}
          />
        ))}
      </div>

      {/* Schema.org structured data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Attorney",
          "name": "Trembach Law Firm",
          "description": "California personal injury law firm led by former insurance defense attorney Anatolii Trembach",
          "url": "https://www.trembachlawfirm.com",
          "areaServed": {
            "@type": "State",
            "name": "California"
          },
          "knowsAbout": [
            "Personal Injury Law",
            "Insurance Defense",
            "Uber & Lyft Accidents",
            "Rideshare Accidents",
            "Car Accidents"
          ],
          "priceRange": "Contingency Fee - No Win No Fee",
          "founder": {
            "@type": "Person",
            "name": "Anatolii Trembach",
            "jobTitle": "Attorney at Law"
          }
        })}
      </script>
    </section>
  );
};

export default WhyChoose;
