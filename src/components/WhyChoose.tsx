import React from 'react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface SubsectionProps {
  headline: string;
  paragraph: string;
  points: Array<string>;
  index: number;
}

const Subsection: React.FC<SubsectionProps> = ({ headline, paragraph, points }) => {
  return (
    <ScrollStackItem itemClassName="subsection-card">
      <article 
        className="h-full"
        itemScope
        itemType="https://schema.org/Service"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 h-full">
          {/* Left: Point List (Large Items) */}
          <div className="space-y-4 lg:space-y-6">
            {points.map((point, i) => (
              <h3 
                key={i}
                className="text-[28px] sm:text-[36px] lg:text-[44px] xl:text-[52px] font-bold leading-[1.1] tracking-tight text-foreground"
              >
                {point}
              </h3>
            ))}
          </div>

          {/* Right: Headline + Paragraph */}
          <div className="space-y-6">
            <h3 
              className="text-[24px] sm:text-[28px] lg:text-[36px] font-bold leading-[1.2] tracking-tight text-foreground"
              itemProp="name"
            >
              {headline}
            </h3>
            
            <p 
              className="text-[15px] lg:text-[17px] text-muted-foreground leading-relaxed font-normal"
              itemProp="description"
            >
              {paragraph}
            </p>
          </div>
        </div>
      </article>
    </ScrollStackItem>
  );
};

const WhyChoose: React.FC = () => {

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
      className="relative bg-background"
      itemScope
      itemType="https://schema.org/LegalService"
      aria-labelledby="why-choose-heading"
    >
      {/* Section Header */}
      <header className="px-6 lg:px-16 py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center justify-center gap-4 mb-12">
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
          <div className="w-full h-[1px] bg-border" />
        </div>
      </header>

      {/* Scroll Stack Subsections */}
      <ScrollStack
        itemDistance={150}
        itemScale={0.04}
        itemStackDistance={40}
        stackPosition="20%"
        scaleEndPosition="15%"
        baseScale={0.88}
        rotationAmount={0}
        blurAmount={0}
        useWindowScroll={false}
        className="why-choose-stack"
      >
        {subsections.map((section, index) => (
          <Subsection
            key={index}
            headline={section.headline}
            paragraph={section.paragraph}
            points={section.points}
            index={index}
          />
        ))}
      </ScrollStack>

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
