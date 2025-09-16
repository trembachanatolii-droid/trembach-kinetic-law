import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import silicosisHero from '@/assets/practice-areas/silicosis-injuries.jpg';

gsap.registerPlugin(ScrollTrigger);

const SilicosisInjuries = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".content-card", 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".content-card",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background" ref={contentRef}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${silicosisHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/75" />
        
        <div className="relative z-10 container mx-auto px-8 py-20">
          <div className="max-w-4xl">
            <div className="text-6xl mb-6">⛏️</div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6">
              California Silicosis Lawyers
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
              Fighting for Stone Workers Suffering from Preventable Lung Disease
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-4xl">
              Aggressive Legal Representation for Workers Exposed to Deadly Silica Dust Throughout California
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link to="/case-evaluation">Free Case Review</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link to="tel:5551234567">Call (555) 123-4567</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Overview Card */}
            <Card className="content-card p-8">
              <h2 className="text-3xl font-bold mb-6">The Silicosis Crisis in California</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                The epidemic of silicosis among California's stone fabrication workers represents one of the most devastating occupational health crises of the 21st century. Young workers, many in their 20s and 30s, face death sentences from an entirely preventable disease that employers could have avoided through basic safety measures. At Trembach Law Firm, we leverage former defense attorney experience to pursue maximum compensation for workers whose lungs have been destroyed by crystalline silica exposure.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Silicosis is not a new disease—it has been recognized for over a century as one of the most serious occupational hazards facing workers in dust-producing industries. Yet despite this long-standing knowledge, thousands of California workers continue to develop this incurable lung disease each year. The explosion of engineered stone countertop popularity has created a perfect storm of exposure, with fabrication shops throughout Los Angeles, San Francisco, Sacramento, Orange County, San Diego, and the Inland Empire operating without adequate protections.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our firm stands at the forefront of silicosis litigation in California, understanding both the medical complexities of this progressive disease and the legal strategies necessary to hold employers and manufacturers accountable. We recognize that behind every silicosis case is a human tragedy—a worker who came to America seeking opportunity, only to have their dreams destroyed by preventable occupational disease.
              </p>
            </Card>

            {/* Types of Silicosis Card */}
            <Card className="content-card p-8">
              <h2 className="text-3xl font-bold mb-6">Types of Silicosis We Handle</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Acute Silicosis from Extreme Exposures</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Acute silicosis represents the most devastating form of the disease, developing within weeks to five years after massive crystalline silica exposure. This rapidly progressive variant fills lungs with proteinaceous material similar to pulmonary alveolar proteinosis, causing severe respiratory failure often within months of symptom onset. Workers in engineered stone fabrication facilities using dry-cutting methods in confined spaces without ventilation face the highest risk for developing this fatal form of the disease.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Accelerated Silicosis from High-Level Workplace Exposures</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Accelerated silicosis develops within 5-10 years of high-level silica exposure and represents the most common form among modern engineered stone fabricators. Medical presentation typically shows nodular fibrosis progressing to progressive massive fibrosis where individual nodules coalesce into large masses that destroy normal lung architecture.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Chronic Silicosis from Extended Lower-Level Exposures</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Chronic simple silicosis develops after 10-30 years of lower-level exposure, traditionally affecting miners, construction workers, foundry workers, and others in dusty trades. However, stone fabricators with longer careers may develop this form, particularly those who worked with natural stone before engineered stone dominated the market.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Secondary Exposure Cases Affecting Family Members</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Family members exposed to silica dust carried home on workers' clothing may develop respiratory conditions requiring legal action. These "take-home" exposure cases extend employer liability beyond the workplace to include failures to provide changing facilities, shower rooms, and work clothes laundering that would prevent contamination from leaving jobsites.
                  </p>
                </div>
              </div>
            </Card>

            {/* Legal Process Card */}
            <Card className="content-card p-8">
              <h2 className="text-3xl font-bold mb-6">Our Legal Process</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Initial Case Evaluation and Medical Documentation</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The legal process begins with comprehensive case evaluation examining medical conditions, exposure history, and potential claims across all available legal avenues. We review complete medical records documenting diagnosis, treatment, current impairment, and prognosis. Pulmonary function tests establish baseline respiratory capacity and track decline over time.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Workers' Compensation Proceedings</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    California workers' compensation provides immediate medical treatment and temporary disability benefits without requiring fault proof, making it the first line of support for injured workers. We file claims with the Workers' Compensation Appeals Board initiating benefits while preserving all rights to future benefits as disease progresses.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Third-Party Civil Litigation Strategy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Beyond workers' compensation, third-party claims target entities other than direct employers whose negligence contributed to dangerous exposures. General contractors on construction sites bear responsibility for subcontractor employee safety under retained control doctrine. Property owners who knew or should have known about hazardous conditions share liability.
                  </p>
                </div>
              </div>
            </Card>

            {/* Compensation Card */}
            <Card className="content-card p-8">
              <h2 className="text-3xl font-bold mb-6">Comprehensive Compensation</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Silicosis inflicts devastating physical, emotional, and financial impacts that deserve comprehensive compensation addressing all losses throughout victims' shortened lives. Damage calculations must account for immediate medical needs, lifetime care requirements, destroyed earning capacity, and profound suffering accompanying this preventable occupational disease.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Medical Expenses</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Specialist consultations and diagnostics</li>
                    <li>• Regular monitoring and pulmonary function tests</li>
                    <li>• Oxygen therapy and breathing treatments</li>
                    <li>• Lung transplant evaluation and surgery</li>
                    <li>• End-of-life care and palliative treatment</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Economic Losses</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Lost wages and earning capacity</li>
                    <li>• Reduced life expectancy calculations</li>
                    <li>• Disability and workers' compensation</li>
                    <li>• Vocational rehabilitation costs</li>
                    <li>• Pain and suffering damages</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Call to Action */}
            <Card className="content-card p-8 text-center bg-primary/5 border-primary/20">
              <h2 className="text-3xl font-bold mb-6">Protect Your Rights in Silicosis Cases</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Silicosis can develop years after exposure and is often progressive. Early legal intervention is crucial to preserve evidence and protect your rights against employers and equipment manufacturers who failed to provide adequate protection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8 py-6">
                  <Link to="/case-evaluation">Get Free Case Evaluation</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Link to="/schedule-consultation">Schedule Consultation</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SilicosisInjuries;