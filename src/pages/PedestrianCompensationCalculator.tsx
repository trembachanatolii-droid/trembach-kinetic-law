import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { 
  Phone, 
  Mail, 
  Calculator, 
  DollarSign, 
  AlertTriangle, 
  Info, 
  Star,
  TrendingUp,
  FileText,
  Shield
} from 'lucide-react';
import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import heroBackground from '@/assets/pedestrian-compensation-calculator-hero.jpg';

interface FormData {
  medicalBills: string;
  lostWages: string;
  propertyDamage: string;
  injurySeverity: string;
  painLevel: string;
  ageRange: string;
  faultPercentage: string;
}

interface CalculationResults {
  economicDamages: number;
  nonEconomicDamages: number;
  totalEstimate: number;
  adjustedTotal: number;
  rangeMin: number;
  rangeMax: number;
}

const PedestrianCompensationCalculator = () => {
  const [formData, setFormData] = useState<FormData>({
    medicalBills: '',
    lostWages: '',
    propertyDamage: '',
    injurySeverity: '',
    painLevel: '',
    ageRange: '',
    faultPercentage: '0'
  });

  const [results, setResults] = useState<CalculationResults | null>(null);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear results when input changes
    if (results) {
      setResults(null);
    }
  };

  const calculateCompensation = () => {
    const medicalBills = parseFloat(formData.medicalBills) || 0;
    const lostWages = parseFloat(formData.lostWages) || 0;
    const propertyDamage = parseFloat(formData.propertyDamage) || 0;
    
    // Economic damages calculation
    const economicDamages = medicalBills + lostWages + propertyDamage;
    
    // Non-economic damages calculation based on injury severity and pain level
    let nonEconomicMultiplier = 1.5; // Base multiplier
    
    // Adjust for injury severity
    switch(formData.injurySeverity) {
      case 'minor':
        nonEconomicMultiplier = 1.5;
        break;
      case 'moderate':
        nonEconomicMultiplier = 2.5;
        break;
      case 'severe':
        nonEconomicMultiplier = 4.0;
        break;
      case 'catastrophic':
        nonEconomicMultiplier = 6.0;
        break;
    }
    
    // Adjust for pain level
    switch(formData.painLevel) {
      case 'mild':
        nonEconomicMultiplier *= 0.8;
        break;
      case 'moderate':
        nonEconomicMultiplier *= 1.0;
        break;
      case 'severe':
        nonEconomicMultiplier *= 1.3;
        break;
      case 'extreme':
        nonEconomicMultiplier *= 1.6;
        break;
    }
    
    // Age adjustment (younger people typically get higher awards)
    switch(formData.ageRange) {
      case 'under-25':
        nonEconomicMultiplier *= 1.2;
        break;
      case '25-45':
        nonEconomicMultiplier *= 1.1;
        break;
      case '46-65':
        nonEconomicMultiplier *= 1.0;
        break;
      case 'over-65':
        nonEconomicMultiplier *= 1.1; // Elderly may get higher awards due to fragility
        break;
    }
    
    const nonEconomicDamages = economicDamages * nonEconomicMultiplier;
    const totalEstimate = economicDamages + nonEconomicDamages;
    
    // Apply fault percentage reduction
    const faultPercentage = parseFloat(formData.faultPercentage) || 0;
    const adjustedTotal = totalEstimate * (1 - faultPercentage / 100);
    
    // Create range (± 30%)
    const rangeMin = adjustedTotal * 0.7;
    const rangeMax = adjustedTotal * 1.3;
    
    setResults({
      economicDamages,
      nonEconomicDamages,
      totalEstimate,
      adjustedTotal,
      rangeMin,
      rangeMax
    });
  };

  const formatCurrency = (amount: number): string => {
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
        title="Pedestrian Accident Compensation Calculator | California Estimates"
        description="Calculate potential compensation for your California pedestrian accident. Free calculator estimates economic damages, pain and suffering, and total compensation range."
        canonical="/pedestrian-compensation-calculator"
      />
      
      <Navigation />

      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Pedestrian Accident Compensation Calculator
          </h1>
          <p className="text-xl opacity-90 mb-6">
            Estimate potential compensation for your California pedestrian accident injuries
          </p>
          <div className="flex items-center justify-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
            ))}
            <span className="ml-2">Free & Confidential Calculator</span>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="bg-yellow-50 border-y border-yellow-200 py-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center">
            <Info className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0" />
            <p className="text-sm text-yellow-800">
              <strong>Important:</strong> This calculator provides estimates only. Actual compensation depends on many factors 
              including case-specific details, available insurance, and legal representation. Consult with an attorney for accurate case evaluation.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Calculator Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="flex items-center text-2xl text-red-600">
                  <Calculator className="w-6 h-6 mr-3" />
                  Compensation Calculator
                </CardTitle>
                <p className="text-muted-foreground">
                  Enter your pedestrian accident details to estimate potential compensation. All information is confidential.
                </p>
              </CardHeader>

              <CardContent className="px-0">
                <div className="space-y-8">
                  
                  {/* Economic Damages */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <DollarSign className="w-5 h-5 text-red-600 mr-2" />
                      Economic Damages
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="medical-bills" className="text-sm font-medium">
                          Medical Bills & Future Care
                        </Label>
                        <Input
                          id="medical-bills"
                          type="number"
                          placeholder="$25,000"
                          value={formData.medicalBills}
                          onChange={(e) => handleInputChange('medicalBills', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="lost-wages" className="text-sm font-medium">
                          Lost Wages & Future Income
                        </Label>
                        <Input
                          id="lost-wages"
                          type="number"
                          placeholder="$15,000"
                          value={formData.lostWages}
                          onChange={(e) => handleInputChange('lostWages', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="property-damage" className="text-sm font-medium">
                          Property Damage
                        </Label>
                        <Input
                          id="property-damage"
                          type="number"
                          placeholder="$500"
                          value={formData.propertyDamage}
                          onChange={(e) => handleInputChange('propertyDamage', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Injury Details */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <TrendingUp className="w-5 h-5 text-red-600 mr-2" />
                      Injury Severity & Impact
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm font-medium">Injury Severity Level</Label>
                        <Select value={formData.injurySeverity} onValueChange={(value) => handleInputChange('injurySeverity', value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select severity" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="minor">Minor (cuts, bruises, minor fractures)</SelectItem>
                            <SelectItem value="moderate">Moderate (significant fractures, concussion)</SelectItem>
                            <SelectItem value="severe">Severe (major surgeries, long-term disability)</SelectItem>
                            <SelectItem value="catastrophic">Catastrophic (paralysis, brain injury, amputation)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label className="text-sm font-medium">Pain & Suffering Level</Label>
                        <Select value={formData.painLevel} onValueChange={(value) => handleInputChange('painLevel', value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select pain level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mild">Mild (manageable with over-the-counter medication)</SelectItem>
                            <SelectItem value="moderate">Moderate (requires prescription pain management)</SelectItem>
                            <SelectItem value="severe">Severe (chronic pain, significant life impact)</SelectItem>
                            <SelectItem value="extreme">Extreme (debilitating pain, constant medical care)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Personal Factors */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Personal Factors</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm font-medium">Age Range</Label>
                        <Select value={formData.ageRange} onValueChange={(value) => handleInputChange('ageRange', value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select age range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-25">Under 25</SelectItem>
                            <SelectItem value="25-45">25-45</SelectItem>
                            <SelectItem value="46-65">46-65</SelectItem>
                            <SelectItem value="over-65">Over 65</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label className="text-sm font-medium">Your Fault Percentage (if any)</Label>
                        <Select value={formData.faultPercentage} onValueChange={(value) => handleInputChange('faultPercentage', value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select fault percentage" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0">0% (no fault)</SelectItem>
                            <SelectItem value="10">10% (minimal fault)</SelectItem>
                            <SelectItem value="20">20% (some fault)</SelectItem>
                            <SelectItem value="30">30% (moderate fault)</SelectItem>
                            <SelectItem value="40">40% (significant fault)</SelectItem>
                            <SelectItem value="50">50% (equal fault)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Calculate Button */}
                  <div className="pt-6 border-t">
                    <Button 
                      onClick={calculateCompensation}
                      className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-lg px-8 py-3"
                      disabled={!formData.medicalBills || !formData.injurySeverity}
                    >
                      <Calculator className="w-5 h-5 mr-2" />
                      Calculate Estimated Compensation
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            {results && (
              <Card className="mt-8 p-8 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl text-green-700">Estimated Compensation Results</CardTitle>
                  <p className="text-muted-foreground">
                    Based on your inputs, here's your estimated compensation range:
                  </p>
                </CardHeader>
                
                <CardContent className="px-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                        <span className="font-medium">Economic Damages:</span>
                        <span className="font-bold text-lg">{formatCurrency(results.economicDamages)}</span>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                        <span className="font-medium">Pain & Suffering:</span>
                        <span className="font-bold text-lg">{formatCurrency(results.nonEconomicDamages)}</span>
                      </div>
                      
                      {formData.faultPercentage !== '0' && (
                        <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-lg border-yellow-200 border">
                          <span className="font-medium">Fault Adjustment ({formData.faultPercentage}%):</span>
                          <span className="font-bold text-lg text-yellow-700">
                            -{formatCurrency(results.totalEstimate - results.adjustedTotal)}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-4">
                      <div className="p-6 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg text-center">
                        <div className="text-sm opacity-90 mb-2">Total Estimated Compensation</div>
                        <div className="text-3xl font-bold">{formatCurrency(results.adjustedTotal)}</div>
                      </div>
                      
                      <div className="p-4 bg-white rounded-lg border-2 border-green-200">
                        <div className="text-sm text-muted-foreground mb-2">Typical Range:</div>
                        <div className="font-bold text-lg text-center">
                          {formatCurrency(results.rangeMin)} - {formatCurrency(results.rangeMax)}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Next Steps:</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Consult with an experienced pedestrian accident attorney</li>
                      <li>• Gather all medical records and documentation</li>
                      <li>• Don't accept early settlement offers without legal review</li>
                      <li>• Continue medical treatment as recommended</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Contact Card */}
              <Card className="bg-gradient-to-b from-red-50 to-red-100 border-red-200">
                <CardHeader className="text-center">
                  <CardTitle className="text-red-600">Get Professional Evaluation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call (818) 123-4567
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-red-200 text-red-600 hover:bg-red-50"
                    onClick={() => window.location.href = '/pedestrian-case-evaluation'}
                  >
                    Free Case Evaluation
                  </Button>
                  
                  <div className="text-center text-sm text-muted-foreground pt-4 border-t">
                    <p className="font-semibold">No Fees Unless We Win</p>
                    <p>Former Defense Attorney</p>
                    <p>Available 24/7</p>
                  </div>
                </CardContent>
              </Card>

              {/* Factors Affecting Compensation */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-red-600">Factors Affecting Compensation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <FileText className="w-5 h-5 text-red-600 mt-1 mr-3" />
                    <div>
                      <div className="font-semibold text-sm">Injury Severity</div>
                      <div className="text-xs text-muted-foreground">More severe injuries typically result in higher compensation</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-red-600 mt-1 mr-3" />
                    <div>
                      <div className="font-semibold text-sm">Available Insurance</div>
                      <div className="text-xs text-muted-foreground">Driver's coverage limits and your UM/UIM coverage</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-red-600 mt-1 mr-3" />
                    <div>
                      <div className="font-semibold text-sm">Legal Representation</div>
                      <div className="text-xs text-muted-foreground">Attorneys typically increase settlement values 3-5 times</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Economic vs Non-Economic */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-red-600">Understanding Damages</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Economic Damages:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Medical bills and future care</li>
                      <li>• Lost wages and earning capacity</li>
                      <li>• Property damage</li>
                      <li>• Transportation costs</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Non-Economic Damages:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Pain and suffering</li>
                      <li>• Emotional distress</li>
                      <li>• Loss of enjoyment of life</li>
                      <li>• Disfigurement and scarring</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Important Notes */}
              <Card className="bg-yellow-50 border-yellow-200">
                <CardContent className="pt-6">
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-yellow-800">Important for Pedestrian Cases:</h4>
                      <ul className="text-xs text-yellow-700 space-y-1">
                        <li>• California's comparative negligence allows recovery even if partially at fault</li>
                        <li>• No caps on non-economic damages for pedestrian accidents</li>
                        <li>• Multiple insurance sources may apply</li>
                        <li>• Government liability possible for dangerous conditions</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't Accept Less Than You Deserve
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Insurance companies often offer far less than fair compensation. Our former defense attorney 
            knows their tactics and fights for maximum recovery for pedestrian accident victims.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white text-red-600 hover:bg-red-50 border-white text-lg px-8 py-4"
              onClick={() => window.location.href = '/pedestrian-case-evaluation'}
            >
              Get Professional Case Evaluation
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10 text-lg px-8 py-4"
              onClick={() => window.location.href = 'tel:8181234567'}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (818) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PedestrianCompensationCalculator;