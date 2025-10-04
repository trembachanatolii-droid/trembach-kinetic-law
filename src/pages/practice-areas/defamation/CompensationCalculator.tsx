import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, ArrowRight, DollarSign, AlertCircle } from 'lucide-react';

interface FormData {
  defamationType: string;
  publicFigure: string;
  reputationScope: string;
  financialImpact: string;
  platform: string;
  evidenceStrength: string;
}

const DefamationCompensationCalculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    defamationType: '',
    publicFigure: '',
    reputationScope: '',
    financialImpact: '',
    platform: '',
    evidenceStrength: ''
  });
  const [results, setResults] = useState<{ min: number; max: number } | null>(null);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateCompensation = () => {
    let baseMin = 10000;
    let baseMax = 50000;

    // Defamation type
    const typeMultipliers: Record<string, number> = {
      'business': 2.5,
      'professional': 2.0,
      'online-libel': 1.8,
      'social-media': 1.5,
      'review-sites': 1.7,
      'slander': 1.3
    };
    const typeMult = typeMultipliers[formData.defamationType] || 1;
    baseMin *= typeMult;
    baseMax *= typeMult;

    // Public figure status
    const figureMultipliers: Record<string, number> = {
      'private': 1.5,
      'limited-public': 1.2,
      'public': 0.7
    };
    const figureMult = figureMultipliers[formData.publicFigure] || 1;
    baseMin *= figureMult;
    baseMax *= figureMult;

    // Reputation scope
    const scopeMultipliers: Record<string, number> = {
      'local': 1.0,
      'regional': 1.3,
      'national': 2.0,
      'international': 2.5
    };
    const scopeMult = scopeMultipliers[formData.reputationScope] || 1;
    baseMin *= scopeMult;
    baseMax *= scopeMult;

    // Financial impact
    const financialMultipliers: Record<string, number> = {
      'none': 0.6,
      'minor': 0.8,
      'moderate': 1.2,
      'significant': 1.8,
      'severe': 2.5
    };
    const finMult = financialMultipliers[formData.financialImpact] || 1;
    baseMin *= finMult;
    baseMax *= finMult;

    // Evidence strength
    const evidenceMultipliers: Record<string, number> = {
      'strong': 1.5,
      'moderate': 1.2,
      'weak': 0.8
    };
    const evMult = evidenceMultipliers[formData.evidenceStrength] || 1;
    baseMin *= evMult;
    baseMax *= evMult;

    setResults({
      min: Math.round(baseMin),
      max: Math.round(baseMax)
    });
    setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateCompensation();
  };

  const isStepComplete = () => {
    if (step === 1) {
      return formData.defamationType && formData.platform;
    }
    if (step === 2) {
      return formData.publicFigure && formData.reputationScope && formData.financialImpact && formData.evidenceStrength;
    }
    return false;
  };

  return (
    <>
      <Helmet>
        <title>Defamation Compensation Calculator | Libel & Slander Damages | Trembach Law</title>
        <meta 
          name="description" 
          content="Calculate potential defamation damages for libel, slander, and online reputation harm. Free, confidential estimates for defamation cases." 
        />
      </Helmet>

      <main className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="border-b border-slate-200 bg-white">
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

        {/* Hero */}
        <section className="pt-20 pb-12 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 tracking-tight leading-[1.1]">
                Defamation<br />Calculator
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
                Estimate damages for libel, slander, and online defamation
              </p>
            </div>
          </div>
        </section>

        {/* Progress */}
        <div className="border-b border-slate-200 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="flex justify-center items-center py-8 space-x-4">
              {[1, 2, 3].map((num) => (
                <React.Fragment key={num}>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                      step >= num ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-400'
                    }`}
                  >
                    {num}
                  </div>
                  {num < 3 && (
                    <div className={`w-16 h-1 rounded-full ${step > num ? 'bg-slate-900' : 'bg-slate-200'}`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-3xl">
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Step 1 */}
              {step === 1 && (
                <div className="space-y-8 animate-fade-in">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">
                      Type of defamation
                    </h2>
                    <p className="text-slate-600">Tell us about the false statements made</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-3">
                        What type of defamation occurred?
                      </label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          { value: 'business', label: 'Business Defamation' },
                          { value: 'professional', label: 'Professional Reputation' },
                          { value: 'online-libel', label: 'Online Libel' },
                          { value: 'social-media', label: 'Social Media Posts' },
                          { value: 'review-sites', label: 'Fake Reviews' },
                          { value: 'slander', label: 'Spoken Slander' }
                        ].map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => handleInputChange('defamationType', option.value)}
                            className={`p-4 rounded-2xl border-2 text-left transition-all ${
                              formData.defamationType === option.value
                                ? 'border-slate-900 bg-slate-50'
                                : 'border-slate-200 hover:border-slate-400'
                            }`}
                          >
                            <span className="font-medium text-slate-900">{option.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-3">
                        Where was it published?
                      </label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          { value: 'social-media', label: 'Social Media' },
                          { value: 'website', label: 'Website / Blog' },
                          { value: 'review-site', label: 'Review Site' },
                          { value: 'news-media', label: 'News Media' },
                          { value: 'email', label: 'Email / Private Message' },
                          { value: 'spoken', label: 'Spoken Word' }
                        ].map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => handleInputChange('platform', option.value)}
                            className={`p-4 rounded-2xl border-2 text-left transition-all ${
                              formData.platform === option.value
                                ? 'border-slate-900 bg-slate-50'
                                : 'border-slate-200 hover:border-slate-400'
                            }`}
                          >
                            <span className="font-medium text-slate-900">{option.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={!isStepComplete()}
                    className="w-full h-14 px-8 rounded-full bg-slate-900 text-white hover:bg-slate-800 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed font-semibold transition-all hover:shadow-lg inline-flex items-center justify-center"
                  >
                    Continue
                    <ArrowRight className="ml-2" size={20} />
                  </button>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div className="space-y-8 animate-fade-in">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">
                      Impact and evidence
                    </h2>
                    <p className="text-slate-600">Help us assess your case strength</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-3">
                        Are you a public figure?
                      </label>
                      <div className="grid md:grid-cols-3 gap-3">
                        {[
                          { value: 'private', label: 'Private Citizen' },
                          { value: 'limited-public', label: 'Limited Public' },
                          { value: 'public', label: 'Public Figure' }
                        ].map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => handleInputChange('publicFigure', option.value)}
                            className={`p-4 rounded-2xl border-2 text-left transition-all ${
                              formData.publicFigure === option.value
                                ? 'border-slate-900 bg-slate-50'
                                : 'border-slate-200 hover:border-slate-400'
                            }`}
                          >
                            <span className="font-medium text-slate-900">{option.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-3">
                        Scope of reputation damage
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { value: 'local', label: 'Local Community' },
                          { value: 'regional', label: 'Regional' },
                          { value: 'national', label: 'National' },
                          { value: 'international', label: 'International' }
                        ].map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => handleInputChange('reputationScope', option.value)}
                            className={`p-4 rounded-2xl border-2 text-left transition-all ${
                              formData.reputationScope === option.value
                                ? 'border-slate-900 bg-slate-50'
                                : 'border-slate-200 hover:border-slate-400'
                            }`}
                          >
                            <span className="font-medium text-slate-900">{option.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-3">
                        Financial impact
                      </label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          { value: 'severe', label: 'Severe - Lost Business' },
                          { value: 'significant', label: 'Significant Losses' },
                          { value: 'moderate', label: 'Moderate Impact' },
                          { value: 'minor', label: 'Minor Impact' },
                          { value: 'none', label: 'No Proven Losses' }
                        ].map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => handleInputChange('financialImpact', option.value)}
                            className={`p-4 rounded-2xl border-2 text-left transition-all ${
                              formData.financialImpact === option.value
                                ? 'border-slate-900 bg-slate-50'
                                : 'border-slate-200 hover:border-slate-400'
                            }`}
                          >
                            <span className="font-medium text-slate-900">{option.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-3">
                        Strength of evidence
                      </label>
                      <div className="grid md:grid-cols-3 gap-3">
                        {[
                          { value: 'strong', label: 'Strong Documentation' },
                          { value: 'moderate', label: 'Moderate Evidence' },
                          { value: 'weak', label: 'Limited Evidence' }
                        ].map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => handleInputChange('evidenceStrength', option.value)}
                            className={`p-4 rounded-2xl border-2 text-left transition-all ${
                              formData.evidenceStrength === option.value
                                ? 'border-slate-900 bg-slate-50'
                                : 'border-slate-200 hover:border-slate-400'
                            }`}
                          >
                            <span className="font-medium text-slate-900">{option.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="h-14 px-8 rounded-full border-2 border-slate-900 text-slate-900 hover:bg-slate-50 font-semibold transition-all inline-flex items-center justify-center"
                    >
                      <ArrowLeft className="mr-2" size={20} />
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={!isStepComplete()}
                      className="flex-1 h-14 px-8 rounded-full bg-slate-900 text-white hover:bg-slate-800 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed font-semibold transition-all hover:shadow-lg inline-flex items-center justify-center"
                    >
                      Calculate Damages
                      <Calculator className="ml-2" size={20} />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Results */}
              {step === 3 && results && (
                <div className="space-y-8 animate-fade-in">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                      <DollarSign className="text-green-600" size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">
                      Your Estimated Damages
                    </h2>
                    <p className="text-slate-600">Based on defamation type and impact</p>
                  </div>

                  <div className="bg-slate-50 rounded-3xl p-8 md:p-12 text-center border border-slate-200">
                    <div className="text-6xl md:text-7xl font-bold text-slate-900 mb-4">
                      ${results.min.toLocaleString()} - ${results.max.toLocaleString()}
                    </div>
                    <p className="text-xl text-slate-600">Potential damage award</p>
                  </div>

                  <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                    <div className="flex items-start gap-4">
                      <AlertCircle className="text-blue-600 shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">Act Quickly</h3>
                        <p className="text-slate-700 leading-relaxed">
                          Defamation cases have strict time limits (typically 1 year). Document everything and consult an attorney immediately to protect your reputation and maximize damages.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Link
                      to="/free-consultation"
                      className="w-full h-14 px-8 rounded-full bg-slate-900 text-white hover:bg-slate-800 visited:text-white font-semibold transition-all hover:shadow-lg inline-flex items-center justify-center no-underline"
                    >
                      Get Free Legal Consultation
                      <ArrowRight className="ml-2" size={20} />
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        setStep(1);
                        setResults(null);
                        setFormData({
                          defamationType: '',
                          publicFigure: '',
                          reputationScope: '',
                          financialImpact: '',
                          platform: '',
                          evidenceStrength: ''
                        });
                      }}
                      className="w-full h-14 px-8 rounded-full border-2 border-slate-900 text-slate-900 hover:bg-slate-50 visited:text-slate-900 font-semibold transition-all inline-flex items-center justify-center no-underline"
                    >
                      Calculate Another Case
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">1 Year</div>
                <p className="text-slate-600">Statute of limitations</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">24/7</div>
                <p className="text-slate-600">Emergency consultations</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">No Fee</div>
                <p className="text-slate-600">Unless we win your case</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default DefamationCompensationCalculator;
