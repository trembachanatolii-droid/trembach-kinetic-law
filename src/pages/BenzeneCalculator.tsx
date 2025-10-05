import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { useCalculatorForm, CalculatorFormData, CalculatorResults } from '@/hooks/useCalculatorForm';

interface BenzeneFormData extends CalculatorFormData {
  bloodCancerType: string;
  exposureDuration: string;
  exposureSource: string;
  age: string;
  medicalCosts: string;
  severity: string;
  lostWages: string;
  futureCareCosts: string;
  [key: string]: string;
}

const initialFormData: BenzeneFormData = {
  bloodCancerType: '',
  exposureDuration: '',
  exposureSource: '',
  age: '',
  medicalCosts: '',
  severity: '',
  lostWages: '',
  futureCareCosts: ''
};

const calculateCompensation = (data: BenzeneFormData): CalculatorResults => {
  const cancerMultipliers: { [key: string]: number } = {
    'aml': 5.0,
    'all': 4.5,
    'multiple-myeloma': 4.0,
    'non-hodgkin': 3.5,
    'cll': 3.0,
    'cml': 2.8,
    'mds': 2.5,
    'aplastic-anemia': 2.0
  };

  const exposureMultipliers: { [key: string]: number } = {
    'more-than-20': 2.2,
    '10-20': 1.8,
    '5-10': 1.5,
    '1-5': 1.3,
    'less-than-1': 1.1
  };

  const sourceMultipliers: { [key: string]: number } = {
    'petroleum': 2.0,
    'chemical-plant': 2.2,
    'refinery': 2.1,
    'lab-tech': 1.8,
    'painter': 1.7,
    'printer': 1.6,
    'consumer-product': 2.5,
    'other': 1.5
  };

  const severityMultipliers: { [key: string]: number } = {
    'terminal': 4.0,
    'severe': 2.5,
    'moderate': 1.8,
    'mild': 1.3
  };

  let baseMin = 120000;
  let baseMax = 350000;

  const cancerMult = cancerMultipliers[data.bloodCancerType] || 1;
  const exposureMult = exposureMultipliers[data.exposureDuration] || 1;
  const sourceMult = sourceMultipliers[data.exposureSource] || 1;
  const severityMult = severityMultipliers[data.severity] || 1;

  baseMin *= cancerMult * exposureMult * sourceMult * severityMult;
  baseMax *= cancerMult * exposureMult * sourceMult * severityMult;

  const age = parseInt(data.age) || 40;
  if (age < 50) {
    const ageFactor = 1 + ((50 - age) * 0.018);
    baseMin *= ageFactor;
    baseMax *= ageFactor;
  }

  const medicalCosts = parseInt(data.medicalCosts) || 0;
  const futureCareCosts = parseInt(data.futureCareCosts) || 0;
  const lostWages = parseInt(data.lostWages) || 0;

  baseMin += medicalCosts + futureCareCosts * 0.9 + lostWages * 0.85;
  baseMax += medicalCosts * 1.5 + futureCareCosts * 1.6 + lostWages * 1.5;

  return {
    min: Math.round(baseMin),
    max: Math.round(baseMax)
  };
};

const validateStep = (data: BenzeneFormData, step: number): boolean => {
  if (step === 1) {
    return !!(data.bloodCancerType && data.exposureDuration && data.exposureSource && data.severity);
  }
  if (step === 2) {
    return !!(data.age && data.medicalCosts && data.lostWages && data.futureCareCosts);
  }
  return true;
};

const BenzeneCalculator = () => {
  const {
    step,
    formData,
    results,
    updateField,
    handleNext,
    handleBack,
    resetForm,
    isStepValid
  } = useCalculatorForm<BenzeneFormData>(
    initialFormData,
    calculateCompensation,
    validateStep
  );

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

        <section className="pt-20 pb-12 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight leading-[1.1]">
              Benzene Exposure<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light">
              Estimate compensation for benzene-related blood cancers
            </p>
          </div>
        </section>

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
                <p className="text-slate-600">Unless we win</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="bg-slate-900 px-8 py-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white">Calculate Your Case Value</h2>
                  <div className="flex gap-2">
                    {[1, 2, 3].map((s) => (
                      <div
                        key={s}
                        className={`w-10 h-1 rounded-full transition-colors ${
                          step >= s ? 'bg-white' : 'bg-slate-700'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8">
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-2">
                        Type of Blood Cancer or Illness
                      </label>
                      <select
                        value={formData.bloodCancerType}
                        onChange={(e) => updateField('bloodCancerType', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                      >
                        <option value="">Select diagnosis</option>
                        <option value="aml">Acute Myeloid Leukemia (AML)</option>
                        <option value="all">Acute Lymphoblastic Leukemia</option>
                        <option value="multiple-myeloma">Multiple Myeloma</option>
                        <option value="non-hodgkin">Non-Hodgkin's Lymphoma</option>
                        <option value="cll">Chronic Lymphocytic Leukemia</option>
                        <option value="cml">Chronic Myeloid Leukemia</option>
                        <option value="mds">Myelodysplastic Syndrome</option>
                        <option value="aplastic-anemia">Aplastic Anemia</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-2">
                        Duration of Benzene Exposure
                      </label>
                      <select
                        value={formData.exposureDuration}
                        onChange={(e) => updateField('exposureDuration', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                      >
                        <option value="">Select duration</option>
                        <option value="more-than-20">More than 20 years</option>
                        <option value="10-20">10-20 years</option>
                        <option value="5-10">5-10 years</option>
                        <option value="1-5">1-5 years</option>
                        <option value="less-than-1">Less than 1 year</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-2">
                        Source of Benzene Exposure
                      </label>
                      <select
                        value={formData.exposureSource}
                        onChange={(e) => updateField('exposureSource', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                      >
                        <option value="">Select source</option>
                        <option value="consumer-product">Consumer Product (Sunscreen, Hand Sanitizer)</option>
                        <option value="chemical-plant">Chemical Plant</option>
                        <option value="refinery">Oil Refinery</option>
                        <option value="petroleum">Petroleum Industry</option>
                        <option value="lab-tech">Laboratory Technician</option>
                        <option value="painter">Painting/Coatings Industry</option>
                        <option value="printer">Printing Industry</option>
                        <option value="other">Other Occupational Exposure</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-2">
                        Severity of Condition
                      </label>
                      <select
                        value={formData.severity}
                        onChange={(e) => updateField('severity', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                      >
                        <option value="">Select severity</option>
                        <option value="terminal">Terminal / Advanced Stage</option>
                        <option value="severe">Severe</option>
                        <option value="moderate">Moderate</option>
                        <option value="mild">Early Stage / Remission</option>
                      </select>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-2">
                        Your Age at Diagnosis
                      </label>
                      <select
                        value={formData.age}
                        onChange={(e) => updateField('age', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                      >
                        <option value="">Select age</option>
                        <option value="25">Under 30</option>
                        <option value="37">30-45</option>
                        <option value="52">45-60</option>
                        <option value="65">60-70</option>
                        <option value="75">Over 70</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-2">
                        Total Medical Expenses to Date
                      </label>
                      <select
                        value={formData.medicalCosts}
                        onChange={(e) => updateField('medicalCosts', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                      >
                        <option value="">Select amount</option>
                        <option value="25000">Under $50,000</option>
                        <option value="75000">$50,000 - $100,000</option>
                        <option value="175000">$100,000 - $250,000</option>
                        <option value="375000">$250,000 - $500,000</option>
                        <option value="750000">Over $500,000</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-2">
                        Estimated Future Medical Care
                      </label>
                      <select
                        value={formData.futureCareCosts}
                        onChange={(e) => updateField('futureCareCosts', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                      >
                        <option value="">Select amount</option>
                        <option value="50000">$0 - $100,000</option>
                        <option value="200000">$100,000 - $300,000</option>
                        <option value="500000">$300,000 - $700,000</option>
                        <option value="1000000">$700,000 - $1,300,000</option>
                        <option value="2000000">Over $1,300,000</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-2">
                        Lost Wages and Income
                      </label>
                      <select
                        value={formData.lostWages}
                        onChange={(e) => updateField('lostWages', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                      >
                        <option value="">Select amount</option>
                        <option value="25000">$0 - $50,000</option>
                        <option value="100000">$50,000 - $150,000</option>
                        <option value="250000">$150,000 - $350,000</option>
                        <option value="500000">$350,000 - $650,000</option>
                        <option value="1000000">Over $650,000</option>
                      </select>
                    </div>
                  </div>
                )}

                {step === 3 && results && (
                  <div className="space-y-6">
                    <div className="text-center py-8">
                      <h3 className="text-3xl font-bold text-slate-900 mb-4">
                        Estimated Compensation Range
                      </h3>
                      <div className="text-5xl font-bold text-slate-900 mb-2">
                        ${results.min.toLocaleString()} - ${results.max.toLocaleString()}
                      </div>
                      <p className="text-slate-600 mt-4">
                        Based on your benzene exposure and blood cancer diagnosis
                      </p>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                      <div className="flex gap-3">
                        <AlertCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                        <div className="text-sm text-amber-900">
                          <p className="font-semibold mb-2">Important Legal Disclaimer:</p>
                          <p className="mb-2">
                            This calculator provides a general estimate only and does not constitute legal advice or a guarantee of compensation. Actual case values depend on multiple factors including specific cancer diagnosis, duration and intensity of exposure, proof of causation, and individual circumstances.
                          </p>
                          <p>
                            Benzene exposure cases have strict filing deadlines and complex causation requirements. Contact an experienced attorney immediately to evaluate your case and protect your legal rights.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-4 mt-8">
                  {step > 1 && step < 3 && (
                    <button
                      onClick={handleBack}
                      className="px-6 py-3 border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors"
                    >
                      Back
                    </button>
                  )}
                  {step < 3 && (
                    <button
                      onClick={handleNext}
                      disabled={!isStepValid()}
                      className="flex-1 px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors"
                    >
                      {step === 2 ? 'Calculate' : 'Continue'}
                    </button>
                  )}
                  {step === 3 && (
                    <button
                      onClick={resetForm}
                      className="flex-1 px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors"
                    >
                      Start New Calculation
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BenzeneCalculator;
