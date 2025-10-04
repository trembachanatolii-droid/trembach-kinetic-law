import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { ArrowRight, Scale } from 'lucide-react';
import courtroomEmpty from '@/assets/courtroom-empty.jpg';

const TrialExperience = () => (
  <>
    <Helmet>
      <title>Trial Attorney Experience | Trembach Law Firm</title>
      <meta name="description" content="Experienced trial attorneys with proven courtroom success. Don't settle for less with inexperienced counsel." />
    </Helmet>
    <main className="bg-background">
      <section className="relative min-h-[60vh] flex items-center justify-center bg-slate-900">
        <img src={courtroomEmpty} alt="Trial experience" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6" style={{ letterSpacing: '-0.02em' }}>
            Trial<br /><span className="text-slate-300">Experience Matters</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">Proven courtroom success when negotiations fail</p>
        </div>
      </section>
      <div className="container mx-auto px-4 max-w-6xl py-20">
        <div className="bg-white rounded-3xl p-12 border border-slate-200 text-center">
          <Scale className="mx-auto mb-6 text-slate-900" size={64} />
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Find Experienced Trial Attorney</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">Our attorneys have extensive trial experience. Insurance companies know we're ready for court.</p>
          <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 h-14 px-10 rounded-xl">
            Consult Trial Attorney <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </main>
  </>
);

export default TrialExperience;
