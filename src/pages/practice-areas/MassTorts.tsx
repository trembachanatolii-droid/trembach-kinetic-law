import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Star, 
  ChevronDown, 
  ChevronUp,
  Heart,
  Shield,
  Scale,
  Clock,
  Users,
  Award,
  FileText,
  AlertTriangle,
  Stethoscope,
  Building,
  Map,
  ArrowLeft,
  Calculator,
  DollarSign
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/mass-torts-hero.jpg';
import sidebarImage from '@/assets/practice-areas/mass-torts-evaluation.jpg';
import diagnosisImage from '@/assets/practice-areas/mass-torts-medical.jpg';
import legalProcessImage from '@/assets/practice-areas/mass-torts-legal-process.jpg';
import exposureSitesImage from '@/assets/practice-areas/mass-torts-types.jpg';
import medicalImage from '@/assets/practice-areas/mass-torts-medical.jpg';
import compensationImage from '@/assets/practice-areas/mass-torts-compensation.jpg';
import SEO from '@/components/SEO';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const MassTorts: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    diagnosisDate: '',
    massTortType: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'diagnosis-steps', label: 'WHAT TO DO AFTER DIAGNOSIS', icon: Stethoscope },
    { id: 'diagnosis-process', label: 'DIAGNOSIS PROCESS', icon: Heart },
    { id: 'legal-process', label: 'LEGAL PROCESS', icon: Shield },
    { id: 'faq', label: 'FAQ', icon: MessageCircle },
    { id: 'resources', label: 'RESOURCES', icon: Building }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation - instant
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.1, ease: 'power2.out' }
      );

      // Content sections animation
      gsap.fromTo(contentRef.current?.querySelectorAll('.content-section'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
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
    // Handle form submission - redirect to case evaluation
    window.location.href = '/mass-torts-case-evaluation';
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="California Mass Torts Lawyers | Pharmaceutical, Medical Device & Environmental Injury Claims"
        description="Expert California mass tort attorneys handling pharmaceutical drug injuries, defective medical devices, environmental contamination, and consumer product liability cases. Free consultation."
        canonical="/mass-torts"
      />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Go Back Button - positioned in hero overlay */}
        <div className="absolute top-20 left-6 z-10">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              California Mass Torts Lawyers
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Backed by Proven Experience</span>
            </div>
            
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
              onClick={() => window.location.href = '/mass-torts-case-evaluation'}
            >
              START MY FREE CASE EVALUATION
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 py-4">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => scrollToSection(tab.id)}
                    className={`flex items-center px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                      activeTab === tab.id 
                        ? 'bg-white text-primary' 
                        : 'text-white hover:bg-white/20'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2" ref={contentRef}>
            
            {/* Overview Section */}
            <section id="overview" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Mass Torts Attorneys</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  If you or a loved one has been harmed by pharmaceutical drugs, defective medical devices, environmental contamination, or dangerous consumer products, you may be entitled to compensation through a mass tort lawsuit. These complex cases involve multiple victims who suffered similar injuries from the same product or exposure source.
                </p>
                
                <p className="text-lg leading-relaxed">
                  At Trembach Law Firm, we have extensive experience handling mass tort cases in California. Our team understands the unique challenges these cases present and has the resources necessary to take on large corporations and pharmaceutical companies that prioritize profits over public safety.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4 text-foreground">
                    Learn More About Mass Tort Cases
                    {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Users className="w-5 h-5 mr-2 text-primary" />
                      Collective Strength
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Mass tort litigation allows multiple victims to join forces against powerful corporations, creating stronger cases with shared resources and evidence.</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Shield className="w-5 h-5 mr-2 text-primary" />
                      Corporate Accountability
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>We hold negligent manufacturers, pharmaceutical companies, and other corporations accountable for putting dangerous products on the market.</p>
                  </CardContent>
                </Card>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Why Choose Trembach Law Firm?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <Shield className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Former Defense Experience</h4>
                          <p className="text-sm text-muted-foreground">Attorney Trembach's background defending companies provides unique insights into corporate defense strategies.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Expedited Process</h4>
                          <p className="text-sm text-muted-foreground">We understand the urgency and work to secure compensation as quickly as possible.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Compassionate Support</h4>
                          <p className="text-sm text-muted-foreground">We provide emotional support and guidance throughout your legal journey.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Award className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">No Win, No Fee</h4>
                          <p className="text-sm text-muted-foreground">We work on contingency - you pay nothing unless we win your case.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <h3>Comprehensive California Mass Tort Representation</h3>
                    <p>
                      Mass tort cases in California involve complex medical, legal, and scientific factors. Our firm has the resources and expertise to handle every aspect of your case, from identifying the harmful product or exposure to working with medical experts who can clearly explain how the product caused your injury.
                    </p>
                    
                    <p>
                      California has been the center of many significant mass tort cases, with victims harmed by pharmaceutical companies, medical device manufacturers, and environmental contaminants. Common exposure sources include:
                    </p>
                    
                    <ul>
                      <li>Pharmaceutical companies and dangerous prescription drugs</li>
                      <li>Medical device manufacturers and defective implants</li>
                      <li>Chemical companies and environmental contamination</li>
                      <li>Consumer product manufacturers and unsafe products</li>
                      <li>Industrial facilities and toxic substance exposure</li>
                      <li>Automotive manufacturers and defective vehicle components</li>
                    </ul>
                    
                    <p>
                      We investigate every potential source of liability to ensure no responsible party escapes accountability for your illness or injury. This comprehensive approach often results in higher compensation as we identify multiple defendants and pursue claims through various legal channels.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Free Case Evaluation</h2>
              
              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Get Your Free Consultation</h3>
                <p className="mb-6 text-lg">Provide some basic information to help us understand your case better.</p>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Diagnosis/Injury Date</label>
                      <Input
                        type="date"
                        value={formData.diagnosisDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, diagnosisDate: e.target.value }))}
                        required
                        className="text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Mass Tort Type</label>
                      <Select value={formData.massTortType} onValueChange={(value) => setFormData(prev => ({ ...prev, massTortType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select mass tort type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pharmaceutical">Pharmaceutical Drug Injury</SelectItem>
                          <SelectItem value="medical-device">Medical Device Defect</SelectItem>
                          <SelectItem value="environmental">Environmental Contamination</SelectItem>
                          <SelectItem value="consumer-product">Consumer Product Liability</SelectItem>
                          <SelectItem value="chemical-exposure">Chemical Exposure</SelectItem>
                          <SelectItem value="other">Other Mass Tort</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 text-lg">
                    Start My Free Case Evaluation
                  </Button>
                </form>
              </div>
            </section>

            {/* What to Do After Diagnosis */}
            <section id="diagnosis-steps" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">What to Do After Your Diagnosis</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Heart className="w-5 h-5 mr-2 text-red-600" />
                      Immediate Medical Steps
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-lg">
                    <p>• Seek immediate medical attention from specialists</p>
                    <p>• Obtain complete medical records and test results</p>
                    <p>• Document all symptoms and medical treatments</p>
                    <p>• Get second opinions from qualified experts</p>
                    <p>• Follow all prescribed treatment protocols</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Scale className="w-5 h-5 mr-2 text-red-600" />
                      Immediate Legal Steps
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-lg">
                    <p>• Contact experienced mass tort attorneys immediately</p>
                    <p>• Preserve all evidence of product use or exposure</p>
                    <p>• Document your exposure timeline and history</p>
                    <p>• Avoid speaking to insurance companies without counsel</p>
                    <p>• Don't sign any documents from manufacturers</p>
                  </CardContent>
                </Card>
              </div>

              <Collapsible open={expandedSections['diagnosis-steps']} onOpenChange={() => toggleSection('diagnosis-steps')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4 text-foreground">
                    Learn More About Protecting Your Rights
                    {expandedSections['diagnosis-steps'] ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">Things You Should Do Immediately</h3>
                    <ul className="space-y-2 text-green-700 text-lg">
                      <li>• Contact an experienced mass tort attorney immediately</li>
                      <li>• Preserve all evidence related to the product or exposure</li>
                      <li>• Document your exposure history and timeline</li>
                      <li>• Gather witness contact information if applicable</li>
                      <li>• Keep detailed records of all medical expenses</li>
                      <li>• Maintain employment records showing lost wages</li>
                      <li>• Take photographs of the product or exposure site</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
                    <h3 className="text-xl font-semibold text-red-800 mb-4">Things You Should Never Do</h3>
                    <ul className="space-y-2 text-red-700 text-lg">
                      <li>• Don't wait to seek legal counsel - statutes of limitations apply</li>
                      <li>• Don't dispose of the product that may have caused your injury</li>
                      <li>• Don't provide recorded statements to insurance companies</li>
                      <li>• Don't sign any settlement offers without legal review</li>
                      <li>• Don't continue using products you suspect caused harm</li>
                      <li>• Don't discuss your case on social media platforms</li>
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Diagnosis Process */}
            <section id="diagnosis-process" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Understanding Mass Tort Diagnosis</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <img 
                    src={diagnosisImage} 
                    alt="Mass tort medical diagnosis process" 
                    className="w-full h-48 object-cover rounded-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Mass Tort Identification Process</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Mass tort cases often involve complex medical conditions that may take years to manifest after initial exposure. Understanding the diagnostic process is crucial for building a strong case.
                  </p>
                </div>
              </div>

              <Collapsible open={expandedSections['diagnosis-process']} onOpenChange={() => toggleSection('diagnosis-process')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4 text-foreground">
                    Learn More About the Diagnostic Process
                    {expandedSections['diagnosis-process'] ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3>Types of Mass Tort Injuries</h3>
                    <p>
                      Mass tort cases often involve injuries that develop over time, making early detection and proper diagnosis critical. Common types include:
                    </p>
                    
                    <ul>
                      <li><strong>Pharmaceutical Injuries:</strong> Side effects from prescription medications including organ damage, birth defects, cancer, cardiovascular problems, and neurological disorders</li>
                      <li><strong>Medical Device Failures:</strong> Complications from defective implants, surgical devices, diagnostic equipment, and therapeutic devices</li>
                      <li><strong>Environmental Exposure:</strong> Health problems from contaminated water, air pollution, soil contamination, and chemical spills</li>
                      <li><strong>Occupational Exposure:</strong> Work-related illnesses from toxic substances, industrial chemicals, and unsafe working conditions</li>
                      <li><strong>Consumer Product Defects:</strong> Injuries from defective products including automotive parts, household items, and electronic devices</li>
                    </ul>

                    <h3>Establishing Causation</h3>
                    <p>
                      Proving that a product or exposure caused your injury requires extensive medical evidence and expert testimony. Our legal team works with leading medical professionals to establish clear causation through:
                    </p>
                    
                    <ul>
                      <li>Comprehensive medical record analysis</li>
                      <li>Timeline documentation of exposure and symptoms</li>
                      <li>Expert medical testimony from specialists</li>
                      <li>Scientific literature and studies</li>
                      <li>Epidemiological evidence and data analysis</li>
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Legal Process */}
            <section id="legal-process" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Mass Tort Legal Process</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <img 
                    src={legalProcessImage} 
                    alt="Mass tort legal process" 
                    className="w-full h-48 object-cover rounded-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">How Mass Tort Litigation Works</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    Mass tort litigation follows a structured process designed to efficiently handle multiple similar claims while preserving each victim's individual rights and compensation opportunities.
                  </p>
                </div>
              </div>

              <Collapsible open={expandedSections['legal-process']} onOpenChange={() => toggleSection('legal-process')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4 text-foreground">
                    Learn More About Our Legal Process
                    {expandedSections['legal-process'] ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="p-6">
                      <h3 className="text-xl font-semibold mb-4 text-primary">Investigation Phase</h3>
                      <ul className="space-y-2 text-lg">
                        <li>• Medical record collection and analysis</li>
                        <li>• Product defect investigation</li>
                        <li>• Expert witness consultation</li>
                        <li>• Causation analysis and documentation</li>
                        <li>• Damage assessment and calculation</li>
                      </ul>
                    </Card>

                    <Card className="p-6">
                      <h3 className="text-xl font-semibold mb-4 text-primary">Litigation Phase</h3>
                      <ul className="space-y-2 text-lg">
                        <li>• Complaint preparation and filing</li>
                        <li>• Multidistrict litigation coordination</li>
                        <li>• Discovery process management</li>
                        <li>• Settlement negotiations</li>
                        <li>• Trial preparation if necessary</li>
                      </ul>
                    </Card>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Multidistrict Litigation (MDL)</h3>
                    <p className="text-lg mb-4">
                      Many mass tort cases are consolidated into Multidistrict Litigation (MDL) proceedings. This process centralizes pretrial proceedings in a single federal court, allowing for more efficient discovery, expert testimony, and settlement negotiations.
                    </p>
                    
                    <h4 className="font-semibold mb-2 text-lg">Benefits of MDL Process:</h4>
                    <ul className="space-y-2 text-lg">
                      <li>• Shared discovery reduces costs and time</li>
                      <li>• Coordinated expert testimony strengthens cases</li>
                      <li>• Consistent rulings on common legal issues</li>
                      <li>• Enhanced settlement leverage through collective action</li>
                      <li>• Individual case preservation for unique damages</li>
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Frequently Asked Questions</h2>

              <div className="space-y-4">
                {[
                  {
                    question: "What is the difference between a mass tort and a class action lawsuit?",
                    answer: "In a mass tort, each plaintiff maintains their individual case and can receive compensation based on their specific damages. Class actions treat all plaintiffs as a single group with shared compensation. Mass torts allow for individualized settlements reflecting each person's unique injuries and losses."
                  },
                  {
                    question: "How do I know if I have a valid mass tort case in California?",
                    answer: "A valid mass tort case typically involves: injury from a widely-used product or exposure, similar injuries among multiple victims, a clear connection between the product/exposure and your injury, and significant damages. California courts require proof of causation, damages, and negligence or product defect."
                  },
                  {
                    question: "What types of compensation can I receive in a mass tort case?",
                    answer: "Mass tort compensation can include medical expenses (past and future), lost wages and reduced earning capacity, pain and suffering, emotional distress, loss of life enjoyment, and in severe cases, punitive damages. Each case is evaluated individually to determine appropriate compensation levels."
                  },
                  {
                    question: "How long do mass tort cases take to resolve in California?",
                    answer: "Mass tort cases typically take 2-5 years to resolve, depending on case complexity, number of plaintiffs, and whether settlement is reached. The discovery phase can be lengthy due to extensive scientific evidence, but MDL consolidation often accelerates the process compared to individual lawsuits."
                  },
                  {
                    question: "Do I need to prove that the product or exposure directly caused my injury?",
                    answer: "Yes, California law requires establishing causation through medical evidence, expert testimony, and scientific studies. We work with medical experts, toxicologists, and epidemiologists to demonstrate the connection between exposure and injury, including timing, dose-response relationships, and elimination of alternative causes."
                  },
                  {
                    question: "Can I join a mass tort case if I used a product years ago?",
                    answer: "Yes, many mass tort injuries have long latency periods. California's discovery rule allows cases to be filed within the statute of limitations from when you discovered or should have reasonably discovered the injury was caused by the product. We help establish timeline evidence to support your case."
                  },
                  {
                    question: "What if the company responsible for my injury has filed for bankruptcy?",
                    answer: "Bankruptcy doesn't necessarily end your case. Many companies establish trust funds to compensate victims, and we can file claims against these trusts. Additionally, other parties in the supply chain (manufacturers, distributors, retailers) may share liability for your injuries."
                  },
                  {
                    question: "How much does it cost to hire a mass tort attorney?",
                    answer: "We handle mass tort cases on a contingency fee basis, meaning you pay no attorney fees unless we secure compensation for you. We also advance all case costs including expert witnesses, medical records, and court fees, so you have no out-of-pocket expenses during litigation."
                  },
                  {
                    question: "Can I file a mass tort case if I only have mild symptoms?",
                    answer: "Yes, California allows compensation for all levels of injury, including mild symptoms that may worsen over time. Even minor injuries can result in significant medical expenses, lost work time, and pain and suffering. Early documentation of symptoms can be crucial for building a strong case."
                  },
                  {
                    question: "What if I signed a waiver or release form related to the product?",
                    answer: "Waivers and releases may not be enforceable in mass tort cases, especially if they attempt to release liability for gross negligence, intentional misconduct, or violations of public policy. California law limits the enforceability of releases in cases involving product defects and hidden dangers."
                  },
                  {
                    question: "How do I preserve evidence for my mass tort case?",
                    answer: "Preserve the actual product if possible, keep all packaging and instructions, maintain detailed medical records, document your exposure history, take photographs of injuries, save receipts for medical expenses, and avoid disposing of any potentially relevant materials until consulting with an attorney."
                  },
                  {
                    question: "Can family members file claims if a loved one died from mass tort exposure?",
                    answer: "Yes, California's wrongful death statute allows surviving family members to file claims for their loved one's death caused by product liability or negligent exposure. Damages can include funeral expenses, lost financial support, loss of companionship, and the deceased's pain and suffering before death."
                  },
                  {
                    question: "What role do expert witnesses play in mass tort cases?",
                    answer: "Expert witnesses are crucial in mass tort cases to establish causation, explain complex medical and scientific concepts, demonstrate product defects, calculate economic damages, and counter defense arguments. We work with leading specialists in relevant fields to build compelling expert testimony."
                  },
                  {
                    question: "How do settlement negotiations work in mass tort cases?",
                    answer: "Mass tort settlements often involve global negotiations covering multiple cases, with individual settlement amounts based on specific factors like injury severity, age, medical expenses, and lost income. We ensure each client's unique circumstances are properly valued in any settlement discussions."
                  },
                  {
                    question: "Can I still file a mass tort case if I have pre-existing health conditions?",
                    answer: "Yes, California's 'eggshell plaintiff' rule means defendants are liable for all consequences of their negligence, even if you were more susceptible to injury due to pre-existing conditions. We work with medical experts to distinguish between pre-existing conditions and new injuries caused by the defendant's product or actions."
                  },
                  {
                    question: "What happens if my mass tort case goes to trial?",
                    answer: "If settlement isn't reached, your case may go to trial. In MDL proceedings, bellwether trials are often conducted first to test legal theories and provide guidance for settlements. We prepare each case thoroughly for trial while continuing settlement negotiations to achieve the best possible outcome."
                  },
                  {
                    question: "How do I know if my attorney has experience with mass tort cases?",
                    answer: "Look for attorneys with specific mass tort experience, including involvement in MDL proceedings, relationships with relevant medical experts, resources to handle complex litigation, and a track record of successful mass tort outcomes. Our firm has extensive experience in all types of mass tort cases."
                  },
                  {
                    question: "Can I switch attorneys during a mass tort case?",
                    answer: "Yes, you have the right to change attorneys at any time during your case. However, timing is important in mass tort litigation due to coordinated discovery and settlement timelines. We can help evaluate your current representation and discuss options for moving your case forward effectively."
                  },
                  {
                    question: "What if new information about the product's dangers comes out after I file my case?",
                    answer: "New information often strengthens mass tort cases and can lead to additional claims or increased settlement values. We continuously monitor scientific literature, FDA warnings, and corporate disclosures to identify new evidence that supports our clients' cases and may affect compensation amounts."
                  },
                  {
                    question: "How do mass tort cases affect the companies responsible for injuries?",
                    answer: "Mass tort litigation creates significant financial pressure on defendants and often leads to improved safety standards, product recalls, and enhanced warning labels. These cases serve an important public safety function by holding companies accountable and preventing future injuries to consumers."
                  }
                ].map((faq, index) => (
                  <Card key={index} className="glass-card">
                    <CardHeader>
                      <CardTitle 
                        className="text-left cursor-pointer flex justify-between items-center text-lg hover:text-primary transition-colors text-foreground"
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      >
                        <span>{faq.question}</span>
                        {expandedFaq === index ? <ChevronUp /> : <ChevronDown />}
                      </CardTitle>
                    </CardHeader>
                    {expandedFaq === index && (
                      <CardContent>
                        <p className="text-muted-foreground text-lg leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </section>

            {/* Resources Section */}
            <section id="resources" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Mass Tort Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Calculator className="w-5 h-5 mr-2 text-primary" />
                      Compensation Calculator
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img 
                      src={compensationImage} 
                      alt="Mass tort compensation calculator" 
                      className="w-full h-32 object-cover rounded-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                    />
                    <p className="mb-4 text-lg">Get an estimate of potential compensation for your mass tort case based on your specific circumstances.</p>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                      onClick={() => window.location.href = '/mass-torts-compensation-calculator'}
                    >
                      Calculate Compensation
                    </Button>
                  </CardContent>
                </Card>

                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Stethoscope className="w-5 h-5 mr-2 text-primary" />
                      Medical Guidance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img 
                      src={medicalImage} 
                      alt="Mass tort medical guidance" 
                      className="w-full h-32 object-cover rounded-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                    />
                    <p className="mb-4 text-lg">Connect with medical specialists who understand mass tort injuries and treatment options.</p>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                      onClick={() => window.location.href = '/mass-torts-medical-guidance'}
                    >
                      Find Medical Care
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          {/* Sticky Sidebar - 3 Ways to Start Your Case */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="glass-card border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-md">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                    <img src={sidebarImage} alt="Mass Torts Legal Help" className="w-full h-full object-cover" />
                  </div>
                  <CardTitle className="text-2xl text-primary">3 Ways to Start Your Case</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <Phone className="w-12 h-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-primary text-lg mb-2">Call Now</h3>
                    <p className="text-sm text-muted-foreground mb-3">Speak directly with our mass tort attorneys</p>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full hover:bg-primary hover:text-primary-foreground transition-all font-bold text-primary border-primary"
                      onClick={() => window.location.href = 'tel:8181234567'}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      <span className="text-primary">Call (818) 123-4567</span>
                    </Button>
                  </div>

                  <div className="text-center">
                    <Mail className="w-12 h-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-primary text-lg mb-2">Email Us</h3>
                    <p className="text-sm text-muted-foreground mb-3">Send us details about your case</p>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full hover:bg-primary hover:text-primary-foreground transition-all font-bold text-primary border-primary"
                      onClick={() => window.location.href = 'mailto:info@trembachlawfirm.com?subject=Mass Tort Case Inquiry'}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      <span className="text-primary">Send Email</span>
                    </Button>
                  </div>

                  <div className="text-center">
                    <FileText className="w-12 h-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-primary text-lg mb-2">Online Form</h3>
                    <p className="text-sm text-muted-foreground mb-3">Complete our detailed case evaluation</p>
                    <Button 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                      onClick={() => window.location.href = '/mass-torts-case-evaluation'}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Start Evaluation
                    </Button>
                  </div>

                  {/* Quick Facts */}
                  <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">Quick Facts</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-primary mt-0.5 mr-3" />
                        <div>
                          <h4 className="font-semibold text-sm">Time Limits Apply</h4>
                          <p className="text-sm text-muted-foreground">Statutes of limitations vary by case type</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Shield className="w-5 h-5 text-primary mt-0.5 mr-3" />
                        <div>
                          <h4 className="font-semibold text-sm">No Win, No Fee</h4>
                          <p className="text-sm text-muted-foreground">We only get paid if you win</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Award className="w-5 h-5 text-primary mt-0.5 mr-3" />
                        <div>
                          <h4 className="font-semibold text-sm">Free Consultation</h4>
                          <p className="text-sm text-muted-foreground">No cost to discuss your case</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Medical Images */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Treatment Support</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img 
                        src={medicalImage} 
                        alt="California mass tort treatment facilities" 
                        className="w-full h-32 object-cover rounded-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                      />
                      <p className="text-sm text-muted-foreground">
                        We can connect you with leading mass tort specialists throughout California.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Compensation Info */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Compensation Sources</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img 
                        src={compensationImage} 
                        alt="Mass tort compensation calculator" 
                        className="w-full h-32 object-cover rounded-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                      />
                      <div className="space-y-2 text-sm">
                        <p>• Product Liability Settlements</p>
                        <p>• Personal Injury Lawsuits</p>
                        <p>• Multidistrict Litigation</p>
                        <p>• Class Action Settlements</p>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="border-t pt-6">
                    <div className="text-center">
                      <Badge variant="secondary" className="mb-3">No Fees Unless We Win</Badge>
                      <p className="text-sm text-muted-foreground">
                        Free consultation. We advance all costs. You pay nothing unless we secure compensation for your mass tort case.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Don't Wait Section - Identical to Mesothelioma */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">
            Don't Wait - Time Limits Apply for California Mass Tort Cases
          </h2>
          <p className="text-xl mb-8">
            California has strict statutes of limitations for mass tort cases. Missing these deadlines could forever bar your right to compensation. Contact us today for your free consultation.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-4"
              onClick={() => window.location.href = '/mass-torts-case-evaluation'}
            >
              Start Free Case Evaluation
            </Button>
            <Button 
              size="lg" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold px-8 py-4 transition-all duration-300"
              onClick={() => window.location.href = 'tel:8181234567'}
            >
              <span className="text-white group-hover:text-red-600">Call (818) 123-4567</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MassTorts;