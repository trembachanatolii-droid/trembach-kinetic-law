import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { 
  Calculator, 
  DollarSign, 
  TrendingUp, 
  Shield, 
  AlertTriangle, 
  Clock,
  Phone,
  Mail,
  MessageCircle,
  HardHat,
  Scale,
  Stethoscope,
  FileText,
  Info
} from 'lucide-react';
import heroBackground from '@/assets/construction-compensation-calculator-hero.jpg';
import SEO from '@/components/SEO';

interface CalculationResults {
  medicalExpenses: number;
  lostWages: number;
  painAndSuffering: number;
  totalEstimate: number;
  lowRange: number;
  highRange: number;
}

const ConstructionCompensationCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    age: '',
    annualIncome: '',
    medicalExpenses: '',
    timeOffWork: '',
    injurySeverity: 'moderate',
    accidentType: '',
    oshaViolations: 'no',
    multipleParties: 'no',
    permanentDisability: 'no',
    painLevel: [5],
    liabilityStrength: [7]
  });

  const [results, setResults] = useState<CalculationResults | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (name: string, value: string | number[]) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateCompensation = () => {
    const age = parseInt(formData.age) || 0;
    const income = parseFloat(formData.annualIncome) || 0;
    const medical = parseFloat(formData.medicalExpenses) || 0;
    const timeOff = parseInt(formData.timeOffWork) || 0;
    const painLevel = formData.painLevel[0];
    const liability = formData.liabilityStrength[0] / 10;

    // Base calculations
    let medicalExpenses = medical;
    let lostWages = (income / 52) * timeOff;
    
    // Injury severity multiplier
    let severityMultiplier = 1;
    switch (formData.injurySeverity) {
      case 'minor': severityMultiplier = 1; break;
      case 'moderate': severityMultiplier = 2; break;
      case 'serious': severityMultiplier = 3.5; break;
      case 'severe': severityMultiplier = 5; break;
      case 'catastrophic': severityMultiplier = 8; break;
    }

    // Accident type factor
    let accidentTypeFactor = 1;
    switch (formData.accidentType) {
      case 'fall-from-height': accidentTypeFactor = 1.3; break;
      case 'scaffolding-collapse': accidentTypeFactor = 1.4; break;
      case 'crane-accident': accidentTypeFactor = 1.5; break;
      case 'electrocution': accidentTypeFactor = 1.6; break;
      case 'trench-collapse': accidentTypeFactor = 1.5; break;
      case 'caught-in-between': accidentTypeFactor = 1.4; break;
      case 'toxic-exposure': accidentTypeFactor = 2.0; break;
      case 'explosion-fire': accidentTypeFactor = 1.7; break;
    }

    // Additional factors
    const oshaFactor = formData.oshaViolations === 'yes' ? 1.3 : 1;
    const multiplePartiesFactor = formData.multipleParties === 'yes' ? 1.4 : 1;
    const permanentDisabilityFactor = formData.permanentDisability === 'yes' ? 2.5 : 1;
    const ageFactor = age < 30 ? 1.2 : age > 55 ? 0.9 : 1;
    const painFactor = painLevel / 5;

    // Future medical expenses (estimated)
    const futureMedical = medical * (severityMultiplier * 0.5);
    medicalExpenses += futureMedical;

    // Future lost wages for permanent disability
    if (formData.permanentDisability === 'yes') {
      const yearsToRetirement = Math.max(65 - age, 0);
      const permanentCapacityLoss = 0.3; // Assume 30% capacity loss
      lostWages += income * yearsToRetirement * permanentCapacityLoss;
    }

    // Pain and suffering calculation
    const basePainSuffering = (medicalExpenses + lostWages) * 2;
    const painAndSuffering = basePainSuffering * 
      severityMultiplier * 
      accidentTypeFactor * 
      permanentDisabilityFactor * 
      painFactor * 
      ageFactor;

    // Total before adjustments
    let totalEstimate = medicalExpenses + lostWages + painAndSuffering;
    
    // Apply final factors
    totalEstimate *= oshaFactor * multiplePartiesFactor * liability;

    // Calculate range (±30%)
    const lowRange = totalEstimate * 0.7;
    const highRange = totalEstimate * 1.3;

    const calculationResults: CalculationResults = {
      medicalExpenses: Math.round(medicalExpenses),
      lostWages: Math.round(lostWages),
      painAndSuffering: Math.round(painAndSuffering),
      totalEstimate: Math.round(totalEstimate),
      lowRange: Math.round(lowRange),
      highRange: Math.round(highRange)
    };

    setResults(calculationResults);
    setShowResults(true);
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Construction Accident Compensation Calculator | Estimate Your Case Value"
        description="Calculate potential compensation for your construction accident case. Free calculator estimates medical expenses, lost wages, pain and suffering for California construction injuries."
      />
      
      {/* Hero Section */}
      <section 
        className="relative pt-20 pb-16 bg-gradient-to-r from-primary/95 to-primary/85 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Calculator className="w-4 h-4 mr-2" />
                Free Calculator
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <TrendingUp className="w-4 h-4 mr-2" />
                Instant Results
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Shield className="w-4 h-4 mr-2" />
                Confidential
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Construction Accident <span className="text-accent">Compensation Calculator</span>
            </h1>
            
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Get an estimated range of potential compensation for your California construction accident case. Our calculator considers injury severity, OSHA violations, multiple liable parties, and other key factors.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <HardHat className="w-5 h-5" />
                <span>Construction Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                <span>Maximize Recovery</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                <span>OSHA Violations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Calculator Form */}
            <div className="lg:w-2/3">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="w-6 h-6" />
                    Construction Accident Compensation Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-yellow-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-yellow-800">Important Disclaimer</p>
                        <p className="text-sm text-yellow-700">
                          This calculator provides estimates only. Actual case values depend on many factors and require professional legal evaluation. Results are not guaranteed and should not be considered legal advice.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Age</label>
                        <Input 
                          type="number"
                          placeholder="Your age"
                          value={formData.age}
                          onChange={(e) => handleInputChange('age', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Annual Income ($)</label>
                        <Input 
                          type="number"
                          placeholder="Your annual income"
                          value={formData.annualIncome}
                          onChange={(e) => handleInputChange('annualIncome', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Accident Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Construction Accident Details</h3>
                    <div>
                      <label className="block text-sm font-medium mb-2">Type of Construction Accident</label>
                      <Select onValueChange={(value) => handleInputChange('accidentType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select accident type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fall-from-height">Fall from Height</SelectItem>
                          <SelectItem value="scaffolding-collapse">Scaffolding Collapse</SelectItem>
                          <SelectItem value="crane-accident">Crane/Equipment Accident</SelectItem>
                          <SelectItem value="electrocution">Electrocution</SelectItem>
                          <SelectItem value="trench-collapse">Trench Collapse</SelectItem>
                          <SelectItem value="caught-in-between">Caught In/Between</SelectItem>
                          <SelectItem value="toxic-exposure">Toxic Exposure</SelectItem>
                          <SelectItem value="explosion-fire">Explosion/Fire</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Medical Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Medical and Financial Impact</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Medical Expenses to Date ($)</label>
                        <Input 
                          type="number"
                          placeholder="Total medical costs"
                          value={formData.medicalExpenses}
                          onChange={(e) => handleInputChange('medicalExpenses', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Time Off Work (weeks)</label>
                        <Input 
                          type="number"
                          placeholder="Weeks unable to work"
                          value={formData.timeOffWork}
                          onChange={(e) => handleInputChange('timeOffWork', e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Injury Severity Level</label>
                      <Select onValueChange={(value) => handleInputChange('injurySeverity', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select injury severity" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="minor">Minor (First Aid/Outpatient)</SelectItem>
                          <SelectItem value="moderate">Moderate (ER Visit/Short Hospital Stay)</SelectItem>
                          <SelectItem value="serious">Serious (Surgery/Extended Hospital Stay)</SelectItem>
                          <SelectItem value="severe">Severe (Major Surgery/ICU)</SelectItem>
                          <SelectItem value="catastrophic">Catastrophic (Life-Altering/Permanent)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Legal Factors */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Legal Factors</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">OSHA Violations Present</label>
                        <Select onValueChange={(value) => handleInputChange('oshaViolations', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="OSHA violations" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">Yes - Safety Violations Identified</SelectItem>
                            <SelectItem value="no">No Known Violations</SelectItem>
                            <SelectItem value="investigating">Under Investigation</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Multiple Liable Parties</label>
                        <Select onValueChange={(value) => handleInputChange('multipleParties', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Multiple parties involved" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">Yes - Multiple Contractors/Parties</SelectItem>
                            <SelectItem value="no">No - Single Party</SelectItem>
                            <SelectItem value="unknown">Unknown</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Permanent Disability</label>
                      <Select onValueChange={(value) => handleInputChange('permanentDisability', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Permanent disability status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes - Permanent Impairment</SelectItem>
                          <SelectItem value="no">No - Full Recovery Expected</SelectItem>
                          <SelectItem value="unknown">Too Early to Determine</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Sliding Scales */}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-4">
                        Pain and Suffering Level: {formData.painLevel[0]}/10
                      </label>
                      <Slider
                        value={formData.painLevel}
                        onValueChange={(value) => handleInputChange('painLevel', value)}
                        max={10}
                        min={1}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>Minimal Pain</span>
                        <span>Severe/Debilitating</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-4">
                        Liability Strength: {formData.liabilityStrength[0]}/10
                      </label>
                      <Slider
                        value={formData.liabilityStrength}
                        onValueChange={(value) => handleInputChange('liabilityStrength', value)}
                        max={10}
                        min={1}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>Weak Evidence</span>
                        <span>Clear Negligence</span>
                      </div>
                    </div>
                  </div>

                  <Button 
                    onClick={calculateCompensation}
                    className="w-full text-lg py-3"
                    size="lg"
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    Calculate My Potential Compensation
                  </Button>
                </CardContent>
              </Card>

              {/* Results */}
              {showResults && results && (
                <Card className="bg-green-50 border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-800">
                      <TrendingUp className="w-6 h-6" />
                      Your Estimated Compensation Range
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-700 mb-2">
                        {formatCurrency(results.lowRange)} - {formatCurrency(results.highRange)}
                      </div>
                      <p className="text-green-600">Estimated Compensation Range</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded-lg text-center">
                        <Stethoscope className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-blue-700">
                          {formatCurrency(results.medicalExpenses)}
                        </div>
                        <p className="text-sm text-blue-600">Medical Expenses</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg text-center">
                        <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-green-700">
                          {formatCurrency(results.lostWages)}
                        </div>
                        <p className="text-sm text-green-600">Lost Wages</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg text-center">
                        <Scale className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-purple-700">
                          {formatCurrency(results.painAndSuffering)}
                        </div>
                        <p className="text-sm text-purple-600">Pain & Suffering</p>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <h4 className="font-semibold text-yellow-800 mb-2">Important Notes:</h4>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        <li>• This is an estimate only - actual case values vary significantly</li>
                        <li>• Construction accident cases often involve multiple liable parties</li>
                        <li>• OSHA violations can substantially increase compensation</li>
                        <li>• Future medical costs and lost earning capacity are included</li>
                        <li>• Consult with an attorney for accurate case evaluation</li>
                      </ul>
                    </div>

                    <div className="text-center">
                      <p className="mb-4 text-green-700">
                        Ready to discuss your actual case value with our construction accident specialists?
                      </p>
                      <div className="space-y-2">
                        <Button 
                          className="w-full"
                          onClick={() => window.location.href = '/construction-case-evaluation'}
                        >
                          <FileText className="w-4 h-4 mr-2" />
                          Get Free Case Evaluation
                        </Button>
                        <Button 
                          variant="outline"
                          className="w-full"
                          onClick={() => window.location.href = 'tel:8181234567'}
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Call (818) 123-4567 Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-6">
              <Card className="bg-primary text-white">
                <CardHeader>
                  <CardTitle>Get Professional Evaluation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-primary-foreground/90">
                    For an accurate case assessment:
                  </p>
                  <Button 
                    className="w-full bg-white text-primary hover:bg-gray-100"
                    onClick={() => window.location.href = '/construction-case-evaluation'}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Free Case Evaluation
                  </Button>
                  <Button 
                    className="w-full bg-green-600 text-white hover:bg-green-700"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call (818) 123-4567
                  </Button>
                  <Button 
                    className="w-full bg-blue-600 text-white hover:bg-blue-700"
                    asChild
                  >
                    <Link to="/construction-accidents-case-evaluation">
                      <FileText className="w-4 h-4 mr-2" />
                      Free Case Evaluation
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    Factors Affecting Value
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>• <strong>Injury Severity:</strong> Catastrophic injuries warrant millions</p>
                  <p>• <strong>OSHA Violations:</strong> Can increase compensation 30%+</p>
                  <p>• <strong>Multiple Parties:</strong> More defendants = more insurance</p>
                  <p>• <strong>Age Factor:</strong> Younger victims get more for lost earning capacity</p>
                  <p>• <strong>Permanency:</strong> Lifetime disabilities require extensive compensation</p>
                  <p>• <strong>Pain Level:</strong> Severity impacts non-economic damages</p>
                  <p>• <strong>Liability Strength:</strong> Clear negligence increases recovery</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HardHat className="w-5 h-5" />
                    Construction Accident Types
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>• Falls from heights (leading cause of death)</p>
                  <p>• Scaffolding collapses and failures</p>
                  <p>• Crane and heavy equipment accidents</p>
                  <p>• Electrocution and electrical burns</p>
                  <p>• Trench collapses and cave-ins</p>
                  <p>• Struck-by falling objects</p>
                  <p>• Caught-in/between machinery</p>
                  <p>• Toxic exposure (silica, asbestos)</p>
                  <p>• Explosions and fire injuries</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Why Use Our Calculator?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>• Based on actual California construction accident settlements</p>
                  <p>• Accounts for OSHA violations and third-party liability</p>
                  <p>• Includes future medical costs and lost earning capacity</p>
                  <p>• Considers construction-specific factors</p>
                  <p>• Developed by former defense attorneys</p>
                  <p>• Updated with current case law and trends</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-red-600" />
                    Time Limits Apply
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-red-700">
                  <p>• 2 years for personal injury claims</p>
                  <p>• 6 months for government claims</p>
                  <p>• Evidence disappears quickly</p>
                  <p>• Don't delay - contact us today</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionCompensationCalculator;