import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Phone, 
  Mail, 
  FileText, 
  Shield, 
  Clock, 
  CheckCircle, 
  User, 
  MapPin, 
  Calendar,
  Stethoscope,
  AlertTriangle,
  Info
} from 'lucide-react';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';
import heroBackground from '@/assets/paralysis-case-evaluation-hero.jpg';

const ParalysisCaseEvaluation: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    
    // Paralysis Details
    paralysisType: '',
    injuryDate: '',
    causeOfInjury: '',
    accidentLocation: '',
    immediateSymptoms: '',
    currentCondition: '',
    mobilityLevel: '',
    hospitalTreatment: '',
    surgeries: '',
    ongoingTreatment: '',
    
    // Medical Information
    treatingPhysician: '',
    hospitalName: '',
    medicalRecords: '',
    prognosis: '',
    lifeExpectancy: '',
    cognitiveFunction: '',
    
    // Economic Impact
    occupation: '',
    annualIncome: '',
    employmentStatus: '',
    workImpact: '',
    modificationCosts: '',
    caregiverNeeds: '',
    
    // Legal Information
    previousClaims: '',
    insuranceCarrier: '',
    attorneyRepresentation: '',
    witnesses: '',
    incidentReport: '',
    
    // Additional Information
    familyImpact: '',
    qualityOfLife: '',
    additionalDetails: '',
    urgency: '',
    preferredContact: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  
  const totalSteps = 5;
  const progressPercentage = (currentStep / totalSteps) * 100;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );
    });
    return () => ctx.revert();
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    alert('Thank you! Your case evaluation has been submitted. We will contact you within 24 hours.');
    
    // Redirect or reset form
    setCurrentStep(1);
    setFormData({} as any);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Personal Information</h3>
              <p className="text-muted-foreground">Please provide your contact and basic information</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">First Name *</label>
                <Input
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name *</label>
                <Input
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  placeholder="Enter your last name"
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
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number *</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="(555) 123-4567"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Date of Birth *</label>
              <Input
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Address</label>
              <Input
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                placeholder="Street address"
              />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="col-span-2">
                <label className="block text-sm font-medium mb-2">City</label>
                <Input
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  placeholder="City"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">State</label>
                <Select value={formData.state} onValueChange={(value) => handleInputChange('state', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="State" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="CA">California</SelectItem>
                    <SelectItem value="other">Other State</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">ZIP</label>
                <Input
                  value={formData.zipCode}
                  onChange={(e) => handleInputChange('zipCode', e.target.value)}
                  placeholder="ZIP"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Paralysis & Injury Details</h3>
              <p className="text-muted-foreground">Help us understand your condition and circumstances</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Type of Paralysis *</label>
                <Select value={formData.paralysisType} onValueChange={(value) => handleInputChange('paralysisType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select paralysis type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="quadriplegia">Quadriplegia (Tetraplegia)</SelectItem>
                    <SelectItem value="paraplegia">Paraplegia</SelectItem>
                    <SelectItem value="hemiplegia">Hemiplegia</SelectItem>
                    <SelectItem value="monoplegia">Monoplegia</SelectItem>
                    <SelectItem value="incomplete">Incomplete Paralysis</SelectItem>
                    <SelectItem value="temporary">Temporary Paralysis</SelectItem>
                    <SelectItem value="progressive">Progressive Paralysis</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Date of Injury *</label>
                <Input
                  type="date"
                  value={formData.injuryDate}
                  onChange={(e) => handleInputChange('injuryDate', e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Primary Cause of Paralysis *</label>
              <Select value={formData.causeOfInjury} onValueChange={(value) => handleInputChange('causeOfInjury', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select cause of injury" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="motor-vehicle">Motor Vehicle Accident</SelectItem>
                  <SelectItem value="motorcycle">Motorcycle Accident</SelectItem>
                  <SelectItem value="fall">Fall or Slip Accident</SelectItem>
                  <SelectItem value="sports">Sports Injury</SelectItem>
                  <SelectItem value="diving">Diving Accident</SelectItem>
                  <SelectItem value="workplace">Workplace Accident</SelectItem>
                  <SelectItem value="violence">Violence/Assault</SelectItem>
                  <SelectItem value="medical">Medical Malpractice</SelectItem>
                  <SelectItem value="birth">Birth Injury</SelectItem>
                  <SelectItem value="infection">Infection/Disease</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Location Where Injury Occurred</label>
              <Input
                value={formData.accidentLocation}
                onChange={(e) => handleInputChange('accidentLocation', e.target.value)}
                placeholder="Describe where the injury occurred"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Current Mobility Level</label>
              <Select value={formData.mobilityLevel} onValueChange={(value) => handleInputChange('mobilityLevel', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select current mobility" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="complete-wheelchair">Wheelchair Dependent (Complete)</SelectItem>
                  <SelectItem value="partial-wheelchair">Wheelchair Dependent (Partial)</SelectItem>
                  <SelectItem value="walker">Walker/Mobility Aid</SelectItem>
                  <SelectItem value="crutches">Crutches/Canes</SelectItem>
                  <SelectItem value="limited-walking">Limited Walking Ability</SelectItem>
                  <SelectItem value="bedridden">Bedridden</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Current Condition Description</label>
              <Textarea
                value={formData.currentCondition}
                onChange={(e) => handleInputChange('currentCondition', e.target.value)}
                placeholder="Describe your current physical condition, limitations, and daily challenges..."
                rows={4}
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Medical Information</h3>
              <p className="text-muted-foreground">Details about your medical care and treatment</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Primary Treating Physician</label>
                <Input
                  value={formData.treatingPhysician}
                  onChange={(e) => handleInputChange('treatingPhysician', e.target.value)}
                  placeholder="Doctor's name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Hospital/Medical Center</label>
                <Input
                  value={formData.hospitalName}
                  onChange={(e) => handleInputChange('hospitalName', e.target.value)}
                  placeholder="Hospital or clinic name"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Surgeries Received</label>
              <Textarea
                value={formData.surgeries}
                onChange={(e) => handleInputChange('surgeries', e.target.value)}
                placeholder="List any surgeries, dates, and outcomes..."
                rows={3}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Ongoing Medical Treatment</label>
              <Textarea
                value={formData.ongoingTreatment}
                onChange={(e) => handleInputChange('ongoingTreatment', e.target.value)}
                placeholder="Physical therapy, medications, assistive devices, etc..."
                rows={3}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Medical Prognosis</label>
              <Select value={formData.prognosis} onValueChange={(value) => handleInputChange('prognosis', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select prognosis" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="permanent">Permanent Paralysis</SelectItem>
                  <SelectItem value="limited-recovery">Limited Recovery Expected</SelectItem>
                  <SelectItem value="gradual-improvement">Gradual Improvement Possible</SelectItem>
                  <SelectItem value="uncertain">Uncertain Prognosis</SelectItem>
                  <SelectItem value="degenerative">Progressive/Degenerative</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Cognitive Function</label>
              <Select value={formData.cognitiveFunction} onValueChange={(value) => handleInputChange('cognitiveFunction', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select cognitive status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="normal">Normal Cognitive Function</SelectItem>
                  <SelectItem value="mild-impairment">Mild Cognitive Impairment</SelectItem>
                  <SelectItem value="moderate-impairment">Moderate Cognitive Impairment</SelectItem>
                  <SelectItem value="severe-impairment">Severe Cognitive Impairment</SelectItem>
                  <SelectItem value="traumatic-brain">Traumatic Brain Injury</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Economic Impact</h3>
              <p className="text-muted-foreground">Information about financial and employment impacts</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Occupation Before Injury</label>
                <Input
                  value={formData.occupation}
                  onChange={(e) => handleInputChange('occupation', e.target.value)}
                  placeholder="Your job title/profession"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Annual Income Before Injury</label>
                <Select value={formData.annualIncome} onValueChange={(value) => handleInputChange('annualIncome', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select income range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-30k">Under $30,000</SelectItem>
                    <SelectItem value="30k-50k">$30,000 - $50,000</SelectItem>
                    <SelectItem value="50k-75k">$50,000 - $75,000</SelectItem>
                    <SelectItem value="75k-100k">$75,000 - $100,000</SelectItem>
                    <SelectItem value="100k-150k">$100,000 - $150,000</SelectItem>
                    <SelectItem value="over-150k">Over $150,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Current Employment Status</label>
              <Select value={formData.employmentStatus} onValueChange={(value) => handleInputChange('employmentStatus', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select current status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="unable-to-work">Unable to Work</SelectItem>
                  <SelectItem value="limited-work">Limited Work Capacity</SelectItem>
                  <SelectItem value="modified-duties">Modified Work Duties</SelectItem>
                  <SelectItem value="unemployed">Unemployed</SelectItem>
                  <SelectItem value="retired-early">Early Retirement</SelectItem>
                  <SelectItem value="disability-benefits">Receiving Disability</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Home Modifications Needed/Made</label>
              <Textarea
                value={formData.modificationCosts}
                onChange={(e) => handleInputChange('modificationCosts', e.target.value)}
                placeholder="Ramps, bathroom modifications, stair lifts, doorway widening, etc..."
                rows={3}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Caregiver Requirements</label>
              <Select value={formData.caregiverNeeds} onValueChange={(value) => handleInputChange('caregiverNeeds', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select care needs" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="24-7-care">24/7 Professional Care</SelectItem>
                  <SelectItem value="daily-assistance">Daily Assistance Needed</SelectItem>
                  <SelectItem value="part-time-care">Part-time Care</SelectItem>
                  <SelectItem value="family-care">Family Provides Care</SelectItem>
                  <SelectItem value="minimal-assistance">Minimal Assistance</SelectItem>
                  <SelectItem value="independent">Largely Independent</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Impact on Quality of Life</label>
              <Textarea
                value={formData.qualityOfLife}
                onChange={(e) => handleInputChange('qualityOfLife', e.target.value)}
                placeholder="Describe how paralysis has affected your daily life, relationships, and activities..."
                rows={4}
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Legal & Final Details</h3>
              <p className="text-muted-foreground">Complete your case evaluation</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Insurance Coverage at Time of Injury</label>
              <Input
                value={formData.insuranceCarrier}
                onChange={(e) => handleInputChange('insuranceCarrier', e.target.value)}
                placeholder="Insurance company name and policy details"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Previous Legal Representation</label>
              <Select value={formData.attorneyRepresentation} onValueChange={(value) => handleInputChange('attorneyRepresentation', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Previous attorney involvement" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No Previous Attorney</SelectItem>
                  <SelectItem value="consulted">Consulted Attorney</SelectItem>
                  <SelectItem value="represented">Currently Represented</SelectItem>
                  <SelectItem value="settled">Previous Settlement</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Witnesses to the Incident</label>
              <Textarea
                value={formData.witnesses}
                onChange={(e) => handleInputChange('witnesses', e.target.value)}
                placeholder="Names and contact information of any witnesses..."
                rows={3}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Additional Information</label>
              <Textarea
                value={formData.additionalDetails}
                onChange={(e) => handleInputChange('additionalDetails', e.target.value)}
                placeholder="Any other relevant information about your case..."
                rows={4}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Case Urgency</label>
              <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="How urgent is your case?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediate">Immediate Attention Needed</SelectItem>
                  <SelectItem value="urgent">Urgent - Within Days</SelectItem>
                  <SelectItem value="standard">Standard Review</SelectItem>
                  <SelectItem value="information">Information Only</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Preferred Contact Method</label>
              <Select value={formData.preferredContact} onValueChange={(value) => handleInputChange('preferredContact', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="How should we contact you?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="phone">Phone Call</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="text">Text Message</SelectItem>
                  <SelectItem value="video">Video Call</SelectItem>
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
        title="Free Paralysis Case Evaluation - California Spinal Cord Injury Lawyers"
        description="Get a free evaluation for your paralysis case in California. Our experienced spinal cord injury attorneys will review your case and help determine compensation options."
        keywords="paralysis case evaluation, spinal cord injury lawyer, California paralysis attorney, quadriplegia lawyer, paraplegia attorney"
      />

      <GoBack />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat hero-content"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Free Paralysis Case Evaluation
            </h1>
            <p className="text-xl mb-6 text-white">
              Comprehensive evaluation of your spinal cord injury claim by experienced California attorneys
            </p>
            <div className="flex items-center justify-center space-x-6">
              <Badge variant="secondary" className="bg-green-600 text-white px-4 py-2">
                <Clock className="w-4 h-4 mr-2" />
                24-48 Hour Response
              </Badge>
              <Badge variant="secondary" className="bg-blue-600 text-white px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                No Fees Unless We Win
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-foreground">Case Evaluation Progress</h2>
            <span className="text-lg font-medium text-muted-foreground">
              Step {currentStep} of {totalSteps}
            </span>
          </div>
          <Progress value={progressPercentage} className="h-3" />
        </div>

        {/* Step Indicators */}
        <div className="flex justify-between mb-8">
          {[1, 2, 3, 4, 5].map((step) => (
            <div key={step} className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                step < currentStep ? 'bg-green-600 text-white' :
                step === currentStep ? 'bg-primary text-primary-foreground' :
                'bg-muted text-muted-foreground'
              }`}>
                {step < currentStep ? <CheckCircle className="w-6 h-6" /> : step}
              </div>
              <span className="text-xs mt-2 text-center max-w-20">
                {step === 1 ? 'Personal' :
                 step === 2 ? 'Injury' :
                 step === 3 ? 'Medical' :
                 step === 4 ? 'Economic' :
                 'Legal'}
              </span>
            </div>
          ))}
        </div>

        {/* Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="w-6 h-6 mr-2" />
              Paralysis Case Evaluation Form
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              {renderStepContent()}
              
              <Separator className="my-8" />
              
              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="px-8"
                >
                  Previous
                </Button>
                
                {currentStep === totalSteps ? (
                  <Button
                    type="submit"
                    className="px-8 bg-green-600 hover:bg-green-700 text-white"
                  >
                    Submit Case Evaluation
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="px-8"
                  >
                    Continue
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-green-600" />
                <div>
                  <p className="font-medium">Call Now</p>
                  <p className="text-sm text-muted-foreground">(818) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-600" />
                <div>
                  <p className="font-medium">Email Us</p>
                  <p className="text-sm text-muted-foreground">24/7 Response</p>
                </div>
              </div>
              <div className="flex items-center">
                <Info className="w-5 h-5 mr-3 text-orange-600" />
                <div>
                  <p className="font-medium">Free Consultation</p>
                  <p className="text-sm text-muted-foreground">No Obligation</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Legal Disclaimer */}
        <div className="mt-8 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Disclaimer:</strong> Submission of this form does not create an attorney-client relationship. 
            Information submitted is confidential. Our attorneys will review your case and contact you within 
            24-48 hours to discuss your legal options. No fees are charged unless we successfully recover 
            compensation for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParalysisCaseEvaluation;