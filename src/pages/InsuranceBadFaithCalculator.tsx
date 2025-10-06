import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, FileWarning } from 'lucide-react';
import { useCalculatorForm, CalculatorFormData, CalculatorResults } from '@/hooks/useCalculatorForm';
import { FormNavigation } from '@/components/calculator/FormNavigation';
import { Button } from '@/components/ui/button';

interface InsuranceBadFaithFormData extends CalculatorFormData {
  insuranceType: string;
  claimType: string;
  claimAmount: string;
  denialReason: string;
  delayDuration: string;
  conductType: string;
  consequentialDamages: string;
  age: string;
}

const initialFormData: InsuranceBadFaithFormData = {
  insuranceType: '',
  claimType: '',
  claimAmount: '',
  denialReason: '',
  delayDuration: '',
  conductType: '',
  consequentialDamages: '',
  age: ''
};

function calculateCompensation(data: InsuranceBadFaithFormData): CalculatorResults {
  let baseAmount = 100000;

  const insuranceTypeMultipliers: { [key: string]: number } = {
    health: 2.0,
    disability: 2.5,
    life: 3.0,
    property: 1.8,
    auto: 1.5
  };

  const claimTypeMultipliers: { [key: string]: number } = {
    wrongfulDenial: 2.5,
    unreasonableDelay: 2.0,
    inadequateInvestigation: 1.8,
    lowballOffer: 1.6,
    failureToDefend: 2.2
  };

  const claimAmountMultipliers: { [key: string]: number } = {
    under50k: 1.0,
    '50k-200k': 2.0,
    '200k-500k': 3.5,
    '500k-1m': 5.0,
    over1m: 7.0
  };

  const denialReasonMultipliers: { [key: string]: number } = {
    noReason: 2.0,
    pretextual: 1.8,
    policyMisinterpretation: 1.6,
    disputed: 1.2
  };

  const delayMultipliers: { [key: string]: number } = {
    under3months: 1.0,
    '3-6months': 1.3,
    '6-12months': 1.6,
    over12months: 2.0
  };

  const conductTypeMultipliers: { [key: string]: number } = {
    willful: 2.5,
    reckless: 2.0,
    negligent: 1.5,
    goodFaith: 1.0
  };

  const consequentialDamagesMultipliers: { [key: string]: number } = {
    severe: 2.0,
    moderate: 1.5,
    minor: 1.2,
    none: 1.0
  };

  baseAmount *= insuranceTypeMultipliers[data.insuranceType] || 1;
  baseAmount *= claimTypeMultipliers[data.claimType] || 1;
  baseAmount *= claimAmountMultipliers[data.claimAmount] || 1;
  baseAmount *= denialReasonMultipliers[data.denialReason] || 1;
  baseAmount *= delayMultipliers[data.delayDuration] || 1;
  baseAmount *= conductTypeMultipliers[data.conductType] || 1;
  baseAmount *= consequentialDamagesMultipliers[data.consequentialDamages] || 1;

  const age = parseInt(data.age);
  if (age < 40) baseAmount *= 1.2;
  else if (age >= 65) baseAmount *= 0.95;

  const min = Math.round(baseAmount * 0.6);
  const max = Math.round(baseAmount * 1.6);

  return { min, max };
}

function validateForm(data: InsuranceBadFaithFormData, step: number): boolean {
  if (step === 1) return !!(data.insuranceType && data.claimType && data.claimAmount && data.denialReason);
  if (step === 2) return !!(data.delayDuration && data.conductType && data.consequentialDamages && data.age);
  return true;
}

