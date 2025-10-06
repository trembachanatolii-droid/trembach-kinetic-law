import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, FileWarning } from 'lucide-react';
import { useCalculatorForm, CalculatorFormData, CalculatorResults } from '@/hooks/useCalculatorForm';
import { FormNavigation } from '@/components/calculator/FormNavigation';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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
                    <Select value={formData.insuranceType} onValueChange={(value) => updateField('insuranceType', value)}>
                      <SelectTrigger className="h-14">
                        <SelectValue placeholder="Select insurance type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="health">Health Insurance</SelectItem>
                        <SelectItem value="disability">Disability Insurance</SelectItem>
                        <SelectItem value="life">Life Insurance</SelectItem>
                        <SelectItem value="property">Property/Homeowners Insurance</SelectItem>
                        <SelectItem value="auto">Auto Insurance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Type of Bad Faith Claim</label>
                    <Select value={formData.claimType} onValueChange={(value) => updateField('claimType', value)}>
                      <SelectTrigger className="h-14">
                        <SelectValue placeholder="Select claim type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wrongfulDenial">Wrongful Denial of Claim</SelectItem>
                        <SelectItem value="unreasonableDelay">Unreasonable Delay in Payment</SelectItem>
                        <SelectItem value="inadequateInvestigation">Inadequate Investigation</SelectItem>
                        <SelectItem value="lowballOffer">Lowball Settlement Offer</SelectItem>
                        <SelectItem value="failureToDefend">Failure to Defend (liability policy)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Original Claim Amount</label>
                    <Select value={formData.claimAmount} onValueChange={(value) => updateField('claimAmount', value)}>
                      <SelectTrigger className="h-14">
                        <SelectValue placeholder="Select claim amount" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under50k">Under $50,000</SelectItem>
                        <SelectItem value="50k-200k">$50,000 - $200,000</SelectItem>
                        <SelectItem value="200k-500k">$200,000 - $500,000</SelectItem>
                        <SelectItem value="500k-1m">$500,000 - $1,000,000</SelectItem>
                        <SelectItem value="over1m">Over $1,000,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Reason for Denial/Delay</label>
                    <Select value={formData.denialReason} onValueChange={(value) => updateField('denialReason', value)}>
                      <SelectTrigger className="h-14">
                        <SelectValue placeholder="Select denial reason" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="noReason">No Reason Given</SelectItem>
                        <SelectItem value="pretextual">Pretextual Reason (bad excuse)</SelectItem>
                        <SelectItem value="policyMisinterpretation">Policy Misinterpretation</SelectItem>
                        <SelectItem value="disputed">Disputed Coverage Issue</SelectItem>
                      </SelectContent>
                    </Select>
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
                    <Select value={formData.delayDuration} onValueChange={(value) => updateField('delayDuration', value)}>
                      <SelectTrigger className="h-14">
                        <SelectValue placeholder="Select delay duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under3months">Under 3 months</SelectItem>
                        <SelectItem value="3-6months">3-6 months</SelectItem>
                        <SelectItem value="6-12months">6-12 months</SelectItem>
                        <SelectItem value="over12months">Over 12 months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Insurer's Conduct</label>
                    <Select value={formData.conductType} onValueChange={(value) => updateField('conductType', value)}>
                      <SelectTrigger className="h-14">
                        <SelectValue placeholder="Select conduct type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="willful">Willful/Intentional (fraud, lies)</SelectItem>
                        <SelectItem value="reckless">Reckless Disregard</SelectItem>
                        <SelectItem value="negligent">Negligent Handling</SelectItem>
                        <SelectItem value="goodFaith">Good Faith Dispute</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Consequential Damages</label>
                    <Select value={formData.consequentialDamages} onValueChange={(value) => updateField('consequentialDamages', value)}>
                      <SelectTrigger className="h-14">
                        <SelectValue placeholder="Select damages severity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="severe">Severe (foreclosure, bankruptcy, medical crisis)</SelectItem>
                        <SelectItem value="moderate">Moderate (financial hardship, debt)</SelectItem>
                        <SelectItem value="minor">Minor (inconvenience, stress)</SelectItem>
                        <SelectItem value="none">None (claim eventually paid)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Your Age</label>
                    <Select value={formData.age} onValueChange={(value) => updateField('age', value)}>
                      <SelectTrigger className="h-14">
                        <SelectValue placeholder="Select age range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">Under 40</SelectItem>
                        <SelectItem value="50">40-64</SelectItem>
                        <SelectItem value="70">65 or older</SelectItem>
                      </SelectContent>
                    </Select>
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
                  <Link to="/contact"><Button size="lg" className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white">Get My Free Case Evaluation</Button></Link>
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
