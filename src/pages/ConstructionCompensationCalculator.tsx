import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, HardHat, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCalculatorForm, CalculatorFormData, CalculatorResults } from '@/hooks/useCalculatorForm';
import { FormNavigation } from '@/components/calculator/FormNavigation';
import { CalculatorResults as ResultsDisplay } from '@/components/calculator/CalculatorResults';

interface ConstructionFormData extends CalculatorFormData {
  accidentType: string;
  injurySeverity: string;
  injuryType: string;
  oshaViolations: string;
  permanentDisability: string;
  age: string;
  thirdPartyLiability: string;
  equipmentFailure: string;
  medicalCosts: string;
  futureCareCosts: string;
  lostWages: string;
}

const initialFormData: ConstructionFormData = {
  accidentType: '',
  injurySeverity: '',
  injuryType: '',
  oshaViolations: '',
  permanentDisability: '',
  age: '',
  thirdPartyLiability: '',
  equipmentFailure: '',
  medicalCosts: '',
  futureCareCosts: '',
  lostWages: ''
};

const calculateCompensation = (data: ConstructionFormData): CalculatorResults => {
  let baseMin = 100000;
  let baseMax = 200000;

  // Accident type multipliers
  const accidentMultipliers: Record<string, number> = {
    'fall-from-height': 2.5,
    'scaffolding-collapse': 2.8,
    'crane-accident': 3.0,
    'electrocution': 2.7,
    'struck-by-object': 2.0,
    'caught-between': 2.3,
    'trench-collapse': 2.6,
    'equipment-malfunction': 2.2,
    'explosion-fire': 2.9,
    'other': 1.5
  };
  const accidentMultiplier = accidentMultipliers[data.accidentType] || 1;

  // Injury severity multipliers
  const severityMultipliers: Record<string, number> = {
    'minor': 0.8,
    'moderate': 1.3,
    'serious': 2.0,
    'severe': 2.8,
    'catastrophic': 3.5,
    'fatal': 4.0
  };
  const severityMultiplier = severityMultipliers[data.injurySeverity] || 1;

  // Injury type multipliers
  const injuryTypeMultipliers: Record<string, number> = {
    'traumatic-brain-injury': 3.0,
    'spinal-cord-injury': 3.2,
    'amputation': 2.8,
    'severe-burns': 2.6,
    'multiple-fractures': 2.0,
    'crush-injury': 2.4,
    'internal-injuries': 2.2,
    'back-neck-injury': 1.8,
    'other': 1.5
  };
  const injuryTypeMultiplier = injuryTypeMultipliers[data.injuryType] || 1;

  // OSHA violations (significant factor)
  const oshaMultipliers: Record<string, number> = {
    'willful-violations': 2.5,
    'serious-violations': 2.0,
    'repeat-violations': 2.2,
    'multiple-violations': 1.8,
    'no-violations': 1.0
  };
  const oshaMultiplier = oshaMultipliers[data.oshaViolations] || 1;

  // Permanent disability multipliers
  const disabilityMultipliers: Record<string, number> = {
    'total-permanent': 3.0,
    'partial-permanent': 2.2,
    'temporary-total': 1.5,
    'temporary-partial': 1.2,
    'none': 1.0
  };
  const disabilityMultiplier = disabilityMultipliers[data.permanentDisability] || 1;

  // Age-based adjustments (younger workers = higher future damages)
  const ageMultipliers: Record<string, number> = {
    'under-30': 1.6,
    '30-40': 1.4,
    '41-50': 1.2,
    '51-60': 1.0,
    'over-60': 0.8
  };
  const ageMultiplier = ageMultipliers[data.age] || 1;

  // Third-party liability (can pursue beyond workers' comp)
  const thirdPartyMultiplier = data.thirdPartyLiability === 'yes' ? 1.8 : 1.0;

  // Equipment failure (product liability potential)
  const equipmentMultiplier = data.equipmentFailure === 'yes' ? 1.6 : 1.0;

  // Economic damages
  const medicalCosts = parseInt(data.medicalCosts) || 0;
  const futureCareCosts = parseInt(data.futureCareCosts) || 0;
  const lostWages = parseInt(data.lostWages) || 0;
  const economicDamages = medicalCosts + futureCareCosts + lostWages;

  // Calculate compensation
  const multiplier = accidentMultiplier * severityMultiplier * injuryTypeMultiplier * 
                     oshaMultiplier * disabilityMultiplier * ageMultiplier * 
                     thirdPartyMultiplier * equipmentMultiplier;
  
  const min = Math.round((baseMin * multiplier + economicDamages) / 1000) * 1000;
  const max = Math.round((baseMax * multiplier + economicDamages * 1.5) / 1000) * 1000;

  return {
    min: Math.max(min, 50000),
    max: Math.max(max, 150000)
  };
};

const validateForm = (data: ConstructionFormData, step: number): boolean => {
  if (step === 1) {
    return !!(data.accidentType && data.injurySeverity && data.injuryType && data.oshaViolations);
  }
  if (step === 2) {
    return !!(data.permanentDisability && data.age && data.thirdPartyLiability && 
              data.equipmentFailure && data.medicalCosts && data.futureCareCosts && data.lostWages);
  }
  return true;
};

const ConstructionCompensationCalculator = () => {
  const {
    step,
    formData,
    results,
    updateField,
    handleNext,
    handleBack,
    resetForm,
    isStepValid
  } = useCalculatorForm(initialFormData, calculateCompensation, validateForm);

  const progressPercentage = (step / 3) * 100;

  return (
    <>
      <Helmet>
        <title>Construction Accident Calculator | Worker Injury Compensation | Trembach Law</title>
        <meta name="description" content="Calculate construction accident compensation for workplace injuries. Free estimates for OSHA violations and permanent disabilities." />
      </Helmet>

      <main className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
        <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-6 py-4 max-w-4xl">
            <Link to="/calculators" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              <span className="text-sm font-medium">Back to All Calculators</span>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <HardHat className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Construction Accident Compensation Calculator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estimate potential compensation for construction site injuries
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
            <div className="h-2 bg-secondary">
              <div 
                className="h-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>

            <div className="p-8 md:p-12">
              {step < 3 && (
                <div className="mb-8">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <span>Step {step} of 2</span>
                    <span>{Math.round(progressPercentage)}% Complete</span>
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div>
                    <h2 className="text-2xl font-semibold mb-6 text-foreground">Accident Information</h2>
                    
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="accidentType" className="text-base font-medium">
                          Type of Construction Accident *
                        </Label>
                        <Select value={formData.accidentType} onValueChange={(value) => updateField('accidentType', value)}>
                          <SelectTrigger id="accidentType" className="h-12 bg-background">
                            <SelectValue placeholder="Select accident type" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border">
                            <SelectItem value="fall-from-height">Fall from Height</SelectItem>
                            <SelectItem value="scaffolding-collapse">Scaffolding Collapse</SelectItem>
                            <SelectItem value="crane-accident">Crane Accident</SelectItem>
                            <SelectItem value="electrocution">Electrocution</SelectItem>
                            <SelectItem value="struck-by-object">Struck by Falling Object</SelectItem>
                            <SelectItem value="caught-between">Caught Between Objects</SelectItem>
                            <SelectItem value="trench-collapse">Trench Collapse</SelectItem>
                            <SelectItem value="equipment-malfunction">Equipment Malfunction</SelectItem>
                            <SelectItem value="explosion-fire">Explosion/Fire</SelectItem>
                            <SelectItem value="other">Other Accident Type</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="injurySeverity" className="text-base font-medium">
                          Injury Severity *
                        </Label>
                        <Select value={formData.injurySeverity} onValueChange={(value) => updateField('injurySeverity', value)}>
                          <SelectTrigger id="injurySeverity" className="h-12 bg-background">
                            <SelectValue placeholder="Select severity" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border">
                            <SelectItem value="minor">Minor (Full Recovery Expected)</SelectItem>
                            <SelectItem value="moderate">Moderate (Some Limitations)</SelectItem>
                            <SelectItem value="serious">Serious (Significant Impairment)</SelectItem>
                            <SelectItem value="severe">Severe (Major Disability)</SelectItem>
                            <SelectItem value="catastrophic">Catastrophic (Life-Altering)</SelectItem>
                            <SelectItem value="fatal">Fatal</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="injuryType" className="text-base font-medium">
                          Type of Injury *
                        </Label>
                        <Select value={formData.injuryType} onValueChange={(value) => updateField('injuryType', value)}>
                          <SelectTrigger id="injuryType" className="h-12 bg-background">
                            <SelectValue placeholder="Select injury type" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border">
                            <SelectItem value="traumatic-brain-injury">Traumatic Brain Injury</SelectItem>
                            <SelectItem value="spinal-cord-injury">Spinal Cord Injury</SelectItem>
                            <SelectItem value="amputation">Amputation</SelectItem>
                            <SelectItem value="severe-burns">Severe Burns</SelectItem>
                            <SelectItem value="multiple-fractures">Multiple Fractures</SelectItem>
                            <SelectItem value="crush-injury">Crush Injury</SelectItem>
                            <SelectItem value="internal-injuries">Internal Injuries</SelectItem>
                            <SelectItem value="back-neck-injury">Back/Neck Injury</SelectItem>
                            <SelectItem value="other">Other Injury Type</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="oshaViolations" className="text-base font-medium">
                          Were There OSHA Safety Violations? *
                        </Label>
                        <Select value={formData.oshaViolations} onValueChange={(value) => updateField('oshaViolations', value)}>
                          <SelectTrigger id="oshaViolations" className="h-12 bg-background">
                            <SelectValue placeholder="Select violation status" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border">
                            <SelectItem value="willful-violations">Willful Violations</SelectItem>
                            <SelectItem value="serious-violations">Serious Violations</SelectItem>
                            <SelectItem value="repeat-violations">Repeat Violations</SelectItem>
                            <SelectItem value="multiple-violations">Multiple Violations</SelectItem>
                            <SelectItem value="no-violations">No Known Violations</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div>
                    <h2 className="text-2xl font-semibold mb-6 text-foreground">Disability & Economic Details</h2>
                    
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="permanentDisability" className="text-base font-medium">
                          Disability Status *
                        </Label>
                        <Select value={formData.permanentDisability} onValueChange={(value) => updateField('permanentDisability', value)}>
                          <SelectTrigger id="permanentDisability" className="h-12 bg-background">
                            <SelectValue placeholder="Select disability status" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border">
                            <SelectItem value="total-permanent">Total Permanent Disability</SelectItem>
                            <SelectItem value="partial-permanent">Partial Permanent Disability</SelectItem>
                            <SelectItem value="temporary-total">Temporary Total Disability</SelectItem>
                            <SelectItem value="temporary-partial">Temporary Partial Disability</SelectItem>
                            <SelectItem value="none">No Permanent Disability</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="age" className="text-base font-medium">
                          Your Age at Time of Accident *
                        </Label>
                        <Select value={formData.age} onValueChange={(value) => updateField('age', value)}>
                          <SelectTrigger id="age" className="h-12 bg-background">
                            <SelectValue placeholder="Select age range" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border">
                            <SelectItem value="under-30">Under 30</SelectItem>
                            <SelectItem value="30-40">30-40</SelectItem>
                            <SelectItem value="41-50">41-50</SelectItem>
                            <SelectItem value="51-60">51-60</SelectItem>
                            <SelectItem value="over-60">Over 60</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="thirdPartyLiability" className="text-base font-medium">
                          Third-Party Liability (Non-Employer)? *
                        </Label>
                        <Select value={formData.thirdPartyLiability} onValueChange={(value) => updateField('thirdPartyLiability', value)}>
                          <SelectTrigger id="thirdPartyLiability" className="h-12 bg-background">
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border">
                            <SelectItem value="yes">Yes - Third Party Involved</SelectItem>
                            <SelectItem value="no">No - Employer Only</SelectItem>
                            <SelectItem value="unknown">Unknown/Investigating</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="equipmentFailure" className="text-base font-medium">
                          Equipment/Product Failure Involved? *
                        </Label>
                        <Select value={formData.equipmentFailure} onValueChange={(value) => updateField('equipmentFailure', value)}>
                          <SelectTrigger id="equipmentFailure" className="h-12 bg-background">
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border">
                            <SelectItem value="yes">Yes - Equipment Failed</SelectItem>
                            <SelectItem value="no">No Equipment Failure</SelectItem>
                            <SelectItem value="unknown">Unknown/Under Investigation</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="medicalCosts" className="text-base font-medium">
                          Past Medical Costs *
                        </Label>
                        <Select value={formData.medicalCosts} onValueChange={(value) => updateField('medicalCosts', value)}>
                          <SelectTrigger id="medicalCosts" className="h-12 bg-background">
                            <SelectValue placeholder="Select amount" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border">
                            <SelectItem value="25000">Under $25,000</SelectItem>
                            <SelectItem value="75000">$25,000 - $100,000</SelectItem>
                            <SelectItem value="150000">$100,000 - $250,000</SelectItem>
                            <SelectItem value="350000">$250,000 - $500,000</SelectItem>
                            <SelectItem value="750000">Over $500,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="futureCareCosts" className="text-base font-medium">
                          Estimated Future Care Costs *
                        </Label>
                        <Select value={formData.futureCareCosts} onValueChange={(value) => updateField('futureCareCosts', value)}>
                          <SelectTrigger id="futureCareCosts" className="h-12 bg-background">
                            <SelectValue placeholder="Select amount" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border">
                            <SelectItem value="0">None Expected</SelectItem>
                            <SelectItem value="50000">Under $50,000</SelectItem>
                            <SelectItem value="150000">$50,000 - $200,000</SelectItem>
                            <SelectItem value="350000">$200,000 - $500,000</SelectItem>
                            <SelectItem value="750000">$500,000 - $1,000,000</SelectItem>
                            <SelectItem value="1500000">Over $1,000,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="lostWages" className="text-base font-medium">
                          Lost Wages & Future Income Loss *
                        </Label>
                        <Select value={formData.lostWages} onValueChange={(value) => updateField('lostWages', value)}>
                          <SelectTrigger id="lostWages" className="h-12 bg-background">
                            <SelectValue placeholder="Select amount" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border">
                            <SelectItem value="25000">Under $25,000</SelectItem>
                            <SelectItem value="75000">$25,000 - $100,000</SelectItem>
                            <SelectItem value="150000">$100,000 - $250,000</SelectItem>
                            <SelectItem value="350000">$250,000 - $500,000</SelectItem>
                            <SelectItem value="750000">Over $500,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && results && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <ResultsDisplay
                    min={results.min}
                    max={results.max}
                    title="Estimated Construction Accident Compensation Range"
                    subtitle="Based on accident type, injury severity, OSHA violations, and economic damages"
                    damageCategories={[
                      {
                        title: "Economic Damages",
                        description: "Medical expenses, future care, lost wages and diminished earning capacity"
                      },
                      {
                        title: "Non-Economic Damages",
                        description: "Pain and suffering, disability, loss of quality of life"
                      },
                      {
                        title: "Third-Party Claims",
                        description: "Additional compensation beyond workers' compensation for third-party negligence"
                      }
                    ]}
                    disclaimer="This estimate is for informational purposes only. Construction accident cases often involve both workers' compensation benefits and potential third-party liability claims. Actual compensation depends on the specific circumstances, OSHA violations, third-party liability, equipment failures, permanent disability ratings, and jurisdiction. Many construction accidents allow claims beyond workers' comp limits when third parties or product defects are involved. Consult with an experienced construction accident attorney to evaluate your specific case."
                    ctaText="Speak with a Construction Accident Attorney"
                  />
                  
                  <div className="mt-8 text-center">
                    <Button 
                      onClick={resetForm}
                      variant="outline"
                      size="lg"
                      className="min-w-[200px]"
                    >
                      Calculate Another Case
                    </Button>
                  </div>
                </div>
              )}

              {step < 3 && (
                <FormNavigation
                  currentStep={step}
                  totalSteps={3}
                  isValid={isStepValid()}
                  onBack={handleBack}
                  onNext={handleNext}
                  nextButtonText={step === 2 ? 'Calculate Compensation' : 'Continue'}
                />
              )}
            </div>
          </div>

          <div className="mt-8 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-blue-900 dark:text-blue-100">
                <p className="font-semibold mb-2">Important Information About Construction Accident Claims</p>
                <p>
                  Construction workers may have multiple avenues for compensation: workers' compensation benefits, 
                  third-party liability claims against contractors/subcontractors, product liability claims for 
                  defective equipment, and OSHA violation claims. Third-party claims can provide compensation for 
                  pain and suffering beyond workers' comp limits. Time limits apply for filing claims.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ConstructionCompensationCalculator;
