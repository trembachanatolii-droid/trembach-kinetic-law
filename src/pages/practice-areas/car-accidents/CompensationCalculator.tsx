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

interface CarAccidentFormData extends CalculatorFormData {
  injuryType: string;
  injurySeverity: string;
  medicalCosts: string;
  lostWages: string;
  faultPercentage: string;
  recoveryTime: string;
  vehicleDamage: string;
  painLevel: string;
}

const initialFormData: CarAccidentFormData = {
  injuryType: '',
  injurySeverity: '',
  medicalCosts: '',
  lostWages: '',
  faultPercentage: '',
  recoveryTime: '',
  vehicleDamage: '',
  painLevel: ''
};

const calculateCompensation = (data: CarAccidentFormData): Results => {
  let baseMin = 50000;
  let baseMax = 150000;

  const injuryMultipliers: Record<string, number> = {
    'whiplash': 1.2,
    'soft-tissue': 1.3,
    'fractures': 2.0,
    'head-injury': 2.8,
    'spinal': 3.5,
    'multiple': 2.5
  };
  const injuryMult = injuryMultipliers[data.injuryType] || 1;

  const severityMultipliers: Record<string, number> = {
    'minor': 0.8,
    'moderate': 1.5,
    'serious': 2.5,
    'severe': 3.5
  };
  const severityMult = severityMultipliers[data.injurySeverity] || 1;

  const medicalAdd = parseInt(data.medicalCosts) || 0;
  const wagesAdd = parseInt(data.lostWages) || 0;

  const faultMultipliers: Record<string, number> = {
    '100': 1.0,
    '75': 0.75,
    '50': 0.50,
    '25': 0.25
  };
  const faultMult = faultMultipliers[data.faultPercentage] || 1;

  const recoveryMultipliers: Record<string, number> = {
    'weeks': 1.0,
    'months': 1.5,
    '6-months': 2.0,
    'year-plus': 2.5,
    'permanent': 3.5
  };
  const recoveryMult = recoveryMultipliers[data.recoveryTime] || 1;

  const min = Math.round(((baseMin * injuryMult * severityMult * recoveryMult) + (medicalAdd * 3) + wagesAdd) * faultMult);
  const max = Math.round(((baseMax * injuryMult * severityMult * recoveryMult) + (medicalAdd * 5) + (wagesAdd * 2)) * faultMult);

  return { min, max };
};

const validateStep = (data: CarAccidentFormData, step: number): boolean => {
  if (step === 1) return !!(data.injuryType && data.injurySeverity && data.medicalCosts && data.lostWages);
  if (step === 2) return !!(data.faultPercentage && data.recoveryTime && data.vehicleDamage && data.painLevel);
  return true;
};

export default function CarAccidentCompensationCalculator() {
  const { step, formData, results, updateField, handleNext, handleBack, resetForm, isStepValid } = 
    useCalculatorForm<CarAccidentFormData>(initialFormData, calculateCompensation, validateStep);

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Type of Injury</label>
        <Select value={formData.injuryType} onValueChange={(v) => updateField('injuryType', v)}>
          <SelectTrigger><SelectValue placeholder="Select injury type" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="whiplash">Whiplash</SelectItem>
            <SelectItem value="soft-tissue">Soft Tissue Injuries</SelectItem>
            <SelectItem value="fractures">Broken Bones/Fractures</SelectItem>
            <SelectItem value="head-injury">Head/Brain Injury</SelectItem>
            <SelectItem value="spinal">Spinal Cord Injury</SelectItem>
            <SelectItem value="multiple">Multiple Injuries</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Injury Severity</label>
        <Select value={formData.injurySeverity} onValueChange={(v) => updateField('injurySeverity', v)}>
          <SelectTrigger><SelectValue placeholder="Select severity" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="minor">Minor</SelectItem>
            <SelectItem value="moderate">Moderate</SelectItem>
            <SelectItem value="serious">Serious</SelectItem>
            <SelectItem value="severe">Severe</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Medical Costs</label>
        <Select value={formData.medicalCosts} onValueChange={(v) => updateField('medicalCosts', v)}>
          <SelectTrigger><SelectValue placeholder="Select costs" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="5000">Under $10,000</SelectItem>
            <SelectItem value="25000">$10,000 - $50,000</SelectItem>
            <SelectItem value="75000">$50,000 - $100,000</SelectItem>
            <SelectItem value="150000">Over $100,000</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Lost Wages</label>
        <Select value={formData.lostWages} onValueChange={(v) => updateField('lostWages', v)}>
          <SelectTrigger><SelectValue placeholder="Select lost wages" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="0">None</SelectItem>
            <SelectItem value="5000">Under $10,000</SelectItem>
            <SelectItem value="25000">$10,000 - $50,000</SelectItem>
            <SelectItem value="75000">Over $50,000</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Your Fault Percentage</label>
        <Select value={formData.faultPercentage} onValueChange={(v) => updateField('faultPercentage', v)}>
          <SelectTrigger><SelectValue placeholder="Select fault %" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="100">Other Party 100% at Fault</SelectItem>
            <SelectItem value="75">75% Their Fault</SelectItem>
            <SelectItem value="50">50/50 Shared Fault</SelectItem>
            <SelectItem value="25">25% Their Fault</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Recovery Time</label>
        <Select value={formData.recoveryTime} onValueChange={(v) => updateField('recoveryTime', v)}>
          <SelectTrigger><SelectValue placeholder="Select recovery time" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="weeks">A Few Weeks</SelectItem>
            <SelectItem value="months">Several Months</SelectItem>
            <SelectItem value="6-months">6+ Months</SelectItem>
            <SelectItem value="year-plus">Over a Year</SelectItem>
            <SelectItem value="permanent">Permanent Injury</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Vehicle Damage</label>
        <Select value={formData.vehicleDamage} onValueChange={(v) => updateField('vehicleDamage', v)}>
          <SelectTrigger><SelectValue placeholder="Select damage level" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="minor">Minor Damage</SelectItem>
            <SelectItem value="moderate">Moderate Damage</SelectItem>
            <SelectItem value="severe">Severe Damage</SelectItem>
            <SelectItem value="totaled">Vehicle Totaled</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Pain & Suffering Level</label>
        <Select value={formData.painLevel} onValueChange={(v) => updateField('painLevel', v)}>
          <SelectTrigger><SelectValue placeholder="Select pain level" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="mild">Mild Discomfort</SelectItem>
            <SelectItem value="moderate">Moderate Pain</SelectItem>
            <SelectItem value="severe">Severe Pain</SelectItem>
            <SelectItem value="chronic">Chronic/Constant Pain</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Car Accident Calculator | Auto Injury Compensation | Trembach Law</title>
        <meta name="description" content="Calculate car accident compensation for auto injuries. Free collision and fault analysis estimates." />
      </Helmet>
      <div className="min-h-screen bg-background py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <Link to="/calculators" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />Back to Calculators
          </Link>
          <div className="bg-card rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-4xl font-bold mb-4">Car Accident Calculator</h1>
            <p className="text-lg text-muted-foreground mb-6">Auto injury compensation estimate</p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">$120K+</div>
                <div className="text-sm text-muted-foreground">Serious Injury Average</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">Fault</div>
                <div className="text-sm text-muted-foreground">Analysis Included</div>
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
                  <span>{step === 1 ? 'Injury Details' : 'Accident Details'}</span>
                </div>
                <Progress value={(step / 2) * 100} />
              </div>
            )}
            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && results && (
              <CalculatorResults
                title="Estimated Car Accident Compensation"
                subtitle="Based on injury and fault analysis"
                min={results.min}
                max={results.max}
                disclaimer="Car accident claims vary based on fault, insurance coverage, and specific injuries. Consult an attorney for accurate case evaluation."
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
