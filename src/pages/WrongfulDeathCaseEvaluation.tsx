import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import ThreeDVisualEffects from '@/components/ThreeDVisualEffects';
import '@/styles/premium-3d-effects.css';
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
  Star
} from 'lucide-react';
import heroBackground from '@/assets/wrongful-death-case-evaluation-hero.jpg';
import SEO from '@/components/SEO';

const WrongfulDeathCaseEvaluation: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfDeath: '',
    ageOfDeceased: '',
    causeOfDeath: '',
    relationship: '',
    incomeOfDeceased: '',
    dependents: '',
    insurance: '',
    policeReport: '',
    witnessesAvailable: '',
    previousLegalAction: '',
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
    
    const subject = 'Wrongful Death Case Evaluation - Complete Assessment';
    const body = `
WRONGFUL DEATH CASE EVALUATION REQUEST

Personal Information:
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Relationship to Deceased: ${formData.relationship}

Incident Details:
Date of Death: ${formData.dateOfDeath}
Age of Deceased: ${formData.ageOfDeceased}
Cause of Death: ${formData.causeOfDeath}
Description: ${formData.description}

Financial Information:
Income of Deceased: ${formData.incomeOfDeceased}
Number of Dependents: ${formData.dependents}
Insurance Available: ${formData.insurance}

Case Status:
Police Report Filed: ${formData.policeReport}
Witnesses Available: ${formData.witnessesAvailable}
Previous Legal Action: ${formData.previousLegalAction}
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
          title="Thank You - Wrongful Death Case Evaluation Submitted"
          description="Your wrongful death case evaluation has been submitted. Our experienced attorneys will review your case and contact you within 24 hours."
          canonical="/wrongful-death-case-evaluation"
        />


        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Thank You for Your Submission
            </h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Your wrongful death case evaluation has been submitted successfully. Our experienced attorneys will review your case details and contact you within 24 hours to discuss your legal options.
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
                  <span>We conduct preliminary legal research on your case type</span>
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
                Call Now: (818) 123-4567
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/practice-areas/wrongful-death')}
              >
                Return to Wrongful Death
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
        title="Free Wrongful Death Case Evaluation | California Attorney | Expert Legal Assessment"
        description="Get a free comprehensive wrongful death case evaluation from experienced California attorneys. Former defense attorney insight. No fees unless we win your case."
        canonical="/wrongful-death-case-evaluation"
      />

      

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
              Wrongful Death Case Evaluation
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Get a comprehensive assessment of your wrongful death case from experienced California attorneys. Former defense attorney providing insider perspective.
            </p>
            <div className="flex items-center justify-center gap-6 text-white">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                <span>No Fees Unless We Win</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Confidential</span>
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
              <ThreeDVisualEffects>
                <Card className="shadow-xl premium-form-container interactive-card">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-blue-600 font-display">
                      {currentStep === 1 && "Personal & Contact Information"}
                      {currentStep === 2 && "Incident Details"}
                      {currentStep === 3 && "Financial & Legal Information"}
                      {currentStep === 4 && "Case Description & Priority"}
                    </CardTitle>
                    <p className="text-white">
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
                            <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                            <Input
                              value={formData.firstName}
                              onChange={(e) => handleInputChange('firstName', e.target.value)}
                              required
                              className="text-base"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                            <Input
                              value={formData.lastName}
                              onChange={(e) => handleInputChange('lastName', e.target.value)}
                              required
                              className="text-base"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                          <Input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            required
                            className="text-base"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                          <Input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            required
                            className="text-base"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Your Relationship to Deceased *</label>
                          <Select onValueChange={(value) => handleInputChange('relationship', value)}>
                            <SelectTrigger className="text-base">
                              <SelectValue placeholder="Select your relationship" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="spouse">Spouse</SelectItem>
                              <SelectItem value="child">Child</SelectItem>
                              <SelectItem value="parent">Parent</SelectItem>
                              <SelectItem value="sibling">Sibling</SelectItem>
                              <SelectItem value="domestic-partner">Domestic Partner</SelectItem>
                              <SelectItem value="grandparent">Grandparent</SelectItem>
                              <SelectItem value="dependent">Financial Dependent</SelectItem>
                              <SelectItem value="other">Other Family Member</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Incident Details */}
                    {currentStep === 2 && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Date of Death *</label>
                            <Input
                              type="date"
                              value={formData.dateOfDeath}
                              onChange={(e) => handleInputChange('dateOfDeath', e.target.value)}
                              required
                              className="text-base"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Age of Deceased</label>
                            <Input
                              type="number"
                              value={formData.ageOfDeceased}
                              onChange={(e) => handleInputChange('ageOfDeceased', e.target.value)}
                              placeholder="Age at time of death"
                              className="text-base"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Primary Cause of Death *</label>
                          <Select onValueChange={(value) => handleInputChange('causeOfDeath', value)}>
                            <SelectTrigger className="text-base">
                              <SelectValue placeholder="Select cause of death" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="motor-vehicle">Motor Vehicle Accident</SelectItem>
                              <SelectItem value="medical-malpractice">Medical Malpractice</SelectItem>
                              <SelectItem value="workplace-accident">Workplace Accident</SelectItem>
                              <SelectItem value="premises-liability">Slip & Fall / Premises Liability</SelectItem>
                              <SelectItem value="product-defect">Defective Product</SelectItem>
                              <SelectItem value="nursing-home">Nursing Home Neglect</SelectItem>
                              <SelectItem value="construction">Construction Accident</SelectItem>
                              <SelectItem value="criminal-act">Criminal Act</SelectItem>
                              <SelectItem value="drowning">Drowning</SelectItem>
                              <SelectItem value="fire">Fire or Explosion</SelectItem>
                              <SelectItem value="toxic-exposure">Toxic Exposure</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Police Report Filed?</label>
                          <Select onValueChange={(value) => handleInputChange('policeReport', value)}>
                            <SelectTrigger className="text-base">
                              <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes">Yes, report was filed</SelectItem>
                              <SelectItem value="no">No report filed</SelectItem>
                              <SelectItem value="unknown">I don't know</SelectItem>
                              <SelectItem value="not-applicable">Not applicable</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Are there witnesses to the incident?</label>
                          <Select onValueChange={(value) => handleInputChange('witnessesAvailable', value)}>
                            <SelectTrigger className="text-base">
                              <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes">Yes, witnesses available</SelectItem>
                              <SelectItem value="no">No witnesses</SelectItem>
                              <SelectItem value="unknown">Unknown</SelectItem>
                              <SelectItem value="some">Some potential witnesses</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Financial & Legal Information */}
                    {currentStep === 3 && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Deceased's Annual Income (if known)</label>
                          <Select onValueChange={(value) => handleInputChange('incomeOfDeceased', value)}>
                            <SelectTrigger className="text-base">
                              <SelectValue placeholder="Select income range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under-30k">Under $30,000</SelectItem>
                              <SelectItem value="30k-50k">$30,000 - $50,000</SelectItem>
                              <SelectItem value="50k-75k">$50,000 - $75,000</SelectItem>
                              <SelectItem value="75k-100k">$75,000 - $100,000</SelectItem>
                              <SelectItem value="100k-150k">$100,000 - $150,000</SelectItem>
                              <SelectItem value="150k-250k">$150,000 - $250,000</SelectItem>
                              <SelectItem value="over-250k">Over $250,000</SelectItem>
                              <SelectItem value="unknown">Unknown</SelectItem>
                              <SelectItem value="retired">Retired</SelectItem>
                              <SelectItem value="student">Student</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Number of Financial Dependents</label>
                          <Select onValueChange={(value) => handleInputChange('dependents', value)}>
                            <SelectTrigger className="text-base">
                              <SelectValue placeholder="Select number of dependents" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0">No dependents</SelectItem>
                              <SelectItem value="1">1 dependent</SelectItem>
                              <SelectItem value="2">2 dependents</SelectItem>
                              <SelectItem value="3">3 dependents</SelectItem>
                              <SelectItem value="4">4 dependents</SelectItem>
                              <SelectItem value="5-plus">5 or more dependents</SelectItem>
                              <SelectItem value="unknown">Unknown</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Insurance Information</label>
                          <Select onValueChange={(value) => handleInputChange('insurance', value)}>
                            <SelectTrigger className="text-base">
                              <SelectValue placeholder="Select insurance status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="auto-insurance">Auto insurance covers incident</SelectItem>
                              <SelectItem value="life-insurance">Life insurance policy exists</SelectItem>
                              <SelectItem value="homeowners">Homeowner's/renter's insurance</SelectItem>
                              <SelectItem value="workers-comp">Worker's compensation claim</SelectItem>
                              <SelectItem value="multiple">Multiple insurance policies</SelectItem>
                              <SelectItem value="unknown">Unknown insurance status</SelectItem>
                              <SelectItem value="none">No relevant insurance</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Previous Legal Action</label>
                          <Select onValueChange={(value) => handleInputChange('previousLegalAction', value)}>
                            <SelectTrigger className="text-base">
                              <SelectValue placeholder="Select legal action status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="none">No previous legal action</SelectItem>
                              <SelectItem value="consulted">Consulted with other attorneys</SelectItem>
                              <SelectItem value="filed">Lawsuit already filed</SelectItem>
                              <SelectItem value="settled">Previous settlement reached</SelectItem>
                              <SelectItem value="denied">Case was denied/rejected</SelectItem>
                              <SelectItem value="investigating">Still investigating options</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Case Description */}
                    {currentStep === 4 && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Describe what happened (be as detailed as possible) *</label>
                          <Textarea
                            value={formData.description}
                            onChange={(e) => handleInputChange('description', e.target.value)}
                            placeholder="Please provide a detailed description of the incident that led to your loved one's death. Include relevant dates, locations, people involved, and any other important details..."
                            rows={6}
                            required
                            className="text-base"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Do you have urgent legal needs?</label>
                          <Select onValueChange={(value) => handleInputChange('urgentNeed', value)}>
                            <SelectTrigger className="text-base">
                              <SelectValue placeholder="Select urgency level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="very-urgent">Very urgent - deadline approaching</SelectItem>
                              <SelectItem value="urgent">Urgent - need response within days</SelectItem>
                              <SelectItem value="normal">Normal - can wait for thorough review</SelectItem>
                              <SelectItem value="exploratory">Exploratory - gathering information</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                          <input
                            type="checkbox"
                            id="consent"
                            checked={formData.consentToContact}
                            onChange={(e) => handleInputChange('consentToContact', e.target.checked)}
                            className="mt-1"
                            required
                          />
                          <label htmlFor="consent" className="text-sm text-blue-900">
                            I consent to be contacted by Trembach Law regarding my case evaluation. I understand this communication is confidential and protected by attorney-client privilege. I agree to receive calls, texts, and emails at the contact information provided. *
                          </label>
                        </div>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between pt-6">
                      <div>
                        {currentStep > 1 && (
                          <Button type="button" variant="outline" onClick={prevStep} className="text-base">
                            Previous Step
                          </Button>
                        )}
                      </div>
                      
                      <div>
                        {currentStep < 4 ? (
                          <Button type="button" onClick={nextStep} className="bg-red-600 hover:bg-red-700 text-base">
                            Next Step
                          </Button>
                        ) : (
                          <Button type="submit" className="bg-red-600 hover:bg-red-700 text-base px-8">
                            Submit Case Evaluation
                          </Button>
                        )}
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
              </ThreeDVisualEffects>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                
                {/* Contact Card */}
                <Card className="shadow-lg bg-gradient-to-br from-red-50 to-red-100 border-red-200">
                  <CardHeader>
                    <CardTitle className="text-red-900">Need Immediate Help?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-base"
                      onClick={() => window.open('tel:8181234567')}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call (818) 123-4567
                    </Button>
                    
                    <p className="text-sm text-red-800">
                      Available 24/7 for urgent wrongful death matters. Free consultation with experienced attorney.
                    </p>
                  </CardContent>
                </Card>

                {/* Why Choose Us */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-gray-900">
                      <Star className="w-5 h-5 text-yellow-500" />
                      Why Choose Our Firm?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <Shield className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Former Defense Attorney:</strong> I know insurance company tactics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <DollarSign className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>No Fees Unless We Win:</strong> Contingency-based representation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Quick Response:</strong> 24-hour case evaluation turnaround</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Users className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Compassionate Service:</strong> Understanding your grief and loss</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Scale className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Proven Results:</strong> Maximizing compensation for families</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Important Deadlines */}
                <Card className="shadow-lg bg-yellow-50 border-yellow-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-yellow-900">
                      <AlertTriangle className="w-5 h-5" />
                      Important Deadlines
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-yellow-800">
                      <li><strong>General:</strong> 2 years from date of death</li>
                      <li><strong>Medical Malpractice:</strong> 1-3 years (varies)</li>
                      <li><strong>Government Claims:</strong> 6 months to file claim</li>
                      <li><strong>Evidence:</strong> Disappears quickly - act now</li>
                    </ul>
                    <p className="text-xs text-yellow-700 mt-3">
                      Don't wait - deadlines are strict and missing them bars your claim forever.
                    </p>
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

export default WrongfulDeathCaseEvaluation;