import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, ArrowRight, DollarSign, Heart } from 'lucide-react';

const ElderAbuseCalculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    abuseType: '',
    facility: '',
    medicalHarm: '',
    medicalCosts: '',
    duration: '',
    suffering: ''
  });
  const [results, setResults] = useState<{ min: number; max: number } | null>(null);

  const calculateCompensation = () => {
    let baseMin = 50000;
    let baseMax = 500000;

    const abuseMult: Record<string, number> = {
      'neglect': 2.0,
      'physical-abuse': 3.0,
      'financial-exploitation': 2.5,
      'sexual-abuse': 4.0,
      'emotional-abuse': 1.8
    };
    baseMin *= abuseMult[formData.abuseType] || 1;
    baseMax *= abuseMult[formData.abuseType] || 1;

    const medical = parseInt(formData.medicalCosts) || 0;
    baseMin += medical * 3;
    baseMax += medical * 6;

    setResults({ min: Math.round(baseMin), max: Math.round(baseMax) });
    setStep(3);
  };

  return (
    <>
      <Helmet>
        <title>Elder Abuse Calculator | Nursing Home Neglect Compensation | Trembach Law</title>
        <meta name="description" content="Calculate elder abuse compensation for nursing home neglect and mistreatment. Free, confidential estimates for family members." />
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
              Elder Abuse<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light">
              Nursing home neglect compensation
            </p>
          </div>
        </section>

        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">$500K+</div>
                <p className="text-slate-600">Average abuse settlement</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">24/7</div>
                <p className="text-slate-600">Urgent response available</p>
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

export default ElderAbuseCalculator;
