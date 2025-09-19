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
  DollarSign,
  Calculator,
  BookOpen,
  Droplets,
  Microscope,
  Factory,
  Beaker,
  FlaskConical,
  ExternalLink
} from 'lucide-react';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';
import heroBackground from '@/assets/pfas-main-hero.jpg';
import sidebarImage from '@/assets/pfas-sidebar.jpg';
import contaminationImage from '@/assets/pfas-contamination-sources.jpg';
import healthEffectsImage from '@/assets/pfas-health-effects.jpg';
import legalProcessImage from '@/assets/pfas-legal-process.jpg';
import testingImage from '@/assets/pfas-testing-equipment.jpg';
import manufacturingImage from '@/assets/pfas-manufacturing.jpg';
import laboratoryImage from '@/assets/pfas-laboratory.jpg';
import industrialSiteImage from '@/assets/pfas-industrial-site.jpg';
import medicalMonitoringImage from '@/assets/pfas-medical-monitoring.jpg';
import cleanupImage from '@/assets/pfas-environmental-cleanup.jpg';
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
  const [formData, setFormData] = useState({
    exposureLocation: '',
    diagnosis: '',
    yearDiagnosed: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'diagnosis-steps', label: 'WHAT TO DO AFTER EXPOSURE', icon: Stethoscope },
    { id: 'health-effects', label: 'HEALTH EFFECTS', icon: Heart },
    { id: 'contamination-sources', label: 'CONTAMINATION SOURCES', icon: Factory },
    { id: 'legal-process', label: 'LEGAL PROCESS', icon: Shield },
    { id: 'faq', label: 'FAQ', icon: MessageCircle },
    { id: 'resources', label: 'RESOURCES', icon: Building }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
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
    window.location.href = '/pfas-case-evaluation';
  };

  return (
    <>
      <SEO
        title="California PFAS Exposure Lawyers | Forever Chemicals Water Contamination Attorney"
        description="California PFAS exposure attorney fighting for victims of forever chemicals water contamination. Kidney cancer, thyroid disease, liver damage claims. Former defense attorney experience."
        canonical="/practice-areas/pfas-exposure"
      />
      
      <div className="min-h-screen bg-background">
        <GoBack fallbackPath="/practice-areas" />
        
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            <div className="hero-content">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                California PFAS Exposure Lawyers
              </h1>
              
              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
                ))}
                <span className="ml-2 text-lg">Fighting Forever Chemical Contamination</span>
              </div>
              
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
                onClick={() => window.location.href = '/pfas-case-evaluation'}
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
                <h2 className="text-3xl font-bold text-red-600 mb-6">California PFAS Exposure Attorneys</h2>
                
                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-lg leading-relaxed mb-4">
                    If you or a loved one has been exposed to PFAS "forever chemicals" and developed related health conditions, you deserve justice and compensation. These dangerous synthetic chemicals have contaminated California's water supplies, affecting millions of residents across the state.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    At Trembach Law Firm, we understand the devastating impact of PFAS contamination on families and communities. Our experienced legal team fights to hold manufacturers accountable while securing maximum compensation for medical expenses, pain and suffering, and property damages.
                  </p>
                </div>

                <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between mb-4">
                      Learn More About Our California PFAS Practice
                      {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                        <Droplets className="w-5 h-5 mr-2 text-primary" />
                        Water Contamination Experts
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Our team has extensive experience investigating PFAS water contamination cases throughout California, including military bases, airports, and industrial facilities.</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                        <Microscope className="w-5 h-5 mr-2 text-primary" />
                        Scientific Understanding
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>We work with leading environmental scientists and medical experts to establish the connection between PFAS exposure and health conditions.</p>
                    </CardContent>
                  </Card>
                    </div>

                    <div className="bg-muted p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4">Understanding PFAS: The Forever Chemicals Crisis</h3>
                      <p className="mb-4">
                        Per- and polyfluoroalkyl substances (PFAS) represent over 9,000 synthetic chemicals earning the notorious designation "forever chemicals" due to their extraordinary persistence in the environment and human body. First developed in the 1940s, these compounds possess carbon-fluorine bonds that make them virtually indestructible under normal environmental conditions.
                      </p>
                      
                      <p>
                        California faces particular challenges with PFAS contamination due to extensive military installations, airports, industrial facilities, and firefighting training sites where aqueous film-forming foam (AFFF) containing PFAS was routinely used for decades. Recent testing has detected PFAS in at least 146 public water systems serving approximately 16 million Californians.
                      </p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </section>

              {/* Case Evaluation Section */}
              <section id="evaluation" className="content-section mb-12">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Free PFAS Case Evaluation</h2>
                
                <div className="bg-muted p-8 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Get Your Free Consultation</h3>
                  <p className="mb-6">Provide information about your PFAS exposure to help us evaluate your case.</p>
                  
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Exposure Location</label>
                        <Input
                          placeholder="City, Military Base, or Workplace"
                          value={formData.exposureLocation}
                          onChange={(e) => setFormData(prev => ({ ...prev, exposureLocation: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Health Condition</label>
                        <Select value={formData.diagnosis} onValueChange={(value) => setFormData(prev => ({ ...prev, diagnosis: value }))}>
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
                    
                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                      Start My Free Case Evaluation
                    </Button>
                  </form>
                </div>
              </section>

              {/* What to Do After Exposure */}
              <section id="diagnosis-steps" className="content-section mb-12">
                <div className="flex flex-col lg:flex-row items-start mb-6">
                  <img 
                    src={medicalMonitoringImage} 
                    alt="PFAS medical monitoring and testing facility"
                    className="w-full lg:w-48 h-48 lg:h-36 object-cover rounded-lg mb-4 lg:mb-0 lg:mr-6 flex-shrink-0 shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                  <div>
                    <h2 className="text-3xl font-bold text-red-600 mb-4">What to Do After PFAS Exposure</h2>
                    <p className="text-lg text-muted-foreground">Essential steps to protect your health and legal rights</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <Card className="border-green-200 bg-green-50">
                    <CardHeader>
                      <CardTitle className="flex items-center text-green-800">
                        <Heart className="w-5 h-5 mr-2" />
                        Immediate Medical Steps
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-green-700">
                      <p>• Get comprehensive blood tests for PFAS levels</p>
                      <p>• Request complete medical evaluation for PFAS-related conditions</p>
                      <p>• Document all health symptoms and medical visits</p>
                      <p>• Consider specialized cancer screenings</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-blue-200 bg-blue-50">
                    <CardHeader>
                      <CardTitle className="flex items-center text-blue-800">
                        <Scale className="w-5 h-5 mr-2" />
                        Immediate Legal Steps
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-blue-700">
                      <p>• Document your exposure location and timeline</p>
                      <p>• Preserve water test results and environmental reports</p>
                      <p>• Contact an experienced PFAS attorney immediately</p>
                      <p>• Avoid signing any releases or settlements</p>
                    </CardContent>
                  </Card>
                </div>

                <Collapsible open={expandedSections.steps} onOpenChange={() => toggleSection('steps')}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between mb-4">
                      View Detailed Action Plan
                      {expandedSections.steps ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-4">
                    <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                      <h4 className="font-semibold text-amber-800 mb-3">Critical: Time-Sensitive Actions</h4>
                      <ul className="space-y-2 text-amber-700">
                        <li>• <strong>Document everything:</strong> Gather proof of residence, employment, or military service in contaminated areas</li>
                        <li>• <strong>Medical baseline:</strong> Establish current health status with comprehensive testing</li>
                        <li>• <strong>Legal consultation:</strong> Speak with PFAS attorney within 30 days of suspected exposure</li>
                        <li>• <strong>Preserve evidence:</strong> Keep all medical records, water reports, and exposure documentation</li>
                      </ul>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </section>

              {/* Health Effects Section */}
              <section id="health-effects" className="content-section mb-12">
                <div className="flex flex-col lg:flex-row items-start mb-6">
                  <img 
                    src={healthEffectsImage} 
                    alt="PFAS health effects and medical research"
                    className="w-full lg:w-48 h-48 lg:h-36 object-cover rounded-lg mb-4 lg:mb-0 lg:mr-6 flex-shrink-0 shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                  <div>
                    <h2 className="text-3xl font-bold text-red-600 mb-4">Health Effects of PFAS Exposure</h2>
                    <p className="text-lg text-muted-foreground">Scientific research links PFAS to serious health conditions</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <Card className="border-red-200 bg-red-50">
                    <CardHeader>
                      <CardTitle className="text-red-800">Cancer Risks</CardTitle>
                    </CardHeader>
                    <CardContent className="text-red-700">
                      <ul className="space-y-2">
                        <li>• Kidney Cancer</li>
                        <li>• Testicular Cancer</li>
                        <li>• Thyroid Cancer</li>
                        <li>• Liver Cancer</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-orange-200 bg-orange-50">
                    <CardHeader>
                      <CardTitle className="text-orange-800">Organ Damage</CardTitle>
                    </CardHeader>
                    <CardContent className="text-orange-700">
                      <ul className="space-y-2">
                        <li>• Liver Damage</li>
                        <li>• Kidney Disease</li>
                        <li>• Thyroid Disease</li>
                        <li>• Immune Dysfunction</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-purple-200 bg-purple-50">
                    <CardHeader>
                      <CardTitle className="text-purple-800">Other Conditions</CardTitle>
                    </CardHeader>
                    <CardContent className="text-purple-700">
                      <ul className="space-y-2">
                        <li>• High Cholesterol</li>
                        <li>• Ulcerative Colitis</li>
                        <li>• Pregnancy Issues</li>
                        <li>• Reduced Fertility</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Collapsible open={expandedSections.health} onOpenChange={() => toggleSection('health')}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between mb-4">
                      Learn More About PFAS Health Effects
                      {expandedSections.health ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-4">
                    <div className="prose prose-lg max-w-none">
                      <h4>Scientific Evidence</h4>
                      <p>
                        The International Agency for Research on Cancer (IARC) recently classified PFOA as "carcinogenic to humans" (Group 1). Multiple epidemiological studies have demonstrated increased cancer risks, with kidney cancer showing the strongest association. Studies of highly exposed populations reveal significantly elevated incidence rates for various cancers and health conditions.
                      </p>
                      
                      <h4>Thyroid and Endocrine Disruption</h4>
                      <p>
                        PFAS chemicals interfere with thyroid hormone production and regulation, leading to various disorders including hypothyroidism, hyperthyroidism, and autoimmune conditions. The thyroid gland's critical role in metabolism, growth, and development makes PFAS-induced dysfunction particularly concerning for pregnant women and children.
                      </p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </section>

              {/* Contamination Sources */}
              <section id="contamination-sources" className="content-section mb-12">
                <div className="flex flex-col lg:flex-row items-start mb-6">
                  <img 
                    src={contaminationImage} 
                    alt="PFAS contamination sources and industrial facilities"
                    className="w-full lg:w-48 h-48 lg:h-36 object-cover rounded-lg mb-4 lg:mb-0 lg:mr-6 flex-shrink-0 shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                  <div>
                    <h2 className="text-3xl font-bold text-red-600 mb-4">PFAS Contamination Sources in California</h2>
                    <p className="text-lg text-muted-foreground">Understanding where exposure occurs across the state</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Building className="w-5 h-5 mr-2 text-primary" />
                        Military Installations
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-3">Major bases with documented PFAS contamination:</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Travis Air Force Base</li>
                        <li>• Marine Corps Base Camp Pendleton</li>
                        <li>• Naval Air Station North Island</li>
                        <li>• Edwards Air Force Base</li>
                        <li>• Former Fort Ord</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Factory className="w-5 h-5 mr-2 text-primary" />
                        Industrial Facilities
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-3">Industrial sources of PFAS contamination:</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Semiconductor manufacturing (Silicon Valley)</li>
                        <li>• Chrome plating facilities</li>
                        <li>• Metal finishing operations</li>
                        <li>• Textile manufacturing</li>
                        <li>• Chemical processing plants</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Collapsible open={expandedSections.contamination} onOpenChange={() => toggleSection('contamination')}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between mb-4">
                      View Complete List of California Contamination Sources
                      {expandedSections.contamination ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Airports</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• LAX - Los Angeles</li>
                          <li>• SFO - San Francisco</li>
                          <li>• San Diego International</li>
                          <li>• Sacramento International</li>
                          <li>• Regional airports statewide</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Fire Departments</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Training facilities</li>
                          <li>• Equipment storage sites</li>
                          <li>• Emergency response locations</li>
                          <li>• AFFF foam use areas</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Waste Sites</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Municipal landfills</li>
                          <li>• Hazardous waste facilities</li>
                          <li>• Superfund sites</li>
                          <li>• Wastewater treatment plants</li>
                        </ul>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </section>

              {/* Legal Process */}
              <section id="legal-process" className="content-section mb-12">
                <div className="flex flex-col lg:flex-row items-start mb-6">
                  <img 
                    src={legalProcessImage} 
                    alt="Legal process for PFAS exposure cases"
                    className="w-full lg:w-48 h-48 lg:h-36 object-cover rounded-lg mb-4 lg:mb-0 lg:mr-6 flex-shrink-0 shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                  <div>
                    <h2 className="text-3xl font-bold text-red-600 mb-4">PFAS Legal Process</h2>
                    <p className="text-lg text-muted-foreground">How we build and pursue your PFAS exposure case</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Badge className="mr-4 mt-1">Step 1</Badge>
                    <div>
                      <h4 className="font-semibold mb-2">Case Investigation</h4>
                      <p className="text-muted-foreground">We investigate your exposure history, gather medical records, and identify all potential defendants including PFAS manufacturers.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Badge className="mr-4 mt-1">Step 2</Badge>
                    <div>
                      <h4 className="font-semibold mb-2">Expert Development</h4>
                      <p className="text-muted-foreground">We work with environmental scientists, medical experts, and epidemiologists to establish causation between PFAS exposure and your health condition.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Badge className="mr-4 mt-1">Step 3</Badge>
                    <div>
                      <h4 className="font-semibold mb-2">Filing and Discovery</h4>
                      <p className="text-muted-foreground">We file your lawsuit and conduct extensive discovery to uncover corporate documents showing defendants knew about PFAS dangers.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Badge className="mr-4 mt-1">Step 4</Badge>
                    <div>
                      <h4 className="font-semibold mb-2">Settlement or Trial</h4>
                      <p className="text-muted-foreground">We negotiate for maximum settlement or take your case to trial to secure the compensation you deserve.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mt-6 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-3">Potential Defendants in PFAS Cases</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-700">
                    <div>
                      <h5 className="font-medium">Manufacturers:</h5>
                      <p className="text-sm">3M, DuPont, Chemours, and other PFAS producers who knew about dangers but continued production</p>
                    </div>
                    <div>
                      <h5 className="font-medium">Users:</h5>
                      <p className="text-sm">Companies that used PFAS in products or processes, military contractors, and firefighting foam distributors</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section id="faq" className="content-section mb-12">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Frequently Asked Questions</h2>
                
                <div className="space-y-4">
                  {pfasQuestions.map((faq, index) => (
                    <Card key={index}>
                      <CardHeader 
                        className="cursor-pointer hover:bg-muted/50 transition-colors"
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      >
                        <CardTitle className="flex justify-between items-center text-lg">
                          {faq.question}
                          {expandedFaq === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </CardTitle>
                      </CardHeader>
                      {expandedFaq === index && (
                        <CardContent>
                          <p className="text-muted-foreground">{faq.answer}</p>
                        </CardContent>
                      )}
                    </Card>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <Button 
                    variant="outline"
                    onClick={() => window.location.href = '/pfas-resources'}
                  >
                    View All {pfasQuestions.length}+ PFAS Questions
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </section>

              {/* Resources Section */}
              <section id="resources" className="content-section mb-12">
                <h2 className="text-3xl font-bold text-red-600 mb-6">PFAS Resources & Tools</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Calculator className="w-5 h-5 mr-2 text-primary" />
                        PFAS Calculator
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Estimate your potential compensation for PFAS exposure based on your specific circumstances.</p>
                      <Button 
                        className="w-full"
                        onClick={() => window.location.href = '/pfas-calculator'}
                      >
                        Calculate My Case Value
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Stethoscope className="w-5 h-5 mr-2 text-primary" />
                        Medical Guidance
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Learn what steps to take for your health after PFAS exposure and what tests to request.</p>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => window.location.href = '/pfas-guidance'}
                      >
                        Get Medical Guidance
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <BookOpen className="w-5 h-5 mr-2 text-primary" />
                        PFAS Resources
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Comprehensive resources about PFAS contamination, health effects, and legal rights.</p>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => window.location.href = '/pfas-resources'}
                      >
                        View Resources
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Scale className="w-5 h-5 mr-2 text-primary" />
                        Case Evaluation
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Get a detailed evaluation of your PFAS exposure case with our experienced legal team.</p>
                      <Button 
                        className="w-full"
                        onClick={() => window.location.href = '/pfas-case-evaluation'}
                      >
                        Start Case Evaluation
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </section>

      {/* Don't Wait - Time Limits Apply Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Don't Wait - Time Limits 
Apply for California PFAS Cases</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl mb-12 leading-relaxed">California PFAS exposure claims have strict deadlines. Contact us today for your free consultation.</p>
          <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
            <Button size="lg" aria-label="Call Trembach Law Firm" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg" onClick={() => window.location.href = 'tel:8181234567'}>
              CALL (818) 123-4567
            </Button>
            
            <Button size="lg" aria-label="Start Free Case Evaluation" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg" onClick={() => window.location.href = '/pfas-case-evaluation'}>
              START MY FREE CASE EVALUATION
            </Button>
          </div>
        </div>
      </section>
            </div>

            {/* Sticky Sidebar - 3 Ways to Start Your Case */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                
                {/* Contact Card */}
                <Card className="glass-card group hover-glow-primary overflow-hidden transition-all duration-300 hover:scale-105">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${sidebarImage})` }}>
                    <div className="h-full bg-black/60 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                      <div className="text-center text-white">
                        <h3 className="text-xl font-bold mb-2">3 Ways to</h3>
                        <h3 className="text-xl font-bold">Start Your Case</h3>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-6">
                      You pay nothing until we win your case. Contact us today to schedule your FREE consultation.
                    </p>
                    
                    <div className="space-y-4">
                      <Button 
                        className="w-full bg-red-600 hover:bg-red-700 text-white"
                        onClick={() => window.location.href = 'tel:8181234567'}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call (818) 123-4567
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => window.location.href = '/pfas-case-evaluation'}
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Free Case Evaluation
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => window.location.href = 'mailto:info@trembachlawfirm.com?subject=PFAS Exposure Consultation'}
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Email Consultation
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
                        <h4 className="font-semibold text-sm">Time Limit</h4>
                        <p className="text-sm text-muted-foreground">2 years from diagnosis in California</p>
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

                {/* PFAS Resources */}
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">PFAS Resources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img 
                      src={medicalMonitoringImage} 
                      alt="PFAS medical monitoring and testing" 
                      className="w-full h-32 object-cover rounded-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                      onClick={() => window.location.href = '/pfas-resources'}
                    />
                    <p className="text-sm text-muted-foreground">
                      Access PFAS testing, medical monitoring, and comprehensive resources for exposure victims.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PFASExposure;