import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Calculator, DollarSign, FileText, AlertTriangle, PawPrint, Info } from 'lucide-react';
import heroImage from '@/assets/dog-bite-compensation-calculator-hero.jpg';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';
import DogBiteQuestionnaire from '@/components/DogBiteQuestionnaire';

const DogBiteCompensationCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    medicalExpenses: '',
    lostWages: '',
    futureWages: '',
    painSuffering: '',
    injurySeverity: '',
    scarringVisible: '',
    therapyCounseling: '',
    ageGroup: '',
    occupation: '',
    permanentDisability: '',
    emotionalDistress: ''
  });

  const [estimatedRange, setEstimatedRange] = useState<{min: number, max: number} | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateCompensation = () => {
    let baseCompensation = 0;
    let multiplier = 1;

    // Medical expenses (actual costs)
    const medical = parseFloat(formData.medicalExpenses) || 0;
    const wages = parseFloat(formData.lostWages) || 0;
    const futureWages = parseFloat(formData.futureWages) || 0;

    baseCompensation = medical + wages + futureWages;

    // Pain and suffering multiplier based on injury severity
    switch (formData.injurySeverity) {
      case 'minor':
        multiplier = 1.5;
        break;
      case 'moderate':
        multiplier = 3;
        break;
      case 'severe':
        multiplier = 5;
        break;
      case 'catastrophic':
        multiplier = 7;
        break;
      default:
        multiplier = 2;
    }

    // Additional factors
    if (formData.scarringVisible === 'yes') {
      multiplier += 1;
    }
    if (formData.permanentDisability === 'yes') {
      multiplier += 2;
    }
    if (formData.emotionalDistress === 'severe') {
      multiplier += 1;
    }

    // Age factor (younger victims often receive higher awards)
    if (formData.ageGroup === 'child') {
      multiplier += 1.5;
    } else if (formData.ageGroup === 'young-adult') {
      multiplier += 0.5;
    }

    const painSufferingAmount = baseCompensation * multiplier;
    const totalMin = baseCompensation + painSufferingAmount * 0.7;
    const totalMax = baseCompensation + painSufferingAmount * 1.5;

    setEstimatedRange({
      min: Math.round(totalMin),
      max: Math.round(totalMax)
    });
    setShowResults(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateCompensation();
  };

  return (
    <>
      <SEO 
        title="Dog Bite Compensation Calculator - Estimate Your Case Value | California"
        description="Calculate potential compensation for your dog bite injury. Free tool to estimate medical costs, lost wages, and pain & suffering damages in California."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
        <GoBack className="top-20 z-[60]" />
        
        {/* Hero Section */}
        <div 
          className="relative h-[50vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImage})` }}
        >
          <div className="text-center text-white max-w-4xl mx-auto px-6">
            <div className="flex items-center justify-center mb-4">
              <Calculator className="w-16 h-16 text-primary mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold">
                Dog Bite Compensation Calculator
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Get an estimate of potential compensation for your dog bite injury case
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Information Panel */}
            <div className="lg:col-span-1 space-y-8">
              <Card className="border border-primary/20 shadow-xl bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center bg-primary text-primary-foreground rounded-t-lg">
                  <CardTitle className="text-2xl font-bold">Important Notice</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <Info className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm">
                        This calculator provides estimates only. Actual compensation depends on many factors 
                        including the specific circumstances of your case, available insurance coverage, 
                        and California law.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-accent/20 shadow-lg bg-accent/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Compensation May Include:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <DollarSign className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Medical expenses (past and future)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <DollarSign className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Lost wages and reduced earning capacity</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <DollarSign className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Pain and suffering</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <DollarSign className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Emotional distress</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <DollarSign className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Scarring and disfigurement</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <DollarSign className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Property damage</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {showResults && estimatedRange && (
                <Card className="border border-primary/20 shadow-xl bg-primary/5">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold text-primary">Estimated Range</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      ${estimatedRange.min.toLocaleString()} - ${estimatedRange.max.toLocaleString()}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      This is an estimate based on the information provided
                    </p>
                    <Button 
                      onClick={() => window.location.href = '/dog-bite-case-evaluation'}
                      className="w-full"
                    >
                      Get Free Case Review
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Calculator Form */}
            <div className="lg:col-span-2">
              <Card className="border border-primary/20 shadow-2xl bg-card/50 backdrop-blur-sm">
                <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
                  <CardTitle className="text-3xl font-bold text-center">
                    Compensation Calculator
                  </CardTitle>
                  <p className="text-center text-primary-foreground/90 text-lg">
                    Enter your case details to estimate potential compensation
                  </p>
                </CardHeader>
                
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    
                    {/* Economic Damages */}
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-primary border-b border-primary/20 pb-2">
                        Economic Damages
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="medicalExpenses" className="text-base font-semibold">
                            Total Medical Expenses
                          </Label>
                          <Input
                            id="medicalExpenses"
                            type="number"
                            value={formData.medicalExpenses}
                            onChange={(e) => handleInputChange('medicalExpenses', e.target.value)}
                            placeholder="0"
                            className="mt-2 h-12 text-base"
                            min="0"
                            step="100"
                          />
                          <p className="text-xs text-muted-foreground mt-1">
                            Include emergency room, surgery, therapy, medications
                          </p>
                        </div>
                        
                        <div>
                          <Label htmlFor="lostWages" className="text-base font-semibold">
                            Lost Wages (to date)
                          </Label>
                          <Input
                            id="lostWages"
                            type="number"
                            value={formData.lostWages}
                            onChange={(e) => handleInputChange('lostWages', e.target.value)}
                            placeholder="0"
                            className="mt-2 h-12 text-base"
                            min="0"
                            step="100"
                          />
                          <p className="text-xs text-muted-foreground mt-1">
                            Income lost due to time off work
                          </p>
                        </div>
                        
                        <div className="md:col-span-2">
                          <Label htmlFor="futureWages" className="text-base font-semibold">
                            Future Lost Wages/Earning Capacity
                          </Label>
                          <Input
                            id="futureWages"
                            type="number"
                            value={formData.futureWages}
                            onChange={(e) => handleInputChange('futureWages', e.target.value)}
                            placeholder="0"
                            className="mt-2 h-12 text-base"
                            min="0"
                            step="100"
                          />
                          <p className="text-xs text-muted-foreground mt-1">
                            Expected future income loss due to permanent disability
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Injury Severity */}
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-primary border-b border-primary/20 pb-2">
                        Injury Details
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label className="text-base font-semibold">Injury Severity</Label>
                          <Select onValueChange={(value) => handleInputChange('injurySeverity', value)}>
                            <SelectTrigger className="mt-2 h-12 text-base">
                              <SelectValue placeholder="Select severity" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="minor">Minor (first aid, no scarring)</SelectItem>
                              <SelectItem value="moderate">Moderate (stitches, minor scarring)</SelectItem>
                              <SelectItem value="severe">Severe (surgery, significant scarring)</SelectItem>
                              <SelectItem value="catastrophic">Catastrophic (permanent disability)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label className="text-base font-semibold">Age Group</Label>
                          <Select onValueChange={(value) => handleInputChange('ageGroup', value)}>
                            <SelectTrigger className="mt-2 h-12 text-base">
                              <SelectValue placeholder="Select age group" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="child">Child (under 18)</SelectItem>
                              <SelectItem value="young-adult">Young Adult (18-30)</SelectItem>
                              <SelectItem value="adult">Adult (31-55)</SelectItem>
                              <SelectItem value="senior">Senior (over 55)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label className="text-base font-semibold">Visible Scarring</Label>
                          <Select
                            value={formData.scarringVisible}
                            onValueChange={(value) => handleInputChange('scarringVisible', value)}
                          >
                            <SelectTrigger className="mt-2 h-12 text-base">
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes">Yes, visible scarring</SelectItem>
                              <SelectItem value="no">No visible scarring</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label className="text-base font-semibold">Permanent Disability</Label>
                          <Select
                            value={formData.permanentDisability}
                            onValueChange={(value) => handleInputChange('permanentDisability', value)}
                          >
                            <SelectTrigger className="mt-2 h-12 text-base">
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="no">No</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label className="text-base font-semibold">Emotional Distress Level</Label>
                          <Select onValueChange={(value) => handleInputChange('emotionalDistress', value)}>
                            <SelectTrigger className="mt-2 h-12 text-base">
                              <SelectValue placeholder="Select level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="minimal">Minimal</SelectItem>
                              <SelectItem value="moderate">Moderate</SelectItem>
                              <SelectItem value="severe">Severe (PTSD, therapy needed)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label className="text-base font-semibold">Occupation</Label>
                          <Select onValueChange={(value) => handleInputChange('occupation', value)}>
                            <SelectTrigger className="mt-2 h-12 text-base">
                              <SelectValue placeholder="Select occupation" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="student">Student</SelectItem>
                              <SelectItem value="professional">Professional/Office Worker</SelectItem>
                              <SelectItem value="manual">Manual Labor</SelectItem>
                              <SelectItem value="service">Service Industry</SelectItem>
                              <SelectItem value="retired">Retired</SelectItem>
                              <SelectItem value="unemployed">Unemployed</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Calculate Button */}
                    <div className="text-center pt-8">
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="px-12 py-4 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Calculator className="w-6 h-6 mr-2" />
                        Calculate Compensation Range
                      </Button>
                      <p className="text-sm text-muted-foreground mt-4">
                        This calculator provides estimates only. Consult with an attorney for accurate case valuation.
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Comprehensive Questionnaire (50+ Questions) */}
              <DogBiteQuestionnaire />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DogBiteCompensationCalculator;