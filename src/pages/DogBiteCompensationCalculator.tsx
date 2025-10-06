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

interface DogBiteFormData extends CalculatorFormData {
  injurySeverity: string;
  attackLocation: string;
  medicalCosts: string;
  futureMedical: string;
  scarringLevel: string;
  scarringLocation: string;
  infection: string;
  age: string;
  emotionalImpact: string;
  priorHistory: string;
  lostWages: string;
}

const initialFormData: DogBiteFormData = {
  injurySeverity: '',
  attackLocation: '',
  medicalCosts: '',
  futureMedical: '',
  scarringLevel: '',
  scarringLocation: '',
  infection: '',
  age: '',
  emotionalImpact: '',
  priorHistory: '',
  lostWages: ''
};

const injurySeverityOptions = [
  { value: 'puncture', label: 'Puncture Wounds', description: 'Deep bite marks' },
  { value: 'lacerations', label: 'Lacerations', description: 'Torn skin requiring stitches' },
  { value: 'severe-trauma', label: 'Severe Trauma', description: 'Bone/muscle/nerve damage' },
  { value: 'disfigurement', label: 'Disfigurement', description: 'Permanent facial/body damage' },
  { value: 'amputation', label: 'Amputation', description: 'Loss of finger/limb' },
  { value: 'death', label: 'Fatal Attack', description: 'Wrongful death case' }
];

const attackLocationOptions = [
  { value: 'face-head', label: 'Face/Head', description: 'Most serious location' },
  { value: 'neck-throat', label: 'Neck/Throat', description: 'Life-threatening area' },
  { value: 'hands-arms', label: 'Hands/Arms', description: 'Common attack site' },
  { value: 'legs-feet', label: 'Legs/Feet', description: 'Lower extremities' },
  { value: 'torso', label: 'Torso/Back', description: 'Body area' },
  { value: 'multiple', label: 'Multiple Areas', description: 'Several body parts' }
];

const scarringLevelOptions = [
  { value: 'none', label: 'No Visible Scarring', description: 'Full healing expected' },
  { value: 'minor', label: 'Minor Scarring', description: 'Small scars, concealed' },
  { value: 'moderate', label: 'Moderate Scarring', description: 'Noticeable scars' },
  { value: 'severe', label: 'Severe Scarring', description: 'Extensive disfigurement' }
];

const scarringLocationOptions = [
  { value: 'concealed', label: 'Concealed Areas', description: 'Usually covered by clothing' },
  { value: 'visible', label: 'Visible Areas', description: 'Exposed in daily life' },
  { value: 'facial', label: 'Facial Scarring', description: 'Face/neck area' }
];

const infectionOptions = [
  { value: 'none', label: 'No Infection', description: 'Clean wound healing' },
  { value: 'treated', label: 'Treated Infection', description: 'Required antibiotics' },
  { value: 'serious', label: 'Serious Infection', description: 'Hospitalization needed' },
  { value: 'sepsis', label: 'Sepsis/Life-Threatening', description: 'Critical infection' }
];

const ageOptions = [
  { value: 'child-under-12', label: 'Child (Under 12)', description: 'Enhanced emotional damages' },
  { value: 'teen-12-17', label: 'Teen (12-17)', description: 'Developmental impact' },
  { value: 'adult-18-60', label: 'Adult (18-60)', description: 'Working age' },
  { value: 'senior-60-plus', label: 'Senior (60+)', description: 'Longer healing time' }
];

const emotionalImpactOptions = [
  { value: 'minimal', label: 'Minimal Impact', description: 'No lasting trauma' },
  { value: 'moderate', label: 'Moderate Fear', description: 'Anxiety around dogs' },
  { value: 'severe', label: 'Severe PTSD', description: 'Therapy required' },
  { value: 'life-altering', label: 'Life-Altering Trauma', description: 'Ongoing psychological care' }
];

const priorHistoryOptions = [
  { value: 'no-history', label: 'No Prior History', description: 'First incident' },
  { value: 'aggressive-behavior', label: 'Known Aggressive', description: 'Dog had prior incidents' },
  { value: 'prior-bites', label: 'Prior Bites', description: 'Dog bit others before' },
  { value: 'dangerous-breed', label: 'Dangerous Breed List', description: 'Restricted breed' }
];

