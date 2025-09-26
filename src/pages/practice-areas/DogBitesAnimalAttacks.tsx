import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Progress } from '@/components/ui/progress';
import { ThreeDVisualEffects } from '@/components/3DVisualEffects';
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
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  PawPrint
} from 'lucide-react';
import '@/styles/premium-3d-effects.css';
import heroBackground from '@/assets/dog-bite-hero-bg.jpg';
import sidebarImage from '@/assets/dog-bite-consultation.jpg';
import lawsImage from '@/assets/california-dog-bite-laws.jpg';
import legalProcessImage from '@/assets/dog-bite-legal-process.jpg';
import neighborhoodsImage from '@/assets/california-neighborhoods.jpg';
import medicalImage from '@/assets/dog-bite-medical-treatment.jpg';
import compensationImage from '@/assets/california-neighborhoods.jpg';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const DogBitesAnimalAttacks: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    
    // Incident Information
    incidentDate: '',
    injuryType: '',
    dogBreed: '',
    dogSize: '',
    attackType: '',
    bodyPartsAffected: '',
    
    // Medical Information
    hospitalTreatment: '',
    surgeryRequired: '',
    ongoingTreatment: '',
    medicalCosts: '',
    
    // Legal Information
    previousClaim: '',
    policeReport: '',
    witnessesPresent: '',
    ownerKnown: '',
    urgency: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'understanding-laws', label: 'UNDERSTANDING CALIFORNIA LAWS', icon: Stethoscope },
    { id: 'what-to-do', label: 'WHAT TO DO AFTER AN ATTACK', icon: Heart },
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
    
    // Log form data (in real app, this would be sent to server)
    console.log('Dog Bite Case Evaluation Submitted:', formData);
    
    // Show success message and potentially redirect
    alert('Your case evaluation has been submitted. We will contact you within 24 hours.');
    
    // Reset form
    setCurrentStep(1);
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      incidentDate: '',
      injuryType: '',
      dogBreed: '',
      dogSize: '',
      attackType: '',
      bodyPartsAffected: '',
      hospitalTreatment: '',
      surgeryRequired: '',
      ongoingTreatment: '',
      medicalCosts: '',
      previousClaim: '',
      policeReport: '',
      witnessesPresent: '',
      ownerKnown: '',
      urgency: ''
    });
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
              California Dog Bite Lawyers
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg text-white">Backed by Proven Experience</span>
            </div>
            
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
              onClick={() => window.location.href = '/dog-bite-case-evaluation'}
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
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Dog Bite Attorneys</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  If you or a loved one has been injured in a dog bite attack in California, you're facing one of the most traumatic types of personal injuries. Dog bites can cause devastating physical injuries, emotional trauma, and permanent scarring, and those responsible for your attack should be held accountable for your suffering and financial losses.
                </p>
                
                <p className="text-lg leading-relaxed">
                  At Trembach Law Firm, we understand the urgency of dog bite cases. With decades of experience in California animal attack litigation and a deep understanding of the medical complexities involved, we're prepared to fight for maximum compensation while you focus on recovery and healing.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Show More About Our California Dog Bite Practice
                    {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <PawPrint className="w-5 h-5 mr-2 text-primary" />
                      Animal Attack Understanding
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Our team works closely with animal behavior experts and medical professionals to understand the full scope of your attack, injuries, and recovery needs.</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Map className="w-5 h-5 mr-2 text-primary" />
                      California Expertise
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>We have extensive knowledge of California's strict liability dog bite laws and understand how local ordinances protect residents throughout the state.</p>
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
                          <p className="text-sm text-muted-foreground">Attorney Trembach's background defending insurance companies provides unique insights into their tactics.</p>
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
                    <h3>Comprehensive California Dog Bite Representation</h3>
                    <p>
                      Dog bite cases in California involve complex medical, legal, and insurance factors. Our firm has the resources and expertise to handle every aspect of your case, from investigating the attack circumstances to working with medical experts who can clearly explain how the attack has affected your life.
                    </p>
                    
                    <p>
                      California has strict liability laws for dog bite cases, meaning dog owners are responsible for injuries their pets cause regardless of the animal's previous behavior. We investigate every potential source of liability to ensure maximum compensation:
                    </p>
                    
                    <ul>
                      <li>Dog owner's homeowner's or renter's insurance</li>
                      <li>Property owner liability where attack occurred</li>
                      <li>Local leash law violations and municipal ordinances</li>
                      <li>Previous complaints about the same animal</li>
                      <li>Dangerous dog designations by authorities</li>
                      <li>Evidence of negligent supervision or control</li>
                    </ul>
                    
                    <p>
                      We investigate every potential source of recovery to ensure no liable party escapes responsibility for your injuries. This comprehensive approach often results in higher compensation as we identify multiple defendants and pursue claims through various legal channels including insurance claims, personal injury lawsuits, and municipal violations.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-red-600">Free Case Evaluation</h2>
                <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
                  100% Confidential
                </Badge>
                <Badge variant="outline" className="px-3 py-1 text-sm font-medium">
                  No Cost • No Obligation
                </Badge>
              </div>

              <ThreeDVisualEffects className="premium-3d-container">
                <div className="premium-form-container interactive-card glass-card rounded-2xl p-8 gpu-accelerated">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-display text-slate-900 mb-2 font-bold">Get Your Free Dog Bite Consultation</h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto mb-4"></div>
                    <p className="text-slate-700 text-lg leading-relaxed">Specialized evaluation for dog bite cases throughout California</p>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="flex justify-between text-sm text-slate-700 mb-2 font-medium">
                      <span>Step {currentStep} of 4</span>
                      <span>{Math.round((currentStep / 4) * 100)}% Complete</span>
                    </div>
                    <Progress value={(currentStep / 4) * 100} className="h-3 bg-blue-100">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${(currentStep / 4) * 100}%` }}
                      />
                    </Progress>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    {/* Step 1: Personal Information */}
                    {currentStep === 1 && (
                      <div className="space-y-6 animate-fade-in">
                        <h4 className="text-xl md:text-2xl font-bold text-white mb-6">Personal Information</h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="firstName" className="text-white text-base font-medium">First Name *</Label>
                            <Input
                              id="firstName"
                              type="text"
                              value={formData.firstName}
                              onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                              className="bg-white/10 border-blue-300/40 text-white placeholder:text-blue-200/70 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 h-12 text-base"
                              placeholder="Enter your first name"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName" className="text-white text-base font-medium">Last Name *</Label>
                            <Input
                              id="lastName"
                              type="text"
                              value={formData.lastName}
                              onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                              className="bg-white/10 border-blue-300/40 text-white placeholder:text-blue-200/70 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 h-12 text-base"
                              placeholder="Enter your last name"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-white text-base font-medium">Phone Number *</Label>
                            <Input
                              id="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                              className="bg-white/10 border-blue-300/40 text-white placeholder:text-blue-200/70 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 h-12 text-base"
                              placeholder="(555) 123-4567"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-white text-base font-medium">Email Address</Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                              className="bg-white/10 border-blue-300/40 text-white placeholder:text-blue-200/70 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 h-12 text-base"
                              placeholder="your.email@example.com"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Incident Information */}
                    {currentStep === 2 && (
                      <div className="space-y-6 animate-fade-in">
                        <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">Incident Information</h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="incidentDate" className="text-slate-800">Date of Attack *</Label>
                            <Input
                              id="incidentDate"
                              type="date"
                              value={formData.incidentDate}
                              onChange={(e) => setFormData(prev => ({ ...prev, incidentDate: e.target.value }))}
                              className="bg-white border-blue-200 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 h-12"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="attackType" className="text-slate-800">Type of Attack *</Label>
                            <Select value={formData.attackType} onValueChange={(value) => setFormData(prev => ({ ...prev, attackType: value }))}>
                              <SelectTrigger className="bg-white border-blue-200 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 h-12">
                                <SelectValue placeholder="Select attack type" />
                              </SelectTrigger>
                              <SelectContent className="z-50 bg-white text-slate-900 shadow-xl border border-blue-200">
                                <SelectItem value="bite-only">Bite Only</SelectItem>
                                <SelectItem value="bite-and-shake">Bite and Shake</SelectItem>
                                <SelectItem value="multiple-bites">Multiple Bites</SelectItem>
                                <SelectItem value="knocked-down">Knocked Down</SelectItem>
                                <SelectItem value="mauling">Mauling</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label className="text-slate-800">Dog Breed (if known)</Label>
                            <Select value={formData.dogBreed} onValueChange={(value) => setFormData(prev => ({ ...prev, dogBreed: value }))}>
                              <SelectTrigger className="bg-white border-blue-200 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 h-12">
                                <SelectValue placeholder="Select dog breed" />
                              </SelectTrigger>
                              <SelectContent className="z-50 bg-white text-slate-900 shadow-xl border border-blue-200">
                                <SelectItem value="pit-bull">Pit Bull</SelectItem>
                                <SelectItem value="german-shepherd">German Shepherd</SelectItem>
                                <SelectItem value="rottweiler">Rottweiler</SelectItem>
                                <SelectItem value="doberman">Doberman</SelectItem>
                                <SelectItem value="mixed-breed">Mixed Breed</SelectItem>
                                <SelectItem value="unknown">Unknown</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label className="text-slate-800">Dog Size</Label>
                            <Select value={formData.dogSize} onValueChange={(value) => setFormData(prev => ({ ...prev, dogSize: value }))}>
                              <SelectTrigger className="bg-white border-blue-200 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 h-12">
                                <SelectValue placeholder="Select dog size" />
                              </SelectTrigger>
                              <SelectContent className="z-50 bg-white text-slate-900 shadow-xl border border-blue-200">
                                <SelectItem value="small">Small (under 25 lbs)</SelectItem>
                                <SelectItem value="medium">Medium (25-60 lbs)</SelectItem>
                                <SelectItem value="large">Large (60-100 lbs)</SelectItem>
                                <SelectItem value="extra-large">Extra Large (over 100 lbs)</SelectItem>
                                <SelectItem value="unknown">Unknown</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Injury Information */}
                    {currentStep === 3 && (
                      <div className="space-y-6 animate-fade-in">
                        <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">Injury Information</h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label className="text-slate-800">Type of Injuries</Label>
                            <Select value={formData.injuryType} onValueChange={(value) => setFormData(prev => ({ ...prev, injuryType: value }))}>
                              <SelectTrigger className="bg-white border-blue-200 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 h-12">
                                <SelectValue placeholder="Select injury type" />
                              </SelectTrigger>
                              <SelectContent className="z-50 bg-white text-slate-900 shadow-xl border border-blue-200">
                                <SelectItem value="puncture-wounds">Puncture Wounds</SelectItem>
                                <SelectItem value="lacerations">Lacerations</SelectItem>
                                <SelectItem value="broken-bones">Broken Bones</SelectItem>
                                <SelectItem value="nerve-damage">Nerve Damage</SelectItem>
                                <SelectItem value="scarring">Scarring</SelectItem>
                                <SelectItem value="infection">Infection</SelectItem>
                                <SelectItem value="multiple">Multiple Types</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label className="text-slate-800">Body Parts Affected</Label>
                            <Select value={formData.bodyPartsAffected} onValueChange={(value) => setFormData(prev => ({ ...prev, bodyPartsAffected: value }))}>
                              <SelectTrigger className="bg-white border-blue-200 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 h-12">
                                <SelectValue placeholder="Select body part" />
                              </SelectTrigger>
                              <SelectContent className="z-50 bg-white text-slate-900 shadow-xl border border-blue-200">
                                <SelectItem value="face">Face</SelectItem>
                                <SelectItem value="arms">Arms</SelectItem>
                                <SelectItem value="hands">Hands</SelectItem>
                                <SelectItem value="legs">Legs</SelectItem>
                                <SelectItem value="torso">Torso</SelectItem>
                                <SelectItem value="multiple">Multiple Areas</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-slate-800">Did you require hospital treatment?</Label>
                          <Select value={formData.hospitalTreatment} onValueChange={(value) => setFormData(prev => ({ ...prev, hospitalTreatment: value }))}>
                            <SelectTrigger className="bg-white border-blue-200 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 h-12">
                              <SelectValue placeholder="Select treatment level" />
                            </SelectTrigger>
                            <SelectContent className="z-50 bg-white text-slate-900 shadow-xl border border-blue-200">
                              <SelectItem value="emergency-room">Emergency Room Visit</SelectItem>
                              <SelectItem value="urgent-care">Urgent Care</SelectItem>
                              <SelectItem value="doctor-office">Doctor's Office</SelectItem>
                              <SelectItem value="hospitalization">Hospitalization</SelectItem>
                              <SelectItem value="surgery">Surgery Required</SelectItem>
                              <SelectItem value="first-aid">First Aid Only</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Legal Information */}
                    {currentStep === 4 && (
                      <div className="space-y-6 animate-fade-in">
                        <h4 className="text-xl md:text-2xl font-bold text-white mb-6">Legal Information</h4>
                        
                        <div className="space-y-4">
                          <Label className="text-white text-base font-medium">Do you know the dog owner?</Label>
                          <Select value={formData.ownerKnown} onValueChange={(value) => setFormData(prev => ({ ...prev, ownerKnown: value }))}>
                            <SelectTrigger className="bg-white/10 border-blue-300/40 text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 h-12 text-base">
                              <SelectValue placeholder="Select an option" className="text-blue-200/70" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border border-blue-200">
                              <SelectItem value="yes" className="text-gray-900 hover:bg-blue-50">Yes</SelectItem>
                              <SelectItem value="no" className="text-gray-900 hover:bg-blue-50">No</SelectItem>
                              <SelectItem value="partially" className="text-gray-900 hover:bg-blue-50">Partially</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-4">
                          <Label className="text-white text-base font-medium">Were there witnesses?</Label>
                          <Select value={formData.witnessesPresent} onValueChange={(value) => setFormData(prev => ({ ...prev, witnessesPresent: value }))}>
                            <SelectTrigger className="bg-white/10 border-blue-300/40 text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 h-12 text-base">
                              <SelectValue placeholder="Select an option" className="text-blue-200/70" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border border-blue-200">
                              <SelectItem value="yes" className="text-gray-900 hover:bg-blue-50">Yes</SelectItem>
                              <SelectItem value="no" className="text-gray-900 hover:bg-blue-50">No</SelectItem>
                              <SelectItem value="unknown" className="text-gray-900 hover:bg-blue-50">Unknown</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-4">
                          <Label className="text-white text-base font-medium">Was a police report filed?</Label>
                          <Select value={formData.policeReport} onValueChange={(value) => setFormData(prev => ({ ...prev, policeReport: value }))}>
                            <SelectTrigger className="bg-white/10 border-blue-300/40 text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 h-12 text-base">
                              <SelectValue placeholder="Select an option" className="text-blue-200/70" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border border-blue-200">
                              <SelectItem value="yes" className="text-gray-900 hover:bg-blue-50">Yes</SelectItem>
                              <SelectItem value="no" className="text-gray-900 hover:bg-blue-50">No</SelectItem>
                              <SelectItem value="unknown" className="text-gray-900 hover:bg-blue-50">Unknown</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between pt-6">
                      {currentStep > 1 && (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setCurrentStep(prev => prev - 1)}
                          className="flex items-center gap-2"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          Previous
                        </Button>
                      )}
                      
                      <div className="ml-auto">
                        {currentStep < 4 ? (
                          <Button
                            type="button"
                            onClick={() => setCurrentStep(prev => prev + 1)}
                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
                          >
                            Next
                            <ChevronRight className="w-4 h-4" />
                          </Button>
                        ) : (
                          <Button
                            type="submit"
                            className="bg-red-600 hover:bg-red-700 text-white font-bold"
                          >
                            Submit Evaluation
                          </Button>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
              </ThreeDVisualEffects>
            </section>

            {/* Understanding California's Strict Liability Dog Bite Laws */}
            <section id="understanding-laws" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Understanding California's Strict Liability Dog Bite Laws</h2>
              
              <div className="mb-6">
                <img 
                  src={lawsImage} 
                  alt="California dog bite strict liability laws" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                />
                
                <p className="text-lg leading-relaxed mb-4">
                  California Civil Code Section 3342 provides some of the strongest protection for dog bite victims in the United States. Under this strict liability statute, dog owners are automatically responsible for injuries caused by their dogs, regardless of the animal's previous behavior or the owner's knowledge of any dangerous tendencies.
                </p>
              </div>

              <Collapsible open={expandedSections.laws} onOpenChange={() => toggleSection('laws')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Show Complete Legal Framework Details
                    {expandedSections.laws ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3>California Civil Code Section 3342</h3>
                    <p>
                      The law states: "The owner of any dog is liable for the damages suffered by any person who is bitten by the dog while in a public place or lawfully in a private place, including the property of the owner of the dog, regardless of the former viciousness of the dog or the owner's knowledge of such viciousness."
                    </p>
                    
                    <h4>Key Elements of California's Dog Bite Law:</h4>
                    
                    <h5>1. Strict Liability Standard</h5>
                    <p>
                      Unlike many other states that require proof of the dog's dangerous propensities (the "one bite rule"), California imposes strict liability. This means:
                    </p>
                    <ul>
                      <li>No need to prove the dog previously bit someone</li>
                      <li>No need to prove the owner knew the dog was dangerous</li>
                      <li>No need to prove the owner was negligent</li>
                      <li>Simply proving the bite occurred is sufficient for liability</li>
                    </ul>
                    
                    <h5>2. Location Requirements</h5>
                    <p>The victim must be:</p>
                    <ul>
                      <li><strong>In a public place:</strong> Streets, sidewalks, parks, beaches</li>
                      <li><strong>Lawfully in a private place:</strong> Invited guests, mail carriers, delivery persons</li>
                      <li><strong>On the owner's property:</strong> Social guests, service providers</li>
                    </ul>
                    
                    <h5>3. Covered Injuries</h5>
                    <p>The statute covers:</p>
                    <ul>
                      <li>Direct bite injuries from teeth penetration</li>
                      <li>Injuries from being knocked down by a dog</li>
                      <li>Scratches from claws during an attack</li>
                      <li>Secondary injuries from falling while avoiding a dog</li>
                    </ul>
                    
                    <h3>Dog Bite Statistics in California</h3>
                    <p>
                      California consistently leads the nation in dog bite claims and payouts:
                    </p>
                    <ul>
                      <li>Over 2,000 dog bite claims filed annually in California</li>
                      <li>Average settlement exceeds $50,000 per case</li>
                      <li>Children under 14 represent 60% of victims</li>
                      <li>Facial injuries occur in 40% of child victims</li>
                      <li>Infections develop in 20% of all dog bite cases</li>
                    </ul>
                    
                    <h3>Common Dog Bite Scenarios</h3>
                    <p>Our firm handles various types of dog attack cases:</p>
                    <ul>
                      <li>Attacks on children in neighborhoods</li>
                      <li>Postal workers and delivery personnel attacks</li>
                      <li>Dog park incidents</li>
                      <li>Attacks by dogs with known aggressive histories</li>
                      <li>Multiple dog attacks (pack attacks)</li>
                      <li>Attacks by dangerous breed dogs</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                      Important Legal Consideration
                    </h3>
                    <p>
                      California's statute of limitations for dog bite cases is two years from the date of injury. However, it's crucial to contact an attorney immediately after an attack to preserve evidence, interview witnesses, and ensure all deadlines are met.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Get Your Free Dog Bite Case Evaluation */}
            <section className="content-section mb-12 bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg border border-blue-200">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Get Your Free Dog Bite Case Evaluation</h2>
                <p className="text-lg text-blue-800 mb-6">
                  Don't wait - California law limits the time you have to file a claim. Contact us today for your free, confidential consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4"
                    onClick={() => window.location.href = '/dog-bite-case-evaluation'}
                  >
                    Start Free Evaluation
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4"
                    onClick={() => window.location.href = 'tel:8559851234'}
                  >
                    Call (855) 985-1234
                  </Button>
                </div>
              </div>
            </section>

            {/* What to Do After a Dog Attack */}
            <section id="what-to-do" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">What to Do After a Dog Attack</h2>
              
              <div className="mb-6">
                <img 
                  src={medicalImage} 
                  alt="California emergency medical treatment for dog bite injuries" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                />
                
                <p className="text-lg leading-relaxed mb-4">
                  The actions you take immediately after a dog attack can significantly impact both your health and your legal case. Here's a comprehensive guide on the critical steps to take following a dog bite incident in California.
                </p>
              </div>

              <Collapsible open={expandedSections.whatToDo} onOpenChange={() => toggleSection('whatToDo')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Show Complete Post-Attack Action Plan
                    {expandedSections.whatToDo ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3>Immediate Medical Steps (First 30 Minutes)</h3>
                    
                    <h4>1. Assess and Control Bleeding</h4>
                    <ul>
                      <li>Apply direct pressure to bleeding wounds with clean cloth</li>
                      <li>Elevate injured limbs if possible</li>
                      <li>Do not remove embedded objects from wounds</li>
                      <li>Call 911 for severe injuries or uncontrolled bleeding</li>
                    </ul>
                    
                    <h4>2. Clean Wounds Immediately</h4>
                    <ul>
                      <li>Rinse wounds with clean water for several minutes</li>
                      <li>Apply antiseptic if available</li>
                      <li>Cover wounds with sterile bandages</li>
                      <li>Avoid alcohol or hydrogen peroxide on deep wounds</li>
                    </ul>
                    
                    <h4>3. Seek Professional Medical Care</h4>
                    <p>Even minor-appearing bites require medical evaluation because:</p>
                    <ul>
                      <li>Dog mouths contain numerous bacteria</li>
                      <li>Puncture wounds can be deeper than they appear</li>
                      <li>Infection risk is high (15-20% of dog bites become infected)</li>
                      <li>Rabies risk must be assessed</li>
                      <li>Tetanus vaccination may be needed</li>
                    </ul>
                    
                    <h3>Documentation Steps (First 24 Hours)</h3>
                    
                    <h4>1. Photograph Everything</h4>
                    <ul>
                      <li>All injuries from multiple angles</li>
                      <li>Torn or bloody clothing</li>
                      <li>The attack location</li>
                      <li>The dog (if safely possible)</li>
                      <li>Any property damage</li>
                    </ul>
                    
                    <h4>2. Gather Information</h4>
                    <ul>
                      <li>Dog owner's name, contact information, and insurance details</li>
                      <li>Dog's breed, size, color, and any identifying marks</li>
                      <li>Vaccination records (ask for documentation)</li>
                      <li>Property owner information (if different from dog owner)</li>
                      <li>Witness names and contact information</li>
                    </ul>
                    
                    <h4>3. File Reports</h4>
                    <ul>
                      <li>Police report (especially for severe injuries)</li>
                      <li>Animal control report</li>
                      <li>Report to local health department if required</li>
                      <li>Notify your insurance company</li>
                    </ul>
                    
                    <h3>Medical Follow-Up (First Week)</h3>
                    
                    <h4>Monitor for Infection Signs</h4>
                    <p>Seek immediate medical attention if you experience:</p>
                    <ul>
                      <li>Increased pain, swelling, or redness</li>
                      <li>Pus or discharge from wounds</li>
                      <li>Red streaks extending from the wound</li>
                      <li>Fever or chills</li>
                      <li>Swollen lymph nodes</li>
                    </ul>
                    
                    <h4>Follow Medical Instructions</h4>
                    <ul>
                      <li>Take all prescribed antibiotics as directed</li>
                      <li>Keep wounds clean and dry</li>
                      <li>Change bandages as instructed</li>
                      <li>Attend all follow-up appointments</li>
                      <li>Physical therapy if recommended</li>
                    </ul>
                    
                    <h3>Legal Steps (First Month)</h3>
                    
                    <h4>1. Preserve Evidence</h4>
                    <ul>
                      <li>Keep all medical records and bills</li>
                      <li>Save damaged clothing and personal items</li>
                      <li>Take regular photos of healing injuries</li>
                      <li>Keep a daily journal of symptoms and impact</li>
                      <li>Document time missed from work</li>
                    </ul>
                    
                    <h4>2. Avoid Common Mistakes</h4>
                    <ul>
                      <li>Don't give recorded statements to insurance companies</li>
                      <li>Don't accept quick settlement offers</li>
                      <li>Don't sign any documents without legal review</li>
                      <li>Don't delay seeking legal representation</li>
                      <li>Don't admit fault or blame yourself</li>
                    </ul>
                    
                    <h4>3. Contact a Dog Bite Attorney</h4>
                    <p>
                      Early legal intervention is crucial for several reasons:
                    </p>
                    <ul>
                      <li>Evidence can disappear quickly</li>
                      <li>Witness memories fade over time</li>
                      <li>Insurance companies move fast to minimize claims</li>
                      <li>Legal deadlines begin immediately</li>
                      <li>Medical treatment decisions may affect your case</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                    <h3 className="text-lg font-semibold mb-3 flex items-center text-red-800">
                      <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                      Critical Warning Signs - Seek Emergency Care Immediately
                    </h3>
                    <ul className="text-red-700 space-y-1">
                      <li>• Uncontrolled bleeding</li>
                      <li>• Signs of severe infection (fever, red streaking)</li>
                      <li>• Difficulty moving injured area</li>
                      <li>• Numbness or loss of sensation</li>
                      <li>• Suspected bone or joint damage</li>
                      <li>• Facial or neck injuries</li>
                      <li>• Any concern about rabies exposure</li>
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Legal Process */}
            <section id="legal-process" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Dog Bite Legal Process</h2>
              
              <div className="mb-6">
                <img 
                  src={legalProcessImage} 
                  alt="California legal process for dog bite cases" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                />
                
                <p className="text-lg leading-relaxed mb-4">
                  Understanding the legal process helps you know what to expect as we pursue maximum compensation for your dog bite injuries. California's strict liability laws provide multiple avenues for recovery, and our experienced team will pursue all applicable options.
                </p>
              </div>

              <Collapsible open={expandedSections.legalProcess} onOpenChange={() => toggleSection('legalProcess')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Show Complete Legal Process Details
                    {expandedSections.legalProcess ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3>Overview of Legal Options</h3>
                    <p>
                      Dog bite victims in California have several potential sources of compensation:
                    </p>
                    
                    <h4>1. Insurance Claims</h4>
                    <p>
                      Most dog bite claims are covered by the owner's homeowner's or renter's insurance policy. These policies typically provide coverage ranging from $100,000 to $500,000 for dog bite injuries.
                    </p>
                    
                    <h4>2. Personal Injury Lawsuits</h4>
                    <p>
                      If insurance coverage is insufficient or denied, we can file a personal injury lawsuit against the dog owner seeking compensation for medical expenses, lost wages, pain and suffering, and other damages.
                    </p>
                    
                    <h4>3. Premises Liability Claims</h4>
                    <p>
                      If the attack occurred on someone else's property, the property owner may also be liable for failing to provide a safe environment or allowing a dangerous dog on their premises.
                    </p>
                    
                    <h4>4. Municipal Violations</h4>
                    <p>
                      Violations of local leash laws, licensing requirements, or dangerous dog ordinances can provide additional grounds for compensation and may increase settlement values.
                    </p>
                    
                    <h3>The Investigation Process</h3>
                    
                    <h4>Evidence Collection</h4>
                    <p>We conduct a thorough investigation to build your case:</p>
                    <ul>
                      <li>Detailed scene investigation and photo documentation</li>
                      <li>Interview witnesses and obtain sworn statements</li>
                      <li>Collect medical records and expert medical opinions</li>
                      <li>Research the dog's history and previous incidents</li>
                      <li>Investigate local ordinance violations</li>
                      <li>Analyze insurance coverage and policy limits</li>
                    </ul>
                    
                    <h4>Medical Documentation</h4>
                    <p>We work with medical experts to fully document:</p>
                    <ul>
                      <li>Extent of physical injuries and scarring</li>
                      <li>Psychological trauma and PTSD</li>
                      <li>Future medical needs and treatment costs</li>
                      <li>Impact on daily activities and quality of life</li>
                      <li>Work limitations and lost earning capacity</li>
                    </ul>
                    
                    <h3>Settlement Negotiations</h3>
                    
                    <h4>Insurance Company Tactics</h4>
                    <p>Insurance companies often try to minimize payouts by:</p>
                    <ul>
                      <li>Questioning the severity of injuries</li>
                      <li>Claiming the victim provoked the attack</li>
                      <li>Arguing the victim was trespassing</li>
                      <li>Disputing medical necessity of treatments</li>
                      <li>Offering quick, low-ball settlements</li>
                    </ul>
                    
                    <h4>Our Negotiation Strategy</h4>
                    <p>We counter these tactics by:</p>
                    <ul>
                      <li>Presenting comprehensive medical documentation</li>
                      <li>Using expert witnesses to establish liability</li>
                      <li>Demonstrating the full impact on your life</li>
                      <li>Calculating fair compensation for all damages</li>
                      <li>Preparing for trial if necessary</li>
                    </ul>
                    
                    <h3>Types of Compensation</h3>
                    
                    <h4>Economic Damages</h4>
                    <ul>
                      <li>Medical expenses (past and future)</li>
                      <li>Lost wages and diminished earning capacity</li>
                      <li>Rehabilitation and therapy costs</li>
                      <li>Travel expenses for medical treatment</li>
                      <li>Property damage (clothing, personal items)</li>
                    </ul>
                    
                    <h4>Non-Economic Damages</h4>
                    <ul>
                      <li>Pain and suffering</li>
                      <li>Emotional distress and trauma</li>
                      <li>Disfigurement and scarring</li>
                      <li>Loss of enjoyment of life</li>
                      <li>Anxiety and fear of dogs</li>
                    </ul>
                    
                    <h4>Punitive Damages</h4>
                    <p>
                      In cases involving particularly dangerous dogs or negligent owners, punitive damages may be available to punish the defendant and deter similar conduct.
                    </p>
                    
                    <h3>Timeline and Process</h3>
                    
                    <h4>Initial Phase (0-3 months)</h4>
                    <ul>
                      <li>Case evaluation and evidence gathering</li>
                      <li>Medical treatment stabilization</li>
                      <li>Insurance claim filing</li>
                      <li>Initial settlement discussions</li>
                    </ul>
                    
                    <h4>Discovery Phase (3-12 months)</h4>
                    <ul>
                      <li>Formal legal proceedings if necessary</li>
                      <li>Expert witness consultations</li>
                      <li>Depositions and testimony</li>
                      <li>Medical evaluations and reports</li>
                    </ul>
                    
                    <h4>Resolution Phase (6-18 months)</h4>
                    <ul>
                      <li>Mediation or arbitration</li>
                      <li>Final settlement negotiations</li>
                      <li>Trial preparation if needed</li>
                      <li>Case resolution and payment</li>
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-8">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {[
                  {
                    question: "What Should I Do Immediately After a Dog Bite?",
                    answer: "Seek immediate medical attention, even for seemingly minor bites. Dog bites can cause serious infections and complications. Document everything with photos, get witness information, and contact animal control to report the incident. Avoid giving statements to insurance companies without legal representation."
                  },
                  {
                    question: "Am I Entitled to Compensation Even if the Dog Never Bit Anyone Before?",
                    answer: "Yes, California's strict liability law (Civil Code Section 3342) makes dog owners responsible for injuries caused by their dogs regardless of the animal's previous behavior or the owner's knowledge of dangerous tendencies. You don't need to prove the dog was previously aggressive."
                  },
                  {
                    question: "How Much Compensation Can I Receive for a Dog Bite?",
                    answer: "Compensation varies based on injury severity, medical costs, lost wages, pain and suffering, permanent scarring, and emotional trauma. California dog bite settlements and verdicts range from thousands to hundreds of thousands of dollars depending on the circumstances and long-term impact."
                  },
                  {
                    question: "What if the Dog Bite Happened on the Owner's Property?",
                    answer: "California law specifically covers bites that occur on the dog owner's property as long as you were lawfully present. This includes social guests, delivery persons, mail carriers, and service providers. Trespassers have limited rights but may still have claims under certain circumstances."
                  },
                  {
                    question: "Can I Sue if a Dog Knocked Me Down Without Biting?",
                    answer: "Yes, California law covers injuries caused by dogs even without an actual bite. If a dog jumps on you, knocks you down, or causes you to fall while trying to avoid the animal, you may still be entitled to compensation under the state's strict liability statute or negligence theories."
                  },
                  {
                    question: "What if the Dog Owner Doesn't Have Insurance?",
                    answer: "You may still recover compensation through your own homeowner's or renter's insurance, the property owner's insurance where the attack occurred, or by pursuing the dog owner's personal assets. An experienced attorney can identify all potential sources of recovery."
                  },
                  {
                    question: "How Long Do I Have to File a Dog Bite Lawsuit in California?",
                    answer: "Generally, you have two years from the date of the attack to file a personal injury lawsuit. However, it's best to contact an attorney immediately to preserve evidence, protect your rights, and ensure all deadlines are met."
                  },
                  {
                    question: "Do I Need a Lawyer for a Dog Bite Case?",
                    answer: "While not required by law, a lawyer is highly recommended. Dog bite cases involve complex insurance issues, medical documentation, liability determinations, and negotiation tactics that require legal expertise to maximize your compensation and protect your rights."
                  },
                  {
                    question: "What if My Child Was Bitten by a Dog?",
                    answer: "Children have special protections under California law and are more likely to suffer severe injuries from dog attacks. Parents or guardians can file claims on behalf of minor children, and the statute of limitations may be extended. Children's cases often result in higher settlements due to the long-term impact."
                  },
                  {
                    question: "Can I Still Sue if I Was Partially at Fault for the Attack?",
                    answer: "California follows comparative negligence rules, meaning you can still recover compensation even if you were partially at fault. However, your compensation may be reduced by your percentage of fault. An experienced attorney can help minimize any fault attribution and maximize your recovery."
                  }
                ].map((faq, index) => (
                  <Card key={index} className="glass-card group hover-glow-primary border-l-4 border-l-red-600 transition-all duration-300 hover:scale-105 cursor-pointer">
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
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </section>

            {/* Resources Section */}
            <section id="resources" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Dog Bite Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">Medical Centers</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>• UCLA Medical Center Emergency Department</p>
                    <p>• UCSF Medical Center Trauma Services</p>
                    <p>• Cedars-Sinai Medical Center</p>
                    <p>• Kaiser Permanente Emergency Services</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Users className="w-5 h-5 mr-2 text-primary" />
                      Support Organizations
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>• California Department of Public Health</p>
                    <p>• Local Animal Control Services</p>
                    <p>• Trauma Recovery Centers</p>
                    <p>• Victim Support Services</p>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          {/* Sidebar */}
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
                      onClick={() => window.location.href = 'tel:8559851234'}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call (855) 985-1234
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.location.href = '/schedule-consultation'}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Schedule Consultation
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.location.href = '/dog-bite-case-evaluation'}
                    >
                      <Mail className="w-4 h-4 mr-2" />
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
                      <p className="text-sm text-muted-foreground">2 years from injury in California</p>
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
                  <CardTitle className="text-lg">Medical Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <img 
                    src={neighborhoodsImage} 
                    alt="California neighborhoods where dog attacks occur" 
                    className="w-full h-32 object-cover rounded-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  />
                  <p className="text-sm text-muted-foreground">
                    We can connect you with leading trauma and plastic surgery specialists throughout California.
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
                    alt="Dog bite compensation sources" 
                    className="w-full h-32 object-cover rounded-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  />
                  <div className="space-y-2 text-sm">
                    <p>• Homeowner's Insurance Claims</p>
                    <p>• Personal Injury Lawsuits</p>
                    <p>• Premises Liability Claims</p>
                    <p>• Municipal Violation Claims</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Don't Wait - Time Limits 
Apply for California Dog Bite Claims</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl mb-12 leading-relaxed">California law gives you only two years from the date of injury to file your claim. Contact us today for your free consultation.</p>
          <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
            <Button size="lg" aria-label="Call Trembach Law Firm" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg" onClick={() => window.location.href = 'tel:8559851234'}>
              CALL (855) 985-1234
            </Button>
            
            <Button size="lg" aria-label="Start Free Case Evaluation" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg" onClick={() => window.location.href = '/dog-bite-case-evaluation'}>
              START MY FREE CASE EVALUATION
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DogBitesAnimalAttacks;