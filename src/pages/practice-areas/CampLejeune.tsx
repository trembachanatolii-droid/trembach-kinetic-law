import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
  ArrowLeft
} from 'lucide-react';
import heroBackground from '@/assets/camp-lejeune-hero-bg.jpg';
import sidebarImage from '@/assets/camp-lejeune-sidebar.jpg';
import conditionsImage from '@/assets/camp-lejeune-conditions.jpg';
import compensationImage from '@/assets/camp-lejeune-compensation.jpg';
import legalProcessImage from '@/assets/camp-lejeune-legal-process.jpg';
import resourcesImage from '@/assets/camp-lejeune-resources.jpg';
import diagnosisImage from '@/assets/camp-lejeune-diagnosis.jpg';
import testingImage from '@/assets/camp-lejeune-testing.jpg';
import exposureSitesImage from '@/assets/camp-lejeune-exposure-sites.jpg';
import waterContaminationImage from '@/assets/camp-lejeune-water-contamination.jpg';
import medicalTestingImage from '@/assets/camp-lejeune-medical-testing.jpg';
import timelineImage from '@/assets/camp-lejeune-timeline.jpg';
import waterSystemsImage from '@/assets/camp-lejeune-water-systems.jpg';
import SEO from '@/components/SEO';
import { campLejeuneQuestions } from '@/content/campLejeuneQuestions';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const CampLejeune: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    timeAtBase: '',
    condition: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'conditions', label: 'QUALIFYING CONDITIONS', icon: Heart },
    { id: 'compensation', label: 'COMPENSATION', icon: AlertTriangle },
    { id: 'legal-process', label: 'LEGAL PROCESS', icon: Shield },
    { id: 'faq', label: 'FAQ', icon: MessageCircle },
    { id: 'resources', label: 'RESOURCES', icon: Building }
  ];

  const faqs = campLejeuneQuestions;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation with 3D effects
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50, rotationX: 10, z: -100 },
        { opacity: 1, y: 0, rotationX: 0, z: 0, duration: 1.2, ease: 'power2.out' }
      );

      // Content sections animation with stagger
      gsap.fromTo(contentRef.current?.querySelectorAll('.content-section'),
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
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

      // Enhanced card animations
      gsap.fromTo('.glass-card',
        { opacity: 0, y: 40, rotationY: 15 },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.glass-card',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
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
    window.location.href = '/camp-lejeune-case-evaluation';
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Camp Lejeune Water Contamination Lawyers | California Veterans Attorney"
        description="Former defense attorney fighting for Camp Lejeune victims in California. TCE, PCE, benzene exposure claims. Parkinson's, cancer, birth defects. No fees unless we win."
        canonical="/camp-lejeune"
      />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Go Back Button - positioned in hero overlay */}
        <div className="absolute top-20 left-6 z-20">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-black/40 text-white hover:bg-black/60 backdrop-blur-sm border border-white/20 font-medium text-base px-4 py-2 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-2xl">
              Camp Lejeune Water Contamination Claims
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1 drop-shadow-lg" />
              ))}
              <span className="ml-2 text-lg drop-shadow-lg">Fighting for Veterans Exposed to Toxic Water 1953-1987</span>
            </div>
            
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 text-lg shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = '/camp-lejeune-case-evaluation'}
            >
              START MY FREE CASE EVALUATION
            </Button>
          </div>
        </div>

        {/* Enhanced Navigation Tabs */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm border-t border-white/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 py-6">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => scrollToSection(tab.id)}
                    className={`flex items-center px-6 py-3 text-lg font-semibold transition-all duration-300 rounded-lg transform hover:scale-105 ${
                      activeTab === tab.id 
                        ? 'bg-white text-primary shadow-xl' 
                        : 'text-white hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    <IconComponent className="w-5 h-5 mr-3" />
                    <span className="font-bold">{tab.label}</span>
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
            
            {/* Overview Section - Enhanced Typography */}
            <section id="overview" className="content-section mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 font-display">California Camp Lejeune Water Contamination Attorneys</h2>
              
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-lg leading-relaxed mb-6 font-medium text-foreground">
                  From 1953 to 1987, over one million Marines, their families, and civilian workers at Camp Lejeune, North Carolina, were unknowingly exposed to drinking water contaminated with dangerous industrial solvents and chemicals. This represents one of the worst water contamination disasters in United States history.
                </p>
                
                <p className="text-base leading-relaxed text-muted-foreground">
                  At Trembach Law Firm, we understand that California veterans who trained at Camp Lejeune are now facing serious health conditions decades later. With our unique background as a former defense attorney, we know the government's tactics and use that insider knowledge to fight for maximum compensation for your Camp Lejeune-related illnesses.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-6 text-lg py-4 font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                    Show More About Our California Camp Lejeune Practice
                    {expandedSections.overview ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors text-lg">
                          <AlertTriangle className="w-5 h-5 mr-2 text-primary" />
                          The Contamination Crisis
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-base">For over 30 years, Marines and families were exposed to toxic chemicals at concentrations 240 to 3,400 times safe levels. TCE, PCE, benzene, and vinyl chloride contaminated the water systems serving the entire base.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors text-lg">
                          <Heart className="w-5 h-5 mr-2 text-primary" />
                          Health Consequences
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-base">The contaminated water caused numerous cancers, Parkinson's disease, birth defects, and other serious conditions. California has thousands of affected veterans who deserve compensation.</p>
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
                          <p className="text-sm text-muted-foreground">Attorney Trembach's background defending companies provides unique insights into government defense strategies.</p>
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
                    <h3>The Camp Lejeune Justice Act</h3>
                    <p>
                      The Camp Lejeune Justice Act, signed into law in 2022, finally allows victims to sue the federal government for compensation. This groundbreaking legislation removes the legal barriers that previously protected the government from lawsuits and provides a clear path to justice for those exposed to the contaminated water.
                    </p>
                    
                    <h3>California Veterans Affected</h3>
                    <p>
                      Thousands of California veterans who trained at Camp Lejeune during their service are now facing serious health conditions. Many California Marines spent their entire boot camp and advanced training at Camp Lejeune, drinking, cooking with, and bathing in the contaminated water daily. California has one of the highest populations of affected veterans in the nation.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Free Case Evaluation</h2>
              
              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Get Your Free Consultation</h3>
                <p className="mb-6 text-base">Find out if you qualify for Camp Lejeune compensation in 60 seconds.</p>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Time at Camp Lejeune</label>
                      <Select value={formData.timeAtBase} onValueChange={(value) => setFormData(prev => ({ ...prev, timeAtBase: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select years..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1953-1960">1953-1960</SelectItem>
                          <SelectItem value="1961-1970">1961-1970</SelectItem>
                          <SelectItem value="1971-1980">1971-1980</SelectItem>
                          <SelectItem value="1981-1987">1981-1987</SelectItem>
                          <SelectItem value="multiple">Multiple Periods</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Health Condition</label>
                      <Select value={formData.condition} onValueChange={(value) => setFormData(prev => ({ ...prev, condition: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select condition..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="parkinsons">Parkinson's Disease</SelectItem>
                          <SelectItem value="bladder-cancer">Bladder Cancer</SelectItem>
                          <SelectItem value="kidney-cancer">Kidney Cancer</SelectItem>
                          <SelectItem value="liver-cancer">Liver Cancer</SelectItem>
                          <SelectItem value="leukemia">Leukemia</SelectItem>
                          <SelectItem value="lymphoma">Non-Hodgkin's Lymphoma</SelectItem>
                          <SelectItem value="myeloma">Multiple Myeloma</SelectItem>
                          <SelectItem value="birth-defects">Birth Defects</SelectItem>
                          <SelectItem value="other-cancer">Other Cancer</SelectItem>
                          <SelectItem value="other">Other Condition</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Start My Free Case Evaluation
                  </Button>
                </form>
              </div>
            </section>

            {/* Qualifying Conditions Section */}
            <section id="conditions" className="content-section mb-12">
              <img 
                src={conditionsImage} 
                alt="Camp Lejeune qualifying health conditions and medical evaluation" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h2 className="text-3xl font-bold text-primary mb-6">Qualifying Health Conditions</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="glass-card group hover-glow-primary">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors text-lg">
                      <Heart className="w-5 h-5 mr-2 text-primary" />
                      Presumptive Conditions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base mb-4">The VA recognizes eight presumptive conditions where the link to Camp Lejeune is already established, making claims easier to prove.</p>
                    <ul className="space-y-2 text-sm">
                      <li>• Adult Leukemia</li>
                      <li>• Aplastic Anemia</li>
                      <li>• Bladder Cancer</li>
                      <li>• Kidney Cancer</li>
                      <li>• Liver Cancer</li>
                      <li>• Multiple Myeloma</li>
                      <li>• Non-Hodgkin's Lymphoma</li>
                      <li>• Parkinson's Disease</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="glass-card group hover-glow-primary">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors text-lg">
                      <Stethoscope className="w-5 h-5 mr-2 text-primary" />
                      Additional Conditions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base mb-4">Over 70 other conditions may qualify for compensation, even if not on the VA's presumptive list.</p>
                    <ul className="space-y-2 text-sm">
                      <li>• Birth Defects</li>
                      <li>• Breast Cancer</li>
                      <li>• Cervical Cancer</li>
                      <li>• Colorectal Cancer</li>
                      <li>• Esophageal Cancer</li>
                      <li>• Lung Cancer</li>
                      <li>• Prostate Cancer</li>
                      <li>• Infertility & Miscarriage</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Compensation Section */}
            <section id="compensation" className="content-section mb-12">
              <img 
                src={compensationImage} 
                alt="Camp Lejeune compensation amounts and settlement calculator" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h2 className="text-3xl font-bold text-primary mb-6">Camp Lejeune Compensation</h2>
              
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary text-lg">
                      <Scale className="w-5 h-5 mr-2" />
                      Settlement Ranges by Condition
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-base">High-Value Conditions</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex justify-between"><span>Parkinson's Disease:</span> <span className="font-semibold">$450,000-$1.2M</span></li>
                          <li className="flex justify-between"><span>Wrongful Death:</span> <span className="font-semibold">$500,000-$1.5M+</span></li>
                          <li className="flex justify-between"><span>Multiple Myeloma:</span> <span className="font-semibold">$350,000-$950,000</span></li>
                          <li className="flex justify-between"><span>Leukemia:</span> <span className="font-semibold">$400,000-$1M</span></li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-base">Other Cancer Conditions</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex justify-between"><span>Bladder Cancer:</span> <span className="font-semibold">$200,000-$800,000</span></li>
                          <li className="flex justify-between"><span>Kidney Cancer:</span> <span className="font-semibold">$300,000-$900,000</span></li>
                          <li className="flex justify-between"><span>Liver Cancer:</span> <span className="font-semibold">$250,000-$750,000</span></li>
                          <li className="flex justify-between"><span>Birth Defects:</span> <span className="font-semibold">$200,000-$600,000</span></li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary text-lg">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Elective Option vs. Litigation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-base">Elective Option (Fast Track)</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Settlement: $75,000-$150,000</li>
                          <li>• Timeline: 60-180 days</li>
                          <li>• No causation proof required</li>
                          <li>• Lower compensation but faster</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-base">Traditional Litigation</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Settlement: $250,000-$1.5M+</li>
                          <li>• Timeline: 12-24 months</li>
                          <li>• Full case development</li>
                          <li>• Maximum compensation potential</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Legal Process Section */}
            <section id="legal-process" className="content-section mb-12">
              <img 
                src={legalProcessImage} 
                alt="Camp Lejeune legal process and federal court litigation" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h2 className="text-3xl font-bold text-primary mb-6">Legal Process for Camp Lejeune Claims</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Card className="glass-card text-center">
                    <CardHeader>
                      <Badge className="mx-auto mb-2">Step 1</Badge>
                      <CardTitle className="text-lg">Case Review</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Free consultation to assess your eligibility and potential claim value</p>
                    </CardContent>
                  </Card>

                  <Card className="glass-card text-center">
                    <CardHeader>
                      <Badge className="mx-auto mb-2">Step 2</Badge>
                      <CardTitle className="text-lg">Documentation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Gather military records, medical documentation, and exposure evidence</p>
                    </CardContent>
                  </Card>

                  <Card className="glass-card text-center">
                    <CardHeader>
                      <Badge className="mx-auto mb-2">Step 3</Badge>
                      <CardTitle className="text-lg">Filing Claims</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Submit administrative claim or federal lawsuit under Justice Act</p>
                    </CardContent>
                  </Card>

                  <Card className="glass-card text-center">
                    <CardHeader>
                      <Badge className="mx-auto mb-2">Step 4</Badge>
                      <CardTitle className="text-lg">Resolution</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Negotiate settlement or proceed to trial for maximum compensation</p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary text-lg">
                      <Shield className="w-5 h-5 mr-2" />
                      The Camp Lejeune Justice Act Advantage
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-base">Legal Breakthroughs</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start"><span className="text-primary mr-2">•</span>Waives government sovereign immunity</li>
                          <li className="flex items-start"><span className="text-primary mr-2">•</span>Allows jury trials against federal government</li>
                          <li className="flex items-start"><span className="text-primary mr-2">•</span>Lower burden of proof than typical toxic cases</li>
                          <li className="flex items-start"><span className="text-primary mr-2">•</span>Specific procedures to help victims</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-base">Who Can File</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start"><span className="text-primary mr-2">•</span>Veterans stationed at Camp Lejeune</li>
                          <li className="flex items-start"><span className="text-primary mr-2">•</span>Military family members who lived on base</li>
                          <li className="flex items-start"><span className="text-primary mr-2">•</span>Civilian employees and contractors</li>
                          <li className="flex items-start"><span className="text-primary mr-2">•</span>Children exposed in utero</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Resources Section */}
            <section id="resources" className="content-section mb-12">
              <img 
                src={resourcesImage} 
                alt="Camp Lejeune government resources and federal agencies" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h2 className="text-3xl font-bold text-primary mb-6">Camp Lejeune Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary text-lg">
                      <Building className="w-5 h-5 mr-2" />
                      Government Agencies
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-base">Department of Veterans Affairs</h4>
                        <p className="text-sm text-muted-foreground">Provides healthcare for 15 Camp Lejeune-related conditions</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-base">Agency for Toxic Substances (ATSDR)</h4>
                        <p className="text-sm text-muted-foreground">Conducts health studies and exposure assessments</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-base">National Personnel Records Center</h4>
                        <p className="text-sm text-muted-foreground">Military service records and documentation</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary text-lg">
                      <Map className="w-5 h-5 mr-2" />
                      Legal Resources
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-base">Camp Lejeune Justice Act</h4>
                        <p className="text-sm text-muted-foreground">Federal law allowing lawsuits against the government</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-base">Eastern District of North Carolina</h4>
                        <p className="text-sm text-muted-foreground">Federal court handling Camp Lejeune litigation</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-base">California Veterans Resources</h4>
                        <p className="text-sm text-muted-foreground">State-specific support and medical facilities</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* FAQ Section with 50 Questions */}
            <section id="faq" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="glass-card group hover-glow-primary border-l-4 border-l-primary transition-all duration-300 hover:scale-105 cursor-pointer">
                    <CardHeader 
                      className="cursor-pointer transition-colors group-hover:bg-primary/5"
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    >
                      <CardTitle className="flex items-center justify-between text-lg group-hover:text-primary transition-colors">
                        {faq.question}
                        {expandedFaq === index ? <ChevronUp className="transition-transform duration-200" /> : <ChevronDown className="transition-transform duration-200" />}
                      </CardTitle>
                    </CardHeader>
                    {expandedFaq === index && (
                      <CardContent className="animate-fade-in">
                        <p className="text-muted-foreground text-base leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar - 3 Ways to Start Your Case */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Main CTA Card */}
              <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">3 Ways to Start Your Case</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <img 
                    src={sidebarImage} 
                    alt="Camp Lejeune veterans legal consultation" 
                    className="w-full h-48 object-cover rounded-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  />
                  
                  <div className="space-y-4">
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-3 transition-all duration-300 hover:scale-105"
                      onClick={() => window.location.href = 'tel:8181234567'}
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call (818) 123-4567
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white text-lg py-3 transition-all duration-300 hover:scale-105"
                      onClick={() => window.location.href = '/camp-lejeune-case-evaluation'}
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Free Case Evaluation
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Facts */}
              <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">Limited Time</h4>
                      <p className="text-sm text-muted-foreground">Deadlines apply for Camp Lejeune claims</p>
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

              {/* Settlement Ranges */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Settlement Ranges</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p>• Parkinson's Disease: $450,000-$1.2M</p>
                    <p>• Cancer Cases: $200,000-$800,000</p>
                    <p>• Birth Defects: $200,000-$600,000</p>
                    <p>• Wrongful Death: $500,000-$1.5M+</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">
            Don't Wait - Time Limits Apply for Camp Lejeune Claims
          </h2>
          <p className="text-xl mb-8">
            The Camp Lejeune Justice Act has strict deadlines. 
            Contact us today for your free consultation.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-4"
              onClick={() => window.location.href = '/camp-lejeune-case-evaluation'}
            >
              Start Free Case Evaluation
            </Button>
            <Button 
              size="lg" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold px-8 py-4 transition-all duration-300"
              onClick={() => window.location.href = 'tel:8181234567'}
            >
              Call (818) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampLejeune;