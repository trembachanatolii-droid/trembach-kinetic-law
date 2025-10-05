import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const BurnCompensationCalculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    burnSeverity: '',
    bodyPercentage: '',
    medicalCosts: '',
    futureCareCosts: '',
    scarring: '',
    lostWages: ''
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
    let baseMin = 80000;
    let baseMax = 400000;

    // Burn severity multipliers
    const severityMultipliers: Record<string, number> = {
      'first-degree': 1,
      'second-degree': 4,
      'third-degree': 10,
      'fourth-degree': 15
    };
    const multiplier = severityMultipliers[formData.burnSeverity] || 1;
    baseMin *= multiplier;
    baseMax *= multiplier;

    // Body percentage affected
    const percentage = parseInt(formData.bodyPercentage) || 10;
    const bodyMultiplier = 1 + (percentage / 100);
    baseMin *= bodyMultiplier;
    baseMax *= bodyMultiplier;

    // Add medical costs
    const medical = parseInt(formData.medicalCosts) || 150000;
    baseMin += medical;
    baseMax += medical * 1.8;

    // Future care (skin grafts, therapy)
    const futureCare = parseInt(formData.futureCareCosts) || 50000;
    baseMin += futureCare * 3;
    baseMax += futureCare * 6;

    // Lost wages
    const wages = parseInt(formData.lostWages) || 60000;
    baseMin += wages * 2;
    baseMax += wages * 5;

    // Scarring/disfigurement premium
    const scarringMultipliers: Record<string, number> = {
      'minimal': 1.1,
      'moderate': 1.5,
      'severe': 2.0,
      'disfiguring': 3.0
    };
    const scarMultiplier = scarringMultipliers[formData.scarring] || 1;
    baseMax *= scarMultiplier;

    setResults({ 
      min: Math.round(baseMin), 
      max: Math.round(baseMax) 
    });
    setStep(3);
  };

  const isStepValid = () => {
    if (step === 1) return formData.burnSeverity && formData.bodyPercentage && formData.scarring;
    if (step === 2) return formData.medicalCosts && formData.futureCareCosts && formData.lostWages;
    return false;
  };

  return (
    <>
      <Helmet>
        <title>Burn Injury Calculator | Thermal Injury Compensation | Trembach Law</title>
        <meta name="description" content="Calculate burn injury compensation for thermal, chemical, and electrical burns. Free scarring and disfigurement estimates." />
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
            <Flame className="mx-auto mb-6" size={64} strokeWidth={1.5} />
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight leading-[1.1]">
              Burn Injury<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light">
              Thermal injury compensation
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
                  <h2 className="text-3xl font-bold text-black mb-2">Burn Details</h2>
                  <p className="text-slate-600">Tell us about your burn injury</p>
                </div>

                <div className="space-y-4">
                  <label className="block">
                    <span className="text-sm font-medium text-black mb-3 block">Burn Severity</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        { value: 'first-degree', label: 'First-Degree', desc: 'Surface layer only' },
                        { value: 'second-degree', label: 'Second-Degree', desc: 'Blistering, dermis affected' },
                        { value: 'third-degree', label: 'Third-Degree', desc: 'Full thickness, charred' },
                        { value: 'fourth-degree', label: 'Fourth-Degree', desc: 'Muscle, bone damage' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setFormData({ ...formData, burnSeverity: option.value })}
                          className={`p-4 rounded-xl border-2 text-left transition-all ${
                            formData.burnSeverity === option.value
                              ? 'border-black bg-black text-white'
                              : 'border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <div className="font-medium mb-1">{option.label}</div>
                          <div className={`text-sm ${formData.burnSeverity === option.value ? 'text-white/70' : 'text-slate-500'}`}>
                            {option.desc}
                          </div>
                        </button>
                      ))}
                    </div>
                  </label>

                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">
                      Body Surface Area Affected (%)
                    </label>
                    <Input
                      type="number"
                      placeholder="10"
                      value={formData.bodyPercentage}
                      onChange={(e) => setFormData({ ...formData, bodyPercentage: e.target.value })}
                      className="h-14 text-lg"
                      min="1"
                      max="100"
                    />
                    <p className="text-xs text-slate-500 mt-2">Percentage of body covered by burns</p>
                  </div>

                  <label className="block">
                    <span className="text-sm font-medium text-black mb-3 block">Scarring & Disfigurement</span>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        { value: 'minimal', label: 'Minimal' },
                        { value: 'moderate', label: 'Moderate' },
                        { value: 'severe', label: 'Severe' },
                        { value: 'disfiguring', label: 'Disfiguring' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setFormData({ ...formData, scarring: option.value })}
                          className={`p-4 rounded-xl border-2 text-center transition-all ${
                            formData.scarring === option.value
                              ? 'border-black bg-black text-white'
                              : 'border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <span className="font-medium">{option.label}</span>
                        </button>
                      ))}
                    </div>
                  </label>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-black mb-2">Financial Impact</h2>
                  <p className="text-slate-600">Calculate treatment and recovery costs</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">
                      Current Medical Costs
                    </label>
                    <Input
                      type="number"
                      placeholder="$150,000"
                      value={formData.medicalCosts}
                      onChange={(e) => setFormData({ ...formData, medicalCosts: e.target.value })}
                      className="h-14 text-lg"
                    />
                    <p className="text-xs text-slate-500 mt-2">Emergency care, hospitalization, surgery</p>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">
                      Future Care Costs (estimated total)
                    </label>
                    <Input
                      type="number"
                      placeholder="$50,000"
                      value={formData.futureCareCosts}
                      onChange={(e) => setFormData({ ...formData, futureCareCosts: e.target.value })}
                      className="h-14 text-lg"
                    />
                    <p className="text-xs text-slate-500 mt-2">Skin grafts, reconstructive surgery, therapy</p>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">
                      Annual Income (before injury)
                    </label>
                    <Input
                      type="number"
                      placeholder="$60,000"
                      value={formData.lostWages}
                      onChange={(e) => setFormData({ ...formData, lostWages: e.target.value })}
                      className="h-14 text-lg"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && results && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-black mb-2">Your Estimated Compensation</h2>
                  <p className="text-slate-600">Based on similar burn injury cases</p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8 text-center">
                  <div className="text-5xl font-bold text-black mb-2">
                    ${results.min.toLocaleString()} - ${results.max.toLocaleString()}
                  </div>
                  <p className="text-slate-600">Total Compensation Range</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-white border border-slate-200 rounded-xl p-6">
                    <h4 className="font-semibold text-black mb-2">Medical Treatment</h4>
                    <p className="text-sm text-slate-600">Emergency care, skin grafts, reconstructive surgery</p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-xl p-6">
                    <h4 className="font-semibold text-black mb-2">Scarring & Disfigurement</h4>
                    <p className="text-sm text-slate-600">Permanent scarring, loss of appearance, emotional trauma</p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-xl p-6">
                    <h4 className="font-semibold text-black mb-2">Lost Wages</h4>
                    <p className="text-sm text-slate-600">Income loss during recovery and rehabilitation</p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-xl p-6">
                    <h4 className="font-semibold text-black mb-2">Pain & Suffering</h4>
                    <p className="text-sm text-slate-600">Physical pain, psychological impact, reduced quality of life</p>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <p className="text-sm text-amber-900">
                    <strong>Note:</strong> Burn injury compensation varies widely based on visibility of scars, 
                    location on body, and impact on daily life. Facial burns typically receive higher compensation.
                  </p>
                </div>

                <div className="text-center pt-4">
                  <h3 className="text-xl font-semibold text-black mb-4">Get maximum burn injury compensation</h3>
                  <Button size="lg" className="h-14 px-8 text-base">
                    Get Free Case Review
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
                <div className="text-4xl font-bold text-slate-900 mb-2">$800K+</div>
                <p className="text-slate-600">Third-degree average</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">Scarring</div>
                <p className="text-slate-600">Disfigurement damages</p>
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

export default BurnCompensationCalculator;