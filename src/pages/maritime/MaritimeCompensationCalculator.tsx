import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { FormNavigation } from '@/components/calculator/FormNavigation';
import { CalculatorResults } from '@/components/calculator/CalculatorResults';
import { useCalculatorForm, CalculatorFormData, CalculatorResults as Results } from '@/hooks/useCalculatorForm';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface MaritimeFormData extends CalculatorFormData {
  injuryType: string;
  vesselType: string;
  medicalCosts: string;
  weeklyWages: string;
  timeOffWork: string;
  maritimeEmployment: string;
}

const initialFormData: MaritimeFormData = {
  injuryType: '',
  vesselType: '',
  medicalCosts: '',
  weeklyWages: '',
  timeOffWork: '',
  maritimeEmployment: ''
};

const calculateCompensation = (data: MaritimeFormData): Results => {
  let baseMin = 150000;
  let baseMax = 400000;

  const injuryMultipliers: Record<string, number> = {
    'back-injury': 2.0,
    'amputation': 3.5,
    'head-injury': 3.0,
    'burns': 2.5,
    'respiratory': 2.2,
    'wrongful-death': 4.0
  };
  const injuryMult = injuryMultipliers[data.injuryType] || 1;

  const vesselMultipliers: Record<string, number> = {
    'cargo-ship': 1.4,
    'cruise-ship': 1.5,
    'fishing-vessel': 1.3,
    'offshore-rig': 1.6,
    'tugboat': 1.2,
    'barge': 1.1
  };
  const vesselMult = vesselMultipliers[data.vesselType] || 1;

  const medicalAdd = parseInt(data.medicalCosts) || 0;
  const wages = parseInt(data.weeklyWages) || 0;
  const weeks = parseInt(data.timeOffWork) || 0;
  const lostWages = wages * weeks;

  const employmentMult = data.maritimeEmployment === 'yes' ? 1.5 : 1.0;

  const min = Math.round((baseMin * injuryMult * vesselMult * employmentMult) + medicalAdd + lostWages);
  const max = Math.round((baseMax * injuryMult * vesselMult * employmentMult) + (medicalAdd * 2) + (lostWages * 1.5));

  return { min, max };
};

const validateStep = (data: MaritimeFormData, step: number): boolean => {
  if (step === 1) {
    return !!(data.injuryType && data.vesselType && data.maritimeEmployment);
  }
  if (step === 2) {
    return !!(data.medicalCosts && data.weeklyWages && data.timeOffWork);
  }
  return true;
};

export default function MaritimeCompensationCalculator() {
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
    validateStep
  );

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Type of Injury</label>
        <Select value={formData.injuryType} onValueChange={(value) => updateField('injuryType', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select injury type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="back-injury">Back/Spinal Injury</SelectItem>
            <SelectItem value="amputation">Amputation</SelectItem>
            <SelectItem value="head-injury">Head/Brain Injury</SelectItem>
            <SelectItem value="burns">Burns</SelectItem>
            <SelectItem value="respiratory">Respiratory Injury</SelectItem>
            <SelectItem value="wrongful-death">Wrongful Death</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Type of Vessel</label>
        <Select value={formData.vesselType} onValueChange={(value) => updateField('vesselType', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select vessel type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cargo-ship">Cargo Ship</SelectItem>
            <SelectItem value="cruise-ship">Cruise Ship</SelectItem>
            <SelectItem value="fishing-vessel">Fishing Vessel</SelectItem>
            <SelectItem value="offshore-rig">Offshore Rig/Platform</SelectItem>
            <SelectItem value="tugboat">Tugboat</SelectItem>
            <SelectItem value="barge">Barge</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Were you employed in maritime service?</label>
        <Select value={formData.maritimeEmployment} onValueChange={(value) => updateField('maritimeEmployment', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select answer" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yes">Yes - Jones Act Applies</SelectItem>
            <SelectItem value="no">No - LHWCA Applies</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Total Medical Costs</label>
        <Select value={formData.medicalCosts} onValueChange={(value) => updateField('medicalCosts', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select cost range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10000">Under $25,000</SelectItem>
            <SelectItem value="37500">$25,000 - $50,000</SelectItem>
            <SelectItem value="75000">$50,000 - $100,000</SelectItem>
            <SelectItem value="150000">$100,000 - $200,000</SelectItem>
            <SelectItem value="300000">$200,000 - $400,000</SelectItem>
            <SelectItem value="500000">Over $400,000</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Weekly Wages</label>
        <Select value={formData.weeklyWages} onValueChange={(value) => updateField('weeklyWages', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select wage range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="800">$500 - $1,000/week</SelectItem>
            <SelectItem value="1250">$1,000 - $1,500/week</SelectItem>
            <SelectItem value="1750">$1,500 - $2,000/week</SelectItem>
            <SelectItem value="2500">$2,000 - $3,000/week</SelectItem>
            <SelectItem value="4000">Over $3,000/week</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Time Off Work (weeks)</label>
        <Select value={formData.timeOffWork} onValueChange={(value) => updateField('timeOffWork', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select time off" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="4">1-4 weeks</SelectItem>
            <SelectItem value="12">1-3 months</SelectItem>
            <SelectItem value="26">3-6 months</SelectItem>
            <SelectItem value="52">6-12 months</SelectItem>
            <SelectItem value="104">Over 1 year</SelectItem>
            <SelectItem value="520">Permanent disability</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  const damageCategories = [
    {
      title: 'Medical Expenses',
      description: 'Emergency treatment, surgery, hospitalization, rehabilitation'
    },
    {
      title: 'Lost Wages',
      description: 'Maintenance and cure, lost income, reduced earning capacity'
    },
    {
      title: 'Pain and Suffering',
      description: 'Physical pain, emotional distress, loss of enjoyment of life'
    },
    {
      title: 'Jones Act/LHWCA',
      description: 'Vessel negligence, unseaworthiness, employer liability'
    }
  ];

  const disclaimer = "This estimate is for informational purposes only. Maritime injury claims are governed by federal law including the Jones Act (46 U.S.C. § 30104) for seamen and the Longshore and Harbor Workers' Compensation Act (LHWCA) for other maritime workers. Jones Act claims allow for negligence-based recovery and unseaworthiness claims. Actual compensation depends on specific circumstances, vessel type, employment status, and degree of vessel or employer fault.";

  return (
    <>
      <Helmet>
        <title>Maritime Accident Compensation Calculator | Jones Act Claims</title>
        <meta name="description" content="Calculate potential compensation for maritime injuries under Jones Act and LHWCA. Free seaman injury estimates." />
      </Helmet>

      <div className="min-h-screen bg-background py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <Link to="/calculators" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Calculators
          </Link>

          <div className="bg-card rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-4xl font-bold mb-4">Maritime Accident Calculator</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Estimate compensation for Jones Act and LHWCA claims
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">$400K+</div>
                <div className="text-sm text-muted-foreground">Average Seaman Injury</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">Jones Act</div>
                <div className="text-sm text-muted-foreground">Specialized Law</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">No Fee</div>
                <div className="text-sm text-muted-foreground">Unless We Win</div>
              </div>
            </div>

            {step < 3 && (
              <div className="mb-6">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>Step {step} of 2</span>
                  <span>{step === 1 ? 'Accident Details' : 'Financial Impact'}</span>
                </div>
                <Progress value={(step / 2) * 100} />
              </div>
            )}

            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && results && (
              <CalculatorResults
                title="Estimated Maritime Injury Compensation"
                subtitle="Based on Jones Act and LHWCA guidelines"
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
