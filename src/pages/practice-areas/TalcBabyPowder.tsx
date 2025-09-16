import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import talcHero from '@/assets/practice-areas/talc-baby-powder.jpg';

gsap.registerPlugin(ScrollTrigger);

const TalcBabyPowder = () => {
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
          style={{ backgroundImage: `url(${talcHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/75" />
        
        <div className="relative z-10 container mx-auto px-8 py-20">
          <div className="max-w-4xl">
            <div className="text-6xl mb-6">🍼</div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6">
              California Talc Cancer Lawyers
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
              Fighting for Victims of Contaminated Baby Powder
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-4xl">
              Pursuing Justice for Ovarian Cancer and Mesothelioma Victims Throughout All 58 California Counties
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
              <h2 className="text-3xl font-bold mb-6">The Talc Cancer Crisis</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                For generations, talcum powder was marketed as the epitome of purity and safety, a product gentle enough for babies and recommended for women's most intimate hygiene needs. Today, thousands of California women face ovarian cancer diagnoses, and both men and women confront mesothelioma, after decades of using products contaminated with asbestos and linked to cancer development.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                The betrayal runs deeper than simple product defects. Internal documents reveal manufacturers tested their talc, found asbestos contamination, and chose to hide these results while specifically marketing powder for feminine hygiene use. This targeted marketing to women for genital use, despite known cancer risks, represents one of the most egregious examples of corporate profits over consumer safety in modern history.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                California women trusted these products for decades, using them after bathing, on sanitary pads, and for daily freshness, never knowing each application potentially planted seeds of future cancer. At Trembach Law Firm, we leverage former defense attorney experience to expose how manufacturers knew their talc contained cancer-causing asbestos yet continued aggressive marketing while concealing deadly risks.
              </p>
            </Card>

            {/* Types of Cases Card */}
            <Card className="content-card p-8">
              <h2 className="text-3xl font-bold mb-6">Types of Talc Cancer Cases We Handle</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Ovarian Cancer from Genital Talc Use</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Ovarian cancer cases form the largest category of talc litigation, affecting women who used powder for feminine hygiene over years or decades. Regular application to underwear, sanitary pads, or directly to the genital area created chronic exposure allowing talc particles to travel through the reproductive tract. The inflammatory response to these foreign particles, combined with potential asbestos contamination, triggered cellular changes leading to cancer development.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Mesothelioma from Contaminated Talc</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Mesothelioma cases involve cancer of the mesothelium, the protective lining surrounding lungs, heart, or abdomen, caused by asbestos fibers in contaminated talc. Regular talc powder use created airborne asbestos exposure during application, particularly when powder was shaken from containers creating dust clouds. Parents powdering babies, women applying powder after bathing, and barbers using talc on customers all faced inhalation exposure.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Fallopian Tube and Primary Peritoneal Cancer</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    These related cancers affecting reproductive system tissues share similar causation mechanisms with ovarian cancer from talc exposure. Fallopian tube cancer, though rarer than ovarian cancer, follows similar development patterns from talc particle migration and inflammation. Primary peritoneal cancer affects the abdominal lining, developing through similar inflammatory processes.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Wrongful Death Claims</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Fatal cancer cases allow surviving family members to pursue wrongful death claims for economic and non-economic losses. Economic damages include lost financial support, household services value, and funeral expenses. Non-economic damages compensate for loss of love, companionship, guidance, and consortium.
                  </p>
                </div>
              </div>
            </Card>

            {/* Scientific Evidence Card */}
            <Card className="content-card p-8">
              <h2 className="text-3xl font-bold mb-6">Scientific Connection to Cancer</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                The scientific connection between talc use and cancer has strengthened considerably over the past several decades. Epidemiological studies consistently show increased ovarian cancer risk among women who used talcum powder for feminine hygiene. The proposed mechanism involves talc particles traveling through the reproductive tract, causing inflammation that eventually leads to cancerous changes.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                When talc is contaminated with asbestos, the cancer risk multiplies, as asbestos is a known carcinogen causing mesothelioma and other cancers. Historical product testing reveals manufacturers knew their talc contained asbestos yet continued marketing without warnings. Internal memoranda discuss contamination findings and debates about disclosure.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Key Evidence</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Internal company testing showing asbestos contamination</li>
                    <li>• Marketing materials targeting intimate use</li>
                    <li>• Scientific studies linking talc to cancer</li>
                    <li>• Pathology reports showing talc particles in tissue</li>
                    <li>• Expert testimony on causation mechanisms</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Corporate Concealment</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Deliberate hiding of contamination results</li>
                    <li>• Failure to warn consumers of cancer risks</li>
                    <li>• Manipulation of safety testing protocols</li>
                    <li>• Targeted marketing despite known dangers</li>
                    <li>• Decades of regulatory deception</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Legal Process Card */}
            <Card className="content-card p-8">
              <h2 className="text-3xl font-bold mb-6">Our Legal Process</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Case Evaluation and Medical Review</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Initial case evaluation begins with comprehensive review of medical records documenting cancer diagnosis, treatment, and prognosis. Pathology reports receive particular scrutiny for evidence of talc particles in tissue samples. We compile detailed exposure histories through client interviews, focusing on powder use patterns, brands, frequency, and application methods.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Expert Medical Consultation</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Medical expert consultation forms the foundation of causation evidence. Oncologists explain cancer development mechanisms and link talc exposure to specific cancer types. Epidemiologists analyze statistical associations between talc use and cancer risk. Pathologists identify talc particles in tissue samples when available. Industrial hygienists reconstruct exposure levels from product use patterns.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Investigation and Discovery</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lawsuit filing triggers formal discovery processes revealing crucial evidence. Document requests target internal testing data, marketing strategies, safety discussions, and insurance information. Depositions of corporate representatives expose knowledge of contamination and cancer risks. Former employee whistleblowers provide insider testimony about concealment. Electronic discovery of emails and databases reveals smoking-gun evidence of corporate misconduct.
                  </p>
                </div>
              </div>
            </Card>

            {/* Compensation Card */}
            <Card className="content-card p-8">
              <h2 className="text-3xl font-bold mb-6">Comprehensive Compensation</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Talc cancer victims deserve comprehensive compensation addressing all losses from preventable disease caused by corporate greed. Medical expenses form the foundation of economic damages, beginning with diagnostic procedures and extending through end-of-life care. Cancer treatment costs routinely exceed $200,000 annually, with some treatments reaching $30,000 per month.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Economic Damages</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• All medical treatment and surgery costs</li>
                    <li>• Chemotherapy and radiation therapy</li>
                    <li>• Lost wages and earning capacity</li>
                    <li>• Future medical care needs</li>
                    <li>• Prescription medications and equipment</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Non-Economic Damages</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Pain and suffering from cancer</li>
                    <li>• Emotional trauma and psychological impact</li>
                    <li>• Loss of life enjoyment and activities</li>
                    <li>• Punitive damages for corporate misconduct</li>
                    <li>• Family impact and relationship losses</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Call to Action */}
            <Card className="content-card p-8 text-center bg-primary/5 border-primary/20">
              <h2 className="text-3xl font-bold mb-6">Seek Justice for Talc-Related Cancer</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Scientific evidence links talc use to serious cancers. Manufacturers knew of these risks but failed to warn consumers. We pursue compensation for medical expenses, lost income, and the devastating impact of preventable cancers through comprehensive liability theory and damages modeling.
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

export default TalcBabyPowder;