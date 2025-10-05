import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, LucideIcon } from 'lucide-react';

interface CalculatorLayoutProps {
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  icon?: LucideIcon;
  children: React.ReactNode;
  stats?: Array<{
    value: string;
    label: string;
  }>;
}

export function CalculatorLayout({
  title,
  subtitle,
  metaTitle,
  metaDescription,
  icon: Icon,
  children,
  stats = [
    { value: 'Free', label: 'No cost estimate' },
    { value: 'Instant', label: 'Results in minutes' },
    { value: 'No Fee', label: 'Unless we win' }
  ]
}: CalculatorLayoutProps) {
  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      <main className="min-h-screen bg-white">
        {/* Back Navigation */}
        <div className="border-b border-slate-200">
          <div className="container mx-auto px-6 py-4 max-w-5xl">
            <Link 
              to="/calculators" 
              className="inline-flex items-center text-slate-600 hover:text-slate-900 visited:text-slate-600 no-underline transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              <span className="text-sm font-medium">Back to All Calculators</span>
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="pt-20 pb-12 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            {Icon && <Icon className="mx-auto mb-6" size={64} strokeWidth={1.5} />}
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight leading-[1.1]">
              {title.split(' ').map((word, i, arr) => (
                <React.Fragment key={i}>
                  {word}
                  {i === Math.floor(arr.length / 2) - 1 && <br />}
                  {i !== arr.length - 1 && ' '}
                </React.Fragment>
              ))}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light">
              {subtitle}
            </p>
          </div>
        </section>

        {/* Main Content */}
        {children}

        {/* Stats Section */}
        {stats && stats.length > 0 && (
          <section className="py-20 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-6 max-w-5xl">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                    <p className="text-slate-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
