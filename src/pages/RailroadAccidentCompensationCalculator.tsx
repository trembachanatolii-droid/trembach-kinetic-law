import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Train } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCalculatorForm, CalculatorFormData, CalculatorResults } from '@/hooks/useCalculatorForm';
import { FormNavigation } from '@/components/calculator/FormNavigation';
import { CalculatorResults as ResultsDisplay } from '@/components/calculator/CalculatorResults';

interface RailroadFormData extends CalculatorFormData {
  victimType: string;
  accidentType: string;
  injurySeverity: string;
  railroadType: string;
  safetyViolation: string;
  crossingSignals: string;
  permanentDisability: string;
  medicalCosts: string;
}

const initialFormData: RailroadFormData = {
  victimType: '',
  accidentType: '',
  injurySeverity: '',
  railroadType: '',
  safetyViolation: '',
  crossingSignals: '',
  permanentDisability: '',
  medicalCosts: ''
};

function calculateCompensation(data: RailroadFormData): CalculatorResults {
  let min = 50000;
  let max = 200000;

  // Victim type multipliers (FELA claims have different standards)
  const victimMultipliers: Record<string, number> = {
    'railroad-worker': 3.0, // FELA protection
    'passenger': 2.5,
    'vehicle-driver': 2.2,
    'vehicle-passenger': 2.2,
    'pedestrian': 2.8,
    'trespasser': 1.5,
    'contractor': 2.0
  };

  // Accident type multipliers
  const accidentMultipliers: Record<string, number> = {
    'crossing-collision': 3.5,
    'derailment': 4.0,
    'platform-accident': 2.2,
    'slip-trip-fall': 1.8,
    'struck-by-train': 4.5,
    'equipment-failure': 3.0,
    'coupling-accident': 3.2,
    'chemical-spill': 3.8,
    'electrocution': 4.2,
    'other': 2.0
  };

  // Injury severity multipliers
  const severityMultipliers: Record<string, number> = {
    'minor': 1.0,
    'moderate': 2.0,
    'serious': 3.5,
    'severe': 5.5,
    'life-threatening': 7.5,
    'fatal': 10.0
  };

  // Railroad type factors
  const railroadMultipliers: Record<string, number> = {
    'freight-train': 2.2,
    'passenger-train': 2.5,
    'commuter-rail': 2.3,
    'subway-metro': 2.0,
    'light-rail': 1.8,
    'industrial-rail': 1.7
  };

  // Safety violation multipliers
  const violationMultipliers: Record<string, number> = {
    'none-known': 1.0,
    'minor-violation': 1.8,
    'serious-violation': 3.0,
    'willful-violation': 4.5,
    'repeat-violations': 5.0,
    'federal-violation': 4.0
  };

  // Crossing signal factors
  const crossingMultipliers: Record<string, number> = {
    'not-applicable': 1.0,
    'fully-functional': 1.0,
    'partially-functional': 2.0,
    'non-functional': 3.5,
    'no-signals': 4.0,
    'inadequate-visibility': 2.5,
    'obstructed-view': 3.0
  };

  // Permanent disability factors
  const disabilityMultipliers: Record<string, number> = {
    'none': 1.0,
    '1-25': 1.8,
    '26-50': 2.8,
    '51-75': 4.0,
    '76-99': 5.5,
    '100': 8.0
  };

  // Medical costs baseline adjustment
  const medicalAdjustments: Record<string, number> = {
    'under-25k': 0,
    '25k-100k': 30000,
    '100k-250k': 100000,
    '250k-500k': 250000,
    '500k-1m': 500000,
    'over-1m': 1000000
  };

  const victimMultiplier = victimMultipliers[data.victimType] || 1.0;
  const accidentMultiplier = accidentMultipliers[data.accidentType] || 1.0;
  const severityMultiplier = severityMultipliers[data.injurySeverity] || 1.0;
  const railroadMultiplier = railroadMultipliers[data.railroadType] || 1.0;
  const violationMultiplier = violationMultipliers[data.safetyViolation] || 1.0;
  const crossingMultiplier = crossingMultipliers[data.crossingSignals] || 1.0;
  const disabilityMultiplier = disabilityMultipliers[data.permanentDisability] || 1.0;
  const medicalAdjustment = medicalAdjustments[data.medicalCosts] || 0;

  const totalMultiplier = victimMultiplier * accidentMultiplier * severityMultiplier * 
                         railroadMultiplier * violationMultiplier * crossingMultiplier * 
                         disabilityMultiplier;

  min = Math.round((min * totalMultiplier) + medicalAdjustment);
  max = Math.round((max * totalMultiplier) + (medicalAdjustment * 1.5));

  // Ensure minimum values
  min = Math.max(min, 30000);
  max = Math.max(max, min * 1.8);

  return { min, max };
}

function validateForm(data: RailroadFormData, step: number): boolean {
  switch (step) {
    case 1:
      return !!(data.victimType && data.accidentType && data.injurySeverity && data.railroadType);
    case 2:
      return !!(data.safetyViolation && data.crossingSignals && 
                data.permanentDisability && data.medicalCosts);
    default:
      return false;
  }
}

export default function RailroadAccidentCompensationCalculator() {
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
  } = useCalculatorForm<RailroadFormData>(
    initialFormData,
    calculateCompensation,
    validateForm
  );

  return (
    <>
      <Helmet>
        <title>Railroad Accident Compensation Calculator | FELA Claims</title>
        <meta name="description" content="Calculate potential compensation for railroad accidents, train crossing collisions, and FELA worker injury claims. Instant estimates for train accident injuries." />
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
              <Train className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Railroad Accident Calculator</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get an estimate of potential compensation for railroad and train accidents including FELA claims
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
                        Victim Type
                      </label>
                      <select
                        value={formData.victimType}
                        onChange={(e) => updateField('victimType', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select victim type</option>
                        <option value="railroad-worker">Railroad Worker (FELA)</option>
                        <option value="passenger">Train Passenger</option>
                        <option value="vehicle-driver">Vehicle Driver</option>
                        <option value="vehicle-passenger">Vehicle Passenger</option>
                        <option value="pedestrian">Pedestrian</option>
                        <option value="trespasser">Trespasser</option>
                        <option value="contractor">Contractor/Vendor</option>
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
                        <option value="crossing-collision">Railroad Crossing Collision</option>
                        <option value="derailment">Train Derailment</option>
                        <option value="platform-accident">Platform Accident</option>
                        <option value="slip-trip-fall">Slip, Trip, or Fall</option>
                        <option value="struck-by-train">Struck by Train</option>
                        <option value="equipment-failure">Equipment Failure</option>
                        <option value="coupling-accident">Coupling Accident</option>
                        <option value="chemical-spill">Chemical Spill/Exposure</option>
                        <option value="electrocution">Electrocution</option>
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
                        <option value="severe">Severe (spinal injury, TBI, amputations)</option>
                        <option value="life-threatening">Life-Threatening (critical injuries)</option>
                        <option value="fatal">Fatal (wrongful death)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Type of Railroad
                      </label>
                      <select
                        value={formData.railroadType}
                        onChange={(e) => updateField('railroadType', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select railroad type</option>
                        <option value="freight-train">Freight Train</option>
                        <option value="passenger-train">Passenger Train (Amtrak)</option>
                        <option value="commuter-rail">Commuter Rail</option>
                        <option value="subway-metro">Subway/Metro</option>
                        <option value="light-rail">Light Rail</option>
                        <option value="industrial-rail">Industrial Railroad</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 2: Additional Information */}
                {step === 2 && (
                  <div className="space-y-6">
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
                        <option value="federal-violation">Federal Railroad Administration Violation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Railroad Crossing Signal Status
                      </label>
                      <select
                        value={formData.crossingSignals}
                        onChange={(e) => updateField('crossingSignals', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select signal status</option>
                        <option value="not-applicable">Not Applicable (Not a crossing accident)</option>
                        <option value="fully-functional">Fully Functional</option>
                        <option value="partially-functional">Partially Functional</option>
                        <option value="non-functional">Non-Functional</option>
                        <option value="no-signals">No Signals Present</option>
                        <option value="inadequate-visibility">Inadequate Visibility</option>
                        <option value="obstructed-view">Obstructed View of Crossing</option>
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
                        <option value="under-25k">Under $25,000</option>
                        <option value="25k-100k">$25,000 - $100,000</option>
                        <option value="100k-250k">$100,000 - $250,000</option>
                        <option value="250k-500k">$250,000 - $500,000</option>
                        <option value="500k-1m">$500,000 - $1,000,000</option>
                        <option value="over-1m">Over $1,000,000</option>
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
                    subtitle="Based on railroad accident claims"
                    disclaimer="This is an educational estimate only and does not constitute legal advice. Actual compensation depends on numerous factors including jurisdiction, Federal Employers' Liability Act (FELA) protections for railroad workers, Federal Railroad Administration regulations, and specific case circumstances. Railroad worker injuries are governed by FELA rather than state workers' compensation laws. Crossing accidents may involve comparative negligence. These cases often involve multiple liable parties including railroad companies, equipment manufacturers, and maintenance contractors. Consult with an experienced railroad accident attorney for proper case evaluation."
                    ctaText="Get Free Case Review"
                    ctaSubtext="Railroad accidents require specialized FELA expertise"
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
                <h3 className="font-semibold mb-2">FELA Protection</h3>
                <p className="text-sm text-muted-foreground">
                  Railroad workers have special federal protections under FELA
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold mb-2">Federal Regulations</h3>
                <p className="text-sm text-muted-foreground">
                  FRA violations and crossing signal failures strengthen claims
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold mb-2">High Value Cases</h3>
                <p className="text-sm text-muted-foreground">
                  Railroad accidents typically result in significant compensation
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
