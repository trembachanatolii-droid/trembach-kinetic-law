import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, ArrowRight, DollarSign, Shield } from 'lucide-react';

const ClergyAbuseCalculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    organization: '',
    abuseType: '',
    therapyCosts: '',
    duration: '',
    ageAtAbuse: '',
    reporting: ''
  });
  const [results, setResults] = useState<{ min: number; max: number } | null>(null);

  const calculateCompensation = () => {
    let baseMin = 150000;
    let baseMax = 1500000;

    const orgMult: Record<string, number> = {
      'catholic-church': 3.0,
      'protestant-church': 2.5,
      'religious-school': 2.8,
      'youth-program': 2.3,
      'other': 2.0
    };
    baseMin *= orgMult[formData.organization] || 1;
    baseMax *= orgMult[formData.organization] || 1;

    const therapy = parseInt(formData.therapyCosts) || 0;
    baseMin += therapy * 6;
    baseMax += therapy * 12;

    setResults({ min: Math.round(baseMin), max: Math.round(baseMax) });
    setStep(3);
  };

  return (
    <>
      <Helmet>
        <title>Clergy Abuse Calculator | Church Abuse Compensation | Trembach Law</title>
        <meta name="description" content="Confidential clergy abuse compensation calculator. Free estimates for religious institution abuse cases." />
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
              Clergy Abuse<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light">Confidential support and estimates</p>
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
              <h2 className="text-3xl font-bold text-black mb-8">Organization Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Organization Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: 'catholic-church', label: 'Catholic Church' },
                      { value: 'protestant-church', label: 'Protestant Church' },
                      { value: 'religious-school', label: 'Religious School' },
                      { value: 'youth-program', label: 'Youth Program' },
                      { value: 'other', label: 'Other Institution' }
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setFormData({ ...formData, organization: opt.value })}
                        className={`p-4 border-2 rounded-xl text-left transition-all ${formData.organization === opt.value ? 'border-slate-900 bg-slate-50' : 'border-slate-200 hover:border-slate-300'}`}
                      >
                        <span className="font-medium text-slate-900">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Duration of Abuse</label>
                  <select
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-slate-900 focus:outline-none"
                  >
                    <option value="">Select duration</option>
                    <option value="1">Less than 1 year</option>
                    <option value="2">1-2 years</option>
                    <option value="3">2-5 years</option>
                    <option value="5">Over 5 years</option>
                  </select>
                </div>
                <button
                  onClick={() => setStep(2)}
                  disabled={!formData.organization || !formData.duration}
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
              <h2 className="text-3xl font-bold text-black mb-8">Financial Impact</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Therapy Costs</label>
                  <select
                    value={formData.therapyCosts}
                    onChange={(e) => setFormData({ ...formData, therapyCosts: e.target.value })}
                    className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-slate-900 focus:outline-none"
                  >
                    <option value="">Select therapy costs</option>
                    <option value="5000">Under $10,000</option>
                    <option value="20000">$10,000 - $30,000</option>
                    <option value="50000">$30,000 - $70,000</option>
                    <option value="100000">Over $70,000</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Age at Time of Abuse</label>
                  <select
                    value={formData.ageAtAbuse}
                    onChange={(e) => setFormData({ ...formData, ageAtAbuse: e.target.value })}
                    className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-slate-900 focus:outline-none"
                  >
                    <option value="">Select age range</option>
                    <option value="8">Under 10 years old</option>
                    <option value="12">10-14 years old</option>
                    <option value="16">15-17 years old</option>
                    <option value="20">18 or older</option>
                  </select>
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
                    disabled={!formData.therapyCosts || !formData.ageAtAbuse}
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
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                  <p className="text-sm text-amber-900 leading-relaxed">
                    <strong>Important:</strong> This estimate is confidential and based on similar clergy abuse cases. 
                    Actual compensation depends on evidence quality, institutional liability, jurisdiction, and individual circumstances. 
                    Many states have extended statutes of limitations for childhood sexual abuse cases. This calculator 
                    does not constitute legal advice. Consult with an experienced attorney for a comprehensive case evaluation.
                  </p>
                </div>
              </div>
              <Link
                to="/free-consultation"
                className="block w-full bg-slate-900 text-white py-4 px-6 rounded-xl font-semibold hover:bg-slate-800 transition-all text-center no-underline"
              >
                Get Confidential Case Review
              </Link>
            </div>
          </section>
        )}

        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">$1.5M+</div>
                <p className="text-slate-600">Potential compensation</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">Confidential</div>
                <p className="text-slate-600">Complete privacy</p>
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

export default ClergyAbuseCalculator;
