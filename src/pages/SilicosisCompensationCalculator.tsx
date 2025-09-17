import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calculator, DollarSign, FileText, Users } from 'lucide-react';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';
import compensationHero from '@/assets/silicosis-compensation-calculator.jpg';

const SilicosisCompensationCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    age: '',
    exposureYears: '',
    diagnosisDate: '',
    severity: '',
    workplaceType: '',
    currentSymptoms: '',
    medicalExpenses: '',
    lostWages: '',
    additionalInfo: ''
  });

  const [results, setResults] = useState<{
    estimatedRange: string;
    factorsConsidered: string[];
    nextSteps: string[];
  } | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateCompensation = () => {
    const age = parseInt(formData.age) || 0;
    const exposureYears = parseInt(formData.exposureYears) || 0;
    const medicalExpenses = parseInt(formData.medicalExpenses) || 0;
    const lostWages = parseInt(formData.lostWages) || 0;

    // Base compensation calculation
    let baseAmount = medicalExpenses + lostWages;
    
    // Severity multiplier
    const severityMultiplier = {
      'simple': 1.2,
      'complicated': 2.0,
      'acute': 3.0,
      'progressive': 3.5
    }[formData.severity] || 1.0;

    // Exposure years factor
    const exposureFactor = Math.min(exposureYears * 0.1, 2.0);
    
    // Age factor (younger = higher future losses)
    const ageFactor = age < 50 ? 1.3 : age < 65 ? 1.1 : 1.0;

    // Workplace type factor
    const workplaceMultiplier = {
      'countertop': 1.4,
      'construction': 1.2,
      'mining': 1.3,
      'foundry': 1.3,
      'sandblasting': 1.5,
      'ceramics': 1.2,
      'other': 1.0
    }[formData.workplaceType] || 1.0;

    // Calculate total compensation range
    const calculated = baseAmount * severityMultiplier * (1 + exposureFactor) * ageFactor * workplaceMultiplier;
    const minAmount = Math.max(calculated * 0.7, 50000);
    const maxAmount = calculated * 1.3;

    const formatCurrency = (amount: number) => 
      new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(amount);

    return {
      estimatedRange: `${formatCurrency(minAmount)} - ${formatCurrency(maxAmount)}`,
      factorsConsidered: [
        `Silicosis severity: ${formData.severity}`,
        `Years of exposure: ${exposureYears}`,
        `Current age: ${age}`,
        `Workplace type: ${formData.workplaceType}`,
        `Medical expenses: ${formatCurrency(medicalExpenses)}`,
        `Lost wages: ${formatCurrency(lostWages)}`
      ].filter(factor => !factor.includes('undefined') && !factor.includes('$0')),
      nextSteps: [
        'Schedule a free consultation with our silicosis attorneys',
        'Gather all medical records and documentation',
        'Document your work history and exposure details',
        'Consider filing your claim as soon as possible'
      ]
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.age || !formData.exposureYears || !formData.severity || !formData.workplaceType) {
      alert('Please fill in all required fields to calculate compensation.');
      return;
    }

    const calculationResults = calculateCompensation();
    setResults(calculationResults);
    
    // Scroll to results
    setTimeout(() => {
      document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <SEO 
        title="Silicosis Compensation Calculator | Estimate Your Case Value"
        description="Use our free silicosis compensation calculator to estimate potential compensation for your silicosis case. Get an instant evaluation based on your specific circumstances."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/5">
        <GoBack className="container mx-auto px-4" />
        
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: `url(${compensationHero})` }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Calculator className="w-12 h-12 text-primary" />
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Silicosis Compensation Calculator
                </h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                Get a free estimate of your potential silicosis compensation based on your specific case details
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-2xl border-0 bg-card/80 backdrop-blur">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl font-bold text-primary mb-4">
                    Calculate Your Potential Compensation
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Provide the following information for a personalized estimate
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="age">Current Age</Label>
                        <Input
                          id="age"
                          type="number"
                          placeholder="Your age"
                          value={formData.age}
                          onChange={(e) => handleInputChange('age', e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="exposureYears">Years of Silica Exposure</Label>
                        <Input
                          id="exposureYears"
                          type="number"
                          placeholder="Years exposed to silica"
                          value={formData.exposureYears}
                          onChange={(e) => handleInputChange('exposureYears', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="diagnosisDate">Date of Diagnosis</Label>
                        <Input
                          id="diagnosisDate"
                          type="date"
                          value={formData.diagnosisDate}
                          onChange={(e) => handleInputChange('diagnosisDate', e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="severity">Silicosis Severity</Label>
                        <Select onValueChange={(value) => handleInputChange('severity', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select severity level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="simple">Simple Silicosis</SelectItem>
                            <SelectItem value="complicated">Complicated Silicosis</SelectItem>
                            <SelectItem value="acute">Acute Silicosis</SelectItem>
                            <SelectItem value="progressive">Progressive Massive Fibrosis</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="workplaceType">Type of Workplace Exposure</Label>
                      <Select onValueChange={(value) => handleInputChange('workplaceType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select workplace type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="countertop">Countertop/Stone Fabrication</SelectItem>
                          <SelectItem value="construction">Construction</SelectItem>
                          <SelectItem value="mining">Mining</SelectItem>
                          <SelectItem value="foundry">Foundry Work</SelectItem>
                          <SelectItem value="sandblasting">Sandblasting</SelectItem>
                          <SelectItem value="ceramics">Ceramics/Glass Manufacturing</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="medicalExpenses">Estimated Medical Expenses</Label>
                        <Input
                          id="medicalExpenses"
                          type="number"
                          placeholder="Total medical costs"
                          value={formData.medicalExpenses}
                          onChange={(e) => handleInputChange('medicalExpenses', e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="lostWages">Lost Wages/Income</Label>
                        <Input
                          id="lostWages"
                          type="number"
                          placeholder="Lost income amount"
                          value={formData.lostWages}
                          onChange={(e) => handleInputChange('lostWages', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="currentSymptoms">Current Symptoms</Label>
                      <Textarea
                        id="currentSymptoms"
                        placeholder="Describe your current symptoms and how they affect your daily life"
                        value={formData.currentSymptoms}
                        onChange={(e) => handleInputChange('currentSymptoms', e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="additionalInfo">Additional Information</Label>
                      <Textarea
                        id="additionalInfo"
                        placeholder="Any other relevant information about your case"
                        value={formData.additionalInfo}
                        onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                      />
                    </div>

                    <Button type="submit" className="w-full py-6 text-lg font-semibold">
                      <DollarSign className="w-5 h-5 mr-2" />
                      Calculate My Compensation
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Results Section */}
              {results && (
                <Card className="mt-8 shadow-2xl border-0 bg-card/80 backdrop-blur" id="results-section">
                  <CardHeader className="text-center pb-6">
                    <CardTitle className="text-2xl font-bold text-primary mb-2">
                      Your Estimated Compensation Range
                    </CardTitle>
                    <CardDescription className="text-lg">
                      Based on the information you provided
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">
                        {results.estimatedRange}
                      </div>
                      <p className="text-muted-foreground">
                        *This is an estimate based on similar cases. Actual compensation may vary.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-4 flex items-center">
                          <FileText className="w-5 h-5 mr-2 text-primary" />
                          Factors Considered
                        </h3>
                        <ul className="space-y-2">
                          {results.factorsConsidered.map((factor, index) => (
                            <li key={index} className="text-sm text-muted-foreground">
                              • {factor}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-4 flex items-center">
                          <Users className="w-5 h-5 mr-2 text-primary" />
                          Next Steps
                        </h3>
                        <ul className="space-y-2">
                          {results.nextSteps.map((step, index) => (
                            <li key={index} className="text-sm text-muted-foreground">
                              • {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="text-center">
                      <Button 
                        size="lg" 
                        className="bg-red-600 hover:bg-red-700 text-white"
                        onClick={() => window.location.href = '/silicosis-case-evaluation'}
                      >
                        Get Free Legal Consultation
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Disclaimer Section */}
              <Card className="mt-8 bg-muted/50 border-muted">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-center">Important Legal Disclaimer</h3>
                  <div className="text-sm text-muted-foreground space-y-3">
                    <p>
                      <strong>This calculator provides estimates only.</strong> The compensation amounts shown are based on general factors and similar cases. Your actual compensation may be significantly different depending on the specific circumstances of your case.
                    </p>
                    <p>
                      <strong>Not Legal Advice:</strong> This calculator does not constitute legal advice. Every silicosis case is unique, and compensation depends on many factors including the strength of evidence, degree of negligence, jurisdiction, and individual circumstances.
                    </p>
                    <p>
                      <strong>Consultation Required:</strong> To get an accurate assessment of your case value, you must speak with a qualified silicosis attorney who can review your medical records, work history, and other relevant documentation.
                    </p>
                    <p>
                      <strong>Time Limits Apply:</strong> Silicosis claims are subject to statutes of limitations. Contact an attorney immediately to protect your rights.
                    </p>
                    <p className="text-center font-medium">
                      For a free, confidential case evaluation, contact our experienced silicosis attorneys today.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SilicosisCompensationCalculator;