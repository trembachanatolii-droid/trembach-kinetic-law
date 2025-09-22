import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { ArrowLeft, Calculator, DollarSign, AlertTriangle, Info } from 'lucide-react';
import elderAbuseCalculatorHero from '@/assets/elder-abuse-calculator-hero.jpg';

interface GoBackProps {
  onGoBack?: () => void;
  fromSection?: string;
}

const GoBack: React.FC<GoBackProps> = ({ onGoBack, fromSection }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsVisible(scrolled);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleClick = () => {
    if (onGoBack) {
      onGoBack();
    } else if (fromSection) {
      const targetElement = document.getElementById(fromSection);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      window.history.back();
    } else {
      window.history.back();
    }
  };
  
  return (
    <div className={`fixed top-20 left-6 z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <Button 
        variant="ghost" 
        onClick={handleClick}
        className="flex items-center gap-2 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        Go Back
      </Button>
    </div>
  );
};

const ElderAbuseCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    abuseType: '',
    facilityType: '',
    severity: [3],
    age: '',
    medicalExpenses: '',
    ongoingCare: '',
    financialLosses: '',
    painSufferingLevel: [5],
  });

  const [estimation, setEstimation] = useState<{
    lowEnd: number;
    highEnd: number;
    breakdown: any;
  } | null>(null);

  const calculateEstimation = () => {
    let baseAmount = 50000;
    let multiplier = 1;

    // Abuse type factors
    const abuseTypeMultipliers = {
      'physical-abuse': 2.5,
      'sexual-abuse': 3.0,
      'neglect': 2.0,
      'financial-exploitation': 1.8,
      'emotional-abuse': 1.5,
      'abandonment': 2.2,
      'medication-errors': 1.7,
      'multiple-types': 3.5
    };

    // Facility type factors
    const facilityMultipliers = {
      'nursing-home': 2.0,
      'assisted-living': 1.8,
      'memory-care': 2.2,
      'home-care': 1.5,
      'hospital': 2.5,
      'private-home': 1.3
    };

    if (formData.abuseType) {
      multiplier *= abuseTypeMultipliers[formData.abuseType as keyof typeof abuseTypeMultipliers] || 1;
    }

    if (formData.facilityType) {
      multiplier *= facilityMultipliers[formData.facilityType as keyof typeof facilityMultipliers] || 1;
    }

    // Severity impact
    const severityMultiplier = formData.severity[0] * 0.4;
    multiplier *= severityMultiplier;

    // Age impact (older victims often receive higher awards)
    const age = parseInt(formData.age);
    if (age >= 80) multiplier *= 1.3;
    else if (age >= 70) multiplier *= 1.2;
    else if (age >= 65) multiplier *= 1.1;

    // Medical expenses
    const medicalExpenses = parseFloat(formData.medicalExpenses) || 0;
    
    // Ongoing care costs
    const ongoingCare = parseFloat(formData.ongoingCare) || 0;
    
    // Financial losses
    const financialLosses = parseFloat(formData.financialLosses) || 0;

    // Pain and suffering multiplier
    const painSufferingMultiplier = formData.painSufferingLevel[0] * 0.3;

    const baseCompensation = baseAmount * multiplier;
    const economicDamages = medicalExpenses + ongoingCare + financialLosses;
    const painSuffering = baseCompensation * painSufferingMultiplier;

    // Enhanced damages under EADACPA
    const enhancedDamagesMultiplier = 1.5; // Potential for attorney fees and punitive damages
    
    const totalLow = (economicDamages + painSuffering + baseCompensation) * 0.8;
    const totalHigh = (economicDamages + painSuffering + baseCompensation) * enhancedDamagesMultiplier * 2;

    setEstimation({
      lowEnd: Math.round(totalLow),
      highEnd: Math.round(totalHigh),
      breakdown: {
        economic: Math.round(economicDamages),
        painSuffering: Math.round(painSuffering),
        base: Math.round(baseCompensation),
        enhanced: Math.round((totalHigh - totalLow) / 2)
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
    <>
      <Helmet>
        <title>Elder Abuse Compensation Calculator | Trembach Law Firm</title>
        <meta 
          name="description" 
          content="Calculate potential compensation for elder abuse cases in California. Free calculator estimates damages under EADACPA including enhanced remedies and punitive damages."
        />
        <meta name="keywords" content="elder abuse calculator, California compensation, EADACPA damages, nursing home abuse settlement" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Go Back Component */}
        <GoBack />

        {/* Hero Section */}
        <section 
          className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${elderAbuseCalculatorHero})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Elder Abuse Compensation Calculator
            </h1>
            <p className="text-xl text-gray-200 mb-6">
              Get an estimate of your potential elder abuse compensation based on your specific circumstances.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Calculator className="w-4 h-4" />
              <span>Free Estimation Tool</span>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Calculator Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                    Elder Abuse Case Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  {/* Abuse Type */}
                  <div className="space-y-2">
                    <Label htmlFor="abuseType">Type of Abuse</Label>
                    <Select value={formData.abuseType} onValueChange={(value) => setFormData(prev => ({...prev, abuseType: value}))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select abuse type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="physical-abuse">Physical Abuse</SelectItem>
                        <SelectItem value="sexual-abuse">Sexual Abuse</SelectItem>
                        <SelectItem value="neglect">Neglect</SelectItem>
                        <SelectItem value="financial-exploitation">Financial Exploitation</SelectItem>
                        <SelectItem value="emotional-abuse">Emotional Abuse</SelectItem>
                        <SelectItem value="abandonment">Abandonment</SelectItem>
                        <SelectItem value="medication-errors">Medication Errors</SelectItem>
                        <SelectItem value="multiple-types">Multiple Types of Abuse</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Facility Type */}
                  <div className="space-y-2">
                    <Label htmlFor="facilityType">Where did the abuse occur?</Label>
                    <Select value={formData.facilityType} onValueChange={(value) => setFormData(prev => ({...prev, facilityType: value}))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nursing-home">Nursing Home</SelectItem>
                        <SelectItem value="assisted-living">Assisted Living Facility</SelectItem>
                        <SelectItem value="memory-care">Memory Care Facility</SelectItem>
                        <SelectItem value="home-care">Home Care Setting</SelectItem>
                        <SelectItem value="hospital">Hospital</SelectItem>
                        <SelectItem value="private-home">Private Home</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Severity */}
                  <div className="space-y-2">
                    <Label>Severity of Abuse (1 = Minor, 10 = Severe)</Label>
                    <div className="px-2">
                      <Slider
                        value={formData.severity}
                        onValueChange={(value) => setFormData(prev => ({...prev, severity: value}))}
                        max={10}
                        min={1}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-1">
                        <span>Minor</span>
                        <span className="font-medium">Severity: {formData.severity[0]}</span>
                        <span>Severe</span>
                      </div>
                    </div>
                  </div>

                  {/* Age */}
                  <div className="space-y-2">
                    <Label htmlFor="age">Age of Elder</Label>
                    <Input
                      id="age"
                      type="number"
                      value={formData.age}
                      onChange={(e) => setFormData(prev => ({...prev, age: e.target.value}))}
                      placeholder="Enter age"
                      min="65"
                      max="120"
                    />
                  </div>

                  {/* Medical Expenses */}
                  <div className="space-y-2">
                    <Label htmlFor="medicalExpenses">Medical Expenses to Date</Label>
                    <Input
                      id="medicalExpenses"
                      type="number"
                      value={formData.medicalExpenses}
                      onChange={(e) => setFormData(prev => ({...prev, medicalExpenses: e.target.value}))}
                      placeholder="$0.00"
                    />
                  </div>

                  {/* Ongoing Care Costs */}
                  <div className="space-y-2">
                    <Label htmlFor="ongoingCare">Estimated Future Care Costs</Label>
                    <Input
                      id="ongoingCare"
                      type="number"
                      value={formData.ongoingCare}
                      onChange={(e) => setFormData(prev => ({...prev, ongoingCare: e.target.value}))}
                      placeholder="$0.00"
                    />
                  </div>

                  {/* Financial Losses */}
                  <div className="space-y-2">
                    <Label htmlFor="financialLosses">Financial Losses (if applicable)</Label>
                    <Input
                      id="financialLosses"
                      type="number"
                      value={formData.financialLosses}
                      onChange={(e) => setFormData(prev => ({...prev, financialLosses: e.target.value}))}
                      placeholder="$0.00"
                    />
                  </div>

                  {/* Pain and Suffering Level */}
                  <div className="space-y-2">
                    <Label>Impact on Quality of Life (1 = Minimal, 10 = Devastating)</Label>
                    <div className="px-2">
                      <Slider
                        value={formData.painSufferingLevel}
                        onValueChange={(value) => setFormData(prev => ({...prev, painSufferingLevel: value}))}
                        max={10}
                        min={1}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-1">
                        <span>Minimal</span>
                        <span className="font-medium">Impact: {formData.painSufferingLevel[0]}</span>
                        <span>Devastating</span>
                      </div>
                    </div>
                  </div>

                  <Button 
                    onClick={calculateEstimation} 
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={!formData.abuseType || !formData.age}
                  >
                    Calculate Potential Compensation
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Results */}
            <div>
              {estimation ? (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-primary">Estimated Compensation Range</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-center p-6 bg-primary/5 rounded-lg">
                      <div className="text-3xl font-bold text-primary mb-2">
                        {formatCurrency(estimation.lowEnd)} - {formatCurrency(estimation.highEnd)}
                      </div>
                      <p className="text-muted-foreground">Estimated Range</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold">Compensation Breakdown:</h3>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Economic Damages</span>
                          <span className="font-medium">{formatCurrency(estimation.breakdown.economic)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Pain & Suffering</span>
                          <span className="font-medium">{formatCurrency(estimation.breakdown.painSuffering)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Base Compensation</span>
                          <span className="font-medium">{formatCurrency(estimation.breakdown.base)}</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span>Enhanced Damages Potential</span>
                          <span className="font-medium text-primary">{formatCurrency(estimation.breakdown.enhanced)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                      <div className="flex items-start gap-2">
                        <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div className="text-sm">
                          <p className="font-medium text-blue-800 dark:text-blue-200">Enhanced Damages Under EADACPA</p>
                          <p className="text-blue-700 dark:text-blue-300">
                            California's Elder Abuse Act allows for attorney fees, punitive damages, and enhanced remedies when we prove defendants acted with recklessness, fraud, malice, or oppression.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        • Type and severity of elder abuse
                      </p>
                      <p className="text-sm text-muted-foreground">
                        • Location and facility liability factors
                      </p>
                      <p className="text-sm text-muted-foreground">
                        • Medical expenses and ongoing care needs
                      </p>
                      <p className="text-sm text-muted-foreground">
                        • Financial losses and exploitation damages
                      </p>
                      <p className="text-sm text-muted-foreground">
                        • Pain, suffering, and emotional distress
                      </p>
                      <p className="text-sm text-muted-foreground">
                        • Enhanced remedies under California law
                      </p>
                    </div>

                    <div className="pt-4 border-t">
                      <p className="text-sm text-center text-muted-foreground mb-4">
                        For an accurate assessment, schedule a free consultation with our experienced elder abuse attorneys.
                      </p>
                      <Button 
                        className="w-full bg-red-600 hover:bg-red-700 text-white"
                        onClick={() => window.location.href = '/elder-abuse-case-evaluation'}
                      >
                        Get Free Case Evaluation
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="text-center py-12">
                    <Calculator className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Elder Abuse Compensation Calculator</h3>
                    <p className="text-muted-foreground mb-6">
                      Complete the form to calculate your potential compensation under California's Elder Abuse and Dependent Adult Civil Protection Act.
                    </p>
                    <div className="space-y-3 text-sm text-left max-w-md mx-auto">
                      <p>Factors that affect compensation:</p>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Type and severity of elder abuse</li>
                        <li>Location and facility liability factors</li>
                        <li>Medical expenses and ongoing care needs</li>
                        <li>Financial losses and exploitation damages</li>
                        <li>Pain, suffering, and emotional distress</li>
                        <li>Enhanced remedies under California law</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Legal Disclaimer */}
          <Card className="mt-8 border-l-4 border-l-amber-500">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Important Legal Disclaimer</h3>
                  <div className="text-sm text-amber-700 dark:text-amber-300 space-y-2">
                    <p>
                      This calculator provides estimates only and should not be considered legal advice. Actual compensation varies significantly based on specific case circumstances, evidence, and legal factors unique to each situation.
                    </p>
                    <p>
                      California's Elder Abuse and Dependent Adult Civil Protection Act (EADACPA) provides enhanced remedies including attorney fees, punitive damages, and treble damages in certain cases. These estimates incorporate potential enhanced damages but actual awards depend on proving defendants acted with recklessness, fraud, malice, or oppression.
                    </p>
                    <p>
                      For accurate case evaluation, consult with experienced elder abuse attorneys who can assess your specific circumstances and applicable law.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ElderAbuseCalculator;