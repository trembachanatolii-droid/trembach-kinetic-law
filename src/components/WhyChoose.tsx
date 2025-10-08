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
        <div className="grid grid-cols-[1.5fr_1fr] sm:grid-cols-[1.8fr_1fr] lg:grid-cols-[2fr_1fr] gap-8 sm:gap-12 lg:gap-20 xl:gap-24 h-full items-center">
          {/* Left: Headline + Paragraph */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <h3 
              className="text-[18px] sm:text-[28px] lg:text-[40px] xl:text-[48px] font-light leading-[1.15] tracking-tight text-foreground"
              itemProp="name"
            >
              {headline}
            </h3>
            
            <p 
              className="text-[11px] sm:text-[15px] lg:text-[18px] xl:text-[20px] text-muted-foreground/80 leading-relaxed font-light tracking-wide"
              itemProp="description"
            >
              {paragraph}
            </p>
          </div>

          {/* Right: Point List */}
          <ul className="space-y-4 sm:space-y-5 lg:space-y-6 xl:space-y-7 list-none">
            {points.map((point, i) => (
              <li 
                key={i}
                className="text-[18px] sm:text-[26px] lg:text-[32px] xl:text-[36px] font-light leading-[1.25] tracking-tight text-foreground flex items-start gap-3"
              >
                <span className="text-foreground/40 mt-1">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
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
      <header className="px-6 lg:px-16 py-12 lg:py-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
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
        itemDistance={120}
        itemScale={0.04}
        itemStackDistance={36}
        stackPosition="15%"
        scaleEndPosition="8%"
        baseScale={0.92}
        rotationAmount={0}
        blurAmount={0}
        useWindowScroll={true}
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
