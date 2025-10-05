import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, FerrisWheel } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCalculatorForm, CalculatorFormData, CalculatorResults } from '@/hooks/useCalculatorForm';
import { FormNavigation } from '@/components/calculator/FormNavigation';
import { CalculatorResults as ResultsDisplay } from '@/components/calculator/CalculatorResults';

interface AmusementParkFormData extends CalculatorFormData {
  rideType: string;
  accidentType: string;
  injurySeverity: string;
  age: string;
  safetyViolation: string;
  operatorNegligence: string;
  permanentDisability: string;
  medicalCosts: string;
}

const initialFormData: AmusementParkFormData = {
  rideType: '',
  accidentType: '',
  injurySeverity: '',
  age: '',
  safetyViolation: '',
  operatorNegligence: '',
  permanentDisability: '',
  medicalCosts: ''
};

function calculateCompensation(data: AmusementParkFormData): CalculatorResults {
  let min = 25000;
  let max = 75000;

  // Ride type multipliers
  const rideMultipliers: Record<string, number> = {
    'roller-coaster': 2.5,
    'water-ride': 2.2,
    'spinning-ride': 2.0,
    'drop-tower': 2.4,
    'bumper-cars': 1.5,
    'ferris-wheel': 1.8,
    'carousel': 1.3,
    'other': 1.7
  };

  // Accident type multipliers
  const accidentMultipliers: Record<string, number> = {
    'ejection': 3.5,
    'restraint-failure': 3.2,
    'collision': 2.5,
    'slip-fall': 1.8,
    'mechanical-failure': 3.0,
    'operator-error': 2.8,
    'structural-collapse': 4.0,
    'other': 2.0
  };

  // Injury severity multipliers
  const severityMultipliers: Record<string, number> = {
    'minor': 1.0,
    'moderate': 2.0,
    'serious': 3.5,
    'severe': 5.0,
    'life-threatening': 7.0,
    'fatal': 10.0
  };

  // Age vulnerability factors
  const ageMultipliers: Record<string, number> = {
    'child-under-12': 1.5,
    'teen-13-17': 1.3,
    'adult-18-64': 1.0,
    'senior-65-plus': 1.4
  };

  // Safety violation multipliers
  const violationMultipliers: Record<string, number> = {
    'none-known': 1.0,
    'minor-violation': 1.5,
    'serious-violation': 2.5,
    'willful-violation': 3.5,
    'repeat-violations': 4.0,
    'catastrophic-failure': 5.0
  };

  // Operator negligence factors
  const negligenceMultipliers: Record<string, number> = {
    'none': 1.0,
    'inadequate-training': 1.8,
    'ignored-safety-protocols': 2.5,
    'impaired-operator': 3.5,
    'insufficient-staffing': 2.0,
    'failed-inspection': 2.8
  };

  // Permanent disability factors
  const disabilityMultipliers: Record<string, number> = {
    'none': 1.0,
    '1-25': 1.8,
    '26-50': 2.5,
    '51-75': 3.5,
    '76-99': 5.0,
    '100': 7.0
  };

  // Medical costs baseline adjustment
  const medicalAdjustments: Record<string, number> = {
    'under-10k': 0,
    '10k-50k': 15000,
    '50k-100k': 40000,
    '100k-250k': 100000,
    '250k-500k': 250000,
    'over-500k': 500000
  };

  const rideMultiplier = rideMultipliers[data.rideType] || 1.0;
  const accidentMultiplier = accidentMultipliers[data.accidentType] || 1.0;
  const severityMultiplier = severityMultipliers[data.injurySeverity] || 1.0;
  const ageMultiplier = ageMultipliers[data.age] || 1.0;
  const violationMultiplier = violationMultipliers[data.safetyViolation] || 1.0;
  const negligenceMultiplier = negligenceMultipliers[data.operatorNegligence] || 1.0;
  const disabilityMultiplier = disabilityMultipliers[data.permanentDisability] || 1.0;
  const medicalAdjustment = medicalAdjustments[data.medicalCosts] || 0;

  const totalMultiplier = rideMultiplier * accidentMultiplier * severityMultiplier * 
                         ageMultiplier * violationMultiplier * negligenceMultiplier * 
                         disabilityMultiplier;

  min = Math.round((min * totalMultiplier) + medicalAdjustment);
  max = Math.round((max * totalMultiplier) + (medicalAdjustment * 1.5));

  // Ensure minimum values
  min = Math.max(min, 15000);
  max = Math.max(max, min * 1.5);

  return { min, max };
}

function validateForm(data: AmusementParkFormData, step: number): boolean {
  switch (step) {
    case 1:
      return !!(data.rideType && data.accidentType && data.injurySeverity);
    case 2:
      return !!(data.age && data.safetyViolation && data.operatorNegligence && 
                data.permanentDisability && data.medicalCosts);
    default:
      return false;
  }
}

export default function AmusementParkCompensationCalculator() {
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
  } = useCalculatorForm<AmusementParkFormData>(
    initialFormData,
    calculateCompensation,
    validateForm
  );

  return (
    <>
      <Helmet>
        <title>Amusement Park Accident Compensation Calculator | Free Estimate</title>
        <meta name="description" content="Calculate potential compensation for amusement park and theme park ride accidents. Instant estimates for roller coaster injuries, ride malfunctions, and operator negligence." />
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
              <FerrisWheel className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Amusement Park Accident Calculator</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get an estimate of potential compensation for theme park and amusement park ride injuries
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
                      {step === 1 ? 'Accident Details' : 'Additional Information'}
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all duration-300"
                      style={{ width: `${(step / 2) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Step 1: Accident Details */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Type of Ride
                      </label>
                      <select
                        value={formData.rideType}
                        onChange={(e) => updateField('rideType', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select ride type</option>
                        <option value="roller-coaster">Roller Coaster</option>
                        <option value="water-ride">Water Ride</option>
                        <option value="spinning-ride">Spinning Ride</option>
                        <option value="drop-tower">Drop Tower</option>
                        <option value="bumper-cars">Bumper Cars</option>
                        <option value="ferris-wheel">Ferris Wheel</option>
                        <option value="carousel">Carousel/Gentle Ride</option>
                        <option value="other">Other Ride</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Type of Accident
                      </label>
                      <select
                        value={formData.accidentType}
                        onChange={(e) => updateField('accidentType', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select accident type</option>
                        <option value="ejection">Ejection from Ride</option>
                        <option value="restraint-failure">Restraint Failure</option>
                        <option value="collision">Collision on Ride</option>
                        <option value="slip-fall">Slip and Fall</option>
                        <option value="mechanical-failure">Mechanical Failure</option>
                        <option value="operator-error">Operator Error</option>
                        <option value="structural-collapse">Structural Collapse</option>
                        <option value="other">Other Accident</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Injury Severity
                      </label>
                      <select
                        value={formData.injurySeverity}
                        onChange={(e) => updateField('injurySeverity', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select severity</option>
                        <option value="minor">Minor (bruises, minor cuts)</option>
                        <option value="moderate">Moderate (fractures, lacerations)</option>
                        <option value="serious">Serious (multiple fractures, internal injuries)</option>
                        <option value="severe">Severe (spinal injury, TBI, organ damage)</option>
                        <option value="life-threatening">Life-Threatening (critical injuries)</option>
                        <option value="fatal">Fatal (wrongful death)</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 2: Additional Information */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Age of Injured Person
                      </label>
                      <select
                        value={formData.age}
                        onChange={(e) => updateField('age', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select age range</option>
                        <option value="child-under-12">Child (Under 12)</option>
                        <option value="teen-13-17">Teen (13-17)</option>
                        <option value="adult-18-64">Adult (18-64)</option>
                        <option value="senior-65-plus">Senior (65+)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Safety Violations Identified
                      </label>
                      <select
                        value={formData.safetyViolation}
                        onChange={(e) => updateField('safetyViolation', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select violation level</option>
                        <option value="none-known">None Known</option>
                        <option value="minor-violation">Minor Violation</option>
                        <option value="serious-violation">Serious Violation</option>
                        <option value="willful-violation">Willful Violation</option>
                        <option value="repeat-violations">Repeat Violations</option>
                        <option value="catastrophic-failure">Catastrophic System Failure</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Operator Negligence
                      </label>
                      <select
                        value={formData.operatorNegligence}
                        onChange={(e) => updateField('operatorNegligence', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select negligence factor</option>
                        <option value="none">None Identified</option>
                        <option value="inadequate-training">Inadequate Training</option>
                        <option value="ignored-safety-protocols">Ignored Safety Protocols</option>
                        <option value="impaired-operator">Impaired Operator</option>
                        <option value="insufficient-staffing">Insufficient Staffing</option>
                        <option value="failed-inspection">Failed to Inspect Equipment</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Permanent Disability Rating
                      </label>
                      <select
                        value={formData.permanentDisability}
                        onChange={(e) => updateField('permanentDisability', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select disability level</option>
                        <option value="none">None</option>
                        <option value="1-25">1-25% (Mild impairment)</option>
                        <option value="26-50">26-50% (Moderate impairment)</option>
                        <option value="51-75">51-75% (Severe impairment)</option>
                        <option value="76-99">76-99% (Major disability)</option>
                        <option value="100">100% (Total disability)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Estimated Medical Costs
                      </label>
                      <select
                        value={formData.medicalCosts}
                        onChange={(e) => updateField('medicalCosts', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select cost range</option>
                        <option value="under-10k">Under $10,000</option>
                        <option value="10k-50k">$10,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-250k">$100,000 - $250,000</option>
                        <option value="250k-500k">$250,000 - $500,000</option>
                        <option value="over-500k">Over $500,000</option>
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
                    subtitle="Based on amusement park accident claims"
                    disclaimer="This is an educational estimate only and does not constitute legal advice. Actual compensation depends on numerous factors including jurisdiction, park ownership structure, applicable regulations, and specific case circumstances. Amusement park injury cases may involve premises liability, product liability, and operator negligence claims. Consult with an experienced personal injury attorney for case evaluation."
                    ctaText="Get Free Case Review"
                    ctaSubtext="Theme park injury claims require specialized legal expertise"
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
                    onClick={() => navigate('/contact')}
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
                <h3 className="font-semibold mb-2">Park Liability</h3>
                <p className="text-sm text-muted-foreground">
                  Parks have duty to maintain safe rides and adequate supervision
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold mb-2">Safety Regulations</h3>
                <p className="text-sm text-muted-foreground">
                  Violations strengthen claims and may result in punitive damages
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold mb-2">Multiple Parties</h3>
                <p className="text-sm text-muted-foreground">
                  May involve park, ride manufacturer, and maintenance companies
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
