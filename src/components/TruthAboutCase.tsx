import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';

gsap.registerPlugin(ScrollTrigger);

const TruthAboutCase = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate cards on scroll
      gsap.fromTo('.truth-card', 
        {
          opacity: 0,
          y: 30,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const problems = [
    {
      number: 1,
      title: "They're Recording Everything",
      description: "That friendly adjuster? They're building a case against you. Every word you say is being analyzed to minimize or deny your claim. One wrong statement costs you thousands.",
      cost: "Average Loss: $75,000"
    },
    {
      number: 2,
      title: "Evidence is Disappearing Fast",
      description: "Surveillance footage gets deleted in 30 days. Witnesses forget details. Skid marks fade. Every day you wait makes your case weaker and their defense stronger.",
      cost: "Case Impact: -40% Value"
    },
    {
      number: 3,
      title: "Your Doctor Works for Them",
      description: "Insurance companies have networks of doctors who minimize injuries. They'll send you to \"their\" doctor who will say you're fine, destroying your case value.",
      cost: "Medical Manipulation: -60% Settlement"
    },
    {
      number: 4,
      title: "The First Offer is an Insult",
      description: "They know you need money now. Bills are piling up. So they offer 10% of what your case is worth, hoping desperation makes you accept. Don't fall for it.",
      cost: "Lowball Tactics: 90% Underpaid"
    },
    {
      number: 5,
      title: "Most Lawyers are Scared of Trial",
      description: "95% of attorneys never go to trial. Insurance companies know this. They lowball because they know your lawyer will push you to settle. I'm not afraid. They know it.",
      cost: "Weak Representation: -$100,000+"
    },
    {
      number: 6,
      title: "Time Limits are Ticking",
      description: "California has strict deadlines. Miss them and you get nothing. Government claims? 6 months. Regular claims? 2 years. But evidence disappears much faster.",
      cost: "Deadline Missed: $0 Recovery"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-24 bg-background">
      <div className="container mx-auto px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-display font-display text-foreground mb-6">
            The <span className="relative inline-block">
              <span className="text-accent">Truth</span>
              <span className="absolute inset-0 bg-accent/20 -skew-x-12 transform"></span>
            </span> About Your Case
          </h2>
          <p className="text-headline text-muted-foreground max-w-2xl mx-auto">
            What insurance companies don't want you to know
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <Card key={index} className="truth-card relative bg-surface border-2 border-border/20 hover:border-accent/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/10">
              {/* Problem Number */}
              <div className="absolute -top-6 left-6 w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center font-bold text-xl group-hover:bg-accent transition-colors duration-300">
                {problem.number}
              </div>
              
              <CardContent className="p-8 pt-12">
                <h3 className="text-title font-display font-bold text-foreground mb-4 leading-tight">
                  {problem.title.split(' ').map((word, wordIndex) => {
                    // Highlight key words
                    const highlightWords = ['Recording', 'Disappearing', 'Works', 'Insult', 'Scared', 'Ticking'];
                    if (highlightWords.includes(word)) {
                      return (
                        <span key={wordIndex} className="relative">
                          <span className="text-accent font-bold">{word}</span>
                          <span className="absolute bottom-0 left-0 w-full h-1 bg-accent/30"></span>
                        </span>
                      );
                    }
                    return <span key={wordIndex}>{word} </span>;
                  })}
                </h3>
                
                <p className="text-body text-muted-foreground leading-relaxed mb-6">
                  {problem.description}
                </p>
                
                <div className="border-t-2 border-accent/30 pt-4">
                  <p className="text-body font-bold text-foreground">
                    <span className="text-accent">{problem.cost.split(':')[0]}:</span>
                    <span className="ml-2">{problem.cost.split(':')[1]}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TruthAboutCase;