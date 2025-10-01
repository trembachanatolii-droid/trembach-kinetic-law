import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  FileText, 
  AlertTriangle,
  Clock,
  Shield,
  CheckCircle,
  Scale,
  Heart,
  MapPin,
  Calendar,
  User,
  Building,
  Stethoscope,
  FlaskConical,
  Award
} from 'lucide-react';
import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import heroBackground from '@/assets/environmental-toxic-case-evaluation-hero.jpg';
import ThreeDVisualEffects from '@/components/ThreeDVisualEffects';
import '@/styles/premium-3d-effects.css';

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    zipCode: string;
  };
  exposureInfo: {
    exposureType: string[];
    exposureLocation: string;
    exposureDuration: string;
    exposureSource: string;
    whenDiscovered: string;
  };
  healthInfo: {
    healthEffects: string[];
    diagnosisDate: string;
    medicalTreatment: string;
    ongoingSymptoms: string;
  };
  propertyInfo: {
    propertyDamage: string;
    propertyValue: string;
    remediationCosts: string;
  };
  additionalInfo: {
    previousLegalAction: string;
    urgency: string;
    additionalDetails: string;
  };
}

const EnvironmentalToxicCaseEvaluation: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      zipCode: ''
    },
    exposureInfo: {
      exposureType: [],
      exposureLocation: '',
      exposureDuration: '',
      exposureSource: '',
      whenDiscovered: ''
    },
    healthInfo: {
      healthEffects: [],
      diagnosisDate: '',
      medicalTreatment: '',
      ongoingSymptoms: ''
    },
    propertyInfo: {
      propertyDamage: '',
      propertyValue: '',
      remediationCosts: ''
    },
    additionalInfo: {
      previousLegalAction: '',
      urgency: '',
      additionalDetails: ''
    }
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const seo = {
    title: "Environmental Toxic Exposure Case Evaluation | Free Consultation",
    description: "Get a free case evaluation for environmental toxic exposure. Expert legal assessment of PFAS, TCE, chemical contamination claims in California.",
    canonical: "/environmental-toxic-case-evaluation"
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );

      gsap.fromTo('.step-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.step-card',
            start: 'top 80%'
          }
        }
      );
    });

    return () => ctx.revert();
  }, [currentStep]);

  const updateFormData = (section: keyof FormData, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const toggleArrayValue = (section: keyof FormData, field: string, value: string) => {
    setFormData(prev => {
      const currentArray = (prev[section] as any)[field] as string[];
      const newArray = currentArray.includes(value) 
        ? currentArray.filter(item => item !== value)
        : [...currentArray, value];
      
      return {
        ...prev,
        [section]: {
          ...prev[section],
          [field]: newArray
        }
      };
    });
  };

  const nextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const submitForm = () => {
    // In real implementation, this would submit to your backend
    console.log('Form submitted:', formData);
    alert('Thank you! Your case evaluation has been submitted. We will contact you within 24 hours.');
  };

  const steps = [
    { number: 1, title: 'Personal Information', icon: User },
    { number: 2, title: 'Exposure Details', icon: FlaskConical },
    { number: 3, title: 'Health Effects', icon: Heart },
    { number: 4, title: 'Property Impact', icon: Building },
    { number: 5, title: 'Additional Details', icon: FileText },
    { number: 6, title: 'Review & Submit', icon: CheckCircle }
  ];

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">First Name *</label>
                <Input
                  value={formData.personalInfo.firstName}
                  onChange={(e) => updateFormData('personalInfo', 'firstName', e.target.value)}
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name *</label>
                <Input
                  value={formData.personalInfo.lastName}
                  onChange={(e) => updateFormData('personalInfo', 'lastName', e.target.value)}
                  placeholder="Enter your last name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <Input
                  type="email"
                  value={formData.personalInfo.email}
                  onChange={(e) => updateFormData('personalInfo', 'email', e.target.value)}
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number *</label>
                <Input
                  type="tel"
                  value={formData.personalInfo.phone}
                  onChange={(e) => updateFormData('personalInfo', 'phone', e.target.value)}
                  placeholder="(555) 123-4567"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Address *</label>
                <Input
                  value={formData.personalInfo.address}
                  onChange={(e) => updateFormData('personalInfo', 'address', e.target.value)}
                  placeholder="Street address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">City *</label>
                <Input
                  value={formData.personalInfo.city}
                  onChange={(e) => updateFormData('personalInfo', 'city', e.target.value)}
                  placeholder="City"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">ZIP Code *</label>
                <Input
                  value={formData.personalInfo.zipCode}
                  onChange={(e) => updateFormData('personalInfo', 'zipCode', e.target.value)}
                  placeholder="12345"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Exposure Details</h3>
            
            <div>
              <label className="block text-sm font-medium mb-4">Types of Toxic Exposure (Select all that apply) *</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'PFAS "Forever Chemicals"',
                  'TCE/PCE Solvents',
                  'Hexavalent Chromium',
                  'Benzene',
                  'Heavy Metals (Lead, Mercury)',
                  'Pesticides/Herbicides',
                  'Asbestos',
                  'VOCs (Volatile Organic Compounds)',
                  'Industrial Chemicals',
                  'Other/Unknown'
                ].map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox
                      checked={formData.exposureInfo.exposureType.includes(type)}
                      onCheckedChange={() => toggleArrayValue('exposureInfo', 'exposureType', type)}
                    />
                    <label className="text-sm">{type}</label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Where did the exposure occur? *</label>
              <Input
                value={formData.exposureInfo.exposureLocation}
                onChange={(e) => updateFormData('exposureInfo', 'exposureLocation', e.target.value)}
                placeholder="e.g., Home, workplace, neighborhood, military base"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Duration of Exposure *</label>
              <Select value={formData.exposureInfo.exposureDuration} onValueChange={(value) => updateFormData('exposureInfo', 'exposureDuration', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="days">Days to weeks</SelectItem>
                  <SelectItem value="months">Months</SelectItem>
                  <SelectItem value="1-5-years">1-5 years</SelectItem>
                  <SelectItem value="5-15-years">5-15 years</SelectItem>
                  <SelectItem value="15-plus-years">15+ years</SelectItem>
                  <SelectItem value="unknown">Unknown</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Source of Contamination</label>
              <Input
                value={formData.exposureInfo.exposureSource}
                onChange={(e) => updateFormData('exposureInfo', 'exposureSource', e.target.value)}
                placeholder="e.g., Factory, dry cleaner, military base, landfill"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">When did you discover the contamination? *</label>
              <Select value={formData.exposureInfo.whenDiscovered} onValueChange={(value) => updateFormData('exposureInfo', 'whenDiscovered', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select timeframe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="within-6-months">Within 6 months</SelectItem>
                  <SelectItem value="6-months-to-2-years">6 months to 2 years ago</SelectItem>
                  <SelectItem value="2-5-years">2-5 years ago</SelectItem>
                  <SelectItem value="5-plus-years">5+ years ago</SelectItem>
                  <SelectItem value="ongoing">Ongoing discovery</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Health Effects</h3>
            
            <div>
              <label className="block text-sm font-medium mb-4">Health Effects You've Experienced (Select all that apply)</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Cancer diagnosis',
                  'Neurological disorders',
                  'Reproductive/fertility issues',
                  'Birth defects in children',
                  'Respiratory problems',
                  'Liver damage',
                  'Kidney problems',
                  'Immune system disorders',
                  'Skin conditions',
                  'Blood disorders',
                  'Thyroid problems',
                  'Other serious illness'
                ].map((effect) => (
                  <div key={effect} className="flex items-center space-x-2">
                    <Checkbox
                      checked={formData.healthInfo.healthEffects.includes(effect)}
                      onCheckedChange={() => toggleArrayValue('healthInfo', 'healthEffects', effect)}
                    />
                    <label className="text-sm">{effect}</label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Date of Diagnosis (if applicable)</label>
              <Input
                type="date"
                value={formData.healthInfo.diagnosisDate}
                onChange={(e) => updateFormData('healthInfo', 'diagnosisDate', e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Current Medical Treatment</label>
              <Select value={formData.healthInfo.medicalTreatment} onValueChange={(value) => updateFormData('healthInfo', 'medicalTreatment', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select treatment status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ongoing">Ongoing treatment</SelectItem>
                  <SelectItem value="completed">Treatment completed</SelectItem>
                  <SelectItem value="scheduled">Treatment scheduled</SelectItem>
                  <SelectItem value="none">No treatment needed</SelectItem>
                  <SelectItem value="unable">Unable to afford treatment</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Ongoing Symptoms</label>
              <Textarea
                value={formData.healthInfo.ongoingSymptoms}
                onChange={(e) => updateFormData('healthInfo', 'ongoingSymptoms', e.target.value)}
                placeholder="Describe any ongoing symptoms or health concerns"
                rows={4}
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Property Impact</h3>
            
            <div>
              <label className="block text-sm font-medium mb-2">Property Damage Level</label>
              <Select value={formData.propertyInfo.propertyDamage} onValueChange={(value) => updateFormData('propertyInfo', 'propertyDamage', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select damage level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No property damage</SelectItem>
                  <SelectItem value="minor">Minor contamination/impact</SelectItem>
                  <SelectItem value="significant">Significant damage/cleanup needed</SelectItem>
                  <SelectItem value="severe">Severe damage/property uninhabitable</SelectItem>
                  <SelectItem value="unknown">Unknown/being assessed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Estimated Property Value Before Contamination</label>
              <Input
                value={formData.propertyInfo.propertyValue}
                onChange={(e) => updateFormData('propertyInfo', 'propertyValue', e.target.value)}
                placeholder="e.g., $500,000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Estimated Remediation/Cleanup Costs</label>
              <Input
                value={formData.propertyInfo.remediationCosts}
                onChange={(e) => updateFormData('propertyInfo', 'remediationCosts', e.target.value)}
                placeholder="e.g., $50,000 or Unknown"
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Additional Details</h3>
            
            <div>
              <label className="block text-sm font-medium mb-2">Previous Legal Action</label>
              <Select value={formData.additionalInfo.previousLegalAction} onValueChange={(value) => updateFormData('additionalInfo', 'previousLegalAction', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No previous legal action</SelectItem>
                  <SelectItem value="consultation">Consulted with other attorneys</SelectItem>
                  <SelectItem value="filed">Filed a claim/lawsuit</SelectItem>
                  <SelectItem value="settled">Previously settled a related case</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Urgency Level</label>
              <Select value={formData.additionalInfo.urgency} onValueChange={(value) => updateFormData('additionalInfo', 'urgency', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select urgency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediate">Immediate - serious health crisis</SelectItem>
                  <SelectItem value="urgent">Urgent - approaching deadlines</SelectItem>
                  <SelectItem value="standard">Standard - want to explore options</SelectItem>
                  <SelectItem value="informational">Informational - gathering information</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Additional Details</label>
              <Textarea
                value={formData.additionalInfo.additionalDetails}
                onChange={(e) => updateFormData('additionalInfo', 'additionalDetails', e.target.value)}
                placeholder="Please provide any additional information about your case that might be helpful"
                rows={6}
              />
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Review & Submit</h3>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p><strong>Name:</strong> {formData.personalInfo.firstName} {formData.personalInfo.lastName}</p>
                  <p><strong>Email:</strong> {formData.personalInfo.email}</p>
                  <p><strong>Phone:</strong> {formData.personalInfo.phone}</p>
                  <p><strong>Address:</strong> {formData.personalInfo.address}, {formData.personalInfo.city} {formData.personalInfo.zipCode}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FlaskConical className="w-5 h-5 mr-2" />
                    Exposure Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p><strong>Exposure Types:</strong> {formData.exposureInfo.exposureType.join(', ') || 'None selected'}</p>
                  <p><strong>Location:</strong> {formData.exposureInfo.exposureLocation}</p>
                  <p><strong>Duration:</strong> {formData.exposureInfo.exposureDuration}</p>
                  <p><strong>When Discovered:</strong> {formData.exposureInfo.whenDiscovered}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="w-5 h-5 mr-2" />
                    Health Effects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p><strong>Health Effects:</strong> {formData.healthInfo.healthEffects.join(', ') || 'None selected'}</p>
                  <p><strong>Diagnosis Date:</strong> {formData.healthInfo.diagnosisDate || 'Not provided'}</p>
                  <p><strong>Treatment Status:</strong> {formData.healthInfo.medicalTreatment}</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-3">What Happens Next?</h4>
              <ul className="text-green-700 space-y-2 text-sm">
                <li>• We'll review your case within 24 hours</li>
                <li>• An experienced attorney will contact you for a free consultation</li>
                <li>• We'll explain your legal options and potential compensation</li>
                <li>• If we take your case, you pay nothing until we win</li>
                <li>• We'll handle all legal work while you focus on your health</li>
              </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO {...seo} />
      <Navigation />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <Scale className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-2xl">
              Environmental Toxic Exposure Case Evaluation
            </h1>
            <p className="text-xl mb-6 text-white drop-shadow-xl">
              Get Your Free Legal Assessment Today - Expert evaluation with no upfront costs
            </p>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                  currentStep >= step.number 
                    ? 'bg-primary text-white border-primary' 
                    : 'bg-white text-gray-400 border-gray-300'
                }`}>
                  <step.icon className="w-5 h-5" />
                </div>
                <div className="ml-3 hidden md:block">
                  <p className={`text-sm font-medium ${
                    currentStep >= step.number ? 'text-primary' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-8 h-0.5 mx-4 ${
                    currentStep > step.number ? 'bg-primary' : 'bg-gray-300'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <Card className="step-card shadow-lg">
            <CardContent className="p-8">
              {renderStepContent()}
              
              <div className="flex justify-between mt-8">
                <Button 
                  variant="outline" 
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={currentStep === 1 ? 'invisible' : ''}
                >
                  Previous
                </Button>
                
                {currentStep < 6 ? (
                  <Button 
                    onClick={nextStep}
                    className="bg-primary hover:bg-primary/90"
                  >
                    Next Step
                  </Button>
                ) : (
                  <Button 
                    onClick={submitForm}
                    className="bg-green-600 hover:bg-green-700 font-bold"
                  >
                    Submit Case Evaluation
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Phone className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Call Now</h3>
              <p className="text-sm text-gray-600 mb-4">Speak with an attorney today</p>
              <Button 
                className="w-full"
                onClick={() => window.location.href = 'tel:8181234567'}
              >
                (818) 123-4567
              </Button>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Mail className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-sm text-gray-600 mb-4">Send us your questions</p>
              <Button 
                variant="outline"
                className="w-full"
                onClick={() => window.location.href = 'mailto:contact@lawfirm.com'}
              >
                Send Email
              </Button>
            </Card>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Environmental Law Team?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">25+ Years Experience</h3>
              <p className="text-sm text-gray-600">Specialized in environmental toxic exposure cases</p>
            </div>
            
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">No Upfront Costs</h3>
              <p className="text-sm text-gray-600">Contingency fee - you only pay if we win</p>
            </div>
            
            <div className="text-center">
              <Stethoscope className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Medical Experts</h3>
              <p className="text-sm text-gray-600">Network of environmental health specialists</p>
            </div>
            
            <div className="text-center">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Proven Results</h3>
              <p className="text-sm text-gray-600">Millions recovered for toxic exposure victims</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnvironmentalToxicCaseEvaluation;