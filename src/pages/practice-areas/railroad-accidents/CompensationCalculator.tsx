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

interface RailroadFormData extends CalculatorFormData {
  accidentType: string;
  injurySeverity: string;
  workRelated: string;
  medicalCosts: string;
  lostWages: string;
  ageRange: string;
}

const initialFormData: RailroadFormData = {
  accidentType: '',
  injurySeverity: '',
  workRelated: '',
  medicalCosts: '',
  lostWages: '',
  ageRange: ''
};

const calculateCompensation = (data: RailroadFormData): Results => {
  let baseMin = 200000;
  let baseMax = 500000;

  const accidentMultipliers: Record<string, number> = {
    'derailment': 3.0,
    'crossing-accident': 2.5,
    'worker-injury': 2.0,
    'equipment-failure': 2.2,
    'signal-failure': 2.3,
    'track-defect': 2.1
  };
  const accidentMult = accidentMultipliers[data.accidentType] || 1;

  const severityMultipliers: Record<string, number> = {
    'minor': 0.8,
    'moderate': 1.2,
    'severe': 2.0,
    'catastrophic': 3.5,
    'wrongful-death': 4.0
  };
  const severityMult = severityMultipliers[data.injurySeverity] || 1;

  const felaMult = data.workRelated === 'yes' ? 1.5 : 1.0;

  const medicalAdd = parseInt(data.medicalCosts) || 0;
  const wages = parseInt(data.lostWages) || 0;

  const ageMultipliers: Record<string, number> = {
    'under-30': 1.4,
    '30-45': 1.2,
    '45-60': 1.0,
    'over-60': 0.8
  };
  const ageMult = ageMultipliers[data.ageRange] || 1;

  const min = Math.round((baseMin * accidentMult * severityMult * felaMult * ageMult) + medicalAdd + wages);
  const max = Math.round((baseMax * accidentMult * severityMult * felaMult * ageMult) + (medicalAdd * 2.5) + (wages * 1.5));

  return { min, max };
};

const validateStep = (data: RailroadFormData, step: number): boolean => {
  if (step === 1) {
    return !!(data.accidentType && data.injurySeverity && data.workRelated);
  }
  if (step === 2) {
    return !!(data.medicalCosts && data.lostWages && data.ageRange);
  }
  return true;
};

export default function RailroadAccidentsCompensationCalculator() {
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
    validateStep
  );

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Type of Accident</label>
        <Select value={formData.accidentType} onValueChange={(value) => updateField('accidentType', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select accident type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="derailment">Train Derailment</SelectItem>
            <SelectItem value="crossing-accident">Railroad Crossing Accident</SelectItem>
            <SelectItem value="worker-injury">Railroad Worker Injury</SelectItem>
            <SelectItem value="equipment-failure">Equipment Failure</SelectItem>
            <SelectItem value="signal-failure">Signal/Switch Failure</SelectItem>
            <SelectItem value="track-defect">Track Defect</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Injury Severity</label>
        <Select value={formData.injurySeverity} onValueChange={(value) => updateField('injurySeverity', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select severity" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="minor">Minor Injuries</SelectItem>
            <SelectItem value="moderate">Moderate Injuries</SelectItem>
            <SelectItem value="severe">Severe Injuries</SelectItem>
            <SelectItem value="catastrophic">Catastrophic Injuries</SelectItem>
            <SelectItem value="wrongful-death">Wrongful Death</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Were you a railroad employee?</label>
        <Select value={formData.workRelated} onValueChange={(value) => updateField('workRelated', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select answer" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yes">Yes - FELA Applies</SelectItem>
            <SelectItem value="no">No - General Negligence</SelectItem>
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
            <SelectItem value="15000">Under $30,000</SelectItem>
            <SelectItem value="50000">$30,000 - $70,000</SelectItem>
            <SelectItem value="100000">$70,000 - $130,000</SelectItem>
            <SelectItem value="200000">$130,000 - $270,000</SelectItem>
            <SelectItem value="400000">Over $270,000</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Lost Wages</label>
        <Select value={formData.lostWages} onValueChange={(value) => updateField('lostWages', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select wage loss" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10000">Under $20,000</SelectItem>
            <SelectItem value="35000">$20,000 - $50,000</SelectItem>
            <SelectItem value="75000">$50,000 - $100,000</SelectItem>
            <SelectItem value="150000">$100,000 - $200,000</SelectItem>
            <SelectItem value="300000">Over $200,000</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Your Age Range</label>
        <Select value={formData.ageRange} onValueChange={(value) => updateField('ageRange', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select age range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="under-30">Under 30</SelectItem>
            <SelectItem value="30-45">30-45</SelectItem>
            <SelectItem value="45-60">45-60</SelectItem>
            <SelectItem value="over-60">Over 60</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  const damageCategories = [
    {
      title: 'Medical Expenses',
      description: 'Emergency treatment, surgery, rehabilitation, ongoing care'
    },
    {
      title: 'Lost Wages',
      description: 'Past and future income loss, reduced earning capacity'
    },
    {
      title: 'Pain and Suffering',
      description: 'Physical pain, emotional distress, loss of enjoyment of life'
    },
    {
      title: 'FELA Coverage',
      description: 'Federal Employers Liability Act protects railroad workers'
    }
  ];

  const disclaimer = "This estimate is for informational purposes only. Railroad accidents are governed by the Federal Employers' Liability Act (FELA) for workers and general negligence law for others. FELA allows railroad workers to recover damages for injuries caused by railroad negligence. Actual compensation depends on specific circumstances, degree of negligence, and comparative fault.";

  return (
    <>
      <Helmet>
        <title>Railroad Accident Compensation Calculator | FELA Claims</title>
        <meta name="description" content="Calculate potential compensation for railroad accidents and FELA cases. Free train derailment and worker injury estimates." />
      </Helmet>

      <div className="min-h-screen bg-background py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <Link to="/calculators" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Calculators
          </Link>

          <div className="bg-card rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-4xl font-bold mb-4">Railroad Accident Calculator</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Estimate compensation for FELA and railroad injury claims
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">$500K+</div>
                <div className="text-sm text-muted-foreground">FELA Case Average</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">Federal</div>
                <div className="text-sm text-muted-foreground">FELA Protection</div>
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
                title="Estimated Railroad Accident Compensation"
                subtitle="Based on FELA and federal railroad regulations"
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
