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

interface AviationFormData extends CalculatorFormData {
  accidentType: string;
  injurySeverity: string;
  medicalCosts: string;
  age: string;
  income: string;
  aircraftType: string;
}

const initialFormData: AviationFormData = {
  accidentType: '',
  injurySeverity: '',
  medicalCosts: '',
  age: '',
  income: '',
  aircraftType: ''
};

const calculateCompensation = (data: AviationFormData): Results => {
  let baseMin = 500000;
  let baseMax = 3000000;

  const accidentMultipliers: Record<string, number> = {
    'commercial-crash': 3.0,
    'private-crash': 2.0,
    'helicopter-crash': 2.5,
    'midair-collision': 3.5,
    'runway-accident': 1.5,
    'in-flight-injury': 1.2
  };
  const accidentMult = accidentMultipliers[data.accidentType] || 1;

  const severityMultipliers: Record<string, number> = {
    'minor': 0.5,
    'moderate': 1.0,
    'severe': 2.0,
    'catastrophic': 3.5,
    'wrongful-death': 4.0
  };
  const severityMult = severityMultipliers[data.injurySeverity] || 1;

  const medicalAdd = parseInt(data.medicalCosts) || 0;
  const annualIncome = parseInt(data.income) || 0;
  const age = parseInt(data.age) || 45;
  const yearsToRetirement = Math.max(0, 67 - age);
  const lostEarnings = annualIncome * yearsToRetirement * 0.7;

  const aircraftMultipliers: Record<string, number> = {
    'commercial-airline': 1.5,
    'private-jet': 1.3,
    'small-aircraft': 1.0,
    'helicopter': 1.2,
    'charter': 1.1
  };
  const aircraftMult = aircraftMultipliers[data.aircraftType] || 1;

  const min = Math.round((baseMin * accidentMult * severityMult * aircraftMult) + medicalAdd + lostEarnings);
  const max = Math.round((baseMax * accidentMult * severityMult * aircraftMult) + (medicalAdd * 3) + (lostEarnings * 1.5));

  return { min, max };
};

const validateStep = (data: AviationFormData, step: number): boolean => {
  if (step === 1) {
    return !!(data.accidentType && data.aircraftType && data.injurySeverity);
  }
  if (step === 2) {
    return !!(data.medicalCosts && data.age && data.income);
  }
  return true;
};

export default function AviationCompensationCalculator() {
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
            <SelectItem value="commercial-crash">Commercial Plane Crash</SelectItem>
            <SelectItem value="private-crash">Private Plane Crash</SelectItem>
            <SelectItem value="helicopter-crash">Helicopter Crash</SelectItem>
            <SelectItem value="midair-collision">Midair Collision</SelectItem>
            <SelectItem value="runway-accident">Runway Accident</SelectItem>
            <SelectItem value="in-flight-injury">In-Flight Injury (Turbulence, etc.)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Aircraft Type</label>
        <Select value={formData.aircraftType} onValueChange={(value) => updateField('aircraftType', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select aircraft type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="commercial-airline">Commercial Airline</SelectItem>
            <SelectItem value="private-jet">Private Jet</SelectItem>
            <SelectItem value="small-aircraft">Small Aircraft (Cessna, etc.)</SelectItem>
            <SelectItem value="helicopter">Helicopter</SelectItem>
            <SelectItem value="charter">Charter Flight</SelectItem>
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
            <SelectItem value="50000">Under $100,000</SelectItem>
            <SelectItem value="200000">$100,000 - $300,000</SelectItem>
            <SelectItem value="500000">$300,000 - $700,000</SelectItem>
            <SelectItem value="1000000">$700,000 - $1,300,000</SelectItem>
            <SelectItem value="2000000">Over $1,300,000</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Your Age</label>
        <Select value={formData.age} onValueChange={(value) => updateField('age', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select age range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="25">Under 30</SelectItem>
            <SelectItem value="35">30-40</SelectItem>
            <SelectItem value="45">40-50</SelectItem>
            <SelectItem value="55">50-60</SelectItem>
            <SelectItem value="65">60+</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Annual Income</label>
        <Select value={formData.income} onValueChange={(value) => updateField('income', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select income range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="40000">Under $50,000</SelectItem>
            <SelectItem value="75000">$50,000 - $100,000</SelectItem>
            <SelectItem value="125000">$100,000 - $150,000</SelectItem>
            <SelectItem value="200000">$150,000 - $250,000</SelectItem>
            <SelectItem value="350000">Over $250,000</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  const damageCategories = [
    {
      title: 'Medical Expenses',
      description: 'Emergency care, surgery, rehabilitation, long-term treatment'
    },
    {
      title: 'Lost Income',
      description: 'Past and future lost earnings, reduced earning capacity'
    },
    {
      title: 'Pain and Suffering',
      description: 'Physical pain, emotional trauma, PTSD, loss of quality of life'
    },
    {
      title: 'Aviation Liability',
      description: 'Pilot negligence, aircraft defects, maintenance failures, air traffic control errors'
    }
  ];

  const disclaimer = "This estimate is for informational purposes only. Aviation accidents involve complex federal regulations including the Federal Aviation Act and Warsaw/Montreal Conventions for international flights. Liability may involve aircraft manufacturers, airlines, maintenance providers, and others. Actual compensation depends on specific circumstances, applicable laws, and degree of negligence.";

  return (
    <>
      <Helmet>
        <title>Aviation Accident Compensation Calculator | Plane Crash Claims</title>
        <meta name="description" content="Calculate potential compensation for aviation accidents and plane crashes. Free catastrophic injury estimates." />
      </Helmet>

      <div className="min-h-screen bg-background py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <Link to="/calculators" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Calculators
          </Link>

          <div className="bg-card rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-4xl font-bold mb-4">Aviation Accident Calculator</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Estimate compensation for plane crash and aviation injuries
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">$3M+</div>
                <div className="text-sm text-muted-foreground">Commercial Crash Average</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">Catastrophic</div>
                <div className="text-sm text-muted-foreground">Injury Specialization</div>
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
                title="Estimated Aviation Accident Compensation"
                subtitle="Based on federal aviation regulations"
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
