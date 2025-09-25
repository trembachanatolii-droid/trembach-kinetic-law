import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, Clock, Shield, Users, Award } from 'lucide-react';
import GoBack from '@/components/GoBack';
import useScrollRestoration from '@/hooks/useScrollRestoration';
import heroBackground from '@/assets/personal-injury-case-evaluation-hero.jpg';

const CaseEvaluation: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Basic Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Step 2: Accident Details
    injuryDate: '',
    injuryType: '',
    location: '',
    description: '',
    
    // Step 3: Injury & Medical Information
    injuriesSustained: [] as string[],
    medicalTreatment: '',
    hospitalStay: '',
    ongoingTreatment: '',
    
    // Step 4: Other Parties & Insurance
    otherParties: '',
    policeReport: '',
    insuranceCompany: '',
    contactedInsurance: '',
    
    // Step 5: Additional Information
    lostWages: '',
    propertyDamage: '',
    witnesses: '',
    additionalInfo: '',
    
    // Consent
    consent: false
  });

  useScrollRestoration();

  const totalSteps = 5;

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInjuryChange = (injury: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      injuriesSustained: checked 
        ? [...prev.injuriesSustained, injury]
        : prev.injuriesSustained.filter(i => i !== injury)
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Personal Injury Case Evaluation Submitted:', formData);
    // Handle form submission logic here
    alert('Thank you for your submission. Our team will contact you within 24 hours to discuss your personal injury case.');
  };

  const commonInjuries = [
    'Head/Brain Injury',
    'Neck Injury',
    'Back/Spine Injury',
    'Broken Bones',
    'Soft Tissue Injury',
    'Cuts/Lacerations',
    'Burns',
    'Internal Injuries',
    'Emotional Distress',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-background">
      <GoBack />
      
      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Free Personal Injury Case Evaluation
          </h1>
          <p className="text-xl mb-6 text-white">
            Get a comprehensive assessment of your personal injury case from experienced California attorneys
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Badge className="bg-green-600 text-white">
              <Clock className="w-4 h-4 mr-1" />
              Available 24/7
            </Badge>
            <Badge className="bg-blue-600 text-white">
              <Shield className="w-4 h-4 mr-1" />
              Completely Confidential
            </Badge>
            <Badge className="bg-purple-600 text-white">
              <Award className="w-4 h-4 mr-1" />
              No Obligation
            </Badge>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Step {currentStep} of {totalSteps}</h2>
            <span className="text-sm text-muted-foreground">
              {Math.round((currentStep / totalSteps) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-red-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>
                {currentStep === 1 && "Basic Information"}
                {currentStep === 2 && "Accident Details"}
                {currentStep === 3 && "Injury & Medical Information"}
                {currentStep === 4 && "Other Parties & Insurance"}
                {currentStep === 5 && "Additional Information & Consent"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Step 1: Basic Information */}
              {currentStep === 1 && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name *</label>
                      <Input
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name *</label>
                      <Input
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                        placeholder="Enter your last name"
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
                        required
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number *</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Step 2: Accident Details */}
              {currentStep === 2 && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Date of Injury/Accident *</label>
                      <Input
                        type="date"
                        value={formData.injuryDate}
                        onChange={(e) => handleInputChange('injuryDate', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Type of Accident *</label>
                      <Select value={formData.injuryType} onValueChange={(value) => handleInputChange('injuryType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select accident type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="car-accident">Car Accident</SelectItem>
                          <SelectItem value="motorcycle-accident">Motorcycle Accident</SelectItem>
                          <SelectItem value="truck-accident">Truck Accident</SelectItem>
                          <SelectItem value="slip-fall">Slip and Fall</SelectItem>
                          <SelectItem value="trip-fall">Trip and Fall</SelectItem>
                          <SelectItem value="medical-malpractice">Medical Malpractice</SelectItem>
                          <SelectItem value="product-liability">Product Liability</SelectItem>
                          <SelectItem value="workplace-injury">Workplace Injury</SelectItem>
                          <SelectItem value="dog-bite">Dog Bite</SelectItem>
                          <SelectItem value="assault">Assault</SelectItem>
                          <SelectItem value="bicycle-accident">Bicycle Accident</SelectItem>
                          <SelectItem value="pedestrian-accident">Pedestrian Accident</SelectItem>
                          <SelectItem value="wrongful-death">Wrongful Death</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Location of Accident</label>
                    <Input
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      placeholder="City, State or specific address"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Description of How the Accident Happened</label>
                    <Textarea
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      placeholder="Please provide details about what happened..."
                      rows={4}
                    />
                  </div>
                </>
              )}

              {/* Step 3: Injury & Medical Information */}
              {currentStep === 3 && (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-4">What injuries did you sustain? (Check all that apply)</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {commonInjuries.map((injury) => (
                        <div key={injury} className="flex items-center space-x-2">
                          <Checkbox
                            id={injury}
                            checked={formData.injuriesSustained.includes(injury)}
                            onCheckedChange={(checked) => handleInjuryChange(injury, checked as boolean)}
                          />
                          <label htmlFor={injury} className="text-sm">{injury}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Did you receive medical treatment?</label>
                    <Select value={formData.medicalTreatment} onValueChange={(value) => handleInputChange('medicalTreatment', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select treatment received" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="emergency-room">Emergency Room</SelectItem>
                        <SelectItem value="hospital-stay">Hospital Stay</SelectItem>
                        <SelectItem value="urgent-care">Urgent Care</SelectItem>
                        <SelectItem value="doctor-visit">Doctor Visit</SelectItem>
                        <SelectItem value="physical-therapy">Physical Therapy</SelectItem>
                        <SelectItem value="chiropractic">Chiropractic Care</SelectItem>
                        <SelectItem value="no-treatment">No Medical Treatment</SelectItem>
                        <SelectItem value="multiple">Multiple Types</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Were you hospitalized?</label>
                      <Select value={formData.hospitalStay} onValueChange={(value) => handleInputChange('hospitalStay', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="no">No</SelectItem>
                          <SelectItem value="1-day">1 Day</SelectItem>
                          <SelectItem value="2-3-days">2-3 Days</SelectItem>
                          <SelectItem value="4-7-days">4-7 Days</SelectItem>
                          <SelectItem value="1-2-weeks">1-2 Weeks</SelectItem>
                          <SelectItem value="more-than-2-weeks">More than 2 Weeks</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Are you still receiving treatment?</label>
                      <Select value={formData.ongoingTreatment} onValueChange={(value) => handleInputChange('ongoingTreatment', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes, ongoing treatment</SelectItem>
                          <SelectItem value="no">No, treatment completed</SelectItem>
                          <SelectItem value="need-more">Need additional treatment</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </>
              )}

              {/* Step 4: Other Parties & Insurance */}
              {currentStep === 4 && (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-2">Other parties involved in the accident</label>
                    <Textarea
                      value={formData.otherParties}
                      onChange={(e) => handleInputChange('otherParties', e.target.value)}
                      placeholder="Names, insurance companies, or other details about other parties involved..."
                      rows={3}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Was a police report filed?</label>
                      <Select value={formData.policeReport} onValueChange={(value) => handleInputChange('policeReport', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes-have-report">Yes, I have the report</SelectItem>
                          <SelectItem value="yes-no-report">Yes, but I don't have the report</SelectItem>
                          <SelectItem value="no">No police report</SelectItem>
                          <SelectItem value="unknown">I don't know</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Have you contacted any insurance companies?</label>
                      <Select value={formData.contactedInsurance} onValueChange={(value) => handleInputChange('contactedInsurance', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes-mine">Yes, my insurance company</SelectItem>
                          <SelectItem value="yes-theirs">Yes, the other party's insurance</SelectItem>
                          <SelectItem value="yes-both">Yes, both insurance companies</SelectItem>
                          <SelectItem value="no">No insurance contact</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Your insurance company (if applicable)</label>
                    <Input
                      value={formData.insuranceCompany}
                      onChange={(e) => handleInputChange('insuranceCompany', e.target.value)}
                      placeholder="Insurance company name"
                    />
                  </div>
                </>
              )}

              {/* Step 5: Additional Information */}
              {currentStep === 5 && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Lost wages or time from work?</label>
                      <Select value={formData.lostWages} onValueChange={(value) => handleInputChange('lostWages', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="no-time-lost">No time lost</SelectItem>
                          <SelectItem value="few-days">A few days</SelectItem>
                          <SelectItem value="1-2-weeks">1-2 weeks</SelectItem>
                          <SelectItem value="several-weeks">Several weeks</SelectItem>
                          <SelectItem value="months">Several months</SelectItem>
                          <SelectItem value="permanent">Permanent disability</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Property damage?</label>
                      <Select value={formData.propertyDamage} onValueChange={(value) => handleInputChange('propertyDamage', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="no-damage">No property damage</SelectItem>
                          <SelectItem value="minor-damage">Minor damage</SelectItem>
                          <SelectItem value="moderate-damage">Moderate damage</SelectItem>
                          <SelectItem value="severe-damage">Severe damage</SelectItem>
                          <SelectItem value="total-loss">Total loss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Were there any witnesses?</label>
                    <Textarea
                      value={formData.witnesses}
                      onChange={(e) => handleInputChange('witnesses', e.target.value)}
                      placeholder="Witness names, contact information, or details..."
                      rows={3}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Additional information about your case</label>
                    <Textarea
                      value={formData.additionalInfo}
                      onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                      placeholder="Any other details you'd like us to know..."
                      rows={4}
                    />
                  </div>
                  
                  <div className="border-t pt-6">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => handleInputChange('consent', checked as boolean)}
                        required
                      />
                      <label htmlFor="consent" className="text-sm leading-relaxed">
                        I understand that submitting this form does not create an attorney-client relationship. 
                        I consent to Trembach Law Firm contacting me about my potential personal injury case. 
                        I understand that this consultation is free and there are no obligations.
                      </label>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

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
            
            {currentStep < totalSteps ? (
              <Button 
                type="button" 
                onClick={nextStep}
                className="bg-red-600 hover:bg-red-700 px-8"
              >
                Next Step
              </Button>
            ) : (
              <Button 
                type="submit" 
                className="bg-green-600 hover:bg-green-700 px-8"
                disabled={!formData.consent}
              >
                Submit Case Evaluation
              </Button>
            )}
          </div>
        </form>

        {/* Contact Information */}
        <div className="mt-12 bg-muted p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Need to Speak with Someone Immediately?</h3>
          <p className="text-lg mb-6">Our personal injury attorneys are available 24/7 for urgent cases</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              onClick={() => window.location.href = 'tel:8181234567'}
              className="bg-green-600 hover:bg-green-700"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (818) 123-4567
            </Button>
            <Button 
              onClick={() => window.location.href = 'mailto:info@trembachlawfirm.com'}
              variant="outline"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseEvaluation;