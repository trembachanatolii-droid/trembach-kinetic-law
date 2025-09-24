import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Star, 
  CheckCircle, 
  ArrowRight,
  ArrowLeft,
  ShoppingCart,
  FileText,
  User,
  Stethoscope,
  AlertTriangle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';
import '../../../styles/retail-accidents.css';
import heroBackground from '@/assets/practice-areas/retail-case-evaluation-hero.jpg';

interface FormData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Accident Details
  accidentDate: string;
  storeName: string;
  storeLocation: string;
  accidentType: string;
  accidentDescription: string;
  
  // Injury Information
  injuriesDescription: string;
  medicalTreatment: string;
  hospitalName: string;
  ongoingTreatment: string;
  
  // Additional Information
  witnessesPresent: string;
  incidentReportFiled: string;
  photosTaken: string;
  previousInjuries: string;
  
  // Legal
  attorneyConsulted: string;
  insuranceClaimed: string;
}

const CaseEvaluation: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    accidentDate: '',
    storeName: '',
    storeLocation: '',
    accidentType: '',
    accidentDescription: '',
    injuriesDescription: '',
    medicalTreatment: '',
    hospitalName: '',
    ongoingTreatment: '',
    witnessesPresent: '',
    incidentReportFiled: '',
    photosTaken: '',
    previousInjuries: '',
    attorneyConsulted: '',
    insuranceClaimed: ''
  });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const handleInputChange = (field: keyof FormData, value: string) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you within 24 hours to discuss your case.');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <User className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary">Personal Information</h3>
              <p className="text-muted-foreground">Let's start with your basic information</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <ShoppingCart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary">Accident Details</h3>
              <p className="text-muted-foreground">Tell us about your retail store accident</p>
            </div>

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
                <Label htmlFor="accidentType">Type of Accident *</Label>
                <Select value={formData.accidentType} onValueChange={(value) => handleInputChange('accidentType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select accident type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="slip-fall">Slip and Fall</SelectItem>
                    <SelectItem value="falling-merchandise">Falling Merchandise</SelectItem>
                    <SelectItem value="trip-fall">Trip and Fall</SelectItem>
                    <SelectItem value="shopping-cart">Shopping Cart Accident</SelectItem>
                    <SelectItem value="inadequate-lighting">Poor Lighting</SelectItem>
                    <SelectItem value="negligent-security">Security Related</SelectItem>
                    <SelectItem value="defective-equipment">Defective Equipment</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="storeName">Store Name *</Label>
                <Select value={formData.storeName} onValueChange={(value) => handleInputChange('storeName', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select store" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="walmart">Walmart</SelectItem>
                    <SelectItem value="target">Target</SelectItem>
                    <SelectItem value="costco">Costco</SelectItem>
                    <SelectItem value="home-depot">Home Depot</SelectItem>
                    <SelectItem value="lowes">Lowe's</SelectItem>
                    <SelectItem value="kroger">Kroger</SelectItem>
                    <SelectItem value="safeway">Safeway</SelectItem>
                    <SelectItem value="cvs">CVS</SelectItem>
                    <SelectItem value="walgreens">Walgreens</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="storeLocation">Store Location (City, State) *</Label>
                <Input
                  id="storeLocation"
                  type="text"
                  value={formData.storeLocation}
                  onChange={(e) => handleInputChange('storeLocation', e.target.value)}
                  placeholder="e.g., Los Angeles, CA"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="accidentDescription">Describe What Happened *</Label>
              <Textarea
                id="accidentDescription"
                value={formData.accidentDescription}
                onChange={(e) => handleInputChange('accidentDescription', e.target.value)}
                placeholder="Please provide a detailed description of how the accident occurred..."
                rows={4}
                required
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Stethoscope className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary">Injury Information</h3>
              <p className="text-muted-foreground">Help us understand your injuries and treatment</p>
            </div>

            <div>
              <Label htmlFor="injuriesDescription">Describe Your Injuries *</Label>
              <Textarea
                id="injuriesDescription"
                value={formData.injuriesDescription}
                onChange={(e) => handleInputChange('injuriesDescription', e.target.value)}
                placeholder="Please describe all injuries you sustained in the accident..."
                rows={3}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="medicalTreatment">Did You Receive Medical Treatment? *</Label>
                <Select value={formData.medicalTreatment} onValueChange={(value) => handleInputChange('medicalTreatment', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="emergency-room">Emergency Room</SelectItem>
                    <SelectItem value="urgent-care">Urgent Care</SelectItem>
                    <SelectItem value="doctor-office">Doctor's Office</SelectItem>
                    <SelectItem value="hospital-admission">Hospital Admission</SelectItem>
                    <SelectItem value="no-treatment">No Treatment Yet</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="hospitalName">Hospital/Medical Facility Name</Label>
                <Input
                  id="hospitalName"
                  type="text"
                  value={formData.hospitalName}
                  onChange={(e) => handleInputChange('hospitalName', e.target.value)}
                  placeholder="Name of hospital or medical facility"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="ongoingTreatment">Are You Currently Receiving Ongoing Treatment? *</Label>
              <Select value={formData.ongoingTreatment} onValueChange={(value) => handleInputChange('ongoingTreatment', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes, receiving ongoing treatment</SelectItem>
                  <SelectItem value="no">No ongoing treatment</SelectItem>
                  <SelectItem value="scheduled">Treatment scheduled</SelectItem>
                  <SelectItem value="uncertain">Uncertain at this time</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary">Additional Details</h3>
              <p className="text-muted-foreground">Final details to help us evaluate your case</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="witnessesPresent">Were There Witnesses? *</Label>
                <Select value={formData.witnessesPresent} onValueChange={(value) => handleInputChange('witnessesPresent', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes, witnesses present</SelectItem>
                    <SelectItem value="no">No witnesses</SelectItem>
                    <SelectItem value="uncertain">Uncertain</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="incidentReportFiled">Was an Incident Report Filed? *</Label>
                <Select value={formData.incidentReportFiled} onValueChange={(value) => handleInputChange('incidentReportFiled', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes, report filed</SelectItem>
                    <SelectItem value="no">No report filed</SelectItem>
                    <SelectItem value="uncertain">Don't know</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="photosTaken">Did You Take Photos? *</Label>
                <Select value={formData.photosTaken} onValueChange={(value) => handleInputChange('photosTaken', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes, photos taken</SelectItem>
                    <SelectItem value="no">No photos taken</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="attorneyConsulted">Have You Consulted Another Attorney? *</Label>
                <Select value={formData.attorneyConsulted} onValueChange={(value) => handleInputChange('attorneyConsulted', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no">No, you are my first contact</SelectItem>
                    <SelectItem value="yes">Yes, consulted another attorney</SelectItem>
                    <SelectItem value="considering">Considering other attorneys</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="previousInjuries">Do You Have Any Pre-existing Injuries Related to the Affected Area?</Label>
              <Textarea
                id="previousInjuries"
                value={formData.previousInjuries}
                onChange={(e) => handleInputChange('previousInjuries', e.target.value)}
                placeholder="Please describe any previous injuries to the same body parts (this won't hurt your case)"
                rows={2}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
        <div className="retail-accidents-page">
          {/* 3D Background Layers */}
          <div className="floating-layer-back"></div>
          <div className="floating-layer-mid"></div>
          <div className="floating-layer-front"></div>
      <SEO
        title="Free Retail Store Accident Case Evaluation | Trembach Law Firm"
        description="Get a free case evaluation for your California retail store accident. Former defense attorney fights for maximum compensation. No fees unless we win."
        keywords="retail store accident evaluation, California slip fall lawyer, free case review, shopping injury attorney"
      />

      <GoBack fallbackPath="/practice-areas/retail-accidents" />

      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Free Case Evaluation
          </h1>
          <p className="text-xl mb-6 text-white">
            Get Your California Retail Store Accident Case Reviewed by Former Defense Attorney
          </p>
          <div className="flex items-center justify-center gap-2">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="ml-2 text-white">No Fees Unless We Win</span>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Main Form Column */}
          <div className="lg:col-span-3">
            <Card className="glass-card p-8">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-primary">Step {currentStep} of {totalSteps}</span>
                  <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
                </div>
                <Progress value={progress} className="w-full" />
              </div>

              <form onSubmit={currentStep === totalSteps ? handleSubmit : (e) => e.preventDefault()}>
                {renderStep()}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-8 mt-8 border-t">
                  {currentStep > 1 ? (
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={prevStep}
                      className="flex items-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Previous
                    </Button>
                  ) : (
                    <div></div>
                  )}

                  {currentStep < totalSteps ? (
                    <Button 
                      type="button" 
                      onClick={nextStep}
                      className="flex items-center gap-2 bg-primary hover:bg-primary/90"
                    >
                      Next Step
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  ) : (
                    <Button 
                      type="submit"
                      className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Submit Case for Review
                    </Button>
                  )}
                </div>
              </form>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              
              {/* Contact Card */}
              <Card className="glass-card p-6 bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
                <h3 className="text-xl font-bold text-center mb-4 text-primary">Need Help Now?</h3>
                
                <div className="space-y-3">
                  <Button 
                    asChild
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    <a href="tel:(818) 123-4567" className="flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      Call (818) 123-4567
                    </a>
                  </Button>
                  
                  <div className="text-center text-sm text-muted-foreground">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Available 24/7
                    </Badge>
                  </div>
                </div>
              </Card>

              {/* Benefits Card */}
              <Card className="glass-card p-6">
                <h4 className="font-bold text-lg mb-4 text-primary">What to Expect:</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Free case review within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>No fees unless we win your case</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Former defense attorney advantage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Confidential consultation</span>
                  </li>
                </ul>
              </Card>

              {/* Trust Indicators */}
              <Card className="glass-card p-6">
                <div className="text-center">
                  <Badge variant="secondary" className="mb-3">
                    California State Bar #349304
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    Licensed attorney with years of experience representing retail accident victims throughout California.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseEvaluation;