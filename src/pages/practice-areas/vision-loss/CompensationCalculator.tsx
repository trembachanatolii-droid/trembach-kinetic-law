import { useCalculatorForm, CalculatorFormData, CalculatorResults } from '@/hooks/useCalculatorForm';
import { CalculatorLayout } from '@/components/calculator/CalculatorLayout';
import { CalculatorProgress } from '@/components/calculator/CalculatorProgress';
import { CalculatorSEO } from '@/components/calculator/CalculatorSEO';
import { FormNavigation } from '@/components/calculator/FormNavigation';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface VisionLossFormData extends CalculatorFormData {
  visionLossType: string;
  severity: string;
  cause: string;
  age: string;
  medicalCosts: string;
  futureCare: string;
  lostWages: string;
  occupation: string;
  adaptiveNeeds: string;
}

const initialFormData: VisionLossFormData = {
  visionLossType: '',
  severity: '',
  cause: '',
  age: '',
  medicalCosts: '',
  futureCare: '',
  lostWages: '',
  occupation: '',
  adaptiveNeeds: ''
};

const visionLossTypeOptions = [
  { value: 'complete', label: 'Complete Blindness', description: 'Total loss of vision in both eyes' },
  { value: 'monocular', label: 'Monocular Vision Loss', description: 'Loss of vision in one eye' },
  { value: 'partial', label: 'Partial Vision Loss', description: 'Severe impairment but some vision remains' },
  { value: 'peripheral', label: 'Peripheral Vision Loss', description: 'Tunnel vision or loss of side vision' }
];

const severityOptions = [
  { value: 'mild', label: 'Mild Impairment', description: '20/70 to 20/160 vision' },
  { value: 'moderate', label: 'Moderate Impairment', description: '20/200 to 20/400 vision' },
  { value: 'severe', label: 'Severe Impairment', description: '20/500 to 20/1000 vision' },
  { value: 'profound', label: 'Profound/Total Loss', description: 'Light perception or no vision' }
];

const causeOptions = [
  { value: 'workplace', label: 'Workplace Accident', description: 'Chemical splash, flying debris' },
  { value: 'medical', label: 'Medical Malpractice', description: 'Surgical error, misdiagnosis' },
  { value: 'vehicle', label: 'Vehicle Accident', description: 'Car, motorcycle, or truck crash' },
  { value: 'assault', label: 'Assault/Violence', description: 'Intentional or criminal act' },
  { value: 'defect', label: 'Product Defect', description: 'Defective product or tool' }
];

const ageOptions = [
  { value: 'child', label: 'Under 18', description: 'Child or minor' },
  { value: 'young', label: '18-40', description: 'Young adult, longer impact' },
  { value: 'middle', label: '41-60', description: 'Middle age, career impact' },
  { value: 'senior', label: '61+', description: 'Retirement age' }
];

const occupationOptions = [
  { value: 'visual-critical', label: 'Vision-Critical Job', description: 'Driver, surgeon, pilot' },
  { value: 'skilled', label: 'Skilled Labor', description: 'Electrician, machinist' },
  { value: 'professional', label: 'Professional', description: 'Office, management' },
  { value: 'physical', label: 'Physical Labor', description: 'Construction, warehouse' }
];

const adaptiveNeedsOptions = [
  { value: 'minimal', label: 'Minimal Needs', description: 'Some assistance required' },
  { value: 'moderate', label: 'Moderate Needs', description: 'Significant adaptive equipment' },
  { value: 'extensive', label: 'Extensive Needs', description: 'Full-time assistance required' },
  { value: 'lifelong', label: 'Lifelong Care', description: 'Permanent care and support' }
];

function calculateCompensation(data: VisionLossFormData): CalculatorResults {
  let baseMin = 100000;
  let baseMax = 500000;

  // Vision loss type multipliers
  const typeMultipliers: Record<string, number> = {
    'complete': 8,
    'monocular': 3,
    'partial': 2,
    'peripheral': 1.5
  };

  // Severity multipliers
  const severityMultipliers: Record<string, number> = {
    'mild': 1,
    'moderate': 1.8,
    'severe': 3,
    'profound': 5
  };

  // Cause multipliers (liability strength)
  const causeMultipliers: Record<string, number> = {
    'workplace': 1.4,
    'medical': 1.8,
    'vehicle': 1.3,
    'assault': 2.0,
    'defect': 1.6
  };

  // Age multipliers (lifetime impact)
  const ageMultipliers: Record<string, number> = {
    'child': 2.5,
    'young': 2.0,
    'middle': 1.5,
    'senior': 1.0
  };

  // Occupation impact
  const occupationMultipliers: Record<string, number> = {
    'visual-critical': 2.5,
    'skilled': 1.8,
    'professional': 1.4,
    'physical': 1.2
  };

  // Adaptive needs multipliers
  const adaptiveMultipliers: Record<string, number> = {
    'minimal': 1.2,
    'moderate': 1.6,
    'extensive': 2.2,
    'lifelong': 3.0
  };

  const typeMultiplier = typeMultipliers[data.visionLossType] || 1;
  const severityMultiplier = severityMultipliers[data.severity] || 1;
  const causeMultiplier = causeMultipliers[data.cause] || 1;
  const ageMultiplier = ageMultipliers[data.age] || 1;
  const occupationMultiplier = occupationMultipliers[data.occupation] || 1;
  const adaptiveMultiplier = adaptiveMultipliers[data.adaptiveNeeds] || 1;

  baseMin *= typeMultiplier * severityMultiplier * causeMultiplier * ageMultiplier;
  baseMax *= typeMultiplier * severityMultiplier * causeMultiplier * ageMultiplier;

  baseMin *= occupationMultiplier * adaptiveMultiplier;
  baseMax *= occupationMultiplier * adaptiveMultiplier;

  // Add economic damages
  const medicalCosts = parseFloat(data.medicalCosts) || 0;
  const futureCare = parseFloat(data.futureCare) || 0;
  const lostWages = parseFloat(data.lostWages) || 0;

  const totalEconomic = medicalCosts + futureCare + lostWages;

  baseMin += totalEconomic * 0.9;
  baseMax += totalEconomic * 2.5;

  // Vision loss is catastrophic - minimum floor
  baseMin = Math.max(baseMin, 250000);
  baseMax = Math.max(baseMax, 750000);

  return {
    min: Math.round(baseMin),
    max: Math.round(baseMax),
    medicalExpenses: medicalCosts,
    futureCare: futureCare,
    lostIncome: lostWages,
    totalEconomic: totalEconomic
  };
}

function validateForm(data: VisionLossFormData, step: number): boolean {
  if (step === 1) {
    return !!(data.visionLossType && data.severity && data.cause);
  }
  if (step === 2) {
    return !!(data.age && data.occupation && data.adaptiveNeeds);
  }
  return true;
}

export default function VisionLossCompensationCalculator() {
  const {
    step,
    formData,
    results,
    updateField,
    handleNext,
    handleBack,
    resetForm,
    isStepValid
  } = useCalculatorForm<VisionLossFormData>(
    initialFormData,
    calculateCompensation,
    validateForm
  );

  return (
    <>
      <CalculatorSEO
        title="Vision Loss Compensation Calculator | Blindness Injury Settlement Estimate"
        description="Calculate potential compensation for vision loss and blindness injuries. Free estimates including complete blindness, partial vision loss, and adaptive living costs."
        canonical="/practice-areas/vision-loss/calculator"
        injuryType="vision loss"
      />

      <CalculatorLayout
        title="Vision Loss Calculator"
        subtitle="Estimate compensation for vision impairment and blindness"
        metaTitle="Vision Loss Compensation Calculator"
        metaDescription="Free vision loss settlement calculator. Instant blindness injury estimates."
        stats={[
          { value: '$750K+', label: 'Average Settlement' },
          { value: '2.2M', label: 'Blind Americans' },
          { value: 'Lifelong', label: 'Impact Duration' }
        ]}
      >
        <CalculatorProgress currentStep={step} totalSteps={3} />

        {/* Step 1: Vision Loss Details */}
        {step === 1 && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Vision Loss Details</h2>
              <p className="text-muted-foreground">Tell us about the vision impairment</p>
            </div>

            <div className="space-y-6">
              <div>
                <Label className="text-base font-medium mb-4 block">Type of Vision Loss</Label>
                <Select value={formData.visionLossType} onValueChange={(value) => updateField('visionLossType', value)}>
                  <SelectTrigger className="h-14 text-lg">
                    <SelectValue placeholder="Select vision loss type" />
                  </SelectTrigger>
                  <SelectContent>
                    {visionLossTypeOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label} - {option.description}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-base font-medium mb-4 block">Severity Level</Label>
                <Select value={formData.severity} onValueChange={(value) => updateField('severity', value)}>
                  <SelectTrigger className="h-14 text-lg">
                    <SelectValue placeholder="Select severity level" />
                  </SelectTrigger>
                  <SelectContent>
                    {severityOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label} - {option.description}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-base font-medium mb-4 block">Cause of Vision Loss</Label>
                <Select value={formData.cause} onValueChange={(value) => updateField('cause', value)}>
                  <SelectTrigger className="h-14 text-lg">
                    <SelectValue placeholder="Select cause" />
                  </SelectTrigger>
                  <SelectContent>
                    {causeOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label} - {option.description}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
                  placeholder="25000"
                  value={formData.medicalCosts}
                  onChange={(e) => updateField('medicalCosts', e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="futureCare" className="text-base font-medium">
                  Future Care & Adaptive Technology ($)
                </Label>
                <Input
                  id="futureCare"
                  type="number"
                  placeholder="150000"
                  value={formData.futureCare}
                  onChange={(e) => updateField('futureCare', e.target.value)}
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
                  placeholder="50000"
                  value={formData.lostWages}
                  onChange={(e) => updateField('lostWages', e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label className="text-base font-medium mb-4 block">Your Age</Label>
                <Select value={formData.age} onValueChange={(value) => updateField('age', value)}>
                  <SelectTrigger className="h-14 text-lg">
                    <SelectValue placeholder="Select age range" />
                  </SelectTrigger>
                  <SelectContent>
                    {ageOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label} - {option.description}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-base font-medium mb-4 block">Occupation Type</Label>
                <Select value={formData.occupation} onValueChange={(value) => updateField('occupation', value)}>
                  <SelectTrigger className="h-14 text-lg">
                    <SelectValue placeholder="Select occupation type" />
                  </SelectTrigger>
                  <SelectContent>
                    {occupationOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label} - {option.description}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-base font-medium mb-4 block">Adaptive Needs</Label>
                <Select value={formData.adaptiveNeeds} onValueChange={(value) => updateField('adaptiveNeeds', value)}>
                  <SelectTrigger className="h-14 text-lg">
                    <SelectValue placeholder="Select adaptive needs level" />
                  </SelectTrigger>
                  <SelectContent>
                    {adaptiveNeedsOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label} - {option.description}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
              <p className="text-muted-foreground">Based on vision loss injury cases</p>
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
                  <p>Future Care & Technology: ${results.futureCare?.toLocaleString()}</p>
                  <p>Lost Income: ${results.lostIncome?.toLocaleString()}</p>
                  <p className="font-semibold pt-2 border-t">
                    Total Economic: ${results.totalEconomic?.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="bg-card border rounded-xl p-6">
                <h4 className="font-semibold mb-2">Lifetime Impact Factors</h4>
                <p className="text-sm text-muted-foreground">
                  Vision loss dramatically impacts quality of life, independence, earning capacity, and requires extensive adaptive technology and support services for life.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-xl p-6">
              <p className="text-sm text-amber-900 dark:text-amber-200">
                <strong>Disclaimer:</strong> This calculator provides estimates only. Actual compensation depends on medical evidence, liability proof, future care needs, lost earning capacity, and jurisdiction. Vision loss cases often result in significant settlements due to lifelong impact. Consult with a qualified attorney for case evaluation.
              </p>
            </div>

            <div className="text-center pt-4 space-y-4">
              <h3 className="text-xl font-semibold">Get maximum compensation for your vision loss</h3>
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
