import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageSquareWarning } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCalculatorForm, CalculatorFormData, CalculatorResults } from '@/hooks/useCalculatorForm';
import { FormNavigation } from '@/components/calculator/FormNavigation';
import { CalculatorResults as ResultsDisplay } from '@/components/calculator/CalculatorResults';

interface DefamationFormData extends CalculatorFormData {
  defamationType: string;
  plaintiffType: string;
  publishingMedium: string;
  statementType: string;
  reputationDamage: string;
  economicLoss: string;
  maliceEvidence: string;
  retractionOffered: string;
}

const initialFormData: DefamationFormData = {
  defamationType: '',
  plaintiffType: '',
  publishingMedium: '',
  statementType: '',
  reputationDamage: '',
  economicLoss: '',
  maliceEvidence: '',
  retractionOffered: ''
};

function calculateCompensation(data: DefamationFormData): CalculatorResults {
  let min = 25000;
  let max = 150000;

  // Defamation type multipliers
  const typeMultipliers: Record<string, number> = {
    'libel': 2.0,
    'slander': 1.5,
    'per-se': 2.5,
    'per-quod': 1.8
  };

  // Plaintiff type (public vs private)
  const plaintiffMultipliers: Record<string, number> = {
    'private-citizen': 2.5,
    'limited-public': 2.0,
    'public-figure': 1.3,
    'public-official': 1.2,
    'business': 1.8,
    'professional': 2.2
  };

  // Publishing medium multipliers
  const mediumMultipliers: Record<string, number> = {
    'social-media': 2.8,
    'news-outlet': 3.5,
    'blog-website': 2.2,
    'book-publication': 3.0,
    'email-letter': 1.8,
    'workplace': 2.5,
    'public-speech': 2.0,
    'other': 1.5
  };

  // Statement type factors
  const statementMultipliers: Record<string, number> = {
    'criminal-activity': 3.5,
    'professional-misconduct': 3.2,
    'sexual-misconduct': 4.0,
    'disease-infection': 3.0,
    'business-fraud': 3.5,
    'moral-character': 2.5,
    'financial-status': 2.0,
    'other': 1.8
  };

  // Reputation damage extent
  const reputationMultipliers: Record<string, number> = {
    'minimal': 1.0,
    'moderate': 2.0,
    'significant': 3.5,
    'severe': 5.5,
    'complete-destruction': 8.0
  };

  // Economic loss factors
  const economicMultipliers: Record<string, number> = {
    'none': 1.0,
    'minor-income-loss': 1.8,
    'job-loss': 3.0,
    'business-closure': 4.5,
    'career-destroyed': 6.0,
    'substantial-documented': 5.0
  };

  // Actual malice evidence (critical for public figures)
  const maliceMultipliers: Record<string, number> = {
    'clear-malice': 4.0,
    'reckless-disregard': 3.5,
    'knew-false': 4.5,
    'some-evidence': 2.5,
    'negligence-only': 1.8,
    'none': 1.0
  };

  // Retraction factors
  const retractionMultipliers: Record<string, number> = {
    'none-offered': 2.5,
    'inadequate': 2.0,
    'partial': 1.5,
    'full-prompt': 1.0,
    'full-reluctant': 1.3
  };

  const typeMultiplier = typeMultipliers[data.defamationType] || 1.0;
  const plaintiffMultiplier = plaintiffMultipliers[data.plaintiffType] || 1.0;
  const mediumMultiplier = mediumMultipliers[data.publishingMedium] || 1.0;
  const statementMultiplier = statementMultipliers[data.statementType] || 1.0;
  const reputationMultiplier = reputationMultipliers[data.reputationDamage] || 1.0;
  const economicMultiplier = economicMultipliers[data.economicLoss] || 1.0;
  const maliceMultiplier = maliceMultipliers[data.maliceEvidence] || 1.0;
  const retractionMultiplier = retractionMultipliers[data.retractionOffered] || 1.0;

  const totalMultiplier = typeMultiplier * plaintiffMultiplier * mediumMultiplier * 
                         statementMultiplier * reputationMultiplier * economicMultiplier * 
                         maliceMultiplier * retractionMultiplier;

  min = Math.round(min * totalMultiplier);
  max = Math.round(max * totalMultiplier);

  // Ensure reasonable minimums
  min = Math.max(min, 15000);
  max = Math.max(max, min * 2);

  return { min, max };
}

function validateForm(data: DefamationFormData, step: number): boolean {
  switch (step) {
    case 1:
      return !!(data.defamationType && data.plaintiffType && data.publishingMedium && 
                data.statementType);
    case 2:
      return !!(data.reputationDamage && data.economicLoss && 
                data.maliceEvidence && data.retractionOffered);
    default:
      return false;
  }
}

export default function DefamationCompensationCalculator() {
  const navigate = useNavigate();
  const {
    step,
    formData,
    results,
    updateField,
    handleNext,
    handleBack,
    resetForm,
    isStepValid
  } = useCalculatorForm<DefamationFormData>(
    initialFormData,
    calculateCompensation,
    validateForm
  );

  return (
    <>
      <Helmet>
        <title>Defamation Compensation Calculator | Libel & Slander Claims</title>
        <meta name="description" content="Calculate potential compensation for defamation, libel, and slander claims. Instant estimates for reputation damage and false statement lawsuits." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Back Navigation */}
          <Button
            variant="ghost"
            onClick={() => navigate('/calculators')}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Calculators
          </Button>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <MessageSquareWarning className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Defamation Calculator</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get an estimate of potential compensation for libel, slander, and defamation claims
            </p>
          </div>

          {/* Calculator Card */}
          <div className="bg-card rounded-2xl shadow-lg p-8 mb-8">
            {step < 3 ? (
              <>
                {/* Progress Indicator */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Step {step} of 2</span>
                    <span className="text-sm text-muted-foreground">
                      {step === 1 ? 'Statement Details' : 'Damage Assessment'}
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all duration-300"
                      style={{ width: `${(step / 2) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Step 1: Statement Details */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Type of Defamation
                      </label>
                      <select
                        value={formData.defamationType}
                        onChange={(e) => updateField('defamationType', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select defamation type</option>
                        <option value="libel">Libel (Written)</option>
                        <option value="slander">Slander (Spoken)</option>
                        <option value="per-se">Defamation Per Se (Inherently Harmful)</option>
                        <option value="per-quod">Defamation Per Quod (Requires Proof of Harm)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Plaintiff Status
                      </label>
                      <select
                        value={formData.plaintiffType}
                        onChange={(e) => updateField('plaintiffType', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select plaintiff type</option>
                        <option value="private-citizen">Private Citizen</option>
                        <option value="limited-public">Limited-Purpose Public Figure</option>
                        <option value="public-figure">Public Figure/Celebrity</option>
                        <option value="public-official">Public Official</option>
                        <option value="business">Business/Corporation</option>
                        <option value="professional">Professional (Doctor, Lawyer, etc.)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Publishing Medium
                      </label>
                      <select
                        value={formData.publishingMedium}
                        onChange={(e) => updateField('publishingMedium', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select medium</option>
                        <option value="social-media">Social Media</option>
                        <option value="news-outlet">News Outlet/Media</option>
                        <option value="blog-website">Blog/Website</option>
                        <option value="book-publication">Book Publication</option>
                        <option value="email-letter">Email/Letter</option>
                        <option value="workplace">Workplace Communication</option>
                        <option value="public-speech">Public Speech/Presentation</option>
                        <option value="other">Other Medium</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Nature of False Statement
                      </label>
                      <select
                        value={formData.statementType}
                        onChange={(e) => updateField('statementType', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select statement type</option>
                        <option value="criminal-activity">Alleged Criminal Activity</option>
                        <option value="professional-misconduct">Professional Misconduct</option>
                        <option value="sexual-misconduct">Sexual Misconduct</option>
                        <option value="disease-infection">Disease/Infection</option>
                        <option value="business-fraud">Business Fraud/Dishonesty</option>
                        <option value="moral-character">Moral Character Attack</option>
                        <option value="financial-status">Financial Status/Bankruptcy</option>
                        <option value="other">Other False Statement</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 2: Damage Assessment */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Extent of Reputation Damage
                      </label>
                      <select
                        value={formData.reputationDamage}
                        onChange={(e) => updateField('reputationDamage', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select damage level</option>
                        <option value="minimal">Minimal (Limited impact)</option>
                        <option value="moderate">Moderate (Some harm to reputation)</option>
                        <option value="significant">Significant (Substantial harm)</option>
                        <option value="severe">Severe (Major reputation damage)</option>
                        <option value="complete-destruction">Complete Destruction of Reputation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Economic Loss/Damages
                      </label>
                      <select
                        value={formData.economicLoss}
                        onChange={(e) => updateField('economicLoss', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select economic impact</option>
                        <option value="none">None (Reputation damage only)</option>
                        <option value="minor-income-loss">Minor Income Loss</option>
                        <option value="job-loss">Lost Job/Employment</option>
                        <option value="business-closure">Business Closure</option>
                        <option value="career-destroyed">Career Destroyed</option>
                        <option value="substantial-documented">Substantial Documented Losses</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Evidence of Actual Malice
                      </label>
                      <select
                        value={formData.maliceEvidence}
                        onChange={(e) => updateField('maliceEvidence', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select malice evidence</option>
                        <option value="clear-malice">Clear Actual Malice</option>
                        <option value="reckless-disregard">Reckless Disregard for Truth</option>
                        <option value="knew-false">Defendant Knew Statement Was False</option>
                        <option value="some-evidence">Some Evidence of Malice</option>
                        <option value="negligence-only">Negligence Only (No Malice)</option>
                        <option value="none">None</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Retraction/Correction Offered
                      </label>
                      <select
                        value={formData.retractionOffered}
                        onChange={(e) => updateField('retractionOffered', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background"
                      >
                        <option value="">Select retraction status</option>
                        <option value="none-offered">None Offered</option>
                        <option value="inadequate">Inadequate/Insufficient</option>
                        <option value="partial">Partial Retraction</option>
                        <option value="full-prompt">Full, Prompt Retraction</option>
                        <option value="full-reluctant">Full but Reluctant Retraction</option>
                      </select>
                    </div>
                  </div>
                )}

                <FormNavigation
                  currentStep={step}
                  totalSteps={2}
                  isValid={isStepValid()}
                  onBack={handleBack}
                  onNext={handleNext}
                />
              </>
            ) : (
              <>
                {results && (
                  <ResultsDisplay
                    min={results.min}
                    max={results.max}
                    title="Your Estimated Compensation Range"
                    subtitle="Based on defamation claims"
                    disclaimer="This is an educational estimate only and does not constitute legal advice. Actual compensation depends on numerous factors including jurisdiction, plaintiff status (private vs public figure), actual malice standard, truth as absolute defense, opinion vs fact distinctions, First Amendment protections, provable damages, and specific case circumstances. Public figures and officials must prove actual malice (knowing falsity or reckless disregard). Defamation cases are highly complex with significant constitutional law considerations. Time limits are typically 1-3 years. Consult with an experienced defamation attorney for proper case evaluation."
                    ctaText="Get Free Case Review"
                    ctaSubtext="Defamation cases require specialized First Amendment expertise"
                  />
                )}

                <div className="flex gap-4 mt-8">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={resetForm}
                    className="flex-1"
                  >
                    Start Over
                  </Button>
                  <Button
                    size="lg"
                    onClick={() => navigate('/contact')}
                    className="flex-1"
                  >
                    Contact Us
                  </Button>
                </div>
              </>
            )}
          </div>

          {/* Info Cards */}
          {step < 3 && (
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold mb-2">Actual Malice Standard</h3>
                <p className="text-sm text-muted-foreground">
                  Public figures must prove defendant knew statement was false
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold mb-2">Truth Defense</h3>
                <p className="text-sm text-muted-foreground">
                  Truth is an absolute defense to defamation claims
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold mb-2">Short Time Limits</h3>
                <p className="text-sm text-muted-foreground">
                  Statute of limitations typically 1-3 years from publication
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