function calculateCompensation(data: DogBiteFormData): CalculatorResults {
  // Base amounts for dog bites
  let baseMin = 15000;
  let baseMax = 75000;

  // Injury severity multipliers
  const severityMultipliers: Record<string, number> = {
    'puncture': 1.5,
    'lacerations': 2.0,
    'severe-trauma': 3.5,
    'disfigurement': 4.5,
    'amputation': 6.0,
    'death': 8.0
  };

  const severityMult = severityMultipliers[data.injurySeverity] || 1;
  baseMin *= severityMult;
  baseMax *= severityMult;

  // Attack location impact
  const locationMultipliers: Record<string, number> = {
    'face-head': 3.0,
    'neck-throat': 2.8,
    'hands-arms': 1.5,
    'legs-feet': 1.3,
    'torso': 1.4,
    'multiple': 2.2
  };

  const locationMult = locationMultipliers[data.attackLocation] || 1;
  baseMin *= locationMult;
  baseMax *= locationMult;

  // Add economic damages
  const medicalCosts = parseInt(data.medicalCosts) || 0;
  const futureMedical = parseInt(data.futureMedical) || 0;
  const lostWages = parseInt(data.lostWages) || 0;

  baseMin += medicalCosts * 2.5 + futureMedical + lostWages;
  baseMax += medicalCosts * 5 + futureMedical * 2 + lostWages * 2;

  // Scarring level adjustments
  const scarringMultipliers: Record<string, number> = {
    'none': 1,
    'minor': 1.3,
    'moderate': 1.8,
    'severe': 2.5
  };

  const scarringMult = scarringMultipliers[data.scarringLevel] || 1;
  baseMin *= scarringMult;
  baseMax *= scarringMult;

  // Scarring location impact (facial scars significantly increase damages)
  const scarLocationMultipliers: Record<string, number> = {
    'concealed': 1.0,
    'visible': 1.4,
    'facial': 2.0
  };

  const scarLocationMult = scarLocationMultipliers[data.scarringLocation] || 1;
  baseMin *= scarLocationMult;
  baseMax *= scarLocationMult;

  // Infection complications
  const infectionMultipliers: Record<string, number> = {
    'none': 1,
    'treated': 1.2,
    'serious': 1.5,
    'sepsis': 2.0
  };

  const infectionMult = infectionMultipliers[data.infection] || 1;
  baseMin *= infectionMult;
  baseMax *= infectionMult;

  // Age-based adjustments
  const ageMultipliers: Record<string, number> = {
    'child-under-12': 1.8, // Children receive higher damages
    'teen-12-17': 1.5,
    'adult-18-60': 1.0,
    'senior-60-plus': 1.2
  };

  const ageMult = ageMultipliers[data.age] || 1;
  baseMin *= ageMult;
  baseMax *= ageMult;

  // Emotional impact
  const emotionalMultipliers: Record<string, number> = {
    'minimal': 1,
    'moderate': 1.3,
    'severe': 1.7,
    'life-altering': 2.2
  };

  const emotionalMult = emotionalMultipliers[data.emotionalImpact] || 1;
  baseMin *= emotionalMult;
  baseMax *= emotionalMult;

  // Prior history (enhances punitive damages potential)
  const historyMultipliers: Record<string, number> = {
    'no-history': 1.0,
    'aggressive-behavior': 1.3,
    'prior-bites': 1.6,
    'dangerous-breed': 1.4
  };

  const historyMult = historyMultipliers[data.priorHistory] || 1;
  baseMin *= historyMult;
  baseMax *= historyMult;

  return {
    min: Math.round(baseMin),
    max: Math.round(baseMax),
    medicalExpenses: medicalCosts,
    futureCare: futureMedical,
    lostIncome: lostWages,
    totalEconomic: medicalCosts + futureMedical + lostWages
  };
}

function validateForm(data: DogBiteFormData, step: number): boolean {
  if (step === 1) {
    return Boolean(
      data.injurySeverity &&
      data.attackLocation &&
      data.scarringLevel
    );
  }
  if (step === 2) {
    return Boolean(
      data.medicalCosts &&
      data.scarringLocation &&
      data.infection &&
      data.age &&
      data.emotionalImpact &&
      data.priorHistory
    );
  }
  return false;
}

export default function DogBiteCompensationCalculator() {
  const {
    step,
    formData,
    results,
    updateField,
    handleNext,
    handleBack,
    resetForm,
    isStepValid
  } = useCalculatorForm<DogBiteFormData>(
    initialFormData,
    calculateCompensation,
    validateForm
  );

  return (
    <>
      <CalculatorSEO
        title="Dog Bite Compensation Calculator | Free Animal Attack Settlement Estimate"
        description="Calculate potential compensation for dog bite and animal attack injuries. Free estimates including scarring, infection, and emotional trauma damages under California strict liability law."
        canonical="/dog-bite-calculator"
        injuryType="dog bite"
      />

      <CalculatorLayout
        title="Dog Bite Calculator"
        subtitle="Estimate compensation for animal attack injuries"
        metaTitle="Dog Bite Compensation Calculator"
        metaDescription="Free dog bite settlement calculator. Instant estimates for animal attacks."
        stats={[
          { value: '$50K+', label: 'Average Settlement' },
          { value: '4.5M', label: 'Dog Bites/Year' },
          { value: 'Strict', label: 'Liability Law (CA)' }
        ]}
      >
        <CalculatorProgress currentStep={step} totalSteps={3} />

        {/* Step 1: Injury Details */}
        {step === 1 && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Injury Details</h2>
              <p className="text-muted-foreground">Tell us about the attack and injuries</p>
            </div>

            <div className="space-y-6">
              <div>
                <Label className="text-base font-medium mb-4 block">Injury Severity</Label>
                <Select value={formData.injurySeverity} onValueChange={(value) => updateField('injurySeverity', value)}>
                  <SelectTrigger className="h-14 text-lg">
                    <SelectValue placeholder="Select injury severity" />
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
                <Label className="text-base font-medium mb-4 block">Attack Location on Body</Label>
                <Select value={formData.attackLocation} onValueChange={(value) => updateField('attackLocation', value)}>
                  <SelectTrigger className="h-14 text-lg">
                    <SelectValue placeholder="Select attack location" />
                  </SelectTrigger>
                  <SelectContent>
                    {attackLocationOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label} - {option.description}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-base font-medium mb-4 block">Scarring Level</Label>
                <Select value={formData.scarringLevel} onValueChange={(value) => updateField('scarringLevel', value)}>
                  <SelectTrigger className="h-14 text-lg">
                    <SelectValue placeholder="Select scarring level" />
                  </SelectTrigger>
                  <SelectContent>
                    {scarringLevelOptions.map((option) => (
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

        {/* Step 2: Financial & Additional Details */}
        {step === 2 && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Financial Impact & Case Details</h2>
              <p className="text-muted-foreground">Medical costs and additional factors</p>
            </div>

            <div className="space-y-6">
              <div>
                <Label htmlFor="medicalCosts" className="text-base font-medium">
                  Medical Expenses to Date ($)
                </Label>
                <Input
                  id="medicalCosts"
                  type="number"
                  placeholder="8000"
                  value={formData.medicalCosts}
                  onChange={(e) => updateField('medicalCosts', e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="futureMedical" className="text-base font-medium">
                  Future Medical Costs - Surgeries/Treatment ($)
                </Label>
                <Input
                  id="futureMedical"
                  type="number"
                  placeholder="15000"
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
                  placeholder="5000"
                  value={formData.lostWages}
                  onChange={(e) => updateField('lostWages', e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label className="text-base font-medium mb-4 block">Scar Location</Label>
                <Select value={formData.scarringLocation} onValueChange={(value) => updateField('scarringLocation', value)}>
                  <SelectTrigger className="h-14 text-lg">
                    <SelectValue placeholder="Select scar location" />
                  </SelectTrigger>
                  <SelectContent>
                    {scarringLocationOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label} - {option.description}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-base font-medium mb-4 block">Infection Complications</Label>
                <Select value={formData.infection} onValueChange={(value) => updateField('infection', value)}>
                  <SelectTrigger className="h-14 text-lg">
                    <SelectValue placeholder="Select infection status" />
                  </SelectTrigger>
                  <SelectContent>
                    {infectionOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label} - {option.description}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-base font-medium mb-4 block">Victim's Age</Label>
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
                <Label className="text-base font-medium mb-4 block">Emotional/Psychological Impact</Label>
                <Select value={formData.emotionalImpact} onValueChange={(value) => updateField('emotionalImpact', value)}>
                  <SelectTrigger className="h-14 text-lg">
                    <SelectValue placeholder="Select emotional impact" />
                  </SelectTrigger>
                  <SelectContent>
                    {emotionalImpactOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label} - {option.description}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-base font-medium mb-4 block">Dog's Prior History</Label>
                <Select value={formData.priorHistory} onValueChange={(value) => updateField('priorHistory', value)}>
                  <SelectTrigger className="h-14 text-lg">
                    <SelectValue placeholder="Select dog's history" />
                  </SelectTrigger>
                  <SelectContent>
                    {priorHistoryOptions.map((option) => (
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
              <h2 className="text-3xl font-bold text-black mb-2">Your Estimated Compensation Range</h2>
              <p className="text-slate-600">Based on California strict liability law</p>
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
                  <p className="font-semibold pt-2 border-t border-slate-200">
                    Total Economic: ${results.totalEconomic?.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h4 className="font-semibold text-black mb-2">California Strict Liability</h4>
                <p className="text-sm text-slate-600">
                  Dog owners are strictly liable for bite injuries in California, regardless of the dog's prior behavior. No need to prove negligence.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h4 className="font-semibold text-black mb-2">Damages Include</h4>
                <p className="text-sm text-slate-600">
                  Medical bills, future treatment, scarring/disfigurement, lost wages, pain & suffering, emotional distress, and potential punitive damages if prior incidents exist.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <p className="text-sm text-amber-900">
                <strong>Important:</strong> California's strict liability law makes dog owners responsible for bite injuries. Facial scarring, child victims, and prior aggressive history significantly increase compensation. This estimate is based on typical settlements - actual amounts depend on evidence, medical documentation, and case specifics.
              </p>
            </div>

            <div className="text-center pt-4 space-y-4">
              <h3 className="text-xl font-semibold text-black">Get maximum compensation for your injuries</h3>
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
