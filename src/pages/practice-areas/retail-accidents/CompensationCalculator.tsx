import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Phone, 
  Calculator, 
  DollarSign, 
  AlertTriangle,
  Info,
  TrendingUp,
  FileText,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';
import '../../../styles/retail-accidents.css';
import heroBackground from '@/assets/practice-areas/retail-compensation-calculator.jpg';

interface CalculatorData {
  injurySeverity: string;
  medicalExpenses: string;
  lostWages: string;
  ageRange: string;
  employmentStatus: string;
  accidentType: string;
  recoveryTime: string;
  permanentImpairment: string;
}

const CompensationCalculator: React.FC = () => {
  const [formData, setFormData] = useState<CalculatorData>({
    injurySeverity: '',
    medicalExpenses: '',
    lostWages: '',
    ageRange: '',
    employmentStatus: '',
    accidentType: '',
    recoveryTime: '',
    permanentImpairment: ''
  });

  const [results, setResults] = useState<{
    lowEstimate: number;
    highEstimate: number;
    calculated: boolean;
  }>({
    lowEstimate: 0,
    highEstimate: 0,
    calculated: false
  });

  const handleInputChange = (field: keyof CalculatorData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateCompensation = () => {
    // Base calculation logic
    const medicalExpenses = parseFloat(formData.medicalExpenses) || 0;
    const lostWages = parseFloat(formData.lostWages) || 0;
    
    // Multiplier based on injury severity
    let severityMultiplier = 1.5;
    switch (formData.injurySeverity) {
      case 'minor':
        severityMultiplier = 1.5;
        break;
      case 'moderate':
        severityMultiplier = 2.5;
        break;
      case 'severe':
        severityMultiplier = 4;
        break;
      case 'catastrophic':
        severityMultiplier = 6;
        break;
    }

    // Age factor
    let ageFactor = 1;
    switch (formData.ageRange) {
      case '18-30':
        ageFactor = 1.3;
        break;
      case '31-50':
        ageFactor = 1.2;
        break;
      case '51-65':
        ageFactor = 1.1;
        break;
      case '65+':
        ageFactor = 1;
        break;
    }

    // Recovery time factor
    let recoveryFactor = 1;
    switch (formData.recoveryTime) {
      case 'days':
        recoveryFactor = 1;
        break;
      case 'weeks':
        recoveryFactor = 1.5;
        break;
      case 'months':
        recoveryFactor = 2.5;
        break;
      case 'permanent':
        recoveryFactor = 4;
        break;
    }

    // Permanent impairment factor
    let impairmentFactor = 1;
    if (formData.permanentImpairment === 'yes') {
      impairmentFactor = 2.5;
    }

    // Calculate base economic damages
    const economicDamages = medicalExpenses + lostWages;
    
    // Calculate pain and suffering (non-economic damages)
    const painAndSuffering = economicDamages * severityMultiplier * ageFactor * recoveryFactor * impairmentFactor;
    
    // Total compensation range
    const lowEstimate = Math.max(economicDamages + painAndSuffering * 0.7, 5000);
    const highEstimate = economicDamages + painAndSuffering * 1.5;

    setResults({
      lowEstimate: Math.round(lowEstimate),
      highEstimate: Math.round(highEstimate),
      calculated: true
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const isFormComplete = () => {
    const requiredFields: (keyof CalculatorData)[] = [
      'injurySeverity', 
      'medicalExpenses', 
      'ageRange', 
      'accidentType', 
      'recoveryTime'
    ];
    return requiredFields.every(field => formData[field]);
  };

  return (
        <div className="retail-accidents-page">
          {/* 3D Background Layers */}
          <div className="floating-layer-back"></div>
          <div className="floating-layer-mid"></div>
          <div className="floating-layer-front"></div>
      <SEO
        title="Retail Store Accident Compensation Calculator | California | Trembach Law Firm"
        description="Calculate your potential compensation for retail store accidents in California. Free tool from experienced slip and fall attorneys. Get estimated settlement amounts."
        keywords="retail accident compensation calculator, slip fall settlement calculator, California premises liability damages, shopping injury compensation"
      />

      <GoBack fallbackPath="/practice-areas/retail-accidents" />

      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Retail Accident Compensation Calculator
          </h1>
          <p className="text-xl mb-6 text-white">
            Get an Estimate of Your Potential Settlement for California Retail Store Accidents
          </p>
          <div className="flex items-center justify-center gap-2">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="ml-2 text-white">Free Estimate Tool</span>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Calculator Form */}
          <div className="lg:col-span-2">
            <Card className="glass-card p-8">
              <CardHeader className="text-center pb-6">
                <CardTitle className="flex items-center justify-center gap-2 text-2xl text-primary">
                  <Calculator className="w-6 h-6" />
                  California Retail Accident Calculator
                </CardTitle>
                <p className="text-muted-foreground">
                  Answer the questions below to get an estimate of your potential compensation
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Injury Severity */}
                <div>
                  <Label htmlFor="injurySeverity">How would you describe your injury severity? *</Label>
                  <Select value={formData.injurySeverity} onValueChange={(value) => handleInputChange('injurySeverity', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select injury severity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="minor">Minor (bruises, minor cuts, brief pain)</SelectItem>
                      <SelectItem value="moderate">Moderate (sprains, fractures, ongoing pain)</SelectItem>
                      <SelectItem value="severe">Severe (surgery required, significant disability)</SelectItem>
                      <SelectItem value="catastrophic">Catastrophic (permanent disability, life-changing)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Medical Expenses */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="medicalExpenses">Medical Expenses to Date *</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="medicalExpenses"
                        type="number"
                        className="pl-10"
                        value={formData.medicalExpenses}
                        onChange={(e) => handleInputChange('medicalExpenses', e.target.value)}
                        placeholder="0"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="lostWages">Lost Wages</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="lostWages"
                        type="number"
                        className="pl-10"
                        value={formData.lostWages}
                        onChange={(e) => handleInputChange('lostWages', e.target.value)}
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>

                {/* Age Range */}
                <div>
                  <Label htmlFor="ageRange">Your Age Range *</Label>
                  <Select value={formData.ageRange} onValueChange={(value) => handleInputChange('ageRange', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select age range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="18-30">18-30 years old</SelectItem>
                      <SelectItem value="31-50">31-50 years old</SelectItem>
                      <SelectItem value="51-65">51-65 years old</SelectItem>
                      <SelectItem value="65+">Over 65 years old</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Employment Status */}
                <div>
                  <Label htmlFor="employmentStatus">Employment Status</Label>
                  <Select value={formData.employmentStatus} onValueChange={(value) => handleInputChange('employmentStatus', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select employment status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time employed</SelectItem>
                      <SelectItem value="part-time">Part-time employed</SelectItem>
                      <SelectItem value="self-employed">Self-employed</SelectItem>
                      <SelectItem value="unemployed">Unemployed</SelectItem>
                      <SelectItem value="retired">Retired</SelectItem>
                      <SelectItem value="student">Student</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Accident Type */}
                <div>
                  <Label htmlFor="accidentType">Type of Retail Accident *</Label>
                  <Select value={formData.accidentType} onValueChange={(value) => handleInputChange('accidentType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select accident type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="slip-fall">Slip and Fall</SelectItem>
                      <SelectItem value="falling-merchandise">Falling Merchandise</SelectItem>
                      <SelectItem value="trip-fall">Trip and Fall</SelectItem>
                      <SelectItem value="shopping-cart">Shopping Cart Accident</SelectItem>
                      <SelectItem value="inadequate-lighting">Poor Lighting</SelectItem>
                      <SelectItem value="negligent-security">Security Related</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Recovery Time */}
                <div>
                  <Label htmlFor="recoveryTime">Expected Recovery Time *</Label>
                  <Select value={formData.recoveryTime} onValueChange={(value) => handleInputChange('recoveryTime', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select recovery time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="days">Days to weeks</SelectItem>
                      <SelectItem value="weeks">Weeks to months</SelectItem>
                      <SelectItem value="months">Several months</SelectItem>
                      <SelectItem value="permanent">Permanent impairment</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Permanent Impairment */}
                <div>
                  <Label htmlFor="permanentImpairment">Do you have any permanent impairment?</Label>
                  <Select value={formData.permanentImpairment} onValueChange={(value) => handleInputChange('permanentImpairment', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="no">No permanent impairment</SelectItem>
                      <SelectItem value="yes">Yes, permanent impairment</SelectItem>
                      <SelectItem value="uncertain">Too early to determine</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Calculate Button */}
                <div className="pt-4">
                  <Button 
                    onClick={calculateCompensation}
                    disabled={!isFormComplete()}
                    className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg"
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    Calculate My Compensation
                  </Button>
                </div>

                {/* Results */}
                {results.calculated && (
                  <Card className="mt-8 glass-card bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-green-800">
                        <TrendingUp className="w-5 h-5" />
                        Your Estimated Compensation Range
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="text-center p-4 bg-white rounded-lg border border-green-200">
                          <p className="text-sm text-muted-foreground mb-1">Minimum Estimate</p>
                          <p className="text-2xl font-bold text-green-600">{formatCurrency(results.lowEstimate)}</p>
                        </div>
                        <div className="text-center p-4 bg-white rounded-lg border border-green-200">
                          <p className="text-sm text-muted-foreground mb-1">Maximum Estimate</p>
                          <p className="text-2xl font-bold text-green-600">{formatCurrency(results.highEstimate)}</p>
                        </div>
                      </div>
                      
                      <Alert className="border-green-200 bg-green-50">
                        <Info className="h-4 w-4" />
                        <AlertDescription>
                          This is an estimate based on typical California retail accident settlements. 
                          Your actual compensation may vary based on specific case factors.
                        </AlertDescription>
                      </Alert>
                      
                      <div className="mt-6 text-center">
                        <Button asChild className="bg-green-600 hover:bg-green-700">
                          <Link to="/practice-areas/retail-accidents/case-evaluation">
                            Get Professional Case Review
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>

            {/* Legal Disclaimer */}
            <Card className="glass-card mt-6 p-6 border-amber-200 bg-amber-50">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">Important Legal Disclaimer</h3>
                  <p className="text-sm text-amber-700">
                    This calculator provides estimates based on general settlement patterns and should not be considered legal advice. 
                    Actual compensation depends on many factors including liability, evidence, jurisdiction, and case-specific circumstances. 
                    For an accurate assessment, schedule a free consultation with our experienced retail accident attorneys. 
                    No attorney-client relationship is formed by using this calculator.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-32 space-y-6">
              
              {/* Contact Card */}
              <Card className="glass-card p-6 bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
                <h3 className="text-xl font-bold text-center mb-4 text-primary">Ready to Start Your Case?</h3>
                
                <div className="space-y-3">
                  <Button 
                    asChild
                    className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-3"
                  >
                    <a href="tel:(818) 123-4567" className="flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      Call (818) 123-4567
                    </a>
                  </Button>
                  
                  <Button 
                    asChild
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-3"
                  >
                    <Link to="/practice-areas/retail-accidents/case-evaluation" className="flex items-center justify-center gap-2">
                      <FileText className="w-4 h-4" />
                      Free Case Review
                    </Link>
                  </Button>
                </div>

                <div className="mt-4 text-center">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    No Fees Unless We Win
                  </Badge>
                </div>
              </Card>

              {/* Factors Affecting Compensation */}
              <Card className="glass-card p-6">
                <h4 className="font-bold text-lg mb-4 text-primary">Factors That Affect Your Settlement:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Severity and type of injuries</li>
                  <li>• Medical expenses and future treatment</li>
                  <li>• Lost wages and earning capacity</li>
                  <li>• Pain and suffering</li>
                  <li>• Age and life expectancy</li>
                  <li>• Store's degree of negligence</li>
                  <li>• Quality of evidence</li>
                  <li>• Witness testimony</li>
                  <li>• Incident documentation</li>
                  <li>• Insurance policy limits</li>
                </ul>
              </Card>

              <Card className="glass-card p-6">
                <h4 className="font-bold text-lg mb-4 text-primary">Why Choose Trembach Law?</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Former defense attorney insight</li>
                  <li>• No upfront costs or fees</li>
                  <li>• California premises law experts</li>
                  <li>• 24/7 availability</li>
                  <li>• Maximum compensation focus</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompensationCalculator;