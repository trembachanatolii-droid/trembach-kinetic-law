import React from 'react';
import { Link } from 'react-router-dom';
import { useCalculatorForm, CalculatorFormData, CalculatorResults } from '@/hooks/useCalculatorForm';
import {
  CalculatorLayout,
  CalculatorProgress,
  FormNavigation,
  OptionButton,
  CalculatorSEO
} from '@/components/calculator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface MedicalMalpracticeFormData extends CalculatorFormData {
  errorType: string;
  injurySeverity: string;
  medicalCosts: string;
  lostWages: string;
  age: string;
  permanentImpact: string;
  futureMedical: string;
  lifeExpectancy: string;
}

const initialFormData: MedicalMalpracticeFormData = {
  errorType: '',
  injurySeverity: '',
  medicalCosts: '',
  lostWages: '',
  age: '',
  permanentImpact: '',
  futureMedical: '',
  lifeExpectancy: ''
};

const errorTypeOptions = [
  { value: 'misdiagnosis', label: 'Misdiagnosis', description: 'Incorrect diagnosis leading to harm' },
  { value: 'surgical-error', label: 'Surgical Error', description: 'Preventable mistakes during surgery' },
  { value: 'medication-error', label: 'Medication Error', description: 'Wrong drug or dosage' },
  { value: 'birth-injury', label: 'Birth Injury', description: 'Negligence during delivery' },
  { value: 'anesthesia-error', label: 'Anesthesia Error', description: 'Errors in anesthesia administration' },
  { value: 'failure-diagnose', label: 'Failure to Diagnose', description: 'Delayed or missed diagnosis' }
];

const injurySeverityOptions = [
  { value: 'minor', label: 'Minor', description: 'Temporary harm, full recovery' },
  { value: 'moderate', label: 'Moderate', description: 'Extended treatment needed' },
  { value: 'severe', label: 'Severe', description: 'Serious permanent effects' },
  { value: 'catastrophic', label: 'Catastrophic', description: 'Life-altering disability or death' }
];

const ageOptions = [
  { value: 'under-40', label: 'Under 40', description: 'Higher future earning potential' },
  { value: '40-60', label: '40-60', description: 'Peak earning years' },
  { value: 'over-60', label: 'Over 60', description: 'Near or in retirement' }
];

const permanentImpactOptions = [
  { value: 'none', label: 'No Permanent Impact', description: 'Full recovery expected' },
  { value: 'minor', label: 'Minor Permanent', description: 'Slight ongoing limitations' },
  { value: 'significant', label: 'Significant Permanent', description: 'Major life changes' },
  { value: 'total-disability', label: 'Total Disability', description: 'Unable to work or care for self' }
];

const lifeExpectancyOptions = [
  { value: 'normal', label: 'Normal Life Expectancy', description: 'No reduction in lifespan' },
  { value: 'reduced-5-10', label: 'Reduced 5-10 Years', description: 'Moderate impact' },
  { value: 'reduced-10-20', label: 'Reduced 10-20 Years', description: 'Significant impact' },
  { value: 'severely-reduced', label: 'Severely Reduced', description: 'Major reduction in lifespan' }
];

function calculateCompensation(data: MedicalMalpracticeFormData): CalculatorResults {
  // Base amounts for medical malpractice
  let baseMin = 100000;
  let baseMax = 500000;

  // Error type multipliers (based on typical settlement patterns)
  const errorMultipliers: Record<string, number> = {
    'misdiagnosis': 2.0,
    'surgical-error': 3.5,
    'medication-error': 1.8,
    'birth-injury': 4.5,
    'anesthesia-error': 3.2,
    'failure-diagnose': 2.5
  };

  const errorMult = errorMultipliers[data.errorType] || 1;
  baseMin *= errorMult;
  baseMax *= errorMult;

  // Injury severity multipliers
  const severityMultipliers: Record<string, number> = {
    'minor': 1,
    'moderate': 2,
    'severe': 3.5,
    'catastrophic': 5
  };

  const severityMult = severityMultipliers[data.injurySeverity] || 1;
  baseMin *= severityMult;
  baseMax *= severityMult;

  // Add economic damages
  const medicalCosts = parseInt(data.medicalCosts) || 0;
  const futureMedical = parseInt(data.futureMedical) || 0;
  const lostWages = parseInt(data.lostWages) || 0;

  // Economic damages are not capped in California
  const economicDamages = medicalCosts + futureMedical + lostWages;
  baseMin += economicDamages * 1.5;
  baseMax += economicDamages * 3;

  // Permanent impact adjustments
  const permanentMultipliers: Record<string, number> = {
    'none': 1,
    'minor': 1.3,
    'significant': 2,
    'total-disability': 3
  };

  const permanentMult = permanentMultipliers[data.permanentImpact] || 1;
  baseMin *= permanentMult;
  baseMax *= permanentMult;

  // Age-based adjustments (younger victims have higher future loss)
  const ageMultipliers: Record<string, number> = {
    'under-40': 1.4,
    '40-60': 1.2,
    'over-60': 0.9
  };

  const ageMult = ageMultipliers[data.age] || 1;
  baseMin *= ageMult;
  baseMax *= ageMult;

  // Life expectancy impact
  const lifeExpectancyMultipliers: Record<string, number> = {
    'normal': 1,
    'reduced-5-10': 1.2,
    'reduced-10-20': 1.4,
    'severely-reduced': 1.6
  };

  const lifeMult = lifeExpectancyMultipliers[data.lifeExpectancy] || 1;
  baseMin *= lifeMult;
  baseMax *= lifeMult;

  // California MICRA cap on non-economic damages ($250,000)
  // Economic damages are unlimited
  const nonEconomicMin = baseMin - economicDamages;
  const nonEconomicMax = baseMax - economicDamages;
  
  const micraCappedMin = Math.min(nonEconomicMin, 250000) + economicDamages;
  const micraCappedMax = Math.min(nonEconomicMax, 250000) + economicDamages;

  return {
    min: Math.round(micraCappedMin),
    max: Math.round(micraCappedMax),
    medicalExpenses: medicalCosts,
    futureCare: futureMedical,
    lostIncome: lostWages,
    economicDamages: economicDamages,
    micraCapped: Math.round(micraCappedMax)
  };
}

function validateForm(data: MedicalMalpracticeFormData, step: number): boolean {
  if (step === 1) {
    return Boolean(data.errorType && data.injurySeverity);
  }
  if (step === 2) {
    return Boolean(
      data.medicalCosts &&
      data.lostWages &&
      data.age &&
      data.permanentImpact &&
      data.futureMedical &&
      data.lifeExpectancy
    );
  }
  return false;
}

export default function MedicalMalpracticeCompensationCalculator() {
  const {
    step,
    formData,
    results,
    updateField,
    handleNext,
    handleBack,
    resetForm,
    isStepValid
  } = useCalculatorForm<MedicalMalpracticeFormData>(
    initialFormData,
    calculateCompensation,
    validateForm
  );

  return (
    <>
      <CalculatorSEO
        title="Medical Malpractice Compensation Calculator | Estimate Your Case Value"
        description="Calculate potential compensation for medical malpractice claims including misdiagnosis, surgical errors, and medical negligence. Get an instant estimate with MICRA cap considerations."
        canonical="/medical-malpractice-calculator"
        injuryType="medical malpractice"
      />

      <CalculatorLayout
        title="Medical Malpractice Calculator"
        subtitle="Estimate compensation for doctor negligence and medical errors"
        metaTitle="Medical Malpractice Calculator | Estimate Your Compensation"
        metaDescription="Free medical malpractice compensation calculator. Estimate damages for surgical errors, misdiagnosis, and medical negligence cases."
        stats={[
          { value: '$500K+', label: 'Average Settlement' },
          { value: '250K', label: 'Medical Errors/Year' },
          { value: '$250K', label: 'MICRA Cap (Non-Economic)' }
        ]}
      >
        <CalculatorProgress currentStep={step} totalSteps={3} />

        {/* Step 1: Error Type and Severity */}
        {step === 1 && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Type of Medical Error</h2>
              <p className="text-muted-foreground">What type of negligence occurred?</p>
            </div>

            <div className="space-y-6">
              <div>
                <Label className="text-base font-medium mb-4 block">Medical Error Category</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {errorTypeOptions.map((option) => (
                    <OptionButton
                      key={option.value}
                      value={option.value}
                      label={option.label}
                      description={option.description}
                      isSelected={formData.errorType === option.value}
                      onClick={() => updateField('errorType', option.value)}
                    />
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-base font-medium mb-4 block">Injury Severity</Label>
                <div className="grid grid-cols-2 gap-4">
                  {injurySeverityOptions.map((option) => (
                    <OptionButton
                      key={option.value}
                      value={option.value}
                      label={option.label}
                      description={option.description}
                      isSelected={formData.injurySeverity === option.value}
                      onClick={() => updateField('injurySeverity', option.value)}
                    />
                  ))}
                </div>
              </div>
            </div>

            <FormNavigation
              currentStep={step}
              totalSteps={3}
              isValid={isStepValid()}
              onBack={handleBack}
              onNext={handleNext}
            />
          </div>
        )}

        {/* Step 2: Financial Impact */}
        {step === 2 && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Financial Impact</h2>
              <p className="text-muted-foreground">Economic damages and life impact</p>
            </div>

            <div className="space-y-6">
              <div>
                <Label htmlFor="medicalCosts" className="text-base font-medium">
                  Past Medical Expenses ($)
                </Label>
                <Input
                  id="medicalCosts"
                  type="number"
                  placeholder="50000"
                  value={formData.medicalCosts}
                  onChange={(e) => updateField('medicalCosts', e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="futureMedical" className="text-base font-medium">
                  Future Medical Costs ($)
                </Label>
                <Input
                  id="futureMedical"
                  type="number"
                  placeholder="100000"
                  value={formData.futureMedical}
                  onChange={(e) => updateField('futureMedical', e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="lostWages" className="text-base font-medium">
                  Lost Wages & Income ($)
                </Label>
                <Input
                  id="lostWages"
                  type="number"
                  placeholder="75000"
                  value={formData.lostWages}
                  onChange={(e) => updateField('lostWages', e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label className="text-base font-medium mb-4 block">Your Age</Label>
                <div className="grid md:grid-cols-3 gap-4">
                  {ageOptions.map((option) => (
                    <OptionButton
                      key={option.value}
                      value={option.value}
                      label={option.label}
                      description={option.description}
                      isSelected={formData.age === option.value}
                      onClick={() => updateField('age', option.value)}
                    />
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-base font-medium mb-4 block">Permanent Impact</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {permanentImpactOptions.map((option) => (
                    <OptionButton
                      key={option.value}
                      value={option.value}
                      label={option.label}
                      description={option.description}
                      isSelected={formData.permanentImpact === option.value}
                      onClick={() => updateField('permanentImpact', option.value)}
                    />
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-base font-medium mb-4 block">Impact on Life Expectancy</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {lifeExpectancyOptions.map((option) => (
                    <OptionButton
                      key={option.value}
                      value={option.value}
                      label={option.label}
                      description={option.description}
                      isSelected={formData.lifeExpectancy === option.value}
                      onClick={() => updateField('lifeExpectancy', option.value)}
                    />
                  ))}
                </div>
              </div>
            </div>

            <FormNavigation
              currentStep={step}
              totalSteps={3}
              isValid={isStepValid()}
              onBack={handleBack}
              onNext={handleNext}
              nextButtonText="Calculate Compensation"
            />
          </div>
        )}

        {/* Step 3: Results */}
        {step === 3 && results && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-black mb-2">Your Estimated Compensation Range</h2>
              <p className="text-slate-600">Based on medical malpractice details</p>
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
                <p className="text-sm text-slate-600">
                  Medical: ${results.medicalExpenses?.toLocaleString()} | Future Care: ${results.futureCare?.toLocaleString()} | Lost Income: ${results.lostIncome?.toLocaleString()}
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h4 className="font-semibold text-black mb-2">California MICRA Law</h4>
                <p className="text-sm text-slate-600">
                  Non-economic damages (pain & suffering) capped at $250,000. Economic damages are unlimited.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <p className="text-sm text-amber-900">
                <strong>Important:</strong> This is an estimate only. California's MICRA law caps non-economic damages at $250,000 in medical malpractice cases. Actual compensation depends on many factors including negligence severity, expert testimony, and jury decisions.
              </p>
            </div>

            <div className="text-center pt-4 space-y-4">
              <h3 className="text-xl font-semibold text-black">Maximize your compensation with expert legal guidance</h3>
              <Link to="/contact">
                <Button size="lg" className="h-14 px-8 text-base bg-blue-600 hover:bg-blue-700 text-white">
                  Get My Free Case Evaluation
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                onClick={resetForm}
                className="h-14 px-8 text-base ml-4"
              >
                Calculate Another Case
              </Button>
            </div>
          </div>
        )}
      </CalculatorLayout>
    </>
  );
}
