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

interface PFASFormData extends CalculatorFormData {
  diagnosis: string;
  severity: string;
  exposureSource: string;
  exposureDuration: string;
  medicalCosts: string;
  futureMedical: string;
  age: string;
  waterSource: string;
  occupationalExposure: string;
  lostWages: string;
  [key: string]: string;
}

const initialFormData: PFASFormData = {
  diagnosis: '',
  severity: '',
  exposureSource: '',
  exposureDuration: '',
  medicalCosts: '',
  futureMedical: '',
  age: '',
  waterSource: '',
  occupationalExposure: '',
  lostWages: ''
};

const diagnosisOptions = [
  { value: 'kidney-cancer', label: 'Kidney Cancer', description: 'Renal cell carcinoma' },
  { value: 'testicular-cancer', label: 'Testicular Cancer', description: 'Germ cell tumors' },
  { value: 'thyroid-disease', label: 'Thyroid Disease', description: 'Hypothyroidism/cancer' },
  { value: 'liver-damage', label: 'Liver Damage', description: 'Elevated enzymes/disease' },
  { value: 'ulcerative-colitis', label: 'Ulcerative Colitis', description: 'IBD from PFAS' },
  { value: 'pregnancy-complications', label: 'Pregnancy Issues', description: 'Pre-eclampsia/low birth weight' }
];

const severityOptions = [
  { value: 'stage-1', label: 'Stage 1/Early', description: 'Early diagnosis' },
  { value: 'stage-2', label: 'Stage 2/Moderate', description: 'Progressed condition' },
  { value: 'stage-3', label: 'Stage 3/Advanced', description: 'Advanced disease' },
  { value: 'stage-4', label: 'Stage 4/Metastatic', description: 'Metastatic cancer' }
];

const exposureSourceOptions = [
  { value: 'contaminated-water', label: 'Contaminated Water', description: 'Drinking water supply' },
  { value: 'military-base', label: 'Military Base', description: 'AFFF firefighting foam' },
  { value: 'firefighter', label: 'Firefighter/AFFF', description: 'Occupational exposure' },
  { value: 'manufacturing', label: 'Manufacturing Plant', description: 'Chemical plant worker' },
  { value: 'consumer-products', label: 'Consumer Products', description: 'Non-stick cookware' },
  { value: 'multiple', label: 'Multiple Sources', description: 'Several exposure points' }
];

const exposureDurationOptions = [
  { value: '1-2-years', label: '1-2 Years', description: 'Short-term exposure' },
  { value: '3-5-years', label: '3-5 Years', description: 'Moderate duration' },
  { value: '6-10-years', label: '6-10 Years', description: 'Extended exposure' },
  { value: '10plus-years', label: '10+ Years', description: 'Long-term exposure' },
  { value: 'lifetime', label: 'Lifetime', description: 'Continuous exposure' }
];

const ageOptions = [
  { value: 'under-30', label: 'Under 30', description: 'Younger victim' },
  { value: '30-45', label: '30-45', description: 'Early-mid career' },
  { value: '46-60', label: '46-60', description: 'Mid-late career' },
  { value: '60plus', label: '60+', description: 'Senior age' }
];

const waterSourceOptions = [
  { value: 'public-supply', label: 'Public Water Supply', description: 'Municipal water' },
  { value: 'private-well', label: 'Private Well', description: 'Residential well' },
  { value: 'both', label: 'Both Sources', description: 'Multiple water sources' }
];

const occupationalOptions = [
  { value: 'no', label: 'No', description: 'No work exposure' },
  { value: 'yes-direct', label: 'Direct Exposure', description: 'Handled PFAS products' },
  { value: 'yes-secondary', label: 'Secondary Exposure', description: 'Workplace proximity' }
];

function calculateCompensation(data: PFASFormData): CalculatorResults {
  let baseMin = 75000;
  let baseMax = 350000;

  // Diagnosis type multipliers (PFAS-linked diseases)
  const diagnosisMultipliers: Record<string, number> = {
    'kidney-cancer': 4.5,
    'testicular-cancer': 5.0,
    'thyroid-disease': 2.0,
    'liver-damage': 2.8,
    'ulcerative-colitis': 2.5,
    'pregnancy-complications': 2.2
  };

  const diagnosisMult = diagnosisMultipliers[data.diagnosis] || 1;
  baseMin *= diagnosisMult;
  baseMax *= diagnosisMult;

  // Severity/stage adjustments (for cancer cases)
  const severityMultipliers: Record<string, number> = {
    'stage-1': 1.0,
    'stage-2': 1.4,
    'stage-3': 2.0,
    'stage-4': 3.0
  };

  const severityMult = severityMultipliers[data.severity] || 1;
  baseMin *= severityMult;
  baseMax *= severityMult;

  // Exposure source impact (liability strength)
  const sourceMultipliers: Record<string, number> = {
    'contaminated-water': 1.8,
    'military-base': 2.2, // Federal liability
    'firefighter': 2.0,
    'manufacturing': 1.7,
    'consumer-products': 1.4,
    'multiple': 2.5
  };

  const sourceMult = sourceMultipliers[data.exposureSource] || 1;
  baseMin *= sourceMult;
  baseMax *= sourceMult;

  // Exposure duration (longer = stronger causation)
  const durationMultipliers: Record<string, number> = {
    '1-2-years': 1.0,
    '3-5-years': 1.3,
    '6-10-years': 1.7,
    '10plus-years': 2.2,
    'lifetime': 2.8
  };

  const durationMult = durationMultipliers[data.exposureDuration] || 1;
  baseMin *= durationMult;
  baseMax *= durationMult;

  // Add economic damages
  const medicalCosts = parseInt(data.medicalCosts) || 0;
  const futureMedical = parseInt(data.futureMedical) || 0;
  const lostWages = parseInt(data.lostWages) || 0;

  baseMin += medicalCosts * 2 + futureMedical + lostWages;
  baseMax += medicalCosts * 4 + futureMedical * 2.5 + lostWages * 2;

  // Age-based lifetime impact
  const ageMultipliers: Record<string, number> = {
    'under-30': 1.8,
    '30-45': 1.5,
    '46-60': 1.2,
    '60plus': 1.0
  };

  const ageMult = ageMultipliers[data.age] || 1;
  baseMin *= ageMult;
  baseMax *= ageMult;

  // Water source clarity (easier proof)
  const waterMultipliers: Record<string, number> = {
    'public-supply': 1.4, // Documented contamination
    'private-well': 1.2,
    'both': 1.6
  };

  const waterMult = waterMultipliers[data.waterSource] || 1;
  baseMin *= waterMult;
  baseMax *= waterMult;

  // Occupational exposure (additional liability)
  const occupationalMultipliers: Record<string, number> = {
    'no': 1.0,
    'yes-direct': 1.8,
    'yes-secondary': 1.3
  };

  const occupationalMult = occupationalMultipliers[data.occupationalExposure] || 1;
  baseMin *= occupationalMult;
  baseMax *= occupationalMult;

  return {
    min: Math.round(baseMin),
    max: Math.round(baseMax),
    medicalExpenses: medicalCosts,
    futureCare: futureMedical,
    lostIncome: lostWages,
    totalEconomic: medicalCosts + futureMedical + lostWages
  };
}

function validateForm(data: PFASFormData, step: number): boolean {
  if (step === 1) {
    return Boolean(
      data.diagnosis &&
      data.severity &&
      data.exposureSource
    );
  }
  if (step === 2) {
    return Boolean(
      data.exposureDuration &&
      data.medicalCosts &&
      data.age &&
      data.waterSource &&
      data.occupationalExposure
    );
  }
  return false;
}

export default function PFASCalculator() {
  const {
    step,
    formData,
    results,
    updateField,
    handleNext,
    handleBack,
    resetForm,
    isStepValid
  } = useCalculatorForm<PFASFormData>(
    initialFormData,
    calculateCompensation,
    validateForm
  );

  return (
    <>
      <CalculatorSEO
        title="PFAS Compensation Calculator | Forever Chemicals Settlement Estimator"
        description="Calculate potential compensation for PFAS exposure and forever chemicals contamination. Free estimates for kidney cancer, thyroid disease, liver damage, and other PFAS-related illnesses."
        canonical="/pfas-calculator"
        injuryType="PFAS exposure"
      />

      <CalculatorLayout
        title="PFAS Compensation Calculator"
        subtitle="Estimate compensation for forever chemicals exposure"
        metaTitle="PFAS Compensation Calculator"
        metaDescription="Free PFAS exposure settlement calculator. Instant estimates for forever chemicals."
        stats={[
          { value: '$1.8B+', label: 'PFAS Settlement Fund' },
          { value: '200M+', label: 'Americans Exposed' },
          { value: 'Forever', label: 'Chemical Persistence' }
        ]}
      >
        <CalculatorProgress currentStep={step} totalSteps={3} />

        {/* Step 1: Diagnosis & Exposure Source */}
        {step === 1 && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Diagnosis & Exposure Details</h2>
              <p className="text-muted-foreground">Tell us about your PFAS-related condition</p>
            </div>

            <div className="space-y-6">
              <div>
                <Label className="text-base font-medium mb-4 block">Health Condition/Diagnosis</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {diagnosisOptions.map((option) => (
                    <OptionButton
                      key={option.value}
                      value={option.value}
                      label={option.label}
                      description={option.description}
                      isSelected={formData.diagnosis === option.value}
                      onClick={() => updateField('diagnosis', option.value)}
                    />
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-base font-medium mb-4 block">Disease Severity/Stage</Label>
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
                <Label className="text-base font-medium mb-4 block">Primary Exposure Source</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {exposureSourceOptions.map((option) => (
                    <OptionButton
                      key={option.value}
                      value={option.value}
                      label={option.label}
                      description={option.description}
                      isSelected={formData.exposureSource === option.value}
                      onClick={() => updateField('exposureSource', option.value)}
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

        {/* Step 2: Duration & Financial Impact */}
        {step === 2 && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Exposure Duration & Financial Impact</h2>
              <p className="text-muted-foreground">Medical costs and exposure timeline</p>
            </div>

            <div className="space-y-6">
              <div>
                <Label className="text-base font-medium mb-4 block">Exposure Duration</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {exposureDurationOptions.map((option) => (
                    <OptionButton
                      key={option.value}
                      value={option.value}
                      label={option.label}
                      description={option.description}
                      isSelected={formData.exposureDuration === option.value}
                      onClick={() => updateField('exposureDuration', option.value)}
                    />
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="medicalCosts" className="text-base font-medium">
                  Medical Expenses to Date ($)
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
                  Future Medical Costs - Treatment/Monitoring ($)
                </Label>
                <Input
                  id="futureMedical"
                  type="number"
                  placeholder="75000"
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
                  placeholder="25000"
                  value={formData.lostWages}
                  onChange={(e) => updateField('lostWages', e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label className="text-base font-medium mb-4 block">Your Age</Label>
                <div className="grid md:grid-cols-2 gap-4">
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
                <Label className="text-base font-medium mb-4 block">Water Source</Label>
                <div className="grid md:grid-cols-3 gap-4">
                  {waterSourceOptions.map((option) => (
                    <OptionButton
                      key={option.value}
                      value={option.value}
                      label={option.label}
                      description={option.description}
                      isSelected={formData.waterSource === option.value}
                      onClick={() => updateField('waterSource', option.value)}
                    />
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-base font-medium mb-4 block">Occupational Exposure</Label>
                <div className="grid md:grid-cols-3 gap-4">
                  {occupationalOptions.map((option) => (
                    <OptionButton
                      key={option.value}
                      value={option.value}
                      label={option.label}
                      description={option.description}
                      isSelected={formData.occupationalExposure === option.value}
                      onClick={() => updateField('occupationalExposure', option.value)}
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
              <p className="text-slate-600">Based on PFAS litigation precedents</p>
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
                <h4 className="font-semibold text-black mb-2">PFAS Litigation Landscape</h4>
                <p className="text-sm text-slate-600">
                  Thousands of lawsuits filed against 3M, DuPont, Chemours, and other manufacturers. Multi-district litigation (MDL 2873) consolidates water contamination cases. Firefighting foam (AFFF) litigation growing rapidly.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h4 className="font-semibold text-black mb-2">Forever Chemicals Impact</h4>
                <p className="text-sm text-slate-600">
                  PFAS compounds don't break down in the environment or human body. They accumulate over time, causing serious health conditions. EPA designated PFOA and PFOS as hazardous substances in 2024.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <p className="text-sm text-amber-900">
                <strong>Important Disclaimer:</strong> PFAS litigation is evolving rapidly with ongoing settlement negotiations and trials. Compensation depends on exposure documentation, medical causation evidence, defendant identification, and settlement fund participation. This estimate reflects current litigation trends but actual amounts vary significantly by case. Many PFAS cases qualify for class action or mass tort settlements. Statute of limitations varies by jurisdiction - act quickly to preserve your rights.
              </p>
            </div>

            <div className="text-center pt-4 space-y-4">
              <h3 className="text-xl font-semibold text-black">Join the PFAS litigation</h3>
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