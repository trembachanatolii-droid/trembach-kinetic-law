import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Star, CheckCircle, AlertTriangle } from 'lucide-react';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';
import heroBackground from '@/assets/hearing-loss-case-evaluation-hero.jpg';

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
        <GoBack fallbackPath="/practice-areas/hearing-loss" />
        
        {/* Hero Section */}
        <section 
          className="relative h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Free Hearing Loss Case Evaluation
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Trusted Legal Representation</span>
            </div>
            
            <p className="text-xl mb-8">
              Get a comprehensive evaluation of your hearing loss case. No fees unless we win your case.
            </p>
            
               <Button 
                 size="lg"
                 className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
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
                <Card className="shadow-lg" id="evaluation-form">
                  <CardHeader className="bg-red-50">
                    <CardTitle className="text-red-600 text-center text-2xl">
                      Hearing Loss Case Evaluation - Step {currentStep} of 4
                    </CardTitle>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                      <div 
                        className="bg-red-600 h-2 rounded-full transition-all duration-500"
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
                              <SelectTrigger>
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
                              <SelectTrigger>
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
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium mb-2">Current Symptoms *</label>
                            <Select value={formData.currentSymptoms} onValueChange={(value) => handleInputChange('currentSymptoms', value)}>
                              <SelectTrigger>
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

                      {/* Step 3: Employment & Medical */}
                      {currentStep === 3 && (
                        <div className="space-y-4">
                          <h3 className="text-xl font-semibold mb-4">Employment & Medical Information</h3>
                          
                          <div>
                            <label className="block text-sm font-medium mb-2">Workplace Exposure History</label>
                            <Select value={formData.workplaceExposure} onValueChange={(value) => handleInputChange('workplaceExposure', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select workplace exposure type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="construction">Construction/Heavy Machinery</SelectItem>
                                <SelectItem value="manufacturing">Manufacturing/Factory Work</SelectItem>
                                <SelectItem value="aviation">Aviation/Airport Operations</SelectItem>
                                <SelectItem value="military">Military Service</SelectItem>
                                <SelectItem value="entertainment">Entertainment/Music Industry</SelectItem>
                                <SelectItem value="transportation">Transportation/Trucking</SelectItem>
                                <SelectItem value="shipyard">Shipyard/Maritime Work</SelectItem>
                                <SelectItem value="oil-gas">Oil & Gas Industry</SelectItem>
                                <SelectItem value="mining">Mining Operations</SelectItem>
                                <SelectItem value="emergency-services">Emergency Services</SelectItem>
                                <SelectItem value="no-workplace-exposure">No Workplace Exposure</SelectItem>
                                <SelectItem value="other">Other Industry</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium mb-2">Medical Treatment Received</label>
                            <Select value={formData.medicalTreatment} onValueChange={(value) => handleInputChange('medicalTreatment', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select medical treatment" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="emergency-room">Emergency Room Visit</SelectItem>
                                <SelectItem value="ent-specialist">ENT Specialist Treatment</SelectItem>
                                <SelectItem value="audiologist">Audiologist Evaluation</SelectItem>
                                <SelectItem value="primary-care">Primary Care Physician</SelectItem>
                                <SelectItem value="hearing-aids">Fitted with Hearing Aids</SelectItem>
                                <SelectItem value="cochlear-implant">Cochlear Implant Surgery</SelectItem>
                                <SelectItem value="steroid-treatment">Steroid Treatment</SelectItem>
                                <SelectItem value="ongoing-treatment">Ongoing Treatment</SelectItem>
                                <SelectItem value="no-treatment">No Treatment Yet</SelectItem>
                                <SelectItem value="multiple-treatments">Multiple Treatments</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium mb-2">Current Employment Status</label>
                            <Select value={formData.employmentStatus} onValueChange={(value) => handleInputChange('employmentStatus', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select employment status" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="employed-full-time">Employed Full-Time</SelectItem>
                                <SelectItem value="employed-part-time">Employed Part-Time</SelectItem>
                                <SelectItem value="self-employed">Self-Employed</SelectItem>
                                <SelectItem value="unemployed-due-to-injury">Unemployed Due to Hearing Loss</SelectItem>
                                <SelectItem value="on-disability">On Disability</SelectItem>
                                <SelectItem value="retired">Retired</SelectItem>
                                <SelectItem value="student">Student</SelectItem>
                                <SelectItem value="seeking-employment">Seeking Employment</SelectItem>
                                <SelectItem value="unable-to-work">Unable to Work</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      )}

                      {/* Step 4: Additional Details */}
                      {currentStep === 4 && (
                        <div className="space-y-4">
                          <h3 className="text-xl font-semibold mb-4">Additional Information</h3>
                          
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Please describe your hearing loss incident and how it has affected your life
                            </label>
                            <Textarea
                              value={formData.additionalDetails}
                              onChange={(e) => handleInputChange('additionalDetails', e.target.value)}
                              rows={6}
                              placeholder="Please provide details about: 
- How the hearing loss occurred
- Specific symptoms you're experiencing
- Impact on your work and daily activities
- Any safety concerns or communication difficulties
- Other relevant information about your case"
                            />
                          </div>

                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <h4 className="font-semibold text-blue-800 mb-2">What Happens Next?</h4>
                            <ul className="text-sm text-blue-700 space-y-1">
                              <li>• We'll review your case within 24 hours</li>
                              <li>• A qualified attorney will contact you for a free consultation</li>
                              <li>• We'll explain your legal options and potential compensation</li>
                              <li>• No fees unless we win your case</li>
                            </ul>
                          </div>
                        </div>
                      )}

                      {/* Navigation Buttons */}
                      <div className="flex justify-between pt-6">
                        {currentStep > 1 && (
                          <Button
                            type="button"
                            variant="outline"
                            onClick={prevStep}
                          >
                            Previous Step
                          </Button>
                        )}
                        
                        <div className="ml-auto">
                          {currentStep < 4 ? (
                            <Button
                              type="button"
                              onClick={nextStep}
                              className="bg-red-600 hover:bg-red-700"
                            >
                              Next Step
                            </Button>
                          ) : (
                            <Button
                              type="submit"
                              className="bg-red-600 hover:bg-red-700 font-bold px-8"
                            >
                              Submit Case Evaluation
                            </Button>
                          )}
                        </div>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              ) : (
                <Card className="shadow-lg">
                  <CardContent className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-green-600 mb-4">Case Evaluation Submitted Successfully!</h2>
                    <p className="text-lg mb-6">
                      Thank you for submitting your hearing loss case evaluation. Our experienced attorneys will review your information and contact you within 24 hours.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-left">
                      <h3 className="font-semibold text-green-800 mb-2">Next Steps:</h3>
                      <ul className="text-green-700 space-y-1">
                        <li>✓ Case review by qualified hearing loss attorney</li>
                        <li>✓ Free consultation call within 24 hours</li>
                        <li>✓ Explanation of your legal rights and options</li>
                        <li>✓ No fees unless we win your case</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                
                {/* Immediate Contact */}
                <Card className="border-red-200 shadow-lg">
                  <CardHeader className="bg-red-50">
                    <CardTitle className="text-red-600 text-center">Need Immediate Help?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-6">
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold"
                      onClick={() => window.location.href = 'tel:8181234567'}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call (818) 123-4567
                    </Button>
                    <p className="text-sm text-center text-muted-foreground">
                      Available 24/7 for urgent hearing loss cases
                    </p>
                  </CardContent>
                </Card>

                {/* What We Evaluate */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-primary">What We Evaluate</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2 text-sm">
                      <p>✓ Workplace noise exposure cases</p>
                      <p>✓ Motor vehicle accident hearing damage</p>
                      <p>✓ Industrial and construction site injuries</p>
                      <p>✓ Explosion and blast trauma</p>
                      <p>✓ Chemical exposure hearing loss</p>
                      <p>✓ Defective hearing protection claims</p>
                      <p>✓ Military service-related hearing damage</p>
                      <p>✓ Medical malpractice hearing loss</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Why Choose Us */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-primary">Why Choose Trembach Law?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>Former defense attorney advantage</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>No fees unless we win</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>Comprehensive medical network</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>24/7 availability</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>Trial-ready representation</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Important Notice */}
                <Card className="border-yellow-200 shadow-lg">
                  <CardHeader className="bg-yellow-50">
                    <CardTitle className="text-yellow-600 flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Time Limits Apply
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-sm text-yellow-700">
                      California has strict deadlines for filing hearing loss claims. Don't wait - evidence can be lost and deadlines can expire. Contact us immediately to protect your rights.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HearingLossCaseEvaluation;