import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, Users } from 'lucide-react';
import { useCalculatorForm, CalculatorFormData, CalculatorResults } from '@/hooks/useCalculatorForm';
import { FormNavigation } from '@/components/calculator/FormNavigation';
import { Button } from '@/components/ui/button';

interface MassTortsFormData extends CalculatorFormData {
  tortType: string;
  caseStrength: string;
  medicalCosts: string;
  injurySeverity: string;
  numberOfVictims: string;
  age: string;
  documentationQuality: string;
  settlementStage: string;
}

const initialFormData: MassTortsFormData = {
  tortType: '',
  caseStrength: '',
  medicalCosts: '',
  injurySeverity: '',
  numberOfVictims: '',
  age: '',
  documentationQuality: '',
  settlementStage: ''
};

function calculateCompensation(data: MassTortsFormData): CalculatorResults {
  let baseAmount = 50000;

  const tortMultipliers: { [key: string]: number } = {
    pharmaceutical: 2.5,
    medicalDevice: 2.3,
    defectiveProduct: 2.0,
    chemicalExposure: 2.8,
    industrialAccident: 2.2
  };

  const caseStrengthMultipliers: { [key: string]: number } = {
    strong: 1.5,
    moderate: 1.2,
    developing: 1.0
  };

  const medicalCostMultipliers: { [key: string]: number } = {
    under50k: 1.0,
    '50k-200k': 2.5,
    '200k-500k': 4.0,
    '500k-1m': 6.0,
    over1m: 8.0
  };

  const injurySeverityMultipliers: { [key: string]: number } = {
    minor: 1.0,
    moderate: 2.0,
    serious: 3.5,
    catastrophic: 5.0,
    fatal: 6.0
  };

  const victimMultipliers: { [key: string]: number } = {
    under100: 1.0,
    '100-1000': 1.3,
    '1000-10000': 1.6,
    over10000: 2.0
  };

  const documentationMultipliers: { [key: string]: number } = {
    excellent: 1.4,
    good: 1.2,
    adequate: 1.0,
    limited: 0.8
  };

  const settlementStageMultipliers: { [key: string]: number } = {
    mdlActive: 1.5,
    settlementNegotiations: 1.3,
    earlyStage: 1.0,
    trialsOngoing: 1.6
  };

  baseAmount *= tortMultipliers[data.tortType] || 1;
  baseAmount *= caseStrengthMultipliers[data.caseStrength] || 1;
  baseAmount *= medicalCostMultipliers[data.medicalCosts] || 1;
  baseAmount *= injurySeverityMultipliers[data.injurySeverity] || 1;
  baseAmount *= victimMultipliers[data.numberOfVictims] || 1;
  baseAmount *= documentationMultipliers[data.documentationQuality] || 1;
  baseAmount *= settlementStageMultipliers[data.settlementStage] || 1;

  const age = parseInt(data.age);
  if (age < 40) {
    baseAmount *= 1.3;
  } else if (age >= 60) {
    baseAmount *= 0.9;
  }

  const min = Math.round(baseAmount * 0.6);
  const max = Math.round(baseAmount * 1.4);

  return { min, max };
}

function validateForm(data: MassTortsFormData, step: number): boolean {
  if (step === 1) {
    return !!(data.tortType && data.caseStrength && data.numberOfVictims && data.settlementStage);
  }
  if (step === 2) {
    return !!(data.medicalCosts && data.injurySeverity && data.age && data.documentationQuality);
  }
  return true;
}

const MassTortsCompensationCalculator = () => {
  const {
    step,
    formData,
    results,
    updateField,
    handleNext,
    handleBack,
    resetForm,
    isStepValid
  } = useCalculatorForm<MassTortsFormData>(
    initialFormData,
    calculateCompensation,
    validateForm
  );

  return (
    <>
      <Helmet>
        <title>Mass Torts Calculator | MDL Settlement Estimator | Trembach Law</title>
        <meta name="description" content="Estimate mass tort compensation for pharmaceutical, medical device, and product liability MDL cases. Free settlement calculator." />
      </Helmet>

      <main className="min-h-screen bg-background">
        <div className="border-b border-border">
          <div className="container mx-auto px-6 py-4 max-w-5xl">
            <Link to="/calculators" className="inline-flex items-center text-muted-foreground hover:text-foreground no-underline">
              <ArrowLeft size={16} className="mr-2" />
              <span className="text-sm font-medium">Back to All Calculators</span>
            </Link>
          </div>
        </div>

        <section className="pt-20 pb-12 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight leading-[1.1]">
              Mass Torts<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              MDL settlement compensation estimator
            </p>
          </div>
        </section>

        {step < 3 && (
          <section className="py-4 bg-muted/30 border-b border-border">
            <div className="container mx-auto px-6 max-w-5xl">
              <div className="flex items-center justify-center gap-2">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`h-2 w-16 rounded-full transition-colors ${
                      s === step ? 'bg-primary' : s < step ? 'bg-primary/50' : 'bg-border'
                    }`}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-16">
          <div className="container mx-auto px-6 max-w-3xl">
            {step === 1 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Mass Tort Details</h2>
                  <p className="text-muted-foreground">Tell us about the mass tort litigation</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Type of Mass Tort
                    </label>
                    <select
                      value={formData.tortType}
                      onChange={(e) => updateField('tortType', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground"
                    >
                      <option value="">Select tort type</option>
                      <option value="pharmaceutical">Pharmaceutical Drug (e.g., opioids, Zantac)</option>
                      <option value="medicalDevice">Medical Device (e.g., hernia mesh, IVC filter)</option>
                      <option value="defectiveProduct">Defective Product (e.g., airbags, pesticides)</option>
                      <option value="chemicalExposure">Chemical Exposure (e.g., PFAS, benzene)</option>
                      <option value="industrialAccident">Industrial Accident (e.g., chemical plant)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Case Strength
                    </label>
                    <select
                      value={formData.caseStrength}
                      onChange={(e) => updateField('caseStrength', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground"
                    >
                      <option value="">Select case strength</option>
                      <option value="strong">Strong (clear causation, medical documentation)</option>
                      <option value="moderate">Moderate (some evidence, ongoing treatment)</option>
                      <option value="developing">Developing (early stage evidence)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Number of Victims in MDL
                    </label>
                    <select
                      value={formData.numberOfVictims}
                      onChange={(e) => updateField('numberOfVictims', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground"
                    >
                      <option value="">Select number of victims</option>
                      <option value="under100">Under 100 plaintiffs</option>
                      <option value="100-1000">100-1,000 plaintiffs</option>
                      <option value="1000-10000">1,000-10,000 plaintiffs</option>
                      <option value="over10000">Over 10,000 plaintiffs</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Settlement Stage
                    </label>
                    <select
                      value={formData.settlementStage}
                      onChange={(e) => updateField('settlementStage', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground"
                    >
                      <option value="">Select settlement stage</option>
                      <option value="mdlActive">MDL Actively Settling Cases</option>
                      <option value="settlementNegotiations">Active Settlement Negotiations</option>
                      <option value="trialsOngoing">Bellwether Trials Ongoing</option>
                      <option value="earlyStage">Early Stage Litigation</option>
                    </select>
                  </div>
                </div>

                <FormNavigation
                  currentStep={step}
                  isValid={isStepValid()}
                  onBack={handleBack}
                  onNext={handleNext}
                />
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Injury & Damages</h2>
                  <p className="text-muted-foreground">Provide injury and medical cost details</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Medical Costs Incurred
                    </label>
                    <select
                      value={formData.medicalCosts}
                      onChange={(e) => updateField('medicalCosts', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground"
                    >
                      <option value="">Select medical costs</option>
                      <option value="under50k">Under $50,000</option>
                      <option value="50k-200k">$50,000 - $200,000</option>
                      <option value="200k-500k">$200,000 - $500,000</option>
                      <option value="500k-1m">$500,000 - $1,000,000</option>
                      <option value="over1m">Over $1,000,000</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Injury Severity
                    </label>
                    <select
                      value={formData.injurySeverity}
                      onChange={(e) => updateField('injurySeverity', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground"
                    >
                      <option value="">Select injury severity</option>
                      <option value="minor">Minor (temporary symptoms, full recovery)</option>
                      <option value="moderate">Moderate (ongoing symptoms, partial recovery)</option>
                      <option value="serious">Serious (permanent injury, significant impairment)</option>
                      <option value="catastrophic">Catastrophic (life-altering, severe disability)</option>
                      <option value="fatal">Fatal (wrongful death)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Your Age
                    </label>
                    <select
                      value={formData.age}
                      onChange={(e) => updateField('age', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground"
                    >
                      <option value="">Select age range</option>
                      <option value="25">Under 40</option>
                      <option value="45">40-59</option>
                      <option value="65">60 or older</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Documentation Quality
                    </label>
                    <select
                      value={formData.documentationQuality}
                      onChange={(e) => updateField('documentationQuality', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground"
                    >
                      <option value="">Select documentation quality</option>
                      <option value="excellent">Excellent (complete medical records, expert reports)</option>
                      <option value="good">Good (medical records, some documentation gaps)</option>
                      <option value="adequate">Adequate (basic medical records)</option>
                      <option value="limited">Limited (incomplete documentation)</option>
                    </select>
                  </div>
                </div>

                <FormNavigation
                  currentStep={step}
                  isValid={isStepValid()}
                  onBack={handleBack}
                  onNext={handleNext}
                />
              </div>
            )}

            {step === 3 && results && (
              <div className="space-y-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
                    <Calculator className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Estimated Compensation</h2>
                  <p className="text-muted-foreground">Based on your mass tort case details</p>
                </div>

                <div className="bg-muted/50 rounded-2xl p-8 text-center border border-border">
                  <div className="text-sm font-medium text-muted-foreground mb-2">Estimated Range</div>
                  <div className="text-4xl md:text-5xl font-bold text-foreground">
                    ${results.min.toLocaleString()} - ${results.max.toLocaleString()}
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-4">Mass Tort Compensation Includes:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>All medical expenses (past and future treatment)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Pain and suffering from injury or illness</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Lost wages and reduced earning capacity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Loss of quality of life and enjoyment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Potential punitive damages (corporate misconduct)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-3">Important Disclaimer</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This estimate is for informational purposes only and does not constitute legal advice. 
                    Mass tort settlements vary significantly based on MDL status, settlement timing, individual 
                    case strength, and negotiated agreements. Actual compensation depends on litigation progress, 
                    defendant solvency, and case-specific factors. Consult with an attorney experienced in mass 
                    tort litigation for a comprehensive evaluation of your case.
                  </p>
                </div>

                <div className="text-center pt-4">
                  <Link to="/contact">
                    <Button size="lg" className="h-14 px-8">
                      Get Free Case Review
                    </Button>
                  </Link>
                  <button
                    onClick={resetForm}
                    className="block mx-auto mt-4 text-sm text-muted-foreground hover:text-foreground"
                  >
                    Calculate Another Case
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="py-20 bg-muted/30 border-t border-border">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-foreground mb-2">Thousands</div>
                <p className="text-muted-foreground">Potential plaintiffs in MDLs</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-foreground mb-2">Millions</div>
                <p className="text-muted-foreground">In aggregate settlements</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-foreground mb-2">No Fee</div>
                <p className="text-muted-foreground">Unless we win your case</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MassTortsCompensationCalculator;
