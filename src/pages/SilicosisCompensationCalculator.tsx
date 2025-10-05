import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Wind, AlertCircle } from 'lucide-react';
import { useCalculatorForm, CalculatorFormData, CalculatorResults } from '@/hooks/useCalculatorForm';

interface SilicosisFormData extends CalculatorFormData {
  diagnosisType: string;
  severity: string;
  workplaceType: string;
  exposureYears: string;
  age: string;
  medicalCosts: string;
  futureCareCosts: string;
  lostWages: string;
  breathingSupport: string;
  lungTransplant: string;
  [key: string]: string;
}

const initialFormData: SilicosisFormData = {
  diagnosisType: '',
  severity: '',
  workplaceType: '',
  exposureYears: '',
  age: '',
  medicalCosts: '',
  futureCareCosts: '',
  lostWages: '',
  breathingSupport: '',
  lungTransplant: ''
};

const calculateCompensation = (data: SilicosisFormData): CalculatorResults => {
  const diagnosisMultipliers: { [key: string]: number } = {
    'simple': 1.5,
    'accelerated': 2.5,
    'acute': 3.5,
    'pmf': 5.0,
    'conglomerate': 4.5
  };

  const severityMultipliers: { [key: string]: number } = {
    'mild': 1.0,
    'moderate': 2.0,
    'severe': 3.5,
    'catastrophic': 5.0
  };

  const workplaceMultipliers: { [key: string]: number } = {
    'countertop': 2.8,
    'mining': 2.5,
    'sandblasting': 3.0,
    'construction': 2.2,
    'foundry': 2.4,
    'quarry': 2.3,
    'other': 1.8
  };

  const exposureMultipliers: { [key: string]: number } = {
    '0-2': 1.0,
    '3-5': 1.3,
    '6-10': 1.6,
    '11-15': 2.0,
    '16-20': 2.4,
    '20+': 2.8
  };

  let baseMin = 100000;
  let baseMax = 400000;

  const diagnosisMult = diagnosisMultipliers[data.diagnosisType] || 1;
  const severityMult = severityMultipliers[data.severity] || 1;
  const workplaceMult = workplaceMultipliers[data.workplaceType] || 1;
  const exposureMult = exposureMultipliers[data.exposureYears] || 1;

  baseMin *= diagnosisMult * severityMult * workplaceMult;
  baseMax *= diagnosisMult * severityMult * workplaceMult;

  baseMin *= exposureMult;
  baseMax *= exposureMult;

  const age = parseInt(data.age) || 40;
  if (age < 40) {
    const ageFactor = 1 + ((40 - age) * 0.02);
    baseMin *= ageFactor;
    baseMax *= ageFactor;
  }

  const medicalCosts = parseInt(data.medicalCosts) || 0;
  const futureCareCosts = parseInt(data.futureCareCosts) || 0;
  const lostWages = parseInt(data.lostWages) || 0;

  baseMin += medicalCosts + futureCareCosts * 0.8 + lostWages * 0.8;
  baseMax += medicalCosts * 1.5 + futureCareCosts * 1.5 + lostWages * 1.5;

  if (data.breathingSupport === 'yes') {
    baseMin *= 1.8;
    baseMax *= 2.0;
  }

  if (data.lungTransplant === 'yes') {
    baseMin *= 2.5;
    baseMax *= 3.0;
  }

  return {
    min: Math.round(baseMin),
    max: Math.round(baseMax)
  };
};

const validateStep = (data: SilicosisFormData, step: number): boolean => {
  if (step === 1) {
    return !!(data.diagnosisType && data.severity && data.workplaceType && data.exposureYears);
  }
  if (step === 2) {
    return !!(data.age && data.medicalCosts && data.futureCareCosts && 
              data.lostWages && data.breathingSupport && data.lungTransplant);
  }
  return true;
};

const SilicosisCompensationCalculator = () => {
  const {
    step,
    formData,
    results,
    updateField,
    handleNext,
    handleBack,
    resetForm,
    isStepValid
  } = useCalculatorForm<SilicosisFormData>(
    initialFormData,
    calculateCompensation,
    validateStep
  );

  return (
    <>
      <Helmet>
        <title>Silicosis Calculator | Countertop Worker Compensation | Trembach Law</title>
        <meta name="description" content="Calculate silicosis compensation for countertop workers. Free estimates for progressive massive fibrosis cases." />
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
              Silicosis<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light">
              Occupational lung disease compensation
            </p>
          </div>
        </section>

        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">$600K+</div>
                <p className="text-slate-600">PMF case average</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">Epidemic</div>
                <p className="text-slate-600">Countertop industry</p>
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
                        Type of Silicosis Diagnosis
                      </label>
                      <select
                        value={formData.diagnosisType}
                        onChange={(e) => updateField('diagnosisType', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                      >
                        <option value="">Select diagnosis type</option>
                        <option value="simple">Simple Silicosis</option>
                        <option value="accelerated">Accelerated Silicosis</option>
                        <option value="acute">Acute Silicosis</option>
                        <option value="pmf">Progressive Massive Fibrosis (PMF)</option>
                        <option value="conglomerate">Conglomerate Masses</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-2">
                        Disease Severity
                      </label>
                      <select
                        value={formData.severity}
                        onChange={(e) => updateField('severity', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                      >
                        <option value="">Select severity</option>
                        <option value="mild">Mild - Minor breathing difficulty</option>
                        <option value="moderate">Moderate - Noticeable impairment</option>
                        <option value="severe">Severe - Significant disability</option>
                        <option value="catastrophic">Catastrophic - Life-threatening</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-2">
                        Workplace Type
                      </label>
                      <select
                        value={formData.workplaceType}
                        onChange={(e) => updateField('workplaceType', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                      >
                        <option value="">Select workplace</option>
                        <option value="countertop">Countertop Fabrication/Installation</option>
                        <option value="sandblasting">Sandblasting</option>
                        <option value="mining">Mining Operations</option>
                        <option value="foundry">Foundry Work</option>
                        <option value="quarry">Quarry Operations</option>
                        <option value="construction">Construction/Demolition</option>
                        <option value="other">Other Industrial Setting</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-2">
                        Years of Silica Exposure
                      </label>
                      <select
                        value={formData.exposureYears}
                        onChange={(e) => updateField('exposureYears', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                      >
                        <option value="">Select duration</option>
                        <option value="0-2">0-2 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="6-10">6-10 years</option>
                        <option value="11-15">11-15 years</option>
                        <option value="16-20">16-20 years</option>
                        <option value="20+">Over 20 years</option>
                      </select>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-2">
                        Your Current Age
                      </label>
                      <select
                        value={formData.age}
                        onChange={(e) => updateField('age', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                      >
                        <option value="">Select age</option>
                        <option value="20">Under 30</option>
                        <option value="35">30-39</option>
                        <option value="45">40-49</option>
                        <option value="55">50-59</option>
                        <option value="65">60+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-2">
                        Medical Costs to Date
                      </label>
                      <select
                        value={formData.medicalCosts}
                        onChange={(e) => updateField('medicalCosts', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                      >
                        <option value="">Select amount</option>
                        <option value="10000">$0 - $10,000</option>
                        <option value="30000">$10,000 - $50,000</option>
                        <option value="75000">$50,000 - $100,000</option>
                        <option value="150000">$100,000 - $200,000</option>
                        <option value="300000">Over $200,000</option>
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
                        <option value="25000">$0 - $50,000</option>
                        <option value="100000">$50,000 - $150,000</option>
                        <option value="250000">$150,000 - $350,000</option>
                        <option value="500000">$350,000 - $650,000</option>
                        <option value="1000000">Over $650,000</option>
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

                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-2">
                        Do you require breathing support?
                      </label>
                      <select
                        value={formData.breathingSupport}
                        onChange={(e) => updateField('breathingSupport', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                      >
                        <option value="">Select option</option>
                        <option value="no">No</option>
                        <option value="yes">Yes - Oxygen or ventilator</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-2">
                        Lung transplant needed or received?
                      </label>
                      <select
                        value={formData.lungTransplant}
                        onChange={(e) => updateField('lungTransplant', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                      >
                        <option value="">Select option</option>
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
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
                        Based on your diagnosis and economic damages
                      </p>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                      <div className="flex gap-3">
                        <AlertCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                        <div className="text-sm text-amber-900">
                          <p className="font-semibold mb-2">Important Legal Disclaimer:</p>
                          <p className="mb-2">
                            This calculator provides a general estimate only and does not constitute legal advice or a guarantee of compensation. Actual case values depend on multiple factors including state laws, available evidence, liable parties, and case-specific circumstances.
                          </p>
                          <p>
                            Silicosis cases involve complex occupational health regulations and may qualify for workers' compensation, product liability, or toxic tort claims. Consult with an experienced attorney for a proper evaluation.
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

export default SilicosisCompensationCalculator;
