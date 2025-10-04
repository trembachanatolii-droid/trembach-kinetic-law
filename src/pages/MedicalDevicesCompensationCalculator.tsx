import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, ArrowRight, DollarSign, AlertTriangle } from 'lucide-react';

const MedicalDevicesCompensationCalculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    deviceType: '',
    complication: '',
    medicalCosts: '',
    revisionSurgeries: '',
    painLevel: '',
    permanentImpact: ''
  });
  const [results, setResults] = useState<{ min: number; max: number } | null>(null);

  const calculateCompensation = () => {
    let baseMin = 50000;
    let baseMax = 500000;

    const deviceMult: Record<string, number> = {
      'hip-implant': 2.5,
      'knee-implant': 2.0,
      'hernia-mesh': 3.0,
      'ivc-filter': 2.8,
      'pacemaker': 2.2,
      'spinal-device': 3.5
    };
    baseMin *= deviceMult[formData.deviceType] || 1;
    baseMax *= deviceMult[formData.deviceType] || 1;

    const medical = parseInt(formData.medicalCosts) || 0;
    baseMin += medical * 3;
    baseMax += medical * 6;

    const revisions = parseInt(formData.revisionSurgeries) || 0;
    baseMin += revisions * 50000;
    baseMax += revisions * 100000;

    setResults({ min: Math.round(baseMin), max: Math.round(baseMax) });
    setStep(3);
  };

  return (
    <>
      <Helmet>
        <title>Medical Device Calculator | Defective Implant Compensation | Trembach Law</title>
        <meta name="description" content="Calculate defective medical device compensation for hip implants, hernia mesh, and other failed devices. Free estimates for revision surgeries." />
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
              Medical Device<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light">
              Defective implant compensation
            </p>
          </div>
        </section>

        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">$500K+</div>
                <p className="text-slate-600">Average device settlement</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">Nationwide</div>
                <p className="text-slate-600">Mass tort cases</p>
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

export default MedicalDevicesCompensationCalculator;
