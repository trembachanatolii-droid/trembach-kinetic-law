import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TruthAboutCase = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Animate process steps
      const steps = section.querySelectorAll('.process-step');
      gsap.fromTo(
        steps,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const problems = [
    {
      number: "01",
      title: "They're Recording Everything",
      description: "Understanding your vision, requirements, and target audience",
      tags: ["Recording", "Analysis", "Minimize", "Deny"]
    },
    {
      number: "02", 
      title: "Evidence is Disappearing Fast",
      description: "Creating stunning interfaces and seamless user experiences",
      tags: ["Surveillance", "Witnesses", "Evidence", "Time"]
    },
    {
      number: "03",
      title: "Your Doctor Works for Them", 
      description: "Building robust, scalable applications with modern technology",
      tags: ["Medical", "Networks", "Minimize", "Destroy"]
    },
    {
      number: "04",
      title: "The First Offer is an Insult",
      description: "Launching your project with ongoing support and optimization",
      tags: ["Lowball", "Desperation", "Accept", "Insult"]
    },
    {
      number: "05",
      title: "Most Lawyers are Scared of Trial",
      description: "Comprehensive testing and quality assurance procedures",
      tags: ["Trial", "Scared", "Settle", "Weak"]
    },
    {
      number: "06",
      title: "Time Limits are Ticking",
      description: "Final delivery with documentation and training materials",
      tags: ["Deadlines", "Limits", "Miss", "Nothing"]
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-8 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            The Truth About Your Case
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A structured approach to bringing your digital vision to life
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-12">
          {problems.map((problem, index) => (
            <div key={index} className="process-step">
              {/* Step Number */}
              <div className="text-5xl md:text-6xl font-bold text-slate-300 mb-4">
                {problem.number}
              </div>
              
              {/* Step Content */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 leading-tight">
                  {problem.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-4 max-w-3xl">
                  {problem.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {problem.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-sm text-slate-500 font-medium"
                    >
                      {tag}
                      {tagIndex < problem.tags.length - 1 && <span className="ml-2">•</span>}
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