import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, Shield } from 'lucide-react';
import { useCalculatorForm, CalculatorFormData, CalculatorResults } from '@/hooks/useCalculatorForm';
import { FormNavigation } from '@/components/calculator/FormNavigation';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface CivilRightsFormData extends CalculatorFormData {
  violationType: string;
  injurySeverity: string;
  medicalCosts: string;
  lostWages: string;
  emotionalDistress: string;
  age: string;
}

const initialFormData: CivilRightsFormData = {
  violationType: '',
  injurySeverity: '',
  medicalCosts: '',
  lostWages: '',
  emotionalDistress: '',
  age: ''
};

function calculateCompensation(data: CivilRightsFormData): CalculatorResults {
  let baseAmount = 75000;

  const violationMultipliers: Record<string, number> = {
    policeBrutality: 3.5,
    falseArrest: 2.5,
    excessiveForce: 3.0,
    unlawfulSearch: 2.3
  };

  const severityMultipliers: Record<string, number> = {
    minor: 1.0,
    moderate: 2.5,
    serious: 4.0,
    catastrophic: 6.0
  };

  baseAmount *= violationMultipliers[data.violationType] || 1;
  baseAmount *= severityMultipliers[data.injurySeverity] || 1;

  const medicalCosts = parseInt(data.medicalCosts) || 0;
  const lostWages = parseInt(data.lostWages) || 0;
  const emotionalDistress = parseInt(data.emotionalDistress) || 0;

  baseAmount += medicalCosts + lostWages + emotionalDistress;

  const min = Math.round(baseAmount * 0.6);
  const max = Math.round(baseAmount * 1.5);

  return { min, max };
}

function validateForm(data: CivilRightsFormData, step: number): boolean {
  if (step === 1) return !!(data.violationType && data.injurySeverity);
  if (step === 2) return !!(data.medicalCosts && data.lostWages && data.emotionalDistress && data.age);
  return true;
}

const CivilRightsCompensationCalculator = () => {
  const { step, formData, results, updateField, handleNext, handleBack, resetForm, isStepValid } = 
    useCalculatorForm<CivilRightsFormData>(initialFormData, calculateCompensation, validateForm);

  return (
    <>
      <Helmet>
        <title>Civil Rights Calculator | Police Brutality Compensation | Trembach Law</title>
        <meta name="description" content="Calculate civil rights violation compensation for police brutality cases. Free federal rights estimates." />
      </Helmet>

      <main className="min-h-screen bg-white">
        <div className="border-b border-slate-200">
          <div className="container mx-auto px-6 py-4 max-w-5xl">
            <Link to="/calculators" className="inline-flex items-center text-slate-600 hover:text-slate-900 visited:text-slate-600 no-underline">
              <ArrowLeft size={16} className="mr-2" />
              <span className="text-sm font-medium">Back to All Calculators</span>
            </Link>
          </div>
        </div>

        <section className="pt-20 pb-12 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight leading-[1.1]">
              Civil Rights<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light">
              Constitutional violation compensation
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6 max-w-3xl">
            {step === 1 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-black mb-2">Violation Details</h2>
                  <p className="text-slate-600">Tell us about the civil rights violation</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">Type of Violation</label>
                    <Select value={formData.violationType} onValueChange={(value) => updateField('violationType', value)}>
                      <SelectTrigger className="h-14 text-lg">
                        <SelectValue placeholder="Select violation type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="policeBrutality">Police Brutality</SelectItem>
                        <SelectItem value="falseArrest">False Arrest</SelectItem>
                        <SelectItem value="excessiveForce">Excessive Force</SelectItem>
                        <SelectItem value="unlawfulSearch">Unlawful Search</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">Injury Severity</label>
                    <Select value={formData.injurySeverity} onValueChange={(value) => updateField('injurySeverity', value)}>
                      <SelectTrigger className="h-14 text-lg">
                        <SelectValue placeholder="Select severity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="minor">Minor</SelectItem>
                        <SelectItem value="moderate">Moderate</SelectItem>
                        <SelectItem value="serious">Serious</SelectItem>
                        <SelectItem value="catastrophic">Catastrophic</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <FormNavigation currentStep={step} isValid={isStepValid()} onBack={handleBack} onNext={handleNext} />
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-black mb-2">Financial Impact</h2>
                  <p className="text-slate-600">Provide damages information</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">Medical Costs</label>
                    <Select value={formData.medicalCosts} onValueChange={(value) => updateField('medicalCosts', value)}>
                      <SelectTrigger className="h-14 text-lg">
                        <SelectValue placeholder="Select medical costs" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5000">Under $10,000</SelectItem>
                        <SelectItem value="25000">$10,000 - $50,000</SelectItem>
                        <SelectItem value="75000">$50,000 - $100,000</SelectItem>
                        <SelectItem value="150000">Over $100,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">Lost Wages</label>
                    <Select value={formData.lostWages} onValueChange={(value) => updateField('lostWages', value)}>
                      <SelectTrigger className="h-14 text-lg">
                        <SelectValue placeholder="Select lost wages" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2500">Under $5,000</SelectItem>
                        <SelectItem value="15000">$5,000 - $25,000</SelectItem>
                        <SelectItem value="50000">$25,000 - $75,000</SelectItem>
                        <SelectItem value="125000">Over $75,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">Emotional Distress</label>
                    <Select value={formData.emotionalDistress} onValueChange={(value) => updateField('emotionalDistress', value)}>
                      <SelectTrigger className="h-14 text-lg">
                        <SelectValue placeholder="Select impact level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10000">Mild</SelectItem>
                        <SelectItem value="25000">Moderate</SelectItem>
                        <SelectItem value="50000">Severe</SelectItem>
                        <SelectItem value="100000">Extreme</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">Your Age</label>
                    <Select value={formData.age} onValueChange={(value) => updateField('age', value)}>
                      <SelectTrigger className="h-14 text-lg">
                        <SelectValue placeholder="Select age range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="25">Under 40</SelectItem>
                        <SelectItem value="50">40-64</SelectItem>
                        <SelectItem value="70">65 or older</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <FormNavigation currentStep={step} isValid={isStepValid()} onBack={handleBack} onNext={handleNext} />
              </div>
            )}

            {step === 3 && results && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-black mb-2">Estimated Compensation</h2>
                  <p className="text-slate-600">Based on your civil rights case</p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8 text-center">
                  <div className="text-5xl font-bold text-black mb-2">
                    ${results.min.toLocaleString()} - ${results.max.toLocaleString()}
                  </div>
                  <p className="text-slate-600">Estimated Range</p>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <h3 className="font-semibold text-amber-900 mb-3">Important Legal Disclaimer</h3>
                  <p className="text-sm text-amber-800 leading-relaxed">
                    This estimate is for informational purposes only and does not constitute legal advice. 
                    Civil rights cases vary significantly based on evidence, jurisdiction, and individual circumstances. 
                    Actual compensation depends on proving constitutional violations, documentation quality, and case-specific factors. 
                    Consult with a civil rights attorney for a comprehensive evaluation of your case.
                  </p>
                </div>

                <div className="text-center pt-4">
                  <Button size="lg" className="h-14 px-8">Get Free Case Review</Button>
                  <button onClick={resetForm} className="block mx-auto mt-4 text-sm text-slate-600 hover:text-black">
                    Calculate Another Case
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">$250K+</div>
                <p className="text-slate-600">Police brutality average</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">Federal</div>
                <p className="text-slate-600">Civil rights protection</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">No Fee</div>
                <p className="text-slate-600">Unless we win</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CivilRightsCompensationCalculator;
