import { useCalculatorForm, CalculatorFormData, CalculatorResults } from '@/hooks/useCalculatorForm';
import { CalculatorLayout } from '@/components/calculator/CalculatorLayout';
import { CalculatorProgress } from '@/components/calculator/CalculatorProgress';
import { CalculatorSEO } from '@/components/calculator/CalculatorSEO';
import { FormNavigation } from '@/components/calculator/FormNavigation';
import { OptionButton } from '@/components/calculator/OptionButton';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface HearingLossFormData extends CalculatorFormData {
  hearingLossType: string;
  severity: string;
  cause: string;
  age: string;
  medicalCosts: string;
  hearingAids: string;
  lostWages: string;
  tinnitus: string;
  occupation: string;
}

const initialFormData: HearingLossFormData = {
  hearingLossType: '',
  severity: '',
  cause: '',
  age: '',
  medicalCosts: '',
  hearingAids: '',
  lostWages: '',
  tinnitus: '',
  occupation: ''
};

const hearingLossTypeOptions = [
  { value: 'bilateral', label: 'Bilateral (Both Ears)', description: 'Complete or severe loss in both ears' },
  { value: 'unilateral', label: 'Unilateral (One Ear)', description: 'Loss in one ear only' },
  { value: 'partial', label: 'Partial Loss', description: 'Reduced hearing ability' },
  { value: 'profound', label: 'Profound/Total Deafness', description: 'Complete hearing loss' }
];

const severityOptions = [
  { value: 'mild', label: 'Mild (26-40 dB)', description: 'Difficulty with soft sounds' },
  { value: 'moderate', label: 'Moderate (41-55 dB)', description: 'Difficulty with normal conversation' },
  { value: 'severe', label: 'Severe (71-90 dB)', description: 'Cannot hear most speech' },
  { value: 'profound', label: 'Profound (91+ dB)', description: 'Cannot hear any speech' }
];

const causeOptions = [
  { value: 'workplace', label: 'Workplace Noise', description: 'Industrial, construction noise' },
  { value: 'explosion', label: 'Explosion/Blast', description: 'Sudden loud noise trauma' },
  { value: 'vehicle', label: 'Vehicle Accident', description: 'Crash-related trauma' },
  { value: 'medical', label: 'Medical Malpractice', description: 'Surgical error, medication' },
  { value: 'defect', label: 'Product Defect', description: 'Defective equipment or protection' }
];

const ageOptions = [
  { value: 'young', label: 'Under 40', description: 'Longer lifetime impact' },
  { value: 'middle', label: '40-60', description: 'Prime working years' },
  { value: 'senior', label: '60+', description: 'Retirement age' }
];

const tinnitusOptions = [
  { value: 'none', label: 'No Tinnitus', description: 'No ringing or buzzing' },
  { value: 'mild', label: 'Mild Tinnitus', description: 'Occasional ringing' },
  { value: 'moderate', label: 'Moderate Tinnitus', description: 'Frequent disturbance' },
  { value: 'severe', label: 'Severe Tinnitus', description: 'Constant, debilitating' }
];

const occupationOptions = [
  { value: 'hearing-critical', label: 'Hearing-Critical Job', description: 'Musician, teacher, customer service' },
  { value: 'communication', label: 'Communication-Heavy', description: 'Management, sales, healthcare' },
  { value: 'skilled', label: 'Skilled Labor', description: 'Technical, trade work' },
  { value: 'physical', label: 'Physical Labor', description: 'Construction, manufacturing' }
];

