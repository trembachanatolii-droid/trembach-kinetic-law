import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, ArrowRight, DollarSign, AlertTriangle } from 'lucide-react';

const CampLejeuneCalculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    datesAtBase: '',
    illness: '',
    medicalCosts: '',
    veteranStatus: '',
    duration: '',
    severity: ''
  });
  const [results, setResults] = useState<{ min: number; max: number } | null>(null);

  const calculateCompensation = () => {
    let baseMin = 100000;
    let baseMax = 1000000;

    const illnessMult: Record<string, number> = {
      'cancer': 3.0,
      'parkinsons': 2.5,
      'kidney-disease': 2.0,
      'liver-disease': 2.2,
      'birth-defects': 2.8,
      'other': 1.5
    };
    baseMin *= illnessMult[formData.illness] || 1;
    baseMax *= illnessMult[formData.illness] || 1;

    const medical = parseInt(formData.medicalCosts) || 0;
    baseMin += medical * 2;
    baseMax += medical * 4;

    setResults({ min: Math.round(baseMin), max: Math.round(baseMax) });
    setStep(3);
  };

  return (
    <>
      <Helmet>
        <title>Camp Lejeune Calculator | Water Contamination Compensation | Trembach Law</title>
        <meta name="description" content="Calculate Camp Lejeune water contamination compensation for cancer and other illnesses. Free estimates for veterans and families." />
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
              Camp Lejeune<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light">
              Water contamination compensation
            </p>
          </div>
        </section>

        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">$1M+</div>
                <p className="text-slate-600">Potential compensation</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">1953-1987</div>
                <p className="text-slate-600">Contamination period</p>
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

export default CampLejeuneCalculator;
