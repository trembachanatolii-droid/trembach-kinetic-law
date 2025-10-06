import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Accessibility } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCalculatorForm, CalculatorFormData, CalculatorResults } from '@/hooks/useCalculatorForm';
import { FormNavigation } from '@/components/calculator/FormNavigation';
import { CalculatorResults as ResultsDisplay } from '@/components/calculator/CalculatorResults';

interface ParalysisFormData extends CalculatorFormData {
  paralysisType: string;
  causeOfInjury: string;
  age: string;
  medicalCosts: string;
  homeModifications: string;
  lifetimeCareNeeds: string;
  employmentStatus: string;
  painSuffering: string;
}

const initialFormData: ParalysisFormData = {
  paralysisType: '',
  causeOfInjury: '',
  age: '',
  medicalCosts: '',
  homeModifications: '',
  lifetimeCareNeeds: '',
  employmentStatus: '',
  painSuffering: ''
};

function calculateCompensation(data: ParalysisFormData): CalculatorResults {
  let min = 500000;
  let max = 2000000;

  // Paralysis type multipliers (severity)
  const paralysisMultipliers: Record<string, number> = {
    'quadriplegia': 5.0,
    'paraplegia': 3.5,
    'hemiplegia': 2.8,
    'monoplegia': 2.0,
    'partial-paralysis': 1.8,
    'temporary': 1.2
  };

  // Cause of injury multipliers
  const causeMultipliers: Record<string, number> = {
    'car-accident': 2.2,
    'medical-malpractice': 3.0,
    'workplace': 2.5,
    'assault': 3.5,
    'defective-product': 3.2,
    'sports-recreation': 1.8,
    'fall': 2.3,
    'other': 2.0
  };

  // Age-based future care multipliers
  const ageMultipliers: Record<string, number> = {
    'under-18': 3.5,
    '18-30': 3.0,
    '31-45': 2.5,
    '46-60': 2.0,
    '61-70': 1.5,
    'over-70': 1.2
  };

  // Medical costs baseline
  const medicalAdjustments: Record<string, number> = {
    'under-500k': 200000,
    '500k-1m': 500000,
    '1m-2m': 1000000,
    '2m-5m': 2500000,
    'over-5m': 5000000
  };

  // Home modification needs
  const modificationMultipliers: Record<string, number> = {
    'none': 1.0,
    'minor': 1.3,
    'moderate': 1.6,
    'extensive': 2.0,
    'total-rebuild': 2.5
  };

  // Lifetime care needs
  const careMultipliers: Record<string, number> = {
    'minimal': 1.0,
    'part-time': 1.8,
    'full-time': 2.5,
    '24-7-care': 3.5,
    'skilled-nursing': 4.0
  };

  // Employment/earning capacity impact
  const employmentMultipliers: Record<string, number> = {
    'no-impact': 1.0,
    'reduced-capacity': 1.5,
    'cannot-return': 2.5,
    'never-worked': 1.3,
    'high-earner': 3.0
  };

  // Pain and suffering factors
  const painMultipliers: Record<string, number> = {
    'minimal': 1.0,
    'moderate': 1.5,
    'severe': 2.2,
    'extreme': 3.0,
    'unbearable': 4.0
  };

  const paralysisMultiplier = paralysisMultipliers[data.paralysisType] || 1.0;
  const causeMultiplier = causeMultipliers[data.causeOfInjury] || 1.0;
  const ageMultiplier = ageMultipliers[data.age] || 1.0;
  const medicalAdjustment = medicalAdjustments[data.medicalCosts] || 0;
  const modificationMultiplier = modificationMultipliers[data.homeModifications] || 1.0;
  const careMultiplier = careMultipliers[data.lifetimeCareNeeds] || 1.0;
  const employmentMultiplier = employmentMultipliers[data.employmentStatus] || 1.0;
  const painMultiplier = painMultipliers[data.painSuffering] || 1.0;

  const totalMultiplier = paralysisMultiplier * causeMultiplier * ageMultiplier * 
                         modificationMultiplier * careMultiplier * employmentMultiplier * 
                         painMultiplier;

  min = Math.round((min * totalMultiplier) + medicalAdjustment);
  max = Math.round((max * totalMultiplier) + (medicalAdjustment * 1.3));

  // Paralysis cases have very high minimum values
  min = Math.max(min, 400000);
  max = Math.max(max, min * 2);

  return { min, max };
}

function validateForm(data: ParalysisFormData, step: number): boolean {
  switch (step) {
    case 1:
      return !!(data.paralysisType && data.causeOfInjury && data.age && data.medicalCosts);
    case 2:
      return !!(data.homeModifications && data.lifetimeCareNeeds && 
                data.employmentStatus && data.painSuffering);
    default:
      return false;
  }
}

export default function ParalysisCompensationCalculator() {
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
  } = useCalculatorForm<ParalysisFormData>(
    initialFormData,
    calculateCompensation,
    validateForm
  );

  return (
    <>
      <Helmet>
        <title>Paralysis Injury Compensation Calculator | Spinal Cord Injury</title>
        <meta name="description" content="Calculate potential compensation for paralysis injuries including quadriplegia, paraplegia, and spinal cord injuries. Instant estimates for catastrophic injury claims." />
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
              <Accessibility className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Paralysis Injury Calculator</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get an estimate of potential compensation for paralysis and catastrophic spinal cord injuries
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
                      {step === 1 ? 'Injury Details' : 'Financial Impact'}
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all duration-300"
                      style={{ width: `${(step / 2) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Step 1: Injury Details */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Type of Paralysis
                      </label>
                      <select
                        value={formData.paralysisType}
                        onChange={(e) => updateField('paralysisType', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select paralysis type</option>
                        <option value="quadriplegia">Quadriplegia (All Four Limbs)</option>
                        <option value="paraplegia">Paraplegia (Lower Body)</option>
                        <option value="hemiplegia">Hemiplegia (One Side of Body)</option>
                        <option value="monoplegia">Monoplegia (One Limb)</option>
                        <option value="partial-paralysis">Partial Paralysis</option>
                        <option value="temporary">Temporary Paralysis</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Cause of Injury
                      </label>
                      <select
                        value={formData.causeOfInjury}
                        onChange={(e) => updateField('causeOfInjury', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select cause</option>
                        <option value="car-accident">Motor Vehicle Accident</option>
                        <option value="medical-malpractice">Medical Malpractice</option>
                        <option value="workplace">Workplace Accident</option>
                        <option value="assault">Assault/Violence</option>
                        <option value="defective-product">Defective Product</option>
                        <option value="sports-recreation">Sports/Recreation</option>
                        <option value="fall">Slip/Trip and Fall</option>
                        <option value="other">Other Cause</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Age at Time of Injury
                      </label>
                      <select
                        value={formData.age}
                        onChange={(e) => updateField('age', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select age range</option>
                        <option value="under-18">Under 18</option>
                        <option value="18-30">18-30</option>
                        <option value="31-45">31-45</option>
                        <option value="46-60">46-60</option>
                        <option value="61-70">61-70</option>
                        <option value="over-70">Over 70</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Estimated Lifetime Medical Costs
                      </label>
                      <select
                        value={formData.medicalCosts}
                        onChange={(e) => updateField('medicalCosts', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select cost range</option>
                        <option value="under-500k">Under $500,000</option>
                        <option value="500k-1m">$500,000 - $1,000,000</option>
                        <option value="1m-2m">$1,000,000 - $2,000,000</option>
                        <option value="2m-5m">$2,000,000 - $5,000,000</option>
                        <option value="over-5m">Over $5,000,000</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 2: Financial Impact */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Home Modification Needs
                      </label>
                      <select
                        value={formData.homeModifications}
                        onChange={(e) => updateField('homeModifications', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select modification level</option>
                        <option value="none">None Required</option>
                        <option value="minor">Minor (Ramps, Grab Bars)</option>
                        <option value="moderate">Moderate (Bathroom/Bedroom Remodel)</option>
                        <option value="extensive">Extensive (Full Accessibility Remodel)</option>
                        <option value="total-rebuild">Total Rebuild/New Home Required</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Lifetime Care Needs
                      </label>
                      <select
                        value={formData.lifetimeCareNeeds}
                        onChange={(e) => updateField('lifetimeCareNeeds', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select care level</option>
                        <option value="minimal">Minimal Assistance</option>
                        <option value="part-time">Part-Time Home Care</option>
                        <option value="full-time">Full-Time Home Care</option>
                        <option value="24-7-care">24/7 Personal Care</option>
                        <option value="skilled-nursing">Skilled Nursing Facility</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Employment Impact
                      </label>
                      <select
                        value={formData.employmentStatus}
                        onChange={(e) => updateField('employmentStatus', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select employment impact</option>
                        <option value="no-impact">No Impact (Can Continue Work)</option>
                        <option value="reduced-capacity">Reduced Earning Capacity</option>
                        <option value="cannot-return">Cannot Return to Previous Work</option>
                        <option value="never-worked">Was Not Yet Working</option>
                        <option value="high-earner">High Earner (Over $100K)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Pain and Suffering Level
                      </label>
                      <select
                        value={formData.painSuffering}
                        onChange={(e) => updateField('painSuffering', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select pain level</option>
                        <option value="minimal">Minimal</option>
                        <option value="moderate">Moderate</option>
                        <option value="severe">Severe</option>
                        <option value="extreme">Extreme</option>
                        <option value="unbearable">Unbearable/Chronic</option>
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
                    subtitle="Based on catastrophic paralysis injury claims"
                    disclaimer="This is an educational estimate only and does not constitute legal advice. Actual compensation depends on numerous factors including jurisdiction, liability, degree of paralysis, age, life expectancy, lifetime medical needs, lost earning capacity, and specific case circumstances. Paralysis cases are among the highest-value personal injury claims due to permanent, life-altering consequences and extraordinary lifetime costs. These cases require life care planning experts and economic damage experts. Consult with an experienced catastrophic injury attorney for proper case evaluation."
                    ctaText="Get Free Case Review"
                    ctaSubtext="Paralysis cases require specialized catastrophic injury expertise"
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
                    onClick={() => navigate('/free-consultation')}
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
                <h3 className="font-semibold mb-2">Lifetime Costs</h3>
                <p className="text-sm text-muted-foreground">
                  Paralysis requires extensive lifetime medical care and support
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold mb-2">Lost Earning Capacity</h3>
                <p className="text-sm text-muted-foreground">
                  Future earnings loss often exceeds immediate medical costs
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold mb-2">Expert Testimony</h3>
                <p className="text-sm text-muted-foreground">
                  Requires life care planners and economic damage experts
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
