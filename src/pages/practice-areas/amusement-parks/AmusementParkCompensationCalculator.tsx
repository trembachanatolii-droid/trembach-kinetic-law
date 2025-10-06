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

interface AmusementParkFormData extends CalculatorFormData {
  injuryType: string;
  rideType: string;
  medicalCosts: string;
  timeOffWork: string;
  permanentDisability: string;
  age: string;
}

const initialFormData: AmusementParkFormData = {
  injuryType: '',
  rideType: '',
  medicalCosts: '',
  timeOffWork: '',
  permanentDisability: '',
  age: ''
};

const calculateCompensation = (data: AmusementParkFormData): Results => {
  let baseMin = 100000;
  let baseMax = 300000;

  const injuryMultipliers: Record<string, number> = {
    'head-injury': 3.0,
    'spinal-injury': 3.5,
    'broken-bones': 1.5,
    'whiplash': 1.2,
    'internal-injuries': 2.5,
    'death': 4.0
  };
  const injuryMult = injuryMultipliers[data.injuryType] || 1;

  const rideMultipliers: Record<string, number> = {
    'roller-coaster': 1.5,
    'water-slide': 1.3,
    'ferris-wheel': 1.2,
    'bumper-cars': 1.1,
    'spinning-ride': 1.4,
    'drop-tower': 1.6
  };
  const rideMult = rideMultipliers[data.rideType] || 1;

  const medicalAdd = parseInt(data.medicalCosts) || 0;
  const timeOff = parseInt(data.timeOffWork) || 0;

  const disabilityMultipliers: Record<string, number> = {
    'none': 1.0,
    'temporary': 1.3,
    'partial': 1.8,
    'total': 3.0
  };
  const disabilityMult = disabilityMultipliers[data.permanentDisability] || 1;

  const ageMultipliers: Record<string, number> = {
    'under-18': 1.5,
    '18-40': 1.3,
    '40-60': 1.0,
    'over-60': 0.9
  };
  const ageMult = ageMultipliers[data.age] || 1;

  const min = Math.round((baseMin * injuryMult * rideMult * disabilityMult * ageMult) + medicalAdd + (timeOff * 1000));
  const max = Math.round((baseMax * injuryMult * rideMult * disabilityMult * ageMult) + (medicalAdd * 2) + (timeOff * 2000));

  return { min, max };
};

const validateStep = (data: AmusementParkFormData, step: number): boolean => {
  if (step === 1) {
    return !!(data.injuryType && data.rideType && data.age);
  }
  if (step === 2) {
    return !!(data.medicalCosts && data.timeOffWork && data.permanentDisability);
  }
  return true;
};

export default function AmusementParkCompensationCalculator() {
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
            <SelectItem value="head-injury">Head/Brain Injury</SelectItem>
            <SelectItem value="spinal-injury">Spinal Cord Injury</SelectItem>
            <SelectItem value="broken-bones">Broken Bones/Fractures</SelectItem>
            <SelectItem value="whiplash">Whiplash/Neck Injury</SelectItem>
            <SelectItem value="internal-injuries">Internal Injuries</SelectItem>
            <SelectItem value="death">Wrongful Death</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Type of Ride</label>
        <Select value={formData.rideType} onValueChange={(value) => updateField('rideType', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select ride type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="roller-coaster">Roller Coaster</SelectItem>
            <SelectItem value="water-slide">Water Slide</SelectItem>
            <SelectItem value="ferris-wheel">Ferris Wheel</SelectItem>
            <SelectItem value="bumper-cars">Bumper Cars</SelectItem>
            <SelectItem value="spinning-ride">Spinning Ride</SelectItem>
            <SelectItem value="drop-tower">Drop Tower</SelectItem>
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
            <SelectItem value="under-18">Under 18</SelectItem>
            <SelectItem value="18-40">18-40</SelectItem>
            <SelectItem value="40-60">40-60</SelectItem>
            <SelectItem value="over-60">Over 60</SelectItem>
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
            <SelectItem value="5000">Under $10,000</SelectItem>
            <SelectItem value="20000">$10,000 - $30,000</SelectItem>
            <SelectItem value="50000">$30,000 - $70,000</SelectItem>
            <SelectItem value="100000">$70,000 - $130,000</SelectItem>
            <SelectItem value="200000">Over $130,000</SelectItem>
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
            <SelectItem value="2">1-2 weeks</SelectItem>
            <SelectItem value="6">3-8 weeks</SelectItem>
            <SelectItem value="16">2-4 months</SelectItem>
            <SelectItem value="26">4-6 months</SelectItem>
            <SelectItem value="52">Over 6 months</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Permanent Disability</label>
        <Select value={formData.permanentDisability} onValueChange={(value) => updateField('permanentDisability', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select disability level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">No Permanent Disability</SelectItem>
            <SelectItem value="temporary">Temporary Disability</SelectItem>
            <SelectItem value="partial">Partial Permanent Disability</SelectItem>
            <SelectItem value="total">Total Permanent Disability</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  const damageCategories = [
    {
      title: 'Medical Expenses',
      description: 'Emergency treatment, hospitalization, surgery, rehabilitation'
    },
    {
      title: 'Lost Wages',
      description: 'Time off work, reduced earning capacity, future income loss'
    },
    {
      title: 'Pain and Suffering',
      description: 'Physical pain, emotional distress, loss of enjoyment of life'
    },
    {
      title: 'Park Negligence',
      description: 'Ride defects, inadequate maintenance, operator error, safety violations'
    }
  ];

  const disclaimer = "This estimate is for informational purposes only. Amusement park injury claims involve premises liability law and product liability when ride defects are involved. California law requires parks to maintain rides in safe condition and provide adequate warnings. Actual compensation depends on specific circumstances, park negligence, and comparative fault.";

  return (
    <>
      <Helmet>
        <title>Amusement Park Accident Compensation Calculator | Theme Park Injuries</title>
        <meta name="description" content="Calculate potential compensation for amusement park ride accidents. Free theme park injury estimates." />
      </Helmet>

      <div className="min-h-screen bg-background py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <Link to="/calculators" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Calculators
          </Link>

          <div className="bg-card rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-4xl font-bold mb-4">Amusement Park Accident Calculator</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Estimate compensation for theme park ride injuries
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">$300K+</div>
                <div className="text-sm text-muted-foreground">Serious Ride Injury</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">Negligence</div>
                <div className="text-sm text-muted-foreground">Park Liability Cases</div>
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
                title="Estimated Amusement Park Injury Compensation"
                subtitle="Based on premises and product liability"
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
