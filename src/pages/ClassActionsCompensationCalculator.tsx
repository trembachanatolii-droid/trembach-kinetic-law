import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, DollarSign, AlertTriangle } from 'lucide-react';
import heroBackground from '@/assets/class-actions-compensation-calculator-hero.jpg';
import SEO from '@/components/SEO';

gsap.registerPlugin(ScrollTrigger);

const ClassActionsCompensationCalculator: React.FC = () => {
  const [calculatorData, setCalculatorData] = useState({
    caseType: '',
    damages: '',
    timeframe: '',
    evidence: '',
    classSize: ''
  });
  const [estimatedRange, setEstimatedRange] = useState<string>('');

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.calculator-card',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const calculateCompensation = () => {
    // Basic calculation logic for class action estimation
    let baseAmount = 0;
    let multiplier = 1;

    // Case type factors
    switch (calculatorData.caseType) {
      case 'data-breach':
        baseAmount = 500;
        break;
      case 'consumer-fraud':
        baseAmount = 1000;
        break;
      case 'employment-violation':
        baseAmount = 2000;
        break;
      case 'defective-product':
        baseAmount = 1500;
        break;
      default:
        baseAmount = 750;
    }

    // Damage multipliers
    switch (calculatorData.damages) {
      case 'under-1000':
        multiplier *= 0.5;
        break;
      case '1000-5000':
        multiplier *= 1;
        break;
      case '5000-plus':
        multiplier *= 2;
        break;
    }

    const estimated = baseAmount * multiplier;
    setEstimatedRange(`$${Math.round(estimated * 0.7).toLocaleString()} - $${Math.round(estimated * 1.5).toLocaleString()}`);
  };

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <SEO 
        title="Class Action Compensation Calculator | Estimate Settlement Value | Trembach Law Firm"
        description="Calculate potential compensation for your class action case. Free estimation tool for consumer fraud, data breaches, employment violations, and defective product claims."
        canonical="/class-actions-compensation-calculator"
      />
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Class Action Compensation Calculator
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
            Estimate potential compensation for your class action case
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="calculator-card glass-card border-primary/10 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md shadow-2xl">
              <CardHeader>
                <div className="text-center">
                  <Calculator className="w-16 h-16 text-primary mx-auto mb-4" />
                  <CardTitle className="text-3xl text-primary">Compensation Calculator</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Case Type</label>
                    <Select value={calculatorData.caseType} onValueChange={(value) => setCalculatorData(prev => ({ ...prev, caseType: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select case type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="data-breach">Data Breach</SelectItem>
                        <SelectItem value="consumer-fraud">Consumer Fraud</SelectItem>
                        <SelectItem value="employment-violation">Employment Violation</SelectItem>
                        <SelectItem value="defective-product">Defective Product</SelectItem>
                        <SelectItem value="false-advertising">False Advertising</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Damages</label>
                    <Select value={calculatorData.damages} onValueChange={(value) => setCalculatorData(prev => ({ ...prev, damages: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select damage range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-1000">Under $1,000</SelectItem>
                        <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                        <SelectItem value="5000-plus">Over $5,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button 
                  onClick={calculateCompensation}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 text-lg"
                  disabled={!calculatorData.caseType || !calculatorData.damages}
                >
                  <DollarSign className="w-5 h-5 mr-2" />
                  Calculate Estimated Compensation
                </Button>

                {estimatedRange && (
                  <Card className="bg-primary/10 border-primary/20">
                    <CardContent className="pt-6 text-center">
                      <h3 className="text-2xl font-bold text-primary mb-2">Estimated Range</h3>
                      <p className="text-3xl font-bold text-foreground">{estimatedRange}</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        This is a preliminary estimate. Actual compensation depends on many factors.
                      </p>
                    </CardContent>
                  </Card>
                )}

                    {/* Legal Disclaimer */}
                    <div className="bg-muted/50 border border-muted rounded-lg p-4 mt-6">
                      <div className="flex items-start">
                        <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
                        <div className="text-sm text-muted-foreground leading-relaxed">
                          <p className="mb-2">
                            <strong>Legal Disclaimer:</strong> This calculator provides estimates only based on general case data. 
                            Actual compensation depends on case specifics, settlement negotiations, court approval, class size, 
                            and individual circumstances.
                          </p>
                          <p>
                            Results are not guaranteed and should not be relied upon as legal advice. 
                            Consult with a qualified attorney for accurate case evaluation. Prior results do not guarantee similar outcomes.
                          </p>
                        </div>
                      </div>
                    </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClassActionsCompensationCalculator;