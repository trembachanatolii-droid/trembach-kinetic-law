import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const SpinalCordCompensationCalculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    injuryLevel: '',
    injuryType: '',
    age: '',
    medicalCosts: '',
    futureCareCosts: '',
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
    let baseMin = 500000;
    let baseMax = 2000000;

    // Injury level multipliers
    const levelMultipliers: Record<string, number> = {
      'cervical-high': 20, // C1-C4 Quadriplegia
      'cervical-low': 15,  // C5-C8 Quadriplegia
      'thoracic': 10,      // T1-T12 Paraplegia
      'lumbar': 6,         // L1-L5 Paraplegia
      'incomplete': 4      // Incomplete injury
    };
    const multiplier = levelMultipliers[formData.injuryLevel] || 1;
    baseMin *= multiplier;
    baseMax *= multiplier;

    // Add medical costs
    const medical = parseInt(formData.medicalCosts) || 200000;
    baseMin += medical;
    baseMax += medical * 2;

    // Future care costs
    const futureCare = parseInt(formData.futureCareCosts) || 100000;
    const age = parseInt(formData.age) || 35;
    const lifeExpectancy = Math.max(75 - age, 10);
    baseMin += futureCare * lifeExpectancy * 0.8;
    baseMax += futureCare * lifeExpectancy * 1.5;

    // Lost wages
    const wages = parseInt(formData.lostWages) || 60000;
    const yearsToRetirement = Math.max(65 - age, 0);
    baseMin += wages * yearsToRetirement;
    baseMax += wages * yearsToRetirement * 1.3;

    // Injury type adjustments
    if (formData.injuryType === 'complete') {
      baseMin *= 1.5;
      baseMax *= 2.0;
    }

    setResults({ 
      min: Math.round(baseMin), 
      max: Math.round(baseMax) 
    });
    setStep(3);
  };

  const isStepValid = () => {
    if (step === 1) return formData.injuryLevel && formData.injuryType && formData.age;
    if (step === 2) return formData.medicalCosts && formData.futureCareCosts && formData.lostWages;
    return false;
  };

  return (
    <>
      <Helmet>
        <title>Spinal Cord Calculator | Paralysis Compensation | Trembach Law</title>
        <meta name="description" content="Calculate spinal cord injury compensation for quadriplegia and paraplegia. Free lifetime care estimates." />
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
            <Activity className="mx-auto mb-6" size={64} strokeWidth={1.5} />
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight leading-[1.1]">
              Spinal Cord<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light">
              Paralysis compensation estimates
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
                  <p className="text-slate-600">Tell us about your spinal cord injury</p>
                </div>

                <div className="space-y-4">
                  <label className="block">
                    <span className="text-sm font-medium text-black mb-3 block">Injury Level</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        { value: 'cervical-high', label: 'C1-C4 (High Cervical)', desc: 'Complete quadriplegia' },
                        { value: 'cervical-low', label: 'C5-C8 (Low Cervical)', desc: 'Quadriplegia with arm function' },
                        { value: 'thoracic', label: 'T1-T12 (Thoracic)', desc: 'Paraplegia, legs affected' },
                        { value: 'lumbar', label: 'L1-L5 (Lumbar)', desc: 'Lower body paralysis' },
                        { value: 'incomplete', label: 'Incomplete Injury', desc: 'Partial function remains' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setFormData({ ...formData, injuryLevel: option.value })}
                          className={`p-4 rounded-xl border-2 text-left transition-all ${
                            formData.injuryLevel === option.value
                              ? 'border-black bg-black text-white'
                              : 'border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <div className="font-medium mb-1">{option.label}</div>
                          <div className={`text-sm ${formData.injuryLevel === option.value ? 'text-white/70' : 'text-slate-500'}`}>
                            {option.desc}
                          </div>
                        </button>
                      ))}
                    </div>
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium text-black mb-3 block">Injury Type</span>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { value: 'complete', label: 'Complete', desc: 'No sensation/movement below injury' },
                        { value: 'incomplete', label: 'Incomplete', desc: 'Some function preserved' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setFormData({ ...formData, injuryType: option.value })}
                          className={`p-4 rounded-xl border-2 text-left transition-all ${
                            formData.injuryType === option.value
                              ? 'border-black bg-black text-white'
                              : 'border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <div className="font-medium mb-1">{option.label}</div>
                          <div className={`text-sm ${formData.injuryType === option.value ? 'text-white/70' : 'text-slate-500'}`}>
                            {option.desc}
                          </div>
                        </button>
                      ))}
                    </div>
                  </label>

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
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-black mb-2">Financial Impact</h2>
                  <p className="text-slate-600">Calculate lifetime care costs</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">
                      Current Medical Costs
                    </label>
                    <Select value={formData.medicalCosts} onValueChange={(value) => setFormData({ ...formData, medicalCosts: value })}>
                      <SelectTrigger className="h-14 text-lg">
                        <SelectValue placeholder="Select medical cost range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="100000">Under $100,000</SelectItem>
                        <SelectItem value="200000">$100,000 - $200,000</SelectItem>
                        <SelectItem value="350000">$200,000 - $500,000</SelectItem>
                        <SelectItem value="750000">$500,000 - $1,000,000</SelectItem>
                        <SelectItem value="1500000">Over $1,000,000</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-slate-500 mt-2">Surgery, hospitalization, initial treatment</p>
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
                        <SelectItem value="50000">Under $50,000/year</SelectItem>
                        <SelectItem value="100000">$50,000 - $100,000/year</SelectItem>
                        <SelectItem value="150000">$100,000 - $200,000/year</SelectItem>
                        <SelectItem value="250000">$200,000 - $300,000/year</SelectItem>
                        <SelectItem value="350000">Over $300,000/year</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-slate-500 mt-2">24/7 care, equipment, therapy, medications</p>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-black mb-3 block">
                      Annual Income (before injury)
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
                </div>
              </div>
            )}

            {step === 3 && results && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-black mb-2">Your Estimated Compensation</h2>
                  <p className="text-slate-600">Based on similar spinal cord injury cases</p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8 text-center">
                  <div className="text-5xl font-bold text-black mb-2">
                    ${results.min.toLocaleString()} - ${results.max.toLocaleString()}
                  </div>
                  <p className="text-slate-600">Total Compensation Range</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-white border border-slate-200 rounded-xl p-6">
                    <h4 className="font-semibold text-black mb-2">Lifetime Medical Care</h4>
                    <p className="text-sm text-slate-600">24/7 nursing, therapy, medications, adaptive equipment</p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-xl p-6">
                    <h4 className="font-semibold text-black mb-2">Lost Earning Capacity</h4>
                    <p className="text-sm text-slate-600">Full lifetime income replacement based on career trajectory</p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-xl p-6">
                    <h4 className="font-semibold text-black mb-2">Home & Vehicle Modifications</h4>
                    <p className="text-sm text-slate-600">Wheelchair accessibility, lifts, specialized transportation</p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-xl p-6">
                    <h4 className="font-semibold text-black mb-2">Pain & Suffering</h4>
                    <p className="text-sm text-slate-600">Loss of independence, enjoyment of life, emotional trauma</p>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <h3 className="font-semibold text-amber-900 mb-3">Legal Disclaimer</h3>
                  <p className="text-sm text-amber-900 leading-relaxed">
                    <strong>Important:</strong> This calculator provides an estimate only and does not constitute legal advice. 
                    Spinal cord injury cases are extremely complex and actual compensation varies significantly based on medical evidence, 
                    expert testimony, life care planning, jurisdiction, jury composition, and specific case facts. These cases require 
                    expert medical testimony and comprehensive life care planning. Settlement should cover all future needs for the rest 
                    of your life. Results are not guaranteed. No attorney-client relationship is created by using this calculator. 
                    Each case must be evaluated individually by a qualified spinal cord injury attorney licensed in your state. 
                    Past results do not guarantee future outcomes.
                  </p>
                </div>

                <div className="text-center pt-4">
                  <h3 className="text-xl font-semibold text-black mb-4">Secure your lifetime care</h3>
                  <Button size="lg" className="h-14 px-8 text-base">
                    Get Expert Case Review
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
                <div className="text-4xl font-bold text-slate-900 mb-2">$8M+</div>
                <p className="text-slate-600">Quadriplegia average</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">Lifetime</div>
                <p className="text-slate-600">Medical care coverage</p>
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

export default SpinalCordCompensationCalculator;
