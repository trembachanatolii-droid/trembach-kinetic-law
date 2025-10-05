import React from 'react';
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

interface CarAccidentFormData extends CalculatorFormData {
  injuryType: string;
  injurySeverity: string;
  medicalCosts: string;
  futureMedical: string;
  lostWages: string;
  accidentType: string;
  faultPercentage: string;
  vehicleDamage: string;
  permanentImpact: string;
  insurance: string;
}

const initialFormData: CarAccidentFormData = {
  injuryType: '',
  injurySeverity: '',
  medicalCosts: '',
  futureMedical: '',
  lostWages: '',
  accidentType: '',
  faultPercentage: '',
  vehicleDamage: '',
  permanentImpact: '',
  insurance: ''
};

const injuryTypeOptions = [
  { value: 'whiplash', label: 'Whiplash/Soft Tissue', description: 'Neck and back strain' },
  { value: 'broken-bones', label: 'Broken Bones', description: 'Fractures requiring treatment' },
  { value: 'head-injury', label: 'Head/Brain Injury', description: 'Concussion or TBI' },
  { value: 'spinal-injury', label: 'Spinal Cord Injury', description: 'Back or spine damage' },
  { value: 'internal-injuries', label: 'Internal Injuries', description: 'Organ damage' },
  { value: 'multiple', label: 'Multiple Injuries', description: 'Several injury types' }
];

const injurySeverityOptions = [
  { value: 'minor', label: 'Minor', description: 'Full recovery expected' },
  { value: 'moderate', label: 'Moderate', description: 'Extended recovery time' },
  { value: 'severe', label: 'Severe', description: 'Major medical intervention' },
  { value: 'catastrophic', label: 'Catastrophic', description: 'Life-changing injuries' }
];

const accidentTypeOptions = [
  { value: 'rear-end', label: 'Rear-End Collision', description: 'Hit from behind' },
  { value: 'head-on', label: 'Head-On Collision', description: 'Frontal impact' },
  { value: 't-bone', label: 'T-Bone/Side Impact', description: 'Side collision' },
  { value: 'rollover', label: 'Rollover', description: 'Vehicle flipped' },
  { value: 'hit-and-run', label: 'Hit and Run', description: 'Driver fled scene' },
  { value: 'multi-vehicle', label: 'Multi-Vehicle', description: 'Pileup or chain reaction' }
];

const faultOptions = [
  { value: '100', label: '100% Other Driver', description: 'Clear liability' },
  { value: '75-99', label: '75-99% Other Driver', description: 'Mostly at fault' },
  { value: '50-74', label: '50-74% Other Driver', description: 'Shared fault' },
  { value: 'under-50', label: 'Under 50% Other Driver', description: 'May limit recovery' }
];

const permanentImpactOptions = [
  { value: 'none', label: 'No Permanent Impact', description: 'Full recovery' },
  { value: 'minor', label: 'Minor Permanent', description: 'Slight limitations' },
  { value: 'significant', label: 'Significant Permanent', description: 'Major life changes' },
  { value: 'total-disability', label: 'Total Disability', description: 'Unable to work' }
];

const insuranceOptions = [
  { value: 'full-coverage', label: 'Full Coverage', description: 'At-fault driver insured' },
  { value: 'minimum', label: 'Minimum Coverage', description: 'Basic policy limits' },
  { value: 'uninsured', label: 'Uninsured Driver', description: 'No insurance' },
  { value: 'underinsured', label: 'Underinsured', description: 'Insufficient coverage' }
];

function calculateCompensation(data: CarAccidentFormData): CalculatorResults {
  // Base amounts for car accidents
  let baseMin = 15000;
  let baseMax = 75000;

  // Injury type multipliers
  const injuryMultipliers: Record<string, number> = {
    'whiplash': 1.2,
    'broken-bones': 2.0,
    'head-injury': 4.0,
    'spinal-injury': 5.0,
    'internal-injuries': 3.5,
    'multiple': 3.2
  };

  const injuryMult = injuryMultipliers[data.injuryType] || 1;
  baseMin *= injuryMult;
  baseMax *= injuryMult;

  // Severity multipliers
  const severityMultipliers: Record<string, number> = {
    'minor': 1,
    'moderate': 2,
    'severe': 3.5,
    'catastrophic': 6
  };

  const severityMult = severityMultipliers[data.injurySeverity] || 1;
  baseMin *= severityMult;
  baseMax *= severityMult;

  // Add economic damages
  const medicalCosts = parseInt(data.medicalCosts) || 0;
  const futureMedical = parseInt(data.futureMedical) || 0;
  const lostWages = parseInt(data.lostWages) || 0;
  const vehicleDamage = parseInt(data.vehicleDamage) || 0;

  baseMin += medicalCosts * 2 + futureMedical + lostWages + vehicleDamage;
  baseMax += medicalCosts * 4 + futureMedical * 2 + lostWages * 2 + vehicleDamage;

  // Accident type impact
  const accidentMultipliers: Record<string, number> = {
    'rear-end': 1.1,
    'head-on': 1.8,
    't-bone': 1.6,
    'rollover': 2.0,
    'hit-and-run': 1.3,
    'multi-vehicle': 1.4
  };

  const accidentMult = accidentMultipliers[data.accidentType] || 1;
  baseMin *= accidentMult;
  baseMax *= accidentMult;

  // Permanent impact adjustments
  const permanentMultipliers: Record<string, number> = {
    'none': 1,
    'minor': 1.4,
    'significant': 2.2,
    'total-disability': 3.5
  };

  const permanentMult = permanentMultipliers[data.permanentImpact] || 1;
  baseMin *= permanentMult;
  baseMax *= permanentMult;

  // Fault percentage reduction (California comparative negligence)
  const faultReductions: Record<string, number> = {
    '100': 1.0,
    '75-99': 0.85,
    '50-74': 0.65,
    'under-50': 0.4
  };

  const faultReduction = faultReductions[data.faultPercentage] || 1;
  baseMin *= faultReduction;
  baseMax *= faultReduction;

  // Insurance coverage impact on collectability
  const insuranceFactors: Record<string, number> = {
    'full-coverage': 1.0,
    'minimum': 0.7,
    'uninsured': 0.5,
    'underinsured': 0.6
  };

  const insuranceFactor = insuranceFactors[data.insurance] || 1;
  const collectableMin = baseMin * insuranceFactor;
  const collectableMax = baseMax * insuranceFactor;

  return {
    min: Math.round(collectableMin),
    max: Math.round(collectableMax),
    medicalExpenses: medicalCosts,
    futureCare: futureMedical,
    lostIncome: lostWages,
    propertyDamage: vehicleDamage,
    totalEconomic: medicalCosts + futureMedical + lostWages + vehicleDamage
  };
}

function validateForm(data: CarAccidentFormData, step: number): boolean {
  if (step === 1) {
    return Boolean(
      data.injuryType &&
      data.injurySeverity &&
      data.accidentType
    );
  }
  if (step === 2) {
    return Boolean(
      data.medicalCosts &&
      data.lostWages &&
      data.faultPercentage &&
      data.permanentImpact &&
      data.vehicleDamage &&
      data.insurance
    );
  }
  return false;
}

export default function CarCompensationCalculator() {
  const {
    step,
    formData,
    results,
    updateField,
    handleNext,
    handleBack,
    resetForm,
    isStepValid
  } = useCalculatorForm<CarAccidentFormData>(
    initialFormData,
    calculateCompensation,
    validateForm
  );

  return (
    <>
      <CalculatorSEO
        title="Car Accident Compensation Calculator | Free Settlement Estimate"
        description="Calculate your potential car accident settlement instantly. Free estimates based on injuries, medical costs, lost wages, and fault percentage. Get accurate compensation ranges."
        canonical="/car-accident-calculator"
        injuryType="car accident"
      />

      <CalculatorLayout
        title="Car Accident Calculator"
        subtitle="Estimate your accident injury compensation"
        metaTitle="Car Accident Compensation Calculator"
        metaDescription="Free car accident settlement calculator. Instant estimates based on injuries and damages."
        stats={[
          { value: '$20K+', label: 'Average Settlement' },
          { value: '6M+', label: 'Accidents/Year' },
          { value: '24/7', label: 'Free Consultation' }
        ]}
      >
        <CalculatorProgress currentStep={step} totalSteps={3} />

        {/* Step 1: Injury and Accident Details */}
        {step === 1 && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Injury & Accident Details</h2>
              <p className="text-muted-foreground">Tell us about your injuries and the accident</p>
            </div>

            <div className="space-y-6">
              <div>
                <Label className="text-base font-medium mb-4 block">Type of Injury</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {injuryTypeOptions.map((option) => (
                    <OptionButton
                      key={option.value}
                      value={option.value}
                      label={option.label}
                      description={option.description}
                      isSelected={formData.injuryType === option.value}
                      onClick={() => updateField('injuryType', option.value)}
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

              <div>
                <Label className="text-base font-medium mb-4 block">Accident Type</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {accidentTypeOptions.map((option) => (
                    <OptionButton
                      key={option.value}
                      value={option.value}
                      label={option.label}
                      description={option.description}
                      isSelected={formData.accidentType === option.value}
                      onClick={() => updateField('accidentType', option.value)}
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

        {/* Step 2: Financial Impact & Details */}
        {step === 2 && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Financial Impact & Case Details</h2>
              <p className="text-muted-foreground">Damages and liability information</p>
            </div>

            <div className="space-y-6">
              <div>
                <Label htmlFor="medicalCosts" className="text-base font-medium">
                  Medical Expenses to Date ($)
                </Label>
                <Input
                  id="medicalCosts"
                  type="number"
                  placeholder="15000"
                  value={formData.medicalCosts}
                  onChange={(e) => updateField('medicalCosts', e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="futureMedical" className="text-base font-medium">
                  Estimated Future Medical Costs ($)
                </Label>
                <Input
                  id="futureMedical"
                  type="number"
                  placeholder="5000"
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
                  placeholder="8000"
                  value={formData.lostWages}
                  onChange={(e) => updateField('lostWages', e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="vehicleDamage" className="text-base font-medium">
                  Vehicle Damage ($)
                </Label>
                <Input
                  id="vehicleDamage"
                  type="number"
                  placeholder="10000"
                  value={formData.vehicleDamage}
                  onChange={(e) => updateField('vehicleDamage', e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label className="text-base font-medium mb-4 block">Fault Percentage</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {faultOptions.map((option) => (
                    <OptionButton
                      key={option.value}
                      value={option.value}
                      label={option.label}
                      description={option.description}
                      isSelected={formData.faultPercentage === option.value}
                      onClick={() => updateField('faultPercentage', option.value)}
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
                <Label className="text-base font-medium mb-4 block">At-Fault Driver's Insurance</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {insuranceOptions.map((option) => (
                    <OptionButton
                      key={option.value}
                      value={option.value}
                      label={option.label}
                      description={option.description}
                      isSelected={formData.insurance === option.value}
                      onClick={() => updateField('insurance', option.value)}
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
              nextButtonText="Calculate Settlement"
            />
          </div>
        )}

        {/* Step 3: Results */}
        {step === 3 && results && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-black mb-2">Your Estimated Settlement Range</h2>
              <p className="text-slate-600">Based on your accident details</p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-black mb-2">
                ${results.min.toLocaleString()} - ${results.max.toLocaleString()}
              </div>
              <p className="text-slate-600">Potential Settlement Range</p>
            </div>

            <div className="space-y-4">
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h4 className="font-semibold text-black mb-2">Economic Damages Breakdown</h4>
                <div className="text-sm text-slate-600 space-y-1">
                  <p>Medical Expenses: ${results.medicalExpenses?.toLocaleString()}</p>
                  <p>Future Medical Care: ${results.futureCare?.toLocaleString()}</p>
                  <p>Lost Wages: ${results.lostIncome?.toLocaleString()}</p>
                  <p>Property Damage: ${results.propertyDamage?.toLocaleString()}</p>
                  <p className="font-semibold pt-2 border-t border-slate-200">
                    Total Economic: ${results.totalEconomic?.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h4 className="font-semibold text-black mb-2">California Comparative Negligence</h4>
                <p className="text-sm text-slate-600">
                  Your compensation is adjusted based on fault percentage. The estimate shown reflects the reduced amount based on shared liability.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h4 className="font-semibold text-black mb-2">Insurance Coverage Impact</h4>
                <p className="text-sm text-slate-600">
                  The collectible amount depends on the at-fault driver's insurance coverage. Uninsured/underinsured motorist claims may require additional coverage.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <p className="text-sm text-amber-900">
                <strong>Important:</strong> This estimate is based on typical car accident settlements. Actual compensation depends on case specifics, evidence quality, insurance limits, and negotiation. Non-economic damages (pain & suffering) are calculated using multipliers based on injury severity.
              </p>
            </div>

            <div className="text-center pt-4 space-y-4">
              <h3 className="text-xl font-semibold text-black">Maximize your settlement with expert representation</h3>
              <Button size="lg" className="h-14 px-8 text-base">
                Get Free Case Evaluation
              </Button>
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
