import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Calculator, AlertTriangle } from 'lucide-react';
import SEO from '@/components/SEO';
import heroImage from '@/assets/civil-rights-compensation-calculator.jpg';

const CompensationCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    violationType: '',
    injurySeverity: '',
    medicalCosts: '',
    lostWages: '',
    age: ''
  });
  const [estimate, setEstimate] = useState<number | null>(null);

  const goBack = () => {
    const scrollPos = localStorage.getItem('scrollPosition');
    window.history.back();
    if (scrollPos) {
      setTimeout(() => window.scrollTo(0, parseInt(scrollPos)), 100);
    }
  };

  const calculateEstimate = () => {
    let baseAmount = 50000;
    
    if (formData.violationType === 'police-brutality') baseAmount = 100000;
    if (formData.violationType === 'wrongful-death') baseAmount = 500000;
    if (formData.injurySeverity === 'severe') baseAmount *= 3;
    if (formData.injurySeverity === 'moderate') baseAmount *= 2;
    
    const medical = parseInt(formData.medicalCosts) || 0;
    const wages = parseInt(formData.lostWages) || 0;
    
    setEstimate(baseAmount + medical + wages);
  };

  return (
    <>
      <SEO 
        title="Civil Rights Compensation Calculator | Trembach Law Firm"
        description="Calculate potential compensation for your civil rights case. Free estimation tool for police brutality and civil rights violations in California."
      />
      
      <div className="min-h-screen bg-background">
        <button 
          onClick={goBack}
          className="fixed top-24 left-6 z-50 flex items-center px-4 py-2 bg-white shadow-lg rounded-lg hover:bg-gray-50 transition-all duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Go Back
        </button>

        <section 
          className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Civil Rights Compensation Calculator
            </h1>
            <p className="text-xl mb-6 text-white">
              Get an estimate of your potential civil rights compensation
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 py-12">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calculator className="w-6 h-6 mr-3 text-red-600" />
                Compensation Estimation Tool
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Type of Violation</label>
                  <Select value={formData.violationType} onValueChange={(value) => setFormData(prev => ({ ...prev, violationType: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select violation type" />
                    </SelectTrigger>
                    <SelectContent className="bg-white z-50">
                      <SelectItem value="police-brutality">Police Brutality/Excessive Force</SelectItem>
                      <SelectItem value="false-arrest">False Arrest</SelectItem>
                      <SelectItem value="wrongful-death">Wrongful Death</SelectItem>
                      <SelectItem value="other">Other Violation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Injury Severity</label>
                  <Select value={formData.injurySeverity} onValueChange={(value) => setFormData(prev => ({ ...prev, injurySeverity: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select severity" />
                    </SelectTrigger>
                    <SelectContent className="bg-white z-50">
                      <SelectItem value="minor">Minor Injuries</SelectItem>
                      <SelectItem value="moderate">Moderate Injuries</SelectItem>
                      <SelectItem value="severe">Severe/Permanent Injuries</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Medical Costs ($)</label>
                    <Input 
                      type="number"
                      value={formData.medicalCosts}
                      onChange={(e) => setFormData(prev => ({ ...prev, medicalCosts: e.target.value }))}
                      placeholder="Enter amount"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Lost Wages ($)</label>
                    <Input 
                      type="number"
                      value={formData.lostWages}
                      onChange={(e) => setFormData(prev => ({ ...prev, lostWages: e.target.value }))}
                      placeholder="Enter amount"
                    />
                  </div>
                </div>

                <Button onClick={calculateEstimate} className="w-full bg-red-600 hover:bg-red-700 text-white">
                  Calculate Estimated Compensation
                </Button>

                {estimate && (
                  <Card className="mt-6 bg-green-50 border-green-200">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold text-green-800 mb-2">
                        Estimated Compensation Range: ${estimate.toLocaleString()} - ${(estimate * 2).toLocaleString()}
                      </h3>
                      <p className="text-green-700">
                        This is a preliminary estimate. Actual compensation depends on many factors specific to your case.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-yellow-50 border-yellow-200">
            <CardHeader>
              <CardTitle className="flex items-center text-yellow-800">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Legal Disclaimer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-yellow-800">
                This calculator provides estimates only and does not constitute legal advice. Actual compensation varies based on specific case circumstances, evidence, and applicable laws. Consult with an attorney for accurate case evaluation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CompensationCalculator;