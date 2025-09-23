import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  ArrowLeft, 
  Scale, 
  FileText, 
  Clock, 
  Shield, 
  CheckCircle,
  AlertCircle,
  Phone,
  Mail,
  Star,
  ChevronDown,
  ChevronUp,
  Calculator,
  Heart,
  Users
} from 'lucide-react';
import heroBackground from '@/assets/amusement-park-hero-bg.jpg';
import SEO from '@/components/SEO';

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Accident Details
  accidentDate: string;
  parkName: string;
  rideType: string;
  injuryType: string;
  accidentDescription: string;
  
  // Injury & Medical
  medicalTreatment: string;
  hospitalized: string;
  ongoingTreatment: string;
  
  // Legal
  spokeToPark: string;
  hasAttorney: string;
  workersComp: string;
}

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const AmusementParkCaseEvaluation: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [activeTab, setActiveTab] = useState('evaluation');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    accidentDate: '',
    parkName: '',
    rideType: '',
    injuryType: '',
    accidentDescription: '',
    medicalTreatment: '',
    hospitalized: '',
    ongoingTreatment: '',
    spokeToPark: '',
    hasAttorney: '',
    workersComp: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'process', label: 'EVALUATION PROCESS', icon: FileText },
    { id: 'compensation', label: 'COMPENSATION FACTORS', icon: Calculator },
    { id: 'timeline', label: 'WHAT TO EXPECT', icon: Clock },
    { id: 'contact', label: 'CONTACT US', icon: Phone }
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

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your submission. We will contact you within 24 hours.');
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">First Name *</label>
                <Input
                  value={formData.firstName}
                  onChange={(e) => updateFormData('firstName', e.target.value)}
                  placeholder="Your first name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name *</label>
                <Input
                  value={formData.lastName}
                  onChange={(e) => updateFormData('lastName', e.target.value)}
                  placeholder="Your last name"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number *</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  placeholder="(555) 123-4567"
                  required
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Accident Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Accident Date</label>
                <Input
                  type="date"
                  value={formData.accidentDate}
                  onChange={(e) => updateFormData('accidentDate', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Park Name</label>
                <Select value={formData.parkName} onValueChange={(value) => updateFormData('parkName', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select park" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="disneyland">Disneyland Resort</SelectItem>
                    <SelectItem value="six-flags">Six Flags Magic Mountain</SelectItem>
                    <SelectItem value="knotts">Knott's Berry Farm</SelectItem>
                    <SelectItem value="universal">Universal Studios</SelectItem>
                    <SelectItem value="seaworld">SeaWorld San Diego</SelectItem>
                    <SelectItem value="great-america">California's Great America</SelectItem>
                    <SelectItem value="other">Other Park</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Type of Ride/Attraction</label>
                <Select value={formData.rideType} onValueChange={(value) => updateFormData('rideType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select ride type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="roller-coaster">Roller Coaster</SelectItem>
                    <SelectItem value="water-ride">Water Ride/Slide</SelectItem>
                    <SelectItem value="spinning-ride">Spinning Ride</SelectItem>
                    <SelectItem value="drop-tower">Drop Tower</SelectItem>
                    <SelectItem value="kiddie-ride">Children's Ride</SelectItem>
                    <SelectItem value="walkway">Walkway/Queue Area</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Primary Injury</label>
                <Select value={formData.injuryType} onValueChange={(value) => updateFormData('injuryType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select injury" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="head-injury">Head/Brain Injury</SelectItem>
                    <SelectItem value="spinal-injury">Spinal/Neck Injury</SelectItem>
                    <SelectItem value="broken-bones">Broken Bones</SelectItem>
                    <SelectItem value="cuts-lacerations">Cuts/Lacerations</SelectItem>
                    <SelectItem value="burns">Burns</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Accident Description</label>
              <Textarea
                value={formData.accidentDescription}
                onChange={(e) => updateFormData('accidentDescription', e.target.value)}
                placeholder="Please describe how the accident occurred..."
                rows={3}
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Injury & Medical Information</h3>
            <div>
              <label className="block text-sm font-medium mb-2">Medical Treatment Received</label>
              <Select value={formData.medicalTreatment} onValueChange={(value) => updateFormData('medicalTreatment', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select treatment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No Treatment</SelectItem>
                  <SelectItem value="first-aid">First Aid Only</SelectItem>
                  <SelectItem value="urgent-care">Urgent Care Visit</SelectItem>
                  <SelectItem value="emergency-room">Emergency Room</SelectItem>
                  <SelectItem value="hospitalization">Hospitalization</SelectItem>
                  <SelectItem value="surgery">Surgery Required</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Were you hospitalized?</label>
              <Select value={formData.hospitalized} onValueChange={(value) => updateFormData('hospitalized', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="yes-overnight">Yes, overnight stay</SelectItem>
                  <SelectItem value="yes-multiple">Yes, multiple days</SelectItem>
                  <SelectItem value="yes-extended">Yes, extended stay (week+)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Ongoing Treatment Required?</label>
              <Select value={formData.ongoingTreatment} onValueChange={(value) => updateFormData('ongoingTreatment', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="no">No ongoing treatment</SelectItem>
                  <SelectItem value="physical-therapy">Physical therapy</SelectItem>
                  <SelectItem value="specialist">Specialist care</SelectItem>
                  <SelectItem value="multiple">Multiple treatments</SelectItem>
                  <SelectItem value="uncertain">Uncertain at this time</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal Information</h3>
            <div>
              <label className="block text-sm font-medium mb-2">Did you speak to park management about the incident?</label>
              <Select value={formData.spokeToPark} onValueChange={(value) => updateFormData('spokeToPark', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes-report">Yes, filed incident report</SelectItem>
                  <SelectItem value="yes-informal">Yes, spoke informally</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="unsure">Unsure/don't remember</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Do you currently have an attorney?</label>
              <Select value={formData.hasAttorney} onValueChange={(value) => updateFormData('hasAttorney', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="consulting">Currently consulting attorneys</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Is this a workers' compensation case?</label>
              <Select value={formData.workersComp} onValueChange={(value) => updateFormData('workersComp', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="no">No, I was a visitor</SelectItem>
                  <SelectItem value="yes">Yes, I was working</SelectItem>
                  <SelectItem value="unsure">Unsure</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Free Amusement Park Injury Case Evaluation | Trembach Law Firm"
        description="Get a free evaluation of your California amusement park injury case. Former defense attorneys fighting for maximum compensation. Start your case evaluation today."
        keywords="amusement park injury lawyer, case evaluation, California theme park accident attorney, free consultation"
      />

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
              Free Amusement Park Injury Case Evaluation
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Get Your Case Evaluated by Former Defense Attorneys</span>
            </div>
            
            <p className="text-xl mb-8 opacity-90">
              Determine if you have a strong case and understand your potential compensation
            </p>
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
            
            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Start Your Free Case Evaluation</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  Get a comprehensive evaluation of your amusement park injury case from attorneys who understand how theme parks and insurers defend these claims. Our former defense attorney insight helps us identify the strongest aspects of your case and potential challenges.
                </p>
              </div>

              {/* Progress Indicator */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        currentStep >= step 
                          ? 'bg-red-600 text-white' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {currentStep > step ? <CheckCircle className="w-4 h-4" /> : step}
                      </div>
                      {step < 4 && (
                        <div className={`w-full h-1 mx-2 ${
                          currentStep > step ? 'bg-red-600' : 'bg-muted'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <span className="text-sm text-muted-foreground">
                    Step {currentStep} of 4: {
                      currentStep === 1 ? 'Personal Information' :
                      currentStep === 2 ? 'Accident Details' :
                      currentStep === 3 ? 'Injury & Medical' :
                      'Legal Information'
                    }
                  </span>
                </div>
              </div>

              {/* Multi-Step Form */}
              <Card className="bg-muted p-8 rounded-lg">
                <form onSubmit={handleSubmit}>
                  {renderStep()}
                  
                  <div className="flex justify-between mt-8">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={prevStep}
                      disabled={currentStep === 1}
                    >
                      Previous
                    </Button>
                    {currentStep < 4 ? (
                      <Button type="button" onClick={nextStep}>
                        Next
                      </Button>
                    ) : (
                      <Button type="submit" className="bg-red-600 hover:bg-red-700">
                        Submit Evaluation
                      </Button>
                    )}
                  </div>
                </form>
              </Card>
            </section>

            {/* Evaluation Process Section */}
            <section id="process" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Our Evaluation Process</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <FileText className="w-5 h-5 mr-2 text-primary" />
                      Comprehensive Review
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>We review accident reports, medical records, park inspection history, and witness statements to build a complete picture of your case.</p>
                  </CardContent>
                </Card>
                
                <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Calculator className="w-5 h-5 mr-2 text-primary" />
                      Damage Assessment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>We calculate medical expenses, lost wages, pain and suffering, and future care needs to determine your case value.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Compensation Factors Section */}
            <section id="compensation" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Compensation Factors</h2>
              
              <Collapsible open={expandedSections.compensation} onOpenChange={() => toggleSection('compensation')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Factors That Affect Your Compensation Amount
                    {expandedSections.compensation ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Injury Severity Factors</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <AlertCircle className="w-4 h-4 text-primary mt-1 mr-2" />
                          <span>Permanent disabilities or disfigurement</span>
                        </li>
                        <li className="flex items-start">
                          <AlertCircle className="w-4 h-4 text-primary mt-1 mr-2" />
                          <span>Need for ongoing medical treatment</span>
                        </li>
                        <li className="flex items-start">
                          <AlertCircle className="w-4 h-4 text-primary mt-1 mr-2" />
                          <span>Impact on daily activities and work capacity</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Liability Factors</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Shield className="w-4 h-4 text-primary mt-1 mr-2" />
                          <span>Mechanical failure or maintenance issues</span>
                        </li>
                        <li className="flex items-start">
                          <Shield className="w-4 h-4 text-primary mt-1 mr-2" />
                          <span>Inadequate safety warnings or barriers</span>
                        </li>
                        <li className="flex items-start">
                          <Shield className="w-4 h-4 text-primary mt-1 mr-2" />
                          <span>Staff negligence or inadequate training</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Timeline Section */}
            <section id="timeline" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">What to Expect</h2>
              
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Clock className="w-5 h-5 mr-2 text-primary" />
                      Immediate Response (24-48 Hours)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Initial case review, attorney consultation, and case acceptance decision.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <FileText className="w-5 h-5 mr-2 text-primary" />
                      Investigation Phase (1-4 Weeks)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Gather evidence, medical records, expert consultations, and demand preparation.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Ready to Start?</h2>
              
              <Card className="bg-muted">
                <CardHeader>
                  <CardTitle>Get Your Free Case Evaluation Today</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Don't wait - California's statute of limitations applies to amusement park injury cases.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="flex items-center bg-red-600 hover:bg-red-700">
                      <Phone className="w-4 h-4 mr-2" />
                      Call (818) 123-4567
                    </Button>
                    <Button variant="outline">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Consultation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <Card className="bg-muted">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-600">
                    <Users className="w-5 h-5 mr-2" />
                    Why Choose Us?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start">
                    <Badge variant="secondary" className="mr-2">1</Badge>
                    <span className="text-sm">Former defense attorney insight</span>
                  </div>
                  <div className="flex items-start">
                    <Badge variant="secondary" className="mr-2">2</Badge>
                    <span className="text-sm">No fees unless we win</span>
                  </div>
                  <div className="flex items-start">
                    <Badge variant="secondary" className="mr-2">3</Badge>
                    <span className="text-sm">24/7 case evaluation</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Quick Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      Call Now: (818) 123-4567
                    </Button>
                    <Button variant="outline" className="w-full">
                      Text Us
                    </Button>
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

export default AmusementParkCaseEvaluation;