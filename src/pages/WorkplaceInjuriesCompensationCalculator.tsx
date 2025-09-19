import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Calculator, 
  DollarSign, 
  TrendingUp, 
  FileText, 
  Phone, 
  Mail,
  HardHat,
  AlertTriangle,
  CheckCircle,
  Info
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/workplace-calculator-hero.jpg';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';

const WorkplaceInjuriesCompensationCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    age: '',
    annualIncome: '',
    injurySeverity: '',
    medicalExpenses: '',
    timeOffWork: '',
    employmentStatus: '',
    injuryType: '',
    thirdPartyLiability: '',
    futureCareDuration: ''
  });

  const [results, setResults] = useState<{
    workersComp: number;
    thirdParty: number;
    total: number;
    breakdown: {
      medicalExpenses: number;
      lostWages: number;
      painSuffering: number;
      futureCareCosts: number;
      lossOfEarningCapacity: number;
    };
  } | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateCompensation = () => {
    const income = parseFloat(formData.annualIncome) || 0;
    const medicalCosts = parseFloat(formData.medicalExpenses) || 0;
    const timeOff = parseFloat(formData.timeOffWork) || 0;
    const ageNum = parseFloat(formData.age) || 30;

    // Workers' Comp Calculation (2/3 of wages, medical coverage)
    const weeklyWage = income / 52;
    const workersCompWeekly = weeklyWage * 0.667; // 2/3 of wages
    const workersCompTotal = workersCompWeekly * timeOff + medicalCosts;

    // Third-Party Calculation (full compensation)
    let multiplier = 1;
    switch (formData.injurySeverity) {
      case 'minor': multiplier = 1.5; break;
      case 'moderate': multiplier = 3; break;
      case 'severe': multiplier = 5; break;
      case 'catastrophic': multiplier = 8; break;
    }

    let thirdPartyMultiplier = 1;
    switch (formData.thirdPartyLiability) {
      case 'yes-strong': thirdPartyMultiplier = 1.5; break;
      case 'yes-moderate': thirdPartyMultiplier = 1.2; break;
      case 'yes-weak': thirdPartyMultiplier = 1.1; break;
      case 'no': thirdPartyMultiplier = 0; break;
    }

    const fullLostWages = weeklyWage * timeOff;
    const painSuffering = medicalCosts * multiplier;
    const futureCareCosts = medicalCosts * (formData.futureCareDuration === 'lifetime' ? 10 : 2);
    
    // Loss of earning capacity based on age and severity
    const yearsToRetirement = Math.max(0, 65 - ageNum);
    const earningCapacityLoss = formData.injurySeverity === 'catastrophic' ? 
      income * yearsToRetirement * 0.5 : 
      formData.injurySeverity === 'severe' ? 
        income * yearsToRetirement * 0.2 : 0;

    const thirdPartyTotal = (fullLostWages + medicalCosts + painSuffering + futureCareCosts + earningCapacityLoss) * thirdPartyMultiplier;

    setResults({
      workersComp: workersCompTotal,
      thirdParty: thirdPartyTotal,
      total: workersCompTotal + thirdPartyTotal,
      breakdown: {
        medicalExpenses: medicalCosts,
        lostWages: fullLostWages,
        painSuffering: painSuffering,
        futureCareCosts: futureCareCosts,
        lossOfEarningCapacity: earningCapacityLoss
      }
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
    <>
      <SEO 
        title="Workplace Injury Compensation Calculator | California"
        description="Calculate potential compensation for your California workplace injury. Estimate workers' comp benefits plus third-party claims. Free evaluation available."
        canonical="/workplace-injuries-compensation-calculator"
      />

      <GoBack />

      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] flex items-center justify-center text-white overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBackground})` }}
      >
        <div className="text-center px-6 max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Badge className="bg-red-600/90 hover:bg-red-700 text-white px-4 py-2">
              <Calculator className="w-4 h-4 mr-2" />
              Free Calculator
            </Badge>
            <Badge className="bg-red-600/90 hover:bg-red-700 text-white px-4 py-2">
              <TrendingUp className="w-4 h-4 mr-2" />
              Instant Results
            </Badge>
            <Badge className="bg-red-600/90 hover:bg-red-700 text-white px-4 py-2">
              <CheckCircle className="w-4 h-4 mr-2" />
              Professional Estimate
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Workplace Injury <span className="text-red-400">Compensation Calculator</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Calculate your potential compensation beyond workers' compensation limits. Get estimates for third-party claims and full recovery.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Calculator Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-red-200">
              <CardHeader className="bg-red-50 border-b border-red-200">
                <CardTitle className="text-2xl text-red-600 flex items-center">
                  <Calculator className="w-6 h-6 mr-3" />
                  Workplace Injury Compensation Calculator
                </CardTitle>
                <p className="text-red-700 mt-2">
                  Enter your information below to estimate potential compensation for your workplace injury.
                </p>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-red-600 border-b border-red-200 pb-2">
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Age</label>
                      <Input
                        type="number"
                        value={formData.age}
                        onChange={(e) => handleInputChange('age', e.target.value)}
                        placeholder="Enter your age"
                        className="border-red-300 focus:border-red-500 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Annual Income</label>
                      <Input
                        type="number"
                        value={formData.annualIncome}
                        onChange={(e) => handleInputChange('annualIncome', e.target.value)}
                        placeholder="Enter annual income"
                        className="border-red-300 focus:border-red-500 focus:ring-red-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Employment Status</label>
                    <Select value={formData.employmentStatus} onValueChange={(value) => handleInputChange('employmentStatus', value)}>
                      <SelectTrigger className="border-red-300 focus:border-red-500 focus:ring-red-500">
                        <SelectValue placeholder="Select employment status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-time">Full-Time Employee</SelectItem>
                        <SelectItem value="part-time">Part-Time Employee</SelectItem>
                        <SelectItem value="contractor">Independent Contractor</SelectItem>
                        <SelectItem value="temporary">Temporary Worker</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Injury Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-red-600 border-b border-red-200 pb-2">
                    Injury Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Type of Injury</label>
                      <Select value={formData.injuryType} onValueChange={(value) => handleInputChange('injuryType', value)}>
                        <SelectTrigger className="border-red-300 focus:border-red-500 focus:ring-red-500">
                          <SelectValue placeholder="Select injury type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="construction-accident">Construction Accident</SelectItem>
                          <SelectItem value="equipment-malfunction">Equipment Malfunction</SelectItem>
                          <SelectItem value="toxic-exposure">Toxic Exposure</SelectItem>
                          <SelectItem value="vehicle-accident">Vehicle Accident</SelectItem>
                          <SelectItem value="fall-height">Fall from Height</SelectItem>
                          <SelectItem value="electrocution">Electrocution</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Injury Severity</label>
                      <Select value={formData.injurySeverity} onValueChange={(value) => handleInputChange('injurySeverity', value)}>
                        <SelectTrigger className="border-red-300 focus:border-red-500 focus:ring-red-500">
                          <SelectValue placeholder="Select severity" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="minor">Minor (Full recovery expected)</SelectItem>
                          <SelectItem value="moderate">Moderate (Some permanent limitations)</SelectItem>
                          <SelectItem value="severe">Severe (Significant permanent disability)</SelectItem>
                          <SelectItem value="catastrophic">Catastrophic (Life-altering injuries)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Financial Impact */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-red-600 border-b border-red-200 pb-2">
                    Financial Impact
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Medical Expenses to Date</label>
                      <Input
                        type="number"
                        value={formData.medicalExpenses}
                        onChange={(e) => handleInputChange('medicalExpenses', e.target.value)}
                        placeholder="Enter medical expenses"
                        className="border-red-300 focus:border-red-500 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Weeks Off Work</label>
                      <Input
                        type="number"
                        value={formData.timeOffWork}
                        onChange={(e) => handleInputChange('timeOffWork', e.target.value)}
                        placeholder="Enter weeks off work"
                        className="border-red-300 focus:border-red-500 focus:ring-red-500"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Third-Party Liability</label>
                      <Select value={formData.thirdPartyLiability} onValueChange={(value) => handleInputChange('thirdPartyLiability', value)}>
                        <SelectTrigger className="border-red-300 focus:border-red-500 focus:ring-red-500">
                          <SelectValue placeholder="Third-party involvement" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes-strong">Yes, Strong Case</SelectItem>
                          <SelectItem value="yes-moderate">Yes, Moderate Case</SelectItem>
                          <SelectItem value="yes-weak">Yes, Weak Case</SelectItem>
                          <SelectItem value="no">No Third Party</SelectItem>
                          <SelectItem value="unsure">Unsure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Future Care Duration</label>
                      <Select value={formData.futureCareDuration} onValueChange={(value) => handleInputChange('futureCareDuration', value)}>
                        <SelectTrigger className="border-red-300 focus:border-red-500 focus:ring-red-500">
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="short-term">Short-term (1-2 years)</SelectItem>
                          <SelectItem value="long-term">Long-term (5-10 years)</SelectItem>
                          <SelectItem value="lifetime">Lifetime care needed</SelectItem>
                          <SelectItem value="none">No future care needed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={calculateCompensation}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg font-semibold"
                >
                  Calculate My Compensation
                </Button>

                {/* Results */}
                {results && (
                  <div className="mt-8 space-y-6">
                    <h3 className="text-xl font-bold text-red-600 border-b border-red-200 pb-2">
                      Your Estimated Compensation
                    </h3>
                    
                    {/* Summary Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card className="bg-blue-50 border-blue-200">
                        <CardContent className="p-4 text-center">
                          <h4 className="font-semibold text-blue-800">Workers' Compensation</h4>
                          <p className="text-2xl font-bold text-blue-600">{formatCurrency(results.workersComp)}</p>
                          <p className="text-sm text-blue-700">2/3 wages + medical</p>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-green-50 border-green-200">
                        <CardContent className="p-4 text-center">
                          <h4 className="font-semibold text-green-800">Third-Party Claims</h4>
                          <p className="text-2xl font-bold text-green-600">{formatCurrency(results.thirdParty)}</p>
                          <p className="text-sm text-green-700">Full compensation</p>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-red-50 border-red-200">
                        <CardContent className="p-4 text-center">
                          <h4 className="font-semibold text-red-800">Total Potential</h4>
                          <p className="text-2xl font-bold text-red-600">{formatCurrency(results.total)}</p>
                          <p className="text-sm text-red-700">Combined recovery</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Detailed Breakdown */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-red-600">Compensation Breakdown</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex justify-between items-center py-2 border-b">
                          <span>Medical Expenses</span>
                          <span className="font-semibold">{formatCurrency(results.breakdown.medicalExpenses)}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b">
                          <span>Lost Wages (Full)</span>
                          <span className="font-semibold">{formatCurrency(results.breakdown.lostWages)}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b">
                          <span>Pain & Suffering</span>
                          <span className="font-semibold">{formatCurrency(results.breakdown.painSuffering)}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b">
                          <span>Future Care Costs</span>
                          <span className="font-semibold">{formatCurrency(results.breakdown.futureCareCosts)}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b">
                          <span>Loss of Earning Capacity</span>
                          <span className="font-semibold">{formatCurrency(results.breakdown.lossOfEarningCapacity)}</span>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Disclaimer */}
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                      <div className="flex items-start">
                        <Info className="w-5 h-5 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
                        <div className="text-sm text-yellow-800">
                          <p className="font-semibold mb-2">Important Disclaimer:</p>
                          <p>
                            This calculator provides estimates only. Actual compensation depends on many factors including case specifics, 
                            available insurance coverage, and successful litigation. Results are not guaranteed. 
                            Contact us for a professional case evaluation.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-red-600 text-white p-6 rounded-lg text-center">
                      <h4 className="text-xl font-bold mb-2">Get a Professional Case Evaluation</h4>
                      <p className="mb-4">Our experienced attorneys can provide a more accurate assessment of your case value.</p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild className="bg-white text-red-600 hover:bg-gray-100">
                          <Link to="/workplace-injuries-case-evaluation">Free Case Evaluation</Link>
                        </Button>
                        <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                          <Link to="tel:8181234567">Call (818) 123-4567</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              
              {/* Contact Card */}
              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-red-600 text-center">Need Help Calculating?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-center">
                  <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
                    <Link to="tel:8181234567">
                      <Phone className="w-4 h-4 mr-2" />
                      Call (818) 123-4567
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full border-red-300 text-red-600 hover:bg-red-100" asChild>
                    <Link to="/workplace-injuries-case-evaluation">
                      <FileText className="w-4 h-4 mr-2" />
                      Free Case Evaluation
                    </Link>
                  </Button>
                  <p className="text-sm text-red-700">
                    Get professional help with your calculation
                  </p>
                </CardContent>
              </Card>

              {/* Types of Compensation */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">Types of Compensation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">Workers' Compensation</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>• 2/3 of average weekly wages</li>
                        <li>• Medical expenses covered</li>
                        <li>• No pain & suffering</li>
                        <li>• Limited provider choice</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">Third-Party Claims</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>• 100% of lost wages</li>
                        <li>• All medical expenses</li>
                        <li>• Pain & suffering damages</li>
                        <li>• Future care costs</li>
                        <li>• Loss of earning capacity</li>
                        <li>• Punitive damages possible</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Factors Affecting Compensation */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">Factors Affecting Value</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span>Severity of injuries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <DollarSign className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Income level and age</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Strength of liability evidence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HardHat className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Third-party involvement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>Available insurance coverage</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkplaceInjuriesCompensationCalculator;