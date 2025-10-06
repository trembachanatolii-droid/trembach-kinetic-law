import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useCalculatorForm, CalculatorFormData, CalculatorResults } from '@/hooks/useCalculatorForm';
import { FormNavigation } from '@/components/calculator/FormNavigation';

interface ElderAbuseFormData extends CalculatorFormData {
  abuseType: string;
  facilityType: string;
  severity: string;
  injuries: string;
  medicalCosts: string;
  duration: string;
  age: string;
  punitive: string;
  [key: string]: string;
}

const initialFormData: ElderAbuseFormData = {
  abuseType: '',
  facilityType: '',
  severity: '',
  injuries: '',
  medicalCosts: '',
  duration: '',
  age: '',
  punitive: ''
};

function calculateElderAbuseCompensation(data: ElderAbuseFormData): CalculatorResults {
  let baseMin = 75000;
  let baseMax = 250000;

  // Abuse type multipliers
  const abuseMultipliers: Record<string, number> = {
    'physical': 3.0,
    'sexual': 4.5,
    'emotional': 2.0,
    'financial': 2.5,
    'neglect': 3.5,
    'multiple': 4.0
  };
  baseMin *= abuseMultipliers[data.abuseType] || 1;
  baseMax *= abuseMultipliers[data.abuseType] || 1;

  // Facility type impact (corporate entities = higher punitive)
  const facilityMultipliers: Record<string, number> = {
    'nursing-home': 1.4,
    'assisted-living': 1.3,
    'memory-care': 1.5,
    'home-health': 1.1,
    'hospital': 1.2
  };
  baseMin *= facilityMultipliers[data.facilityType] || 1;
  baseMax *= facilityMultipliers[data.facilityType] || 1;

  // Severity of harm
  const severityMultipliers: Record<string, number> = {
    'minor': 1.0,
    'moderate': 1.8,
    'severe': 2.5,
    'catastrophic': 3.5,
    'death': 4.0
  };
  baseMin *= severityMultipliers[data.severity] || 1;
  baseMax *= severityMultipliers[data.severity] || 1;

  // Type of injuries
  const injuryMultipliers: Record<string, number> = {
    'bedsores': 1.5,
    'malnutrition': 1.4,
    'falls': 1.6,
    'medication-errors': 1.8,
    'infection': 1.7,
    'broken-bones': 2.0
  };
  baseMin *= injuryMultipliers[data.injuries] || 1;
  baseMax *= injuryMultipliers[data.injuries] || 1;

  // Medical costs
  const medicalCostAdds: Record<string, number> = {
    'under-10k': 15000,
    '10k-50k': 60000,
    '50k-100k': 120000,
    '100k-250k': 200000,
    'over-250k': 350000
  };
  const medicalAdd = medicalCostAdds[data.medicalCosts] || 0;
  baseMin += medicalAdd;
  baseMax += medicalAdd * 2;

  // Duration of abuse
  const durationMultipliers: Record<string, number> = {
    'days': 1.0,
    'weeks': 1.3,
    '1-3-months': 1.6,
    '3-6-months': 2.0,
    '6-12-months': 2.5,
    'over-year': 3.0
  };
  baseMin *= durationMultipliers[data.duration] || 1;
  baseMax *= durationMultipliers[data.duration] || 1;

  // Age factor (elderly more vulnerable)
  const ageMultipliers: Record<string, number> = {
    '65-74': 1.1,
    '75-84': 1.3,
    '85-plus': 1.5
  };
  baseMin *= ageMultipliers[data.age] || 1;
  baseMax *= ageMultipliers[data.age] || 1;

  // Punitive damages potential
  const punitiveAdds: Record<string, number> = {
    'none': 0,
    'possible': 100000,
    'likely': 250000,
    'strong': 500000
  };
  const punitiveAdd = punitiveAdds[data.punitive] || 0;
  baseMin += punitiveAdd * 0.5;
  baseMax += punitiveAdd * 2;

  return {
    min: Math.round(baseMin),
    max: Math.round(baseMax)
  };
}

function validateElderAbuseForm(data: ElderAbuseFormData, step: number): boolean {
  if (step === 1) {
    return !!(data.abuseType && data.facilityType && data.severity);
  }
  if (step === 2) {
    return !!(data.injuries && data.medicalCosts && data.duration && data.age && data.punitive);
  }
  return true;
}

