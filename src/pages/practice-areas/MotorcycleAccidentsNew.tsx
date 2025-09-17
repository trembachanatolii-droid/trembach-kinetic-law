import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  ChevronDown,
  Phone,
  Mail,
  MessageSquare,
  MapPin,
  Clock,
  Shield,
  FileText,
  Scale,
  AlertTriangle,
  CheckCircle,
  Star,
  Calendar,
  Calculator,
  Users,
  Award,
  Gavel,
  Heart,
  TrendingUp,
  Target,
  Eye,
  Brain,
  Activity
} from "lucide-react";
import SEO from "@/components/SEO";

// Import images
import heroImage from "@/assets/practice-areas/motorcycle-accidents-hero-new.jpg";
import biasDefenseImage from "@/assets/practice-areas/motorcycle-bias-defense.jpg";
import legalProcessImage from "@/assets/practice-areas/motorcycle-legal-process.jpg";
import medicalCareImage from "@/assets/practice-areas/motorcycle-medical-care.jpg";
import compensationImage from "@/assets/practice-areas/motorcycle-compensation.jpg";
import legalConsultationImage from "@/assets/practice-areas/motorcycle-legal-consultation.jpg";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const MotorcycleAccidentsNew: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    caseDetails: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'evaluation', label: 'Case Evaluation', icon: Calculator },
    { id: 'immediate-steps', label: 'Immediate Steps', icon: Clock },
    { id: 'bias-defense', label: 'Fighting Bias', icon: Shield },
    { id: 'legal-process', label: 'Legal Process', icon: Scale },
    { id: 'faq', label: 'FAQ', icon: MessageSquare },
    { id: 'resources', label: 'Resources', icon: FileText }
  ];

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      );
    }

    if (contentRef.current) {
      gsap.fromTo(
        '.content-section',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, []);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = '/motorcycle-case-evaluation';
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // FAQ Data
  const faqs = [
    {
      category: 'immediate',
      question: 'What should I do immediately after a motorcycle accident?',
      answer: 'First, ensure your safety and get medical attention if needed. Call 911 to report the accident. Document the scene with photos, get witness information, and contact our firm immediately. Don\'t admit fault or give recorded statements to insurance companies without legal representation.'
    },
    {
      category: 'legal',
      question: 'How long do I have to file a motorcycle accident lawsuit in California?',
      answer: 'California has a 2-year statute of limitations for personal injury claims from motorcycle accidents. However, it\'s crucial to contact an attorney immediately as evidence can disappear quickly and insurance companies start building their defense right away.'
    },
    {
      category: 'insurance',
      question: 'Why do insurance companies show bias against motorcyclists?',
      answer: 'Insurance companies often perpetuate stereotypes about motorcyclists being reckless or at fault. They may blame the rider even when the accident was clearly caused by a negligent driver. Having an experienced motorcycle accident attorney helps combat these biases with facts and evidence.'
    },
    {
      category: 'compensation',
      question: 'What compensation can I recover after a motorcycle accident?',
      answer: 'You may recover medical expenses, lost wages, pain and suffering, property damage, rehabilitation costs, and future medical care. In severe cases, compensation for permanent disability and loss of earning capacity. We fight for maximum compensation for all your damages.'
    },
    {
      category: 'medical',
      question: 'Should I see a doctor even if I feel fine after the accident?',
      answer: 'Absolutely. Adrenaline can mask injuries, and some conditions like traumatic brain injuries may not show immediate symptoms. Medical documentation is crucial for your case. Delaying medical treatment can be used against you by insurance companies.'
    },
    {
      category: 'legal',
      question: 'What if the other driver was uninsured or underinsured?',
      answer: 'California requires uninsured/underinsured motorist coverage, but not all policies provide adequate protection. We can help you understand your coverage options and pursue all available sources of compensation, including your own insurance policy.'
    },
    {
      category: 'compensation',
      question: 'How much is my motorcycle accident case worth?',
      answer: 'Case value depends on factors like injury severity, medical costs, lost income, pain and suffering, and degree of fault. Motorcycle accident settlements in California can range from thousands to millions of dollars. We provide free case evaluations to assess your claim\'s potential value.'
    },
    {
      category: 'legal',
      question: 'What if I was partially at fault for the accident?',
      answer: 'California follows comparative negligence law, meaning you can still recover compensation even if partially at fault. Your compensation will be reduced by your percentage of fault. For example, if you\'re 20% at fault, you can still recover 80% of your damages.'
    },
    {
      category: 'insurance',
      question: 'Should I give a recorded statement to the insurance company?',
      answer: 'No, you should never give a recorded statement without an attorney present. Insurance adjusters are trained to ask questions designed to minimize your claim. Let your attorney handle all communications with insurance companies.'
    },
    {
      category: 'medical',
      question: 'What are the most common motorcycle accident injuries?',
      answer: 'Common injuries include traumatic brain injuries, spinal cord injuries, broken bones, road rash, internal injuries, and limb amputations. Motorcycle accidents often result in more severe injuries due to the lack of protection compared to cars.'
    }
  ];

  const filteredFaqs = faqs;

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="California Motorcycle Accident Lawyers | Fighting Bias for Injured Riders"
        description="Expert motorcycle accident attorneys throughout California. Former defense lawyer now fighting anti-rider bias. Free consultation for motorcycle crash cases."
        canonical="/practice-areas/motorcycle-accidents"
      />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="mb-6">
            <Badge variant="secondary" className="bg-red-600 hover:bg-red-700 text-white border-0 px-4 py-2 text-sm font-semibold">
              ★ California's Top Motorcycle Accident Lawyers
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Fighting Bias Against
            <span className="text-red-400 block">Motorcycle Riders</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Former defense attorney now exclusively representing injured motorcyclists. We know their tactics and fight back.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-200"
              onClick={() => window.location.href = 'tel:8181234567'}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (818) 123-4567
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg font-semibold backdrop-blur-sm"
              onClick={() => scrollToSection('evaluation')}
            >
              Free Case Review
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-white/80">Rated 5.0/5 by 500+ Clients</span>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex space-x-1 overflow-x-auto py-3">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => scrollToSection(tab.id)}
                  className={`
                    flex items-center space-x-2 whitespace-nowrap transition-all duration-200
                    ${activeTab === tab.id 
                      ? 'bg-red-600 text-white shadow-lg' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }
                  `}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{tab.label}</span>
                </Button>
              );
            })}
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12" ref={contentRef}>
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">

            {/* Overview Section */}
            <section id="overview" className="content-section">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-red-600 mb-6">California Motorcycle Accident Lawyers</h2>
                
                <div className="mb-8">
                  <img src={biasDefenseImage} alt="Fighting motorcycle bias in California courts" className="w-full h-64 object-cover rounded-lg mb-4" />
                  <p className="text-lg leading-relaxed mb-4">
                    As a former defense attorney who used to represent insurance companies, I've seen firsthand how they systematically discriminate against motorcyclists. Now I use that insider knowledge exclusively to fight for injured riders across California.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    Motorcycle accidents result in devastating injuries far more often than car crashes. When you're fighting for your life and livelihood, you need an attorney who understands both the unique challenges of motorcycle cases and the insurance industry's anti-rider bias.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                  <h3 className="text-xl font-semibold text-red-700 mb-2">Why Motorcyclists Face Bias</h3>
                  <ul className="space-y-2 text-red-600">
                    <li>• Insurance companies assume riders are "risk-takers"</li>
                    <li>• Juries may have preconceived notions about motorcyclists</li>
                    <li>• Police reports often unfairly blame the rider</li>
                    <li>• Medical professionals may downplay injuries</li>
                  </ul>
                </div>

                <Collapsible>
                  <CollapsibleTrigger 
                    className="flex items-center justify-between w-full p-4 text-left bg-muted hover:bg-muted/80 rounded-lg transition-colors"
                    onClick={() => toggleSection('overview-details')}
                  >
                    <span className="text-lg font-semibold">Our Proven Track Record</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${expandedSections.has('overview-details') ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-4 pb-4">
                    <div className="grid md:grid-cols-2 gap-6 mt-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-red-600">$50M+</div>
                        <div className="text-sm text-muted-foreground">Recovered for Clients</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-red-600">98%</div>
                        <div className="text-sm text-muted-foreground">Success Rate</div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <div 
                className="relative bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden"
                style={{ backgroundImage: `url(${biasDefenseImage})` }}
              >
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="relative z-10 p-12 text-center">
                  <h2 className="text-4xl font-bold text-white mb-2">3 Ways to Start Your Case</h2>
                  <div className="w-32 h-1 bg-red-600 mx-auto mb-6"></div>
                  <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                    You pay nothing until we win your case. Contact us today to schedule your FREE consultation.
                  </p>
                  
                  <div className="space-y-4 max-w-md mx-auto">
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 text-lg"
                      onClick={() => window.location.href = 'tel:+18553742906'}
                    >
                      CALL (855) 374-2906
                    </Button>
                    
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 text-lg"
                      onClick={() => window.location.href = 'mailto:info@trembachlaw.com'}
                    >
                      EMAIL US
                    </Button>
                    
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 text-lg"
                      onClick={() => window.location.href = '/motorcycle-case-evaluation'}
                    >
                      CALCULATE SETTLEMENT
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* Immediate Steps After Motorcycle Accident */}
            <section id="immediate-steps" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Immediate Steps After Motorcycle Accident</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Motorcycle accident cases require immediate action to preserve evidence and protect your rights. Our comprehensive case evaluation examines every aspect of your accident to build the strongest possible claim against insurance company bias.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Document Evidence</h3>
                    <p className="text-muted-foreground">Take photos of the scene, vehicles, injuries, and road conditions. Get contact information from witnesses and the other driver.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <FileText className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Get Medical Attention</h3>
                    <p className="text-muted-foreground">Seek immediate medical care even if injuries seem minor. Adrenaline can mask serious injuries, and medical records are crucial for your case.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Contact Legal Help</h3>
                    <p className="text-muted-foreground">Call us immediately. Insurance companies start building their defense right away - you need experienced legal representation from day one.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Fighting Bias Section */}
            <section id="bias-defense" className="content-section py-16 border-t">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <img 
                    src={biasDefenseImage} 
                    alt="Fighting motorcycle bias in legal cases" 
                    className="w-full h-96 object-cover rounded-lg shadow-xl"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-4xl font-bold mb-6 text-foreground">
                    Combating Anti-Motorcycle Bias
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Insurance companies and juries often assume motorcyclists are at fault. As a former defense attorney, I know exactly how they build these biased cases and how to counter their tactics with facts, evidence, and expert testimony.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-muted-foreground">Accident reconstruction experts</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-muted-foreground">Medical expert testimony</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-muted-foreground">Comprehensive evidence gathering</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-muted-foreground">Aggressive representation in court</span>
                    </div>
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => window.location.href = '/motorcycle-case-evaluation'}
                  >
                    Fight Bias in Your Case
                  </Button>
                </div>
              </div>
            </section>

            {/* Legal Process Section */}
            <section id="legal-process" className="content-section py-16 border-t">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-4 text-foreground">
                    Your Motorcycle Accident Legal Journey
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Understanding the legal process helps you make informed decisions about your motorcycle accident case. We guide you through every step while fighting for maximum compensation.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FileText className="w-8 h-8 text-red-600" />
                      </div>
                      <CardTitle className="text-xl">Case Investigation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        We immediately begin investigating your accident, collecting evidence, and documenting all damages while you focus on recovery.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-red-600" />
                      </div>
                      <CardTitle className="text-xl">Expert Assembly</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Our network of accident reconstruction experts, medical professionals, and economists build a comprehensive case for maximum recovery.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Scale className="w-8 h-8 text-red-600" />
                      </div>
                      <CardTitle className="text-xl">Negotiation & Trial</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        We aggressively negotiate with insurance companies and are fully prepared to take your case to trial if necessary to get fair compensation.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center mt-12">
                  <Button 
                    size="lg" 
                    className="bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => window.location.href = '/motorcycle-case-evaluation'}
                  >
                    Start Your Legal Process Today
                  </Button>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section py-16 border-t">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-4 text-foreground">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Get answers to common questions about motorcycle accident cases in California.
                  </p>
                </div>

                <div className="space-y-4">
                  {filteredFaqs.map((faq, index) => (
                    <div key={index} className="border border-border rounded-lg overflow-hidden">
                      <button
                        className="w-full px-6 py-4 text-left bg-card hover:bg-muted transition-colors flex items-center justify-between"
                        onClick={() => toggleFaq(index)}
                      >
                        <span className="font-medium pr-4">{faq.question}</span>
                        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${
                          expandedFaq === index ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {expandedFaq === index && (
                        <div className="px-6 py-4 bg-muted/50 border-t border-border">
                          <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <Button 
                    size="lg" 
                    className="bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => window.location.href = '/motorcycle-case-evaluation'}
                  >
                    Get Your Questions Answered
                  </Button>
                </div>
              </div>
            </section>

            {/* Resources Section */}
            <section id="resources" className="content-section py-16 border-t">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold mb-4 text-foreground">
                    Motorcycle Accident Resources
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Helpful resources for motorcycle accident victims and their families.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Heart className="w-5 h-5 text-red-600" />
                        <span>Medical Care</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Find qualified trauma centers</li>
                        <li>• Motorcycle injury specialists</li>
                        <li>• Rehabilitation resources</li>
                        <li>• Mental health support</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Shield className="w-5 h-5 text-red-600" />
                        <span>Safety Resources</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• California motorcycle laws</li>
                        <li>• Safety equipment guides</li>
                        <li>• Rider training programs</li>
                        <li>• Accident prevention tips</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Activity className="w-5 h-5 text-red-600" />
                        <span>Support Groups</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Motorcycle accident survivor groups</li>
                        <li>• Family support networks</li>
                        <li>• Online communities</li>
                        <li>• Weather and road condition updates</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Don't Wait - Time Limits Section */}
            <section className="bg-red-600 text-white py-16">
              <div className="max-w-4xl mx-auto text-center px-6">
                <h2 className="text-4xl font-bold mb-4">
                  Don't Wait - Time Limits Apply for California Motorcycle Accidents
                </h2>
                
                <p className="text-lg mb-8">
                  California law strictly limits the time you have to file a motorcycle accident lawsuit. Missing these deadlines can permanently bar your right to compensation, regardless of how strong your case may be.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white/10 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-2">Personal Injury Claims</h3>
                    <div className="text-3xl font-bold mb-2">2 Years</div>
                    <p className="text-white/80">From the date of accident to file lawsuit</p>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-2">Property Damage</h3>
                    <div className="text-3xl font-bold mb-2">3 Years</div>
                    <p className="text-white/80">To file property damage claims</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 font-bold"
                    onClick={() => window.location.href = '/motorcycle-case-evaluation'}
                  >
                    Get Free Case Review Now
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 font-bold"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    Call (818) 123-4567
                  </Button>
                </div>

                <p className="mt-4">
                  No fees unless we win your motorcycle accident case. Call 24/7: <span className="font-bold">(818) 123-4567</span>
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Contact Card */}
              <Card className="glass-card border-primary/20 bg-gradient-to-br from-primary/15 to-primary/5 backdrop-blur-md shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-center text-red-600">Need Help Now?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call (818) 123-4567
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-red-600 text-red-600 hover:bg-red-50"
                    onClick={() => window.location.href = '/motorcycle-case-evaluation'}
                  >
                    <Calculator className="w-4 h-4 mr-2" />
                    Free Case Review
                  </Button>
                  
                  <Separator />
                  
                  <div className="text-center text-sm text-muted-foreground">
                    <p className="mb-2">Available 24/7</p>
                    <p>No fees unless we win</p>
                    <p>Free consultation</p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Facts */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-red-600" />
                    <span>Why Choose Us?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Badge className="bg-red-100 text-red-600 border-red-200">Former Defense Attorney</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p className="mb-2">
                        <strong>Inside Knowledge:</strong> Former insurance defense experience
                      </p>
                      <p className="mb-2">
                        <strong>Motorcycle Focus:</strong> Exclusively representing riders
                      </p>
                      <p className="mb-2">
                        <strong>Proven Results:</strong> $50M+ recovered for clients
                      </p>
                      <p>
                        <strong>No Risk:</strong> No fees unless we win your case
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotorcycleAccidentsNew;