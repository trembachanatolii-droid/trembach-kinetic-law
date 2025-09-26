import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import GoBack from '@/components/GoBack';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  ArrowLeft,
  Scale,
  Clock,
  DollarSign,
  Users,
  Shield,
  Heart,
  FileText,
  Calendar,
  MapPin,
  AlertTriangle,
  CheckCircle,
  Star,
  Package
} from 'lucide-react';
import heroBackground from '@/assets/product-liability-case-evaluation-hero.jpg';
import SEO from '@/components/SEO';
import ThreeDVisualEffects from '@/components/ThreeDVisualEffects';
import '@/styles/premium-3d-effects.css';

const ProductLiabilityCaseEvaluation: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfIncident: '',
    productName: '',
    manufacturer: '',
    productType: '',
    defectType: '',
    injuryType: '',
    severityLevel: '',
    productAge: '',
    purchaseLocation: '',
    injuryLocation: '',
    medicalTreatment: '',
    hospitalization: '',
    witnesses: '',
    productPreserved: '',
    previousComplaints: '',
    description: '',
    urgentNeed: '',
    consentToContact: false
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    const subject = 'Product Liability Case Evaluation - Complete Assessment';
    const body = `
PRODUCT LIABILITY CASE EVALUATION REQUEST

Personal Information:
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}

Product Information:
Product Name: ${formData.productName}
Manufacturer: ${formData.manufacturer}
Product Type: ${formData.productType}
Product Age: ${formData.productAge}
Purchase Location: ${formData.purchaseLocation}

Incident Details:
Date of Incident: ${formData.dateOfIncident}
Location of Injury: ${formData.injuryLocation}
Defect Type: ${formData.defectType}
Description: ${formData.description}

Injury Information:
Injury Type: ${formData.injuryType}
Severity Level: ${formData.severityLevel}
Medical Treatment: ${formData.medicalTreatment}
Hospitalization: ${formData.hospitalization}

Case Details:
Product Preserved: ${formData.productPreserved}
Witnesses Available: ${formData.witnesses}
Previous Complaints: ${formData.previousComplaints}
Urgent Need: ${formData.urgentNeed}

Consent to Contact: ${formData.consentToContact ? 'Yes' : 'No'}

Please provide comprehensive case evaluation and next steps.
    `;
    
    window.open(`mailto:contact@trembachlaw.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <SEO
          title="Thank You - Product Liability Case Evaluation Submitted"
          description="Your product liability case evaluation has been submitted. Our experienced attorneys will review your case and contact you within 24 hours."
          canonical="/product-liability-case-evaluation"
        />

        <GoBack fallbackPath="/practice-areas/product-liability" className="top-20 z-[60]" />

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Thank You for Your Submission
            </h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Your product liability case evaluation has been submitted successfully. Our experienced attorneys will review your case details and contact you within 24 hours to discuss your legal options.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">What Happens Next?</h3>
              <ul className="text-left space-y-2 text-blue-800">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Our legal team reviews your case details within 2-4 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>We conduct preliminary product liability research</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>A senior attorney calls you within 24 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>We schedule your free in-depth consultation</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700"
                onClick={() => window.open('tel:8181234567')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (818) 123-4567
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/practice-areas/product-liability')}
              >
                Return to Product Liability
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Free Product Liability Case Evaluation | California Attorney | Expert Legal Assessment"
        description="Get a free comprehensive product liability case evaluation from experienced California attorneys. Former defense attorney insight. No fees unless we win your case."
        canonical="/product-liability-case-evaluation"
      />

      <GoBack fallbackPath="/practice-areas/product-liability" className="top-20 z-[60]" />

      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-sm font-medium">
              Free Case Evaluation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Product Liability Case Evaluation
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Get a comprehensive assessment of your product liability case from experienced California attorneys. Former defense attorney providing insider perspective.
            </p>
            <div className="flex items-center justify-center gap-6 text-white">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="text-lg">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                <span className="text-lg">No Fees Unless We Win</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span className="text-lg">Confidential</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Progress Indicator */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step <= currentStep ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step}
                  </div>
                  {step < 4 && (
                    <div className={`w-16 h-1 mx-2 ${
                      step < currentStep ? 'bg-red-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {currentStep === 1 && "Personal & Contact Information"}
                    {currentStep === 2 && "Product & Incident Details"}
                    {currentStep === 3 && "Injury & Medical Information"}
                    {currentStep === 4 && "Case Description & Evidence"}
                  </CardTitle>
                  <p className="text-gray-600 text-lg">
                    Step {currentStep} of 4 - All information is confidential and protected by attorney-client privilege.
                  </p>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Step 1: Personal Information */}
                    {currentStep === 1 && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-lg font-medium text-gray-700 mb-1">First Name *</label>
                            <Input
                              value={formData.firstName}
                              onChange={(e) => handleInputChange('firstName', e.target.value)}
                              required
                              className="text-lg h-12"
                            />
                          </div>
                          <div>
                            <label className="block text-lg font-medium text-gray-700 mb-1">Last Name *</label>
                            <Input
                              value={formData.lastName}
                              onChange={(e) => handleInputChange('lastName', e.target.value)}
                              required
                              className="text-lg h-12"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-lg font-medium text-gray-700 mb-1">Email Address *</label>
                          <Input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            required
                            className="text-lg h-12"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-lg font-medium text-gray-700 mb-1">Phone Number *</label>
                          <Input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            required
                            className="text-lg h-12"
                          />
                        </div>
                      </div>
                    )}

                    {/* Step 2: Product Information */}
                    {currentStep === 2 && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-lg font-medium text-gray-700 mb-1">Date of Incident *</label>
                            <Input
                              type="date"
                              value={formData.dateOfIncident}
                              onChange={(e) => handleInputChange('dateOfIncident', e.target.value)}
                              required
                              className="text-lg h-12"
                            />
                          </div>
                          <div>
                            <label className="block text-lg font-medium text-gray-700 mb-1">Product Name *</label>
                            <Input
                              value={formData.productName}
                              onChange={(e) => handleInputChange('productName', e.target.value)}
                              placeholder="Name of the product that caused injury"
                              required
                              className="text-lg h-12"
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-lg font-medium text-gray-700 mb-1">Manufacturer</label>
                            <Input
                              value={formData.manufacturer}
                              onChange={(e) => handleInputChange('manufacturer', e.target.value)}
                              placeholder="Product manufacturer or brand"
                              className="text-lg h-12"
                            />
                          </div>
                          <div>
                            <label className="block text-lg font-medium text-gray-700 mb-1">Product Type *</label>
                            <Select onValueChange={(value) => handleInputChange('productType', value)}>
                              <SelectTrigger className="text-lg h-12">
                                <SelectValue placeholder="Select product type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="automotive">Automotive Parts</SelectItem>
                                <SelectItem value="medical-device">Medical Device</SelectItem>
                                <SelectItem value="pharmaceutical">Pharmaceutical</SelectItem>
                                <SelectItem value="food-beverage">Food/Beverage</SelectItem>
                                <SelectItem value="household-appliance">Household Appliance</SelectItem>
                                <SelectItem value="electronics">Electronics</SelectItem>
                                <SelectItem value="toys">Toys/Children's Products</SelectItem>
                                <SelectItem value="tools-machinery">Tools/Machinery</SelectItem>
                                <SelectItem value="cosmetics">Cosmetics/Personal Care</SelectItem>
                                <SelectItem value="furniture">Furniture</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-lg font-medium text-gray-700 mb-1">Product Age</label>
                            <Input
                              value={formData.productAge}
                              onChange={(e) => handleInputChange('productAge', e.target.value)}
                              placeholder="How old was the product?"
                              className="text-lg h-12"
                            />
                          </div>
                          <div>
                            <label className="block text-lg font-medium text-gray-700 mb-1">Purchase Location</label>
                            <Input
                              value={formData.purchaseLocation}
                              onChange={(e) => handleInputChange('purchaseLocation', e.target.value)}
                              placeholder="Where was product purchased?"
                              className="text-lg h-12"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-lg font-medium text-gray-700 mb-1">Type of Defect *</label>
                          <Select onValueChange={(value) => handleInputChange('defectType', value)}>
                            <SelectTrigger className="text-lg h-12">
                              <SelectValue placeholder="Select defect type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="design-defect">Design Defect</SelectItem>
                              <SelectItem value="manufacturing-defect">Manufacturing Defect</SelectItem>
                              <SelectItem value="warning-defect">Inadequate Warnings/Instructions</SelectItem>
                              <SelectItem value="unknown">Unknown/Uncertain</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Injury Information */}
                    {currentStep === 3 && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-lg font-medium text-gray-700 mb-1">Location Where Injury Occurred</label>
                          <Input
                            value={formData.injuryLocation}
                            onChange={(e) => handleInputChange('injuryLocation', e.target.value)}
                            placeholder="Home, workplace, store, etc."
                            className="text-lg h-12"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-lg font-medium text-gray-700 mb-1">Type of Injury *</label>
                          <Select onValueChange={(value) => handleInputChange('injuryType', value)}>
                            <SelectTrigger className="text-lg h-12">
                              <SelectValue placeholder="Select primary injury type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="burns">Burns</SelectItem>
                              <SelectItem value="cuts-lacerations">Cuts/Lacerations</SelectItem>
                              <SelectItem value="broken-bones">Broken Bones</SelectItem>
                              <SelectItem value="head-brain-injury">Head/Brain Injury</SelectItem>
                              <SelectItem value="poisoning">Poisoning/Toxic Exposure</SelectItem>
                              <SelectItem value="allergic-reaction">Allergic Reaction</SelectItem>
                              <SelectItem value="eye-injury">Eye Injury</SelectItem>
                              <SelectItem value="electrical-shock">Electrical Shock</SelectItem>
                              <SelectItem value="choking">Choking</SelectItem>
                              <SelectItem value="internal-injury">Internal Injury</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <label className="block text-lg font-medium text-gray-700 mb-1">Severity Level *</label>
                          <Select onValueChange={(value) => handleInputChange('severityLevel', value)}>
                            <SelectTrigger className="text-lg h-12">
                              <SelectValue placeholder="Select injury severity" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="minor">Minor (first aid, no medical treatment)</SelectItem>
                              <SelectItem value="moderate">Moderate (doctor visit, outpatient treatment)</SelectItem>
                              <SelectItem value="serious">Serious (hospitalization, surgery)</SelectItem>
                              <SelectItem value="severe">Severe (permanent disability, disfigurement)</SelectItem>
                              <SelectItem value="fatal">Fatal</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <label className="block text-lg font-medium text-gray-700 mb-1">Medical Treatment Received</label>
                          <Select onValueChange={(value) => handleInputChange('medicalTreatment', value)}>
                            <SelectTrigger className="text-lg h-12">
                              <SelectValue placeholder="Select treatment received" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="none">No medical treatment</SelectItem>
                              <SelectItem value="first-aid">First aid only</SelectItem>
                              <SelectItem value="urgent-care">Urgent care visit</SelectItem>
                              <SelectItem value="emergency-room">Emergency room visit</SelectItem>
                              <SelectItem value="hospitalization">Hospitalization</SelectItem>
                              <SelectItem value="surgery">Surgery required</SelectItem>
                              <SelectItem value="ongoing">Ongoing medical treatment</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <label className="block text-lg font-medium text-gray-700 mb-1">Were You Hospitalized?</label>
                          <Select onValueChange={(value) => handleInputChange('hospitalization', value)}>
                            <SelectTrigger className="text-lg h-12">
                              <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="no">No hospitalization</SelectItem>
                              <SelectItem value="emergency-only">Emergency room only</SelectItem>
                              <SelectItem value="overnight">Overnight stay</SelectItem>
                              <SelectItem value="multiple-days">Multiple days</SelectItem>
                              <SelectItem value="extended">Extended hospitalization</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Case Details */}
                    {currentStep === 4 && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-lg font-medium text-gray-700 mb-1">Do You Still Have the Product?</label>
                          <Select onValueChange={(value) => handleInputChange('productPreserved', value)}>
                            <SelectTrigger className="text-lg h-12">
                              <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes-intact">Yes, product is intact</SelectItem>
                              <SelectItem value="yes-damaged">Yes, but product is damaged</SelectItem>
                              <SelectItem value="partially">Have some parts/pieces</SelectItem>
                              <SelectItem value="no">No, don't have product</SelectItem>
                              <SelectItem value="unknown">Unknown/Uncertain</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <label className="block text-lg font-medium text-gray-700 mb-1">Were There Witnesses?</label>
                          <Select onValueChange={(value) => handleInputChange('witnesses', value)}>
                            <SelectTrigger className="text-lg h-12">
                              <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes-multiple">Yes, multiple witnesses</SelectItem>
                              <SelectItem value="yes-one">Yes, one witness</SelectItem>
                              <SelectItem value="family-only">Family members only</SelectItem>
                              <SelectItem value="no">No witnesses</SelectItem>
                              <SelectItem value="unknown">Unknown</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <label className="block text-lg font-medium text-gray-700 mb-1">Previous Complaints About This Product?</label>
                          <Select onValueChange={(value) => handleInputChange('previousComplaints', value)}>
                            <SelectTrigger className="text-lg h-12">
                              <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes-recalls">Yes, recalls or safety notices</SelectItem>
                              <SelectItem value="yes-complaints">Yes, consumer complaints</SelectItem>
                              <SelectItem value="yes-lawsuits">Yes, other lawsuits</SelectItem>
                              <SelectItem value="no">No known complaints</SelectItem>
                              <SelectItem value="unknown">Unknown</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <label className="block text-lg font-medium text-gray-700 mb-1">Detailed Description of Incident *</label>
                          <Textarea
                            value={formData.description}
                            onChange={(e) => handleInputChange('description', e.target.value)}
                            placeholder="Please describe exactly what happened, how the product failed, and how you were injured. Include as much detail as possible."
                            rows={6}
                            required
                            className="text-lg"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-lg font-medium text-gray-700 mb-1">Is This an Urgent Matter?</label>
                          <Select onValueChange={(value) => handleInputChange('urgentNeed', value)}>
                            <SelectTrigger className="text-lg h-12">
                              <SelectValue placeholder="Select urgency level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="very-urgent">Very urgent - need immediate attention</SelectItem>
                              <SelectItem value="somewhat-urgent">Somewhat urgent - within a few days</SelectItem>
                              <SelectItem value="normal">Normal priority - within a week</SelectItem>
                              <SelectItem value="not-urgent">Not urgent - flexible timing</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="flex items-start space-x-2">
                          <input
                            type="checkbox"
                            id="consent"
                            checked={formData.consentToContact}
                            onChange={(e) => handleInputChange('consentToContact', e.target.checked)}
                            className="mt-1"
                            required
                          />
                          <label htmlFor="consent" className="text-lg text-gray-700">
                            I consent to be contacted by this law firm regarding my potential case. I understand that this submission does not create an attorney-client relationship. *
                          </label>
                        </div>
                      </div>
                    )}

                    <div className="flex justify-between pt-6">
                      {currentStep > 1 && (
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={prevStep}
                          className="text-lg px-6 py-3"
                        >
                          Previous Step
                        </Button>
                      )}
                      
                      {currentStep < 4 ? (
                        <Button 
                          type="button" 
                          onClick={nextStep}
                          className="bg-red-600 hover:bg-red-700 ml-auto text-lg px-6 py-3"
                        >
                          Next Step
                        </Button>
                      ) : (
                        <Button 
                          type="submit"
                          className="bg-red-600 hover:bg-red-700 ml-auto text-lg px-6 py-3"
                          disabled={!formData.consentToContact}
                        >
                          Submit Case Evaluation
                        </Button>
                      )}
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                
                {/* Contact Card */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                      <Phone className="w-5 h-5 text-red-600" />
                      Need Immediate Help?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <p className="text-lg text-gray-700 mb-4">Speak with an attorney now</p>
                      <Button 
                        size="lg" 
                        className="w-full bg-red-600 hover:bg-red-700 text-lg"
                        onClick={() => window.open('tel:8181234567')}
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        Call (818) 123-4567
                      </Button>
                      
                    </div>
                  </CardContent>
                </Card>

                {/* Why Choose Us */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">Why Choose Our Firm?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-lg text-gray-700">Former defense attorney insight</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-lg text-gray-700">No fees unless we win</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-lg text-gray-700">Free case evaluation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-lg text-gray-700">Experienced product liability team</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-lg text-gray-700">24/7 client support</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Case Value Factors */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">Case Value Factors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-lg text-gray-700">
                      <li>• Severity of injuries</li>
                      <li>• Medical expenses</li>
                      <li>• Lost wages</li>
                      <li>• Pain and suffering</li>
                      <li>• Product defect type</li>
                      <li>• Manufacturer liability</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLiabilityCaseEvaluation;