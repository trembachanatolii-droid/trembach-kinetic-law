import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, ArrowRight, DollarSign, AlertCircle } from 'lucide-react';

const PremisesLiabilityCompensationCalculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    accidentType: '',
    injuryType: '',
    medicalCosts: '',
    lostWages: '',
    propertyType: '',
    ownerKnowledge: ''
  });
  const [results, setResults] = useState<{ min: number; max: number } | null>(null);

  const calculateCompensation = () => {
    let baseMin = 10000;
    let baseMax = 100000;

    const accidentMult: Record<string, number> = {
      'slip-fall': 1.5,
      'trip-fall': 1.3,
      'inadequate-security': 2.5,
      'swimming-pool': 3.0,
      'falling-object': 2.0
    };
    baseMin *= accidentMult[formData.accidentType] || 1;
    baseMax *= accidentMult[formData.accidentType] || 1;

    const medical = parseInt(formData.medicalCosts) || 0;
    baseMin += medical * 2;
    baseMax += medical * 5;

    const wages = parseInt(formData.lostWages) || 0;
    baseMin += wages * 1.5;
    baseMax += wages * 3;

    setResults({ min: Math.round(baseMin), max: Math.round(baseMax) });
    setStep(3);
  };

  return (
    <>
      <Helmet>
        <title>Premises Liability Calculator | Slip and Fall Compensation | Trembach Law</title>
        <meta name="description" content="Calculate premises liability compensation for slip and fall, inadequate security, and property accidents. Free case estimates." />
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
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight leading-[1.1]">
              Premises Liability<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light">Property accident compensation</p>
          </div>
        </section>

        <div className="border-b border-slate-200">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="flex justify-center items-center py-8 space-x-4">
              {[1, 2, 3].map((num) => (
                <React.Fragment key={num}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${step >= num ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-400'}`}>{num}</div>
                  {num < 3 && <div className={`w-16 h-1 rounded-full ${step > num ? 'bg-slate-900' : 'bg-slate-200'}`} />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {step === 1 && (
          <section className="py-20">
            <div className="container mx-auto px-6 max-w-2xl">
              <h2 className="text-3xl font-bold text-black mb-8">Accident Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Accident Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: 'slip-fall', label: 'Slip and Fall' },
                      { value: 'trip-fall', label: 'Trip and Fall' },
                      { value: 'inadequate-security', label: 'Inadequate Security' },
                      { value: 'swimming-pool', label: 'Swimming Pool' },
                      { value: 'falling-object', label: 'Falling Object' }
                    ].map((opt) => (
                      <button key={opt.value} onClick={() => setFormData({ ...formData, accidentType: opt.value })} className={`p-4 border-2 rounded-xl text-left transition-all ${formData.accidentType === opt.value ? 'border-slate-900 bg-slate-50' : 'border-slate-200 hover:border-slate-300'}`}>
                        <span className="font-medium text-slate-900">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <button onClick={() => setStep(2)} disabled={!formData.accidentType} className="w-full bg-slate-900 text-white py-4 px-6 rounded-xl font-semibold hover:bg-slate-800 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all flex items-center justify-center mt-8">
                  Continue <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
            </div>
          </section>
        )}

        {step === 2 && (
          <section className="py-20">
            <div className="container mx-auto px-6 max-w-2xl">
              <h2 className="text-3xl font-bold text-black mb-8">Financial Impact</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Medical Costs</label>
                  <input type="number" placeholder="$" value={formData.medicalCosts} onChange={(e) => setFormData({ ...formData, medicalCosts: e.target.value })} className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-slate-900 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Lost Wages</label>
                  <input type="number" placeholder="$" value={formData.lostWages} onChange={(e) => setFormData({ ...formData, lostWages: e.target.value })} className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-slate-900 focus:outline-none" />
                </div>
                <div className="flex space-x-4 mt-8">
                  <button onClick={() => setStep(1)} className="flex-1 bg-slate-100 text-slate-900 py-4 px-6 rounded-xl font-semibold hover:bg-slate-200 transition-all">Back</button>
                  <button onClick={calculateCompensation} disabled={!formData.medicalCosts || !formData.lostWages} className="flex-1 bg-slate-900 text-white py-4 px-6 rounded-xl font-semibold hover:bg-slate-800 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all">Calculate</button>
                </div>
              </div>
            </div>
          </section>
        )}

        {step === 3 && results && (
          <section className="py-20">
            <div className="container mx-auto px-6 max-w-2xl">
              <div className="bg-slate-50 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-black mb-6">Estimated Compensation Range</h2>
                <div className="bg-white rounded-xl p-6 mb-4">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-slate-600">Low Estimate</span>
                    <span className="text-3xl font-bold text-slate-900">${results.min.toLocaleString()}</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full mb-4"><div className="h-full bg-slate-900 rounded-full" style={{ width: '40%' }} /></div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-slate-600">High Estimate</span>
                    <span className="text-3xl font-bold text-slate-900">${results.max.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <Link to="/contact" className="block w-full bg-slate-900 text-white py-4 px-6 rounded-xl font-semibold hover:bg-slate-800 transition-all text-center no-underline">Get Free Case Review</Link>
            </div>
          </section>
        )}

        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div><div className="text-4xl font-bold text-slate-900 mb-2">$100K+</div><p className="text-slate-600">Average slip-fall settlement</p></div>
              <div><div className="text-4xl font-bold text-slate-900 mb-2">24/7</div><p className="text-slate-600">Property injury support</p></div>
              <div><div className="text-4xl font-bold text-slate-900 mb-2">No Fee</div><p className="text-slate-600">Unless we win</p></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PremisesLiabilityCompensationCalculator;
