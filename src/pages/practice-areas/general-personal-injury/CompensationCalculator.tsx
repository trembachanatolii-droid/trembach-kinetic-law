import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, ArrowRight, DollarSign, AlertCircle } from 'lucide-react';

interface FormData {
  injuryType: string;
  medicalExpenses: string;
  lostWages: string;
  severity: string;
  liability: string;
  recoveryTime: string;
}

const PersonalInjuryCompensationCalculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    injuryType: '',
    medicalExpenses: '',
    lostWages: '',
    severity: '',
    liability: '',
    recoveryTime: ''
  });
  const [results, setResults] = useState<{ min: number; max: number } | null>(null);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateCompensation = () => {
    let baseMin = 10000;
    let baseMax = 30000;

    const injuryMultipliers: Record<string, number> = {
      'soft-tissue': 1.2,
      'fracture': 2.0,
      'concussion': 2.5,
      'severe-injury': 4.0,
      'permanent-disability': 6.0
    };

    const multiplier = injuryMultipliers[formData.injuryType] || 1;
    baseMin *= multiplier;
    baseMax *= multiplier;

    const medicalExpenses = parseInt(formData.medicalExpenses) || 0;
    baseMin += medicalExpenses * 2;
    baseMax += medicalExpenses * 5;

    const lostWages = parseInt(formData.lostWages) || 0;
    baseMin += lostWages * 1.5;
    baseMax += lostWages * 3;

    const severityMultipliers: Record<string, number> = {
      'minor': 1.1,
      'moderate': 1.4,
      'severe': 1.8,
      'life-threatening': 2.5
    };
    const sevMult = severityMultipliers[formData.severity] || 1;
    baseMin *= sevMult;
    baseMax *= sevMult;

    setResults({
      min: Math.round(baseMin),
      max: Math.round(baseMax)
    });
    setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateCompensation();
  };

  const isStepComplete = () => {
    if (step === 1) return formData.injuryType && formData.severity;
    if (step === 2) return formData.medicalExpenses && formData.lostWages && formData.liability && formData.recoveryTime;
    return false;
  };

  return (
    <>
      <Helmet>
        <title>Personal Injury Calculator | Free Compensation Estimate | Trembach Law</title>
        <meta name="description" content="Calculate your personal injury compensation instantly. Free estimates for slip and fall, assault, negligence, and other injury claims." />
      </Helmet>

      <main className="min-h-screen bg-white">
        <div className="border-b border-slate-200 bg-white">
          <div className="container mx-auto px-6 py-4 max-w-5xl">
            <Link to="/calculators" className="inline-flex items-center text-slate-600 hover:text-slate-900 visited:text-slate-600 no-underline transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              <span className="text-sm font-medium">Back to All Calculators</span>
            </Link>
          </div>
        </div>

        <section className="pt-20 pb-12 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 tracking-tight leading-[1.1]">
                Personal Injury<br />Calculator
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
                Estimate your case value in minutes
              </p>
            </div>
          </div>
        </section>

        <div className="border-b border-slate-200 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="flex justify-center items-center py-8 space-x-4">
              {[1, 2, 3].map((num) => (
                <React.Fragment key={num}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${step >= num ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-400'}`}>
                    {num}
                  </div>
                  {num < 3 && <div className={`w-16 h-1 rounded-full ${step > num ? 'bg-slate-900' : 'bg-slate-200'}`} />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-6 max-w-3xl">
            <form onSubmit={handleSubmit} className="space-y-12">
              {step === 1 && (
                <div className="space-y-8 animate-fade-in">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Your injury details</h2>
                    <p className="text-slate-600">Help us understand what happened</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-3">Type of injury sustained</label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          { value: 'soft-tissue', label: 'Soft Tissue / Sprains' },
                          { value: 'fracture', label: 'Broken Bones' },
                          { value: 'concussion', label: 'Concussion / Head Injury' },
                          { value: 'severe-injury', label: 'Severe Trauma' },
                          { value: 'permanent-disability', label: 'Permanent Disability' }
                        ].map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => handleInputChange('injuryType', option.value)}
                            className={`p-4 rounded-2xl border-2 text-left transition-all ${formData.injuryType === option.value ? 'border-slate-900 bg-slate-50' : 'border-slate-200 hover:border-slate-400'}`}
                          >
                            <span className="font-medium text-slate-900">{option.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-3">Severity of injury</label>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { value: 'minor', label: 'Minor' },
                          { value: 'moderate', label: 'Moderate' },
                          { value: 'severe', label: 'Severe' },
                          { value: 'life-threatening', label: 'Life-Threatening' }
                        ].map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => handleInputChange('severity', option.value)}
                            className={`p-4 rounded-2xl border-2 text-left transition-all ${formData.severity === option.value ? 'border-slate-900 bg-slate-50' : 'border-slate-200 hover:border-slate-400'}`}
                          >
                            <span className="font-medium text-slate-900">{option.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={!isStepComplete()}
                    className="w-full h-14 px-8 rounded-full bg-slate-900 text-white hover:bg-slate-800 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed font-semibold transition-all hover:shadow-lg inline-flex items-center justify-center"
                  >
                    Continue
                    <ArrowRight className="ml-2" size={20} />
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-8 animate-fade-in">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Financial impact</h2>
                    <p className="text-slate-600">Calculate your total damages</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-3">Total medical expenses</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                        <input
                          type="number"
                          placeholder="0"
                          value={formData.medicalExpenses}
                          onChange={(e) => handleInputChange('medicalExpenses', e.target.value)}
                          className="w-full h-14 pl-8 pr-4 rounded-2xl border-2 border-slate-200 focus:border-slate-900 focus:outline-none text-lg font-medium transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-3">Lost wages / income</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                        <input
                          type="number"
                          placeholder="0"
                          value={formData.lostWages}
                          onChange={(e) => handleInputChange('lostWages', e.target.value)}
                          className="w-full h-14 pl-8 pr-4 rounded-2xl border-2 border-slate-200 focus:border-slate-900 focus:outline-none text-lg font-medium transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-3">Liability clarity</label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          { value: 'clear', label: 'Clear Fault' },
                          { value: 'mostly-clear', label: 'Mostly Clear' },
                          { value: 'disputed', label: 'Disputed' },
                          { value: 'unclear', label: 'Unclear' }
                        ].map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => handleInputChange('liability', option.value)}
                            className={`p-4 rounded-2xl border-2 text-left transition-all ${formData.liability === option.value ? 'border-slate-900 bg-slate-50' : 'border-slate-200 hover:border-slate-400'}`}
                          >
                            <span className="font-medium text-slate-900">{option.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-3">Expected recovery time</label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          { value: 'weeks', label: 'Weeks' },
                          { value: 'months', label: 'Months' },
                          { value: 'year-plus', label: '1+ Years' },
                          { value: 'permanent', label: 'Permanent' }
                        ].map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => handleInputChange('recoveryTime', option.value)}
                            className={`p-4 rounded-2xl border-2 text-left transition-all ${formData.recoveryTime === option.value ? 'border-slate-900 bg-slate-50' : 'border-slate-200 hover:border-slate-400'}`}
                          >
                            <span className="font-medium text-slate-900">{option.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="h-14 px-8 rounded-full border-2 border-slate-900 text-slate-900 hover:bg-slate-50 font-semibold transition-all inline-flex items-center justify-center"
                    >
                      <ArrowLeft className="mr-2" size={20} />
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={!isStepComplete()}
                      className="flex-1 h-14 px-8 rounded-full bg-slate-900 text-white hover:bg-slate-800 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed font-semibold transition-all hover:shadow-lg inline-flex items-center justify-center"
                    >
                      Calculate Compensation
                      <Calculator className="ml-2" size={20} />
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && results && (
                <div className="space-y-8 animate-fade-in">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                      <DollarSign className="text-green-600" size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Your Estimated Compensation</h2>
                    <p className="text-slate-600">Based on your injury details</p>
                  </div>

                  <div className="bg-slate-50 rounded-3xl p-8 md:p-12 text-center border border-slate-200">
                    <div className="text-6xl md:text-7xl font-bold text-slate-900 mb-4">
                      ${results.min.toLocaleString()} - ${results.max.toLocaleString()}
                    </div>
                    <p className="text-xl text-slate-600">Potential settlement range</p>
                  </div>

                  <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                    <div className="flex items-start gap-4">
                      <AlertCircle className="text-blue-600 shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">Important Note</h3>
                        <p className="text-slate-700 leading-relaxed">
                          This is an estimate. Actual compensation depends on liability strength, insurance policy limits, and case-specific factors. Get a free consultation for an accurate evaluation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Link
                      to="/free-consultation"
                      className="w-full h-14 px-8 rounded-full bg-slate-900 text-white hover:bg-slate-800 visited:text-white font-semibold transition-all hover:shadow-lg inline-flex items-center justify-center no-underline"
                    >
                      Get Free Case Review
                      <ArrowRight className="ml-2" size={20} />
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        setStep(1);
                        setResults(null);
                        setFormData({
                          injuryType: '',
                          medicalExpenses: '',
                          lostWages: '',
                          severity: '',
                          liability: '',
                          recoveryTime: ''
                        });
                      }}
                      className="w-full h-14 px-8 rounded-full border-2 border-slate-900 text-slate-900 hover:bg-slate-50 visited:text-slate-900 font-semibold transition-all inline-flex items-center justify-center no-underline"
                    >
                      Calculate Another Case
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </section>

        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">Free</div>
                <p className="text-slate-600">No fees unless we win</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">24/7</div>
                <p className="text-slate-600">Available anytime</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">Fast</div>
                <p className="text-slate-600">Quick response guaranteed</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PersonalInjuryCompensationCalculator;
