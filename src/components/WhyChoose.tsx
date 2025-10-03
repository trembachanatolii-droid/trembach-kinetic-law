import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

interface SubsectionProps {
  headline: string;
  paragraph: string;
  points: Array<string | { title: string; sub?: string }>;
  index: number;
}

const Subsection: React.FC<SubsectionProps> = ({ headline, paragraph, points, index }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const pointsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([headlineRef.current, paragraphRef.current], {
        y: 28,
        opacity: 0,
        filter: "blur(8px)"
      });

      const pointItems = pointsRef.current?.querySelectorAll('li');
      if (pointItems) {
        gsap.set(pointItems, {
          y: 40,
          opacity: 0,
          filter: "blur(6px)"
        });
      }

      // Create scroll-triggered timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none none"
        }
      });

      // Animate headline and paragraph
      tl.to([headlineRef.current, paragraphRef.current], {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.7,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Stagger animate list items
      if (pointItems) {
        tl.to(pointItems, {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.55,
          stagger: 0.09,
          ease: "power3.out"
        }, "-=0.4");
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={sectionRef}
      className={`py-24 lg:py-32 border-b border-border ${index % 2 === 0 ? 'bg-background' : 'bg-muted/5'}`}
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left: Headline + Paragraph */}
          <div className="space-y-6 lg:space-y-8">
            <h3 
              ref={headlineRef}
              className="text-[32px] sm:text-[40px] lg:text-[48px] xl:text-[56px] font-bold leading-[1.1] tracking-[-0.02em] text-foreground"
            >
              {headline}
            </h3>
            <p 
              ref={paragraphRef}
              className="text-[16px] lg:text-[18px] text-muted-foreground leading-[1.6] font-normal"
            >
              {paragraph}
            </p>
          </div>

          {/* Right: 3-Point List */}
          <div className="lg:pt-2">
            <ul ref={pointsRef} className="space-y-6 lg:space-y-8">
              {points.map((point, i) => (
                <li 
                  key={i}
                  className="leading-tight"
                >
                  <span className="block text-[28px] sm:text-[36px] lg:text-[42px] xl:text-[48px] font-bold tracking-[-0.01em] text-foreground leading-[1.15]">
                    {typeof point === 'string' ? point : point.title}
                  </span>
                  {typeof point !== 'string' && point.sub && (
                    <small className="block text-[14px] lg:text-[16px] text-muted-foreground/80 font-normal mt-2 tracking-normal">
                      {point.sub}
                    </small>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const WhyChoose: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        {
          y: 50,
          opacity: 0,
          filter: "blur(10px)"
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
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
      
    },
    {
      headline: "We Know Their Secrets Because We Created Them",
      paragraph: "When Anatolii worked for insurers, he sat in the closed-door meetings where they plotted how to lowball, delay, and deny. Now he leads our firm in exposing and destroying those same tactics for our clients. Insurance companies panic when they see his name.",
      points: [
        "Their Playbook Is Our Weapon",
        "Their Experts Are Our Targets",
        "Their Pressure Points Are Our Advantage"
      ],
      
    },
    {
      headline: "We Rip Apart Their Dirtiest Strategies",
      paragraph: "Insurance companies spend millions training adjusters to beat victims. They try to scare you, stall you, and trap you into saying the wrong thing. We know every one of these tricks — and we crush them in court and across the negotiating table.",
      points: [
        { title: "Lowball Offers", sub: "15¢ on the dollar" },
        { title: "Delay & Deny", sub: "Stall until you quit" },
        { title: "Twist Your Words", sub: "One slip = $50K gone" }
      ],
      
    },
    {
      headline: "Led by the Lawyer Who Switched Sides",
      paragraph: "After years defending billion-dollar insurers, Anatolii walked away. He couldn't stomach watching them ruin lives. Now he leads us in flipping their entire system upside down. They hate it. Our clients love it.",
      points: [
        "We Know Their Settlement Triggers",
        "We Break Their Paid Doctors",
        "We Turn Defense Tactics Into Cash for Victims"
      ],
      
    },
    {
      headline: "They're Paid to Rip You Off — And They're Damn Good at It",
      paragraph: "Insurance adjusters earn bonuses for underpaying claims. They already set aside 10X more than what they offered you — hoping you'll never know. We make sure they pay full value, and we do it fast.",
      points: [
        { title: "Trained to Pay Less", sub: "It’s Their Job" },
        { title: "93% Take First Offer", sub: "Don’t Be a Statistic" },
        { title: "Every Day You Wait", sub: "= More Money Lost" }
      ],
      
    },
    {
      headline: "No Risk. No Excuses. Maximum Results.",
      paragraph: "With us, you pay nothing unless we win. Most cases settle before trial because insurers know fighting us is suicide — we have their insider. Already have an offer? Perfect. Our average client gets over 3X MORE than the first number.",
      points: [
        "Zero Risk: No Win = No Fee",
        "95% Settle Without Trial",
        "Led by Anatolii Trembach, Former Insurance Defense Insider"
      ],
      
    }
  ];

  return (
    <section className="relative bg-background py-16 lg:py-24">
      {/* Section Header */}
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <div ref={headerRef} className="text-center mb-12 lg:mb-16">
          <h2 className="text-[48px] sm:text-[56px] lg:text-[72px] xl:text-[80px] font-bold text-foreground tracking-[-0.02em] leading-[1.1]">
            Why Choose Trembach Law Firm
          </h2>
        </div>
      </div>

      {/* Subsections */}
      <div className="relative">
        {subsections.map((section, index) => (
          <Subsection
            key={index}
            headline={section.headline}
            paragraph={section.paragraph}
            points={section.points}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
