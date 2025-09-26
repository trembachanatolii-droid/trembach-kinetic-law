import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import ThreeDVisualEffects from '@/components/ThreeDVisualEffects';
import '@/styles/premium-3d-effects.css';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Star, 
  ChevronRight,
  Shield,
  Clock,
  Award,
  Users,
  ArrowLeft,
  FileText,
  AlertTriangle,
  Zap
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';
import heroBackground from '@/assets/explosions-case-evaluation-hero.jpg';

gsap.registerPlugin(ScrollTrigger);

const ExplosionsCaseEvaluation: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Incident Details
    incidentDate: '',
    incidentLocation: '',
    explosionType: '',
    incidentCause: '',
    workplace: '',
    employerName: '',
    
    // Injuries and Medical
    injuryType: '',
    medicalTreatment: '',
    hospitalName: '',
    currentCondition: '',
    workStatus: '',
    
    // Legal and Additional
    hasAttorney: '',
    insuranceClaim: '',
    workersComp: '',
    additionalInfo: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );

      // Form animation
      gsap.fromTo(formRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const totalSteps = 4;
  const progressPercentage = (currentStep / totalSteps) * 100;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-2">Personal Information</h3>
              <p className="text-muted-foreground">Let's start with your contact details</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  placeholder="Enter your last name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-2">Incident Details</h3>
              <p className="text-muted-foreground">Tell us about the explosion incident</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="incidentDate">Date of Incident *</Label>
                <Input
                  id="incidentDate"
                  type="date"
                  value={formData.incidentDate}
                  onChange={(e) => handleInputChange('incidentDate', e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="incidentLocation">Location of Incident *</Label>
                <Input
                  id="incidentLocation"
                  value={formData.incidentLocation}
                  onChange={(e) => handleInputChange('incidentLocation', e.target.value)}
                  placeholder="City, State where incident occurred"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="explosionType">Type of Explosion *</Label>
                <Select value={formData.explosionType} onValueChange={(value) => handleInputChange('explosionType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select explosion type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="industrial">Industrial Explosion</SelectItem>
                    <SelectItem value="chemical">Chemical Explosion</SelectItem>
                    <SelectItem value="gas">Gas Explosion</SelectItem>
                    <SelectItem value="electrical">Electrical Explosion</SelectItem>
                    <SelectItem value="pipeline">Pipeline Explosion</SelectItem>
                    <SelectItem value="refinery">Refinery Explosion</SelectItem>
                    <SelectItem value="construction">Construction Site Explosion</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="incidentCause">Apparent Cause *</Label>
                <Select value={formData.incidentCause} onValueChange={(value) => handleInputChange('incidentCause', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select cause" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="equipment-failure">Equipment Failure</SelectItem>
                    <SelectItem value="safety-violation">Safety Violation</SelectItem>
                    <SelectItem value="maintenance-neglect">Poor Maintenance</SelectItem>
                    <SelectItem value="human-error">Human Error</SelectItem>
                    <SelectItem value="defective-product">Defective Product</SelectItem>
                    <SelectItem value="unknown">Unknown</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="workplace">Workplace/Company Name</Label>
                <Input
                  id="workplace"
                  value={formData.workplace}
                  onChange={(e) => handleInputChange('workplace', e.target.value)}
                  placeholder="Name of company where incident occurred"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-2">Injuries & Medical Treatment</h3>
              <p className="text-muted-foreground">Describe your injuries and treatment</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="injuryType">Type of Injuries *</Label>
                <Select value={formData.injuryType} onValueChange={(value) => handleInputChange('injuryType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select injury type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="burns">Burns</SelectItem>
                    <SelectItem value="blast-injuries">Blast Injuries</SelectItem>
                    <SelectItem value="fractures">Fractures</SelectItem>
                    <SelectItem value="traumatic-brain-injury">Traumatic Brain Injury</SelectItem>
                    <SelectItem value="hearing-loss">Hearing Loss</SelectItem>
                    <SelectItem value="lung-damage">Lung Damage</SelectItem>
                    <SelectItem value="lacerations">Lacerations</SelectItem>
                    <SelectItem value="multiple">Multiple Injuries</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="medicalTreatment">Medical Treatment Received *</Label>
                <Select value={formData.medicalTreatment} onValueChange={(value) => handleInputChange('medicalTreatment', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select treatment" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="emergency-room">Emergency Room</SelectItem>
                    <SelectItem value="hospitalization">Hospitalization</SelectItem>
                    <SelectItem value="surgery">Surgery</SelectItem>
                    <SelectItem value="burn-unit">Burn Unit Treatment</SelectItem>
                    <SelectItem value="ongoing-treatment">Ongoing Treatment</SelectItem>
                    <SelectItem value="rehabilitation">Rehabilitation</SelectItem>
                    <SelectItem value="none">No Treatment Yet</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="hospitalName">Hospital/Medical Facility</Label>
                <Input
                  id="hospitalName"
                  value={formData.hospitalName}
                  onChange={(e) => handleInputChange('hospitalName', e.target.value)}
                  placeholder="Name of hospital or medical facility"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="currentCondition">Current Condition *</Label>
                <Select value={formData.currentCondition} onValueChange={(value) => handleInputChange('currentCondition', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recovering">Recovering</SelectItem>
                    <SelectItem value="stable">Stable</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                    <SelectItem value="permanent-disability">Permanent Disability</SelectItem>
                    <SelectItem value="unknown">Unknown</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="workStatus">Current Work Status *</Label>
                <Select value={formData.workStatus} onValueChange={(value) => handleInputChange('workStatus', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select work status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="unable-to-work">Unable to Work</SelectItem>
                    <SelectItem value="limited-capacity">Working with Limitations</SelectItem>
                    <SelectItem value="returned-to-work">Returned to Full Work</SelectItem>
                    <SelectItem value="different-job">Different Job Due to Injuries</SelectItem>
                    <SelectItem value="retired">Retired Due to Injuries</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-2">Legal & Additional Information</h3>
              <p className="text-muted-foreground">Final details about your case</p>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="hasAttorney">Do you currently have an attorney? *</Label>
                  <Select value={formData.hasAttorney} onValueChange={(value) => handleInputChange('hasAttorney', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="no">No</SelectItem>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="consulting">Consulting with one</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="insuranceClaim">Have you filed an insurance claim? *</Label>
                  <Select value={formData.insuranceClaim} onValueChange={(value) => handleInputChange('insuranceClaim', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="no">No</SelectItem>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="denied">Denied</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="additionalInfo">Additional Information</Label>
                <Textarea
                  id="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                  placeholder="Please provide any additional details about your explosion incident, injuries, or circumstances that might be relevant to your case..."
                  rows={4}
                />
              </div>
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
        title="Free Explosion Injury Case Evaluation | Trembach Law Firm"
        description="Get a free consultation for your explosion injury case. Our experienced California explosion lawyers will evaluate your claim and help you understand your legal options."
        canonical="https://www.trembachlawfirm.com/practice-areas/explosions/case-evaluation"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="hero-content text-center text-white">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                Free Explosion Injury Case Evaluation
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-6">
                Get Expert Legal Guidance for Your Explosion Injury Claim
              </p>
              <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                Our experienced California explosion injury attorneys will review your case and help you understand your legal rights and options for compensation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Go Back Button */}
      <GoBack className="container mx-auto px-8 pt-8" fallbackPath="/practice-areas/explosions" />

      {/* Main Content */}
      <div className="container mx-auto px-8 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Why Choose Us Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Trembach Law Firm?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>No Win, No Fee</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We work on a contingency basis - you pay nothing unless we win your case.</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Free Consultation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Get immediate answers about your case with our free, no-obligation consultation.</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Experienced Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Our team has extensive experience handling complex explosion injury cases in California.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Case Evaluation Form */}
          <Card className="shadow-lg" ref={formRef}>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold">Free Case Evaluation</CardTitle>
              <p className="text-muted-foreground">Complete this form to get started with your free consultation</p>
              
              {/* Progress Bar */}
              <div className="mt-6">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>Step {currentStep} of {totalSteps}</span>
                  <span>{Math.round(progressPercentage)}% Complete</span>
                </div>
                <Progress value={progressPercentage} className="w-full" />
              </div>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit}>
                {renderStep()}
                
                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                  >
                    Previous
                  </Button>
                  
                  {currentStep < totalSteps ? (
                    <Button type="button" onClick={nextStep}>
                      Next <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button type="submit" className="bg-primary hover:bg-primary/90">
                      Submit Case Evaluation
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-6">Need Immediate Assistance?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary mr-2" />
                <div>
                  <p className="font-semibold">Call Now</p>
                  <p className="text-primary">(818) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary mr-2" />
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-primary">info@trembachlawfirm.com</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary mr-2" />
                <div>
                  <p className="font-semibold">24/7 Support</p>
                  <p className="text-primary">Available Anytime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplosionsCaseEvaluation;