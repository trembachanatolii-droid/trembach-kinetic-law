import React from 'react';

const ThreeStepProcess = () => {
  return (
    <section className="relative z-20 pt-32 pb-24 mt-24 bg-surface/20 border-t-2 border-border">
      <div className="container mx-auto px-8">
        <h2 className="text-display font-display font-bold text-foreground mb-6 text-center">
          Steps to File a California Personal Injury Lawsuit
        </h2>
        <p className="text-title text-muted-foreground text-center max-w-3xl mx-auto mb-20">
          Our proven 3-step process makes getting justice in California simple and stress-free.{' '}
          <span className="text-primary font-bold">100% FREE TO START - NO FEES UNLESS WE WIN</span>
        </p>
        
        <div className="grid md:grid-cols-3 gap-16 mt-20">
          {/* Step 1 */}
          <div className="text-center">
            <div className="text-[96px] font-bold bg-gradient-to-b from-primary to-primary/70 bg-clip-text text-transparent mb-8 font-display leading-none">
              1
            </div>
            <h3 className="text-subtitle font-display font-semibold text-foreground mb-5">
              Contact Our California Attorneys{' '}
              <span className="inline-block bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-3 py-1 rounded text-sm font-extrabold uppercase tracking-wider shadow-lg">
                FREE
              </span>
            </h3>
            <p className="text-body text-muted-foreground mb-8 leading-relaxed">
              Start with a <span className="text-primary font-bold">FREE</span>, confidential consultation available 24/7. We'll listen to your story, 
              evaluate your case under California law, and explain your rights. Former defense attorney insight included.
            </p>
            <ul className="space-y-3 text-left max-w-xs mx-auto">
              <li className="flex items-start gap-3 text-muted-foreground text-small">
                <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span><strong>FREE</strong> case evaluation within 24 hours</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-small">
                <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>No upfront costs or fees - <strong>ZERO</strong></span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-small">
                <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span><strong>FREE</strong> home & hospital visits anywhere in CA</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-small">
                <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span><strong>FREE</strong> medical referrals if needed</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-small">
                <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Se habla español - <strong>FREE</strong> translation</span>
              </li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="text-[96px] font-bold bg-gradient-to-b from-primary to-primary/70 bg-clip-text text-transparent mb-8 font-display leading-none">
              2
            </div>
            <h3 className="text-subtitle font-display font-semibold text-foreground mb-5">
              We'll File Your California Claim{' '}
              <span className="inline-block bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-3 py-1 rounded text-sm font-extrabold uppercase tracking-wider shadow-lg">
                FREE
              </span>
            </h3>
            <p className="text-body text-muted-foreground mb-8 leading-relaxed">
              Our experienced team handles everything - investigation, California court filings, insurance negotiations, 
              and if necessary, trial. All at <span className="text-primary font-bold">ZERO COST</span> to you upfront.
            </p>
            <ul className="space-y-3 text-left max-w-xs mx-auto">
              <li className="flex items-start gap-3 text-muted-foreground text-small">
                <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Investigation & evidence gathering - <strong>FREE</strong></span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-small">
                <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Expert witnesses paid by us - <strong>FREE</strong></span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-small">
                <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>All California court filings - <strong>FREE</strong></span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-small">
                <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Insurance company negotiations - <strong>FREE</strong></span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-small">
                <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Trial representation if needed - <strong>FREE</strong></span>
              </li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="text-[96px] font-bold bg-gradient-to-b from-primary to-primary/70 bg-clip-text text-transparent mb-8 font-display leading-none">
              3
            </div>
            <h3 className="text-subtitle font-display font-semibold text-foreground mb-5">
              Get Maximum California Compensation
            </h3>
            <p className="text-body text-muted-foreground mb-8 leading-relaxed">
              We fight for maximum compensation under California law. You pay <span className="text-primary font-bold">NOTHING</span> unless we win. 
              No hidden fees, no surprises - just results.
            </p>
            <ul className="space-y-3 text-left max-w-xs mx-auto">
              <li className="flex items-start gap-3 text-muted-foreground text-small">
                <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Medical expenses covered (past & future)</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-small">
                <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Lost wages & earning capacity recovered</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-small">
                <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Pain & suffering compensation (no caps except MICRA)</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-small">
                <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Punitive damages when applicable</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-small">
                <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
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
