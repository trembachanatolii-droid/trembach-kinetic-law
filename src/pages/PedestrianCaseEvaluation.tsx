import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, ArrowRight, Star, Phone, Mail, MessageCircle, Shield, Award, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';

import heroBackground from '@/assets/pedestrian-case-evaluation-hero.jpg';
import ThreeDVisualEffects from '@/components/ThreeDVisualEffects';
import '@/styles/premium-3d-effects.css';

const PedestrianCaseEvaluation = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Accident Details
    accidentDate: '',
    accidentTime: '',
    accidentLocation: '',
    policeReportFiled: '',
    policeReportNumber: '',
    
    // Injury Details
    injuriesReceived: '',
    medicalTreatment: '',
    hospitalName: '',
    currentTreating: '',
    
    // Circumstances
    crosswalkUsed: '',
    trafficSignal: '',
    weatherConditions: '',
    lightingConditions: '',
    
    // Insurance & Legal
    hasInsurance: '',
    insuranceCompany: '',
    lawyerConsulted: '',
    
    // Additional Information
    additionalDetails: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you! Your pedestrian accident case evaluation has been submitted. We will contact you within 24 hours.');
  };

  const renderStepContent = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-red-600 mb-4">Personal Information</h2>
              <p className="text-muted-foreground">Let's start with your basic information so we can contact you about your pedestrian accident case.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">First Name *</label>
                <Input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name *</label>
                <Input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number *</label>
                <Input
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
              <h2 className="text-2xl font-bold text-red-600 mb-4">Accident Details</h2>
              <p className="text-muted-foreground">Tell us about when and where your pedestrian accident occurred.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Accident Date *</label>
                <Input
                  type="date"
                  value={formData.accidentDate}
                  onChange={(e) => handleInputChange('accidentDate', e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Accident Time</label>
                <Input
                  type="time"
                  value={formData.accidentTime}
                  onChange={(e) => handleInputChange('accidentTime', e.target.value)}
                  placeholder="Approximate time"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Accident Location *</label>
              <Input
                type="text"
                value={formData.accidentLocation}
                onChange={(e) => handleInputChange('accidentLocation', e.target.value)}
                placeholder="Street address, intersection, or general area"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Was a Police Report Filed? *</label>
                <Select value={formData.policeReportFiled} onValueChange={(value) => handleInputChange('policeReportFiled', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                    <SelectItem value="unknown">I don't know</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Police Report Number (if known)</label>
                <Input
                  type="text"
                  value={formData.policeReportNumber}
                  onChange={(e) => handleInputChange('policeReportNumber', e.target.value)}
                  placeholder="Enter report number"
                />
              </div>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-red-600 mb-4">Injury Information</h2>
              <p className="text-muted-foreground">Help us understand the injuries you sustained in the pedestrian accident.</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">What injuries did you receive? *</label>
              <Textarea
                value={formData.injuriesReceived}
                onChange={(e) => handleInputChange('injuriesReceived', e.target.value)}
                placeholder="Please describe all injuries sustained in the accident"
                rows={4}
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Did you receive medical treatment? *</label>
                <Select value={formData.medicalTreatment} onValueChange={(value) => handleInputChange('medicalTreatment', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="emergency-room">Emergency Room</SelectItem>
                    <SelectItem value="ambulance">Ambulance/Paramedics</SelectItem>
                    <SelectItem value="urgent-care">Urgent Care</SelectItem>
                    <SelectItem value="doctor-office">Doctor's Office</SelectItem>
                    <SelectItem value="no-treatment">No Medical Treatment</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Hospital/Medical Facility Name</label>
                <Input
                  type="text"
                  value={formData.hospitalName}
                  onChange={(e) => handleInputChange('hospitalName', e.target.value)}
                  placeholder="Name of medical facility"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Are you currently receiving treatment?</label>
              <Select value={formData.currentTreating} onValueChange={(value) => handleInputChange('currentTreating', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes, still treating</SelectItem>
                  <SelectItem value="no">No, treatment complete</SelectItem>
                  <SelectItem value="need-treatment">Need treatment but haven't received it</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );
        
      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-red-600 mb-4">Accident Circumstances</h2>
              <p className="text-muted-foreground">Details about the conditions and circumstances of your accident.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Were you in a crosswalk? *</label>
                <Select value={formData.crosswalkUsed} onValueChange={(value) => handleInputChange('crosswalkUsed', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="marked-crosswalk">Yes, marked crosswalk</SelectItem>
                    <SelectItem value="unmarked-crosswalk">Yes, unmarked crosswalk</SelectItem>
                    <SelectItem value="no-crosswalk">No, not in crosswalk</SelectItem>
                    <SelectItem value="unknown">I'm not sure</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Traffic Signal Status</label>
                <Select value={formData.trafficSignal} onValueChange={(value) => handleInputChange('trafficSignal', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="walk-signal">Walk signal was on</SelectItem>
                    <SelectItem value="dont-walk">Don't walk signal</SelectItem>
                    <SelectItem value="no-signal">No pedestrian signal</SelectItem>
                    <SelectItem value="unknown">I don't remember</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Weather Conditions</label>
                <Select value={formData.weatherConditions} onValueChange={(value) => handleInputChange('weatherConditions', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="clear">Clear/Sunny</SelectItem>
                    <SelectItem value="cloudy">Cloudy</SelectItem>
                    <SelectItem value="rain">Rain</SelectItem>
                    <SelectItem value="fog">Fog</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Lighting Conditions</label>
                <Select value={formData.lightingConditions} onValueChange={(value) => handleInputChange('lightingConditions', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daylight">Daylight</SelectItem>
                    <SelectItem value="dusk">Dusk/Dawn</SelectItem>
                    <SelectItem value="dark-lit">Dark with street lighting</SelectItem>
                    <SelectItem value="dark-unlit">Dark without street lighting</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );
        
      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-red-600 mb-4">Insurance & Additional Information</h2>
              <p className="text-muted-foreground">Final details to complete your pedestrian accident case evaluation.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Do you have auto insurance?</label>
                <Select value={formData.hasInsurance} onValueChange={(value) => handleInputChange('hasInsurance', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Insurance Company Name</label>
                <Input
                  type="text"
                  value={formData.insuranceCompany}
                  onChange={(e) => handleInputChange('insuranceCompany', e.target.value)}
                  placeholder="Your insurance company"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Have you consulted with a lawyer about this accident?</label>
              <Select value={formData.lawyerConsulted} onValueChange={(value) => handleInputChange('lawyerConsulted', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="consultation-only">Consultation only</SelectItem>
                  <SelectItem value="currently-represented">Currently represented</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Additional Details</label>
              <Textarea
                value={formData.additionalDetails}
                onChange={(e) => handleInputChange('additionalDetails', e.target.value)}
                placeholder="Please provide any additional information about your pedestrian accident that you think would be helpful for us to know"
                rows={4}
              />
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
        title="Free Pedestrian Accident Case Evaluation | California Lawyers"
        description="Get a free evaluation of your California pedestrian accident case. Expert legal analysis, no fees unless we win. Complete our secure form for immediate review."
        canonical="/pedestrian-case-evaluation"
      />
      
      <Navigation />

      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Free Pedestrian Accident Case Evaluation
          </h1>
          <p className="text-xl opacity-90 mb-6">
            Get expert legal analysis of your California pedestrian accident claim at no cost
          </p>
          <div className="flex items-center justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
            ))}
            <span className="ml-2">Trusted by California Pedestrians</span>
          </div>
        </div>
      </section>

      

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Form Column */}
          <div className="lg:col-span-2">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium">Step {step} of 5</span>
                <span className="text-sm text-muted-foreground">{Math.round((step / 5) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-red-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(step / 5) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Form Card */}
            <Card className="p-8">
              <form onSubmit={step === 5 ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }}>
                {renderStepContent()}
                
                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={step === 1}
                    className="flex items-center"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>
                  
                  {step < 5 ? (
                    <Button
                      type="submit"
                      className="bg-red-600 hover:bg-red-700 flex items-center"
                    >
                      Next Step
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="bg-red-600 hover:bg-red-700 px-8"
                    >
                      Submit Case Evaluation
                    </Button>
                  )}
                </div>
              </form>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Contact Card */}
              <Card className="bg-gradient-to-b from-red-50 to-red-100 border-red-200 p-6">
                <h3 className="text-xl font-bold text-red-600 mb-4 text-center">Need Immediate Help?</h3>
                <div className="space-y-4">
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call (818) 123-4567
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-red-200 text-red-600 hover:bg-red-50"
                    onClick={() => window.location.href = 'mailto:info@trembachlawfirm.com'}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                  </Button>
                  
                  <div className="text-center text-sm text-muted-foreground pt-4 border-t border-red-200">
                    <p className="font-semibold">Available 24/7</p>
                    <p>No Fees Unless We Win</p>
                    <p>Free Consultation</p>
                  </div>
                </div>
              </Card>

              {/* Benefits Card */}
              <Card className="p-6">
                <h3 className="text-lg font-bold text-red-600 mb-4">Why Choose Our Firm?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-red-600 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">Former Defense Attorney</h4>
                      <p className="text-xs text-muted-foreground">Insider knowledge of insurance tactics</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Award className="w-5 h-5 text-red-600 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">No Win, No Fee</h4>
                      <p className="text-xs text-muted-foreground">You pay nothing unless we win your case</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-red-600 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">Fast Response</h4>
                      <p className="text-xs text-muted-foreground">We'll review your case within 24 hours</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Testimonial Card */}
              <Card className="p-6 bg-muted">
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-sm italic text-muted-foreground mb-3">
                    "They made the legal process easy to understand and fought hard for my compensation. I couldn't have asked for better representation after my pedestrian accident."
                  </blockquote>
                  <cite className="text-xs font-semibold">- Former Client</cite>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-red-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Don't Wait - Time Limits Apply
          </h2>
          <p className="text-lg mb-6 opacity-90">
            California has strict deadlines for pedestrian accident claims. 
            Get your free evaluation today to protect your rights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white text-red-600 hover:bg-red-50 border-white"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Complete Evaluation Form
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
              onClick={() => window.location.href = 'tel:8181234567'}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (818) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PedestrianCaseEvaluation;