import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, ArrowRight, DollarSign, Heart } from 'lucide-react';

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

  const calculateCompensation = () => {
    let baseMin = 150000;
    let baseMax = 750000;

    const income = parseInt(formData.annualIncome) || 0;
    const years = parseInt(formData.yearsToRetirement) || 20;
    baseMin += income * years * 0.6;
    baseMax += income * years * 1.2;

    const funeral = parseInt(formData.funeralCosts) || 0;
    baseMin += funeral;
    baseMax += funeral;

    setResults({ min: Math.round(baseMin), max: Math.round(baseMax) });
    setStep(3);
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
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight leading-[1.1]">
              Wrongful Death<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light">
              Compassionate case evaluation
            </p>
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
