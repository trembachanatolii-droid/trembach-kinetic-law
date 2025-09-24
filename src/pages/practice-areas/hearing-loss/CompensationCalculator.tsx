import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Phone, Star, Calculator, AlertTriangle, DollarSign, TrendingUp, Scale } from 'lucide-react';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';
import heroBackground from '@/assets/hearing-loss-calculator-hero.jpg';

gsap.registerPlugin(ScrollTrigger);

interface CalculatorData {
  age: number;
  hearingLossType: string;
  severity: string;
  causeType: string;
  yearsExposed: number;
  occupation: string;
  weeklyWages: number;
  medicalExpenses: number;
  timeOffWork: number;
}

interface CompensationEstimate {
  low: number;
  average: number;
  high: number;
}

const HearingLossCompensationCalculator: React.FC = () => {
  const [calculatorData, setCalculatorData] = useState<CalculatorData>({
    age: 40,
    hearingLossType: '',
    severity: '',
    causeType: '',
    yearsExposed: 0,
    occupation: '',
    weeklyWages: 0,
    medicalExpenses: 0,
    timeOffWork: 0
  });

  const [estimatedCompensation, setEstimatedCompensation] = useState<CompensationEstimate | null>(null);
  const [showResults, setShowResults] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const calculatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.add('hearing-loss-page');
    return () => document.body.classList.remove('hearing-loss-page');
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );

      gsap.fromTo(calculatorRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: calculatorRef.current,
            start: 'top 80%'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (Object.values(calculatorData).some(value => value !== '' && value !== 0)) {
      calculateCompensation();
    }
  }, [calculatorData]);

  const calculateCompensation = () => {
    let baseAmount = 50000; // Base compensation amount
    let multiplier = 1;

    // Age factor - younger victims get higher compensation due to longer impact
    if (calculatorData.age < 30) multiplier += 0.4;
    else if (calculatorData.age < 50) multiplier += 0.2;
    else if (calculatorData.age > 65) multiplier -= 0.1;

    // Hearing loss type factor
    switch (calculatorData.hearingLossType) {
      case 'sensorineural':
        multiplier += 0.3; // Permanent damage
        break;
      case 'bilateral':
        multiplier += 0.5; // Both ears affected
        break;
      case 'sudden':
        multiplier += 0.4; // Sudden onset often traumatic
        break;
      case 'mixed':
        multiplier += 0.35;
        break;
      case 'conductive':
        multiplier += 0.2; // May be treatable
        break;
      case 'tinnitus':
        multiplier += 0.25;
        break;
    }

    // Severity factor
    switch (calculatorData.severity) {
      case 'profound':
        multiplier += 0.6;
        break;
      case 'severe':
        multiplier += 0.4;
        break;
      case 'moderate-severe':
        multiplier += 0.3;
        break;
      case 'moderate':
        multiplier += 0.2;
        break;
      case 'mild-moderate':
        multiplier += 0.1;
        break;
    }

    // Cause type factor
    switch (calculatorData.causeType) {
      case 'workplace':
        multiplier += 0.3; // Employer liability
        break;
      case 'explosion':
        multiplier += 0.4; // Traumatic and often preventable
        break;
      case 'vehicle-accident':
        multiplier += 0.35;
        break;
      case 'chemical':
        multiplier += 0.3;
        break;
      case 'defective-product':
        multiplier += 0.25;
        break;
    }

    // Years of exposure factor
    if (calculatorData.yearsExposed > 20) multiplier += 0.3;
    else if (calculatorData.yearsExposed > 10) multiplier += 0.2;
    else if (calculatorData.yearsExposed > 5) multiplier += 0.1;

    // High-risk occupation factor
    const highRiskOccupations = ['construction', 'manufacturing', 'military', 'aviation', 'entertainment'];
    if (highRiskOccupations.includes(calculatorData.occupation)) {
      multiplier += 0.2;
    }

    // Calculate base compensation
    const baseCompensation = baseAmount * multiplier;

    // Add economic damages
    const weeklyLoss = calculatorData.weeklyWages * 0.3; // 30% hearing-related impact
    const yearlyLoss = weeklyLoss * 52;
    const workingYearsRemaining = Math.max(0, 65 - calculatorData.age);
    const lostEarnings = yearlyLoss * workingYearsRemaining * 0.5; // 50% discount for present value

    const totalMedical = calculatorData.medicalExpenses + (calculatorData.timeOffWork * calculatorData.weeklyWages);

    const totalCompensation = baseCompensation + lostEarnings + totalMedical;

    // Calculate range (±30% of estimate)
    const low = Math.round(totalCompensation * 0.7);
    const average = Math.round(totalCompensation);
    const high = Math.round(totalCompensation * 1.3);

    setEstimatedCompensation({ low, average, high });
    setShowResults(true);
  };

  const handleInputChange = (field: string, value: string | number) => {
    setCalculatorData(prev => ({ ...prev, [field]: value }));
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const resetCalculator = () => {
    setCalculatorData({
      age: 40,
      hearingLossType: '',
      severity: '',
      causeType: '',
      yearsExposed: 0,
      occupation: '',
      weeklyWages: 0,
      medicalExpenses: 0,
      timeOffWork: 0
    });
    setEstimatedCompensation(null);
    setShowResults(false);
  };

  return (
    <>
      <SEO 
        title="Hearing Loss Compensation Calculator | California Hearing Loss Attorneys | Trembach Law Firm"
        description="Calculate potential compensation for your hearing loss case in California. Free estimation tool by experienced hearing loss attorneys. Get an estimate of your claim value."
        keywords="hearing loss compensation calculator, hearing damage settlement, California hearing loss attorney, compensation estimate, hearing loss claim value"
        canonical="https://www.trembachlawfirm.com/practice-areas/hearing-loss/compensation-calculator"
      />
      
      <div className="min-h-screen bg-background">
        <GoBack fallbackPath="/practice-areas/hearing-loss" />
        
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            <div className="hero-content">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hearing Loss Compensation Calculator
              </h1>
              
              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
                ))}
                <span className="ml-2 text-lg force-white">Professional Case Evaluation</span>
              </div>
              
              <p className="text-xl mb-8">
                Get an estimate of your potential hearing loss compensation based on your specific circumstances.
              </p>
              
              <Button 
                size="lg"
                className="bg-white text-black hover:bg-gray-100 font-bold px-8 py-4 text-lg"
                onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calculator className="w-5 h-5 mr-2" />
                Start Calculator
              </Button>
            </div>
          </div>
        </section>

        {/* Important Disclaimer */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mx-6 mt-8">
          <div className="flex">
            <AlertTriangle className="w-6 h-6 text-yellow-400 mr-3 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Legal Disclaimer</h3>
              <p className="text-yellow-700">
                This calculator provides estimates based on general factors and should not be considered a guarantee of compensation. 
                Actual settlements depend on many case-specific factors. For an accurate assessment, schedule a free consultation with our experienced hearing loss attorneys.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Calculator Column */}
            <div className="lg:col-span-2" ref={calculatorRef}>
              <Card className="shadow-lg" id="calculator">
                <CardHeader className="bg-red-50">
                  <CardTitle className="text-red-600 text-center text-2xl">
                    Hearing Loss Compensation Calculator
                  </CardTitle>
                  <p className="text-center text-muted-foreground">
                    Provide your information below to get a compensation estimate
                  </p>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                  
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold border-b border-gray-200 pb-2">Personal Information</h3>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Age: {calculatorData.age} years old</label>
                      <Slider
                        value={[calculatorData.age]}
                        onValueChange={(value) => handleInputChange('age', value[0])}
                        max={85}
                        min={18}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>18</span>
                        <span>85</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Occupation Type</label>
                      <Select value={calculatorData.occupation} onValueChange={(value) => handleInputChange('occupation', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your occupation" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="construction">Construction Worker</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing/Factory Worker</SelectItem>
                          <SelectItem value="military">Military Personnel</SelectItem>
                          <SelectItem value="aviation">Aviation/Airport Worker</SelectItem>
                          <SelectItem value="entertainment">Entertainment/Music Industry</SelectItem>
                          <SelectItem value="transportation">Transportation/Trucking</SelectItem>
                          <SelectItem value="emergency">Emergency Services</SelectItem>
                          <SelectItem value="office">Office/Administrative</SelectItem>
                          <SelectItem value="healthcare">Healthcare Professional</SelectItem>
                          <SelectItem value="education">Education/Teaching</SelectItem>
                          <SelectItem value="retail">Retail/Service Industry</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Hearing Loss Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold border-b border-gray-200 pb-2">Hearing Loss Details</h3>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Type of Hearing Loss</label>
                      <Select value={calculatorData.hearingLossType} onValueChange={(value) => handleInputChange('hearingLossType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select hearing loss type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sensorineural">Sensorineural (Nerve Damage)</SelectItem>
                          <SelectItem value="conductive">Conductive (Mechanical Problem)</SelectItem>
                          <SelectItem value="mixed">Mixed (Both Types)</SelectItem>
                          <SelectItem value="bilateral">Bilateral (Both Ears)</SelectItem>
                          <SelectItem value="sudden">Sudden Hearing Loss</SelectItem>
                          <SelectItem value="tinnitus">Tinnitus Only</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Severity Level</label>
                      <Select value={calculatorData.severity} onValueChange={(value) => handleInputChange('severity', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select severity level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mild">Mild (26-40 dB loss)</SelectItem>
                          <SelectItem value="mild-moderate">Mild-Moderate (41-55 dB loss)</SelectItem>
                          <SelectItem value="moderate">Moderate (56-70 dB loss)</SelectItem>
                          <SelectItem value="moderate-severe">Moderate-Severe (71-90 dB loss)</SelectItem>
                          <SelectItem value="severe">Severe (91-120 dB loss)</SelectItem>
                          <SelectItem value="profound">Profound (121+ dB loss)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Cause of Hearing Loss</label>
                      <Select value={calculatorData.causeType} onValueChange={(value) => handleInputChange('causeType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select cause" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="workplace">Workplace Noise Exposure</SelectItem>
                          <SelectItem value="vehicle-accident">Motor Vehicle Accident</SelectItem>
                          <SelectItem value="explosion">Explosion/Blast Injury</SelectItem>
                          <SelectItem value="chemical">Chemical Exposure</SelectItem>
                          <SelectItem value="defective-product">Defective Product</SelectItem>
                          <SelectItem value="medical-malpractice">Medical Malpractice</SelectItem>
                          <SelectItem value="other">Other Accident</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Years of Exposure: {calculatorData.yearsExposed} years</label>
                      <Slider
                        value={[calculatorData.yearsExposed]}
                        onValueChange={(value) => handleInputChange('yearsExposed', value[0])}
                        max={50}
                        min={0}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>0</span>
                        <span>50+ years</span>
                      </div>
                    </div>
                  </div>

                  {/* Financial Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold border-b border-gray-200 pb-2">Financial Impact</h3>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Weekly Wages (before hearing loss)</label>
                      <Input
                        type="number"
                        value={calculatorData.weeklyWages || ''}
                        onChange={(e) => handleInputChange('weeklyWages', parseInt(e.target.value) || 0)}
                        placeholder="Enter weekly wages"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Medical Expenses to Date</label>
                      <Input
                        type="number"
                        value={calculatorData.medicalExpenses || ''}
                        onChange={(e) => handleInputChange('medicalExpenses', parseInt(e.target.value) || 0)}
                        placeholder="Enter medical expenses"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Weeks Off Work</label>
                      <Input
                        type="number"
                        value={calculatorData.timeOffWork || ''}
                        onChange={(e) => handleInputChange('timeOffWork', parseInt(e.target.value) || 0)}
                        placeholder="Enter weeks off work"
                      />
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button onClick={calculateCompensation} className="bg-red-600 hover:bg-red-700 flex-1">
                      <Calculator className="w-4 h-4 mr-2" />
                      Calculate Compensation
                    </Button>
                    <Button onClick={resetCalculator} variant="outline">
                      Reset
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Results Section */}
              {showResults && estimatedCompensation && (
                <Card className="shadow-lg mt-8">
                  <CardHeader className="bg-green-50">
                    <CardTitle className="text-green-600 text-center text-2xl">
                      Estimated Compensation Range
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <DollarSign className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <h3 className="font-semibold text-blue-600">Conservative</h3>
                        <p className="text-2xl font-bold text-blue-800">{formatCurrency(estimatedCompensation.low)}</p>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                        <h3 className="font-semibold text-green-600">Average</h3>
                        <p className="text-2xl font-bold text-green-800">{formatCurrency(estimatedCompensation.average)}</p>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <Scale className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                        <h3 className="font-semibold text-purple-600">Optimal</h3>
                        <p className="text-2xl font-bold text-purple-800">{formatCurrency(estimatedCompensation.high)}</p>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                      <h4 className="font-semibold text-yellow-800 mb-2">Important Notes:</h4>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        <li>• These estimates are based on general factors and case history</li>
                        <li>• Actual compensation depends on specific case details and evidence</li>
                        <li>• Medical documentation and expert testimony significantly impact value</li>
                        <li>• California law allows full recovery without damage caps for hearing loss</li>
                      </ul>
                    </div>

                    <div className="text-center">
                      <Button 
                        size="lg"
                        className="bg-red-600 hover:bg-red-700 mr-4"
                        onClick={() => window.location.href = '/practice-areas/hearing-loss/case-evaluation'}
                      >
                        Get Professional Evaluation
                      </Button>
                      <Button 
                        size="lg"
                        variant="outline"
                        onClick={() => window.location.href = 'tel:8181234567'}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call (818) 123-4567
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Legal Disclaimer */}
              <Card className="shadow-lg mt-8 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-gray-600">Legal Disclaimer</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600 space-y-3">
                  <p>
                    This compensation calculator is provided for informational purposes only and does not constitute legal advice. 
                    The estimates generated are based on general factors and historical case outcomes but cannot account for the 
                    unique circumstances of your specific case.
                  </p>
                  <p>
                    Actual compensation amounts depend on numerous factors including the strength of evidence, quality of medical 
                    documentation, degree of negligence, available insurance coverage, and other case-specific variables. No guarantee 
                    is made regarding the outcome of any legal matter.
                  </p>
                  <p>
                    For an accurate assessment of your hearing loss claim, schedule a free consultation with our experienced 
                    California hearing loss attorneys. We will review your specific circumstances and provide a professional 
                    evaluation of your case's potential value.
                  </p>
                  <p className="font-semibold">
                    Nothing on this calculator creates an attorney-client relationship. Consult with a qualified attorney for 
                    legal advice specific to your situation.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                
                {/* Next Steps */}
                <Card className="border-red-200 shadow-lg">
                  <CardHeader className="bg-red-50">
                    <CardTitle className="text-red-600 text-center">Next Steps</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-6">
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold"
                      onClick={() => window.location.href = '/practice-areas/hearing-loss/case-evaluation'}
                    >
                      Free Case Evaluation
                    </Button>
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                      onClick={() => window.location.href = 'tel:8181234567'}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call (818) 123-4567
                    </Button>
                  </CardContent>
                </Card>

                {/* Factors Affecting Compensation */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-primary">Factors Affecting Compensation</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>• Type and severity of hearing loss</p>
                    <p>• Age at time of injury</p>
                    <p>• Occupation and earning capacity</p>
                    <p>• Years of exposure or trauma severity</p>
                    <p>• Medical treatment costs</p>
                    <p>• Future care needs</p>
                    <p>• Impact on daily life and relationships</p>
                    <p>• Degree of negligence involved</p>
                    <p>• Available insurance coverage</p>
                    <p>• Quality of medical documentation</p>
                  </CardContent>
                </Card>

                {/* California Advantages */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-primary">California Law Advantages</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>✓ No damage caps on hearing loss cases</p>
                    <p>✓ Pure comparative negligence system</p>
                    <p>✓ Strong worker protection laws</p>
                    <p>✓ Extended deadlines for gradual onset</p>
                    <p>✓ Consumer protection statutes</p>
                    <p>✓ Joint and several liability</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HearingLossCompensationCalculator;