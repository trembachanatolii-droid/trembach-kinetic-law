import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  FileText, 
  Clock, 
  Shield, 
  Phone, 
  Mail,
  User,
  Calendar,
  MapPin,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';
import { toast } from 'sonner';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import evaluationHero from '@/assets/swimming-pool-case-evaluation-hero.jpg';

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  
  // Incident Information
  incidentDate: string;
  incidentTime: string;
  incidentLocation: string;
  poolOwnerType: string;
  incidentType: string;
  
  // Injury Information
  injuryType: string;
  injurySeverity: string;
  hospitalTreatment: string;
  ongoingTreatment: string;
  
  // Additional Information
  witnesses: string;
  policeReport: string;
  priorIncidents: string;
  description: string;
  
  // Legal
  hasAttorney: string;
  contactedInsurance: string;
  urgency: string;
}

const SwimmingPoolCaseEvaluation: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: 'CA',
    zipCode: '',
    incidentDate: '',
    incidentTime: '',
    incidentLocation: '',
    poolOwnerType: '',
    incidentType: '',
    injuryType: '',
    injurySeverity: '',
    hospitalTreatment: '',
    ongoingTreatment: '',
    witnesses: '',
    policeReport: '',
    priorIncidents: '',
    description: '',
    hasAttorney: '',
    contactedInsurance: '',
    urgency: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const totalSteps = 4;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );

      gsap.fromTo('.form-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: '.form-content',
            start: 'top 80%'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.firstName && formData.lastName && formData.email && formData.phone);
      case 2:
        return !!(formData.incidentDate && formData.incidentLocation && formData.incidentType);
      case 3:
        return !!(formData.injuryType && formData.injurySeverity);
      case 4:
        return !!formData.description;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    } else {
      toast.error('Please fill in all required fields before proceeding.');
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(currentStep)) {
      toast.error('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Case evaluation submitted successfully! We will contact you within 24 hours.');
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: 'CA',
        zipCode: '',
        incidentDate: '',
        incidentTime: '',
        incidentLocation: '',
        poolOwnerType: '',
        incidentType: '',
        injuryType: '',
        injurySeverity: '',
        hospitalTreatment: '',
        ongoingTreatment: '',
        witnesses: '',
        policeReport: '',
        priorIncidents: '',
        description: '',
        hasAttorney: '',
        contactedInsurance: '',
        urgency: ''
      });
      setCurrentStep(1);
      
    } catch (error) {
      toast.error('There was an error submitting your case evaluation. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <User className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold">Personal Information</h3>
              <p className="text-muted-foreground">Help us get to know you better</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
              />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="state">State</Label>
                <Select value={formData.state} onValueChange={(value) => handleInputChange('state', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="CA">California</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="zipCode">ZIP Code</Label>
                <Input
                  id="zipCode"
                  value={formData.zipCode}
                  onChange={(e) => handleInputChange('zipCode', e.target.value)}
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold">Incident Information</h3>
              <p className="text-muted-foreground">Tell us about what happened</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="incidentDate">Date of Incident *</Label>
                <Input
                  id="incidentDate"
                  type="date"
                  value={formData.incidentDate}
                  onChange={(e) => handleInputChange('incidentDate', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="incidentTime">Approximate Time</Label>
                <Input
                  id="incidentTime"
                  type="time"
                  value={formData.incidentTime}
                  onChange={(e) => handleInputChange('incidentTime', e.target.value)}
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="incidentLocation">Location of Incident *</Label>
              <Input
                id="incidentLocation"
                placeholder="e.g., 123 Main St, Los Angeles, CA"
                value={formData.incidentLocation}
                onChange={(e) => handleInputChange('incidentLocation', e.target.value)}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="poolOwnerType">Type of Pool Owner *</Label>
              <Select value={formData.poolOwnerType} onValueChange={(value) => handleInputChange('poolOwnerType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select pool owner type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="private-homeowner">Private Homeowner</SelectItem>
                  <SelectItem value="apartment-complex">Apartment/Condo Complex</SelectItem>
                  <SelectItem value="hotel-resort">Hotel/Resort</SelectItem>
                  <SelectItem value="public-facility">Public/Government Facility</SelectItem>
                  <SelectItem value="gym-club">Gym/Health Club</SelectItem>
                  <SelectItem value="school">School</SelectItem>
                  <SelectItem value="waterpark">Water Park</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="incidentType">Type of Accident *</Label>
              <Select value={formData.incidentType} onValueChange={(value) => handleInputChange('incidentType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select incident type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="drowning">Near-Drowning/Drowning</SelectItem>
                  <SelectItem value="slip-fall">Slip and Fall</SelectItem>
                  <SelectItem value="diving-accident">Diving Accident</SelectItem>
                  <SelectItem value="chemical-burn">Chemical Burns/Exposure</SelectItem>
                  <SelectItem value="equipment-malfunction">Equipment Malfunction</SelectItem>
                  <SelectItem value="drain-entrapment">Drain Entrapment</SelectItem>
                  <SelectItem value="electrocution">Electrical Injury</SelectItem>
                  <SelectItem value="glass-injury">Broken Glass Injury</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-red-500" />
              <h3 className="text-2xl font-bold">Injury Information</h3>
              <p className="text-muted-foreground">Help us understand your injuries</p>
            </div>
            
            <div>
              <Label htmlFor="injuryType">Primary Injury Type *</Label>
              <Select value={formData.injuryType} onValueChange={(value) => handleInputChange('injuryType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select primary injury" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="brain-injury">Traumatic Brain Injury</SelectItem>
                  <SelectItem value="spinal-cord">Spinal Cord Injury</SelectItem>
                  <SelectItem value="drowning-injury">Drowning/Near-Drowning</SelectItem>
                  <SelectItem value="fractures">Broken Bones/Fractures</SelectItem>
                  <SelectItem value="lacerations">Cuts/Lacerations</SelectItem>
                  <SelectItem value="burns">Chemical/Thermal Burns</SelectItem>
                  <SelectItem value="soft-tissue">Soft Tissue Injuries</SelectItem>
                  <SelectItem value="multiple-injuries">Multiple Injuries</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="injurySeverity">Injury Severity *</Label>
              <Select 
                value={formData.injurySeverity}
                onValueChange={(value) => handleInputChange('injurySeverity', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select severity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="minor">Minor (treated and released)</SelectItem>
                  <SelectItem value="moderate">Moderate (hospitalization required)</SelectItem>
                  <SelectItem value="severe">Severe (ongoing treatment needed)</SelectItem>
                  <SelectItem value="catastrophic">Catastrophic (life-threatening/permanent)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="hospitalTreatment">Hospital Treatment Received</Label>
              <Select value={formData.hospitalTreatment} onValueChange={(value) => handleInputChange('hospitalTreatment', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select treatment received" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No Hospital Treatment</SelectItem>
                  <SelectItem value="emergency-room">Emergency Room Visit</SelectItem>
                  <SelectItem value="overnight">Overnight Hospital Stay</SelectItem>
                  <SelectItem value="extended">Extended Hospitalization</SelectItem>
                  <SelectItem value="surgery">Surgery Required</SelectItem>
                  <SelectItem value="ongoing">Ongoing Treatment</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="ongoingTreatment">Ongoing Medical Treatment</Label>
              <Textarea
                id="ongoingTreatment"
                placeholder="Describe any ongoing medical treatment, therapy, or care needed..."
                value={formData.ongoingTreatment}
                onChange={(e) => handleInputChange('ongoingTreatment', e.target.value)}
                rows={3}
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <FileText className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold">Additional Information</h3>
              <p className="text-muted-foreground">Final details about your case</p>
            </div>
            
            <div>
              <Label htmlFor="description">Describe What Happened *</Label>
              <Textarea
                id="description"
                placeholder="Please provide a detailed description of the swimming pool accident, including what led up to it, what happened during the incident, and any immediate aftermath..."
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={5}
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="witnesses">Were There Witnesses?</Label>
                <Select value={formData.witnesses} onValueChange={(value) => handleInputChange('witnesses', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes - Witnesses Present</SelectItem>
                    <SelectItem value="no">No Witnesses</SelectItem>
                    <SelectItem value="unknown">Unknown</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="policeReport">Police Report Filed?</Label>
                <Select value={formData.policeReport} onValueChange={(value) => handleInputChange('policeReport', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes - Report Filed</SelectItem>
                    <SelectItem value="no">No Report Filed</SelectItem>
                    <SelectItem value="unknown">Unknown</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="hasAttorney">Do You Currently Have an Attorney?</Label>
                <Select value={formData.hasAttorney} onValueChange={(value) => handleInputChange('hasAttorney', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no">No</SelectItem>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="considering">Considering Options</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="contactedInsurance">Contacted Insurance?</Label>
                <Select value={formData.contactedInsurance} onValueChange={(value) => handleInputChange('contactedInsurance', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no">No</SelectItem>
                    <SelectItem value="yes">Yes - Already Contacted</SelectItem>
                    <SelectItem value="planning">Planning to Contact</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="urgency">How Urgent Is Your Case?</Label>
              <Select 
                value={formData.urgency} 
                onValueChange={(value) => handleInputChange('urgency', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select urgency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediate">Immediate - Need Help Today</SelectItem>
                  <SelectItem value="soon">Soon - Within a Few Days</SelectItem>
                  <SelectItem value="standard">Standard - Within a Week</SelectItem>
                  <SelectItem value="exploring">Just Exploring Options</SelectItem>
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
      
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${evaluationHero})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <FileText className="w-16 h-16 mx-auto mb-4 text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Free Swimming Pool Accident Case Evaluation
            </h1>
            <p className="text-xl">
              Get expert legal advice about your swimming pool accident case - completely free and confidential
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="form-content">
          
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium">Step {currentStep} of {totalSteps}</span>
              <span className="text-sm text-muted-foreground">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          {/* Form Card */}
          <Card className="form-card">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit}>
                {renderStepContent()}
                
                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t">
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
                      Next Step
                    </Button>
                  ) : (
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="bg-red-600 hover:bg-red-700"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Submit Case Evaluation
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="mt-8 border-primary bg-primary/5">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Need to Speak with Someone Immediately?</h3>
                <p className="text-muted-foreground mb-4">
                  If your case is urgent or you prefer to speak directly with an attorney, 
                  call us now for immediate assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="tel:(818) 123-4567">
                      <Phone className="w-5 h-5 mr-2" />
                      Call (818) 123-4567
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="mailto:info@trembachlaw.com">
                      <Mail className="w-5 h-5 mr-2" />
                      Email Us
                    </a>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Available 24/7 • Free Consultation • No Fee Unless We Win
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SwimmingPoolCaseEvaluation;