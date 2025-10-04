import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, ArrowRight, DollarSign, AlertCircle } from 'lucide-react';

const MedicalMalpracticeCompensationCalculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    errorType: '',
    injurySeverity: '',
    medicalCosts: '',
    lostWages: '',
    age: '',
    permanentImpact: ''
  });
  const [results, setResults] = useState<{ min: number; max: number; micraCapped: number } | null>(null);

  const calculateCompensation = () => {
    let baseMin = 50000;
    let baseMax = 500000;

    const errorMult: Record<string, number> = {
      'misdiagnosis': 2.0,
      'surgical-error': 3.5,
      'medication-error': 1.8,
      'birth-injury': 4.0,
      'anesthesia-error': 3.0,
      'failure-diagnose': 2.5
    };
    baseMin *= errorMult[formData.errorType] || 1;
    baseMax *= errorMult[formData.errorType] || 1;

    const medical = parseInt(formData.medicalCosts) || 0;
    baseMin += medical * 2;
    baseMax += medical * 5;

    const wages = parseInt(formData.lostWages) || 0;
    baseMin += wages * 3;
    baseMax += wages * 6;

    // California MICRA cap on non-economic damages
    const micraCapped = Math.min(baseMax, 250000 + medical + wages);

    setResults({
      min: Math.round(baseMin),
      max: Math.round(baseMax),
      micraCapped: Math.round(micraCapped)
    });
    setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateCompensation();
  };

  const isStepComplete = () => {
    if (step === 1) return formData.errorType && formData.injurySeverity;
    if (step === 2) return formData.medicalCosts && formData.lostWages && formData.age && formData.permanentImpact;
    return false;
  };

  return (
    <>
      <Helmet>
        <title>Medical Malpractice Calculator | Doctor Negligence Compensation | Trembach Law</title>
        <meta name="description" content="Calculate medical malpractice compensation for surgical errors, misdiagnosis, and doctor negligence. Free estimates with MICRA cap considerations." />
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
              Medical Malpractice<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light">
              Estimate doctor negligence compensation
            </p>
          </div>
        </section>

        <div className="border-b border-slate-200">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="flex justify-center items-center py-8 space-x-4">
              {[1, 2, 3].map((num) => (
                <React.Fragment key={num}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${step >= num ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-400'}`}>
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
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Type of medical error</h2>
                    <p className="text-slate-600">What type of negligence occurred?</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-3">Medical error category</label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          { value: 'misdiagnosis', label: 'Misdiagnosis' },
                          { value: 'surgical-error', label: 'Surgical Error' },
                          { value: 'medication-error', label: 'Medication Error' },
                          { value: 'birth-injury', label: 'Birth Injury' },
                          { value: 'anesthesia-error', label: 'Anesthesia Error' },
                          { value: 'failure-diagnose', label: 'Failure to Diagnose' }
                        ].map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, errorType: opt.value }))}
                            className={`p-4 rounded-2xl border-2 text-left transition-all ${formData.errorType === opt.value ? 'border-slate-900 bg-slate-50' : 'border-slate-200 hover:border-slate-400'}`}
                          >
                            <span className="font-medium text-slate-900">{opt.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-3">Injury severity</label>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { value: 'minor', label: 'Minor' },
                          { value: 'moderate', label: 'Moderate' },
                          { value: 'severe', label: 'Severe' },
                          { value: 'catastrophic', label: 'Catastrophic' }
                        ].map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, injurySeverity: opt.value }))}
                            className={`p-4 rounded-2xl border-2 text-left transition-all ${formData.injurySeverity === opt.value ? 'border-slate-900 bg-slate-50' : 'border-slate-200 hover:border-slate-400'}`}
                          >
                            <span className="font-medium text-slate-900">{opt.label}</span>
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
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Financial details</h2>
                    <p className="text-slate-600">Calculate your damages</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-3">Medical expenses</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                        <input
                          type="number"
                          placeholder="0"
                          value={formData.medicalCosts}
                          onChange={(e) => setFormData(prev => ({ ...prev, medicalCosts: e.target.value }))}
                          className="w-full h-14 pl-8 pr-4 rounded-2xl border-2 border-slate-200 focus:border-slate-900 focus:outline-none text-lg font-medium"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-3">Lost wages</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                        <input
                          type="number"
                          placeholder="0"
                          value={formData.lostWages}
                          onChange={(e) => setFormData(prev => ({ ...prev, lostWages: e.target.value }))}
                          className="w-full h-14 pl-8 pr-4 rounded-2xl border-2 border-slate-200 focus:border-slate-900 focus:outline-none text-lg font-medium"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-3">Your age</label>
                      <div className="grid md:grid-cols-3 gap-3">
                        {[
                          { value: 'under-40', label: 'Under 40' },
                          { value: '40-60', label: '40-60' },
                          { value: 'over-60', label: 'Over 60' }
                        ].map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, age: opt.value }))}
                            className={`p-4 rounded-2xl border-2 text-left transition-all ${formData.age === opt.value ? 'border-slate-900 bg-slate-50' : 'border-slate-200 hover:border-slate-400'}`}
                          >
                            <span className="font-medium text-slate-900">{opt.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-3">Permanent impact</label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          { value: 'none', label: 'No Permanent Impact' },
                          { value: 'minor', label: 'Minor Permanent' },
                          { value: 'significant', label: 'Significant Permanent' },
                          { value: 'total-disability', label: 'Total Disability' }
                        ].map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, permanentImpact: opt.value }))}
                            className={`p-4 rounded-2xl border-2 text-left transition-all ${formData.permanentImpact === opt.value ? 'border-slate-900 bg-slate-50' : 'border-slate-200 hover:border-slate-400'}`}
                          >
                            <span className="font-medium text-slate-900">{opt.label}</span>
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
                    <p className="text-slate-600">Based on medical negligence details</p>
                  </div>

                  <div className="bg-slate-50 rounded-3xl p-8 md:p-12 text-center border border-slate-200">
                    <div className="text-6xl md:text-7xl font-bold text-slate-900 mb-4">
                      ${results.min.toLocaleString()} - ${results.max.toLocaleString()}
                    </div>
                    <p className="text-xl text-slate-600 mb-4">Potential range</p>
                    <p className="text-sm text-slate-500">MICRA capped estimate: ${results.micraCapped.toLocaleString()}</p>
                  </div>

                  <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
                    <div className="flex items-start gap-4">
                      <AlertCircle className="text-orange-600 shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">California MICRA Law</h3>
                        <p className="text-slate-700 leading-relaxed">
                          California caps non-economic damages at $250,000 in medical malpractice cases. Economic damages (medical bills, lost wages) are not capped.
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
                          errorType: '',
                          injurySeverity: '',
                          medicalCosts: '',
                          lostWages: '',
                          age: '',
                          permanentImpact: ''
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
                <div className="text-4xl font-bold text-slate-900 mb-2">$500K+</div>
                <p className="text-slate-600">Average malpractice award</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">24/7</div>
                <p className="text-slate-600">Expert consultation</p>
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

export default MedicalMalpracticeCompensationCalculator;
