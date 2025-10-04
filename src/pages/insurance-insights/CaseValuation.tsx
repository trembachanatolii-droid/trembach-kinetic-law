import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calculator } from 'lucide-react';
import lowballSettlement from '@/assets/lowball-settlement.jpg';

const CaseValuation = () => (
  <>
    <Helmet>
      <title>True Case Valuation Calculator | Trembach Law Firm</title>
      <meta name="description" content="Calculate your case's true value. Don't accept lowball insurance settlements. Get accurate compensation estimates." />
    </Helmet>
    <main className="bg-background">
      <section className="relative min-h-[60vh] flex items-center justify-center bg-slate-900">
        <img src={lowballSettlement} alt="Case valuation" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6" style={{ letterSpacing: '-0.02em' }}>
            Calculate True<br /><span className="text-slate-300">Case Value</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">Discover what your claim is actually worth</p>
        </div>
      </section>
      <div className="container mx-auto px-4 max-w-6xl py-20">
        <div className="bg-white rounded-3xl p-12 border border-slate-200 text-center">
          <Calculator className="mx-auto mb-6 text-slate-900" size={64} />
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Get Accurate Valuation</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">Our experienced attorneys evaluate your case using proven methods to determine maximum compensation value.</p>
          <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 h-14 px-10 rounded-xl">
            Calculate My Case <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </main>
  </>
);

export default CaseValuation;
