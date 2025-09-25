import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';
import scaffoldingCalculatorImage from '@/assets/scaffolding-calculator-hero.jpg';

interface CalculatorData {
  age: number;
  injurySeverity: string;
  heightOfFall: string;
  medicalExpenses: number;
  lostWages: number;
  futureEarnings: number;
  painAndSuffering: string;
  employmentStatus: string;
  safetyViolations: string;
}

const ScaffoldingFallsCompensationCalculator: React.FC = () => {
  const [calculatorData, setCalculatorData] = useState<CalculatorData>({
    age: 35,
    injurySeverity: '',
    heightOfFall: '',
    medicalExpenses: 0,
    lostWages: 0,
    futureEarnings: 0,
    painAndSuffering: '',
    employmentStatus: '',
    safetyViolations: ''
  });

  const [estimatedCompensation, setEstimatedCompensation] = useState({
    low: 0,
    high: 0,
    average: 0
  });

  const calculateCompensation = () => {
    // Base compensation calculation
    let baseCompensation = calculatorData.medicalExpenses + calculatorData.lostWages + calculatorData.futureEarnings;
    
    // If no medical expenses entered, use minimum base
    if (baseCompensation === 0) {
      baseCompensation = 25000;
    }

    // Injury severity multiplier
    let severityMultiplier = 1.5;
    switch (calculatorData.injurySeverity) {
      case 'minor':
        severityMultiplier = 1.2;
        break;
      case 'moderate':
        severityMultiplier = 2.0;
        break;
      case 'severe':
        severityMultiplier = 3.5;
        break;
      case 'catastrophic':
        severityMultiplier = 5.0;
        break;
    }

    // Height of fall multiplier
    let heightMultiplier = 1.0;
    switch (calculatorData.heightOfFall) {
      case '0-6ft':
        heightMultiplier = 1.0;
        break;
      case '6-12ft':
        heightMultiplier = 1.3;
        break;
      case '12-20ft':
        heightMultiplier = 1.6;
        break;
      case '20-30ft':
        heightMultiplier = 2.0;
        break;
      case '30ft+':
        heightMultiplier = 2.5;
        break;
    }

    // Pain and suffering multiplier
    let painMultiplier = 1.0;
    switch (calculatorData.painAndSuffering) {
      case 'minimal':
        painMultiplier = 1.2;
        break;
      case 'moderate':
        painMultiplier = 1.8;
        break;
      case 'severe':
        painMultiplier = 2.5;
        break;
      case 'extreme':
        painMultiplier = 3.5;
        break;
    }

    // Safety violations multiplier
    let violationsMultiplier = 1.0;
    switch (calculatorData.safetyViolations) {
      case 'minor':
        violationsMultiplier = 1.2;
        break;
      case 'major':
        violationsMultiplier = 1.8;
        break;
      case 'willful':
        violationsMultiplier = 2.5;
        break;
    }

    // Age factor (younger victims typically receive higher compensation)
    let ageFactor = 1.0;
    if (calculatorData.age < 30) {
      ageFactor = 1.3;
    } else if (calculatorData.age < 45) {
      ageFactor = 1.1;
    } else if (calculatorData.age > 60) {
      ageFactor = 0.8;
    }

    // Calculate ranges
    const totalMultiplier = severityMultiplier * heightMultiplier * painMultiplier * violationsMultiplier * ageFactor;
    
    const low = Math.round(baseCompensation * totalMultiplier * 0.7);
    const high = Math.round(baseCompensation * totalMultiplier * 1.5);
    const average = Math.round((low + high) / 2);

    setEstimatedCompensation({ low, high, average });
  };

  const handleInputChange = (field: string, value: any) => {
    setCalculatorData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  useEffect(() => {
    calculateCompensation();
  }, [calculatorData]);

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
        title="Scaffolding Falls Compensation Calculator - California"
        description="Calculate potential compensation for your scaffolding falls accident. Free estimation tool for construction accident injury claims in California."
        canonical="https://www.trembachlawfirm.com/practice-areas/scaffolding-falls/compensation-calculator"
        keywords="scaffolding falls compensation calculator, construction accident settlement, scaffolding injury compensation, California construction accident lawyer"
      />

      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: `url(${scaffoldingCalculatorImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Scaffolding Falls Compensation Calculator
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-6">
            Estimate Your Potential Settlement Amount
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Get an immediate estimate of potential compensation for your scaffolding falls accident. 
            This tool considers injury severity, medical costs, and other factors affecting your case value.
          </p>
        </div>
      </section>

      <GoBack className="container mx-auto px-8 pt-8" />

      <div className="container mx-auto px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Calculator Form */}
            <div>
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-8">Calculate Your Compensation</h2>
                
                <div className="space-y-6">
                  {/* Age */}
                  <div>
                    <Label className="text-lg font-semibold">Your Age: {calculatorData.age}</Label>
                    <Slider
                      value={[calculatorData.age]}
                      onValueChange={(value) => handleInputChange('age', value[0])}
                      max={80}
                      min={18}
                      step={1}
                      className="mt-2"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground mt-1">
                      <span>18</span>
                      <span>80</span>
                    </div>
                  </div>

                  {/* Injury Severity */}
                  <div>
                    <Label className="text-lg font-semibold">Injury Severity</Label>
                    <Select onValueChange={(value) => handleInputChange('injurySeverity', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select injury severity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="minor">Minor (sprains, bruises)</SelectItem>
                        <SelectItem value="moderate">Moderate (fractures, concussion)</SelectItem>
                        <SelectItem value="severe">Severe (multiple fractures, head injury)</SelectItem>
                        <SelectItem value="catastrophic">Catastrophic (spinal cord, brain injury)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Height of Fall */}
                  <div>
                    <Label className="text-lg font-semibold">Height of Fall</Label>
                    <Select onValueChange={(value) => handleInputChange('heightOfFall', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select height of fall" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-6ft">0-6 feet</SelectItem>
                        <SelectItem value="6-12ft">6-12 feet</SelectItem>
                        <SelectItem value="12-20ft">12-20 feet</SelectItem>
                        <SelectItem value="20-30ft">20-30 feet</SelectItem>
                        <SelectItem value="30ft+">Over 30 feet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Medical Expenses */}
                  <div>
                    <Label htmlFor="medicalExpenses" className="text-lg font-semibold">
                      Medical Expenses (to date)
                    </Label>
                    <Input
                      id="medicalExpenses"
                      type="number"
                      value={calculatorData.medicalExpenses || ''}
                      onChange={(e) => handleInputChange('medicalExpenses', Number(e.target.value))}
                      placeholder="Enter amount in USD"
                      className="mt-2"
                    />
                  </div>

                  {/* Lost Wages */}
                  <div>
                    <Label htmlFor="lostWages" className="text-lg font-semibold">
                      Lost Wages (to date)
                    </Label>
                    <Input
                      id="lostWages"
                      type="number"
                      value={calculatorData.lostWages || ''}
                      onChange={(e) => handleInputChange('lostWages', Number(e.target.value))}
                      placeholder="Enter amount in USD"
                      className="mt-2"
                    />
                  </div>

                  {/* Future Earnings Impact */}
                  <div>
                    <Label htmlFor="futureEarnings" className="text-lg font-semibold">
                      Estimated Future Earnings Impact
                    </Label>
                    <Input
                      id="futureEarnings"
                      type="number"
                      value={calculatorData.futureEarnings || ''}
                      onChange={(e) => handleInputChange('futureEarnings', Number(e.target.value))}
                      placeholder="Enter amount in USD"
                      className="mt-2"
                    />
                  </div>

                  {/* Pain and Suffering */}
                  <div>
                    <Label className="text-lg font-semibold">Pain and Suffering Level</Label>
                    <Select onValueChange={(value) => handleInputChange('painAndSuffering', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select pain level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="minimal">Minimal</SelectItem>
                        <SelectItem value="moderate">Moderate</SelectItem>
                        <SelectItem value="severe">Severe</SelectItem>
                        <SelectItem value="extreme">Extreme</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Safety Violations */}
                  <div>
                    <Label className="text-lg font-semibold">Safety Violations Present</Label>
                    <Select onValueChange={(value) => handleInputChange('safetyViolations', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select violation level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No Violations</SelectItem>
                        <SelectItem value="minor">Minor Violations</SelectItem>
                        <SelectItem value="major">Major Violations</SelectItem>
                        <SelectItem value="willful">Willful Violations</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Results */}
                {estimatedCompensation.average > 0 && (
                  <div className="mt-8 p-6 bg-primary/5 rounded-lg border">
                    <h3 className="text-2xl font-bold mb-4 text-primary">Estimated Compensation Range</h3>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-sm text-muted-foreground">Low Estimate</p>
                        <p className="text-xl font-bold text-green-600">{formatCurrency(estimatedCompensation.low)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Average</p>
                        <p className="text-2xl font-bold text-primary">{formatCurrency(estimatedCompensation.average)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">High Estimate</p>
                        <p className="text-xl font-bold text-green-600">{formatCurrency(estimatedCompensation.high)}</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <Button size="lg" className="text-lg px-8 py-4">
                        Get Free Case Review
                      </Button>
                    </div>
                  </div>
                )}
              </Card>
            </div>

            {/* Information Cards */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Important Disclaimer</h3>
                <p className="text-muted-foreground leading-relaxed">
                  This calculator provides estimates only and should not be considered a guarantee of compensation. 
                  Actual settlement amounts depend on many factors including case specifics, evidence quality, 
                  insurance coverage, and negotiation outcomes. Each case is unique and requires individual evaluation 
                  by qualified legal professionals.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Factors Affecting Compensation</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Injury severity:</strong> More severe injuries typically result in higher compensation</li>
                  <li>• <strong>Fall height:</strong> Greater heights often correlate with more serious injuries</li>
                  <li>• <strong>Medical costs:</strong> All current and future medical expenses are considered</li>
                  <li>• <strong>Lost income:</strong> Both past and future earnings capacity impacts</li>
                  <li>• <strong>Safety violations:</strong> Employer negligence can increase compensation</li>
                  <li>• <strong>Age factor:</strong> Younger victims may receive higher future earnings calculations</li>
                  <li>• <strong>Pain and suffering:</strong> Non-economic damages for physical and emotional distress</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Why Choose Professional Legal Help?</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Experienced in construction accident law</li>
                  <li>• Knowledge of OSHA regulations and safety standards</li>
                  <li>• Ability to investigate and gather evidence</li>
                  <li>• Negotiation skills with insurance companies</li>
                  <li>• No fees unless we win your case</li>
                  <li>• Maximize your compensation potential</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Next Steps</h3>
                <ol className="space-y-2 text-muted-foreground">
                  <li>1. <strong>Document everything:</strong> Keep all medical records and accident reports</li>
                  <li>2. <strong>Preserve evidence:</strong> Photos, witness statements, safety violations</li>
                  <li>3. <strong>Get medical attention:</strong> Even if injuries seem minor initially</li>
                  <li>4. <strong>Contact an attorney:</strong> Free consultation to evaluate your case</li>
                  <li>5. <strong>Act quickly:</strong> California has time limits for filing claims</li>
                </ol>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Disclaimer */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Legal Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed">
              The information provided by this compensation calculator is for educational purposes only and does not constitute legal advice. 
              Every scaffolding falls case is unique, and compensation amounts can vary significantly based on specific circumstances, 
              evidence, jurisdiction, and other factors. This calculator's estimates are based on general statistical data and should not 
              be relied upon as a prediction of your case outcome. For accurate case evaluation, please consult with a qualified attorney 
              who can review the specific details of your situation. Trembach Law Firm provides free consultations and operates on a 
              contingency fee basis - no fees unless we win your case.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScaffoldingFallsCompensationCalculator;