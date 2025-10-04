import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, Anchor } from 'lucide-react';

const MaritimeCompensationCalculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    injuryType: '',
    vesselType: '',
    medicalCosts: '',
    weeklyWages: '',
    timeOffWork: '',
    maritimeEmployment: ''
  });
  const [results, setResults] = useState<{ min: number; max: number } | null>(null);

  return (
    <>
      <Helmet>
        <title>Maritime Calculator | Jones Act Compensation | Trembach Law</title>
        <meta name="description" content="Calculate maritime compensation for seaman injuries. Free Jones Act and LHWCA estimates." />
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
              Maritime<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light">
              Jones Act compensation
            </p>
          </div>
        </section>

        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">$400K+</div>
                <p className="text-slate-600">Average seaman injury</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">Jones Act</div>
                <p className="text-slate-600">Specialized law</p>
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

export default MaritimeCompensationCalculator;
