import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PracticeAreaProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

const PracticeAreaCard: React.FC<PracticeAreaProps> = ({ title, description, icon, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 60,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        delay: index * 0.1,
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className="group relative bg-card border border-border rounded-xl p-10 transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-xl hover:border-primary min-h-[320px] flex flex-col"
    >
      <div className="text-5xl mb-5 block">
        {icon}
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed flex-grow">
        {description}
      </p>

      <a 
        href="#contact" 
        className="inline-flex items-center gap-2 mt-4 text-primary font-semibold hover:text-primary-glow transition-colors"
      >
        Get Help →
      </a>
    </div>
  );
};

const PracticeAreas = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const practiceAreas = [
    {
      title: "Mesothelioma & Asbestos",
      description: "Aggressive representation for asbestos cancer victims throughout California. We trace exposure histories from military service, shipyards, construction sites, and consumer products. Our team understands the devastating impact of this aggressive cancer that develops decades after exposure.",
      icon: "🫁"
    },
    {
      title: "Silicosis Injuries",
      description: "Fighting for stone workers suffering from this preventable yet incurable lung disease. Engineered stone fabricators face epidemic-level silicosis rates from cutting quartz countertops without proper protection.",
      icon: "⚠️"
    },
    {
      title: "Talc & Baby Powder Cancer",
      description: "Seeking justice for ovarian cancer and mesothelioma victims from contaminated talc products. For decades, manufacturers knew their talc contained asbestos but continued marketing these products for intimate use and infant care.",
      icon: "🍼"
    },
    {
      title: "Car Accidents",
      description: "California's congested highways and streets see thousands of serious crashes annually, causing life-altering injuries and devastating losses. Our former defense experience reveals insurance company tactics used to minimize payouts.",
      icon: "🚗"
    },
    {
      title: "Truck & 18-Wheeler",
      description: "Commercial truck crashes cause catastrophic injuries due to size and weight disparities with passenger vehicles. Federal regulations and state laws create complex liability issues involving drivers, trucking companies, and maintenance providers.",
      icon: "🚛"
    },
    {
      title: "Motorcycle Accidents",
      description: "Protecting California riders against bias and securing fair compensation for devastating injuries. Despite following traffic laws and wearing protective gear, motorcyclists face prejudice from insurance companies.",
      icon: "🏍️"
    },
    {
      title: "Pedestrian Accidents",
      description: "California law provides strong protections for pedestrians, but injuries from vehicle strikes are often severe or fatal. Crosswalk accidents, sidewalk collisions, and parking lot incidents devastate families.",
      icon: "🚶"
    },
    {
      title: "Bicycle Accidents",
      description: "California's bicycle-friendly laws provide extensive protections, but cyclists remain vulnerable to serious injuries from vehicle collisions. We combat anti-cyclist bias while pursuing compensation.",
      icon: "🚴"
    },
    {
      title: "Premises Liability",
      description: "Property owners must maintain safe conditions for visitors, with liability arising from negligent maintenance, inadequate security, and dangerous conditions. Slip and falls cause serious injuries.",
      icon: "🏢"
    },
    {
      title: "Dog Bites",
      description: "California's strict liability statute holds dog owners responsible for bite injuries regardless of the animal's history or owner's knowledge of aggression. This protection especially benefits children.",
      icon: "🐕"
    },
    {
      title: "Medical Malpractice",
      description: "Healthcare providers must meet professional standards of care, with deviation causing patient harm creating liability for compensation. Misdiagnosis delays treatment allowing conditions to worsen.",
      icon: "⚕️"
    },
    {
      title: "Wrongful Death",
      description: "When negligence causes death, surviving family members deserve justice and financial security during devastating loss. California's wrongful death statute allows spouses, children, and dependents to recover.",
      icon: "⚰️"
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      ".practice-header",
      {
        opacity: 0,
        y: 60,
        filter: "blur(10px)"
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="practice-areas" className="relative py-20 lg:py-32 bg-muted/20">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div className="practice-header text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-display font-display font-bold text-foreground mb-6 glow">
            50+ Practice Areas
          </h2>
          <p className="text-body text-muted-foreground leading-relaxed">
            Comprehensive representation for all California personal injury cases
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <PracticeAreaCard
              key={index}
              title={area.title}
              description={area.description}
              icon={area.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;