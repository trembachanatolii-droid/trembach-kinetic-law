import React from 'react';
import { Link } from 'react-router-dom';
import { useCalculatorForm, CalculatorFormData, CalculatorResults } from '@/hooks/useCalculatorForm';
import {
  CalculatorLayout,
  CalculatorProgress,
  FormNavigation,
  CalculatorSEO
} from '@/components/calculator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface MotorcycleFormData extends CalculatorFormData {
  injuryType: string;
  injurySeverity: string;
  crashType: string;
  medicalCosts: string;
  futureMedical: string;
  lostWages: string;
  bikeValue: string;
  helmetWorn: string;
  speedEstimate: string;
  roadConditions: string;
  faultPercentage: string;
  permanentImpact: string;
}

const initialFormData: MotorcycleFormData = {
  injuryType: '',
  injurySeverity: '',
  crashType: '',
  medicalCosts: '',
  futureMedical: '',
  lostWages: '',
  bikeValue: '',
  helmetWorn: '',
  speedEstimate: '',
  roadConditions: '',
  faultPercentage: '',
  permanentImpact: ''
};

const injuryTypeOptions = [
  { value: 'road-rash', label: 'Road Rash/Abrasions', description: 'Skin injuries from sliding' },
  { value: 'fractures', label: 'Broken Bones/Fractures', description: 'Bone injuries' },
  { value: 'head-injury', label: 'Head/Brain Injury', description: 'TBI or concussion' },
  { value: 'spinal-injury', label: 'Spinal Cord Injury', description: 'Back/paralysis' },
  { value: 'internal-injuries', label: 'Internal Injuries', description: 'Organ damage' },
  { value: 'amputation', label: 'Amputation', description: 'Loss of limb' },
  { value: 'multiple', label: 'Multiple Serious Injuries', description: 'Several injury types' },
  { value: 'death', label: 'Wrongful Death', description: 'Fatal motorcycle crash' }
];

const injurySeverityOptions = [
  { value: 'minor', label: 'Minor', description: 'Quick recovery expected' },
  { value: 'moderate', label: 'Moderate', description: 'Weeks to months recovery' },
  { value: 'severe', label: 'Severe', description: 'Major medical intervention' },
  { value: 'catastrophic', label: 'Catastrophic', description: 'Life-changing injuries' }
];

const crashTypeOptions = [
  { value: 'left-turn', label: 'Left-Turn Collision', description: 'Car turned into path' },
  { value: 'rear-end', label: 'Rear-Ended', description: 'Hit from behind' },
  { value: 'head-on', label: 'Head-On Collision', description: 'Frontal impact' },
  { value: 'sideswipe', label: 'Sideswipe', description: 'Clipped by vehicle' },
  { value: 'lane-splitting', label: 'Lane Splitting Accident', description: 'Crash while filtering' },
  { value: 'single-vehicle', label: 'Single Vehicle Crash', description: 'No other vehicle involved' },
  { value: 'dooring', label: 'Dooring', description: 'Hit by opened car door' }
];

const helmetOptions = [
  { value: 'full-face', label: 'Full-Face Helmet', description: 'Maximum protection' },
  { value: 'modular', label: 'Modular/3/4 Helmet', description: 'Good protection' },
  { value: 'half-helmet', label: 'Half Helmet', description: 'Minimal protection' },
  { value: 'none', label: 'No Helmet', description: 'May impact compensation' }
];

const speedOptions = [
  { value: 'under-25', label: 'Under 25 mph', description: 'Low speed' },
  { value: '25-45', label: '25-45 mph', description: 'Moderate speed' },
  { value: '45-65', label: '45-65 mph', description: 'Highway speed' },
  { value: 'over-65', label: 'Over 65 mph', description: 'High speed' }
];

const roadConditionsOptions = [
  { value: 'good', label: 'Good Conditions', description: 'Dry, clear, well-maintained' },
  { value: 'poor-weather', label: 'Poor Weather', description: 'Rain, fog, or snow' },
  { value: 'poor-road', label: 'Poor Road Conditions', description: 'Potholes, debris, gravel' },
  { value: 'poor-visibility', label: 'Poor Visibility', description: 'Night, no lighting' }
];

const faultOptions = [
  { value: '100-other', label: '100% Other Driver', description: 'Clear liability' },
  { value: '75-99-other', label: '75-99% Other Driver', description: 'Mostly at fault' },
  { value: '50-74-other', label: '50-74% Other Driver', description: 'Shared fault' },
  { value: 'rider-mostly', label: 'Rider Mostly at Fault', description: 'May limit recovery' }
];

const permanentImpactOptions = [
  { value: 'none', label: 'No Permanent Impact', description: 'Full recovery' },
  { value: 'scarring', label: 'Permanent Scarring', description: 'Visible scars' },
  { value: 'minor-disability', label: 'Minor Disability', description: 'Slight limitations' },
  { value: 'significant-disability', label: 'Significant Disability', description: 'Major life changes' },
  { value: 'total-disability', label: 'Total Disability', description: 'Unable to work' },
  { value: 'paralysis', label: 'Paralysis', description: 'Wheelchair bound' }
];

function calculateCompensation(data: MotorcycleFormData): CalculatorResults {
  // Base amounts (motorcycles typically have higher settlements due to severity)
  let baseMin = 25000;
  let baseMax = 125000;

  // Injury type multipliers (motorcycle injuries are typically severe)
  const injuryMultipliers: Record<string, number> = {
    'road-rash': 1.5,
    'fractures': 2.5,
    'head-injury': 4.5,
    'spinal-injury': 6.0,
    'internal-injuries': 3.8,
    'amputation': 7.0,
    'multiple': 4.0,
    'death': 8.0
  };

  const injuryMult = injuryMultipliers[data.injuryType] || 1;
  baseMin *= injuryMult;
  baseMax *= injuryMult;

  // Severity multipliers
  const severityMultipliers: Record<string, number> = {
    'minor': 1,
    'moderate': 2.2,
    'severe': 4.0,
    'catastrophic': 6.5
  };

  const severityMult = severityMultipliers[data.injurySeverity] || 1;
  baseMin *= severityMult;
  baseMax *= severityMult;

  // Crash type impact
  const crashMultipliers: Record<string, number> = {
    'left-turn': 1.6, // Most common, usually clear fault
    'rear-end': 1.4,
    'head-on': 2.0,
    'sideswipe': 1.3,
    'lane-splitting': 0.9, // May be disputed
    'single-vehicle': 0.8, // Harder to prove liability
    'dooring': 1.5
  };

  const crashMult = crashMultipliers[data.crashType] || 1;
  baseMin *= crashMult;
  baseMax *= crashMult;

  // Add economic damages
  const medicalCosts = parseInt(data.medicalCosts) || 0;
  const futureMedical = parseInt(data.futureMedical) || 0;
  const lostWages = parseInt(data.lostWages) || 0;
  const bikeValue = parseInt(data.bikeValue) || 0;

  baseMin += medicalCosts * 3 + futureMedical * 1.5 + lostWages * 2 + bikeValue;
  baseMax += medicalCosts * 6 + futureMedical * 2.5 + lostWages * 4 + bikeValue * 1.2;

  // Helmet usage (lack of helmet may reduce non-economic damages in some states)
  const helmetMultipliers: Record<string, number> = {
    'full-face': 1.0,
    'modular': 0.95,
    'half-helmet': 0.85,
    'none': 0.7 // May reduce damages due to contributory negligence
  };

  const helmetMult = helmetMultipliers[data.helmetWorn] || 1;
  baseMin *= helmetMult;
  baseMax *= helmetMult;

  // Speed at time of crash
  const speedMultipliers: Record<string, number> = {
    'under-25': 1.0,
    '25-45': 1.2,
    '45-65': 1.4,
    'over-65': 1.6
  };

  const speedMult = speedMultipliers[data.speedEstimate] || 1;
  baseMin *= speedMult;
  baseMax *= speedMult;

  // Road conditions (poor conditions may support negligence claim)
  const conditionMultipliers: Record<string, number> = {
    'good': 1.0,
    'poor-weather': 1.2,
    'poor-road': 1.4,
    'poor-visibility': 1.3
  };

  const conditionMult = conditionMultipliers[data.roadConditions] || 1;
  baseMin *= conditionMult;
  baseMax *= conditionMult;

  // Fault percentage (California comparative negligence)
  const faultReductions: Record<string, number> = {
    '100-other': 1.0,
    '75-99-other': 0.85,
    '50-74-other': 0.6,
    'rider-mostly': 0.35
  };

  const faultReduction = faultReductions[data.faultPercentage] || 1;
  baseMin *= faultReduction;
  baseMax *= faultReduction;

  // Permanent impact
  const permanentMultipliers: Record<string, number> = {
    'none': 1,
    'scarring': 1.4,
    'minor-disability': 1.8,
    'significant-disability': 2.8,
    'total-disability': 4.0,
    'paralysis': 5.0
  };

  const permanentMult = permanentMultipliers[data.permanentImpact] || 1;
  baseMin *= permanentMult;
  baseMax *= permanentMult;

  return {
    min: Math.round(baseMin),
    max: Math.round(baseMax),
    medicalExpenses: medicalCosts,
    futureCare: futureMedical,
    lostIncome: lostWages,
    propertyDamage: bikeValue,
    totalEconomic: medicalCosts + futureMedical + lostWages + bikeValue
  };
}

function validateForm(data: MotorcycleFormData, step: number): boolean {
  if (step === 1) {
    return Boolean(
      data.injuryType &&
      data.injurySeverity &&
      data.crashType &&
      data.helmetWorn
    );
  }
  if (step === 2) {
    return Boolean(
      data.medicalCosts &&
      data.lostWages &&
      data.bikeValue &&
      data.speedEstimate &&
      data.roadConditions &&
      data.faultPercentage &&
      data.permanentImpact
    );
  }
  return false;
}

export default function MotorcycleCompensationCalculator() {
  const {
    step,
    formData,
    results,
    updateField,
    handleNext,
    handleBack,
    resetForm,
    isStepValid
  } = useCalculatorForm<MotorcycleFormData>(
    initialFormData,
    calculateCompensation,
    validateForm
  );

  return (
    <>
      <CalculatorSEO
        title="Motorcycle Accident Compensation Calculator | Free Crash Settlement Estimate"
        description="Calculate potential compensation for motorcycle accident injuries including road rash, fractures, and TBI. Free estimates with helmet usage and fault percentage analysis."
        canonical="/motorcycle-calculator"
        injuryType="motorcycle accident"
      />

      <CalculatorLayout
        title="Motorcycle Accident Calculator"
        subtitle="Estimate compensation for motorcycle crash injuries"
        metaTitle="Motorcycle Accident Compensation Calculator"
        metaDescription="Free motorcycle crash settlement calculator. Instant estimates."
        stats={[
          { value: '$75K+', label: 'Average Settlement' },
          { value: '5,000', label: 'Fatal Crashes/Year' },
          { value: '29x', label: 'More Dangerous Than Cars' }
        ]}
      >
        <CalculatorProgress currentStep={step} totalSteps={3} />

        {/* Step 1: Injury & Crash Details */}
        {step === 1 && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Injury & Crash Details</h2>
              <p className="text-muted-foreground">Tell us about the motorcycle accident</p>
            </div>

            <div className="space-y-6">
              <div>
                <Label className="text-base font-medium mb-4 block">Type of Injury</Label>
                <Select value={formData.injuryType} onValueChange={(value) => updateField('injuryType', value)}>
                  <SelectTrigger className="h-14 text-lg">
                    <SelectValue placeholder="Select injury type" />
                  </SelectTrigger>
                  <SelectContent>
                    {injuryTypeOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label} - {option.description}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-base font-medium mb-4 block">Injury Severity</Label>
                <Select value={formData.injurySeverity} onValueChange={(value) => updateField('injurySeverity', value)}>
                  <SelectTrigger className="h-14 text-lg">
                    <SelectValue placeholder="Select severity" />
                  </SelectTrigger>
                  <SelectContent>
                    {injurySeverityOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label} - {option.description}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-base font-medium mb-4 block">Type of Crash</Label>
                <Select value={formData.crashType} onValueChange={(value) => updateField('crashType', value)}>
                  <SelectTrigger className="h-14 text-lg">
                    <SelectValue placeholder="Select crash type" />
                  </SelectTrigger>
                  <SelectContent>
                    {crashTypeOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label} - {option.description}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-base font-medium mb-4 block">Helmet Worn at Time of Crash</Label>
                <Select value={formData.helmetWorn} onValueChange={(value) => updateField('helmetWorn', value)}>
                  <SelectTrigger className="h-14 text-lg">
                    <SelectValue placeholder="Select helmet type" />
                  </SelectTrigger>
                  <SelectContent>
                    {helmetOptions.map((option) => (
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

        {/* Step 2: Financial & Case Details */}
        {step === 2 && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Financial Impact & Case Details</h2>
              <p className="text-muted-foreground">Damages and accident circumstances</p>
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
                <Label htmlFor="futureMedical" className="text-base font-medium">
                  Future Medical Costs ($)
                </Label>
                <Input
                  id="futureMedical"
                  type="number"
                  placeholder="50000"
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
                  placeholder="15000"
                  value={formData.lostWages}
                  onChange={(e) => updateField('lostWages', e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="bikeValue" className="text-base font-medium">
                  Motorcycle Value/Damage ($)
                </Label>
                <Input
                  id="bikeValue"
                  type="number"
                  placeholder="12000"
                  value={formData.bikeValue}
                  onChange={(e) => updateField('bikeValue', e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label className="text-base font-medium mb-4 block">Estimated Speed at Impact</Label>
                <Select value={formData.speedEstimate} onValueChange={(value) => updateField('speedEstimate', value)}>
                  <SelectTrigger className="h-14 text-lg">
                    <SelectValue placeholder="Select speed range" />
                  </SelectTrigger>
                  <SelectContent>
                    {speedOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label} - {option.description}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-base font-medium mb-4 block">Road Conditions</Label>
                <Select value={formData.roadConditions} onValueChange={(value) => updateField('roadConditions', value)}>
                  <SelectTrigger className="h-14 text-lg">
                    <SelectValue placeholder="Select road conditions" />
                  </SelectTrigger>
                  <SelectContent>
                    {roadConditionsOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label} - {option.description}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-base font-medium mb-4 block">Fault Percentage</Label>
                <Select value={formData.faultPercentage} onValueChange={(value) => updateField('faultPercentage', value)}>
                  <SelectTrigger className="h-14 text-lg">
                    <SelectValue placeholder="Select fault percentage" />
                  </SelectTrigger>
                  <SelectContent>
                    {faultOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label} - {option.description}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-base font-medium mb-4 block">Permanent Impact</Label>
                <Select value={formData.permanentImpact} onValueChange={(value) => updateField('permanentImpact', value)}>
                  <SelectTrigger className="h-14 text-lg">
                    <SelectValue placeholder="Select permanent impact" />
                  </SelectTrigger>
                  <SelectContent>
                    {permanentImpactOptions.map((option) => (
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
              nextButtonText="Calculate Settlement"
            />
          </div>
        )}

        {/* Step 3: Results */}
        {step === 3 && results && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-black mb-2">Your Estimated Settlement Range</h2>
              <p className="text-slate-600">Based on motorcycle crash details</p>
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
                  <p>Motorcycle Damage: ${results.propertyDamage?.toLocaleString()}</p>
                  <p className="font-semibold pt-2 border-t border-slate-200">
                    Total Economic: ${results.totalEconomic?.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h4 className="font-semibold text-black mb-2">Motorcycle Accident Severity</h4>
                <p className="text-sm text-slate-600">
                  Motorcyclists are 29x more likely to die in a crash than car occupants. Injuries are typically severe due to lack of protection, resulting in higher settlement values.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h4 className="font-semibold text-black mb-2">Helmet Laws & Compensation</h4>
                <p className="text-sm text-slate-600">
                  California requires all riders to wear helmets. Not wearing a helmet may reduce non-economic damages but won't eliminate your claim. Helmet type affects head injury severity.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <p className="text-sm text-amber-900">
                <strong>Important:</strong> Motorcycle accidents often result in catastrophic injuries. Left-turn collisions are the most common type. Comparative negligence applies - your recovery is reduced by your fault percentage. This estimate assumes provable liability and documented injuries.
              </p>
            </div>

            <div className="calculator-cta-section">
              <h3 className="text-2xl font-bold mb-4">Get maximum compensation for your crash</h3>
              <p className="mb-6 max-w-2xl mx-auto">
                Motorcycle accidents often result in catastrophic injuries. Our attorneys understand the unique challenges 
                riders face and will fight for full compensation. No fee unless we win.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/free-consultation">
                  <Button size="lg" className="text-lg px-8">
                    Get My Free Case Evaluation
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={resetForm}
                  className="text-lg px-8 outline"
                >
                  Calculate Another Case
                </Button>
              </div>
            </div>
          </div>
        )}
      </CalculatorLayout>
    </>
  );
}
