import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Hand } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const AmputationCompensationCalculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    amputationType: '',
    age: '',
    occupation: '',
    medicalCosts: '',
    futureCareCosts: '',
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
    let baseMin = 200000;
    let baseMax = 800000;

    // Amputation type multipliers
    const typeMultipliers: Record<string, number> = {
      'finger': 1,
      'hand': 4,
      'arm-below': 6,
      'arm-above': 8,
      'leg-below': 7,
      'leg-above': 10,
      'multiple': 15
    };
    const multiplier = typeMultipliers[formData.amputationType] || 1;
    baseMin *= multiplier;
    baseMax *= multiplier;

    // Add medical costs
    const medical = parseInt(formData.medicalCosts) || 100000;
    baseMin += medical;
    baseMax += medical * 1.5;

    // Future care (prosthetics, therapy)
    const futureCare = parseInt(formData.futureCareCosts) || 30000;
    const age = parseInt(formData.age) || 45;
    const yearsRemaining = Math.max(80 - age, 10);
    baseMin += futureCare * yearsRemaining * 0.7;
    baseMax += futureCare * yearsRemaining * 1.2;

    // Occupation impact
    const occupationMultipliers: Record<string, number> = {
      'manual-labor': 1.8,
      'skilled-trades': 1.5,
      'office-work': 1.2,
      'professional': 1.3,
      'retired': 0.8
    };
    const occMultiplier = occupationMultipliers[formData.occupation] || 1;
    baseMax *= occMultiplier;

    // Pain level adjustment
    const painMultipliers: Record<string, number> = {
      'minimal': 1.1,
      'moderate': 1.4,
      'severe': 1.8,
      'extreme': 2.2
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
    if (step === 1) return formData.amputationType && formData.occupation && formData.painLevel;
    if (step === 2) return formData.age && formData.medicalCosts && formData.futureCareCosts;
    return false;
  };

  return (
    <>
      <Helmet>
        <title>Amputation Calculator | Limb Loss Compensation | Trembach Law</title>
        <meta name="description" content="Calculate amputation compensation for traumatic limb loss. Free estimates for finger, hand, arm, and leg amputations." />
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
            <Hand className="mx-auto mb-6" size={64} strokeWidth={1.5} />
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight leading-[1.1]">
              Amputation<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light">
              Traumatic limb loss compensation
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
                  <h2 className="text-3xl font-bold text-black mb-2">Amputation Details</h2>
                  <p className="text-slate-600">Tell us about your limb loss</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">Type of Amputation</label>
                    <Select value={formData.amputationType} onValueChange={(value) => setFormData({ ...formData, amputationType: value })}>
                      <SelectTrigger className="h-14 text-lg">
                        <SelectValue placeholder="Select amputation type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="finger">Finger(s) - One or more fingers</SelectItem>
                        <SelectItem value="hand">Hand - At wrist level</SelectItem>
                        <SelectItem value="arm-below">Arm Below Elbow</SelectItem>
                        <SelectItem value="arm-above">Arm Above Elbow</SelectItem>
                        <SelectItem value="leg-below">Leg Below Knee</SelectItem>
                        <SelectItem value="leg-above">Leg Above Knee</SelectItem>
                        <SelectItem value="multiple">Multiple Limbs</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">Occupation Type</label>
                    <Select value={formData.occupation} onValueChange={(value) => setFormData({ ...formData, occupation: value })}>
                      <SelectTrigger className="h-14 text-lg">
                        <SelectValue placeholder="Select occupation type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="manual-labor">Manual Labor</SelectItem>
                        <SelectItem value="skilled-trades">Skilled Trades</SelectItem>
                        <SelectItem value="office-work">Office Work</SelectItem>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="retired">Retired</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">Pain & Phantom Limb Pain Level</label>
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
                  <p className="text-slate-600">Calculate lifetime costs</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">Your Age</label>
                    <Select value={formData.age} onValueChange={(value) => setFormData({ ...formData, age: value })}>
                      <SelectTrigger className="h-14 text-lg">
                        <SelectValue placeholder="Select your age range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="25">Under 30</SelectItem>
                        <SelectItem value="35">30-39</SelectItem>
                        <SelectItem value="45">40-49</SelectItem>
                        <SelectItem value="55">50-59</SelectItem>
                        <SelectItem value="65">60+</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-slate-500 mt-2">Used to calculate lifetime prosthetic costs</p>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">
                      Current Medical Costs
                    </label>
                    <Select value={formData.medicalCosts} onValueChange={(value) => setFormData({ ...formData, medicalCosts: value })}>
                      <SelectTrigger className="h-14 text-lg">
                        <SelectValue placeholder="Select medical cost range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="50000">Under $50,000</SelectItem>
                        <SelectItem value="100000">$50,000 - $100,000</SelectItem>
                        <SelectItem value="200000">$100,000 - $300,000</SelectItem>
                        <SelectItem value="400000">$300,000 - $500,000</SelectItem>
                        <SelectItem value="750000">Over $500,000</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-slate-500 mt-2">Surgery, hospitalization, rehabilitation</p>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">
                      Annual Future Care Costs
                    </label>
                    <Select value={formData.futureCareCosts} onValueChange={(value) => setFormData({ ...formData, futureCareCosts: value })}>
                      <SelectTrigger className="h-14 text-lg">
                        <SelectValue placeholder="Select annual care cost" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15000">Under $15,000/year</SelectItem>
                        <SelectItem value="30000">$15,000 - $45,000/year</SelectItem>
                        <SelectItem value="60000">$45,000 - $75,000/year</SelectItem>
                        <SelectItem value="100000">Over $75,000/year</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-slate-500 mt-2">Prosthetics, replacements, therapy, maintenance</p>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && results && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-black mb-2">Your Estimated Compensation</h2>
                  <p className="text-slate-600">Based on similar amputation cases</p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8 text-center">
                  <div className="text-5xl font-bold text-black mb-2">
                    ${results.min.toLocaleString()} - ${results.max.toLocaleString()}
                  </div>
                  <p className="text-slate-600">Total Compensation Range</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-white border border-slate-200 rounded-xl p-6">
                    <h4 className="font-semibold text-black mb-2">Lifetime Prosthetic Care</h4>
                    <p className="text-sm text-slate-600">Multiple prosthetic replacements, fittings, maintenance over lifetime</p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-xl p-6">
                    <h4 className="font-semibold text-black mb-2">Lost Earning Capacity</h4>
                    <p className="text-sm text-slate-600">Reduced ability to work, career limitations, income loss</p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-xl p-6">
                    <h4 className="font-semibold text-black mb-2">Medical Treatment</h4>
                    <p className="text-sm text-slate-600">Surgery, rehabilitation, ongoing medical care</p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-xl p-6">
                    <h4 className="font-semibold text-black mb-2">Pain & Suffering</h4>
                    <p className="text-sm text-slate-600">Phantom limb pain, psychological trauma, loss of quality of life</p>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <h3 className="font-semibold text-amber-900 mb-3">Legal Disclaimer</h3>
                  <p className="text-sm text-amber-900 leading-relaxed">
                    <strong>Important:</strong> This calculator provides an estimate only and does not constitute legal advice. 
                    Amputation cases are highly complex and actual compensation varies significantly based on medical evidence, 
                    expert testimony, life care planning, jurisdiction, jury composition, and specific case facts. Modern prosthetics 
                    are expensive and need replacement every 3-5 years. Ensure your settlement covers all lifetime needs. Results are not 
                    guaranteed. No attorney-client relationship is created by using this calculator. Each case must be evaluated 
                    individually by a qualified amputation injury attorney licensed in your state. Past results do not guarantee future outcomes.
                  </p>
                </div>

                <div className="calculator-cta-section">
                  <h3 className="text-2xl font-bold mb-4">Get maximum amputation compensation</h3>
                  <p className="mb-6 max-w-2xl mx-auto">
                    Our attorneys specialize in amputation cases and work with life care planners to ensure 
                    your settlement covers all lifetime needs. No fee unless we win.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/free-consultation">
                      <Button size="lg" className="text-lg px-8">
                        Get My Free Case Evaluation
                      </Button>
                    </Link>
                  </div>
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
                <div className="text-4xl font-bold text-slate-900 mb-2">$5M+</div>
                <p className="text-slate-600">Major limb average</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">Lifetime</div>
                <p className="text-slate-600">Prosthetic care coverage</p>
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

export default AmputationCompensationCalculator;