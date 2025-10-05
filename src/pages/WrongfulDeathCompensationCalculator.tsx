import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

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
                  <label className="block">
                    <span className="text-sm font-medium text-black mb-3 block">Your Relationship</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {['Spouse', 'Child', 'Parent', 'Sibling', 'Other Family', 'Estate Representative'].map((rel) => (
                        <button
                          key={rel}
                          onClick={() => setFormData({ ...formData, relationship: rel })}
                          className={`p-4 rounded-xl border-2 text-left transition-all ${
                            formData.relationship === rel
                              ? 'border-black bg-black text-white'
                              : 'border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <span className="font-medium">{rel}</span>
                        </button>
                      ))}
                    </div>
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium text-black mb-3 block">Deceased's Age</span>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        { value: '18-35', label: '18-35' },
                        { value: '36-50', label: '36-50' },
                        { value: '51-65', label: '51-65' },
                        { value: '66+', label: '66+' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setFormData({ ...formData, age: option.value })}
                          className={`p-4 rounded-xl border-2 text-center transition-all ${
                            formData.age === option.value
                              ? 'border-black bg-black text-white'
                              : 'border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <span className="font-medium">{option.label}</span>
                        </button>
                      ))}
                    </div>
                  </label>

                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">
                      Number of Dependents
                    </label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={formData.dependents}
                      onChange={(e) => setFormData({ ...formData, dependents: e.target.value })}
                      className="h-14 text-lg"
                      min="0"
                    />
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
                    <Input
                      type="number"
                      placeholder="$75,000"
                      value={formData.annualIncome}
                      onChange={(e) => setFormData({ ...formData, annualIncome: e.target.value })}
                      className="h-14 text-lg"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">
                      Years to Retirement
                    </label>
                    <Input
                      type="number"
                      placeholder="20"
                      value={formData.yearsToRetirement}
                      onChange={(e) => setFormData({ ...formData, yearsToRetirement: e.target.value })}
                      className="h-14 text-lg"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">
                      Funeral & Burial Costs
                    </label>
                    <Input
                      type="number"
                      placeholder="$15,000"
                      value={formData.funeralCosts}
                      onChange={(e) => setFormData({ ...formData, funeralCosts: e.target.value })}
                      className="h-14 text-lg"
                    />
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

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <p className="text-sm text-blue-900">
                    <strong>Our deepest condolences.</strong> Every wrongful death case is unique. This estimate is based on similar cases, 
                    but your actual compensation will depend on specific circumstances, state laws, and the strength of your case.
                  </p>
                </div>

                <div className="text-center pt-4">
                  <h3 className="text-xl font-semibold text-black mb-4">Speak with a compassionate attorney</h3>
                  <Button size="lg" className="h-14 px-8 text-base">
                    Request Consultation
                  </Button>
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
