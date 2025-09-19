import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScrollMemory } from '@/hooks/useScrollMemory';
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
import heroBackground from '@/assets/environmental-toxic-hero-main.jpg';
import sidebarImage from '@/assets/environmental-toxic-sidebar.jpg';
import diagnosisImage from '@/assets/environmental-toxic-diagnosis-process.jpg';
import legalProcessImage from '@/assets/environmental-toxic-legal-process.jpg';
import exposureSitesImage from '@/assets/california-contamination-sites.jpg';
import medicalImage from '@/assets/environmental-toxic-medical-facility.jpg';
import compensationImage from '@/assets/environmental-toxic-compensation-calculator.jpg';
import toxicChemicalsImage from '@/assets/california-toxic-chemicals.jpg';
import toxicHealthEffectsImage from '@/assets/toxic-exposure-health-effects.jpg';
import environmentalLegalProcessRevisedImage from '@/assets/environmental-legal-process-revised.jpg';
import californiaEnvironmentalResourcesCleanImage from '@/assets/california-environmental-resources-clean.jpg';
import SEO from '@/components/SEO';
import { environmentalToxicFaqs } from '@/content/environmentalToxicFaqs';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const EnvironmentalToxic: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const scrollMemory = useScrollMemory();
  const [formData, setFormData] = useState({
    exposureDate: '',
    exposureType: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'toxic-chemicals', label: 'TOXIC CHEMICALS', icon: AlertTriangle },
    { id: 'health-effects', label: 'HEALTH EFFECTS', icon: Heart },
    { id: 'legal-process', label: 'LEGAL PROCESS', icon: Shield },
    { id: 'faq', label: 'FAQ', icon: MessageCircle },
    { id: 'resources', label: 'RESOURCES', icon: Building }
  ];

  const faqs = environmentalToxicFaqs;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation with 3D effects
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50, rotationX: 10, z: -100 },
        { opacity: 1, y: 0, rotationX: 0, z: 0, duration: 1.2, ease: 'power2.out' }
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
    window.location.href = '/environmental-toxic-case-evaluation';
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="California Environmental Toxic Exposure Lawyers | Trembach Law Firm"
        description="Fighting for California families exposed to dangerous chemicals. Free consultation for toxic exposure cases. No fees unless we win your environmental contamination claim."
        canonical="/environmental-toxic"
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-2xl">
              Environmental Toxic Exposure Attorneys
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1 drop-shadow-lg" />
              ))}
              <span className="ml-2 text-lg drop-shadow-lg">Fighting for California Families Exposed to Dangerous Chemicals</span>
            </div>
            
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 text-lg shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = '/environmental-toxic-case-evaluation'}
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
              <h2 className="text-3xl font-bold text-primary mb-6">California Environmental Toxic Exposure Attorneys</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-xl leading-relaxed mb-4">
                  For decades, corporations have contaminated our water, air, and soil with toxic chemicals that 
                  cause cancer, birth defects, and chronic diseases. As a former defense attorney, I know their 
                  tactics. Now I use that insider knowledge to protect families and communities throughout 
                  California from environmental poisoning.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Environmental toxic exposure occurs when dangerous chemicals contaminate the 
                  air you breathe, water you drink, or soil where you live and work. These invisible 
                  poisons accumulate in your body over time, causing devastating health effects that 
                  may not appear for years or even decades. California leads the nation in 
                  environmental contamination cases, with thousands of sites poisoning communities 
                  through industrial negligence, illegal dumping, and regulatory violations.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4 text-base">
                    Show More About Our California Environmental Toxic Practice
                    {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors text-lg">
                          <AlertTriangle className="w-5 h-5 mr-2 text-primary" />
                          Immediate Health Risks
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-base">Toxic exposure can cause immediate symptoms including respiratory problems, skin 
                        rashes, headaches, nausea, and neurological issues. Children and pregnant women 
                        face the highest risks, with exposures linked to birth defects, developmental delays, 
                        and childhood cancers.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors text-lg">
                          <Heart className="w-5 h-5 mr-2 text-primary" />
                          Long-Term Consequences
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-base">Many toxic chemicals are carcinogenic, causing various cancers years after exposure. 
                        Others damage organs, disrupt hormones, impair fertility, and cause chronic diseases 
                        like Parkinson's, kidney disease, and immune disorders.</p>
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
                    <h3>Property Damage</h3>
                    <p>
                      Contamination destroys property values, makes homes unsellable, and forces families
                      to abandon their investments. Even after cleanup, stigma remains, permanently
                      reducing property values by 20-50%.
                    </p>
                    
                    <h3>Legal Rights</h3>
                    <p>
                      California law provides strong protections for contamination victims, including strict
                      liability for polluters, enhanced damages for willful violations, and recovery for
                      medical monitoring even before illness develops.
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
                <p className="mb-6 text-base">Provide some basic information to help us understand your case better.</p>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Exposure Date</label>
                      <Input
                        type="date"
                        value={formData.exposureDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, exposureDate: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Exposure Type</label>
                      <Select value={formData.exposureType} onValueChange={(value) => setFormData(prev => ({ ...prev, exposureType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select exposure type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pfas">PFAS "Forever Chemicals"</SelectItem>
                          <SelectItem value="tce-pce">TCE & PCE Industrial Solvents</SelectItem>
                          <SelectItem value="chromium">Hexavalent Chromium</SelectItem>
                          <SelectItem value="benzene">Benzene</SelectItem>
                          <SelectItem value="vocs">Volatile Organic Compounds</SelectItem>
                          <SelectItem value="pesticides">Pesticides & Agricultural Chemicals</SelectItem>
                          <SelectItem value="heavy-metals">Heavy Metals</SelectItem>
                          <SelectItem value="other">Other Toxic Exposure</SelectItem>
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

            {/* Toxic Chemicals Section */}
            <section id="toxic-chemicals" className="content-section mb-12">
              <img 
                src={toxicChemicalsImage} 
                alt="Common toxic chemicals found in California including PFAS, TCE, PCE, hexavalent chromium and benzene" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h2 className="text-3xl font-bold text-primary mb-6">Common Toxic Chemicals in California</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="glass-card group hover-glow-primary">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <AlertTriangle className="w-5 h-5 mr-2 text-primary" />
                      PFAS "Forever Chemicals"
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base mb-4">Per- and polyfluoroalkyl substances (PFAS) are synthetic chemicals used in non-stick cookware, waterproof clothing, and firefighting foam. They persist in the environment and human body for decades.</p>
                    <p className="text-sm text-muted-foreground">Health Effects: Cancer, liver damage, immune system suppression, birth defects</p>
                  </CardContent>
                </Card>

                <Card className="glass-card group hover-glow-primary">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <AlertTriangle className="w-5 h-5 mr-2 text-primary" />
                      TCE & PCE Solvents
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base mb-4">Trichloroethylene (TCE) and Perchloroethylene (PCE) are industrial solvents used in dry cleaning and metal degreasing that commonly contaminate groundwater.</p>
                    <p className="text-sm text-muted-foreground">Health Effects: Kidney cancer, liver cancer, neurological disorders, birth defects</p>
                  </CardContent>
                </Card>

                <Card className="glass-card group hover-glow-primary">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <AlertTriangle className="w-5 h-5 mr-2 text-primary" />
                      Hexavalent Chromium
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base mb-4">Also known as Chromium-6, this industrial chemical is used in chrome plating, welding, and manufacturing. It's a known carcinogen that contaminates soil and groundwater.</p>
                    <p className="text-sm text-muted-foreground">Health Effects: Lung cancer, nasal cancer, skin ulcers, respiratory problems</p>
                  </CardContent>
                </Card>

                <Card className="glass-card group hover-glow-primary">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <AlertTriangle className="w-5 h-5 mr-2 text-primary" />
                      Benzene
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base mb-4">A petrochemical used in gasoline, plastics, and chemical production. Released from refineries, gas stations, and industrial facilities.</p>
                    <p className="text-sm text-muted-foreground">Health Effects: Leukemia, blood disorders, bone marrow damage, reproductive issues</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Health Effects Section */}
            <section id="health-effects" className="content-section mb-12">
              <img 
                src={toxicHealthEffectsImage} 
                alt="Health effects of toxic exposure including cancer, organ damage, and respiratory problems" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h2 className="text-3xl font-bold text-primary mb-6">Health Effects of Toxic Exposure</h2>
              
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary">
                      <Heart className="w-5 h-5 mr-2" />
                      Immediate Health Effects
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Respiratory Problems</h4>
                        <p className="text-sm text-muted-foreground">Coughing, wheezing, shortness of breath, chest pain</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Skin & Eye Irritation</h4>
                        <p className="text-sm text-muted-foreground">Rashes, burns, eye irritation, chemical burns</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Neurological Issues</h4>
                        <p className="text-sm text-muted-foreground">Headaches, dizziness, confusion, memory problems</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Gastrointestinal</h4>
                        <p className="text-sm text-muted-foreground">Nausea, vomiting, stomach pain, diarrhea</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary">
                      <Stethoscope className="w-5 h-5 mr-2" />
                      Long-Term Health Consequences
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Cancer</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Lung cancer</li>
                          <li>• Liver cancer</li>
                          <li>• Kidney cancer</li>
                          <li>• Leukemia</li>
                          <li>• Bladder cancer</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Organ Damage</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Liver disease</li>
                          <li>• Kidney failure</li>
                          <li>• Heart problems</li>
                          <li>• Lung scarring</li>
                          <li>• Brain damage</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Reproductive Issues</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Birth defects</li>
                          <li>• Infertility</li>
                          <li>• Miscarriage</li>
                          <li>• Developmental delays</li>
                          <li>• Hormone disruption</li>
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
                src={environmentalLegalProcessRevisedImage} 
                alt="Professional legal consultation for environmental toxic exposure cases in California" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h2 className="text-3xl font-bold text-primary mb-6">Legal Process for Environmental Toxic Claims</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Card className="glass-card text-center">
                    <CardHeader>
                      <Badge className="mx-auto mb-2">Step 1</Badge>
                      <CardTitle className="text-lg">Case Evaluation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Free consultation to assess your exposure and potential claim</p>
                    </CardContent>
                  </Card>

                  <Card className="glass-card text-center">
                    <CardHeader>
                      <Badge className="mx-auto mb-2">Step 2</Badge>
                      <CardTitle className="text-lg">Investigation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Gather evidence, medical records, and environmental data</p>
                    </CardContent>
                  </Card>

                  <Card className="glass-card text-center">
                    <CardHeader>
                      <Badge className="mx-auto mb-2">Step 3</Badge>
                      <CardTitle className="text-lg">Filing Claims</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">File lawsuits against responsible parties and insurance claims</p>
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
                    <CardTitle className="flex items-center text-primary">
                      <Scale className="w-5 h-5 mr-2" />
                      What We Handle
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Environmental Liability Claims</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start"><span className="text-primary mr-2">•</span>Groundwater contamination lawsuits</li>
                          <li className="flex items-start"><span className="text-primary mr-2">•</span>Soil pollution claims</li>
                          <li className="flex items-start"><span className="text-primary mr-2">•</span>Air quality violation cases</li>
                          <li className="flex items-start"><span className="text-primary mr-2">•</span>Industrial accident claims</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Personal Injury Claims</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start"><span className="text-primary mr-2">•</span>Toxic exposure cancer cases</li>
                          <li className="flex items-start"><span className="text-primary mr-2">•</span>Birth defect litigation</li>
                          <li className="flex items-start"><span className="text-primary mr-2">•</span>Occupational disease claims</li>
                          <li className="flex items-start"><span className="text-primary mr-2">•</span>Property damage lawsuits</li>
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
                src={californiaEnvironmentalResourcesCleanImage} 
                alt="California environmental monitoring equipment and protection infrastructure" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h2 className="text-3xl font-bold text-primary mb-6">California Environmental Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary">
                      <Building className="w-5 h-5 mr-2" />
                      <a 
                        href="https://calepa.ca.gov/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:underline transition-colors"
                      >
                        Government Agencies
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold">California EPA</h4>
                        <p className="text-sm text-muted-foreground">Environmental protection and regulation enforcement</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Department of Toxic Substances Control</h4>
                        <p className="text-sm text-muted-foreground">Hazardous waste site cleanup and management</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Regional Water Quality Control Boards</h4>
                        <p className="text-sm text-muted-foreground">Water contamination monitoring and enforcement</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary">
                      <Map className="w-5 h-5 mr-2" />
                      Contaminated Sites Database
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold">EnviroStor Database</h4>
                        <p className="text-sm text-muted-foreground">California's cleanup sites and contaminated properties</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">GeoTracker Database</h4>
                        <p className="text-sm text-muted-foreground">Leaking underground storage tanks and cleanup sites</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Superfund Sites</h4>
                        <p className="text-sm text-muted-foreground">EPA's National Priorities List contaminated locations</p>
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
                    alt="Environmental toxic exposure legal consultation" 
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
                      onClick={() => window.location.href = '/environmental-toxic-case-evaluation'}
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
                      <h4 className="font-semibold text-sm">Time Limit</h4>
                      <p className="text-sm text-muted-foreground">2 years from discovery in California</p>
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

              {/* Medical Support */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Medical Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <img 
                    src={medicalImage} 
                    alt="California environmental health specialists" 
                    className="w-full h-32 object-cover rounded-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  />
                  <p className="text-sm text-muted-foreground">
                    We can connect you with environmental health specialists throughout California.
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
                    alt="Environmental toxic exposure compensation calculator" 
                    className="w-full h-32 object-cover rounded-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  />
                  <div className="space-y-2 text-sm">
                    <p>• Medical expenses and monitoring</p>
                    <p>• Lost wages and reduced earning capacity</p>
                    <p>• Property damage and cleanup costs</p>
                    <p>• Pain and suffering</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">
            Don't Wait - Time Limits Apply for California Environmental Toxic Claims
          </h2>
          <p className="text-xl mb-8">
            California law gives you limited time to file your claim. 
            Contact us today for your free consultation.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4"
              onClick={() => window.location.href = '/environmental-toxic-case-evaluation'}
            >
              Start Free Case Evaluation
            </Button>
            <Button 
              size="lg" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-4 transition-all duration-300"
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

export default EnvironmentalToxic;