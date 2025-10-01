import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Shield, Clock, Star, Phone } from 'lucide-react';
import heroImage from '@/assets/case-evaluation-hero.jpg';
import SEO from '@/components/SEO';
import ThreeDVisualEffects from '@/components/ThreeDVisualEffects';
import '@/styles/premium-3d-effects.css';

const CarCaseEvaluation = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: 'CA',
    zipCode: '',
    
    // Accident Information
    accidentDate: '',
    accidentTime: '',
    accidentLocation: '',
    accidentDescription: '',
    policeReport: '',
    
    // Vehicle Information
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    vehicleDamage: '',
    
    // Injury Information
    injuryType: '',
    hospitalTreatment: '',
    currentTreatment: '',
    priorInjuries: '',
    
    // Insurance Information
    hasInsurance: '',
    insuranceCompany: '',
    policyNumber: '',
    otherDriverInsurance: '',
    
    // Employment Information
    employer: '',
    occupation: '',
    timeOffWork: '',
    lostWages: '',
    
    // Legal Information
    hasAttorney: '',
    previousClaim: '',
    
    // Consent
    consent: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Car accident case evaluation submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Free Car Accident Case Evaluation | California Auto Accident Lawyer"
        description="Get a free, confidential evaluation of your California car accident case. Former defense attorney now fighting for accident victims. Quick response guaranteed."
        canonical="/car-case-evaluation"
      />

      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Free Car Accident Case Evaluation
          </h1>
          <p className="text-xl mb-6">
            Get expert legal assessment of your California car accident case
          </p>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 mb-2" />
              <span className="font-semibold">100% Confidential</span>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 mb-2" />
              <span className="font-semibold">Quick Response</span>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-8 h-8 mb-2" />
              <span className="font-semibold">No Obligation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 premium-form-container interactive-card">
            <h2 className="text-2xl font-bold mb-6 text-center text-blue-600 font-display">Car Accident Case Evaluation Form</h2>
            <p className="text-muted-foreground mb-8 text-center">
              Please provide as much detail as possible to help us evaluate your case accurately.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
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
                  <div>
                    <Label htmlFor="email">Email *</Label>
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
                    <Label htmlFor="address">Address</Label>
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
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange('zipCode', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Accident Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Accident Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="accidentDate">Date of Accident *</Label>
                    <Input
                      id="accidentDate"
                      type="date"
                      value={formData.accidentDate}
                      onChange={(e) => handleInputChange('accidentDate', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="accidentTime">Approximate Time</Label>
                    <Input
                      id="accidentTime"
                      type="time"
                      value={formData.accidentTime}
                      onChange={(e) => handleInputChange('accidentTime', e.target.value)}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="accidentLocation">Accident Location *</Label>
                    <Input
                      id="accidentLocation"
                      placeholder="Street address, intersection, or highway"
                      value={formData.accidentLocation}
                      onChange={(e) => handleInputChange('accidentLocation', e.target.value)}
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="accidentDescription">Describe What Happened *</Label>
                    <Textarea
                      id="accidentDescription"
                      placeholder="Please provide details about how the accident occurred"
                      value={formData.accidentDescription}
                      onChange={(e) => handleInputChange('accidentDescription', e.target.value)}
                      required
                      rows={4}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="policeReport">Police Report Number (if available)</Label>
                    <Input
                      id="policeReport"
                      value={formData.policeReport}
                      onChange={(e) => handleInputChange('policeReport', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Injury Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Injury Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <Label htmlFor="injuryType">Type of Injuries *</Label>
                    <Select value={formData.injuryType} onValueChange={(value) => handleInputChange('injuryType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select primary injury type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="whiplash">Whiplash/Neck Injury</SelectItem>
                        <SelectItem value="back-injury">Back Injury</SelectItem>
                        <SelectItem value="broken-bones">Broken Bones</SelectItem>
                        <SelectItem value="head-injury">Head/Brain Injury</SelectItem>
                        <SelectItem value="internal-injuries">Internal Injuries</SelectItem>
                        <SelectItem value="soft-tissue">Soft Tissue Injury</SelectItem>
                        <SelectItem value="multiple">Multiple Injuries</SelectItem>
                        <SelectItem value="no-injury">No Apparent Injury</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="hospitalTreatment">Did you receive emergency medical treatment?</Label>
                    <Select value={formData.hospitalTreatment} onValueChange={(value) => handleInputChange('hospitalTreatment', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="emergency-room">Emergency Room</SelectItem>
                        <SelectItem value="ambulance">Ambulance to Hospital</SelectItem>
                        <SelectItem value="urgent-care">Urgent Care</SelectItem>
                        <SelectItem value="doctor-visit">Doctor Visit Later</SelectItem>
                        <SelectItem value="no-treatment">No Medical Treatment</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="currentTreatment">Are you currently receiving treatment?</Label>
                    <Textarea
                      id="currentTreatment"
                      placeholder="Describe current treatments, doctors, physical therapy, etc."
                      value={formData.currentTreatment}
                      onChange={(e) => handleInputChange('currentTreatment', e.target.value)}
                      rows={3}
                    />
                  </div>
                </div>
              </div>

              {/* Insurance Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Insurance Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <Label htmlFor="hasInsurance">Do you have auto insurance?</Label>
                    <Select value={formData.hasInsurance} onValueChange={(value) => handleInputChange('hasInsurance', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                        <SelectItem value="unsure">Unsure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="insuranceCompany">Your Insurance Company</Label>
                    <Input
                      id="insuranceCompany"
                      value={formData.insuranceCompany}
                      onChange={(e) => handleInputChange('insuranceCompany', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="policyNumber">Policy Number</Label>
                    <Input
                      id="policyNumber"
                      value={formData.policyNumber}
                      onChange={(e) => handleInputChange('policyNumber', e.target.value)}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="otherDriverInsurance">Other Driver's Insurance (if known)</Label>
                    <Input
                      id="otherDriverInsurance"
                      value={formData.otherDriverInsurance}
                      onChange={(e) => handleInputChange('otherDriverInsurance', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Employment Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Employment Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="employer">Current Employer</Label>
                    <Input
                      id="employer"
                      value={formData.employer}
                      onChange={(e) => handleInputChange('employer', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="occupation">Occupation</Label>
                    <Input
                      id="occupation"
                      value={formData.occupation}
                      onChange={(e) => handleInputChange('occupation', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="timeOffWork">Time Off Work Due to Accident</Label>
                    <Input
                      id="timeOffWork"
                      placeholder="Number of days/weeks"
                      value={formData.timeOffWork}
                      onChange={(e) => handleInputChange('timeOffWork', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lostWages">Estimated Lost Wages</Label>
                    <Input
                      id="lostWages"
                      placeholder="Dollar amount"
                      value={formData.lostWages}
                      onChange={(e) => handleInputChange('lostWages', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Legal Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal Information</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <Label htmlFor="hasAttorney">Do you currently have an attorney for this accident?</Label>
                    <Select value={formData.hasAttorney} onValueChange={(value) => handleInputChange('hasAttorney', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="no">No</SelectItem>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="considering">Considering Options</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="previousClaim">Have you filed any insurance claims or lawsuits for this accident?</Label>
                    <Select value={formData.previousClaim} onValueChange={(value) => handleInputChange('previousClaim', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="no">No</SelectItem>
                        <SelectItem value="insurance-only">Insurance Claim Only</SelectItem>
                        <SelectItem value="lawsuit">Lawsuit Filed</SelectItem>
                        <SelectItem value="settled">Case Settled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Consent */}
              <div className="border-t pt-6">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => handleInputChange('consent', checked as boolean)}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="consent" className="text-sm leading-relaxed">
                      I consent to Trembach Law Firm contacting me regarding my potential case. I understand this 
                      consultation is free and confidential, and I am under no obligation to hire the firm. 
                      I understand that submitting this form does not create an attorney-client relationship.
                    </Label>
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-red-600 hover:bg-red-700 text-lg py-6"
                disabled={!formData.consent}
              >
                Submit My Free Case Evaluation
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Prefer to speak with someone immediately?
            </p>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <a href="tel:8181234567">
                <Phone className="w-5 h-5 mr-2" />
                Call (818) 123-4567 Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarCaseEvaluation;