import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, ArrowRight, DollarSign, AlertTriangle } from 'lucide-react';

const PharmaceuticalCompensationCalculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    drugType: '',
    sideEffect: '',
    medicalCosts: '',
    duration: '',
    severity: '',
    permanentImpact: ''
  });
  const [results, setResults] = useState<{ min: number; max: number } | null>(null);

  const calculateCompensation = () => {
    let baseMin = 30000;
    let baseMax = 300000;

    const drugMult: Record<string, number> = {
      'recalled-drug': 2.5,
      'off-label': 2.0,
      'side-effects': 1.8,
      'addiction': 3.0,
      'birth-defects': 4.0
    };
    baseMin *= drugMult[formData.drugType] || 1;
    baseMax *= drugMult[formData.drugType] || 1;

    const medical = parseInt(formData.medicalCosts) || 0;
    baseMin += medical * 2.5;
    baseMax += medical * 5;

    setResults({ min: Math.round(baseMin), max: Math.round(baseMax) });
    setStep(3);
  };

  return (
    <>
      <Helmet>
        <title>Pharmaceutical Calculator | Dangerous Drug Compensation | Trembach Law</title>
        <meta name="description" content="Calculate dangerous drug compensation for recalled medications and severe side effects. Free estimates for pharmaceutical injury cases." />
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
              Pharmaceutical<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light">
              Dangerous drug compensation
            </p>
          </div>
        </section>

        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">$300K+</div>
                <p className="text-slate-600">Average drug settlement</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">Mass Tort</div>
                <p className="text-slate-600">Class action available</p>
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

export default PharmaceuticalCompensationCalculator;
