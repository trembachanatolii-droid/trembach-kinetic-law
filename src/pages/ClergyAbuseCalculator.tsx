import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, ArrowRight, DollarSign, Shield } from 'lucide-react';

const ClergyAbuseCalculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    organization: '',
    abuseType: '',
    therapyCosts: '',
    duration: '',
    ageAtAbuse: '',
    reporting: ''
  });
  const [results, setResults] = useState<{ min: number; max: number } | null>(null);

  const calculateCompensation = () => {
    let baseMin = 150000;
    let baseMax = 1500000;

    const orgMult: Record<string, number> = {
      'catholic-church': 3.0,
      'protestant-church': 2.5,
      'religious-school': 2.8,
      'youth-program': 2.3,
      'other': 2.0
    };
    baseMin *= orgMult[formData.organization] || 1;
    baseMax *= orgMult[formData.organization] || 1;

    const therapy = parseInt(formData.therapyCosts) || 0;
    baseMin += therapy * 6;
    baseMax += therapy * 12;

    setResults({ min: Math.round(baseMin), max: Math.round(baseMax) });
    setStep(3);
  };

  return (
    <>
      <Helmet>
        <title>Clergy Abuse Calculator | Church Abuse Compensation | Trembach Law</title>
        <meta name="description" content="Confidential clergy abuse compensation calculator. Free estimates for religious institution abuse cases." />
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
              Clergy Abuse<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light">Confidential support and estimates</p>
          </div>
        </section>

        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">$1.5M+</div>
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

export default ClergyAbuseCalculator;
