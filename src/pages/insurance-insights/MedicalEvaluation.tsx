import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { ArrowRight, Stethoscope } from 'lucide-react';
import medicalInsurance from '@/assets/medical-insurance.jpg';

const MedicalEvaluation = () => (
  <>
    <Helmet>
      <title>Independent Medical Evaluation | Trembach Law Firm</title>
      <meta name="description" content="Get unbiased medical evaluations free from insurance company influence. Protect your injury claim with independent medical experts." />
    </Helmet>
    <main className="bg-background">
      <section className="relative min-h-[60vh] flex items-center justify-center bg-slate-900">
        <img src={medicalInsurance} alt="Independent medical evaluation" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6" style={{ letterSpacing: '-0.02em' }}>
            Independent Medical<br /><span className="text-slate-300">Evaluation</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">Unbiased medical assessments protecting your claim value</p>
        </div>
      </section>
      <div className="container mx-auto px-4 max-w-6xl py-20">
        <div className="bg-white rounded-3xl p-12 border border-slate-200 text-center">
          <Stethoscope className="mx-auto mb-6 text-slate-900" size={64} />
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Get Independent Assessment</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">Our network of independent medical experts provides unbiased evaluations free from insurance company influence.</p>
          <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 h-14 px-10 rounded-xl">
            Request Evaluation <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </main>
  </>
);

export default MedicalEvaluation;