function calculateCompensation(data: HearingLossFormData): CalculatorResults {
  let baseMin = 75000;
  let baseMax = 350000;

  // Hearing loss type multipliers
  const typeMultipliers: Record<string, number> = {
    'bilateral': 5,
    'unilateral': 2,
    'partial': 1.5,
    'profound': 7
  };

  // Severity multipliers
  const severityMultipliers: Record<string, number> = {
    'mild': 1,
    'moderate': 2,
    'severe': 4,
    'profound': 6
  };

  // Cause multipliers
  const causeMultipliers: Record<string, number> = {
    'workplace': 1.3,
    'explosion': 1.8,
    'vehicle': 1.4,
    'medical': 2.0,
    'defect': 1.6
  };

  // Age multipliers
  const ageMultipliers: Record<string, number> = {
    'young': 2.0,
    'middle': 1.5,
    'senior': 1.0
  };

  // Tinnitus multipliers
  const tinnitusMultipliers: Record<string, number> = {
    'none': 1.0,
    'mild': 1.2,
    'moderate': 1.5,
    'severe': 2.0
  };

  // Occupation multipliers
  const occupationMultipliers: Record<string, number> = {
    'hearing-critical': 2.5,
    'communication': 1.8,
    'skilled': 1.3,
    'physical': 1.1
  };

  const typeMultiplier = typeMultipliers[data.hearingLossType] || 1;
  const severityMultiplier = severityMultipliers[data.severity] || 1;
  const causeMultiplier = causeMultipliers[data.cause] || 1;
  const ageMultiplier = ageMultipliers[data.age] || 1;
  const tinnitusMultiplier = tinnitusMultipliers[data.tinnitus] || 1;
  const occupationMultiplier = occupationMultipliers[data.occupation] || 1;

  baseMin *= typeMultiplier * severityMultiplier * causeMultiplier * ageMultiplier;
  baseMax *= typeMultiplier * severityMultiplier * causeMultiplier * ageMultiplier;

  baseMin *= tinnitusMultiplier * occupationMultiplier;
  baseMax *= tinnitusMultiplier * occupationMultiplier;

  // Add economic damages
  const medicalCosts = parseFloat(data.medicalCosts) || 0;
  const hearingAids = parseFloat(data.hearingAids) || 0;
  const lostWages = parseFloat(data.lostWages) || 0;

  const totalEconomic = medicalCosts + hearingAids + lostWages;

  baseMin += totalEconomic * 0.8;
  baseMax += totalEconomic * 2.0;

  return {
    min: Math.round(baseMin),
    max: Math.round(baseMax),
    medicalExpenses: medicalCosts,
    hearingAids: hearingAids,
    lostIncome: lostWages,
    totalEconomic: totalEconomic
  };
}

function validateForm(data: HearingLossFormData, step: number): boolean {
  if (step === 1) {
    return !!(data.hearingLossType && data.severity && data.cause);
  }
  if (step === 2) {
    return !!(data.age && data.tinnitus && data.occupation);
  }
  return true;
}

export default function HearingLossCompensationCalculator() {
  const {
    step,
    formData,
    results,
    updateField,
    handleNext,
    handleBack,
    resetForm,
    isStepValid
  } = useCalculatorForm<HearingLossFormData>(
    initialFormData,
    calculateCompensation,
    validateForm
  );

  return (
    <>
      <CalculatorSEO
        title="Hearing Loss Compensation Calculator | Deafness Injury Settlement Estimate"
        description="Calculate potential compensation for hearing loss and deafness injuries. Free estimates including bilateral hearing loss, tinnitus, and hearing aid costs."
        canonical="/practice-areas/hearing-loss/calculator"
        injuryType="hearing loss"
      />

      <CalculatorLayout
        title="Hearing Loss Calculator"
        subtitle="Estimate compensation for hearing impairment and deafness"
        metaTitle="Hearing Loss Compensation Calculator"
        metaDescription="Free hearing loss settlement calculator. Instant deafness injury estimates."
        stats={[
          { value: '$500K+', label: 'Average Settlement' },
          { value: '15%', label: 'Adults with Hearing Loss' },
          { value: 'Permanent', label: 'Disability Status' }
        ]}
      >
        <CalculatorProgress currentStep={step} totalSteps={3} />

        {/* Step 1: Hearing Loss Details */}
        {step === 1 && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Hearing Loss Details</h2>
              <p className="text-muted-foreground">Tell us about the hearing impairment</p>
            </div>

            <div className="space-y-6">
              <div>
                <Label className="text-base font-medium mb-4 block">Type of Hearing Loss</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {hearingLossTypeOptions.map((option) => (
                    <OptionButton
                      key={option.value}
                      value={option.value}
                      label={option.label}
                      description={option.description}
                      isSelected={formData.hearingLossType === option.value}
                      onClick={() => updateField('hearingLossType', option.value)}
                    />
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-base font-medium mb-4 block">Severity Level (Decibels)</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {severityOptions.map((option) => (
                    <OptionButton
                      key={option.value}
                      value={option.value}
                      label={option.label}
                      description={option.description}
                      isSelected={formData.severity === option.value}
                      onClick={() => updateField('severity', option.value)}
                    />
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-base font-medium mb-4 block">Cause of Hearing Loss</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {causeOptions.map((option) => (
                    <OptionButton
                      key={option.value}
                      value={option.value}
                      label={option.label}
                      description={option.description}
                      isSelected={formData.cause === option.value}
                      onClick={() => updateField('cause', option.value)}
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

        {/* Step 2: Personal & Financial Details */}
        {step === 2 && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Personal & Financial Impact</h2>
              <p className="text-muted-foreground">Help us understand the full impact</p>
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
                <Label htmlFor="hearingAids" className="text-base font-medium">
                  Hearing Aids & Devices (Lifetime) ($)
                </Label>
                <Input
                  id="hearingAids"
                  type="number"
                  placeholder="45000"
                  value={formData.hearingAids}
                  onChange={(e) => updateField('hearingAids', e.target.value)}
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
                  placeholder="30000"
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
                <Label className="text-base font-medium mb-4 block">Tinnitus (Ringing) Severity</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {tinnitusOptions.map((option) => (
                    <OptionButton
                      key={option.value}
                      value={option.value}
                      label={option.label}
                      description={option.description}
                      isSelected={formData.tinnitus === option.value}
                      onClick={() => updateField('tinnitus', option.value)}
                    />
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-base font-medium mb-4 block">Occupation Type</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {occupationOptions.map((option) => (
                    <OptionButton
                      key={option.value}
                      value={option.value}
                      label={option.label}
                      description={option.description}
                      isSelected={formData.occupation === option.value}
                      onClick={() => updateField('occupation', option.value)}
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
              <h2 className="text-3xl font-bold mb-2">Your Estimated Compensation Range</h2>
              <p className="text-muted-foreground">Based on hearing loss injury cases</p>
            </div>

            <div className="bg-primary/5 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold mb-2">
                ${results.min.toLocaleString()} - ${results.max.toLocaleString()}
              </div>
              <p className="text-muted-foreground">Potential Settlement Range</p>
            </div>

            <div className="space-y-4">
              <div className="bg-card border rounded-xl p-6">
                <h4 className="font-semibold mb-2">Economic Damages Breakdown</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Medical Expenses: ${results.medicalExpenses?.toLocaleString()}</p>
                  <p>Hearing Aids & Devices: ${results.hearingAids?.toLocaleString()}</p>
                  <p>Lost Income: ${results.lostIncome?.toLocaleString()}</p>
                  <p className="font-semibold pt-2 border-t">
                    Total Economic: ${results.totalEconomic?.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="bg-card border rounded-xl p-6">
                <h4 className="font-semibold mb-2">Communication & Quality of Life</h4>
                <p className="text-sm text-muted-foreground">
                  Hearing loss affects communication, social interaction, employment, safety, and overall quality of life. Permanent hearing damage requires lifelong accommodation.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-xl p-6">
              <p className="text-sm text-amber-900 dark:text-amber-200">
                <strong>Disclaimer:</strong> This calculator provides estimates only. Actual compensation depends on medical documentation, liability proof, occupational impact, and jurisdiction. Hearing loss cases require audiological testing and expert testimony. Consult with a qualified attorney for case evaluation.
              </p>
            </div>

            <div className="text-center pt-4 space-y-4">
              <h3 className="text-xl font-semibold">Get maximum compensation for your hearing loss</h3>
              <Button size="lg" className="h-14 px-8 text-base">
                Get Free Case Review
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
