import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Construction, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCalculatorForm, CalculatorFormData, CalculatorResults } from '@/hooks/useCalculatorForm';
import { FormNavigation } from '@/components/calculator/FormNavigation';
import { CalculatorResults as ResultsDisplay } from '@/components/calculator/CalculatorResults';

interface CraneFormData extends CalculatorFormData {
  craneType: string;
  accidentCause: string;
  injurySeverity: string;
  injuryType: string;
  safetyViolations: string;
  operatorCertified: string;
  equipmentMaintenance: string;
  permanentDisability: string;
  age: string;
  medicalCosts: string;
  futureCareCosts: string;
  lostWages: string;
}

const initialFormData: CraneFormData = {
  craneType: '',
  accidentCause: '',
  injurySeverity: '',
  injuryType: '',
  safetyViolations: '',
  operatorCertified: '',
  equipmentMaintenance: '',
  permanentDisability: '',
  age: '',
  medicalCosts: '',
  futureCareCosts: '',
  lostWages: ''
};

const calculateCompensation = (data: CraneFormData): CalculatorResults => {
  let baseMin = 150000;
  let baseMax = 300000;

  // Crane type multipliers (heavier equipment = higher risk)
  const craneMultipliers: Record<string, number> = {
    'tower-crane': 3.2,
    'mobile-crane': 2.8,
    'overhead-crane': 2.5,
    'crawler-crane': 2.9,
    'rough-terrain': 2.6,
    'all-terrain': 2.7,
    'other': 2.3
  };
  const craneMultiplier = craneMultipliers[data.craneType] || 1;

  // Accident cause multipliers
  const causeMultipliers: Record<string, number> = {
    'crane-collapse': 3.5,
    'load-dropped': 3.0,
    'boom-failure': 3.2,
    'struck-by-load': 2.8,
    'caught-between': 3.1,
    'electrocution-contact': 2.9,
    'overloading': 2.7,
    'operator-error': 2.4,
    'other': 2.0
  };
  const causeMultiplier = causeMultipliers[data.accidentCause] || 1;

  // Injury severity multipliers
  const severityMultipliers: Record<string, number> = {
    'minor': 0.9,
    'moderate': 1.5,
    'serious': 2.3,
    'severe': 3.1,
    'catastrophic': 4.0,
    'fatal': 4.5
  };
  const severityMultiplier = severityMultipliers[data.injurySeverity] || 1;

  // Injury type multipliers
  const injuryTypeMultipliers: Record<string, number> = {
    'traumatic-brain-injury': 3.3,
    'spinal-cord-injury': 3.6,
    'crush-injury': 3.0,
    'amputation': 3.1,
    'multiple-fractures': 2.5,
    'internal-injuries': 2.7,
    'severe-burns': 2.8,
    'paralysis': 4.0,
    'other': 1.8
  };
  const injuryTypeMultiplier = injuryTypeMultipliers[data.injuryType] || 1;

  // Safety violations (critical in crane accidents)
  const violationMultipliers: Record<string, number> = {
    'willful-violations': 2.9,
    'serious-violations': 2.5,
    'repeat-violations': 2.7,
    'load-capacity-exceeded': 2.6,
    'improper-assembly': 2.8,
    'no-violations': 1.0
  };
  const violationMultiplier = violationMultipliers[data.safetyViolations] || 1;

  // Operator certification
  const operatorMultiplier = data.operatorCertified === 'no' ? 2.2 : 
                              data.operatorCertified === 'expired' ? 1.8 : 1.0;

  // Equipment maintenance
  const maintenanceMultiplier = data.equipmentMaintenance === 'inadequate' ? 2.0 : 
                                 data.equipmentMaintenance === 'no-records' ? 2.3 : 1.0;

  // Permanent disability multipliers
  const disabilityMultipliers: Record<string, number> = {
    'total-permanent': 3.4,
    'partial-permanent': 2.6,
    'temporary-total': 1.7,
    'temporary-partial': 1.4,
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
  const multiplier = craneMultiplier * causeMultiplier * severityMultiplier * 
                     injuryTypeMultiplier * violationMultiplier * operatorMultiplier * 
                     maintenanceMultiplier * disabilityMultiplier * ageMultiplier;
  
  const min = Math.round((baseMin * multiplier + economicDamages) / 1000) * 1000;
  const max = Math.round((baseMax * multiplier + economicDamages * 1.5) / 1000) * 1000;

  return {
    min: Math.max(min, 100000),
    max: Math.max(max, 250000)
  };
};

const validateForm = (data: CraneFormData, step: number): boolean => {
  if (step === 1) {
    return !!(data.craneType && data.accidentCause && data.injurySeverity && 
              data.injuryType && data.safetyViolations);
  }
  if (step === 2) {
    return !!(data.operatorCertified && data.equipmentMaintenance && data.permanentDisability && 
              data.age && data.medicalCosts && data.futureCareCosts && data.lostWages);
  }
  return true;
};

const CraneAccidentsCompensationCalculator = () => {
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
        <title>Crane Accident Calculator | Construction Injury Compensation | Trembach Law</title>
        <meta name="description" content="Calculate crane accident compensation for construction injuries. Free OSHA violation estimates." />
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
              <Construction className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Crane Accident Compensation Calculator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estimate potential compensation for crane-related construction injuries
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
                    <h2 className="text-2xl font-semibold mb-6 text-foreground">Crane Accident Details</h2>
                    
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="craneType" className="text-base font-medium">
                          Type of Crane Involved *
                        </Label>
                        <Select value={formData.craneType} onValueChange={(value) => updateField('craneType', value)}>
                          <SelectTrigger id="craneType" className="h-12 bg-background">
                            <SelectValue placeholder="Select crane type" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border">
                            <SelectItem value="tower-crane">Tower Crane</SelectItem>
                            <SelectItem value="mobile-crane">Mobile Crane</SelectItem>
                            <SelectItem value="overhead-crane">Overhead Crane</SelectItem>
                            <SelectItem value="crawler-crane">Crawler Crane</SelectItem>
                            <SelectItem value="rough-terrain">Rough Terrain Crane</SelectItem>
                            <SelectItem value="all-terrain">All Terrain Crane</SelectItem>
                            <SelectItem value="other">Other Crane Type</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="accidentCause" className="text-base font-medium">
                          Primary Cause of Accident *
                        </Label>
                        <Select value={formData.accidentCause} onValueChange={(value) => updateField('accidentCause', value)}>
                          <SelectTrigger id="accidentCause" className="h-12 bg-background">
                            <SelectValue placeholder="Select accident cause" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border">
                            <SelectItem value="crane-collapse">Crane Collapse</SelectItem>
                            <SelectItem value="load-dropped">Load Dropped</SelectItem>
                            <SelectItem value="boom-failure">Boom Failure</SelectItem>
                            <SelectItem value="struck-by-load">Struck by Load</SelectItem>
                            <SelectItem value="caught-between">Caught Between Objects</SelectItem>
                            <SelectItem value="electrocution-contact">Electrocution/Power Line Contact</SelectItem>
                            <SelectItem value="overloading">Overloading</SelectItem>
                            <SelectItem value="operator-error">Operator Error</SelectItem>
                            <SelectItem value="other">Other Cause</SelectItem>
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
                            <SelectItem value="crush-injury">Crush Injury</SelectItem>
                            <SelectItem value="amputation">Amputation</SelectItem>
                            <SelectItem value="multiple-fractures">Multiple Fractures</SelectItem>
                            <SelectItem value="internal-injuries">Internal Injuries</SelectItem>
                            <SelectItem value="severe-burns">Severe Burns</SelectItem>
                            <SelectItem value="paralysis">Paralysis</SelectItem>
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
                            <SelectItem value="load-capacity-exceeded">Load Capacity Exceeded</SelectItem>
                            <SelectItem value="improper-assembly">Improper Crane Assembly</SelectItem>
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
                    <h2 className="text-2xl font-semibold mb-6 text-foreground">Operator & Equipment Details</h2>
                    
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="operatorCertified" className="text-base font-medium">
                          Was Crane Operator Certified? *
                        </Label>
                        <Select value={formData.operatorCertified} onValueChange={(value) => updateField('operatorCertified', value)}>
                          <SelectTrigger id="operatorCertified" className="h-12 bg-background">
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border">
                            <SelectItem value="yes">Yes - Properly Certified</SelectItem>
                            <SelectItem value="expired">Certification Expired</SelectItem>
                            <SelectItem value="no">No - Not Certified</SelectItem>
                            <SelectItem value="unknown">Unknown</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="equipmentMaintenance" className="text-base font-medium">
                          Equipment Maintenance Status *
                        </Label>
                        <Select value={formData.equipmentMaintenance} onValueChange={(value) => updateField('equipmentMaintenance', value)}>
                          <SelectTrigger id="equipmentMaintenance" className="h-12 bg-background">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border">
                            <SelectItem value="adequate">Adequate Maintenance Records</SelectItem>
                            <SelectItem value="inadequate">Inadequate Maintenance</SelectItem>
                            <SelectItem value="no-records">No Maintenance Records</SelectItem>
                            <SelectItem value="unknown">Unknown</SelectItem>
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
                    title="Estimated Crane Accident Compensation Range"
                    subtitle="Based on crane type, accident cause, injury severity, and safety violations"
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
                        title: "Third-Party & Product Liability",
                        description: "Additional compensation for equipment defects, operator negligence, and third-party liability"
                      }
                    ]}
                    disclaimer="This estimate is for informational purposes only. Crane accident cases often involve complex liability including general contractors, crane rental companies, equipment manufacturers, crane operators, and maintenance providers. Actual compensation depends on crane type, accident cause, operator certification, equipment maintenance records, safety violations, and permanent disability ratings. These cases frequently allow claims beyond workers' compensation limits when third-party negligence, equipment defects, or OSHA violations are involved. Federal OSHA crane regulations (29 CFR 1926 Subpart CC) set strict standards. Consult with an experienced construction accident attorney to evaluate your specific case."
                    ctaText="Speak with a Crane Accident Attorney"
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
                <p className="font-semibold mb-2">Important Information About Crane Accident Claims</p>
                <p>
                  Crane accidents are among the most serious construction incidents, often resulting in catastrophic 
                  injuries or fatalities. Common causes include operator error, improper assembly, inadequate 
                  maintenance, overloading, and power line contact. These cases typically involve multiple liable 
                  parties and often include product liability claims against crane manufacturers. OSHA requires 
                  certified operators and regular inspections. Third-party liability claims allow recovery beyond 
                  workers' comp limits. Time limits apply for filing claims.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CraneAccidentsCompensationCalculator;
