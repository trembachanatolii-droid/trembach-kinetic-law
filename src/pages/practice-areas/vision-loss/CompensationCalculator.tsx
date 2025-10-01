import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  Star,
  Calculator,
  DollarSign,
  Eye,
  AlertTriangle,
  Info,
  FileText,
  TrendingUp
} from 'lucide-react';

import SEO from '@/components/SEO';

// Import hero image
import heroImage from '@/assets/vision-loss-calculator-hero.jpg';

const VisionLossCompensationCalculator: React.FC = () => {
  const [calculatorData, setCalculatorData] = useState({
    age: '',
    visionLossType: '',
    eyeAffected: '',
    currentVisionLevel: '',
    occupation: '',
    annualIncome: '',
    medicalCosts: '',
    futureCareCosts: '',
    incidentType: '',
    liabilityStrength: '',
    priorVisionProblems: ''
  });

  const [calculationResult, setCalculationResult] = useState<{
    economicDamages: number;
    nonEconomicDamages: number;
    totalEstimate: number;
    range: { low: number; high: number };
  } | null>(null);

  const [showDisclaimer, setShowDisclaimer] = useState(false);

  // Add vision-loss-page class for styling
  useEffect(() => {
    document.body.classList.add('vision-loss-page');
    return () => document.body.classList.remove('vision-loss-page');
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setCalculatorData(prev => ({ ...prev, [field]: value }));
  };

  const calculateCompensation = () => {
    // Base calculations (simplified for demonstration)
    let economicDamages = 0;
    let nonEconomicDamages = 0;

    // Medical costs
    const medicalCosts = parseFloat(calculatorData.medicalCosts) || 0;
    const futureCareCosts = parseFloat(calculatorData.futureCareCosts) || 0;
    
    // Income calculations
    const annualIncome = parseFloat(calculatorData.annualIncome) || 0;
    const age = parseFloat(calculatorData.age) || 0;
    const workingYearsRemaining = Math.max(0, 65 - age);

    // Vision loss multipliers based on severity
    const visionLossMultipliers = {
      'total-blindness': { economic: 0.8, nonEconomic: 8, base: 2000000 },
      'legal-blindness': { economic: 0.6, nonEconomic: 6, base: 1000000 },
      'one-eye-blindness': { economic: 0.3, nonEconomic: 4, base: 500000 },
      'partial-vision-loss': { economic: 0.2, nonEconomic: 3, base: 250000 },
      'peripheral-vision-loss': { economic: 0.15, nonEconomic: 2.5, base: 150000 },
      'double-vision': { economic: 0.25, nonEconomic: 3.5, base: 300000 },
      'night-blindness': { economic: 0.1, nonEconomic: 2, base: 100000 }
    };

    const multiplier = visionLossMultipliers[calculatorData.visionLossType as keyof typeof visionLossMultipliers] || 
                     { economic: 0.1, nonEconomic: 1, base: 50000 };

    // Economic damages calculation
    economicDamages = medicalCosts + futureCareCosts + (annualIncome * workingYearsRemaining * multiplier.economic);

    // Non-economic damages calculation (pain and suffering)
    nonEconomicDamages = Math.max(multiplier.base, economicDamages * multiplier.nonEconomic);

    // Adjustments based on liability strength
    const liabilityMultipliers = {
      'very-strong': 1.0,
      'strong': 0.9,
      'moderate': 0.7,
      'weak': 0.5
    };

    const liabilityMultiplier = liabilityMultipliers[calculatorData.liabilityStrength as keyof typeof liabilityMultipliers] || 0.7;

    economicDamages *= liabilityMultiplier;
    nonEconomicDamages *= liabilityMultiplier;

    const totalEstimate = economicDamages + nonEconomicDamages;

    // Create range (±30%)
    const rangeLow = Math.round(totalEstimate * 0.7);
    const rangeHigh = Math.round(totalEstimate * 1.3);

    setCalculationResult({
      economicDamages: Math.round(economicDamages),
      nonEconomicDamages: Math.round(nonEconomicDamages),
      totalEstimate: Math.round(totalEstimate),
      range: { low: rangeLow, high: rangeHigh }
    });

    setShowDisclaimer(true);
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
    <div className="min-h-screen bg-background vision-loss-page">
      <SEO 
        title="Vision Loss Compensation Calculator | California Eye Injury Damages"
        description="Calculate potential compensation for your vision loss or eye injury claim in California. Free estimation tool from experienced eye injury attorneys. Get your case value estimate."
        keywords="vision loss compensation calculator, eye injury damages, blindness settlement calculator, California vision loss value, eye injury compensation estimate"
        canonical="/practice-areas/vision-loss/compensation-calculator"
      />

      

      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat hero-section"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">
              Vision Loss Compensation Calculator
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg text-white">Trusted by California Families</span>
            </div>
            
            <p className="text-xl mb-6 text-white text-center">
              Get an estimate of your potential vision loss compensation
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Calculator Column */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-2xl text-red-600 flex items-center">
                  <Calculator className="w-6 h-6 mr-2" />
                  Vision Loss Compensation Calculator
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                  Please provide the information below to get an estimate of your potential compensation
                </p>
              </CardHeader>
              
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input 
                      type="number"
                      placeholder="Your Age" 
                      value={calculatorData.age}
                      onChange={(e) => handleInputChange('age', e.target.value)}
                    />
                    <Input 
                      type="number"
                      placeholder="Annual Income ($)" 
                      value={calculatorData.annualIncome}
                      onChange={(e) => handleInputChange('annualIncome', e.target.value)}
                    />
                  </div>

                  {/* Vision Loss Details */}
                  <Select value={calculatorData.visionLossType} onValueChange={(value) => handleInputChange('visionLossType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Type of Vision Loss *" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border shadow-lg z-50">
                      <SelectItem value="total-blindness">Total Blindness</SelectItem>
                      <SelectItem value="legal-blindness">Legal Blindness (20/200 or worse)</SelectItem>
                      <SelectItem value="one-eye-blindness">One Eye Blindness</SelectItem>
                      <SelectItem value="partial-vision-loss">Partial Vision Loss</SelectItem>
                      <SelectItem value="peripheral-vision-loss">Peripheral Vision Loss</SelectItem>
                      <SelectItem value="double-vision">Double Vision (Diplopia)</SelectItem>
                      <SelectItem value="night-blindness">Night Blindness</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={calculatorData.eyeAffected} onValueChange={(value) => handleInputChange('eyeAffected', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Which Eye(s) Affected" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border shadow-lg z-50">
                      <SelectItem value="both-eyes">Both Eyes</SelectItem>
                      <SelectItem value="left-eye">Left Eye Only</SelectItem>
                      <SelectItem value="right-eye">Right Eye Only</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={calculatorData.occupation} onValueChange={(value) => handleInputChange('occupation', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Your Occupation" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border shadow-lg z-50">
                      <SelectItem value="professional">Professional/Executive</SelectItem>
                      <SelectItem value="skilled-worker">Skilled Worker</SelectItem>
                      <SelectItem value="driver">Driver/Transportation</SelectItem>
                      <SelectItem value="construction">Construction/Manual Labor</SelectItem>
                      <SelectItem value="healthcare">Healthcare Worker</SelectItem>
                      <SelectItem value="retail">Retail/Service</SelectItem>
                      <SelectItem value="retired">Retired</SelectItem>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="unemployed">Unemployed</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* Cost Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input 
                      type="number"
                      placeholder="Medical Costs to Date ($)" 
                      value={calculatorData.medicalCosts}
                      onChange={(e) => handleInputChange('medicalCosts', e.target.value)}
                    />
                    <Input 
                      type="number"
                      placeholder="Estimated Future Care Costs ($)" 
                      value={calculatorData.futureCareCosts}
                      onChange={(e) => handleInputChange('futureCareCosts', e.target.value)}
                    />
                  </div>

                  {/* Incident Details */}
                  <Select value={calculatorData.incidentType} onValueChange={(value) => handleInputChange('incidentType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Type of Incident" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border shadow-lg z-50">
                      <SelectItem value="car-accident">Car/Vehicle Accident</SelectItem>
                      <SelectItem value="workplace-injury">Workplace Injury</SelectItem>
                      <SelectItem value="medical-malpractice">Medical Malpractice</SelectItem>
                      <SelectItem value="product-defect">Defective Product</SelectItem>
                      <SelectItem value="chemical-exposure">Chemical Exposure</SelectItem>
                      <SelectItem value="premises-liability">Premises Liability</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={calculatorData.liabilityStrength} onValueChange={(value) => handleInputChange('liabilityStrength', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Strength of Liability Case" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border shadow-lg z-50">
                      <SelectItem value="very-strong">Very Strong - Clear Negligence</SelectItem>
                      <SelectItem value="strong">Strong - Good Evidence</SelectItem>
                      <SelectItem value="moderate">Moderate - Some Questions</SelectItem>
                      <SelectItem value="weak">Weak - Disputed Fault</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={calculatorData.priorVisionProblems} onValueChange={(value) => handleInputChange('priorVisionProblems', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Prior Vision Problems?" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border shadow-lg z-50">
                      <SelectItem value="none">No Prior Problems</SelectItem>
                      <SelectItem value="minor">Minor (Glasses/Contacts)</SelectItem>
                      <SelectItem value="moderate">Moderate Vision Issues</SelectItem>
                      <SelectItem value="significant">Significant Prior Problems</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button 
                    onClick={calculateCompensation}
                    className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-6"
                    disabled={!calculatorData.visionLossType}
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    Calculate My Compensation
                  </Button>
                </div>

                {/* Results */}
                {calculationResult && (
                  <div className="mt-8 space-y-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                        <TrendingUp className="w-5 h-5 mr-2" />
                        Your Estimated Compensation
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">
                            {formatCurrency(calculationResult.economicDamages)}
                          </div>
                          <div className="text-sm text-green-700">Economic Damages</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">
                            {formatCurrency(calculationResult.nonEconomicDamages)}
                          </div>
                          <div className="text-sm text-green-700">Non-Economic Damages</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-800">
                            {formatCurrency(calculationResult.totalEstimate)}
                          </div>
                          <div className="text-sm text-green-700">Total Estimate</div>
                        </div>
                      </div>

                      <div className="text-center">
                        <Badge variant="outline" className="text-lg px-4 py-2">
                          Range: {formatCurrency(calculationResult.range.low)} - {formatCurrency(calculationResult.range.high)}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button 
                        className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                        onClick={() => window.location.href = '/practice-areas/vision-loss/case-evaluation'}
                      >
                        <span className="text-white">Get Free Case Review</span>
                      </Button>
                      <Button 
                        variant="outline"
                        className="flex-1 text-foreground hover:text-foreground"
                        onClick={() => window.location.href = 'tel:8181234567'}
                      >
                        <span className="text-foreground">Call (818) 123-4567</span>
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Legal Disclaimer */}
            {showDisclaimer && (
              <Card className="mt-6 border-yellow-200 bg-yellow-50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Info className="w-5 h-5 text-yellow-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-2">Important Legal Disclaimer</h4>
                      <p className="text-sm text-yellow-700 leading-relaxed">
                        This calculator provides estimates only and should not be considered legal advice. Actual compensation depends on many factors including specific injuries, medical evidence, liability strength, jurisdiction, and negotiation outcomes. Each case is unique. No attorney-client relationship is formed by using this calculator. For accurate case evaluation, consult with an experienced vision loss attorney. Past results do not guarantee future outcomes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              
              {/* Contact Info */}
              <Card className="shadow-lg">
                <CardHeader className="bg-red-50">
                  <CardTitle className="text-lg text-red-600">Get Accurate Case Value</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <p className="text-sm">For a precise evaluation of your vision loss case, speak with our experienced attorneys.</p>
                  
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call (818) 123-4567
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-red-600 text-red-600 hover:bg-red-50"
                    onClick={() => window.location.href = '/practice-areas/vision-loss/case-evaluation'}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Free Case Evaluation
                  </Button>
                </CardContent>
              </Card>

              {/* Factors Affecting Compensation */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Factors Affecting Your Compensation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <DollarSign className="w-4 h-4 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-sm">Severity of Vision Loss</h4>
                        <p className="text-xs text-muted-foreground">Total blindness vs. partial vision loss</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Eye className="w-4 h-4 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-sm">Age and Occupation</h4>
                        <p className="text-xs text-muted-foreground">Impact on earning capacity</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <FileText className="w-4 h-4 text-purple-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-sm">Medical Evidence</h4>
                        <p className="text-xs text-muted-foreground">Documentation and expert testimony</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Compensation Types */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Types of Compensation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm text-green-600">Economic Damages</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Medical expenses</li>
                      <li>• Lost wages</li>
                      <li>• Future care costs</li>
                      <li>• Assistive equipment</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-blue-600">Non-Economic Damages</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Pain and suffering</li>
                      <li>• Loss of enjoyment</li>
                      <li>• Emotional distress</li>
                      <li>• Loss of independence</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Discuss Your Vision Loss Case?</h2>
          <p className="text-lg mb-6 text-white">Get a professional evaluation of your claim value from experienced California vision loss attorneys.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={() => window.location.href = 'tel:8181234567'}
            >
              <span className="text-white">Call (818) 123-4567</span>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/50 text-white hover:bg-white/10 hover:border-white/80 hover:text-white"
              onClick={() => window.location.href = '/practice-areas/vision-loss/case-evaluation'}
            >
              <span className="text-white">Free Case Evaluation</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionLossCompensationCalculator;