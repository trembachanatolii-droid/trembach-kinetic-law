import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Users, 
  Shield, 
  Scale,
  FileText,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Gavel,
  Building
} from 'lucide-react';
import heroBackground from '@/assets/class-actions-legal-guidance-hero.jpg';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';

gsap.registerPlugin(ScrollTrigger);

const ClassActionsLegalGuidance: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate content cards with staggered entrance
      gsap.fromTo(cardsRef.current?.children || [],
        { 
          opacity: 0, 
          y: 80,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const guides = [
    {
      title: "Understanding Class Action Litigation",
      description: "Comprehensive guide to class action cases, legal requirements, and litigation process in California.",
      icon: Gavel,
      category: "Legal Guide"
    },
    {
      title: "Types of Class Action Cases",
      description: "Detailed overview of consumer fraud, data breaches, employment violations, and product liability cases.",
      icon: Building,
      category: "Case Types"
    },
    {
      title: "Your Rights in Class Actions",
      description: "Understanding your rights as a class member, opt-out procedures, and compensation distribution.",
      icon: Shield,
      category: "Legal Rights"
    },
    {
      title: "California Consumer Protection Laws",
      description: "Overview of California statutes protecting consumers in class action lawsuits.",
      icon: Scale,
      category: "California Law"
    }
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <SEO 
        title="Class Action Legal Guidance | California Consumer Rights Education | Trembach Law Firm"
        description="Comprehensive legal guidance for class action lawsuits in California. Understand your rights, legal processes, and consumer protection laws."
        canonical="/class-actions-legal-guidance"
      />
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Class Action Legal Guidance
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Comprehensive legal education and guidance for California class action cases
          </p>
        </div>
      </section>

      <GoBack />

      {/* Quick Access Tools */}
      <section className="py-12 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-2 text-lg">Legal Guides</h3>
              <p className="text-sm text-muted-foreground">Comprehensive legal information</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-2 text-lg">Know Your Rights</h3>
              <p className="text-sm text-muted-foreground">Understand your legal protections</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-2 text-lg">Legal Process</h3>
              <p className="text-sm text-muted-foreground">Step-by-step litigation guidance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-2 text-lg">Class Member Support</h3>
              <p className="text-sm text-muted-foreground">Guidance for class participants</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div ref={cardsRef} className="space-y-12">
            
            {/* Legal Guides */}
            <div>
              <h2 className="text-4xl font-bold text-center mb-16 text-primary">Essential Class Action Legal Guides</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {guides.map((guide, index) => (
                  <Card key={index} className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <guide.icon className="w-8 h-8 text-primary" />
                        <Badge variant="outline" className="text-foreground">{guide.category}</Badge>
                      </div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {guide.title}
                      </CardTitle>
                      <p className="text-muted-foreground text-lg">{guide.description}</p>
                    </CardHeader>
                    <CardContent>
                      <Button 
                        className="w-full group-hover:shadow-lg transition-all"
                        onClick={() => window.location.href = '/class-actions-case-evaluation'}
                      >
                        Read Guide
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Understanding Class Actions */}
            <Card className="glass-card border-primary/10 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl text-primary mb-4">What Are Class Actions?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed">
                    Class action lawsuits are legal proceedings where one or more plaintiffs represent a larger group of people 
                    with similar claims against the same defendant. This legal mechanism allows efficient resolution of cases 
                    where individual lawsuits would be impractical due to small individual damages or high litigation costs.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    In California, class actions serve as powerful tools for consumer protection, employment rights enforcement, 
                    and corporate accountability. They enable victims to pool resources, share litigation costs, and achieve 
                    consistent outcomes for similarly situated individuals.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-primary mb-4">Class Action Benefits</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-lg">Cost-effective litigation for individuals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-lg">Consistent outcomes for similar claims</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-lg">Efficient judicial resource utilization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-lg">Deterrent effect on corporate misconduct</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-primary mb-4">Your Class Member Rights</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-lg">Right to notice about the lawsuit</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-lg">Right to opt out and file individual claims</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-lg">Right to object to proposed settlements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-lg">Right to compensation if the case succeeds</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* California Consumer Protection */}
            <Card className="glass-card border-primary/10 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl text-primary mb-4">California Consumer Protection Laws</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-foreground">
                    California has some of the strongest consumer protection laws in the nation, providing multiple avenues 
                    for class action relief. These statutes create powerful remedies for victims of corporate misconduct.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-primary/10 p-4 rounded-lg">
                        <h4 className="font-semibold text-primary text-lg mb-2">Unfair Competition Law (UCL)</h4>
                        <p className="text-sm text-muted-foreground">Business & Professions Code § 17200 - Prohibits unlawful, unfair, or fraudulent business practices</p>
                      </div>

                      <div className="bg-primary/10 p-4 rounded-lg">
                        <h4 className="font-semibold text-primary text-lg mb-2">False Advertising Law</h4>
                        <p className="text-sm text-muted-foreground">Business & Professions Code § 17500 - Prohibits untrue or misleading advertising statements</p>
                      </div>

                      <div className="bg-primary/10 p-4 rounded-lg">
                        <h4 className="font-semibold text-primary text-lg mb-2">Consumer Legal Remedies Act</h4>
                        <p className="text-sm text-muted-foreground">Civil Code § 1750 - Protects consumers against unfair and deceptive practices</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-primary/10 p-4 rounded-lg">
                        <h4 className="font-semibold text-primary text-lg mb-2">California Consumer Privacy Act</h4>
                        <p className="text-sm text-muted-foreground">Civil Code § 1798.150 - Creates private right of action for data breaches</p>
                      </div>

                      <div className="bg-primary/10 p-4 rounded-lg">
                        <h4 className="font-semibold text-primary text-lg mb-2">Private Attorney General Act</h4>
                        <p className="text-sm text-muted-foreground">Labor Code § 2698 - Allows employees to sue for labor code violations</p>
                      </div>

                      <div className="bg-primary/10 p-4 rounded-lg">
                        <h4 className="font-semibold text-primary text-lg mb-2">Song-Beverly Consumer Warranty Act</h4>
                        <p className="text-sm text-muted-foreground">Civil Code § 1790 - California's Lemon Law for defective products</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card className="glass-card border-primary/10 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-md shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl text-primary mb-4">Get Professional Legal Help</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold text-primary text-lg mb-2">Case Evaluation</h4>
                    <p className="text-muted-foreground mb-4">Get a free evaluation to determine if you have a valid class action case</p>
                    <Button 
                      className="w-full"
                      onClick={() => window.location.href = '/class-actions-case-evaluation'}
                    >
                      Start Evaluation
                    </Button>
                  </div>

                  <div className="text-center">
                    <Scale className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold text-primary text-lg mb-2">Legal Consultation</h4>
                    <p className="text-muted-foreground mb-4">Speak directly with experienced class action attorneys</p>
                    <Button 
                      variant="outline"
                      className="w-full"
                      onClick={() => window.location.href = 'tel:8181234567'}
                    >
                      Call (818) 123-4567
                    </Button>
                  </div>

                  <div className="text-center">
                    <Building className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold text-primary text-lg mb-2">Additional Resources</h4>
                    <p className="text-muted-foreground mb-4">Access tools, calculators, and educational materials</p>
                    <Button 
                      variant="outline"
                      className="w-full"
                      onClick={() => window.location.href = '/class-actions-resources'}
                    >
                      View Resources
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Legal Disclaimer */}
            <Card className="glass-card border-muted bg-muted/50">
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    <p className="mb-2">
                      <strong>Legal Disclaimer:</strong> This information is provided for educational purposes only and does not constitute legal advice. 
                      Every case is unique and requires individual evaluation.
                    </p>
                    <p>
                      No attorney-client relationship is formed by reading this content. For specific legal advice regarding your situation, 
                      consult with a qualified attorney. Prior results do not guarantee a similar outcome.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClassActionsLegalGuidance;