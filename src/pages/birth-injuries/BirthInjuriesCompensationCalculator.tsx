import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Calculator, DollarSign, Heart, Clock, Shield, Award, Brain, Baby, Activity, Star } from 'lucide-react';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';
import { useScrollMemory } from '@/hooks/useScrollMemory';
import heroBackground from '@/assets/birth-injuries-compensation-calculator.jpg';

gsap.registerPlugin(ScrollTrigger);

const BirthInjuriesCompensationCalculator: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [estimatedCompensation, setEstimatedCompensation] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    injuryType: '',
    injurySeverity: '',
    ageAtInjury: '',
    currentAge: '',
    medicalExpenses: '',
    projectedLifespan: '',
    careNeeds: [] as string[],
    lostWages: '',
    qualityOfLifeImpact: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  useScrollMemory();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      const heroContent = heroRef.current?.querySelector('.hero-content');
      if (heroContent) {
        gsap.set(heroContent, { opacity: 0, y: 100, scale: 0.8 });
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
        gsap.fromTo(contentSections,
          { opacity: 0, y: 60, scale: 0.95 },
          {
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
          }
        );
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

  const handleCareNeedsChange = (careType: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      careNeeds: checked 
        ? [...prev.careNeeds, careType]
        : prev.careNeeds.filter(item => item !== careType)
    }));
  };

  const calculateCompensation = () => {
    let baseCompensation = 0;
    
    // Base compensation by injury type
    const injuryMultipliers = {
      'cerebral-palsy': 2500000,
      'brain-injury': 3000000,
      'erb-palsy': 800000,
      'fractures': 400000,
      'hie': 2800000,
      'other': 1000000
    };

    // Severity multipliers
    const severityMultipliers = {
      'mild': 0.3,
      'moderate': 0.6,
      'severe': 1.0,
      'profound': 1.5
    };

    const injuryBase = injuryMultipliers[formData.injuryType as keyof typeof injuryMultipliers] || 1000000;
    const severityMultiplier = severityMultipliers[formData.injurySeverity as keyof typeof severityMultipliers] || 1.0;
    
    baseCompensation = injuryBase * severityMultiplier;

    // Add medical expenses
    if (formData.medicalExpenses) {
      baseCompensation += parseInt(formData.medicalExpenses.replace(/,/g, '')) * 10; // 10x current expenses for lifetime
    }

    // Care needs adjustment
    if (formData.careNeeds.length > 0) {
      baseCompensation += formData.careNeeds.length * 200000;
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

    setEstimatedCompensation(Math.round(baseCompensation));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <>
      <SEO
        title="Birth Injury Compensation Calculator | Calculate Your Settlement Value"
        description="Calculate potential compensation for birth injury cases. Free tool estimates settlement values for cerebral palsy, HIE, Erb's palsy and other birth injuries in California."
      />

      <GoBack />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative bg-cover bg-center bg-no-repeat min-h-[60vh] flex items-center justify-center"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 hero-content">
            <div className="flex items-center justify-center mb-4">
              <Calculator className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">Birth Injury Compensation Calculator</h1>
            </div>
            <p className="text-xl mb-8 leading-relaxed">
              Calculate potential compensation for your child's birth injury case
            </p>
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-lg">Trusted by thousands of families</span>
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
                    Birth Injury Settlement Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  {/* Injury Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Brain className="w-5 h-5 text-primary mr-2" />
                      Injury Information
                    </h3>
                    
                    <div>
                      <Label htmlFor="injuryType">Type of Birth Injury</Label>
                      <Select value={formData.injuryType} onValueChange={(value) => handleInputChange('injuryType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select injury type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cerebral-palsy">Cerebral Palsy</SelectItem>
                          <SelectItem value="brain-injury">Brain Injury/HIE</SelectItem>
                          <SelectItem value="erb-palsy">Erb's Palsy/Brachial Plexus</SelectItem>
                          <SelectItem value="fractures">Bone Fractures</SelectItem>
                          <SelectItem value="hie">Hypoxic-Ischemic Encephalopathy</SelectItem>
                          <SelectItem value="other">Other Birth Injury</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="injurySeverity">Severity of Injury</Label>
                      <Select value={formData.injurySeverity} onValueChange={(value) => handleInputChange('injurySeverity', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select severity" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mild">Mild - Minimal assistance needed</SelectItem>
                          <SelectItem value="moderate">Moderate - Some assistance required</SelectItem>
                          <SelectItem value="severe">Severe - Significant assistance needed</SelectItem>
                          <SelectItem value="profound">Profound - Complete care required</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="ageAtInjury">Age at Time of Injury</Label>
                        <Select value={formData.ageAtInjury} onValueChange={(value) => handleInputChange('ageAtInjury', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select age" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="birth">At Birth</SelectItem>
                            <SelectItem value="prenatal">Prenatal</SelectItem>
                            <SelectItem value="delivery">During Delivery</SelectItem>
                            <SelectItem value="postnatal">After Birth</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="currentAge">Child's Current Age</Label>
                        <Input
                          type="number"
                          value={formData.currentAge}
                          onChange={(e) => handleInputChange('currentAge', e.target.value)}
                          placeholder="Enter age"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Medical Expenses */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center">
                      <DollarSign className="w-5 h-5 text-primary mr-2" />
                      Financial Information
                    </h3>
                    
                    <div>
                      <Label htmlFor="medicalExpenses">Annual Medical Expenses</Label>
                      <Input
                        type="text"
                        value={formData.medicalExpenses}
                        onChange={(e) => handleInputChange('medicalExpenses', e.target.value)}
                        placeholder="Enter annual medical costs"
                      />
                    </div>

                    <div>
                      <Label htmlFor="lostWages">Lost Wages/Income (Parent/Caregiver)</Label>
                      <Input
                        type="text"
                        value={formData.lostWages}
                        onChange={(e) => handleInputChange('lostWages', e.target.value)}
                        placeholder="Enter lost income amount"
                      />
                    </div>
                  </div>

                  {/* Care Needs */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Heart className="w-5 h-5 text-primary mr-2" />
                      Care Requirements
                    </h3>
                    
                    <div className="space-y-3">
                      {[
                        'Physical Therapy',
                        'Occupational Therapy',
                        'Speech Therapy',
                        'Special Education',
                        'Medical Equipment',
                        'Home Modifications',
                        '24/7 Care',
                        'Respite Care'
                      ].map((careType) => (
                        <div key={careType} className="flex items-center space-x-2">
                          <Checkbox
                            id={careType}
                            checked={formData.careNeeds.includes(careType)}
                            onCheckedChange={(checked) => handleCareNeedsChange(careType, checked as boolean)}
                          />
                          <Label htmlFor={careType}>{careType}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quality of Life */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Activity className="w-5 h-5 text-primary mr-2" />
                      Quality of Life Impact
                    </h3>
                    
                    <div>
                      <Label htmlFor="qualityOfLifeImpact">Impact on Quality of Life</Label>
                      <Select value={formData.qualityOfLifeImpact} onValueChange={(value) => handleInputChange('qualityOfLifeImpact', value)}>
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

                  <Button 
                    onClick={calculateCompensation} 
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3"
                    disabled={!formData.injuryType || !formData.injurySeverity}
                  >
                    Calculate Compensation Estimate
                  </Button>

                  {/* Results */}
                  {estimatedCompensation && (
                    <Card className="mt-6 border-primary">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-center mb-4">Estimated Compensation Range</h3>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary mb-2">
                            {formatCurrency(estimatedCompensation * 0.7)} - {formatCurrency(estimatedCompensation * 1.3)}
                          </div>
                          <p className="text-muted-foreground mb-4">
                            *This is an estimate. Actual compensation may vary based on specific case details.
                          </p>
                          <Button 
                            onClick={() => window.location.href = '/birth-injuries/case-evaluation'}
                            className="bg-primary hover:bg-primary/90 text-white"
                          >
                            Get Free Case Evaluation
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}
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
                      <p className="text-sm text-muted-foreground">California gives you until your child's 8th birthday to file a claim</p>
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
                      <h4 className="font-semibold text-sm">Free Consultation</h4>
                      <p className="text-sm text-muted-foreground">No cost to discuss your case with our experts</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="content-section glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Take Action Now</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    variant="outline" 
                    className="w-full text-primary border-primary hover:bg-primary hover:text-white"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    Call (818) 123-4567
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full text-primary border-primary hover:bg-primary hover:text-white"
                    onClick={() => window.location.href = '/birth-injuries/case-evaluation'}
                  >
                    Free Case Evaluation
                  </Button>

                  <Button 
                    variant="outline" 
                    className="w-full text-primary border-primary hover:bg-primary hover:text-white"
                    onClick={() => window.location.href = '/schedule-consultation'}
                  >
                    Schedule Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BirthInjuriesCompensationCalculator;