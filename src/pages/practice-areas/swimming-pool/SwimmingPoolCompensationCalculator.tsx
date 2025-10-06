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

interface SwimmingPoolFormData extends CalculatorFormData {
  incidentType: string;
  propertyType: string;
  victimAge: string;
  supervisionPresent: string;
  safetyViolations: string;
  injurySeverity: string;
  neurologicalDamage: string;
  medicalCosts: string;
  permanentDisability: string;
  fencing: string;
  lifeguard: string;
}

const initialFormData: SwimmingPoolFormData = {
  incidentType: '',
  propertyType: '',
  victimAge: '',
  supervisionPresent: '',
  safetyViolations: '',
  injurySeverity: '',
  neurologicalDamage: '',
  medicalCosts: '',
  permanentDisability: '',
  fencing: '',
  lifeguard: ''
};

const calculateCompensation = (data: SwimmingPoolFormData): Results => {
  let baseMin = 75000;
  let baseMax = 200000;

  const incidentMultipliers: Record<string, number> = {
    'drowning-fatal': 5.0,
    'near-drowning': 3.5,
    'diving-injury': 2.5,
    'slip-fall-deck': 1.2,
    'chemical-injury': 1.5,
    'entrapment': 2.0
  };
  const incidentMult = incidentMultipliers[data.incidentType] || 1;

  const propertyMultipliers: Record<string, number> = {
    'private-residence': 1.0,
    'apartment-complex': 1.3,
    'hotel-resort': 1.4,
    'public-pool': 1.2,
    'water-park': 1.5,
    'school-pool': 1.3
  };
  const propertyMult = propertyMultipliers[data.propertyType] || 1;

  const ageMultipliers: Record<string, number> = {
    'under-5': 1.8,
    '5-12': 1.6,
    '13-17': 1.4,
    '18-40': 1.2,
    '41-65': 1.0,
    'over-65': 0.9
  };
  const ageMult = ageMultipliers[data.victimAge] || 1;

  const supervisionMultipliers: Record<string, number> = {
    'no-supervision': 1.5,
    'inadequate-supervision': 1.3,
    'supervision-distracted': 1.2,
    'adequate-supervision': 0.9
  };
  const supervisionMult = supervisionMultipliers[data.supervisionPresent] || 1;

  const violationsMultipliers: Record<string, number> = {
    'none-identified': 1.0,
    'inadequate-fencing': 1.4,
    'no-warning-signs': 1.2,
    'defective-drain': 1.6,
    'chemical-imbalance': 1.3,
    'multiple-violations': 1.8
  };
  const violationsMult = violationsMultipliers[data.safetyViolations] || 1;

  const severityMultipliers: Record<string, number> = {
    'minor': 1.0,
    'moderate': 1.5,
    'serious': 2.5,
    'severe': 4.0,
    'catastrophic': 6.0,
    'wrongful-death': 5.0
  };
  const severityMult = severityMultipliers[data.injurySeverity] || 1;

  const neuroMultipliers: Record<string, number> = {
    'none': 1.0,
    'mild-hypoxia': 1.5,
    'moderate-brain-injury': 2.5,
    'severe-brain-injury': 4.0,
    'persistent-vegetative': 5.0
  };
  const neuroMult = neuroMultipliers[data.neurologicalDamage] || 1;

  const medicalAdditions: Record<string, number> = {
    'under-10k': 5000,
    '10k-25k': 15000,
    '25k-50k': 35000,
    '50k-100k': 75000,
    '100k-250k': 175000,
    'over-250k': 300000,
    'over-1m': 750000
  };
  const medicalAdd = medicalAdditions[data.medicalCosts] || 0;

  const disabilityMultipliers: Record<string, number> = {
    'none': 1.0,
    'partial-temporary': 1.3,
    'partial-permanent': 1.8,
    'total-permanent': 3.5,
    'quadriplegia': 5.0
  };
  const disabilityMult = disabilityMultipliers[data.permanentDisability] || 1;

  const fencingMult = data.fencing === 'yes' ? 1.5 : 1.0;
  const lifeguardMult = data.lifeguard === 'yes' ? 1.4 : 1.0;

  const min = Math.round(
    (baseMin * incidentMult * propertyMult * ageMult * supervisionMult * 
     violationsMult * severityMult * neuroMult * disabilityMult * 
     fencingMult * lifeguardMult) + medicalAdd
  );
  const max = Math.round(
    (baseMax * incidentMult * propertyMult * ageMult * supervisionMult * 
     violationsMult * severityMult * neuroMult * disabilityMult * 
     fencingMult * lifeguardMult) + (medicalAdd * 2.5)
  );

  return { min, max };
};

const validateStep = (data: SwimmingPoolFormData, step: number): boolean => {
  if (step === 1) {
    return !!(data.incidentType && data.propertyType && data.victimAge && 
              data.supervisionPresent && data.safetyViolations);
  }
  if (step === 2) {
    return !!(data.injurySeverity && data.neurologicalDamage && data.medicalCosts && 
              data.permanentDisability && data.fencing && data.lifeguard);
  }
  return true;
};

export default function SwimmingPoolCompensationCalculator() {
  const {
    step,
    formData,
    results,
    updateField,
    handleNext,
    handleBack,
    resetForm,
    isStepValid
  } = useCalculatorForm<SwimmingPoolFormData>(
    initialFormData,
    calculateCompensation,
    validateStep
  );

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Type of Incident</label>
        <Select value={formData.incidentType} onValueChange={(value) => updateField('incidentType', value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select incident type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="drowning-fatal">Drowning (Fatal)</SelectItem>
            <SelectItem value="near-drowning">Near-Drowning</SelectItem>
            <SelectItem value="diving-injury">Diving Injury (spinal/head)</SelectItem>
            <SelectItem value="slip-fall-deck">Slip and Fall on Deck</SelectItem>
            <SelectItem value="chemical-injury">Chemical Injury (chlorine/acid)</SelectItem>
            <SelectItem value="entrapment">Drain/Suction Entrapment</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Property Type</label>
        <Select value={formData.propertyType} onValueChange={(value) => updateField('propertyType', value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select property type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="private-residence">Private Residence</SelectItem>
            <SelectItem value="apartment-complex">Apartment/Condo Complex</SelectItem>
            <SelectItem value="hotel-resort">Hotel/Resort</SelectItem>
            <SelectItem value="public-pool">Public Pool</SelectItem>
            <SelectItem value="water-park">Water Park</SelectItem>
            <SelectItem value="school-pool">School Pool</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Victim Age</label>
        <Select value={formData.victimAge} onValueChange={(value) => updateField('victimAge', value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select age range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="under-5">Under 5</SelectItem>
            <SelectItem value="5-12">5-12</SelectItem>
            <SelectItem value="13-17">13-17</SelectItem>
            <SelectItem value="18-40">18-40</SelectItem>
            <SelectItem value="41-65">41-65</SelectItem>
            <SelectItem value="over-65">Over 65</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Supervision Present</label>
        <Select value={formData.supervisionPresent} onValueChange={(value) => updateField('supervisionPresent', value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select supervision level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="no-supervision">No Supervision</SelectItem>
            <SelectItem value="inadequate-supervision">Inadequate Supervision</SelectItem>
            <SelectItem value="supervision-distracted">Supervision Present but Distracted</SelectItem>
            <SelectItem value="adequate-supervision">Adequate Supervision</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Safety Violations Identified</label>
        <Select value={formData.safetyViolations} onValueChange={(value) => updateField('safetyViolations', value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select violations" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none-identified">None Identified</SelectItem>
            <SelectItem value="inadequate-fencing">Inadequate Fencing/Barriers</SelectItem>
            <SelectItem value="no-warning-signs">No Warning Signs</SelectItem>
            <SelectItem value="defective-drain">Defective Drain/Suction</SelectItem>
            <SelectItem value="chemical-imbalance">Chemical Imbalance</SelectItem>
            <SelectItem value="multiple-violations">Multiple Violations</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Injury Severity</label>
        <Select value={formData.injurySeverity} onValueChange={(value) => updateField('injurySeverity', value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select severity" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="minor">Minor (no hospitalization)</SelectItem>
            <SelectItem value="moderate">Moderate (hospitalization required)</SelectItem>
            <SelectItem value="serious">Serious (ICU, major treatment)</SelectItem>
            <SelectItem value="severe">Severe (long-term care needed)</SelectItem>
            <SelectItem value="catastrophic">Catastrophic (life-altering)</SelectItem>
            <SelectItem value="wrongful-death">Wrongful Death</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Neurological Damage (Hypoxia/Brain Injury)</label>
        <Select value={formData.neurologicalDamage} onValueChange={(value) => updateField('neurologicalDamage', value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select neurological damage" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">No Neurological Damage</SelectItem>
            <SelectItem value="mild-hypoxia">Mild Hypoxia (temporary)</SelectItem>
            <SelectItem value="moderate-brain-injury">Moderate Brain Injury</SelectItem>
            <SelectItem value="severe-brain-injury">Severe Brain Injury</SelectItem>
            <SelectItem value="persistent-vegetative">Persistent Vegetative State</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Total Medical Costs</label>
        <Select value={formData.medicalCosts} onValueChange={(value) => updateField('medicalCosts', value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select cost range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="under-10k">Under $10,000</SelectItem>
            <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
            <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
            <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
            <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
            <SelectItem value="over-250k">$250,000 - $1,000,000</SelectItem>
            <SelectItem value="over-1m">Over $1,000,000</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Permanent Disability</label>
        <Select value={formData.permanentDisability} onValueChange={(value) => updateField('permanentDisability', value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select disability level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">No Permanent Disability</SelectItem>
            <SelectItem value="partial-temporary">Partial Temporary Disability</SelectItem>
            <SelectItem value="partial-permanent">Partial Permanent Disability</SelectItem>
            <SelectItem value="total-permanent">Total Permanent Disability</SelectItem>
            <SelectItem value="quadriplegia">Quadriplegia/Severe Paralysis</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Fencing/Barrier Code Violation?</label>
        <Select value={formData.fencing} onValueChange={(value) => updateField('fencing', value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select answer" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yes">Yes - Fencing Violation</SelectItem>
            <SelectItem value="no">No - Fencing Adequate</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Lifeguard Required but Not Present?</label>
        <Select value={formData.lifeguard} onValueChange={(value) => updateField('lifeguard', value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select answer" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yes">Yes - Lifeguard Required, Not Present</SelectItem>
            <SelectItem value="no">No - Lifeguard Present or Not Required</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  const damageCategories = [
    {
      title: 'Medical Expenses',
      description: 'Emergency resuscitation, hospitalization, rehabilitation, long-term care, and life-care planning'
    },
    {
      title: 'Lost Wages',
      description: 'Past and future income loss, reduced earning capacity, caregiver expenses'
    },
    {
      title: 'Pain and Suffering',
      description: 'Physical pain, emotional trauma, PTSD, loss of enjoyment of life, disfigurement'
    },
    {
      title: 'Premises Liability',
      description: 'Property owner duty of care, attractive nuisance doctrine, fencing requirements, supervision standards'
    }
  ];

  const disclaimer = "This estimate is for informational purposes only and does not constitute legal advice. Swimming pool accident claims involve complex premises liability issues including attractive nuisance doctrine (especially for children), duty of care standards, fencing requirements, supervision obligations, and safety code compliance. California Health and Safety Code sections 115920-115929 govern public pool safety. Drowning and near-drowning cases often result in catastrophic brain injuries requiring lifetime care. Actual compensation depends on specific circumstances, property type, safety violations, and comparative negligence. Consult with a premises liability attorney for evaluation of your case.";

  return (
    <>
      <Helmet>
        <title>Swimming Pool Accident Compensation Calculator | California Personal Injury</title>
        <meta name="description" content="Calculate potential compensation for swimming pool accidents including drowning, near-drowning, and diving injuries. Premises liability applies." />
      </Helmet>

      <div className="min-h-screen bg-background py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <Link to="/calculators" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Calculators
          </Link>

          <div className="bg-card rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-4xl font-bold mb-4">Swimming Pool Accident Calculator</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Estimate compensation for pool drowning and injury accidents
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">3,500+</div>
                <div className="text-sm text-muted-foreground">Drowning Deaths/Year</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">Children</div>
                <div className="text-sm text-muted-foreground">Attractive Nuisance</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">Brain Injury</div>
                <div className="text-sm text-muted-foreground">Hypoxia Risk</div>
              </div>
            </div>

            {step < 3 && (
              <div className="mb-6">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>Step {step} of 2</span>
                  <span>{step === 1 ? 'Incident Details' : 'Injury & Damages'}</span>
                </div>
                <Progress value={(step / 2) * 100} />
              </div>
            )}

            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && results && (
              <CalculatorResults
                title="Estimated Swimming Pool Accident Compensation"
                subtitle="Based on premises liability and safety code violations"
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
