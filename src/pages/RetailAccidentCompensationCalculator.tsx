import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCalculatorForm, CalculatorFormData, CalculatorResults } from '@/hooks/useCalculatorForm';
import { FormNavigation } from '@/components/calculator/FormNavigation';
import { CalculatorResults as ResultsDisplay } from '@/components/calculator/CalculatorResults';

interface RetailFormData extends CalculatorFormData {
  storeType: string;
  accidentType: string;
  injurySeverity: string;
  hazardType: string;
  warningPresent: string;
  storeAwareness: string;
  permanentImpact: string;
  medicalCosts: string;
}

const initialFormData: RetailFormData = {
  storeType: '',
  accidentType: '',
  injurySeverity: '',
  hazardType: '',
  warningPresent: '',
  storeAwareness: '',
  permanentImpact: '',
  medicalCosts: ''
};

function calculateCompensation(data: RetailFormData): CalculatorResults {
  let min = 15000;
  let max = 75000;

  // Store type multipliers
  const storeMultipliers: Record<string, number> = {
    'big-box': 2.0,
    'grocery': 1.8,
    'department': 1.9,
    'hardware': 2.2,
    'warehouse-club': 2.3,
    'mall': 1.7,
    'convenience': 1.5,
    'specialty': 1.6
  };

  // Accident type multipliers
  const accidentMultipliers: Record<string, number> = {
    'slip-fall-wet': 2.5,
    'slip-fall-debris': 2.3,
    'trip-fall': 2.2,
    'falling-merchandise': 3.5,
    'cart-collision': 1.8,
    'automatic-door': 2.0,
    'escalator-elevator': 3.0,
    'parking-lot': 2.2,
    'assault-security': 4.0,
    'other': 1.8
  };

  // Injury severity multipliers
  const severityMultipliers: Record<string, number> = {
    'minor': 1.0,
    'moderate': 2.0,
    'serious': 3.5,
    'severe': 5.5,
    'life-altering': 8.0
  };

  // Hazard type factors
  const hazardMultipliers: Record<string, number> = {
    'wet-floor': 2.0,
    'torn-carpet': 2.2,
    'poor-lighting': 2.5,
    'defective-equipment': 3.0,
    'inadequate-security': 3.5,
    'blocked-aisle': 2.0,
    'uneven-surface': 2.3,
    'ice-snow': 2.4,
    'other': 1.8
  };

  // Warning sign factors
  const warningMultipliers: Record<string, number> = {
    'none': 3.0,
    'inadequate': 2.2,
    'present-ignored': 1.5,
    'obscured': 2.5,
    'present-adequate': 1.0
  };

  // Store awareness (notice requirement)
  const awarenessMultipliers: Record<string, number> = {
    'actual-notice': 3.0,
    'constructive-notice': 2.5,
    'created-hazard': 3.5,
    'negligent-inspection': 2.8,
    'no-notice': 1.0
  };

  // Permanent impact factors
  const impactMultipliers: Record<string, number> = {
    'none': 1.0,
    'minor-scarring': 1.5,
    'chronic-pain': 2.5,
    'limited-mobility': 3.5,
    'permanent-disability': 5.0,
    'life-long-care': 7.0
  };

  // Medical costs adjustment
  const medicalAdjustments: Record<string, number> = {
    'under-5k': 0,
    '5k-15k': 5000,
    '15k-50k': 20000,
    '50k-100k': 50000,
    '100k-250k': 100000,
    'over-250k': 200000
  };

  const storeMultiplier = storeMultipliers[data.storeType] || 1.0;
  const accidentMultiplier = accidentMultipliers[data.accidentType] || 1.0;
  const severityMultiplier = severityMultipliers[data.injurySeverity] || 1.0;
  const hazardMultiplier = hazardMultipliers[data.hazardType] || 1.0;
  const warningMultiplier = warningMultipliers[data.warningPresent] || 1.0;
  const awarenessMultiplier = awarenessMultipliers[data.storeAwareness] || 1.0;
  const impactMultiplier = impactMultipliers[data.permanentImpact] || 1.0;
  const medicalAdjustment = medicalAdjustments[data.medicalCosts] || 0;

  const totalMultiplier = storeMultiplier * accidentMultiplier * severityMultiplier * 
                         hazardMultiplier * warningMultiplier * awarenessMultiplier * 
                         impactMultiplier;

  min = Math.round((min * totalMultiplier) + medicalAdjustment);
  max = Math.round((max * totalMultiplier) + (medicalAdjustment * 1.5));

  // Ensure minimum values
  min = Math.max(min, 10000);
  max = Math.max(max, min * 1.5);

  return { min, max };
}

function validateForm(data: RetailFormData, step: number): boolean {
  switch (step) {
    case 1:
      return !!(data.storeType && data.accidentType && data.injurySeverity && data.hazardType);
    case 2:
      return !!(data.warningPresent && data.storeAwareness && 
                data.permanentImpact && data.medicalCosts);
    default:
      return false;
  }
}

export default function RetailAccidentCompensationCalculator() {
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
  } = useCalculatorForm<RetailFormData>(
    initialFormData,
    calculateCompensation,
    validateForm
  );

  return (
    <>
      <Helmet>
        <title>Retail Store Accident Compensation Calculator | Slip and Fall</title>
        <meta name="description" content="Calculate potential compensation for retail store accidents including slip and falls, falling merchandise, and premises liability claims. Free instant estimates." />
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
              <ShoppingCart className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Retail Store Accident Calculator</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get an estimate of potential compensation for retail store accidents and premises liability
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
                      {step === 1 ? 'Accident Details' : 'Liability Factors'}
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
                        Type of Store
                      </label>
                      <select
                        value={formData.storeType}
                        onChange={(e) => updateField('storeType', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select store type</option>
                        <option value="big-box">Big Box Retailer (Walmart, Target)</option>
                        <option value="grocery">Grocery Store</option>
                        <option value="department">Department Store</option>
                        <option value="hardware">Hardware/Home Improvement</option>
                        <option value="warehouse-club">Warehouse Club (Costco, Sam's)</option>
                        <option value="mall">Shopping Mall Common Area</option>
                        <option value="convenience">Convenience Store</option>
                        <option value="specialty">Specialty Retail</option>
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
                        <option value="slip-fall-wet">Slip and Fall (Wet Floor)</option>
                        <option value="slip-fall-debris">Slip and Fall (Debris)</option>
                        <option value="trip-fall">Trip and Fall</option>
                        <option value="falling-merchandise">Falling Merchandise</option>
                        <option value="cart-collision">Shopping Cart Collision</option>
                        <option value="automatic-door">Automatic Door Injury</option>
                        <option value="escalator-elevator">Escalator/Elevator Accident</option>
                        <option value="parking-lot">Parking Lot Accident</option>
                        <option value="assault-security">Assault (Inadequate Security)</option>
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
                        <option value="minor">Minor (bruises, sprains)</option>
                        <option value="moderate">Moderate (fractures, lacerations)</option>
                        <option value="serious">Serious (multiple fractures, surgery needed)</option>
                        <option value="severe">Severe (spinal injury, TBI, permanent damage)</option>
                        <option value="life-altering">Life-Altering (paralysis, major disability)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Type of Hazard
                      </label>
                      <select
                        value={formData.hazardType}
                        onChange={(e) => updateField('hazardType', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select hazard type</option>
                        <option value="wet-floor">Wet Floor/Spill</option>
                        <option value="torn-carpet">Torn Carpet/Mat</option>
                        <option value="poor-lighting">Poor Lighting</option>
                        <option value="defective-equipment">Defective Equipment</option>
                        <option value="inadequate-security">Inadequate Security</option>
                        <option value="blocked-aisle">Blocked Aisle</option>
                        <option value="uneven-surface">Uneven Surface</option>
                        <option value="ice-snow">Ice/Snow (Parking Lot)</option>
                        <option value="other">Other Hazard</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 2: Liability Factors */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Warning Signs Present?
                      </label>
                      <select
                        value={formData.warningPresent}
                        onChange={(e) => updateField('warningPresent', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select warning status</option>
                        <option value="none">No Warning Signs</option>
                        <option value="inadequate">Inadequate Warning</option>
                        <option value="present-ignored">Present but Store Ignored Hazard</option>
                        <option value="obscured">Sign Obscured/Hidden</option>
                        <option value="present-adequate">Adequate Warning Present</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Store Awareness of Hazard
                      </label>
                      <select
                        value={formData.storeAwareness}
                        onChange={(e) => updateField('storeAwareness', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select awareness level</option>
                        <option value="actual-notice">Actual Notice (Reported to Staff)</option>
                        <option value="constructive-notice">Constructive Notice (Existed Long Enough)</option>
                        <option value="created-hazard">Store Created the Hazard</option>
                        <option value="negligent-inspection">Negligent Inspection Procedures</option>
                        <option value="no-notice">No Notice (Recent Occurrence)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Permanent Impact
                      </label>
                      <select
                        value={formData.permanentImpact}
                        onChange={(e) => updateField('permanentImpact', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select permanent impact</option>
                        <option value="none">None (Full Recovery Expected)</option>
                        <option value="minor-scarring">Minor Scarring</option>
                        <option value="chronic-pain">Chronic Pain</option>
                        <option value="limited-mobility">Limited Mobility</option>
                        <option value="permanent-disability">Permanent Disability</option>
                        <option value="life-long-care">Life-Long Care Required</option>
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
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-15k">$5,000 - $15,000</option>
                        <option value="15k-50k">$15,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-250k">$100,000 - $250,000</option>
                        <option value="over-250k">Over $250,000</option>
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
                    subtitle="Based on retail store accident claims"
                    disclaimer="This is an educational estimate only and does not constitute legal advice. Actual compensation depends on numerous factors including jurisdiction, store's notice of hazard, comparative negligence, and specific case circumstances. Premises liability claims require proving the store knew or should have known about the hazard and failed to remedy it or warn customers. Store surveillance footage is critical evidence. Consult with an experienced premises liability attorney for proper case evaluation."
                    ctaText="Get Free Case Review"
                    ctaSubtext="Retail accident claims require thorough investigation"
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
                <h3 className="font-semibold mb-2">Notice Requirement</h3>
                <p className="text-sm text-muted-foreground">
                  Must prove store knew or should have known about the hazard
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold mb-2">Surveillance Video</h3>
                <p className="text-sm text-muted-foreground">
                  Request preservation of video evidence immediately
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold mb-2">Incident Reports</h3>
                <p className="text-sm text-muted-foreground">
                  Always file an incident report with store management
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
