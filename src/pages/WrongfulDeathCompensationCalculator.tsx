import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const WrongfulDeathCompensationCalculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    age: '',
    annualIncome: '',
    dependents: '',
    funeralCosts: '',
    relationship: '',
    yearsToRetirement: ''
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
    let baseMin = 150000;
    let baseMax = 750000;

    const income = parseInt(formData.annualIncome) || 75000;
    const years = parseInt(formData.yearsToRetirement) || 20;
    baseMin += income * years * 0.6;
    baseMax += income * years * 1.2;

    const funeral = parseInt(formData.funeralCosts) || 15000;
    baseMin += funeral;
    baseMax += funeral;

    const dependentsCount = parseInt(formData.dependents) || 0;
    if (dependentsCount > 0) {
      baseMin += dependentsCount * 100000;
      baseMax += dependentsCount * 250000;
    }

    setResults({ min: Math.round(baseMin), max: Math.round(baseMax) });
    setStep(3);
  };

  const isStepValid = () => {
    if (step === 1) return formData.relationship && formData.age && formData.dependents;
    if (step === 2) return formData.annualIncome && formData.yearsToRetirement && formData.funeralCosts;
    return false;
  };

  return (
    <>
      <Helmet>
        <title>Wrongful Death Calculator | Family Compensation | Trembach Law</title>
        <meta name="description" content="Calculate wrongful death compensation for loss of loved one. Free estimates including lost income, funeral costs, and loss of companionship." />
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
            <Heart className="mx-auto mb-6" size={64} strokeWidth={1.5} />
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight leading-[1.1]">
              Wrongful Death<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light">
              Compassionate case evaluation
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
                  <h2 className="text-3xl font-bold text-black mb-2">Family Information</h2>
                  <p className="text-slate-600">Help us understand your relationship</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">Your Relationship</label>
                    <Select value={formData.relationship} onValueChange={(value) => setFormData({ ...formData, relationship: value })}>
                      <SelectTrigger className="h-14 text-lg">
                        <SelectValue placeholder="Select your relationship" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Spouse">Spouse</SelectItem>
                        <SelectItem value="Child">Child</SelectItem>
                        <SelectItem value="Parent">Parent</SelectItem>
                        <SelectItem value="Sibling">Sibling</SelectItem>
                        <SelectItem value="Other Family">Other Family</SelectItem>
                        <SelectItem value="Estate Representative">Estate Representative</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">Deceased's Age</label>
                    <Select value={formData.age} onValueChange={(value) => setFormData({ ...formData, age: value })}>
                      <SelectTrigger className="h-14 text-lg">
                        <SelectValue placeholder="Select age range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="18-35">18-35</SelectItem>
                        <SelectItem value="36-50">36-50</SelectItem>
                        <SelectItem value="51-65">51-65</SelectItem>
                        <SelectItem value="66+">66+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">
                      Number of Dependents
                    </label>
                    <Select value={formData.dependents} onValueChange={(value) => setFormData({ ...formData, dependents: value })}>
                      <SelectTrigger className="h-14 text-lg">
                        <SelectValue placeholder="Select number of dependents" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">No dependents</SelectItem>
                        <SelectItem value="1">1 dependent</SelectItem>
                        <SelectItem value="2">2 dependents</SelectItem>
                        <SelectItem value="3">3 dependents</SelectItem>
                        <SelectItem value="4">4+ dependents</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-black mb-2">Financial Details</h2>
                  <p className="text-slate-600">Information for loss of support calculation</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">
                      Annual Income (before death)
                    </label>
                    <Select value={formData.annualIncome} onValueChange={(value) => setFormData({ ...formData, annualIncome: value })}>
                      <SelectTrigger className="h-14 text-lg">
                        <SelectValue placeholder="Select annual income" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="35000">Under $35,000</SelectItem>
                        <SelectItem value="50000">$35,000 - $60,000</SelectItem>
                        <SelectItem value="75000">$60,000 - $90,000</SelectItem>
                        <SelectItem value="110000">$90,000 - $130,000</SelectItem>
                        <SelectItem value="175000">Over $130,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">
                      Years to Retirement
                    </label>
                    <Select value={formData.yearsToRetirement} onValueChange={(value) => setFormData({ ...formData, yearsToRetirement: value })}>
                      <SelectTrigger className="h-14 text-lg">
                        <SelectValue placeholder="Select years to retirement" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">Under 5 years</SelectItem>
                        <SelectItem value="10">5-15 years</SelectItem>
                        <SelectItem value="20">15-25 years</SelectItem>
                        <SelectItem value="30">25-35 years</SelectItem>
                        <SelectItem value="40">Over 35 years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">
                      Funeral & Burial Costs
                    </label>
                    <Select value={formData.funeralCosts} onValueChange={(value) => setFormData({ ...formData, funeralCosts: value })}>
                      <SelectTrigger className="h-14 text-lg">
                        <SelectValue placeholder="Select funeral cost range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="8000">Under $8,000</SelectItem>
                        <SelectItem value="15000">$8,000 - $20,000</SelectItem>
                        <SelectItem value="30000">$20,000 - $40,000</SelectItem>
                        <SelectItem value="60000">Over $40,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && results && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-black mb-2">Estimated Compensation Range</h2>
                  <p className="text-slate-600">Based on typical wrongful death cases</p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8 text-center">
                  <div className="text-5xl font-bold text-black mb-2">
                    ${results.min.toLocaleString()} - ${results.max.toLocaleString()}
                  </div>
                  <p className="text-slate-600">Total Compensation Range</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-white border border-slate-200 rounded-xl p-6">
                    <h4 className="font-semibold text-black mb-2">Economic Damages</h4>
                    <p className="text-sm text-slate-600">Lost income, benefits, funeral costs, medical bills</p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-xl p-6">
                    <h4 className="font-semibold text-black mb-2">Non-Economic Damages</h4>
                    <p className="text-sm text-slate-600">Loss of companionship, guidance, emotional support</p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-xl p-6">
                    <h4 className="font-semibold text-black mb-2">Punitive Damages</h4>
                    <p className="text-sm text-slate-600">May apply in cases of gross negligence or intentional harm</p>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <h3 className="font-semibold text-amber-900 mb-3">Legal Disclaimer</h3>
                  <p className="text-sm text-amber-900 leading-relaxed">
                    <strong>Our deepest condolences.</strong> This calculator provides an estimate only and does not constitute legal advice. 
                    Every wrongful death case is unique and actual compensation varies significantly based on specific circumstances, 
                    state laws, jurisdiction, jury composition, the strength of your case, and many other factors. Results are not guaranteed. 
                    No attorney-client relationship is created by using this calculator. Each case must be evaluated individually by a qualified 
                    wrongful death attorney licensed in your state. Past results do not guarantee future outcomes.
                  </p>
                </div>

                <div className="text-center pt-4">
                  <h3 className="text-xl font-semibold text-black mb-4">Speak with a compassionate attorney</h3>
                  <Link to="/contact">
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
                <div className="text-4xl font-bold text-slate-900 mb-2">$750K+</div>
                <p className="text-slate-600">Average settlement</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">24/7</div>
                <p className="text-slate-600">Compassionate support</p>
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

export default WrongfulDeathCompensationCalculator;
