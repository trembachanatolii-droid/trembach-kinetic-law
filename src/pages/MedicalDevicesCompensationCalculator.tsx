import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, DollarSign, AlertTriangle, ArrowLeft, FileText, Phone } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '@/components/SEO';
import heroImage from '@/assets/practice-areas/medical-devices-calculator-hero.jpg';

gsap.registerPlugin(ScrollTrigger);

const MedicalDevicesCompensationCalculator: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const calculatorRef = useRef<HTMLDivElement>(null);
  const [showGoBack, setShowGoBack] = useState(false);

  const [formData, setFormData] = useState({
    age: '',
    deviceType: '',
    complicationSeverity: '',
    medicalExpenses: '',
    lostWages: '',
    painDuration: '',
    futureCareCost: '',
    qualityOfLifeImpact: ''
  });

  const [estimatedCompensation, setEstimatedCompensation] = useState<{
    min: number;
    max: number;
    breakdown: {
      medical: number;
      lostWages: number;
      painSuffering: number;
      futureCare: number;
    };
  } | null>(null);

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

      gsap.fromTo(calculatorRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: calculatorRef.current,
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

  const calculateCompensation = () => {
    const medicalExpenses = parseFloat(formData.medicalExpenses) || 0;
    const lostWages = parseFloat(formData.lostWages) || 0;
    const futureCareCost = parseFloat(formData.futureCareCost) || 0;
    
    // Base multiplier for pain and suffering
    let painMultiplier = 1.5;
    
    // Adjust based on device type severity
    const deviceMultipliers: Record<string, number> = {
      'Hip Implant': 2.0,
      'Hernia Mesh': 1.8,
      'IVC Filter': 2.2,
      'Pacemaker': 2.5,
      'Transvaginal Mesh': 2.0,
      'Breast Implant': 1.5
    };
    
    painMultiplier *= deviceMultipliers[formData.deviceType] || 1.5;
    
    // Adjust based on complication severity
    const severityMultipliers: Record<string, number> = {
      'mild': 1.0,
      'moderate': 1.5,
      'severe': 2.0,
      'life-threatening': 2.5
    };
    
    painMultiplier *= severityMultipliers[formData.complicationSeverity] || 1.0;
    
    // Adjust based on age (younger victims typically receive more)
    const age = parseInt(formData.age) || 50;
    if (age < 40) painMultiplier *= 1.3;
    else if (age < 60) painMultiplier *= 1.1;
    
    // Calculate pain and suffering
    const painSuffering = (medicalExpenses + lostWages) * painMultiplier;
    
    const breakdown = {
      medical: medicalExpenses,
      lostWages,
      painSuffering,
      futureCare: futureCareCost
    };
    
    const total = medicalExpenses + lostWages + painSuffering + futureCareCost;
    
    setEstimatedCompensation({
      min: Math.round(total * 0.7),
      max: Math.round(total * 1.3),
      breakdown
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Medical Device Injury Compensation Calculator | Trembach Law Firm"
        description="Calculate potential compensation for medical device injuries. Free calculator for hip implants, hernia mesh, IVC filters, pacemakers. Get your case value estimate."
        canonical="/medical-devices-compensation-calculator"
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
            Medical Device Compensation Calculator
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Get an estimate of your potential compensation for medical device injuries
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <Card ref={calculatorRef} className="shadow-xl border-0">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-bold text-foreground mb-4">
                  Compensation Calculator
                </CardTitle>
                <p className="text-lg text-muted-foreground">
                  Please provide the following information to estimate your potential compensation
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="age">Your Age</Label>
                  <Input
                    id="age"
                    type="number"
                    value={formData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                    placeholder="Enter your age"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deviceType">Type of Medical Device</Label>
                  <Select value={formData.deviceType} onValueChange={(value) => handleInputChange('deviceType', value)}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select device type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Hip Implant">Hip Implant</SelectItem>
                      <SelectItem value="Knee Implant">Knee Implant</SelectItem>
                      <SelectItem value="Hernia Mesh">Hernia Mesh</SelectItem>
                      <SelectItem value="Transvaginal Mesh">Transvaginal Mesh</SelectItem>
                      <SelectItem value="IVC Filter">IVC Filter</SelectItem>
                      <SelectItem value="Pacemaker">Pacemaker</SelectItem>
                      <SelectItem value="Defibrillator">Defibrillator</SelectItem>
                      <SelectItem value="Breast Implant">Breast Implant</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="complicationSeverity">Severity of Complications</Label>
                  <Select value={formData.complicationSeverity} onValueChange={(value) => handleInputChange('complicationSeverity', value)}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select severity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mild">Mild complications</SelectItem>
                      <SelectItem value="moderate">Moderate complications</SelectItem>
                      <SelectItem value="severe">Severe complications</SelectItem>
                      <SelectItem value="life-threatening">Life-threatening complications</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="medicalExpenses">Total Medical Expenses ($)</Label>
                  <Input
                    id="medicalExpenses"
                    type="number"
                    value={formData.medicalExpenses}
                    onChange={(e) => handleInputChange('medicalExpenses', e.target.value)}
                    placeholder="Enter total medical costs"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lostWages">Lost Wages ($)</Label>
                  <Input
                    id="lostWages"
                    type="number"
                    value={formData.lostWages}
                    onChange={(e) => handleInputChange('lostWages', e.target.value)}
                    placeholder="Enter lost income"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="futureCareCost">Estimated Future Medical Care ($)</Label>
                  <Input
                    id="futureCareCost"
                    type="number"
                    value={formData.futureCareCost}
                    onChange={(e) => handleInputChange('futureCareCost', e.target.value)}
                    placeholder="Enter future care costs"
                    className="h-12"
                  />
                </div>

                <Button 
                  onClick={calculateCompensation}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 text-lg"
                  size="lg"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate Compensation
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <div className="space-y-8">
              {estimatedCompensation && (
                <Card className="shadow-xl border-2 border-primary/20">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold text-primary">
                      Estimated Compensation Range
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">
                        {formatCurrency(estimatedCompensation.min)} - {formatCurrency(estimatedCompensation.max)}
                      </div>
                      <p className="text-muted-foreground">
                        This is an estimate based on similar cases
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Compensation Breakdown:</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Medical Expenses:</span>
                          <span className="font-semibold">{formatCurrency(estimatedCompensation.breakdown.medical)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Lost Wages:</span>
                          <span className="font-semibold">{formatCurrency(estimatedCompensation.breakdown.lostWages)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Pain & Suffering:</span>
                          <span className="font-semibold">{formatCurrency(estimatedCompensation.breakdown.painSuffering)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Future Care:</span>
                          <span className="font-semibold">{formatCurrency(estimatedCompensation.breakdown.futureCare)}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card className="bg-amber-50 border-amber-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-amber-800 mb-2">Important Disclaimer</h4>
                      <p className="text-amber-700 text-sm leading-relaxed">
                        This calculator provides estimates based on similar cases and general compensation factors. 
                        Your actual compensation may vary significantly based on specific case details, evidence quality, 
                        and other legal factors. For an accurate assessment, please consult with our experienced attorneys.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardContent className="p-8 text-center">
                  <DollarSign className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-4">Get a Professional Case Evaluation</h3>
                  <p className="text-muted-foreground mb-6">
                    For a more accurate assessment of your case value, speak with our experienced medical device attorneys.
                  </p>
                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3"
                      onClick={() => window.location.href = '/medical-devices-case-evaluation'}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Start Free Case Evaluation
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.location.href = 'tel:8181234567'}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call (818) 123-4567
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalDevicesCompensationCalculator;