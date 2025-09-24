import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  Star,
  CheckCircle,
  Eye,
  AlertTriangle,
  Clock,
  FileText,
  Shield,
  Scale
} from 'lucide-react';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';

// Import hero image
import heroImage from '@/assets/vision-loss-case-evaluation-hero.jpg';

const VisionLossCaseEvaluation: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    preferredContact: '',
    
    // Incident Details
    incidentDate: '',
    incidentLocation: '',
    incidentType: '',
    visionLossType: '',
    eyeAffected: '',
    currentVisionLevel: '',
    
    // Medical Information
    hospitalTreatment: '',
    currentDoctor: '',
    priorVisionProblems: '',
    medications: '',
    
    // Legal and Insurance
    reportedToInsurance: '',
    attorneyConsulted: '',
    workRelated: '',
    
    // Additional Details
    incidentDescription: '',
    witnessesPresent: '',
    photosAvailable: '',
    
    // Contact Preferences
    bestTimeToCall: '',
    urgencyLevel: ''
  });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  // Add vision-loss-page class for styling
  useEffect(() => {
    document.body.classList.add('vision-loss-page');
    return () => document.body.classList.remove('vision-loss-page');
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Handle form submission
    alert('Thank you for your submission. A vision loss attorney will contact you within 24 hours to discuss your case.');
    console.log('Form submitted:', formData);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-center mb-6">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input 
                placeholder="First Name *" 
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                required 
              />
              <Input 
                placeholder="Last Name *" 
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                required 
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input 
                type="tel" 
                placeholder="Phone Number *" 
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required 
              />
              <Input 
                type="email" 
                placeholder="Email Address *" 
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required 
              />
            </div>
            <Select value={formData.preferredContact} onValueChange={(value) => handleInputChange('preferredContact', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Preferred Contact Method *" />
              </SelectTrigger>
              <SelectContent className="bg-white border shadow-lg z-50">
                <SelectItem value="phone">Phone Call</SelectItem>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="text">Text Message</SelectItem>
                <SelectItem value="either">Either Phone or Email</SelectItem>
              </SelectContent>
            </Select>
            <Select value={formData.bestTimeToCall} onValueChange={(value) => handleInputChange('bestTimeToCall', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Best Time to Contact You" />
              </SelectTrigger>
              <SelectContent className="bg-white border shadow-lg z-50">
                <SelectItem value="morning">Morning (8 AM - 12 PM)</SelectItem>
                <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                <SelectItem value="anytime">Anytime</SelectItem>
              </SelectContent>
            </Select>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-center mb-6">Vision Loss Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input 
                type="date" 
                placeholder="Date of Incident *" 
                value={formData.incidentDate}
                onChange={(e) => handleInputChange('incidentDate', e.target.value)}
                required 
              />
              <Input 
                placeholder="Location of Incident *" 
                value={formData.incidentLocation}
                onChange={(e) => handleInputChange('incidentLocation', e.target.value)}
                required 
              />
            </div>
            <Select value={formData.incidentType} onValueChange={(value) => handleInputChange('incidentType', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Type of Incident *" />
              </SelectTrigger>
              <SelectContent className="bg-white border shadow-lg z-50">
                <SelectItem value="car-accident">Car/Vehicle Accident</SelectItem>
                <SelectItem value="workplace-injury">Workplace Injury</SelectItem>
                <SelectItem value="medical-malpractice">Medical Malpractice</SelectItem>
                <SelectItem value="chemical-exposure">Chemical Exposure</SelectItem>
                <SelectItem value="product-defect">Defective Product</SelectItem>
                <SelectItem value="premises-liability">Property/Premises Accident</SelectItem>
                <SelectItem value="assault">Assault/Intentional Injury</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            <Select value={formData.visionLossType} onValueChange={(value) => handleInputChange('visionLossType', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Type of Vision Loss *" />
              </SelectTrigger>
              <SelectContent className="bg-white border shadow-lg z-50">
                <SelectItem value="total-blindness">Total Blindness</SelectItem>
                <SelectItem value="legal-blindness">Legal Blindness (20/200 or worse)</SelectItem>
                <SelectItem value="partial-vision-loss">Partial Vision Loss</SelectItem>
                <SelectItem value="one-eye-blindness">One Eye Blindness</SelectItem>
                <SelectItem value="peripheral-vision-loss">Peripheral Vision Loss</SelectItem>
                <SelectItem value="central-vision-loss">Central Vision Loss</SelectItem>
                <SelectItem value="night-blindness">Night Blindness</SelectItem>
                <SelectItem value="double-vision">Double Vision (Diplopia)</SelectItem>
                <SelectItem value="traumatic-optic-neuropathy">Traumatic Optic Neuropathy</SelectItem>
                <SelectItem value="cortical-blindness">Cortical/Cerebral Blindness</SelectItem>
                <SelectItem value="other">Other Vision Impairment</SelectItem>
              </SelectContent>
            </Select>
            <Select value={formData.eyeAffected} onValueChange={(value) => handleInputChange('eyeAffected', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Which Eye(s) Affected *" />
              </SelectTrigger>
              <SelectContent className="bg-white border shadow-lg z-50">
                <SelectItem value="left-eye">Left Eye Only</SelectItem>
                <SelectItem value="right-eye">Right Eye Only</SelectItem>
                <SelectItem value="both-eyes">Both Eyes</SelectItem>
                <SelectItem value="unsure">Unsure</SelectItem>
              </SelectContent>
            </Select>
            <Select value={formData.currentVisionLevel} onValueChange={(value) => handleInputChange('currentVisionLevel', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Current Vision Level" />
              </SelectTrigger>
              <SelectContent className="bg-white border shadow-lg z-50">
                <SelectItem value="no-light-perception">No Light Perception</SelectItem>
                <SelectItem value="light-perception-only">Light Perception Only</SelectItem>
                <SelectItem value="hand-motion">Hand Motion Detection</SelectItem>
                <SelectItem value="counting-fingers">Counting Fingers</SelectItem>
                <SelectItem value="20-200-or-worse">20/200 or Worse</SelectItem>
                <SelectItem value="20-100-to-20-199">20/100 to 20/199</SelectItem>
                <SelectItem value="20-50-to-20-99">20/50 to 20/99</SelectItem>
                <SelectItem value="better-than-20-50">Better than 20/50</SelectItem>
                <SelectItem value="unknown">Unknown/Not Tested</SelectItem>
              </SelectContent>
            </Select>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-center mb-6">Medical & Legal Information</h3>
            <Select value={formData.hospitalTreatment} onValueChange={(value) => handleInputChange('hospitalTreatment', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Did you receive hospital treatment? *" />
              </SelectTrigger>
              <SelectContent className="bg-white border shadow-lg z-50">
                <SelectItem value="emergency-room">Emergency Room</SelectItem>
                <SelectItem value="hospital-admission">Hospital Admission</SelectItem>
                <SelectItem value="urgent-care">Urgent Care</SelectItem>
                <SelectItem value="ophthalmologist">Ophthalmologist Only</SelectItem>
                <SelectItem value="no-treatment">No Medical Treatment</SelectItem>
                <SelectItem value="ongoing-treatment">Ongoing Treatment</SelectItem>
              </SelectContent>
            </Select>
            <Input 
              placeholder="Current Eye Doctor/Ophthalmologist" 
              value={formData.currentDoctor}
              onChange={(e) => handleInputChange('currentDoctor', e.target.value)}
            />
            <Select value={formData.priorVisionProblems} onValueChange={(value) => handleInputChange('priorVisionProblems', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Any prior vision problems?" />
              </SelectTrigger>
              <SelectContent className="bg-white border shadow-lg z-50">
                <SelectItem value="none">No Prior Problems</SelectItem>
                <SelectItem value="glasses-contacts">Glasses/Contacts Only</SelectItem>
                <SelectItem value="glaucoma">Glaucoma</SelectItem>
                <SelectItem value="diabetes-retinopathy">Diabetic Retinopathy</SelectItem>
                <SelectItem value="macular-degeneration">Macular Degeneration</SelectItem>
                <SelectItem value="other-condition">Other Eye Condition</SelectItem>
              </SelectContent>
            </Select>
            <Select value={formData.reportedToInsurance} onValueChange={(value) => handleInputChange('reportedToInsurance', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Have you reported to insurance?" />
              </SelectTrigger>
              <SelectContent className="bg-white border shadow-lg z-50">
                <SelectItem value="yes-auto">Yes - Auto Insurance</SelectItem>
                <SelectItem value="yes-health">Yes - Health Insurance</SelectItem>
                <SelectItem value="yes-workers-comp">Yes - Workers Compensation</SelectItem>
                <SelectItem value="yes-multiple">Yes - Multiple Insurance</SelectItem>
                <SelectItem value="no">No</SelectItem>
                <SelectItem value="unsure">Unsure</SelectItem>
              </SelectContent>
            </Select>
            <Select value={formData.attorneyConsulted} onValueChange={(value) => handleInputChange('attorneyConsulted', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Have you consulted with an attorney?" />
              </SelectTrigger>
              <SelectContent className="bg-white border shadow-lg z-50">
                <SelectItem value="no">No</SelectItem>
                <SelectItem value="yes-signed">Yes - Signed with Attorney</SelectItem>
                <SelectItem value="yes-consulting">Yes - Still Consulting</SelectItem>
                <SelectItem value="yes-declined">Yes - Declined to Sign</SelectItem>
              </SelectContent>
            </Select>
            <Select value={formData.workRelated} onValueChange={(value) => handleInputChange('workRelated', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Was this work-related?" />
              </SelectTrigger>
              <SelectContent className="bg-white border shadow-lg z-50">
                <SelectItem value="yes">Yes - During Work Hours</SelectItem>
                <SelectItem value="commuting">Yes - Commuting to Work</SelectItem>
                <SelectItem value="no">No - Personal Time</SelectItem>
                <SelectItem value="unsure">Unsure</SelectItem>
              </SelectContent>
            </Select>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-center mb-6">Additional Details</h3>
            <textarea 
              className="w-full p-3 border rounded-md resize-none"
              rows={4} 
              placeholder="Please describe how the incident occurred and how your vision was affected *"
              value={formData.incidentDescription}
              onChange={(e) => handleInputChange('incidentDescription', e.target.value)}
            ></textarea>
            <Select value={formData.witnessesPresent} onValueChange={(value) => handleInputChange('witnessesPresent', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Were there witnesses to the incident?" />
              </SelectTrigger>
              <SelectContent className="bg-white border shadow-lg z-50">
                <SelectItem value="yes-multiple">Yes - Multiple Witnesses</SelectItem>
                <SelectItem value="yes-one">Yes - One Witness</SelectItem>
                <SelectItem value="no">No Witnesses</SelectItem>
                <SelectItem value="unsure">Unsure</SelectItem>
              </SelectContent>
            </Select>
            <Select value={formData.photosAvailable} onValueChange={(value) => handleInputChange('photosAvailable', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Do you have photos of the incident/injuries?" />
              </SelectTrigger>
              <SelectContent className="bg-white border shadow-lg z-50">
                <SelectItem value="yes-both">Yes - Scene and Injuries</SelectItem>
                <SelectItem value="yes-scene">Yes - Scene Only</SelectItem>
                <SelectItem value="yes-injuries">Yes - Injuries Only</SelectItem>
                <SelectItem value="no">No Photos</SelectItem>
              </SelectContent>
            </Select>
            <Select value={formData.urgencyLevel} onValueChange={(value) => handleInputChange('urgencyLevel', value)}>
              <SelectTrigger>
                <SelectValue placeholder="How urgent is your case?" />
              </SelectTrigger>
              <SelectContent className="bg-white border shadow-lg z-50">
                <SelectItem value="very-urgent">Very Urgent - Statute Deadline Near</SelectItem>
                <SelectItem value="urgent">Urgent - Need Quick Response</SelectItem>
                <SelectItem value="normal">Normal - Within Reasonable Time</SelectItem>
                <SelectItem value="no-rush">No Rush - Exploring Options</SelectItem>
              </SelectContent>
            </Select>
            <textarea 
              className="w-full p-3 border rounded-md resize-none"
              rows={3} 
              placeholder="Any additional information you'd like us to know?"
              value={formData.medications}
              onChange={(e) => handleInputChange('medications', e.target.value)}
            ></textarea>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background vision-loss-page">
      <SEO 
        title="Free Vision Loss Case Evaluation | California Eye Injury Attorney"
        description="Get a free case evaluation for your vision loss or eye injury claim. California attorney with former defense experience. No fees unless we win. Call (818) 123-4567"
        keywords="vision loss case evaluation, eye injury attorney consultation, free legal review California, blindness lawyer, vision loss compensation"
        canonical="/practice-areas/vision-loss/case-evaluation"
      />

      <GoBack fallbackPath="/practice-areas/vision-loss" />

      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat hero-section"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">
              Free Vision Loss Case Evaluation
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg text-white">Trusted by California Families</span>
            </div>
            
            <p className="text-xl mb-6 text-white text-center">
              Get expert legal guidance for your vision loss or eye injury claim
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Form Column */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader className="bg-red-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-red-600 flex items-center">
                    <Eye className="w-6 h-6 mr-2" />
                    Vision Loss Case Evaluation
                  </CardTitle>
                  <Badge variant="secondary" className="px-3 py-1">
                    Step {currentStep} of {totalSteps}
                  </Badge>
                </div>
                <Progress value={progress} className="mt-4" />
              </CardHeader>
              
              <CardContent className="p-8">
                {renderStep()}
                
                <div className="flex justify-between mt-8">
                  <Button 
                    variant="outline" 
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                    className="px-6"
                  >
                    Previous
                  </Button>
                  
                  {currentStep === totalSteps ? (
                    <Button 
                      onClick={handleSubmit}
                      className="bg-red-600 hover:bg-red-700 text-white px-8"
                    >
                      Submit Evaluation
                    </Button>
                  ) : (
                    <Button 
                      onClick={handleNext}
                      className="bg-red-600 hover:bg-red-700 text-white px-6"
                    >
                      Next Step
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Benefits Section */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="text-center p-4">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-sm">100% Free</h3>
                <p className="text-xs text-muted-foreground">No cost for evaluation</p>
              </Card>
              <Card className="text-center p-4">
                <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-sm">Quick Response</h3>
                <p className="text-xs text-muted-foreground">Contact within 24 hours</p>
              </Card>
              <Card className="text-center p-4">
                <Shield className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <h3 className="font-semibold text-sm">Confidential</h3>
                <p className="text-xs text-muted-foreground">Your information is protected</p>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              
              {/* Contact Info */}
              <Card className="shadow-lg">
                <CardHeader className="bg-red-50">
                  <CardTitle className="text-lg text-red-600">Need Immediate Help?</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call (818) 123-4567
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-red-600 text-red-600 hover:bg-red-50"
                    onClick={() => window.location.href = 'mailto:info@trembachlawfirm.com'}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                  </Button>
                  
                  <div className="text-sm text-muted-foreground">
                    <p>Available 24/7 for urgent vision loss cases</p>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Why Choose Our Firm?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Scale className="w-5 h-5 text-red-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-sm">Former Defense Experience</h4>
                      <p className="text-xs text-muted-foreground">We know insurance tactics</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Eye className="w-5 h-5 text-red-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-sm">Vision Loss Specialists</h4>
                      <p className="text-xs text-muted-foreground">Focused expertise in eye injuries</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FileText className="w-5 h-5 text-red-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-sm">No Fees Unless We Win</h4>
                      <p className="text-xs text-muted-foreground">Contingency fee basis</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Notice */}
              <Card className="shadow-lg border-red-200">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-sm text-red-600">Time Sensitive</h4>
                      <p className="text-xs text-red-700">California has strict deadlines for vision loss claims. Don't wait to protect your rights.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4 text-white">Questions About Your Vision Loss Case?</h2>
          <p className="text-lg mb-6 text-white">Our experienced attorneys are here to help. Contact us today for your free consultation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={() => window.location.href = 'tel:8181234567'}
            >
              <span className="text-white">Call (818) 123-4567</span>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-gray-900"
              onClick={() => window.location.href = '/practice-areas/vision-loss'}
            >
              <span className="text-white hover:text-gray-900">Return to Vision Loss Info</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionLossCaseEvaluation;