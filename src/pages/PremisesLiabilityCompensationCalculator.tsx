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

interface PremisesLiabilityFormData extends CalculatorFormData {
  accidentType: string;
  injuryType: string;
  injurySeverity: string;
  medicalCosts: string;
  futureMedical: string;
  lostWages: string;
  propertyType: string;
  ownerKnowledge: string;
  hazardType: string;
  warnings: string;
  permanentImpact: string;
}

const initialFormData: PremisesLiabilityFormData = {
  accidentType: '',
  injuryType: '',
  injurySeverity: '',
  medicalCosts: '',
  futureMedical: '',
  lostWages: '',
  propertyType: '',
  ownerKnowledge: '',
  hazardType: '',
  warnings: '',
  permanentImpact: ''
};

const accidentTypeOptions = [
  { value: 'slip-fall', label: 'Slip and Fall', description: 'Wet or slippery surface' },
  { value: 'trip-fall', label: 'Trip and Fall', description: 'Uneven surface or obstacle' },
  { value: 'inadequate-security', label: 'Inadequate Security', description: 'Assault or crime on property' },
  { value: 'swimming-pool', label: 'Swimming Pool Accident', description: 'Pool-related injury' },
  { value: 'falling-object', label: 'Falling Object', description: 'Item fell from height' },
  { value: 'structural-failure', label: 'Structural Failure', description: 'Building/stairs collapse' }
];

const injuryTypeOptions = [
  { value: 'soft-tissue', label: 'Soft Tissue Injury', description: 'Sprains, strains' },
  { value: 'fractures', label: 'Fractures/Broken Bones', description: 'Bone injuries' },
  { value: 'head-injury', label: 'Head/Brain Injury', description: 'Concussion or TBI' },
  { value: 'spinal-injury', label: 'Spinal Cord Injury', description: 'Back/spine damage' },
  { value: 'internal-injuries', label: 'Internal Injuries', description: 'Organ damage' },
  { value: 'death', label: 'Wrongful Death', description: 'Fatal accident' }
];

const injurySeverityOptions = [
  { value: 'minor', label: 'Minor', description: 'Quick recovery' },
  { value: 'moderate', label: 'Moderate', description: 'Extended treatment' },
  { value: 'severe', label: 'Severe', description: 'Major medical care' },
  { value: 'catastrophic', label: 'Catastrophic', description: 'Life-altering' }
];

const propertyTypeOptions = [
  { value: 'retail-store', label: 'Retail Store', description: 'Shop, mall, supermarket' },
  { value: 'restaurant', label: 'Restaurant/Bar', description: 'Food service establishment' },
  { value: 'apartment', label: 'Apartment/Condo', description: 'Residential complex' },
  { value: 'hotel', label: 'Hotel/Resort', description: 'Hospitality property' },
  { value: 'office', label: 'Office Building', description: 'Commercial office' },
  { value: 'parking-lot', label: 'Parking Lot/Garage', description: 'Parking facility' },
  { value: 'private-property', label: 'Private Property', description: 'Someone\'s home' },
  { value: 'public-property', label: 'Public Property', description: 'Government-owned' }
];

const ownerKnowledgeOptions = [
  { value: 'known-hazard', label: 'Known Hazard', description: 'Owner was aware of danger' },
  { value: 'should-have-known', label: 'Should Have Known', description: 'Reasonable inspection would reveal' },
  { value: 'recent-occurrence', label: 'Recent Occurrence', description: 'Hazard just appeared' },
  { value: 'unknown', label: 'Unknown', description: 'Unclear if owner knew' }
];

const hazardTypeOptions = [
  { value: 'temporary', label: 'Temporary Hazard', description: 'Wet floor, spill, debris' },
  { value: 'permanent', label: 'Permanent Hazard', description: 'Broken stairs, uneven floor' },
  { value: 'poor-maintenance', label: 'Poor Maintenance', description: 'Neglected repairs' },
  { value: 'inadequate-lighting', label: 'Inadequate Lighting', description: 'Too dark to see hazards' },
  { value: 'security-failure', label: 'Security Failure', description: 'Lack of proper security' }
];

const warningsOptions = [
  { value: 'no-warnings', label: 'No Warnings', description: 'No signs or barriers' },
  { value: 'inadequate-warnings', label: 'Inadequate Warnings', description: 'Insufficient signage' },
  { value: 'proper-warnings', label: 'Proper Warnings Present', description: 'Clear warnings posted' }
];

const permanentImpactOptions = [
  { value: 'none', label: 'No Permanent Impact', description: 'Full recovery' },
  { value: 'minor', label: 'Minor Permanent', description: 'Slight limitations' },
  { value: 'significant', label: 'Significant Permanent', description: 'Major disability' },
  { value: 'total-disability', label: 'Total Disability', description: 'Unable to work' }
];

function calculateCompensation(data: PremisesLiabilityFormData): CalculatorResults {
  // Base amounts for premises liability
  let baseMin = 20000;
  let baseMax = 100000;

  // Accident type multipliers
  const accidentMultipliers: Record<string, number> = {
    'slip-fall': 1.5,
    'trip-fall': 1.4,
    'inadequate-security': 3.0,
    'swimming-pool': 3.5,
    'falling-object': 2.5,
    'structural-failure': 4.0
  };

  const accidentMult = accidentMultipliers[data.accidentType] || 1;
  baseMin *= accidentMult;
  baseMax *= accidentMult;

  // Injury type multipliers
  const injuryMultipliers: Record<string, number> = {
    'soft-tissue': 1.2,
    'fractures': 2.5,
    'head-injury': 4.0,
    'spinal-injury': 5.0,
    'internal-injuries': 3.5,
    'death': 7.0
  };

  const injuryMult = injuryMultipliers[data.injuryType] || 1;
  baseMin *= injuryMult;
  baseMax *= injuryMult;

  // Severity multipliers
  const severityMultipliers: Record<string, number> = {
    'minor': 1,
    'moderate': 2,
    'severe': 3.5,
    'catastrophic': 5.5
  };

  const severityMult = severityMultipliers[data.injurySeverity] || 1;
  baseMin *= severityMult;
  baseMax *= severityMult;

  // Add economic damages
  const medicalCosts = parseInt(data.medicalCosts) || 0;
  const futureMedical = parseInt(data.futureMedical) || 0;
  const lostWages = parseInt(data.lostWages) || 0;

  baseMin += medicalCosts * 2.5 + futureMedical + lostWages * 1.5;
  baseMax += medicalCosts * 5 + futureMedical * 2 + lostWages * 3;

  // Property type impact (commercial properties have higher duties)
  const propertyMultipliers: Record<string, number> = {
    'retail-store': 1.4,
    'restaurant': 1.5,
    'apartment': 1.2,
    'hotel': 1.4,
    'office': 1.3,
    'parking-lot': 1.2,
    'private-property': 0.9,
    'public-property': 1.1
  };

  const propertyMult = propertyMultipliers[data.propertyType] || 1;
  baseMin *= propertyMult;
  baseMax *= propertyMult;

  // Owner knowledge (critical for liability)
  const knowledgeMultipliers: Record<string, number> = {
    'known-hazard': 1.8,
    'should-have-known': 1.4,
    'recent-occurrence': 0.7,
    'unknown': 1.0
  };

  const knowledgeMult = knowledgeMultipliers[data.ownerKnowledge] || 1;
  baseMin *= knowledgeMult;
  baseMax *= knowledgeMult;

  // Hazard type
  const hazardMultipliers: Record<string, number> = {
    'temporary': 1.0,
    'permanent': 1.6,
    'poor-maintenance': 1.7,
    'inadequate-lighting': 1.4,
    'security-failure': 2.0
  };

  const hazardMult = hazardMultipliers[data.hazardType] || 1;
  baseMin *= hazardMult;
  baseMax *= hazardMult;

  // Warnings present (lack of warnings increases liability)
  const warningMultipliers: Record<string, number> = {
    'no-warnings': 1.6,
    'inadequate-warnings': 1.3,
    'proper-warnings': 0.7
  };

  const warningMult = warningMultipliers[data.warnings] || 1;
  baseMin *= warningMult;
  baseMax *= warningMult;

  // Permanent impact
  const permanentMultipliers: Record<string, number> = {
    'none': 1,
    'minor': 1.4,
    'significant': 2.3,
    'total-disability': 3.5
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
    totalEconomic: medicalCosts + futureMedical + lostWages
  };
}

function validateForm(data: PremisesLiabilityFormData, step: number): boolean {
  if (step === 1) {
    return Boolean(
      data.accidentType &&
      data.injuryType &&
      data.injurySeverity &&
      data.propertyType
    );
  }
  if (step === 2) {
    return Boolean(
      data.medicalCosts &&
      data.lostWages &&
      data.ownerKnowledge &&
      data.hazardType &&
      data.warnings &&
      data.permanentImpact
    );
  }
  return false;
}

export default function PremisesLiabilityCompensationCalculator() {
  const {
    step,
    formData,
    results,
    updateField,
    handleNext,
    handleBack,
    resetForm,
    isStepValid
  } = useCalculatorForm<PremisesLiabilityFormData>(
    initialFormData,
    calculateCompensation,
    validateForm
  );

  return (
    <>
      <CalculatorSEO
        title="Premises Liability Calculator | Slip and Fall Settlement Estimate"
        description="Calculate potential compensation for premises liability claims including slip and fall, inadequate security, and property accidents. Free estimates with California property owner duty analysis."
        canonical="/premises-liability-calculator"
        injuryType="premises liability"
      />

      <CalculatorLayout
        title="Premises Liability Calculator"
        subtitle="Estimate compensation for property accident injuries"
        metaTitle="Premises Liability Compensation Calculator"
        metaDescription="Free premises liability settlement calculator. Slip and fall estimates."
        stats={[
          { value: '$100K+', label: 'Average Settlement' },
          { value: '8M+', label: 'Slip & Falls/Year' },
          { value: '24/7', label: 'Free Consultation' }
        ]}
      >
        <CalculatorProgress currentStep={step} totalSteps={3} />

        {/* Step 1: Accident & Injury Details */}
        {step === 1 && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Accident & Injury Details</h2>
              <p className="text-muted-foreground">Tell us about the incident</p>
            </div>

            <div className="space-y-6">
              <div>
                <Label className="text-base font-medium mb-4 block">Type of Accident</Label>
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
                <Label className="text-base font-medium mb-4 block">Property Type</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {propertyTypeOptions.map((option) => (
                    <OptionButton
                      key={option.value}
                      value={option.value}
                      label={option.label}
                      description={option.description}
                      isSelected={formData.propertyType === option.value}
                      onClick={() => updateField('propertyType', option.value)}
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

        {/* Step 2: Liability & Financial Details */}
        {step === 2 && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Liability & Financial Details</h2>
              <p className="text-muted-foreground">Damages and property owner responsibility</p>
            </div>

            <div className="space-y-6">
              <div>
                <Label htmlFor="medicalCosts" className="text-base font-medium">
                  Medical Expenses to Date ($)
                </Label>
                <Input
                  id="medicalCosts"
                  type="number"
                  placeholder="12000"
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
                  placeholder="8000"
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
                  placeholder="6000"
                  value={formData.lostWages}
                  onChange={(e) => updateField('lostWages', e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label className="text-base font-medium mb-4 block">Owner's Knowledge of Hazard</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {ownerKnowledgeOptions.map((option) => (
                    <OptionButton
                      key={option.value}
                      value={option.value}
                      label={option.label}
                      description={option.description}
                      isSelected={formData.ownerKnowledge === option.value}
                      onClick={() => updateField('ownerKnowledge', option.value)}
                    />
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-base font-medium mb-4 block">Type of Hazard</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {hazardTypeOptions.map((option) => (
                    <OptionButton
                      key={option.value}
                      value={option.value}
                      label={option.label}
                      description={option.description}
                      isSelected={formData.hazardType === option.value}
                      onClick={() => updateField('hazardType', option.value)}
                    />
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-base font-medium mb-4 block">Warning Signs Present?</Label>
                <div className="grid md:grid-cols-3 gap-4">
                  {warningsOptions.map((option) => (
                    <OptionButton
                      key={option.value}
                      value={option.value}
                      label={option.label}
                      description={option.description}
                      isSelected={formData.warnings === option.value}
                      onClick={() => updateField('warnings', option.value)}
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
              <p className="text-slate-600">Based on premises liability factors</p>
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
                <h4 className="font-semibold text-black mb-2">Property Owner Duty of Care</h4>
                <p className="text-sm text-slate-600">
                  California law requires property owners to maintain safe premises and warn of known hazards. Commercial properties have higher duties than private residences.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h4 className="font-semibold text-black mb-2">Liability Factors Considered</h4>
                <p className="text-sm text-slate-600">
                  Owner knowledge, hazard type, warning signs, property type, and reasonableness of conditions all impact liability and compensation amounts.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <p className="text-sm text-amber-900">
                <strong>Important:</strong> Premises liability cases require proving the property owner knew or should have known about the hazard and failed to correct it or provide adequate warning. Documentation of the scene, witness statements, and incident reports are critical. This estimate assumes provable liability.
              </p>
            </div>

            <div className="text-center pt-4 space-y-4">
              <h3 className="text-xl font-semibold text-black">Prove liability and maximize your recovery</h3>
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
