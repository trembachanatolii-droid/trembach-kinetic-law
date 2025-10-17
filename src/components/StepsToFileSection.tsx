import React from 'react';
import { Helmet } from 'react-helmet-async';

const StepsToFileSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-24 px-4 overflow-hidden" id="steps">
      {/* Structured Data */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Steps to File a California Personal Injury Lawsuit",
            "description": "Our proven 3-step process makes getting justice in California simple and stress-free. 100% FREE TO START — NO FEES UNLESS WE WIN",
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "Contact Our California Attorneys FREE",
                "itemListElement": [
                  {
                    "@type": "HowToDirection",
                    "text": "Start with a FREE, confidential consultation available 24/7. We'll listen to your story, evaluate your case under California law, and explain your rights. Former defense attorney insight included."
                  }
                ]
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "We'll File Your California Claim FREE",
                "itemListElement": [
                  {
                    "@type": "HowToDirection",
                    "text": "Our experienced team handles everything — investigation, California court filings, insurance negotiations, and if necessary, trial. All at ZERO COST to you upfront."
                  }
                ]
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Get Maximum California Compensation",
                "itemListElement": [
                  {
                    "@type": "HowToDirection",
                    "text": "We fight for maximum compensation under California law. You pay NOTHING unless we win. No hidden fees, no surprises — just results."
                  }
                ]
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-tight max-w-5xl mx-auto">
            Steps to File a California Personal Injury Lawsuit
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-normal">
            Our proven 3-step process makes getting justice in California simple and stress-free.{' '}
            <strong className="text-[#ff3b30] font-bold">100% FREE TO START — NO FEES UNLESS WE WIN</strong>
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {/* Step 1 */}
          <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
            <div className="text-[#0a84ff] text-7xl font-black mb-6">1</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center flex-wrap gap-2">
              Contact Our California Attorneys
              <span className="inline-block px-3 py-1 rounded-lg bg-gradient-to-r from-[#ff3b30] to-[#ff6b35] text-white text-xs font-extrabold tracking-wider">
                FREE
              </span>
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Start with a <strong className="text-[#ff3b30]">FREE</strong>, confidential consultation available 24/7. 
              We'll listen to your story, evaluate your case under California law, and explain your rights. 
              Former defense attorney insight included.
            </p>
            <ul className="space-y-3">
              {[
                '<strong>FREE</strong> case evaluation within 24 hours',
                'No upfront costs or fees — <strong>ZERO</strong>',
                '<strong>FREE</strong> phone and video consultation',
                '<strong>FREE</strong> medical referrals if needed',
                'Se habla español — <strong>FREE</strong> translation'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                  <svg 
                    className="w-5 h-5 text-[#34c759] flex-shrink-0 mt-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    viewBox="0 0 24 24"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          </div>

          {/* Step 2 */}
          <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
            <div className="text-[#0a84ff] text-7xl font-black mb-6">2</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center flex-wrap gap-2">
              We'll File Your California Claim
              <span className="inline-block px-3 py-1 rounded-lg bg-gradient-to-r from-[#ff3b30] to-[#ff6b35] text-white text-xs font-extrabold tracking-wider">
                FREE
              </span>
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our experienced team handles everything — investigation, California court filings, insurance negotiations, 
              and if necessary, trial. All at <strong className="text-[#ff3b30]">ZERO COST</strong> to you upfront.
            </p>
            <ul className="space-y-3">
              {[
                'Investigation/evidence gathering — <strong>FREE</strong>',
                'Expert witnesses paid by us — <strong>FREE</strong>',
                'All California court filings — <strong>FREE</strong>',
                'Insurance company negotiations — <strong>FREE</strong>',
                'Trial representation if needed — <strong>FREE</strong>'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                  <svg 
                    className="w-5 h-5 text-[#34c759] flex-shrink-0 mt-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    viewBox="0 0 24 24"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          </div>

          {/* Step 3 */}
          <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
            <div className="text-[#0a84ff] text-7xl font-black mb-6">3</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Get Maximum California Compensation
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We fight for maximum compensation under California law. 
              You pay <strong className="text-[#ff3b30]">NOTHING</strong> unless we win. 
              No hidden fees, no surprises — just results.
            </p>
            <ul className="space-y-3">
              {[
                'Medical expenses covered (past & future)',
                'Lost wages & earning capacity recovered',
                'Pain & suffering compensation (no caps except MICRA)',
                'Punitive damages when applicable',
                'You keep 60–67% of recovery'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                  <svg 
                    className="w-5 h-5 text-[#34c759] flex-shrink-0 mt-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    viewBox="0 0 24 24"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsToFileSection;
