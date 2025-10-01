import React, { useState, useEffect } from 'react';
import useScrollRestoration from '@/hooks/useScrollRestoration';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Calculator, AlertTriangle, DollarSign } from 'lucide-react';
import heroBackground from '@/assets/pfas-testing-equipment.jpg';

interface CompensationFactors {
  diagnosis: string;
  age: string;
  exposureDuration: string;
  medicalCosts: string;
  severity: string;
}

const PFASCalculator: React.FC = () => {
  const [factors, setFactors] = useState<CompensationFactors>({
    diagnosis: '',
    age: '',
    exposureDuration: '',
    medicalCosts: '',
    severity: ''
  });
  
  const [results, setResults] = useState<{
    range: string;
    factors: string[];
    confidence: string;
  } | null>(null);

  // Add scroll restoration
  useScrollRestoration();

  const calculateCompensation = () => {
    const factorsList: string[] = [];
    let baseAmount = 50000;
    let multiplier = 1;

    // Diagnosis impact
    switch (factors.diagnosis) {
      case 'kidney-cancer':
        baseAmount = 400000;
        multiplier = 2.5;
        factorsList.push('Kidney cancer significantly increases compensation potential');
        break;
      case 'thyroid-disease':
        baseAmount = 200000;
        multiplier = 1.8;
        factorsList.push('Thyroid disease from PFAS exposure');
        break;
      case 'liver-damage':
        baseAmount = 300000;
        multiplier = 2.0;
        factorsList.push('Liver damage requires ongoing treatment');
        break;
      case 'testicular-cancer':
        baseAmount = 450000;
        multiplier = 2.8;
        factorsList.push('Testicular cancer linked to PFAS exposure');
        break;
    }

    // Age impact
    const age = parseInt(factors.age);
    if (age < 40) {
      multiplier += 0.5;
      factorsList.push('Younger age increases lifetime impact compensation');
    } else if (age > 65) {
      multiplier += 0.2;
      factorsList.push('Older age affects compensation calculation');
    }

    // Exposure duration
    switch (factors.exposureDuration) {
      case '10+-years':
        multiplier += 0.8;
        factorsList.push('Extended exposure period strengthens case');
        break;
      case '6-10-years':
        multiplier += 0.5;
        factorsList.push('Significant exposure duration documented');
        break;
    }

    // Medical costs
    const costs = parseInt(factors.medicalCosts.replace(/,/g, ''));
    if (costs > 100000) {
      multiplier += 0.6;
      factorsList.push('Substantial medical expenses documented');
    }

    const finalAmount = baseAmount * multiplier;
    const lowEnd = Math.floor(finalAmount * 0.7);
    const highEnd = Math.floor(finalAmount * 1.4);

    setResults({
      range: `$${lowEnd.toLocaleString()} - $${highEnd.toLocaleString()}`,
      factors: factorsList,
      confidence: factors.diagnosis && factors.exposureDuration ? 'High' : 'Moderate'
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateCompensation();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">PFAS Compensation Calculator</h1>
          <p className="text-xl">Estimate your potential compensation for PFAS exposure claims</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Calculator Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calculator className="w-5 h-5 mr-2 text-primary" />
                PFAS Exposure Calculator
              </CardTitle>
              <p className="text-muted-foreground">
                Provide information about your exposure and health condition to estimate potential compensation.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div>
                  <label className="block text-sm font-medium mb-2">Health Condition/Diagnosis *</label>
                  <Select 
                    value={factors.diagnosis} 
                    onValueChange={(value) => setFactors(prev => ({ ...prev, diagnosis: value }))}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your condition..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kidney-cancer">Kidney Cancer</SelectItem>
                      <SelectItem value="testicular-cancer">Testicular Cancer</SelectItem>
                      <SelectItem value="thyroid-disease">Thyroid Disease</SelectItem>
                      <SelectItem value="liver-damage">Liver Damage</SelectItem>
                      <SelectItem value="ulcerative-colitis">Ulcerative Colitis</SelectItem>
                      <SelectItem value="high-cholesterol">High Cholesterol</SelectItem>
                      <SelectItem value="other">Other PFAS-Related Condition</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Current Age *</label>
                  <Input
                    type="number"
                    placeholder="Enter your age"
                    value={factors.age}
                    onChange={(e) => setFactors(prev => ({ ...prev, age: e.target.value }))}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Duration of PFAS Exposure</label>
                  <Select 
                    value={factors.exposureDuration} 
                    onValueChange={(value) => setFactors(prev => ({ ...prev, exposureDuration: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select exposure duration..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-2-years">1-2 years</SelectItem>
                      <SelectItem value="3-5-years">3-5 years</SelectItem>
                      <SelectItem value="6-10-years">6-10 years</SelectItem>
                      <SelectItem value="10+-years">10+ years</SelectItem>
                      <SelectItem value="unknown">Unknown</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Medical Expenses to Date</label>
                  <Input
                    placeholder="e.g., 50000"
                    value={factors.medicalCosts}
                    onChange={(e) => setFactors(prev => ({ ...prev, medicalCosts: e.target.value }))}
                  />
                  <p className="text-xs text-muted-foreground mt-1">Enter amount without commas or dollar signs</p>
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Calculate My Compensation
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Results Card */}
          <div className="space-y-6">
            {results && (
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <DollarSign className="w-5 h-5 mr-2" />
                    Estimated Compensation Range
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{results.range}</div>
                    <Badge variant="secondary">
                      Confidence: {results.confidence}
                    </Badge>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Factors Affecting Your Case:</h4>
                    <ul className="space-y-1">
                      {results.factors.map((factor, index) => (
                        <li key={index} className="text-sm flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {factor}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Information Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-amber-600" />
                  Important Legal Disclaimer
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <p>
                  <strong>This calculator provides estimates only.</strong> Actual compensation depends on many factors including:
                </p>
                
                <ul className="space-y-1 ml-4">
                  <li>• Strength of evidence linking PFAS to your condition</li>
                  <li>• Documentation of exposure sources and duration</li>
                  <li>• Medical records and expert testimony</li>
                  <li>• Defendant's ability to pay</li>
                  <li>• Settlement negotiations vs. trial outcome</li>
                </ul>
                
                <p>
                  <strong>Past results do not guarantee future outcomes.</strong> Each case is unique and requires individual legal analysis.
                </p>
                
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <p className="font-medium text-amber-800">
                    For a personalized case evaluation, contact Trembach Law Firm for a free consultation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PFASCalculator;