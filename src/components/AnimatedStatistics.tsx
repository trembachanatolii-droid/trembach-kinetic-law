import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Statistic {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  icon?: React.ReactNode;
}

interface AnimatedStatisticsProps {
  statistics: Statistic[];
  title?: string;
  className?: string;
}

const AnimatedStatistics: React.FC<AnimatedStatisticsProps> = ({ 
  statistics, 
  title = "Our Results",
  className = ""
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [animatedValues, setAnimatedValues] = useState<number[]>(
    statistics.map(() => 0)
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const counters = container.querySelectorAll('.stat-number');
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate containers
    tl.fromTo(container.querySelectorAll('.stat-card'),
      { 
        opacity: 0, 
        y: 50,
        scale: 0.8 
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }
    );

    // Animate numbers
    counters.forEach((counter, index) => {
      const endValue = statistics[index].value;
      
      tl.to({}, {
        duration: 2,
        ease: "power2.out",
        onUpdate: function() {
          const progress = this.progress();
          const currentValue = Math.round(endValue * progress);
          setAnimatedValues(prev => {
            const newValues = [...prev];
            newValues[index] = currentValue;
            return newValues;
          });
        }
      }, "-=1.5");
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [statistics]);

  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
          {title}
        </h2>
        
        <div 
          ref={containerRef} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {statistics.map((stat, index) => (
            <div 
              key={index}
              className="stat-card text-center bg-card border border-border rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {stat.icon && (
                <div className="flex justify-center mb-4 text-primary text-4xl">
                  {stat.icon}
                </div>
              )}
              
              <div className="stat-number text-4xl font-bold text-primary mb-2">
                {stat.prefix || ''}
                {animatedValues[index].toLocaleString()}
                {stat.suffix || ''}
              </div>
              
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStatistics;