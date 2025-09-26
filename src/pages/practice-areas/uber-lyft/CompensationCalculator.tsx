import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  DollarSign, 
  Calculator,
  TrendingUp,
  Shield,
  AlertTriangle,
  Star,
  Heart,
  Clock,
  FileText,
  Building,
  Car
} from 'lucide-react';
import useScrollRestoration from '@/hooks/useScrollRestoration';

import SEO from '@/components/SEO';
import heroBackground from '@/assets/uber-lyft-compensation-hero.jpg';

gsap.registerPlugin(ScrollTrigger);

interface CompensationFactors {
  medicalExpenses: number;
  lostWages: number;
  painSeverity: number;
  injuryDuration: number;
  ageRange: string;
  faultPercentage: number;
  insuranceCoverage: string;
  accidentType: string;
}

const CompensationCalculator: React.FC = () => {
  useScrollRestoration();
  const [factors, setFactors] = useState<CompensationFactors>({
    medicalExpenses: 0,
    lostWages: 0,
    painSeverity: 5,
    injuryDuration: 6,
    ageRange: '25-40',
    faultPercentage: 0,
    insuranceCoverage: 'period3',
    accidentType: 'passenger'
  });

  const [estimatedRange, setEstimatedRange] = useState({ low: 0, high: 0 });
  const [showResults, setShowResults] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 3D Hero Effects
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { 
          opacity: 0, 
          y: 100,
          rotationX: -15,
          transformPerspective: 1000
        },
        { 
          opacity: 1, 
          y: 0, 
          rotationX: 0,
          duration: 1.2, 
          ease: 'power3.out' 
        }
      );

      // Calculator card animations
      gsap.fromTo(contentRef.current?.querySelectorAll('.calc-card'),
        { opacity: 0, y: 50, rotationY: -10 },
        { 
          opacity: 1, 
          y: 0, 
          rotationY: 0,
          duration: 0.8, 
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%'
          }
        }
      );

      // Dollar signs floating animation
      gsap.to('.dollar-float', {
        y: -20,
        rotation: 5,
        duration: 2,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.3
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (showResults && resultsRef.current) {
      gsap.fromTo(resultsRef.current,
        { opacity: 0, scale: 0.8, rotationX: -20 },
        { 
          opacity: 1, 
          scale: 1, 
          rotationX: 0,
          duration: 1, 
          ease: 'back.out(1.7)' 
        }
      );
    }
  }, [showResults]);

  const calculateCompensation = () => {
    let baseAmount = factors.medicalExpenses + factors.lostWages;
    
    // Pain and suffering multiplier based on severity and duration
    const painMultiplier = (factors.painSeverity / 10) * (factors.injuryDuration / 12) * 2;
    const painAndSuffering = baseAmount * Math.max(painMultiplier, 1);
    
    // Age factor
    const ageFactor = factors.ageRange === '18-25' ? 1.2 : 
                     factors.ageRange === '25-40' ? 1.1 : 
                     factors.ageRange === '40-55' ? 1.0 : 0.9;
    
    // Accident type factor
    const accidentFactor = factors.accidentType === 'passenger' ? 1.0 :
                          factors.accidentType === 'pedestrian' ? 1.3 :
                          factors.accidentType === 'cyclist' ? 1.2 :
                          factors.accidentType === 'driver' ? 0.9 : 1.0;
    
    // Insurance coverage factor
    const coverageFactor = factors.insuranceCoverage === 'period3' ? 1.0 :
                          factors.insuranceCoverage === 'period2' ? 0.7 :
                          factors.insuranceCoverage === 'period1' ? 0.4 : 1.0;
    
    // Calculate total before fault reduction
    const totalBeforeFault = (baseAmount + painAndSuffering) * ageFactor * accidentFactor * coverageFactor;
    
    // Apply fault percentage (California comparative negligence)
    const faultReduction = (100 - factors.faultPercentage) / 100;
    const finalAmount = totalBeforeFault * faultReduction;
    
    // Provide range (20% variance)
    const low = Math.max(finalAmount * 0.8, 1000);
    const high = Math.min(finalAmount * 1.2, 1000000); // Cap at policy limits
    
    setEstimatedRange({ low: Math.round(low), high: Math.round(high) });
    setShowResults(true);
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
    <div className="min-h-screen bg-background">
      <SEO
        title="California Uber & Lyft Accident Compensation Calculator | Trembach Law Firm"
        description="Calculate your potential rideshare accident compensation. Free tool analyzes medical bills, lost wages, pain & suffering for California Uber/Lyft injury claims."
        canonical="https://www.trembachlawfirm.com/uber-lyft/compensation-calculator"
      />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-black/60 to-green-900/80 pointer-events-none"></div>
        
        
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <div className="flex justify-center items-center mb-6">
              <DollarSign className="dollar-float w-16 h-16 text-green-400 mr-4" />
              <Calculator className="dollar-float w-16 h-16 text-blue-400 mr-4" />
              <TrendingUp className="dollar-float w-16 h-16 text-yellow-400" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-400 to-yellow-400 bg-clip-text text-transparent">
              Compensation Calculator
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1 animate-pulse" />
              ))}
              <span className="ml-2 text-lg">Accurate Estimates Based on Real Cases</span>
            </div>
            
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Get an estimate of your potential California rideshare accident compensation based on real case outcomes and current legal standards.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12" ref={contentRef}>
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Calculate Your Potential Compensation</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            This calculator provides estimates based on California rideshare accident cases. 
            Actual compensation depends on many factors and requires expert legal analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Calculator Form */}
          <div className="space-y-6">
            
            {/* Medical Expenses */}
            <Card className="calc-card glass-card border-l-4 border-l-red-500 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="w-5 h-5 mr-3 text-red-500" />
                  Medical Expenses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Total Medical Bills</label>
                    <Input
                      type="number"
                      placeholder="Enter amount"
                      value={factors.medicalExpenses || ''}
                      onChange={(e) => setFactors(prev => ({ ...prev, medicalExpenses: parseFloat(e.target.value) || 0 }))}
                      className="border-2 focus:border-red-500"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Include hospital bills, doctor visits, therapy, medications, and future medical needs.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Lost Wages */}
            <Card className="calc-card glass-card border-l-4 border-l-blue-500 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-blue-500" />
                  Lost Income
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Lost Wages & Income</label>
                    <Input
                      type="number"
                      placeholder="Enter amount"
                      value={factors.lostWages || ''}
                      onChange={(e) => setFactors(prev => ({ ...prev, lostWages: parseFloat(e.target.value) || 0 }))}
                      className="border-2 focus:border-blue-500"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Include past and future lost wages, sick time used, and reduced earning capacity.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Pain & Suffering */}
            <Card className="calc-card glass-card border-l-4 border-l-purple-500 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-3 text-purple-500" />
                  Pain & Impact Level
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Pain Severity (1-10): {factors.painSeverity}
                    </label>
                    <Slider
                      value={[factors.painSeverity]}
                      onValueChange={(value) => setFactors(prev => ({ ...prev, painSeverity: value[0] }))}
                      max={10}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Recovery Duration (months): {factors.injuryDuration}
                    </label>
                    <Slider
                      value={[factors.injuryDuration]}
                      onValueChange={(value) => setFactors(prev => ({ ...prev, injuryDuration: value[0] }))}
                      max={60}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Personal Factors */}
            <Card className="calc-card glass-card border-l-4 border-l-green-500 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-3 text-green-500" />
                  Case Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Your Age Range</label>
                    <Select value={factors.ageRange} onValueChange={(value) => setFactors(prev => ({ ...prev, ageRange: value }))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="18-25">18-25 years</SelectItem>
                        <SelectItem value="25-40">25-40 years</SelectItem>
                        <SelectItem value="40-55">40-55 years</SelectItem>
                        <SelectItem value="55+">55+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Accident Type</label>
                    <Select value={factors.accidentType} onValueChange={(value) => setFactors(prev => ({ ...prev, accidentType: value }))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="passenger">Passenger in Rideshare</SelectItem>
                        <SelectItem value="pedestrian">Pedestrian Hit</SelectItem>
                        <SelectItem value="cyclist">Cyclist Hit</SelectItem>
                        <SelectItem value="driver">Other Driver</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Insurance Coverage Period</label>
                    <Select value={factors.insuranceCoverage} onValueChange={(value) => setFactors(prev => ({ ...prev, insuranceCoverage: value }))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="period3">Period 3 ($1M coverage - during ride)</SelectItem>
                        <SelectItem value="period2">Period 2 (en route to passenger)</SelectItem>
                        <SelectItem value="period1">Period 1 (app on, no passenger)</SelectItem>
                        <SelectItem value="unknown">Unknown</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Your Fault Percentage: {factors.faultPercentage}%
                    </label>
                    <Slider
                      value={[factors.faultPercentage]}
                      onValueChange={(value) => setFactors(prev => ({ ...prev, faultPercentage: value[0] }))}
                      max={90}
                      min={0}
                      step={5}
                      className="w-full"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      California comparative negligence law reduces compensation by fault percentage.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button 
              onClick={calculateCompensation}
              className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-4 text-lg font-bold"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Calculate My Compensation
            </Button>
          </div>

          {/* Results Panel */}
          <div className="space-y-6">
            
            {!showResults ? (
              <Card className="glass-card border-2 border-dashed border-muted-foreground/30 h-full flex items-center justify-center">
                <CardContent className="text-center p-12">
                  <Calculator className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                    Enter Your Information
                  </h3>
                  <p className="text-muted-foreground">
                    Fill out the form on the left to calculate your estimated compensation range.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div ref={resultsRef}>
                <Card className="glass-card border-2 border-green-500 shadow-2xl">
                  <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
                    <CardTitle className="text-center text-2xl">
                      <TrendingUp className="w-6 h-6 inline mr-2 text-green-600" />
                      Estimated Compensation Range
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className="text-4xl font-bold text-green-600 mb-2">
                        {formatCurrency(estimatedRange.low)} - {formatCurrency(estimatedRange.high)}
                      </div>
                      <Badge variant="secondary" className="text-sm">
                        California Rideshare Accident Estimate
                      </Badge>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <span className="font-medium">Economic Damages:</span>
                        <span className="font-bold">{formatCurrency(factors.medicalExpenses + factors.lostWages)}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <span className="font-medium">Pain & Suffering:</span>
                        <span className="font-bold">2-3x Economic Damages</span>
                      </div>
                      {factors.faultPercentage > 0 && (
                        <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                          <span className="font-medium">Fault Reduction:</span>
                          <span className="font-bold text-red-600">-{factors.faultPercentage}%</span>
                        </div>
                      )}
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-l-yellow-500 mb-6">
                      <h4 className="font-semibold text-yellow-900 mb-2">Important Disclaimer</h4>
                      <p className="text-sm text-yellow-800">
                        This is an estimate only. Actual compensation depends on many factors including liability, 
                        insurance limits, injury severity, and legal representation quality. Every case is unique.
                      </p>
                    </div>

                    <div className="text-center">
                      <Button 
                        size="lg"
                        className="bg-red-600 hover:bg-red-700 text-white mb-4"
                        onClick={() => window.location.href = '/uber-lyft/case-evaluation'}
                      >
                        Get Professional Case Evaluation
                      </Button>
                      <p className="text-sm text-muted-foreground">
                        Free consultation with former defense attorney
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Factors That Could Increase Value */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                      Factors That Could Increase Your Case Value
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <Shield className="w-4 h-4 text-green-600 mt-0.5 mr-2" />
                        Strong evidence of driver negligence
                      </li>
                      <li className="flex items-start">
                        <Building className="w-4 h-4 text-green-600 mt-0.5 mr-2" />
                        Multiple liable parties (driver, rideshare company, other drivers)
                      </li>
                      <li className="flex items-start">
                        <Car className="w-4 h-4 text-green-600 mt-0.5 mr-2" />
                        Permanent or long-term disabilities
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-green-600 mt-0.5 mr-2" />
                        Well-documented medical treatment and expenses
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Contact Information */}
            <Card className="glass-card border-2 border-primary/20">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Want a Precise Evaluation?</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Our former defense attorney provides detailed case analysis based on your specific circumstances.
                </p>
                <div className="space-y-3">
                  <Button
                    size="lg"
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    Call (818) 123-4567
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full"
                    onClick={() => window.location.href = '/uber-lyft/case-evaluation'}
                  >
                    Free Case Evaluation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="glass-card text-center">
            <CardContent className="p-6">
              <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">No Win, No Fee</h3>
              <p className="text-sm text-muted-foreground">
                We only get paid when you receive compensation for your injuries.
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass-card text-center">
            <CardContent className="p-6">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Former Defense Experience</h3>
              <p className="text-sm text-muted-foreground">
                Unique insights from defending rideshare companies now used for victims.
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass-card text-center">
            <CardContent className="p-6">
              <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">24/7 Availability</h3>
              <p className="text-sm text-muted-foreground">
                Immediate response for serious California rideshare accidents.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CompensationCalculator;