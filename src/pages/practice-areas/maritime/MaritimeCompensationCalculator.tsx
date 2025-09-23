import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, Phone } from 'lucide-react';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';
import heroImage from '@/assets/maritime-compensation-hero.jpg';

const MaritimeCompensationCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    injuryType: '',
    weeklyWages: '',
    medicalCosts: '',
    timeOffWork: ''
  });

  const [estimate, setEstimate] = useState<number | null>(null);

  const calculateCompensation = () => {
    const wages = parseFloat(formData.weeklyWages) || 0;
    const medical = parseFloat(formData.medicalCosts) || 0;
    const weeks = parseFloat(formData.timeOffWork) || 0;

    let multiplier = 1;
    switch (formData.injuryType) {
      case 'minor':
        multiplier = 2;
        break;
      case 'moderate':
        multiplier = 3.5;
        break;
      case 'severe':
        multiplier = 5;
        break;
      case 'permanent':
        multiplier = 7;
        break;
      default:
        multiplier = 2;
    }

    const lostWages = wages * weeks;
    const total = (medical + lostWages) * multiplier;
    setEstimate(total);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Maritime Compensation Calculator - Estimate Your Case Value"
        description="Calculate potential compensation for maritime accidents. Free estimation tool for Jones Act, LHWCA, and passenger injury claims. Get instant case value analysis."
        keywords="maritime compensation calculator, case value estimator, Jones Act compensation, LHWCA benefits calculator"
      />

      <GoBack />

      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center justify-center">
          <div className="text-white max-w-3xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Maritime Compensation Calculator
            </h1>
            <p className="text-xl mb-6">
              Estimate the potential value of your maritime accident case
            </p>
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg"
              onClick={() => window.location.href = 'tel:8181234567'}
            >
              <Phone className="w-5 h-5 mr-2" />
              Get Accurate Evaluation
            </Button>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calculator className="w-6 h-6 mr-2" />
              Compensation Estimator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Injury Severity</label>
                <Select value={formData.injuryType} onValueChange={(value) => setFormData(prev => ({ ...prev, injuryType: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select injury type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="minor">Minor Injury</SelectItem>
                    <SelectItem value="moderate">Moderate Injury</SelectItem>
                    <SelectItem value="severe">Severe Injury</SelectItem>
                    <SelectItem value="permanent">Permanent Disability</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Weekly Wages ($)</label>
                <Input
                  type="number"
                  placeholder="Enter weekly wages"
                  value={formData.weeklyWages}
                  onChange={(e) => setFormData(prev => ({ ...prev, weeklyWages: e.target.value }))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Medical Costs ($)</label>
                <Input
                  type="number"
                  placeholder="Enter medical expenses"
                  value={formData.medicalCosts}
                  onChange={(e) => setFormData(prev => ({ ...prev, medicalCosts: e.target.value }))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Time Off Work (weeks)</label>
                <Input
                  type="number"
                  placeholder="Enter weeks off work"
                  value={formData.timeOffWork}
                  onChange={(e) => setFormData(prev => ({ ...prev, timeOffWork: e.target.value }))}
                />
              </div>
            </div>

            <Button 
              onClick={calculateCompensation}
              className="w-full bg-primary hover:bg-primary/90 text-white"
            >
              Calculate Estimated Compensation
            </Button>

            {estimate !== null && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <h3 className="text-2xl font-bold text-green-800 mb-2">
                  Estimated Compensation Range
                </h3>
                <p className="text-3xl font-bold text-green-600">
                  ${(estimate * 0.8).toLocaleString()} - ${estimate.toLocaleString()}
                </p>
                <p className="text-sm text-green-700 mt-2">
                  *This is an estimate. Actual compensation depends on many factors.
                </p>
              </div>
            )}

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <strong>Disclaimer:</strong> This calculator provides estimates only. Actual compensation 
                depends on specific case facts, applicable laws, and many other factors. Contact our 
                maritime attorneys for accurate case evaluation.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MaritimeCompensationCalculator;