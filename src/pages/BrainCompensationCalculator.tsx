import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const BrainCompensationCalculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    injurySeverity: '',
    permanentDisability: '',
    medicalCosts: '',
    lostWages: '',
    age: '',
    painLevel: ''
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
    let baseMin = 100000;
    let baseMax = 500000;

    // Severity multiplier
    const severityMultipliers: Record<string, number> = {
      'mild': 1,
      'moderate': 3,
      'severe': 8,
      'catastrophic': 15
    };
    const multiplier = severityMultipliers[formData.injurySeverity] || 1;
    baseMin *= multiplier;
    baseMax *= multiplier;

    // Add medical costs
    const medical = parseInt(formData.medicalCosts) || 100000;
    baseMin += medical;
    baseMax += medical * 2;

    // Add lost wages
    const wages = parseInt(formData.lostWages) || 75000;
    const age = parseInt(formData.age) || 45;
    const yearsToRetirement = Math.max(65 - age, 0);
    baseMin += wages * yearsToRetirement * 0.8;
    baseMax += wages * yearsToRetirement * 1.5;

    // Permanent disability adjustment
    if (formData.permanentDisability === 'yes') {
      baseMin *= 1.8;
      baseMax *= 2.5;
    }

    // Pain and suffering
    const painMultipliers: Record<string, number> = {
      'minimal': 1.1,
      'moderate': 1.5,
      'severe': 2.0,
      'extreme': 3.0
    };
    const painMultiplier = painMultipliers[formData.painLevel] || 1;
    baseMax *= painMultiplier;

    setResults({ 
      min: Math.round(baseMin), 
      max: Math.round(baseMax) 
    });
    setStep(3);
  };

  const isStepValid = () => {
    if (step === 1) return formData.injurySeverity && formData.permanentDisability && formData.painLevel;
    if (step === 2) return formData.medicalCosts && formData.lostWages && formData.age;
    return false;
  };

  return (
    <>
      <Helmet>
        <title>Brain Injury Calculator | TBI Compensation | Trembach Law</title>
        <meta name="description" content="Calculate traumatic brain injury compensation for concussions and severe TBI. Free lifetime care estimates." />
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
            <Brain className="mx-auto mb-6" size={64} strokeWidth={1.5} />
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight leading-[1.1]">
              Brain Injury<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light">
              Traumatic brain injury compensation
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
                  <h2 className="text-3xl font-bold text-black mb-2">Injury Details</h2>
                  <p className="text-slate-600">Help us understand your brain injury</p>
                </div>

                <div className="space-y-4">
                  <label className="block">
                    <span className="text-sm font-medium text-black mb-3 block">Injury Severity</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        { value: 'mild', label: 'Mild Concussion', desc: 'Brief loss of consciousness' },
                        { value: 'moderate', label: 'Moderate TBI', desc: 'Extended recovery needed' },
                        { value: 'severe', label: 'Severe TBI', desc: 'Long-term impairments' },
                        { value: 'catastrophic', label: 'Catastrophic', desc: 'Permanent brain damage' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setFormData({ ...formData, injurySeverity: option.value })}
                          className={`p-4 rounded-xl border-2 text-left transition-all ${
                            formData.injurySeverity === option.value
                              ? 'border-black bg-black text-white'
                              : 'border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <div className="font-medium mb-1">{option.label}</div>
                          <div className={`text-sm ${formData.injurySeverity === option.value ? 'text-white/70' : 'text-slate-500'}`}>
                            {option.desc}
                          </div>
                        </button>
                      ))}
                    </div>
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium text-black mb-3 block">Permanent Cognitive Disability</span>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { value: 'yes', label: 'Yes' },
                        { value: 'no', label: 'No' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setFormData({ ...formData, permanentDisability: option.value })}
                          className={`p-4 rounded-xl border-2 text-center transition-all ${
                            formData.permanentDisability === option.value
                              ? 'border-black bg-black text-white'
                              : 'border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <span className="font-medium">{option.label}</span>
                        </button>
                      ))}
                    </div>
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium text-black mb-3 block">Pain & Suffering Level</span>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        { value: 'minimal', label: 'Minimal' },
                        { value: 'moderate', label: 'Moderate' },
                        { value: 'severe', label: 'Severe' },
                        { value: 'extreme', label: 'Extreme' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setFormData({ ...formData, painLevel: option.value })}
                          className={`p-4 rounded-xl border-2 text-center transition-all ${
                            formData.painLevel === option.value
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
                  <p className="text-slate-600">Help us calculate your total compensation</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">
                      Total Medical Costs (past & future)
                    </label>
                    <Input
                      type="number"
                      placeholder="$100,000"
                      value={formData.medicalCosts}
                      onChange={(e) => setFormData({ ...formData, medicalCosts: e.target.value })}
                      className="h-14 text-lg"
                    />
                    <p className="text-xs text-slate-500 mt-2">Include therapy, medications, assistive devices</p>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">
                      Annual Income (before injury)
                    </label>
                    <Input
                      type="number"
                      placeholder="$75,000"
                      value={formData.lostWages}
                      onChange={(e) => setFormData({ ...formData, lostWages: e.target.value })}
                      className="h-14 text-lg"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">
                      Your Age
                    </label>
                    <Input
                      type="number"
                      placeholder="45"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      className="h-14 text-lg"
                      min="0"
                      max="100"
                    />
                    <p className="text-xs text-slate-500 mt-2">Used to calculate future lost earnings</p>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && results && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-black mb-2">Your Estimated Compensation</h2>
                  <p className="text-slate-600">Based on similar brain injury cases</p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8 text-center">
                  <div className="text-5xl font-bold text-black mb-2">
                    ${results.min.toLocaleString()} - ${results.max.toLocaleString()}
                  </div>
                  <p className="text-slate-600">Estimated Compensation Range</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-white border border-slate-200 rounded-xl p-6">
                    <h4 className="font-semibold text-black mb-2">Economic Damages</h4>
                    <p className="text-sm text-slate-600">Medical bills, lost wages, future care costs, therapy</p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-xl p-6">
                    <h4 className="font-semibold text-black mb-2">Non-Economic Damages</h4>
                    <p className="text-sm text-slate-600">Pain, suffering, loss of quality of life, mental anguish</p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-xl p-6">
                    <h4 className="font-semibold text-black mb-2">Future Care Costs</h4>
                    <p className="text-sm text-slate-600">Lifetime cognitive therapy, assistive technology, home modifications</p>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <p className="text-sm text-amber-900">
                    <strong>Important:</strong> This is an estimate only. Brain injury cases are complex and actual compensation 
                    varies significantly based on medical evidence, expert testimony, and long-term prognosis.
                  </p>
                </div>

                <div className="text-center pt-4">
                  <h3 className="text-xl font-semibold text-black mb-4">Maximize your brain injury compensation</h3>
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
                <div className="text-4xl font-bold text-slate-900 mb-2">$6M+</div>
                <p className="text-slate-600">Severe TBI average</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">Lifetime</div>
                <p className="text-slate-600">Cognitive care coverage</p>
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

export default BrainCompensationCalculator;
