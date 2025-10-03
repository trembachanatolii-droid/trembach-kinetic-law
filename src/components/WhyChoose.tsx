import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Target, Zap, Award, TrendingUp, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface SubsectionProps {
  headline: string;
  paragraph: string;
  points: string[];
  icon: React.ReactNode;
  index: number;
}

const Subsection: React.FC<SubsectionProps> = ({ headline, paragraph, points, icon, index }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const pointsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([headlineRef.current, paragraphRef.current], {
        y: 60,
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
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Stagger animate list items
      if (pointItems) {
        tl.to(pointItems, {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out"
        }, "-=0.4");
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={sectionRef}
      className={`py-[90px] ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
    >
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left: Headline + Paragraph */}
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-700 mb-4">
              {icon}
            </div>
            <h2 
              ref={headlineRef}
              className="text-[clamp(38px,5vw,72px)] font-black leading-[1.1] tracking-tight text-gray-900"
              style={{ maxWidth: '58ch' }}
            >
              {headline}
            </h2>
            <p 
              ref={paragraphRef}
              className="text-lg lg:text-xl text-gray-600 leading-relaxed font-medium"
              style={{ maxWidth: '58ch' }}
            >
              {paragraph}
            </p>
          </div>

          {/* Right: 3-Point List */}
          <div className="lg:pt-12">
            <ul ref={pointsRef} className="space-y-6">
              {points.map((point, i) => (
                <li 
                  key={i}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-red-600 mt-2.5 group-hover:scale-150 transition-transform duration-300" />
                  <span className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
                    {point}
                  </span>
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
      icon: <Shield className="w-8 h-8 text-white" />
    },
    {
      headline: "We Know Their Secrets Because We Created Them",
      paragraph: "When Anatolii worked for insurers, he sat in the closed-door meetings where they plotted how to lowball, delay, and deny. Now he leads our firm in exposing and destroying those same tactics for our clients. Insurance companies panic when they see his name.",
      points: [
        "Their Playbook Is Our Weapon",
        "Their Experts Are Our Targets",
        "Their Pressure Points Are Our Advantage"
      ],
      icon: <Target className="w-8 h-8 text-white" />
    },
    {
      headline: "We Rip Apart Their Dirtiest Strategies",
      paragraph: "Insurance companies spend millions training adjusters to beat victims. They try to scare you, stall you, and trap you into saying the wrong thing. We know every one of these tricks — and we crush them in court and across the negotiating table.",
      points: [
        "Lowball Offers — 15¢ on the dollar",
        "Delay & Deny — Stall until you quit",
        "Twist Your Words — One slip = $50K gone"
      ],
      icon: <Zap className="w-8 h-8 text-white" />
    },
    {
      headline: "Led by the Lawyer Who Switched Sides",
      paragraph: "After years defending billion-dollar insurers, Anatolii walked away. He couldn't stomach watching them ruin lives. Now he leads us in flipping their entire system upside down. They hate it. Our clients love it.",
      points: [
        "We Know Their Settlement Triggers",
        "We Break Their Paid Doctors",
        "We Turn Defense Tactics Into Cash for Victims"
      ],
      icon: <Award className="w-8 h-8 text-white" />
    },
    {
      headline: "They're Paid to Rip You Off — And They're Damn Good at It",
      paragraph: "Insurance adjusters earn bonuses for underpaying claims. They already set aside 10X more than what they offered you — hoping you'll never know. We make sure they pay full value, and we do it fast.",
      points: [
        "Trained to Pay Less — It's Their Job",
        "93% Take First Offer — Don't Be a Statistic",
        "Every Day You Wait = More Money Lost"
      ],
      icon: <TrendingUp className="w-8 h-8 text-white" />
    },
    {
      headline: "No Risk. No Excuses. Maximum Results.",
      paragraph: "With us, you pay nothing unless we win. Most cases settle before trial because insurers know fighting us is suicide — we have their insider. Already have an offer? Perfect. Our average client gets over 3X MORE than the first number.",
      points: [
        "Zero Risk: No Win = No Fee",
        "95% Settle Without Trial",
        "Led by Anatolii Trembach, Former Insurance Defense Insider"
      ],
      icon: <CheckCircle className="w-8 h-8 text-white" />
    }
  ];

  return (
    <section className="relative bg-white">
      {/* Section Header */}
      <div className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-8 max-w-7xl">
          <div ref={headerRef} className="text-center">
            <h2 className="text-[clamp(48px,6vw,84px)] font-black text-white leading-tight tracking-tight mb-6">
              Why Choose <span className="text-apple">Trembach Law Firm</span>
            </h2>
            <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full" />
          </div>
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
            icon={section.icon}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