const InsuranceBadFaithCalculator = () => {
  const { step, formData, results, updateField, handleNext, handleBack, resetForm, isStepValid } = 
    useCalculatorForm<InsuranceBadFaithFormData>(initialFormData, calculateCompensation, validateForm);

  return (
    <>
      <Helmet>
        <title>Insurance Bad Faith Calculator | Denial Compensation | Trembach Law</title>
        <meta name="description" content="Calculate insurance bad faith compensation for wrongful claim denials and unreasonable delays." />
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
              <FileWarning className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight leading-[1.1]">
              Insurance Bad Faith<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Wrongful denial compensation
            </p>
          </div>
        </section>

        {step < 3 && (
          <section className="py-4 bg-muted/30 border-b border-border">
            <div className="container mx-auto px-6 max-w-5xl">
              <div className="flex items-center justify-center gap-2">
                {[1, 2, 3].map((s) => (
                  <div key={s} className={`h-2 w-16 rounded-full transition-colors ${
                    s === step ? 'bg-primary' : s < step ? 'bg-primary/50' : 'bg-border'
                  }`} />
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
                  <h2 className="text-3xl font-bold text-foreground mb-2">Claim Details</h2>
                  <p className="text-muted-foreground">Tell us about your insurance claim</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Type of Insurance</label>
                    <select value={formData.insuranceType} onChange={(e) => updateField('insuranceType', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select insurance type</option>
                      <option value="health">Health Insurance</option>
                      <option value="disability">Disability Insurance</option>
                      <option value="life">Life Insurance</option>
                      <option value="property">Property/Homeowners Insurance</option>
                      <option value="auto">Auto Insurance</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Type of Bad Faith Claim</label>
                    <select value={formData.claimType} onChange={(e) => updateField('claimType', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select claim type</option>
                      <option value="wrongfulDenial">Wrongful Denial of Claim</option>
                      <option value="unreasonableDelay">Unreasonable Delay in Payment</option>
                      <option value="inadequateInvestigation">Inadequate Investigation</option>
                      <option value="lowballOffer">Lowball Settlement Offer</option>
                      <option value="failureToDefend">Failure to Defend (liability policy)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Original Claim Amount</label>
                    <select value={formData.claimAmount} onChange={(e) => updateField('claimAmount', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select claim amount</option>
                      <option value="under50k">Under $50,000</option>
                      <option value="50k-200k">$50,000 - $200,000</option>
                      <option value="200k-500k">$200,000 - $500,000</option>
                      <option value="500k-1m">$500,000 - $1,000,000</option>
                      <option value="over1m">Over $1,000,000</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Reason for Denial/Delay</label>
                    <select value={formData.denialReason} onChange={(e) => updateField('denialReason', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select denial reason</option>
                      <option value="noReason">No Reason Given</option>
                      <option value="pretextual">Pretextual Reason (bad excuse)</option>
                      <option value="policyMisinterpretation">Policy Misinterpretation</option>
                      <option value="disputed">Disputed Coverage Issue</option>
                    </select>
                  </div>
                </div>

                <FormNavigation currentStep={step} isValid={isStepValid()} onBack={handleBack} onNext={handleNext} />
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Additional Details</h2>
                  <p className="text-muted-foreground">Impact and conduct information</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Delay Duration</label>
                    <select value={formData.delayDuration} onChange={(e) => updateField('delayDuration', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select delay duration</option>
                      <option value="under3months">Under 3 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="6-12months">6-12 months</option>
                      <option value="over12months">Over 12 months</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Insurer's Conduct</label>
                    <select value={formData.conductType} onChange={(e) => updateField('conductType', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select conduct type</option>
                      <option value="willful">Willful/Intentional (fraud, lies)</option>
                      <option value="reckless">Reckless Disregard</option>
                      <option value="negligent">Negligent Handling</option>
                      <option value="goodFaith">Good Faith Dispute</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Consequential Damages</label>
                    <select value={formData.consequentialDamages} onChange={(e) => updateField('consequentialDamages', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select damages severity</option>
                      <option value="severe">Severe (foreclosure, bankruptcy, medical crisis)</option>
                      <option value="moderate">Moderate (financial hardship, debt)</option>
                      <option value="minor">Minor (inconvenience, stress)</option>
                      <option value="none">None (claim eventually paid)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Your Age</label>
                    <select value={formData.age} onChange={(e) => updateField('age', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select age range</option>
                      <option value="30">Under 40</option>
                      <option value="50">40-64</option>
                      <option value="70">65 or older</option>
                    </select>
                  </div>
                </div>

                <FormNavigation currentStep={step} isValid={isStepValid()} onBack={handleBack} onNext={handleNext} />
              </div>
            )}

            {step === 3 && results && (
              <div className="space-y-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
                    <Calculator className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Estimated Compensation</h2>
                  <p className="text-muted-foreground">Based on your bad faith claim</p>
                </div>

                <div className="bg-muted/50 rounded-2xl p-8 text-center border border-border">
                  <div className="text-sm font-medium text-muted-foreground mb-2">Estimated Range</div>
                  <div className="text-4xl md:text-5xl font-bold text-foreground">
                    ${results.min.toLocaleString()} - ${results.max.toLocaleString()}
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-4">Bad Faith Compensation Includes:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>
                      <span>Original claim amount owed under policy</span></li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>
                      <span>Consequential damages (financial hardship)</span></li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>
                      <span>Emotional distress and mental anguish</span></li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>
                      <span>Attorney fees and costs</span></li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>
                      <span>Punitive damages (for egregious conduct)</span></li>
                  </ul>
                </div>

                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-3">Important Disclaimer</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This estimate is for informational purposes only. Insurance bad faith cases require proving the insurer 
                    acted unreasonably without proper cause. Outcomes vary by state law, policy language, and conduct severity. 
                    Punitive damages depend on willful or reckless conduct. Consult an insurance bad faith attorney.
                  </p>
                </div>

                <div className="text-center pt-4">
                  <Link to="/contact"><Button size="lg" className="h-14 px-8">Get Free Case Review</Button></Link>
                  <button onClick={resetForm} className="block mx-auto mt-4 text-sm text-muted-foreground hover:text-foreground">
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
              <div><div className="text-4xl font-bold text-foreground mb-2">Protected</div>
                <p className="text-muted-foreground">Policy rights</p></div>
              <div><div className="text-4xl font-bold text-foreground mb-2">Accountable</div>
                <p className="text-muted-foreground">Insurer conduct</p></div>
              <div><div className="text-4xl font-bold text-foreground mb-2">No Fee</div>
                <p className="text-muted-foreground">Unless we win</p></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default InsuranceBadFaithCalculator;
