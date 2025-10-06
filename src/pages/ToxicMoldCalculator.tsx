import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, Droplets } from 'lucide-react';
import { useCalculatorForm, CalculatorFormData, CalculatorResults } from '@/hooks/useCalculatorForm';
import { FormNavigation } from '@/components/calculator/FormNavigation';
import { Button } from '@/components/ui/button';

interface ToxicMoldFormData extends CalculatorFormData {
  propertyType: string;
  moldType: string;
  exposureDuration: string;
  healthEffects: string;
  propertyDamage: string;
  landLordResponse: string;
  medicalCosts: string;
  age: string;
}

const initialFormData: ToxicMoldFormData = {
  propertyType: '',
  moldType: '',
  exposureDuration: '',
  healthEffects: '',
  propertyDamage: '',
  landLordResponse: '',
  medicalCosts: '',
  age: ''
};

function calculateCompensation(data: ToxicMoldFormData): CalculatorResults {
  let baseAmount = 75000;

  const propertyTypeMultipliers: { [key: string]: number } = {
    apartment: 1.5,
    rental: 1.4,
    ownedHome: 1.2,
    workplace: 1.6,
    school: 1.8
  };

  const moldTypeMultipliers: { [key: string]: number } = {
    stachybotrys: 3.0,
    aspergillus: 2.5,
    penicillium: 2.0,
    cladosporium: 1.8,
    unknown: 1.5
  };

  const exposureDurationMultipliers: { [key: string]: number } = {
    under3months: 1.0,
    '3-12months': 1.5,
    '1-3years': 2.0,
    over3years: 2.5
  };

  const healthEffectsMultipliers: { [key: string]: number } = {
    mild: 1.0,
    moderate: 2.0,
    serious: 3.5,
    chronic: 5.0
  };

  const propertyDamageMultipliers: { [key: string]: number } = {
    minimal: 1.0,
    moderate: 1.5,
    extensive: 2.0,
    uninhabitable: 2.5
  };

  const landlordResponseMultipliers: { [key: string]: number } = {
    ignored: 2.0,
    inadequate: 1.6,
    delayed: 1.3,
    appropriate: 1.0
  };

  const medicalCostMultipliers: { [key: string]: number } = {
    under10k: 1.0,
    '10k-50k': 2.0,
    '50k-100k': 3.0,
    over100k: 4.5
  };

  baseAmount *= propertyTypeMultipliers[data.propertyType] || 1;
  baseAmount *= moldTypeMultipliers[data.moldType] || 1;
  baseAmount *= exposureDurationMultipliers[data.exposureDuration] || 1;
  baseAmount *= healthEffectsMultipliers[data.healthEffects] || 1;
  baseAmount *= propertyDamageMultipliers[data.propertyDamage] || 1;
  baseAmount *= landlordResponseMultipliers[data.landLordResponse] || 1;
  baseAmount *= medicalCostMultipliers[data.medicalCosts] || 1;

  const age = parseInt(data.age);
  if (age < 18 || age >= 65) baseAmount *= 1.4;
  else if (age < 40) baseAmount *= 1.2;

  const min = Math.round(baseAmount * 0.6);
  const max = Math.round(baseAmount * 1.5);

  return { min, max };
}

function validateForm(data: ToxicMoldFormData, step: number): boolean {
  if (step === 1) return !!(data.propertyType && data.moldType && data.exposureDuration && data.healthEffects);
  if (step === 2) return !!(data.propertyDamage && data.landLordResponse && data.medicalCosts && data.age);
  return true;
}

const ToxicMoldCalculator = () => {
  const { step, formData, results, updateField, handleNext, handleBack, resetForm, isStepValid } = 
    useCalculatorForm<ToxicMoldFormData>(initialFormData, calculateCompensation, validateForm);

  return (
    <>
      <Helmet>
        <title>Toxic Mold Calculator | Black Mold Exposure Compensation | Trembach Law</title>
        <meta name="description" content="Calculate toxic mold exposure compensation for health issues and property damage from black mold." />
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
              <Droplets className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight leading-[1.1]">
              Toxic Mold<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Black mold exposure compensation
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
                  <h2 className="text-3xl font-bold text-foreground mb-2">Exposure Details</h2>
                  <p className="text-muted-foreground">Tell us about the mold exposure</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Property Type</label>
                    <select value={formData.propertyType} onChange={(e) => updateField('propertyType', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select property type</option>
                      <option value="apartment">Apartment/Rental Unit</option>
                      <option value="rental">Rental House</option>
                      <option value="ownedHome">Owned Home (builder/seller defect)</option>
                      <option value="workplace">Workplace/Office</option>
                      <option value="school">School/Daycare</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Type of Mold</label>
                    <select value={formData.moldType} onChange={(e) => updateField('moldType', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select mold type</option>
                      <option value="stachybotrys">Stachybotrys (black mold - most toxic)</option>
                      <option value="aspergillus">Aspergillus</option>
                      <option value="penicillium">Penicillium</option>
                      <option value="cladosporium">Cladosporium</option>
                      <option value="unknown">Unknown/Not Tested</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Exposure Duration</label>
                    <select value={formData.exposureDuration} onChange={(e) => updateField('exposureDuration', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select exposure duration</option>
                      <option value="under3months">Under 3 months</option>
                      <option value="3-12months">3-12 months</option>
                      <option value="1-3years">1-3 years</option>
                      <option value="over3years">Over 3 years</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Health Effects</label>
                    <select value={formData.healthEffects} onChange={(e) => updateField('healthEffects', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select health effects</option>
                      <option value="mild">Mild (allergies, cough, irritation)</option>
                      <option value="moderate">Moderate (asthma, sinus infections)</option>
                      <option value="serious">Serious (respiratory illness, hospitalization)</option>
                      <option value="chronic">Chronic (permanent lung damage, autoimmune)</option>
                    </select>
                  </div>
                </div>

                <FormNavigation currentStep={step} isValid={isStepValid()} onBack={handleBack} onNext={handleNext} />
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Damages & Response</h2>
                  <p className="text-muted-foreground">Property damage and responsible party</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Property Damage</label>
                    <select value={formData.propertyDamage} onChange={(e) => updateField('propertyDamage', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select property damage</option>
                      <option value="minimal">Minimal (surface mold, small area)</option>
                      <option value="moderate">Moderate (walls, floors, belongings)</option>
                      <option value="extensive">Extensive (structural damage, major remediation)</option>
                      <option value="uninhabitable">Uninhabitable (forced to relocate)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Landlord/Owner Response</label>
                    <select value={formData.landLordResponse} onChange={(e) => updateField('landLordResponse', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select response</option>
                      <option value="ignored">Ignored Complaints (knew and did nothing)</option>
                      <option value="inadequate">Inadequate Response (cosmetic fix only)</option>
                      <option value="delayed">Delayed Response (took months to act)</option>
                      <option value="appropriate">Appropriate Response (promptly remediated)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Medical Costs</label>
                    <select value={formData.medicalCosts} onChange={(e) => updateField('medicalCosts', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select medical costs</option>
                      <option value="under10k">Under $10,000</option>
                      <option value="10k-50k">$10,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="over100k">Over $100,000</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Your Age</label>
                    <select value={formData.age} onChange={(e) => updateField('age', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select age</option>
                      <option value="10">Child (under 18)</option>
                      <option value="30">Adult (18-64)</option>
                      <option value="70">Senior (65+)</option>
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
                  <p className="text-muted-foreground">Based on your mold exposure case</p>
                </div>

                <div className="bg-muted/50 rounded-2xl p-8 text-center border border-border">
                  <div className="text-sm font-medium text-muted-foreground mb-2">Estimated Range</div>
                  <div className="text-4xl md:text-5xl font-bold text-foreground">
                    ${results.min.toLocaleString()} - ${results.max.toLocaleString()}
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-4">Toxic Mold Compensation Includes:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>
                      <span>Medical expenses and ongoing treatment</span></li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>
                      <span>Property damage and remediation costs</span></li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>
                      <span>Temporary relocation expenses</span></li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>
                      <span>Lost wages (if unable to work)</span></li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>
                      <span>Pain, suffering, and emotional distress</span></li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>
                      <span>Punitive damages (for willful neglect)</span></li>
                  </ul>
                </div>

                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-3">Important Disclaimer</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This estimate is for informational purposes only. Toxic mold cases require proving causation between 
                    mold exposure and health effects, often through medical expert testimony and environmental testing. 
                    Outcomes vary based on landlord/owner knowledge, habitability laws, property damage extent, and medical 
                    documentation. Consult a toxic mold attorney experienced in premises liability and environmental law.
                  </p>
                </div>

                <div className="calculator-cta-section">
                  <h3 className="text-2xl font-bold mb-4">Get compensation for toxic mold exposure</h3>
                  <p className="mb-6 max-w-2xl mx-auto">
                    Landlords must provide habitable housing. If toxic mold made you sick, we'll hold property owners 
                    accountable and get you compensation for medical bills and suffering. No fee unless we win.
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
              <div><div className="text-4xl font-bold text-foreground mb-2">Habitability</div>
                <p className="text-muted-foreground">Landlord duty</p></div>
              <div><div className="text-4xl font-bold text-foreground mb-2">Health</div>
                <p className="text-muted-foreground">Priority protection</p></div>
              <div><div className="text-4xl font-bold text-foreground mb-2">No Fee</div>
                <p className="text-muted-foreground">Unless we win</p></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ToxicMoldCalculator;
