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

interface BusAccidentFormData extends CalculatorFormData {
  injuryType: string;
  busType: string;
  medicalCosts: string;
  lostWages: string;
  painLevel: string;
  age: string;
  permanentDisability: string;
  publicEntity: string;
}

const initialFormData: BusAccidentFormData = {
  injuryType: '',
  busType: '',
  medicalCosts: '',
  lostWages: '',
  painLevel: '',
  age: '',
  permanentDisability: '',
  publicEntity: ''
};

const calculateCompensation = (data: BusAccidentFormData): Results => {
  let baseMin = 100000;
  let baseMax = 250000;

  const injuryMultipliers: Record<string, number> = {
    'whiplash': 1.2,
    'broken-bones': 1.8,
    'spinal-injury': 3.5,
    'head-injury': 3.0,
    'internal-injuries': 2.5,
    'death': 4.0
  };
  const injuryMult = injuryMultipliers[data.injuryType] || 1;

  const busMultipliers: Record<string, number> = {
    'public-transit': 1.3,
    'school-bus': 1.4,
    'tour-bus': 1.2,
    'charter-bus': 1.2,
    'private-shuttle': 1.1
  };
  const busMult = busMultipliers[data.busType] || 1;

  const medicalAdd = parseInt(data.medicalCosts) || 0;
  const wages = parseInt(data.lostWages) || 0;

  const painMultipliers: Record<string, number> = {
    'minimal': 1.0,
    'moderate': 1.3,
    'severe': 1.8,
    'extreme': 2.5
  };
  const painMult = painMultipliers[data.painLevel] || 1;

  const ageMultipliers: Record<string, number> = {
    'under-25': 1.5,
    '25-45': 1.3,
    '45-65': 1.0,
    'over-65': 0.9
  };
  const ageMult = ageMultipliers[data.age] || 1;

  const disabilityMultipliers: Record<string, number> = {
    'none': 1.0,
    'partial': 1.8,
    'total': 3.0
  };
  const disabilityMult = disabilityMultipliers[data.permanentDisability] || 1;

  const publicMult = data.publicEntity === 'yes' ? 1.2 : 1.0;

  const min = Math.round((baseMin * injuryMult * busMult * painMult * ageMult * disabilityMult * publicMult) + medicalAdd + wages);
  const max = Math.round((baseMax * injuryMult * busMult * painMult * ageMult * disabilityMult * publicMult) + (medicalAdd * 2) + (wages * 1.5));

  return { min, max };
};

const validateStep = (data: BusAccidentFormData, step: number): boolean => {
  if (step === 1) return !!(data.injuryType && data.busType && data.publicEntity);
  if (step === 2) return !!(data.medicalCosts && data.lostWages && data.painLevel && data.age && data.permanentDisability);
  return true;
};

export default function BusAccidentCompensationCalculator() {
  const { step, formData, results, updateField, handleNext, handleBack, resetForm, isStepValid } = 
    useCalculatorForm<BusAccidentFormData>(initialFormData, calculateCompensation, validateStep);

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Type of Injury</label>
        <Select value={formData.injuryType} onValueChange={(v) => updateField('injuryType', v)}>
          <SelectTrigger><SelectValue placeholder="Select injury type" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="whiplash">Whiplash/Neck Injury</SelectItem>
            <SelectItem value="broken-bones">Broken Bones/Fractures</SelectItem>
            <SelectItem value="spinal-injury">Spinal Cord Injury</SelectItem>
            <SelectItem value="head-injury">Head/Brain Injury</SelectItem>
            <SelectItem value="internal-injuries">Internal Injuries</SelectItem>
            <SelectItem value="death">Wrongful Death</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Type of Bus</label>
        <Select value={formData.busType} onValueChange={(v) => updateField('busType', v)}>
          <SelectTrigger><SelectValue placeholder="Select bus type" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="public-transit">Public Transit Bus</SelectItem>
            <SelectItem value="school-bus">School Bus</SelectItem>
            <SelectItem value="tour-bus">Tour/Charter Bus</SelectItem>
            <SelectItem value="charter-bus">Private Charter</SelectItem>
            <SelectItem value="private-shuttle">Private Shuttle</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Was it a public/government entity?</label>
        <Select value={formData.publicEntity} onValueChange={(v) => updateField('publicEntity', v)}>
          <SelectTrigger><SelectValue placeholder="Select answer" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="yes">Yes - Government Entity</SelectItem>
            <SelectItem value="no">No - Private Company</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Medical Costs</label>
        <Select value={formData.medicalCosts} onValueChange={(v) => updateField('medicalCosts', v)}>
          <SelectTrigger><SelectValue placeholder="Select cost range" /></SelectTrigger>
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
        <label className="block text-sm font-medium mb-2">Lost Wages</label>
        <Select value={formData.lostWages} onValueChange={(v) => updateField('lostWages', v)}>
          <SelectTrigger><SelectValue placeholder="Select wage loss" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="5000">Under $10,000</SelectItem>
            <SelectItem value="20000">$10,000 - $30,000</SelectItem>
            <SelectItem value="50000">$30,000 - $70,000</SelectItem>
            <SelectItem value="100000">Over $70,000</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Pain Level</label>
        <Select value={formData.painLevel} onValueChange={(v) => updateField('painLevel', v)}>
          <SelectTrigger><SelectValue placeholder="Select pain level" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="minimal">Minimal Pain</SelectItem>
            <SelectItem value="moderate">Moderate Pain</SelectItem>
            <SelectItem value="severe">Severe Pain</SelectItem>
            <SelectItem value="extreme">Extreme/Chronic Pain</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Your Age</label>
        <Select value={formData.age} onValueChange={(v) => updateField('age', v)}>
          <SelectTrigger><SelectValue placeholder="Select age range" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="under-25">Under 25</SelectItem>
            <SelectItem value="25-45">25-45</SelectItem>
            <SelectItem value="45-65">45-65</SelectItem>
            <SelectItem value="over-65">Over 65</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Permanent Disability</label>
        <Select value={formData.permanentDisability} onValueChange={(v) => updateField('permanentDisability', v)}>
          <SelectTrigger><SelectValue placeholder="Select disability level" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="none">No Permanent Disability</SelectItem>
            <SelectItem value="partial">Partial Disability</SelectItem>
            <SelectItem value="total">Total Permanent Disability</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Bus Accident Compensation Calculator | Public Transit Injuries</title>
        <meta name="description" content="Calculate bus accident compensation for public transit injuries. Free estimates for government and private bus claims." />
      </Helmet>
      <div className="min-h-screen bg-background py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <Link to="/calculators" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />Back to Calculators
          </Link>
          <div className="bg-card rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-4xl font-bold mb-4">Bus Accident Calculator</h1>
            <p className="text-lg text-muted-foreground mb-6">Estimate public transit injury compensation</p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">$250K+</div>
                <div className="text-sm text-muted-foreground">Serious Injury Average</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">Government</div>
                <div className="text-sm text-muted-foreground">Agency Claims</div>
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
                title="Estimated Bus Accident Compensation"
                subtitle="Based on public transit liability"
                min={results.min}
                max={results.max}
                disclaimer="Bus accidents involving government entities have special notice requirements and claim filing deadlines (often 6 months). Actual compensation depends on liability and comparative negligence."
                ctaText="Get Free Case Evaluation"
              />
            )}
            {step < 3 ? (
              <FormNavigation currentStep={step} totalSteps={3} isValid={isStepValid()} onBack={handleBack} onNext={handleNext} />
            ) : (
              <Button size="lg" onClick={resetForm} variant="outline" className="w-full h-14">Start Over</Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
