import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Star, CheckCircle, AlertTriangle } from 'lucide-react';
import SEO from '@/components/SEO';

import heroBackground from '@/assets/hearing-loss-case-evaluation-hero.jpg';
import ThreeDVisualEffects from '@/components/ThreeDVisualEffects';
import '@/styles/premium-3d-effects.css';

const HearingLossCaseEvaluation: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    hearingLossType: '',
    causeOfIncident: '',
    incidentDate: '',
    workplaceExposure: '',
    currentSymptoms: '',
    medicalTreatment: '',
    employmentStatus: '',
    additionalDetails: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.body.classList.add('hearing-loss-page');
    return () => document.body.classList.remove('hearing-loss-page');
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Hearing Loss Case Evaluation Submitted:', formData);
    alert('Thank you! Your case evaluation has been submitted. We will contact you within 24 hours.');
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        hearingLossType: '',
        causeOfIncident: '',
        incidentDate: '',
        workplaceExposure: '',
        currentSymptoms: '',
        medicalTreatment: '',
        employmentStatus: '',
        additionalDetails: ''
      });
      setCurrentStep(1);
    }, 3000);
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <>
      <SEO 
        title="Free Hearing Loss Case Evaluation | California Hearing Loss Lawyers | Trembach Law Firm"
        description="Get a free case evaluation for your California hearing loss claim. Our experienced attorneys will review your case and determine if you have grounds for compensation."
        keywords="hearing loss case evaluation, free consultation, California hearing loss lawyer, case review, hearing damage assessment"
        canonical="https://www.trembachlawfirm.com/practice-areas/hearing-loss/case-evaluation"
      />
      
      <div className="min-h-screen bg-background">
        
        
        {/* Hero Section */}
        <section 
          className="relative h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 hero-content">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Free Hearing Loss Case Evaluation
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg !text-white force-white">Trusted Legal Representation</span>
            </div>
            
            <p className="text-xl mb-8">
              Get a comprehensive evaluation of your hearing loss case. No fees unless we win your case.
            </p>
            
            <Button 
              size="lg"
              className="bg-white text-black hover:bg-gray-100 font-bold px-8 py-4 text-lg"
              onClick={() => document.getElementById('evaluation-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Free Evaluation
            </Button>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Form Column */}
            <div className="lg:col-span-2">
              {!isSubmitted ? (
                <ThreeDVisualEffects>
                  <Card className="shadow-lg premium-form-container interactive-card" id="evaluation-form">
                    <CardHeader className="bg-blue-50">
                      <CardTitle className="text-blue-600 text-center text-2xl font-display">
                        Hearing Loss Case Evaluation - Step {currentStep} of 4
                      </CardTitle>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(currentStep / 4) * 100}%` }}
                        ></div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        
                        {/* Step 1: Personal Information */}
                        {currentStep === 1 && (
                          <div className="space-y-4">
                            <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm font-medium mb-2">First Name *</label>
                                <Input
                                  type="text"
                                  value={formData.firstName}
                                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                                  required
                                  placeholder="Enter your first name"
                                  className="interactive-card"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium mb-2">Last Name *</label>
                                <Input
                                  type="text"
                                  value={formData.lastName}
                                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                                  required
                                  placeholder="Enter your last name"
                                  className="interactive-card"
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
                                  placeholder="your.email@example.com"
                                  className="interactive-card"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium mb-2">Phone Number *</label>
                                <Input
                                  type="tel"
                                  value={formData.phone}
                                  onChange={(e) => handleInputChange('phone', e.target.value)}
                                  required
                                  placeholder="(555) 123-4567"
                                  className="interactive-card"
                                />
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Step 2: Hearing Loss Details */}
                        {currentStep === 2 && (
                          <div className="space-y-4">
                            <h3 className="text-xl font-semibold mb-4">Hearing Loss Details</h3>
                            
                            <div>
                              <label className="block text-sm font-medium mb-2">Type of Hearing Loss *</label>
                              <Select value={formData.hearingLossType} onValueChange={(value) => handleInputChange('hearingLossType', value)}>
                                <SelectTrigger className="interactive-card">
                                  <SelectValue placeholder="Select hearing loss type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="sensorineural">Sensorineural Hearing Loss</SelectItem>
                                  <SelectItem value="conductive">Conductive Hearing Loss</SelectItem>
                                  <SelectItem value="mixed">Mixed Hearing Loss</SelectItem>
                                  <SelectItem value="sudden">Sudden Hearing Loss</SelectItem>
                                  <SelectItem value="tinnitus">Tinnitus Only</SelectItem>
                                  <SelectItem value="bilateral">Bilateral Hearing Loss</SelectItem>
                                  <SelectItem value="unilateral">Unilateral Hearing Loss</SelectItem>
                                  <SelectItem value="unknown">Not Sure/Need Testing</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div>
                              <label className="block text-sm font-medium mb-2">Primary Cause of Incident *</label>
                              <Select value={formData.causeOfIncident} onValueChange={(value) => handleInputChange('causeOfIncident', value)}>
                                <SelectTrigger className="interactive-card">
                                  <SelectValue placeholder="Select cause of hearing loss" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="workplace-noise">Workplace Noise Exposure</SelectItem>
                                  <SelectItem value="car-accident">Motor Vehicle Accident</SelectItem>
                                  <SelectItem value="explosion">Explosion/Blast Injury</SelectItem>
                                  <SelectItem value="airbag">Airbag Deployment</SelectItem>
                                  <SelectItem value="industrial-accident">Industrial Accident</SelectItem>
                                  <SelectItem value="construction">Construction Site Incident</SelectItem>
                                  <SelectItem value="chemical-exposure">Chemical Exposure</SelectItem>
                                  <SelectItem value="head-trauma">Head Trauma/TBI</SelectItem>
                                  <SelectItem value="military-service">Military Service Related</SelectItem>
                                  <SelectItem value="defective-product">Defective Hearing Protection</SelectItem>
                                  <SelectItem value="medical-malpractice">Medical Malpractice</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div>
                              <label className="block text-sm font-medium mb-2">Date of Incident/First Symptoms</label>
                              <Input
                                type="date"
                                value={formData.incidentDate}
                                onChange={(e) => handleInputChange('incidentDate', e.target.value)}
                                className="interactive-card"
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium mb-2">Current Symptoms *</label>
                              <Select value={formData.currentSymptoms} onValueChange={(value) => handleInputChange('currentSymptoms', value)}>
                                <SelectTrigger className="interactive-card">
                                  <SelectValue placeholder="Select primary symptoms" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="complete-hearing-loss">Complete Hearing Loss</SelectItem>
                                  <SelectItem value="partial-hearing-loss">Partial Hearing Loss</SelectItem>
                                  <SelectItem value="difficulty-understanding">Difficulty Understanding Speech</SelectItem>
                                  <SelectItem value="constant-tinnitus">Constant Tinnitus/Ringing</SelectItem>
                                  <SelectItem value="intermittent-tinnitus">Intermittent Tinnitus</SelectItem>
                                  <SelectItem value="sound-sensitivity">Sound Sensitivity (Hyperacusis)</SelectItem>
                                  <SelectItem value="balance-problems">Balance Problems/Dizziness</SelectItem>
                                  <SelectItem value="ear-pain">Ear Pain/Discomfort</SelectItem>
                                  <SelectItem value="multiple-symptoms">Multiple Symptoms</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between pt-6">
                          {currentStep > 1 && (
                            <Button type="button" variant="outline" onClick={prevStep}>
                              Previous
                            </Button>
                          )}
                          
                          {currentStep < 4 ? (
                            <Button type="button" onClick={nextStep} className="ml-auto">
                              Next
                            </Button>
                          ) : (
                            <Button type="submit" className="ml-auto btn-enhanced py-3 px-8">
                              Submit Case Evaluation
                            </Button>
                          )}
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </ThreeDVisualEffects>
              ) : (
                <Card className="shadow-lg">
                  <CardContent className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-600 mb-4">Evaluation Submitted!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for submitting your hearing loss case evaluation. Our legal team will review your information and contact you within 24 hours to discuss your case.
                    </p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center justify-center text-green-600">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        <span className="text-sm">Case information received</span>
                      </div>
                      <div className="flex items-center justify-center text-green-600">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        <span className="text-sm">Legal team assigned</span>
                      </div>
                      <div className="flex items-center justify-center text-green-600">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        <span className="text-sm">You will be contacted within 24 hours</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-red-600" />
                    Immediate Help
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">Need to speak with someone right now?</p>
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white mb-2"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    Call (818) 123-4567
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    24/7 Free Consultation Available
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>What We Evaluate</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Workplace noise exposure</li>
                    <li>• Motor vehicle accidents</li>
                    <li>• Industrial accidents</li>
                    <li>• Medical malpractice</li>
                    <li>• Defective products</li>
                    <li>• Military service related</li>
                    <li>• Construction site incidents</li>
                    <li>• Chemical exposure</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Why Choose Trembach Law</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Former defense attorney insight</li>
                    <li>• No fees unless we win</li>
                    <li>• Specialized hearing loss experience</li>
                    <li>• Maximum compensation focus</li>
                    <li>• Proven track record</li>
                    <li>• Free case evaluation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mt-6 bg-yellow-50 border-yellow-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-yellow-800">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Important Notice
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-yellow-800">
                    California law limits the time you have to file a hearing loss claim. Don't wait - contact us today to protect your rights.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HearingLossCaseEvaluation;