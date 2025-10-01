import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Calculator, Star, AlertTriangle, Shield, Phone, FileText } from 'lucide-react';
import heroBackground from '@/assets/opioid-calculator-hero.jpg';

gsap.registerPlugin(ScrollTrigger);

interface CalculatorData {
  age: number;
  addictionType: string;
  addictionSeverity: string;
  treatmentCosts: number;
  lostWages: number;
  addictionDuration: number;
  familySize: number;
}

const OpioidCalculator: React.FC = () => {
  const [calculatorData, setCalculatorData] = useState<CalculatorData>({
    age: 35,
    addictionType: '',
    addictionSeverity: '',
    treatmentCosts: 0,
    lostWages: 0,
    addictionDuration: 1,
    familySize: 1
  });

  const [estimatedCompensation, setEstimatedCompensation] = useState({
    low: 0,
    high: 0,
    average: 0
  });

  const calculatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(calculatorRef.current?.querySelectorAll('.calculator-card'),
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.2,
          scrollTrigger: {
            trigger: calculatorRef.current,
            start: 'top 80%'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    calculateCompensation();
  }, [calculatorData]);

  const calculateCompensation = () => {
    let baseAmount = 50000;
    
    // Age factor (younger victims typically get higher settlements)
    const ageFactor = calculatorData.age < 30 ? 1.3 : 
                     calculatorData.age < 50 ? 1.1 : 
                     calculatorData.age < 65 ? 1.0 : 0.8;

    // Addiction severity factor
    const severityMultiplier = {
      'mild': 1.0,
      'moderate': 1.5,
      'severe': 2.2,
      'overdose-survival': 3.0
    }[calculatorData.addictionSeverity] || 1.0;

    // Treatment costs factor
    const treatmentFactor = Math.min(calculatorData.treatmentCosts / 10000, 10);

    // Lost wages factor
    const wagesFactor = Math.min(calculatorData.lostWages / 25000, 8);

    // Duration factor
    const durationFactor = Math.min(calculatorData.addictionDuration * 0.2, 2.0);

    // Family impact factor
    const familyFactor = Math.min(calculatorData.familySize * 0.1, 0.5);

    const multiplier = ageFactor * severityMultiplier * (1 + treatmentFactor + wagesFactor + durationFactor + familyFactor);
    
    const average = Math.round(baseAmount * multiplier);
    const low = Math.round(average * 0.6);
    const high = Math.round(average * 1.8);

    setEstimatedCompensation({ low, high, average });
  };

  const handleInputChange = (field: keyof CalculatorData, value: any) => {
    setCalculatorData(prev => ({ ...prev, [field]: value }));
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Opioid Compensation Calculator
          </h1>
          <div className="flex items-center justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
            ))}
            <span className="ml-2 text-lg">Get Your Estimate</span>
          </div>
          <p className="text-xl opacity-90">
            Calculate your potential compensation for opioid addiction damages
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Calculator Section */}
          <div className="lg:col-span-2" ref={calculatorRef}>
            <Card className="calculator-card p-8">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-red-600">
                  <Calculator className="w-6 h-6 mr-3" />
                  Opioid Compensation Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Age</label>
                    <Slider
                      value={[calculatorData.age]}
                      onValueChange={(value) => handleInputChange('age', value[0])}
                      max={80}
                      min={18}
                      step={1}
                    />
                    <span className="text-sm text-muted-foreground">{calculatorData.age} years old</span>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Addiction Type</label>
                    <Select value={calculatorData.addictionType} onValueChange={(value) => handleInputChange('addictionType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select addiction type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="prescription-opioids">Prescription Opioids</SelectItem>
                        <SelectItem value="heroin-from-pills">Heroin (Started with Pills)</SelectItem>
                        <SelectItem value="fentanyl">Fentanyl</SelectItem>
                        <SelectItem value="multiple-substances">Multiple Substances</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Addiction Severity</label>
                  <Select value={calculatorData.addictionSeverity} onValueChange={(value) => handleInputChange('addictionSeverity', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select severity level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mild">Mild - Functional addiction</SelectItem>
                      <SelectItem value="moderate">Moderate - Significant impairment</SelectItem>
                      <SelectItem value="severe">Severe - Life disruption</SelectItem>
                      <SelectItem value="overdose-survival">Overdose Survivor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Treatment Costs</label>
                    <Input
                      type="number"
                      value={calculatorData.treatmentCosts}
                      onChange={(e) => handleInputChange('treatmentCosts', parseInt(e.target.value) || 0)}
                      placeholder="Enter total treatment costs"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Lost Wages</label>
                    <Input
                      type="number"
                      value={calculatorData.lostWages}
                      onChange={(e) => handleInputChange('lostWages', parseInt(e.target.value) || 0)}
                      placeholder="Enter lost wages"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Addiction Duration (Years)</label>
                    <Slider
                      value={[calculatorData.addictionDuration]}
                      onValueChange={(value) => handleInputChange('addictionDuration', value[0])}
                      max={20}
                      min={0.5}
                      step={0.5}
                    />
                    <span className="text-sm text-muted-foreground">{calculatorData.addictionDuration} years</span>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Family Size</label>
                    <Slider
                      value={[calculatorData.familySize]}
                      onValueChange={(value) => handleInputChange('familySize', value[0])}
                      max={10}
                      min={1}
                      step={1}
                    />
                    <span className="text-sm text-muted-foreground">{calculatorData.familySize} family members</span>
                  </div>
                </div>

                {/* Results Section */}
                {estimatedCompensation.average > 0 && (
                  <div className="mt-8 p-6 bg-green-50 rounded-lg border-2 border-green-200">
                    <h3 className="text-xl font-bold text-green-800 mb-4">Estimated Compensation Range</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-700">{formatCurrency(estimatedCompensation.low)}</div>
                        <div className="text-sm text-green-600">Conservative Estimate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-800">{formatCurrency(estimatedCompensation.average)}</div>
                        <div className="text-sm text-green-600">Average Estimate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-700">{formatCurrency(estimatedCompensation.high)}</div>
                        <div className="text-sm text-green-600">Optimistic Estimate</div>
                      </div>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <Button 
                        size="lg" 
                        className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3"
                        onClick={() => window.location.href = '/opioid-case-evaluation'}
                      >
                        GET FREE CASE EVALUATION
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              
              {/* Legal Disclaimer */}
              <Card className="calculator-card p-6 bg-yellow-50 border-yellow-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg text-yellow-800">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Legal Disclaimer
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-yellow-700">
                    This calculator provides estimates based on general factors and should not be considered a guarantee of compensation. 
                    Actual settlements depend on many case-specific factors including liability strength, available defendants, 
                    and individual damages. Consult with an experienced opioid litigation attorney for accurate case evaluation.
                  </p>
                </CardContent>
              </Card>

              {/* Compensation Factors */}
              <Card className="calculator-card p-6">
                <CardHeader>
                  <CardTitle className="text-lg text-red-600">Factors Affecting Compensation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Medical treatment costs</li>
                    <li>• Rehabilitation expenses</li>
                    <li>• Lost wages and earning capacity</li>
                    <li>• Pain and suffering</li>
                    <li>• Family impact</li>
                    <li>• Addiction duration and severity</li>
                    <li>• Available liable parties</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card className="calculator-card p-6 bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-800">Ready to Pursue Your Case?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-blue-700">
                    Get a personalized case evaluation from experienced opioid litigation attorneys.
                  </p>
                  <div className="space-y-2">
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700"
                      onClick={() => window.location.href = 'tel:8181234567'}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call (818) 123-4567
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                      onClick={() => window.location.href = '/opioid-case-evaluation'}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Free Case Evaluation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpioidCalculator;