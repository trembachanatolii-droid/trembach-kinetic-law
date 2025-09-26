import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Calculator,
  DollarSign,
  Star,
  TrendingUp,
  Heart,
  Phone,
  AlertTriangle,
  Info
} from 'lucide-react';
import heroBackground from '@/assets/spinal-cord-compensation-calculator-hero.jpg';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';

const SpinalCordCompensationCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    age: '',
    injuryLevel: '',
    injuryType: '',
    preInjuryIncome: '',
    medicalExpenses: '',
    futureCareCosts: '',
    workingYearsLeft: ''
  });

  const [results, setResults] = useState<{
    economicDamages: number;
    nonEconomicDamages: number;
    totalEstimate: number;
    breakdown: any;
  } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateCompensation = () => {
    const age = parseInt(formData.age) || 25;
    const preInjuryIncome = parseInt(formData.preInjuryIncome) || 50000;
    const medicalExpenses = parseInt(formData.medicalExpenses) || 100000;
    const workingYears = parseInt(formData.workingYearsLeft) || (65 - age);

    // Base multipliers by injury type
    const injuryMultipliers = {
      'c1-c4': { medical: 15, income: 1.2, nonEconomic: 8 },
      'c5-c8': { medical: 12, income: 1.1, nonEconomic: 7 },
      't1-t6': { medical: 10, income: 0.9, nonEconomic: 6 },
      't7-t12': { medical: 8, income: 0.8, nonEconomic: 5 },
      'lumbar': { medical: 6, income: 0.7, nonEconomic: 4 },
      'incomplete': { medical: 5, income: 0.6, nonEconomic: 3.5 }
    };

    const multiplier = injuryMultipliers[formData.injuryLevel as keyof typeof injuryMultipliers] || 
                     injuryMultipliers['incomplete'];

    // Economic Damages Calculation
    const lifetimeMedical = medicalExpenses * multiplier.medical;
    const lostWages = preInjuryIncome * workingYears * multiplier.income;
    const economicDamages = lifetimeMedical + lostWages;

    // Non-Economic Damages (Pain & Suffering)
    const nonEconomicDamages = economicDamages * multiplier.nonEconomic * 0.3;

    const totalEstimate = economicDamages + nonEconomicDamages;

    setResults({
      economicDamages,
      nonEconomicDamages,
      totalEstimate,
      breakdown: {
        lifetimeMedical,
        lostWages,
        painSuffering: nonEconomicDamages
      }
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
        title="Spinal Cord Injury Compensation Calculator | California Paralysis Settlement Values"
        description="Calculate potential compensation for spinal cord injuries in California. Free paralysis settlement calculator from former defense attorney specializing in SCI cases."
        canonical="/spinal-cord-compensation-calculator"
      />
      
      <GoBack />
      
      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Spinal Cord Injury Compensation Calculator
          </h1>
          <p className="text-xl mb-6">
            Estimate potential settlement value for your paralysis case in California
          </p>
          
          <div className="flex items-center justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
            ))}
            <span className="ml-2 text-lg">Former Defense Attorney Insights</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Calculator Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-2xl text-blue-800 flex items-center">
                  <Calculator className="w-6 h-6 mr-2" />
                  Spinal Cord Injury Calculator
                </CardTitle>
                <p className="text-blue-700 text-lg">
                  Enter your information to get an estimated compensation range. This calculator uses California settlement data and injury severity factors.
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  
                  {/* Basic Information */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Basic Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="age" className="text-base font-medium">Your Age</Label>
                        <Input
                          id="age"
                          name="age"
                          type="number"
                          min="18"
                          max="80"
                          value={formData.age}
                          onChange={handleInputChange}
                          placeholder="e.g., 35"
                          className="mt-1 text-base p-3"
                        />
                      </div>
                      <div>
                        <Label htmlFor="preInjuryIncome" className="text-base font-medium">Pre-Injury Annual Income</Label>
                        <Input
                          id="preInjuryIncome"
                          name="preInjuryIncome"
                          type="number"
                          value={formData.preInjuryIncome}
                          onChange={handleInputChange}
                          placeholder="e.g., 75000"
                          className="mt-1 text-base p-3"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Injury Details */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Injury Details</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="injuryLevel" className="text-base font-medium">Injury Level *</Label>
                        <Select value={formData.injuryLevel} onValueChange={(value) => handleSelectChange('injuryLevel', value)}>
                          <SelectTrigger className="mt-1 text-base p-3">
                            <SelectValue placeholder="Select injury level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="c1-c4">C1-C4 (High Quadriplegia) - $8M+</SelectItem>
                            <SelectItem value="c5-c8">C5-C8 (Low Quadriplegia) - $6M+</SelectItem>
                            <SelectItem value="t1-t6">T1-T6 (High Paraplegia) - $5M+</SelectItem>
                            <SelectItem value="t7-t12">T7-T12 (Low Paraplegia) - $3M+</SelectItem>
                            <SelectItem value="lumbar">Lumbar (L1-L5) - $2M+</SelectItem>
                            <SelectItem value="incomplete">Incomplete SCI - $1M+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="injuryType" className="text-base font-medium">Injury Type</Label>
                        <Select value={formData.injuryType} onValueChange={(value) => handleSelectChange('injuryType', value)}>
                          <SelectTrigger className="mt-1 text-base p-3">
                            <SelectValue placeholder="Select injury type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="complete">Complete Spinal Cord Injury</SelectItem>
                            <SelectItem value="incomplete">Incomplete Spinal Cord Injury</SelectItem>
                            <SelectItem value="central-cord">Central Cord Syndrome</SelectItem>
                            <SelectItem value="brown-sequard">Brown-Sequard Syndrome</SelectItem>
                            <SelectItem value="cauda-equina">Cauda Equina Syndrome</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Medical Costs */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Medical Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="medicalExpenses" className="text-base font-medium">Current Medical Expenses</Label>
                        <Input
                          id="medicalExpenses"
                          name="medicalExpenses"
                          type="number"
                          value={formData.medicalExpenses}
                          onChange={handleInputChange}
                          placeholder="e.g., 150000"
                          className="mt-1 text-base p-3"
                        />
                      </div>
                      <div>
                        <Label htmlFor="workingYearsLeft" className="text-base font-medium">Working Years Remaining</Label>
                        <Input
                          id="workingYearsLeft"
                          name="workingYearsLeft"
                          type="number"
                          min="0"
                          max="50"
                          value={formData.workingYearsLeft}
                          onChange={handleInputChange}
                          placeholder="e.g., 30"
                          className="mt-1 text-base p-3"
                        />
                      </div>
                    </div>
                  </div>

                  <Button 
                    onClick={calculateCompensation}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 text-lg"
                    disabled={!formData.injuryLevel}
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    Calculate Estimated Compensation
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            {results && (
              <Card className="mt-8 shadow-lg border-2 border-green-200">
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-2xl text-green-800 flex items-center">
                    <TrendingUp className="w-6 h-6 mr-2" />
                    Estimated Compensation Range
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    
                    {/* Total Estimate */}
                    <div className="text-center bg-green-100 p-6 rounded-lg">
                      <h3 className="text-2xl font-bold text-green-800 mb-2">Total Estimated Value</h3>
                      <div className="text-4xl font-bold text-green-600">
                        {formatCurrency(results.totalEstimate)}
                      </div>
                      <p className="text-green-700 mt-2 text-lg">
                        Range: {formatCurrency(results.totalEstimate * 0.7)} - {formatCurrency(results.totalEstimate * 1.3)}
                      </p>
                    </div>

                    {/* Breakdown */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card className="border border-blue-200">
                        <CardHeader className="bg-blue-50">
                          <CardTitle className="flex items-center text-lg">
                            <DollarSign className="w-5 h-5 mr-2 text-blue-600" />
                            Economic Damages
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4">
                          <div className="text-2xl font-bold text-blue-600 mb-3">
                            {formatCurrency(results.economicDamages)}
                          </div>
                          <div className="space-y-2 text-base">
                            <div className="flex justify-between">
                              <span>Lifetime Medical:</span>
                              <span className="font-semibold">{formatCurrency(results.breakdown.lifetimeMedical)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Lost Wages:</span>
                              <span className="font-semibold">{formatCurrency(results.breakdown.lostWages)}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border border-red-200">
                        <CardHeader className="bg-red-50">
                          <CardTitle className="flex items-center text-lg">
                            <Heart className="w-5 h-5 mr-2 text-red-600" />
                            Non-Economic Damages
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4">
                          <div className="text-2xl font-bold text-red-600 mb-3">
                            {formatCurrency(results.nonEconomicDamages)}
                          </div>
                          <div className="space-y-2 text-base">
                            <div className="flex justify-between">
                              <span>Pain & Suffering:</span>
                              <span className="font-semibold">{formatCurrency(results.breakdown.painSuffering)}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Important Notice */}
                    <div className="bg-yellow-50 border-2 border-yellow-200 p-6 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Info className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-lg text-yellow-800 mb-2">Important Disclaimer</h4>
                          <p className="text-base text-yellow-700 leading-relaxed">
                            This calculator provides estimates based on California settlement data and injury severity factors. 
                            Actual case values depend on specific circumstances, liability strength, insurance coverage, and 
                            many other factors. For accurate case evaluation, contact our experienced spinal cord injury attorneys.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <Button 
                        size="lg" 
                        className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
                        onClick={() => window.location.href = '/spinal-cord-case-evaluation'}
                      >
                        Get Professional Case Evaluation
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              
              {/* Contact Card */}
              <Card className="border-2 border-primary shadow-lg">
                <CardHeader className="bg-primary text-primary-foreground text-center">
                  <CardTitle className="text-xl">Get Accurate Evaluation</CardTitle>
                </CardHeader>
                <CardContent className="p-6 text-center space-y-4">
                  <div>
                    <Phone className="w-12 h-12 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold text-lg mb-2">Call Now</h3>
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-base"
                      onClick={() => window.open('tel:8181234567')}
                    >
                      (818) 123-4567
                    </Button>
                  </div>
                  
                  <div className="text-center pt-4 border-t">
                    <p className="text-base font-medium text-primary">Free Consultation</p>
                    <p className="text-base text-muted-foreground">No fees unless we win</p>
                  </div>
                </CardContent>
              </Card>

              {/* Factors Affecting Value */}
              <Card className="border border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Factors Affecting Case Value</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-base">
                    <div>
                      <h4 className="font-semibold">Injury Severity</h4>
                      <p className="text-muted-foreground">Complete vs incomplete, injury level</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Age at Injury</h4>
                      <p className="text-muted-foreground">Younger victims have higher lifetime costs</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Pre-Injury Income</h4>
                      <p className="text-muted-foreground">Higher income increases lost wage damages</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Liability Strength</h4>
                      <p className="text-muted-foreground">Clear fault increases settlement value</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Insurance Coverage</h4>
                      <p className="text-muted-foreground">Policy limits affect maximum recovery</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* California Averages */}
              <Card className="border border-border bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-800">California SCI Averages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-base">
                    <div className="flex justify-between">
                      <span>High Quadriplegia:</span>
                      <span className="font-semibold">$8M+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Low Quadriplegia:</span>
                      <span className="font-semibold">$6M+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Paraplegia:</span>
                      <span className="font-semibold">$3-5M</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Incomplete SCI:</span>
                      <span className="font-semibold">$1-3M</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Urgent Notice */}
              <Card className="border-2 border-red-300 bg-red-50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg text-red-800 mb-2">Time Limits Apply</h3>
                      <p className="text-base text-red-700 leading-relaxed">
                        California law imposes strict deadlines for spinal cord injury claims. Don't let time run out on your case.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpinalCordCompensationCalculator;