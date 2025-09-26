import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  FileText, 
  Users, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  AlertTriangle,
  Shield,
  Scale,
  Stethoscope
} from 'lucide-react';
import heroBackground from '@/assets/mass-torts-education-hero.jpg';
import SEO from '@/components/SEO';

gsap.registerPlugin(ScrollTrigger);

const MasseTortsEducation: React.FC = () => {
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

  const educationTopics = [
    {
      title: "Understanding Mass Torts",
      description: "Learn the fundamental concepts of mass tort litigation and how it differs from other legal actions.",
      icon: Scale,
      topics: [
        "What constitutes a mass tort",
        "Types of mass tort cases",
        "Legal requirements and standards",
        "Differences from class actions"
      ]
    },
    {
      title: "Common Mass Tort Types",
      description: "Explore the most common categories of mass tort cases and their characteristics.",
      icon: FileText,
      topics: [
        "Pharmaceutical drug injuries",
        "Medical device defects",
        "Environmental contamination",
        "Consumer product liability"
      ]
    },
    {
      title: "Legal Process & Timeline",
      description: "Understand the step-by-step process of mass tort litigation from filing to resolution.",
      icon: Clock,
      topics: [
        "Initial case evaluation",
        "Investigation and discovery",
        "MDL consolidation process",
        "Settlement negotiations"
      ]
    },
    {
      title: "Rights & Compensation",
      description: "Learn about your legal rights and the types of compensation available in mass tort cases.",
      icon: Shield,
      topics: [
        "Victim rights and protections",
        "Types of damages available",
        "Compensation calculation methods",
        "Settlement vs. trial options"
      ]
    }
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <SEO 
        title="Mass Torts Education & Legal Guidance | Trembach Law Firm"
        description="Comprehensive educational resources about mass tort litigation, legal rights, compensation, and the litigation process. Learn about pharmaceutical, medical device, and environmental mass torts."
        canonical="/mass-torts-education"
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
            Mass Torts Education & Legal Guidance
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Understanding your rights and the legal process in mass tort litigation
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-12 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Educational Resources</h3>
              <p className="text-sm text-muted-foreground">Comprehensive guides and materials</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Legal Process</h3>
              <p className="text-sm text-muted-foreground">Step-by-step litigation guidance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Rights Protection</h3>
              <p className="text-sm text-muted-foreground">Understanding your legal rights</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Expert Support</h3>
              <p className="text-sm text-muted-foreground">Professional legal guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div ref={cardsRef} className="space-y-12">
            
            {/* Education Topics Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {educationTopics.map((topic, index) => (
                <Card key={index} className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-3 group-hover:text-primary transition-colors">
                      <topic.icon className="w-6 h-6 text-primary" />
                      {topic.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-lg">{topic.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {topic.topics.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-lg">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Detailed Educational Content */}
            <Card className="glass-card border-primary/10 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl text-primary mb-4">Mass Tort Litigation: A Comprehensive Guide</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">What Are Mass Torts?</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Mass torts are civil lawsuits involving multiple plaintiffs who have suffered similar injuries or damages from the same defendant's actions or products. These cases allow individual victims to maintain their own claims while benefiting from shared resources, evidence, and legal strategies.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Unlike class action lawsuits where all plaintiffs are treated as a single group, mass tort litigation preserves each individual's right to seek compensation based on their specific damages and circumstances.
                  </p>
                </div>

                <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                  <h4 className="text-xl font-semibold text-primary mb-3">Key Characteristics of Mass Torts:</h4>
                  <ul className="space-y-2 text-lg">
                    <li>• Multiple victims with similar injuries from the same source</li>
                    <li>• Individual case preservation for unique damages</li>
                    <li>• Shared discovery and expert witnesses</li>
                    <li>• Coordinated litigation strategies</li>
                    <li>• Potential for individual or group settlements</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">Common Types of Mass Tort Cases</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-primary">Pharmaceutical Mass Torts</h4>
                      <p className="text-lg">
                        These cases involve dangerous side effects from prescription medications that were not adequately disclosed or tested. Examples include birth defects, organ damage, cancer, and other serious health complications.
                      </p>
                      <ul className="space-y-1 text-lg">
                        <li>• Antidepressants causing birth defects</li>
                        <li>• Blood thinners causing bleeding</li>
                        <li>• Diabetes medications causing cancer</li>
                        <li>• Pain medications causing addiction</li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-primary">Medical Device Mass Torts</h4>
                      <p className="text-lg">
                        Cases involving defective medical devices that cause patient harm through design flaws, manufacturing defects, or inadequate warnings about risks and complications.
                      </p>
                      <ul className="space-y-1 text-lg">
                        <li>• Hip replacement failures</li>
                        <li>• Hernia mesh complications</li>
                        <li>• Pacemaker malfunctions</li>
                        <li>• Surgical robot injuries</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">The Legal Process</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Mass tort litigation follows a structured process designed to efficiently handle multiple related cases while preserving individual rights and compensation opportunities.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-primary">Case Evaluation & Investigation</h4>
                        <p className="text-lg">Medical records review, causation analysis, and damage assessment to determine case viability.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-primary">Filing & Consolidation</h4>
                        <p className="text-lg">Individual lawsuits are filed and often consolidated into Multidistrict Litigation (MDL) for efficiency.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-primary">Discovery & Evidence</h4>
                        <p className="text-lg">Shared discovery process where evidence is gathered, experts testify, and scientific studies are analyzed.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-primary">Settlement or Trial</h4>
                        <p className="text-lg">Cases may settle through global negotiations or proceed to individual trials for resolution.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-red-800 text-lg mb-2">Important Time Limits</h4>
                      <p className="text-red-700 text-lg leading-relaxed">
                        California has strict statutes of limitations for mass tort cases. These deadlines vary depending on the type of case and when you discovered your injury. Don't wait to seek legal counsel as missing these deadlines could forever bar your right to compensation.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">Your Rights in Mass Tort Litigation</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-xl font-semibold text-primary mb-3">Individual Rights</h4>
                      <ul className="space-y-2 text-lg">
                        <li>• Right to individual case evaluation</li>
                        <li>• Right to individualized compensation</li>
                        <li>• Right to reject settlement offers</li>
                        <li>• Right to proceed to individual trial</li>
                        <li>• Right to change attorneys</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-primary mb-3">Collective Benefits</h4>
                      <ul className="space-y-2 text-lg">
                        <li>• Shared discovery costs and evidence</li>
                        <li>• Access to expert witnesses</li>
                        <li>• Stronger negotiating position</li>
                        <li>• Coordinated legal strategies</li>
                        <li>• Faster resolution through efficiency</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="glass-card border-primary/20 bg-gradient-to-br from-primary/15 to-primary/5 backdrop-blur-md shadow-2xl">
              <CardContent className="pt-8 text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">Need Legal Guidance for Your Mass Tort Case?</h3>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Our experienced mass tort attorneys can help you understand your rights and navigate the complex legal process. Get a free consultation to discuss your case.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 group"
                    onClick={() => window.location.href = '/mass-torts-case-evaluation'}
                  >
                    Get Free Case Evaluation
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    Call (818) 123-4567
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MasseTortsEducation;