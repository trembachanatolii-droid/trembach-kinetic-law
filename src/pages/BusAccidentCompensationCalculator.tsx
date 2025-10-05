import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { FormNavigation } from '@/components/calculator/FormNavigation';
import { CalculatorResults } from '@/components/calculator/CalculatorResults';
import { useCalculatorForm, CalculatorFormData, CalculatorResults as Results } from '@/hooks/useCalculatorForm';

interface BusAccidentFormData extends CalculatorFormData {
  busOperator: string;
  passengerStatus: string;
  accidentType: string;
  injurySeverity: string;
  injuryType: string;
  medicalCosts: string;
  permanentDisability: string;
  multipleVictims: string;
  busDefect: string;
  age: string;
}

const initialFormData: BusAccidentFormData = {
  busOperator: '',
  passengerStatus: '',
  accidentType: '',
  injurySeverity: '',
  injuryType: '',
  medicalCosts: '',
  permanentDisability: '',
  multipleVictims: '',
  busDefect: '',
  age: ''
};

const calculateCompensation = (data: BusAccidentFormData): Results => {
  let baseMin = 50000;
  let baseMax = 150000;

  // Bus operator multiplier (common carrier liability)
  const operatorMultipliers: Record<string, number> = {
    'municipal-public': 1.2,
    'private-charter': 1.3,
    'school-bus': 1.4,
    'greyhound-interstate': 1.5,
    'tour-bus': 1.3
  };
  const operatorMult = operatorMultipliers[data.busOperator] || 1;

  // Passenger status multiplier
  const passengerMultipliers: Record<string, number> = {
    'seated-passenger': 1.0,
    'standing-passenger': 1.2,
    'boarding-alighting': 1.3,
    'pedestrian-struck': 1.5,
    'other-vehicle': 1.4
  };
  const passengerMult = passengerMultipliers[data.passengerStatus] || 1;

  // Accident type multiplier
  const accidentMultipliers: Record<string, number> = {
    'collision-vehicle': 1.2,
    'rollover': 1.8,
    'sudden-stop': 1.0,
    'door-malfunction': 1.3,
    'slip-fall-bus': 1.1,
    'hit-by-bus': 1.6
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

  // Permanent disability multiplier
  const disabilityMultipliers: Record<string, number> = {
    'none': 1.0,
    'partial-temporary': 1.3,
    'partial-permanent': 1.8,
    'total-permanent': 3.0
  };
  const disabilityMult = disabilityMultipliers[data.permanentDisability] || 1;

  // Multiple victims multiplier (stronger case)
  const multipleVictimsMult = data.multipleVictims === 'yes' ? 1.3 : 1.0;

  // Bus defect multiplier (product liability)
  const busDefectMult = data.busDefect === 'yes' ? 1.4 : 1.0;

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
    (baseMin * operatorMult * passengerMult * accidentMult * severityMult * 
     injuryMult * disabilityMult * multipleVictimsMult * busDefectMult * ageMult) + 
    medicalAdd
  );
  const max = Math.round(
    (baseMax * operatorMult * passengerMult * accidentMult * severityMult * 
     injuryMult * disabilityMult * multipleVictimsMult * busDefectMult * ageMult) + 
    (medicalAdd * 2)
  );

  return { min, max };
};

const validateStep = (data: BusAccidentFormData, step: number): boolean => {
  if (step === 1) {
    return !!(data.busOperator && data.passengerStatus && data.accidentType);
  }
  if (step === 2) {
    return !!(data.injurySeverity && data.injuryType && data.medicalCosts && 
              data.permanentDisability && data.multipleVictims && data.busDefect && data.age);
  }
  return true;
};

export default function BusAccidentCompensationCalculator() {
  const {
    step,
    formData,
    results,
    updateField,
    handleNext,
    handleBack,
    resetForm,
    isStepValid
  } = useCalculatorForm<BusAccidentFormData>(
    initialFormData,
    calculateCompensation,
    validateStep
  );

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Bus Operator Type</label>
        <select
          value={formData.busOperator}
          onChange={(e) => updateField('busOperator', e.target.value)}
          className="w-full p-3 border rounded-lg bg-background"
        >
          <option value="">Select operator type</option>
          <option value="municipal-public">Municipal/Public Transit</option>
          <option value="private-charter">Private Charter</option>
          <option value="school-bus">School Bus</option>
          <option value="greyhound-interstate">Greyhound/Interstate</option>
          <option value="tour-bus">Tour Bus</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Your Status at Time of Accident</label>
        <select
          value={formData.passengerStatus}
          onChange={(e) => updateField('passengerStatus', e.target.value)}
          className="w-full p-3 border rounded-lg bg-background"
        >
          <option value="">Select your status</option>
          <option value="seated-passenger">Seated Passenger</option>
          <option value="standing-passenger">Standing Passenger</option>
          <option value="boarding-alighting">Boarding/Alighting Bus</option>
          <option value="pedestrian-struck">Pedestrian Struck by Bus</option>
          <option value="other-vehicle">Other Vehicle Occupant</option>
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
          <option value="collision-vehicle">Collision with Vehicle</option>
          <option value="rollover">Bus Rollover</option>
          <option value="sudden-stop">Sudden Stop/Braking</option>
          <option value="door-malfunction">Door Malfunction</option>
          <option value="slip-fall-bus">Slip and Fall on Bus</option>
          <option value="hit-by-bus">Hit by Bus</option>
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
        <label className="block text-sm font-medium mb-2">Multiple Victims in Accident?</label>
        <select
          value={formData.multipleVictims}
          onChange={(e) => updateField('multipleVictims', e.target.value)}
          className="w-full p-3 border rounded-lg bg-background"
        >
          <option value="">Select answer</option>
          <option value="yes">Yes - Multiple Victims</option>
          <option value="no">No - Single Victim</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Bus Defect/Maintenance Issue Present?</label>
        <select
          value={formData.busDefect}
          onChange={(e) => updateField('busDefect', e.target.value)}
          className="w-full p-3 border rounded-lg bg-background"
        >
          <option value="">Select answer</option>
          <option value="yes">Yes - Defect or Poor Maintenance</option>
          <option value="no">No Apparent Defect</option>
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
      title: 'Common Carrier Liability',
      description: 'Higher duty of care owed by bus operators to passengers as common carriers'
    }
  ];

  const disclaimer = "This estimate is for informational purposes only and does not constitute legal advice. Bus accident claims involve complex liability issues including common carrier regulations, municipal immunity considerations, and federal transportation laws. Actual compensation depends on factors such as negligence, maintenance records, driver qualifications, and specific circumstances. Consult with a bus accident attorney for evaluation of your case.";

  return (
    <>
      <Helmet>
        <title>Bus Accident Compensation Calculator | California Personal Injury</title>
        <meta name="description" content="Calculate potential compensation for bus accident injuries. Common carrier liability applies to municipal, charter, and interstate bus accidents." />
      </Helmet>

      <div className="min-h-screen bg-background py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <Link to="/calculators" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Calculators
          </Link>

          <div className="bg-card rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-4xl font-bold mb-4">Bus Accident Compensation Calculator</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Estimate compensation for common carrier bus accident injuries
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">Higher Duty</div>
                <div className="text-sm text-muted-foreground">Common Carrier Care</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">$500K-$5M+</div>
                <div className="text-sm text-muted-foreground">Typical Coverage</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">Multiple Claims</div>
                <div className="text-sm text-muted-foreground">Mass Casualty Cases</div>
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
                title="Estimated Bus Accident Compensation"
                subtitle="Based on common carrier liability standards"
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
