import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCalculatorForm, CalculatorFormData, CalculatorResults } from '@/hooks/useCalculatorForm';
import { FormNavigation } from '@/components/calculator/FormNavigation';
import { CalculatorResults as ResultsDisplay } from '@/components/calculator/CalculatorResults';

interface AviationFormData extends CalculatorFormData {
  aircraftType: string;
  accidentType: string;
  injuryOutcome: string;
  victimRole: string;
  regulationViolation: string;
  pilotCertification: string;
  maintenanceIssue: string;
  numberOfVictims: string;
}

const initialFormData: AviationFormData = {
  aircraftType: '',
  accidentType: '',
  injuryOutcome: '',
  victimRole: '',
  regulationViolation: '',
  pilotCertification: '',
  maintenanceIssue: '',
  numberOfVictims: ''
};

function calculateCompensation(data: AviationFormData): CalculatorResults {
  let min = 100000;
  let max = 500000;

  // Aircraft type multipliers
  const aircraftMultipliers: Record<string, number> = {
    'commercial-airline': 3.5,
    'charter-flight': 3.0,
    'private-jet': 2.8,
    'small-aircraft': 2.2,
    'helicopter': 2.5,
    'seaplane': 2.3,
    'ultralight': 1.8,
    'other': 2.0
  };

  // Accident type multipliers
  const accidentMultipliers: Record<string, number> = {
    'crash-fatal': 5.0,
    'crash-survivable': 4.0,
    'emergency-landing': 2.5,
    'in-flight-incident': 2.0,
    'runway-incident': 1.8,
    'mid-air-collision': 5.5,
    'bird-strike': 1.5,
    'mechanical-failure': 3.5,
    'pilot-error': 3.0,
    'weather-related': 2.2
  };

  // Injury outcome multipliers
  const outcomeMultipliers: Record<string, number> = {
    'minor-injuries': 1.0,
    'serious-injuries': 2.5,
    'permanent-disability': 4.0,
    'catastrophic-injuries': 6.0,
    'wrongful-death': 8.0
  };

  // Victim role factors
  const roleMultipliers: Record<string, number> = {
    'passenger': 1.2,
    'pilot': 1.0,
    'crew-member': 1.1,
    'ground-personnel': 1.3,
    'bystander': 1.4
  };

  // FAA regulation violations
  const violationMultipliers: Record<string, number> = {
    'none-identified': 1.0,
    'minor-violation': 1.5,
    'serious-violation': 2.5,
    'willful-violation': 3.5,
    'repeat-offender': 4.0,
    'catastrophic-neglect': 5.0
  };

  // Pilot certification factors
  const certificationMultipliers: Record<string, number> = {
    'properly-certified': 1.0,
    'expired-certification': 2.0,
    'inadequate-rating': 2.5,
    'no-certification': 3.5,
    'falsified-credentials': 4.0
  };

  // Maintenance issue factors
  const maintenanceMultipliers: Record<string, number> = {
    'none': 1.0,
    'deferred-maintenance': 2.0,
    'failed-inspection': 2.5,
    'known-defect-ignored': 3.5,
    'counterfeit-parts': 4.0,
    'no-maintenance-records': 3.0
  };

  // Number of victims (mass casualty increases per-victim value)
  const victimMultipliers: Record<string, number> = {
    'single': 1.0,
    '2-5': 1.2,
    '6-10': 1.4,
    '11-50': 1.6,
    'over-50': 1.8
  };

  const aircraftMultiplier = aircraftMultipliers[data.aircraftType] || 1.0;
  const accidentMultiplier = accidentMultipliers[data.accidentType] || 1.0;
  const outcomeMultiplier = outcomeMultipliers[data.injuryOutcome] || 1.0;
  const roleMultiplier = roleMultipliers[data.victimRole] || 1.0;
  const violationMultiplier = violationMultipliers[data.regulationViolation] || 1.0;
  const certificationMultiplier = certificationMultipliers[data.pilotCertification] || 1.0;
  const maintenanceMultiplier = maintenanceMultipliers[data.maintenanceIssue] || 1.0;
  const victimMultiplier = victimMultipliers[data.numberOfVictims] || 1.0;

  const totalMultiplier = aircraftMultiplier * accidentMultiplier * outcomeMultiplier * 
                         roleMultiplier * violationMultiplier * certificationMultiplier * 
                         maintenanceMultiplier * victimMultiplier;

  min = Math.round(min * totalMultiplier);
  max = Math.round(max * totalMultiplier);

  // Aviation cases typically have high values
  min = Math.max(min, 75000);
  max = Math.max(max, min * 2);

  return { min, max };
}

function validateForm(data: AviationFormData, step: number): boolean {
  switch (step) {
    case 1:
      return !!(data.aircraftType && data.accidentType && data.injuryOutcome && data.victimRole);
    case 2:
      return !!(data.regulationViolation && data.pilotCertification && 
                data.maintenanceIssue && data.numberOfVictims);
    default:
      return false;
  }
}

export default function AviationAccidentCompensationCalculator() {
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
  } = useCalculatorForm<AviationFormData>(
    initialFormData,
    calculateCompensation,
    validateForm
  );

  return (
    <>
      <Helmet>
        <title>Aviation Accident Compensation Calculator | Free Estimate</title>
        <meta name="description" content="Calculate potential compensation for aviation accidents and plane crashes. Instant estimates for commercial airline, private aircraft, and helicopter accidents with wrongful death claims." />
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
              <Plane className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Aviation Accident Calculator</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get an estimate of potential compensation for aircraft accidents and wrongful death claims
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
                        Type of Aircraft
                      </label>
                      <select
                        value={formData.aircraftType}
                        onChange={(e) => updateField('aircraftType', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select aircraft type</option>
                        <option value="commercial-airline">Commercial Airline</option>
                        <option value="charter-flight">Charter Flight</option>
                        <option value="private-jet">Private Jet</option>
                        <option value="small-aircraft">Small Private Aircraft</option>
                        <option value="helicopter">Helicopter</option>
                        <option value="seaplane">Seaplane</option>
                        <option value="ultralight">Ultralight/Sport Aircraft</option>
                        <option value="other">Other Aircraft</option>
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
                        <option value="crash-fatal">Fatal Crash</option>
                        <option value="crash-survivable">Survivable Crash</option>
                        <option value="emergency-landing">Emergency Landing</option>
                        <option value="in-flight-incident">In-Flight Incident</option>
                        <option value="runway-incident">Runway Incident</option>
                        <option value="mid-air-collision">Mid-Air Collision</option>
                        <option value="bird-strike">Bird Strike</option>
                        <option value="mechanical-failure">Mechanical Failure</option>
                        <option value="pilot-error">Pilot Error</option>
                        <option value="weather-related">Weather-Related</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Injury Outcome
                      </label>
                      <select
                        value={formData.injuryOutcome}
                        onChange={(e) => updateField('injuryOutcome', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select outcome</option>
                        <option value="minor-injuries">Minor Injuries</option>
                        <option value="serious-injuries">Serious Injuries</option>
                        <option value="permanent-disability">Permanent Disability</option>
                        <option value="catastrophic-injuries">Catastrophic Injuries</option>
                        <option value="wrongful-death">Wrongful Death</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Victim's Role
                      </label>
                      <select
                        value={formData.victimRole}
                        onChange={(e) => updateField('victimRole', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select role</option>
                        <option value="passenger">Passenger</option>
                        <option value="pilot">Pilot</option>
                        <option value="crew-member">Crew Member</option>
                        <option value="ground-personnel">Ground Personnel</option>
                        <option value="bystander">Bystander/Third Party</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 2: Additional Information */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        FAA Regulation Violations
                      </label>
                      <select
                        value={formData.regulationViolation}
                        onChange={(e) => updateField('regulationViolation', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select violation level</option>
                        <option value="none-identified">None Identified</option>
                        <option value="minor-violation">Minor Violation</option>
                        <option value="serious-violation">Serious Violation</option>
                        <option value="willful-violation">Willful Violation</option>
                        <option value="repeat-offender">Repeat Offender</option>
                        <option value="catastrophic-neglect">Catastrophic Neglect</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Pilot Certification Status
                      </label>
                      <select
                        value={formData.pilotCertification}
                        onChange={(e) => updateField('pilotCertification', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select certification status</option>
                        <option value="properly-certified">Properly Certified</option>
                        <option value="expired-certification">Expired Certification</option>
                        <option value="inadequate-rating">Inadequate Rating for Aircraft</option>
                        <option value="no-certification">No Certification</option>
                        <option value="falsified-credentials">Falsified Credentials</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Maintenance Issues
                      </label>
                      <select
                        value={formData.maintenanceIssue}
                        onChange={(e) => updateField('maintenanceIssue', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select maintenance issue</option>
                        <option value="none">None Identified</option>
                        <option value="deferred-maintenance">Deferred Maintenance</option>
                        <option value="failed-inspection">Failed to Perform Inspection</option>
                        <option value="known-defect-ignored">Known Defect Ignored</option>
                        <option value="counterfeit-parts">Counterfeit Parts Used</option>
                        <option value="no-maintenance-records">No Maintenance Records</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Number of Victims in Accident
                      </label>
                      <select
                        value={formData.numberOfVictims}
                        onChange={(e) => updateField('numberOfVictims', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select number of victims</option>
                        <option value="single">Single Victim</option>
                        <option value="2-5">2-5 Victims</option>
                        <option value="6-10">6-10 Victims</option>
                        <option value="11-50">11-50 Victims</option>
                        <option value="over-50">Over 50 Victims</option>
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
                    subtitle="Based on aviation accident claims"
                    disclaimer="This is an educational estimate only and does not constitute legal advice. Actual compensation depends on numerous factors including jurisdiction, federal aviation regulations, liability determinations, and specific case circumstances. Aviation accidents are governed by complex federal laws including the Montreal Convention for international flights and involve NTSB investigations. These cases often include multiple liable parties (operators, manufacturers, maintenance providers). Consult with an experienced aviation accident attorney for proper case evaluation."
                    ctaText="Get Free Case Review"
                    ctaSubtext="Aviation accidents require specialized legal expertise"
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
                <h3 className="font-semibold mb-2">Federal Jurisdiction</h3>
                <p className="text-sm text-muted-foreground">
                  Aviation cases involve FAA regulations and NTSB investigations
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold mb-2">High Value Claims</h3>
                <p className="text-sm text-muted-foreground">
                  Aviation accidents typically result in significant compensation
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold mb-2">Multiple Parties</h3>
                <p className="text-sm text-muted-foreground">
                  May involve operators, manufacturers, and maintenance providers
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
