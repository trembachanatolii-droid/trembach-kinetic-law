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
import '@/styles/premium-3d-effects.css';
import { Phone, Mail, MessageCircle, Star, ChevronDown, ChevronUp, Heart, Shield, Scale, Clock, Users, Award, FileText, AlertTriangle, Stethoscope, Building, Map, ArrowLeft, ChevronLeft, ChevronRight, CheckCircle, Camera, MapPin, Calendar, DollarSign, BookOpen, HelpCircle, Home } from 'lucide-react';
import heroBackground from '@/assets/practice-areas/premises-liability-hero.jpg';
import whatToDoImage from '@/assets/practice-areas/premises-liability.jpg';
import accidentTypesImage from '@/assets/practice-areas/construction-accidents.jpg';
import provingNegligenceImage from '@/assets/hero-background-scales.jpg';
import compensationImage from '@/assets/practice-areas/courthouse-professional.jpg';
import legalProcessImage from '@/assets/practice-areas/premises-liability.jpg';
import SEO from '@/components/SEO';
gsap.registerPlugin(ScrollTrigger);
interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}
const PremisesLiability: React.FC = () => {
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
    accidentDate: '',
    accidentLocation: '',
    propertyType: '',
    incidentType: '',
    injuryType: '',
    witnesses: '',
    // Property Condition
    propertyCondition: '',
    weatherConditions: '',
    lightingConditions: '',
    hazardVisibility: '',
    warningSignsPresent: '',
    // Medical Information
    medicalTreatment: '',
    hospitalName: '',
    doctorName: '',
    currentTreatment: '',
    // Legal Information
    policeReport: '',
    incidentReport: '',
    photographsTaken: '',
    urgency: ''
  });
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const tabs: TabSection[] = [{
    id: 'overview',
    label: 'OVERVIEW',
    icon: FileText
  }, {
    id: 'evaluation',
    label: 'CASE EVALUATION',
    icon: Scale
  }, {
    id: 'what-to-do',
    label: 'WHAT TO DO AFTER ACCIDENT',
    icon: Stethoscope
  }, {
    id: 'types-of-accidents',
    label: 'TYPES OF ACCIDENTS',
    icon: Heart
  }, {
    id: 'legal-process',
    label: 'LEGAL PROCESS',
    icon: Shield
  }, {
    id: 'proving-negligence',
    label: 'PROVING NEGLIGENCE',
    icon: CheckCircle
  }, {
    id: 'compensation',
    label: 'COMPENSATION',
    icon: DollarSign
  }, {
    id: 'faq',
    label: 'FAQ',
    icon: MessageCircle
  }, {
    id: 'resources',
    label: 'RESOURCES',
    icon: Building
  }];
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'), {
        opacity: 0,
        y: 50
      }, {
        opacity: 1,
        y: 0,
        duration: 0.1,
        ease: 'power2.out'
      });

      // Content sections animation
      gsap.fromTo(contentRef.current?.querySelectorAll('.content-section'), {
        opacity: 0,
        y: 30
      }, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%'
        }
      });
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
    console.log('Premises Liability Case Evaluation Submitted:', formData);
    alert('Your case evaluation has been submitted. We will contact you within 24 hours.');
    setCurrentStep(1);
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      accidentDate: '',
      accidentLocation: '',
      propertyType: '',
      incidentType: '',
      injuryType: '',
      witnesses: '',
      propertyCondition: '',
      weatherConditions: '',
      lightingConditions: '',
      hazardVisibility: '',
      warningSignsPresent: '',
      medicalTreatment: '',
      hospitalName: '',
      doctorName: '',
      currentTreatment: '',
      policeReport: '',
      incidentReport: '',
      photographsTaken: '',
      urgency: ''
    });
  };
  return <div className="min-h-screen bg-background">
      <SEO title="California Premises Liability Lawyer | Property Accident Attorney | Free Consultation" description="Experienced California premises liability attorneys. Free consultation for slip and fall, inadequate security, and property accidents. No fees unless we win." keywords="premises liability lawyer California, slip and fall attorney, property accident law, negligent security" canonical="https://yourlaw.com/practice-areas/premises-liability" />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBackground})`
    }}>
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Go Back Button */}
        <div className="absolute top-20 left-6 z-10">
          <Button variant="ghost" onClick={() => window.history.back()} className="flex items-center gap-2 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm">
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
              California Premises Liability Lawyers
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />)}
              <span className="ml-2 text-lg">Proven Results for Property Accident Victims</span>
            </div>
            
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white">
              Property owners must maintain safe conditions. Free consultation for all accident cases.
            </p>
            
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg" onClick={() => scrollToSection('evaluation')}>
              START MY FREE CASE EVALUATION
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 py-4">
              {tabs.map(tab => {
              const IconComponent = tab.icon;
              return <button key={tab.id} onClick={() => scrollToSection(tab.id)} className={`flex items-center px-4 py-2 text-sm font-medium transition-colors rounded-md ${activeTab === tab.id ? 'bg-white text-primary' : 'text-white hover:bg-white/20'}`}>
                    <IconComponent className="w-4 h-4 mr-2" />
                    {tab.label}
                  </button>;
            })}
            </div>
          </div>
        </div>
      </section>

      {/* Bar Tools Section */}
      

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2" ref={contentRef}>
            
            {/* Overview Section */}
            <section id="overview" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Premises Liability Attorneys</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  Property owners and occupiers in California have a legal duty to maintain reasonably safe conditions for visitors on their premises. When they fail in this responsibility and someone gets injured as a result, they can be held liable for damages through premises liability law. If you've been injured on someone else's property due to dangerous conditions, inadequate security, or negligent maintenance, you may be entitled to significant compensation.
                </p>
                
                <p className="text-lg leading-relaxed">
                  At Trembach Law Firm, we have extensive experience handling all types of premises liability cases throughout California. From slip and fall accidents in retail stores to inadequate security cases at apartment complexes, we understand the complexities of California premises liability law and fight aggressively to hold negligent property owners accountable for the injuries they cause.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Show More About Our California Premises Liability Practice
                    {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Scale className="w-5 h-5 mr-2 text-primary" />
                          Legal Expertise
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Our team has deep understanding of California premises liability statutes, case law, and the evolving standards of care for different types of properties.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Camera className="w-5 h-5 mr-2 text-primary" />
                          Evidence Preservation
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>We act quickly to preserve crucial evidence including surveillance footage, maintenance records, and witness statements before they disappear.</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Why Choose Trembach Law Firm for Premises Liability Cases?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <Shield className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Thorough Investigation</h4>
                          <p className="text-sm text-muted-foreground">We conduct comprehensive investigations to identify all potentially liable parties and safety violations.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Rapid Response</h4>
                          <p className="text-sm text-muted-foreground">Time is critical in premises liability cases. We act immediately to preserve evidence and protect your rights.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Expert Network</h4>
                          <p className="text-sm text-muted-foreground">We work with safety experts, engineers, and medical professionals to build compelling cases.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Award className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Proven Results</h4>
                          <p className="text-sm text-muted-foreground">We have secured millions in compensation for premises liability victims throughout California.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <h3>Comprehensive California Premises Liability Representation</h3>
                    <p>
                      Premises liability cases require immediate action and thorough investigation. Property owners and managers often try to cover up dangerous conditions or claim that injuries were the victim's fault. Our experienced legal team knows how to counter these tactics and build strong cases that hold negligent parties accountable.
                    </p>
                    
                    <p>
                      We handle premises liability cases involving all types of properties throughout California, including:
                    </p>
                    
                    <ul>
                      <li>Retail stores, shopping centers, and malls</li>
                      <li>Restaurants, bars, and entertainment venues</li>
                      <li>Hotels, motels, and vacation rentals</li>
                      <li>Apartment complexes and condominiums</li>
                      <li>Office buildings and commercial properties</li>
                      <li>Parking lots and parking garages</li>
                      <li>Hospitals and medical facilities</li>
                      <li>Schools and educational institutions</li>
                      <li>Government properties and public buildings</li>
                      <li>Construction sites and industrial facilities</li>
                    </ul>
                    
                    <p>
                      Our comprehensive approach involves investigating every aspect of your case, from the specific dangerous condition that caused your injury to the property owner's knowledge of the hazard and their failure to take corrective action. We work with safety experts, engineers, and medical professionals to document the full extent of your damages and build compelling evidence for maximum compensation.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* What To Do Section */}
            <section id="what-to-do" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">What To Do After a Premises Liability Accident</h2>
              
              <div className="mb-6">
                <img src={whatToDoImage} alt="What to do after a premises liability accident - immediate steps for documentation and safety" className="w-full h-64 object-cover rounded-lg shadow-lg mb-4" />
                
                <p className="text-lg leading-relaxed mb-4">
                  Taking the right steps immediately after a premises liability accident can significantly impact your ability to recover compensation. Property owners and their insurance companies often try to minimize liability, so protecting your legal rights from the start is crucial.
                </p>
              </div>

              <Collapsible open={expandedSections.whatToDo} onOpenChange={() => toggleSection('whatToDo')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Show Complete Step-by-Step Guide
                    {expandedSections.whatToDo ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3>Immediate Steps at the Scene</h3>
                    
                    <h4>1. Seek Medical Attention</h4>
                    <p>
                      Your health and safety are the top priority. Even if you feel your injuries are minor, seek medical evaluation. Some injuries, particularly head injuries and soft tissue damage, may not show symptoms immediately. Medical documentation also creates an important record linking your injuries to the accident.
                    </p>
                    
                    <h4>2. Report the Incident</h4>
                    <p>
                      Notify the property owner, manager, or security immediately. Insist that they create a written incident report and ask for a copy. If they refuse to provide a copy, ask for the report number and the name of the person completing it. This official documentation can be crucial evidence.
                    </p>
                    
                    <h4>3. Document Everything</h4>
                    <p>
                      Take photographs of:
                    </p>
                    <ul>
                      <li>The exact location where you fell or were injured</li>
                      <li>The dangerous condition that caused your injury</li>
                      <li>Your visible injuries</li>
                      <li>Your clothing and any damage to personal items</li>
                      <li>Warning signs (or lack thereof)</li>
                      <li>Lighting conditions</li>
                      <li>Weather conditions if applicable</li>
                      <li>The overall area and surrounding environment</li>
                    </ul>
                    
                    <h4>4. Gather Witness Information</h4>
                    <p>
                      Collect names, phone numbers, and email addresses of anyone who saw the accident. Ask witnesses to briefly describe what they saw. Independent witnesses can provide crucial testimony about the dangerous condition and how your accident occurred.
                    </p>
                    
                    <h4>5. Preserve Evidence</h4>
                    <p>
                      Keep the clothing and shoes you were wearing exactly as they were during the accident. Don't clean or repair them. These items can provide important evidence about how the accident occurred and may show trace evidence from the hazardous condition.
                    </p>
                    
                    <h3>Important Actions in the Following Days</h3>
                    
                    <h4>6. Follow Up on Medical Care</h4>
                    <p>
                      Continue all recommended medical treatment and keep detailed records of:
                    </p>
                    <ul>
                      <li>All medical appointments and treatments</li>
                      <li>Medical bills and expenses</li>
                      <li>Prescriptions and medications</li>
                      <li>Time off work due to injuries</li>
                      <li>Daily pain levels and limitations</li>
                    </ul>
                    
                    <h4>7. Avoid Recorded Statements</h4>
                    <p>
                      Property owners' insurance companies often contact injury victims quickly, hoping to get recorded statements that can be used against them later. Politely decline to give any recorded statements and refer them to your attorney.
                    </p>
                    
                    <h4>8. Don't Sign Anything</h4>
                    <p>
                      Never sign any documents, settlements, or releases without consulting an attorney first. Insurance companies often try to get victims to sign documents that limit their rights to future compensation.
                    </p>
                    
                    <h4>9. Contact an Attorney Immediately</h4>
                    <p>
                      Time is critical in premises liability cases. Evidence can disappear quickly, and California law imposes strict deadlines for filing claims. An experienced premises liability attorney can:
                    </p>
                    <ul>
                      <li>Investigate the accident while evidence is still available</li>
                      <li>Preserve surveillance footage before it's deleted</li>
                      <li>Interview witnesses while memories are fresh</li>
                      <li>Handle all communications with insurance companies</li>
                      <li>Ensure all legal deadlines are met</li>
                      <li>Begin building your case for maximum compensation</li>
                    </ul>
                    
                    <h3>What NOT to Do</h3>
                    
                    <h4>Don't Admit Fault</h4>
                    <p>
                      Never say anything that could be interpreted as admitting fault or responsibility for the accident. Avoid statements like "I should have been more careful" or "I didn't see it." These statements can be taken out of context and used against you.
                    </p>
                    
                    <h4>Don't Minimize Your Injuries</h4>
                    <p>
                      Avoid saying you're "fine" or that your injuries are "no big deal," even if you're trying to be polite. Adrenaline can mask pain and injuries may worsen over time. Let medical professionals assess your condition.
                    </p>
                    
                    <h4>Don't Post on Social Media</h4>
                    <p>
                      Avoid posting anything about your accident or injuries on social media. Insurance companies and defense attorneys often monitor social media accounts looking for evidence to use against injury claims.
                    </p>
                    
                    <h4>Don't Accept Quick Settlement Offers</h4>
                    <p>
                      Property owners or their insurance companies may try to offer quick settlements before you know the full extent of your injuries. These initial offers are typically far below what your case is actually worth.
                    </p>
                  </div>
                  
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                      Time is Critical
                    </h3>
                    <p>
                      Evidence in premises liability cases can disappear quickly. Surveillance footage is often deleted within 30-90 days, witnesses may become difficult to locate, and dangerous conditions may be repaired. The sooner you contact an experienced premises liability attorney, the better chance we have of preserving crucial evidence and building a strong case for maximum compensation.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-red-600">Free Premises Liability Case Evaluation</h2>
                <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
                  100% Confidential
                </Badge>
                <Badge variant="outline" className="px-3 py-1 text-sm font-medium">
                  No Cost • No Obligation
                </Badge>
              </div>

              <ThreeDVisualEffects>
                <div className="premium-form-container--blue-solid relative rounded-3xl p-8 md:p-12 glass-card interactive-card hover-glow-blue gpu-accelerated">
                  {/* Floating background layers */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-float-back"></div>
                    <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-lg animate-float-mid"></div>
                    <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-gradient-to-r from-blue-300/20 to-indigo-300/20 rounded-full blur-md animate-float-front"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="text-center mb-8 md:mb-12">
                      <h2 className="text-3xl md:text-5xl font-display font-bold text-black mb-4 md:mb-6">
                        Get Your Free Premises Liability Consultation
                      </h2>
                      <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-4 md:mb-6"></div>
                      <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                        Property owners have a duty to keep visitors safe. Get your free case evaluation to learn about your rights to compensation.
                      </p>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-8">
                      <div className="flex justify-between text-sm text-white mb-2 font-medium">
                        <span>Step {currentStep} of 4</span>
                        <span>{Math.round(currentStep / 4 * 100)}% Complete</span>
                      </div>
                      <Progress value={currentStep / 4 * 100} className="h-3 bg-blue-100">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500 ease-out" style={{
                        width: `${currentStep / 4 * 100}%`
                      }} />
                      </Progress>
                    </div>

                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      {/* Step 1: Personal Information */}
                      {currentStep === 1 && <div className="space-y-6 animate-fade-in">
                          <h4 className="text-xl md:text-2xl font-bold text-white mb-6">Personal Information</h4>
                          
                          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="firstName" className="text-base md:text-lg font-semibold text-slate-900">
                                First Name *
                              </Label>
                              <Input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={e => setFormData(prev => ({
                            ...prev,
                            firstName: e.target.value
                          }))} required className="w-full px-4 py-3 md:py-4 text-base md:text-lg rounded-lg border-2 border-white/20 bg-white/95 text-slate-900 placeholder:text-slate-500 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 focus:outline-none transition-all duration-300" placeholder="Enter your first name" />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="lastName" className="text-base md:text-lg font-semibold text-slate-900">
                                Last Name *
                              </Label>
                              <Input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={e => setFormData(prev => ({
                            ...prev,
                            lastName: e.target.value
                          }))} required className="w-full px-4 py-3 md:py-4 text-base md:text-lg rounded-lg border-2 border-white/20 bg-white/95 text-slate-900 placeholder:text-slate-500 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 focus:outline-none transition-all duration-300" placeholder="Enter your last name" />
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="phone" className="text-base md:text-lg font-semibold text-slate-900">
                                Phone Number *
                              </Label>
                              <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={e => setFormData(prev => ({
                            ...prev,
                            phone: e.target.value
                          }))} required className="w-full px-4 py-3 md:py-4 text-base md:text-lg rounded-lg border-2 border-white/20 bg-white/95 text-slate-900 placeholder:text-slate-500 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 focus:outline-none transition-all duration-300" placeholder="(555) 123-4567" />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="email" className="text-base md:text-lg font-semibold text-slate-900">
                                Email Address *
                              </Label>
                              <Input type="email" id="email" name="email" value={formData.email} onChange={e => setFormData(prev => ({
                            ...prev,
                            email: e.target.value
                          }))} required className="w-full px-4 py-3 md:py-4 text-base md:text-lg rounded-lg border-2 border-white/20 bg-white/95 text-slate-900 placeholder:text-slate-500 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 focus:outline-none transition-all duration-300" placeholder="your.email@example.com" />
                            </div>
                          </div>

                          <div className="flex justify-end">
                            <Button type="button" onClick={() => setCurrentStep(2)} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
                              Next Step
                              <ChevronRight className="w-4 h-4 ml-2" />
                            </Button>
                          </div>
                        </div>}

                      {/* Step 2: Incident Details */}
                      {currentStep === 2 && <div className="space-y-6 animate-fade-in">
                          <h4 className="text-xl md:text-2xl font-bold text-white mb-6">Incident Details</h4>
                          
                          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="accidentDate" className="text-base md:text-lg font-semibold text-slate-900">
                                Date of Incident *
                              </Label>
                              <Input type="date" id="accidentDate" name="accidentDate" value={formData.accidentDate} onChange={e => setFormData(prev => ({
                            ...prev,
                            accidentDate: e.target.value
                          }))} required className="w-full px-4 py-3 md:py-4 text-base md:text-lg rounded-lg border-2 border-white/20 bg-white/95 text-slate-900 placeholder:text-slate-500 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 focus:outline-none transition-all duration-300" />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="propertyType" className="text-base md:text-lg font-semibold text-slate-900">
                                Type of Property *
                              </Label>
                              <Select value={formData.propertyType} onValueChange={value => setFormData(prev => ({
                            ...prev,
                            propertyType: value
                          }))} required>
                                <SelectTrigger className="w-full px-4 py-3 md:py-4 text-base md:text-lg rounded-lg border-2 border-white/20 bg-white/95 text-slate-900 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 focus:outline-none transition-all duration-300">
                                  <SelectValue placeholder="Select property type" className="text-slate-500" />
                                </SelectTrigger>
                                <SelectContent className="bg-white border-2 border-blue-200 shadow-xl rounded-lg z-50">
                                  <SelectItem value="store" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Store/Retail</SelectItem>
                                  <SelectItem value="restaurant" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Restaurant</SelectItem>
                                  <SelectItem value="parking-lot" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Parking Lot</SelectItem>
                                  <SelectItem value="apartment" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Apartment Complex</SelectItem>
                                  <SelectItem value="office" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Office Building</SelectItem>
                                  <SelectItem value="sidewalk" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Sidewalk/Public</SelectItem>
                                  <SelectItem value="hotel" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Hotel/Motel</SelectItem>
                                  <SelectItem value="hospital" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Hospital/Medical</SelectItem>
                                  <SelectItem value="school" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">School</SelectItem>
                                  <SelectItem value="other" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="incidentType" className="text-base md:text-lg font-semibold text-slate-900">
                                Type of Incident *
                              </Label>
                              <Select value={formData.incidentType} onValueChange={value => setFormData(prev => ({
                            ...prev,
                            incidentType: value
                          }))} required>
                                <SelectTrigger className="w-full px-4 py-3 md:py-4 text-base md:text-lg rounded-lg border-2 border-white/20 bg-white/95 text-slate-900 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 focus:outline-none transition-all duration-300">
                                  <SelectValue placeholder="Select incident type" className="text-slate-500" />
                                </SelectTrigger>
                                <SelectContent className="bg-white border-2 border-blue-200 shadow-xl rounded-lg z-50">
                                  <SelectItem value="slip-fall" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Slip and Fall</SelectItem>
                                  <SelectItem value="trip-fall" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Trip and Fall</SelectItem>
                                  <SelectItem value="inadequate-security" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Inadequate Security</SelectItem>
                                  <SelectItem value="falling-object" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Falling Object</SelectItem>
                                  <SelectItem value="defective-stairs" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Defective Stairs</SelectItem>
                                  <SelectItem value="poor-lighting" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Poor Lighting</SelectItem>
                                  <SelectItem value="dog-bite" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Dog Bite</SelectItem>
                                  <SelectItem value="swimming-pool" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Swimming Pool Accident</SelectItem>
                                  <SelectItem value="elevator" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Elevator/Escalator</SelectItem>
                                  <SelectItem value="other" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="accidentLocation" className="text-base md:text-lg font-semibold text-slate-900">
                                Accident Location *
                              </Label>
                              <Input type="text" id="accidentLocation" name="accidentLocation" value={formData.accidentLocation} onChange={e => setFormData(prev => ({
                            ...prev,
                            accidentLocation: e.target.value
                          }))} required className="w-full px-4 py-3 md:py-4 text-base md:text-lg rounded-lg border-2 border-white/20 bg-white/95 text-slate-900 placeholder:text-slate-500 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 focus:outline-none transition-all duration-300" placeholder="Enter location of accident" />
                            </div>
                          </div>

                          <div className="flex justify-between">
                            <Button type="button" onClick={() => setCurrentStep(1)} variant="outline" className="px-8 py-3">
                              <ChevronLeft className="w-4 h-4 mr-2" />
                              Previous
                            </Button>
                            <Button type="button" onClick={() => setCurrentStep(3)} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
                              Next Step
                              <ChevronRight className="w-4 h-4 ml-2" />
                            </Button>
                          </div>
                        </div>}

                      {/* Step 3: Injury & Medical Information */}
                      {currentStep === 3 && <div className="space-y-6 animate-fade-in">
                          <h4 className="text-xl md:text-2xl font-bold text-white mb-6">Injury & Medical Information</h4>
                          
                          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="injuryType" className="text-base md:text-lg font-semibold text-slate-900">
                                Type of Injury *
                              </Label>
                              <Select value={formData.injuryType} onValueChange={value => setFormData(prev => ({
                            ...prev,
                            injuryType: value
                          }))} required>
                                <SelectTrigger className="w-full px-4 py-3 md:py-4 text-base md:text-lg rounded-lg border-2 border-white/20 bg-white/95 text-slate-900 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 focus:outline-none transition-all duration-300">
                                  <SelectValue placeholder="Select injury type" className="text-slate-500" />
                                </SelectTrigger>
                                <SelectContent className="bg-white border-2 border-blue-200 shadow-xl rounded-lg z-50">
                                  <SelectItem value="broken-bone" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Broken Bone/Fracture</SelectItem>
                                  <SelectItem value="head-injury" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Head/Brain Injury</SelectItem>
                                  <SelectItem value="back-injury" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Back/Spine Injury</SelectItem>
                                  <SelectItem value="knee-injury" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Knee Injury</SelectItem>
                                  <SelectItem value="shoulder-injury" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Shoulder Injury</SelectItem>
                                  <SelectItem value="cuts-lacerations" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Cuts/Lacerations</SelectItem>
                                  <SelectItem value="soft-tissue" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Soft Tissue Damage</SelectItem>
                                  <SelectItem value="multiple-injuries" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Multiple Injuries</SelectItem>
                                  <SelectItem value="other" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="medicalTreatment" className="text-base md:text-lg font-semibold text-slate-900">
                                Medical Treatment Received *
                              </Label>
                              <Select value={formData.medicalTreatment} onValueChange={value => setFormData(prev => ({
                            ...prev,
                            medicalTreatment: value
                          }))} required>
                                <SelectTrigger className="w-full px-4 py-3 md:py-4 text-base md:text-lg rounded-lg border-2 border-white/20 bg-white/95 text-slate-900 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 focus:outline-none transition-all duration-300">
                                  <SelectValue placeholder="Select treatment received" className="text-slate-500" />
                                </SelectTrigger>
                                <SelectContent className="bg-white border-2 border-blue-200 shadow-xl rounded-lg z-50">
                                  <SelectItem value="emergency-room" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Emergency Room</SelectItem>
                                  <SelectItem value="urgent-care" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Urgent Care</SelectItem>
                                  <SelectItem value="hospital-admission" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Hospital Admission</SelectItem>
                                  <SelectItem value="surgery" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Surgery</SelectItem>
                                  <SelectItem value="doctor-visit" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Doctor Visit</SelectItem>
                                  <SelectItem value="physical-therapy" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Physical Therapy</SelectItem>
                                  <SelectItem value="ongoing-treatment" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Ongoing Treatment</SelectItem>
                                  <SelectItem value="no-treatment" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">No Treatment Yet</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="hospitalName" className="text-base md:text-lg font-semibold text-slate-900">
                              Hospital/Medical Facility Name
                            </Label>
                            <Input type="text" id="hospitalName" name="hospitalName" value={formData.hospitalName} onChange={e => setFormData(prev => ({
                          ...prev,
                          hospitalName: e.target.value
                        }))} className="w-full px-4 py-3 md:py-4 text-base md:text-lg rounded-lg border-2 border-white/20 bg-white/95 text-slate-900 placeholder:text-slate-500 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 focus:outline-none transition-all duration-300" placeholder="Enter hospital/medical facility name" />
                          </div>

                          <div className="flex justify-between">
                            <Button type="button" onClick={() => setCurrentStep(2)} variant="outline" className="px-8 py-3">
                              <ChevronLeft className="w-4 h-4 mr-2" />
                              Previous
                            </Button>
                            <Button type="button" onClick={() => setCurrentStep(4)} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
                              Next Step
                              <ChevronRight className="w-4 h-4 ml-2" />
                            </Button>
                          </div>
                        </div>}

                      {/* Step 4: Additional Details */}
                      {currentStep === 4 && <div className="space-y-6 animate-fade-in">
                          <h4 className="text-xl md:text-2xl font-bold text-white mb-6">Additional Case Details</h4>
                          
                          <div className="space-y-2">
                            <Label htmlFor="incidentDescription" className="text-base md:text-lg font-semibold text-slate-900">
                              Describe the Incident *
                            </Label>
                            <Textarea id="incidentDescription" name="incidentDescription" rows={4} required className="w-full px-4 py-3 md:py-4 text-base md:text-lg rounded-lg border-2 border-white/20 bg-white/95 text-slate-900 placeholder:text-slate-500 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 focus:outline-none transition-all duration-300 resize-none" placeholder="Please provide details about the incident, including the conditions that caused your injury and any witnesses present..." />
                          </div>

                          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="witnesses" className="text-base md:text-lg font-semibold text-slate-900">
                                Were there witnesses?
                              </Label>
                              <Select value={formData.witnesses} onValueChange={value => setFormData(prev => ({
                            ...prev,
                            witnesses: value
                          }))}>
                                <SelectTrigger className="w-full px-4 py-3 md:py-4 text-base md:text-lg rounded-lg border-2 border-white/20 bg-white/95 text-slate-900 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 focus:outline-none transition-all duration-300">
                                  <SelectValue placeholder="Select witness status" className="text-slate-500" />
                                </SelectTrigger>
                                <SelectContent className="bg-white border-2 border-blue-200 shadow-xl rounded-lg z-50">
                                  <SelectItem value="yes-have-info" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Yes - I have contact info</SelectItem>
                                  <SelectItem value="yes-no-info" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Yes - but no contact info</SelectItem>
                                  <SelectItem value="no" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">No witnesses</SelectItem>
                                  <SelectItem value="unsure" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Unsure</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="photographsTaken" className="text-base md:text-lg font-semibold text-slate-900">
                                Did you take photos?
                              </Label>
                              <Select value={formData.photographsTaken} onValueChange={value => setFormData(prev => ({
                            ...prev,
                            photographsTaken: value
                          }))}>
                                <SelectTrigger className="w-full px-4 py-3 md:py-4 text-base md:text-lg rounded-lg border-2 border-white/20 bg-white/95 text-slate-900 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 focus:outline-none transition-all duration-300">
                                  <SelectValue placeholder="Select photo status" className="text-slate-500" />
                                </SelectTrigger>
                                <SelectContent className="bg-white border-2 border-blue-200 shadow-xl rounded-lg z-50">
                                  <SelectItem value="yes-scene" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Yes - of scene</SelectItem>
                                  <SelectItem value="yes-injuries" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Yes - of injuries</SelectItem>
                                  <SelectItem value="yes-both" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">Yes - scene and injuries</SelectItem>
                                  <SelectItem value="no" className="text-slate-900 hover:bg-blue-50 focus:bg-blue-50">No photos taken</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="flex justify-between">
                            <Button type="button" onClick={() => setCurrentStep(3)} variant="outline" className="px-8 py-3">
                              <ChevronLeft className="w-4 h-4 mr-2" />
                              Previous
                            </Button>
                            <Button type="submit" className="btn-enhanced py-4 md:py-6 text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1 focus:ring-4 focus:ring-blue-400/50 focus:outline-none px-8">
                              Get My Free Case Evaluation
                            </Button>
                          </div>
                        </div>}
                    </form>
                  </div>
                </div>
              </ThreeDVisualEffects>
            </section>

            {/* Types of Accidents Section */}
            <section id="types-of-accidents" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Types of Premises Liability Accidents</h2>
              
              <div className="mb-6">
                <img src={accidentTypesImage} alt="Common types of premises liability accidents including slip and fall, trip and fall, and inadequate security incidents" className="w-full h-64 object-cover rounded-lg shadow-lg mb-4" />
                
                <p className="text-lg leading-relaxed mb-4">
                  Premises liability encompasses a wide range of accidents that occur on someone else's property due to dangerous conditions or negligent maintenance. Understanding the different types of premises liability cases helps identify when property owners may be held responsible for injuries.
                </p>
              </div>

              <Collapsible open={expandedSections.typesOfAccidents} onOpenChange={() => toggleSection('typesOfAccidents')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Show Detailed Information About All Accident Types
                    {expandedSections.typesOfAccidents ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="group-hover:text-primary transition-colors">Slip and Fall Accidents</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>• Wet floors without warning signs</li>
                          <li>• Spilled liquids in stores or restaurants</li>
                          <li>• Freshly mopped floors</li>
                          <li>• Icy or snowy walkways</li>
                          <li>• Polished or waxed surfaces</li>
                          <li>• Grease or oil on floors</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="group-hover:text-primary transition-colors">Trip and Fall Accidents</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>• Uneven sidewalks or walkways</li>
                          <li>• Torn or wrinkled carpeting</li>
                          <li>• Debris or obstacles in walkways</li>
                          <li>• Poorly maintained stairs</li>
                          <li>• Missing or broken handrails</li>
                          <li>• Changes in floor elevation</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="group-hover:text-primary transition-colors">Inadequate Security</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>• Assaults in parking lots</li>
                          <li>• Robberies in business premises</li>
                          <li>• Lack of proper lighting</li>
                          <li>• Broken or missing security cameras</li>
                          <li>• Insufficient security personnel</li>
                          <li>• Failure to control access</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="group-hover:text-primary transition-colors">Swimming Pool Accidents</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>• Drowning incidents</li>
                          <li>• Slip and falls around pools</li>
                          <li>• Defective pool equipment</li>
                          <li>• Lack of proper barriers or fencing</li>
                          <li>• Missing or inadequate warning signs</li>
                          <li>• Chemical burns from pool chemicals</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="group-hover:text-primary transition-colors">Falling Object Injuries</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>• Items falling from store shelves</li>
                          <li>• Construction materials at job sites</li>
                          <li>• Ceiling tiles or light fixtures</li>
                          <li>• Tree branches on property</li>
                          <li>• Improperly secured signage</li>
                          <li>• Balcony or deck collapses</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="group-hover:text-primary transition-colors">Dog Bites and Animal Attacks</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>• Dog bites on private property</li>
                          <li>• Attacks by other animals</li>
                          <li>• Lack of proper restraint</li>
                          <li>• Failure to warn about aggressive animals</li>
                          <li>• Inadequate fencing or barriers</li>
                          <li>• Property owner knowledge of danger</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <h3>Additional Types of Premises Liability Cases</h3>
                    
                    <h4>Elevator and Escalator Accidents</h4>
                    <p>
                      Mechanical failures, poor maintenance, and safety violations can cause serious injuries in elevators and escalators. Property owners must ensure regular inspections and prompt repairs of these systems.
                    </p>
                    
                    <h4>Fire and Explosion Injuries</h4>
                    <p>
                      Faulty electrical systems, gas leaks, or inadequate fire safety measures can lead to devastating fires and explosions. Property owners have a duty to maintain safe conditions and proper emergency exits.
                    </p>
                    
                    <h4>Toxic Exposure</h4>
                    <p>
                      Exposure to mold, asbestos, lead paint, or other hazardous substances on property can cause serious health problems. Property owners must properly remediate known hazards and warn visitors of potential dangers.
                    </p>
                    
                    <h4>Playground Injuries</h4>
                    <p>
                      Defective or poorly maintained playground equipment can cause serious injuries to children. Property owners of schools, parks, and apartment complexes must ensure playground safety.
                    </p>
                    
                    <h4>Parking Lot and Garage Accidents</h4>
                    <p>
                      Poor lighting, inadequate security, potholes, and structural defects in parking areas can lead to injuries. Property owners must maintain safe conditions for vehicles and pedestrians.
                    </p>
                    
                    <h4>Retail Store Injuries</h4>
                    <p>
                      Beyond slip and falls, retail stores present unique hazards including merchandise displays, shopping carts, automatic doors, and crowded conditions that require careful management.
                    </p>
                    
                    <h4>Restaurant and Bar Injuries</h4>
                    <p>
                      Food service establishments have heightened duties due to spills, hot surfaces, kitchen hazards, and the service of alcohol which can lead to various liability issues.
                    </p>
                    
                    <h4>Hotel and Lodging Injuries</h4>
                    <p>
                      Hotels and motels have special responsibilities for guest safety including room security, common area maintenance, swimming pool safety, and protection from criminal activity.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Legal Process Section */}
            <section id="legal-process" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Premises Liability Legal Process</h2>
              
              <div className="mb-6">
                <img src={legalProcessImage} alt="California legal process for premises liability cases" className="w-full h-64 object-cover rounded-lg shadow-lg mb-4" />
                
                <p className="text-lg leading-relaxed mb-4">
                  Understanding the legal process for premises liability cases in California helps you know what to expect as we pursue compensation for your injuries. California premises liability law is complex and requires experienced legal representation to navigate successfully.
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
                    <h3>Initial Case Assessment</h3>
                    
                    <h4>Free Consultation and Case Review</h4>
                    <p>
                      Our initial consultation involves a comprehensive review of your case including the circumstances of your accident, the extent of your injuries, and the potential liability of the property owner. We evaluate whether you have a viable premises liability claim and discuss your legal options.
                    </p>
                    
                    <h4>Statute of Limitations Analysis</h4>
                    <p>
                      California generally provides two years from the date of injury to file a premises liability lawsuit. However, claims against government entities have much shorter deadlines, sometimes as brief as six months for filing initial claims. We ensure all deadlines are identified and met.
                    </p>
                    
                    <h4>Immediate Evidence Preservation</h4>
                    <p>
                      Time is critical in premises liability cases. We immediately begin preserving evidence including:
                    </p>
                    <ul>
                      <li>Sending preservation letters to property owners</li>
                      <li>Requesting surveillance footage before deletion</li>
                      <li>Photographing the accident scene</li>
                      <li>Documenting dangerous conditions</li>
                      <li>Interviewing witnesses while memories are fresh</li>
                      <li>Obtaining incident reports and maintenance records</li>
                    </ul>
                    
                    <h3>Investigation and Discovery</h3>
                    
                    <h4>Property Investigation</h4>
                    <p>
                      We conduct thorough investigations of the property where your accident occurred, including:
                    </p>
                    <ul>
                      <li>Site inspections to document conditions</li>
                      <li>Research into property ownership and management</li>
                      <li>Review of building codes and safety regulations</li>
                      <li>Analysis of previous accidents or complaints</li>
                      <li>Examination of maintenance and inspection records</li>
                      <li>Investigation of any code violations or citations</li>
                    </ul>
                    
                    <h4>Liability Analysis</h4>
                    <p>
                      Determining liability in premises liability cases requires proving several key elements:
                    </p>
                    <ul>
                      <li><strong>Duty of Care:</strong> Property owner owed you a duty of reasonable care</li>
                      <li><strong>Breach of Duty:</strong> Property owner failed to meet the standard of care</li>
                      <li><strong>Causation:</strong> The breach directly caused your injuries</li>
                      <li><strong>Damages:</strong> You suffered actual harm as a result</li>
                    </ul>
                    
                    <h4>Expert Witness Retention</h4>
                    <p>
                      We work with various experts to strengthen your case:
                    </p>
                    <ul>
                      <li><strong>Safety Engineers:</strong> Analyze code violations and safety standards</li>
                      <li><strong>Architects:</strong> Review building design and compliance issues</li>
                      <li><strong>Security Experts:</strong> Evaluate adequacy of security measures</li>
                      <li><strong>Medical Professionals:</strong> Document injuries and future care needs</li>
                      <li><strong>Economic Experts:</strong> Calculate financial losses and future costs</li>
                      <li><strong>Life Care Planners:</strong> Assess long-term care requirements</li>
                    </ul>
                    
                    <h3>Filing Your Claim</h3>
                    
                    <h4>Complaint Preparation</h4>
                    <p>
                      We prepare a detailed complaint that outlines:
                    </p>
                    <ul>
                      <li>The facts surrounding your accident</li>
                      <li>The dangerous condition that caused your injury</li>
                      <li>How the property owner breached their duty of care</li>
                      <li>The extent of your injuries and damages</li>
                      <li>Legal theories supporting your claim</li>
                      <li>Specific compensation sought</li>
                    </ul>
                    
                    <h4>Defendant Identification</h4>
                    <p>
                      We identify all potentially liable parties, which may include:
                    </p>
                    <ul>
                      <li>Property owners</li>
                      <li>Property management companies</li>
                      <li>Tenants or lessees</li>
                      <li>Maintenance contractors</li>
                      <li>Security companies</li>
                      <li>Government entities</li>
                    </ul>
                    
                    <h3>Discovery Process</h3>
                    
                    <h4>Document Discovery</h4>
                    <p>
                      We obtain crucial documents through formal discovery including:
                    </p>
                    <ul>
                      <li>Maintenance and inspection records</li>
                      <li>Previous incident reports</li>
                      <li>Insurance policies and claims</li>
                      <li>Employee training materials</li>
                      <li>Safety policies and procedures</li>
                      <li>Surveillance footage and photographs</li>
                    </ul>
                    
                    <h4>Depositions</h4>
                    <p>
                      We take depositions of key witnesses including:
                    </p>
                    <ul>
                      <li>Property owners and managers</li>
                      <li>Maintenance personnel</li>
                      <li>Security staff</li>
                      <li>Employees who witnessed the accident</li>
                      <li>Expert witnesses</li>
                      <li>Other relevant parties</li>
                    </ul>
                    
                    <h3>Settlement Negotiations</h3>
                    
                    <h4>Demand Package Preparation</h4>
                    <p>
                      We prepare comprehensive demand packages that include:
                    </p>
                    <ul>
                      <li>Detailed narrative of the accident</li>
                      <li>Medical records and expert reports</li>
                      <li>Evidence of property owner negligence</li>
                      <li>Economic analysis of damages</li>
                      <li>Supporting photographs and documentation</li>
                      <li>Specific settlement demand</li>
                    </ul>
                    
                    <h4>Mediation and Arbitration</h4>
                    <p>
                      Many premises liability cases are resolved through alternative dispute resolution including:
                    </p>
                    <ul>
                      <li><strong>Mediation:</strong> Neutral mediator facilitates settlement discussions</li>
                      <li><strong>Arbitration:</strong> Binding or non-binding decision by arbitrator</li>
                      <li><strong>Settlement Conferences:</strong> Court-ordered discussions</li>
                    </ul>
                    
                    <h3>Trial Preparation and Litigation</h3>
                    
                    <h4>Trial Strategy Development</h4>
                    <p>
                      If settlement isn't achieved, we prepare for trial by:
                    </p>
                    <ul>
                      <li>Developing compelling trial themes</li>
                      <li>Preparing witness testimony</li>
                      <li>Creating demonstrative evidence</li>
                      <li>Planning expert witness presentations</li>
                      <li>Anticipating defense arguments</li>
                      <li>Preparing jury selection strategy</li>
                    </ul>
                    
                    <h4>Trial Presentation</h4>
                    <p>
                      At trial, we present your case through:
                    </p>
                    <ul>
                      <li>Opening statements that frame the issues</li>
                      <li>Witness testimony establishing liability</li>
                      <li>Expert testimony on technical issues</li>
                      <li>Demonstrative evidence and exhibits</li>
                      <li>Cross-examination of defense witnesses</li>
                      <li>Closing arguments advocating for fair compensation</li>
                    </ul>
                    
                    <h3>California-Specific Legal Considerations</h3>
                    
                    <h4>Comparative Negligence</h4>
                    <p>
                      California follows pure comparative negligence rules, meaning your compensation may be reduced by your percentage of fault. We work to minimize any fault attributed to you while maximizing the property owner's responsibility.
                    </p>
                    
                    <h4>Joint and Several Liability</h4>
                    <p>
                      When multiple parties are liable, California law may allow recovery of the full amount from any defendant capable of paying, protecting your right to full compensation even if some defendants lack sufficient assets.
                    </p>
                    
                    <h4>Damage Caps and Limitations</h4>
                    <p>
                      While California generally doesn't cap damages in premises liability cases, certain situations may have limitations, particularly cases involving government entities under the California Tort Claims Act.
                    </p>
                  </div>
                  
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <Shield className="w-5 h-5 text-primary mr-2" />
                      Our Commitment Throughout the Process
                    </h3>
                    <p>
                      Throughout every step of the legal process, we keep you informed of developments and handle all legal complexities while you focus on recovery. Our goal is to secure maximum compensation efficiently while protecting your rights and interests at every stage.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Proving Negligence Section */}
            <section id="proving-negligence" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Proving Negligence in Premises Liability Cases</h2>
              
              <div className="mb-6">
                <img src={provingNegligenceImage} alt="Proving negligence in premises liability cases - key evidence and legal requirements" className="w-full h-64 object-cover rounded-lg shadow-lg mb-4" />
                
                <p className="text-lg leading-relaxed mb-4">
                  Successfully proving negligence in a premises liability case requires demonstrating that the property owner failed to meet their duty of care, resulting in your injuries. This involves establishing key legal elements through compelling evidence and expert testimony.
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h3>Essential Evidence for Your Case</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Photos and videos of the accident scene and hazardous conditions.</li>
                  <li>Medical records documenting your injuries and treatment.</li>
                  <li>Witness statements from people who saw the accident.</li>
                  <li>Maintenance records showing the property owner's knowledge of issues.</li>
                  <li>Security camera footage of the incident.</li>
                  <li>Incident reports and witness statements.</li>
                  <li>Expert testimony on building codes and safety standards.</li>
                  <li>Previous complaint or incident reports about the same hazard.</li>
                  <li>Weather reports if applicable to outdoor accidents.</li>
                  <li>Building permits and inspection records.</li>
                </ul>
              </div>
            </section>

            {/* Compensation Section */}
            <section id="compensation" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Compensation in Premises Liability Cases</h2>
              
              <div className="mb-6">
                <img src={compensationImage} alt="Understanding compensation types in premises liability cases - economic and non-economic damages" className="w-full h-64 object-cover rounded-lg shadow-lg mb-4" />
                
                <p className="text-lg leading-relaxed mb-4">
                  Premises liability victims in California may recover various types of compensation depending on the severity of their injuries and the circumstances of their case. Understanding the different categories of damages helps ensure you pursue all available compensation.
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h3>Types of Compensation Available</h3>
                
                <h4>Economic Damages</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Past and future medical expenses</li>
                  <li>Lost wages and reduced earning capacity</li>
                  <li>Property damage to personal belongings</li>
                  <li>Transportation costs for medical treatment</li>
                  <li>Home modifications for disabilities</li>
                  <li>Rehabilitation and therapy costs</li>
                </ul>
                
                <h4>Non-Economic Damages</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Pain and suffering</li>
                  <li>Emotional distress and mental anguish</li>
                  <li>Loss of enjoyment of life</li>
                  <li>Disfigurement and scarring</li>
                  <li>Loss of consortium for spouses</li>
                  <li>Permanent disability and limitations</li>
                </ul>
                
                <p>
                  In cases involving particularly egregious conduct, punitive damages may also be available to punish the defendant and deter similar conduct in the future. The amount of compensation varies significantly based on factors such as the severity of injuries, age of the victim, and degree of property owner negligence.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {[{
                question: "What is premises liability law in California?",
                answer: "Premises liability law holds property owners and occupiers responsible for maintaining reasonably safe conditions for visitors. Under California Civil Code Section 1714, property owners have a duty to exercise ordinary care in managing their property to avoid unreasonable risk of harm to others. This includes regular inspection for hazards, prompt repair of dangerous conditions, and warning visitors of known dangers that cannot be immediately fixed."
              }, {
                question: "How long do I have to file a premises liability claim in California?",
                answer: "California's statute of limitations for premises liability claims is generally two years from the date of injury under Code of Civil Procedure Section 335.1. However, claims against government entities have much shorter deadlines - typically six months to file an initial government claim under the California Tort Claims Act. Discovery rules may extend deadlines in some cases where the dangerous condition wasn't immediately apparent."
              }, {
                question: "What do I need to prove to win a premises liability case?",
                answer: "To succeed in a California premises liability case, you must prove four key elements: (1) the defendant owned, leased, occupied, or controlled the property; (2) the defendant was negligent in the use or maintenance of the property; (3) you were harmed; and (4) the defendant's negligence was a substantial factor in causing your harm. This typically requires showing the property owner knew or should have known about the dangerous condition and failed to correct it or warn visitors."
              }, {
                question: "Can I sue if I was trespassing when I got injured?",
                answer: "Property owners generally owe limited duty to trespassers under California law. However, there are important exceptions: property owners cannot willfully or deliberately injure trespassers, must warn of known artificial conditions that pose substantial risk of death or serious injury, and owe heightened duties to child trespassers under the 'attractive nuisance' doctrine. Additionally, if you became a trespasser due to an emergency or were a frequent trespasser known to the owner, different rules may apply."
              }, {
                question: "What types of properties are covered under premises liability law?",
                answer: "Premises liability law applies to virtually all types of properties including private residences, retail stores, restaurants, shopping centers, office buildings, hotels, hospitals, schools, parking lots, apartment complexes, government buildings, construction sites, and recreational facilities. The specific duty of care owed varies based on your status as an invitee, licensee, or trespasser, and the type of property involved."
              }, {
                question: "How much is my premises liability case worth?",
                answer: "Case values vary significantly based on factors including injury severity, medical expenses, lost wages, degree of property owner negligence, your age and occupation, and long-term disability. Minor slip and fall cases may settle for thousands of dollars, while catastrophic injuries can result in settlements or verdicts worth hundreds of thousands or millions. We analyze medical records, employment history, expert opinions, and comparable cases to determine fair compensation for your specific situation."
              }, {
                question: "What should I do immediately after a premises liability accident?",
                answer: "Take these crucial steps: seek immediate medical attention even for seemingly minor injuries; report the incident to the property owner or manager and request a written incident report; photograph the accident scene, dangerous condition, and your injuries; gather witness contact information; preserve your clothing and shoes as worn during the accident; avoid giving recorded statements to insurance companies; and contact an experienced premises liability attorney as soon as possible to preserve evidence and protect your rights."
              }, {
                question: "How do you prove the property owner knew about the dangerous condition?",
                answer: "We establish knowledge through various methods: actual notice (direct evidence the owner knew about the hazard), constructive notice (the condition existed long enough that reasonable inspection would have discovered it), previous incident reports involving the same hazard, maintenance records showing awareness of problems, employee witness testimony, surveillance footage, building code violations, and expert testimony about reasonable inspection standards for the property type."
              }, {
                question: "Can I file a claim for inadequate security at an apartment complex or business?",
                answer: "Yes, California law recognizes inadequate security claims when property owners fail to provide reasonable security measures in areas with foreseeable criminal activity. We must prove the crime was foreseeable based on prior incidents, the security measures were inadequate for the known risks, and better security would have prevented or deterred the criminal act. These cases often involve apartments, parking lots, hotels, bars, and retail establishments with histories of criminal activity."
              }, {
                question: "What if multiple parties are responsible for my accident?",
                answer: "California follows joint and several liability rules in many premises liability cases, meaning each liable party can be held responsible for the full amount of damages. We identify all potentially responsible parties including property owners, management companies, maintenance contractors, security firms, and tenants. This approach maximizes your chances of full recovery even if some defendants lack sufficient assets or insurance coverage."
              }, {
                question: "Does homeowner's or renter's insurance cover premises liability claims?",
                answer: "Most homeowner's and renter's insurance policies include liability coverage for accidents on the property, though coverage limits and exclusions vary. Commercial properties typically carry general liability insurance. We investigate all available insurance coverage, including umbrella policies, to ensure maximum recovery. Property owners cannot avoid liability simply because they lack insurance - they remain personally responsible for damages exceeding their coverage limits."
              }, {
                question: "What role do building codes play in premises liability cases?",
                answer: "Building code violations can provide strong evidence of negligence in premises liability cases. California courts often recognize that violations of safety codes constitute negligence per se, meaning the violation itself proves negligence without additional evidence. We thoroughly investigate applicable building codes, fire codes, ADA requirements, and local ordinances to identify violations that contributed to your accident, working with expert witnesses to explain how code compliance would have prevented your injuries."
              }, {
                question: "Can I sue for a slip and fall in a government building?",
                answer: "Yes, but claims against government entities in California have special requirements under the California Tort Claims Act. You must file a government claim within six months of your accident (or one year if you were unaware the entity was government-owned). The government has 45 days to respond. If denied or ignored, you then have six months to file a lawsuit. Government entities can only be sued for conditions they created or knew about, and dangerous conditions of public property must pose substantial risk of injury when used with due care."
              }, {
                question: "What if I was partially at fault for my accident?",
                answer: "California follows pure comparative negligence rules under Civil Code Section 1714. Your compensation is reduced by your percentage of fault, but you can still recover even if you were 99% at fault. For example, if damages total $100,000 and you're found 30% at fault, you recover $70,000. We work aggressively to minimize any fault attributed to you while maximizing the property owner's responsibility through thorough investigation and expert testimony about the dangerous condition."
              }, {
                question: "How long does it take to resolve a premises liability case?",
                answer: "Timeline varies significantly based on case complexity, injury severity, and defendant cooperation. Simple cases with clear liability may settle in 3-6 months, while complex cases involving severe injuries, multiple defendants, or disputed liability can take 1-3 years or longer. Factors affecting timeline include completion of medical treatment, discovery process length, expert witness preparation, and willingness of parties to negotiate reasonable settlements."
              }, {
                question: "What evidence do you need to preserve immediately after an accident?",
                answer: "Critical evidence requiring immediate preservation includes: surveillance footage (often deleted within 30-90 days), photographs of the dangerous condition and accident scene, witness contact information and statements, your clothing and shoes as worn during the accident, incident reports and maintenance records, weather conditions if applicable, and medical documentation linking injuries to the accident. We send immediate preservation letters to property owners to prevent evidence destruction."
              }, {
                question: "Can family members file claims for emotional distress from witnessing my accident?",
                answer: "California allows bystander claims for negligent infliction of emotional distress under specific circumstances. The family member must: (1) be closely related to the victim, (2) be present at the scene and contemporaneously aware of the injury-producing event, and (3) suffer serious emotional distress beyond what a disinterested witness would experience. Spouses, children, and parents are most likely to qualify, though other close family members may have claims depending on the specific circumstances."
              }, {
                question: "What if the dangerous condition has been repaired since my accident?",
                answer: "Property owners often repair dangerous conditions after accidents to prevent future incidents. Under California Evidence Code Section 1151, evidence of subsequent remedial measures is generally not admissible to prove negligence, as this rule encourages property owners to make safety improvements. However, such evidence may be admissible for other purposes like proving ownership, control, or feasibility of safety measures. The key is preserving evidence of the condition as it existed at the time of your accident."
              }, {
                question: "Do I need expert witnesses for my premises liability case?",
                answer: "Expert witnesses are often crucial in premises liability cases to establish standard of care, explain technical issues, and demonstrate how the property owner's negligence caused your accident. Common experts include safety engineers, architects, building code experts, medical professionals, accident reconstruction specialists, and economic experts for damages calculation. We maintain relationships with qualified experts throughout California and select those best suited for your specific case circumstances."
              }, {
                question: "What compensation can I recover for permanent disabilities from my accident?",
                answer: "Permanent disabilities from premises liability accidents can result in substantial compensation including future medical care costs, lost earning capacity based on reduced work abilities, home and vehicle modifications for accessibility, ongoing rehabilitation and therapy expenses, pain and suffering for lifetime limitations, loss of enjoyment of life activities, and spousal loss of consortium claims. We work with life care planners and economic experts to fully quantify lifelong impacts of your disability."
              }, {
                question: "Can I file a claim if I was injured while working on someone else's property?",
                answer: "Work-related premises liability involves complex interactions between workers' compensation and third-party liability claims. While workers' compensation may cover medical expenses and partial wage replacement, you may also have premises liability claims against property owners for dangerous conditions they created or failed to correct. These third-party claims can provide additional compensation not available through workers' compensation, including full wage loss, pain and suffering, and other damages."
              }, {
                question: "What if the property owner claims they didn't know about the dangerous condition?",
                answer: "Property owners can be liable even without actual knowledge if they should have known about the condition through reasonable inspection and maintenance. We establish constructive notice by showing: the condition existed for sufficient time that proper inspection would have discovered it, similar incidents occurred previously, the hazard was obvious to reasonable inspection, or the owner failed to follow industry standards for property maintenance and inspection."
              }, {
                question: "How do weather conditions affect premises liability claims?",
                answer: "Weather can significantly impact premises liability cases. Property owners aren't responsible for natural accumulations of rain, snow, or ice, but they may be liable for creating dangerous conditions through inadequate drainage, failing to clear walkways within reasonable time, or not providing proper warnings. California's mild climate means weather-related cases often involve storm damage, pooled water from poor drainage, or slippery conditions created by sprinkler systems or cleaning activities."
              }, {
                question: "Can I sue for food poisoning or illness contracted at a restaurant or event?",
                answer: "Food poisoning claims fall under premises liability when they result from unsanitary conditions, improper food handling, or failure to follow health department regulations. We must prove the illness was caused by food consumed at the defendant's establishment, often requiring medical testing, health department records, and evidence of improper food safety practices. These cases may involve multiple victims and require expert testimony from food safety specialists and medical professionals."
              }, {
                question: "What if my accident happened at a construction site I was visiting?",
                answer: "Construction sites present unique premises liability issues due to inherently dangerous conditions and multiple potentially liable parties. Property owners and general contractors have heightened duties to protect lawful visitors through proper barriers, warning signs, and safety protocols. However, obvious dangers may not create liability, and your reason for being on the site affects the duty owed. We investigate all contractors, subcontractors, and property owners to identify responsible parties."
              }, {
                question: "Do I have a case if I was injured by a defective automatic door or gate?",
                answer: "Defective automatic doors and gates can create premises liability when property owners fail to properly maintain, inspect, or repair them. These cases often involve sensor malfunctions, excessive force settings, or mechanical failures causing doors to strike pedestrians. We investigate maintenance records, manufacturer specifications, and industry safety standards while also considering potential product liability claims against the door manufacturer or installer."
              }, {
                question: "Can I recover compensation for scarring and disfigurement from my accident?",
                answer: "California allows substantial compensation for scarring and disfigurement as part of non-economic damages. Factors affecting compensation include visibility and size of scars, location on body, your age and gender, impact on self-esteem and social functioning, and whether scars can be improved through plastic surgery. We often work with plastic surgeons and psychologists to document the full impact of disfigurement on your life and present compelling evidence for fair compensation."
              }, {
                question: "What happens if the property owner files for bankruptcy during my case?",
                answer: "Property owner bankruptcy can complicate but doesn't necessarily end your premises liability case. We may be able to continue against insurance companies, other liable parties, or pursue the case within the bankruptcy proceedings. Sometimes liability insurance remains available regardless of the property owner's financial situation. We monitor bankruptcy proceedings and take appropriate action to protect your interests and maximize recovery from all available sources."
              }, {
                question: "How do you handle premises liability cases involving children?",
                answer: "Children receive special protection under California premises liability law. Property owners owe heightened duties to child trespassers under the 'attractive nuisance' doctrine when they maintain conditions likely to attract children who cannot appreciate the danger. Swimming pools, construction sites, and playground equipment require special safety measures. We also analyze whether adult supervision was adequate and whether the property owner took reasonable steps to prevent child access to dangerous areas."
              }, {
                question: "Can I file a claim for accidents in parking lots or parking garages?",
                answer: "Parking lot and garage owners have duties to maintain reasonably safe conditions including adequate lighting, security measures, proper drainage, pothole repair, and snow/ice removal. These cases often involve slip and falls, criminal attacks due to inadequate security, vehicle accidents from poor design or maintenance, and falling objects from deteriorating structures. We investigate lighting levels, security patrol schedules, maintenance records, and any prior criminal incidents in the area."
              }, {
                question: "What if my accident was caused by a drunk patron at a bar or restaurant?",
                answer: "California's Dram Shop laws (Business and Professions Code Section 25602) create limited liability for businesses that serve alcohol to obviously intoxicated persons who then cause injuries to others. We investigate the establishment's alcohol service practices, staff training, security measures, and compliance with ABC regulations. These cases often combine premises liability for inadequate security with dram shop liability for over-serving alcohol to dangerous patrons."
              }, {
                question: "How do elevator and escalator accidents differ from other premises liability cases?",
                answer: "Elevator and escalator cases involve specialized regulations, inspection requirements, and maintenance standards. These mechanical systems require regular inspections by certified technicians, and property owners must promptly address safety violations. We review inspection records, maintenance logs, manufacturer specifications, and compliance with ASME safety codes. These cases often involve serious injuries due to the mechanical forces involved and may include product liability claims against manufacturers."
              }, {
                question: "Can I sue for injuries caused by poor lighting conditions?",
                answer: "Inadequate lighting can create premises liability when it contributes to slip and falls, criminal attacks, or other accidents. Property owners must provide reasonable lighting for safe navigation, especially in areas regularly used by visitors. We evaluate lighting levels against industry standards, investigate whether lights were functioning properly, and determine if better lighting would have prevented your accident. These cases often require expert testimony from lighting engineers or safety specialists."
              }, {
                question: "What compensation is available for traumatic brain injuries from premises liability accidents?",
                answer: "Traumatic brain injuries from premises liability accidents can result in substantial compensation including lifetime medical care, cognitive rehabilitation, lost earning capacity, home and vehicle modifications, attendant care costs, pain and suffering, and family impact damages. We work with neurologists, neuropsychologists, life care planners, and economic experts to document the full scope of brain injury impacts and ensure compensation covers all future needs."
              }, {
                question: "How do you prove that a property owner should have known about a dangerous condition?",
                answer: "We establish constructive notice through multiple methods: showing the condition existed long enough that reasonable inspection would have discovered it, demonstrating the hazard was created by the property owner's activities, proving similar incidents occurred previously, establishing patterns of complaints or maintenance requests, analyzing industry standards for inspection frequency, and using expert testimony about reasonable property management practices for similar properties."
              }, {
                question: "Can I file a premises liability claim for accidents at outdoor events or festivals?",
                answer: "Event organizers and property owners can be liable for unsafe conditions at outdoor events including inadequate crowd control, defective temporary structures, poor lighting, insufficient security, dangerous walkways, and failure to protect against weather hazards. These cases often involve multiple potentially liable parties including event organizers, venue owners, vendors, and security companies. We investigate permits, safety plans, insurance coverage, and compliance with applicable regulations."
              }, {
                question: "What if my accident involved a slip and fall in a bathroom?",
                answer: "Bathroom slip and falls often involve water on floors, defective fixtures, inadequate handrails, poor lighting, or cleaning chemical residue. Property owners must provide reasonable maintenance, proper drainage, and safety features especially in areas frequently exposed to water. We investigate cleaning schedules, maintenance procedures, building code compliance, and whether proper warnings were provided about wet or slippery conditions."
              }, {
                question: "How do premises liability laws apply to vacation rental properties?",
                answer: "Vacation rental owners have duties to maintain safe conditions and warn guests of known hazards. These cases often involve swimming pools, hot tubs, balconies, stairs, and recreational equipment. We investigate whether properties comply with local vacation rental regulations, safety requirements, and building codes. Property management companies may also share liability for maintenance failures or inadequate safety inspections."
              }, {
                question: "Can I recover damages for lost wages if I'm self-employed?",
                answer: "Self-employed individuals can recover lost income in premises liability cases, though documentation requirements are more complex. We use tax returns, business records, client contracts, and expert economic testimony to establish pre-accident earning patterns and calculate lost income. For new businesses with limited history, we may use industry standards, comparable businesses, and projected earnings based on business plans and market analysis."
              }, {
                question: "What happens if the dangerous condition was obvious?",
                answer: "While obvious dangers may reduce property owner liability under the 'open and obvious' doctrine, California law doesn't automatically bar recovery. Property owners may still be liable if they should have anticipated that people would encounter the danger despite its obvious nature, or if the danger was created by their own conduct. We analyze whether reasonable alternatives existed, if warnings were adequate, and whether the owner had superior knowledge of risks."
              }, {
                question: "How do you calculate pain and suffering damages in premises liability cases?",
                answer: "Pain and suffering calculation considers injury severity, duration of recovery, permanent limitations, impact on daily activities, age and life expectancy, and psychological effects. California doesn't cap pain and suffering in most premises liability cases. We present evidence through medical testimony, day-in-the-life videos, family testimony about lifestyle changes, and expert psychological evaluations to help juries understand the full impact of your injuries on your quality of life."
              }, {
                question: "Can I file a claim if my accident happened while I was intoxicated?",
                answer: "Intoxication doesn't automatically bar premises liability claims in California, though it may affect the comparative negligence analysis and reduce your compensation percentage. We analyze whether your intoxication contributed to the accident or whether the dangerous condition would have caused injury regardless of sobriety. The key is whether the property owner's negligence was a substantial factor in causing your injuries despite your condition."
              }, {
                question: "What evidence do insurance companies look for to deny premises liability claims?",
                answer: "Insurance companies often focus on: lack of notice to the property owner about the dangerous condition, evidence suggesting you were at fault or not paying attention, pre-existing medical conditions that could explain your injuries, inconsistencies in your statements about how the accident happened, social media posts that contradict your injury claims, and any evidence suggesting you were engaged in risky behavior. We prepare cases anticipating these defenses and gather evidence to counter them."
              }, {
                question: "How do slip and fall cases differ from trip and fall cases legally?",
                answer: "While both involve falls, slip and fall cases typically involve smooth surfaces made dangerous by substances like water, oil, or cleaning products, while trip and fall cases involve obstacles, uneven surfaces, or elevation changes. The legal analysis differs in terms of what the property owner should have known, how long the condition existed, and what reasonable maintenance would have prevented the accident. We tailor our investigation and expert testimony to the specific mechanism of your fall."
              }, {
                question: "Can I sue for injuries from defective handrails or guardrails?",
                answer: "Defective handrails and guardrails can create significant premises liability when they fail to meet building code requirements or are improperly maintained. These cases often involve stairway accidents, balcony falls, or ramp incidents. We investigate compliance with building codes, ADA requirements, and industry standards while examining maintenance records and any prior complaints about rail defects. Expert testimony from engineers or architects is often crucial in these cases."
              }, {
                question: "What should I know about premises liability at shopping malls?",
                answer: "Shopping malls involve complex ownership structures with multiple potentially liable parties including mall owners, individual store owners, cleaning contractors, and security companies. Common accidents include slip and falls, escalator injuries, inadequate security incidents, and falling merchandise. We investigate lease agreements to determine responsibility for maintenance and security, analyze foot traffic patterns, and review security incident logs to establish notice of dangerous conditions."
              }, {
                question: "How do premises liability cases work when the accident involves a child on a playground?",
                answer: "Playground accidents involve specific safety standards under CPSC guidelines and state regulations. Property owners must provide age-appropriate equipment, proper surfacing, adequate supervision sight lines, and regular safety inspections. We investigate equipment installation, maintenance records, surface materials, and compliance with safety standards while considering the child's age and developmental abilities. These cases often require playground safety experts and child development specialists."
              }, {
                question: "Can I recover compensation for my spouse's loss of consortium in a premises liability case?",
                answer: "California allows spouses to recover for loss of consortium when serious injuries impact the marital relationship. This includes loss of companionship, affection, intimacy, and household services. The compensation depends on the duration and strength of the marriage, severity of injuries, and impact on the relationship. We present evidence through spouse testimony, family witnesses, and expert testimony about the relationship changes caused by your injuries."
              }].map((faq, index) => <Card key={index} className="glass-card group hover-glow-primary border-l-4 border-l-red-600 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <CardHeader className="cursor-pointer transition-colors group-hover:bg-primary/5" onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}>
                      <CardTitle className="flex items-center justify-between text-lg group-hover:text-primary transition-colors">
                        {faq.question}
                        {expandedFaq === index ? <ChevronUp className="transition-transform duration-200" /> : <ChevronDown className="transition-transform duration-200" />}
                      </CardTitle>
                    </CardHeader>
                    {expandedFaq === index && <CardContent className="animate-fade-in">
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </CardContent>}
                  </Card>)}
              </div>
            </section>

            {/* Resources Section */}
            <section id="resources" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Premises Liability Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">Legal Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>• California Civil Code Section 1714</p>
                    <p>• California Tort Claims Act</p>
                    <p>• Building Code Compliance</p>
                    <p>• ADA Requirements</p>
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
                    <p>• California Trial Lawyers Association</p>
                    <p>• Disability Rights California</p>
                    <p>• Injury Support Groups</p>
                    <p>• Legal Aid Societies</p>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              
              {/* Contact Card */}
              <Card className="glass-card interactive-card hover-glow-primary">
                <CardHeader>
                  <CardTitle className="text-center text-xl font-bold">Get Your Free Consultation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold" onClick={() => window.location.href = 'tel:8553742906'}>
                    <Phone className="w-4 h-4 mr-2" />
                    Call (855) 374-2906
                  </Button>
                  <Button variant="outline" className="w-full" onClick={() => scrollToSection('evaluation')}>
                    <FileText className="w-4 h-4 mr-2" />
                    Free Case Evaluation
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-xl">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" onClick={() => scrollToSection('what-to-do')}>
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    What to Do After Accident
                  </Button>
                  <Button variant="outline" className="w-full justify-start" onClick={() => scrollToSection('types-of-accidents')}>
                    <Shield className="w-4 h-4 mr-2" />
                    Types of Accidents
                  </Button>
                  <Button variant="outline" className="w-full justify-start" onClick={() => scrollToSection('compensation')}>
                    <DollarSign className="w-4 h-4 mr-2" />
                    Compensation Info
                  </Button>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="w-5 h-5 mr-2 text-primary" />
                    Why Choose Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-2" />
                    <span>No fees unless we win</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-2" />
                    <span>Free consultation</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-2" />
                    <span>Proven track record</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-2" />
                    <span>Experienced legal team</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Don't Wait - Time Limits Apply for California Premises Liability Claims
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-4xl mx-auto">
            Property owners must maintain safe conditions for visitors. If you've been injured due to negligent property maintenance, inadequate security, or dangerous conditions, you may be entitled to significant compensation. Our experienced premises liability attorneys fight for maximum recovery under California law.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-white text-red-600 hover:bg-red-50" onClick={() => scrollToSection('evaluation')}>
              Free Case Evaluation
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 text-white border-white hover:bg-white/10" onClick={() => window.location.href = 'tel:8553742906'}>
              Call (855) 374-2906
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default PremisesLiability;