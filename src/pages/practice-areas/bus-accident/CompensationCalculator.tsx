import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { 
  Calculator, 
  DollarSign, 
  AlertTriangle, 
  TrendingUp,
  FileText,
  Stethoscope,
  Clock,
  Scale,
  User,
  Bus
} from 'lucide-react';
import SEO from '@/components/SEO';

import heroImage from '@/assets/bus-calculator-hero.jpg';

const BusAccidentCompensationCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    age: 35,
    income: 50000,
    medicalCosts: 10000,
    recoveryTime: 6,
    injuryType: '',
    busType: '',
    painLevel: 5,
    workDaysLost: 30
  });

  const [result, setResult] = useState<{
    estimated: number;
    range: { min: number; max: number };
    factors: string[];
  } | null>(null);

  const calculateCompensation = () => {
    let baseAmount = formData.medicalCosts * 2; // Medical costs multiplier
    
    // Lost wages calculation
    const dailyWage = formData.income / 365;
    const lostWages = dailyWage * formData.workDaysLost;
    
    // Pain and suffering multiplier
    const painMultiplier = formData.painLevel / 2;
    const painAndSuffering = formData.medicalCosts * painMultiplier;
    
    // Age factor (younger = higher future earning capacity)
    const ageFactor = formData.age < 30 ? 1.2 : formData.age > 60 ? 0.8 : 1.0;
    
    // Bus type factor (government = potentially higher)
    const busTypeFactor = formData.busType === 'government' ? 1.3 : 1.0;
    
    // Injury type factor
    const injuryFactor = {
      'traumatic-brain': 3.0,
      'spinal-cord': 2.8,
      'multiple-fractures': 2.0,
      'soft-tissue': 1.2,
      'cuts-bruises': 1.0
    }[formData.injuryType] || 1.5;
    
    const estimated = Math.round(
      (baseAmount + lostWages + painAndSuffering) * 
      ageFactor * busTypeFactor * injuryFactor
    );
    
    const factors = [];
    if (ageFactor > 1) factors.push("Younger age increases future earning capacity");
    if (busTypeFactor > 1) factors.push("Government bus increases potential compensation");
    if (injuryFactor > 2) factors.push("Severe injury type significantly impacts value");
    if (formData.painLevel > 7) factors.push("High pain level increases suffering damages");
    
    setResult({
      estimated,
      range: {
        min: Math.round(estimated * 0.6),
        max: Math.round(estimated * 1.8)
      },
      factors
    });
  };

  const handleInputChange = (field: string, value: number | string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setResult(null); // Reset result when inputs change
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Bus Accident Compensation Calculator | California Settlement Estimator | Trembach Law Firm"
        description="Calculate potential compensation for your California bus accident case. Free settlement estimator considers medical costs, lost wages, pain & suffering. Government vs private bus factors included."
        canonical="https://www.trembachlawfirm.com/bus-accident/compensation-calculator"
      />

      

      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Bus Accident Compensation Calculator
          </h1>
          <p className="text-xl md:text-2xl mb-6 leading-relaxed text-white">
            Estimate your potential California bus accident settlement
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Calculator Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader className="bg-blue-50 border-b">
                <CardTitle className="text-2xl text-blue-600 flex items-center">
                  <Calculator className="w-6 h-6 mr-3" />
                  Compensation Factors
                </CardTitle>
                <p className="text-muted-foreground">
                  Enter your case details to estimate potential compensation. This is for informational purposes only.
                </p>
              </CardHeader>
              
              <CardContent className="p-8 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 backdrop-blur-sm border border-blue-100/20 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="space-y-8 relative">
                  
                  {/* 3D Background Layers */}
                  <div className="absolute inset-0 -z-10 perspective-1200 transform-style-preserve-3d">
                    <div className="floating-layer-back absolute inset-0 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-lg transform translate-z-[-500px] animate-float-back"></div>
                    <div className="floating-layer-mid absolute inset-0 bg-gradient-to-br from-green-400/3 to-blue-400/3 rounded-lg transform translate-z-[-250px] animate-float-mid"></div>
                    <div className="floating-layer-front absolute inset-0 bg-gradient-to-br from-purple-400/2 to-pink-400/2 rounded-lg transform translate-z-[-100px] animate-float-front"></div>
                  </div>
                  
                  {/* Personal Information */}
                  <div className="border-l-4 border-l-blue-500 pl-6 glass-card hover-glow-primary transition-all duration-300 hover:scale-105 p-6 rounded-lg bg-white/40 backdrop-blur border border-blue-200/30">
                    <h3 className="text-lg font-semibold mb-4 text-blue-700 flex items-center">
                      <User className="w-5 h-5 mr-2" />
                      Personal Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Age</label>
                        <Slider
                          value={[formData.age]}
                          onValueChange={(value) => handleInputChange('age', value[0])}
                          max={80}
                          min={18}
                          step={1}
                          className="w-full"
                        />
                        <div className="text-center mt-2 text-sm text-muted-foreground">
                          {formData.age} years old
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Annual Income</label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            type="number"
                            value={formData.income}
                            onChange={(e) => handleInputChange('income', parseInt(e.target.value) || 0)}
                            className="pl-10"
                            placeholder="50000"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Accident Details */}
                  <div className="border-l-4 border-l-red-500 pl-6 glass-card hover-glow-destructive transition-all duration-300 hover:scale-105 p-6 rounded-lg bg-red-50/40 backdrop-blur border border-red-200/30">
                    <h3 className="text-lg font-semibold mb-4 text-red-700 flex items-center">
                      <Bus className="w-5 h-5 mr-2" />
                      Accident Details
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Type of Bus</label>
                        <Select onValueChange={(value) => handleInputChange('busType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select bus type..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="government">Government (MTA, School, City)</SelectItem>
                            <SelectItem value="private">Private (Charter, Tour)</SelectItem>
                            <SelectItem value="interstate">Interstate (Greyhound)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Primary Injury Type</label>
                        <Select onValueChange={(value) => handleInputChange('injuryType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select injury type..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="traumatic-brain">Traumatic Brain Injury</SelectItem>
                            <SelectItem value="spinal-cord">Spinal Cord Injury</SelectItem>
                            <SelectItem value="multiple-fractures">Multiple Fractures</SelectItem>
                            <SelectItem value="soft-tissue">Soft Tissue Injuries</SelectItem>
                            <SelectItem value="cuts-bruises">Cuts & Bruises</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Medical & Financial Impact */}
                  <div className="border-l-4 border-l-green-500 pl-6 glass-card hover-glow-success transition-all duration-300 hover:scale-105 p-6 rounded-lg bg-green-50/40 backdrop-blur border border-green-200/30">
                    <h3 className="text-lg font-semibold mb-4 text-green-700 flex items-center">
                      <Stethoscope className="w-5 h-5 mr-2" />
                      Medical & Financial Impact
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Medical Costs to Date</label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            type="number"
                            value={formData.medicalCosts}
                            onChange={(e) => handleInputChange('medicalCosts', parseInt(e.target.value) || 0)}
                            className="pl-10"
                            placeholder="10000"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Work Days Lost</label>
                        <Input
                          type="number"
                          value={formData.workDaysLost}
                          onChange={(e) => handleInputChange('workDaysLost', parseInt(e.target.value) || 0)}
                          placeholder="30"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Pain Level (1-10)</label>
                      <Slider
                        value={[formData.painLevel]}
                        onValueChange={(value) => handleInputChange('painLevel', value[0])}
                        max={10}
                        min={1}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-2">
                        <span>Minimal (1)</span>
                        <span className="font-medium">Current: {formData.painLevel}</span>
                        <span>Severe (10)</span>
                      </div>
                    </div>
                  </div>

                  <Button 
                    onClick={calculateCompensation}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 text-lg"
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    CALCULATE MY COMPENSATION
                  </Button>

                    {/* Results */}
                    {result && (
                      <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 rounded-lg glass-card hover-glow-success transition-all duration-500 hover:scale-105 relative overflow-hidden">
                        
                        {/* 3D Background Animation */}
                        <div className="absolute inset-0 -z-10 perspective-1200 transform-style-preserve-3d">
                          <div className="floating-layer-back absolute inset-0 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-lg transform translate-z-[-300px] animate-float-back"></div>
                          <div className="floating-layer-mid absolute inset-0 bg-gradient-to-br from-blue-400/8 to-green-400/8 rounded-lg transform translate-z-[-150px] animate-float-mid"></div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                          <TrendingUp className="w-6 h-6 mr-2" />
                          Estimated Compensation Range
                        </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="text-center p-4 bg-white rounded-lg">
                          <div className="text-sm text-muted-foreground mb-1">Minimum</div>
                          <div className="text-2xl font-bold text-green-600">
                            ${result.range.min.toLocaleString()}
                          </div>
                        </div>
                        <div className="text-center p-4 bg-white rounded-lg border-2 border-green-500">
                          <div className="text-sm text-muted-foreground mb-1">Estimated</div>
                          <div className="text-3xl font-bold text-green-700">
                            ${result.estimated.toLocaleString()}
                          </div>
                        </div>
                        <div className="text-center p-4 bg-white rounded-lg">
                          <div className="text-sm text-muted-foreground mb-1">Maximum</div>
                          <div className="text-2xl font-bold text-green-600">
                            ${result.range.max.toLocaleString()}
                          </div>
                        </div>
                      </div>

                      {result.factors.length > 0 && (
                        <div className="mb-4">
                          <h4 className="font-semibold mb-2">Factors Increasing Your Compensation:</h4>
                          <ul className="space-y-1">
                            {result.factors.map((factor, index) => (
                              <li key={index} className="flex items-start text-sm">
                                <TrendingUp className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                                {factor}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                        <div className="flex items-start">
                          <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" />
                          <div className="text-sm">
                            <p className="font-semibold text-yellow-800 mb-1">Important Disclaimer:</p>
                            <p className="text-yellow-700">
                              This calculator provides estimates only. Actual compensation depends on many factors including liability, 
                              insurance coverage, and case-specific circumstances. Consult with an attorney for accurate case evaluation.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle>Get Professional Evaluation</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-sm mb-4">
                  This calculator provides estimates only. Get a professional evaluation of your actual case value.
                </p>
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700 text-white mb-3"
                  onClick={() => window.location.href = '/bus-accident/case-evaluation'}
                >
                  Free Case Evaluation
                </Button>
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => window.location.href = 'tel:8559851234'}
                >
                  Call (855) 985-1234
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Scale className="w-5 h-5 mr-2 text-blue-600" />
                  What Affects Compensation?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <Stethoscope className="w-4 h-4 text-blue-600 mt-1 mr-2" />
                    <div>
                      <div className="font-medium">Medical Expenses</div>
                      <div className="text-muted-foreground">Past and future medical costs</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <DollarSign className="w-4 h-4 text-green-600 mt-1 mr-2" />
                    <div>
                      <div className="font-medium">Lost Income</div>
                      <div className="text-muted-foreground">Wages and earning capacity</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FileText className="w-4 h-4 text-purple-600 mt-1 mr-2" />
                    <div>
                      <div className="font-medium">Pain & Suffering</div>
                      <div className="text-muted-foreground">Physical and emotional distress</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-4 h-4 text-red-600 mt-1 mr-2" />
                    <div>
                      <div className="font-medium">Recovery Time</div>
                      <div className="text-muted-foreground">Duration of disability</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-l-4 border-l-yellow-500">
              <CardHeader>
                <CardTitle className="text-yellow-700">Legal Disclaimer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This calculator is for informational purposes only and does not constitute legal advice. 
                  Compensation varies significantly based on individual circumstances, liability factors, 
                  and available insurance coverage. Consult with a qualified attorney for professional 
                  evaluation of your specific case.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusAccidentCompensationCalculator;