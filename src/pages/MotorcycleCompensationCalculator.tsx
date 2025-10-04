import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, ArrowRight, DollarSign, AlertCircle } from 'lucide-react';

const MotorcycleCompensationCalculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    injuryType: '',
    medicalCosts: '',
    lostWages: '',
    bikeValue: '',
    fault: '',
    helmetWorn: ''
  });
  const [results, setResults] = useState<{ min: number; max: number } | null>(null);

  const calculateCompensation = () => {
    let baseMin = 15000;
    let baseMax = 75000;

    const injuryMult: Record<string, number> = {
      'road-rash': 1.5,
      'fractures': 2.5,
      'head-injury': 4.0,
      'spinal': 5.0,
      'multiple': 3.5
    };
    baseMin *= injuryMult[formData.injuryType] || 1;
    baseMax *= injuryMult[formData.injuryType] || 1;

    const medical = parseInt(formData.medicalCosts) || 0;
    baseMin += medical * 3;
    baseMax += medical * 6;

    const wages = parseInt(formData.lostWages) || 0;
    baseMin += wages * 2;
    baseMax += wages * 4;

    const bike = parseInt(formData.bikeValue) || 0;
    baseMin += bike;
    baseMax += bike;

    setResults({ min: Math.round(baseMin), max: Math.round(baseMax) });
    setStep(3);
  };

  return (
    <>
      <Helmet>
        <title>Motorcycle Accident Calculator | Bike Crash Compensation | Trembach Law</title>
        <meta name="description" content="Calculate motorcycle accident compensation for crashes, road rash, and serious injuries. Free estimates for bike damage and medical costs." />
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
              Motorcycle Accident<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light">
              Estimate bike crash compensation
            </p>
          </div>
        </section>

        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">$75K+</div>
                <p className="text-slate-600">Average motorcycle settlement</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">24/7</div>
                <p className="text-slate-600">Rider support available</p>
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

export default MotorcycleCompensationCalculator;
