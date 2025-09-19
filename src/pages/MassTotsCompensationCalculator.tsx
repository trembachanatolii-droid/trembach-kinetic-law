import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Calculator, DollarSign, TrendingUp, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import heroBackground from '@/assets/mass-torts-compensation-calculator-hero.jpg';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';

gsap.registerPlugin(ScrollTrigger);

const MassTotsCompensationCalculator: React.FC = () => {
  const [calculatorData, setCalculatorData] = useState({
    age: 50,
    exposureType: '',
    injuryType: '',
    severity: '',
    exposureYears: 10,
    familySize: 2,
    medicalExpenses: 50000,
    lostWages: 30000
  });

  const [estimatedCompensation, setEstimatedCompensation] = useState({
    low: 0,
    high: 0,
    average: 0
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate content cards with staggered entrance
      gsap.fromTo(cardsRef.current?.children || [],
        { 
          opacity: 0, 
          y: 100,
          scale: 0.8,
          filter: 'blur(5px)'
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    calculateCompensation();
  }, [calculatorData]);

  const calculateCompensation = () => {
    let baseAmount = 250000;
    let multiplier = 1;

    // Age factor (younger victims typically receive more)
    if (calculatorData.age < 40) multiplier += 0.4;
    else if (calculatorData.age < 60) multiplier += 0.3;
    else if (calculatorData.age < 70) multiplier += 0.2;

    // Exposure type factor
    switch (calculatorData.exposureType) {
      case 'pharmaceutical':
        multiplier += 0.3;
        break;
      case 'medical-device':
        multiplier += 0.4;
        break;
      case 'environmental':
        multiplier += 0.25;
        break;
      case 'consumer-product':
        multiplier += 0.2;
        break;
      case 'chemical':
        multiplier += 0.35;
        break;
    }

    // Injury type factor
    switch (calculatorData.injuryType) {
      case 'cancer':
        multiplier += 0.6;
        break;
      case 'organ-damage':
        multiplier += 0.5;
        break;
      case 'neurological':
        multiplier += 0.55;
        break;
      case 'cardiovascular':
        multiplier += 0.4;
        break;
      case 'birth-defects':
        multiplier += 0.7;
        break;
      case 'respiratory':
        multiplier += 0.3;
        break;
    }

    // Severity factor
    switch (calculatorData.severity) {
      case 'severe':
        multiplier += 0.5;
        break;
      case 'moderate':
        multiplier += 0.3;
        break;
      case 'mild':
        multiplier += 0.1;
        break;
    }

    // Exposure years and family size
    multiplier += (calculatorData.exposureYears / 50);
    multiplier += (calculatorData.familySize * 0.1);

    // Medical expenses and lost wages
    const economicDamages = calculatorData.medicalExpenses + calculatorData.lostWages;
    
    const finalBase = baseAmount * multiplier + economicDamages;
    
    setEstimatedCompensation({
      low: Math.round(finalBase * 0.6),
      high: Math.round(finalBase * 2.5),
      average: Math.round(finalBase * 1.4)
    });
  };

  const handleInputChange = (field: string, value: string | number) => {
    setCalculatorData(prev => ({ ...prev, [field]: value }));
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
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <SEO 
        title="Mass Torts Compensation Calculator | Trembach Law Firm"
        description="Estimate potential compensation for your mass tort case. Free calculator for pharmaceutical, medical device, and chemical exposure injuries in California."
        canonical="/mass-torts-compensation-calculator"
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
            Mass Torts Compensation Calculator
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Get an estimate of your potential mass tort compensation based on your specific circumstances.
          </p>
        </div>
      </section>

      <GoBack />

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div ref={cardsRef} className="grid lg:grid-cols-3 gap-8">
            {/* Calculator Form */}
            <div className="lg:col-span-2">
              <Card className="glass-card border-primary/10 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-md shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Calculator className="w-6 h-6 text-primary" />
                    Mass Torts Compensation Calculator
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Provide your case details to receive a personalized compensation estimate.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="age">Your Age</Label>
                      <div className="mt-2">
                        <Slider
                          value={[calculatorData.age]}
                          onValueChange={(value) => handleInputChange('age', value[0])}
                          max={90}
                          min={18}
                          step={1}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-muted-foreground mt-1">
                          <span>18</span>
                          <span className="font-semibold text-primary">{calculatorData.age} years</span>
                          <span>90</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="exposureType">Type of Mass Tort</Label>
                      <Select onValueChange={(value) => handleInputChange('exposureType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pharmaceutical">Pharmaceutical Drug</SelectItem>
                          <SelectItem value="medical-device">Medical Device</SelectItem>
                          <SelectItem value="environmental">Environmental Contamination</SelectItem>
                          <SelectItem value="consumer-product">Consumer Product</SelectItem>
                          <SelectItem value="chemical">Chemical Exposure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="injuryType">Type of Injury</Label>
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
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="severity">Injury Severity</Label>
                      <Select onValueChange={(value) => handleInputChange('severity', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select severity" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mild">Mild</SelectItem>
                          <SelectItem value="moderate">Moderate</SelectItem>
                          <SelectItem value="severe">Severe</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="exposureYears">Years of Exposure</Label>
                      <div className="mt-2">
                        <Slider
                          value={[calculatorData.exposureYears]}
                          onValueChange={(value) => handleInputChange('exposureYears', value[0])}
                          max={40}
                          min={1}
                          step={1}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-muted-foreground mt-1">
                          <span>1</span>
                          <span className="font-semibold text-primary">{calculatorData.exposureYears} years</span>
                          <span>40</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="familySize">Family Size</Label>
                      <div className="mt-2">
                        <Slider
                          value={[calculatorData.familySize]}
                          onValueChange={(value) => handleInputChange('familySize', value[0])}
                          max={10}
                          min={1}
                          step={1}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-muted-foreground mt-1">
                          <span>1</span>
                          <span className="font-semibold text-primary">{calculatorData.familySize} members</span>
                          <span>10</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="medicalExpenses">Medical Expenses</Label>
                      <Input
                        type="number"
                        value={calculatorData.medicalExpenses}
                        onChange={(e) => handleInputChange('medicalExpenses', parseInt(e.target.value) || 0)}
                        placeholder="50000"
                        className="text-primary font-medium"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lostWages">Lost Wages</Label>
                      <Input
                        type="number"
                        value={calculatorData.lostWages}
                        onChange={(e) => handleInputChange('lostWages', parseInt(e.target.value) || 0)}
                        placeholder="30000"
                        className="text-primary font-medium"
                      />
                    </div>
                  </div>

                  {/* Results */}
                  {estimatedCompensation.average > 0 && (
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 border border-primary/20">
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        Estimated Compensation Range
                      </h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <Badge variant="outline" className="mb-2">Conservative</Badge>
                          <p className="text-2xl font-bold text-primary">{formatCurrency(estimatedCompensation.low)}</p>
                        </div>
                        <div className="text-center">
                          <Badge variant="default" className="mb-2">Average</Badge>
                          <p className="text-3xl font-bold text-primary">{formatCurrency(estimatedCompensation.average)}</p>
                        </div>
                        <div className="text-center">
                          <Badge variant="secondary" className="mb-2">Optimistic</Badge>
                          <p className="text-2xl font-bold text-primary">{formatCurrency(estimatedCompensation.high)}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <Button className="w-full group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300" onClick={() => window.location.href = '/mass-torts-case-evaluation'}>
                    Get Detailed Case Evaluation
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Information Sidebar */}
            <div className="space-y-6">
              <Card className="glass-card border-primary/10 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-md shadow-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-primary" />
                    Legal Disclaimer
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    This calculator provides estimates only. Actual compensation depends on many case-specific factors and cannot be guaranteed.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Results are not legal advice. For an accurate assessment, schedule a free consultation with our experienced mass tort attorneys.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border-primary/10 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-md shadow-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Factors Affecting Compensation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Age at time of exposure/injury</li>
                    <li>• Type and severity of mass tort</li>
                    <li>• Duration and extent of exposure</li>
                    <li>• Medical expenses and treatment costs</li>
                    <li>• Lost wages and earning capacity</li>
                    <li>• Pain and suffering damages</li>
                    <li>• Number of affected individuals</li>
                    <li>• Responsible parties' liability</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-card border-primary/20 bg-gradient-to-br from-primary/15 to-primary/5 backdrop-blur-md shadow-2xl">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2 text-primary">No Fees Unless We Win</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    We work on a contingency fee basis. You pay nothing unless we secure compensation for you.
                  </p>
                  <Button variant="outline" size="sm" className="w-full group hover:bg-primary hover:text-primary-foreground transition-all duration-300" onClick={() => window.location.href = '/mass-torts-case-evaluation'}>
                    <DollarSign className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MassTotsCompensationCalculator;