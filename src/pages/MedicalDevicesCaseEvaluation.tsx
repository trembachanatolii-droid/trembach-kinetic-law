import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Phone, Mail, FileText, Clock, Shield, ArrowLeft, Heart, AlertTriangle } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useToast } from '@/hooks/use-toast';
import SEO from '@/components/SEO';
import heroImage from '@/assets/practice-areas/medical-devices-evaluation-hero.jpg';

gsap.registerPlugin(ScrollTrigger);

const MedicalDevicesCaseEvaluation: React.FC = () => {
  const { toast } = useToast();
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [showGoBack, setShowGoBack] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    deviceType: '',
    implantDate: '',
    complications: '',
    symptoms: [] as string[],
    medicalTreatment: '',
    currentCondition: '',
    additionalInfo: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = heroRef.current?.offsetHeight || 0;
      setShowGoBack(window.scrollY > heroHeight * 0.3);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );

      gsap.fromTo(formRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleGoBack = () => {
    window.history.back();
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSymptomChange = (symptom: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      symptoms: checked 
        ? [...prev.symptoms, symptom]
        : prev.symptoms.filter(s => s !== symptom)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Case Evaluation Submitted",
      description: "Thank you for submitting your medical device case evaluation. Our team will review your information and contact you within 24 hours.",
    });

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      deviceType: '',
      implantDate: '',
      complications: '',
      symptoms: [],
      medicalTreatment: '',
      currentCondition: '',
      additionalInfo: ''
    });
  };

  const deviceTypes = [
    'Hip Implant',
    'Knee Implant',
    'Hernia Mesh',
    'Transvaginal Mesh',
    'IVC Filter',
    'Pacemaker',
    'Defibrillator',
    'Insulin Pump',
    'Breast Implant',
    'Spinal Fusion Device',
    'Other'
  ];

  const commonSymptoms = [
    'Pain at implant site',
    'Infection',
    'Device migration',
    'Device fracture',
    'Tissue damage',
    'Nerve damage',
    'Blood clots',
    'Organ perforation',
    'Autoimmune reactions',
    'Need for revision surgery'
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Medical Device Injury Case Evaluation - Free Consultation | Trembach Law Firm"
        description="Get a free case evaluation for medical device injuries in California. Hip implants, hernia mesh, pacemakers, IVC filters. No fees unless we win."
        canonical="/medical-devices-case-evaluation"
      />

      {/* Go Back Button */}
      <button
        onClick={handleGoBack}
        className={`fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg shadow-lg transition-all duration-300 hover:bg-primary/90 ${
          showGoBack ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="font-medium">Go Back</span>
      </button>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[50vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-center text-white"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})` 
        }}
      >
        <div className="hero-content max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Free Medical Device Case Evaluation
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Get expert legal guidance for your defective medical device injury
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>No Fees Unless We Win</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5" />
              <span>Compassionate Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation Form */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-foreground mb-4">
                Medical Device Injury Case Evaluation
              </CardTitle>
              <p className="text-lg text-muted-foreground">
                Please provide detailed information about your medical device injury. 
                All information is confidential and protected by attorney-client privilege.
              </p>
            </CardHeader>
            
            <CardContent>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                    Personal Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>
                </div>

                {/* Device Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                    Medical Device Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="deviceType">Type of Medical Device *</Label>
                      <Select value={formData.deviceType} onValueChange={(value) => handleInputChange('deviceType', value)}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select device type" />
                        </SelectTrigger>
                        <SelectContent>
                          {deviceTypes.map(device => (
                            <SelectItem key={device} value={device}>{device}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="implantDate">Implant/Surgery Date</Label>
                      <Input
                        id="implantDate"
                        type="date"
                        value={formData.implantDate}
                        onChange={(e) => handleInputChange('implantDate', e.target.value)}
                        className="h-12"
                      />
                    </div>
                  </div>
                </div>

                {/* Symptoms and Complications */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                    Symptoms and Complications
                  </h3>
                  <div className="space-y-4">
                    <Label className="text-base font-medium">
                      What symptoms or complications have you experienced? (Check all that apply)
                    </Label>
                    <div className="grid md:grid-cols-2 gap-4">
                      {commonSymptoms.map(symptom => (
                        <div key={symptom} className="flex items-center space-x-2">
                          <Checkbox
                            id={symptom}
                            checked={formData.symptoms.includes(symptom)}
                            onCheckedChange={(checked) => handleSymptomChange(symptom, checked as boolean)}
                          />
                          <Label htmlFor={symptom} className="cursor-pointer">
                            {symptom}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Medical Treatment */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                    Medical Treatment
                  </h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="medicalTreatment">
                        What medical treatment have you received for these complications?
                      </Label>
                      <textarea
                        id="medicalTreatment"
                        value={formData.medicalTreatment}
                        onChange={(e) => handleInputChange('medicalTreatment', e.target.value)}
                        rows={4}
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Describe any surgeries, treatments, medications, or ongoing care..."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="currentCondition">
                        What is your current medical condition?
                      </Label>
                      <textarea
                        id="currentCondition"
                        value={formData.currentCondition}
                        onChange={(e) => handleInputChange('currentCondition', e.target.value)}
                        rows={3}
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Describe your current symptoms, pain level, limitations..."
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                    Additional Information
                  </h3>
                  <div className="space-y-2">
                    <Label htmlFor="additionalInfo">
                      Is there anything else you'd like us to know about your case?
                    </Label>
                    <textarea
                      id="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                      rows={4}
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Any additional details about your medical device injury..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-8">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 text-lg"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Submit Case Evaluation
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    By submitting this form, you agree to our privacy policy. 
                    We will contact you within 24 hours to discuss your case.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8 text-center">
                <Phone className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Call Now</h3>
                <p className="text-2xl font-bold text-primary mb-2">(818) 123-4567</p>
                <p className="text-muted-foreground">Available 24/7 for emergencies</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8 text-center">
                <Mail className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-lg font-semibold text-primary mb-2">info@trembachlawfirm.com</p>
                <p className="text-muted-foreground">We respond within hours</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalDevicesCaseEvaluation;