import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, Heart } from 'lucide-react';
import { useCalculatorForm, CalculatorFormData, CalculatorResults } from '@/hooks/useCalculatorForm';
import { FormNavigation } from '@/components/calculator/FormNavigation';
import { Button } from '@/components/ui/button';

interface NursingHomeFormData extends CalculatorFormData {
  abuseType: string;
  facilityType: string;
  injurySeverity: string;
  duration: string;
  victimAge: string;
  medicalCosts: string;
  regulatoryViolations: string;
  facilityResponse: string;
}

const initialFormData: NursingHomeFormData = {
  abuseType: '',
  facilityType: '',
  injurySeverity: '',
  duration: '',
  victimAge: '',
  medicalCosts: '',
  regulatoryViolations: '',
  facilityResponse: ''
};

function calculateCompensation(data: NursingHomeFormData): CalculatorResults {
  let baseAmount = 150000;

  const abuseTypeMultipliers: { [key: string]: number } = {
    physicalAbuse: 3.0,
    sexualAbuse: 4.0,
    neglect: 2.5,
    financialExploitation: 2.0,
    emotionalAbuse: 1.8,
    medicationError: 2.3
  };

  const facilityTypeMultipliers: { [key: string]: number } = {
    nursingHome: 1.5,
    assistedLiving: 1.3,
    memoryCareFacility: 1.6,
    skilledNursing: 1.4
  };

  const injurySeverityMultipliers: { [key: string]: number } = {
    minor: 1.0,
    moderate: 2.0,
    serious: 3.5,
    lifeThreatening: 5.0,
    fatal: 6.0
  };

  const durationMultipliers: { [key: string]: number } = {
    singleIncident: 1.0,
    under3months: 1.3,
    '3-12months': 1.6,
    over12months: 2.0
  };

  const medicalCostMultipliers: { [key: string]: number } = {
    under25k: 1.0,
    '25k-100k': 2.0,
    '100k-250k': 3.0,
    over250k: 4.5
  };

  const regulatoryMultipliers: { [key: string]: number } = {
    multipleViolations: 1.8,
    priorComplaints: 1.6,
    singleViolation: 1.3,
    noViolations: 1.0
  };

  const facilityResponseMultipliers: { [key: string]: number } = {
    coverUp: 2.0,
    inadequateResponse: 1.5,
    appropriateResponse: 1.0
  };

  baseAmount *= abuseTypeMultipliers[data.abuseType] || 1;
  baseAmount *= facilityTypeMultipliers[data.facilityType] || 1;
  baseAmount *= injurySeverityMultipliers[data.injurySeverity] || 1;
  baseAmount *= durationMultipliers[data.duration] || 1;
  baseAmount *= medicalCostMultipliers[data.medicalCosts] || 1;
  baseAmount *= regulatoryMultipliers[data.regulatoryViolations] || 1;
  baseAmount *= facilityResponseMultipliers[data.facilityResponse] || 1;

  const age = parseInt(data.victimAge);
  if (age >= 85) baseAmount *= 1.3;
  else if (age >= 75) baseAmount *= 1.2;

  const min = Math.round(baseAmount * 0.6);
  const max = Math.round(baseAmount * 1.5);

  return { min, max };
}

function validateForm(data: NursingHomeFormData, step: number): boolean {
  if (step === 1) return !!(data.abuseType && data.facilityType && data.injurySeverity && data.duration);
  if (step === 2) return !!(data.victimAge && data.medicalCosts && data.regulatoryViolations && data.facilityResponse);
  return true;
}

const NursingHomeNegligenceCalculator = () => {
  const { step, formData, results, updateField, handleNext, handleBack, resetForm, isStepValid } = 
    useCalculatorForm<NursingHomeFormData>(initialFormData, calculateCompensation, validateForm);

  return (
    <>
      <Helmet>
        <title>Nursing Home Negligence Calculator | Elder Abuse Compensation | Trembach Law</title>
        <meta name="description" content="Calculate nursing home abuse and neglect compensation. Free elder care negligence calculator." />
      </Helmet>

      <main className="min-h-screen bg-background">
        <div className="border-b border-border">
          <div className="container mx-auto px-6 py-4 max-w-5xl">
            <Link to="/calculators" className="inline-flex items-center text-muted-foreground hover:text-foreground no-underline">
              <ArrowLeft size={16} className="mr-2" />
              <span className="text-sm font-medium">Back to All Calculators</span>
            </Link>
          </div>
        </div>

        <section className="pt-20 pb-12 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight leading-[1.1]">
              Nursing Home<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Elder abuse & neglect compensation
            </p>
          </div>
        </section>

        {step < 3 && (
          <section className="py-4 bg-muted/30 border-b border-border">
            <div className="container mx-auto px-6 max-w-5xl">
              <div className="flex items-center justify-center gap-2">
                {[1, 2, 3].map((s) => (
                  <div key={s} className={`h-2 w-16 rounded-full transition-colors ${
                    s === step ? 'bg-primary' : s < step ? 'bg-primary/50' : 'bg-border'
                  }`} />
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-16">
          <div className="container mx-auto px-6 max-w-3xl">
            {step === 1 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Incident Details</h2>
                  <p className="text-muted-foreground">Tell us about the abuse or neglect</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Type of Abuse/Neglect</label>
                    <select value={formData.abuseType} onChange={(e) => updateField('abuseType', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select abuse type</option>
                      <option value="physicalAbuse">Physical Abuse (hitting, restraints)</option>
                      <option value="sexualAbuse">Sexual Abuse/Assault</option>
                      <option value="neglect">Neglect (bedsores, falls, malnutrition)</option>
                      <option value="financialExploitation">Financial Exploitation</option>
                      <option value="emotionalAbuse">Emotional/Psychological Abuse</option>
                      <option value="medicationError">Medication Error/Overdose</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Facility Type</label>
                    <select value={formData.facilityType} onChange={(e) => updateField('facilityType', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select facility type</option>
                      <option value="nursingHome">Nursing Home</option>
                      <option value="assistedLiving">Assisted Living Facility</option>
                      <option value="memoryCareFacility">Memory Care Facility (dementia/Alzheimer's)</option>
                      <option value="skilledNursing">Skilled Nursing Facility</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Injury Severity</label>
                    <select value={formData.injurySeverity} onChange={(e) => updateField('injurySeverity', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select injury severity</option>
                      <option value="minor">Minor (bruising, distress)</option>
                      <option value="moderate">Moderate (infections, fractures)</option>
                      <option value="serious">Serious (severe bedsores, broken bones)</option>
                      <option value="lifeThreatening">Life-Threatening (sepsis, brain injury)</option>
                      <option value="fatal">Fatal (wrongful death)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Duration of Abuse/Neglect</label>
                    <select value={formData.duration} onChange={(e) => updateField('duration', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select duration</option>
                      <option value="singleIncident">Single Incident</option>
                      <option value="under3months">Under 3 months</option>
                      <option value="3-12months">3-12 months</option>
                      <option value="over12months">Over 12 months</option>
                    </select>
                  </div>
                </div>

                <FormNavigation currentStep={step} isValid={isStepValid()} onBack={handleBack} onNext={handleNext} />
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Additional Information</h2>
                  <p className="text-muted-foreground">Victim and facility details</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Victim's Age</label>
                    <select value={formData.victimAge} onChange={(e) => updateField('victimAge', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select age range</option>
                      <option value="70">65-74</option>
                      <option value="80">75-84</option>
                      <option value="90">85 or older</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Medical Costs Incurred</label>
                    <select value={formData.medicalCosts} onChange={(e) => updateField('medicalCosts', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select medical costs</option>
                      <option value="under25k">Under $25,000</option>
                      <option value="25k-100k">$25,000 - $100,000</option>
                      <option value="100k-250k">$100,000 - $250,000</option>
                      <option value="over250k">Over $250,000</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Regulatory Violations</label>
                    <select value={formData.regulatoryViolations} onChange={(e) => updateField('regulatoryViolations', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select violation history</option>
                      <option value="multipleViolations">Multiple State Violations</option>
                      <option value="priorComplaints">Prior Complaints on Record</option>
                      <option value="singleViolation">Single Violation</option>
                      <option value="noViolations">No Known Violations</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Facility Response</label>
                    <select value={formData.facilityResponse} onChange={(e) => updateField('facilityResponse', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select response type</option>
                      <option value="coverUp">Cover-Up Attempt (destroyed records, lied)</option>
                      <option value="inadequateResponse">Inadequate Response (minimal action)</option>
                      <option value="appropriateResponse">Appropriate Response (investigated, corrected)</option>
                    </select>
                  </div>
                </div>

                <FormNavigation currentStep={step} isValid={isStepValid()} onBack={handleBack} onNext={handleNext} />
              </div>
            )}

            {step === 3 && results && (
              <div className="space-y-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
                    <Calculator className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Estimated Compensation</h2>
                  <p className="text-muted-foreground">Based on the nursing home case</p>
                </div>

                <div className="bg-muted/50 rounded-2xl p-8 text-center border border-border">
                  <div className="text-sm font-medium text-muted-foreground mb-2">Estimated Range</div>
                  <div className="text-4xl md:text-5xl font-bold text-foreground">
                    ${results.min.toLocaleString()} - ${results.max.toLocaleString()}
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-4">Nursing Home Compensation Includes:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>
                      <span>Medical expenses and ongoing care</span></li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>
                      <span>Pain, suffering, and emotional distress</span></li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>
                      <span>Loss of quality of life and dignity</span></li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>
                      <span>Punitive damages (for willful neglect)</span></li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>
                      <span>Wrongful death damages (if applicable)</span></li>
                  </ul>
                </div>

                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-3">Important Disclaimer</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This estimate is for informational purposes only. Elder abuse cases vary based on evidence, facility 
                    liability, and state regulations. Outcomes depend on documentation, witness testimony, and abuse severity. 
                    Punitive damages require proof of willful or reckless conduct. Consult an elder abuse attorney.
                  </p>
                </div>

                <div className="text-center pt-4">
                  <Link to="/contact"><Button size="lg" className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white">Get My Free Case Evaluation</Button></Link>
                  <button onClick={resetForm} className="block mx-auto mt-4 text-sm text-muted-foreground hover:text-foreground">
                    Calculate Another Case
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="py-20 bg-muted/30 border-t border-border">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div><div className="text-4xl font-bold text-foreground mb-2">Protected</div>
                <p className="text-muted-foreground">Vulnerable seniors</p></div>
              <div><div className="text-4xl font-bold text-foreground mb-2">Justice</div>
                <p className="text-muted-foreground">For negligence</p></div>
              <div><div className="text-4xl font-bold text-foreground mb-2">No Fee</div>
                <p className="text-muted-foreground">Unless we win</p></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default NursingHomeNegligenceCalculator;
