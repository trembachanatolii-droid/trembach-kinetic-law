import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Users, Shield, Award, Clock, Heart, Star, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import silicosisHero from '@/assets/practice-areas/silicosis-injuries.jpg';
import stoneFabricationImage from '@/assets/practice-areas/silicosis-stone-fabrication.jpg';
import lungDamageImage from '@/assets/practice-areas/silicosis-lung-damage.jpg';

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
            
            {/* Comprehensive Overview */}
            <Card className="content-card p-8">
              <h2 className="text-3xl font-bold mb-6">Understanding Silicosis in the Modern California Workplace</h2>
              <div className="mb-6">
                <img 
                  src={stoneFabricationImage} 
                  alt="Stone fabrication workshop with engineered stone slabs and silica dust"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                The epidemic of silicosis among California's stone fabrication workers represents one of the most devastating occupational health crises of the 21st century. Young workers, many in their 20s and 30s, face death sentences from an entirely preventable disease that employers could have avoided through basic safety measures. At Trembach Law Firm, we leverage former defense attorney experience to pursue maximum compensation for workers whose lungs have been destroyed by crystalline silica exposure.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Silicosis develops through a devastating biological process that begins when workers inhale microscopic crystalline silica particles. These particles, measuring less than 10 microns in diameter, penetrate deep into the lungs' alveoli where oxygen exchange occurs. Once embedded in lung tissue, these particles trigger an inflammatory cascade that ultimately leads to progressive scarring, respiratory failure, and often death.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                California's unique position in this crisis stems from multiple factors. The state's construction boom, particularly in residential remodeling, drives enormous demand for engineered stone countertops. These materials contain up to 95% crystalline silica, compared to approximately 30% in natural granite. The concentration of fabrication shops in industrial areas of Los Angeles County, Orange County, and the Inland Empire creates exposure hotspots.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The demographic characteristics of affected workers add layers of complexity to the crisis. The majority are Latino immigrants, many from indigenous communities in Mexico and Central America. Language barriers, fear of deportation, and economic pressure to maintain employment prevent many from reporting unsafe conditions or seeking medical attention when symptoms develop.
              </p>
            </Card>

            {/* Critical Information Section */}
            <Card className="content-card p-8">
              <h2 className="text-3xl font-bold mb-6">Critical Information Every Silicosis Victim Must Understand</h2>
              <div className="mb-6">
                <img 
                  src={lungDamageImage} 
                  alt="Medical chest X-ray showing silicosis lung damage and scarring"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">The Irreversible Nature of Silicosis</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The irreversible nature of silicosis fundamentally shapes every aspect of legal claims and life planning for affected workers and their families. Unlike many occupational injuries that heal with time and treatment, silicosis only progresses. Once crystalline silica embeds in lung tissue, no medical treatment can remove it or reverse the scarring process. This progression continues even after exposure ceases, meaning workers who leave dusty environments still face worsening disease.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Medical Progression Patterns</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Medical progression follows predictable patterns that affect claim valuation. Early-stage silicosis may present with mild shortness of breath and dry cough, symptoms easily dismissed as allergies or normal aging. However, medical imaging reveals the truth—nodular shadows throughout the lungs indicating permanent damage already underway. As disease advances, breathing becomes increasingly difficult. Eventually, supplemental oxygen becomes necessary, first during activity, then at rest.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Associated Conditions</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Beyond lung damage, silica exposure causes multiple associated conditions that multiply medical needs and strengthen damage claims. Silica increases lung cancer risk independent of smoking. Kidney disease, including chronic kidney disease and kidney failure requiring dialysis, links to silica exposure. Autoimmune conditions including rheumatoid arthritis, scleroderma, and lupus may be triggered by silica.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Employer Knowledge and Liability</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Employer knowledge timelines prove critical for establishing liability and potentially qualifying for enhanced benefits. Evidence that employers knew or should have known about silica dangers includes: previous workers developing lung disease, safety citations for dust violations, material safety data sheets warning about crystalline silica, industry publications discussing silicosis risks, and insurance company recommendations for dust controls. When employers ignored these warnings, they may face liability for serious and willful misconduct.
                  </p>
                </div>
              </div>
            </Card>

            {/* Comprehensive Types of Cases */}
            <Card className="content-card p-8">
              <h2 className="text-3xl font-bold mb-6">Comprehensive Representation for All Silicosis-Related Claims</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Acute Silicosis Cases from Extreme Exposures</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Acute silicosis represents the most devastating form of the disease, developing within weeks to five years after massive crystalline silica exposure. This rapidly progressive variant fills lungs with proteinaceous material similar to pulmonary alveolar proteinosis, causing severe respiratory failure often within months of symptom onset. These cases typically involve young workers who developed severe symptoms after relatively brief employment periods, sometimes just months or a few years. The extreme exposure levels required to cause acute silicosis demonstrate egregious safety failures that support claims for punitive damages beyond standard compensation.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Accelerated Silicosis from High-Level Workplace Exposures</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Accelerated silicosis develops within 5-10 years of high-level silica exposure and represents the most common form among modern engineered stone fabricators. This intermediate timeline creates unique proof challenges as workers may have changed employers multiple times, worked at various shops with different safety practices, or experienced employment gaps. Establishing exposure sources and apportioning liability among multiple potentially responsible parties requires meticulous investigation and sophisticated legal strategies.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Chronic Silicosis from Extended Lower-Level Exposures</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Chronic simple silicosis develops after 10-30 years of lower-level exposure, traditionally affecting miners, construction workers, foundry workers, and others in dusty trades. These cases demand extensive historical investigation reconstructing decades of work history across multiple employers and jobsites. Former employers may have ceased operations, changed ownership multiple times, or destroyed records. Despite these challenges, circumstantial evidence including union records, tax returns, Social Security earnings statements, and industry practices during relevant periods can establish exposure patterns supporting claims.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Mixed Dust Pneumoconiosis from Multiple Occupational Exposures</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Many workers face multiple dust exposures throughout their careers, developing mixed dust pneumoconiosis that combines silicosis with other occupational lung diseases. Construction workers encounter silica, asbestos, coal dust, and other harmful particles. Stone fabricators who previously worked in other dusty trades bring cumulative lung damage from various sources. These complex cases require sophisticated medical analysis differentiating various disease contributions and legal strategies apportioning liability among multiple exposure sources.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Secondary Exposure Cases Affecting Family Members</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Family members exposed to silica dust carried home on workers' clothing may develop respiratory conditions requiring legal action. These "take-home" exposure cases extend employer liability beyond the workplace to include failures to provide changing facilities, shower rooms, and work clothes laundering that would prevent contamination from leaving jobsites. Children who hugged dusty parents, spouses who washed contaminated clothing, and family members who shared vehicles with workers covered in silica dust all faced secondary exposure risks.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Silica-Induced Kidney Disease Claims</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Crystalline silica causes kidney disease including chronic kidney disease, glomerulonephritis, and end-stage renal disease requiring dialysis or transplantation. Workers may develop kidney disease with or without concurrent lung disease, expanding the population with viable occupational disease claims. These cases require nephrologists familiar with occupational kidney disease to establish causation.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Autoimmune Diseases Triggered by Silica Exposure</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Silica exposure triggers various autoimmune diseases including rheumatoid arthritis, scleroderma, systemic lupus erythematosus, and vasculitis. These conditions may develop independently of silicosis, meaning workers without lung disease may still have valid occupational disease claims. Autoimmune diseases cause systemic symptoms affecting joints, skin, kidneys, and other organs, requiring comprehensive medical management.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Lung Cancer Cases with Silica Exposure History</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Crystalline silica is classified as a Group 1 human carcinogen, causing lung cancer independent of silicosis. Workers with lung cancer and significant silica exposure history may have occupational disease claims even without silicosis diagnosis. These cases require careful differentiation between occupational and smoking-related cancer, often involving detailed exposure reconstruction and expert testimony about carcinogenic mechanisms and causation.
                  </p>
                </div>
              </div>
            </Card>

            {/* Legal Process Navigation */}
            <Card className="content-card p-8">
              <h2 className="text-3xl font-bold mb-6">Navigating California's Complex Legal System for Silicosis Claims</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Initial Case Evaluation and Medical Documentation</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The legal process begins with comprehensive case evaluation examining medical conditions, exposure history, and potential claims across all available legal avenues. We review complete medical records documenting diagnosis, treatment, current impairment, and prognosis. Pulmonary function tests establish baseline respiratory capacity and track decline over time. High-resolution CT scans reveal characteristic silicotic nodules and fibrosis extent. We coordinate with pulmonologists experienced in occupational lung disease, ensuring accurate diagnosis and comprehensive documentation that will withstand insurance company challenges.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Workers' Compensation Proceedings</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    California workers' compensation provides immediate medical treatment and temporary disability benefits without requiring fault proof, making it the first line of support for injured workers. We file claims with the Workers' Compensation Appeals Board initiating benefits while preserving all rights to future benefits as disease progresses. Proper medical evidence presentation proves essential for maximizing compensation and ensuring ongoing treatment authorization.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Third-Party Civil Litigation Strategy</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Beyond workers' compensation, third-party claims target entities other than direct employers whose negligence contributed to dangerous exposures. General contractors on construction sites bear responsibility for subcontractor employee safety under retained control doctrine. Property owners who knew or should have known about hazardous conditions share liability. Equipment manufacturers who sold cutting tools and machinery without adequate dust controls face product liability claims.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Product Liability Claims Against Manufacturers</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The role of product manufacturers in the silicosis epidemic extends beyond just supplying materials. Engineered stone manufacturers aggressively marketed their products' aesthetic qualities while downplaying or omitting health hazards. Tool and equipment manufacturers sold cutting and grinding equipment specifically for stone fabrication without adequate dust controls or warnings. These companies may face product liability claims for designing, manufacturing, or distributing unreasonably dangerous products.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Insurance Coverage Complex Litigation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Insurance coverage complexities affect recovery potential. Multiple policies may provide coverage including workers' compensation, general liability, excess coverage, and historical policies from years past when exposure occurred. However, insurance companies aggressively dispute coverage, arguing various exclusions and limitations. Pollution exclusions, employer liability limitations, and aggregate limits all become battlegrounds. Understanding policy language and coverage litigation strategies becomes essential for maximizing recovery.
                  </p>
                </div>
              </div>
            </Card>

            {/* Comprehensive Compensation Analysis */}
            <Card className="content-card p-8">
              <h2 className="text-3xl font-bold mb-6">Comprehensive Compensation and Future Medical Needs</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Silicosis inflicts devastating physical, emotional, and financial impacts that deserve comprehensive compensation addressing all losses throughout victims' shortened lives. Damage calculations must account for immediate medical needs, lifetime care requirements, destroyed earning capacity, and profound suffering accompanying this preventable occupational disease.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Future medical needs projection requires sophisticated analysis. Silicosis treatment costs escalate dramatically as disease progresses. Initial monitoring and medications may cost thousands annually. Supplemental oxygen adds equipment and supply expenses. Hospitalizations for infections or respiratory failure cost tens of thousands per episode. Lung transplantation, the only definitive treatment, exceeds one million dollars including evaluation, surgery, and first-year follow-up.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Medical Expenses</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Specialist consultations and diagnostics</li>
                    <li>• Regular monitoring and pulmonary function tests</li>
                    <li>• Oxygen therapy and breathing treatments</li>
                    <li>• Lung transplant evaluation and surgery</li>
                    <li>• End-of-life care and palliative treatment</li>
                    <li>• Medications and medical equipment</li>
                    <li>• Home healthcare and nursing care</li>
                    <li>• Transportation to medical appointments</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Economic and Personal Losses</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Lost wages and earning capacity</li>
                    <li>• Reduced life expectancy calculations</li>
                    <li>• Disability and workers' compensation</li>
                    <li>• Vocational rehabilitation costs</li>
                    <li>• Pain and suffering damages</li>
                    <li>• Loss of life enjoyment</li>
                    <li>• Family relationship impacts</li>
                    <li>• Punitive damages for misconduct</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Family and Cultural Considerations</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Family impacts extend far beyond lost income. Spouses become caregivers, sacrificing careers to provide support. Children lose parental participation in their lives during crucial developmental years. Extended families depending on workers' remittances face financial crisis. Cultural factors significantly impact how silicosis affects California's predominantly Latino fabricator workforce, requiring sensitive, culturally competent legal representation.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Government Benefits Coordination</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Government benefits beyond workers' compensation provide crucial support but require careful coordination. Social Security Disability provides monthly income and Medicare coverage for totally disabled workers. California State Disability Insurance offers temporary partial wage replacement. Medi-Cal covers medical expenses for low-income workers. Veterans exposed during military service may qualify for VA benefits. Maximizing total benefits while avoiding improper offsets requires understanding complex regulations.
                  </p>
                </div>
              </div>
            </Card>

            {/* Call to Action */}
            <Card className="content-card p-8 text-center bg-primary/5 border-primary/20">
              <h2 className="text-3xl font-bold mb-6">Protect Your Rights in Silicosis Cases</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Silicosis can develop years after exposure and is often progressive. Early legal intervention is crucial to preserve evidence and protect your rights against employers and equipment manufacturers who failed to provide adequate protection. Understanding your rights and options becomes crucial for protecting your future and ensuring your family receives the compensation they deserve.
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