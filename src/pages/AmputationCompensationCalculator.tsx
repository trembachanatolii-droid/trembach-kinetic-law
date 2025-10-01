import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import SEO from '@/components/SEO';
import {
  Calculator,
  DollarSign,
  AlertTriangle,
  Info,
  Phone,
  Star
} from 'lucide-react';
import heroBackground from '@/assets/amputation-compensation-calculator-hero.jpg';

const AmputationCompensationCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    age: '',
    occupation: '',
    annualIncome: '',
    amputationType: '',
    medicalExpenses: '',
    futureCareCosts: '',
    permanentDisability: '',
    painLevel: '',
    lifeImpact: ''
  });

  const [estimatedCompensation, setEstimatedCompensation] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateCompensation = () => {
    // Basic calculation algorithm for estimation
    const income = parseFloat(formData.annualIncome) || 0;
    const medical = parseFloat(formData.medicalExpenses) || 0;
    const futureCare = parseFloat(formData.futureCareCosts) || 0;
    const age = parseInt(formData.age) || 25;
    
    // Amputation type multipliers
    const amputationMultipliers: Record<string, number> = {
      'finger': 1.2,
      'hand': 2.5,
      'arm-below': 3.5,
      'arm-above': 4.5,
      'toe': 1.1,
      'foot': 2.8,
      'leg-below': 4.0,
      'leg-above': 5.5,
      'multiple': 7.0
    };

    // Pain level multipliers
    const painMultipliers: Record<string, number> = {
      'mild': 1.0,
      'moderate': 1.5,
      'severe': 2.0,
      'extreme': 2.5
    };

    // Life impact multipliers
    const impactMultipliers: Record<string, number> = {
      'minimal': 1.0,
      'moderate': 1.3,
      'significant': 1.8,
      'severe': 2.2
    };

    const workingYears = Math.max(65 - age, 0);
    const lostEarnings = income * workingYears * 0.7; // Discounted present value

    const amputationMultiplier = amputationMultipliers[formData.amputationType] || 1.0;
    const painMultiplier = painMultipliers[formData.painLevel] || 1.0;
    const impactMultiplier = impactMultipliers[formData.lifeImpact] || 1.0;

    // Base compensation calculation
    const economicDamages = medical + futureCare + lostEarnings;
    const nonEconomicDamages = economicDamages * 0.8 * amputationMultiplier * painMultiplier * impactMultiplier;
    
    const totalEstimate = economicDamages + nonEconomicDamages;
    
    setEstimatedCompensation(Math.round(totalEstimate));
    setShowResults(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateCompensation();
  };

  return (
    <>
      <SEO 
        title="Free Amputation Compensation Calculator | California Injury Lawyers"
        description="Calculate potential compensation for your California amputation injury case. Free, confidential calculator for traumatic limb loss claims."
        canonical="https://trembachlaw.com/amputation-compensation-calculator"
      />
      
      <div className="min-h-screen bg-background">
        <section 
          className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Amputation Compensation Calculator
            </h1>
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Trusted by Amputation Victims</span>
            </div>
            <p className="text-xl">
              Get an estimate of your potential amputation injury compensation
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="text-center py-12 px-8 bg-gradient-to-b from-gray-50 to-white">
              <Calculator className="w-16 h-16 mx-auto text-red-600 mb-6" />
              <h2 className="text-4xl font-semibold text-red-600 mb-4">
                Amputation Compensation Calculator
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                This calculator provides estimates based on California amputation injury cases
              </p>
            </div>

            <div className="px-8 pb-12">
              <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Your Age
                      </label>
                      <Input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        placeholder="Enter your age"
                        className="h-14 text-lg border-gray-200 rounded-2xl"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Annual Income
                      </label>
                      <Input
                        type="number"
                        name="annualIncome"
                        value={formData.annualIncome}
                        onChange={handleInputChange}
                        placeholder="$50,000"
                        className="h-14 text-lg border-gray-200 rounded-2xl"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Type of Amputation
                    </label>
                    <Select value={formData.amputationType} onValueChange={(value) => handleSelectChange('amputationType', value)}>
                      <SelectTrigger className="h-14 text-lg border-gray-200 rounded-2xl">
                        <SelectValue placeholder="Select amputation type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="finger">Finger/Thumb</SelectItem>
                        <SelectItem value="hand">Hand</SelectItem>
                        <SelectItem value="arm-below">Below-Elbow Arm</SelectItem>
                        <SelectItem value="arm-above">Above-Elbow Arm</SelectItem>
                        <SelectItem value="toe">Toe</SelectItem>
                        <SelectItem value="foot">Foot</SelectItem>
                        <SelectItem value="leg-below">Below-Knee Leg</SelectItem>
                        <SelectItem value="leg-above">Above-Knee Leg</SelectItem>
                        <SelectItem value="multiple">Multiple Limbs</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Medical Expenses (Current)
                      </label>
                      <Input
                        type="number"
                        name="medicalExpenses"
                        value={formData.medicalExpenses}
                        onChange={handleInputChange}
                        placeholder="$25,000"
                        className="h-14 text-lg border-gray-200 rounded-2xl"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Future Care Costs
                      </label>
                      <Input
                        type="number"
                        name="futureCareCosts"
                        value={formData.futureCareCosts}
                        onChange={handleInputChange}
                        placeholder="$100,000"
                        className="h-14 text-lg border-gray-200 rounded-2xl"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Pain Level
                      </label>
                      <Select value={formData.painLevel} onValueChange={(value) => handleSelectChange('painLevel', value)}>
                        <SelectTrigger className="h-14 text-lg border-gray-200 rounded-2xl">
                          <SelectValue placeholder="Select pain level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mild">Mild</SelectItem>
                          <SelectItem value="moderate">Moderate</SelectItem>
                          <SelectItem value="severe">Severe</SelectItem>
                          <SelectItem value="extreme">Extreme</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Life Impact
                      </label>
                      <Select value={formData.lifeImpact} onValueChange={(value) => handleSelectChange('lifeImpact', value)}>
                        <SelectTrigger className="h-14 text-lg border-gray-200 rounded-2xl">
                          <SelectValue placeholder="Select impact level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="minimal">Minimal Impact</SelectItem>
                          <SelectItem value="moderate">Moderate Impact</SelectItem>
                          <SelectItem value="significant">Significant Impact</SelectItem>
                          <SelectItem value="severe">Severe Impact</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      className="w-full h-16 text-lg font-semibold bg-red-600 hover:bg-red-700 rounded-2xl"
                    >
                      <Calculator className="w-5 h-5 mr-2" />
                      Calculate My Compensation
                    </Button>
                  </div>
                </div>
              </form>

              {showResults && estimatedCompensation && (
                <div className="mt-12 max-w-3xl mx-auto">
                  <Card className="border-green-200 bg-green-50">
                    <CardHeader>
                      <CardTitle className="flex items-center text-green-700">
                        <DollarSign className="w-6 h-6 mr-2" />
                        Estimated Compensation Range
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-green-700 mb-4">
                          ${estimatedCompensation.toLocaleString()} - ${(estimatedCompensation * 1.5).toLocaleString()}
                        </div>
                        <p className="text-gray-600 mb-6">
                          This is an estimate based on typical California amputation cases
                        </p>
                        
                        <Alert className="mb-6">
                          <AlertTriangle className="h-4 w-4" />
                          <AlertDescription>
                            <strong>Important Disclaimer:</strong> This calculator provides estimates only. Actual compensation depends on many factors unique to your case. Consult with an experienced amputation attorney for an accurate assessment.
                          </AlertDescription>
                        </Alert>

                        <Button 
                          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl"
                          onClick={() => window.location.href = '/amputation-case-evaluation'}
                        >
                          Get Free Case Evaluation
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              <div className="mt-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <Phone className="w-5 h-5 mr-2 text-red-600" />
                  <span className="text-lg font-medium">Need to speak with someone?</span>
                </div>
                <Button 
                  variant="outline" 
                  className="border-red-600 text-red-600 hover:bg-red-50"
                  onClick={() => window.location.href = 'tel:8181234567'}
                >
                  Call (818) 123-4567
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AmputationCompensationCalculator;