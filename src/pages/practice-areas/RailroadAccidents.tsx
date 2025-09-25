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
  Train,
  Gavel,
  Calculator,
  HelpCircle
} from 'lucide-react';
import heroBackground from '@/assets/railroad-hero-bg.jpg';
import sidebarImage from '@/assets/railroad-sidebar.jpg';
import diagnosisProcessImage from '@/assets/railroad-diagnosis-process.jpg';
import legalProcessImage from '@/assets/railroad-legal-process.jpg';
import felaClaimsImage from '@/assets/railroad-fela-claims.jpg';
import exposureSitesImage from '@/assets/california-railroad-sites.jpg';
import medicalImage from '@/assets/railroad-medical-facility.jpg';
import compensationImage from '@/assets/railroad-compensation-calculator.jpg';
import resourcesImage from '@/assets/railroad-resources.jpg';
import gradeCrossingImage from '@/assets/railroad-grade-crossing.jpg';
import SEO from '@/components/SEO';
import useScrollRestoration from '@/hooks/useScrollRestoration';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const RailroadAccidents: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isGoBackVisible, setIsGoBackVisible] = useState(false);
  const [formData, setFormData] = useState({
    accidentType: '',
    accidentDate: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useScrollRestoration();

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'diagnosis-steps', label: 'WHAT TO DO AFTER ACCIDENT', icon: Stethoscope },
    { id: 'fela-claims', label: 'FELA CLAIMS', icon: Gavel },
    { id: 'types-accidents', label: 'TYPES OF ACCIDENTS', icon: Train },
    { id: 'legal-process', label: 'LEGAL PROCESS', icon: Shield },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
    { id: 'resources', label: 'RESOURCES', icon: Building }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsGoBackVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating background layers with 3D effects
      const layers = [
        { selector: '.floating-layer-back', y: 30, duration: 14, rotationY: 2 },
        { selector: '.floating-layer-mid', x: 40, duration: 18, rotationX: 1 },
        { selector: '.floating-layer-front', y: 20, x: 25, duration: 10, rotation: 2 }
      ];

      layers.forEach(layer => {
        gsap.to(layer.selector, {
          y: layer.y || 0,
          x: layer.x || 0,
          rotation: layer.rotation || 0,
          rotationY: layer.rotationY || 0,
          rotationX: layer.rotationX || 0,
          duration: layer.duration,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1
        });
      });

      // Parallax effects on scroll
      gsap.utils.toArray('.parallax-element').forEach((element: any) => {
        gsap.to(element, {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

      // Content sections animation with 3D transforms
      gsap.fromTo('.content-section',
        { 
          opacity: 0, 
          y: 40,
          rotationX: 5,
          transformPerspective: 1000
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.content-section',
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
    window.location.href = '/practice-areas/railroad-accidents/case-evaluation';
  };

  const goBack = () => {
    const scrollPosition = sessionStorage.getItem(`scrollPosition_/practice-areas/railroad-accidents`);
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
    if (scrollPosition) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(scrollPosition, 10));
      }, 100);
    }
  };

  const faqData = [
    {
      question: "What should I do immediately after a railroad accident in California?",
      answer: "First, ensure your safety and call 911. Get medical attention even if injuries seem minor, as some symptoms appear later. Document the scene with photos and gather witness information. Report the accident to appropriate agencies but avoid giving statements to railroad representatives without legal counsel. Contact a railroad accident attorney immediately to protect your rights."
    },
    {
      question: "What is FELA and how does it differ from workers' compensation?",
      answer: "The Federal Employers Liability Act (FELA) is a federal law covering railroad workers injured on the job. Unlike workers' compensation, FELA requires proving employer negligence but allows full compensation including pain and suffering. FELA provides no automatic medical benefits during case prosecution but offers unlimited damage recovery. You have three years in California to file a FELA claim."
    },
    {
      question: "How long do I have to file a railroad accident lawsuit in California?",
      answer: "For FELA claims, you have three years from the date of injury or discovery of occupational disease. For passenger and third-party claims against railroads, the standard two-year personal injury statute applies. Government entity claims require six-month notice. Time limits vary by case type, so immediate legal consultation is crucial to preserve your rights."
    },
    {
      question: "Can I sue if I was partially at fault for the railroad accident?",
      answer: "Yes. Both California personal injury law and FELA use comparative negligence, allowing recovery even if you're partially at fault. Your compensation reduces proportionally to your fault percentage. For example, if you're 20% at fault for a $100,000 case, you'd receive $80,000. Railroad companies often claim victim fault to reduce payouts, making experienced representation essential."
    },
    {
      question: "What types of damages can I recover in a California railroad accident case?",
      answer: "You can recover economic damages (medical expenses, lost wages, future earnings, rehabilitation costs) and non-economic damages (pain and suffering, emotional distress, loss of enjoyment). In cases involving willful misconduct, punitive damages may apply. FELA claims allow full compensation without damage caps, while some other claims may have limitations."
    },
    {
      question: "Who can be held liable in a railroad accident case?",
      answer: "Multiple parties may be liable including railroad companies, equipment manufacturers, maintenance contractors, government entities responsible for crossings, and other drivers in crossing accidents. Railroad companies have extensive insurance and legal teams, making experienced representation crucial for identifying all liable parties and maximizing recovery."
    },
    {
      question: "What evidence is important in railroad accident cases?",
      answer: "Critical evidence includes event recorder data, signal records, maintenance logs, employee training records, Federal Railroad Administration inspection reports, witness statements, photographs, medical records, and expert accident reconstruction. Evidence can disappear quickly, making immediate legal action essential."
    },
    {
      question: "How are railroad accident settlements calculated?",
      answer: "Settlements consider medical expenses, lost wages, future earnings, pain and suffering, disability, and life care needs. FELA cases allow full damage recovery without caps. Factors include injury severity, age, occupation, life expectancy, and degree of railroad negligence. Experienced attorneys use medical economists and life care planners for accurate valuations."
    },
    {
      question: "What makes railroad accident cases different from other personal injury cases?",
      answer: "Railroad cases involve federal regulations, specialized laws like FELA, complex technical evidence, multiple potential defendants, and unique insurance arrangements. Railroad companies have experienced defense teams and extensive resources. The technical nature of railroad operations requires attorneys with specific knowledge and experience."
    },
    {
      question: "Can family members recover damages in railroad accident cases?",
      answer: "Yes. Spouses can recover for loss of consortium, children for loss of parental guidance, and family members for wrongful death damages including funeral expenses, lost financial support, and loss of companionship. FELA allows broader family recovery than many state laws."
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden" style={{ 
      perspective: '1200px',
      transformStyle: 'preserve-3d'
    }}>
      <SEO 
        title="California Railroad Accident Lawyer | Train Accident Attorney | FELA Claims | Trembach Law Firm"
        description="Former defense attorney fighting for California railroad accident victims. FELA claims, train derailments, crossing accidents. Free consultation. No fees unless we win."
        keywords="California railroad accident lawyer, train accident attorney, FELA lawyer, railroad injury attorney, train derailment lawyer, grade crossing accident, Metrolink accident, Amtrak accident, railroad worker injury, locomotive accident"
        canonical="https://www.trembachlawfirm.com/practice-areas/railroad-accidents"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": "Trembach Law Firm - Railroad Accident Lawyers",
          "description": "California railroad accident law firm specializing in FELA claims, train accidents, and railroad injuries",
          "url": "https://www.trembachlawfirm.com/practice-areas/railroad-accidents/",
          "telephone": "+18181234567",
          "areaServed": "California",
          "priceRange": "No fees unless we win"
        }}
      />

      {/* 3D Floating Background Layers */}
      <div className="floating-layer-back fixed inset-0 opacity-20 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" style={{ transform: 'translateZ(-500px)' }} />
      <div className="floating-layer-mid fixed inset-0 opacity-15 bg-gradient-to-tr from-transparent via-accent/5 to-secondary/10 pointer-events-none" style={{ transform: 'translateZ(-250px)' }} />
      <div className="floating-layer-front fixed inset-0 opacity-10 bg-gradient-to-bl from-primary/5 to-transparent pointer-events-none" style={{ transform: 'translateZ(-100px)' }} />

      {/* Go Back Button */}
      <div className={`fixed top-20 left-6 z-50 transition-all duration-500 ease-out ${
        isGoBackVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}>
        <Button 
          variant="ghost" 
          onClick={goBack}
          className="bg-black/20 text-white hover:bg-black/40 backdrop-blur-sm border border-white/20 hover:scale-105 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Go Back
        </Button>
      </div>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                🚂 Railroad Accident Specialists
              </Badge>
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                ⚖️ FELA Claims Expert
              </Badge>
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                🛡️ Former Defense Attorney
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
              California Railroad Accident Attorneys
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg text-white">Former Defense Attorney Advantage</span>
            </div>
            
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              When railroad negligence derails your life, our former defense attorney experience gets you back on track with maximum compensation under FELA and personal injury law.
            </p>
            
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg hover:scale-105 transition-all duration-300"
              onClick={() => window.location.href = '/practice-areas/railroad-accidents/case-evaluation'}
            >
              FREE RAILROAD ACCIDENT CONSULTATION
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
                    className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-300 rounded-md hover:scale-105 ${
                      activeTab === tab.id 
                        ? 'bg-white text-primary shadow-lg' 
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
            <section id="overview" className="content-section mb-12 hover-glow-primary transition-all duration-500">
              <Card className="glass-card border-primary/20">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-red-600 mb-6">California Railroad Accident Attorneys</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-xl max-w-none mb-6">
                    <p className="text-xl leading-relaxed mb-4">
                      California's extensive railroad network carries millions of passengers and tons of freight daily, but with this vital transportation comes significant risks. From devastating Metrolink collisions to freight train derailments, railroad accidents can cause catastrophic injuries, permanent disabilities, and wrongful death.
                    </p>
                    
                    <p className="text-xl leading-relaxed">`
                      At Trembach Law Firm, our former defense attorney brings insider knowledge to fighting for railroad accident victims throughout California. We understand the complex federal regulations governing railroads, the tactics insurance companies use to minimize claims, and the specialized medical and economic evidence needed to prove your case's full value.
                    </p>
                  </div>

                  <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                    <CollapsibleTrigger asChild>
                      <Button variant="outline" className="w-full justify-between mb-4 hover:scale-105 transition-all duration-300 text-lg py-6">
                        Learn More About Our California Railroad Practice
                        {expandedSections.overview ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                          <CardHeader>
                            <CardTitle className="flex items-center group-hover:text-primary transition-colors text-lg">
                              <Train className="w-6 h-6 mr-3 text-primary" />
                              FELA Expertise
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-base leading-relaxed">Deep understanding of Federal Employers Liability Act providing railroad workers superior protection compared to workers' compensation, with unlimited recovery potential.</p>
                          </CardContent>
                        </Card>
                        
                        <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                          <CardHeader>
                            <CardTitle className="flex items-center group-hover:text-primary transition-colors text-lg">
                              <Map className="w-6 h-6 mr-3 text-primary" />
                              California Railroad Knowledge
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-base leading-relaxed">Extensive knowledge of California's rail systems including Metrolink, Caltrain, Amtrak, and freight operations, plus historical exposure sites and accident patterns.</p>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="bg-muted p-8 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-6">Why Choose Trembach Law Firm for Railroad Cases?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="flex items-start hover:scale-105 transition-transform duration-300">
                            <Shield className="w-6 h-6 text-primary mt-1 mr-4" />
                            <div>
                              <h4 className="font-semibold text-lg mb-2">Former Defense Experience</h4>
                              <p className="text-base text-muted-foreground leading-relaxed">Attorney Trembach's background defending railroad companies provides unique insights into corporate defense strategies.</p>
                            </div>
                          </div>
                          <div className="flex items-start hover:scale-105 transition-transform duration-300">
                            <Clock className="w-6 h-6 text-primary mt-1 mr-4" />
                            <div>
                              <h4 className="font-semibold text-lg mb-2">Expedited Process</h4>
                              <p className="text-base text-muted-foreground leading-relaxed">Understanding the urgency of railroad cases and working to secure compensation as quickly as possible.</p>
                            </div>
                          </div>
                          <div className="flex items-start hover:scale-105 transition-transform duration-300">
                            <Users className="w-6 h-6 text-primary mt-1 mr-4" />
                            <div>
                              <h4 className="font-semibold text-lg mb-2">Comprehensive Support</h4>
                              <p className="text-base text-muted-foreground leading-relaxed">Complete legal, medical, and emotional support throughout your railroad accident case.</p>
                            </div>
                          </div>
                          <div className="flex items-start hover:scale-105 transition-transform duration-300">
                            <Award className="w-6 h-6 text-primary mt-1 mr-4" />
                            <div>
                              <h4 className="font-semibold text-lg mb-2">No Win, No Fee</h4>
                              <p className="text-base text-muted-foreground leading-relaxed">Contingency fee arrangement - you pay nothing unless we win your case.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            </section>

            {/* What to Do After Railroad Accident */}
            <section id="diagnosis-steps" className="content-section mb-12">
              <Card className="glass-card border-primary/20 hover-glow-primary transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-red-600 mb-6">What to Do After Your Railroad Accident</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <img src={diagnosisProcessImage} alt="Railroad Accident Response Process" className="w-full h-64 object-cover rounded-lg mb-4" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <Card className="glass-card group hover-glow-green transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center text-green-600">
                          <Heart className="w-5 h-5 mr-2" />
                          Immediate Steps
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p>• Ensure safety and call 911 immediately</p>
                        <p>• Get medical attention even for minor injuries</p>
                        <p>• Document the scene with photos and videos</p>
                        <p>• Collect witness contact information</p>
                        <p>• Report to Federal Railroad Administration if applicable</p>
                        <p>• Contact a railroad accident attorney immediately</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card group hover-glow-destructive transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center text-red-600">
                          <AlertTriangle className="w-5 h-5 mr-2" />
                          Legal Protection Steps
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p>• Avoid giving statements to railroad representatives</p>
                        <p>• Don't accept quick settlement offers</p>
                        <p>• Preserve all evidence and documentation</p>
                        <p>• Keep detailed records of injuries and treatment</p>
                        <p>• Understand FELA vs personal injury rights</p>
                        <p>• Act quickly - time limits apply to claims</p>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <Card className="glass-card border-primary/20 hover-glow-primary transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-red-600 mb-6">Free Case Evaluation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted p-8 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Get Your Free Railroad Accident Consultation</h3>
                    <p className="mb-6">Provide some basic information to help us understand your railroad accident case better.</p>
                    
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Accident Date</label>
                          <Input
                            type="date"
                            value={formData.accidentDate}
                            onChange={(e) => setFormData(prev => ({ ...prev, accidentDate: e.target.value }))}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Accident Type</label>
                          <Select value={formData.accidentType} onValueChange={(value) => setFormData(prev => ({ ...prev, accidentType: value }))}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select accident type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="train-derailment">Train Derailment</SelectItem>
                              <SelectItem value="grade-crossing">Grade Crossing Accident</SelectItem>
                              <SelectItem value="railroad-worker-fela">Railroad Worker Injury (FELA)</SelectItem>
                              <SelectItem value="passenger-train">Passenger Train Accident</SelectItem>
                              <SelectItem value="freight-train">Freight Train Collision</SelectItem>
                              <SelectItem value="platform-station">Platform/Station Accident</SelectItem>
                              <SelectItem value="other">Other Railroad Accident</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 hover:scale-105 transition-all duration-300">
                        Start My Free FELA Consultation
                      </Button>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* FELA Claims Section */}
            <section id="fela-claims" className="content-section mb-12">
              <Card className="glass-card border-primary/20 hover-glow-primary transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-red-600 mb-6">Understanding FELA Claims in California</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <img src={felaClaimsImage} alt="FELA Claims Documentation" className="w-full h-64 object-cover rounded-lg mb-4" />
                  </div>
                  
                  <div className="prose prose-lg max-w-none mb-6">
                    <p className="text-lg leading-relaxed mb-4">
                      The Federal Employers Liability Act (FELA), enacted in 1908, provides the exclusive remedy for most railroad workers injured on the job. Unlike state workers' compensation systems that provide automatic benefits regardless of fault, FELA requires proving employer negligence but allows recovery of full damages including pain and suffering.
                    </p>
                  </div>

                  <Collapsible open={expandedSections.fela} onOpenChange={() => toggleSection('fela')}>
                    <CollapsibleTrigger asChild>
                      <Button variant="outline" className="w-full justify-between mb-4 hover:scale-105 transition-all duration-300">
                        Learn More About FELA vs Workers' Compensation
                        {expandedSections.fela ? <ChevronUp /> : <ChevronDown />}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="glass-card group hover-glow-green transition-all duration-300 hover:scale-105">
                          <CardHeader>
                            <CardTitle className="flex items-center text-green-600">
                              <Award className="w-5 h-5 mr-2" />
                              FELA Advantages
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <p>• Full compensation for all damages including pain and suffering</p>
                            <p>• No damage caps for most injuries</p>
                            <p>• Jury trials available for disputed cases</p>
                            <p>• Three-year statute of limitations in California</p>
                            <p>• Comparative negligence allows recovery even if partially at fault</p>
                          </CardContent>
                        </Card>
                        
                        <Card className="glass-card group hover-glow-destructive transition-all duration-300 hover:scale-105">
                          <CardHeader>
                            <CardTitle className="flex items-center text-red-600">
                              <AlertTriangle className="w-5 h-5 mr-2" />
                              FELA Requirements
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <p>• Must prove employer negligence contributed to injury</p>
                            <p>• More complex legal process requiring attorney representation</p>
                            <p>• No automatic medical benefits during case prosecution</p>
                            <p>• Potential for no recovery if negligence cannot be proven</p>
                          </CardContent>
                        </Card>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            </section>

            {/* Types of Accidents Section */}
            <section id="types-accidents" className="content-section mb-12">
              <Card className="glass-card border-primary/20 hover-glow-primary transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-red-600 mb-6">Types of Railroad Accidents in California</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <img src={gradeCrossingImage} alt="Railroad Grade Crossing" className="w-full h-64 object-cover rounded-lg mb-4" />
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Train Derailments</h3>
                      <p className="leading-relaxed mb-4">
                        Train derailments represent one of the most dangerous types of railroad accidents, with an average of three occurring daily across the United States. In California, derailments often result from track defects, equipment failures, excessive speed, or human error.
                      </p>
                    </div>

                    <Collapsible open={expandedSections.accidents} onOpenChange={() => toggleSection('accidents')}>
                      <CollapsibleTrigger asChild>
                        <Button variant="outline" className="w-full justify-between mb-4 hover:scale-105 transition-all duration-300">
                          Learn More About All Accident Types
                          {expandedSections.accidents ? <ChevronUp /> : <ChevronDown />}
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-6">
                        <div className="grid grid-cols-1 gap-6">
                          <Card className="glass-card hover-glow-primary transition-all duration-300 hover:scale-105">
                            <CardHeader>
                              <CardTitle>Grade Crossing Accidents</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p>Highway-rail grade crossings represent the intersection of automotive and rail traffic, creating significant accident risks. In 2022, there were 2,194 collisions at grade crossings nationwide, resulting in 274 fatalities and 810 injuries.</p>
                            </CardContent>
                          </Card>
                          
                          <Card className="glass-card hover-glow-primary transition-all duration-300 hover:scale-105">
                            <CardHeader>
                              <CardTitle>Passenger Train Accidents</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p>California's extensive passenger rail systems, including Metrolink, Amtrak, Caltrain, and various light rail networks, carry millions of riders annually. Passenger train accidents can involve collisions with other trains, derailments, platform incidents, and onboard injuries.</p>
                            </CardContent>
                          </Card>

                          <Card className="glass-card hover-glow-primary transition-all duration-300 hover:scale-105">
                            <CardHeader>
                              <CardTitle>Freight Train Collisions</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p>Freight trains carry enormous loads through California's ports, cities, and rural areas. These massive trains, often exceeding 100 cars and weighing thousands of tons, pose unique risks when accidents occur.</p>
                            </CardContent>
                          </Card>

                          <Card className="glass-card hover-glow-primary transition-all duration-300 hover:scale-105">
                            <CardHeader>
                              <CardTitle>Railroad Worker Injuries</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p>Railroad workers face unique occupational hazards that can cause serious injuries and occupational diseases. Under FELA, injured railroad workers have different rights than other employees, with the ability to sue their employers for negligence-based compensation.</p>
                            </CardContent>
                          </Card>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Legal Process Section */}
            <section id="legal-process" className="content-section mb-12">
              <Card className="glass-card border-primary/20 hover-glow-primary transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-red-600 mb-6">The Railroad Accident Legal Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <img src={legalProcessImage} alt="Railroad Legal Process" className="w-full h-64 object-cover rounded-lg mb-4" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <FileText className="w-5 h-5 mr-2 text-primary" />
                          Investigation & Evidence
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p>• Immediate accident scene investigation</p>
                        <p>• Federal Railroad Administration records review</p>
                        <p>• Equipment maintenance documentation</p>
                        <p>• Employee training and certification records</p>
                        <p>• Event recorder and signal data analysis</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Scale className="w-5 h-5 mr-2 text-primary" />
                          Legal Strategy
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p>• Federal regulation violation analysis</p>
                        <p>• Multiple defendant liability assessment</p>
                        <p>• Expert witness development</p>
                        <p>• Comprehensive damage calculations</p>
                        <p>• Settlement negotiations or trial preparation</p>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Compensation Section */}
            <section id="compensation" className="content-section mb-12">
              <Card className="glass-card border-primary/20 hover-glow-primary transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-red-600 mb-6">Maximizing Compensation in Railroad Cases</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <img src={compensationImage} alt="Railroad Compensation Calculator" className="w-full h-64 object-cover rounded-lg mb-4" />
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Life Care Planning</h3>
                      <p className="leading-relaxed mb-4">
                        Catastrophic railroad injuries often require lifetime care and support. Our medical economists and life care planners calculate comprehensive future needs including medical treatment, rehabilitation, home healthcare, and assistive technology.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card className="glass-card text-center hover-glow-primary transition-all duration-300 hover:scale-105">
                        <CardContent className="pt-6">
                          <Calculator className="w-8 h-8 text-primary mx-auto mb-4" />
                          <h4 className="font-semibold mb-2">Economic Damages</h4>
                          <p className="text-sm text-muted-foreground">Medical expenses, lost wages, future earnings, rehabilitation costs</p>
                        </CardContent>
                      </Card>
                      
                      <Card className="glass-card text-center hover-glow-primary transition-all duration-300 hover:scale-105">
                        <CardContent className="pt-6">
                          <Heart className="w-8 h-8 text-primary mx-auto mb-4" />
                          <h4 className="font-semibold mb-2">Non-Economic Damages</h4>
                          <p className="text-sm text-muted-foreground">Pain and suffering, emotional distress, loss of enjoyment</p>
                        </CardContent>
                      </Card>
                      
                      <Card className="glass-card text-center hover-glow-primary transition-all duration-300 hover:scale-105">
                        <CardContent className="pt-6">
                          <Gavel className="w-8 h-8 text-primary mx-auto mb-4" />
                          <h4 className="font-semibold mb-2">Punitive Damages</h4>
                          <p className="text-sm text-muted-foreground">When railroad conduct demonstrates willful disregard for safety</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section mb-12">
              <Card className="glass-card border-primary/20 hover-glow-primary transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-red-600 mb-6">Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {faqData.slice(0, 10).map((faq, index) => (
                      <Card key={index} className="glass-card hover-glow-primary transition-all duration-300">
                        <CardHeader>
                          <button
                            onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                            className="w-full text-left flex items-center justify-between hover:text-primary transition-colors"
                          >
                            <h4 className="font-semibold text-lg">{faq.question}</h4>
                            {expandedFaq === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                          </button>
                        </CardHeader>
                        {expandedFaq === index && (
                          <CardContent>
                            <p className="text-muted-foreground text-base leading-relaxed">{faq.answer}</p>
                          </CardContent>
                        )}
                      </Card>
                    ))}
                    
                    <div className="text-center mt-8">
                      <Button 
                        variant="outline" 
                        onClick={() => window.location.href = '/practice-areas/railroad-accidents/resources'}
                        className="hover:scale-105 transition-all duration-300 text-lg px-8 py-4"
                      >
                        View All 50+ FAQ Questions & Complete Resources
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Resources Section */}
            <section id="resources" className="content-section mb-12">
              <Card className="glass-card border-primary/20 hover-glow-primary transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-red-600 mb-6">Railroad Accident Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <img src={resourcesImage} alt="Railroad Legal Resources" className="w-full h-64 object-cover rounded-lg mb-4" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105 cursor-pointer" 
                          onClick={() => window.location.href = '/practice-areas/railroad-accidents/case-evaluation'}>
                      <CardContent className="pt-6 text-center">
                        <Scale className="w-8 h-8 text-primary mx-auto mb-4" />
                        <h4 className="font-semibold mb-2">Case Evaluation</h4>
                        <p className="text-sm text-muted-foreground">Free confidential evaluation of your railroad accident case</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105 cursor-pointer"
                          onClick={() => window.location.href = '/practice-areas/railroad-accidents/compensation-calculator'}>
                      <CardContent className="pt-6 text-center">
                        <Calculator className="w-8 h-8 text-primary mx-auto mb-4" />
                        <h4 className="font-semibold mb-2">Compensation Calculator</h4>
                        <p className="text-sm text-muted-foreground">Estimate potential compensation for your railroad accident</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105 cursor-pointer"
                          onClick={() => window.location.href = '/practice-areas/railroad-accidents/legal-guidance'}>
                      <CardContent className="pt-6 text-center">
                        <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
                        <h4 className="font-semibold mb-2">Legal Guidance</h4>
                        <p className="text-sm text-muted-foreground">Comprehensive legal guidance for railroad accident victims</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105 cursor-pointer"
                          onClick={() => window.location.href = '/practice-areas/railroad-accidents/medical-guidance'}>
                      <CardContent className="pt-6 text-center">
                        <Stethoscope className="w-8 h-8 text-primary mx-auto mb-4" />
                        <h4 className="font-semibold mb-2">Medical Guidance</h4>
                        <p className="text-sm text-muted-foreground">Medical care coordination for railroad accident victims</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105 cursor-pointer"
                          onClick={() => window.location.href = '/practice-areas/railroad-accidents/resources'}>
                      <CardContent className="pt-6 text-center">
                        <Building className="w-8 h-8 text-primary mx-auto mb-4" />
                        <h4 className="font-semibold mb-2">Complete Resources</h4>
                        <p className="text-sm text-muted-foreground">All 50+ FAQ questions and comprehensive resources</p>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Don't Wait Section */}
            <section className="content-section mb-12">
              <Card className="glass-card border-red-200 bg-red-50 hover-glow-destructive transition-all duration-500">
                <CardContent className="p-8">
                  <div className="text-center">
                    <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-red-600 mb-4">Don't Wait - Time Limits Apply for California</h2>
                    <p className="text-lg text-red-700 mb-6">
                      Railroad accident cases have strict time limits. FELA claims have a 3-year statute of limitations, while personal injury claims have 2 years. Evidence disappears and witnesses' memories fade.
                    </p>
                    <div className="space-y-4">
                      <Button 
                        size="lg"
                        className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg hover:scale-105 transition-all duration-300 mr-4"
                        onClick={() => window.location.href = '/practice-areas/railroad-accidents/case-evaluation'}
                      >
                        START YOUR FREE CASE EVALUATION NOW
                      </Button>
                      <div className="mt-4">
                        <p className="text-red-600 font-semibold">
                          <Phone className="w-4 h-4 inline mr-2" />
                          Call (818) 123-4567 - Available 24/7
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
          
          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card className="glass-card border-primary/20 hover-glow-primary transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-center text-primary">3 Ways to Start Your Case</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center mb-4">
                    <img src={sidebarImage} alt="Railroad Legal Consultation" className="w-full h-48 object-cover rounded-lg" />
                  </div>
                  
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white hover:scale-105 transition-all duration-300"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="text-white font-medium">Call (818) 123-4567</span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full hover:scale-105 transition-all duration-300 text-primary border-primary hover:bg-primary hover:text-white"
                    onClick={() => window.location.href = '/practice-areas/railroad-accidents/case-evaluation'}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    <span className="font-medium">Free Case Evaluation</span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full hover:scale-105 transition-all duration-300 text-primary border-primary hover:bg-primary hover:text-white"
                    onClick={() => window.location.href = 'mailto:info@trembachlawfirm.com'}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="font-medium">Email Consultation</span>
                  </Button>
                  
                  <div className="text-center text-sm text-muted-foreground mt-4">
                    <p>• No Fees Unless We Win</p>
                    <p>• Former Defense Attorney</p>
                    <p>• FELA Specialist</p>
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

export default RailroadAccidents;
