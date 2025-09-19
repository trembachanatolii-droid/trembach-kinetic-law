import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Calculator, 
  Stethoscope, 
  Phone, 
  Mail, 
  Clock, 
  Users, 
  Shield, 
  CheckCircle2, 
  ArrowRight,
  Download,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import heroBackground from '@/assets/mass-torts-resources-hero.jpg';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';

gsap.registerPlugin(ScrollTrigger);

const MasseTortsResources: React.FC = () => {
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

  const resources = [
    {
      title: "Mass Torts Compensation Calculator",
      description: "Get an estimate of potential compensation for your mass tort case based on specific circumstances.",
      icon: Calculator,
      action: "Calculate Now",
      link: "/mass-torts-compensation-calculator",
      category: "Tools"
    },
    {
      title: "Medical Guidance & Specialists",
      description: "Connect with medical professionals who understand mass tort injuries and treatment options.",
      icon: Stethoscope,
      action: "Find Specialists",
      link: "/mass-torts-medical-guidance",
      category: "Medical"
    },
    {
      title: "Free Case Evaluation",
      description: "Complete confidential evaluation to determine if you have a valid mass tort case.",
      icon: FileText,
      action: "Start Evaluation",
      link: "/mass-torts-case-evaluation",
      category: "Legal"
    },
    {
      title: "Educational Materials",
      description: "Comprehensive guides about mass tort litigation, legal rights, and the litigation process.",
      icon: BookOpen,
      action: "Learn More",
      link: "/mass-torts-education",
      category: "Education"
    }
  ];

  const legalResources = [
    {
      title: "Understanding Mass Tort Litigation",
      description: "Comprehensive guide to mass tort cases, legal requirements, and litigation process.",
      type: "Guide"
    },
    {
      title: "Types of Mass Tort Cases",
      description: "Detailed overview of pharmaceutical, medical device, environmental, and product liability cases.",
      type: "Reference"
    },
    {
      title: "Legal Rights & Compensation",
      description: "Understanding your rights as a mass tort victim and types of compensation available.",
      type: "Guide"
    },
    {
      title: "Statute of Limitations Guide",
      description: "Important deadlines and time limits for filing mass tort cases in California.",
      type: "Alert"
    }
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <SEO 
        title="Mass Torts Resources & Tools | Legal Guidance | Trembach Law Firm"
        description="Comprehensive mass tort resources including compensation calculators, medical guidance, case evaluation tools, and educational materials for California victims."
        canonical="/mass-torts-resources"
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
            Mass Torts Resources & Tools
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Comprehensive resources and tools to help you understand and navigate mass tort litigation
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
                <Calculator className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Calculators</h3>
              <p className="text-sm text-muted-foreground">Estimate potential compensation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Medical Support</h3>
              <p className="text-sm text-muted-foreground">Connect with specialists</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Legal Tools</h3>
              <p className="text-sm text-muted-foreground">Case evaluation and guidance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Education</h3>
              <p className="text-sm text-muted-foreground">Legal guides and information</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Resources */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div ref={cardsRef} className="space-y-12">
            
            {/* Primary Tools */}
            <div>
              <h2 className="text-4xl font-bold text-center mb-16 text-primary">Essential Mass Tort Tools</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {resources.map((resource, index) => (
                  <Card key={index} className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <resource.icon className="w-8 h-8 text-primary" />
                        <Badge variant="outline">{resource.category}</Badge>
                      </div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {resource.title}
                      </CardTitle>
                      <p className="text-muted-foreground text-lg">{resource.description}</p>
                    </CardHeader>
                    <CardContent>
                      <Button 
                        className="w-full group-hover:shadow-lg transition-all"
                        onClick={() => window.location.href = resource.link}
                      >
                        {resource.action}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Legal Resources */}
            <div>
              <h2 className="text-4xl font-bold text-center mb-16 text-primary">Legal Resources & Guides</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {legalResources.map((resource, index) => (
                  <Card key={index} className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{resource.type}</Badge>
                        <Download className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {resource.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{resource.description}</p>
                      <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <FileText className="w-4 h-4 mr-2" />
                        View Resource
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Resources */}
            <div>
              <h2 className="text-4xl font-bold text-center mb-16 text-primary">Get Professional Help</h2>
              <div className="grid md:grid-cols-3 gap-8">
                
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center">
                    <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">Phone Consultation</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <p className="text-muted-foreground">Speak directly with our experienced mass tort attorneys</p>
                    <div className="space-y-2">
                      <p className="font-semibold text-primary">Available 24/7</p>
                      <p className="text-sm text-muted-foreground">Free initial consultation</p>
                    </div>
                    <Button 
                      className="w-full"
                      onClick={() => window.location.href = 'tel:8181234567'}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call (818) 123-4567
                    </Button>
                  </CardContent>
                </Card>

                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center">
                    <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">Email Consultation</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <p className="text-muted-foreground">Send us detailed information about your case</p>
                    <div className="space-y-2">
                      <p className="font-semibold text-primary">24-48 Hour Response</p>
                      <p className="text-sm text-muted-foreground">Confidential case review</p>
                    </div>
                    <Button 
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                      onClick={() => window.location.href = 'mailto:info@trembachlawfirm.com?subject=Mass Tort Case Inquiry'}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </Button>
                  </CardContent>
                </Card>

                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center">
                    <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">Online Evaluation</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <p className="text-muted-foreground">Complete our comprehensive case evaluation form</p>
                    <div className="space-y-2">
                      <p className="font-semibold text-primary">Detailed Assessment</p>
                      <p className="text-sm text-muted-foreground">Professional case review</p>
                    </div>
                    <Button 
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
                      onClick={() => window.location.href = '/mass-torts-case-evaluation'}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Start Evaluation
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* FAQ Resources */}
            <Card className="glass-card border-primary/10 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl text-primary mb-4">Frequently Requested Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-4">Legal Information</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-lg">Understanding your legal rights in mass tort cases</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-lg">California statute of limitations for mass torts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-lg">Types of compensation available</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-lg">How to preserve evidence for your case</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-4">Medical Resources</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-lg">Finding specialists for mass tort injuries</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-lg">Understanding medical evidence requirements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-lg">Coordinating treatment and legal representation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-lg">Managing medical expenses during litigation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Resources */}
            <Card className="glass-card border-red-200 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20">
              <CardContent className="pt-8">
                <div className="text-center">
                  <Clock className="w-16 h-16 text-red-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-red-600 mb-4">Time-Sensitive Legal Matters</h3>
                  <p className="text-lg text-red-700 mb-6 max-w-2xl mx-auto">
                    If you have recently been diagnosed with an injury that may be related to a mass tort, time is critical. California statutes of limitations may limit your ability to file a claim.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white/50 p-4 rounded-lg">
                      <Shield className="w-8 h-8 text-red-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-red-800">Immediate Protection</h4>
                      <p className="text-sm text-red-700">Don't sign any documents from companies</p>
                    </div>
                    <div className="bg-white/50 p-4 rounded-lg">
                      <FileText className="w-8 h-8 text-red-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-red-800">Preserve Evidence</h4>
                      <p className="text-sm text-red-700">Keep all products and medical records</p>
                    </div>
                    <div className="bg-white/50 p-4 rounded-lg">
                      <Users className="w-8 h-8 text-red-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-red-800">Get Legal Help</h4>
                      <p className="text-sm text-red-700">Contact experienced attorneys immediately</p>
                    </div>
                  </div>
                  <Button 
                    size="lg" 
                    className="bg-red-600 hover:bg-red-700 text-white font-bold px-12 py-4 text-xl"
                    onClick={() => window.location.href = '/mass-torts-case-evaluation'}
                  >
                    Get Immediate Legal Help
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

export default MasseTortsResources;