import React from 'react';
import { Button } from '@/components/ui/button';

interface DamageCategory {
  title: string;
  description: string;
}

interface CalculatorResultsProps {
  min: number;
  max: number;
  title?: string;
  subtitle?: string;
  damageCategories?: DamageCategory[];
  disclaimer?: string;
  ctaText?: string;
  ctaSubtext?: string;
}

export function CalculatorResults({
  min,
  max,
  title = 'Your Estimated Compensation',
  subtitle = 'Based on similar cases',
  damageCategories = [],
  disclaimer,
  ctaText = 'Get Free Case Review',
  ctaSubtext = 'Maximize your compensation with expert legal guidance'
}: CalculatorResultsProps) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-black mb-2">{title}</h2>
        <p className="text-slate-600">{subtitle}</p>
      </div>

      {/* Results Display */}
      <div className="bg-slate-50 rounded-2xl p-8 text-center">
        <div className="text-5xl font-bold text-black mb-2">
          ${min.toLocaleString()} - ${max.toLocaleString()}
        </div>
        <p className="text-slate-600">Estimated Compensation Range</p>
      </div>

      {/* Damage Categories */}
      {damageCategories.length > 0 && (
        <div className="space-y-4">
          {damageCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 transition-colors"
            >
              <h4 className="font-semibold text-black mb-2">{category.title}</h4>
              <p className="text-sm text-slate-600">{category.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Disclaimer */}
      {disclaimer && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <p className="text-sm text-amber-900">
            <strong>Important:</strong> {disclaimer}
          </p>
        </div>
      )}

      {/* CTA */}
      <div className="text-center pt-4">
        <h3 className="text-xl font-semibold text-black mb-4">{ctaSubtext}</h3>
        <Button size="lg" className="h-14 px-8 text-base">
          {ctaText}
        </Button>
      </div>
    </div>
  );
}
