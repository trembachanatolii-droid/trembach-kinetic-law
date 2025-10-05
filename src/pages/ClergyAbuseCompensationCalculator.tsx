import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, Shield } from 'lucide-react';
import { useCalculatorForm, CalculatorFormData, CalculatorResults } from '@/hooks/useCalculatorForm';
import { FormNavigation } from '@/components/calculator/FormNavigation';
import { Button } from '@/components/ui/button';

interface ClergyAbuseFormData extends CalculatorFormData {
  religiousOrganization: string;
  abuseType: string;
  ageDuringAbuse: string;
  duration: string;
  reportedToAuthority: string;
  organizationKnowledge: string;
  therapyCosts: string;
  lifeImpact: string;
  evidenceStrength: string;
  statuteLimitations: string;
}

const initialFormData: ClergyAbuseFormData = {
  religiousOrganization: '',
  abuseType: '',
  ageDuringAbuse: '',
  duration: '',
  reportedToAuthority: '',
  organizationKnowledge: '',
  therapyCosts: '',
  lifeImpact: '',
  evidenceStrength: '',
  statuteLimitations: ''
};

function calculateCompensation(data: ClergyAbuseFormData): CalculatorResults {
  let min = 100000;
  let max = 500000;
  let multiplier = 1.0;

  // Religious organization multipliers (institutional liability)
  const organizationMultipliers: Record<string, number> = {
    'catholic-diocese': 2.5,
    'protestant-church': 2.0,
    'jewish-synagogue': 2.0,
    'other-religious': 1.8,
    'religious-school': 2.2,
    'youth-ministry': 2.3
  };
  multiplier *= organizationMultipliers[data.religiousOrganization] || 1.0;

  // Abuse type severity
  const abuseMultipliers: Record<string, number> = {
    'inappropriate-contact': 1.5,
    'molestation': 2.5,
    'rape': 3.5,
    'grooming': 1.8,
    'multiple-forms': 3.0
  };
  multiplier *= abuseMultipliers[data.abuseType] || 1.0;

  // Age during abuse (vulnerability factor)
  const ageMultipliers: Record<string, number> = {
    'under-10': 1.8,
    '10-13': 1.6,
    '14-17': 1.4,
    '18-21': 1.2
  };
  multiplier *= ageMultipliers[data.ageDuringAbuse] || 1.0;

  // Duration of abuse
  const durationMultipliers: Record<string, number> = {
    'single-incident': 1.0,
    'weeks-months': 1.5,
    '1-2-years': 2.0,
    'over-2-years': 2.5
  };
  multiplier *= durationMultipliers[data.duration] || 1.0;

  // Reported to authority (documentation strength)
  const reportMultipliers: Record<string, number> = {
    'reported-immediately': 1.3,
    'reported-later': 1.2,
    'not-reported': 1.0
  };
  multiplier *= reportMultipliers[data.reportedToAuthority] || 1.0;

  // Organization knowledge (cover-up increases damages)
  const knowledgeMultipliers: Record<string, number> = {
    'knew-did-nothing': 2.5,
    'knew-transferred': 2.8,
    'suspected-ignored': 2.2,
    'no-knowledge': 1.0
  };
  multiplier *= knowledgeMultipliers[data.organizationKnowledge] || 1.0;

  // Therapy and treatment costs
  const therapyAdditions: Record<string, number> = {
    'none': 0,
    'under-10k': 20000,
    '10k-50k': 100000,
    '50k-100k': 200000,
    'over-100k': 400000
  };
  const therapyBase = therapyAdditions[data.therapyCosts] || 0;
  min += therapyBase * 0.5;
  max += therapyBase * 2.0;

  // Life impact severity
  const impactMultipliers: Record<string, number> = {
    'mild': 1.2,
    'moderate': 1.8,
    'severe': 2.5,
    'devastating': 3.5
  };
  multiplier *= impactMultipliers[data.lifeImpact] || 1.0;

  // Evidence strength
  const evidenceMultipliers: Record<string, number> = {
    'strong-corroboration': 1.5,
    'witness-testimony': 1.3,
    'victim-testimony-only': 1.0,
    'weak': 0.7
  };
  multiplier *= evidenceMultipliers[data.evidenceStrength] || 1.0;

  // Statute of limitations consideration
  const statuteMultipliers: Record<string, number> = {
    'within-statute': 1.3,
    'recent-extension': 1.2,
    'reviver-window': 1.1,
    'expired': 0.5
  };
  multiplier *= statuteMultipliers[data.statuteLimitations] || 1.0;

  min = Math.round(min * multiplier);
  max = Math.round(max * multiplier);

  // Floor for clergy abuse cases
  min = Math.max(min, 50000);
  max = Math.max(max, 150000);

  return { min, max };
}

function validateForm(data: ClergyAbuseFormData, step: number): boolean {
  if (step === 1) {
    return !!(
      data.religiousOrganization &&
      data.abuseType &&
      data.ageDuringAbuse &&
      data.duration
    );
  }
  if (step === 2) {
    return !!(
      data.reportedToAuthority &&
      data.organizationKnowledge &&
      data.therapyCosts &&
      data.lifeImpact &&
      data.evidenceStrength &&
      data.statuteLimitations
    );
  }
  return true;
}

const ClergyAbuseCompensationCalculator = () => {
  const {
    step,
    formData,
    results,
    updateField,
    handleNext,
    handleBack,
    resetForm,
    isStepValid
  } = useCalculatorForm<ClergyAbuseFormData>(
    initialFormData,
    calculateCompensation,
    validateForm
  );

  const renderStep1 = () => (
    <div className="space-y-8">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          What type of religious organization was involved?
        </label>
        <select
          value={formData.religiousOrganization}
          onChange={(e) => updateField('religiousOrganization', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        >
          <option value="">Select organization type</option>
          <option value="catholic-diocese">Catholic Diocese/Parish</option>
          <option value="protestant-church">Protestant Church</option>
          <option value="jewish-synagogue">Jewish Synagogue</option>
          <option value="other-religious">Other Religious Organization</option>
          <option value="religious-school">Religious School</option>
          <option value="youth-ministry">Youth Ministry/Camp</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          What type of abuse occurred?
        </label>
        <select
          value={formData.abuseType}
          onChange={(e) => updateField('abuseType', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        >
          <option value="">Select abuse type</option>
          <option value="inappropriate-contact">Inappropriate Contact</option>
          <option value="molestation">Molestation</option>
          <option value="rape">Rape/Sexual Assault</option>
          <option value="grooming">Grooming Behavior</option>
          <option value="multiple-forms">Multiple Forms of Abuse</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          How old were you when the abuse occurred?
        </label>
        <select
          value={formData.ageDuringAbuse}
          onChange={(e) => updateField('ageDuringAbuse', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        >
          <option value="">Select age range</option>
          <option value="under-10">Under 10 years old</option>
          <option value="10-13">10-13 years old</option>
          <option value="14-17">14-17 years old</option>
          <option value="18-21">18-21 years old</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          How long did the abuse continue?
        </label>
        <select
          value={formData.duration}
          onChange={(e) => updateField('duration', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        >
          <option value="">Select duration</option>
          <option value="single-incident">Single Incident</option>
          <option value="weeks-months">Several Weeks to Months</option>
          <option value="1-2-years">1-2 Years</option>
          <option value="over-2-years">Over 2 Years</option>
        </select>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-8">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          Was the abuse reported to authorities?
        </label>
        <select
          value={formData.reportedToAuthority}
          onChange={(e) => updateField('reportedToAuthority', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        >
          <option value="">Select reporting status</option>
          <option value="reported-immediately">Reported Shortly After</option>
          <option value="reported-later">Reported Years Later</option>
          <option value="not-reported">Never Reported to Police</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          Did the religious organization know about the abuse?
        </label>
        <select
          value={formData.organizationKnowledge}
          onChange={(e) => updateField('organizationKnowledge', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        >
          <option value="">Select knowledge level</option>
          <option value="knew-did-nothing">Knew and Did Nothing</option>
          <option value="knew-transferred">Knew and Just Transferred Abuser</option>
          <option value="suspected-ignored">Suspected but Ignored</option>
          <option value="no-knowledge">No Prior Knowledge</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          What are your total therapy and treatment costs?
        </label>
        <select
          value={formData.therapyCosts}
          onChange={(e) => updateField('therapyCosts', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        >
          <option value="">Select therapy costs</option>
          <option value="none">None Yet</option>
          <option value="under-10k">Under $10,000</option>
          <option value="10k-50k">$10,000 - $50,000</option>
          <option value="50k-100k">$50,000 - $100,000</option>
          <option value="over-100k">Over $100,000</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          How has this abuse impacted your life?
        </label>
        <select
          value={formData.lifeImpact}
          onChange={(e) => updateField('lifeImpact', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        >
          <option value="">Select life impact</option>
          <option value="mild">Mild (managed with some difficulty)</option>
          <option value="moderate">Moderate (affects relationships, work)</option>
          <option value="severe">Severe (major life disruption)</option>
          <option value="devastating">Devastating (profound ongoing trauma)</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          How strong is your evidence?
        </label>
        <select
          value={formData.evidenceStrength}
          onChange={(e) => updateField('evidenceStrength', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        >
          <option value="">Select evidence strength</option>
          <option value="strong-corroboration">Strong (documents, witnesses, similar victims)</option>
          <option value="witness-testimony">Witness Testimony Available</option>
          <option value="victim-testimony-only">Victim Testimony Only</option>
          <option value="weak">Limited Evidence</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          What is your statute of limitations status?
        </label>
        <select
          value={formData.statuteLimitations}
          onChange={(e) => updateField('statuteLimitations', e.target.value)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        >
          <option value="">Select statute status</option>
          <option value="within-statute">Within Current Statute</option>
          <option value="recent-extension">Recent Statute Extension</option>
          <option value="reviver-window">Reviver Window Open</option>
          <option value="expired">Statute Expired (may still qualify)</option>
        </select>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8">
        <div className="text-center mb-8">
          <Calculator className="w-16 h-16 mx-auto mb-4 text-slate-900" />
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Estimated Compensation Range
          </h2>
          <p className="text-slate-600">Based on clergy abuse claim details</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="text-sm font-medium text-slate-600 mb-2">Minimum Estimate</div>
            <div className="text-4xl font-bold text-slate-900">
              ${results?.min.toLocaleString()}
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="text-sm font-medium text-slate-600 mb-2">Maximum Estimate</div>
            <div className="text-4xl font-bold text-slate-900">
              ${results?.max.toLocaleString()}
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
          <h3 className="font-semibold text-amber-900 mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Confidential & Important Disclaimer
          </h3>
          <div className="text-sm text-amber-800 space-y-2">
            <p>
              <strong>Your privacy is paramount.</strong> Clergy abuse cases are handled with
              utmost confidentiality. This estimate is based on general factors for institutional
              liability cases involving religious organizations.
            </p>
            <p>Actual compensation depends on:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Specific evidence and documentation available</li>
              <li>Whether organization knew or should have known</li>
              <li>Pattern of similar abuse (multiple victims strengthen cases)</li>
              <li>State statute of limitations and reviver windows</li>
              <li>Organization's assets and insurance coverage</li>
              <li>Bankruptcy status of religious organization</li>
              <li>Strength of institutional cover-up evidence</li>
            </ul>
            <p className="font-medium mt-3">
              Many states have extended statutes of limitations for childhood sexual abuse.
              Even if you believe your case is too old, recent law changes may give you
              the right to pursue justice. Contact an attorney who specializes in clergy
              abuse cases for a confidential evaluation.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-slate-900">Clergy Abuse Claims May Include:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-50 rounded-lg p-4">
              <div className="font-medium text-slate-900 mb-1">Institutional Liability</div>
              <div className="text-sm text-slate-600">Church/organization responsibility</div>
            </div>
            <div className="bg-slate-50 rounded-lg p-4">
              <div className="font-medium text-slate-900 mb-1">Therapy & Treatment</div>
              <div className="text-sm text-slate-600">Past and future counseling costs</div>
            </div>
            <div className="bg-slate-50 rounded-lg p-4">
              <div className="font-medium text-slate-900 mb-1">Pain & Suffering</div>
              <div className="text-sm text-slate-600">Emotional trauma and PTSD</div>
            </div>
            <div className="bg-slate-50 rounded-lg p-4">
              <div className="font-medium text-slate-900 mb-1">Punitive Damages</div>
              <div className="text-sm text-slate-600">If cover-up or pattern proven</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Confidential Case Review Available</h3>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
          Speak with an attorney who specializes in clergy abuse cases. Your conversation
          is completely confidential. Many cases are handled on contingency - no fee unless
          we win. Recent law changes may give you new rights to pursue justice.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Confidential Consultation
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={resetForm}
            className="text-lg px-8 border-white text-white hover:bg-white hover:text-slate-900"
          >
            Calculate Again
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Clergy Abuse Calculator | Religious Organization Liability | Trembach Law</title>
        <meta
          name="description"
          content="Confidential clergy abuse compensation calculator. Estimate claims against religious organizations. Statute of limitations extended in many states."
        />
      </Helmet>

      <main className="min-h-screen bg-white">
        <div className="border-b border-slate-200">
          <div className="container mx-auto px-6 py-4 max-w-5xl">
            <Link
              to="/calculators"
              className="inline-flex items-center text-slate-600 hover:text-slate-900 visited:text-slate-600 no-underline"
            >
              <ArrowLeft size={16} className="mr-2" />
              <span className="text-sm font-medium">Back to All Calculators</span>
            </Link>
          </div>
        </div>

        <section className="pt-20 pb-12 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight leading-[1.1]">
              Clergy Abuse<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light">
              Confidential institutional liability claims
            </p>
          </div>
        </section>

        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">$500K+</div>
                <p className="text-slate-600">Average settlements</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">Extended</div>
                <p className="text-slate-600">Statute windows</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">Confidential</div>
                <p className="text-slate-600">100% privacy</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="mb-12">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      step >= 1 ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-400'
                    }`}
                  >
                    1
                  </div>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      step >= 2 ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-400'
                    }`}
                  >
                    2
                  </div>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      step >= 3 ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-400'
                    }`}
                  >
                    3
                  </div>
                </div>
                <div className="text-sm font-medium text-slate-600">
                  Step {step} of 3
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
              {step === 1 && (
                <>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Abuse Details</h2>
                  {renderStep1()}
                </>
              )}

              {step === 2 && (
                <>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Evidence & Impact</h2>
                  {renderStep2()}
                </>
              )}

              {step === 3 && renderStep3()}

              {step < 3 && (
                <FormNavigation
                  currentStep={step}
                  totalSteps={3}
                  isValid={isStepValid()}
                  onBack={handleBack}
                  onNext={handleNext}
                />
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ClergyAbuseCompensationCalculator;
