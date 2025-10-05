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

interface ScaffoldingFormData extends CalculatorFormData {
  heightOfFall: string;
  landingSurface: string;
  injurySeverity: string;
  injuryType: string;
  safetyViolations: string;
  guardrailsProvided: string;
  scaffoldType: string;
  permanentDisability: string;
  age: string;
  medicalCosts: string;
  futureCareCosts: string;
  lostWages: string;
}

const initialFormData: ScaffoldingFormData = {
  heightOfFall: '',
  landingSurface: '',
  injurySeverity: '',
  injuryType: '',
  safetyViolations: '',
  guardrailsProvided: '',
  scaffoldType: '',
  permanentDisability: '',
  age: '',
  medicalCosts: '',
  futureCareCosts: '',
  lostWages: ''
};

const calculateCompensation = (data: ScaffoldingFormData): CalculatorResults => {
  let baseMin = 120000;
  let baseMax = 250000;

  // Height of fall multipliers (critical factor)
  const heightMultipliers: Record<string, number> = {
    'under-6-feet': 1.2,
    '6-10-feet': 1.8,
    '11-20-feet': 2.5,
    '21-30-feet': 3.0,
    'over-30-feet': 3.5
  };
  const heightMultiplier = heightMultipliers[data.heightOfFall] || 1;

  // Landing surface multipliers
  const surfaceMultipliers: Record<string, number> = {
    'concrete': 1.5,
    'asphalt': 1.4,
    'metal': 1.3,
    'wood': 1.2,
    'dirt-gravel': 1.1,
    'safety-net': 0.8
  };
  const surfaceMultiplier = surfaceMultipliers[data.landingSurface] || 1;

  // Injury severity multipliers
  const severityMultipliers: Record<string, number> = {
    'minor': 0.8,
    'moderate': 1.4,
    'serious': 2.2,
    'severe': 3.0,
    'catastrophic': 3.8,
    'fatal': 4.5
  };
  const severityMultiplier = severityMultipliers[data.injurySeverity] || 1;

  // Injury type multipliers
  const injuryTypeMultipliers: Record<string, number> = {
    'traumatic-brain-injury': 3.2,
    'spinal-cord-injury': 3.5,
    'multiple-fractures': 2.3,
    'crush-injury': 2.6,
    'internal-injuries': 2.5,
    'amputation': 2.9,
    'paralysis': 3.8,
    'back-neck-injury': 2.0,
    'other': 1.5
  };
  const injuryTypeMultiplier = injuryTypeMultipliers[data.injuryType] || 1;

  // Safety violations (crucial for liability)
  const violationMultipliers: Record<string, number> = {
    'willful-violations': 2.8,
    'serious-violations': 2.3,
    'repeat-violations': 2.5,
    'no-fall-protection': 2.4,
    'improper-scaffold': 2.2,
    'no-violations': 1.0
  };
  const violationMultiplier = violationMultipliers[data.safetyViolations] || 1;

  // Guardrails provided
  const guardrailMultiplier = data.guardrailsProvided === 'no' ? 1.6 : 
                               data.guardrailsProvided === 'inadequate' ? 1.4 : 1.0;

  // Scaffold type multipliers
  const scaffoldMultipliers: Record<string, number> = {
    'suspended': 1.5,
    'supported': 1.2,
    'mobile': 1.4,
    'aerial-lift': 1.3,
    'other': 1.1
  };
  const scaffoldMultiplier = scaffoldMultipliers[data.scaffoldType] || 1;

  // Permanent disability multipliers
  const disabilityMultipliers: Record<string, number> = {
    'total-permanent': 3.2,
    'partial-permanent': 2.4,
    'temporary-total': 1.6,
    'temporary-partial': 1.3,
    'none': 1.0
  };
  const disabilityMultiplier = disabilityMultipliers[data.permanentDisability] || 1;

  // Age-based adjustments
  const ageMultipliers: Record<string, number> = {
    'under-30': 1.7,
    '30-40': 1.5,
    '41-50': 1.3,
    '51-60': 1.1,
    'over-60': 0.9
  };
  const ageMultiplier = ageMultipliers[data.age] || 1;

  // Economic damages
  const medicalCosts = parseInt(data.medicalCosts) || 0;
  const futureCareCosts = parseInt(data.futureCareCosts) || 0;
  const lostWages = parseInt(data.lostWages) || 0;
  const economicDamages = medicalCosts + futureCareCosts + lostWages;

  // Calculate compensation
  const multiplier = heightMultiplier * surfaceMultiplier * severityMultiplier * 
                     injuryTypeMultiplier * violationMultiplier * guardrailMultiplier * 
                     scaffoldMultiplier * disabilityMultiplier * ageMultiplier;
  
  const min = Math.round((baseMin * multiplier + economicDamages) / 1000) * 1000;
  const max = Math.round((baseMax * multiplier + economicDamages * 1.5) / 1000) * 1000;

  return {
    min: Math.max(min, 75000),
    max: Math.max(max, 200000)
  };
};

const validateForm = (data: ScaffoldingFormData, step: number): boolean => {
  if (step === 1) {
    return !!(data.heightOfFall && data.landingSurface && data.injurySeverity && 
              data.injuryType && data.safetyViolations);
  }
  if (step === 2) {
    return !!(data.guardrailsProvided && data.scaffoldType && data.permanentDisability && 
              data.age && data.medicalCosts && data.futureCareCosts && data.lostWages);
  }
  return true;
};

const ScaffoldingFallsCompensationCalculator = () => {
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
        <title>Scaffolding Fall Calculator | Height Injury Compensation | Trembach Law</title>
        <meta name="description" content="Calculate scaffolding fall compensation for construction height injuries. Free OSHA violation estimates." />
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
              Scaffolding Fall Compensation Calculator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estimate potential compensation for scaffolding falls and height-related injuries
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
                    <h2 className="text-2xl font-semibold mb-6 text-foreground">Fall & Injury Details</h2>
                    
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="heightOfFall" className="text-base font-medium">
                          Height of Fall *
                        </Label>
                        <Select value={formData.heightOfFall} onValueChange={(value) => updateField('heightOfFall', value)}>
                          <SelectTrigger id="heightOfFall" className="h-12 bg-background">
                            <SelectValue placeholder="Select fall height" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border">
                            <SelectItem value="under-6-feet">Under 6 Feet</SelectItem>
                            <SelectItem value="6-10-feet">6-10 Feet</SelectItem>
                            <SelectItem value="11-20-feet">11-20 Feet</SelectItem>
                            <SelectItem value="21-30-feet">21-30 Feet</SelectItem>
                            <SelectItem value="over-30-feet">Over 30 Feet</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="landingSurface" className="text-base font-medium">
                          Landing Surface *
                        </Label>
                        <Select value={formData.landingSurface} onValueChange={(value) => updateField('landingSurface', value)}>
                          <SelectTrigger id="landingSurface" className="h-12 bg-background">
                            <SelectValue placeholder="Select landing surface" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border">
                            <SelectItem value="concrete">Concrete</SelectItem>
                            <SelectItem value="asphalt">Asphalt</SelectItem>
                            <SelectItem value="metal">Metal/Steel</SelectItem>
                            <SelectItem value="wood">Wood/Lumber</SelectItem>
                            <SelectItem value="dirt-gravel">Dirt/Gravel</SelectItem>
                            <SelectItem value="safety-net">Safety Net (Caught)</SelectItem>
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
                          Primary Injury Type *
                        </Label>
                        <Select value={formData.injuryType} onValueChange={(value) => updateField('injuryType', value)}>
                          <SelectTrigger id="injuryType" className="h-12 bg-background">
                            <SelectValue placeholder="Select injury type" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border">
                            <SelectItem value="traumatic-brain-injury">Traumatic Brain Injury</SelectItem>
                            <SelectItem value="spinal-cord-injury">Spinal Cord Injury</SelectItem>
                            <SelectItem value="multiple-fractures">Multiple Fractures</SelectItem>
                            <SelectItem value="crush-injury">Crush Injury</SelectItem>
                            <SelectItem value="internal-injuries">Internal Injuries</SelectItem>
                            <SelectItem value="amputation">Amputation</SelectItem>
                            <SelectItem value="paralysis">Paralysis</SelectItem>
                            <SelectItem value="back-neck-injury">Back/Neck Injury</SelectItem>
                            <SelectItem value="other">Other Injury</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="safetyViolations" className="text-base font-medium">
                          Safety Violations Present *
                        </Label>
                        <Select value={formData.safetyViolations} onValueChange={(value) => updateField('safetyViolations', value)}>
                          <SelectTrigger id="safetyViolations" className="h-12 bg-background">
                            <SelectValue placeholder="Select violation type" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border">
                            <SelectItem value="willful-violations">Willful OSHA Violations</SelectItem>
                            <SelectItem value="serious-violations">Serious OSHA Violations</SelectItem>
                            <SelectItem value="repeat-violations">Repeat Violations</SelectItem>
                            <SelectItem value="no-fall-protection">No Fall Protection Provided</SelectItem>
                            <SelectItem value="improper-scaffold">Improper Scaffold Assembly</SelectItem>
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
                    <h2 className="text-2xl font-semibold mb-6 text-foreground">Safety Equipment & Economic Details</h2>
                    
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="guardrailsProvided" className="text-base font-medium">
                          Were Guardrails Provided? *
                        </Label>
                        <Select value={formData.guardrailsProvided} onValueChange={(value) => updateField('guardrailsProvided', value)}>
                          <SelectTrigger id="guardrailsProvided" className="h-12 bg-background">
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border">
                            <SelectItem value="yes">Yes - Adequate Guardrails</SelectItem>
                            <SelectItem value="inadequate">Yes - But Inadequate</SelectItem>
                            <SelectItem value="no">No Guardrails Provided</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="scaffoldType" className="text-base font-medium">
                          Type of Scaffolding *
                        </Label>
                        <Select value={formData.scaffoldType} onValueChange={(value) => updateField('scaffoldType', value)}>
                          <SelectTrigger id="scaffoldType" className="h-12 bg-background">
                            <SelectValue placeholder="Select scaffold type" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border">
                            <SelectItem value="suspended">Suspended Scaffolding</SelectItem>
                            <SelectItem value="supported">Supported Scaffolding</SelectItem>
                            <SelectItem value="mobile">Mobile/Rolling Scaffolding</SelectItem>
                            <SelectItem value="aerial-lift">Aerial Lift/Boom Lift</SelectItem>
                            <SelectItem value="other">Other Type</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

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
                          Your Age at Time of Fall *
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
                    title="Estimated Scaffolding Fall Compensation Range"
                    subtitle="Based on fall height, injury severity, safety violations, and economic damages"
                    damageCategories={[
                      {
                        title: "Economic Damages",
                        description: "Medical expenses, future care, lost wages and diminished earning capacity"
                      },
                      {
                        title: "Non-Economic Damages",
                        description: "Pain and suffering, permanent disability, loss of quality of life"
                      },
                      {
                        title: "Third-Party Claims",
                        description: "Additional compensation beyond workers' comp for third-party negligence"
                      }
                    ]}
                    disclaimer="This estimate is for informational purposes only. Scaffolding fall cases often involve multiple liable parties including general contractors, subcontractors, equipment manufacturers, and property owners. Actual compensation depends on fall height, landing surface, safety violations, permanent disability ratings, and third-party liability. Falls from heights often allow claims beyond workers' compensation limits when OSHA violations, lack of fall protection, or equipment failures are involved. California Labor Code Section 1720 provides additional protections for construction workers. Consult with an experienced construction accident attorney to evaluate your specific case."
                    ctaText="Speak with a Scaffolding Fall Attorney"
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
                <p className="font-semibold mb-2">Important Information About Scaffolding Fall Claims</p>
                <p>
                  Falls from scaffolding are among the leading causes of construction deaths and severe injuries. 
                  OSHA requires fall protection at heights above 6 feet. Violations often involve lack of guardrails, 
                  improper scaffolding assembly, inadequate planking, or failure to provide personal fall arrest systems. 
                  These cases frequently involve third-party liability beyond workers' comp, allowing recovery for pain 
                  and suffering. Time limits apply for filing claims.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ScaffoldingFallsCompensationCalculator;
