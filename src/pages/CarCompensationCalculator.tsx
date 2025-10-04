import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, ArrowRight, DollarSign, AlertCircle } from 'lucide-react';

interface FormData {
  injuryType: string;
  medicalCost: string;
  lostWages: string;
  painLevel: string;
  accidentType: string;
  treatment: string;
}

const CarCompensationCalculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    injuryType: '',
    medicalCost: '',
    lostWages: '',
    painLevel: '',
    accidentType: '',
    treatment: ''
  });
  const [results, setResults] = useState<{ min: number; max: number } | null>(null);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateCompensation = () => {
    let baseMin = 5000;
    let baseMax = 15000;

    // Injury type multiplier
    const injuryMultipliers: Record<string, number> = {
      'whiplash': 1.2,
      'broken-bones': 2.0,
      'head-injury': 4.0,
      'spinal-injury': 5.0,
      'internal-injuries': 3.5,
      'multiple': 3.0
    };

    const multiplier = injuryMultipliers[formData.injuryType] || 1;
    baseMin *= multiplier;
    baseMax *= multiplier;

    // Add medical costs
    const medicalCost = parseInt(formData.medicalCost) || 0;
    baseMin += medicalCost * 2;
    baseMax += medicalCost * 4;

    // Add lost wages
    const lostWages = parseInt(formData.lostWages) || 0;
    baseMin += lostWages;
    baseMax += lostWages * 2;

    // Pain level adjustment
    const painMultipliers: Record<string, number> = {
      '1-3': 1.1,
      '4-6': 1.3,
      '7-8': 1.6,
      '9-10': 2.0
    };
    const painMult = painMultipliers[formData.painLevel] || 1;
    baseMin *= painMult;
    baseMax *= painMult;

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
    if (step === 1) {
      return formData.injuryType && formData.accidentType;
    }
    if (step === 2) {
      return formData.medicalCost && formData.lostWages && formData.painLevel && formData.treatment;
    }
    return false;
  };

  return (
    <>
      <Helmet>
        <title>Car Accident Compensation Calculator | Free Estimate | Trembach Law</title>
        <meta 
          name="description" 
          content="Calculate your potential car accident compensation instantly. Free, confidential estimates based on injury type, medical costs, and lost wages." 
        />
      </Helmet>

      <main className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="border-b border-slate-200 bg-white">
          <div className="container mx-auto px-6 py-4 max-w-5xl">
            <Link
              to="/calculators"
              className="inline-flex items-center text-slate-600 hover:text-slate-900 visited:text-slate-600 no-underline transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              <span className="text-sm font-medium">Back to All Calculators</span>
            </Link>
          </div>
        </div>

        {/* Hero */}
        <section className="pt-20 pb-12 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 tracking-tight leading-[1.1]">
                Car Accident<br />Calculator
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
                Estimate your potential compensation in minutes
              </p>
            </div>
          </div>
        </section>

        {/* Progress Indicator */}
        <div className="border-b border-slate-200 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="flex justify-center items-center py-8 space-x-4">
              {[1, 2, 3].map((num) => (
                <React.Fragment key={num}>
                  <div className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                        step >= num
                          ? 'bg-slate-900 text-white'
                          : 'bg-slate-100 text-slate-400'
                      }`}
                    >
                      {num}
                    </div>
                  </div>
                  {num < 3 && (
                    <div
                      className={`w-16 h-1 rounded-full transition-colors ${
                        step > num ? 'bg-slate-900' : 'bg-slate-200'
                      }`}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Calculator Form */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-3xl">
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Step 1: Basic Info */}
              {step === 1 && (
                <div className="space-y-8 animate-fade-in">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">
                      Tell us about your injury
                    </h2>
                    <p className="text-slate-600">This helps us estimate your case value</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-3">
                        What type of injury did you sustain?
                      </label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          { value: 'whiplash', label: 'Whiplash / Neck Injury' },
                          { value: 'broken-bones', label: 'Broken Bones' },
                          { value: 'head-injury', label: 'Head / Brain Injury' },
                          { value: 'spinal-injury', label: 'Spinal Injury' },
                          { value: 'internal-injuries', label: 'Internal Injuries' },
                          { value: 'multiple', label: 'Multiple Injuries' }
                        ].map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => handleInputChange('injuryType', option.value)}
                            className={`p-4 rounded-2xl border-2 text-left transition-all ${
                              formData.injuryType === option.value
                                ? 'border-slate-900 bg-slate-50'
                                : 'border-slate-200 hover:border-slate-400'
                            }`}
                          >
                            <span className="font-medium text-slate-900">{option.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-3">
                        What type of accident was it?
                      </label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          { value: 'rear-end', label: 'Rear-End Collision' },
                          { value: 'head-on', label: 'Head-On Collision' },
                          { value: 'side-impact', label: 'Side Impact / T-Bone' },
                          { value: 'rollover', label: 'Rollover' },
                          { value: 'hit-run', label: 'Hit and Run' },
                          { value: 'multi-vehicle', label: 'Multi-Vehicle' }
                        ].map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => handleInputChange('accidentType', option.value)}
                            className={`p-4 rounded-2xl border-2 text-left transition-all ${
                              formData.accidentType === option.value
                                ? 'border-slate-900 bg-slate-50'
                                : 'border-slate-200 hover:border-slate-400'
                            }`}
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
                    className="w-full h-14 px-8 rounded-full bg-slate-900 text-white hover:bg-slate-800 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed font-semibold transition-all hover:shadow-lg inline-flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
                  >
                    Continue
                    <ArrowRight className="ml-2" size={20} />
                  </button>
                </div>
              )}

              {/* Step 2: Financial Details */}
              {step === 2 && (
                <div className="space-y-8 animate-fade-in">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">
                      Financial impact
                    </h2>
                    <p className="text-slate-600">Help us calculate your total damages</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-3">
                        Total medical expenses to date
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">
                          $
                        </span>
                        <input
                          type="number"
                          placeholder="0"
                          value={formData.medicalCost}
                          onChange={(e) => handleInputChange('medicalCost', e.target.value)}
                          className="w-full h-14 pl-8 pr-4 rounded-2xl border-2 border-slate-200 focus:border-slate-900 focus:outline-none text-lg font-medium transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-3">
                        Lost wages / income
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">
                          $
                        </span>
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
                      <label className="block text-sm font-semibold text-slate-900 mb-3">
                        Pain level (1-10 scale)
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { value: '1-3', label: 'Mild (1-3)' },
                          { value: '4-6', label: 'Moderate (4-6)' },
                          { value: '7-8', label: 'Severe (7-8)' },
                          { value: '9-10', label: 'Extreme (9-10)' }
                        ].map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => handleInputChange('painLevel', option.value)}
                            className={`p-4 rounded-2xl border-2 text-left transition-all ${
                              formData.painLevel === option.value
                                ? 'border-slate-900 bg-slate-50'
                                : 'border-slate-200 hover:border-slate-400'
                            }`}
                          >
                            <span className="font-medium text-slate-900">{option.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-3">
                        Treatment status
                      </label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          { value: 'ongoing', label: 'Still in Treatment' },
                          { value: 'completed', label: 'Treatment Complete' },
                          { value: 'permanent', label: 'Permanent Disability' },
                          { value: 'none', label: 'No Treatment Yet' }
                        ].map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => handleInputChange('treatment', option.value)}
                            className={`p-4 rounded-2xl border-2 text-left transition-all ${
                              formData.treatment === option.value
                                ? 'border-slate-900 bg-slate-50'
                                : 'border-slate-200 hover:border-slate-400'
                            }`}
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
                      className="h-14 px-8 rounded-full border-2 border-slate-900 text-slate-900 hover:bg-slate-50 font-semibold transition-all inline-flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
                    >
                      <ArrowLeft className="mr-2" size={20} />
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={!isStepComplete()}
                      className="flex-1 h-14 px-8 rounded-full bg-slate-900 text-white hover:bg-slate-800 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed font-semibold transition-all hover:shadow-lg inline-flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
                    >
                      Calculate My Compensation
                      <Calculator className="ml-2" size={20} />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Results */}
              {step === 3 && results && (
                <div className="space-y-8 animate-fade-in">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                      <DollarSign className="text-green-600" size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">
                      Your Estimated Compensation
                    </h2>
                    <p className="text-slate-600">Based on the information you provided</p>
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
                          This is an estimate only. Your actual compensation may vary based on additional factors like liability, insurance limits, and case-specific circumstances. Consult with an attorney for a detailed evaluation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Link
                      to="/free-consultation"
                      className="w-full h-14 px-8 rounded-full bg-slate-900 text-white hover:bg-slate-800 visited:text-white font-semibold transition-all hover:shadow-lg inline-flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 no-underline"
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
                          medicalCost: '',
                          lostWages: '',
                          painLevel: '',
                          accidentType: '',
                          treatment: ''
                        });
                      }}
                      className="w-full h-14 px-8 rounded-full border-2 border-slate-900 text-slate-900 hover:bg-slate-50 visited:text-slate-900 font-semibold transition-all inline-flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 no-underline"
                    >
                      Calculate Another Case
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">Free</div>
                <p className="text-slate-600">No fees unless we win your case</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">24/7</div>
                <p className="text-slate-600">Available for consultation anytime</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">Fast</div>
                <p className="text-slate-600">Quick response within hours</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CarCompensationCalculator;
