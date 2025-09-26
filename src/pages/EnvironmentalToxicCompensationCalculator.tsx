import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertTriangle, Calculator, DollarSign } from 'lucide-react';
import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import GoBack from '@/components/GoBack';
import heroBackground from '@/assets/environmental-toxic-compensation-calculator-hero.jpg';

gsap.registerPlugin(ScrollTrigger);

const EnvironmentalToxicCompensationCalculator: React.FC = () => {
  const [calculatorData, setCalculatorData] = useState({
    exposureType: '',
    healthEffects: '',
    propertyDamage: '',
    duration: ''
  });
  const [estimatedRange, setEstimatedRange] = useState<string>('');

  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );

      gsap.fromTo('.calculator-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: '.calculator-card',
            start: 'top 80%'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const calculateCompensation = () => {
    if (!calculatorData.exposureType || !calculatorData.healthEffects) return;

    let baseAmount = 0;
    let multiplier = 1;

    // Base amounts by exposure type
    switch (calculatorData.exposureType) {
      case 'pfas':
        baseAmount = 75000;
        break;
      case 'tce-pce':
        baseAmount = 85000;
        break;
      case 'chromium':
        baseAmount = 70000;
        break;
      case 'benzene':
        baseAmount = 90000;
        break;
      case 'heavy-metals':
        baseAmount = 65000;
        break;
      case 'multiple':
        baseAmount = 100000;
        break;
      default:
        baseAmount = 60000;
    }

    // Health effects multiplier
    switch (calculatorData.healthEffects) {
      case 'cancer':
        multiplier = 3.5;
        break;
      case 'neurological':
        multiplier = 2.8;
        break;
      case 'reproductive':
        multiplier = 2.2;
        break;
      case 'respiratory':
        multiplier = 2.0;
        break;
      case 'multiple-conditions':
        multiplier = 4.0;
        break;
      default:
        multiplier = 1.5;
    }

    // Property damage adjustment
    if (calculatorData.propertyDamage === 'significant') {
      multiplier += 0.5;
    } else if (calculatorData.propertyDamage === 'severe') {
      multiplier += 1.0;
    }

    // Duration adjustment
    if (calculatorData.duration === 'long-term') {
      multiplier += 0.3;
    } else if (calculatorData.duration === 'decades') {
      multiplier += 0.6;
    }

    const estimatedLow = Math.round(baseAmount * multiplier * 0.8);
    const estimatedHigh = Math.round(baseAmount * multiplier * 1.5);

    setEstimatedRange(`$${estimatedLow.toLocaleString()} - $${estimatedHigh.toLocaleString()}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Environmental Toxic Exposure Compensation Calculator | California"
        description="Calculate potential compensation for environmental toxic exposure cases in California. Free calculator for PFAS, TCE, chemical contamination claims."
        canonical="/environmental-toxic-compensation-calculator"
      />
      
      <Navigation />
      <GoBack />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <Calculator className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Environmental Toxic Exposure Compensation Calculator
            </h1>
            <p className="text-xl mb-6">
              Estimate potential compensation for your toxic exposure case in California
            </p>
          </div>
        </div>
      </section>

      {/* Main Calculator */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <Card className="calculator-card shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
                <DollarSign className="w-8 h-8 mr-3 text-green-600" />
                Compensation Calculator
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Type of Toxic Exposure *</label>
                    <Select value={calculatorData.exposureType} onValueChange={(value) => setCalculatorData({...calculatorData, exposureType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select exposure type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pfas">PFAS "Forever Chemicals"</SelectItem>
                        <SelectItem value="tce-pce">TCE/PCE Solvents</SelectItem>
                        <SelectItem value="chromium">Hexavalent Chromium</SelectItem>
                        <SelectItem value="benzene">Benzene</SelectItem>
                        <SelectItem value="heavy-metals">Heavy Metals (Lead, Mercury)</SelectItem>
                        <SelectItem value="pesticides">Pesticides/Herbicides</SelectItem>
                        <SelectItem value="asbestos">Asbestos</SelectItem>
                        <SelectItem value="multiple">Multiple Chemical Exposure</SelectItem>
                        <SelectItem value="other">Other Industrial Chemicals</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Health Effects *</label>
                    <Select value={calculatorData.healthEffects} onValueChange={(value) => setCalculatorData({...calculatorData, healthEffects: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select health effects" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cancer">Cancer Diagnosis</SelectItem>
                        <SelectItem value="neurological">Neurological Disorders</SelectItem>
                        <SelectItem value="reproductive">Reproductive/Birth Defects</SelectItem>
                        <SelectItem value="respiratory">Respiratory Problems</SelectItem>
                        <SelectItem value="organ-damage">Organ Damage</SelectItem>
                        <SelectItem value="multiple-conditions">Multiple Health Conditions</SelectItem>
                        <SelectItem value="monitoring">Medical Monitoring Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Property Damage</label>
                    <Select value={calculatorData.propertyDamage} onValueChange={(value) => setCalculatorData({...calculatorData, propertyDamage: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select property damage level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No Property Damage</SelectItem>
                        <SelectItem value="minor">Minor Property Impact</SelectItem>
                        <SelectItem value="significant">Significant Property Damage</SelectItem>
                        <SelectItem value="severe">Severe Property Loss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Exposure Duration</label>
                    <Select value={calculatorData.duration} onValueChange={(value) => setCalculatorData({...calculatorData, duration: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select exposure duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="short-term">Short-term (under 1 year)</SelectItem>
                        <SelectItem value="medium-term">Medium-term (1-5 years)</SelectItem>
                        <SelectItem value="long-term">Long-term (5-15 years)</SelectItem>
                        <SelectItem value="decades">Decades (15+ years)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                         <Button 
                           className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 text-lg hover:scale-105 transition-all duration-300" 
                           onClick={calculateCompensation}
                           disabled={!calculatorData.exposureType || !calculatorData.healthEffects}
                         >
                           Calculate My Potential Compensation
                         </Button>
                </div>

                <div className="space-y-6">
                  {estimatedRange && (
                    <Card className="bg-green-50 border-green-200">
                      <CardHeader>
                        <CardTitle className="text-green-800 flex items-center">
                          <DollarSign className="w-6 h-6 mr-2" />
                          Estimated Compensation Range
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-700 mb-2">
                            {estimatedRange}
                          </div>
                          <p className="text-green-600 text-sm">
                            This is a preliminary estimate based on similar California cases. 
                            Actual compensation depends on many factors specific to your situation.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-3">Compensation May Include:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-blue-700 text-sm">
                      <li>Past and future medical expenses</li>
                      <li>Lost wages and reduced earning capacity</li>
                      <li>Property damage and remediation costs</li>
                      <li>Medical monitoring programs</li>
                      <li>Pain and suffering</li>
                      <li>Emotional distress</li>
                      <li>Punitive damages</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-yellow-800 mb-3">Factors Affecting Value:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-yellow-700 text-sm">
                      <li>Severity of health effects</li>
                      <li>Duration and level of exposure</li>
                      <li>Age and life expectancy</li>
                      <li>Property contamination extent</li>
                      <li>Number of affected people</li>
                      <li>Corporate misconduct evidence</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Legal Disclaimer */}
          <Card className="mt-8 bg-red-50 border-red-200">
            <CardContent className="p-6">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-red-800 mb-2">Important Legal Disclaimer</h3>
                  <p className="text-red-700 text-sm leading-relaxed">
                    This calculator provides estimates based on general data from similar California environmental toxic exposure cases. 
                    Actual compensation varies significantly based on specific circumstances, evidence, and legal factors unique to each case. 
                    This tool does not constitute legal advice, and no attorney-client relationship is created by using this calculator. 
                    For accurate case evaluation, contact our experienced environmental attorneys for a free, confidential consultation. 
                    Past results do not guarantee future outcomes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center mt-8">
            <h2 className="text-2xl font-bold mb-4">Get a Precise Case Evaluation</h2>
            <p className="text-lg mb-6">
              For an accurate assessment of your environmental toxic exposure case, contact our experienced attorneys.
            </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-4"
                  onClick={() => window.location.href = '/environmental-toxic-case-evaluation'}
                >
                  Free Case Evaluation
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="font-bold text-lg px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => window.location.href = 'tel:8181234567'}
                >
                  Call (818) 123-4567
                </Button>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnvironmentalToxicCompensationCalculator;