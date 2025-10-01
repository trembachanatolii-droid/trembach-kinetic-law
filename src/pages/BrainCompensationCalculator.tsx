import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertTriangle, DollarSign, Calculator, Brain, TrendingUp, CheckCircle, Clock, Phone } from 'lucide-react';
import heroBackground from '@/assets/brain-compensation-calculator-hero.jpg';
import SEO from '@/components/SEO';

const BrainCompensationCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    age: '',
    income: '',
    injurySeverity: '',
    medicalExpenses: '',
    timeOffWork: '',
    permanentDisability: '',
    painSeverity: '',
    lifeImpact: ''
  });

  const [calculation, setCalculation] = useState<{
    economicDamages: number;
    nonEconomicDamages: number;
    totalEstimate: number;
    lowRange: number;
    highRange: number;
  } | null>(null);

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateCompensation = () => {
    const age = parseInt(formData.age) || 25;
    const income = parseInt(formData.income) || 0;
    const medicalExpenses = parseInt(formData.medicalExpenses) || 0;
    const timeOffWork = parseInt(formData.timeOffWork) || 0;

    // Economic damages calculation
    const lostWages = (income / 52) * timeOffWork;
    const futureEarningsLoss = formData.permanentDisability === 'severe' 
      ? income * 10 : formData.permanentDisability === 'moderate' 
      ? income * 5 : income * 2;
    
    const economicDamages = medicalExpenses + lostWages + futureEarningsLoss;

    // Non-economic damages multiplier based on injury severity
    let multiplier = 2;
    switch (formData.injurySeverity) {
      case 'mild':
        multiplier = 2;
        break;
      case 'moderate':
        multiplier = 4;
        break;
      case 'severe':
        multiplier = 6;
        break;
      case 'catastrophic':
        multiplier = 8;
        break;
    }

    // Adjust multiplier for pain severity and life impact
    if (formData.painSeverity === 'severe') multiplier += 1;
    if (formData.lifeImpact === 'severe') multiplier += 1;

    const nonEconomicDamages = economicDamages * multiplier;
    const totalEstimate = economicDamages + nonEconomicDamages;

    setCalculation({
      economicDamages,
      nonEconomicDamages,
      totalEstimate,
      lowRange: totalEstimate * 0.7,
      highRange: totalEstimate * 1.3
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Brain Injury Compensation Calculator | TBI Settlement Estimator"
        description="Calculate potential compensation for your brain injury case. Free TBI settlement estimator from experienced California attorneys."
        canonical="/brain-compensation-calculator"
      />

      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Brain Injury Compensation Calculator
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Estimate the potential value of your traumatic brain injury case with our comprehensive calculator.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Calculator Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="flex items-center text-3xl mb-6">
                  <Calculator className="w-8 h-8 mr-3 text-primary" />
                  Calculate Your Brain Injury Compensation
                </CardTitle>
              </CardHeader>
              
              <CardContent className="px-0">
                <div className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="age">Age</Label>
                        <Input
                          id="age"
                          type="number"
                          placeholder="Enter your age"
                          value={formData.age}
                          onChange={(e) => handleInputChange('age', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="income">Annual Income Before Injury</Label>
                        <Input
                          id="income"
                          type="number"
                          placeholder="$75,000"
                          value={formData.income}
                          onChange={(e) => handleInputChange('income', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Injury Information */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Injury Details</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="injurySeverity">Brain Injury Severity</Label>
                        <Select onValueChange={(value) => handleInputChange('injurySeverity', value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select severity" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mild">Mild TBI/Concussion</SelectItem>
                            <SelectItem value="moderate">Moderate TBI</SelectItem>
                            <SelectItem value="severe">Severe TBI</SelectItem>
                            <SelectItem value="catastrophic">Catastrophic/Vegetative</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="permanentDisability">Level of Permanent Disability</Label>
                        <Select onValueChange={(value) => handleInputChange('permanentDisability', value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select disability level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">None/Minimal</SelectItem>
                            <SelectItem value="mild">Mild Cognitive Issues</SelectItem>
                            <SelectItem value="moderate">Moderate Limitations</SelectItem>
                            <SelectItem value="severe">Severe/Complete Disability</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Economic Damages */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Economic Damages</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="medicalExpenses">Total Medical Expenses</Label>
                        <Input
                          id="medicalExpenses"
                          type="number"
                          placeholder="$50,000"
                          value={formData.medicalExpenses}
                          onChange={(e) => handleInputChange('medicalExpenses', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="timeOffWork">Weeks Off Work</Label>
                        <Input
                          id="timeOffWork"
                          type="number"
                          placeholder="12"
                          value={formData.timeOffWork}
                          onChange={(e) => handleInputChange('timeOffWork', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Impact on Life */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Impact on Life</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="painSeverity">Pain & Suffering Level</Label>
                        <Select onValueChange={(value) => handleInputChange('painSeverity', value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select pain level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mild">Mild - Occasional discomfort</SelectItem>
                            <SelectItem value="moderate">Moderate - Daily pain</SelectItem>
                            <SelectItem value="severe">Severe - Chronic, debilitating</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="lifeImpact">Impact on Daily Activities</Label>
                        <Select onValueChange={(value) => handleInputChange('lifeImpact', value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select impact level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="minimal">Minimal impact</SelectItem>
                            <SelectItem value="moderate">Some limitations</SelectItem>
                            <SelectItem value="severe">Significant limitations</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <Button 
                    onClick={calculateCompensation}
                    className="w-full bg-primary hover:bg-primary/90 text-white py-4 text-lg"
                    disabled={!formData.injurySeverity}
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    Calculate My Compensation
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            {calculation && (
              <Card className="mt-8 p-8 border-2 border-primary">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="flex items-center text-2xl text-foreground">
                    <TrendingUp className="w-6 h-6 mr-2 text-green-600" />
                    Your Estimated Compensation
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="px-0">
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Economic Damages</p>
                      <p className="text-2xl font-bold text-blue-600">
                        {formatCurrency(calculation.economicDamages)}
                      </p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Non-Economic Damages</p>
                      <p className="text-2xl font-bold text-purple-600">
                        {formatCurrency(calculation.nonEconomicDamages)}
                      </p>
                    </div>
                    <div className="text-center p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Total Estimate</p>
                      <p className="text-3xl font-bold text-green-600">
                        {formatCurrency(calculation.totalEstimate)}
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3 text-foreground">Potential Settlement Range:</h4>
                    <p className="text-2xl font-bold text-primary">
                      {formatCurrency(calculation.lowRange)} - {formatCurrency(calculation.highRange)}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      This range accounts for variables in negotiation and case-specific factors.
                    </p>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                    <div className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">Important Disclaimer</h4>
                        <p className="text-sm text-yellow-800 dark:text-yellow-200 leading-relaxed">
                          This calculator provides estimates only. Actual compensation depends on many factors including 
                          liability strength, insurance coverage, jurisdiction, and specific case details. Contact our 
                          experienced attorneys for a professional case evaluation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-6">
                    <Button 
                      className="flex-1 bg-red-600 hover:bg-red-700"
                      onClick={() => window.location.href = '/brain-case-evaluation'}
                    >
                      Get Professional Case Review
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => window.open('tel:8181234567')}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call (818) 123-4567
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Contact Info */}
              <Card className="p-6 text-center bg-gradient-to-b from-red-600 to-red-700 text-white">
                <Phone className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Call Now</h3>
                <p className="text-xl mb-4">(818) 123-4567</p>
                <p className="text-white/90">24/7 Free Consultation</p>
              </Card>

              {/* Factors Affecting Compensation */}
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Factors Affecting Your Compensation
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Brain className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Severity of brain injury and long-term effects</span>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Lost wages and reduced earning capacity</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Strength of liability evidence</span>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Available insurance coverage</span>
                  </div>
                </div>
              </Card>

              {/* Time Sensitive */}
              <Card className="p-6 bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800">
                <div className="flex items-center mb-3">
                  <Clock className="w-5 h-5 text-yellow-600 mr-2" />
                  <h3 className="font-bold text-yellow-800 dark:text-yellow-200">Time Sensitive</h3>
                </div>
                <p className="text-yellow-800 dark:text-yellow-200 text-sm leading-relaxed">
                  California's statute of limitations gives you only 2 years to file your brain injury claim. 
                  Don't wait - evidence disappears and witnesses' memories fade.
                </p>
              </Card>

              {/* Why Choose Us */}
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">Why Choose Our Firm?</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Former defense attorney insight</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">No fees unless we win</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Maximum compensation focus</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">24/7 case consultation</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrainCompensationCalculator;