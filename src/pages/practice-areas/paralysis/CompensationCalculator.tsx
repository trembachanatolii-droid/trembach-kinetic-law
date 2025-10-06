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

interface ParalysisFormData extends CalculatorFormData {
  paralysisType: string;
  causeOfInjury: string;
  age: string;
  medicalCosts: string;
  caregiverHours: string;
  modificationCosts: string;
  employmentStatus: string;
  permanentCare: string;
}

const initialFormData: ParalysisFormData = {
  paralysisType: '',
  causeOfInjury: '',
  age: '',
  medicalCosts: '',
  caregiverHours: '',
  modificationCosts: '',
  employmentStatus: '',
  permanentCare: ''
};

const calculateCompensation = (data: ParalysisFormData): Results => {
  let baseMin = 2000000;
  let baseMax = 10000000;

  const paralysisMultipliers: Record<string, number> = {
    'quadriplegia': 5.0,
    'paraplegia': 3.0,
    'hemiplegia': 2.0,
    'partial': 1.5
  };
  const paralysisMult = paralysisMultipliers[data.paralysisType] || 1;

  const causeMultipliers: Record<string, number> = {
    'car-accident': 1.2,
    'workplace': 1.3,
    'medical-malpractice': 1.8,
    'assault': 1.5,
    'sports': 1.1
  };
  const causeMult = causeMultipliers[data.causeOfInjury] || 1;

  const medicalAdd = parseInt(data.medicalCosts) || 0;
  const caregiverAnnual = parseInt(data.caregiverHours) || 0;
  const modificationsAdd = parseInt(data.modificationCosts) || 0;

  const ageMultipliers: Record<string, number> = {
    'under-30': 2.0,
    '30-50': 1.5,
    '50-70': 1.0,
    'over-70': 0.7
  };
  const ageMult = ageMultipliers[data.age] || 1;

  const employmentMult = data.employmentStatus === 'employed' ? 1.5 : 1.0;
  const permanentMult = data.permanentCare === 'yes' ? 2.0 : 1.0;

  const min = Math.round((baseMin * paralysisMult * causeMult * ageMult * employmentMult * permanentMult) + medicalAdd + (caregiverAnnual * 30) + modificationsAdd);
  const max = Math.round((baseMax * paralysisMult * causeMult * ageMult * employmentMult * permanentMult) + (medicalAdd * 2) + (caregiverAnnual * 40) + (modificationsAdd * 2));

  return { min, max };
};

const validateStep = (data: ParalysisFormData, step: number): boolean => {
  if (step === 1) return !!(data.paralysisType && data.causeOfInjury && data.age);
  if (step === 2) return !!(data.medicalCosts && data.caregiverHours && data.modificationCosts && data.employmentStatus && data.permanentCare);
  return true;
};

export default function ParalysisCompensationCalculator() {
  const { step, formData, results, updateField, handleNext, handleBack, resetForm, isStepValid } = 
    useCalculatorForm<ParalysisFormData>(initialFormData, calculateCompensation, validateStep);

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Type of Paralysis</label>
        <Select value={formData.paralysisType} onValueChange={(v) => updateField('paralysisType', v)}>
          <SelectTrigger><SelectValue placeholder="Select paralysis type" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="quadriplegia">Quadriplegia (All Four Limbs)</SelectItem>
            <SelectItem value="paraplegia">Paraplegia (Lower Body)</SelectItem>
            <SelectItem value="hemiplegia">Hemiplegia (One Side)</SelectItem>
            <SelectItem value="partial">Partial Paralysis</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Cause of Injury</label>
        <Select value={formData.causeOfInjury} onValueChange={(v) => updateField('causeOfInjury', v)}>
          <SelectTrigger><SelectValue placeholder="Select cause" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="car-accident">Car Accident</SelectItem>
            <SelectItem value="workplace">Workplace Accident</SelectItem>
            <SelectItem value="medical-malpractice">Medical Malpractice</SelectItem>
            <SelectItem value="assault">Assault</SelectItem>
            <SelectItem value="sports">Sports Injury</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Your Age</label>
        <Select value={formData.age} onValueChange={(v) => updateField('age', v)}>
          <SelectTrigger><SelectValue placeholder="Select age range" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="under-30">Under 30</SelectItem>
            <SelectItem value="30-50">30-50</SelectItem>
            <SelectItem value="50-70">50-70</SelectItem>
            <SelectItem value="over-70">Over 70</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Total Medical Costs</label>
        <Select value={formData.medicalCosts} onValueChange={(v) => updateField('medicalCosts', v)}>
          <SelectTrigger><SelectValue placeholder="Select cost range" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="100000">$100,000 - $300,000</SelectItem>
            <SelectItem value="500000">$300,000 - $700,000</SelectItem>
            <SelectItem value="1000000">$700,000 - $1,300,000</SelectItem>
            <SelectItem value="2000000">Over $1,300,000</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Annual Caregiver Costs</label>
        <Select value={formData.caregiverHours} onValueChange={(v) => updateField('caregiverHours', v)}>
          <SelectTrigger><SelectValue placeholder="Select annual cost" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="50000">$50,000 - $100,000/year</SelectItem>
            <SelectItem value="100000">$100,000 - $150,000/year</SelectItem>
            <SelectItem value="150000">$150,000 - $200,000/year</SelectItem>
            <SelectItem value="200000">Over $200,000/year</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Home Modification Costs</label>
        <Select value={formData.modificationCosts} onValueChange={(v) => updateField('modificationCosts', v)}>
          <SelectTrigger><SelectValue placeholder="Select modification costs" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="50000">$50,000 - $100,000</SelectItem>
            <SelectItem value="150000">$100,000 - $200,000</SelectItem>
            <SelectItem value="300000">Over $200,000</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Employment Status Before Injury</label>
        <Select value={formData.employmentStatus} onValueChange={(v) => updateField('employmentStatus', v)}>
          <SelectTrigger><SelectValue placeholder="Select status" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="employed">Employed</SelectItem>
            <SelectItem value="unemployed">Unemployed</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Permanent Care Required?</label>
        <Select value={formData.permanentCare} onValueChange={(v) => updateField('permanentCare', v)}>
          <SelectTrigger><SelectValue placeholder="Select answer" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="yes">Yes - Lifetime Care</SelectItem>
            <SelectItem value="no">No - Temporary</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Paralysis Compensation Calculator | Quadriplegia & Paraplegia Claims</title>
        <meta name="description" content="Calculate paralysis compensation for quadriplegia and paraplegia. Free lifetime caregiver cost estimates." />
      </Helmet>
      <div className="min-h-screen bg-background py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <Link to="/calculators" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />Back to Calculators
          </Link>
          <div className="bg-card rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-4xl font-bold mb-4">Paralysis Compensation Calculator</h1>
            <p className="text-lg text-muted-foreground mb-6">Estimate lifetime paraplegic injury compensation</p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">$10M+</div>
                <div className="text-sm text-muted-foreground">Quadriplegia Average</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">Lifetime</div>
                <div className="text-sm text-muted-foreground">Caregiver Coverage</div>
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
                  <span>{step === 1 ? 'Injury Details' : 'Care & Costs'}</span>
                </div>
                <Progress value={(step / 2) * 100} />
              </div>
            )}
            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && results && (
              <CalculatorResults
                title="Estimated Paralysis Compensation"
                subtitle="Based on lifetime care requirements"
                min={results.min}
                max={results.max}
                disclaimer="Paralysis cases involve catastrophic injury claims requiring lifetime care plans. Actual compensation depends on degree of paralysis, liability, and lifetime medical needs."
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
