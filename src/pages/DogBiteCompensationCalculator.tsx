import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, ArrowRight, DollarSign, AlertCircle } from 'lucide-react';

const DogBiteCompensationCalculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    injurySeverity: '',
    medicalCosts: '',
    scarring: '',
    infectio: '',
    age: '',
    emotionalImpact: ''
  });
  const [results, setResults] = useState<{ min: number; max: number } | null>(null);

  const calculateCompensation = () => {
    let baseMin = 10000;
    let baseMax = 50000;

    const severityMult: Record<string, number> = {
      'puncture': 1.5,
      'lacerations': 2.0,
      'severe-trauma': 3.5,
      'disfigurement': 4.0
    };
    baseMin *= severityMult[formData.injurySeverity] || 1;
    baseMax *= severityMult[formData.injurySeverity] || 1;

    const medical = parseInt(formData.medicalCosts) || 0;
    baseMin += medical * 2.5;
    baseMax += medical * 5;

    if (formData.scarring === 'visible') {
      baseMin *= 1.8;
      baseMax *= 2.2;
    }

    setResults({ min: Math.round(baseMin), max: Math.round(baseMax) });
    setStep(3);
  };

  return (
    <>
      <Helmet>
        <title>Dog Bite Calculator | Animal Attack Compensation | Trembach Law</title>
        <meta name="description" content="Calculate dog bite compensation for animal attacks, scarring, and infection. Free estimates for medical costs and emotional trauma." />
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
              Dog Bite<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light">
              Estimate animal attack compensation
            </p>
          </div>
        </section>

        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">$50K+</div>
                <p className="text-slate-600">Average dog bite settlement</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">Strict</div>
                <p className="text-slate-600">Liability in California</p>
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

export default DogBiteCompensationCalculator;
