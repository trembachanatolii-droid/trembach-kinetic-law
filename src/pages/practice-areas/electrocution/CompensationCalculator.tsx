import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Calculator, DollarSign, AlertTriangle, TrendingUp, Star, Info } from 'lucide-react';
import GoBack from '@/components/GoBack';
import heroImage from '@/assets/electrocution-compensation-calculator.jpg';
import SEO from '@/components/SEO';

const ElectrocutionCompensationCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    age: '',
    income: '',
    injuryType: '',
    severity: '',
    medicalExpenses: '',
    hospitalization: '',
    permanentDisability: '',
    workDaysLost: '',
    futureEarnings: '',
    location: 'california'
  });

  const [estimate, setEstimate] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateEstimate = () => {
    // Base calculation factors
    let baseAmount = 0;
    let multiplier = 1;

    // Age factor (younger victims typically receive higher awards)
    const age = parseInt(formData.age) || 0;
    if (age < 30) multiplier += 0.3;
    else if (age < 45) multiplier += 0.2;
    else if (age < 60) multiplier += 0.1;

    // Income factor
    const income = parseInt(formData.income) || 0;
    const lostEarnings = income * 0.7; // Estimate 70% of income for lost earnings
    baseAmount += lostEarnings;

    // Injury type factor
    switch (formData.injuryType) {
      case 'electrical-burns':
        multiplier += 0.4;
        baseAmount += 75000;
        break;
      case 'arc-flash':
        multiplier += 0.6;
        baseAmount += 150000;
        break;
      case 'cardiac-arrest':
        multiplier += 0.8;
        baseAmount += 200000;
        break;
      case 'neurological':
        multiplier += 0.7;
        baseAmount += 125000;
        break;
      case 'amputation':
        multiplier += 0.9;
        baseAmount += 250000;
        break;
      case 'multiple-injuries':
        multiplier += 1.0;
        baseAmount += 300000;
        break;
      default:
        baseAmount += 50000;
    }

    // Severity factor
    switch (formData.severity) {
      case 'minor':
        multiplier += 0.1;
        break;
      case 'moderate':
        multiplier += 0.3;
        break;
      case 'severe':
        multiplier += 0.6;
        break;
      case 'catastrophic':
        multiplier += 1.0;
        break;
    }

    // Medical expenses
    const medicalExpenses = parseInt(formData.medicalExpenses) || 0;
    baseAmount += medicalExpenses * 3; // Medical expenses typically multiplied for pain & suffering

    // Hospitalization factor
    if (formData.hospitalization === 'yes') {
      multiplier += 0.2;
      baseAmount += 25000;
    }

    // Permanent disability
    if (formData.permanentDisability === 'yes') {
      multiplier += 0.5;
      baseAmount += 100000;
    }

    // Work days lost
    const workDaysLost = parseInt(formData.workDaysLost) || 0;
    if (income > 0) {
      const dailyIncome = income / 365;
      baseAmount += dailyIncome * workDaysLost;
    }

    // Future earnings impact
    switch (formData.futureEarnings) {
      case 'none':
        break;
      case 'reduced':
        multiplier += 0.3;
        baseAmount += income * 2; // 2 years of income
        break;
      case 'unable':
        multiplier += 0.8;
        baseAmount += income * 10; // 10 years of income
        break;
    }

    const finalEstimate = Math.round(baseAmount * multiplier);
    setEstimate(Math.max(finalEstimate, 10000)); // Minimum estimate
    setShowResults(true);
  };

  const resetCalculator = () => {
    setFormData({
      age: '',
      income: '',
      injuryType: '',
      severity: '',
      medicalExpenses: '',
      hospitalization: '',
      permanentDisability: '',
      workDaysLost: '',
      futureEarnings: '',
      location: 'california'
    });
    setEstimate(null);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Electrocution Compensation Calculator | California Electrical Injury Value"
        description="Calculate potential compensation for your California electrocution injury case. Free electrical injury settlement estimator from experienced attorneys."
        keywords="electrocution compensation calculator, electrical injury settlement, California electrical accident value"
        canonical="/practice-areas/electrocution/compensation-calculator"
      />

      <GoBack fallbackPath="/practice-areas/electrocution" />

      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Electrocution Compensation Calculator
          </h1>
          <div className="flex items-center justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
            ))}
            <span className="ml-2">Free Case Valuation</span>
          </div>
          <p className="text-xl">
            Estimate your potential electrical injury compensation in California
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Calculator Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-6 h-6" />
                  Case Value Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="age">Your Age</Label>
                      <Input
                        id="age"
                        type="number"
                        value={formData.age}
                        onChange={(e) => handleInputChange('age', e.target.value)}
                        placeholder="Enter your age"
                      />
                    </div>
                    <div>
                      <Label htmlFor="income">Annual Income ($)</Label>
                      <Input
                        id="income"
                        type="number"
                        value={formData.income}
                        onChange={(e) => handleInputChange('income', e.target.value)}
                        placeholder="Annual salary/income"
                      />
                    </div>
                  </div>
                </div>

                {/* Injury Details */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Injury Details</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="injuryType">Primary Injury Type</Label>
                      <Select value={formData.injuryType} onValueChange={(value) => handleInputChange('injuryType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select injury type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="electrical-burns">Electrical Burns</SelectItem>
                          <SelectItem value="arc-flash">Arc Flash Burns</SelectItem>
                          <SelectItem value="cardiac-arrest">Cardiac Arrest/Heart Problems</SelectItem>
                          <SelectItem value="neurological">Neurological Damage</SelectItem>
                          <SelectItem value="amputation">Amputation</SelectItem>
                          <SelectItem value="multiple-injuries">Multiple Severe Injuries</SelectItem>
                          <SelectItem value="other">Other Electrical Injury</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Injury Severity</Label>
                      <RadioGroup 
                        value={formData.severity} 
                        onValueChange={(value) => handleInputChange('severity', value)}
                        className="mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="minor" id="minor" />
                          <Label htmlFor="minor">Minor (outpatient treatment)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="moderate" id="moderate" />
                          <Label htmlFor="moderate">Moderate (hospitalization required)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="severe" id="severe" />
                          <Label htmlFor="severe">Severe (extensive treatment/surgery)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="catastrophic" id="catastrophic" />
                          <Label htmlFor="catastrophic">Catastrophic (life-altering/disabling)</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>

                {/* Financial Impact */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Financial Impact</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="medicalExpenses">Medical Expenses to Date ($)</Label>
                      <Input
                        id="medicalExpenses"
                        type="number"
                        value={formData.medicalExpenses}
                        onChange={(e) => handleInputChange('medicalExpenses', e.target.value)}
                        placeholder="Total medical bills"
                      />
                    </div>

                    <div>
                      <Label htmlFor="workDaysLost">Work Days Lost</Label>
                      <Input
                        id="workDaysLost"
                        type="number"
                        value={formData.workDaysLost}
                        onChange={(e) => handleInputChange('workDaysLost', e.target.value)}
                        placeholder="Days unable to work"
                      />
                    </div>

                    <div>
                      <Label>Were you hospitalized?</Label>
                      <RadioGroup 
                        value={formData.hospitalization} 
                        onValueChange={(value) => handleInputChange('hospitalization', value)}
                        className="mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="hosp-yes" />
                          <Label htmlFor="hosp-yes">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="hosp-no" />
                          <Label htmlFor="hosp-no">No</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label>Do you have permanent disability?</Label>
                      <RadioGroup 
                        value={formData.permanentDisability} 
                        onValueChange={(value) => handleInputChange('permanentDisability', value)}
                        className="mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="disability-yes" />
                          <Label htmlFor="disability-yes">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="disability-no" />
                          <Label htmlFor="disability-no">No</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="unknown" id="disability-unknown" />
                          <Label htmlFor="disability-unknown">Unknown</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label>Future Earning Capacity</Label>
                      <RadioGroup 
                        value={formData.futureEarnings} 
                        onValueChange={(value) => handleInputChange('futureEarnings', value)}
                        className="mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="none" id="earnings-none" />
                          <Label htmlFor="earnings-none">No impact on future earnings</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="reduced" id="earnings-reduced" />
                          <Label htmlFor="earnings-reduced">Reduced earning capacity</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="unable" id="earnings-unable" />
                          <Label htmlFor="earnings-unable">Unable to work</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>

                {/* Calculate Button */}
                <div className="flex gap-4">
                  <Button onClick={calculateEstimate} className="flex-1">
                    <Calculator className="w-4 h-4 mr-2" />
                    Calculate Estimate
                  </Button>
                  <Button variant="outline" onClick={resetCalculator}>
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results & Information */}
          <div className="space-y-6">
            
            {/* Results Card */}
            {showResults && (
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <DollarSign className="w-6 h-6" />
                    Estimated Compensation Range
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-primary mb-2">
                    ${estimate ? (estimate * 0.7).toLocaleString() : '0'} - ${estimate ? (estimate * 1.5).toLocaleString() : '0'}
                    </div>
                    <p className="text-muted-foreground">Estimated compensation range</p>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <p><strong>Base Estimate:</strong> ${estimate?.toLocaleString()}</p>
                    <p className="text-green-600"><strong>Conservative Range:</strong> 70% of base estimate</p>
                    <p className="text-blue-600"><strong>Optimistic Range:</strong> 150% of base estimate</p>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Info className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <p className="font-semibold text-yellow-800 mb-1">Important Note:</p>
                        <p className="text-yellow-700">
                          This is only an estimate. Actual compensation depends on many factors including 
                          liability, insurance coverage, and case-specific circumstances. Consult with an 
                          experienced attorney for accurate case valuation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-3">
                    <Button className="flex-1" size="sm">
                      Free Case Review
                    </Button>
                    <Button variant="outline" size="sm">
                      Call (818) 123-4567
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Factors Affecting Compensation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6" />
                  Factors Affecting Electrocution Compensation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Economic Damages</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Medical expenses (past and future)</li>
                      <li>• Lost wages and benefits</li>
                      <li>• Reduced earning capacity</li>
                      <li>• Rehabilitation costs</li>
                      <li>• Home modifications</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Non-Economic Damages</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Pain and suffering</li>
                      <li>• Emotional distress</li>
                      <li>• Loss of life enjoyment</li>
                      <li>• Disfigurement/scarring</li>
                      <li>• Loss of consortium</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Case Strength Factors</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Clear liability/negligence</li>
                      <li>• Safety violations</li>
                      <li>• Available insurance coverage</li>
                      <li>• Quality of evidence</li>
                      <li>• Expert witness testimony</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Average Settlements */}
            <Card>
              <CardHeader>
                <CardTitle>California Electrical Injury Averages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-muted rounded">
                    <span className="font-medium">Minor Burns</span>
                    <span className="text-green-600 font-semibold">$15K - $75K</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded">
                    <span className="font-medium">Severe Burns</span>
                    <span className="text-blue-600 font-semibold">$100K - $500K</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded">
                    <span className="font-medium">Neurological Damage</span>
                    <span className="text-orange-600 font-semibold">$250K - $1M+</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded">
                    <span className="font-medium">Wrongful Death</span>
                    <span className="text-red-600 font-semibold">$500K - $5M+</span>
                  </div>
                </div>
                
                <div className="mt-4 text-sm text-muted-foreground">
                  <p>* Ranges based on California case settlements and verdicts from 2020-2024</p>
                </div>
              </CardContent>
            </Card>

            {/* Warning */}
            <Card className="border-destructive/20 bg-destructive/5">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold text-destructive mb-1">Time Limits Apply</p>
                    <p className="text-destructive/80">
                      California has a 2-year statute of limitations for electrical injury cases. 
                      Don't wait - contact an attorney immediately to protect your rights.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-3">Legal Disclaimer</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This calculator provides estimates only and does not constitute legal advice. Actual compensation 
              depends on numerous factors including the specific facts of your case, applicable laws, insurance 
              coverage, and the skill of your attorney. Past results do not guarantee future outcomes. 
              For accurate case valuation, consult with an experienced California electrical injury attorney. 
              This tool is for informational purposes only and using it does not create an attorney-client relationship.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ElectrocutionCompensationCalculator;