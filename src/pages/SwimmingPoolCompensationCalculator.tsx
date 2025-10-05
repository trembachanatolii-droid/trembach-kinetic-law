import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { FormNavigation } from '@/components/calculator/FormNavigation';
import { CalculatorResults } from '@/components/calculator/CalculatorResults';
import { useCalculatorForm, CalculatorFormData, CalculatorResults as Results } from '@/hooks/useCalculatorForm';

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

  // Incident type multiplier
  const incidentMultipliers: Record<string, number> = {
    'drowning-fatal': 5.0,
    'near-drowning': 3.5,
    'diving-injury': 2.5,
    'slip-fall-deck': 1.2,
    'chemical-injury': 1.5,
    'entrapment': 2.0
  };
  const incidentMult = incidentMultipliers[data.incidentType] || 1;

  // Property type multiplier
  const propertyMultipliers: Record<string, number> = {
    'private-residence': 1.0,
    'apartment-complex': 1.3,
    'hotel-resort': 1.4,
    'public-pool': 1.2,
    'water-park': 1.5,
    'school-pool': 1.3
  };
  const propertyMult = propertyMultipliers[data.propertyType] || 1;

  // Victim age multiplier (children = higher damages)
  const ageMultipliers: Record<string, number> = {
    'under-5': 1.8,
    '5-12': 1.6,
    '13-17': 1.4,
    '18-40': 1.2,
    '41-65': 1.0,
    'over-65': 0.9
  };
  const ageMult = ageMultipliers[data.victimAge] || 1;

  // Supervision present multiplier
  const supervisionMultipliers: Record<string, number> = {
    'no-supervision': 1.5,
    'inadequate-supervision': 1.3,
    'supervision-distracted': 1.2,
    'adequate-supervision': 0.9
  };
  const supervisionMult = supervisionMultipliers[data.supervisionPresent] || 1;

  // Safety violations multiplier
  const violationsMultipliers: Record<string, number> = {
    'none-identified': 1.0,
    'inadequate-fencing': 1.4,
    'no-warning-signs': 1.2,
    'defective-drain': 1.6,
    'chemical-imbalance': 1.3,
    'multiple-violations': 1.8
  };
  const violationsMult = violationsMultipliers[data.safetyViolations] || 1;

  // Injury severity multiplier
  const severityMultipliers: Record<string, number> = {
    'minor': 1.0,
    'moderate': 1.5,
    'serious': 2.5,
    'severe': 4.0,
    'catastrophic': 6.0,
    'wrongful-death': 5.0
  };
  const severityMult = severityMultipliers[data.injurySeverity] || 1;

  // Neurological damage multiplier (hypoxia/brain injury)
  const neuroMultipliers: Record<string, number> = {
    'none': 1.0,
    'mild-hypoxia': 1.5,
    'moderate-brain-injury': 2.5,
    'severe-brain-injury': 4.0,
    'persistent-vegetative': 5.0
  };
  const neuroMult = neuroMultipliers[data.neurologicalDamage] || 1;

  // Medical costs addition
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

  // Permanent disability multiplier
  const disabilityMultipliers: Record<string, number> = {
    'none': 1.0,
    'partial-temporary': 1.3,
    'partial-permanent': 1.8,
    'total-permanent': 3.5,
    'quadriplegia': 5.0
  };
  const disabilityMult = disabilityMultipliers[data.permanentDisability] || 1;

  // Fencing/barrier violation
  const fencingMult = data.fencing === 'yes' ? 1.5 : 1.0;

  // Lifeguard requirement violation
  const lifeguardMult = data.lifeguard === 'yes' ? 1.4 : 1.0;

  // Calculate final range
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
        <select
          value={formData.incidentType}
          onChange={(e) => updateField('incidentType', e.target.value)}
          className="w-full p-3 border rounded-lg bg-background"
        >
          <option value="">Select incident type</option>
          <option value="drowning-fatal">Drowning (Fatal)</option>
          <option value="near-drowning">Near-Drowning</option>
          <option value="diving-injury">Diving Injury (spinal/head)</option>
          <option value="slip-fall-deck">Slip and Fall on Deck</option>
          <option value="chemical-injury">Chemical Injury (chlorine/acid)</option>
          <option value="entrapment">Drain/Suction Entrapment</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Property Type</label>
        <select
          value={formData.propertyType}
          onChange={(e) => updateField('propertyType', e.target.value)}
          className="w-full p-3 border rounded-lg bg-background"
        >
          <option value="">Select property type</option>
          <option value="private-residence">Private Residence</option>
          <option value="apartment-complex">Apartment/Condo Complex</option>
          <option value="hotel-resort">Hotel/Resort</option>
          <option value="public-pool">Public Pool</option>
          <option value="water-park">Water Park</option>
          <option value="school-pool">School Pool</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Victim Age</label>
        <select
          value={formData.victimAge}
          onChange={(e) => updateField('victimAge', e.target.value)}
          className="w-full p-3 border rounded-lg bg-background"
        >
          <option value="">Select age range</option>
          <option value="under-5">Under 5</option>
          <option value="5-12">5-12</option>
          <option value="13-17">13-17</option>
          <option value="18-40">18-40</option>
          <option value="41-65">41-65</option>
          <option value="over-65">Over 65</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Supervision Present</label>
        <select
          value={formData.supervisionPresent}
          onChange={(e) => updateField('supervisionPresent', e.target.value)}
          className="w-full p-3 border rounded-lg bg-background"
        >
          <option value="">Select supervision level</option>
          <option value="no-supervision">No Supervision</option>
          <option value="inadequate-supervision">Inadequate Supervision</option>
          <option value="supervision-distracted">Supervision Present but Distracted</option>
          <option value="adequate-supervision">Adequate Supervision</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Safety Violations Identified</label>
        <select
          value={formData.safetyViolations}
          onChange={(e) => updateField('safetyViolations', e.target.value)}
          className="w-full p-3 border rounded-lg bg-background"
        >
          <option value="">Select violations</option>
          <option value="none-identified">None Identified</option>
          <option value="inadequate-fencing">Inadequate Fencing/Barriers</option>
          <option value="no-warning-signs">No Warning Signs</option>
          <option value="defective-drain">Defective Drain/Suction</option>
          <option value="chemical-imbalance">Chemical Imbalance</option>
          <option value="multiple-violations">Multiple Violations</option>
        </select>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Injury Severity</label>
        <select
          value={formData.injurySeverity}
          onChange={(e) => updateField('injurySeverity', e.target.value)}
          className="w-full p-3 border rounded-lg bg-background"
        >
          <option value="">Select severity</option>
          <option value="minor">Minor (no hospitalization)</option>
          <option value="moderate">Moderate (hospitalization required)</option>
          <option value="serious">Serious (ICU, major treatment)</option>
          <option value="severe">Severe (long-term care needed)</option>
          <option value="catastrophic">Catastrophic (life-altering)</option>
          <option value="wrongful-death">Wrongful Death</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Neurological Damage (Hypoxia/Brain Injury)</label>
        <select
          value={formData.neurologicalDamage}
          onChange={(e) => updateField('neurologicalDamage', e.target.value)}
          className="w-full p-3 border rounded-lg bg-background"
        >
          <option value="">Select neurological damage</option>
          <option value="none">No Neurological Damage</option>
          <option value="mild-hypoxia">Mild Hypoxia (temporary)</option>
          <option value="moderate-brain-injury">Moderate Brain Injury</option>
          <option value="severe-brain-injury">Severe Brain Injury</option>
          <option value="persistent-vegetative">Persistent Vegetative State</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Total Medical Costs</label>
        <select
          value={formData.medicalCosts}
          onChange={(e) => updateField('medicalCosts', e.target.value)}
          className="w-full p-3 border rounded-lg bg-background"
        >
          <option value="">Select cost range</option>
          <option value="under-10k">Under $10,000</option>
          <option value="10k-25k">$10,000 - $25,000</option>
          <option value="25k-50k">$25,000 - $50,000</option>
          <option value="50k-100k">$50,000 - $100,000</option>
          <option value="100k-250k">$100,000 - $250,000</option>
          <option value="over-250k">$250,000 - $1,000,000</option>
          <option value="over-1m">Over $1,000,000</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Permanent Disability</label>
        <select
          value={formData.permanentDisability}
          onChange={(e) => updateField('permanentDisability', e.target.value)}
          className="w-full p-3 border rounded-lg bg-background"
        >
          <option value="">Select disability level</option>
          <option value="none">No Permanent Disability</option>
          <option value="partial-temporary">Partial Temporary Disability</option>
          <option value="partial-permanent">Partial Permanent Disability</option>
          <option value="total-permanent">Total Permanent Disability</option>
          <option value="quadriplegia">Quadriplegia/Severe Paralysis</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Fencing/Barrier Code Violation?</label>
        <select
          value={formData.fencing}
          onChange={(e) => updateField('fencing', e.target.value)}
          className="w-full p-3 border rounded-lg bg-background"
        >
          <option value="">Select answer</option>
          <option value="yes">Yes - Fencing Violation</option>
          <option value="no">No - Fencing Adequate</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Lifeguard Required but Not Present?</label>
        <select
          value={formData.lifeguard}
          onChange={(e) => updateField('lifeguard', e.target.value)}
          className="w-full p-3 border rounded-lg bg-background"
        >
          <option value="">Select answer</option>
          <option value="yes">Yes - Lifeguard Required, Not Present</option>
          <option value="no">No - Lifeguard Present or Not Required</option>
        </select>
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
