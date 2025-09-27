import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TruthAboutCase = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the flowing line
      gsap.set('.flowing-line', { 
        pathLength: 0, 
        strokeDasharray: '1000 1000',
        strokeDashoffset: 1000
      });
      
      gsap.to('.flowing-line', {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate process steps
      gsap.fromTo('.process-step', 
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const problems = [
    {
      number: "01",
      title: "They're Recording Everything",
      description: "That friendly adjuster? They're building a case against you. Every word you say is being analyzed to minimize or deny your claim. One wrong statement costs you thousands.",
      tags: ["Recording", "Analysis", "Minimize", "Deny"]
    },
    {
      number: "02", 
      title: "Evidence is Disappearing Fast",
      description: "Surveillance footage gets deleted in 30 days. Witnesses forget details. Skid marks fade. Every day you wait makes your case weaker and their defense stronger.",
      tags: ["Surveillance", "Witnesses", "Evidence", "Time"]
    },
    {
      number: "03",
      title: "Your Doctor Works for Them", 
      description: "Insurance companies have networks of doctors who minimize injuries. They'll send you to \"their\" doctor who will say you're fine, destroying your case value.",
      tags: ["Medical", "Networks", "Minimize", "Destroy"]
    },
    {
      number: "04",
      title: "The First Offer is an Insult",
      description: "They know you need money now. Bills are piling up. So they offer 10% of what your case is worth, hoping desperation makes you accept. Don't fall for it.",
      tags: ["Lowball", "Desperation", "Accept", "Insult"]
    },
    {
      number: "05",
      title: "Most Lawyers are Scared of Trial",
      description: "95% of attorneys never go to trial. Insurance companies know this. They lowball because they know your lawyer will push you to settle. I'm not afraid. They know it.",
      tags: ["Trial", "Scared", "Settle", "Weak"]
    },
    {
      number: "06",
      title: "Time Limits are Ticking",
      description: "California has strict deadlines. Miss them and you get nothing. Government claims? 6 months. Regular claims? 2 years. But evidence disappears much faster.",
      tags: ["Deadlines", "Limits", "Miss", "Nothing"]
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-8 leading-none">
            The <span className="text-blue-500">Truth</span> About Your Case
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            What insurance companies don't want you to know
          </p>
          
          {/* Flowing Line SVG */}
          <div className="mt-16 flex justify-center">
            <svg
              width="800"
              height="100"
              viewBox="0 0 800 100"
              className="max-w-full h-auto"
            >
              <path
                className="flowing-line"
                d="M0,50 Q200,10 400,50 T800,50"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Process Steps */}
        <div className="space-y-16">
          {problems.map((problem, index) => (
            <div key={index} className="process-step flex items-start gap-8 md:gap-12">
              {/* Step Number */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-slate-900 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl font-bold">
                  {problem.number}
                </div>
              </div>
              
              {/* Step Content */}
              <div className="flex-1 pt-2">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                  {problem.title}
                </h3>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6 max-w-4xl">
                  {problem.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {problem.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TruthAboutCase;