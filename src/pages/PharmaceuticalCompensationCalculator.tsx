import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Calculator, DollarSign, AlertTriangle, Phone, FileText } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '@/components/SEO';
import heroImage from '@/assets/practice-areas/pharmaceutical-calculator-hero.jpg';

gsap.registerPlugin(ScrollTrigger);

const PharmaceuticalCompensationCalculator: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const calculatorRef = useRef<HTMLDivElement>(null);
  const [showGoBack, setShowGoBack] = useState(false);
  const [formData, setFormData] = useState({
    drugType: '',
    injurySeverity: '',
    age: '',
    income: '',
    medicalExpenses: '',
    timeOffWork: '',
    ongoingTreatment: ''
  });
  const [estimatedValue, setEstimatedValue] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setShowGoBack(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculateCompensation = () => {
    let baseValue = 0;
    const medicalCosts = parseInt(formData.medicalExpenses) || 0;
    const income = parseInt(formData.income) || 0;
    const age = parseInt(formData.age) || 0;

    // Base calculation factors
    switch (formData.injurySeverity) {
      case 'severe-permanent':
        baseValue = 500000;
        break;
      case 'moderate-lasting':
        baseValue = 250000;
        break;
      case 'mild-temporary':
        baseValue = 75000;
        break;
      default:
        baseValue = 100000;
    }

    // Drug type multiplier
    switch (formData.drugType) {
      case 'ozempic':
      case 'wegovy':
        baseValue *= 1.3; // Higher settlements for GLP-1 drugs
        break;
      case 'mounjaro':
        baseValue *= 1.2;
        break;
    }

    // Age factor (younger = higher)
    if (age < 40) baseValue *= 1.2;
    else if (age < 60) baseValue *= 1.1;

    // Income factor
    if (income > 100000) baseValue *= 1.15;

    // Medical expenses
    const totalCompensation = baseValue + (medicalCosts * 3) + (income * 2);

    const minValue = Math.round(totalCompensation * 0.7);
    const maxValue = Math.round(totalCompensation * 1.3);

    setEstimatedValue(`$${minValue.toLocaleString()} - $${maxValue.toLocaleString()}`);
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Pharmaceutical Compensation Calculator | Trembach Law Firm"
        description="Calculate potential compensation for your pharmaceutical injury case. Free estimate based on your specific circumstances."
        canonical="https://www.trembachlawfirm.com/pharmaceutical-compensation-calculator"
      />

      {showGoBack && (
        <Button 
          variant="ghost" 
          onClick={handleGoBack}
          className="fixed top-20 left-6 z-50 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm animate-fade-in"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Go Back
        </Button>
      )}

      <section 
        ref={heroRef}
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Pharmaceutical Compensation Calculator
          </h1>
          <p className="text-xl">
            Get an estimate of your potential pharmaceutical injury compensation
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-red-600">
                  <Calculator className="w-6 h-6 mr-2" />
                  Calculate Your Pharmaceutical Injury Compensation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <Label className="text-lg font-medium">Drug/Medication Type</Label>
                    <Select value={formData.drugType} onValueChange={(value) => setFormData(prev => ({ ...prev, drugType: value }))}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select medication..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ozempic">Ozempic (semaglutide)</SelectItem>
                        <SelectItem value="wegovy">Wegovy (semaglutide)</SelectItem>
                        <SelectItem value="mounjaro">Mounjaro (tirzepatide)</SelectItem>
                        <SelectItem value="trulicity">Trulicity (dulaglutide)</SelectItem>
                        <SelectItem value="other">Other Prescription Drug</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-lg font-medium">Injury Severity</Label>
                    <Select value={formData.injurySeverity} onValueChange={(value) => setFormData(prev => ({ ...prev, injurySeverity: value }))}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select severity..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="severe-permanent">Severe/Permanent (Gastroparesis, Blindness)</SelectItem>
                        <SelectItem value="moderate-lasting">Moderate/Long-lasting (Ongoing symptoms)</SelectItem>
                        <SelectItem value="mild-temporary">Mild/Temporary (Resolved symptoms)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-lg font-medium">Your Age</Label>
                      <Input
                        type="number"
                        placeholder="Enter your age"
                        value={formData.age}
                        onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label className="text-lg font-medium">Annual Income</Label>
                      <Input
                        type="number"
                        placeholder="$50,000"
                        value={formData.income}
                        onChange={(e) => setFormData(prev => ({ ...prev, income: e.target.value }))}
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-lg font-medium">Medical Expenses to Date</Label>
                    <Input
                      type="number"
                      placeholder="$10,000"
                      value={formData.medicalExpenses}
                      onChange={(e) => setFormData(prev => ({ ...prev, medicalExpenses: e.target.value }))}
                      className="mt-2"
                    />
                  </div>

                  <Button 
                    onClick={calculateCompensation}
                    className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-3"
                  >
                    Calculate My Compensation
                  </Button>

                  {estimatedValue && (
                    <Card className="bg-green-50 border-green-200">
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-2" />
                          <h3 className="text-2xl font-bold text-green-600 mb-2">Estimated Compensation Range</h3>
                          <p className="text-3xl font-bold text-green-700 mb-4">{estimatedValue}</p>
                          <p className="text-gray-600 text-lg">
                            This is an estimate based on similar cases. Your actual compensation may vary based on specific circumstances.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  <Card className="bg-yellow-50 border-yellow-200">
                    <CardContent className="pt-6">
                      <div className="flex items-start">
                        <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-yellow-800 mb-2">Important Factors Affecting Your Case Value:</h4>
                          <ul className="list-disc ml-4 text-yellow-700 space-y-1">
                            <li>Type and stage of pharmaceutical injury</li>
                            <li>Duration of drug use and dosage</li>
                            <li>Age and life expectancy</li>
                            <li>Income and career impact</li>
                            <li>Medical treatment needs</li>
                            <li>Pain and suffering</li>
                            <li>Available evidence and documentation</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">Get Accurate Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-lg">
                    For an accurate assessment, schedule a free consultation with our experienced pharmaceutical attorneys.
                  </p>
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white mb-3"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call (818) 123-4567
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.location.href = '/pharmaceutical-case-evaluation'}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Free Case Evaluation
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">Compensation Factors</CardTitle>
                </CardHeader>
                <CardContent className="text-lg">
                  <ul className="space-y-2">
                    <li>• Type and stage of pharmaceutical injury</li>
                    <li>• Duration and severity of symptoms</li>
                    <li>• Impact on quality of life</li>
                    <li>• Medical expenses and future treatment</li>
                    <li>• Lost wages and earning capacity</li>
                    <li>• Pain and suffering</li>
                    <li>• Punitive damages for corporate misconduct</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Disclaimer Section */}
          <div className="mt-12 max-w-4xl mx-auto">
            <Card className="bg-yellow-50 border-yellow-200 border-l-4 border-l-yellow-500">
              <CardHeader>
                <CardTitle className="text-yellow-800 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Important Disclaimer
                </CardTitle>
              </CardHeader>
              <CardContent className="text-yellow-800 space-y-3">
                <p className="text-lg">
                  <strong>This calculator provides estimates only and should not be considered legal advice.</strong> 
                  Actual case values depend on numerous factors including specific circumstances, jurisdiction, 
                  strength of evidence, and other variables that cannot be captured in a simple calculator.
                </p>
                <p>
                  Every pharmaceutical injury case is unique. The estimates provided are based on general 
                  settlement ranges and should not be relied upon for making legal decisions. Consultation 
                  with an experienced pharmaceutical injury attorney is essential to understand your specific 
                  case value and legal options.
                </p>
                <p>
                  <strong>No attorney-client relationship is formed</strong> by using this calculator. 
                  Past results do not guarantee future outcomes. Settlement values can vary significantly 
                  based on case-specific factors, defendant's ability to pay, and other legal considerations.
                </p>
                <p className="text-sm border-t border-yellow-300 pt-3 mt-4">
                  For accurate case evaluation and legal representation, contact Trembach Law Firm at 
                  <strong> (818) 123-4567</strong> for a free consultation with no obligation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmaceuticalCompensationCalculator;