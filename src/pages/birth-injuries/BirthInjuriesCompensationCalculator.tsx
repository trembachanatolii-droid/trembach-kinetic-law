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

interface BirthInjuryFormData extends CalculatorFormData {
  injuryType: string;
  severity: string;
  medicalCosts: string;
  lifetimeCare: string;
  careNeeds: string;
}

const initialFormData: BirthInjuryFormData = {
  injuryType: '',
  severity: '',
  medicalCosts: '',
  lifetimeCare: '',
  careNeeds: ''
};

const calculateCompensation = (data: BirthInjuryFormData): Results => {
  let baseMin = 500000;
  let baseMax = 5000000;

  const injuryMultipliers: Record<string, number> = {
    'cerebral-palsy': 3.0,
    'erbs-palsy': 2.0,
    'brain-damage': 3.5,
    'oxygen-deprivation': 3.2,
    'fractures': 1.5,
    'other': 1.0
  };
  const injuryMult = injuryMultipliers[data.injuryType] || 1;

  const severityMultipliers: Record<string, number> = {
    'mild': 0.8,
    'moderate': 1.5,
    'severe': 2.5,
    'profound': 4.0
  };
  const severityMult = severityMultipliers[data.severity] || 1;

  const medicalAdd = parseInt(data.medicalCosts) || 0;
  const lifetimeAdd = parseInt(data.lifetimeCare) || 0;

  const careMultipliers: Record<string, number> = {
    'minimal': 1.0,
    'moderate': 1.5,
    'extensive': 2.5,
    'total': 4.0
  };
  const careMult = careMultipliers[data.careNeeds] || 1;

  const min = Math.round((baseMin * injuryMult * severityMult * careMult) + (medicalAdd * 5) + lifetimeAdd);
  const max = Math.round((baseMax * injuryMult * severityMult * careMult) + (medicalAdd * 10) + (lifetimeAdd * 2));

  return { min, max };
};

const validateStep = (data: BirthInjuryFormData, step: number): boolean => {
  if (step === 1) return !!(data.injuryType && data.severity);
  if (step === 2) return !!(data.medicalCosts && data.lifetimeCare && data.careNeeds);
  return true;
};

export default function BirthInjuriesCompensationCalculator() {
  const { step, formData, results, updateField, handleNext, handleBack, resetForm, isStepValid } = 
    useCalculatorForm<BirthInjuryFormData>(initialFormData, calculateCompensation, validateStep);

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Type of Birth Injury</label>
        <Select value={formData.injuryType} onValueChange={(v) => updateField('injuryType', v)}>
          <SelectTrigger><SelectValue placeholder="Select injury type" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="cerebral-palsy">Cerebral Palsy</SelectItem>
            <SelectItem value="erbs-palsy">Erb's Palsy (Brachial Plexus)</SelectItem>
            <SelectItem value="brain-damage">Hypoxic Brain Damage</SelectItem>
            <SelectItem value="oxygen-deprivation">Oxygen Deprivation</SelectItem>
            <SelectItem value="fractures">Birth Fractures</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Severity</label>
        <Select value={formData.severity} onValueChange={(v) => updateField('severity', v)}>
          <SelectTrigger><SelectValue placeholder="Select severity" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="mild">Mild</SelectItem>
            <SelectItem value="moderate">Moderate</SelectItem>
            <SelectItem value="severe">Severe</SelectItem>
            <SelectItem value="profound">Profound</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Medical Costs to Date</label>
        <Select value={formData.medicalCosts} onValueChange={(v) => updateField('medicalCosts', v)}>
          <SelectTrigger><SelectValue placeholder="Select costs" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="50000">Under $100,000</SelectItem>
            <SelectItem value="200000">$100,000 - $300,000</SelectItem>
            <SelectItem value="500000">$300,000 - $700,000</SelectItem>
            <SelectItem value="1000000">Over $700,000</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Estimated Lifetime Care Costs</label>
        <Select value={formData.lifetimeCare} onValueChange={(v) => updateField('lifetimeCare', v)}>
          <SelectTrigger><SelectValue placeholder="Select lifetime costs" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="1000000">$1M - $3M</SelectItem>
            <SelectItem value="3000000">$3M - $5M</SelectItem>
            <SelectItem value="5000000">Over $5M</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Care Needs</label>
        <Select value={formData.careNeeds} onValueChange={(v) => updateField('careNeeds', v)}>
          <SelectTrigger><SelectValue placeholder="Select care level" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="minimal">Minimal Assistance</SelectItem>
            <SelectItem value="moderate">Moderate Care</SelectItem>
            <SelectItem value="extensive">Extensive Care</SelectItem>
            <SelectItem value="total">Total Care Required</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Birth Injury Compensation Calculator | Cerebral Palsy Claims</title>
        <meta name="description" content="Calculate birth injury compensation for medical malpractice. Free lifetime care estimates." />
      </Helmet>
      <div className="min-h-screen bg-background py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <Link to="/calculators" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />Back to Calculators
          </Link>
          <div className="bg-card rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-4xl font-bold mb-4">Birth Injury Calculator</h1>
            <p className="text-lg text-muted-foreground mb-6">Estimate lifetime care compensation</p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">$5M+</div>
                <div className="text-sm text-muted-foreground">Potential Lifetime Award</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">Lifetime</div>
                <div className="text-sm text-muted-foreground">Care Costs Included</div>
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
                title="Estimated Birth Injury Compensation"
                subtitle="Based on lifetime care requirements"
                min={results.min}
                max={results.max}
                disclaimer="Birth injury claims require expert medical testimony. Actual compensation varies based on malpractice evidence and lifetime care needs."
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
