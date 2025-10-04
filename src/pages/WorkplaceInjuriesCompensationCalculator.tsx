import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, ArrowRight, DollarSign, AlertCircle } from 'lucide-react';

const WorkplaceInjuriesCompensationCalculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    injuryType: '',
    severity: '',
    medicalCosts: '',
    lostWages: '',
    thirdPartyLiability: '',
    permanentDisability: ''
  });
  const [results, setResults] = useState<{ workersComp: number; thirdParty: number; total: number } | null>(null);

  const calculateCompensation = () => {
    const medical = parseInt(formData.medicalCosts) || 0;
    const wages = parseInt(formData.lostWages) || 0;

    // Workers' Comp (limited)
    const workersComp = medical + (wages * 0.66); // 2/3 wage replacement

    // Third-party claim (if applicable)
    let thirdParty = 0;
    if (formData.thirdPartyLiability === 'yes') {
      thirdParty = (medical + wages) * 3;
    }

    setResults({
      workersComp: Math.round(workersComp),
      thirdParty: Math.round(thirdParty),
      total: Math.round(workersComp + thirdParty)
    });
    setStep(3);
  };

  return (
    <>
      <Helmet>
        <title>Workplace Injury Calculator | Workers Comp Estimate | Trembach Law</title>
        <meta name="description" content="Calculate workplace injury compensation including workers' comp and third-party claims. Free estimates for on-the-job injuries." />
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
              Workplace Injury<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light">
              Workers' comp & third-party claims
            </p>
          </div>
        </section>

        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">2/3</div>
                <p className="text-slate-600">Wage replacement rate</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">3x More</div>
                <p className="text-slate-600">With third-party claim</p>
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

export default WorkplaceInjuriesCompensationCalculator;
