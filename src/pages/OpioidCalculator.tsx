import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Pill } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const OpioidCalculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    addictionType: '',
    addictionSeverity: '',
    treatmentCosts: '',
    lostWages: '',
    addictionDuration: '',
    overdoseHistory: '',
    age: ''
  });
  const [results, setResults] = useState<{ min: number; max: number } | null>(null);

  const handleNext = () => {
    if (step === 2) {
      calculateCompensation();
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => setStep(step - 1);

  const calculateCompensation = () => {
    let baseMin = 75000;
    let baseMax = 300000;

    // Addiction severity multipliers
    const severityMultipliers: Record<string, number> = {
      'mild': 1,
      'moderate': 2,
      'severe': 4,
      'overdose-survival': 6
    };
    const multiplier = severityMultipliers[formData.addictionSeverity] || 1;
    baseMin *= multiplier;
    baseMax *= multiplier;

    // Treatment costs
    const treatment = parseInt(formData.treatmentCosts) || 50000;
    baseMin += treatment;
    baseMax += treatment * 2;

    // Lost wages
    const wages = parseInt(formData.lostWages) || 40000;
    const duration = parseInt(formData.addictionDuration) || 2;
    baseMin += wages * duration * 0.8;
    baseMax += wages * duration * 1.5;

    // Overdose history premium
    if (formData.overdoseHistory === 'yes') {
      baseMin *= 1.8;
      baseMax *= 2.5;
    }

    // Age factor (younger victims often higher settlements)
    const age = parseInt(formData.age) || 35;
    if (age < 30) {
      baseMax *= 1.3;
    } else if (age < 50) {
      baseMax *= 1.1;
    }

    setResults({ 
      min: Math.round(baseMin), 
      max: Math.round(baseMax) 
    });
    setStep(3);
  };

  const isStepValid = () => {
    if (step === 1) return formData.addictionType && formData.addictionSeverity && formData.overdoseHistory;
    if (step === 2) return formData.treatmentCosts && formData.lostWages && formData.addictionDuration && formData.age;
    return false;
  };

  return (
    <>
      <Helmet>
        <title>Opioid Calculator | Addiction Injury Compensation | Trembach Law</title>
        <meta name="description" content="Calculate opioid crisis compensation for prescription addiction and overdose injuries. Free pharmaceutical liability estimates." />
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
            <Pill className="mx-auto mb-6" size={64} strokeWidth={1.5} />
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight leading-[1.1]">
              Opioid Crisis<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light">
              Prescription addiction compensation
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="mb-12">
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-3">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        s === step ? 'bg-black' : s < step ? 'bg-slate-400' : 'bg-slate-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-slate-500">Step {step} of 3</span>
              </div>
            </div>

            {step === 1 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-black mb-2">Addiction Details</h2>
                  <p className="text-slate-600">Tell us about your opioid exposure</p>
                </div>

                <div className="space-y-4">
                  <label className="block">
                    <span className="text-sm font-medium text-black mb-3 block">Type of Opioid</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        { value: 'oxycontin', label: 'OxyContin', desc: 'Prescription pain medication' },
                        { value: 'percocet', label: 'Percocet', desc: 'Oxycodone/acetaminophen' },
                        { value: 'vicodin', label: 'Vicodin', desc: 'Hydrocodone combination' },
                        { value: 'fentanyl', label: 'Fentanyl', desc: 'Synthetic opioid' },
                        { value: 'morphine', label: 'Morphine', desc: 'Natural opioid' },
                        { value: 'heroin', label: 'Heroin (from pills)', desc: 'Street drug progression' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setFormData({ ...formData, addictionType: option.value })}
                          className={`p-4 rounded-xl border-2 text-left transition-all ${
                            formData.addictionType === option.value
                              ? 'border-black bg-black text-white'
                              : 'border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <div className="font-medium mb-1">{option.label}</div>
                          <div className={`text-sm ${formData.addictionType === option.value ? 'text-white/70' : 'text-slate-500'}`}>
                            {option.desc}
                          </div>
                        </button>
                      ))}
                    </div>
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium text-black mb-3 block">Addiction Severity</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        { value: 'mild', label: 'Mild', desc: 'Dependency developed' },
                        { value: 'moderate', label: 'Moderate', desc: 'Required treatment' },
                        { value: 'severe', label: 'Severe', desc: 'Multiple rehab stays' },
                        { value: 'overdose-survival', label: 'Overdose Survivor', desc: 'Life-threatening event' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setFormData({ ...formData, addictionSeverity: option.value })}
                          className={`p-4 rounded-xl border-2 text-left transition-all ${
                            formData.addictionSeverity === option.value
                              ? 'border-black bg-black text-white'
                              : 'border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <div className="font-medium mb-1">{option.label}</div>
                          <div className={`text-sm ${formData.addictionSeverity === option.value ? 'text-white/70' : 'text-slate-500'}`}>
                            {option.desc}
                          </div>
                        </button>
                      ))}
                    </div>
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium text-black mb-3 block">Overdose History</span>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { value: 'yes', label: 'Yes' },
                        { value: 'no', label: 'No' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setFormData({ ...formData, overdoseHistory: option.value })}
                          className={`p-4 rounded-xl border-2 text-center transition-all ${
                            formData.overdoseHistory === option.value
                              ? 'border-black bg-black text-white'
                              : 'border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <span className="font-medium">{option.label}</span>
                        </button>
                      ))}
                    </div>
                  </label>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-black mb-2">Financial Impact</h2>
                  <p className="text-slate-600">Calculate treatment and damages</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">
                      Treatment & Rehabilitation Costs
                    </label>
                    <Input
                      type="number"
                      placeholder="$50,000"
                      value={formData.treatmentCosts}
                      onChange={(e) => setFormData({ ...formData, treatmentCosts: e.target.value })}
                      className="h-14 text-lg"
                    />
                    <p className="text-xs text-slate-500 mt-2">Rehab, therapy, medications, ongoing treatment</p>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">
                      Annual Income Lost
                    </label>
                    <Input
                      type="number"
                      placeholder="$40,000"
                      value={formData.lostWages}
                      onChange={(e) => setFormData({ ...formData, lostWages: e.target.value })}
                      className="h-14 text-lg"
                    />
                    <p className="text-xs text-slate-500 mt-2">Income lost due to addiction</p>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">
                      Years of Addiction
                    </label>
                    <Input
                      type="number"
                      placeholder="2"
                      value={formData.addictionDuration}
                      onChange={(e) => setFormData({ ...formData, addictionDuration: e.target.value })}
                      className="h-14 text-lg"
                      min="1"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">
                      Your Age
                    </label>
                    <Input
                      type="number"
                      placeholder="35"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      className="h-14 text-lg"
                      min="0"
                      max="100"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && results && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-black mb-2">Your Estimated Compensation</h2>
                  <p className="text-slate-600">Based on similar opioid crisis cases</p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8 text-center">
                  <div className="text-5xl font-bold text-black mb-2">
                    ${results.min.toLocaleString()} - ${results.max.toLocaleString()}
                  </div>
                  <p className="text-slate-600">Estimated Compensation Range</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-white border border-slate-200 rounded-xl p-6">
                    <h4 className="font-semibold text-black mb-2">Treatment & Rehabilitation</h4>
                    <p className="text-sm text-slate-600">Detox, inpatient/outpatient programs, therapy, medications</p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-xl p-6">
                    <h4 className="font-semibold text-black mb-2">Lost Wages & Income</h4>
                    <p className="text-sm text-slate-600">Employment loss, career damage, reduced earning capacity</p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-xl p-6">
                    <h4 className="font-semibold text-black mb-2">Medical Complications</h4>
                    <p className="text-sm text-slate-600">Overdose treatment, organ damage, infectious diseases</p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-xl p-6">
                    <h4 className="font-semibold text-black mb-2">Pain & Suffering</h4>
                    <p className="text-sm text-slate-600">Addiction trauma, family impact, loss of quality of life</p>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <p className="text-sm text-amber-900">
                    <strong>Important:</strong> Opioid cases are part of mass tort litigation against pharmaceutical manufacturers 
                    and distributors. Your actual compensation depends on the settlement terms and proof of prescription history.
                  </p>
                </div>

                <div className="text-center pt-4">
                  <h3 className="text-xl font-semibold text-black mb-4">Join the opioid litigation</h3>
                  <Button size="lg" className="h-14 px-8 text-base">
                    Get Free Case Review
                  </Button>
                </div>
              </div>
            )}

            {step < 3 && (
              <div className="flex gap-4 pt-8">
                {step > 1 && (
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleBack}
                    className="flex-1 h-14"
                  >
                    Back
                  </Button>
                )}
                <Button
                  size="lg"
                  onClick={handleNext}
                  disabled={!isStepValid()}
                  className="flex-1 h-14"
                >
                  {step === 2 ? 'Calculate' : 'Continue'}
                </Button>
              </div>
            )}
          </div>
        </section>

        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">$26B+</div>
                <p className="text-slate-600">Total opioid settlements</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">Thousands</div>
                <p className="text-slate-600">Of victims compensated</p>
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

export default OpioidCalculator;