import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { 
  Calculator, 
  DollarSign, 
  TrendingUp, 
  AlertTriangle, 
  Info, 
  CheckCircle,
  Stethoscope,
  Home,
  Car,
  Heart,
  Clock
} from 'lucide-react';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';
import heroBackground from '@/assets/paralysis-compensation-calculator.jpg';

const ParalysisCompensationCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    age: '',
    paralysisType: '',
    causeOfInjury: '',
    annualIncome: '',
    workLifeExpectancy: '',
    medicalCosts: '',
    modificationCosts: '',
    caregiverHours: '',
    caregiverRate: '',
    severityLevel: ''
  });

  const [results, setResults] = useState<{
    medicalExpenses: number;
    lostEarnings: number;
    caregiverCosts: number;
    homeModifications: number;
    painSuffering: number;
    total: number;
    breakdown: any[];
  } | null>(null);

  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );
    });
    return () => ctx.revert();
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateCompensation = () => {
    const age = parseInt(formData.age) || 0;
    const annualIncome = parseFloat(formData.annualIncome) || 0;
    const workLifeExpectancy = parseInt(formData.workLifeExpectancy) || (65 - age);
    const caregiverHours = parseFloat(formData.caregiverHours) || 0;
    const caregiverRate = parseFloat(formData.caregiverRate) || 20;
    
    // Base calculations
    let medicalExpenses = 0;
    let lostEarnings = 0;
    let caregiverCosts = 0;
    let homeModifications = 0;
    let painSuffering = 0;

    // Medical expenses based on paralysis type
    if (formData.paralysisType === 'quadriplegia') {
      medicalExpenses = 1200000; // High-level injury
      caregiverCosts = caregiverHours * caregiverRate * 365 * 40; // 40 years
      homeModifications = 150000;
    } else if (formData.paralysisType === 'paraplegia') {
      medicalExpenses = 800000;
      caregiverCosts = caregiverHours * caregiverRate * 365 * 35; // 35 years
      homeModifications = 100000;
    } else if (formData.paralysisType === 'incomplete') {
      medicalExpenses = 500000;
      caregiverCosts = caregiverHours * caregiverRate * 365 * 25; // 25 years
      homeModifications = 75000;
    }

    // Lost earnings calculation
    lostEarnings = annualIncome * workLifeExpectancy * 1.03; // 3% inflation adjustment

    // Pain and suffering multiplier based on severity
    let multiplier = 2;
    if (formData.paralysisType === 'quadriplegia') multiplier = 4;
    else if (formData.paralysisType === 'paraplegia') multiplier = 3;
    
    painSuffering = (medicalExpenses + lostEarnings) * multiplier;

    const total = medicalExpenses + lostEarnings + caregiverCosts + homeModifications + painSuffering;

    const breakdown = [
      { label: 'Medical Expenses (Lifetime)', amount: medicalExpenses, icon: Stethoscope },
      { label: 'Lost Earnings', amount: lostEarnings, icon: TrendingUp },
      { label: 'Caregiver Costs', amount: caregiverCosts, icon: Heart },
      { label: 'Home Modifications', amount: homeModifications, icon: Home },
      { label: 'Pain & Suffering', amount: painSuffering, icon: AlertTriangle }
    ];

    setResults({
      medicalExpenses,
      lostEarnings,
      caregiverCosts,
      homeModifications,
      painSuffering,
      total,
      breakdown
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Paralysis Compensation Calculator - Estimate Your Settlement | California"
        description="Free paralysis compensation calculator to estimate potential settlement amounts for spinal cord injuries. Calculate medical costs, lost wages, and pain & suffering damages."
        keywords="paralysis compensation calculator, spinal cord injury settlement, California paralysis damages, quadriplegia compensation, paraplegia settlement"
      />

      <GoBack />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat hero-content"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Paralysis Compensation Calculator
            </h1>
            <p className="text-xl mb-6 text-white">
              Estimate potential compensation for your spinal cord injury case
            </p>
            <div className="flex items-center justify-center space-x-6">
              <Badge variant="secondary" className="bg-green-600 text-white px-4 py-2">
                <Calculator className="w-4 h-4 mr-2" />
                Free Estimate
              </Badge>
              <Badge variant="secondary" className="bg-blue-600 text-white px-4 py-2">
                <CheckCircle className="w-4 h-4 mr-2" />
                Confidential
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Calculator Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="w-6 h-6 mr-2" />
                  Compensation Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Current Age</label>
                      <Input
                        type="number"
                        value={formData.age}
                        onChange={(e) => handleInputChange('age', e.target.value)}
                        placeholder="Enter your age"
                        min="18"
                        max="80"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Annual Income (Before Injury)</label>
                      <Input
                        type="number"
                        value={formData.annualIncome}
                        onChange={(e) => handleInputChange('annualIncome', e.target.value)}
                        placeholder="$50,000"
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Injury Details */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Injury Information</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Type of Paralysis</label>
                      <Select value={formData.paralysisType} onValueChange={(value) => handleInputChange('paralysisType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select paralysis type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="quadriplegia">Quadriplegia (Complete)</SelectItem>
                          <SelectItem value="paraplegia">Paraplegia (Complete)</SelectItem>
                          <SelectItem value="incomplete">Incomplete Paralysis</SelectItem>
                          <SelectItem value="hemiplegia">Hemiplegia</SelectItem>
                          <SelectItem value="monoplegia">Monoplegia</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Cause of Injury</label>
                      <Select value={formData.causeOfInjury} onValueChange={(value) => handleInputChange('causeOfInjury', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select cause" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="motor-vehicle">Motor Vehicle Accident</SelectItem>
                          <SelectItem value="workplace">Workplace Accident</SelectItem>
                          <SelectItem value="medical">Medical Malpractice</SelectItem>
                          <SelectItem value="fall">Fall/Slip Accident</SelectItem>
                          <SelectItem value="sports">Sports Injury</SelectItem>
                          <SelectItem value="violence">Violence/Assault</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Expected Work Life (Years Remaining)</label>
                      <Input
                        type="number"
                        value={formData.workLifeExpectancy}
                        onChange={(e) => handleInputChange('workLifeExpectancy', e.target.value)}
                        placeholder="30"
                        min="1"
                        max="50"
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Care Requirements */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Care Requirements</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Daily Caregiver Hours</label>
                      <Input
                        type="number"
                        value={formData.caregiverHours}
                        onChange={(e) => handleInputChange('caregiverHours', e.target.value)}
                        placeholder="12"
                        min="0"
                        max="24"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Hourly Caregiver Rate</label>
                      <Input
                        type="number"
                        value={formData.caregiverRate}
                        onChange={(e) => handleInputChange('caregiverRate', e.target.value)}
                        placeholder="$25"
                      />
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={calculateCompensation}
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={!formData.age || !formData.paralysisType}
                >
                  Calculate Compensation
                </Button>

              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div>
            {results ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="w-6 h-6 mr-2 text-green-600" />
                    Estimated Compensation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  
                  {/* Total Estimate */}
                  <div className="text-center p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold mb-2">Total Estimated Value</h3>
                    <p className="text-4xl font-bold text-green-600">
                      {formatCurrency(results.total)}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Based on provided information
                    </p>
                  </div>

                  {/* Breakdown */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Compensation Breakdown</h4>
                    
                    {results.breakdown.map((item, index) => {
                      const IconComponent = item.icon;
                      const percentage = (item.amount / results.total * 100).toFixed(1);
                      
                      return (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center">
                            <IconComponent className="w-5 h-5 mr-3 text-primary" />
                            <div>
                              <p className="font-medium">{item.label}</p>
                              <p className="text-sm text-muted-foreground">{percentage}% of total</p>
                            </div>
                          </div>
                          <p className="font-bold text-lg">
                            {formatCurrency(item.amount)}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 space-y-3">
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => window.location.href = '/practice-areas/paralysis/case-evaluation'}
                    >
                      Get Free Case Evaluation
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.location.href = 'tel:8181234567'}
                    >
                      Call Now: (818) 123-4567
                    </Button>
                  </div>

                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-6 text-center">
                  <Calculator className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Ready to Calculate?</h3>
                  <p className="text-muted-foreground">
                    Fill out the form to get an estimate of potential compensation for your paralysis case.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Important Notice */}
            <Card className="mt-6">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-orange-500 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Important Notice</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• This calculator provides estimates only</li>
                      <li>• Actual settlements vary significantly</li>
                      <li>• Multiple factors affect final compensation</li>
                      <li>• Consult an attorney for accurate assessment</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Factors Affecting Compensation */}
            <Card className="mt-6">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Factors That Increase Compensation</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Clear liability
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Younger age
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    High income
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Complete paralysis
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Multiple dependents
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Adequate insurance
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <Card className="mt-8 border-orange-200 dark:border-orange-800">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <Info className="w-6 h-6 text-orange-500 mt-1" />
              <div>
                <h4 className="font-semibold mb-2 text-orange-700 dark:text-orange-300">Legal Disclaimer</h4>
                <p className="text-sm text-muted-foreground">
                  This compensation calculator is for informational purposes only and does not constitute legal advice. 
                  The estimates provided are based on general factors and may not reflect the actual value of your case. 
                  Every paralysis case is unique, and compensation depends on numerous specific factors including the 
                  severity of injury, available insurance coverage, degree of fault, and jurisdictional laws. 
                  For an accurate assessment of your case value, please consult with a qualified attorney who can 
                  review the specific details of your situation. No attorney-client relationship is formed by using this calculator.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ParalysisCompensationCalculator;