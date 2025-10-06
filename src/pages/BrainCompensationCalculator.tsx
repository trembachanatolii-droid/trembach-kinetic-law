import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const BrainCompensationCalculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    injurySeverity: '',
    permanentDisability: '',
    medicalCosts: '',
    lostWages: '',
    age: '',
    painLevel: ''
  });
  const [results, setResults] = useState<{ min: number; max: number } | null>(null);

  const handleNext = () => {
    if (step === 2) {
      calculateCompensation();
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => setStep(step - 1);

  const calculateCompensation = () => {
    let baseMin = 100000;
    let baseMax = 500000;

    // Severity multiplier
    const severityMultipliers: Record<string, number> = {
      'mild': 1,
      'moderate': 3,
      'severe': 8,
      'catastrophic': 15
    };
    const multiplier = severityMultipliers[formData.injurySeverity] || 1;
    baseMin *= multiplier;
    baseMax *= multiplier;

    // Add medical costs
    const medical = parseInt(formData.medicalCosts) || 100000;
    baseMin += medical;
    baseMax += medical * 2;

    // Add lost wages
    const wages = parseInt(formData.lostWages) || 75000;
    const age = parseInt(formData.age) || 45;
    const yearsToRetirement = Math.max(65 - age, 0);
    baseMin += wages * yearsToRetirement * 0.8;
    baseMax += wages * yearsToRetirement * 1.5;

    // Permanent disability adjustment
    if (formData.permanentDisability === 'yes') {
      baseMin *= 1.8;
      baseMax *= 2.5;
    }

    // Pain and suffering
    const painMultipliers: Record<string, number> = {
      'minimal': 1.1,
      'moderate': 1.5,
      'severe': 2.0,
      'extreme': 3.0
    };
    const painMultiplier = painMultipliers[formData.painLevel] || 1;
    baseMax *= painMultiplier;

    setResults({ 
      min: Math.round(baseMin), 
      max: Math.round(baseMax) 
    });
    setStep(3);
  };

  const isStepValid = () => {
    if (step === 1) return formData.injurySeverity && formData.permanentDisability && formData.painLevel;
    if (step === 2) return formData.medicalCosts && formData.lostWages && formData.age;
    return false;
  };

  return (
    <>
      <Helmet>
        <title>Brain Injury Calculator | TBI Compensation | Trembach Law</title>
        <meta name="description" content="Calculate traumatic brain injury compensation for concussions and severe TBI. Free lifetime care estimates." />
      </Helmet>

      <main className="min-h-screen bg-white">
        <div className="border-b border-slate-200">
          <div className="container mx-auto px-6 py-4 max-w-5xl">
            <Link to="/calculators" className="inline-flex items-center text-slate-600 hover:text-slate-900 visited:text-slate-600 no-underline">
              <ArrowLeft size={16} className="mr-2" />
              <span className="text-sm font-medium">Back to All Calculators</span>
            </Link>
          </div>
        </div>

        <section className="pt-20 pb-12 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <Brain className="mx-auto mb-6" size={64} strokeWidth={1.5} />
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight leading-[1.1]">
              Brain Injury<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light">
              Traumatic brain injury compensation
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="mb-12">
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-3">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        s === step ? 'bg-black' : s < step ? 'bg-slate-400' : 'bg-slate-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-slate-500">Step {step} of 3</span>
              </div>
            </div>

            {step === 1 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-black mb-2">Injury Details</h2>
                  <p className="text-slate-600">Help us understand your brain injury</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">
                      Injury Severity
                    </label>
                    <Select value={formData.injurySeverity} onValueChange={(value) => setFormData({ ...formData, injurySeverity: value })}>
                      <SelectTrigger className="h-14 text-lg">
                        <SelectValue placeholder="Select injury severity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mild">Mild Concussion - Brief loss of consciousness</SelectItem>
                        <SelectItem value="moderate">Moderate TBI - Extended recovery needed</SelectItem>
                        <SelectItem value="severe">Severe TBI - Long-term impairments</SelectItem>
                        <SelectItem value="catastrophic">Catastrophic - Permanent brain damage</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">
                      Permanent Cognitive Disability
                    </label>
                    <Select value={formData.permanentDisability} onValueChange={(value) => setFormData({ ...formData, permanentDisability: value })}>
                      <SelectTrigger className="h-14 text-lg">
                        <SelectValue placeholder="Select yes or no" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">
                      Pain & Suffering Level
                    </label>
                    <Select value={formData.painLevel} onValueChange={(value) => setFormData({ ...formData, painLevel: value })}>
                      <SelectTrigger className="h-14 text-lg">
                        <SelectValue placeholder="Select pain level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="minimal">Minimal</SelectItem>
                        <SelectItem value="moderate">Moderate</SelectItem>
                        <SelectItem value="severe">Severe</SelectItem>
                        <SelectItem value="extreme">Extreme</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-black mb-2">Financial Impact</h2>
                  <p className="text-slate-600">Help us calculate your total compensation</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">
                      Total Medical Costs (past & future)
                    </label>
                    <Select value={formData.medicalCosts} onValueChange={(value) => setFormData({ ...formData, medicalCosts: value })}>
                      <SelectTrigger className="h-14 text-lg">
                        <SelectValue placeholder="Select medical cost range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="50000">Under $50,000</SelectItem>
                        <SelectItem value="100000">$50,000 - $100,000</SelectItem>
                        <SelectItem value="250000">$100,000 - $250,000</SelectItem>
                        <SelectItem value="500000">$250,000 - $500,000</SelectItem>
                        <SelectItem value="1000000">$500,000 - $1,000,000</SelectItem>
                        <SelectItem value="2000000">Over $1,000,000</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-slate-500 mt-2">Include therapy, medications, assistive devices</p>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">
                      Annual Income (before injury)
                    </label>
                    <Select value={formData.lostWages} onValueChange={(value) => setFormData({ ...formData, lostWages: value })}>
                      <SelectTrigger className="h-14 text-lg">
                        <SelectValue placeholder="Select annual income range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30000">Under $30,000</SelectItem>
                        <SelectItem value="50000">$30,000 - $50,000</SelectItem>
                        <SelectItem value="75000">$50,000 - $75,000</SelectItem>
                        <SelectItem value="100000">$75,000 - $100,000</SelectItem>
                        <SelectItem value="150000">$100,000 - $150,000</SelectItem>
                        <SelectItem value="200000">Over $150,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">
                      Your Age
                    </label>
                    <Select value={formData.age} onValueChange={(value) => setFormData({ ...formData, age: value })}>
                      <SelectTrigger className="h-14 text-lg">
                        <SelectValue placeholder="Select your age range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="25">Under 30</SelectItem>
                        <SelectItem value="35">30-39</SelectItem>
                        <SelectItem value="45">40-49</SelectItem>
                        <SelectItem value="55">50-59</SelectItem>
                        <SelectItem value="65">60-69</SelectItem>
                        <SelectItem value="75">70 or older</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-slate-500 mt-2">Used to calculate future lost earnings</p>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && results && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-black mb-2">Your Estimated Compensation</h2>
                  <p className="text-slate-600">Based on similar brain injury cases</p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8 text-center">
                  <div className="text-5xl font-bold text-black mb-2">
                    ${results.min.toLocaleString()} - ${results.max.toLocaleString()}
                  </div>
                  <p className="text-slate-600">Estimated Compensation Range</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-white border border-slate-200 rounded-xl p-6">
                    <h4 className="font-semibold text-black mb-2">Economic Damages</h4>
                    <p className="text-sm text-slate-600">Medical bills, lost wages, future care costs, therapy</p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-xl p-6">
                    <h4 className="font-semibold text-black mb-2">Non-Economic Damages</h4>
                    <p className="text-sm text-slate-600">Pain, suffering, loss of quality of life, mental anguish</p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-xl p-6">
                    <h4 className="font-semibold text-black mb-2">Future Care Costs</h4>
                    <p className="text-sm text-slate-600">Lifetime cognitive therapy, assistive technology, home modifications</p>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <h3 className="font-semibold text-amber-900 mb-3">Legal Disclaimer</h3>
                  <p className="text-sm text-amber-900 leading-relaxed">
                    <strong>Important:</strong> This calculator provides an estimate only and does not constitute legal advice. 
                    Brain injury cases are highly complex and actual compensation varies significantly based on medical evidence, 
                    expert testimony, long-term prognosis, jurisdiction, jury composition, and specific case facts. Results are not 
                    guaranteed. No attorney-client relationship is created by using this calculator. Each case must be evaluated 
                    individually by a qualified brain injury attorney licensed in your state. Past results do not guarantee future outcomes.
                  </p>
                </div>

                <div className="text-center pt-4">
                  <h3 className="text-xl font-semibold text-black mb-4">Maximize your brain injury compensation</h3>
                  <Link to="/free-consultation">
                    <Button size="lg" className="h-14 px-8 text-base bg-blue-600 hover:bg-blue-700 text-white">
                      Get My Free Case Evaluation
                    </Button>
                  </Link>
                </div>
              </div>
            )}

            {step < 3 && (
              <div className="flex gap-4 pt-8">
                {step > 1 && (
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleBack}
                    className="flex-1 h-14"
                  >
                    Back
                  </Button>
                )}
                <Button
                  size="lg"
                  onClick={handleNext}
                  disabled={!isStepValid()}
                  className="flex-1 h-14"
                >
                  {step === 2 ? 'Calculate' : 'Continue'}
                </Button>
              </div>
            )}
          </div>
        </section>

        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">$6M+</div>
                <p className="text-slate-600">Severe TBI average</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">Lifetime</div>
                <p className="text-slate-600">Cognitive care coverage</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">No Fee</div>
                <p className="text-slate-600">Unless we win</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BrainCompensationCalculator;
