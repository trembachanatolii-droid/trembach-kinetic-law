import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, Pill } from 'lucide-react';
import { useCalculatorForm, CalculatorFormData, CalculatorResults } from '@/hooks/useCalculatorForm';
import { FormNavigation } from '@/components/calculator/FormNavigation';
import { Button } from '@/components/ui/button';

interface PharmaceuticalFormData extends CalculatorFormData {
  drugType: string;
  adverseEvent: string;
  usageDuration: string;
  injurySeverity: string;
  recallStatus: string;
  age: string;
  medicalCosts: string;
  fdaWarning: string;
}

const initialFormData: PharmaceuticalFormData = {
  drugType: '',
  adverseEvent: '',
  usageDuration: '',
  injurySeverity: '',
  recallStatus: '',
  age: '',
  medicalCosts: '',
  fdaWarning: ''
};

function calculateCompensation(data: PharmaceuticalFormData): CalculatorResults {
  let baseAmount = 100000;

  const drugTypeMultipliers: { [key: string]: number } = {
    prescriptionDrug: 2.5,
    overTheCounter: 1.8,
    vaccine: 2.0,
    medicalDevice: 2.3,
    supplement: 1.5
  };

  const adverseEventMultipliers: { [key: string]: number } = {
    cancer: 4.0,
    heartAttack: 3.5,
    stroke: 3.5,
    organDamage: 3.2,
    birthDefect: 4.5,
    neurologicalDamage: 3.8,
    death: 5.0
  };

  const usageDurationMultipliers: { [key: string]: number } = {
    under6months: 1.0,
    '6months-2years': 1.3,
    '2-5years': 1.6,
    over5years: 2.0
  };

  const injurySeverityMultipliers: { [key: string]: number } = {
    minor: 1.0,
    moderate: 2.0,
    serious: 3.5,
    catastrophic: 5.0,
    fatal: 6.0
  };

  const recallStatusMultipliers: { [key: string]: number } = {
    classIRecall: 2.0,
    classIIRecall: 1.5,
    classIIIRecall: 1.2,
    noRecall: 1.0
  };

  const medicalCostMultipliers: { [key: string]: number } = {
    under50k: 1.0,
    '50k-200k': 2.0,
    '200k-500k': 3.5,
    '500k-1m': 5.0,
    over1m: 7.0
  };

  const fdaWarningMultipliers: { [key: string]: number } = {
    blackBox: 1.8,
    safetyAlert: 1.5,
    recall: 1.7,
    none: 1.0
  };

  baseAmount *= drugTypeMultipliers[data.drugType] || 1;
  baseAmount *= adverseEventMultipliers[data.adverseEvent] || 1;
  baseAmount *= usageDurationMultipliers[data.usageDuration] || 1;
  baseAmount *= injurySeverityMultipliers[data.injurySeverity] || 1;
  baseAmount *= recallStatusMultipliers[data.recallStatus] || 1;
  baseAmount *= medicalCostMultipliers[data.medicalCosts] || 1;
  baseAmount *= fdaWarningMultipliers[data.fdaWarning] || 1;

  const age = parseInt(data.age);
  if (age < 40) {
    baseAmount *= 1.3;
  } else if (age >= 65) {
    baseAmount *= 0.95;
  }

  const min = Math.round(baseAmount * 0.5);
  const max = Math.round(baseAmount * 1.5);

  return { min, max };
}

function validateForm(data: PharmaceuticalFormData, step: number): boolean {
  if (step === 1) {
    return !!(data.drugType && data.adverseEvent && data.usageDuration && data.recallStatus);
  }
  if (step === 2) {
    return !!(data.injurySeverity && data.age && data.medicalCosts && data.fdaWarning);
  }
  return true;
}

const PharmaceuticalCompensationCalculator = () => {
  const {
    step,
    formData,
    results,
    updateField,
    handleNext,
    handleBack,
    resetForm,
    isStepValid
  } = useCalculatorForm<PharmaceuticalFormData>(
    initialFormData,
    calculateCompensation,
    validateForm
  );

  return (
    <>
      <Helmet>
        <title>Pharmaceutical Calculator | Drug Injury Compensation | Trembach Law</title>
        <meta name="description" content="Calculate pharmaceutical drug injury compensation for prescription drugs, recalls, and adverse events. Free calculator." />
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
              <Pill className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight leading-[1.1]">
              Pharmaceutical<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Drug injury compensation estimator
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
                  <h2 className="text-3xl font-bold text-foreground mb-2">Drug Information</h2>
                  <p className="text-muted-foreground">Tell us about the pharmaceutical product</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Type of Drug/Product
                    </label>
                    <select
                      value={formData.drugType}
                      onChange={(e) => updateField('drugType', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground"
                    >
                      <option value="">Select drug type</option>
                      <option value="prescriptionDrug">Prescription Drug (FDA approved)</option>
                      <option value="overTheCounter">Over-the-Counter Drug</option>
                      <option value="vaccine">Vaccine</option>
                      <option value="medicalDevice">Medical Device/Implant</option>
                      <option value="supplement">Dietary Supplement</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Adverse Event/Injury
                    </label>
                    <select
                      value={formData.adverseEvent}
                      onChange={(e) => updateField('adverseEvent', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground"
                    >
                      <option value="">Select adverse event</option>
                      <option value="cancer">Cancer (any type)</option>
                      <option value="heartAttack">Heart Attack/Cardiovascular Event</option>
                      <option value="stroke">Stroke/Blood Clot</option>
                      <option value="organDamage">Organ Damage (liver, kidney, etc.)</option>
                      <option value="birthDefect">Birth Defect</option>
                      <option value="neurologicalDamage">Neurological Damage</option>
                      <option value="death">Death</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Usage Duration
                    </label>
                    <select
                      value={formData.usageDuration}
                      onChange={(e) => updateField('usageDuration', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground"
                    >
                      <option value="">Select usage duration</option>
                      <option value="under6months">Under 6 months</option>
                      <option value="6months-2years">6 months - 2 years</option>
                      <option value="2-5years">2 - 5 years</option>
                      <option value="over5years">Over 5 years</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Recall Status
                    </label>
                    <select
                      value={formData.recallStatus}
                      onChange={(e) => updateField('recallStatus', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground"
                    >
                      <option value="">Select recall status</option>
                      <option value="classIRecall">Class I Recall (dangerous, life-threatening)</option>
                      <option value="classIIRecall">Class II Recall (serious adverse effects)</option>
                      <option value="classIIIRecall">Class III Recall (minor violations)</option>
                      <option value="noRecall">No Recall Issued</option>
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
                  <h2 className="text-3xl font-bold text-foreground mb-2">Injury & Medical Costs</h2>
                  <p className="text-muted-foreground">Provide injury severity and costs</p>
                </div>

                <div className="space-y-6">
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
                      <option value="serious">Serious (permanent injury, surgery required)</option>
                      <option value="catastrophic">Catastrophic (life-altering disability)</option>
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
                      <option value="30">Under 40</option>
                      <option value="50">40-64</option>
                      <option value="70">65 or older</option>
                    </select>
                  </div>

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
                      FDA Warning Status
                    </label>
                    <select
                      value={formData.fdaWarning}
                      onChange={(e) => updateField('fdaWarning', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground"
                    >
                      <option value="">Select FDA warning</option>
                      <option value="blackBox">Black Box Warning (most serious)</option>
                      <option value="safetyAlert">FDA Safety Alert Issued</option>
                      <option value="recall">FDA Recall Issued</option>
                      <option value="none">No FDA Warning</option>
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
                  <p className="text-muted-foreground">Based on your pharmaceutical injury</p>
                </div>

                <div className="bg-muted/50 rounded-2xl p-8 text-center border border-border">
                  <div className="text-sm font-medium text-muted-foreground mb-2">Estimated Range</div>
                  <div className="text-4xl md:text-5xl font-bold text-foreground">
                    ${results.min.toLocaleString()} - ${results.max.toLocaleString()}
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-4">Pharmaceutical Injury Compensation Includes:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>All medical expenses (past and future treatment)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Lost wages and reduced earning capacity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Pain, suffering, and emotional distress</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Loss of quality of life and enjoyment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Punitive damages (if manufacturer concealed risks)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Wrongful death damages (if applicable)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-3">Important Disclaimer</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This estimate is for informational purposes only and does not constitute legal advice. 
                    Pharmaceutical injury cases require proving causation between the drug and injury, which 
                    often requires expert medical testimony. Outcomes vary based on FDA approval status, warning 
                    adequacy, manufacturer knowledge, preemption issues, and individual case factors. Many 
                    pharmaceutical cases are handled as mass torts or class actions. Consult with a pharmaceutical 
                    litigation attorney for case-specific evaluation and MDL participation.
                  </p>
                </div>

                <div className="text-center pt-4">
                  <Link to="/free-consultation">
                    <Button size="lg" className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white">
                      Get My Free Case Evaluation
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
                <div className="text-4xl font-bold text-foreground mb-2">Strict</div>
                <p className="text-muted-foreground">Liability standard</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-foreground mb-2">Expert</div>
                <p className="text-muted-foreground">Medical testimony</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-foreground mb-2">No Fee</div>
                <p className="text-muted-foreground">Unless we win</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PharmaceuticalCompensationCalculator;
