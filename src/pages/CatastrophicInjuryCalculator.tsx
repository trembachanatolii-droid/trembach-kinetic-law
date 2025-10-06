import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, AlertTriangle } from 'lucide-react';
import { useCalculatorForm, CalculatorFormData, CalculatorResults } from '@/hooks/useCalculatorForm';
import { FormNavigation } from '@/components/calculator/FormNavigation';
import { Button } from '@/components/ui/button';

interface CatastrophicFormData extends CalculatorFormData {
  injuryType: string;
  causeOfInjury: string;
  age: string;
  liabilityStrength: string;
  lifetimeCareNeeds: string;
  cognitiveImpairment: string;
  employmentImpact: string;
  homeModifications: string;
}

const initialFormData: CatastrophicFormData = {
  injuryType: '',
  causeOfInjury: '',
  age: '',
  liabilityStrength: '',
  lifetimeCareNeeds: '',
  cognitiveImpairment: '',
  employmentImpact: '',
  homeModifications: ''
};

function calculateCompensation(data: CatastrophicFormData): CalculatorResults {
  let baseAmount = 5000000;

  const injuryTypeMultipliers: { [key: string]: number } = {
    quadriplegia: 3.0,
    paraplegia: 2.5,
    severeTBI: 2.8,
    multipleAmputations: 2.6,
    severeBurns: 2.4,
    blindnessDeafness: 2.2,
    organFailure: 2.5
  };

  const causeMultipliers: { [key: string]: number } = {
    medicalMalpractice: 1.4,
    carAccident: 1.2,
    workplaceAccident: 1.3,
    defectiveProduct: 1.5,
    criminalAct: 1.6
  };

  const liabilityMultipliers: { [key: string]: number } = {
    clear: 1.5,
    strong: 1.3,
    moderate: 1.0,
    disputed: 0.8
  };

  const lifetimeCareMultipliers: { [key: string]: number } = {
    fullTimeNursing: 2.0,
    partTimeCare: 1.5,
    minimalAssistance: 1.2,
    independent: 1.0
  };

  const cognitiveMultipliers: { [key: string]: number } = {
    severe: 1.6,
    moderate: 1.4,
    mild: 1.2,
    none: 1.0
  };

  const employmentMultipliers: { [key: string]: number } = {
    totalDisability: 1.8,
    cannotWorkField: 1.5,
    reducedCapacity: 1.3,
    minimalImpact: 1.0
  };

  const homeModificationMultipliers: { [key: string]: number } = {
    extensive: 1.3,
    moderate: 1.2,
    minimal: 1.1,
    none: 1.0
  };

  baseAmount *= injuryTypeMultipliers[data.injuryType] || 1;
  baseAmount *= causeMultipliers[data.causeOfInjury] || 1;
  baseAmount *= liabilityMultipliers[data.liabilityStrength] || 1;
  baseAmount *= lifetimeCareMultipliers[data.lifetimeCareNeeds] || 1;
  baseAmount *= cognitiveMultipliers[data.cognitiveImpairment] || 1;
  baseAmount *= employmentMultipliers[data.employmentImpact] || 1;
  baseAmount *= homeModificationMultipliers[data.homeModifications] || 1;

  const age = parseInt(data.age);
  if (age < 30) baseAmount *= 1.5;
  else if (age < 45) baseAmount *= 1.3;
  else if (age >= 65) baseAmount *= 0.8;

  const min = Math.round(baseAmount * 0.7);
  const max = Math.round(baseAmount * 1.4);

  return { min, max };
}

function validateForm(data: CatastrophicFormData, step: number): boolean {
  if (step === 1) return !!(data.injuryType && data.causeOfInjury && data.age && data.liabilityStrength);
  if (step === 2) return !!(data.lifetimeCareNeeds && data.cognitiveImpairment && data.employmentImpact && data.homeModifications);
  return true;
}

const CatastrophicInjuryCalculator = () => {
  const { step, formData, results, updateField, handleNext, handleBack, resetForm, isStepValid } = 
    useCalculatorForm<CatastrophicFormData>(initialFormData, calculateCompensation, validateForm);

  return (
    <>
      <Helmet>
        <title>Catastrophic Injury Calculator | Life-Altering Injury Compensation | Trembach Law</title>
        <meta name="description" content="Calculate catastrophic injury compensation for paralysis, brain injury, and severe disabilities." />
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
              <AlertTriangle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight leading-[1.1]">
              Catastrophic Injury<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Life-altering injury compensation
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
                  <h2 className="text-3xl font-bold text-foreground mb-2">Injury Details</h2>
                  <p className="text-muted-foreground">Tell us about the catastrophic injury</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Type of Catastrophic Injury</label>
                    <select value={formData.injuryType} onChange={(e) => updateField('injuryType', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select injury type</option>
                      <option value="quadriplegia">Quadriplegia (paralysis of all limbs)</option>
                      <option value="paraplegia">Paraplegia (lower body paralysis)</option>
                      <option value="severeTBI">Severe Traumatic Brain Injury</option>
                      <option value="multipleAmputations">Multiple Amputations</option>
                      <option value="severeBurns">Severe Burns (over 50% of body)</option>
                      <option value="blindnessDeafness">Blindness and/or Deafness</option>
                      <option value="organFailure">Organ Failure (requires transplant)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Cause of Injury</label>
                    <select value={formData.causeOfInjury} onChange={(e) => updateField('causeOfInjury', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select cause</option>
                      <option value="medicalMalpractice">Medical Malpractice</option>
                      <option value="carAccident">Motor Vehicle Accident</option>
                      <option value="workplaceAccident">Workplace Accident</option>
                      <option value="defectiveProduct">Defective Product</option>
                      <option value="criminalAct">Criminal Act/Assault</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Your Age at Time of Injury</label>
                    <select value={formData.age} onChange={(e) => updateField('age', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select age</option>
                      <option value="20">Under 30</option>
                      <option value="35">30-44</option>
                      <option value="55">45-64</option>
                      <option value="70">65 or older</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Liability Strength</label>
                    <select value={formData.liabilityStrength} onChange={(e) => updateField('liabilityStrength', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select liability strength</option>
                      <option value="clear">Clear Liability (obvious fault)</option>
                      <option value="strong">Strong Liability (good evidence)</option>
                      <option value="moderate">Moderate Liability (some fault)</option>
                      <option value="disputed">Disputed Liability (contested)</option>
                    </select>
                  </div>
                </div>

                <FormNavigation currentStep={step} isValid={isStepValid()} onBack={handleBack} onNext={handleNext} />
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Long-Term Impact</h2>
                  <p className="text-muted-foreground">Future care and disability needs</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Lifetime Care Needs</label>
                    <select value={formData.lifetimeCareNeeds} onChange={(e) => updateField('lifetimeCareNeeds', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select care needs</option>
                      <option value="fullTimeNursing">Full-Time Nursing Care (24/7)</option>
                      <option value="partTimeCare">Part-Time Caregiver Assistance</option>
                      <option value="minimalAssistance">Minimal Assistance (ADLs only)</option>
                      <option value="independent">Mostly Independent</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Cognitive Impairment</label>
                    <select value={formData.cognitiveImpairment} onChange={(e) => updateField('cognitiveImpairment', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select cognitive impact</option>
                      <option value="severe">Severe (requires guardian, cannot live alone)</option>
                      <option value="moderate">Moderate (memory loss, reduced capacity)</option>
                      <option value="mild">Mild (some impairment)</option>
                      <option value="none">None (no cognitive damage)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Employment Impact</label>
                    <select value={formData.employmentImpact} onChange={(e) => updateField('employmentImpact', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select employment impact</option>
                      <option value="totalDisability">Total Disability (cannot work)</option>
                      <option value="cannotWorkField">Cannot Work in Previous Field</option>
                      <option value="reducedCapacity">Reduced Work Capacity (part-time)</option>
                      <option value="minimalImpact">Minimal Impact (can work with accommodations)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Home Modifications Required</label>
                    <select value={formData.homeModifications} onChange={(e) => updateField('homeModifications', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select modifications needed</option>
                      <option value="extensive">Extensive (wheelchair accessible home, lifts, ramps)</option>
                      <option value="moderate">Moderate (bathroom, doorways, ramps)</option>
                      <option value="minimal">Minimal (grab bars, minor changes)</option>
                      <option value="none">None Required</option>
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
                  <p className="text-muted-foreground">Based on catastrophic injury impact</p>
                </div>

                <div className="bg-muted/50 rounded-2xl p-8 text-center border border-border">
                  <div className="text-sm font-medium text-muted-foreground mb-2">Estimated Range</div>
                  <div className="text-4xl md:text-5xl font-bold text-foreground">
                    ${results.min.toLocaleString()} - ${results.max.toLocaleString()}
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-4">Catastrophic Injury Compensation Includes:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>
                      <span>Lifetime medical care and rehabilitation</span></li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>
                      <span>24/7 nursing and caregiver costs</span></li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>
                      <span>Home modifications and adaptive equipment</span></li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>
                      <span>Lost lifetime earning capacity</span></li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>
                      <span>Pain, suffering, and loss of quality of life</span></li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>
                      <span>Loss of consortium (family impact)</span></li>
                  </ul>
                </div>

                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-3">Important Disclaimer</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This estimate is for informational purposes only. Catastrophic injury cases involve complex life care 
                    planning and require expert testimony from medical professionals, life care planners, and economists. 
                    Actual compensation depends on liability, insurance coverage, jurisdiction, and individual circumstances. 
                    Consult a catastrophic injury attorney for a comprehensive case evaluation.
                  </p>
                </div>

                <div className="calculator-cta-section">
                  <h3 className="text-2xl font-bold mb-4">Get the compensation you deserve</h3>
                  <p className="mb-6 max-w-2xl mx-auto">
                    Catastrophic injuries require expert life care planning and aggressive legal representation. 
                    We'll fight for compensation to cover all your lifetime needs. No fee unless we win.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/free-consultation">
                      <Button size="lg" className="text-lg px-8">
                        Get My Free Case Evaluation
                      </Button>
                    </Link>
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={resetForm}
                      className="text-lg px-8 outline"
                    >
                      Calculate Another Case
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="py-20 bg-muted/30 border-t border-border">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div><div className="text-4xl font-bold text-foreground mb-2">Millions</div>
                <p className="text-muted-foreground">In potential recovery</p></div>
              <div><div className="text-4xl font-bold text-foreground mb-2">Lifetime</div>
                <p className="text-muted-foreground">Care coverage</p></div>
              <div><div className="text-4xl font-bold text-foreground mb-2">No Fee</div>
                <p className="text-muted-foreground">Unless we win</p></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CatastrophicInjuryCalculator;
