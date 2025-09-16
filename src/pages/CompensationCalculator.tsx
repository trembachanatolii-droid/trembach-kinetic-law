import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Calculator, DollarSign, FileText, TrendingUp, ArrowRight } from 'lucide-react';

const CompensationCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    age: '',
    diagnosis: '',
    stage: '',
    workHistory: '',
    exposureType: '',
    dependents: '',
    income: [50000],
    medicalCosts: [100000]
  });

  const [estimated, setEstimated] = useState<{
    low: number;
    high: number;
    factors: string[];
  } | null>(null);

  const calculateEstimate = () => {
    // This is a simplified calculation for demonstration
    let baseLow = 200000;
    let baseHigh = 800000;

    // Age factor
    const age = parseInt(formData.age);
    if (age < 50) {
      baseLow *= 1.5;
      baseHigh *= 2;
    } else if (age < 65) {
      baseLow *= 1.2;
      baseHigh *= 1.5;
    }

    // Diagnosis type factor
    if (formData.diagnosis === 'pleural') {
      baseLow *= 1.1;
      baseHigh *= 1.3;
    } else if (formData.diagnosis === 'peritoneal') {
      baseLow *= 1.3;
      baseHigh *= 1.8;
    }

    // Stage factor
    if (formData.stage === 'early') {
      baseLow *= 1.4;
      baseHigh *= 2.0;
    }

    // Work history factor
    if (formData.workHistory === 'shipyard' || formData.workHistory === 'military') {
      baseLow *= 1.3;
      baseHigh *= 1.6;
    }

    // Income factor
    const income = formData.income[0];
    if (income > 75000) {
      baseLow *= 1.2;
      baseHigh *= 1.4;
    }

    // Medical costs factor
    const medicalCosts = formData.medicalCosts[0];
    baseLow += medicalCosts * 0.8;
    baseHigh += medicalCosts * 1.2;

    const factors = [
      'Age at diagnosis',
      'Type of mesothelioma',
      'Stage of disease',
      'Work history and exposure',
      'Income and earning capacity',
      'Medical expenses',
      'Number of dependents'
    ];

    setEstimated({
      low: Math.round(baseLow),
      high: Math.round(baseHigh),
      factors
    });
  };

  const handleInputChange = (field: string, value: string | number[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-primary-foreground mb-4">
            Mesothelioma Compensation Calculator
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Get an estimated range of potential compensation for your mesothelioma case
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calculator Form */}
            <div className="lg:col-span-2">
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Calculator className="w-6 h-6 text-primary" />
                    <CardTitle className="text-2xl">Calculate Your Potential Compensation</CardTitle>
                  </div>
                  <p className="text-muted-foreground">
                    Please provide the following information to estimate your potential compensation range.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="age">Age at Diagnosis</Label>
                      <Input
                        id="age"
                        type="number"
                        value={formData.age}
                        onChange={(e) => handleInputChange('age', e.target.value)}
                        placeholder="Enter your age"
                      />
                    </div>
                    <div>
                      <Label htmlFor="dependents">Number of Dependents</Label>
                      <Input
                        id="dependents"
                        type="number"
                        value={formData.dependents}
                        onChange={(e) => handleInputChange('dependents', e.target.value)}
                        placeholder="Number of dependents"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="diagnosis">Type of Mesothelioma</Label>
                      <Select onValueChange={(value) => handleInputChange('diagnosis', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select diagnosis type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pleural">Pleural Mesothelioma</SelectItem>
                          <SelectItem value="peritoneal">Peritoneal Mesothelioma</SelectItem>
                          <SelectItem value="pericardial">Pericardial Mesothelioma</SelectItem>
                          <SelectItem value="testicular">Testicular Mesothelioma</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="stage">Stage of Disease</Label>
                      <Select onValueChange={(value) => handleInputChange('stage', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select stage" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="early">Early Stage (1-2)</SelectItem>
                          <SelectItem value="advanced">Advanced Stage (3-4)</SelectItem>
                          <SelectItem value="unknown">Unknown</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="workHistory">Primary Work History</Label>
                      <Select onValueChange={(value) => handleInputChange('workHistory', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select work history" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="shipyard">Shipyard Worker</SelectItem>
                          <SelectItem value="military">Military Service</SelectItem>
                          <SelectItem value="construction">Construction</SelectItem>
                          <SelectItem value="industrial">Industrial/Manufacturing</SelectItem>
                          <SelectItem value="automotive">Automotive</SelectItem>
                          <SelectItem value="power">Power Plant</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="exposureType">Exposure Type</Label>
                      <Select onValueChange={(value) => handleInputChange('exposureType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select exposure type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="occupational">Occupational</SelectItem>
                          <SelectItem value="military">Military</SelectItem>
                          <SelectItem value="secondary">Secondary/Take-home</SelectItem>
                          <SelectItem value="environmental">Environmental</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label>Annual Income (before diagnosis)</Label>
                    <div className="mt-2">
                      <Slider
                        value={formData.income}
                        onValueChange={(value) => handleInputChange('income', value)}
                        max={200000}
                        min={20000}
                        step={5000}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-1">
                        <span>$20,000</span>
                        <span className="font-medium">${formData.income[0].toLocaleString()}</span>
                        <span>$200,000+</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label>Estimated Medical Costs</Label>
                    <div className="mt-2">
                      <Slider
                        value={formData.medicalCosts}
                        onValueChange={(value) => handleInputChange('medicalCosts', value)}
                        max={500000}
                        min={50000}
                        step={10000}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-1">
                        <span>$50,000</span>
                        <span className="font-medium">${formData.medicalCosts[0].toLocaleString()}</span>
                        <span>$500,000+</span>
                      </div>
                    </div>
                  </div>

                  <Button onClick={calculateEstimate} size="lg" className="w-full group">
                    <Calculator className="w-5 h-5 mr-2" />
                    Calculate Compensation Estimate
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Results & Info */}
            <div className="space-y-6">
              {estimated && (
                <Card className="glass-card border-primary/20">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-6 h-6 text-primary" />
                      <CardTitle className="text-xl">Estimated Compensation</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center space-y-4">
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">Estimated Range</p>
                        <p className="text-2xl font-bold text-primary">
                          ${estimated.low.toLocaleString()} - ${estimated.high.toLocaleString()}
                        </p>
                      </div>
                      
                      <div className="text-xs text-muted-foreground">
                        <p>* This is an estimate based on historical data and case factors.</p>
                        <p>* Actual compensation may vary significantly.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    <CardTitle>Factors Affecting Compensation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Age at diagnosis (younger = higher)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Type and stage of mesothelioma</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Work history and exposure sources</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Number of liable defendants</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Lost income and medical expenses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Pain and suffering damages</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-card bg-gradient-to-br from-primary/10 to-primary/5">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Get a Professional Case Evaluation</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    This calculator provides estimates only. For an accurate assessment, schedule a free consultation with our legal team.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Schedule Free Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompensationCalculator;