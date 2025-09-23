import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { 
  Calculator,
  DollarSign,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Anchor,
  Ship,
  Star
} from 'lucide-react';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';
import heroBackground from '@/assets/maritime-compensation-calculator-hero.jpg';

gsap.registerPlugin(ScrollTrigger);

const MaritimeCompensationCalculator: React.FC = () => {
  const [calculatorData, setCalculatorData] = useState({
    age: 40,
    injuryType: '',
    severity: '',
    medicalExpenses: 0,
    lostWages: 0,
    treatmentDuration: '',
    faultClarity: '',
    maritimeEmployment: '',
    vesselType: '',
    painLevel: [5]
  });

  const [results, setResults] = useState({
    lowEstimate: 0,
    midEstimate: 0,
    highEstimate: 0,
    factors: [] as string[]
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const calculatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    calculateCompensation();
  }, [calculatorData]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );

      // Calculator animation
      gsap.fromTo(calculatorRef.current?.querySelectorAll('.calc-section'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: calculatorRef.current,
            start: 'top 80%'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const calculateCompensation = () => {
    let baseMultiplier = 1.0;
    let factors: string[] = [];

    // Age factor
    if (calculatorData.age < 30) {
      baseMultiplier += 0.4;
      factors.push('Young age increases earning capacity impact');
    } else if (calculatorData.age < 50) {
      baseMultiplier += 0.2;
      factors.push('Prime working years affected');
    } else if (calculatorData.age < 65) {
      baseMultiplier += 0.1;
      factors.push('Continued earning potential');
    }

    // Injury type multiplier
    switch (calculatorData.injuryType) {
      case 'spinal-cord':
        baseMultiplier += 2.0;
        factors.push('Spinal cord injuries have severe long-term impacts');
        break;
      case 'traumatic-brain':
        baseMultiplier += 1.8;
        factors.push('Brain injuries affect cognitive and earning capacity');
        break;
      case 'amputation':
        baseMultiplier += 1.5;
        factors.push('Amputation causes permanent disability');
        break;
      case 'burns':
        baseMultiplier += 1.3;
        factors.push('Severe burns require extensive treatment');
        break;
      case 'fractures':
        baseMultiplier += 0.8;
        factors.push('Fractures may cause lasting complications');
        break;
      case 'soft-tissue':
        baseMultiplier += 0.3;
        factors.push('Soft tissue injuries can be chronic');
        break;
    }

    // Severity multiplier
    switch (calculatorData.severity) {
      case 'catastrophic':
        baseMultiplier += 1.5;
        factors.push('Catastrophic injuries warrant maximum compensation');
        break;
      case 'severe':
        baseMultiplier += 1.0;
        factors.push('Severe injuries significantly impact life quality');
        break;
      case 'moderate':
        baseMultiplier += 0.5;
        factors.push('Moderate injuries still require substantial recovery');
        break;
      case 'minor':
        baseMultiplier += 0.1;
        factors.push('Even minor injuries deserve compensation');
        break;
    }

    // Treatment duration
    switch (calculatorData.treatmentDuration) {
      case 'lifetime':
        baseMultiplier += 1.2;
        factors.push('Lifetime medical care significantly increases value');
        break;
      case 'years':
        baseMultiplier += 0.8;
        factors.push('Multi-year treatment increases compensation');
        break;
      case 'months':
        baseMultiplier += 0.4;
        factors.push('Extended treatment period increases value');
        break;
      case 'weeks':
        baseMultiplier += 0.1;
        factors.push('Short-term treatment still compensable');
        break;
    }

    // Maritime employment status
    switch (calculatorData.maritimeEmployment) {
      case 'seaman-jones-act':
        baseMultiplier += 0.8;
        factors.push('Jones Act provides enhanced protections for seamen');
        break;
      case 'longshore-worker':
        baseMultiplier += 0.6;
        factors.push('LHWCA coverage provides additional benefits');
        break;
      case 'passenger':
        baseMultiplier += 0.4;
        factors.push('Maritime passengers have specific legal protections');
        break;
      case 'harbor-worker':
        baseMultiplier += 0.5;
        factors.push('Harbor workers covered under maritime law');
        break;
    }

    // Fault clarity
    switch (calculatorData.faultClarity) {
      case 'clear-defendant-fault':
        baseMultiplier += 0.5;
        factors.push('Clear defendant fault strengthens case value');
        break;
      case 'mostly-defendant-fault':
        baseMultiplier += 0.3;
        factors.push('Strong liability case increases compensation');
        break;
      case 'shared-fault':
        baseMultiplier -= 0.2;
        factors.push('Shared fault may reduce compensation under comparative negligence');
        break;
      case 'unclear':
        baseMultiplier -= 0.1;
        factors.push('Unclear fault may require additional investigation');
        break;
    }

    // Pain and suffering multiplier
    baseMultiplier += (calculatorData.painLevel[0] / 10) * 0.3;
    factors.push(`Pain level ${calculatorData.painLevel[0]}/10 affects non-economic damages`);

    // Calculate economic damages base
    const economicDamages = calculatorData.medicalExpenses + calculatorData.lostWages;
    const baseCompensation = Math.max(economicDamages, 25000); // Minimum baseline

    // Calculate estimates
    const midEstimate = baseCompensation * baseMultiplier;
    const lowEstimate = midEstimate * 0.6;
    const highEstimate = midEstimate * 1.8;

    setResults({
      lowEstimate: Math.round(lowEstimate),
      midEstimate: Math.round(midEstimate),
      highEstimate: Math.round(highEstimate),
      factors: factors.slice(0, 8) // Limit to most relevant factors
    });
  };

  const updateCalculatorData = (field: string, value: any) => {
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

  const resetCalculator = () => {
    setCalculatorData({
      age: 40,
      injuryType: '',
      severity: '',
      medicalExpenses: 0,
      lostWages: 0,
      treatmentDuration: '',
      faultClarity: '',
      maritimeEmployment: '',
      vesselType: '',
      painLevel: [5]
    });
  };

  return (
    <>
      <SEO
        title="Maritime Accident Compensation Calculator | California Maritime Law"
        description="Free maritime compensation calculator for California maritime accidents. Estimate potential settlement values for Jones Act, LHWCA, and admiralty claims."
        keywords="maritime compensation calculator, Jones Act settlement, LHWCA benefits, maritime injury value"
        canonical="/maritime/compensation-calculator"
      />
      
      <GoBack fallbackPath="/practice-areas/maritime-accidents" />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            <div className="hero-content">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Maritime Compensation Calculator</h1>
              <p className="text-xl mb-6">
                Get an estimated range of compensation for your California maritime accident case
              </p>
              <div className="flex items-center justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                ))}
                <span className="ml-2">Trusted Maritime Law Experts</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" ref={calculatorRef}>
            
            {/* Calculator Form */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Calculator Form */}
              <Card className="calc-section">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Calculator className="w-6 h-6 mr-2" />
                    Compensation Calculator
                  </CardTitle>
                  <p className="text-muted-foreground">
                    This calculator provides estimates based on California maritime injury cases
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                    <div className="space-y-4">
                      <div>
                        <Label>Your Age: {calculatorData.age} years</Label>
                        <Slider
                          value={[calculatorData.age]}
                          onValueChange={(value) => updateCalculatorData('age', value[0])}
                          max={80}
                          min={18}
                          step={1}
                          className="mt-2"
                        />
                        <div className="flex justify-between text-sm text-muted-foreground mt-1">
                          <span>18 years</span>
                          <span className="font-semibold">{calculatorData.age} years</span>
                          <span>80 years</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Maritime Employment */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Maritime Employment Status</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>Employment Type</Label>
                        <Select value={calculatorData.maritimeEmployment} onValueChange={(value) => updateCalculatorData('maritimeEmployment', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select employment type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="seaman-jones-act">Seaman (Jones Act)</SelectItem>
                            <SelectItem value="longshore-worker">Longshore Worker (LHWCA)</SelectItem>
                            <SelectItem value="harbor-worker">Harbor Worker</SelectItem>
                            <SelectItem value="passenger">Passenger</SelectItem>
                            <SelectItem value="visitor">Visitor/Tourist</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label>Vessel Type</Label>
                        <Select value={calculatorData.vesselType} onValueChange={(value) => updateCalculatorData('vesselType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select vessel type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="commercial-vessel">Commercial Vessel</SelectItem>
                            <SelectItem value="cruise-ship">Cruise Ship</SelectItem>
                            <SelectItem value="cargo-ship">Cargo Ship</SelectItem>
                            <SelectItem value="fishing-vessel">Fishing Vessel</SelectItem>
                            <SelectItem value="ferry">Ferry</SelectItem>
                            <SelectItem value="yacht">Yacht/Pleasure Craft</SelectItem>
                            <SelectItem value="offshore-platform">Offshore Platform</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Injury Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Injury Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>Injury Type</Label>
                        <Select value={calculatorData.injuryType} onValueChange={(value) => updateCalculatorData('injuryType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select injury type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="spinal-cord">Spinal Cord Injury</SelectItem>
                            <SelectItem value="traumatic-brain">Traumatic Brain Injury</SelectItem>
                            <SelectItem value="amputation">Amputation</SelectItem>
                            <SelectItem value="burns">Burns</SelectItem>
                            <SelectItem value="fractures">Fractures/Broken Bones</SelectItem>
                            <SelectItem value="soft-tissue">Soft Tissue Injury</SelectItem>
                            <SelectItem value="drowning">Near Drowning/Drowning</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label>Injury Severity</Label>
                        <Select value={calculatorData.severity} onValueChange={(value) => updateCalculatorData('severity', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select severity" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="catastrophic">Catastrophic</SelectItem>
                            <SelectItem value="severe">Severe</SelectItem>
                            <SelectItem value="moderate">Moderate</SelectItem>
                            <SelectItem value="minor">Minor</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Treatment & Recovery */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Treatment & Recovery</h3>
                    <div>
                      <Label>Expected Treatment Duration</Label>
                      <Select value={calculatorData.treatmentDuration} onValueChange={(value) => updateCalculatorData('treatmentDuration', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select treatment duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="lifetime">Lifetime Care Needed</SelectItem>
                          <SelectItem value="years">Several Years</SelectItem>
                          <SelectItem value="months">Several Months</SelectItem>
                          <SelectItem value="weeks">Few Weeks</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Pain Level */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Pain & Suffering</h3>
                    <div>
                      <Label>Pain Level (1-10)</Label>
                      <Slider
                        value={calculatorData.painLevel}
                        onValueChange={(value) => updateCalculatorData('painLevel', value)}
                        max={10}
                        min={1}
                        step={1}
                        className="mt-2"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-1">
                        <span>Minimal (1)</span>
                        <span className="font-semibold">{calculatorData.painLevel[0]}/10</span>
                        <span>Severe (10)</span>
                      </div>
                    </div>
                  </div>

                  {/* Economic Damages */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Economic Damages</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>Medical Expenses</Label>
                        <Input
                          type="number"
                          value={calculatorData.medicalExpenses}
                          onChange={(e) => updateCalculatorData('medicalExpenses', Number(e.target.value))}
                          placeholder="Enter amount"
                        />
                      </div>
                      
                      <div>
                        <Label>Lost Wages</Label>
                        <Input
                          type="number"
                          value={calculatorData.lostWages}
                          onChange={(e) => updateCalculatorData('lostWages', Number(e.target.value))}
                          placeholder="Enter amount"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Fault Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Fault & Liability</h3>
                    <div>
                      <Label>Fault Clarity</Label>
                      <Select value={calculatorData.faultClarity} onValueChange={(value) => updateCalculatorData('faultClarity', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="How clear is the other party's fault?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="clear-defendant-fault">Clearly Other Party's Fault</SelectItem>
                          <SelectItem value="mostly-defendant-fault">Mostly Other Party's Fault</SelectItem>
                          <SelectItem value="shared-fault">Shared Fault</SelectItem>
                          <SelectItem value="unclear">Unclear/Under Investigation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      onClick={resetCalculator} 
                      variant="outline"
                      className="flex-1"
                    >
                      Reset Calculator
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Results Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 space-y-6">
                
                {/* Compensation Estimate */}
                <Card className="calc-section border-2 border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <DollarSign className="w-5 h-5 mr-2" />
                      Estimated Compensation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Low Estimate:</span>
                        <span className="text-lg font-semibold text-green-600">
                          {formatCurrency(results.lowEstimate)}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Mid Estimate:</span>
                        <span className="text-xl font-bold text-primary">
                          {formatCurrency(results.midEstimate)}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm">High Estimate:</span>
                        <span className="text-lg font-semibold text-blue-600">
                          {formatCurrency(results.highEstimate)}
                        </span>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => window.location.href = '/maritime/case-evaluation'}
                    >
                      Get Free Case Evaluation
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>

                {/* Factors Affecting Your Case */}
                {results.factors.length > 0 && (
                  <Card className="calc-section">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <TrendingUp className="w-5 h-5 mr-2" />
                        Key Factors
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {results.factors.map((factor, index) => (
                          <div key={index} className="flex items-start text-sm">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                            <span>{factor}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Call to Action */}
                <Card className="calc-section bg-red-50 border-red-200">
                  <CardHeader>
                    <CardTitle className="text-red-800">Speak With a Maritime Attorney</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-red-700">
                      Get personalized advice about your maritime accident case from experienced admiralty lawyers.
                    </p>
                    
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                      onClick={() => window.location.href = 'tel:8181234567'}
                    >
                      Call (818) 123-4567
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      onClick={() => window.location.href = '/maritime/case-evaluation'}
                    >
                      Free Case Evaluation
                      <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>

                {/* Disclaimer */}
                <Card className="calc-section bg-muted/30">
                  <CardContent className="pt-6">
                    <div className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div className="text-xs text-muted-foreground">
                        <p className="font-semibold mb-2">Important Disclaimer:</p>
                        <p>
                          This calculator provides estimates only and is not a guarantee of compensation. 
                          Actual settlement amounts depend on many factors including case strength, available evidence, 
                          defendant assets, and negotiation outcomes. Each maritime case is unique and requires individual 
                          evaluation by qualified admiralty attorneys. Consult with our experienced maritime lawyers 
                          for an accurate assessment of your specific situation.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MaritimeCompensationCalculator;