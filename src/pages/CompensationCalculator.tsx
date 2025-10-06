import React from 'react';
import { Stethoscope } from 'lucide-react';
import {
  CalculatorLayout,
  CalculatorProgress,
  CalculatorResults,
  FormNavigation,
  OptionButton,
  CalculatorSEO
} from '@/components/calculator';
import { useCalculatorForm } from '@/hooks/useCalculatorForm';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface MesotheliomaFormData {
  diagnosisType: string;
  stage: string;
  exposureType: string;
  exposureYears: string;
  medicalCosts: string;
  age: string;
  employmentStatus: string;
  annualIncome: string;
  [key: string]: string;
}

const initialFormData: MesotheliomaFormData = {
  diagnosisType: '',
  stage: '',
  exposureType: '',
  exposureYears: '',
  medicalCosts: '',
  age: '',
  employmentStatus: '',
  annualIncome: ''
};

const calculateCompensation = (data: MesotheliomaFormData) => {
  // Base amounts for mesothelioma (higher due to severity and latency)
  let baseMin = 800000;
  let baseMax = 2000000;

  // Diagnosis type multipliers
  const diagnosisMultipliers: Record<string, number> = {
    'pleural': 1.0,
    'peritoneal': 1.3, // Often higher settlements due to rarity
    'pericardial': 1.4, // Very rare and aggressive
    'testicular': 1.2
  };

  const diagnosisMultiplier = diagnosisMultipliers[data.diagnosisType] || 1.0;
  baseMin *= diagnosisMultiplier;
  baseMax *= diagnosisMultiplier;

  // Stage multipliers (earlier stages = longer treatment, higher costs)
  const stageMultipliers: Record<string, number> = {
    'stage-1': 1.2, // Better prognosis, longer life expectancy
    'stage-2': 1.1,
    'stage-3': 1.0,
    'stage-4': 0.9 // Advanced stage, shorter life expectancy affects damages
  };

  const stageMultiplier = stageMultipliers[data.stage] || 1.0;
  baseMin *= stageMultiplier;
  baseMax *= stageMultiplier;

  // Exposure type multipliers
  const exposureMultipliers: Record<string, number> = {
    'occupational': 1.2, // Clear liability path
    'military': 1.3, // VA benefits plus civil claims
    'secondary': 1.1, // Take-home exposure
    'environmental': 1.0,
    'multiple': 1.4 // Multiple exposure sources = more defendants
  };

  const exposureMultiplier = exposureMultipliers[data.exposureType] || 1.0;
  baseMin *= exposureMultiplier;
  baseMax *= exposureMultiplier;

  // Years of exposure impact
  const exposureYears = parseInt(data.exposureYears) || 0;
  if (exposureYears > 20) {
    baseMin *= 1.3;
    baseMax *= 1.3;
  } else if (exposureYears > 10) {
    baseMin *= 1.2;
    baseMax *= 1.2;
  } else if (exposureYears > 5) {
    baseMin *= 1.1;
    baseMax *= 1.1;
  }

  // Add actual medical costs
  const medicalCosts = parseInt(data.medicalCosts) || 0;
  baseMin += medicalCosts;
  baseMax += medicalCosts * 2;

  // Age-based adjustments (younger = higher lost wages/life impact)
  const age = parseInt(data.age) || 50;
  if (age < 50) {
    baseMin *= 1.3;
    baseMax *= 1.4;
  } else if (age < 60) {
    baseMin *= 1.2;
    baseMax *= 1.3;
  } else if (age < 70) {
    baseMin *= 1.1;
    baseMax *= 1.2;
  }

  // Lost wages calculation
  const annualIncome = parseInt(data.annualIncome) || 0;
  if (data.employmentStatus === 'employed' && annualIncome > 0) {
    // Estimate years of work life lost based on age
    const yearsLost = Math.max(0, Math.min(65 - age, 15));
    baseMin += annualIncome * yearsLost * 0.7;
    baseMax += annualIncome * yearsLost * 1.2;
  } else if (data.employmentStatus === 'retired') {
    // Pension/retirement impact
    baseMin += 100000;
    baseMax += 250000;
  }

  // Asbestos trust fund potential (additional to litigation)
  const trustFundMin = 200000;
  const trustFundMax = 500000;

  // Pain and suffering (mesothelioma is extremely painful)
  const painSufferingMin = 500000;
  const painSufferingMax = 1500000;

  // Final totals
  const finalMin = Math.round(baseMin + trustFundMin + painSufferingMin);
  const finalMax = Math.round(baseMax + trustFundMax + painSufferingMax);

  return {
    min: finalMin,
    max: finalMax,
    medicalExpenses: medicalCosts,
    lostWages: Math.round(annualIncome * Math.max(0, Math.min(65 - age, 15))),
    trustFunds: Math.round((trustFundMin + trustFundMax) / 2),
    painSuffering: Math.round((painSufferingMin + painSufferingMax) / 2)
  };
};

const validateStep = (data: MesotheliomaFormData, step: number): boolean => {
  switch (step) {
    case 1:
      return !!(data.diagnosisType && data.stage && data.exposureType && data.exposureYears);
    case 2:
      return !!(data.medicalCosts && data.age && data.employmentStatus);
    default:
      return true;
  }
};

const CompensationCalculator = () => {
  const {
    step,
    formData,
    results,
    updateField,
    handleNext,
    handleBack,
    isStepValid
  } = useCalculatorForm<MesotheliomaFormData>(
    initialFormData,
    calculateCompensation,
    validateStep
  );

  const stats = [
    { value: '$2M+', label: 'Average Settlement' },
    { value: '$60B+', label: 'Asbestos Trust Funds' },
    { value: '30-50 yrs', label: 'Latency Period' }
  ];

  return (
    <>
      <CalculatorSEO
        title="Mesothelioma Compensation Calculator | Asbestos Claims"
        description="Calculate potential compensation for mesothelioma and asbestos exposure. Estimate damages including medical costs, lost wages, trust funds, and pain and suffering."
        canonical="https://trembach.law/compensation-calculator"
        injuryType="mesothelioma"
      />
      
      <CalculatorLayout
        title="Mesothelioma Compensation Calculator"
        subtitle="Estimate your asbestos exposure claim value"
        metaTitle="Mesothelioma Calculator | Asbestos Compensation | Trembach Law"
        metaDescription="Calculate mesothelioma compensation for asbestos exposure cases. Free lifetime care estimates."
        icon={Stethoscope}
        stats={stats}
      >
        <div className="max-w-3xl mx-auto">
          {step < 3 && <CalculatorProgress currentStep={step} totalSteps={2} />}

          {/* Step 1: Diagnosis & Exposure */}
          {step === 1 && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Diagnosis & Exposure Information</h2>
                
                <div className="space-y-6">
                  <div>
                    <Label className="text-base mb-3 block">Type of Mesothelioma Diagnosis</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <OptionButton
                        value="pleural"
                        label="Pleural Mesothelioma"
                        description="Affects lung lining"
                        isSelected={formData.diagnosisType === 'pleural'}
                        onClick={() => updateField('diagnosisType', 'pleural')}
                      />
                      <OptionButton
                        value="peritoneal"
                        label="Peritoneal Mesothelioma"
                        description="Affects abdominal lining"
                        isSelected={formData.diagnosisType === 'peritoneal'}
                        onClick={() => updateField('diagnosisType', 'peritoneal')}
                      />
                      <OptionButton
                        value="pericardial"
                        label="Pericardial Mesothelioma"
                        description="Affects heart lining"
                        isSelected={formData.diagnosisType === 'pericardial'}
                        onClick={() => updateField('diagnosisType', 'pericardial')}
                      />
                      <OptionButton
                        value="testicular"
                        label="Testicular Mesothelioma"
                        description="Very rare form"
                        isSelected={formData.diagnosisType === 'testicular'}
                        onClick={() => updateField('diagnosisType', 'testicular')}
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-base mb-3 block">Cancer Stage</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {['stage-1', 'stage-2', 'stage-3', 'stage-4'].map((stage) => (
                        <OptionButton
                          key={stage}
                          value={stage}
                          label={`Stage ${stage.split('-')[1]}`}
                          isSelected={formData.stage === stage}
                          onClick={() => updateField('stage', stage)}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-base mb-3 block">Type of Asbestos Exposure</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <OptionButton
                        value="occupational"
                        label="Occupational Exposure"
                        description="Workplace exposure"
                        isSelected={formData.exposureType === 'occupational'}
                        onClick={() => updateField('exposureType', 'occupational')}
                      />
                      <OptionButton
                        value="military"
                        label="Military Service"
                        description="Navy, shipyards, etc."
                        isSelected={formData.exposureType === 'military'}
                        onClick={() => updateField('exposureType', 'military')}
                      />
                      <OptionButton
                        value="secondary"
                        label="Secondary Exposure"
                        description="Take-home exposure"
                        isSelected={formData.exposureType === 'secondary'}
                        onClick={() => updateField('exposureType', 'secondary')}
                      />
                      <OptionButton
                        value="environmental"
                        label="Environmental"
                        description="Community exposure"
                        isSelected={formData.exposureType === 'environmental'}
                        onClick={() => updateField('exposureType', 'environmental')}
                      />
                      <OptionButton
                        value="multiple"
                        label="Multiple Sources"
                        description="Various exposures"
                        isSelected={formData.exposureType === 'multiple'}
                        onClick={() => updateField('exposureType', 'multiple')}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="exposureYears" className="text-base mb-3 block">
                      Years of Asbestos Exposure
                    </Label>
                    <select
                      id="exposureYears"
                      value={formData.exposureYears}
                      onChange={(e) => updateField('exposureYears', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground text-base"
                    >
                      <option value="">Select exposure duration</option>
                      <option value="2">Less than 5 years</option>
                      <option value="7">5-10 years</option>
                      <option value="15">10-20 years</option>
                      <option value="25">20-30 years</option>
                      <option value="35">Over 30 years</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Medical & Financial Impact */}
          {step === 2 && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Medical & Financial Impact</h2>
                
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="medicalCosts" className="text-base mb-3 block">
                      Total Medical Costs (to date)
                    </Label>
                    <select
                      id="medicalCosts"
                      value={formData.medicalCosts}
                      onChange={(e) => updateField('medicalCosts', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground text-base"
                    >
                      <option value="">Select medical cost range</option>
                      <option value="25000">Under $50,000</option>
                      <option value="100000">$50,000 - $150,000</option>
                      <option value="250000">$150,000 - $350,000</option>
                      <option value="500000">$350,000 - $650,000</option>
                      <option value="1000000">Over $650,000</option>
                    </select>
                    <p className="text-sm text-muted-foreground mt-2">
                      Include surgery, chemotherapy, radiation, and ongoing treatment
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="age" className="text-base mb-3 block">
                      Your Current Age
                    </Label>
                    <select
                      id="age"
                      value={formData.age}
                      onChange={(e) => updateField('age', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground text-base"
                    >
                      <option value="">Select age range</option>
                      <option value="35">Under 40</option>
                      <option value="45">40-49</option>
                      <option value="55">50-59</option>
                      <option value="65">60-69</option>
                      <option value="75">70 or older</option>
                    </select>
                  </div>

                  <div>
                    <Label className="text-base mb-3 block">Employment Status at Diagnosis</Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <OptionButton
                        value="employed"
                        label="Employed"
                        isSelected={formData.employmentStatus === 'employed'}
                        onClick={() => updateField('employmentStatus', 'employed')}
                      />
                      <OptionButton
                        value="retired"
                        label="Retired"
                        isSelected={formData.employmentStatus === 'retired'}
                        onClick={() => updateField('employmentStatus', 'retired')}
                      />
                      <OptionButton
                        value="disabled"
                        label="Disabled"
                        isSelected={formData.employmentStatus === 'disabled'}
                        onClick={() => updateField('employmentStatus', 'disabled')}
                      />
                    </div>
                  </div>

                  {formData.employmentStatus === 'employed' && (
                    <div>
                      <Label htmlFor="annualIncome" className="text-base mb-3 block">
                        Annual Income
                      </Label>
                      <select
                        id="annualIncome"
                        value={formData.annualIncome}
                        onChange={(e) => updateField('annualIncome', e.target.value)}
                        className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground text-base"
                      >
                        <option value="">Select annual income</option>
                        <option value="30000">Under $40,000</option>
                        <option value="55000">$40,000 - $70,000</option>
                        <option value="85000">$70,000 - $100,000</option>
                        <option value="125000">Over $100,000</option>
                      </select>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Results */}
          {step === 3 && results && (
            <CalculatorResults
              min={results.min}
              max={results.max}
              title="Your Estimated Mesothelioma Compensation"
              subtitle="Based on the information provided, your potential recovery includes multiple sources"
              damageCategories={[
                {
                  title: 'Medical Expenses',
                  description: `Past and future treatment costs: $${results.medicalExpenses?.toLocaleString() || '0'} documented, plus estimated future care`
                },
                {
                  title: 'Lost Wages & Earning Capacity',
                  description: `Economic impact from inability to work: $${results.lostWages?.toLocaleString() || '0'}`
                },
                {
                  title: 'Asbestos Trust Funds',
                  description: `Additional recovery from bankruptcy trusts: Average $${results.trustFunds?.toLocaleString()}`
                },
                {
                  title: 'Pain, Suffering & Loss of Life Enjoyment',
                  description: `Compensation for physical pain and emotional trauma: $${results.painSuffering?.toLocaleString()}`
                },
                {
                  title: 'Punitive Damages Potential',
                  description: 'Additional damages if corporate negligence or misconduct proven'
                }
              ]}
              disclaimer="Mesothelioma compensation varies significantly based on specific case factors including exposure history, number of defendants, asbestos trust fund availability, and state laws. Many cases settle between $1M-$2.4M. This estimate combines potential litigation recovery and trust fund claims. Actual results depend on proving causation and identifying liable parties. California law provides favorable statutes for asbestos cases."
              ctaText="Get Your Free Case Evaluation"
            />
          )}

          <FormNavigation
            currentStep={step}
            totalSteps={2}
            isValid={isStepValid()}
            onBack={handleBack}
            onNext={handleNext}
          />
        </div>
      </CalculatorLayout>
    </>
  );
};

export default CompensationCalculator;
