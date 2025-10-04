import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, ArrowRight, DollarSign, Heart } from 'lucide-react';

const BirthInjuriesCompensationCalculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    injuryType: '',
    severity: '',
    medicalCosts: '',
    lifetimeCare: '',
    age: '',
    careNeeds: ''
  });
  const [results, setResults] = useState<{ min: number; max: number } | null>(null);

  const calculateCompensation = () => {
    let baseMin = 500000;
    let baseMax = 5000000;

    const injuryMult: Record<string, number> = {
      'cerebral-palsy': 3.0,
      'erbs-palsy': 2.0,
      'brain-damage': 3.5,
      'oxygen-deprivation': 3.2,
      'fractures': 1.5
    };
    baseMin *= injuryMult[formData.injuryType] || 1;
    baseMax *= injuryMult[formData.injuryType] || 1;

    const medical = parseInt(formData.medicalCosts) || 0;
    baseMin += medical * 5;
    baseMax += medical * 10;

    const lifetime = parseInt(formData.lifetimeCare) || 0;
    baseMin += lifetime;
    baseMax += lifetime * 2;

    setResults({ min: Math.round(baseMin), max: Math.round(baseMax) });
    setStep(3);
  };

  return (
    <>
      <Helmet>
        <title>Birth Injury Calculator | Cerebral Palsy Compensation | Trembach Law</title>
        <meta name="description" content="Calculate birth injury compensation for cerebral palsy, Erb's palsy, and brain damage. Free lifetime care estimates for families." />
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
              Birth Injury<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light">
              Lifetime care compensation
            </p>
          </div>
        </section>

        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">$5M+</div>
                <p className="text-slate-600">Potential lifetime award</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">Lifetime</div>
                <p className="text-slate-600">Care costs included</p>
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

export default BirthInjuriesCompensationCalculator;
