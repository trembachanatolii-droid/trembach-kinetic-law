import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, ArrowRight, DollarSign, AlertTriangle } from 'lucide-react';

const MedicalDevicesCompensationCalculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    deviceType: '',
    complication: '',
    medicalCosts: '',
    revisionSurgeries: '',
    painLevel: '',
    permanentImpact: ''
  });
  const [results, setResults] = useState<{ min: number; max: number } | null>(null);

  const calculateCompensation = () => {
    let baseMin = 50000;
    let baseMax = 500000;

    const deviceMult: Record<string, number> = {
      'hip-implant': 2.5,
      'knee-implant': 2.0,
      'hernia-mesh': 3.0,
      'ivc-filter': 2.8,
      'pacemaker': 2.2,
      'spinal-device': 3.5
    };
    baseMin *= deviceMult[formData.deviceType] || 1;
    baseMax *= deviceMult[formData.deviceType] || 1;

    const medical = parseInt(formData.medicalCosts) || 0;
    baseMin += medical * 3;
    baseMax += medical * 6;

    const revisions = parseInt(formData.revisionSurgeries) || 0;
    baseMin += revisions * 50000;
    baseMax += revisions * 100000;

    setResults({ min: Math.round(baseMin), max: Math.round(baseMax) });
    setStep(3);
  };

  return (
    <>
      <Helmet>
        <title>Medical Device Calculator | Defective Implant Compensation | Trembach Law</title>
        <meta name="description" content="Calculate defective medical device compensation for hip implants, hernia mesh, and other failed devices. Free estimates for revision surgeries." />
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
              Medical Device<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light">
              Defective implant compensation
            </p>
          </div>
        </section>

        <div className="border-b border-slate-200">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="flex justify-center items-center py-8 space-x-4">
              {[1, 2, 3].map((num) => (
                <React.Fragment key={num}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${step >= num ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-400'}`}>
                    {num}
                  </div>
                  {num < 3 && <div className={`w-16 h-1 rounded-full ${step > num ? 'bg-slate-900' : 'bg-slate-200'}`} />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {step === 1 && (
          <section className="py-20">
            <div className="container mx-auto px-6 max-w-2xl">
              <h2 className="text-3xl font-bold text-black mb-8">Device Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Device Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: 'hip-implant', label: 'Hip Implant' },
                      { value: 'knee-implant', label: 'Knee Implant' },
                      { value: 'hernia-mesh', label: 'Hernia Mesh' },
                      { value: 'ivc-filter', label: 'IVC Filter' },
                      { value: 'pacemaker', label: 'Pacemaker' },
                      { value: 'spinal-device', label: 'Spinal Device' }
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setFormData({ ...formData, deviceType: opt.value })}
                        className={`p-4 border-2 rounded-xl text-left transition-all ${formData.deviceType === opt.value ? 'border-slate-900 bg-slate-50' : 'border-slate-200 hover:border-slate-300'}`}
                      >
                        <span className="font-medium text-slate-900">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Number of Revision Surgeries</label>
                  <input
                    type="number"
                    placeholder="0"
                    value={formData.revisionSurgeries}
                    onChange={(e) => setFormData({ ...formData, revisionSurgeries: e.target.value })}
                    className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-slate-900 focus:outline-none"
                  />
                </div>
                <button
                  onClick={() => setStep(2)}
                  disabled={!formData.deviceType || formData.revisionSurgeries === ''}
                  className="w-full bg-slate-900 text-white py-4 px-6 rounded-xl font-semibold hover:bg-slate-800 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all flex items-center justify-center mt-8"
                >
                  Continue <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
            </div>
          </section>
        )}

        {step === 2 && (
          <section className="py-20">
            <div className="container mx-auto px-6 max-w-2xl">
              <h2 className="text-3xl font-bold text-black mb-8">Medical Impact</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Total Medical Costs</label>
                  <input
                    type="number"
                    placeholder="$"
                    value={formData.medicalCosts}
                    onChange={(e) => setFormData({ ...formData, medicalCosts: e.target.value })}
                    className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-slate-900 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Pain Level (1-10)</label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    placeholder="1-10"
                    value={formData.painLevel}
                    onChange={(e) => setFormData({ ...formData, painLevel: e.target.value })}
                    className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-slate-900 focus:outline-none"
                  />
                </div>
                <div className="flex space-x-4 mt-8">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 bg-slate-100 text-slate-900 py-4 px-6 rounded-xl font-semibold hover:bg-slate-200 transition-all"
                  >
                    Back
                  </button>
                  <button
                    onClick={calculateCompensation}
                    disabled={!formData.medicalCosts || !formData.painLevel}
                    className="flex-1 bg-slate-900 text-white py-4 px-6 rounded-xl font-semibold hover:bg-slate-800 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all"
                  >
                    Calculate
                  </button>
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
                  <div className="h-2 bg-slate-100 rounded-full mb-4">
                    <div className="h-full bg-slate-900 rounded-full" style={{ width: '40%' }} />
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-slate-600">High Estimate</span>
                    <span className="text-3xl font-bold text-slate-900">${results.max.toLocaleString()}</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mt-4">
                  Based on similar device failure cases. Actual compensation varies by device and complications.
                </p>
              </div>
              <Link
                to="/free-consultation"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl font-semibold transition-all text-center no-underline"
              >
                Get My Free Case Evaluation
              </Link>
            </div>
          </section>
        )}

        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">$500K+</div>
                <p className="text-slate-600">Average device settlement</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">Nationwide</div>
                <p className="text-slate-600">Mass tort cases</p>
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

export default MedicalDevicesCompensationCalculator;
