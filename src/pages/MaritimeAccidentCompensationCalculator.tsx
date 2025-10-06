import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Anchor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCalculatorForm, CalculatorFormData, CalculatorResults } from '@/hooks/useCalculatorForm';
import { FormNavigation } from '@/components/calculator/FormNavigation';
import { CalculatorResults as ResultsDisplay } from '@/components/calculator/CalculatorResults';

interface MaritimeFormData extends CalculatorFormData {
  victimType: string;
  vesselType: string;
  accidentType: string;
  injurySeverity: string;
  jonesActApplicable: string;
  unseaworthiness: string;
  maintenanceCure: string;
  permanentDisability: string;
}

const initialFormData: MaritimeFormData = {
  victimType: '',
  vesselType: '',
  accidentType: '',
  injurySeverity: '',
  jonesActApplicable: '',
  unseaworthiness: '',
  maintenanceCure: '',
  permanentDisability: ''
};

function calculateCompensation(data: MaritimeFormData): CalculatorResults {
  let min = 75000;
  let max = 300000;

  // Victim type multipliers
  const victimMultipliers: Record<string, number> = {
    'seaman': 3.5, // Jones Act protection
    'longshoreman': 3.0, // LHWCA coverage
    'harbor-worker': 2.8,
    'passenger': 2.5,
    'crew-member': 3.2,
    'fisherman': 3.0,
    'contractor': 2.2,
    'recreational': 1.8
  };

  // Vessel type multipliers
  const vesselMultipliers: Record<string, number> = {
    'commercial-ship': 2.8,
    'cargo-vessel': 2.5,
    'cruise-ship': 3.0,
    'fishing-vessel': 2.3,
    'tugboat': 2.2,
    'offshore-platform': 3.2,
    'ferry': 2.4,
    'yacht': 2.0,
    'other': 2.0
  };

  // Accident type multipliers
  const accidentMultipliers: Record<string, number> = {
    'slip-fall': 2.0,
    'equipment-failure': 3.0,
    'collision': 3.5,
    'fire-explosion': 4.5,
    'man-overboard': 4.0,
    'crushing-injury': 3.8,
    'chemical-exposure': 3.2,
    'drowning': 5.0,
    'rope-cable-injury': 2.8,
    'other': 2.2
  };

  // Injury severity multipliers
  const severityMultipliers: Record<string, number> = {
    'minor': 1.0,
    'moderate': 2.2,
    'serious': 3.8,
    'severe': 5.5,
    'catastrophic': 7.5,
    'fatal': 10.0
  };

  // Jones Act applicable (broader rights for seamen)
  const jonesActMultipliers: Record<string, number> = {
    'yes': 1.8,
    'no': 1.0,
    'unknown': 1.2
  };

  // Unseaworthiness claim factors
  const unseaworthinessMultipliers: Record<string, number> = {
    'none': 1.0,
    'defective-equipment': 2.0,
    'inadequate-crew': 2.2,
    'improper-maintenance': 2.5,
    'structural-defect': 3.0,
    'safety-violation': 2.8
  };

  // Maintenance and cure (employer's duty)
  const maintenanceCureMultipliers: Record<string, number> = {
    'provided-fully': 1.0,
    'delayed': 1.5,
    'partially-denied': 2.0,
    'wrongfully-denied': 3.0,
    'terminated-early': 2.5
  };

  // Permanent disability factors
  const disabilityMultipliers: Record<string, number> = {
    'none': 1.0,
    '1-25': 2.0,
    '26-50': 3.2,
    '51-75': 4.5,
    '76-99': 6.0,
    '100': 8.5
  };

  const victimMultiplier = victimMultipliers[data.victimType] || 1.0;
  const vesselMultiplier = vesselMultipliers[data.vesselType] || 1.0;
  const accidentMultiplier = accidentMultipliers[data.accidentType] || 1.0;
  const severityMultiplier = severityMultipliers[data.injurySeverity] || 1.0;
  const jonesActMultiplier = jonesActMultipliers[data.jonesActApplicable] || 1.0;
  const unseaworthinessMultiplier = unseaworthinessMultipliers[data.unseaworthiness] || 1.0;
  const maintenanceCureMultiplier = maintenanceCureMultipliers[data.maintenanceCure] || 1.0;
  const disabilityMultiplier = disabilityMultipliers[data.permanentDisability] || 1.0;

  const totalMultiplier = victimMultiplier * vesselMultiplier * accidentMultiplier * 
                         severityMultiplier * jonesActMultiplier * unseaworthinessMultiplier * 
                         maintenanceCureMultiplier * disabilityMultiplier;

  min = Math.round(min * totalMultiplier);
  max = Math.round(max * totalMultiplier);

  // Maritime cases typically have high values
  min = Math.max(min, 50000);
  max = Math.max(max, min * 2);

  return { min, max };
}

function validateForm(data: MaritimeFormData, step: number): boolean {
  switch (step) {
    case 1:
      return !!(data.victimType && data.vesselType && data.accidentType && data.injurySeverity);
    case 2:
      return !!(data.jonesActApplicable && data.unseaworthiness && 
                data.maintenanceCure && data.permanentDisability);
    default:
      return false;
  }
}

export default function MaritimeAccidentCompensationCalculator() {
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
  } = useCalculatorForm<MaritimeFormData>(
    initialFormData,
    calculateCompensation,
    validateForm
  );

  return (
    <>
      <Helmet>
        <title>Maritime Accident Compensation Calculator | Jones Act Claims</title>
        <meta name="description" content="Calculate potential compensation for maritime accidents, offshore injuries, and Jones Act seaman claims. Instant estimates for ship injuries and vessel accidents." />
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
              <Anchor className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Maritime Accident Calculator</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get an estimate of potential compensation for maritime injuries and Jones Act claims
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
                      {step === 1 ? 'Accident Details' : 'Legal Factors'}
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
                        <option value="seaman">Seaman (Jones Act)</option>
                        <option value="longshoreman">Longshoreman (LHWCA)</option>
                        <option value="harbor-worker">Harbor Worker</option>
                        <option value="passenger">Passenger</option>
                        <option value="crew-member">Crew Member</option>
                        <option value="fisherman">Commercial Fisherman</option>
                        <option value="contractor">Contractor/Vendor</option>
                        <option value="recreational">Recreational Boater</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Type of Vessel
                      </label>
                      <select
                        value={formData.vesselType}
                        onChange={(e) => updateField('vesselType', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select vessel type</option>
                        <option value="commercial-ship">Commercial Ship</option>
                        <option value="cargo-vessel">Cargo Vessel</option>
                        <option value="cruise-ship">Cruise Ship</option>
                        <option value="fishing-vessel">Fishing Vessel</option>
                        <option value="tugboat">Tugboat</option>
                        <option value="offshore-platform">Offshore Platform/Rig</option>
                        <option value="ferry">Ferry</option>
                        <option value="yacht">Private Yacht</option>
                        <option value="other">Other Vessel</option>
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
                        <option value="slip-fall">Slip and Fall on Deck</option>
                        <option value="equipment-failure">Equipment Failure</option>
                        <option value="collision">Vessel Collision</option>
                        <option value="fire-explosion">Fire or Explosion</option>
                        <option value="man-overboard">Man Overboard</option>
                        <option value="crushing-injury">Crushing Injury</option>
                        <option value="chemical-exposure">Chemical Exposure</option>
                        <option value="drowning">Drowning/Near-Drowning</option>
                        <option value="rope-cable-injury">Rope/Cable Injury</option>
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
                        <option value="serious">Serious (multiple injuries, internal damage)</option>
                        <option value="severe">Severe (spinal injury, TBI, amputations)</option>
                        <option value="catastrophic">Catastrophic (paralysis, severe burns)</option>
                        <option value="fatal">Fatal (wrongful death)</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 2: Legal Factors */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Jones Act Applicable?
                      </label>
                      <select
                        value={formData.jonesActApplicable}
                        onChange={(e) => updateField('jonesActApplicable', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select applicability</option>
                        <option value="yes">Yes (Qualified Seaman)</option>
                        <option value="no">No (Not a Seaman)</option>
                        <option value="unknown">Unknown/To Be Determined</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Unseaworthiness Claim Basis
                      </label>
                      <select
                        value={formData.unseaworthiness}
                        onChange={(e) => updateField('unseaworthiness', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select unseaworthiness factor</option>
                        <option value="none">None Identified</option>
                        <option value="defective-equipment">Defective Equipment</option>
                        <option value="inadequate-crew">Inadequate Crew</option>
                        <option value="improper-maintenance">Improper Maintenance</option>
                        <option value="structural-defect">Structural Defect</option>
                        <option value="safety-violation">Safety Violation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Maintenance and Cure Status
                      </label>
                      <select
                        value={formData.maintenanceCure}
                        onChange={(e) => updateField('maintenanceCure', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select maintenance status</option>
                        <option value="provided-fully">Provided Fully by Employer</option>
                        <option value="delayed">Unreasonably Delayed</option>
                        <option value="partially-denied">Partially Denied</option>
                        <option value="wrongfully-denied">Wrongfully Denied</option>
                        <option value="terminated-early">Terminated Before Max Cure</option>
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
                    subtitle="Based on maritime accident claims"
                    disclaimer="This is an educational estimate only and does not constitute legal advice. Actual compensation depends on numerous factors including jurisdiction, Jones Act applicability, Longshore and Harbor Workers' Compensation Act (LHWCA) coverage, unseaworthiness claims, maintenance and cure obligations, and specific case circumstances. Maritime law is complex federal law with unique remedies. Seamen have enhanced protections under the Jones Act. Consult with an experienced maritime attorney for proper case evaluation."
                    ctaText="Get Free Case Review"
                    ctaSubtext="Maritime accidents require specialized admiralty law expertise"
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
                <h3 className="font-semibold mb-2">Jones Act Rights</h3>
                <p className="text-sm text-muted-foreground">
                  Seamen have enhanced protections and broader recovery rights
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold mb-2">Unseaworthiness</h3>
                <p className="text-sm text-muted-foreground">
                  Vessel owners have absolute duty to provide seaworthy vessel
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold mb-2">Maintenance & Cure</h3>
                <p className="text-sm text-muted-foreground">
                  Employers must provide medical care and living expenses
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
