import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SubsectionProps {
  headline: string;
  paragraph: string;
  points: Array<string>;
  index: number;
}

const Subsection: React.FC<SubsectionProps> = ({ headline, paragraph, points, index }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const pointsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([headlineRef.current, paragraphRef.current], {
        y: 30,
        opacity: 0
      });

      const pointItems = pointsRef.current?.querySelectorAll('h3');
      if (pointItems) {
        gsap.set(pointItems, {
          y: 30,
          opacity: 0
        });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 25%",
          toggleActions: "play none none none"
        }
      });

      tl.to([headlineRef.current, paragraphRef.current], {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      });

      if (pointItems) {
        tl.to(pointItems, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out"
        }, "-=0.3");
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <article 
      ref={sectionRef}
      className="py-20 lg:py-28 px-6 lg:px-16"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          {/* Left: Point List (Large Items) */}
          <div 
            ref={pointsRef}
            className="space-y-6 lg:space-y-8"
          >
            {points.map((point, i) => (
              <h3 
                key={i}
                className="text-[32px] sm:text-[40px] lg:text-[48px] xl:text-[56px] font-bold leading-[1.1] tracking-tight text-foreground"
              >
                {point}
              </h3>
            ))}
          </div>

          {/* Right: Headline + Paragraph */}
          <div className="space-y-8">
            <h3 
              ref={headlineRef}
              className="text-[28px] sm:text-[32px] lg:text-[40px] font-bold leading-[1.2] tracking-tight text-foreground"
              itemProp="name"
            >
              {headline}
            </h3>
            
            <p 
              ref={paragraphRef}
              className="text-[16px] lg:text-[18px] text-muted-foreground leading-relaxed font-normal"
              itemProp="description"
            >
              {paragraph}
            </p>
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
      gsap.fromTo(
        headerRef.current,
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      gsap.fromTo(
        lineRef.current,
        {
          scaleX: 0,
          opacity: 0
        },
        {
          scaleX: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
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
      ]
    },
    {
      headline: "We Know Their Secrets Because We Created Them",
      paragraph: "When Anatolii worked for insurers, he sat in the closed-door meetings where they plotted how to lowball, delay, and deny. Now he leads our firm in exposing and destroying those same tactics for our clients. Insurance companies panic when they see his name.",
      points: [
        "Their Playbook Is Our Weapon",
        "Their Experts Are Our Targets",
        "Their Pressure Points Are Our Advantage"
      ]
    },
    {
      headline: "We Rip Apart Their Dirtiest Strategies",
      paragraph: "Insurance companies spend millions training adjusters to beat victims. They try to scare you, stall you, and trap you into saying the wrong thing. We know every one of these tricks — and we crush them in court and across the negotiating table.",
      points: [
        "Lowball Offers",
        "Delay & Deny",
        "Twist Your Words"
      ]
    },
    {
      headline: "Led by the Lawyer Who Switched Sides",
      paragraph: "After years defending billion-dollar insurers, Anatolii walked away. He couldn't stomach watching them ruin lives. Now he leads us in flipping their entire system upside down. They hate it. Our clients love it.",
      points: [
        "We Know Their Settlement Triggers",
        "We Break Their Paid Doctors",
        "We Turn Defense Tactics Into Cash for Victims"
      ]
    },
    {
      headline: "They're Paid to Rip You Off — And They're Damn Good at It",
      paragraph: "Insurance adjusters earn bonuses for underpaying claims. They already set aside 10X more than what they offered you — hoping you'll never know. We make sure they pay full value, and we do it fast.",
      points: [
        "Trained to Pay Less",
        "93% Take First Offer",
        "Every Day You Wait = More Money Lost"
      ]
    },
    {
      headline: "No Risk. No Excuses. Maximum Results.",
      paragraph: "With us, you pay nothing unless we win. Most cases settle before trial because insurers know fighting us is suicide — we have their insider. Already have an offer? Perfect. Our average client gets over 3X MORE than the first number.",
      points: [
        "Zero Risk: No Win = No Fee",
        "95% Settle Without Trial",
        "Led by Former Insurance Defense Insider"
      ]
    }
  ];

  return (
    <section 
      className="relative bg-background py-20 lg:py-32"
      itemScope
      itemType="https://schema.org/LegalService"
      aria-labelledby="why-choose-heading"
    >
      {/* Section Header */}
      <header className="px-6 lg:px-16 mb-16 lg:mb-20">
        <div className="max-w-[1400px] mx-auto">
          <div ref={headerRef} className="flex items-center justify-center gap-4 mb-12">
            <h2 
              id="why-choose-heading"
              className="text-[48px] sm:text-[64px] lg:text-[80px] xl:text-[96px] font-bold text-foreground tracking-tight leading-none"
              itemProp="name"
            >
              Why Choose Trembach Law Firm
            </h2>
            <div className="w-[2px] h-16 lg:h-20 bg-foreground/20" />
          </div>
          
          {/* Horizontal divider line */}
          <div 
            ref={lineRef}
            className="w-full h-[1px] bg-border origin-left"
          />
        </div>
      </header>

      {/* Subsections */}
      <div className="relative">
        {subsections.map((section, index) => (
          <React.Fragment key={index}>
            <Subsection
              headline={section.headline}
              paragraph={section.paragraph}
              points={section.points}
              index={index}
            />
            {/* Divider line between subsections */}
            {index < subsections.length - 1 && (
              <div className="px-6 lg:px-16">
                <div className="max-w-[1400px] mx-auto">
                  <div className="w-full h-[1px] bg-border" />
                </div>
              </div>
            )}
          </React.Fragment>
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
