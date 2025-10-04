import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { ArrowRight, AlertCircle } from 'lucide-react';
import deadlineUrgency from '@/assets/deadline-urgency.jpg';

const StatuteLimitations = () => (
  <>
    <Helmet>
      <title>Statute of Limitations Deadlines | Trembach Law Firm</title>
      <meta name="description" content="Don't miss critical legal deadlines. California statute of limitations for personal injury claims explained." />
    </Helmet>
    <main className="bg-background">
      <section className="relative min-h-[60vh] flex items-center justify-center bg-slate-900">
        <img src={deadlineUrgency} alt="Legal deadlines" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6" style={{ letterSpacing: '-0.02em' }}>
            Legal Deadlines<br /><span className="text-slate-300">Matter</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">Missing deadlines means losing your case forever</p>
        </div>
      </section>
      <div className="container mx-auto px-4 max-w-6xl py-20">
        <div className="bg-red-50 rounded-3xl p-12 border-2 border-red-200 text-center">
          <AlertCircle className="mx-auto mb-6 text-red-600" size={64} />
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Verify Your Deadlines</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">California has strict filing deadlines. One day late means complete case dismissal regardless of merit.</p>
          <Button size="lg" className="bg-red-600 text-white hover:bg-red-700 h-14 px-10 rounded-xl">
            Check Deadlines Now <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </main>
  </>
);

export default StatuteLimitations;
