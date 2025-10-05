import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CalculatorCTAProps {
  title?: string;
  description?: string;
  calculatorUrl: string;
  calculatorName?: string;
  variant?: 'default' | 'compact' | 'inline';
}

export function CalculatorCTA({
  title = 'Calculate Your Potential Compensation',
  description = 'Get a free, instant estimate of what your case may be worth. No obligations, completely confidential.',
  calculatorUrl,
  calculatorName = 'Start Calculator',
  variant = 'default'
}: CalculatorCTAProps) {
  if (variant === 'inline') {
    return (
      <div className="inline-flex items-center gap-4 p-4 bg-slate-50 border border-slate-200 rounded-xl">
        <Calculator className="text-slate-700" size={24} />
        <div className="flex-1">
          <p className="text-sm font-medium text-slate-900">Want to know what your case is worth?</p>
        </div>
        <Link to={calculatorUrl}>
          <Button size="sm" className="h-9">
            Calculate Now
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </Link>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 text-center">
        <Calculator className="mx-auto mb-4 text-slate-700" size={48} />
        <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 mb-6">{description}</p>
        <Link to={calculatorUrl}>
          <Button size="lg" className="h-12 px-6">
            {calculatorName}
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center shadow-sm">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center">
              <Calculator className="text-slate-700" size={40} />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">{title}</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
          <Link to={calculatorUrl}>
            <Button size="lg" className="h-14 px-10 text-lg">
              {calculatorName}
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </Link>
          <p className="text-sm text-slate-500 mt-6">
            Free • Instant Results • No Obligation
          </p>
        </div>
      </div>
    </section>
  );
}
