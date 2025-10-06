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

interface RetailFormData extends CalculatorFormData {
  accidentType: string;
  injurySeverity: string;
  medicalCosts: string;
  lostWages: string;
  recoveryTime: string;
  permanentImpairment: string;
  storeName: string;
  photoEvidence: string;
}

const initialFormData: RetailFormData = {
  accidentType: '',
  injurySeverity: '',
  medicalCosts: '',
  lostWages: '',
  recoveryTime: '',
  permanentImpairment: '',
  storeName: '',
  photoEvidence: ''
};

const calculateCompensation = (data: RetailFormData): Results => {
  let baseMin = 50000;
  let baseMax = 150000;

  const accidentMultipliers: Record<string, number> = {
    'slip-fall-wet': 1.5,
    'slip-fall-debris': 1.4,
    'falling-merchandise': 1.8,
    'inadequate-lighting': 1.6,
    'uneven-floor': 1.7,
    'automatic-door': 1.3
  };
  const accidentMult = accidentMultipliers[data.accidentType] || 1;

  const severityMultipliers: Record<string, number> = {
    'minor': 0.8,
    'moderate': 1.3,
    'severe': 2.0,
    'catastrophic': 3.0
  };
  const severityMult = severityMultipliers[data.injurySeverity] || 1;

  const medicalAdd = parseInt(data.medicalCosts) || 0;
  const wages = parseInt(data.lostWages) || 0;

  const recoveryMultipliers: Record<string, number> = {
    '1-week': 1.0,
    '1-month': 1.2,
    '3-months': 1.5,
    '6-months': 1.8,
    'over-6-months': 2.2
  };
  const recoveryMult = recoveryMultipliers[data.recoveryTime] || 1;

  const impairmentMult = data.permanentImpairment === 'yes' ? 2.0 : 1.0;
  const storeChainMult = data.storeName === 'major-chain' ? 1.3 : 1.0;
  const photoMult = data.photoEvidence === 'yes' ? 1.4 : 1.0;

  const min = Math.round((baseMin * accidentMult * severityMult * recoveryMult * impairmentMult * storeChainMult * photoMult) + medicalAdd + wages);
  const max = Math.round((baseMax * accidentMult * severityMult * recoveryMult * impairmentMult * storeChainMult * photoMult) + (medicalAdd * 2) + (wages * 1.5));

  return { min, max };
};

const validateStep = (data: RetailFormData, step: number): boolean => {
  if (step === 1) return !!(data.accidentType && data.injurySeverity && data.storeName);
  if (step === 2) return !!(data.medicalCosts && data.lostWages && data.recoveryTime && data.permanentImpairment && data.photoEvidence);
  return true;
};

export default function RetailAccidentsCompensationCalculator() {
  const { step, formData, results, updateField, handleNext, handleBack, resetForm, isStepValid } = 
    useCalculatorForm<RetailFormData>(initialFormData, calculateCompensation, validateStep);

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Type of Accident</label>
        <Select value={formData.accidentType} onValueChange={(v) => updateField('accidentType', v)}>
          <SelectTrigger><SelectValue placeholder="Select accident type" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="slip-fall-wet">Slip & Fall (Wet Floor)</SelectItem>
            <SelectItem value="slip-fall-debris">Slip & Fall (Debris/Obstruction)</SelectItem>
            <SelectItem value="falling-merchandise">Falling Merchandise</SelectItem>
            <SelectItem value="inadequate-lighting">Inadequate Lighting</SelectItem>
            <SelectItem value="uneven-floor">Uneven Floor/Broken Tile</SelectItem>
            <SelectItem value="automatic-door">Automatic Door Malfunction</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Injury Severity</label>
        <Select value={formData.injurySeverity} onValueChange={(v) => updateField('injurySeverity', v)}>
          <SelectTrigger><SelectValue placeholder="Select severity" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="minor">Minor (Bruises, Sprains)</SelectItem>
            <SelectItem value="moderate">Moderate (Fractures, Cuts)</SelectItem>
            <SelectItem value="severe">Severe (Multiple Injuries)</SelectItem>
            <SelectItem value="catastrophic">Catastrophic (Permanent Damage)</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Type of Store</label>
        <Select value={formData.storeName} onValueChange={(v) => updateField('storeName', v)}>
          <SelectTrigger><SelectValue placeholder="Select store type" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="major-chain">Major Chain Store</SelectItem>
            <SelectItem value="local-business">Local Business</SelectItem>
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
            <SelectItem value="2000">Under $5,000</SelectItem>
            <SelectItem value="7500">$5,000 - $10,000</SelectItem>
            <SelectItem value="20000">$10,000 - $30,000</SelectItem>
            <SelectItem value="50000">$30,000 - $70,000</SelectItem>
            <SelectItem value="100000">Over $70,000</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Lost Wages</label>
        <Select value={formData.lostWages} onValueChange={(v) => updateField('lostWages', v)}>
          <SelectTrigger><SelectValue placeholder="Select wage loss" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="1000">Under $2,000</SelectItem>
            <SelectItem value="5000">$2,000 - $8,000</SelectItem>
            <SelectItem value="15000">$8,000 - $22,000</SelectItem>
            <SelectItem value="40000">Over $22,000</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Recovery Time</label>
        <Select value={formData.recoveryTime} onValueChange={(v) => updateField('recoveryTime', v)}>
          <SelectTrigger><SelectValue placeholder="Select recovery time" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="1-week">Less than 1 week</SelectItem>
            <SelectItem value="1-month">1 month</SelectItem>
            <SelectItem value="3-months">3 months</SelectItem>
            <SelectItem value="6-months">6 months</SelectItem>
            <SelectItem value="over-6-months">Over 6 months</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Permanent Impairment?</label>
        <Select value={formData.permanentImpairment} onValueChange={(v) => updateField('permanentImpairment', v)}>
          <SelectTrigger><SelectValue placeholder="Select answer" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="yes">Yes - Permanent Injury</SelectItem>
            <SelectItem value="no">No - Full Recovery</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Photo Evidence of Hazard?</label>
        <Select value={formData.photoEvidence} onValueChange={(v) => updateField('photoEvidence', v)}>
          <SelectTrigger><SelectValue placeholder="Select answer" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="yes">Yes - Have Photos</SelectItem>
            <SelectItem value="no">No - No Photos</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Retail Accident Compensation Calculator | Store Slip & Fall Claims</title>
        <meta name="description" content="Calculate retail accident compensation for store slip and falls. Free premises liability estimates." />
      </Helmet>
      <div className="min-h-screen bg-background py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <Link to="/calculators" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />Back to Calculators
          </Link>
          <div className="bg-card rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-4xl font-bold mb-4">Retail Accident Calculator</h1>
            <p className="text-lg text-muted-foreground mb-6">Estimate store slip and fall compensation</p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">$75K+</div>
                <div className="text-sm text-muted-foreground">Serious Fall Average</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">Premises</div>
                <div className="text-sm text-muted-foreground">Liability Cases</div>
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
                title="Estimated Retail Accident Compensation"
                subtitle="Based on premises liability"
                min={results.min}
                max={results.max}
                disclaimer="Retail slip and fall cases require proof that the store knew or should have known about the hazardous condition. Photo evidence and witness testimony are critical."
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
