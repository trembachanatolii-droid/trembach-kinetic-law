import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, DollarSign, Phone } from 'lucide-react';
import heroBackground from '@/assets/burn-compensation-calculator-hero.jpg';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';

const BurnCompensationCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    burnSeverity: '',
    bodyPercentage: '',
    medicalExpenses: '',
    lostWages: '',
    age: '',
    income: ''
  });

  const [calculation, setCalculation] = useState<any>(null);

  const calculateCompensation = () => {
    const medical = parseFloat(formData.medicalExpenses) || 0;
    const wages = parseFloat(formData.lostWages) || 0;
    const age = parseFloat(formData.age) || 30;
    const income = parseFloat(formData.income) || 50000;

    let multiplier = 2;
    if (formData.burnSeverity === 'third-degree') multiplier = 5;
    else if (formData.burnSeverity === 'second-degree') multiplier = 3.5;

    const bodyPercent = parseFloat(formData.bodyPercentage) || 10;
    if (bodyPercent > 20) multiplier += 1;

    const economicDamages = medical + wages;
    const nonEconomicDamages = economicDamages * multiplier;
    const totalDamages = economicDamages + nonEconomicDamages;

    setCalculation({
      economic: economicDamages,
      nonEconomic: nonEconomicDamages,
      total: totalDamages,
      range: {
        low: totalDamages * 0.7,
        high: totalDamages * 1.5
      }
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Burn Injury Compensation Calculator | California Settlement Estimator"
        description="Calculate potential burn injury compensation in California. Free settlement estimator for thermal, chemical, electrical burns."
        canonical="/burn-compensation-calculator"
      />
      
      <GoBack />
      
      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Burn Injury Compensation Calculator
          </h1>
          <p className="text-xl mb-6">
            Estimate your potential settlement for burn injuries in California
          </p>
        </div>
      </section>

      {/* Calculator */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="w-6 h-6 mr-2 text-red-600" />
                  Calculate Your Burn Injury Compensation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Burn Severity</Label>
                    <Select value={formData.burnSeverity} onValueChange={(value) => setFormData(prev => ({ ...prev, burnSeverity: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select burn degree" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="first-degree">First-degree</SelectItem>
                        <SelectItem value="second-degree">Second-degree</SelectItem>
                        <SelectItem value="third-degree">Third-degree</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Body Surface Affected (%)</Label>
                    <Input
                      type="number"
                      value={formData.bodyPercentage}
                      onChange={(e) => setFormData(prev => ({ ...prev, bodyPercentage: e.target.value }))}
                      placeholder="10"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Medical Expenses ($)</Label>
                    <Input
                      type="number"
                      value={formData.medicalExpenses}
                      onChange={(e) => setFormData(prev => ({ ...prev, medicalExpenses: e.target.value }))}
                      placeholder="50000"
                    />
                  </div>
                  <div>
                    <Label>Lost Wages ($)</Label>
                    <Input
                      type="number"
                      value={formData.lostWages}
                      onChange={(e) => setFormData(prev => ({ ...prev, lostWages: e.target.value }))}
                      placeholder="10000"
                    />
                  </div>
                </div>

                <Button 
                  onClick={calculateCompensation}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4"
                >
                  Calculate Compensation
                </Button>

                {/* Disclaimer */}
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                  <h4 className="font-bold text-amber-800 mb-2">Important Disclaimer</h4>
                  <p className="text-sm text-amber-700">
                    This calculator provides rough estimates only and should not be considered legal advice. 
                    Actual settlement amounts depend on numerous case-specific factors including the severity 
                    of injuries, circumstances of the incident, available insurance coverage, and California 
                    state laws. For an accurate evaluation of your potential compensation, please consult 
                    with a qualified burn injury attorney who can review the specific details of your case.
                  </p>
                </div>

                {calculation && (
                  <Card className="bg-green-50 border-green-200">
                    <CardHeader>
                      <CardTitle className="text-green-800">Estimated Compensation Range</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Economic Damages:</span>
                          <span className="font-bold">${calculation.economic.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Non-Economic Damages:</span>
                          <span className="font-bold">${calculation.nonEconomic.toLocaleString()}</span>
                        </div>
                        <div className="border-t pt-3">
                          <div className="flex justify-between text-lg font-bold">
                            <span>Estimated Range:</span>
                            <span>${calculation.range.low.toLocaleString()} - ${calculation.range.high.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-4">
                        This is an estimate only. Actual compensation depends on many factors specific to your case.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4">Get Professional Case Review</h3>
                  <p className="mb-4">For accurate compensation estimates based on your specific case details</p>
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => window.location.href = '/burn-case-evaluation'}
                  >
                    Free Case Evaluation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurnCompensationCalculator;