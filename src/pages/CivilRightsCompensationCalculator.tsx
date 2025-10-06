import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, Shield } from 'lucide-react';
import { useCalculatorForm, CalculatorFormData, CalculatorResults } from '@/hooks/useCalculatorForm';
import { FormNavigation } from '@/components/calculator/FormNavigation';
import { Button } from '@/components/ui/button';

interface CivilRightsFormData extends CalculatorFormData {
  violationType: string;
  perpetrator: string;
  injurySeverity: string;
  documentationQuality: string;
  publicInterest: string;
  age: string;
  economicDamages: string;
  policyViolation: string;
}

const initialFormData: CivilRightsFormData = {
  violationType: '',
  perpetrator: '',
  injurySeverity: '',
  documentationQuality: '',
  publicInterest: '',
  age: '',
  economicDamages: '',
  policyViolation: ''
};

function calculateCompensation(data: CivilRightsFormData): CalculatorResults {
  let baseAmount = 75000;

  const violationTypeMultipliers: { [key: string]: number } = {
    policeBrutality: 3.5,
    falseArrest: 2.5,
    excessiveForce: 3.0,
    discrimination: 2.2,
    firstAmendment: 2.0,
    unlawfulSearch: 2.3,
    prisonAbuse: 2.8,
    votingRights: 2.4
  };

  const perpetratorMultipliers: { [key: string]: number } = {
    lawEnforcement: 1.5,
    government: 1.4,
    publicOfficial: 1.6,
    private: 1.0
  };

  const injurySeverityMultipliers: { [key: string]: number } = {
    none: 1.0,
    minor: 1.5,
    moderate: 2.5,
    serious: 4.0,
    catastrophic: 6.0,
    fatal: 7.0
  };

  const documentationMultipliers: { [key: string]: number } = {
    excellent: 1.5,
    good: 1.3,
    adequate: 1.0,
    limited: 0.7
  };

  const publicInterestMultipliers: { [key: string]: number } = {
    high: 1.4,
    moderate: 1.2,
    low: 1.0
  };

  const economicDamagesMultipliers: { [key: string]: number } = {
    none: 1.0,
    under25k: 1.3,
    '25k-100k': 2.0,
    '100k-500k': 3.5,
    over500k: 5.0
  };

  const policyViolationMultipliers: { [key: string]: number } = {
    clear: 1.5,
    likely: 1.3,
    disputed: 1.0,
    none: 0.8
  };

  baseAmount *= violationTypeMultipliers[data.violationType] || 1;
  baseAmount *= perpetratorMultipliers[data.perpetrator] || 1;
  baseAmount *= injurySeverityMultipliers[data.injurySeverity] || 1;
  baseAmount *= documentationMultipliers[data.documentationQuality] || 1;
  baseAmount *= publicInterestMultipliers[data.publicInterest] || 1;
  baseAmount *= economicDamagesMultipliers[data.economicDamages] || 1;
  baseAmount *= policyViolationMultipliers[data.policyViolation] || 1;

  const age = parseInt(data.age);
  if (age < 40) {
    baseAmount *= 1.2;
  } else if (age >= 65) {
    baseAmount *= 0.95;
  }

  const min = Math.round(baseAmount * 0.6);
  const max = Math.round(baseAmount * 1.5);

  return { min, max };
}

function validateForm(data: CivilRightsFormData, step: number): boolean {
  if (step === 1) {
    return !!(data.violationType && data.perpetrator && data.injurySeverity && data.policyViolation);
  }
  if (step === 2) {
    return !!(data.documentationQuality && data.publicInterest && data.age && data.economicDamages);
  }
  return true;
}

const CivilRightsCompensationCalculator = () => {
  const {
    step,
    formData,
    results,
    updateField,
    handleNext,
    handleBack,
    resetForm,
    isStepValid
  } = useCalculatorForm<CivilRightsFormData>(
    initialFormData,
    calculateCompensation,
    validateForm
  );

  return (
    <>
      <Helmet>
        <title>Civil Rights Calculator | Police Brutality Compensation | Trembach Law</title>
        <meta name="description" content="Calculate civil rights violation compensation for police brutality, false arrest, and constitutional violations. Free calculator." />
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
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight leading-[1.1]">
              Civil Rights<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Constitutional violation compensation
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
                  <h2 className="text-3xl font-bold text-foreground mb-2">Violation Details</h2>
                  <p className="text-muted-foreground">Tell us about the civil rights violation</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Type of Violation
                    </label>
                    <select
                      value={formData.violationType}
                      onChange={(e) => updateField('violationType', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground"
                    >
                      <option value="">Select violation type</option>
                      <option value="policeBrutality">Police Brutality (excessive force, assault)</option>
                      <option value="falseArrest">False Arrest/Imprisonment</option>
                      <option value="excessiveForce">Excessive Force (non-police)</option>
                      <option value="discrimination">Discrimination (race, gender, disability)</option>
                      <option value="firstAmendment">First Amendment Violation (speech, assembly)</option>
                      <option value="unlawfulSearch">Unlawful Search and Seizure</option>
                      <option value="prisonAbuse">Prison/Jail Abuse</option>
                      <option value="votingRights">Voting Rights Violation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Perpetrator Type
                    </label>
                    <select
                      value={formData.perpetrator}
                      onChange={(e) => updateField('perpetrator', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground"
                    >
                      <option value="">Select perpetrator</option>
                      <option value="lawEnforcement">Law Enforcement (police, sheriff)</option>
                      <option value="government">Government Agency/Official</option>
                      <option value="publicOfficial">Public Official (elected, appointed)</option>
                      <option value="private">Private Party (acting under color of law)</option>
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
                      <option value="none">No Physical Injury (rights violation only)</option>
                      <option value="minor">Minor Injury (bruises, cuts, emotional distress)</option>
                      <option value="moderate">Moderate Injury (broken bones, hospitalization)</option>
                      <option value="serious">Serious Injury (permanent damage, surgery)</option>
                      <option value="catastrophic">Catastrophic (paralysis, brain injury)</option>
                      <option value="fatal">Fatal (wrongful death)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Policy/Constitutional Violation
                    </label>
                    <select
                      value={formData.policyViolation}
                      onChange={(e) => updateField('policyViolation', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground"
                    >
                      <option value="">Select violation clarity</option>
                      <option value="clear">Clear Violation (well-established rights)</option>
                      <option value="likely">Likely Violation (strong precedent)</option>
                      <option value="disputed">Disputed (gray area, new issue)</option>
                      <option value="none">No Clear Violation (weak case)</option>
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
                  <h2 className="text-3xl font-bold text-foreground mb-2">Case Strength & Damages</h2>
                  <p className="text-muted-foreground">Additional case details</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Evidence/Documentation Quality
                    </label>
                    <select
                      value={formData.documentationQuality}
                      onChange={(e) => updateField('documentationQuality', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground"
                    >
                      <option value="">Select documentation quality</option>
                      <option value="excellent">Excellent (video, photos, witnesses, reports)</option>
                      <option value="good">Good (some documentation, credible witnesses)</option>
                      <option value="adequate">Adequate (police reports, medical records)</option>
                      <option value="limited">Limited (testimony only, minimal evidence)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Public Interest Level
                    </label>
                    <select
                      value={formData.publicInterest}
                      onChange={(e) => updateField('publicInterest', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground"
                    >
                      <option value="">Select public interest</option>
                      <option value="high">High (media coverage, pattern of abuse)</option>
                      <option value="moderate">Moderate (local attention, some publicity)</option>
                      <option value="low">Low (isolated incident)</option>
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
                      <option value="50">40-64</option>
                      <option value="70">65 or older</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Economic Damages
                    </label>
                    <select
                      value={formData.economicDamages}
                      onChange={(e) => updateField('economicDamages', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground"
                    >
                      <option value="">Select economic damages</option>
                      <option value="none">None (rights violation only)</option>
                      <option value="under25k">Under $25,000 (medical, lost wages)</option>
                      <option value="25k-100k">$25,000 - $100,000</option>
                      <option value="100k-500k">$100,000 - $500,000</option>
                      <option value="over500k">Over $500,000</option>
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
                  <p className="text-muted-foreground">Based on your civil rights case</p>
                </div>

                <div className="bg-muted/50 rounded-2xl p-8 text-center border border-border">
                  <div className="text-sm font-medium text-muted-foreground mb-2">Estimated Range</div>
                  <div className="text-4xl md:text-5xl font-bold text-foreground">
                    ${results.min.toLocaleString()} - ${results.max.toLocaleString()}
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-4">Civil Rights Compensation Includes:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Compensatory damages for constitutional violations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Medical expenses and rehabilitation costs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Lost wages and earning capacity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Pain, suffering, and emotional distress</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Punitive damages (for egregious misconduct)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Attorney fees and costs (if you prevail)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-3">Important Disclaimer</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This estimate is for informational purposes only and does not constitute legal advice. 
                    Civil rights cases are highly fact-specific and outcomes vary significantly based on qualified 
                    immunity defenses, clearly established law, evidence quality, and jury verdicts. Municipal 
                    liability requires proving policy or custom. Actual compensation depends on constitutional 
                    violations proven, damages established, and settlement negotiations. Consult with a civil 
                    rights attorney experienced in Section 1983 litigation for case evaluation.
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
                <div className="text-4xl font-bold text-foreground mb-2">Protected</div>
                <p className="text-muted-foreground">Constitutional rights</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-foreground mb-2">Accountability</div>
                <p className="text-muted-foreground">For violations</p>
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

export default CivilRightsCompensationCalculator;
