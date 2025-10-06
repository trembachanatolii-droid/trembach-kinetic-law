import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Baby } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCalculatorForm, CalculatorFormData, CalculatorResults } from '@/hooks/useCalculatorForm';
import { FormNavigation } from '@/components/calculator/FormNavigation';
import { CalculatorResults as ResultsDisplay } from '@/components/calculator/CalculatorResults';

interface BirthInjuryFormData extends CalculatorFormData {
  injuryType: string;
  causeOfInjury: string;
  severity: string;
  lifetimeCareNeeds: string;
  cognitiveImpact: string;
  physicalDisability: string;
  medicalNegligence: string;
  estimatedLifetimeCosts: string;
}

const initialFormData: BirthInjuryFormData = {
  injuryType: '',
  causeOfInjury: '',
  severity: '',
  lifetimeCareNeeds: '',
  cognitiveImpact: '',
  physicalDisability: '',
  medicalNegligence: '',
  estimatedLifetimeCosts: ''
};

function calculateCompensation(data: BirthInjuryFormData): CalculatorResults {
  let min = 750000;
  let max = 3000000;

  // Injury type multipliers
  const injuryMultipliers: Record<string, number> = {
    'cerebral-palsy': 5.0,
    'erbs-palsy': 3.5,
    'brain-damage': 5.5,
    'hypoxic-injury': 5.2,
    'fractured-bones': 2.0,
    'facial-paralysis': 3.0,
    'spinal-cord': 6.0,
    'wrongful-death': 4.5,
    'other': 2.5
  };

  // Cause of injury multipliers
  const causeMultipliers: Record<string, number> = {
    'oxygen-deprivation': 3.5,
    'delayed-c-section': 3.2,
    'improper-forceps': 3.0,
    'improper-vacuum': 3.0,
    'medication-error': 3.5,
    'failure-to-monitor': 3.3,
    'shoulder-dystocia': 2.8,
    'umbilical-cord': 3.4,
    'infection-untreated': 3.0,
    'other': 2.5
  };

  // Severity multipliers
  const severityMultipliers: Record<string, number> = {
    'mild': 2.0,
    'moderate': 3.5,
    'severe': 5.5,
    'profound': 8.0,
    'life-threatening': 10.0
  };

  // Lifetime care needs
  const careMultipliers: Record<string, number> = {
    'minimal': 1.2,
    'moderate-therapy': 2.0,
    'extensive-therapy': 3.0,
    'full-time-care': 4.5,
    '24-7-skilled-care': 6.5
  };

  // Cognitive impact factors
  const cognitiveMultipliers: Record<string, number> = {
    'none': 1.0,
    'mild-delays': 1.8,
    'moderate-impairment': 2.8,
    'severe-impairment': 4.5,
    'profound-disability': 6.5
  };

  // Physical disability factors
  const physicalMultipliers: Record<string, number> = {
    'none': 1.0,
    'limited-mobility': 2.5,
    'wheelchair-dependent': 4.0,
    'total-paralysis': 5.5,
    'ventilator-dependent': 7.0
  };

  // Medical negligence evidence
  const negligenceMultipliers: Record<string, number> = {
    'clear-deviation': 3.5,
    'multiple-errors': 4.0,
    'willful-negligence': 5.0,
    'some-evidence': 2.5,
    'disputed': 1.8,
    'unclear': 1.0
  };

  // Lifetime costs baseline adjustment
  const lifetimeCostAdjustments: Record<string, number> = {
    'under-1m': 500000,
    '1m-3m': 1500000,
    '3m-5m': 3000000,
    '5m-10m': 6000000,
    'over-10m': 10000000
  };

  const injuryMultiplier = injuryMultipliers[data.injuryType] || 1.0;
  const causeMultiplier = causeMultipliers[data.causeOfInjury] || 1.0;
  const severityMultiplier = severityMultipliers[data.severity] || 1.0;
  const careMultiplier = careMultipliers[data.lifetimeCareNeeds] || 1.0;
  const cognitiveMultiplier = cognitiveMultipliers[data.cognitiveImpact] || 1.0;
  const physicalMultiplier = physicalMultipliers[data.physicalDisability] || 1.0;
  const negligenceMultiplier = negligenceMultipliers[data.medicalNegligence] || 1.0;
  const lifetimeCostAdjustment = lifetimeCostAdjustments[data.estimatedLifetimeCosts] || 0;

  const totalMultiplier = injuryMultiplier * causeMultiplier * severityMultiplier * 
                         careMultiplier * cognitiveMultiplier * physicalMultiplier * 
                         negligenceMultiplier;

  min = Math.round((min * totalMultiplier) + lifetimeCostAdjustment);
  max = Math.round((max * totalMultiplier) + (lifetimeCostAdjustment * 1.3));

  // Birth injury cases have very high minimum values
  min = Math.max(min, 500000);
  max = Math.max(max, min * 2);

  return { min, max };
}

function validateForm(data: BirthInjuryFormData, step: number): boolean {
  switch (step) {
    case 1:
      return !!(data.injuryType && data.causeOfInjury && data.severity && data.lifetimeCareNeeds);
    case 2:
      return !!(data.cognitiveImpact && data.physicalDisability && 
                data.medicalNegligence && data.estimatedLifetimeCosts);
    default:
      return false;
  }
}

export default function BirthInjuryCompensationCalculator() {
  const navigate = useNavigate();
  const {
    step,
    formData,
    results,
    updateField,
    handleNext,
    handleBack,
    resetForm,
    isStepValid
  } = useCalculatorForm<BirthInjuryFormData>(
    initialFormData,
    calculateCompensation,
    validateForm
  );

  return (
    <>
      <Helmet>
        <title>Birth Injury Compensation Calculator | Medical Malpractice</title>
        <meta name="description" content="Calculate potential compensation for birth injuries including cerebral palsy, Erb's palsy, and brain damage from medical negligence. Instant estimates for lifetime care costs." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Back Navigation */}
          <Button
            variant="ghost"
            onClick={() => navigate('/calculators')}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Calculators
          </Button>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Baby className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Birth Injury Calculator</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get an estimate of potential compensation for birth injuries caused by medical negligence
            </p>
          </div>

          {/* Calculator Card */}
          <div className="bg-card rounded-2xl shadow-lg p-8 mb-8">
            {step < 3 ? (
              <>
                {/* Progress Indicator */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Step {step} of 2</span>
                    <span className="text-sm text-muted-foreground">
                      {step === 1 ? 'Injury Details' : 'Impact Assessment'}
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all duration-300"
                      style={{ width: `${(step / 2) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Step 1: Injury Details */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Type of Birth Injury
                      </label>
                      <select
                        value={formData.injuryType}
                        onChange={(e) => updateField('injuryType', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select injury type</option>
                        <option value="cerebral-palsy">Cerebral Palsy</option>
                        <option value="erbs-palsy">Erb's Palsy (Brachial Plexus)</option>
                        <option value="brain-damage">Brain Damage</option>
                        <option value="hypoxic-injury">Hypoxic-Ischemic Injury</option>
                        <option value="fractured-bones">Fractured Bones</option>
                        <option value="facial-paralysis">Facial Paralysis</option>
                        <option value="spinal-cord">Spinal Cord Injury</option>
                        <option value="wrongful-death">Wrongful Death</option>
                        <option value="other">Other Birth Injury</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Cause of Injury
                      </label>
                      <select
                        value={formData.causeOfInjury}
                        onChange={(e) => updateField('causeOfInjury', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select cause</option>
                        <option value="oxygen-deprivation">Oxygen Deprivation</option>
                        <option value="delayed-c-section">Delayed C-Section</option>
                        <option value="improper-forceps">Improper Forceps Use</option>
                        <option value="improper-vacuum">Improper Vacuum Extraction</option>
                        <option value="medication-error">Medication Error</option>
                        <option value="failure-to-monitor">Failure to Monitor Fetal Distress</option>
                        <option value="shoulder-dystocia">Shoulder Dystocia Mismanagement</option>
                        <option value="umbilical-cord">Umbilical Cord Complications</option>
                        <option value="infection-untreated">Untreated Maternal Infection</option>
                        <option value="other">Other Cause</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Severity of Injury
                      </label>
                      <select
                        value={formData.severity}
                        onChange={(e) => updateField('severity', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select severity</option>
                        <option value="mild">Mild (Minor impairments)</option>
                        <option value="moderate">Moderate (Significant impairments)</option>
                        <option value="severe">Severe (Major disabilities)</option>
                        <option value="profound">Profound (Total care dependency)</option>
                        <option value="life-threatening">Life-Threatening/Fatal</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Lifetime Care Needs
                      </label>
                      <select
                        value={formData.lifetimeCareNeeds}
                        onChange={(e) => updateField('lifetimeCareNeeds', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select care level</option>
                        <option value="minimal">Minimal (Periodic therapy)</option>
                        <option value="moderate-therapy">Moderate (Regular therapy/treatment)</option>
                        <option value="extensive-therapy">Extensive (Daily therapy/equipment)</option>
                        <option value="full-time-care">Full-Time Care</option>
                        <option value="24-7-skilled-care">24/7 Skilled Nursing Care</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 2: Impact Assessment */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Cognitive Impact
                      </label>
                      <select
                        value={formData.cognitiveImpact}
                        onChange={(e) => updateField('cognitiveImpact', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select cognitive impact</option>
                        <option value="none">None (Normal development)</option>
                        <option value="mild-delays">Mild Developmental Delays</option>
                        <option value="moderate-impairment">Moderate Cognitive Impairment</option>
                        <option value="severe-impairment">Severe Intellectual Disability</option>
                        <option value="profound-disability">Profound Cognitive Disability</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Physical Disability
                      </label>
                      <select
                        value={formData.physicalDisability}
                        onChange={(e) => updateField('physicalDisability', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select physical disability</option>
                        <option value="none">None (Normal mobility)</option>
                        <option value="limited-mobility">Limited Mobility</option>
                        <option value="wheelchair-dependent">Wheelchair Dependent</option>
                        <option value="total-paralysis">Total or Partial Paralysis</option>
                        <option value="ventilator-dependent">Ventilator Dependent</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Evidence of Medical Negligence
                      </label>
                      <select
                        value={formData.medicalNegligence}
                        onChange={(e) => updateField('medicalNegligence', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select evidence level</option>
                        <option value="clear-deviation">Clear Deviation from Standard of Care</option>
                        <option value="multiple-errors">Multiple Medical Errors</option>
                        <option value="willful-negligence">Willful Negligence/Recklessness</option>
                        <option value="some-evidence">Some Evidence of Negligence</option>
                        <option value="disputed">Disputed/Expert Opinions Vary</option>
                        <option value="unclear">Unclear Causation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Estimated Lifetime Medical Costs
                      </label>
                      <select
                        value={formData.estimatedLifetimeCosts}
                        onChange={(e) => updateField('estimatedLifetimeCosts', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select cost range</option>
                        <option value="under-1m">Under $1,000,000</option>
                        <option value="1m-3m">$1,000,000 - $3,000,000</option>
                        <option value="3m-5m">$3,000,000 - $5,000,000</option>
                        <option value="5m-10m">$5,000,000 - $10,000,000</option>
                        <option value="over-10m">Over $10,000,000</option>
                      </select>
                    </div>
                  </div>
                )}

                <FormNavigation
                  currentStep={step}
                  totalSteps={2}
                  isValid={isStepValid()}
                  onBack={handleBack}
                  onNext={handleNext}
                />
              </>
            ) : (
              <>
                {results && (
                  <ResultsDisplay
                    min={results.min}
                    max={results.max}
                    title="Your Estimated Compensation Range"
                    subtitle="Based on birth injury medical malpractice claims"
                    disclaimer="This is an educational estimate only and does not constitute legal advice. Actual compensation depends on numerous factors including jurisdiction, proof of medical negligence, causation evidence, severity of injury, lifetime care costs, and specific case circumstances. Birth injury cases are among the most complex medical malpractice claims requiring extensive expert testimony from obstetricians, neonatologists, neurologists, and life care planners. Statute of limitations varies by state and may extend beyond the child's age of majority. Consult with an experienced birth injury attorney immediately for proper case evaluation."
                    ctaText="Get Free Case Review"
                    ctaSubtext="Birth injury cases require specialized medical malpractice expertise"
                  />
                )}

                <div className="flex gap-4 mt-8">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={resetForm}
                    className="flex-1"
                  >
                    Start Over
                  </Button>
                  <Button
                    size="lg"
                    onClick={() => navigate('/free-consultation')}
                    className="flex-1"
                  >
                    Contact Us
                  </Button>
                </div>
              </>
            )}
          </div>

          {/* Info Cards */}
          {step < 3 && (
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold mb-2">Lifetime Costs</h3>
                <p className="text-sm text-muted-foreground">
                  Birth injuries often require millions in lifetime care costs
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold mb-2">Expert Testimony</h3>
                <p className="text-sm text-muted-foreground">
                  Requires multiple medical experts to prove negligence
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold mb-2">Extended Statute</h3>
                <p className="text-sm text-muted-foreground">
                  Time limits may extend beyond the child's age of majority
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
