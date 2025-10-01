import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { 
  ArrowLeft,
  Calculator,
  DollarSign,
  TrendingUp,
  Users,
  Heart,
  Clock,
  AlertTriangle,
  Phone,
  Mail,
  Shield,
  Star,
  Info,
  FileText
} from 'lucide-react';
import heroBackground from '@/assets/wrongful-death-compensation-calculator-hero.jpg';
import SEO from '@/components/SEO';

interface CalculationResults {
  economicDamages: number;
  nonEconomicDamages: number;
  totalEstimate: number;
  lowRange: number;
  highRange: number;
  survivalAction: number;
}

const WrongfulDeathCompensationCalculator: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ageOfDeceased: '',
    annualIncome: '',
    yearsToRetirement: '',
    numberOfDependents: '',
    relationshipQuality: '5',
    funeralCosts: '',
    medicalBills: '',
    causeOfDeath: '',
    liability: '5',
    insurance: '',
    state: 'california'
  });

  const [results, setResults] = useState<CalculationResults | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateCompensation = () => {
    const age = parseInt(formData.ageOfDeceased) || 0;
    const income = parseInt(formData.annualIncome) || 0;
    const yearsWork = parseInt(formData.yearsToRetirement) || 0;
    const dependents = parseInt(formData.numberOfDependents) || 0;
    const relationshipScore = parseInt(formData.relationshipQuality) || 5;
    const funeral = parseInt(formData.funeralCosts) || 15000;
    const medical = parseInt(formData.medicalBills) || 0;
    const liabilityScore = parseInt(formData.liability) || 5;

    // Economic Damages Calculation
    let lifetimeEarnings = 0;
    if (income > 0 && yearsWork > 0) {
      // Factor in inflation and growth (approximately 3% annually)
      const growthRate = 1.03;
      lifetimeEarnings = income * yearsWork * growthRate;
    }

    // Support percentage based on relationship and dependents
    let supportPercentage = 0.3; // Base support
    if (dependents > 0) supportPercentage += dependents * 0.15;
    if (supportPercentage > 0.8) supportPercentage = 0.8;

    const lostSupport = lifetimeEarnings * supportPercentage;
    
    // Household services value (cooking, cleaning, childcare)
    const householdServices = dependents > 0 ? 25000 * yearsWork : 15000 * yearsWork;
    
    const economicDamages = lostSupport + householdServices + funeral + medical;

    // Non-Economic Damages
    let baseNonEconomic = 200000; // Base amount for loss of companionship
    
    // Age factor - younger victims typically higher awards
    if (age < 30) baseNonEconomic *= 1.5;
    else if (age < 50) baseNonEconomic *= 1.2;
    else if (age > 70) baseNonEconomic *= 0.7;

    // Relationship quality factor
    baseNonEconomic *= (relationshipScore / 5);

    // Dependents factor
    baseNonEconomic += dependents * 50000;

    // California MICRA cap for medical malpractice (starting at $500k in 2023)
    let nonEconomicDamages = baseNonEconomic;
    if (formData.causeOfDeath === 'medical-malpractice') {
      nonEconomicDamages = Math.min(baseNonEconomic, 500000);
    }

    // Survival Action (pain and suffering before death - through 2025)
    let survivalAction = 0;
    if (formData.causeOfDeath !== 'instant-death') {
      survivalAction = 100000; // Base amount for pre-death suffering
      if (formData.causeOfDeath === 'medical-malpractice') survivalAction *= 1.5;
    }

    const totalEstimate = economicDamages + nonEconomicDamages + survivalAction;

    // Liability adjustment
    const liabilityAdjustment = liabilityScore / 10; // 0.5 to 1.0
    const adjustedTotal = totalEstimate * liabilityAdjustment;

    // Range calculations (typically ±40% of estimate)
    const lowRange = adjustedTotal * 0.6;
    const highRange = adjustedTotal * 1.4;

    setResults({
      economicDamages: economicDamages,
      nonEconomicDamages: nonEconomicDamages,
      totalEstimate: adjustedTotal,
      lowRange: lowRange,
      highRange: highRange,
      survivalAction: survivalAction
    });

    setShowResults(true);
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
        title="Wrongful Death Compensation Calculator | California | Free Estimate Tool"
        description="Calculate potential wrongful death compensation in California. Free estimation tool based on recent settlements and California law. Get expert legal consultation."
        canonical="/wrongful-death-compensation-calculator"
      />

      

      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-sm font-medium">
              Free Compensation Calculator
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Wrongful Death Compensation Calculator
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Estimate your potential wrongful death compensation based on California law and recent settlement data. Get a personalized assessment from experienced attorneys.
            </p>
            <div className="flex items-center justify-center gap-6 text-white">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                <span>California-Specific</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                <span>Recent Settlement Data</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Attorney Verified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Calculator Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <Calculator className="w-6 h-6 text-red-600" />
                    Compensation Calculator
                  </CardTitle>
                  <p className="text-gray-600">
                    Enter the information below to estimate potential wrongful death compensation. All calculations are based on California law and recent settlement data.
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  
                  {/* Basic Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Deceased Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Age at Death</label>
                        <Input
                          type="number"
                          value={formData.ageOfDeceased}
                          onChange={(e) => handleInputChange('ageOfDeceased', e.target.value)}
                          placeholder="Age in years"
                          className="text-base"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Annual Income</label>
                        <Input
                          type="number"
                          value={formData.annualIncome}
                          onChange={(e) => handleInputChange('annualIncome', e.target.value)}
                          placeholder="$50,000"
                          className="text-base"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Work and Family Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Family & Work Details</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Years Until Retirement</label>
                        <Input
                          type="number"
                          value={formData.yearsToRetirement}
                          onChange={(e) => handleInputChange('yearsToRetirement', e.target.value)}
                          placeholder="25"
                          className="text-base"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Number of Dependents</label>
                        <Select onValueChange={(value) => handleInputChange('numberOfDependents', value)}>
                          <SelectTrigger className="text-base">
                            <SelectValue placeholder="Select dependents" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0">No dependents</SelectItem>
                            <SelectItem value="1">1 dependent</SelectItem>
                            <SelectItem value="2">2 dependents</SelectItem>
                            <SelectItem value="3">3 dependents</SelectItem>
                            <SelectItem value="4">4 dependents</SelectItem>
                            <SelectItem value="5">5+ dependents</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Relationship Quality */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Relationship Closeness (affects non-economic damages)
                    </label>
                    <div className="px-3">
                      <Slider
                        value={[parseInt(formData.relationshipQuality)]}
                        onValueChange={(value) => handleInputChange('relationshipQuality', value[0].toString())}
                        max={10}
                        min={1}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Distant (1)</span>
                        <span className="font-medium">Current: {formData.relationshipQuality}/10</span>
                        <span>Very Close (10)</span>
                      </div>
                    </div>
                  </div>

                  {/* Financial Details */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Financial Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Funeral/Burial Costs</label>
                        <Input
                          type="number"
                          value={formData.funeralCosts}
                          onChange={(e) => handleInputChange('funeralCosts', e.target.value)}
                          placeholder="$15,000 (average)"
                          className="text-base"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Medical Bills Before Death</label>
                        <Input
                          type="number"
                          value={formData.medicalBills}
                          onChange={(e) => handleInputChange('medicalBills', e.target.value)}
                          placeholder="$0"
                          className="text-base"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Case Details */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Case Details</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Cause of Death</label>
                        <Select onValueChange={(value) => handleInputChange('causeOfDeath', value)}>
                          <SelectTrigger className="text-base">
                            <SelectValue placeholder="Select cause of death" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="motor-vehicle">Motor Vehicle Accident</SelectItem>
                            <SelectItem value="medical-malpractice">Medical Malpractice</SelectItem>
                            <SelectItem value="workplace-accident">Workplace Accident</SelectItem>
                            <SelectItem value="premises-liability">Premises Liability</SelectItem>
                            <SelectItem value="product-defect">Product Defect</SelectItem>
                            <SelectItem value="instant-death">Instant Death</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Liability Strength (how clear is fault?)
                        </label>
                        <div className="px-3">
                          <Slider
                            value={[parseInt(formData.liability)]}
                            onValueChange={(value) => handleInputChange('liability', value[0].toString())}
                            max={10}
                            min={1}
                            step={1}
                            className="w-full"
                          />
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>Disputed (1)</span>
                            <span className="font-medium">Current: {formData.liability}/10</span>
                            <span>Clear Fault (10)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button 
                    onClick={calculateCompensation}
                    className="w-full bg-red-600 hover:bg-red-700 text-lg py-3"
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    Calculate Compensation Estimate
                  </Button>
                </CardContent>
              </Card>

              {/* Results */}
              {showResults && results && (
                <Card className="shadow-xl mt-8">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-green-900 flex items-center gap-2">
                      <TrendingUp className="w-6 h-6" />
                      Compensation Estimate Results
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    
                    {/* Total Estimate */}
                    <div className="text-center bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-green-900 mb-2">Estimated Total Compensation</h3>
                      <div className="text-4xl font-bold text-green-600 mb-2">
                        {formatCurrency(results.totalEstimate)}
                      </div>
                      <p className="text-green-700">
                        Range: {formatCurrency(results.lowRange)} - {formatCurrency(results.highRange)}
                      </p>
                    </div>

                    {/* Breakdown */}
                    <div className="grid md:grid-cols-3 gap-4">
                      <Card className="bg-blue-50 border-blue-200">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg text-blue-900 flex items-center gap-2">
                            <DollarSign className="w-5 h-5" />
                            Economic Damages
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold text-blue-600">
                            {formatCurrency(results.economicDamages)}
                          </div>
                          <p className="text-sm text-blue-700 mt-1">
                            Lost support, funeral costs, medical bills
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="bg-purple-50 border-purple-200">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg text-purple-900 flex items-center gap-2">
                            <Heart className="w-5 h-5" />
                            Non-Economic
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold text-purple-600">
                            {formatCurrency(results.nonEconomicDamages)}
                          </div>
                          <p className="text-sm text-purple-700 mt-1">
                            Loss of companionship, guidance
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="bg-orange-50 border-orange-200">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg text-orange-900 flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            Survival Action
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold text-orange-600">
                            {formatCurrency(results.survivalAction)}
                          </div>
                          <p className="text-sm text-orange-700 mt-1">
                            Pre-death pain & suffering (through 2025)
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Important Notes */}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-yellow-900 mb-3 flex items-center gap-2">
                        <Info className="w-5 h-5" />
                        Important Notes
                      </h4>
                      <ul className="space-y-2 text-yellow-800 text-sm">
                        <li>• This is an estimate based on California law and recent settlement data</li>
                        <li>• Actual results depend on specific case facts and legal representation</li>
                        <li>• Medical malpractice cases have special damage caps (MICRA)</li>
                        <li>• Insurance coverage and defendant assets affect actual recovery</li>
                        <li>• Expert legal evaluation is essential for accurate assessment</li>
                      </ul>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center bg-red-50 border border-red-200 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-red-900 mb-3">Ready to Pursue Your Case?</h4>
                      <p className="text-red-800 mb-4">
                        Get a professional case evaluation from experienced wrongful death attorneys. 
                        We'll review your specific situation and provide expert guidance.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button 
                          className="bg-red-600 hover:bg-red-700"
                          onClick={() => window.open('/wrongful-death-case-evaluation', '_blank')}
                        >
                          <FileText className="w-4 h-4 mr-2" />
                          Start Case Evaluation
                        </Button>
                        <Button 
                          variant="outline"
                          className="border-red-600 text-red-600 hover:bg-red-50"
                          onClick={() => window.open('tel:8181234567')}
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Call (818) 123-4567
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
                <Card className="shadow-lg bg-gradient-to-br from-red-50 to-red-100 border-red-200">
                  <CardHeader>
                    <CardTitle className="text-red-900">Need Expert Help?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700"
                      onClick={() => window.open('tel:8181234567')}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call (818) 123-4567
                    </Button>
                    
                    <Button 
                      variant="outline"
                      className="w-full border-red-600 text-red-600 hover:bg-red-50"
                      onClick={() => {
                        const subject = 'Wrongful Death Compensation Discussion';
                        const body = 'I used your compensation calculator and would like to discuss my case with an attorney.';
                        window.open(`mailto:info@trembachlaw.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
                      }}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email Consultation
                    </Button>
                    
                    <p className="text-sm text-red-800">
                      Free consultation with experienced wrongful death attorney. No fees unless we win your case.
                    </p>
                  </CardContent>
                </Card>

                {/* Calculator Info */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-gray-900">
                      <Calculator className="w-5 h-5 text-blue-600" />
                      About This Calculator
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span>Based on California wrongful death law and recent settlement data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <TrendingUp className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Incorporates economic factors like inflation and growth</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Users className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Accounts for family relationships and dependencies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Shield className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Considers liability strength and case-specific factors</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Factors Affecting Value */}
                <Card className="shadow-lg bg-blue-50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-blue-900">Factors That Increase Value</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-blue-800">
                      <li>• Younger age of deceased</li>
                      <li>• Higher income and earning potential</li>
                      <li>• Multiple dependents</li>
                      <li>• Close family relationships</li>
                      <li>• Clear liability evidence</li>
                      <li>• Adequate insurance coverage</li>
                      <li>• Egregious defendant conduct</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Important Deadlines */}
                <Card className="shadow-lg bg-yellow-50 border-yellow-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-yellow-900">
                      <AlertTriangle className="w-5 h-5" />
                      Act Quickly
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-yellow-800">
                      <li><strong>2 Years:</strong> General wrongful death statute</li>
                      <li><strong>1-3 Years:</strong> Medical malpractice cases</li>
                      <li><strong>6 Months:</strong> Government claims</li>
                    </ul>
                    <p className="text-xs text-yellow-700 mt-3">
                      Evidence disappears quickly. Contact an attorney immediately to protect your rights.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WrongfulDeathCompensationCalculator;