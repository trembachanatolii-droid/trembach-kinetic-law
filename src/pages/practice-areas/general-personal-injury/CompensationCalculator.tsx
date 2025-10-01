import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Calculator, DollarSign, TrendingUp, AlertCircle, Phone, Mail } from 'lucide-react';

import useScrollRestoration from '@/hooks/useScrollRestoration';
import compensationImage from '@/assets/personal-injury-compensation-calculator.jpg';

interface CalculatorInputs {
  injuryType: string;
  medicalExpenses: string;
  lostWages: string;
  futureMedical: string;
  painSuffering: number[];
  ageRange: string;
  treatmentDuration: string;
  disability: string;
  faultPercentage: number[];
}

const CompensationCalculator: React.FC = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    injuryType: '',
    medicalExpenses: '',
    lostWages: '',
    futureMedical: '',
    painSuffering: [5],
    ageRange: '',
    treatmentDuration: '',
    disability: '',
    faultPercentage: [0]
  });

  const [results, setResults] = useState({
    economicDamages: 0,
    nonEconomicDamages: 0,
    totalCompensation: 0,
    adjustedCompensation: 0
  });

  useScrollRestoration();

  const calculateCompensation = () => {
    const medicalExp = parseFloat(inputs.medicalExpenses) || 0;
    const lostWages = parseFloat(inputs.lostWages) || 0;
    const futureMed = parseFloat(inputs.futureMedical) || 0;
    
    // Economic damages are straightforward
    const economicDamages = medicalExp + lostWages + futureMed;
    
    // Non-economic damages calculation based on various factors
    let nonEconomicMultiplier = inputs.painSuffering[0];
    
    // Adjust multiplier based on injury type
    const injuryMultipliers = {
      'brain-injury': 5.0,
      'spinal-cord': 4.5,
      'amputation': 4.0,
      'severe-burns': 3.5,
      'multiple-fractures': 3.0,
      'single-fracture': 2.0,
      'soft-tissue': 1.5,
      'minor-injuries': 1.0
    };
    
    const injuryMultiplier = injuryMultipliers[inputs.injuryType as keyof typeof injuryMultipliers] || 2.0;
    
    // Age factor (younger victims typically get higher awards)
    const ageMultipliers = {
      'under-25': 1.3,
      '25-40': 1.2,
      '41-55': 1.1,
      '56-65': 1.0,
      'over-65': 0.9
    };
    
    const ageMultiplier = ageMultipliers[inputs.ageRange as keyof typeof ageMultipliers] || 1.0;
    
    // Treatment duration factor
    const durationMultipliers = {
      'days': 0.8,
      'weeks': 1.0,
      'months': 1.3,
      'years': 1.6,
      'permanent': 2.0
    };
    
    const durationMultiplier = durationMultipliers[inputs.treatmentDuration as keyof typeof durationMultipliers] || 1.0;
    
    // Disability factor
    const disabilityMultipliers = {
      'none': 1.0,
      'temporary': 1.4,
      'partial': 1.8,
      'total': 2.5
    };
    
    const disabilityMultiplier = disabilityMultipliers[inputs.disability as keyof typeof disabilityMultipliers] || 1.0;
    
    // Calculate base non-economic damages
    const baseNonEconomic = medicalExp * nonEconomicMultiplier * injuryMultiplier * ageMultiplier * durationMultiplier * disabilityMultiplier;
    
    // Add pain and suffering for lost wages and future impacts
    const additionalNonEconomic = (lostWages + futureMed) * (nonEconomicMultiplier * 0.5);
    
    const nonEconomicDamages = baseNonEconomic + additionalNonEconomic;
    
    const totalCompensation = economicDamages + nonEconomicDamages;
    
    // Apply comparative fault reduction
    const faultReduction = inputs.faultPercentage[0] / 100;
    const adjustedCompensation = totalCompensation * (1 - faultReduction);
    
    setResults({
      economicDamages,
      nonEconomicDamages,
      totalCompensation,
      adjustedCompensation
    });
  };

  useEffect(() => {
    calculateCompensation();
  }, [inputs]);

  const handleInputChange = (field: keyof CalculatorInputs, value: any) => {
    setInputs(prev => ({ ...prev, [field]: value }));
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
      
      
      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${compensationImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Personal Injury Compensation Calculator
          </h1>
          <p className="text-xl mb-6 text-white">
            Get an estimate of your potential personal injury settlement in California
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Badge className="bg-blue-600 text-white">
              <Calculator className="w-4 h-4 mr-1" />
              Free Estimate
            </Badge>
            <Badge className="bg-green-600 text-white">
              <TrendingUp className="w-4 h-4 mr-1" />
              California Law Based
            </Badge>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Calculator Inputs */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="w-5 h-5 mr-2" />
                  Injury Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Type of Injury</label>
                  <Select value={inputs.injuryType} onValueChange={(value) => handleInputChange('injuryType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select injury type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="brain-injury">Traumatic Brain Injury</SelectItem>
                      <SelectItem value="spinal-cord">Spinal Cord Injury</SelectItem>
                      <SelectItem value="amputation">Amputation</SelectItem>
                      <SelectItem value="severe-burns">Severe Burns</SelectItem>
                      <SelectItem value="multiple-fractures">Multiple Fractures</SelectItem>
                      <SelectItem value="single-fracture">Single Fracture</SelectItem>
                      <SelectItem value="soft-tissue">Soft Tissue Injury</SelectItem>
                      <SelectItem value="minor-injuries">Minor Injuries</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Age Range</label>
                  <Select value={inputs.ageRange} onValueChange={(value) => handleInputChange('ageRange', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select age range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-25">Under 25</SelectItem>
                      <SelectItem value="25-40">25-40</SelectItem>
                      <SelectItem value="41-55">41-55</SelectItem>
                      <SelectItem value="56-65">56-65</SelectItem>
                      <SelectItem value="over-65">Over 65</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Treatment Duration</label>
                  <Select value={inputs.treatmentDuration} onValueChange={(value) => handleInputChange('treatmentDuration', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select treatment duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="days">Days</SelectItem>
                      <SelectItem value="weeks">Weeks</SelectItem>
                      <SelectItem value="months">Months</SelectItem>
                      <SelectItem value="years">Years</SelectItem>
                      <SelectItem value="permanent">Permanent/Ongoing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Disability Level</label>
                  <Select value={inputs.disability} onValueChange={(value) => handleInputChange('disability', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select disability level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No Disability</SelectItem>
                      <SelectItem value="temporary">Temporary Disability</SelectItem>
                      <SelectItem value="partial">Partial Permanent Disability</SelectItem>
                      <SelectItem value="total">Total Permanent Disability</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Financial Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Medical Expenses (to date)</label>
                  <Input
                    type="number"
                    value={inputs.medicalExpenses}
                    onChange={(e) => handleInputChange('medicalExpenses', e.target.value)}
                    placeholder="Enter total medical expenses"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Lost Wages (to date)</label>
                  <Input
                    type="number"
                    value={inputs.lostWages}
                    onChange={(e) => handleInputChange('lostWages', e.target.value)}
                    placeholder="Enter lost wages"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Future Medical Costs (estimated)</label>
                  <Input
                    type="number"
                    value={inputs.futureMedical}
                    onChange={(e) => handleInputChange('futureMedical', e.target.value)}
                    placeholder="Enter estimated future medical costs"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Pain & Suffering Severity: {inputs.painSuffering[0]}x
                  </label>
                  <Slider
                    value={inputs.painSuffering}
                    onValueChange={(value) => handleInputChange('painSuffering', value)}
                    max={10}
                    min={1}
                    step={0.5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>Minimal (1x)</span>
                    <span>Severe (10x)</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Fault Percentage: {inputs.faultPercentage[0]}%
                  </label>
                  <Slider
                    value={inputs.faultPercentage}
                    onValueChange={(value) => handleInputChange('faultPercentage', value)}
                    max={100}
                    min={0}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>0% (Not at fault)</span>
                    <span>100% (Completely at fault)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">Compensation Estimate</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-sm text-muted-foreground">Economic Damages</h4>
                    <p className="text-2xl font-bold text-green-600">{formatCurrency(results.economicDamages)}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-sm text-muted-foreground">Non-Economic Damages</h4>
                    <p className="text-2xl font-bold text-blue-600">{formatCurrency(results.nonEconomicDamages)}</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border-2 border-primary">
                  <h4 className="font-semibold text-sm text-muted-foreground">Total Before Fault Adjustment</h4>
                  <p className="text-3xl font-bold text-primary">{formatCurrency(results.totalCompensation)}</p>
                </div>

                {inputs.faultPercentage[0] > 0 && (
                  <div className="bg-white p-4 rounded-lg border-2 border-red-500">
                    <h4 className="font-semibold text-sm text-muted-foreground">
                      Adjusted for {inputs.faultPercentage[0]}% Fault
                    </h4>
                    <p className="text-3xl font-bold text-red-600">{formatCurrency(results.adjustedCompensation)}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="bg-yellow-50 border-yellow-200">
              <CardHeader>
                <CardTitle className="flex items-center text-yellow-800">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Important Disclaimers
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <p>• This calculator provides estimates only and should not be considered legal advice</p>
                <p>• Actual settlements depend on numerous factors including evidence quality, jurisdiction, and negotiation skills</p>
                <p>• California uses pure comparative negligence - you can recover even if partially at fault</p>
                <p>• Economic damages include medical bills, lost wages, and property damage</p>
                <p>• Non-economic damages include pain, suffering, and loss of enjoyment of life</p>
                <p>• Punitive damages may apply in cases involving malicious or reckless conduct</p>
                <p>• Settlement ranges can vary significantly based on individual circumstances</p>
                <p>• Insurance policy limits may cap available compensation</p>
                <p>• Attorney experience and reputation significantly impact results</p>
                <p>• Consultation with an experienced attorney is essential for accurate case evaluation</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Factors That Increase Compensation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Clear evidence of defendant negligence</li>
                  <li>• Severe or permanent injuries</li>
                  <li>• High medical expenses and treatment costs</li>
                  <li>• Significant lost wages or earning capacity</li>
                  <li>• Young age of victim</li>
                  <li>• Strong supporting medical evidence</li>
                  <li>• Credible witness testimony</li>
                  <li>• Professional or expert witness support</li>
                  <li>• Defendant's ability to pay (insurance coverage)</li>
                  <li>• Sympathetic jury appeal</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Get a Professional Evaluation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">
                  While this calculator provides helpful estimates, every case is unique. 
                  For an accurate assessment of your personal injury claim's value, 
                  consult with our experienced California personal injury attorneys.
                </p>
                <div className="flex flex-col gap-2">
                  <Button 
                    onClick={() => window.location.href = '/practice-areas/general-personal-injury/case-evaluation'}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    Get Free Case Evaluation
                  </Button>
                  <Button 
                    onClick={() => window.location.href = 'tel:8181234567'}
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call (818) 123-4567
                  </Button>
                  <Button 
                    onClick={() => window.location.href = 'mailto:info@trembachlawfirm.com'}
                    variant="outline"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-12 p-6 bg-gray-100 rounded-lg text-center">
          <h3 className="text-lg font-bold mb-2">Legal Disclaimer</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This compensation calculator is for informational purposes only and does not constitute legal advice. 
            The estimates provided are based on general factors and statistical averages for California personal injury cases. 
            Actual case values depend on numerous specific factors including the strength of evidence, quality of legal representation, 
            jurisdiction, jury composition, and individual case circumstances. No guarantee is made regarding the accuracy of these estimates 
            or the outcome of any particular case. Trembach Law Firm is a newly established practice with no prior case results to report. 
            Past results do not guarantee future outcomes. For accurate case evaluation, please consult with a qualified personal injury attorney.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompensationCalculator;