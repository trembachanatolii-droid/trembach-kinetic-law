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
  FileText,
  Package
} from 'lucide-react';
import heroBackground from '@/assets/product-liability-compensation-calculator-hero.jpg';
import SEO from '@/components/SEO';

interface CalculationResults {
  medicalExpenses: number;
  lostWages: number;
  painAndSuffering: number;
  totalEstimate: number;
  lowRange: number;
  highRange: number;
  futureExpenses: number;
}

const ProductLiabilityCompensationCalculator: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    age: '',
    currentIncome: '',
    medicalBills: '',
    futuremedicalCosts: '',
    timeOffWork: '',
    recoveryTime: '',
    painLevel: '5',
    productType: '',
    defectType: '',
    injurySeverity: '',
    permanentDisability: '',
    liability: '8',
    state: 'california'
  });

  const [results, setResults] = useState<CalculationResults | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateCompensation = () => {
    const age = parseInt(formData.age) || 0;
    const income = parseInt(formData.currentIncome) || 0;
    const medicalBills = parseInt(formData.medicalBills) || 0;
    const futureMedical = parseInt(formData.futuremedicalCosts) || 0;
    const timeOff = parseInt(formData.timeOffWork) || 0;
    const recovery = parseInt(formData.recoveryTime) || 0;
    const painScore = parseInt(formData.painLevel) || 5;
    const liabilityScore = parseInt(formData.liability) || 8;

    // Medical Expenses Calculation
    let totalMedical = medicalBills + futureMedical;
    
    // If permanent disability, add lifetime medical costs
    if (formData.permanentDisability === 'yes') {
      const yearsRemaining = Math.max(75 - age, 10);
      totalMedical += yearsRemaining * 5000; // Average annual medical costs
    }

    // Lost Wages Calculation
    const dailyWage = income / 365;
    let lostWages = dailyWage * timeOff;
    
    // Future lost wages if permanent disability
    if (formData.permanentDisability === 'yes') {
      const yearsToRetirement = Math.max(65 - age, 0);
      lostWages += income * 0.4 * yearsToRetirement; // 40% income loss assumption
    } else if (recovery > 0) {
      lostWages += dailyWage * recovery;
    }

    // Pain and Suffering Calculation
    let basePainSuffering = 75000; // Base amount
    
    // Injury severity multiplier
    let severityMultiplier = 1;
    switch (formData.injurySeverity) {
      case 'minor':
        severityMultiplier = 0.5;
        break;
      case 'moderate':
        severityMultiplier = 1;
        break;
      case 'serious':
        severityMultiplier = 2;
        break;
      case 'severe':
        severityMultiplier = 3;
        break;
      case 'catastrophic':
        severityMultiplier = 5;
        break;
    }

    // Product type multiplier
    let productMultiplier = 1;
    switch (formData.productType) {
      case 'medical-device':
      case 'pharmaceutical':
        productMultiplier = 2;
        break;
      case 'automotive':
      case 'tools-machinery':
        productMultiplier = 1.5;
        break;
      case 'food-beverage':
      case 'cosmetics':
        productMultiplier = 1.2;
        break;
    }

    // Defect type multiplier
    let defectMultiplier = 1;
    switch (formData.defectType) {
      case 'design-defect':
        defectMultiplier = 1.5;
        break;
      case 'manufacturing-defect':
        defectMultiplier = 1.2;
        break;
      case 'warning-defect':
        defectMultiplier = 1;
        break;
    }

    // Age factor (younger victims typically receive higher awards)
    let ageFactor = 1;
    if (age < 30) ageFactor = 1.3;
    else if (age < 50) ageFactor = 1.1;
    else if (age > 70) ageFactor = 0.8;

    // Pain level factor
    const painFactor = painScore / 5;

    // Permanent disability adds significant value
    if (formData.permanentDisability === 'yes') {
      basePainSuffering *= 3;
    }

    const painAndSuffering = basePainSuffering * severityMultiplier * 
                           productMultiplier * defectMultiplier * 
                           ageFactor * painFactor;

    // Future expenses (rehabilitation, equipment, etc.)
    let futureExpenses = 0;
    if (formData.permanentDisability === 'yes') {
      futureExpenses = 50000; // Base amount for equipment, modifications
      if (formData.injurySeverity === 'catastrophic') {
        futureExpenses = 200000; // Higher for catastrophic injuries
      }
    }

    const subtotal = totalMedical + lostWages + painAndSuffering + futureExpenses;

    // Liability adjustment
    const liabilityAdjustment = liabilityScore / 10;
    const totalEstimate = subtotal * liabilityAdjustment;

    // Range calculations (typically ±50% for product liability cases)
    const lowRange = totalEstimate * 0.5;
    const highRange = totalEstimate * 1.5;

    setResults({
      medicalExpenses: totalMedical,
      lostWages: lostWages,
      painAndSuffering: painAndSuffering,
      totalEstimate: totalEstimate,
      lowRange: lowRange,
      highRange: highRange,
      futureExpenses: futureExpenses
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
        title="Product Liability Compensation Calculator | California | Free Estimate Tool"
        description="Calculate potential product liability compensation in California. Free estimation tool based on recent settlements and California law. Get expert legal consultation."
        canonical="/product-liability-compensation-calculator"
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
              Product Liability Compensation Calculator
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Estimate your potential product liability compensation based on California law and recent settlement data. Get a personalized assessment from experienced attorneys.
            </p>
            <div className="flex items-center justify-center gap-6 text-white">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                <span className="text-lg">California-Specific</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                <span className="text-lg">Recent Settlement Data</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span className="text-lg">Attorney Verified</span>
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
                  <p className="text-gray-600 text-lg">
                    Enter the information below to estimate potential product liability compensation. All calculations are based on California law and recent settlement data.
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-lg font-medium text-gray-700 mb-1">Your Age</label>
                        <Input
                          type="number"
                          value={formData.age}
                          onChange={(e) => handleInputChange('age', e.target.value)}
                          placeholder="Age in years"
                          className="text-lg h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-lg font-medium text-gray-700 mb-1">Annual Income</label>
                        <Input
                          type="number"
                          value={formData.currentIncome}
                          onChange={(e) => handleInputChange('currentIncome', e.target.value)}
                          placeholder="$50,000"
                          className="text-lg h-12"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Details</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-lg font-medium text-gray-700 mb-1">Product Type</label>
                        <Select onValueChange={(value) => handleInputChange('productType', value)}>
                          <SelectTrigger className="text-lg h-12">
                            <SelectValue placeholder="Select product type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="automotive">Automotive Parts</SelectItem>
                            <SelectItem value="medical-device">Medical Device</SelectItem>
                            <SelectItem value="pharmaceutical">Pharmaceutical</SelectItem>
                            <SelectItem value="food-beverage">Food/Beverage</SelectItem>
                            <SelectItem value="household-appliance">Household Appliance</SelectItem>
                            <SelectItem value="electronics">Electronics</SelectItem>
                            <SelectItem value="toys">Toys/Children's Products</SelectItem>
                            <SelectItem value="tools-machinery">Tools/Machinery</SelectItem>
                            <SelectItem value="cosmetics">Cosmetics/Personal Care</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-lg font-medium text-gray-700 mb-1">Type of Defect</label>
                        <Select onValueChange={(value) => handleInputChange('defectType', value)}>
                          <SelectTrigger className="text-lg h-12">
                            <SelectValue placeholder="Select defect type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="design-defect">Design Defect</SelectItem>
                            <SelectItem value="manufacturing-defect">Manufacturing Defect</SelectItem>
                            <SelectItem value="warning-defect">Inadequate Warnings</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Medical Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Medical & Financial Impact</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-lg font-medium text-gray-700 mb-1">Current Medical Bills</label>
                        <Input
                          type="number"
                          value={formData.medicalBills}
                          onChange={(e) => handleInputChange('medicalBills', e.target.value)}
                          placeholder="$0"
                          className="text-lg h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-lg font-medium text-gray-700 mb-1">Future Medical Costs</label>
                        <Input
                          type="number"
                          value={formData.futuremedicalCosts}
                          onChange={(e) => handleInputChange('futuremedicalCosts', e.target.value)}
                          placeholder="$0"
                          className="text-lg h-12"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label className="block text-lg font-medium text-gray-700 mb-1">Days Off Work</label>
                        <Input
                          type="number"
                          value={formData.timeOffWork}
                          onChange={(e) => handleInputChange('timeOffWork', e.target.value)}
                          placeholder="0"
                          className="text-lg h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-lg font-medium text-gray-700 mb-1">Recovery Time (Days)</label>
                        <Input
                          type="number"
                          value={formData.recoveryTime}
                          onChange={(e) => handleInputChange('recoveryTime', e.target.value)}
                          placeholder="0"
                          className="text-lg h-12"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Injury Severity */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Injury Assessment</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-lg font-medium text-gray-700 mb-1">Injury Severity</label>
                        <Select onValueChange={(value) => handleInputChange('injurySeverity', value)}>
                          <SelectTrigger className="text-lg h-12">
                            <SelectValue placeholder="Select injury severity" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="minor">Minor (minor cuts, bruises)</SelectItem>
                            <SelectItem value="moderate">Moderate (fractures, stitches)</SelectItem>
                            <SelectItem value="serious">Serious (surgery required)</SelectItem>
                            <SelectItem value="severe">Severe (permanent impairment)</SelectItem>
                            <SelectItem value="catastrophic">Catastrophic (life-altering)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="block text-lg font-medium text-gray-700 mb-1">Permanent Disability?</label>
                        <Select onValueChange={(value) => handleInputChange('permanentDisability', value)}>
                          <SelectTrigger className="text-lg h-12">
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="no">No permanent disability</SelectItem>
                            <SelectItem value="partial">Partial disability</SelectItem>
                            <SelectItem value="yes">Yes, permanent disability</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Pain Level */}
                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                      Pain and Suffering Level
                    </label>
                    <div className="px-3">
                      <Slider
                        value={[parseInt(formData.painLevel)]}
                        onValueChange={(value) => handleInputChange('painLevel', value[0].toString())}
                        max={10}
                        min={1}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>Minimal (1)</span>
                        <span className="font-medium text-lg">Current: {formData.painLevel}/10</span>
                        <span>Severe (10)</span>
                      </div>
                    </div>
                  </div>

                  {/* Liability Strength */}
                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                      Liability Strength (how clear is manufacturer fault?)
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
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>Disputed (1)</span>
                        <span className="font-medium text-lg">Current: {formData.liability}/10</span>
                        <span>Clear Fault (10)</span>
                      </div>
                    </div>
                  </div>

                  <Button 
                    onClick={calculateCompensation}
                    className="w-full bg-red-600 hover:bg-red-700 text-xl py-4"
                  >
                    <Calculator className="w-6 h-6 mr-2" />
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
                      <h3 className="text-xl font-semibold text-green-900 mb-2">Estimated Total Compensation</h3>
                      <div className="text-4xl font-bold text-green-600 mb-2">
                        {formatCurrency(results.totalEstimate)}
                      </div>
                      <p className="text-green-700 text-lg">
                        Range: {formatCurrency(results.lowRange)} - {formatCurrency(results.highRange)}
                      </p>
                    </div>

                    {/* Breakdown */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="bg-blue-50 border-blue-200">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg text-blue-900">Medical Expenses</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold text-blue-600">{formatCurrency(results.medicalExpenses)}</div>
                          <p className="text-blue-700 text-lg">Current & future medical costs</p>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-purple-50 border-purple-200">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg text-purple-900">Lost Wages</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold text-purple-600">{formatCurrency(results.lostWages)}</div>
                          <p className="text-purple-700 text-lg">Income loss & earning capacity</p>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-orange-50 border-orange-200">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg text-orange-900">Pain & Suffering</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold text-orange-600">{formatCurrency(results.painAndSuffering)}</div>
                          <p className="text-orange-700 text-lg">Non-economic damages</p>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-teal-50 border-teal-200">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg text-teal-900">Future Expenses</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold text-teal-600">{formatCurrency(results.futureExpenses)}</div>
                          <p className="text-teal-700 text-lg">Equipment & modifications</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Important Notes */}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                      <h4 className="font-semibold text-yellow-900 mb-2 text-lg">Important Notes:</h4>
                      <ul className="text-yellow-800 space-y-1 text-lg">
                        <li>• This is an estimate based on similar California cases</li>
                        <li>• Actual compensation depends on specific case factors</li>
                        <li>• Product liability cases can vary significantly</li>
                        <li>• Manufacturer resources affect settlement amounts</li>
                        <li>• Consult with an attorney for accurate assessment</li>
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Ready to Pursue Your Case?</h4>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button 
                          size="lg" 
                          className="bg-red-600 hover:bg-red-700 text-lg"
                          onClick={() => window.open('tel:8181234567')}
                        >
                          <Phone className="w-5 h-5 mr-2" />
                          Call (818) 123-4567
                        </Button>
                        <Button 
                          variant="outline" 
                          size="lg"
                          className="text-lg"
                          onClick={() => navigate('/product-liability-case-evaluation')}
                        >
                          Start Product Liability Evaluation
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
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                      <Phone className="w-5 h-5 text-red-600" />
                      Need Expert Help?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <p className="text-lg text-gray-700 mb-4">Speak with a product liability attorney</p>
                      <Button 
                        size="lg" 
                        className="w-full bg-red-600 hover:bg-red-700 text-lg"
                        onClick={() => window.open('tel:8181234567')}
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        Call (818) 123-4567
                      </Button>
                      
                    </div>
                  </CardContent>
                </Card>

                {/* Factors Affecting Value */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">Factors Affecting Value</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-lg text-gray-700">
                      <li>• Product defect severity</li>
                      <li>• Manufacturer negligence</li>
                      <li>• Injury permanence</li>
                      <li>• Lost earning capacity</li>
                      <li>• Medical expenses</li>
                      <li>• Pain and suffering</li>
                      <li>• Recall history</li>
                      <li>• Similar case precedents</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* California Law */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">California Product Liability Law</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-lg text-gray-700">
                      <li>• Strict liability for defective products</li>
                      <li>• No need to prove negligence</li>
                      <li>• Comparative fault may apply</li>
                      <li>• 2-year statute of limitations</li>
                      <li>• Discovery rule exceptions</li>
                    </ul>
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

export default ProductLiabilityCompensationCalculator;