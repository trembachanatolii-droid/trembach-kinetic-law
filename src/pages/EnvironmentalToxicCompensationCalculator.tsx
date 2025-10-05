import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCalculatorForm, CalculatorFormData, CalculatorResults } from '@/hooks/useCalculatorForm';
import { FormNavigation } from '@/components/calculator/FormNavigation';
import { CalculatorResults as ResultsDisplay } from '@/components/calculator/CalculatorResults';

interface EnvironmentalToxicFormData extends CalculatorFormData {
  contaminantType: string;
  exposureSource: string;
  illnessType: string;
  exposureDuration: string;
  numberOfVictims: string;
  propertyDamage: string;
  responsibleParty: string;
  medicalCosts: string;
}

const initialFormData: EnvironmentalToxicFormData = {
  contaminantType: '',
  exposureSource: '',
  illnessType: '',
  exposureDuration: '',
  numberOfVictims: '',
  propertyDamage: '',
  responsibleParty: '',
  medicalCosts: ''
};

function calculateCompensation(data: EnvironmentalToxicFormData): CalculatorResults {
  let min = 50000;
  let max = 250000;

  // Contaminant type multipliers
  const contaminantMultipliers: Record<string, number> = {
    'lead': 3.0,
    'asbestos': 3.5,
    'toxic-mold': 2.5,
    'pesticides': 2.8,
    'industrial-chemicals': 3.2,
    'contaminated-water': 3.0,
    'air-pollution': 2.3,
    'radioactive': 4.5,
    'other': 2.0
  };

  // Exposure source multipliers
  const sourceMultipliers: Record<string, number> = {
    'drinking-water': 3.5,
    'industrial-facility': 3.2,
    'landfill-dump': 3.0,
    'residential-property': 2.5,
    'workplace': 2.8,
    'agricultural': 2.5,
    'military-base': 3.3,
    'superfund-site': 4.0,
    'other': 2.0
  };

  // Illness type multipliers
  const illnessMultipliers: Record<string, number> = {
    'cancer': 5.5,
    'neurological': 4.5,
    'respiratory': 3.5,
    'kidney-liver': 4.0,
    'immune-system': 3.8,
    'birth-defects': 5.0,
    'chronic-illness': 3.5,
    'minor-symptoms': 1.5,
    'property-only': 1.0
  };

  // Exposure duration factors
  const durationMultipliers: Record<string, number> = {
    'under-1-year': 1.5,
    '1-3-years': 2.0,
    '3-5-years': 2.5,
    '5-10-years': 3.0,
    '10-20-years': 3.5,
    'over-20-years': 4.5,
    'lifetime': 5.0
  };

  // Number of victims (class action potential)
  const victimsMultipliers: Record<string, number> = {
    'individual': 1.0,
    '2-10': 1.3,
    '11-50': 1.6,
    '51-100': 1.8,
    'over-100': 2.0,
    'community-wide': 2.5
  };

  // Property damage factors
  const propertyMultipliers: Record<string, number> = {
    'none': 1.0,
    'minor-devaluation': 1.3,
    'significant-devaluation': 1.8,
    'uninhabitable': 2.5,
    'total-loss': 3.0,
    'remediation-required': 2.2
  };

  // Responsible party factors
  const partyMultipliers: Record<string, number> = {
    'large-corporation': 2.5,
    'government-entity': 2.2,
    'utility-company': 2.3,
    'manufacturer': 2.4,
    'landlord': 1.8,
    'multiple-parties': 2.8,
    'unknown': 1.0
  };

  // Medical costs baseline adjustment
  const medicalAdjustments: Record<string, number> = {
    'none-yet': 0,
    'under-50k': 20000,
    '50k-100k': 60000,
    '100k-250k': 150000,
    '250k-500k': 350000,
    'over-500k': 600000
  };

  const contaminantMultiplier = contaminantMultipliers[data.contaminantType] || 1.0;
  const sourceMultiplier = sourceMultipliers[data.exposureSource] || 1.0;
  const illnessMultiplier = illnessMultipliers[data.illnessType] || 1.0;
  const durationMultiplier = durationMultipliers[data.exposureDuration] || 1.0;
  const victimsMultiplier = victimsMultipliers[data.numberOfVictims] || 1.0;
  const propertyMultiplier = propertyMultipliers[data.propertyDamage] || 1.0;
  const partyMultiplier = partyMultipliers[data.responsibleParty] || 1.0;
  const medicalAdjustment = medicalAdjustments[data.medicalCosts] || 0;

  const totalMultiplier = contaminantMultiplier * sourceMultiplier * illnessMultiplier * 
                         durationMultiplier * victimsMultiplier * propertyMultiplier * 
                         partyMultiplier;

  min = Math.round((min * totalMultiplier) + medicalAdjustment);
  max = Math.round((max * totalMultiplier) + (medicalAdjustment * 1.5));

  // Ensure minimum values
  min = Math.max(min, 30000);
  max = Math.max(max, min * 2);

  return { min, max };
}

function validateForm(data: EnvironmentalToxicFormData, step: number): boolean {
  switch (step) {
    case 1:
      return !!(data.contaminantType && data.exposureSource && 
                data.illnessType && data.exposureDuration);
    case 2:
      return !!(data.numberOfVictims && data.propertyDamage && 
                data.responsibleParty && data.medicalCosts);
    default:
      return false;
  }
}

export default function EnvironmentalToxicCompensationCalculator() {
  const navigate = useNavigate();
  const {
    step,
    formData,
    results,
    updateField,
    handleNext,
    handleBack,
    resetForm,
    isStepValid
  } = useCalculatorForm<EnvironmentalToxicFormData>(
    initialFormData,
    calculateCompensation,
    validateForm
  );

  return (
    <>
      <Helmet>
        <title>Environmental Toxic Exposure Compensation Calculator</title>
        <meta name="description" content="Calculate potential compensation for environmental toxic exposure including contaminated water, lead, mold, and industrial pollution. Instant estimates for toxic tort claims." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Back Navigation */}
          <Button
            variant="ghost"
            onClick={() => navigate('/calculators')}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Calculators
          </Button>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Droplets className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Environmental Toxic Exposure Calculator</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get an estimate of potential compensation for environmental contamination and toxic exposure
            </p>
          </div>

          {/* Calculator Card */}
          <div className="bg-card rounded-2xl shadow-lg p-8 mb-8">
            {step < 3 ? (
              <>
                {/* Progress Indicator */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Step {step} of 2</span>
                    <span className="text-sm text-muted-foreground">
                      {step === 1 ? 'Exposure Details' : 'Impact Assessment'}
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all duration-300"
                      style={{ width: `${(step / 2) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Step 1: Exposure Details */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Type of Contaminant
                      </label>
                      <select
                        value={formData.contaminantType}
                        onChange={(e) => updateField('contaminantType', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select contaminant type</option>
                        <option value="lead">Lead (Paint, Water, Soil)</option>
                        <option value="asbestos">Asbestos</option>
                        <option value="toxic-mold">Toxic Mold</option>
                        <option value="pesticides">Pesticides/Herbicides</option>
                        <option value="industrial-chemicals">Industrial Chemicals</option>
                        <option value="contaminated-water">Contaminated Water (Non-Lead)</option>
                        <option value="air-pollution">Air Pollution/Emissions</option>
                        <option value="radioactive">Radioactive Materials</option>
                        <option value="other">Other Toxin</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Source of Exposure
                      </label>
                      <select
                        value={formData.exposureSource}
                        onChange={(e) => updateField('exposureSource', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select exposure source</option>
                        <option value="drinking-water">Drinking Water Supply</option>
                        <option value="industrial-facility">Industrial Facility</option>
                        <option value="landfill-dump">Landfill/Dump Site</option>
                        <option value="residential-property">Residential Property</option>
                        <option value="workplace">Workplace</option>
                        <option value="agricultural">Agricultural Operation</option>
                        <option value="military-base">Military Base</option>
                        <option value="superfund-site">EPA Superfund Site</option>
                        <option value="other">Other Source</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Type of Illness/Injury
                      </label>
                      <select
                        value={formData.illnessType}
                        onChange={(e) => updateField('illnessType', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select illness type</option>
                        <option value="cancer">Cancer (Various Types)</option>
                        <option value="neurological">Neurological Damage</option>
                        <option value="respiratory">Respiratory Disease</option>
                        <option value="kidney-liver">Kidney/Liver Damage</option>
                        <option value="immune-system">Immune System Damage</option>
                        <option value="birth-defects">Birth Defects</option>
                        <option value="chronic-illness">Chronic Illness</option>
                        <option value="minor-symptoms">Minor Symptoms</option>
                        <option value="property-only">Property Damage Only</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Duration of Exposure
                      </label>
                      <select
                        value={formData.exposureDuration}
                        onChange={(e) => updateField('exposureDuration', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select duration</option>
                        <option value="under-1-year">Under 1 Year</option>
                        <option value="1-3-years">1-3 Years</option>
                        <option value="3-5-years">3-5 Years</option>
                        <option value="5-10-years">5-10 Years</option>
                        <option value="10-20-years">10-20 Years</option>
                        <option value="over-20-years">Over 20 Years</option>
                        <option value="lifetime">Lifetime Exposure</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 2: Impact Assessment */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Number of Affected Individuals
                      </label>
                      <select
                        value={formData.numberOfVictims}
                        onChange={(e) => updateField('numberOfVictims', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select number</option>
                        <option value="individual">Individual/Family Only</option>
                        <option value="2-10">2-10 People</option>
                        <option value="11-50">11-50 People</option>
                        <option value="51-100">51-100 People</option>
                        <option value="over-100">Over 100 People</option>
                        <option value="community-wide">Entire Community</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Property Damage
                      </label>
                      <select
                        value={formData.propertyDamage}
                        onChange={(e) => updateField('propertyDamage', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select property impact</option>
                        <option value="none">None</option>
                        <option value="minor-devaluation">Minor Property Devaluation</option>
                        <option value="significant-devaluation">Significant Devaluation</option>
                        <option value="uninhabitable">Uninhabitable Property</option>
                        <option value="total-loss">Total Property Loss</option>
                        <option value="remediation-required">Expensive Remediation Required</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Responsible Party
                      </label>
                      <select
                        value={formData.responsibleParty}
                        onChange={(e) => updateField('responsibleParty', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select responsible party</option>
                        <option value="large-corporation">Large Corporation</option>
                        <option value="government-entity">Government Entity</option>
                        <option value="utility-company">Utility Company</option>
                        <option value="manufacturer">Product Manufacturer</option>
                        <option value="landlord">Landlord/Property Owner</option>
                        <option value="multiple-parties">Multiple Parties</option>
                        <option value="unknown">Unknown/To Be Determined</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Medical Costs to Date
                      </label>
                      <select
                        value={formData.medicalCosts}
                        onChange={(e) => updateField('medicalCosts', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select cost range</option>
                        <option value="none-yet">None Yet</option>
                        <option value="under-50k">Under $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-250k">$100,000 - $250,000</option>
                        <option value="250k-500k">$250,000 - $500,000</option>
                        <option value="over-500k">Over $500,000</option>
                      </select>
                    </div>
                  </div>
                )}

                <FormNavigation
                  currentStep={step}
                  totalSteps={2}
                  isValid={isStepValid()}
                  onBack={handleBack}
                  onNext={handleNext}
                />
              </>
            ) : (
              <>
                {results && (
                  <ResultsDisplay
                    min={results.min}
                    max={results.max}
                    title="Your Estimated Compensation Range"
                    subtitle="Based on environmental toxic exposure claims"
                    disclaimer="This is an educational estimate only and does not constitute legal advice. Actual compensation depends on numerous factors including jurisdiction, proof of causation (linking exposure to illness), statute of limitations, EPA Superfund designations, responsible party solvency, class action vs individual claims, and specific case circumstances. Environmental toxic tort cases are extremely complex requiring extensive expert testimony from toxicologists, epidemiologists, and environmental scientists. Time limits vary widely. Many cases become class actions. Consult with an experienced environmental law attorney immediately for proper case evaluation."
                    ctaText="Get Free Case Review"
                    ctaSubtext="Environmental cases require specialized toxic tort expertise"
                  />
                )}

                <div className="flex gap-4 mt-8">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={resetForm}
                    className="flex-1"
                  >
                    Start Over
                  </Button>
                  <Button
                    size="lg"
                    onClick={() => navigate('/contact')}
                    className="flex-1"
                  >
                    Contact Us
                  </Button>
                </div>
              </>
            )}
          </div>

          {/* Info Cards */}
          {step < 3 && (
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold mb-2">Causation Challenge</h3>
                <p className="text-sm text-muted-foreground">
                  Must prove exposure directly caused illness with expert testimony
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold mb-2">Class Action Potential</h3>
                <p className="text-sm text-muted-foreground">
                  Multiple victims often leads to class action lawsuits
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold mb-2">Complex Litigation</h3>
                <p className="text-sm text-muted-foreground">
                  Requires environmental scientists and medical experts
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
