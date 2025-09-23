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
  Calculator
} from 'lucide-react';
import heroBackground from '@/assets/swimming-pool-hero.jpg';
import sidebarImage from '@/assets/swimming-pool-sidebar.jpg';
import overviewImage from '@/assets/swimming-pool-overview.jpg';
import evaluationImage from '@/assets/swimming-pool-evaluation.jpg';
import immediateStepsImage from '@/assets/swimming-pool-immediate-steps.jpg';
import legalProcessImage from '@/assets/swimming-pool-legal-process.jpg';
import resourcesImage from '@/assets/swimming-pool-resources.jpg';
import immediateStepsLargeImage from '@/assets/swimming-pool-immediate-steps-large.jpg';
import legalProcessLargeImage from '@/assets/swimming-pool-legal-process-large.jpg';
import resourcesLargeImage from '@/assets/swimming-pool-resources-large.jpg';
import faqLargeImage from '@/assets/swimming-pool-faq-large.jpg';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const SwimmingPoolAccidents: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    incidentDate: '',
    incidentType: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'immediate-steps', label: 'IMMEDIATE STEPS AFTER ACCIDENT', icon: Heart },
    { id: 'legal-process', label: 'LEGAL PROCESS', icon: Shield },
    { id: 'faq', label: 'FAQ', icon: MessageCircle },
    { id: 'resources', label: 'RESOURCES', icon: Building }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
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
    window.location.href = '/practice-areas/swimming-pool/case-evaluation';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Go Back Button */}
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
              California Swimming Pool Accident Lawyers
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Expert Legal Representation</span>
            </div>
            
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
              onClick={() => window.location.href = '/practice-areas/swimming-pool/case-evaluation'}
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
          
          {/* Sticky Sidebar */}
          <div className="lg:order-2">
            <div className="sticky top-24">
              <Card 
                className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${sidebarImage})` }}
              >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 p-6">
                  <div className="text-center text-white mb-6">
                    <h3 className="text-xl font-bold mb-2">3 Ways to</h3>
                    <h3 className="text-xl font-bold text-white">Start Your Case</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <Button 
                      size="lg" 
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold"
                      onClick={() => window.location.href = '/practice-areas/swimming-pool/case-evaluation'}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      FREE CASE REVIEW
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full border-white text-white hover:bg-white hover:text-black"
                      onClick={() => window.location.href = 'tel:(818) 123-4567'}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call (818) 123-4567
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full border-white text-white hover:bg-white hover:text-black"
                      onClick={() => window.location.href = '/practice-areas/swimming-pool/compensation-calculator'}
                    >
                      <Calculator className="w-4 h-4 mr-2" />
                      Calculate Case Value
                    </Button>
                  </div>
                  
                  <div className="mt-6 text-center text-white text-sm">
                    <p>Available 24/7 • Free Consultation</p>
                    <p>No Win, No Fee Guarantee</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Main Content Column */}
          <div className="lg:col-span-2 lg:order-1" ref={contentRef}>
            
            {/* Overview Section */}
            <section id="overview" className="content-section mb-12">
              <div className="flex items-center mb-6">
                <img src={overviewImage} alt="Swimming Pool Safety Overview" className="w-16 h-16 rounded-lg mr-4" />
                <h2 className="text-3xl font-bold text-red-600">California Swimming Pool Accident Attorneys</h2>
              </div>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  If you or a loved one has been injured in a swimming pool accident in California, you're facing potentially devastating physical, emotional, and financial consequences. Swimming pool accidents can result in serious injuries including drowning, brain damage, spinal cord injuries, and broken bones that require immediate legal action to protect your rights and secure compensation.
                </p>
                
                <p className="text-lg leading-relaxed">
                  At Trembach Law Firm, we understand the complex legal issues surrounding swimming pool accidents and have extensive experience holding property owners, pool operators, and other responsible parties accountable for their negligence. Our California swimming pool accident lawyers work tirelessly to ensure victims receive maximum compensation for medical expenses, lost wages, pain and suffering, and long-term care needs.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Learn More About Our Swimming Pool Accident Practice
                    {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Shield className="w-5 h-5 mr-2 text-primary" />
                          Comprehensive Investigation
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>We conduct thorough investigations to identify all liable parties, safety violations, and evidence crucial to your case success.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Scale className="w-5 h-5 mr-2 text-primary" />
                          Maximum Compensation
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Our experienced team fights to recover full compensation for medical bills, lost income, pain and suffering, and future care needs.</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Why Choose Trembach Law Firm for Your Swimming Pool Accident Case?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <Award className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Proven Track Record</h4>
                          <p className="text-sm text-muted-foreground">Extensive experience handling complex swimming pool accident cases throughout California.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Immediate Response</h4>
                          <p className="text-sm text-muted-foreground">We act quickly to preserve evidence and protect your legal rights.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Compassionate Support</h4>
                          <p className="text-sm text-muted-foreground">We provide emotional support and guidance throughout your recovery journey.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Shield className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">No Fee Unless We Win</h4>
                          <p className="text-sm text-muted-foreground">We work on contingency - you pay nothing unless we recover compensation for you.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <div className="flex items-center mb-6">
                <img src={evaluationImage} alt="Swimming Pool Case Evaluation" className="w-16 h-16 rounded-lg mr-4" />
                <h2 className="text-3xl font-bold text-red-600">Free Swimming Pool Accident Case Evaluation</h2>
              </div>
              
              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Get Your Free Consultation Today</h3>
                <p className="mb-6">Tell us about your swimming pool accident to help us understand your case better.</p>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Incident Date</label>
                      <Input
                        type="date"
                        value={formData.incidentDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, incidentDate: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Type of Incident</label>
                      <Select value={formData.incidentType} onValueChange={(value) => setFormData(prev => ({ ...prev, incidentType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select incident type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="drowning">Near-Drowning/Drowning</SelectItem>
                          <SelectItem value="slip-fall">Slip and Fall</SelectItem>
                          <SelectItem value="diving-accident">Diving Accident</SelectItem>
                          <SelectItem value="chemical-burn">Chemical Burns</SelectItem>
                          <SelectItem value="equipment-malfunction">Equipment Malfunction</SelectItem>
                          <SelectItem value="drain-entrapment">Drain Entrapment</SelectItem>
                          <SelectItem value="other">Other Pool Accident</SelectItem>
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

            {/* Immediate Steps After Accident Section */}
            <section id="immediate-steps" className="content-section mb-12">
              <div className="flex items-center mb-6">
                <img src={immediateStepsImage} alt="Immediate Steps After Pool Accident" className="w-16 h-16 rounded-lg mr-4" />
                <h2 className="text-3xl font-bold text-red-600">Immediate Steps After a Swimming Pool Accident</h2>
              </div>

              <div className="mb-8">
                <img 
                  src={immediateStepsLargeImage} 
                  alt="Emergency Response After Swimming Pool Accident" 
                  className="w-full h-80 object-cover rounded-lg mb-6"
                />
              </div>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  Taking the right steps immediately after a swimming pool accident can be critical for both the victim's health and any potential legal case. Here's what you should do right away:
                </p>
              </div>

              <Collapsible open={expandedSections['immediate-steps']} onOpenChange={() => toggleSection('immediate-steps')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    View Critical Steps to Take After a Pool Accident
                    {expandedSections['immediate-steps'] ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="border-red-200">
                      <CardHeader>
                        <CardTitle className="flex items-center text-red-600">
                          <Heart className="w-5 h-5 mr-2" />
                          1. Ensure Immediate Safety
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc ml-6 space-y-2">
                          <li>Get the victim out of water safely</li>
                          <li>Call 911 immediately for serious injuries</li>
                          <li>Perform CPR if trained and necessary</li>
                          <li>Keep victim warm and still</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-blue-200">
                      <CardHeader>
                        <CardTitle className="flex items-center text-blue-600">
                          <Stethoscope className="w-5 h-5 mr-2" />
                          2. Seek Medical Attention
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc ml-6 space-y-2">
                          <li>Even for seemingly minor injuries</li>
                          <li>Document all medical treatment received</li>
                          <li>Follow all doctor's recommendations</li>
                          <li>Keep all medical records and bills</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-yellow-200">
                      <CardHeader>
                        <CardTitle className="flex items-center text-yellow-600">
                          <FileText className="w-5 h-5 mr-2" />
                          3. Preserve Evidence
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc ml-6 space-y-2">
                          <li>Take photos of the accident scene</li>
                          <li>Document pool conditions and safety equipment</li>
                          <li>Get contact info from witnesses</li>
                          <li>Don't let anyone clean up the scene</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-green-200">
                      <CardHeader>
                        <CardTitle className="flex items-center text-green-600">
                          <Phone className="w-5 h-5 mr-2" />
                          4. Contact Legal Help
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc ml-6 space-y-2">
                          <li>Contact an experienced pool accident lawyer</li>
                          <li>Don't speak to insurance companies alone</li>
                          <li>Avoid signing any documents</li>
                          <li>Protect your legal rights immediately</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                    <div className="flex items-start">
                      <AlertTriangle className="w-6 h-6 text-red-600 mt-1 mr-3" />
                      <div>
                        <h3 className="text-lg font-semibold text-red-800 mb-2">Critical Warning</h3>
                        <p className="text-red-700">
                          Don't delay in seeking legal representation. Evidence can disappear quickly, and California has strict deadlines for filing pool accident claims. Contact us immediately for a free consultation.
                        </p>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Legal Process Section */}
            <section id="legal-process" className="content-section mb-12">
              <div className="flex items-center mb-6">
                <img src={legalProcessImage} alt="Swimming Pool Legal Process" className="w-16 h-16 rounded-lg mr-4" />
                <h2 className="text-3xl font-bold text-red-600">Swimming Pool Accident Legal Process</h2>
              </div>

              <div className="mb-8">
                <img 
                  src={legalProcessLargeImage} 
                  alt="Legal Process for Swimming Pool Accidents" 
                  className="w-full h-80 object-cover rounded-lg mb-6"
                />
              </div>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  Understanding the legal process for swimming pool accident cases helps you know what to expect. Our experienced team will guide you through every step while you focus on recovery.
                </p>
              </div>

              <Collapsible open={expandedSections['legal-process']} onOpenChange={() => toggleSection('legal-process')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Learn About Our Legal Process
                    {expandedSections['legal-process'] ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="space-y-6">
                    <div className="flex items-start p-6 bg-muted rounded-lg">
                      <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold">1</div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Initial Consultation & Case Evaluation</h3>
                        <p className="text-muted-foreground">We review your case details, assess liability, and determine the strength of your claim during a free consultation.</p>
                      </div>
                    </div>

                    <div className="flex items-start p-6 bg-muted rounded-lg">
                      <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold">2</div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Investigation & Evidence Collection</h3>
                        <p className="text-muted-foreground">Our team conducts thorough investigations, gathering evidence, interviewing witnesses, and consulting experts to build your case.</p>
                      </div>
                    </div>

                    <div className="flex items-start p-6 bg-muted rounded-lg">
                      <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold">3</div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Filing Your Claim</h3>
                        <p className="text-muted-foreground">We file all necessary legal documents and notify all responsible parties while protecting your interests throughout the process.</p>
                      </div>
                    </div>

                    <div className="flex items-start p-6 bg-muted rounded-lg">
                      <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold">4</div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Negotiation & Settlement</h3>
                        <p className="text-muted-foreground">We negotiate aggressively with insurance companies and responsible parties to secure maximum compensation for your injuries.</p>
                      </div>
                    </div>

                    <div className="flex items-start p-6 bg-muted rounded-lg">
                      <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold">5</div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Trial Preparation & Litigation</h3>
                        <p className="text-muted-foreground">If settlement isn't possible, we prepare for trial and fight for your rights in court with experienced litigation attorneys.</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <Card className="border-blue-200 bg-blue-50">
                      <CardHeader>
                        <CardTitle className="flex items-center text-blue-700">
                          <Clock className="w-5 h-5 mr-2" />
                          Timeline Expectations
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc ml-6 space-y-1 text-blue-700">
                          <li>Simple cases: 6-12 months</li>
                          <li>Complex cases: 1-3 years</li>
                          <li>Trial cases: 2-4 years</li>
                          <li>We keep you updated throughout</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-green-200 bg-green-50">
                      <CardHeader>
                        <CardTitle className="flex items-center text-green-700">
                          <Shield className="w-5 h-5 mr-2" />
                          No Fee Guarantee
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc ml-6 space-y-1 text-green-700">
                          <li>No upfront legal fees</li>
                          <li>We pay all case expenses</li>
                          <li>Only paid if we win your case</li>
                          <li>Free consultation always</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Resources Section */}
            <section id="resources" className="content-section mb-12">
              <div className="flex items-center mb-6">
                <img src={resourcesImage} alt="Swimming Pool Accident Resources" className="w-16 h-16 rounded-lg mr-4" />
                <h2 className="text-3xl font-bold text-red-600">Swimming Pool Accident Resources</h2>
              </div>

              <div className="mb-8">
                <img 
                  src={resourcesLargeImage} 
                  alt="Swimming Pool Safety Resources and Documentation" 
                  className="w-full h-80 object-cover rounded-lg mb-6"
                />
              </div>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  Access important resources and tools to help you understand your rights, calculate potential compensation, and take the next steps in your swimming pool accident case.
                </p>
              </div>

              <Collapsible open={expandedSections.resources} onOpenChange={() => toggleSection('resources')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Access Our Swimming Pool Accident Resources
                    {expandedSections.resources ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                          onClick={() => window.location.href = '/practice-areas/swimming-pool/case-evaluation'}>
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Scale className="w-5 h-5 mr-2 text-primary" />
                          Free Case Evaluation
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Get a comprehensive evaluation of your swimming pool accident case with no obligation or cost.</p>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                          onClick={() => window.location.href = '/practice-areas/swimming-pool/compensation-calculator'}>
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Calculator className="w-5 h-5 mr-2 text-primary" />
                          Compensation Calculator
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Estimate potential compensation for your swimming pool accident injuries and damages.</p>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                          onClick={() => window.location.href = '/practice-areas/swimming-pool/faq'}>
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <MessageCircle className="w-5 h-5 mr-2 text-primary" />
                          Frequently Asked Questions
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Find answers to common questions about swimming pool accident claims and legal rights.</p>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                          onClick={() => window.location.href = 'tel:(818) 123-4567'}>
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Phone className="w-5 h-5 mr-2 text-primary" />
                          24/7 Legal Hotline
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Speak with an experienced swimming pool accident attorney immediately - available 24/7.</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Important Swimming Pool Safety Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">California Pool Safety Laws</h4>
                        <ul className="list-disc ml-6 space-y-1 text-sm text-muted-foreground">
                          <li>Pool fencing requirements (4-foot minimum height)</li>
                          <li>Self-closing and self-latching gate requirements</li>
                          <li>Pool alarm and safety cover regulations</li>
                          <li>Lifeguard requirements for public pools</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Common Liability Issues</h4>
                        <ul className="list-disc ml-6 space-y-1 text-sm text-muted-foreground">
                          <li>Inadequate supervision or security</li>
                          <li>Faulty or missing safety equipment</li>
                          <li>Poor pool maintenance and chemical balance</li>
                          <li>Dangerous pool design or construction defects</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg text-center">
                    <h3 className="text-lg font-semibold text-red-800 mb-2">Need Immediate Help?</h3>
                    <p className="text-red-700 mb-4">
                      Don't wait - swimming pool accident cases have strict deadlines and evidence can disappear quickly.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button 
                        size="lg" 
                        className="bg-red-600 hover:bg-red-700"
                        onClick={() => window.location.href = '/practice-areas/swimming-pool/case-evaluation'}
                      >
                        Start Free Case Evaluation
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg"
                        onClick={() => window.location.href = 'tel:(818) 123-4567'}
                      >
                        Call (818) 123-4567 Now
                      </Button>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section mb-12">
              <div className="flex items-center mb-6">
                <img src={evaluationImage} alt="Swimming Pool FAQ" className="w-16 h-16 rounded-lg mr-4" />
                <h2 className="text-3xl font-bold text-red-600">Swimming Pool Accident FAQ</h2>
              </div>

              <div className="mb-8">
                <img 
                  src={faqLargeImage} 
                  alt="Swimming Pool Accident Frequently Asked Questions" 
                  className="w-full h-80 object-cover rounded-lg mb-6"
                />
              </div>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  Get answers to the most common questions about swimming pool accident cases, your legal rights, and the compensation process in California.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    question: "Who can be held liable for a swimming pool accident?",
                    answer: "Multiple parties may be liable including property owners, pool operators, maintenance companies, equipment manufacturers, and government entities. Liability depends on factors like negligent supervision, faulty equipment, poor maintenance, or safety code violations."
                  },
                  {
                    question: "What types of injuries are common in swimming pool accidents?",
                    answer: "Common injuries include drowning/near-drowning, traumatic brain injuries, spinal cord injuries, broken bones, chemical burns from pool chemicals, cuts and lacerations, and psychological trauma. Some injuries may not be immediately apparent."
                  },
                  {
                    question: "How long do I have to file a swimming pool accident claim in California?",
                    answer: "California has a 2-year statute of limitations for personal injury claims, but shorter deadlines may apply for government claims (6 months). It's crucial to contact an attorney immediately to protect your rights and preserve evidence."
                  },
                  {
                    question: "What compensation can I recover for a swimming pool accident?",
                    answer: "You may recover medical expenses (past and future), lost wages, pain and suffering, disability accommodations, rehabilitation costs, and in severe cases, punitive damages. Wrongful death cases may include funeral expenses and loss of support."
                  },
                  {
                    question: "Do I need a lawyer for my swimming pool accident case?",
                    answer: "Yes, pool accident cases involve complex liability issues, insurance company tactics, and substantial compensation. An experienced attorney will investigate properly, handle insurance companies, and maximize your recovery while you focus on healing."
                  },
                  {
                    question: "What should I do immediately after a swimming pool accident?",
                    answer: "Seek immediate medical attention, document the scene with photos, get witness contact information, report the incident to authorities, preserve evidence, and contact an experienced pool accident attorney before speaking to insurance companies."
                  },
                  {
                    question: "How much does it cost to hire a swimming pool accident lawyer?",
                    answer: "We work on a contingency fee basis - you pay no attorney fees unless we win your case. We also advance all case expenses, so there are no upfront costs to you. Your initial consultation is always free."
                  },
                  {
                    question: "Can I still file a claim if the accident was partially my fault?",
                    answer: "Yes, California follows comparative negligence law. Even if you were partially at fault, you can still recover damages reduced by your percentage of fault. For example, if you were 20% at fault, you can still recover 80% of your damages."
                  },
                  {
                    question: "What evidence is important in a swimming pool accident case?",
                    answer: "Critical evidence includes photos of the accident scene, witness statements, medical records, pool maintenance records, safety equipment inspection logs, surveillance footage, weather conditions, and expert testimony on pool safety standards."
                  },
                  {
                    question: "How do I prove negligence in a swimming pool accident case?",
                    answer: "To prove negligence, we must show the property owner had a duty of care, breached that duty, and the breach caused your injuries. This involves examining safety violations, inadequate supervision, faulty equipment, or failure to maintain safe conditions."
                  },
                  {
                    question: "What are common causes of swimming pool accidents?",
                    answer: "Common causes include inadequate supervision, faulty drain covers, slippery surfaces, inadequate fencing, chemical imbalances, electrical hazards, diving board accidents, pool equipment malfunctions, and failure to follow safety regulations."
                  },
                  {
                    question: "Can children be held liable for swimming pool accidents?",
                    answer: "Generally, children under 7 cannot be held liable. Children 7-14 are presumed incapable of negligence but this can be rebutted. The focus is usually on adult supervision and property owner responsibilities rather than child liability."
                  },
                  {
                    question: "What is attractive nuisance doctrine in pool accident cases?",
                    answer: "The attractive nuisance doctrine holds property owners liable for injuries to trespassing children if the property contains something likely to attract children who cannot appreciate the danger, like an unfenced swimming pool."
                  },
                  {
                    question: "Are public pools held to different safety standards?",
                    answer: "Yes, public pools have stricter safety requirements including certified lifeguards, specific depth markings, safety equipment, regular inspections, and compliance with health department regulations. Liability standards may also differ."
                  },
                  {
                    question: "What role do lifeguards play in pool accident liability?",
                    answer: "Lifeguards have a duty to monitor swimmers, respond to emergencies, and maintain safety. Their training, certification, attentiveness, and response time can all be factors in determining liability when accidents occur at supervised pools."
                  },
                  {
                    question: "Can I sue for emotional distress from a pool accident?",
                    answer: "Yes, you may recover for emotional distress, especially in cases involving near-drowning, witnessing accidents, or severe trauma. Both the victim and family members who witnessed the incident may have claims for emotional distress."
                  },
                  {
                    question: "What is the difference between premises liability and product liability in pool cases?",
                    answer: "Premises liability involves unsafe property conditions like slippery decks or inadequate fencing. Product liability involves defective pool equipment, faulty drains, or manufacturing defects. Cases may involve both theories of liability."
                  },
                  {
                    question: "How are pool chemical injuries handled legally?",
                    answer: "Chemical injuries can result from improper mixing, storage, or application of pool chemicals. Liability may involve pool maintenance companies, chemical manufacturers, or property owners who failed to properly handle hazardous substances."
                  },
                  {
                    question: "What safety equipment is required around swimming pools?",
                    answer: "Required safety equipment typically includes proper fencing, self-closing gates, pool alarms, safety covers, rescue equipment, first aid supplies, and proper signage. Requirements vary by location and pool type."
                  },
                  {
                    question: "Can I file a claim against my homeowner's insurance for a pool accident?",
                    answer: "Your homeowner's insurance may provide coverage, but insurers often try to deny or minimize claims. Having an experienced attorney helps ensure you receive fair treatment and maximum compensation from insurance companies."
                  },
                  {
                    question: "What happens if the pool owner has no insurance?",
                    answer: "If the pool owner lacks insurance, you may still pursue compensation through personal assets, business insurance (for commercial pools), or other liable parties like maintenance companies or equipment manufacturers."
                  },
                  {
                    question: "How long does a swimming pool accident lawsuit take?",
                    answer: "Cases typically take 1-3 years depending on complexity, severity of injuries, and willingness to settle. Simple cases may resolve in 6-12 months, while complex cases requiring trial can take 3-4 years."
                  },
                  {
                    question: "What factors affect the value of my pool accident case?",
                    answer: "Case value depends on injury severity, medical expenses, lost wages, pain and suffering, degree of negligence, age and life expectancy, future care needs, and impact on quality of life and earning capacity."
                  },
                  {
                    question: "Can I settle my case without going to court?",
                    answer: "Most cases settle out of court through negotiation. However, having an attorney prepared to go to trial often results in better settlement offers. We always prepare as if we're going to trial to maximize your recovery."
                  },
                  {
                    question: "What happens during a pool accident deposition?",
                    answer: "A deposition is sworn testimony given outside of court where you'll answer questions about the accident. Your attorney will prepare you and be present to protect your rights and object to improper questions."
                  },
                  {
                    question: "How do expert witnesses help in pool accident cases?",
                    answer: "Expert witnesses may include pool safety experts, medical professionals, accident reconstruction specialists, and engineers who can testify about safety standards, injury causation, and the extent of your damages."
                  },
                  {
                    question: "What if surveillance video exists of my pool accident?",
                    answer: "Surveillance video can be crucial evidence. We act quickly to preserve this footage before it's deleted or recorded over. Video evidence can clearly show how the accident occurred and who was at fault."
                  },
                  {
                    question: "Can I be compensated for future medical expenses?",
                    answer: "Yes, you can recover compensation for future medical expenses if your injuries require ongoing treatment, rehabilitation, or long-term care. Medical experts help establish the cost and necessity of future care."
                  },
                  {
                    question: "What if the pool accident happened at a hotel or resort?",
                    answer: "Hotels and resorts have heightened duties to ensure guest safety. They must maintain safe conditions, provide adequate supervision, comply with safety codes, and warn guests of known dangers. Liability standards are often stricter."
                  },
                  {
                    question: "How do wrongful death cases work in pool accidents?",
                    answer: "Wrongful death claims may be filed by surviving family members when a pool accident results in death. Compensation may include funeral expenses, lost financial support, loss of companionship, and other damages."
                  },
                  {
                    question: "What role does alcohol play in pool accident cases?",
                    answer: "If the victim was intoxicated, it may reduce but not eliminate recovery under comparative negligence laws. If the property owner served alcohol to minors or over-served adults, they may face additional liability."
                  },
                  {
                    question: "Can I file a claim for a pool accident that happened years ago?",
                    answer: "California's statute of limitations is generally 2 years, but exceptions exist for cases involving minors or delayed discovery of injuries. Contact an attorney immediately to determine if you still have rights to file a claim."
                  },
                  {
                    question: "What if the accident happened during a pool party or private event?",
                    answer: "The host may be liable for providing unsafe conditions, and the property owner remains responsible for maintaining safe premises. Event organizers or rental companies may also share liability depending on circumstances."
                  },
                  {
                    question: "How do pool drain entrapment cases work?",
                    answer: "Drain entrapment cases often involve defective drain covers or non-compliant equipment. The Virginia Graeme Baker Pool Safety Act sets federal standards, and violations can establish liability against pool owners and equipment manufacturers."
                  },
                  {
                    question: "What safety measures should pools have to prevent accidents?",
                    answer: "Proper safety measures include appropriate fencing, functioning drain covers, non-slip surfaces, adequate lighting, proper signage, emergency equipment, regular maintenance, chemical balance monitoring, and trained supervision when required."
                  },
                  {
                    question: "Can I sue a pool maintenance company for an accident?",
                    answer: "Yes, if the maintenance company's negligence contributed to the accident through improper chemical treatment, faulty equipment installation, or failure to identify hazards, they may be held liable alongside the property owner."
                  },
                  {
                    question: "What if I signed a waiver before using the pool?",
                    answer: "Waivers may limit but don't always eliminate liability, especially for gross negligence, willful misconduct, or violations of safety laws. The enforceability of waivers varies based on specific language and circumstances."
                  },
                  {
                    question: "How do pool accidents affect children differently than adults?",
                    answer: "Children face unique risks due to size, swimming ability, and inability to appreciate dangers. Courts often impose higher duties of care when children are involved, and damages may include lifelong impacts on development and earning capacity."
                  },
                  {
                    question: "What compensation is available for permanent disabilities from pool accidents?",
                    answer: "Permanent disability compensation may include lifetime medical care, adaptive equipment, home modifications, lost earning capacity, vocational rehabilitation, attendant care, and significant pain and suffering damages."
                  },
                  {
                    question: "Can I file a claim against a government entity for a public pool accident?",
                    answer: "Yes, but special rules apply including shorter notice periods (6 months in California) and different immunity provisions. Government claims require specific procedures and experienced legal representation."
                  },
                  {
                    question: "What happens if multiple parties are responsible for my pool accident?",
                    answer: "When multiple parties share fault, we pursue all responsible parties to maximize recovery. California's joint and several liability rules may allow full recovery from any party, who then seeks contribution from others."
                  },
                  {
                    question: "How do I document my injuries and damages after a pool accident?",
                    answer: "Keep detailed records of all medical treatment, medications, therapy, lost work time, pain levels, and how injuries affect daily activities. Photos of injuries and a journal documenting your recovery can be valuable evidence."
                  },
                  {
                    question: "What if the pool accident involved a diving board or slide?",
                    answer: "Diving boards and slides have specific safety requirements regarding placement, depth, and maintenance. Accidents may involve design defects, improper installation, inadequate warnings, or failure to maintain safe conditions."
                  },
                  {
                    question: "Can I recover compensation for scarring from a pool accident?",
                    answer: "Yes, visible scarring and disfigurement can significantly impact your life and self-esteem. Compensation may include plastic surgery costs, psychological counseling, and damages for the permanent change to your appearance."
                  },
                  {
                    question: "What role does pool lighting play in accident cases?",
                    answer: "Inadequate lighting can contribute to accidents by creating hazardous conditions. Property owners must provide sufficient illumination for safe use, and electrical hazards around pools pose serious risks requiring proper installation and maintenance."
                  },
                  {
                    question: "How do weather conditions affect pool accident liability?",
                    answer: "Property owners must monitor weather conditions and close pools during dangerous weather. Failure to warn users of weather-related hazards like lightning or high winds may increase liability for resulting accidents."
                  },
                  {
                    question: "What if my pool accident involved a hot tub or spa?",
                    answer: "Hot tubs and spas have unique safety requirements including temperature controls, proper drainage, slip-resistant surfaces, and safety covers. Accidents may involve burns, slip and falls, or entrapment injuries with specific liability issues."
                  },
                  {
                    question: "Can I sue for a pool accident that happened at a friend's house?",
                    answer: "Yes, you can file a claim against your friend's homeowner's insurance. While this may feel uncomfortable, insurance exists to protect both you and your friend from financial hardship due to accidents."
                  },
                  {
                    question: "What if the pool accident happened during swimming lessons?",
                    answer: "Swimming instructors and facilities have heightened duties to ensure student safety. Liability may involve inadequate supervision, improper teaching methods, failure to assess swimming ability, or unsafe facility conditions."
                  },
                  {
                    question: "How do pool depth and design affect accident cases?",
                    answer: "Improper depth for activities, inadequate slope warnings, or dangerous design features can contribute to accidents. Pool designers and builders may be liable for design defects that create unreasonably dangerous conditions."
                  },
                  {
                    question: "What should I do if insurance companies contact me after a pool accident?",
                    answer: "Don't give recorded statements or sign documents without consulting an attorney. Insurance companies often try to minimize claims or get admissions that hurt your case. Direct them to your attorney to protect your rights."
                  }
                ].map((faq, index) => (
                  <Collapsible key={index} open={expandedFaq === index} onOpenChange={() => setExpandedFaq(expandedFaq === index ? null : index)}>
                    <Card className="cursor-pointer hover:shadow-md transition-shadow">
                      <CollapsibleTrigger asChild>
                        <CardHeader className="hover:bg-muted/50 transition-colors">
                          <CardTitle className="flex items-center justify-between text-left">
                            <span className="text-lg">{faq.question}</span>
                            {expandedFaq === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                          </CardTitle>
                        </CardHeader>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                        </CardContent>
                      </CollapsibleContent>
                    </Card>
                  </Collapsible>
                ))}
              </div>

              <div className="mt-8 bg-primary/10 border border-primary/20 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-primary mb-2">Still Have Questions?</h3>
                <p className="text-muted-foreground mb-4">
                  Our experienced swimming pool accident attorneys are here to answer all your questions and provide personalized legal guidance for your specific situation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    onClick={() => window.location.href = '/practice-areas/swimming-pool/case-evaluation'}
                  >
                    Get Your Questions Answered - Free Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => window.location.href = 'tel:(818) 123-4567'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call (818) 123-4567
                  </Button>
                </div>
              </div>
            </section>

            {/* Time Limits Section */}
            <section className="content-section mb-12">
              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-700">
                    <AlertTriangle className="w-6 h-6 mr-2" />
                    Don't Wait - Time Limits Apply for California Swimming Pool Accident Claims
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-red-700 mb-3">Critical Deadlines</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• 2-year statute of limitations for personal injury claims</li>
                        <li>• 6-month deadline for claims against government entities</li>
                        <li>• Evidence can disappear quickly</li>
                        <li>• Witness memories fade over time</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-3">Act Now to Protect Your Rights</h4>
                      <p className="text-sm text-red-600 mb-4">
                        California law imposes strict deadlines for filing swimming pool accident claims. 
                        Don't risk losing your right to compensation - contact us immediately for a free consultation.
                      </p>
                      <Button 
                        size="sm" 
                        className="bg-red-600 hover:bg-red-700 text-white"
                        onClick={() => window.location.href = '/practice-areas/swimming-pool/case-evaluation'}
                      >
                        Get Free Consultation Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Contact Section */}
            <section className="text-center">
              <Card className="border-primary bg-primary/5">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
                  <p className="text-muted-foreground mb-6">
                    Don't face the insurance companies alone. Our experienced swimming pool accident attorneys 
                    are ready to fight for the compensation you deserve.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild>
                      <a href="/practice-areas/swimming-pool/case-evaluation">
                        Get Free Case Review
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a href="tel:(818) 123-4567">
                        <Phone className="w-5 h-5 mr-2" />
                        Call (818) 123-4567
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwimmingPoolAccidents;