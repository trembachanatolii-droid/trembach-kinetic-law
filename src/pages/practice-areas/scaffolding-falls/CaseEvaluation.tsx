import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';
import scaffoldingHeroImage from '@/assets/scaffolding-case-evaluation-hero.jpg';

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
  
  // Incident Details
  incidentDate: string;
  incidentLocation: string;
  incidentDescription: string;
  scaffoldingType: string;
  heightOfFall: string;
  safetyEquipmentProvided: string;
  safetyTrainingReceived: string;
  witnessesPresent: string;
  
  // Injury Information
  injuriesReceived: string;
  medicalTreatment: string;
  currentMedicalStatus: string;
  hospitalization: string;
  ongoingTreatment: string;
  
  // Employment Details
  employer: string;
  jobTitle: string;
  employmentDuration: string;
  dailyWages: string;
  workingConditions: string;
  
  // Legal Information
  reportedToEmployer: string;
  reportedToOSHA: string;
  previousLegalAction: string;
  insuranceClaim: string;
  
  // Consent
  consentToContact: boolean;
}

const ScaffoldingFallsCaseEvaluation: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    incidentDate: '',
    incidentLocation: '',
    incidentDescription: '',
    scaffoldingType: '',
    heightOfFall: '',
    safetyEquipmentProvided: '',
    safetyTrainingReceived: '',
    witnessesPresent: '',
    injuriesReceived: '',
    medicalTreatment: '',
    currentMedicalStatus: '',
    hospitalization: '',
    ongoingTreatment: '',
    employer: '',
    jobTitle: '',
    employmentDuration: '',
    dailyWages: '',
    workingConditions: '',
    reportedToEmployer: '',
    reportedToOSHA: '',
    previousLegalAction: '',
    insuranceClaim: '',
    consentToContact: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Removed GSAP animations for immediate form visibility
    return () => {};
  }, []);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Scaffolding Falls Case Evaluation Submitted:', formData);
    
    // Create email body
    const emailBody = `
Scaffolding Falls Case Evaluation

Personal Information:
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}, ${formData.city}, ${formData.state} ${formData.zipCode}

Incident Details:
Date: ${formData.incidentDate}
Location: ${formData.incidentLocation}
Description: ${formData.incidentDescription}
Scaffolding Type: ${formData.scaffoldingType}
Height of Fall: ${formData.heightOfFall}
Safety Equipment Provided: ${formData.safetyEquipmentProvided}
Safety Training Received: ${formData.safetyTrainingReceived}
Witnesses Present: ${formData.witnessesPresent}

Injury Information:
Injuries: ${formData.injuriesReceived}
Medical Treatment: ${formData.medicalTreatment}
Current Status: ${formData.currentMedicalStatus}
Hospitalization: ${formData.hospitalization}
Ongoing Treatment: ${formData.ongoingTreatment}

Employment Details:
Employer: ${formData.employer}
Job Title: ${formData.jobTitle}
Employment Duration: ${formData.employmentDuration}
Daily Wages: ${formData.dailyWages}
Working Conditions: ${formData.workingConditions}

Legal Information:
Reported to Employer: ${formData.reportedToEmployer}
Reported to OSHA: ${formData.reportedToOSHA}
Previous Legal Action: ${formData.previousLegalAction}
Insurance Claim: ${formData.insuranceClaim}
    `;

    const emailSubject = 'Scaffolding Falls Case Evaluation - ' + formData.firstName + ' ' + formData.lastName;
    const mailtoLink = `mailto:info@trembachlawfirm.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    window.open(mailtoLink);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <SEO
          title="Case Evaluation Submitted - Scaffolding Falls Attorney"
          description="Your scaffolding falls case evaluation has been submitted. Our experienced attorneys will review your case."
          canonical="https://www.trembachlawfirm.com/practice-areas/scaffolding-falls/case-evaluation"
        />
        
        <GoBack className="container mx-auto px-8 pt-8" />
        
        <div className="container mx-auto px-8 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="p-8">
              <h1 className="text-3xl font-bold mb-4 text-green-600">Thank You!</h1>
              <p className="text-lg mb-6">
                Your scaffolding falls case evaluation has been submitted successfully. 
                Our experienced attorneys will review your information and contact you soon.
              </p>
              <Button 
                onClick={() => window.location.href = '/practice-areas/scaffolding-falls'}
                className="text-lg px-8 py-3"
              >
                Return to Scaffolding Falls Information
              </Button>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Free Scaffolding Falls Case Evaluation - California Attorney"
        description="Get a free case evaluation for your scaffolding falls accident. Experienced California attorneys ready to help with your injury claim."
        canonical="https://www.trembachlawfirm.com/practice-areas/scaffolding-falls/case-evaluation"
        keywords="scaffolding falls case evaluation, construction accident lawyer, scaffolding injury attorney, California construction accident"
      />

      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: `url(${scaffoldingHeroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Free Scaffolding Falls Case Evaluation
          </h1>
          <p className="text-xl md:text-2xl text-white mb-6">
            Get Expert Legal Assessment for Your Construction Accident
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Our experienced attorneys will review your scaffolding falls case at no cost. 
            Complete this confidential evaluation to understand your legal rights and potential compensation.
          </p>
        </div>
      </section>

      <GoBack className="container mx-auto px-8 pt-8" />

      {/* Key Benefits */}
      <section ref={sectionRef} className="container mx-auto px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center">
              <h3 className="text-xl font-bold mb-3">100% Free</h3>
              <p className="text-muted-foreground">No cost for case evaluation. No fees unless we win your case.</p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-xl font-bold mb-3">Confidential</h3>
              <p className="text-muted-foreground">Your information is protected and will only be used for case assessment.</p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-xl font-bold mb-3">Expert Review</h3>
              <p className="text-muted-foreground">Experienced scaffolding accident attorneys will evaluate your case.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Form */}
      <section className="container mx-auto px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              
              {/* Personal Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
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
                  <div className="md:col-span-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                    />
                  </div>
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
                    <Select onValueChange={(value) => handleInputChange('state', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="CA">California</SelectItem>
                        <SelectItem value="NY">New York</SelectItem>
                        <SelectItem value="TX">Texas</SelectItem>
                        <SelectItem value="FL">Florida</SelectItem>
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

              {/* Incident Details */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Incident Details</h2>
                <div className="grid md:grid-cols-2 gap-6">
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
                    <Label htmlFor="incidentLocation">Location of Incident *</Label>
                    <Input
                      id="incidentLocation"
                      value={formData.incidentLocation}
                      onChange={(e) => handleInputChange('incidentLocation', e.target.value)}
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="incidentDescription">Describe What Happened *</Label>
                    <Textarea
                      id="incidentDescription"
                      value={formData.incidentDescription}
                      onChange={(e) => handleInputChange('incidentDescription', e.target.value)}
                      rows={4}
                      required
                    />
                  </div>
                  <div>
                    <Label>Type of Scaffolding</Label>
                    <Select onValueChange={(value) => handleInputChange('scaffoldingType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select scaffolding type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="frame">Frame Scaffolding</SelectItem>
                        <SelectItem value="system">System Scaffolding</SelectItem>
                        <SelectItem value="suspended">Suspended Scaffolding</SelectItem>
                        <SelectItem value="rolling">Rolling Scaffolding</SelectItem>
                        <SelectItem value="cantilever">Cantilever Scaffolding</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Height of Fall</Label>
                    <Select onValueChange={(value) => handleInputChange('heightOfFall', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select height" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-6ft">0-6 feet</SelectItem>
                        <SelectItem value="6-12ft">6-12 feet</SelectItem>
                        <SelectItem value="12-20ft">12-20 feet</SelectItem>
                        <SelectItem value="20-30ft">20-30 feet</SelectItem>
                        <SelectItem value="30ft+">Over 30 feet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Safety Equipment Provided</Label>
                    <Select onValueChange={(value) => handleInputChange('safetyEquipmentProvided', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes-adequate">Yes - Adequate</SelectItem>
                        <SelectItem value="yes-inadequate">Yes - Inadequate</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                        <SelectItem value="unknown">Unknown</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Safety Training Received</Label>
                    <Select onValueChange={(value) => handleInputChange('safetyTrainingReceived', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="comprehensive">Comprehensive Training</SelectItem>
                        <SelectItem value="basic">Basic Training</SelectItem>
                        <SelectItem value="minimal">Minimal Training</SelectItem>
                        <SelectItem value="none">No Training</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Witnesses Present</Label>
                    <Select onValueChange={(value) => handleInputChange('witnessesPresent', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes-multiple">Yes - Multiple Witnesses</SelectItem>
                        <SelectItem value="yes-one">Yes - One Witness</SelectItem>
                        <SelectItem value="no">No Witnesses</SelectItem>
                        <SelectItem value="unknown">Unknown</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Injury Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Injury Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <Label htmlFor="injuriesReceived">Injuries Received *</Label>
                    <Textarea
                      id="injuriesReceived"
                      value={formData.injuriesReceived}
                      onChange={(e) => handleInputChange('injuriesReceived', e.target.value)}
                      rows={3}
                      required
                    />
                  </div>
                  <div>
                    <Label>Medical Treatment Received</Label>
                    <Select onValueChange={(value) => handleInputChange('medicalTreatment', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select treatment" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="emergency-room">Emergency Room</SelectItem>
                        <SelectItem value="urgent-care">Urgent Care</SelectItem>
                        <SelectItem value="doctor-office">Doctor's Office</SelectItem>
                        <SelectItem value="none">No Medical Treatment</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Current Medical Status</Label>
                    <Select onValueChange={(value) => handleInputChange('currentMedicalStatus', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fully-recovered">Fully Recovered</SelectItem>
                        <SelectItem value="partially-recovered">Partially Recovered</SelectItem>
                        <SelectItem value="ongoing-treatment">Ongoing Treatment</SelectItem>
                        <SelectItem value="permanent-disability">Permanent Disability</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Hospitalization Required</Label>
                    <Select onValueChange={(value) => handleInputChange('hospitalization', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes-overnight">Yes - Overnight Stay</SelectItem>
                        <SelectItem value="yes-extended">Yes - Extended Stay</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Ongoing Treatment</Label>
                    <Select onValueChange={(value) => handleInputChange('ongoingTreatment', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="physical-therapy">Physical Therapy</SelectItem>
                        <SelectItem value="surgery-needed">Surgery Needed</SelectItem>
                        <SelectItem value="medication">Medication</SelectItem>
                        <SelectItem value="none">None</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Employment Details */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Employment Details</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="employer">Employer Name</Label>
                    <Input
                      id="employer"
                      value={formData.employer}
                      onChange={(e) => handleInputChange('employer', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="jobTitle">Job Title/Position</Label>
                    <Input
                      id="jobTitle"
                      value={formData.jobTitle}
                      onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label>Employment Duration</Label>
                    <Select onValueChange={(value) => handleInputChange('employmentDuration', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="less-1-month">Less than 1 month</SelectItem>
                        <SelectItem value="1-6-months">1-6 months</SelectItem>
                        <SelectItem value="6-12-months">6-12 months</SelectItem>
                        <SelectItem value="1-5-years">1-5 years</SelectItem>
                        <SelectItem value="5-plus-years">5+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="dailyWages">Daily Wages</Label>
                    <Input
                      id="dailyWages"
                      value={formData.dailyWages}
                      onChange={(e) => handleInputChange('dailyWages', e.target.value)}
                      placeholder="$"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="workingConditions">Working Conditions</Label>
                    <Textarea
                      id="workingConditions"
                      value={formData.workingConditions}
                      onChange={(e) => handleInputChange('workingConditions', e.target.value)}
                      rows={3}
                    />
                  </div>
                </div>
              </div>

              {/* Legal Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Legal Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label>Reported to Employer</Label>
                    <Select onValueChange={(value) => handleInputChange('reportedToEmployer', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes-immediately">Yes - Immediately</SelectItem>
                        <SelectItem value="yes-delayed">Yes - After Delay</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Reported to OSHA</Label>
                    <Select onValueChange={(value) => handleInputChange('reportedToOSHA', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                        <SelectItem value="unknown">Unknown</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Previous Legal Action</Label>
                    <Select onValueChange={(value) => handleInputChange('previousLegalAction', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        <SelectItem value="consulting">Currently Consulting</SelectItem>
                        <SelectItem value="filed">Legal Action Filed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Insurance Claim Filed</Label>
                    <Select onValueChange={(value) => handleInputChange('insuranceClaim', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes-approved">Yes - Approved</SelectItem>
                        <SelectItem value="yes-pending">Yes - Pending</SelectItem>
                        <SelectItem value="yes-denied">Yes - Denied</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Consent */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Consent</h2>
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="consent"
                    checked={formData.consentToContact}
                    onCheckedChange={(checked) => handleInputChange('consentToContact', !!checked)}
                  />
                  <Label htmlFor="consent" className="text-sm leading-relaxed">
                    I consent to be contacted by Trembach Law Firm regarding my potential case. 
                    I understand that submitting this form does not create an attorney-client relationship 
                    and that my information will be kept confidential.
                  </Label>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="text-lg px-12 py-4"
                  disabled={!formData.consentToContact}
                >
                  Submit Case Evaluation
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Your information is confidential and secure. We'll contact you within 24 hours.
                </p>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="container mx-auto px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Why Choose Our Firm?</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Specialized in scaffolding accident cases</li>
                <li>• No fees unless we win your case</li>
                <li>• Free case evaluation and consultation</li>
                <li>• Experienced with California construction law</li>
                <li>• Personalized attention to every case</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">What Happens Next?</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• We review your case information</li>
                <li>• Schedule a free consultation</li>
                <li>• Investigate your accident</li>
                <li>• Determine the best legal strategy</li>
                <li>• Fight for maximum compensation</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScaffoldingFallsCaseEvaluation;