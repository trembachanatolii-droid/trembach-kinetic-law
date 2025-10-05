import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertCircle, Shield } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useCalculatorForm, CalculatorFormData, CalculatorResults } from '@/hooks/useCalculatorForm';
import { FormNavigation } from '@/components/calculator/FormNavigation';

interface SexualAbuseFormData extends CalculatorFormData {
  abuseType: string;
  institution: string;
  duration: string;
  ageAtAbuse: string;
  therapyCosts: string;
  lifeImpact: string;
  reporting: string;
  evidence: string;
  [key: string]: string;
}

const initialFormData: SexualAbuseFormData = {
  abuseType: '',
  institution: '',
  duration: '',
  ageAtAbuse: '',
  therapyCosts: '',
  lifeImpact: '',
  reporting: '',
  evidence: ''
};

function calculateSexualAbuseCompensation(data: SexualAbuseFormData): CalculatorResults {
  let baseMin = 150000;
  let baseMax = 500000;

  // Abuse type severity
  const abuseMultipliers: Record<string, number> = {
    'single-incident': 2.0,
    'multiple-incidents': 3.0,
    'prolonged': 4.0,
    'severe-assault': 3.5
  };
  baseMin *= abuseMultipliers[data.abuseType] || 1;
  baseMax *= abuseMultipliers[data.abuseType] || 1;

  // Institution liability (higher for organizations with duty of care)
  const institutionMultipliers: Record<string, number> = {
    'religious': 3.0,
    'school': 2.8,
    'care-facility': 2.9,
    'sports-org': 2.5,
    'workplace': 2.3,
    'family-friend': 1.5,
    'stranger': 1.8
  };
  baseMin *= institutionMultipliers[data.institution] || 1;
  baseMax *= institutionMultipliers[data.institution] || 1;

  // Duration impact
  const durationMultipliers: Record<string, number> = {
    'single': 1.0,
    'weeks': 1.5,
    'months': 2.0,
    'years': 2.8,
    'ongoing': 3.0
  };
  baseMin *= durationMultipliers[data.duration] || 1;
  baseMax *= durationMultipliers[data.duration] || 1;

  // Age at abuse (younger = more impactful)
  const ageMultipliers: Record<string, number> = {
    'under-12': 2.5,
    '12-17': 2.2,
    '18-25': 1.8,
    '26-plus': 1.5
  };
  baseMin *= ageMultipliers[data.ageAtAbuse] || 1;
  baseMax *= ageMultipliers[data.ageAtAbuse] || 1;

  // Therapy and treatment costs
  const therapyAdds: Record<string, number> = {
    'minimal': 25000,
    'moderate': 75000,
    'extensive': 150000,
    'ongoing': 250000
  };
  const therapyAdd = therapyAdds[data.therapyCosts] || 0;
  baseMin += therapyAdd;
  baseMax += therapyAdd * 2;

  // Life impact severity
  const impactMultipliers: Record<string, number> = {
    'minor': 1.2,
    'moderate': 1.8,
    'severe': 2.5,
    'catastrophic': 3.5
  };
  baseMin *= impactMultipliers[data.lifeImpact] || 1;
  baseMax *= impactMultipliers[data.lifeImpact] || 1;

  // Reporting and evidence strength
  const reportingMultipliers: Record<string, number> = {
    'immediate': 1.3,
    'delayed-reported': 1.1,
    'never-reported': 0.9
  };
  baseMin *= reportingMultipliers[data.reporting] || 1;
  baseMax *= reportingMultipliers[data.reporting] || 1;

  const evidenceMultipliers: Record<string, number> = {
    'strong': 1.4,
    'moderate': 1.2,
    'limited': 1.0,
    'testimony-only': 0.9
  };
  baseMin *= evidenceMultipliers[data.evidence] || 1;
  baseMax *= evidenceMultipliers[data.evidence] || 1;

  return {
    min: Math.round(baseMin),
    max: Math.round(baseMax)
  };
}

function validateSexualAbuseForm(data: SexualAbuseFormData, step: number): boolean {
  if (step === 1) {
    return !!(data.abuseType && data.institution && data.duration);
  }
  if (step === 2) {
    return !!(data.ageAtAbuse && data.therapyCosts && data.lifeImpact && data.reporting && data.evidence);
  }
  return true;
}

const SexualAbuseCalculator = () => {
  const {
    step,
    formData,
    results,
    updateField,
    handleNext,
    handleBack,
    resetForm,
    isStepValid
  } = useCalculatorForm<SexualAbuseFormData>(
    initialFormData,
    calculateSexualAbuseCompensation,
    validateSexualAbuseForm
  );

  return (
    <>
      <Helmet>
        <title>Sexual Abuse Calculator | Confidential Compensation Estimate | Trembach Law</title>
        <meta name="description" content="Confidential sexual abuse compensation calculator. Free, private estimates for institutional abuse cases." />
      </Helmet>

      <main className="min-h-screen bg-white">
        <div className="border-b border-slate-200">
          <div className="container mx-auto px-6 py-4 max-w-5xl">
            <Link to="/calculators" className="inline-flex items-center text-slate-600 hover:text-slate-900 visited:text-slate-600 no-underline">
              <ArrowLeft size={16} className="mr-2" />
              <span className="text-sm font-medium">Back to All Calculators</span>
            </Link>
          </div>
        </div>

        <section className="pt-20 pb-12 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <div className="flex justify-center mb-4">
              <Shield className="w-16 h-16 text-slate-600" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight leading-[1.1]">
              Sexual Abuse<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light mb-4">
              Confidential. Safe. Supportive.
            </p>
            <p className="text-base text-slate-500 max-w-2xl mx-auto">
              This calculator provides confidential compensation estimates. All information is private and secure.
            </p>
          </div>
        </section>

        <div className="border-b border-slate-200">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="flex justify-center items-center py-8 space-x-4">
              {[1, 2, 3].map((num) => (
                <React.Fragment key={num}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${step >= num ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-400'}`}>
                    {num}
                  </div>
                  {num < 3 && <div className={`w-16 h-1 rounded-full ${step > num ? 'bg-slate-900' : 'bg-slate-200'}`} />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {step === 1 && (
          <section className="py-20">
            <div className="container mx-auto px-6 max-w-2xl">
              <h2 className="text-3xl font-bold text-black mb-8">Abuse Information</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Type of Abuse</label>
                  <Select value={formData.abuseType} onValueChange={(value) => updateField('abuseType', value)}>
                    <SelectTrigger className="w-full h-14 text-base">
                      <SelectValue placeholder="Select abuse type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single-incident">Single Incident</SelectItem>
                      <SelectItem value="multiple-incidents">Multiple Incidents</SelectItem>
                      <SelectItem value="prolonged">Prolonged Abuse (Months/Years)</SelectItem>
                      <SelectItem value="severe-assault">Severe Sexual Assault</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Where Abuse Occurred</label>
                  <Select value={formData.institution} onValueChange={(value) => updateField('institution', value)}>
                    <SelectTrigger className="w-full h-14 text-base">
                      <SelectValue placeholder="Select location/institution" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="religious">Religious Institution (Church, Synagogue, etc.)</SelectItem>
                      <SelectItem value="school">School/Educational Institution</SelectItem>
                      <SelectItem value="care-facility">Care Facility (Foster, Group Home)</SelectItem>
                      <SelectItem value="sports-org">Sports Organization/Team</SelectItem>
                      <SelectItem value="workplace">Workplace</SelectItem>
                      <SelectItem value="family-friend">Family Member/Trusted Person</SelectItem>
                      <SelectItem value="stranger">Stranger/Unknown Person</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Duration of Abuse</label>
                  <Select value={formData.duration} onValueChange={(value) => updateField('duration', value)}>
                    <SelectTrigger className="w-full h-14 text-base">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single">Single Occurrence</SelectItem>
                      <SelectItem value="weeks">Weeks</SelectItem>
                      <SelectItem value="months">Months</SelectItem>
                      <SelectItem value="years">Years</SelectItem>
                      <SelectItem value="ongoing">Ongoing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <FormNavigation
                currentStep={step}
                isValid={isStepValid()}
                onBack={handleBack}
                onNext={handleNext}
              />
            </div>
          </section>
        )}

        {step === 2 && (
          <section className="py-20">
            <div className="container mx-auto px-6 max-w-2xl">
              <h2 className="text-3xl font-bold text-black mb-8">Impact & Evidence</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Age at Time of Abuse</label>
                  <Select value={formData.ageAtAbuse} onValueChange={(value) => updateField('ageAtAbuse', value)}>
                    <SelectTrigger className="w-full h-14 text-base">
                      <SelectValue placeholder="Select age range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-12">Under 12 years old</SelectItem>
                      <SelectItem value="12-17">12-17 years old</SelectItem>
                      <SelectItem value="18-25">18-25 years old</SelectItem>
                      <SelectItem value="26-plus">26+ years old</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Therapy & Treatment Required</label>
                  <Select value={formData.therapyCosts} onValueChange={(value) => updateField('therapyCosts', value)}>
                    <SelectTrigger className="w-full h-14 text-base">
                      <SelectValue placeholder="Select treatment level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="minimal">Minimal (Short-term counseling)</SelectItem>
                      <SelectItem value="moderate">Moderate (Regular therapy)</SelectItem>
                      <SelectItem value="extensive">Extensive (Intensive treatment)</SelectItem>
                      <SelectItem value="ongoing">Ongoing (Long-term/Lifetime care)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Impact on Life</label>
                  <Select value={formData.lifeImpact} onValueChange={(value) => updateField('lifeImpact', value)}>
                    <SelectTrigger className="w-full h-14 text-base">
                      <SelectValue placeholder="Select impact severity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="minor">Minor (Some distress)</SelectItem>
                      <SelectItem value="moderate">Moderate (Affects relationships/work)</SelectItem>
                      <SelectItem value="severe">Severe (PTSD, depression, anxiety)</SelectItem>
                      <SelectItem value="catastrophic">Catastrophic (Inability to function)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Reporting Status</label>
                  <Select value={formData.reporting} onValueChange={(value) => updateField('reporting', value)}>
                    <SelectTrigger className="w-full h-14 text-base">
                      <SelectValue placeholder="Select reporting status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Reported Immediately</SelectItem>
                      <SelectItem value="delayed-reported">Reported After Delay</SelectItem>
                      <SelectItem value="never-reported">Never Officially Reported</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Evidence Strength</label>
                  <Select value={formData.evidence} onValueChange={(value) => updateField('evidence', value)}>
                    <SelectTrigger className="w-full h-14 text-base">
                      <SelectValue placeholder="Select evidence level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="strong">Strong (Physical evidence, witnesses)</SelectItem>
                      <SelectItem value="moderate">Moderate (Documentation, corroboration)</SelectItem>
                      <SelectItem value="limited">Limited (Some supporting evidence)</SelectItem>
                      <SelectItem value="testimony-only">Testimony Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <FormNavigation
                currentStep={step}
                isValid={isStepValid()}
                onBack={handleBack}
                onNext={handleNext}
              />
            </div>
          </section>
        )}

        {step === 3 && results && (
          <section className="py-20">
            <div className="container mx-auto px-6 max-w-2xl">
              <div className="bg-slate-50 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-black mb-6">Estimated Compensation Range</h2>
                <div className="bg-white rounded-xl p-6 mb-4">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-slate-600">Low Estimate</span>
                    <span className="text-3xl font-bold text-slate-900">${results.min.toLocaleString()}</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full mb-4">
                    <div className="h-full bg-slate-900 rounded-full" style={{ width: '40%' }} />
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-slate-600">High Estimate</span>
                    <span className="text-3xl font-bold text-slate-900">${results.max.toLocaleString()}</span>
                  </div>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mt-6">
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-sm font-semibold text-amber-900 mb-1">Important Disclaimer</h3>
                      <p className="text-sm text-amber-800 leading-relaxed">
                        This estimate is for informational purposes only and does not constitute legal advice. Actual compensation depends on specific case factors including institutional liability, statute of limitations, evidence quality, and individual circumstances. California law provides extended filing periods for childhood sexual abuse cases. Every case is unique and requires confidential professional evaluation. All communications are protected and confidential.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Link
                  to="/contact"
                  className="block w-full bg-slate-900 text-white py-4 px-6 rounded-xl font-semibold hover:bg-slate-800 transition-all text-center no-underline"
                >
                  Confidential Case Review
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={resetForm}
                  className="w-full h-14"
                >
                  Start New Calculation
                </Button>
              </div>
            </div>
          </section>
        )}

        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">$1M+</div>
                <p className="text-slate-600">Potential compensation</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">Confidential</div>
                <p className="text-slate-600">Complete privacy</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">No Fee</div>
                <p className="text-slate-600">Unless we win</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SexualAbuseCalculator;
