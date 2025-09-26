import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

import SEO from '@/components/SEO';
import craneCalculatorImage from '@/assets/crane-calculator-hero.jpg';

interface CalculatorData {
  age: number;
  injurySeverity: string;
  craneType: string;
  medicalExpenses: number;
  lostWages: number;
  futureEarnings: number;
  painAndSuffering: string;
  employmentStatus: string;
  safetyViolations: string;
}

const CraneAccidentsCompensationCalculator: React.FC = () => {
  const navigate = useNavigate();
  const [calculatorData, setCalculatorData] = useState<CalculatorData>({
    age: 35,
    injurySeverity: '',
    craneType: '',
    medicalExpenses: 0,
    lostWages: 0,
    futureEarnings: 0,
    painAndSuffering: '',
    employmentStatus: '',
    safetyViolations: ''
  });
  const [estimatedCompensation, setEstimatedCompensation] = useState<string>('');
  const [showResults, setShowResults] = useState(false);

  const calculateCompensation = () => {
    let baseAmount = calculatorData.medicalExpenses + calculatorData.lostWages;
    
    // Adjust for injury severity
    const severityMultiplier = {
      'minor': 1.2,
      'moderate': 2.0,
      'severe': 4.0,
      'catastrophic': 6.0,
      'wrongful-death': 8.0
    }[calculatorData.injurySeverity] || 1.0;
    
    // Adjust for age (younger victims typically receive higher awards)
    const ageMultiplier = calculatorData.age < 35 ? 1.3 : calculatorData.age < 50 ? 1.1 : 0.9;
    
    // Adjust for safety violations
    const violationMultiplier = calculatorData.safetyViolations === 'yes' ? 1.5 : 1.0;
    
    const totalEstimate = baseAmount * severityMultiplier * ageMultiplier * violationMultiplier;
    
    const minEstimate = Math.max(totalEstimate * 0.6, 50000);
    const maxEstimate = totalEstimate * 1.8;
    
    setEstimatedCompensation(`$${minEstimate.toLocaleString()} - $${maxEstimate.toLocaleString()}`);
    setShowResults(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateCompensation();
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Crane Accident Compensation Calculator | Estimate Your Settlement | Trembach Law Firm"
        description="Calculate potential compensation for your crane accident case. Free settlement estimation tool for California construction accidents."
        keywords="crane accident compensation calculator, settlement estimator, crane accident damages"
        canonical="/practice-areas/crane-accidents/compensation-calculator"
      />

      

      {/* Hero Section */}
      <section 
        className="relative h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${craneCalculatorImage})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Crane Accident Compensation Calculator
          </h1>
          <p className="text-xl md:text-2xl text-white mb-6">
            Estimate Your Potential Settlement Amount
          </p>
          <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed">
            Get an immediate estimate of potential compensation for your crane accident. 
            This tool considers injury severity, medical costs, and other factors affecting your case value.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Case Information</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label className="text-foreground">Your Age: {calculatorData.age}</Label>
                <Slider
                  value={[calculatorData.age]}
                  onValueChange={(value) => setCalculatorData(prev => ({ ...prev, age: value[0] }))}
                  max={80}
                  min={18}
                  step={1}
                  className="mt-2"
                />
              </div>

              <div>
                <Label className="text-foreground">Injury Severity</Label>
                <Select value={calculatorData.injurySeverity} onValueChange={(value) => setCalculatorData(prev => ({ ...prev, injurySeverity: value }))}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select injury severity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="minor">Minor Injuries</SelectItem>
                    <SelectItem value="moderate">Moderate Injuries</SelectItem>
                    <SelectItem value="severe">Severe Injuries</SelectItem>
                    <SelectItem value="catastrophic">Catastrophic Injuries</SelectItem>
                    <SelectItem value="wrongful-death">Wrongful Death</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-foreground">Type of Crane Involved</Label>
                <Select value={calculatorData.craneType} onValueChange={(value) => setCalculatorData(prev => ({ ...prev, craneType: value }))}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select crane type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mobile">Mobile Crane</SelectItem>
                    <SelectItem value="tower">Tower Crane</SelectItem>
                    <SelectItem value="overhead">Overhead Crane</SelectItem>
                    <SelectItem value="crawler">Crawler Crane</SelectItem>
                    <SelectItem value="truck-mounted">Truck-Mounted Crane</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-foreground">Medical Expenses to Date</Label>
                <Input
                  type="number"
                  value={calculatorData.medicalExpenses}
                  onChange={(e) => setCalculatorData(prev => ({ ...prev, medicalExpenses: Number(e.target.value) }))}
                  placeholder="Enter amount"
                  className="mt-2"
                />
              </div>

              <div>
                <Label className="text-foreground">Lost Wages to Date</Label>
                <Input
                  type="number"
                  value={calculatorData.lostWages}
                  onChange={(e) => setCalculatorData(prev => ({ ...prev, lostWages: Number(e.target.value) }))}
                  placeholder="Enter amount"
                  className="mt-2"
                />
              </div>

              <div>
                <Label className="text-foreground">Employment Status</Label>
                <Select value={calculatorData.employmentStatus} onValueChange={(value) => setCalculatorData(prev => ({ ...prev, employmentStatus: value }))}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select employment status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-time">Full-time Employee</SelectItem>
                    <SelectItem value="part-time">Part-time Employee</SelectItem>
                    <SelectItem value="contractor">Independent Contractor</SelectItem>
                    <SelectItem value="unemployed">Unemployed</SelectItem>
                    <SelectItem value="retired">Retired</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-foreground">Were Safety Violations Present?</Label>
                <Select value={calculatorData.safetyViolations} onValueChange={(value) => setCalculatorData(prev => ({ ...prev, safetyViolations: value }))}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes, OSHA violations were present</SelectItem>
                    <SelectItem value="no">No violations identified</SelectItem>
                    <SelectItem value="unknown">Unknown/Under investigation</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-3">
                <span className="text-white">Calculate Compensation</span>
              </Button>
            </form>
          </Card>

          {/* Results Panel */}
          <div className="space-y-6">
            {showResults && (
              <Card className="p-8 bg-green-50 border-green-200">
                <h3 className="text-2xl font-bold mb-4 text-green-800">Estimated Compensation Range</h3>
                <div className="text-4xl font-bold text-green-600 mb-4">
                  {estimatedCompensation}
                </div>
                <p className="text-sm text-green-700 mb-6">
                  This is an estimate based on the information provided. Actual compensation may vary significantly based on specific case factors.
                </p>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800">Factors That May Increase Compensation:</h4>
                    <ul className="text-sm text-gray-600 mt-2 space-y-1">
                      <li>• Severe OSHA safety violations</li>
                      <li>• Multiple liable parties</li>
                      <li>• Clear evidence of negligence</li>
                      <li>• Significant future medical needs</li>
                      <li>• Loss of earning capacity</li>
                    </ul>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <Button 
                      size="lg" 
                      className="text-lg px-8 py-4"
                      onClick={() => navigate('/practice-areas/crane-accidents/case-evaluation')}
                    >
                      <span className="text-white">Get Free Case Review</span>
                    </Button>
                  </div>
                </div>
              </Card>
            )}

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 text-foreground">Important Disclaimer</h3>
              <div className="text-sm text-muted-foreground space-y-3">
                <p>
                  <strong>This calculator provides estimates only.</strong> Every crane accident case is unique, and actual compensation depends on many factors including:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Specific details of how the accident occurred</li>
                  <li>Available insurance coverage limits</li>
                  <li>Strength of evidence and liability proof</li>
                  <li>Jurisdiction where the case is filed</li>
                  <li>Quality of legal representation</li>
                </ul>
                <p>
                  <strong>No guarantee of results.</strong> Past results do not guarantee future outcomes. Each case must be evaluated individually by qualified legal counsel.
                </p>
                <p>
                  <strong>Immediate action required.</strong> California has strict time limits for filing claims. Evidence can be lost quickly in construction accidents. Contact us immediately for a free consultation.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-blue-50 border-blue-200">
              <h3 className="text-xl font-bold mb-4 text-blue-800">Why Choose Trembach Law Firm?</h3>
              <div className="space-y-3 text-sm text-blue-700">
                <p>✓ Former defense attorney advantage</p>
                <p>✓ No fees unless we win your case</p>
                <p>✓ 24/7 availability for crane accidents</p>
                <p>✓ Extensive construction accident experience</p>
                <p>✓ Maximum compensation focus</p>
              </div>
              <div className="mt-4 space-y-2">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => window.location.href = 'tel:8181234567'}
                >
                  <span className="text-white">Call (818) 123-4567</span>
                </Button>
                <Button 
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  onClick={() => window.location.href = 'mailto:info@trembachlawfirm.com'}
                >
                  Email Us
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraneAccidentsCompensationCalculator;