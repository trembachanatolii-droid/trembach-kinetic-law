import React from 'react';

const ThreeStepProcess = () => {
  return (
    <section className="relative z-20 pt-32 pb-24 mt-24 bg-[#F8F8F9] border-t-2 border-border">
      <div className="container mx-auto px-8">
        <h2 className="font-bold text-foreground mb-6 text-center" style={{ fontFamily: 'Inter, "SF Pro Text", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif', fontSize: '38px', fontWeight: 700, lineHeight: 1.2, color: '#17181A' }}>
          Steps to File a California Personal Injury Lawsuit
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-20 animate-fade-in" style={{ fontFamily: 'Inter, "SF Pro Text", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif', fontSize: '21px', fontWeight: 500, color: '#6E757C', lineHeight: 1.6 }}>
          Our proven 3-step process makes getting justice in California simple and stress-free.{' '}
          <span style={{ fontWeight: 700, color: '#E3362C', textTransform: 'uppercase' }}>100% FREE TO START - NO FEES UNLESS WE WIN</span>
        </p>
        
        <div className="grid md:grid-cols-3 gap-16 mt-20">
          {/* Step 1 */}
          <div className="text-center">
            <div className="mb-8 leading-none animate-scale-in" style={{ fontFamily: 'Inter, "SF Pro Text", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif', fontSize: '146px', fontWeight: 900, color: '#0A67FF' }}>
              1
            </div>
            <h3 className="mb-5 animate-fade-in" style={{ fontFamily: 'Inter, "SF Pro Text", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif', fontSize: '36px', fontWeight: 700, lineHeight: 1.2, color: '#17181A' }}>
              Contact Our California Attorneys
            </h3>
            <div className="flex justify-center mb-6 animate-scale-in">
              <span className="inline-block text-white px-4 uppercase tracking-wide" style={{ fontFamily: 'Inter, "SF Pro Text", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '0.04em', backgroundColor: '#FF4B37', height: '28px', lineHeight: '28px', borderRadius: '9999px', boxShadow: '0 6px 18px rgba(0,0,0,.12)' }}>
                FREE
              </span>
            </div>
            <p className="mb-8 mx-auto animate-fade-in" style={{ fontFamily: 'Inter, "SF Pro Text", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif', fontSize: '17px', fontWeight: 400, lineHeight: 1.65, color: '#4C5156', maxWidth: '50ch' }}>
              Start with a <span style={{ fontWeight: 700, color: '#E3362C' }}>FREE</span>, confidential consultation available 24/7. We'll listen to your story, 
              evaluate your case under California law, and explain your rights. Former defense attorney insight included.
            </p>
            <ul className="space-y-3 text-left max-w-xs mx-auto">
              <li className="flex items-start gap-3 text-[#6b7280] text-small">
                <svg className="w-4 h-4 text-[#22c55e] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span><strong>FREE</strong> case evaluation within 24 hours</span>
              </li>
              <li className="flex items-start gap-3 text-[#6b7280] text-small">
                <svg className="w-4 h-4 text-[#22c55e] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>No upfront costs or fees - <strong>ZERO</strong></span>
              </li>
              <li className="flex items-start gap-3 text-[#6b7280] text-small">
                <svg className="w-4 h-4 text-[#22c55e] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span><strong>FREE</strong> home & hospital visits anywhere in CA</span>
              </li>
              <li className="flex items-start gap-3 text-[#6b7280] text-small">
                <svg className="w-4 h-4 text-[#22c55e] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span><strong>FREE</strong> medical referrals if needed</span>
              </li>
              <li className="flex items-start gap-3 text-[#6b7280] text-small">
                <svg className="w-4 h-4 text-[#22c55e] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Se habla español - <strong>FREE</strong> translation</span>
              </li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="mb-8 leading-none animate-scale-in" style={{ fontFamily: 'Inter, "SF Pro Text", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif', fontSize: '146px', fontWeight: 900, color: '#0A67FF', animationDelay: '120ms' }}>
              2
            </div>
            <h3 className="mb-5 animate-fade-in" style={{ fontFamily: 'Inter, "SF Pro Text", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif', fontSize: '36px', fontWeight: 700, lineHeight: 1.2, color: '#17181A', animationDelay: '80ms' }}>
              We'll File Your California Claim
            </h3>
            <div className="flex justify-center mb-6 animate-scale-in" style={{ animationDelay: '160ms' }}>
              <span className="inline-block text-white px-4 uppercase tracking-wide" style={{ fontFamily: 'Inter, "SF Pro Text", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '0.04em', backgroundColor: '#FF4B37', height: '28px', lineHeight: '28px', borderRadius: '9999px', boxShadow: '0 6px 18px rgba(0,0,0,.12)' }}>
                FREE
              </span>
            </div>
            <p className="mb-8 mx-auto animate-fade-in" style={{ fontFamily: 'Inter, "SF Pro Text", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif', fontSize: '17px', fontWeight: 400, lineHeight: 1.65, color: '#4C5156', maxWidth: '50ch', animationDelay: '220ms' }}>
              Our experienced team handles everything - investigation, California court filings, insurance negotiations, 
              and if necessary, trial. All at <span style={{ fontWeight: 700, color: '#E3362C' }}>ZERO COST</span> to you upfront.
            </p>
            <ul className="space-y-3 text-left max-w-xs mx-auto">
              <li className="flex items-start gap-3 text-[#6b7280] text-small">
                <svg className="w-4 h-4 text-[#22c55e] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Investigation & evidence gathering - <strong>FREE</strong></span>
              </li>
              <li className="flex items-start gap-3 text-[#6b7280] text-small">
                <svg className="w-4 h-4 text-[#22c55e] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Expert witnesses paid by us - <strong>FREE</strong></span>
              </li>
              <li className="flex items-start gap-3 text-[#6b7280] text-small">
                <svg className="w-4 h-4 text-[#22c55e] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>All California court filings - <strong>FREE</strong></span>
              </li>
              <li className="flex items-start gap-3 text-[#6b7280] text-small">
                <svg className="w-4 h-4 text-[#22c55e] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Insurance company negotiations - <strong>FREE</strong></span>
              </li>
              <li className="flex items-start gap-3 text-[#6b7280] text-small">
                <svg className="w-4 h-4 text-[#22c55e] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Trial representation if needed - <strong>FREE</strong></span>
              </li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="mb-8 leading-none animate-scale-in" style={{ fontFamily: 'Inter, "SF Pro Text", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif', fontSize: '146px', fontWeight: 900, color: '#0A67FF', animationDelay: '240ms' }}>
              3
            </div>
            <h3 className="mb-5 animate-fade-in" style={{ fontFamily: 'Inter, "SF Pro Text", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif', fontSize: '36px', fontWeight: 700, lineHeight: 1.2, color: '#17181A', animationDelay: '160ms' }}>
              Get Maximum California Compensation
            </h3>
            <p className="mb-8 mx-auto animate-fade-in" style={{ fontFamily: 'Inter, "SF Pro Text", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif', fontSize: '17px', fontWeight: 400, lineHeight: 1.65, color: '#4C5156', maxWidth: '50ch', animationDelay: '280ms', marginTop: '48px' }}>
              We fight for maximum compensation under California law. You pay <span style={{ fontWeight: 700, color: '#E3362C' }}>NOTHING</span> unless we win. 
              No hidden fees, no surprises - just results.
            </p>
            <ul className="space-y-3 text-left max-w-xs mx-auto">
              <li className="flex items-start gap-3 text-[#6b7280] text-small">
                <svg className="w-4 h-4 text-[#22c55e] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Medical expenses covered (past & future)</span>
              </li>
              <li className="flex items-start gap-3 text-[#6b7280] text-small">
                <svg className="w-4 h-4 text-[#22c55e] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Lost wages & earning capacity recovered</span>
              </li>
              <li className="flex items-start gap-3 text-[#6b7280] text-small">
                <svg className="w-4 h-4 text-[#22c55e] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Pain & suffering compensation (no caps except MICRA)</span>
              </li>
              <li className="flex items-start gap-3 text-[#6b7280] text-small">
                <svg className="w-4 h-4 text-[#22c55e] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Punitive damages when applicable</span>
              </li>
              <li className="flex items-start gap-3 text-[#6b7280] text-small">
                <svg className="w-4 h-4 text-[#22c55e] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>You keep 60-67% of recovery</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeStepProcess;
