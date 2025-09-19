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
  Droplets,
  FlaskConical
} from 'lucide-react';
import heroBackground from '@/assets/pfas-hero-bg.jpg';
import sidebarImage from '@/assets/pfas-sidebar.jpg';
import contaminationImage from '@/assets/pfas-contamination-sources.jpg';
import healthEffectsImage from '@/assets/pfas-health-effects.jpg';
import legalProcessImage from '@/assets/pfas-legal-process.jpg';
import waterTreatmentImage from '@/assets/pfas-water-treatment.jpg';
import SEO from '@/components/SEO';
import { pfasQuestions } from '@/content/pfasQuestions';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const PFASExposure: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    exposureLocation: '',
    healthCondition: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'health-effects', label: 'HEALTH EFFECTS', icon: Heart },
    { id: 'contamination', label: 'CONTAMINATION SOURCES', icon: Droplets },
    { id: 'legal-process', label: 'LEGAL PROCESS', icon: Shield },
    { id: 'faq', label: 'FAQ', icon: MessageCircle },
    { id: 'resources', label: 'RESOURCES', icon: Building }
  ];

  const faqs = pfasQuestions;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = '/pfas-case-evaluation';
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="PFAS Exposure Lawyers California | Forever Chemicals Water Contamination Attorney | Trembach Law Firm"
        description="California PFAS exposure attorney fighting for victims of forever chemicals water contamination. Kidney cancer, thyroid disease, liver damage claims. Former defense attorney. Free 24/7 consultation. No fees unless we win."
        canonical="/pfas-exposure"
      />

      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Go Back Button - positioned in hero overlay */}
        <div className={`absolute top-20 left-6 z-20 transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
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
              California's Leading PFAS Exposure Attorneys
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1 drop-shadow-lg" />
              ))}
              <span className="ml-2 text-lg drop-shadow-lg">Fighting for Victims of Forever Chemicals Water Contamination</span>
            </div>
            
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 text-lg shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = '/pfas-case-evaluation'}
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
          
          {/* Sidebar - 3 Ways to Start Your Case */}
          <div className="lg:col-span-1 lg:order-2">
            <div className="sticky top-8 space-y-6">
              {/* Main CTA Card */}
              <Card className="relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${sidebarImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50" />
                <CardContent className="relative z-10 p-8 text-white">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">3 Ways to</h3>
                    <h3 className="text-2xl font-bold mb-4">Start Your Case</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                      onClick={() => window.location.href = 'tel:8181234567'}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call (818) 123-4567
                    </Button>
                    
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                      onClick={() => window.location.href = '/pfas-case-evaluation'}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Free Case Evaluation
                    </Button>
                    
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                      onClick={() => window.location.href = '/pfas-case-evaluation'}
                    >
                      Schedule Consultation
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Facts */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">Limited Time</h4>
                      <p className="text-sm text-muted-foreground">Deadlines apply for PFAS claims</p>
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

              {/* Compensation Types */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Types of Damages Available</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p>• Medical Expenses & Treatment Costs</p>
                    <p>• Lost Wages & Earning Capacity</p>
                    <p>• Pain & Suffering</p>
                    <p>• Property Damage & Devaluation</p>
                    <p>• Medical Monitoring Costs</p>
                    <p>• Punitive Damages (when applicable)</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 lg:order-1" ref={contentRef}>
            
            {/* Overview Section */}
            <section id="overview" className="content-section mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 font-display">California PFAS Exposure Attorneys</h2>
              
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-lg leading-relaxed mb-6 font-medium text-foreground">
                  Per- and polyfluoroalkyl substances (PFAS) represent a group of over 9,000 synthetic chemicals that have earned the notorious designation of "forever chemicals" due to their extraordinary persistence in the environment and human body. From 1940s industrial applications to modern consumer products, these chemicals have contaminated California's water supplies, affecting millions of residents.
                </p>
                
                <p className="text-base leading-relaxed text-muted-foreground">
                  At Trembach Law Firm, we understand that California residents exposed to PFAS through contaminated drinking water now face serious health conditions decades later. With our unique background as a former defense attorney, we know the manufacturers' tactics and use that insider knowledge to fight for maximum compensation for your PFAS-related injuries.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="w-full justify-between mb-6 text-lg py-4 font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Show More About Our California PFAS Practice
                    {expandedSections.overview ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors text-lg">
                          <Droplets className="w-5 h-5 mr-2 text-primary" />
                          The Forever Chemicals Crisis
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-base">PFAS chemicals persist indefinitely in the environment and human body. At least 146 California water systems serving 16 million residents have detected PFAS contamination, with levels often exceeding health guidelines.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors text-lg">
                          <Heart className="w-5 h-5 mr-2 text-primary" />
                          Serious Health Consequences
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-base">PFAS exposure causes kidney cancer, testicular cancer, thyroid disease, liver damage, and other serious conditions. California has thousands of affected residents who deserve compensation.</p>
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
                          <p className="text-sm text-muted-foreground">Attorney Trembach's background defending companies provides unique insights into manufacturer defense strategies.</p>
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
                    <h3>What Are PFAS Forever Chemicals?</h3>
                    <p>
                      PFAS possess a unique carbon-fluorine bond – one of the strongest chemical bonds in nature – that makes them virtually indestructible under normal environmental conditions. This remarkable stability, while making PFAS useful for various industrial applications, has created an unprecedented environmental and public health crisis that continues to unfold across California and the nation.
                    </p>
                    
                    <h3>California's PFAS Contamination Challenge</h3>
                    <p>
                      California faces particular challenges with PFAS contamination due to its extensive military installations, airports, industrial facilities, and firefighting training sites where aqueous film-forming foam (AFFF) containing PFAS was routinely used for decades. Recent testing has detected PFAS in water systems throughout the state, affecting millions of residents.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Free PFAS Case Evaluation</h2>
              
              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Get Your Free Consultation</h3>
                <p className="mb-6 text-base">Find out if you qualify for PFAS exposure compensation in 60 seconds.</p>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Exposure Location</label>
                      <Input
                        placeholder="City or Military Base"
                        value={formData.exposureLocation}
                        onChange={(e) => setFormData(prev => ({ ...prev, exposureLocation: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Health Condition</label>
                      <Select 
                        value={formData.healthCondition} 
                        onValueChange={(value) => setFormData(prev => ({ ...prev, healthCondition: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select condition..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kidney-cancer">Kidney Cancer</SelectItem>
                          <SelectItem value="testicular-cancer">Testicular Cancer</SelectItem>
                          <SelectItem value="thyroid-disease">Thyroid Disease</SelectItem>
                          <SelectItem value="liver-damage">Liver Damage</SelectItem>
                          <SelectItem value="ulcerative-colitis">Ulcerative Colitis</SelectItem>
                          <SelectItem value="high-cholesterol">High Cholesterol</SelectItem>
                          <SelectItem value="other">Other PFAS-Related Condition</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3"
                  >
                    GET FREE CASE EVALUATION
                  </Button>
                </form>
              </div>
            </section>

            {/* Health Effects Section */}
            <section id="health-effects" className="content-section mb-16">
              <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold text-primary mb-6">Health Effects of PFAS Exposure</h2>
                  <p className="text-lg text-foreground mb-4">
                    Scientific research has established alarming connections between PFAS exposure and numerous serious health conditions. The International Agency for Research on Cancer classified PFOA as "carcinogenic to humans."
                  </p>
                </div>
                <div className="md:w-1/3">
                  <img 
                    src={healthEffectsImage} 
                    alt="Medical testing and health evaluation equipment"
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>

              <Collapsible open={expandedSections.health} onOpenChange={() => toggleSection('health')}>
                <CollapsibleTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="w-full justify-between mb-6 text-lg py-4 font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Learn More About PFAS Health Effects
                    {expandedSections.health ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="flex items-center text-primary text-lg">
                          <AlertTriangle className="w-5 h-5 mr-2" />
                          Cancer Risks
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-base mb-3">Multiple studies demonstrate increased cancer risks:</p>
                        <ul className="text-sm space-y-1">
                          <li>• Kidney cancer (strongest association)</li>
                          <li>• Testicular cancer</li>
                          <li>• Thyroid cancer</li>
                          <li>• Potentially liver and prostate cancer</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="flex items-center text-primary text-lg">
                          <Stethoscope className="w-5 h-5 mr-2" />
                          Thyroid & Endocrine Effects
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-base mb-3">PFAS interfere with hormone production:</p>
                        <ul className="text-sm space-y-1">
                          <li>• Hypothyroidism/Hyperthyroidism</li>
                          <li>• Hashimoto's disease</li>
                          <li>• Thyroid nodules</li>
                          <li>• Disrupted metabolism and growth</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="flex items-center text-primary text-lg">
                          <Heart className="w-5 h-5 mr-2" />
                          Reproductive Health
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-base mb-3">Impacts on fertility and pregnancy:</p>
                        <ul className="text-sm space-y-1">
                          <li>• Decreased fertility in men and women</li>
                          <li>• Pregnancy complications</li>
                          <li>• Reduced birth weight</li>
                          <li>• Developmental effects in children</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="flex items-center text-primary text-lg">
                          <Shield className="w-5 h-5 mr-2" />
                          Immune System
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-base mb-3">Suppressed immune function:</p>
                        <ul className="text-sm space-y-1">
                          <li>• Reduced vaccine effectiveness</li>
                          <li>• Increased infection susceptibility</li>
                          <li>• Impaired cancer detection</li>
                          <li>• Autoimmune disorders</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <h3>Liver Damage and Metabolic Effects</h3>
                    <p>
                      The liver serves as a primary target organ for PFAS accumulation, with research documenting various forms of hepatotoxicity including non-alcoholic fatty liver disease (NAFLD), elevated liver enzymes, and altered lipid metabolism. PFAS exposure consistently correlates with elevated cholesterol levels, particularly concerning for cardiovascular health.
                    </p>
                    
                    <h3>Kidney Disease and Function</h3>
                    <p>
                      Beyond cancer risk, PFAS exposure has been associated with chronic kidney disease and decreased kidney function. The kidneys play a crucial role in PFAS elimination from the body, but prolonged exposure may damage kidney tissue and impair this clearance mechanism.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Contamination Sources Section */}
            <section id="contamination" className="content-section mb-16">
              <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold text-primary mb-6">PFAS Contamination Sources in California</h2>
                  <p className="text-lg text-foreground mb-4">
                    California faces widespread PFAS contamination from multiple sources, affecting millions of residents through contaminated drinking water, soil, and consumer products.
                  </p>
                </div>
                <div className="md:w-1/3">
                  <img 
                    src={contaminationImage} 
                    alt="Industrial chemical plant and contamination sources"
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>

              <Collapsible open={expandedSections.contamination} onOpenChange={() => toggleSection('contamination')}>
                <CollapsibleTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="w-full justify-between mb-6 text-lg py-4 font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Learn More About PFAS Contamination Sources
                    {expandedSections.contamination ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="flex items-center text-primary text-lg">
                          <Building className="w-5 h-5 mr-2" />
                          Military Installations
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-base mb-3">Major contaminated bases include:</p>
                        <ul className="text-sm space-y-1">
                          <li>• Travis Air Force Base</li>
                          <li>• Marine Corps Base Camp Pendleton</li>
                          <li>• Naval Air Station North Island</li>
                          <li>• Edwards Air Force Base</li>
                          <li>• Fort Ord (former)</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="flex items-center text-primary text-lg">
                          <Map className="w-5 h-5 mr-2" />
                          Industrial Facilities
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-base mb-3">Manufacturing and processing sites:</p>
                        <ul className="text-sm space-y-1">
                          <li>• Chemical manufacturing plants</li>
                          <li>• Electronics production facilities</li>
                          <li>• Textile treatment operations</li>
                          <li>• Paper and packaging industries</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="flex items-center text-primary text-lg">
                          <FlaskConical className="w-5 h-5 mr-2" />
                          Firefighting Foam Sites
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-base mb-3">AFFF usage locations:</p>
                        <ul className="text-sm space-y-1">
                          <li>• Commercial airports</li>
                          <li>• Fire training facilities</li>
                          <li>• Oil refineries and terminals</li>
                          <li>• Chemical storage facilities</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="flex items-center text-primary text-lg">
                          <Droplets className="w-5 h-5 mr-2" />
                          Water System Contamination
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-base mb-3">Affected counties include:</p>
                        <ul className="text-sm space-y-1">
                          <li>• Orange County (extensive contamination)</li>
                          <li>• Los Angeles County</li>
                          <li>• San Diego County</li>
                          <li>• Sacramento and Riverside Counties</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <h3>California's PFAS Contamination Statistics</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
                      <div className="text-center p-4 bg-primary/10 rounded-lg">
                        <div className="text-2xl font-bold text-primary">16M+</div>
                        <div className="text-sm">Californians Affected</div>
                      </div>
                      <div className="text-center p-4 bg-primary/10 rounded-lg">
                        <div className="text-2xl font-bold text-primary">146+</div>
                        <div className="text-sm">Contaminated Water Systems</div>
                      </div>
                      <div className="text-center p-4 bg-primary/10 rounded-lg">
                        <div className="text-2xl font-bold text-primary">9,000+</div>
                        <div className="text-sm">Different PFAS Chemicals</div>
                      </div>
                      <div className="text-center p-4 bg-primary/10 rounded-lg">
                        <div className="text-2xl font-bold text-primary">98%</div>
                        <div className="text-sm">Americans with PFAS in Blood</div>
                      </div>
                    </div>
                    
                    <h3>Environmental Persistence and Migration</h3>
                    <p>
                      PFAS chemicals migrate through groundwater systems, affecting private wells, agricultural irrigation, and municipal water supplies far from original contamination sources. The chemicals' persistence means contamination released decades ago continues to impact communities today, creating ongoing exposure risks that may persist for generations.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Legal Process Section */}
            <section id="legal-process" className="content-section mb-16">
              <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold text-primary mb-6">PFAS Lawsuit Process and Compensation</h2>
                  <p className="text-lg text-foreground mb-4">
                    Understanding your legal options and the path to recovery for PFAS exposure injuries and damages.
                  </p>
                </div>
                <div className="md:w-1/3">
                  <img 
                    src={legalProcessImage} 
                    alt="Legal process and environmental law"
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>

              <Collapsible open={expandedSections.legal} onOpenChange={() => toggleSection('legal')}>
                <CollapsibleTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="w-full justify-between mb-6 text-lg py-4 font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Learn More About the Legal Process
                    {expandedSections.legal ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3>Who Qualifies for a PFAS Lawsuit?</h3>
                    <p>
                      Determining eligibility requires careful evaluation of exposure history, medical diagnosis, and causation evidence. General qualification criteria include:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                      <div className="bg-muted p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Exposure Requirements</h4>
                        <ul className="text-sm space-y-1">
                          <li>• At least 1 year in contaminated area</li>
                          <li>• Documented water contamination</li>
                          <li>• Military/occupational exposure</li>
                          <li>• Residential proximity to sources</li>
                        </ul>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Qualifying Conditions</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Kidney or testicular cancer</li>
                          <li>• Thyroid disease/cancer</li>
                          <li>• Liver damage</li>
                          <li>• Ulcerative colitis</li>
                        </ul>
                      </div>
                    </div>

                    <h3>Types of Compensation Available</h3>
                    <p>
                      PFAS victims may recover various types of damages reflecting the comprehensive impact of chemical exposure:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                      <Card className="glass-card">
                        <CardHeader>
                          <CardTitle className="text-lg">Medical Expenses</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="text-sm space-y-1">
                            <li>• Past and future treatment costs</li>
                            <li>• Diagnostic testing</li>
                            <li>• Surgical procedures</li>
                            <li>• Prescription medications</li>
                            <li>• Rehabilitation services</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="glass-card">
                        <CardHeader>
                          <CardTitle className="text-lg">Lost Income</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="text-sm space-y-1">
                            <li>• Lost wages during treatment</li>
                            <li>• Reduced earning capacity</li>
                            <li>• Lost employment benefits</li>
                            <li>• Vocational rehabilitation</li>
                            <li>• Career change costs</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="glass-card">
                        <CardHeader>
                          <CardTitle className="text-lg">Other Damages</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="text-sm space-y-1">
                            <li>• Pain and suffering</li>
                            <li>• Property devaluation</li>
                            <li>• Medical monitoring</li>
                            <li>• Punitive damages</li>
                            <li>• Wrongful death</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>

                    <h3>California PFAS Laws and Regulations</h3>
                    <p>
                      California leads the nation with comprehensive PFAS regulations including Assembly Bill 756 requiring water system monitoring and public notification, Senate Bill 1044 phasing out PFAS firefighting foam, and development of strict drinking water standards that exceed federal requirements.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Resources Section */}
            <section id="resources" className="content-section mb-16">
              <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold text-primary mb-6">PFAS Exposure Resources</h2>
                  <p className="text-lg text-foreground mb-4">
                    Comprehensive resources for PFAS exposure victims, including testing, treatment, and legal guidance.
                  </p>
                </div>
                <div className="md:w-1/3">
                  <img 
                    src={waterTreatmentImage} 
                    alt="Water treatment and purification systems"
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary text-lg">
                      <FlaskConical className="w-5 h-5 mr-2" />
                      Testing and Evaluation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-base">Water Testing</h4>
                        <p className="text-sm text-muted-foreground">Professional water testing for PFAS contamination</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-base">Blood Testing</h4>
                        <p className="text-sm text-muted-foreground">PFAS blood level testing for exposure documentation</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-base">Medical Evaluation</h4>
                        <p className="text-sm text-muted-foreground">Comprehensive health assessment for PFAS-related conditions</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary text-lg">
                      <Scale className="w-5 h-5 mr-2" />
                      Legal Resources
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-base">Case Evaluation</h4>
                        <p className="text-sm text-muted-foreground">Free assessment of your PFAS exposure claim</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-base">Legal Guidance</h4>
                        <p className="text-sm text-muted-foreground">Understanding your rights and legal options</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-base">California Resources</h4>
                        <p className="text-sm text-muted-foreground">State-specific legal protections and regulations</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary text-lg">
                      <Stethoscope className="w-5 h-5 mr-2" />
                      Medical Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-base">Specialist Referrals</h4>
                        <p className="text-sm text-muted-foreground">Connect with PFAS-knowledgeable healthcare providers</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-base">Monitoring Programs</h4>
                        <p className="text-sm text-muted-foreground">Medical monitoring for early disease detection</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-base">Treatment Options</h4>
                        <p className="text-sm text-muted-foreground">Information about treatment for PFAS-related conditions</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary text-lg">
                      <Droplets className="w-5 h-5 mr-2" />
                      Water Protection
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-base">Filtration Systems</h4>
                        <p className="text-sm text-muted-foreground">PFAS-certified water treatment options</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-base">Alternative Water</h4>
                        <p className="text-sm text-muted-foreground">Safe drinking water alternatives during contamination</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-base">Prevention Tips</h4>
                        <p className="text-sm text-muted-foreground">Reducing ongoing PFAS exposure risks</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Frequently Asked Questions About PFAS Exposure</h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="glass-card group hover-glow-primary border-l-4 border-l-primary transition-all duration-300 hover:scale-105 cursor-pointer">
                    <CardHeader 
                      className="cursor-pointer transition-colors group-hover:bg-primary/5" 
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    >
                      <CardTitle className="flex items-center justify-between text-lg group-hover:text-primary transition-colors">
                        {faq.question}
                        {expandedFaq === index ? 
                          <ChevronUp className="transition-transform duration-200" /> : 
                          <ChevronDown className="transition-transform duration-200" />
                        }
                      </CardTitle>
                    </CardHeader>
                    {expandedFaq === index && (
                      <CardContent>
                        <p className="text-muted-foreground text-base leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Don't Wait - Time Limits Apply for California PFAS Claims</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl mb-12 leading-relaxed">PFAS exposure cases have strict deadlines. Contact us today for your free consultation.</p>
          <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
            <Button 
              size="lg" 
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg"
              onClick={() => window.location.href = 'tel:8181234567'}
            >
              CALL (818) 123-4567
            </Button>
            
            <Button 
              size="lg" 
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg"
              onClick={() => window.location.href = '/pfas-case-evaluation'}
            >
              START MY FREE CASE EVALUATION
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PFASExposure;