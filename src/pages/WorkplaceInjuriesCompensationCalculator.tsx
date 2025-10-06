import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, HardHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const WorkplaceInjuriesCompensationCalculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    injuryType: '',
    severity: '',
    medicalCosts: '',
    lostWages: '',
    thirdPartyLiability: '',
    permanentDisability: ''
  });
  const [results, setResults] = useState<{ workersComp: number; thirdParty: number; total: number } | null>(null);

  const handleNext = () => {
    if (step === 2) {
      calculateCompensation();
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => setStep(step - 1);

  const calculateCompensation = () => {
    const medical = parseInt(formData.medicalCosts) || 50000;
    const wages = parseInt(formData.lostWages) || 60000;

    let multiplier = 1.5;
    if (formData.severity === 'severe') multiplier = 3;
    if (formData.severity === 'catastrophic') multiplier = 5;

    const workersComp = medical + (wages * 0.66);
    let thirdParty = 0;
    if (formData.thirdPartyLiability === 'yes') {
      thirdParty = (medical + wages) * multiplier;
    }

    setResults({
      workersComp: Math.round(workersComp),
      thirdParty: Math.round(thirdParty),
      total: Math.round(workersComp + thirdParty)
    });
    setStep(3);
  };

  const isStepValid = () => {
    if (step === 1) return formData.injuryType && formData.severity && formData.permanentDisability;
    if (step === 2) return formData.medicalCosts && formData.lostWages && formData.thirdPartyLiability;
    return false;
  };

  return (
    <>
      <Helmet>
        <title>Workplace Injury Calculator | Workers Comp Estimate | Trembach Law</title>
        <meta name="description" content="Calculate workplace injury compensation including workers' comp and third-party claims. Free estimates for on-the-job injuries." />
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
            <HardHat className="mx-auto mb-6" size={64} strokeWidth={1.5} />
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight leading-[1.1]">
              Workplace Injury<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light">
              Workers' comp & third-party claims
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
                  <p className="text-slate-600">Tell us about your workplace injury</p>
                </div>

                <div className="space-y-4">
                  <label className="block">
                    <span className="text-sm font-medium text-black mb-3 block">Type of Injury</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {['Back/Spine', 'Fracture/Broken Bone', 'Repetitive Strain', 'Chemical Exposure', 'Machinery Accident', 'Other'].map((type) => (
                        <button
                          key={type}
                          onClick={() => setFormData({ ...formData, injuryType: type })}
                          className={`p-4 rounded-xl border-2 text-left transition-all ${
                            formData.injuryType === type
                              ? 'border-black bg-black text-white'
                              : 'border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <span className="font-medium">{type}</span>
                        </button>
                      ))}
                    </div>
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium text-black mb-3 block">Injury Severity</span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {[
                        { value: 'minor', label: 'Minor', desc: 'Full recovery expected' },
                        { value: 'severe', label: 'Severe', desc: 'Partial disability' },
                        { value: 'catastrophic', label: 'Catastrophic', desc: 'Permanent disability' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setFormData({ ...formData, severity: option.value })}
                          className={`p-4 rounded-xl border-2 text-left transition-all ${
                            formData.severity === option.value
                              ? 'border-black bg-black text-white'
                              : 'border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <div className="font-medium mb-1">{option.label}</div>
                          <div className={`text-sm ${formData.severity === option.value ? 'text-white/70' : 'text-slate-500'}`}>
                            {option.desc}
                          </div>
                        </button>
                      ))}
                    </div>
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium text-black mb-3 block">Permanent Disability</span>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { value: 'yes', label: 'Yes' },
                        { value: 'no', label: 'No' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setFormData({ ...formData, permanentDisability: option.value })}
                          className={`p-4 rounded-xl border-2 text-center transition-all ${
                            formData.permanentDisability === option.value
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
                  <p className="text-slate-600">Help us calculate your total compensation</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">
                      Medical Costs (including future treatment)
                    </label>
                    <Select value={formData.medicalCosts} onValueChange={(value) => setFormData({ ...formData, medicalCosts: value })}>
                      <SelectTrigger className="h-14 text-lg">
                        <SelectValue placeholder="Select medical cost range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="25000">Under $25,000</SelectItem>
                        <SelectItem value="50000">$25,000 - $75,000</SelectItem>
                        <SelectItem value="125000">$75,000 - $175,000</SelectItem>
                        <SelectItem value="250000">$175,000 - $325,000</SelectItem>
                        <SelectItem value="500000">Over $325,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">
                      Lost Wages (annual income)
                    </label>
                    <Select value={formData.lostWages} onValueChange={(value) => setFormData({ ...formData, lostWages: value })}>
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

                  <label className="block">
                    <span className="text-sm font-medium text-black mb-3 block">Third-Party Liability (non-employer fault)?</span>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { value: 'yes', label: 'Yes' },
                        { value: 'no', label: 'No' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setFormData({ ...formData, thirdPartyLiability: option.value })}
                          className={`p-4 rounded-xl border-2 text-center transition-all ${
                            formData.thirdPartyLiability === option.value
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

            {step === 3 && results && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-black mb-2">Your Estimated Compensation</h2>
                  <p className="text-slate-600">Based on the information provided</p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                      <span className="text-slate-600">Workers' Compensation</span>
                      <span className="text-2xl font-bold text-black">
                        ${results.workersComp.toLocaleString()}
                      </span>
                    </div>
                    {results.thirdParty > 0 && (
                      <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                        <span className="text-slate-600">Third-Party Claim</span>
                        <span className="text-2xl font-bold text-black">
                          ${results.thirdParty.toLocaleString()}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between items-center pt-4">
                      <span className="text-lg font-semibold text-black">Total Potential Compensation</span>
                      <span className="text-4xl font-bold text-black">
                        ${results.total.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <h3 className="font-semibold text-amber-900 mb-3">Legal Disclaimer</h3>
                  <p className="text-sm text-amber-900 leading-relaxed">
                    <strong>Important:</strong> This calculator provides an estimate only and does not constitute legal advice. 
                    Actual compensation depends on many factors including state workers' compensation laws, employer insurance, 
                    third-party liability, jurisdiction, and specific case facts. Third-party claims can significantly increase 
                    your total compensation. Results are not guaranteed. No attorney-client relationship is created by using this 
                    calculator. Each case must be evaluated individually by a qualified workplace injury attorney licensed in your state. 
                    Past results do not guarantee future outcomes.
                  </p>
                </div>

                <div className="text-center pt-4">
                  <h3 className="text-xl font-semibold text-black mb-4">Ready to discuss your case?</h3>
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
                <div className="text-4xl font-bold text-slate-900 mb-2">2/3</div>
                <p className="text-slate-600">Wage replacement rate</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">3x More</div>
                <p className="text-slate-600">With third-party claim</p>
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

export default WorkplaceInjuriesCompensationCalculator;
