import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, ArrowRight, DollarSign, Heart, Shield } from 'lucide-react';

const SexualAbuseCalculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    abuseType: '',
    institution: '',
    therapyCosts: '',
    duration: '',
    ageAtAbuse: '',
    impact: ''
  });
  const [results, setResults] = useState<{ min: number; max: number } | null>(null);

  const calculateCompensation = () => {
    let baseMin = 100000;
    let baseMax = 1000000;

    const institutionMult: Record<string, number> = {
      'church': 2.5,
      'school': 2.3,
      'care-facility': 2.8,
      'sports-org': 2.0,
      'other': 1.8
    };
    baseMin *= institutionMult[formData.institution] || 1;
    baseMax *= institutionMult[formData.institution] || 1;

    const therapy = parseInt(formData.therapyCosts) || 0;
    baseMin += therapy * 5;
    baseMax += therapy * 10;

    setResults({ min: Math.round(baseMin), max: Math.round(baseMax) });
    setStep(3);
  };

  return (
    <>
      <Helmet>
        <title>Sexual Abuse Calculator | Confidential Compensation Estimate | Trembach Law</title>
        <meta name="description" content="Confidential sexual abuse compensation calculator. Free, private estimates for institutional abuse cases." />
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
              Sexual Abuse<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light">Confidential. Safe. Supportive.</p>
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

export default SexualAbuseCalculator;
