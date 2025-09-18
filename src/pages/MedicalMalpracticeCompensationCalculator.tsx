import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  Clock,
  Shield,
  AlertTriangle,
  CheckCircle,
  Scale,
  Building,
  Calculator,
  DollarSign,
  TrendingUp,
  FileText,
  Stethoscope,
  Activity,
  Heart
} from 'lucide-react';
import heroBackground from '@/assets/medical-malpractice-compensation-calculator-hero.jpg';
import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import GoBack from '@/components/GoBack';

interface FormData {
  typeOfError: string;
  severityOfInjury: string;
  age: string;
  medicalExpenses: string;
  lostWages: string;
  futureCareCosts: string;
  painAndSuffering: string;
  permanentDisability: string;
  impactOnLife: string;
}

interface CalculationResult {
  economicDamages: number;
  nonEconomicDamages: number;
  totalDamages: number;
  micraCap: number;
  estimatedRecovery: number;
}

const MedicalMalpracticeCompensationCalculator: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    typeOfError: '',
    severityOfInjury: '',
    age: '',
    medicalExpenses: '',
    lostWages: '',
    futureCareCosts: '',
    painAndSuffering: '',
    permanentDisability: '',
    impactOnLife: ''
  });

  const [calculation, setCalculation] = useState<CalculationResult | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateCompensation = () => {
    // Economic damages calculation
    const medicalExpenses = parseFloat(formData.medicalExpenses) || 0;
    const lostWages = parseFloat(formData.lostWages) || 0;
    const futureCareCosts = parseFloat(formData.futureCareCosts) || 0;
    const economicDamages = medicalExpenses + lostWages + futureCareCosts;

    // Pain and suffering multiplier based on severity
    const painMultiplier = {
      'minor': 1.5,
      'moderate': 3,
      'severe': 5,
      'catastrophic': 7
    }[formData.severityOfInjury] || 2;

    // Additional factors
    const permanentDisabilityMultiplier = formData.permanentDisability === 'yes' ? 1.5 : 1;
    const impactMultiplier = {
      'minimal': 1,
      'moderate': 1.3,
      'significant': 1.6,
      'life-changing': 2
    }[formData.impactOnLife] || 1;

    // Calculate non-economic damages
    const basePainSuffering = Math.max(economicDamages * painMultiplier, 50000);
    const adjustedPainSuffering = basePainSuffering * permanentDisabilityMultiplier * impactMultiplier;

    // MICRA cap for 2024 (medical malpractice cases)
    const currentYear = new Date().getFullYear();
    const micraCap = currentYear >= 2023 ? 430000 : 350000; // Increasing annually

    const nonEconomicDamages = Math.min(adjustedPainSuffering, micraCap);
    const totalDamages = economicDamages + nonEconomicDamages;

    setCalculation({
      economicDamages,
      nonEconomicDamages,
      totalDamages,
      micraCap,
      estimatedRecovery: totalDamages
    });
  };

  const resetCalculator = () => {
    setFormData({
      typeOfError: '',
      severityOfInjury: '',
      age: '',
      medicalExpenses: '',
      lostWages: '',
      futureCareCosts: '',
      painAndSuffering: '',
      permanentDisability: '',
      impactOnLife: ''
    });
    setCalculation(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Medical Malpractice Compensation Calculator | California | Trembach Law"
        description="Calculate potential compensation for your California medical malpractice case. Free calculator considers MICRA caps, economic damages, and pain & suffering for all medical errors."
      />
      
      <Navigation />
      <GoBack />

      {/* Hero Section */}
      <section 
        className="relative h-[50vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${heroBackground})` }}
      >
        <div className="text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Medical Malpractice Compensation Calculator
          </h1>
          <p className="text-xl md:text-2xl">
            Estimate Your Potential Recovery Under California MICRA Laws
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Calculator Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-3xl mb-4 flex items-center gap-3">
                  <Calculator className="h-8 w-8 text-primary" />
                  Medical Malpractice Compensation Calculator
                </CardTitle>
                <p className="text-lg text-muted-foreground">
                  This calculator provides estimates based on California medical malpractice law and MICRA damage caps. Actual compensation depends on specific case details and requires legal evaluation.
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  
                  {/* Medical Error Information */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Stethoscope className="h-5 w-5 text-primary" />
                      Medical Error Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Type of Medical Error</label>
                        <Select onValueChange={(value) => handleSelectChange('typeOfError', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type of error" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="misdiagnosis">Misdiagnosis/Delayed Diagnosis</SelectItem>
                            <SelectItem value="surgical-error">Surgical Error</SelectItem>
                            <SelectItem value="medication-error">Medication Error</SelectItem>
                            <SelectItem value="birth-injury">Birth Injury</SelectItem>
                            <SelectItem value="anesthesia-error">Anesthesia Error</SelectItem>
                            <SelectItem value="emergency-room">Emergency Room Error</SelectItem>
                            <SelectItem value="hospital-infection">Hospital-Acquired Infection</SelectItem>
                            <SelectItem value="nursing-error">Nursing Error</SelectItem>
                            <SelectItem value="other">Other Medical Error</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Severity of Injury</label>
                        <Select onValueChange={(value) => handleSelectChange('severityOfInjury', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select injury severity" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="minor">Minor Injury (temporary)</SelectItem>
                            <SelectItem value="moderate">Moderate Injury (some lasting effects)</SelectItem>
                            <SelectItem value="severe">Severe Injury (significant impact)</SelectItem>
                            <SelectItem value="catastrophic">Catastrophic Injury (life-altering)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Economic Damages */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-primary" />
                      Economic Damages (No Limits Under MICRA)
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Medical Expenses</label>
                        <Input 
                          type="number"
                          name="medicalExpenses"
                          value={formData.medicalExpenses}
                          onChange={handleInputChange}
                          placeholder="$0"
                          className="w-full"
                        />
                        <p className="text-xs text-muted-foreground mt-1">Past & future medical costs</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Lost Wages</label>
                        <Input 
                          type="number"
                          name="lostWages"
                          value={formData.lostWages}
                          onChange={handleInputChange}
                          placeholder="$0"
                          className="w-full"
                        />
                        <p className="text-xs text-muted-foreground mt-1">Past & future lost income</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Future Care Costs</label>
                        <Input 
                          type="number"
                          name="futureCareCosts"
                          value={formData.futureCareCosts}
                          onChange={handleInputChange}
                          placeholder="$0"
                          className="w-full"
                        />
                        <p className="text-xs text-muted-foreground mt-1">Long-term care, therapy</p>
                      </div>
                    </div>
                  </div>

                  {/* Impact on Life */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Heart className="h-5 w-5 text-primary" />
                      Impact on Your Life
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Your Age</label>
                        <Select onValueChange={(value) => handleSelectChange('age', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select age range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-30">Under 30</SelectItem>
                            <SelectItem value="30-50">30-50</SelectItem>
                            <SelectItem value="51-65">51-65</SelectItem>
                            <SelectItem value="over-65">Over 65</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Permanent Disability</label>
                        <Select onValueChange={(value) => handleSelectChange('permanentDisability', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="no">No permanent disability</SelectItem>
                            <SelectItem value="yes">Yes, permanent disability</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Impact on Daily Life</label>
                        <Select onValueChange={(value) => handleSelectChange('impactOnLife', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select impact level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="minimal">Minimal impact</SelectItem>
                            <SelectItem value="moderate">Moderate impact</SelectItem>
                            <SelectItem value="significant">Significant impact</SelectItem>
                            <SelectItem value="life-changing">Life-changing impact</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <Button 
                      onClick={calculateCompensation}
                      size="lg" 
                      className="flex-1"
                      disabled={!formData.severityOfInjury || !formData.typeOfError}
                    >
                      <Calculator className="mr-2 h-5 w-5" />
                      Calculate Compensation
                    </Button>
                    <Button 
                      onClick={resetCalculator}
                      variant="outline"
                      size="lg"
                    >
                      Reset
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            {calculation && (
              <Card className="mt-8 p-8 bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-green-700 flex items-center gap-3">
                    <TrendingUp className="h-8 w-8" />
                    Your Estimated Compensation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="text-center p-6 bg-white rounded-lg shadow">
                      <h4 className="text-lg font-semibold text-green-700 mb-2">Economic Damages</h4>
                      <p className="text-3xl font-bold text-green-600">
                        ${calculation.economicDamages.toLocaleString()}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">No limits under MICRA</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-lg shadow">
                      <h4 className="text-lg font-semibold text-green-700 mb-2">Non-Economic Damages</h4>
                      <p className="text-3xl font-bold text-green-600">
                        ${calculation.nonEconomicDamages.toLocaleString()}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">Subject to MICRA cap</p>
                    </div>
                  </div>
                  
                  <div className="text-center p-6 bg-primary text-primary-foreground rounded-lg">
                    <h4 className="text-xl font-semibold mb-2">Total Estimated Recovery</h4>
                    <p className="text-4xl font-bold mb-2">
                      ${calculation.estimatedRecovery.toLocaleString()}
                    </p>
                    <p className="text-sm opacity-90">
                      Based on current MICRA cap of ${calculation.micraCap.toLocaleString()}
                    </p>
                  </div>

                  <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                    <h5 className="font-semibold text-amber-800 mb-2">Important Disclaimer</h5>
                    <p className="text-sm text-amber-700">
                      This is an estimate only. Actual compensation depends on many factors including case strength, evidence quality, defendant's assets, and negotiation skills. Contact us for a professional case evaluation to understand your true potential recovery.
                    </p>
                  </div>

                  <div className="mt-6 text-center">
                    <Button size="lg" asChild>
                      <Link to="/medical-malpractice-case-evaluation">
                        <Scale className="mr-2 h-5 w-5" />
                        Get Professional Case Review
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              
              {/* Contact Card */}
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    Get Expert Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <Button size="lg" className="w-full text-lg" asChild>
                      <a href="tel:8181234567" className="flex items-center justify-center text-lg font-bold">
                        <Phone className="mr-2 h-5 w-5" />
                        📞 Call (818) 123-4567
                      </a>
                    </Button>
                    <p className="text-sm text-muted-foreground mt-2">Free consultation available 24/7</p>
                  </div>
                </CardContent>
              </Card>

              {/* Factors Affecting Compensation */}
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl">Factors Affecting Compensation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Severity and permanence of injuries</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Clear evidence of medical negligence</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Impact on earning capacity</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Age and life expectancy</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Quality of medical expert testimony</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Defendant's insurance coverage</span>
                  </div>
                </CardContent>
              </Card>

              {/* MICRA Information */}
              <Card className="bg-blue-50 border-blue-200 p-6">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-700">California MICRA Laws</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-blue-600 space-y-2">
                  <p><strong>2024 Non-Economic Caps:</strong></p>
                  <p>• Medical Injury: $430,000</p>
                  <p>• Wrongful Death: $600,000</p>
                  <p className="mt-3"><strong>Economic Damages:</strong> Unlimited (medical bills, lost wages, future care)</p>
                  <p className="mt-3">Caps increase annually until reaching $750,000/$1,000,000 in 2033</p>
                </CardContent>
              </Card>

              {/* Time Warning */}
              <Card className="bg-red-50 border-red-200 p-6">
                <CardHeader>
                  <CardTitle className="text-xl text-red-700 flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Time-Sensitive Warning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-red-600 text-sm leading-relaxed">
                    California medical malpractice cases have strict deadlines. Evidence disappears quickly. Don't delay - contact us immediately to protect your rights and maximize your compensation.
                  </p>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl">Why Choose Trembach Law?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Medical experts on our team</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Proven MICRA expertise</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">No fees unless we win</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Maximum compensation pursuit</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MedicalMalpracticeCompensationCalculator;