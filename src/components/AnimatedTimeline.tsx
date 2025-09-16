import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface TimelineStep {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface AnimatedTimelineProps {
  steps: TimelineStep[];
  title?: string;
}

const AnimatedTimeline: React.FC<AnimatedTimelineProps> = ({ steps, title = "Our Process" }) => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    const progress = progressRef.current;
    
    if (!timeline || !progress) return;

    const steps = timeline.querySelectorAll('.timeline-step');
    
    // Animate progress bar
    gsap.fromTo(progress, 
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: timeline,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1
        }
      }
    );

    // Animate steps
    steps.forEach((step, index) => {
      gsap.fromTo(step,
        { 
          opacity: 0, 
          x: index % 2 === 0 ? -50 : 50,
          scale: 0.8
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          delay: index * 0.1
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
          {title}
        </h2>
        
        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Progress Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border transform -translate-x-1/2">
            <div 
              ref={progressRef}
              className="w-full bg-primary origin-top"
              style={{ transformOrigin: 'top' }}
            />
          </div>

          {/* Timeline Steps */}
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`timeline-step relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-card border border-border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Center Circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg border-4 border-background">
                {step.icon || <CheckCircle className="w-6 h-6 text-primary-foreground" />}
              </div>

              {/* Spacer */}
              <div className="w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedTimeline;