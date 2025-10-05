import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { FormNavigation } from '@/components/calculator/FormNavigation';
import { CalculatorResults } from '@/components/calculator/CalculatorResults';
import { useCalculatorForm, CalculatorFormData, CalculatorResults as Results } from '@/hooks/useCalculatorForm';

interface RideshareFormData extends CalculatorFormData {
  rideService: string;
  driverStatus: string;
  victimRole: string;
  accidentType: string;
  injurySeverity: string;
  injuryType: string;
  medicalCosts: string;
  driverBackground: string;
  permanentDisability: string;
  comparativeFault: string;
  age: string;
}

const initialFormData: RideshareFormData = {
  rideService: '',
  driverStatus: '',
  victimRole: '',
  accidentType: '',
  injurySeverity: '',
  injuryType: '',
  medicalCosts: '',
  driverBackground: '',
  permanentDisability: '',
  comparativeFault: '',
  age: ''
};

const calculateCompensation = (data: RideshareFormData): Results => {
  let baseMin = 50000;
  let baseMax = 150000;

  // Ride service multiplier
  const serviceMultipliers: Record<string, number> = {
    'uber': 1.0,
    'lyft': 1.0,
    'other-rideshare': 0.9
  };
  const serviceMult = serviceMultipliers[data.rideService] || 1;

  // Driver status multiplier (insurance coverage tiers)
  const statusMultipliers: Record<string, number> = {
    'app-off': 0.8,
    'app-on-available': 1.0,
    'en-route-pickup': 1.3,
    'passenger-onboard': 1.5,
    'commercial-use': 1.2
  };
  const statusMult = statusMultipliers[data.driverStatus] || 1;

  // Victim role multiplier
  const roleMultipliers: Record<string, number> = {
    'passenger-rideshare': 1.5,
    'other-vehicle-driver': 1.2,
    'other-vehicle-passenger': 1.3,
    'pedestrian': 1.4,
    'cyclist': 1.4
  };
  const roleMult = roleMultipliers[data.victimRole] || 1;

  // Accident type multiplier
  const accidentMultipliers: Record<string, number> = {
    'rear-end': 1.1,
    'side-impact': 1.3,
    'head-on': 1.8,
    'rollover': 1.7,
    'hit-pedestrian': 1.6,
    'multi-vehicle': 1.4
  };
  const accidentMult = accidentMultipliers[data.accidentType] || 1;

  // Injury severity multiplier
  const severityMultipliers: Record<string, number> = {
    'minor': 1.0,
    'moderate': 1.5,
    'serious': 2.5,
    'severe': 4.0,
    'catastrophic': 6.0
  };
  const severityMult = severityMultipliers[data.injurySeverity] || 1;

  // Injury type multiplier
  const injuryMultipliers: Record<string, number> = {
    'soft-tissue': 1.0,
    'fractures': 1.4,
    'head-brain': 2.0,
    'spinal-cord': 2.5,
    'internal-injuries': 1.8,
    'multiple-injuries': 1.6
  };
  const injuryMult = injuryMultipliers[data.injuryType] || 1;

  // Medical costs addition
  const medicalAdditions: Record<string, number> = {
    'under-10k': 5000,
    '10k-25k': 15000,
    '25k-50k': 35000,
    '50k-100k': 75000,
    '100k-250k': 175000,
    'over-250k': 300000
  };
  const medicalAdd = medicalAdditions[data.medicalCosts] || 0;

  // Driver background check failure multiplier
  const backgroundMultipliers: Record<string, number> = {
    'passed': 1.0,
    'issues-found': 1.4,
    'not-conducted': 1.5,
    'unknown': 1.0
  };
  const backgroundMult = backgroundMultipliers[data.driverBackground] || 1;

  // Permanent disability multiplier
  const disabilityMultipliers: Record<string, number> = {
    'none': 1.0,
    'partial-temporary': 1.3,
    'partial-permanent': 1.8,
    'total-permanent': 3.0
  };
  const disabilityMult = disabilityMultipliers[data.permanentDisability] || 1;

  // Comparative fault reduction
  const faultReductions: Record<string, number> = {
    '0': 1.0,
    '1-10': 0.95,
    '11-25': 0.85,
    '26-49': 0.70,
    '50-plus': 0.0
  };
  const faultReduction = faultReductions[data.comparativeFault] || 1;

  // Age adjustment
  const ageMultipliers: Record<string, number> = {
    'under-18': 1.3,
    '18-40': 1.2,
    '41-65': 1.0,
    'over-65': 0.9
  };
  const ageMult = ageMultipliers[data.age] || 1;

  // Calculate final range
  const min = Math.round(
    (baseMin * serviceMult * statusMult * roleMult * accidentMult * severityMult * 
     injuryMult * backgroundMult * disabilityMult * ageMult * faultReduction) + 
    medicalAdd
  );
  const max = Math.round(
    (baseMax * serviceMult * statusMult * roleMult * accidentMult * severityMult * 
     injuryMult * backgroundMult * disabilityMult * ageMult * faultReduction) + 
    (medicalAdd * 2)
  );

  return { min, max };
};

