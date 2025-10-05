import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { useCalculatorForm, CalculatorFormData, CalculatorResults } from '@/hooks/useCalculatorForm';

interface CampLejeuneFormData extends CalculatorFormData {
  illness: string;
  residenceYears: string;
  veteranStatus: string;
  age: string;
  medicalCosts: string;
  futureCareCosts: string;
  lostWages: string;
  disability: string;
  [key: string]: string;
}

const initialFormData: CampLejeuneFormData = {
  illness: '',
  residenceYears: '',
  veteranStatus: '',
  age: '',
  medicalCosts: '',
  futureCareCosts: '',
  lostWages: '',
  disability: ''
};

const calculateCompensation = (data: CampLejeuneFormData): CalculatorResults => {
  const illnessMultipliers: { [key: string]: number } = {
    'bladder-cancer': 4.0,
    'kidney-cancer': 4.2,
    'liver-cancer': 4.5,
    'leukemia': 5.0,
    'non-hodgkin': 4.8,
    'multiple-myeloma': 4.5,
    'parkinsons': 3.5,
    'kidney-disease': 2.8,
    'hepatic-steatosis': 3.0,
    'female-infertility': 2.5,
    'miscarriage': 2.3,
    'scleroderma': 3.2,
    'birth-defects': 4.0,
    'other': 2.0
  };

  const residenceMultipliers: { [key: string]: number } = {
    '10+': 2.5,
    '5-10': 2.0,
    '2-5': 1.6,
    '1-2': 1.3,
    'under-1': 1.1
  };

  let baseMin = 150000;
  let baseMax = 500000;

  const illnessMult = illnessMultipliers[data.illness] || 1;
  const residenceMult = residenceMultipliers[data.residenceYears] || 1;

  baseMin *= illnessMult * residenceMult;
  baseMax *= illnessMult * residenceMult;

  if (data.veteranStatus === 'veteran') {
    baseMin *= 1.2;
    baseMax *= 1.3;
  }

  const age = parseInt(data.age) || 40;
  if (age < 50) {
    const ageFactor = 1 + ((50 - age) * 0.015);
    baseMin *= ageFactor;
    baseMax *= ageFactor;
  }

  const medicalCosts = parseInt(data.medicalCosts) || 0;
  const futureCareCosts = parseInt(data.futureCareCosts) || 0;
  const lostWages = parseInt(data.lostWages) || 0;

  baseMin += medicalCosts + futureCareCosts * 0.8 + lostWages * 0.9;
  baseMax += medicalCosts * 1.5 + futureCareCosts * 1.5 + lostWages * 1.5;

  if (data.disability === 'severe' || data.disability === 'total') {
    const disabilityMult = data.disability === 'total' ? 2.5 : 1.8;
    baseMin *= disabilityMult;
    baseMax *= disabilityMult;
  }

  return {
    min: Math.round(baseMin),
    max: Math.round(baseMax)
  };
};

const validateStep = (data: CampLejeuneFormData, step: number): boolean => {
  if (step === 1) {
    return !!(data.illness && data.residenceYears && data.veteranStatus && data.age);
  }
  if (step === 2) {
    return !!(data.medicalCosts && data.futureCareCosts && data.lostWages && data.disability);
  }
  return true;
};

const CampLejeuneCalculator = () => {
  const {
    step,
    formData,
    results,
    updateField,
    handleNext,
    handleBack,
    resetForm,
    isStepValid
  } = useCalculatorForm<CampLejeuneFormData>(
    initialFormData,
    calculateCompensation,
    validateStep
  );

  return (
    <>
      <Helmet>
        <title>Camp Lejeune Calculator | Water Contamination Compensation | Trembach Law</title>
        <meta name="description" content="Calculate Camp Lejeune water contamination compensation for cancer and other illnesses. Free estimates for veterans and families." />
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
              Camp Lejeune<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light">
              Water contamination compensation
            </p>
          </div>
        </section>

        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">$1M+</div>
                <p className="text-slate-600">Potential compensation</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">1953-1987</div>
                <p className="text-slate-600">Contamination period</p>
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
                        Illness or Condition
                      </label>
                      <select
                        value={formData.illness}
                        onChange={(e) => updateField('illness', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                      >
                        <option value="">Select illness</option>
                        <option value="leukemia">Leukemia</option>
                        <option value="non-hodgkin">Non-Hodgkin's Lymphoma</option>
                        <option value="multiple-myeloma">Multiple Myeloma</option>
                        <option value="bladder-cancer">Bladder Cancer</option>
                        <option value="kidney-cancer">Kidney Cancer</option>
                        <option value="liver-cancer">Liver Cancer</option>
                        <option value="parkinsons">Parkinson's Disease</option>
                        <option value="kidney-disease">Kidney Disease</option>
                        <option value="hepatic-steatosis">Hepatic Steatosis</option>
                        <option value="female-infertility">Female Infertility</option>
                        <option value="miscarriage">Miscarriage</option>
                        <option value="scleroderma">Scleroderma</option>
                        <option value="birth-defects">Birth Defects</option>
                        <option value="other">Other Condition</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-2">
                        Years at Camp Lejeune (1953-1987)
                      </label>
                      <select
                        value={formData.residenceYears}
                        onChange={(e) => updateField('residenceYears', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                      >
                        <option value="">Select duration</option>
                        <option value="10+">10+ years</option>
                        <option value="5-10">5-10 years</option>
                        <option value="2-5">2-5 years</option>
                        <option value="1-2">1-2 years</option>
                        <option value="under-1">Under 1 year (30+ days)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-2">
                        Veteran Status
                      </label>
                      <select
                        value={formData.veteranStatus}
                        onChange={(e) => updateField('veteranStatus', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                      >
                        <option value="">Select status</option>
                        <option value="veteran">Veteran</option>
                        <option value="family">Family Member</option>
                        <option value="civilian">Civilian Worker</option>
                      </select>
                    </div>

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
                        <option value="30">Under 40</option>
                        <option value="45">40-49</option>
                        <option value="55">50-59</option>
                        <option value="65">60-69</option>
                        <option value="75">70+</option>
                      </select>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
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
                        <option value="25000">$0 - $50,000</option>
                        <option value="100000">$50,000 - $150,000</option>
                        <option value="250000">$150,000 - $350,000</option>
                        <option value="500000">$350,000 - $650,000</option>
                        <option value="1000000">Over $650,000</option>
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

                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-2">
                        Level of Disability
                      </label>
                      <select
                        value={formData.disability}
                        onChange={(e) => updateField('disability', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                      >
                        <option value="">Select disability level</option>
                        <option value="none">None/Minimal</option>
                        <option value="partial">Partial Disability</option>
                        <option value="severe">Severe Disability</option>
                        <option value="total">Total/Permanent Disability</option>
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
                        Based on your illness and economic damages
                      </p>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                      <div className="flex gap-3">
                        <AlertCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                        <div className="text-sm text-amber-900">
                          <p className="font-semibold mb-2">Important Legal Disclaimer:</p>
                          <p className="mb-2">
                            This calculator provides a general estimate only and does not constitute legal advice or a guarantee of compensation. Actual case values depend on multiple factors including specific medical conditions, duration of exposure, proof of residence, and individual circumstances.
                          </p>
                          <p>
                            Camp Lejeune Justice Act claims have specific eligibility requirements and filing deadlines. Consult with an experienced attorney immediately to evaluate your case and protect your rights.
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

export default CampLejeuneCalculator;
