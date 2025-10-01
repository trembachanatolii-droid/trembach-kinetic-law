import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Clock, 
  Shield, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  Scale,
  AlertTriangle
} from 'lucide-react';
import heroBackground from '@/assets/mass-torts-case-evaluation-hero.jpg';
import SEO from '@/components/SEO';
import ThreeDVisualEffects from '@/components/ThreeDVisualEffects';
import '@/styles/premium-3d-effects.css';

gsap.registerPlugin(ScrollTrigger);

const MassTortsCaseEvaluation: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    state: '',
    massTortType: '',
    injuryType: '',
    diagnosisDate: '',
    exposureStartDate: '',
    exposureEndDate: '',
    medicalTreatment: '',
    hospitalized: '',
    ongoingTreatment: '',
    medicalRecords: '',
    symptomsDescription: '',
    productDetails: '',
    whenDiscovered: '',
    previousLawyer: '',
    additionalInfo: '',
    consentContact: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate form sections with staggered entrance
      gsap.fromTo(formRef.current?.children || [],
        { 
          opacity: 0, 
          y: 60,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Mass Torts case evaluation submitted:', formData);
    
    // Create email body
    const emailBody = `
Mass Torts Case Evaluation Submission

Personal Information:
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
State: ${formData.state}

Case Details:
Mass Tort Type: ${formData.massTortType}
Injury Type: ${formData.injuryType}
Diagnosis Date: ${formData.diagnosisDate}
Exposure Start Date: ${formData.exposureStartDate}
Exposure End Date: ${formData.exposureEndDate}

Medical Information:
Medical Treatment Received: ${formData.medicalTreatment}
Hospitalized: ${formData.hospitalized}
Ongoing Treatment: ${formData.ongoingTreatment}
Medical Records Available: ${formData.medicalRecords}
Symptoms Description: ${formData.symptomsDescription}

Product/Exposure Details:
Product Details: ${formData.productDetails}
When Discovered: ${formData.whenDiscovered}

Legal Information:
Previous Lawyer: ${formData.previousLawyer}
Additional Information: ${formData.additionalInfo}

This evaluation was submitted through the Mass Torts Case Evaluation form.
`;

    // Open email client
    window.location.href = `mailto:info@trembachlawfirm.com?subject=Mass Torts Case Evaluation - ${formData.firstName} ${formData.lastName}&body=${encodeURIComponent(emailBody)}`;
    
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 flex items-center justify-center">
        <Card className="max-w-md mx-auto glass-card border-primary/20 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md shadow-2xl">
          <CardContent className="pt-6 text-center">
            <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-primary mb-2">Thank You!</h2>
            <p className="text-muted-foreground mb-4">
              Your mass torts case evaluation has been submitted. Our team will review your information and contact you within 24 hours.
            </p>
            <Button onClick={() => window.location.href = '/mass-torts'} className="w-full">
              Return to Mass Torts
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <SEO 
        title="Free Mass Torts Case Evaluation | Trembach Law Firm"
        description="Get a free, confidential evaluation of your mass tort case. Pharmaceutical, medical device, environmental, and chemical exposure cases. No fees unless we win."
        canonical="/mass-torts-case-evaluation"
      />
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Free Mass Torts Case Evaluation
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            If you or a loved one was harmed by pharmaceutical drugs, medical devices, or environmental exposure, you may be entitled to compensation. Complete our confidential evaluation form.
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Free Evaluation</h3>
              <p className="text-sm text-muted-foreground">No cost, no obligation assessment</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Quick Response</h3>
              <p className="text-sm text-muted-foreground">24-hour evaluation turnaround</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Confidential</h3>
              <p className="text-sm text-muted-foreground">Your information is protected</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Expert Team</h3>
              <p className="text-sm text-muted-foreground">Experienced mass tort lawyers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation Form */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-card border-primary/10 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl text-center flex items-center justify-center gap-2">
                  <Scale className="w-8 h-8 text-primary" />
                  Mass Torts Case Evaluation Form
                </CardTitle>
                <p className="text-center text-muted-foreground text-lg">
                  Complete this form to get your free case evaluation. All information is confidential.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8" ref={formRef}>
                  {/* Personal Information */}
                  <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-primary mb-4">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-foreground font-medium">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-foreground font-medium">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-foreground font-medium">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-foreground font-medium">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="state" className="text-foreground font-medium">State *</Label>
                        <Select onValueChange={(value) => handleInputChange('state', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your state" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="CA">California</SelectItem>
                            <SelectItem value="NY">New York</SelectItem>
                            <SelectItem value="TX">Texas</SelectItem>
                            <SelectItem value="FL">Florida</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Case Details */}
                  <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-primary mb-4">Case Details</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="massTortType" className="text-foreground font-medium">Type of Mass Tort *</Label>
                        <Select onValueChange={(value) => handleInputChange('massTortType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select mass tort type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pharmaceutical">Pharmaceutical Drug</SelectItem>
                            <SelectItem value="medical-device">Medical Device</SelectItem>
                            <SelectItem value="environmental">Environmental Contamination</SelectItem>
                            <SelectItem value="consumer-product">Consumer Product</SelectItem>
                            <SelectItem value="chemical">Chemical Exposure</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="injuryType" className="text-foreground font-medium">Type of Injury *</Label>
                        <Select onValueChange={(value) => handleInputChange('injuryType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select injury type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cancer">Cancer</SelectItem>
                            <SelectItem value="organ-damage">Organ Damage</SelectItem>
                            <SelectItem value="neurological">Neurological Disorders</SelectItem>
                            <SelectItem value="cardiovascular">Cardiovascular Issues</SelectItem>
                            <SelectItem value="birth-defects">Birth Defects</SelectItem>
                            <SelectItem value="respiratory">Respiratory Problems</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="diagnosisDate" className="text-foreground font-medium">Diagnosis Date</Label>
                        <Input
                          id="diagnosisDate"
                          type="date"
                          value={formData.diagnosisDate}
                          onChange={(e) => handleInputChange('diagnosisDate', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="exposureStartDate" className="text-foreground font-medium">Exposure Start Date</Label>
                        <Input
                          id="exposureStartDate"
                          type="date"
                          value={formData.exposureStartDate}
                          onChange={(e) => handleInputChange('exposureStartDate', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Medical Information */}
                  <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-primary mb-4">Medical Information</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="medicalTreatment" className="text-foreground font-medium">Have you received medical treatment for your condition? *</Label>
                        <Select onValueChange={(value) => handleInputChange('medicalTreatment', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select answer" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                            <SelectItem value="ongoing">Ongoing</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="hospitalized" className="text-foreground font-medium">Were you hospitalized? *</Label>
                        <Select onValueChange={(value) => handleInputChange('hospitalized', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select answer" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                            <SelectItem value="multiple">Multiple times</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="symptomsDescription" className="text-foreground font-medium">Describe your symptoms and how they affect your daily life</Label>
                        <Textarea
                          id="symptomsDescription"
                          value={formData.symptomsDescription}
                          onChange={(e) => handleInputChange('symptomsDescription', e.target.value)}
                          placeholder="Please describe your symptoms, when they started, and how they impact your daily activities..."
                          className="mt-1 min-h-[100px]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product/Exposure Details */}
                  <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-primary mb-4">Product/Exposure Details</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="productDetails" className="text-foreground font-medium">Product details (name, manufacturer, when used) *</Label>
                        <Textarea
                          id="productDetails"
                          value={formData.productDetails}
                          onChange={(e) => handleInputChange('productDetails', e.target.value)}
                          placeholder="Please provide specific product names, manufacturers, dates of use, and any other relevant details..."
                          className="mt-1 min-h-[100px]"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="whenDiscovered" className="text-foreground font-medium">When did you discover the potential connection between the product/exposure and your injury?</Label>
                        <Textarea
                          id="whenDiscovered"
                          value={formData.whenDiscovered}
                          onChange={(e) => handleInputChange('whenDiscovered', e.target.value)}
                          placeholder="Please describe when and how you learned about the potential connection..."
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Legal Information */}
                  <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-primary mb-4">Legal Information</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="previousLawyer" className="text-foreground font-medium">Have you previously consulted with an attorney about this matter? *</Label>
                        <Select onValueChange={(value) => handleInputChange('previousLawyer', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select answer" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="no">No</SelectItem>
                            <SelectItem value="yes-consulted">Yes, consulted but didn't hire</SelectItem>
                            <SelectItem value="yes-hired">Yes, hired an attorney</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="additionalInfo" className="text-foreground font-medium">Additional Information</Label>
                        <Textarea
                          id="additionalInfo"
                          value={formData.additionalInfo}
                          onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                          placeholder="Please provide any additional information you think would be helpful for evaluating your case..."
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Consent */}
                  <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="consentContact"
                        checked={formData.consentContact}
                        onCheckedChange={(checked) => handleInputChange('consentContact', checked as boolean)}
                        className="mt-1"
                      />
                      <Label htmlFor="consentContact" className="text-sm text-foreground leading-relaxed">
                        I consent to being contacted by Trembach Law Firm regarding my mass tort case evaluation and understand that submitting this form does not create an attorney-client relationship. *
                      </Label>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full text-lg py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 group"
                    disabled={!formData.consentContact}
                  >
                    Submit Free Case Evaluation
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Badge variant="outline" className="mb-4 text-sm px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                100% Confidential
              </Badge>
              <p className="text-sm text-muted-foreground">
                Your information is protected and will never be shared without your permission.
              </p>
            </div>
            <div>
              <Badge variant="outline" className="mb-4 text-sm px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                No Fees Unless We Win
              </Badge>
              <p className="text-sm text-muted-foreground">
                We work on a contingency fee basis. No upfront costs or fees.
              </p>
            </div>
            <div>
              <Badge variant="outline" className="mb-4 text-sm px-4 py-2">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Time Limits Apply
              </Badge>
              <p className="text-sm text-muted-foreground">
                Important legal deadlines may apply to your case. Don't wait to seek help.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MassTortsCaseEvaluation;