const validateStep = (data: RideshareFormData, step: number): boolean => {
  if (step === 1) {
    return !!(data.rideService && data.driverStatus && data.victimRole && data.accidentType);
  }
  if (step === 2) {
    return !!(data.injurySeverity && data.injuryType && data.medicalCosts && 
              data.driverBackground && data.permanentDisability && data.comparativeFault && data.age);
  }
  return true;
};

export default function RideshareCompensationCalculator() {
  const {
    step,
    formData,
    results,
    updateField,
    handleNext,
    handleBack,
    resetForm,
    isStepValid
  } = useCalculatorForm<RideshareFormData>(
    initialFormData,
    calculateCompensation,
    validateStep
  );

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Rideshare Service</label>
        <select
          value={formData.rideService}
          onChange={(e) => updateField('rideService', e.target.value)}
          className="w-full p-3 border rounded-lg bg-background"
        >
          <option value="">Select service</option>
          <option value="uber">Uber</option>
          <option value="lyft">Lyft</option>
          <option value="other-rideshare">Other Rideshare Service</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Driver Status at Time of Accident</label>
        <select
          value={formData.driverStatus}
          onChange={(e) => updateField('driverStatus', e.target.value)}
          className="w-full p-3 border rounded-lg bg-background"
        >
          <option value="">Select driver status</option>
          <option value="app-off">App Off - Personal Use</option>
          <option value="app-on-available">App On - Waiting for Ride</option>
          <option value="en-route-pickup">En Route to Pick Up Passenger</option>
          <option value="passenger-onboard">Passenger On Board</option>
          <option value="commercial-use">Using Personal Insurance</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Your Role</label>
        <select
          value={formData.victimRole}
          onChange={(e) => updateField('victimRole', e.target.value)}
          className="w-full p-3 border rounded-lg bg-background"
        >
          <option value="">Select your role</option>
          <option value="passenger-rideshare">Rideshare Passenger</option>
          <option value="other-vehicle-driver">Other Vehicle Driver</option>
          <option value="other-vehicle-passenger">Other Vehicle Passenger</option>
          <option value="pedestrian">Pedestrian</option>
          <option value="cyclist">Cyclist</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Type of Accident</label>
        <select
          value={formData.accidentType}
          onChange={(e) => updateField('accidentType', e.target.value)}
          className="w-full p-3 border rounded-lg bg-background"
        >
          <option value="">Select accident type</option>
          <option value="rear-end">Rear-End Collision</option>
          <option value="side-impact">Side Impact (T-bone)</option>
          <option value="head-on">Head-On Collision</option>
          <option value="rollover">Rollover</option>
          <option value="hit-pedestrian">Hit Pedestrian/Cyclist</option>
          <option value="multi-vehicle">Multi-Vehicle Pileup</option>
        </select>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Injury Severity</label>
        <select
          value={formData.injurySeverity}
          onChange={(e) => updateField('injurySeverity', e.target.value)}
          className="w-full p-3 border rounded-lg bg-background"
        >
          <option value="">Select severity</option>
          <option value="minor">Minor (bruises, minor cuts)</option>
          <option value="moderate">Moderate (sprains, minor fractures)</option>
          <option value="serious">Serious (major fractures, surgery needed)</option>
          <option value="severe">Severe (multiple surgeries, long-term care)</option>
          <option value="catastrophic">Catastrophic (life-altering injuries)</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Type of Injury</label>
        <select
          value={formData.injuryType}
          onChange={(e) => updateField('injuryType', e.target.value)}
          className="w-full p-3 border rounded-lg bg-background"
        >
          <option value="">Select injury type</option>
          <option value="soft-tissue">Soft Tissue (whiplash, strains)</option>
          <option value="fractures">Fractures/Broken Bones</option>
          <option value="head-brain">Head/Brain Injury</option>
          <option value="spinal-cord">Spinal Cord Injury</option>
          <option value="internal-injuries">Internal Injuries</option>
          <option value="multiple-injuries">Multiple Injury Types</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Total Medical Costs</label>
        <select
          value={formData.medicalCosts}
          onChange={(e) => updateField('medicalCosts', e.target.value)}
          className="w-full p-3 border rounded-lg bg-background"
        >
          <option value="">Select cost range</option>
          <option value="under-10k">Under $10,000</option>
          <option value="10k-25k">$10,000 - $25,000</option>
          <option value="25k-50k">$25,000 - $50,000</option>
          <option value="50k-100k">$50,000 - $100,000</option>
          <option value="100k-250k">$100,000 - $250,000</option>
          <option value="over-250k">Over $250,000</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Driver Background Check Status</label>
        <select
          value={formData.driverBackground}
          onChange={(e) => updateField('driverBackground', e.target.value)}
          className="w-full p-3 border rounded-lg bg-background"
        >
          <option value="">Select status</option>
          <option value="passed">Passed Background Check</option>
          <option value="issues-found">Issues Found (DUI, violations)</option>
          <option value="not-conducted">Background Check Not Conducted</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Permanent Disability</label>
        <select
          value={formData.permanentDisability}
          onChange={(e) => updateField('permanentDisability', e.target.value)}
          className="w-full p-3 border rounded-lg bg-background"
        >
          <option value="">Select disability level</option>
          <option value="none">No Permanent Disability</option>
          <option value="partial-temporary">Partial Temporary Disability</option>
          <option value="partial-permanent">Partial Permanent Disability</option>
          <option value="total-permanent">Total Permanent Disability</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Your Percentage of Fault (if any)</label>
        <select
          value={formData.comparativeFault}
          onChange={(e) => updateField('comparativeFault', e.target.value)}
          className="w-full p-3 border rounded-lg bg-background"
        >
          <option value="">Select fault percentage</option>
          <option value="0">0% - Not at Fault</option>
          <option value="1-10">1-10% At Fault</option>
          <option value="11-25">11-25% At Fault</option>
          <option value="26-49">26-49% At Fault</option>
          <option value="50-plus">50%+ At Fault (No Recovery)</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Your Age</label>
        <select
          value={formData.age}
          onChange={(e) => updateField('age', e.target.value)}
          className="w-full p-3 border rounded-lg bg-background"
        >
          <option value="">Select age range</option>
          <option value="under-18">Under 18</option>
          <option value="18-40">18-40</option>
          <option value="41-65">41-65</option>
          <option value="over-65">Over 65</option>
        </select>
      </div>
    </div>
  );

  const damageCategories = [
    {
      title: 'Medical Expenses',
      description: 'Emergency care, hospitalization, surgeries, rehabilitation, and future medical treatment'
    },
    {
      title: 'Lost Wages',
      description: 'Past and future income loss, reduced earning capacity due to injuries'
    },
    {
      title: 'Pain and Suffering',
      description: 'Physical pain, emotional distress, loss of enjoyment of life'
    },
    {
      title: 'Insurance Coverage Tiers',
      description: 'Uber/Lyft provide $1M+ coverage when driver has passenger or en route to pickup'
    }
  ];

  const disclaimer = "This estimate is for informational purposes only and does not constitute legal advice. Rideshare accident claims involve complex insurance coverage issues that depend on driver status at time of accident. Uber and Lyft provide different coverage tiers: contingent liability ($50K/$100K when app on), $1M+ when en route or with passenger. California comparative negligence applies. Actual compensation depends on specific circumstances, insurance policies, and multi-party liability. Consult with a rideshare accident attorney for evaluation of your case.";

  return (
    <>
      <Helmet>
        <title>Uber/Lyft Rideshare Accident Calculator | California Personal Injury</title>
        <meta name="description" content="Calculate potential compensation for Uber and Lyft rideshare accident injuries. Insurance coverage depends on driver app status." />
      </Helmet>

      <div className="min-h-screen bg-background py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <Link to="/calculators" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Calculators
          </Link>

          <div className="bg-card rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-4xl font-bold mb-4">Uber/Lyft Accident Compensation Calculator</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Estimate compensation for rideshare accident injuries
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">$1M+</div>
                <div className="text-sm text-muted-foreground">Coverage w/ Passenger</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">4 Tiers</div>
                <div className="text-sm text-muted-foreground">Insurance Coverage</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">App Status</div>
                <div className="text-sm text-muted-foreground">Determines Coverage</div>
              </div>
            </div>

            {step < 3 && (
              <div className="mb-6">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>Step {step} of 2</span>
                  <span>{step === 1 ? 'Accident Details' : 'Injury & Damages'}</span>
                </div>
                <Progress value={(step / 2) * 100} />
              </div>
            )}

            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && results && (
              <CalculatorResults
                title="Estimated Rideshare Accident Compensation"
                subtitle="Based on driver status and insurance coverage tiers"
                min={results.min}
                max={results.max}
                damageCategories={damageCategories}
                disclaimer={disclaimer}
                ctaText="Get Free Case Evaluation"
              />
            )}

            {step < 3 ? (
              <FormNavigation
                currentStep={step}
                totalSteps={3}
                isValid={isStepValid()}
                onBack={handleBack}
                onNext={handleNext}
              />
            ) : (
              <div className="flex gap-4 pt-8">
                <Button
                  size="lg"
                  onClick={resetForm}
                  variant="outline"
                  className="flex-1 h-14"
                >
                  Start Over
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
