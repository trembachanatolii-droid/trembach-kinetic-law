import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Calculator, DollarSign, Heart, Clock, Shield, Award, Car, Activity, Star, Phone, Mail, MessageCircle } from 'lucide-react';

import SEO from '@/components/SEO';
import useScrollRestoration from '@/hooks/useScrollRestoration';
import heroBackground from '@/assets/uber-lyft-hero-professional.jpg';
gsap.registerPlugin(ScrollTrigger);
const UberLyftCompensationCalculator: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [estimatedCompensation, setEstimatedCompensation] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    injuryType: '',
    injurySeverity: '',
    medicalExpenses: '',
    lostWages: '',
    futureExpenses: '',
    accidentSeverity: '',
    faultPercentage: '',
    treatmentNeeds: [] as string[],
    qualityOfLifeImpact: ''
  });
  const [contactForm, setContactForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    description: ''
  });
  const [characterCount, setCharacterCount] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  useScrollRestoration();
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      const heroContent = heroRef.current?.querySelector('.hero-content');
      if (heroContent) {
        gsap.set(heroContent, {
          opacity: 0,
          y: 100,
          scale: 0.8
        });
        gsap.to(heroContent, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: 'power3.out'
        });
      }

      // Content sections animation
      const contentSections = contentRef.current?.querySelectorAll('.content-section');
      if (contentSections) {
        gsap.fromTo(contentSections, {
          opacity: 0,
          y: 60,
          scale: 0.95
        }, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none'
          }
        });
      }
    });
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      ctx.revert();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleTreatmentNeedsChange = (treatmentType: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      treatmentNeeds: checked ? [...prev.treatmentNeeds, treatmentType] : prev.treatmentNeeds.filter(item => item !== treatmentType)
    }));
  };
  const handleContactFormChange = (field: string, value: string) => {
    setContactForm(prev => ({
      ...prev,
      [field]: value
    }));
    if (field === 'description') {
      setCharacterCount(value.length);
    }
  };
  const handleContactSubmit = () => {
    // Handle form submission
    console.log('Contact form submitted:', contactForm);
    // You can add actual form submission logic here
  };
  const calculateCompensation = () => {
    let baseCompensation = 0;

    // Base compensation by injury type
    const injuryMultipliers = {
      'brain-injury': 2500000,
      'spinal-injury': 2000000,
      'whiplash': 150000,
      'broken-bones': 300000,
      'internal-injuries': 800000,
      'psychological': 400000,
      'soft-tissue': 100000
    };

    // Severity multipliers
    const severityMultipliers = {
      'minor': 0.3,
      'moderate': 0.6,
      'severe': 1.0,
      'catastrophic': 1.5
    };
    const injuryBase = injuryMultipliers[formData.injuryType as keyof typeof injuryMultipliers] || 200000;
    const severityMultiplier = severityMultipliers[formData.injurySeverity as keyof typeof severityMultipliers] || 1.0;
    baseCompensation = injuryBase * severityMultiplier;

    // Add medical expenses
    if (formData.medicalExpenses) {
      baseCompensation += parseInt(formData.medicalExpenses.replace(/,/g, '')) * 3;
    }

    // Add future expenses
    if (formData.futureExpenses) {
      baseCompensation += parseInt(formData.futureExpenses.replace(/,/g, ''));
    }

    // Treatment needs adjustment
    if (formData.treatmentNeeds.length > 0) {
      baseCompensation += formData.treatmentNeeds.length * 50000;
    }

    // Lost wages
    if (formData.lostWages) {
      baseCompensation += parseInt(formData.lostWages.replace(/,/g, ''));
    }

    // Quality of life impact
    const qualityMultipliers = {
      'minimal': 1.1,
      'moderate': 1.3,
      'significant': 1.6,
      'severe': 2.0
    };
    const qualityMultiplier = qualityMultipliers[formData.qualityOfLifeImpact as keyof typeof qualityMultipliers] || 1.0;
    baseCompensation *= qualityMultiplier;

    // Adjust for fault percentage
    const faultReduction = (100 - (parseFloat(formData.faultPercentage) || 0)) / 100;
    baseCompensation *= faultReduction;
    setEstimatedCompensation(Math.round(baseCompensation));
  };
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };
  return <>
      <SEO title="Uber/Lyft Accident Compensation Calculator | Calculate Your Settlement Value" description="Calculate potential compensation for Uber/Lyft accident cases. Free tool estimates settlement values for rideshare accident injuries in California." />

      

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section ref={heroRef} className="relative bg-cover bg-center bg-no-repeat min-h-[60vh] flex items-center justify-center" style={{
        backgroundImage: `url(${heroBackground})`
      }}>
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 hero-content">
            <div className="flex items-center justify-center mb-4">
              <Calculator className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">Uber/Lyft Accident Compensation Calculator</h1>
            </div>
            <p className="text-xl mb-8 leading-relaxed text-white">
              Calculate potential compensation for your rideshare accident case
            </p>
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />)}
              <span className="ml-2 text-lg">Trusted by hundreds of clients</span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div ref={contentRef} className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Calculator Form */}
            <div className="lg:col-span-2">
              <Card className="content-section glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Calculator className="w-6 h-6 text-primary mr-2" />
                    Rideshare Accident Settlement Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  {/* Injury Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Car className="w-5 h-5 text-primary mr-2" />
                      Accident & Injury Information
                    </h3>
                    
                    <div>
                      <Label htmlFor="injuryType">Type of Injury</Label>
                      <Select value={formData.injuryType} onValueChange={value => handleInputChange('injuryType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select injury type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="brain-injury">Traumatic Brain Injury</SelectItem>
                          <SelectItem value="spinal-injury">Spinal Cord Injury</SelectItem>
                          <SelectItem value="whiplash">Whiplash/Neck Injury</SelectItem>
                          <SelectItem value="broken-bones">Broken Bones/Fractures</SelectItem>
                          <SelectItem value="internal-injuries">Internal Injuries</SelectItem>
                          <SelectItem value="psychological">PTSD/Psychological Trauma</SelectItem>
                          <SelectItem value="soft-tissue">Soft Tissue Injuries</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="injurySeverity">Severity of Injury</Label>
                      <Select value={formData.injurySeverity} onValueChange={value => handleInputChange('injurySeverity', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select severity" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="minor">Minor - Full recovery expected</SelectItem>
                          <SelectItem value="moderate">Moderate - Some lasting effects</SelectItem>
                          <SelectItem value="severe">Severe - Significant impairment</SelectItem>
                          <SelectItem value="catastrophic">Catastrophic - Life-altering</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="faultPercentage">Your Fault Percentage (%)</Label>
                      <Select value={formData.faultPercentage} onValueChange={value => handleInputChange('faultPercentage', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select fault percentage" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0">0% - Not at fault</SelectItem>
                          <SelectItem value="10">10% - Minimal fault</SelectItem>
                          <SelectItem value="25">25% - Some fault</SelectItem>
                          <SelectItem value="50">50% - Shared fault</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Financial Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center">
                      <DollarSign className="w-5 h-5 text-primary mr-2" />
                      Financial Information
                    </h3>
                    
                    <div>
                      <Label htmlFor="medicalExpenses">Medical Expenses to Date</Label>
                      <Input type="text" value={formData.medicalExpenses} onChange={e => handleInputChange('medicalExpenses', e.target.value)} placeholder="Enter total medical costs" />
                    </div>

                    <div>
                      <Label htmlFor="futureExpenses">Future Medical Expenses</Label>
                      <Input type="text" value={formData.futureExpenses} onChange={e => handleInputChange('futureExpenses', e.target.value)} placeholder="Enter expected future costs" />
                    </div>

                    <div>
                      <Label htmlFor="lostWages">Lost Wages/Income</Label>
                      <Input type="text" value={formData.lostWages} onChange={e => handleInputChange('lostWages', e.target.value)} placeholder="Enter lost income amount" />
                    </div>
                  </div>

                  {/* Treatment Needs */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Heart className="w-5 h-5 text-primary mr-2" />
                      Treatment & Recovery Needs
                    </h3>
                    
                    <div className="space-y-3">
                      {['Physical Therapy', 'Occupational Therapy', 'Pain Management', 'Mental Health Counseling', 'Surgery Required', 'Medical Equipment', 'Home Care', 'Ongoing Medications'].map(treatmentType => <div key={treatmentType} className="flex items-center space-x-2">
                          <Checkbox id={treatmentType} checked={formData.treatmentNeeds.includes(treatmentType)} onCheckedChange={checked => handleTreatmentNeedsChange(treatmentType, checked as boolean)} />
                          <Label htmlFor={treatmentType}>{treatmentType}</Label>
                        </div>)}
                    </div>
                  </div>

                  {/* Quality of Life */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Activity className="w-5 h-5 text-primary mr-2" />
                      Quality of Life Impact
                    </h3>
                    
                    <div>
                      <Label htmlFor="qualityOfLifeImpact">Impact on Daily Life</Label>
                      <Select value={formData.qualityOfLifeImpact} onValueChange={value => handleInputChange('qualityOfLifeImpact', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select impact level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="minimal">Minimal Impact</SelectItem>
                          <SelectItem value="moderate">Moderate Impact</SelectItem>
                          <SelectItem value="significant">Significant Impact</SelectItem>
                          <SelectItem value="severe">Severe Impact</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button onClick={calculateCompensation} className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3" disabled={!formData.injuryType || !formData.injurySeverity}>
                    Calculate Compensation Estimate
                  </Button>

                  {/* Results */}
                  {estimatedCompensation && <Card className="mt-6 border-primary">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-center mb-4">Estimated Compensation Range</h3>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary mb-2">
                            {formatCurrency(estimatedCompensation * 0.7)} - {formatCurrency(estimatedCompensation * 1.3)}
                          </div>
                          <p className="text-muted-foreground mb-4">
                            *This is an estimate. Actual compensation may vary based on specific case details.
                          </p>
                          <Button onClick={() => window.location.href = '/uber-lyft/case-evaluation'} className="bg-primary hover:bg-primary/90 text-white">
                            Get Free Case Evaluation
                          </Button>
                        </div>
                      </CardContent>
                    </Card>}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="content-section glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Important Notes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">Time Limits</h4>
                      <p className="text-sm text-muted-foreground">California gives you 2 years from the accident date to file a claim</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">No Win, No Fee</h4>
                      <p className="text-sm text-muted-foreground">We only get paid if you win your case</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Award className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">High Success Rate</h4>
                      <p className="text-sm text-muted-foreground">We've recovered millions in Uber/Lyft accident cases</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="content-section glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <strong>Uber/Lyft Insurance:</strong> Up to $1 million in coverage when app is on
                  </div>
                  <div>
                    <strong>Average Settlements:</strong> $50,000 - $500,000+ depending on injuries
                  </div>
                  <div>
                    <strong>Common Injuries:</strong> Whiplash, brain injuries, spinal injuries
                  </div>
                  <div>
                    <strong>Case Duration:</strong> Typically 6-18 months to resolve
                  </div>
                </CardContent>
              </Card>

              <Card className="content-section glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Contact Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white" onClick={() => window.location.href = 'tel:8181234567'}>
                    <Phone className="w-4 h-4 mr-2" />
                    Call (818) 123-4567
                  </Button>
                  
                  <Button variant="outline" className="w-full" onClick={() => window.location.href = '/uber-lyft/case-evaluation'}>
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Free Case Review
                  </Button>
                  
                  
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <section className="bg-gradient-to-r from-destructive to-destructive/80 text-white py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-gray-100 rounded-lg p-8 text-gray-900">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-destructive">Ready to Win Your Case?</span> Contact us Today.
              </h2>
              <p className="text-lg mb-6 text-gray-700">
                Don't fight alone. Start your free case review here and we'll get back to you within 2 hours.
              </p>
              
              <p className="text-sm text-gray-600 mb-6">
                Field marked with an * are required.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div>
                    <Input type="text" placeholder="First Name *" value={contactForm.firstName} onChange={e => handleContactFormChange('firstName', e.target.value)} className="bg-gray-200 border-gray-300 placeholder-gray-600 text-gray-900" />
                  </div>
                  
                  <div>
                    <Input type="text" placeholder="Last Name *" value={contactForm.lastName} onChange={e => handleContactFormChange('lastName', e.target.value)} className="bg-gray-200 border-gray-300 placeholder-gray-600 text-gray-900" />
                  </div>
                  
                  <div>
                    <Input type="tel" placeholder="Phone *" value={contactForm.phone} onChange={e => handleContactFormChange('phone', e.target.value)} className="bg-gray-200 border-gray-300 placeholder-gray-600 text-gray-900" />
                  </div>
                  
                  <div>
                    <Input type="email" placeholder="Email *" value={contactForm.email} onChange={e => handleContactFormChange('email', e.target.value)} className="bg-gray-200 border-gray-300 placeholder-gray-600 text-gray-900" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Textarea placeholder="What happened? (optional)" value={contactForm.description} onChange={e => handleContactFormChange('description', e.target.value)} className="bg-gray-200 border-gray-300 placeholder-gray-600 text-gray-900 h-48 resize-none" maxLength={4000} />
                    <p className="text-sm text-gray-600 mt-1">
                      {4000 - characterCount} of 4000 Character(s) left
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <p className="text-sm text-gray-600 mb-6">
                  By submitting your contact information, you agree that we may contact you by telephone (including text) and email in accordance with our{' '}
                  <a href="#" className="text-blue-600 underline">Terms</a> &{' '}
                  <a href="#" className="text-blue-600 underline">Privacy Policy</a>.
                </p>
                
                <div className="flex justify-end">
                  <Button onClick={handleContactSubmit} className="bg-blue-700 hover:bg-blue-800 text-white px-12 py-3 text-lg" disabled={!contactForm.firstName || !contactForm.lastName || !contactForm.phone || !contactForm.email}>
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>;
};
export default UberLyftCompensationCalculator;