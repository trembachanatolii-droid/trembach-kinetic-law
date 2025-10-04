import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, ArrowRight, DollarSign, AlertTriangle } from 'lucide-react';

interface FormData {
  bloodCancerType: string;
  age: string;
  exposureDuration: string;
  medicalCosts: string;
  severity: string;
  employmentStatus: string;
}

const BenzeneCalculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    bloodCancerType: '',
    age: '',
    exposureDuration: '',
    medicalCosts: '',
    severity: '',
    employmentStatus: ''
  });
  const [results, setResults] = useState<{ min: number; max: number } | null>(null);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateCompensation = () => {
    let baseMin = 100000;
    let baseMax = 300000;

    // Cancer type multipliers
    const cancerMultipliers: Record<string, number> = {
      'aml': 5.0,
      'all': 4.5,
      'multiple-myeloma': 4.0,
      'non-hodgkin': 3.5,
      'cll': 3.0,
      'cml': 2.8,
      'mds': 2.5,
      'aplastic-anemia': 2.0
    };

    const multiplier = cancerMultipliers[formData.bloodCancerType] || 2;
    baseMin *= multiplier;
    baseMax *= multiplier;

    // Age adjustments
    const ageMultipliers: Record<string, number> = {
      'under-30': 1.8,
      '30-45': 1.6,
      '45-60': 1.4,
      '60-70': 1.2,
      'over-70': 1.1
    };
    const ageMult = ageMultipliers[formData.age] || 1;
    baseMin *= ageMult;
    baseMax *= ageMult;

    // Exposure duration
    const exposureMultipliers: Record<string, number> = {
      'more-than-20': 1.7,
      '10-20': 1.5,
      '5-10': 1.3,
      '1-5': 1.2,
      'less-than-1': 1.1
    };
    const expMult = exposureMultipliers[formData.exposureDuration] || 1;
    baseMin *= expMult;
    baseMax *= expMult;

    // Medical costs
    const costMultipliers: Record<string, number> = {
      'over-500k': 1.6,
      '250k-500k': 1.4,
      '100k-250k': 1.3,
      '50k-100k': 1.2,
      'under-50k': 1.1
    };
    const costMult = costMultipliers[formData.medicalCosts] || 1;
    baseMin *= costMult;
    baseMax *= costMult;

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
      return formData.bloodCancerType && formData.exposureDuration;
    }
    if (step === 2) {
      return formData.age && formData.medicalCosts && formData.severity;
    }
    return false;
  };

  return (
    <>
      <Helmet>
        <title>Benzene Exposure Calculator | Blood Cancer Compensation | Trembach Law</title>
        <meta 
          name="description" 
          content="Calculate potential compensation for benzene-related blood cancers. Free, confidential estimates for leukemia, lymphoma, and other benzene exposure illnesses." 
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
                Benzene Exposure<br />Calculator
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
                Estimate compensation for benzene-related blood cancers
              </p>
            </div>
          </div>
        </section>

        {/* Progress */}
        <div className="border-b border-slate-200 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="flex justify-center items-center py-8 space-x-4">
              {[1, 2, 3].map((num) => (
                <React.Fragment key={num}>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                      step >= num ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-400'
                    }`}
                  >
                    {num}
                  </div>
                  {num < 3 && (
                    <div className={`w-16 h-1 rounded-full ${step > num ? 'bg-slate-900' : 'bg-slate-200'}`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-3xl">
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Step 1 */}
              {step === 1 && (
                <div className="space-y-8 animate-fade-in">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">
                      Your diagnosis and exposure
                    </h2>
                    <p className="text-slate-600">Tell us about your benzene-related illness</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-3">
                        Type of blood cancer or illness
                      </label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          { value: 'aml', label: 'Acute Myeloid Leukemia (AML)' },
                          { value: 'all', label: 'Acute Lymphoblastic Leukemia' },
                          { value: 'multiple-myeloma', label: 'Multiple Myeloma' },
                          { value: 'non-hodgkin', label: "Non-Hodgkin's Lymphoma" },
                          { value: 'cll', label: 'Chronic Lymphocytic Leukemia' },
                          { value: 'cml', label: 'Chronic Myeloid Leukemia' },
                          { value: 'mds', label: 'Myelodysplastic Syndrome' },
                          { value: 'aplastic-anemia', label: 'Aplastic Anemia' }
                        ].map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => handleInputChange('bloodCancerType', option.value)}
                            className={`p-4 rounded-2xl border-2 text-left transition-all ${
                              formData.bloodCancerType === option.value
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
                        Duration of benzene exposure
                      </label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          { value: 'more-than-20', label: 'More than 20 years' },
                          { value: '10-20', label: '10-20 years' },
                          { value: '5-10', label: '5-10 years' },
                          { value: '1-5', label: '1-5 years' },
                          { value: 'less-than-1', label: 'Less than 1 year' }
                        ].map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => handleInputChange('exposureDuration', option.value)}
                            className={`p-4 rounded-2xl border-2 text-left transition-all ${
                              formData.exposureDuration === option.value
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
                    className="w-full h-14 px-8 rounded-full bg-slate-900 text-white hover:bg-slate-800 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed font-semibold transition-all hover:shadow-lg inline-flex items-center justify-center"
                  >
                    Continue
                    <ArrowRight className="ml-2" size={20} />
                  </button>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div className="space-y-8 animate-fade-in">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">
                      Additional details
                    </h2>
                    <p className="text-slate-600">Help us calculate your total damages</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-3">
                        Your age at diagnosis
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { value: 'under-30', label: 'Under 30' },
                          { value: '30-45', label: '30-45' },
                          { value: '45-60', label: '45-60' },
                          { value: '60-70', label: '60-70' },
                          { value: 'over-70', label: 'Over 70' }
                        ].map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => handleInputChange('age', option.value)}
                            className={`p-4 rounded-2xl border-2 text-left transition-all ${
                              formData.age === option.value
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
                        Total medical expenses
                      </label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          { value: 'over-500k', label: 'Over $500,000' },
                          { value: '250k-500k', label: '$250,000 - $500,000' },
                          { value: '100k-250k', label: '$100,000 - $250,000' },
                          { value: '50k-100k', label: '$50,000 - $100,000' },
                          { value: 'under-50k', label: 'Under $50,000' }
                        ].map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => handleInputChange('medicalCosts', option.value)}
                            className={`p-4 rounded-2xl border-2 text-left transition-all ${
                              formData.medicalCosts === option.value
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
                        Severity of condition
                      </label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          { value: 'terminal', label: 'Terminal / Advanced Stage' },
                          { value: 'severe', label: 'Severe' },
                          { value: 'moderate', label: 'Moderate' },
                          { value: 'mild', label: 'Early Stage / Remission' }
                        ].map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => handleInputChange('severity', option.value)}
                            className={`p-4 rounded-2xl border-2 text-left transition-all ${
                              formData.severity === option.value
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
                    <p className="text-slate-600">Based on benzene exposure and blood cancer diagnosis</p>
                  </div>

                  <div className="bg-slate-50 rounded-3xl p-8 md:p-12 text-center border border-slate-200">
                    <div className="text-6xl md:text-7xl font-bold text-slate-900 mb-4">
                      ${results.min.toLocaleString()} - ${results.max.toLocaleString()}
                    </div>
                    <p className="text-xl text-slate-600">Potential compensation range</p>
                  </div>

                  <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="text-orange-600 shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">Time-Sensitive Case</h3>
                        <p className="text-slate-700 leading-relaxed">
                          Benzene exposure cases have strict time limits. Contact an attorney immediately to preserve your rights and maximize compensation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Link
                      to="/free-consultation"
                      className="w-full h-14 px-8 rounded-full bg-slate-900 text-white hover:bg-slate-800 visited:text-white font-semibold transition-all hover:shadow-lg inline-flex items-center justify-center no-underline"
                    >
                      Get Free Case Evaluation
                      <ArrowRight className="ml-2" size={20} />
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        setStep(1);
                        setResults(null);
                        setFormData({
                          bloodCancerType: '',
                          age: '',
                          exposureDuration: '',
                          medicalCosts: '',
                          severity: '',
                          employmentStatus: ''
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

        {/* Stats */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">$500K+</div>
                <p className="text-slate-600">Average benzene settlement</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">24/7</div>
                <p className="text-slate-600">Available for urgent cases</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">No Fee</div>
                <p className="text-slate-600">Unless we win your case</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BenzeneCalculator;
