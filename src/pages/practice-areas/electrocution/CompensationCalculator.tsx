import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCalculatorForm, CalculatorFormData, CalculatorResults } from '@/hooks/useCalculatorForm';
import { FormNavigation } from '@/components/calculator/FormNavigation';
import { CalculatorResults as ResultsDisplay } from '@/components/calculator/CalculatorResults';

interface ElectrocutionFormData extends CalculatorFormData {
  voltage: string;
  contactType: string;
  injurySeverity: string;
  burnDegree: string;
  cardiacIssues: string;
  neurologicalDamage: string;
  safetyViolations: string;
  permanentDisability: string;
  age: string;
  medicalCosts: string;
  futureCareCosts: string;
  lostWages: string;
}

const initialFormData: ElectrocutionFormData = {
  voltage: '',
  contactType: '',
  injurySeverity: '',
  burnDegree: '',
  cardiacIssues: '',
  neurologicalDamage: '',
  safetyViolations: '',
  permanentDisability: '',
  age: '',
  medicalCosts: '',
  futureCareCosts: '',
  lostWages: ''
};

const calculateCompensation = (data: ElectrocutionFormData): CalculatorResults => {
  let baseMin = 140000;
  let baseMax = 280000;

  // Voltage multipliers (higher voltage = more severe)
  const voltageMultipliers: Record<string, number> = {
    'low-under-120v': 1.3,
    '120-240v': 1.8,
    '240-480v': 2.4,
    '480-1000v': 2.9,
    'high-over-1000v': 3.5,
    'arc-flash': 3.2
  };
  const voltageMultiplier = voltageMultipliers[data.voltage] || 1;

  // Contact type multipliers
  const contactMultipliers: Record<string, number> = {
    'direct-contact': 2.0,
    'power-line-contact': 2.8,
    'equipment-fault': 2.3,
    'wet-conditions': 2.5,
    'metal-object-contact': 2.1,
    'arc-flash-explosion': 3.0,
    'other': 1.7
  };
  const contactMultiplier = contactMultipliers[data.contactType] || 1;

  // Injury severity multipliers
  const severityMultipliers: Record<string, number> = {
    'minor': 1.0,
    'moderate': 1.6,
    'serious': 2.4,
    'severe': 3.2,
    'catastrophic': 4.0,
    'fatal': 4.5
  };
  const severityMultiplier = severityMultipliers[data.injurySeverity] || 1;

  // Burn degree multipliers (electrical burns are particularly severe)
  const burnMultipliers: Record<string, number> = {
    'first-degree': 1.2,
    'second-degree': 1.7,
    'third-degree': 2.6,
    'fourth-degree': 3.3,
    'arc-flash-burns': 3.0,
    'no-burns': 1.0
  };
  const burnMultiplier = burnMultipliers[data.burnDegree] || 1;

  // Cardiac issues multipliers
  const cardiacMultipliers: Record<string, number> = {
    'cardiac-arrest': 3.5,
    'arrhythmia-ongoing': 2.8,
    'arrhythmia-resolved': 2.0,
    'heart-damage': 3.0,
    'none': 1.0
  };
  const cardiacMultiplier = cardiacMultipliers[data.cardiacIssues] || 1;

  // Neurological damage multipliers (often hidden but serious)
  const neurologicalMultipliers: Record<string, number> = {
    'severe-neurological': 3.2,
    'moderate-neurological': 2.5,
    'mild-neurological': 1.8,
    'peripheral-nerve': 2.0,
    'none': 1.0
  };
  const neurologicalMultiplier = neurologicalMultipliers[data.neurologicalDamage] || 1;

  // Safety violations
  const violationMultipliers: Record<string, number> = {
    'willful-violations': 2.7,
    'serious-violations': 2.3,
    'improper-grounding': 2.5,
    'no-lockout-tagout': 2.6,
    'inadequate-ppe': 2.2,
    'no-violations': 1.0
  };
  const violationMultiplier = violationMultipliers[data.safetyViolations] || 1;

  // Permanent disability multipliers
  const disabilityMultipliers: Record<string, number> = {
    'total-permanent': 3.3,
    'partial-permanent': 2.5,
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
  const multiplier = voltageMultiplier * contactMultiplier * severityMultiplier * 
                     burnMultiplier * cardiacMultiplier * neurologicalMultiplier * 
                     violationMultiplier * disabilityMultiplier * ageMultiplier;
  
  const min = Math.round((baseMin * multiplier + economicDamages) / 1000) * 1000;
  const max = Math.round((baseMax * multiplier + economicDamages * 1.5) / 1000) * 1000;

  return {
    min: Math.max(min, 80000),
    max: Math.max(max, 220000)
  };
};

const validateForm = (data: ElectrocutionFormData, step: number): boolean => {
  if (step === 1) {
    return !!(data.voltage && data.contactType && data.injurySeverity && 
              data.burnDegree && data.cardiacIssues);
  }
  if (step === 2) {
    return !!(data.neurologicalDamage && data.safetyViolations && data.permanentDisability && 
              data.age && data.medicalCosts && data.futureCareCosts && data.lostWages);
  }
  return true;
};

const ElectrocutionCompensationCalculator = () => {
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
        <title>Electrocution Calculator | Electrical Injury Compensation | Trembach Law</title>
        <meta name="description" content="Calculate electrocution compensation for electrical injuries. Free burn and cardiac arrest estimates." />
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
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Electrocution Compensation Calculator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estimate potential compensation for electrical shock and electrocution injuries
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
                    <h2 className="text-2xl font-semibold mb-6 text-foreground">Electrical Exposure & Injury Details</h2>
                    
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="voltage" className="text-base font-medium">
                          Voltage Level *
                        </Label>
                        <Select value={formData.voltage} onValueChange={(value) => updateField('voltage', value)}>
                          <SelectTrigger id="voltage" className="h-12 bg-background">
                            <SelectValue placeholder="Select voltage level" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border">
                            <SelectItem value="low-under-120v">Low Voltage (Under 120V)</SelectItem>
                            <SelectItem value="120-240v">120-240V (Standard Household)</SelectItem>
                            <SelectItem value="240-480v">240-480V (Commercial/Industrial)</SelectItem>
                            <SelectItem value="480-1000v">480-1000V (Heavy Industrial)</SelectItem>
                            <SelectItem value="high-over-1000v">High Voltage (Over 1000V)</SelectItem>
                            <SelectItem value="arc-flash">Arc Flash Event</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contactType" className="text-base font-medium">
                          Type of Electrical Contact *
                        </Label>
                        <Select value={formData.contactType} onValueChange={(value) => updateField('contactType', value)}>
                          <SelectTrigger id="contactType" className="h-12 bg-background">
                            <SelectValue placeholder="Select contact type" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border">
                            <SelectItem value="direct-contact">Direct Contact with Live Wire</SelectItem>
                            <SelectItem value="power-line-contact">Power Line Contact</SelectItem>
                            <SelectItem value="equipment-fault">Equipment/Tool Fault</SelectItem>
                            <SelectItem value="wet-conditions">Contact in Wet Conditions</SelectItem>
                            <SelectItem value="metal-object-contact">Metal Object Contact</SelectItem>
                            <SelectItem value="arc-flash-explosion">Arc Flash Explosion</SelectItem>
                            <SelectItem value="other">Other Contact Type</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="injurySeverity" className="text-base font-medium">
                          Overall Injury Severity *
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
                        <Label htmlFor="burnDegree" className="text-base font-medium">
                          Burn Severity *
                        </Label>
                        <Select value={formData.burnDegree} onValueChange={(value) => updateField('burnDegree', value)}>
                          <SelectTrigger id="burnDegree" className="h-12 bg-background">
                            <SelectValue placeholder="Select burn degree" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border">
                            <SelectItem value="first-degree">First Degree Burns</SelectItem>
                            <SelectItem value="second-degree">Second Degree Burns</SelectItem>
                            <SelectItem value="third-degree">Third Degree Burns</SelectItem>
                            <SelectItem value="fourth-degree">Fourth Degree Burns (Charring)</SelectItem>
                            <SelectItem value="arc-flash-burns">Arc Flash Burns</SelectItem>
                            <SelectItem value="no-burns">No Visible Burns</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cardiacIssues" className="text-base font-medium">
                          Cardiac/Heart Issues *
                        </Label>
                        <Select value={formData.cardiacIssues} onValueChange={(value) => updateField('cardiacIssues', value)}>
                          <SelectTrigger id="cardiacIssues" className="h-12 bg-background">
                            <SelectValue placeholder="Select cardiac status" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border">
                            <SelectItem value="cardiac-arrest">Cardiac Arrest (Required Resuscitation)</SelectItem>
                            <SelectItem value="arrhythmia-ongoing">Ongoing Arrhythmia</SelectItem>
                            <SelectItem value="arrhythmia-resolved">Temporary Arrhythmia (Resolved)</SelectItem>
                            <SelectItem value="heart-damage">Permanent Heart Damage</SelectItem>
                            <SelectItem value="none">No Cardiac Issues</SelectItem>
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
                    <h2 className="text-2xl font-semibold mb-6 text-foreground">Neurological Impact & Economic Details</h2>
                    
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="neurologicalDamage" className="text-base font-medium">
                          Neurological Damage *
                        </Label>
                        <Select value={formData.neurologicalDamage} onValueChange={(value) => updateField('neurologicalDamage', value)}>
                          <SelectTrigger id="neurologicalDamage" className="h-12 bg-background">
                            <SelectValue placeholder="Select neurological impact" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border">
                            <SelectItem value="severe-neurological">Severe Neurological Damage</SelectItem>
                            <SelectItem value="moderate-neurological">Moderate Neurological Issues</SelectItem>
                            <SelectItem value="mild-neurological">Mild Neurological Symptoms</SelectItem>
                            <SelectItem value="peripheral-nerve">Peripheral Nerve Damage</SelectItem>
                            <SelectItem value="none">No Neurological Damage</SelectItem>
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
                            <SelectItem value="improper-grounding">Improper Grounding</SelectItem>
                            <SelectItem value="no-lockout-tagout">No Lockout/Tagout Procedures</SelectItem>
                            <SelectItem value="inadequate-ppe">Inadequate PPE Provided</SelectItem>
                            <SelectItem value="no-violations">No Known Violations</SelectItem>
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
                          Your Age at Time of Injury *
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
                    title="Estimated Electrocution Compensation Range"
                    subtitle="Based on voltage level, burn severity, cardiac issues, and neurological damage"
                    damageCategories={[
                      {
                        title: "Economic Damages",
                        description: "Medical expenses, burn treatment, cardiac care, future medical needs, lost wages"
                      },
                      {
                        title: "Non-Economic Damages",
                        description: "Pain and suffering, disfigurement from burns, permanent disability, emotional trauma"
                      },
                      {
                        title: "Third-Party & Equipment Liability",
                        description: "Additional compensation for equipment defects, electrical system failures, and third-party negligence"
                      }
                    ]}
                    disclaimer="This estimate is for informational purposes only. Electrocution cases involve complex medical issues including visible burn injuries and often-hidden internal damage to organs, nerves, and the cardiovascular system. Actual compensation depends on voltage level, contact type, burn severity, cardiac complications, neurological damage, safety violations, and permanent disability. These cases frequently allow claims beyond workers' compensation limits when OSHA violations, improper grounding, equipment defects, or third-party negligence are involved. California electrical code violations and OSHA standards (29 CFR 1926 Subpart K) provide strict safety requirements. Consult with an experienced electrocution injury attorney to evaluate your specific case."
                    ctaText="Speak with an Electrocution Attorney"
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
                <p className="font-semibold mb-2">Important Information About Electrocution Claims</p>
                <p>
                  Electrical injuries cause both visible burns and hidden internal damage to organs, nerves, and the heart. 
                  Complications can appear days or weeks after the incident. Common causes include power line contact, 
                  improper grounding, lack of lockout/tagout procedures, and defective equipment. These cases often involve 
                  product liability claims against equipment manufacturers and third-party claims beyond workers' comp. 
                  OSHA requires strict electrical safety protocols. Time limits apply for filing claims.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ElectrocutionCompensationCalculator;
