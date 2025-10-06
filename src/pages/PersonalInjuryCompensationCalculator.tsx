import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, Shield } from 'lucide-react';
import { useCalculatorForm, CalculatorFormData, CalculatorResults } from '@/hooks/useCalculatorForm';
import { FormNavigation } from '@/components/calculator/FormNavigation';
import { Button } from '@/components/ui/button';

interface PersonalInjuryFormData extends CalculatorFormData {
  injuryType: string;
  severity: string;
  liability: string;
  medicalCosts: string;
  lostWages: string;
  permanentDisability: string;
  painAndSuffering: string;
  comparativeFault: string;
  ageGroup: string;
  futureImpact: string;
}

const initialFormData: PersonalInjuryFormData = {
  injuryType: '',
  severity: '',
  liability: '',
  medicalCosts: '',
  lostWages: '',
  permanentDisability: '',
  painAndSuffering: '',
  comparativeFault: '',
  ageGroup: '',
  futureImpact: ''
};

function calculateCompensation(data: PersonalInjuryFormData): CalculatorResults {
  let min = 15000;
  let max = 150000;
  let multiplier = 1.0;

  // Injury type multipliers
  const injuryMultipliers: Record<string, number> = {
    'soft-tissue': 1.0,
    'fracture': 1.5,
    'head-injury': 2.5,
    'spinal-injury': 3.0,
    'internal-organs': 2.0,
    'multiple-injuries': 2.2,
    'psychological': 1.3
  };
  multiplier *= injuryMultipliers[data.injuryType] || 1.0;

  // Severity multipliers
  const severityMultipliers: Record<string, number> = {
    'minor': 1.0,
    'moderate': 1.8,
    'severe': 2.5,
    'catastrophic': 4.0
  };
  multiplier *= severityMultipliers[data.severity] || 1.0;

  // Liability strength
  const liabilityMultipliers: Record<string, number> = {
    'clear': 1.5,
    'strong': 1.3,
    'disputed': 0.8,
    'shared': 0.9
  };
  multiplier *= liabilityMultipliers[data.liability] || 1.0;

  // Medical costs base
  const medicalCostBases: Record<string, number> = {
    'under-5k': 10000,
    '5k-25k': 30000,
    '25k-100k': 100000,
    '100k-500k': 400000,
    'over-500k': 800000
  };
  const medicalBase = medicalCostBases[data.medicalCosts] || 10000;
  min += medicalBase * 0.5;
  max += medicalBase * 2.5;

  // Lost wages addition
  const lostWageAdditions: Record<string, number> = {
    'none': 0,
    'under-5k': 5000,
    '5k-25k': 25000,
    '25k-100k': 100000,
    'over-100k': 200000
  };
  const wageAddition = lostWageAdditions[data.lostWages] || 0;
  min += wageAddition * 0.8;
  max += wageAddition * 1.5;

  // Permanent disability
  const disabilityMultipliers: Record<string, number> = {
    'none': 1.0,
    'partial-temporary': 1.4,
    'partial-permanent': 2.0,
    'total-temporary': 1.8,
    'total-permanent': 3.5
  };
  multiplier *= disabilityMultipliers[data.permanentDisability] || 1.0;

  // Pain and suffering level
  const painMultipliers: Record<string, number> = {
    'mild': 1.2,
    'moderate': 1.8,
    'severe': 2.5,
    'extreme': 3.5
  };
  multiplier *= painMultipliers[data.painAndSuffering] || 1.0;

  // Comparative fault reduction
  const faultReductions: Record<string, number> = {
    '0%': 1.0,
    '10%': 0.9,
    '25%': 0.75,
    '50%': 0.5,
    'over-50%': 0.3
  };
  multiplier *= faultReductions[data.comparativeFault] || 1.0;

  // Age-based future damages
  const ageMultipliers: Record<string, number> = {
    'under-18': 1.4,
    '18-30': 1.3,
    '31-50': 1.1,
    '51-65': 1.0,
    'over-65': 0.85
  };
  multiplier *= ageMultipliers[data.ageGroup] || 1.0;

  // Future impact
  const futureMultipliers: Record<string, number> = {
    'none': 1.0,
    'minor': 1.2,
    'moderate': 1.6,
    'major': 2.2,
    'life-altering': 3.0
  };
  multiplier *= futureMultipliers[data.futureImpact] || 1.0;

  min = Math.round(min * multiplier);
  max = Math.round(max * multiplier);

  return { min, max };
}

function validateForm(data: PersonalInjuryFormData, step: number): boolean {
  if (step === 1) {
    return !!(data.injuryType && data.severity && data.liability);
  }
  if (step === 2) {
    return !!(
      data.medicalCosts &&
      data.lostWages &&
      data.permanentDisability &&
      data.painAndSuffering &&
      data.comparativeFault &&
      data.ageGroup &&
      data.futureImpact
    );
  }
  return true;
}

const PersonalInjuryCompensationCalculator = () => {
  const {
    step,
    formData,
    results,
    updateField,
    handleNext,
    handleBack,
    resetForm,
    isStepValid
  } = useCalculatorForm<PersonalInjuryFormData>(
    initialFormData,
    calculateCompensation,
    validateForm
  );

  const renderStep1 = () => (
    <div className="space-y-8">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          What type of injury did you sustain?
        </label>
        <select
          value={formData.injuryType}
          onChange={(e) => updateField('injuryType', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        >
          <option value="">Select injury type</option>
          <option value="soft-tissue">Soft Tissue (sprains, strains)</option>
          <option value="fracture">Fracture/Broken Bone</option>
          <option value="head-injury">Head Injury/Concussion</option>
          <option value="spinal-injury">Spinal Injury</option>
          <option value="internal-organs">Internal Organ Damage</option>
          <option value="multiple-injuries">Multiple Injuries</option>
          <option value="psychological">Psychological/Emotional Injury</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          How severe is your injury?
        </label>
        <select
          value={formData.severity}
          onChange={(e) => updateField('severity', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        >
          <option value="">Select severity</option>
          <option value="minor">Minor (fully recovered or minor lingering)</option>
          <option value="moderate">Moderate (ongoing treatment needed)</option>
          <option value="severe">Severe (major medical intervention)</option>
          <option value="catastrophic">Catastrophic (life-altering)</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          How clear is the other party's liability?
        </label>
        <select
          value={formData.liability}
          onChange={(e) => updateField('liability', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        >
          <option value="">Select liability strength</option>
          <option value="clear">Clear (obvious fault)</option>
          <option value="strong">Strong evidence of fault</option>
          <option value="disputed">Disputed liability</option>
          <option value="shared">Shared responsibility</option>
        </select>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-8">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          What are your total medical costs?
        </label>
        <select
          value={formData.medicalCosts}
          onChange={(e) => updateField('medicalCosts', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        >
          <option value="">Select medical costs</option>
          <option value="under-5k">Under $5,000</option>
          <option value="5k-25k">$5,000 - $25,000</option>
          <option value="25k-100k">$25,000 - $100,000</option>
          <option value="100k-500k">$100,000 - $500,000</option>
          <option value="over-500k">Over $500,000</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          What are your lost wages?
        </label>
        <select
          value={formData.lostWages}
          onChange={(e) => updateField('lostWages', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        >
          <option value="">Select lost wages</option>
          <option value="none">None</option>
          <option value="under-5k">Under $5,000</option>
          <option value="5k-25k">$5,000 - $25,000</option>
          <option value="25k-100k">$25,000 - $100,000</option>
          <option value="over-100k">Over $100,000</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          Do you have permanent disability?
        </label>
        <select
          value={formData.permanentDisability}
          onChange={(e) => updateField('permanentDisability', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        >
          <option value="">Select disability status</option>
          <option value="none">No permanent disability</option>
          <option value="partial-temporary">Partial Temporary Disability</option>
          <option value="partial-permanent">Partial Permanent Disability</option>
          <option value="total-temporary">Total Temporary Disability</option>
          <option value="total-permanent">Total Permanent Disability</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          What is your pain and suffering level?
        </label>
        <select
          value={formData.painAndSuffering}
          onChange={(e) => updateField('painAndSuffering', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        >
          <option value="">Select pain level</option>
          <option value="mild">Mild (manageable discomfort)</option>
          <option value="moderate">Moderate (affects daily activities)</option>
          <option value="severe">Severe (significantly impairs life)</option>
          <option value="extreme">Extreme (constant debilitating pain)</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          What is your percentage of fault (if any)?
        </label>
        <select
          value={formData.comparativeFault}
          onChange={(e) => updateField('comparativeFault', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        >
          <option value="">Select fault percentage</option>
          <option value="0%">0% (no fault)</option>
          <option value="10%">10% at fault</option>
          <option value="25%">25% at fault</option>
          <option value="50%">50% at fault</option>
          <option value="over-50%">Over 50% at fault</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          What is your age group?
        </label>
        <select
          value={formData.ageGroup}
          onChange={(e) => updateField('ageGroup', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        >
          <option value="">Select age group</option>
          <option value="under-18">Under 18</option>
          <option value="18-30">18-30</option>
          <option value="31-50">31-50</option>
          <option value="51-65">51-65</option>
          <option value="over-65">Over 65</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          What is the future impact of this injury?
        </label>
        <select
          value={formData.futureImpact}
          onChange={(e) => updateField('futureImpact', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        >
          <option value="">Select future impact</option>
          <option value="none">No future impact</option>
          <option value="minor">Minor ongoing care needed</option>
          <option value="moderate">Moderate lifestyle changes</option>
          <option value="major">Major life adjustments required</option>
          <option value="life-altering">Complete life alteration</option>
        </select>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8">
        <div className="text-center mb-8">
          <Calculator className="w-16 h-16 mx-auto mb-4 text-slate-900" />
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Estimated Compensation Range
          </h2>
          <p className="text-slate-600">Based on your injury details</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="text-sm font-medium text-slate-600 mb-2">Minimum Estimate</div>
            <div className="text-4xl font-bold text-slate-900">
              ${results?.min.toLocaleString()}
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="text-sm font-medium text-slate-600 mb-2">Maximum Estimate</div>
            <div className="text-4xl font-bold text-slate-900">
              ${results?.max.toLocaleString()}
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
          <h3 className="font-semibold text-amber-900 mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Important Legal Disclaimer
          </h3>
          <div className="text-sm text-amber-800 space-y-2">
            <p>
              This estimate is based on general factors and should not be considered a guarantee
              of compensation. Actual settlement or verdict amounts depend on:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Specific facts and circumstances of your case</li>
              <li>Quality and strength of evidence</li>
              <li>Jurisdiction and applicable laws</li>
              <li>Insurance policy limits</li>
              <li>Defendant's ability to pay</li>
              <li>Skill of legal representation</li>
              <li>Jury composition and attitudes (if trial)</li>
            </ul>
            <p className="font-medium mt-3">
              Every case is unique. Contact an experienced personal injury attorney for a
              detailed case evaluation specific to your situation.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-slate-900">Damages Typically Include:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-50 rounded-lg p-4">
              <div className="font-medium text-slate-900 mb-1">Economic Damages</div>
              <div className="text-sm text-slate-600">Medical bills, lost wages, property damage</div>
            </div>
            <div className="bg-slate-50 rounded-lg p-4">
              <div className="font-medium text-slate-900 mb-1">Non-Economic Damages</div>
              <div className="text-sm text-slate-600">Pain, suffering, loss of enjoyment</div>
            </div>
            <div className="bg-slate-50 rounded-lg p-4">
              <div className="font-medium text-slate-900 mb-1">Future Damages</div>
              <div className="text-sm text-slate-600">Ongoing care, lost earning capacity</div>
            </div>
            <div className="bg-slate-50 rounded-lg p-4">
              <div className="font-medium text-slate-900 mb-1">Punitive Damages</div>
              <div className="text-sm text-slate-600">If gross negligence proven (rare)</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Discuss Your Case?</h3>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
          Get a detailed case evaluation from an experienced personal injury attorney.
          Most personal injury cases are handled on contingency - no fee unless we win.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button size="lg" className="text-lg px-8 bg-blue-600 hover:bg-blue-700 text-white">
              Get My Free Case Evaluation
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            onClick={resetForm}
            className="text-lg px-8 border-white text-white hover:bg-white hover:text-slate-900"
          >
            Calculate Again
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Personal Injury Calculator | General Injury Compensation | Trembach Law</title>
        <meta
          name="description"
          content="Calculate personal injury compensation for any type of accident. Free estimates covering economic and non-economic damages."
        />
      </Helmet>

      <main className="min-h-screen bg-white">
        <div className="border-b border-slate-200">
          <div className="container mx-auto px-6 py-4 max-w-5xl">
            <Link
              to="/calculators"
              className="inline-flex items-center text-slate-600 hover:text-slate-900 visited:text-slate-600 no-underline"
            >
              <ArrowLeft size={16} className="mr-2" />
              <span className="text-sm font-medium">Back to All Calculators</span>
            </Link>
          </div>
        </div>

        <section className="pt-20 pb-12 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight leading-[1.1]">
              Personal Injury<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light">
              General injury compensation estimator
            </p>
          </div>
        </section>

        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">All Types</div>
                <p className="text-slate-600">Injury coverage</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">Economic</div>
                <p className="text-slate-600">+ Non-economic damages</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">No Fee</div>
                <p className="text-slate-600">Unless we win</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="mb-12">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      step >= 1 ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-400'
                    }`}
                  >
                    1
                  </div>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      step >= 2 ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-400'
                    }`}
                  >
                    2
                  </div>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      step >= 3 ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-400'
                    }`}
                  >
                    3
                  </div>
                </div>
                <div className="text-sm font-medium text-slate-600">
                  Step {step} of 3
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
              {step === 1 && (
                <>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Injury Information</h2>
                  {renderStep1()}
                </>
              )}

              {step === 2 && (
                <>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Damages & Impact</h2>
                  {renderStep2()}
                </>
              )}

              {step === 3 && renderStep3()}

              {step < 3 && (
                <FormNavigation
                  currentStep={step}
                  totalSteps={3}
                  isValid={isStepValid()}
                  onBack={handleBack}
                  onNext={handleNext}
                />
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PersonalInjuryCompensationCalculator;
