import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, Ear } from 'lucide-react';

const HearingLossCompensationCalculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    hearingLossType: '',
    severity: '',
    causeType: '',
    yearsExposed: '',
    medicalCosts: '',
    occupation: ''
  });
  const [results, setResults] = useState<{ min: number; max: number } | null>(null);

  return (
    <>
      <Helmet>
        <title>Hearing Loss Calculator | Occupational Deafness Compensation | Trembach Law</title>
        <meta name="description" content="Calculate hearing loss compensation for occupational deafness. Free noise-induced hearing damage estimates." />
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
              Hearing Loss<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light">
              Occupational deafness compensation
            </p>
          </div>
        </section>

        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">$80K+</div>
                <p className="text-slate-600">Severe hearing loss</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">Noise</div>
                <p className="text-slate-600">Industrial exposure</p>
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

export default HearingLossCompensationCalculator;