const ElderAbuseCalculator = () => {
  const {
    step,
    formData,
    results,
    updateField,
    handleNext,
    handleBack,
    resetForm,
    isStepValid
  } = useCalculatorForm<ElderAbuseFormData>(
    initialFormData,
    calculateElderAbuseCompensation,
    validateElderAbuseForm
  );

  return (
    <>
      <Helmet>
        <title>Elder Abuse Calculator | Nursing Home Neglect Compensation | Trembach Law</title>
        <meta name="description" content="Calculate elder abuse compensation for nursing home neglect and mistreatment. Free, confidential estimates for family members." />
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
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight leading-[1.1]">
              Elder Abuse<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light">
              Nursing home neglect compensation
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
              <h2 className="text-3xl font-bold text-black mb-8">Abuse Details</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Type of Abuse</label>
                  <Select value={formData.abuseType} onValueChange={(value) => updateField('abuseType', value)}>
                    <SelectTrigger className="w-full h-14 text-base">
                      <SelectValue placeholder="Select abuse type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="physical">Physical Abuse</SelectItem>
                      <SelectItem value="sexual">Sexual Abuse</SelectItem>
                      <SelectItem value="emotional">Emotional/Psychological Abuse</SelectItem>
                      <SelectItem value="financial">Financial Exploitation</SelectItem>
                      <SelectItem value="neglect">Neglect (Food, Water, Hygiene)</SelectItem>
                      <SelectItem value="multiple">Multiple Types of Abuse</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Facility Type</label>
                  <Select value={formData.facilityType} onValueChange={(value) => updateField('facilityType', value)}>
                    <SelectTrigger className="w-full h-14 text-base">
                      <SelectValue placeholder="Select facility type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nursing-home">Nursing Home</SelectItem>
                      <SelectItem value="assisted-living">Assisted Living Facility</SelectItem>
                      <SelectItem value="memory-care">Memory Care Unit</SelectItem>
                      <SelectItem value="home-health">Home Health Care</SelectItem>
                      <SelectItem value="hospital">Hospital/Rehabilitation Center</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Severity of Harm</label>
                  <Select value={formData.severity} onValueChange={(value) => updateField('severity', value)}>
                    <SelectTrigger className="w-full h-14 text-base">
                      <SelectValue placeholder="Select severity level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="minor">Minor (Temporary discomfort)</SelectItem>
                      <SelectItem value="moderate">Moderate (Medical treatment required)</SelectItem>
                      <SelectItem value="severe">Severe (Hospitalization required)</SelectItem>
                      <SelectItem value="catastrophic">Catastrophic (Permanent disability)</SelectItem>
                      <SelectItem value="death">Wrongful Death</SelectItem>
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
              <h2 className="text-3xl font-bold text-black mb-8">Injury & Duration Details</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Type of Injuries</label>
                  <Select value={formData.injuries} onValueChange={(value) => updateField('injuries', value)}>
                    <SelectTrigger className="w-full h-14 text-base">
                      <SelectValue placeholder="Select primary injury type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bedsores">Bedsores/Pressure Ulcers</SelectItem>
                      <SelectItem value="malnutrition">Malnutrition/Dehydration</SelectItem>
                      <SelectItem value="falls">Falls/Fractures</SelectItem>
                      <SelectItem value="medication-errors">Medication Errors</SelectItem>
                      <SelectItem value="infection">Infection/Sepsis</SelectItem>
                      <SelectItem value="broken-bones">Broken Bones/Hip Fracture</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Medical Costs Incurred</label>
                  <Select value={formData.medicalCosts} onValueChange={(value) => updateField('medicalCosts', value)}>
                    <SelectTrigger className="w-full h-14 text-base">
                      <SelectValue placeholder="Select medical cost range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-10k">Under $10,000</SelectItem>
                      <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                      <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                      <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                      <SelectItem value="over-250k">Over $250,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Duration of Abuse</label>
                  <Select value={formData.duration} onValueChange={(value) => updateField('duration', value)}>
                    <SelectTrigger className="w-full h-14 text-base">
                      <SelectValue placeholder="Select abuse duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="days">Days</SelectItem>
                      <SelectItem value="weeks">Weeks</SelectItem>
                      <SelectItem value="1-3-months">1-3 Months</SelectItem>
                      <SelectItem value="3-6-months">3-6 Months</SelectItem>
                      <SelectItem value="6-12-months">6-12 Months</SelectItem>
                      <SelectItem value="over-year">Over 1 Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Age of Victim</label>
                  <Select value={formData.age} onValueChange={(value) => updateField('age', value)}>
                    <SelectTrigger className="w-full h-14 text-base">
                      <SelectValue placeholder="Select age range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="65-74">65-74 years old</SelectItem>
                      <SelectItem value="75-84">75-84 years old</SelectItem>
                      <SelectItem value="85-plus">85+ years old</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Evidence of Punitive Conduct</label>
                  <Select value={formData.punitive} onValueChange={(value) => updateField('punitive', value)}>
                    <SelectTrigger className="w-full h-14 text-base">
                      <SelectValue placeholder="Select punitive damages likelihood" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No Evidence</SelectItem>
                      <SelectItem value="possible">Possible (Single incident)</SelectItem>
                      <SelectItem value="likely">Likely (Repeated violations)</SelectItem>
                      <SelectItem value="strong">Strong (Systemic neglect/cover-up)</SelectItem>
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
                        This estimate is for informational purposes only and does not constitute legal advice. Actual compensation depends on specific case factors including evidence quality, facility history, punitive damages eligibility, and individual circumstances. California elder abuse law provides enhanced remedies including attorney fees. Every case is unique and requires professional evaluation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Link
                  to="/free-consultation"
                  className="block w-full bg-slate-900 text-white py-4 px-6 rounded-xl font-semibold hover:bg-slate-800 transition-all text-center no-underline"
                >
                  Get Urgent Case Review
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
                <div className="text-4xl font-bold text-slate-900 mb-2">$500K+</div>
                <p className="text-slate-600">Average abuse settlement</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">24/7</div>
                <p className="text-slate-600">Urgent response available</p>
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

export default ElderAbuseCalculator;
