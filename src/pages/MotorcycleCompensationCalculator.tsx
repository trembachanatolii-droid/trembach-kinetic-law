import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Phone, 
  Calculator,
  DollarSign,
  TrendingUp,
  AlertCircle,
  Info,
  Star,
  Shield,
  Award,
  Clock,
  FileText
} from 'lucide-react';
import heroImage from '@/assets/practice-areas/motorcycle-compensation.jpg';
import SEO from '@/components/SEO';

const MotorcycleCompensationCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    medicalBills: '',
    lostWages: '',
    futureWages: '',
    propertyDamage: '',
    injurySeverity: '',
    painLevel: '',
    ageRange: '',
    faultPercentage: '',
    insuranceLimits: ''
  });

  const [results, setResults] = useState<{
    economicDamages: number;
    nonEconomicDamages: number;
    totalEstimate: number;
    lowRange: number;
    highRange: number;
  } | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateCompensation = () => {
    const medicalBills = parseFloat(formData.medicalBills) || 0;
    const lostWages = parseFloat(formData.lostWages) || 0;
    const futureWages = parseFloat(formData.futureWages) || 0;
    const propertyDamage = parseFloat(formData.propertyDamage) || 0;

    const economicDamages = medicalBills + lostWages + futureWages + propertyDamage;

    // Pain and suffering multiplier based on injury severity and pain level
    let multiplier = 1.5; // Base multiplier
    
    // Adjust based on injury severity
    switch (formData.injurySeverity) {
      case 'minor':
        multiplier = 1.5;
        break;
      case 'moderate':
        multiplier = 2.5;
        break;
      case 'serious':
        multiplier = 4.0;
        break;
      case 'severe':
        multiplier = 5.5;
        break;
      case 'catastrophic':
        multiplier = 7.0;
        break;
      default:
        multiplier = 3.0;
    }

    // Adjust based on pain level
    switch (formData.painLevel) {
      case 'minimal':
        multiplier *= 0.8;
        break;
      case 'moderate':
        multiplier *= 1.0;
        break;
      case 'severe':
        multiplier *= 1.3;
        break;
      case 'extreme':
        multiplier *= 1.5;
        break;
      default:
        multiplier *= 1.0;
    }

    // Age adjustment (younger victims typically receive higher awards)
    switch (formData.ageRange) {
      case '18-30':
        multiplier *= 1.2;
        break;
      case '31-45':
        multiplier *= 1.1;
        break;
      case '46-60':
        multiplier *= 1.0;
        break;
      case '61+':
        multiplier *= 0.9;
        break;
      default:
        multiplier *= 1.0;
    }

    const nonEconomicDamages = Math.max(medicalBills * multiplier, economicDamages * 0.5);
    const totalBeforeFault = economicDamages + nonEconomicDamages;
    
    // Apply comparative negligence
    const faultReduction = parseFloat(formData.faultPercentage) / 100 || 0;
    const totalEstimate = totalBeforeFault * (1 - faultReduction);

    // Create range estimates (±30%)
    const lowRange = totalEstimate * 0.7;
    const highRange = totalEstimate * 1.3;

    setResults({
      economicDamages,
      nonEconomicDamages: nonEconomicDamages * (1 - faultReduction),
      totalEstimate,
      lowRange,
      highRange
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
        title="Motorcycle Accident Compensation Calculator | Estimate Your Claim Value"
        description="Calculate potential compensation for your California motorcycle accident. Free estimation tool for medical bills, lost wages, and pain & suffering."
        canonical="/motorcycle-compensation-calculator"
      />

      {/* Hero Section */}
      <section 
        className="relative h-[300px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Go Back Button - positioned properly */}
        <div className="absolute top-6 left-6 z-10">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center mb-4">
            <Calculator className="w-12 h-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Motorcycle Compensation Calculator
            </h1>
          </div>
          <p className="text-xl">
            Estimate the potential value of your California motorcycle accident claim
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-yellow-50 border-l-4 border-yellow-400 py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-start">
            <Info className="w-6 h-6 text-yellow-600 mr-3 mt-1" />
            <div>
              <h3 className="font-semibold text-yellow-800 mb-2">Important Disclaimer</h3>
              <p className="text-yellow-700">
                This calculator provides estimates only and should not be considered legal advice. 
                Actual compensation depends on many factors unique to your case. 
                Consult with an experienced motorcycle accident attorney for a detailed case evaluation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calculator Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <CardHeader className="pb-6">
                <CardTitle className="text-3xl flex items-center">
                  <Calculator className="w-8 h-8 mr-3 text-red-600" />
                  Calculate Your Compensation
                </CardTitle>
                <p className="text-muted-foreground">
                  Enter your accident details below to estimate potential compensation. 
                  All information is confidential and secure.
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Economic Damages */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <DollarSign className="w-6 h-6 mr-2 text-green-600" />
                    Economic Damages (Actual Financial Losses)
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Total Medical Bills to Date
                      </label>
                      <Input
                        type="number"
                        value={formData.medicalBills}
                        onChange={(e) => handleInputChange('medicalBills', e.target.value)}
                        placeholder="$50,000"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Include hospital, surgery, therapy, medications
                      </p>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Lost Wages to Date
                      </label>
                      <Input
                        type="number"
                        value={formData.lostWages}
                        onChange={(e) => handleInputChange('lostWages', e.target.value)}
                        placeholder="$15,000"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Income lost due to injury
                      </p>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Future Lost Wages (Estimated)
                      </label>
                      <Input
                        type="number"
                        value={formData.futureWages}
                        onChange={(e) => handleInputChange('futureWages', e.target.value)}
                        placeholder="$25,000"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        If unable to return to work or reduced capacity
                      </p>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Property Damage (Motorcycle & Gear)
                      </label>
                      <Input
                        type="number"
                        value={formData.propertyDamage}
                        onChange={(e) => handleInputChange('propertyDamage', e.target.value)}
                        placeholder="$12,000"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Bike, helmet, protective gear replacement
                      </p>
                    </div>
                  </div>
                </div>

                {/* Non-Economic Factors */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <TrendingUp className="w-6 h-6 mr-2 text-blue-600" />
                    Pain & Suffering Factors
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Injury Severity Level
                      </label>
                      <Select value={formData.injurySeverity} onValueChange={(value) => handleInputChange('injurySeverity', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select injury severity" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="minor">Minor (bruises, minor cuts)</SelectItem>
                          <SelectItem value="moderate">Moderate (fractures, concussion)</SelectItem>
                          <SelectItem value="serious">Serious (multiple fractures, surgery needed)</SelectItem>
                          <SelectItem value="severe">Severe (spinal injury, brain trauma)</SelectItem>
                          <SelectItem value="catastrophic">Catastrophic (paralysis, permanent disability)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Pain Level (1-10 scale)
                      </label>
                      <Select value={formData.painLevel} onValueChange={(value) => handleInputChange('painLevel', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select pain level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="minimal">Minimal (1-3)</SelectItem>
                          <SelectItem value="moderate">Moderate (4-6)</SelectItem>
                          <SelectItem value="severe">Severe (7-8)</SelectItem>
                          <SelectItem value="extreme">Extreme (9-10)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Your Age Range
                      </label>
                      <Select value={formData.ageRange} onValueChange={(value) => handleInputChange('ageRange', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select age range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="18-30">18-30 years</SelectItem>
                          <SelectItem value="31-45">31-45 years</SelectItem>
                          <SelectItem value="46-60">46-60 years</SelectItem>
                          <SelectItem value="61+">61+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Your Fault Percentage (if any)
                      </label>
                      <Select value={formData.faultPercentage} onValueChange={(value) => handleInputChange('faultPercentage', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select fault percentage" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0">0% - Other driver 100% at fault</SelectItem>
                          <SelectItem value="10">10% - Mostly other driver's fault</SelectItem>
                          <SelectItem value="20">20% - Some shared responsibility</SelectItem>
                          <SelectItem value="30">30% - Significant shared fault</SelectItem>
                          <SelectItem value="40">40% - Nearly equal fault</SelectItem>
                          <SelectItem value="50">50% - Equal fault</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <Button 
                    onClick={calculateCompensation}
                    className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-6"
                    size="lg"
                  >
                    Calculate My Compensation Estimate
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            {results && (
              <Card className="mt-8 p-8 bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-green-800 flex items-center">
                    <Calculator className="w-6 h-6 mr-2" />
                    Your Compensation Estimate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Damage Breakdown:</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Economic Damages:</span>
                          <span className="font-semibold">{formatCurrency(results.economicDamages)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Pain & Suffering:</span>
                          <span className="font-semibold">{formatCurrency(results.nonEconomicDamages)}</span>
                        </div>
                        <div className="flex justify-between text-lg font-bold border-t pt-2">
                          <span>Total Estimate:</span>
                          <span className="text-green-700">{formatCurrency(results.totalEstimate)}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Estimated Range:</h4>
                      <div className="bg-white p-4 rounded-lg">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-700 mb-2">
                            {formatCurrency(results.lowRange)} - {formatCurrency(results.highRange)}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Typical settlement range based on similar cases
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                    <div className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" />
                      <div className="text-sm">
                        <p className="font-semibold text-yellow-800 mb-1">Remember:</p>
                        <ul className="text-yellow-700 space-y-1">
                          <li>• This is an estimate based on typical cases</li>
                          <li>• Actual compensation depends on case specifics</li>
                          <li>• Insurance company tactics can affect outcomes</li>
                          <li>• Attorney representation typically increases recovery</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-6">
              {/* Contact Card */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Get a Precise Evaluation</h3>
                <p className="text-muted-foreground mb-4">
                  This calculator provides estimates, but every case is unique. 
                  Get a detailed analysis from our motorcycle accident attorneys.
                </p>
                
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => window.location.href = '/motorcycle-case-evaluation'}
                  >
                    Get Free Case Evaluation
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call (818) 123-4567
                  </Button>
                </div>

                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>24/7 Free Consultation Available</span>
                  </div>
                </div>
              </Card>

              {/* Factors Card */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Factors That Affect Compensation</h3>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium mb-2">Injury Severity</h4>
                    <p className="text-sm text-muted-foreground">
                      More severe injuries typically result in higher compensation due to greater medical needs and life impact.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Fault Determination</h4>
                    <p className="text-sm text-muted-foreground">
                      California's comparative negligence law reduces compensation by your fault percentage.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Insurance Limits</h4>
                    <p className="text-sm text-muted-foreground">
                      Available insurance coverage can limit maximum compensation regardless of damages.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Legal Representation</h4>
                    <p className="text-sm text-muted-foreground">
                      Studies show represented clients recover 3-4x more than those handling cases themselves.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Benefits Card */}
              <Card className="p-6 bg-blue-50">
                <h3 className="text-xl font-semibold mb-4">Why Choose Our Firm?</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                    <div>
                      <div className="font-medium">Fighting Anti-Motorcycle Bias</div>
                      <div className="text-sm text-muted-foreground">Overcoming prejudice that reduces settlements</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Award className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                    <div>
                      <div className="font-medium">Former Defense Attorney</div>
                      <div className="text-sm text-muted-foreground">Insider knowledge of insurance tactics</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FileText className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                    <div>
                      <div className="font-medium">Motorcycle Specialists</div>
                      <div className="text-sm text-muted-foreground">Deep understanding of rider dynamics</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-blue-200">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 text-sm font-medium">5-Star Client Reviews</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <section className="mt-16">
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Understanding Motorcycle Accident Compensation</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Economic Damages</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Past and future medical expenses</li>
                  <li>• Lost wages and reduced earning capacity</li>
                  <li>• Property damage to motorcycle and gear</li>
                  <li>• Transportation costs for medical care</li>
                  <li>• Home modifications for accessibility</li>
                  <li>• Vocational rehabilitation costs</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Non-Economic Damages</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Physical pain and suffering</li>
                  <li>• Emotional distress and mental anguish</li>
                  <li>• Loss of enjoyment of life activities</li>
                  <li>• Disability and disfigurement</li>
                  <li>• Loss of consortium (for spouses)</li>
                  <li>• Permanent impairment and limitations</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h4 className="text-lg font-semibold mb-3">Important Notes About Motorcycle Cases:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Motorcycle accident injuries are typically more severe than car accidents</li>
                <li>• Anti-motorcycle bias can reduce settlement offers without proper representation</li>
                <li>• California's comparative negligence law allows recovery even if partially at fault</li>
                <li>• Uninsured/underinsured motorist coverage is crucial for full recovery</li>
                <li>• Expert accident reconstruction may be necessary to prove fault</li>
              </ul>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default MotorcycleCompensationCalculator;