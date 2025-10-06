import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, Truck } from 'lucide-react';
import { useCalculatorForm, CalculatorFormData, CalculatorResults } from '@/hooks/useCalculatorForm';
import { FormNavigation } from '@/components/calculator/FormNavigation';
import { Button } from '@/components/ui/button';

interface TruckingAccidentFormData extends CalculatorFormData {
  truckType: string;
  accidentType: string;
  injurySeverity: string;
  fmcsaViolations: string;
  driverConduct: string;
  age: string;
  medicalCosts: string;
  employmentImpact: string;
}

const initialFormData: TruckingAccidentFormData = {
  truckType: '',
  accidentType: '',
  injurySeverity: '',
  fmcsaViolations: '',
  driverConduct: '',
  age: '',
  medicalCosts: '',
  employmentImpact: ''
};

function calculateCompensation(data: TruckingAccidentFormData): CalculatorResults {
  let baseAmount = 250000;

  const truckTypeMultipliers: { [key: string]: number } = {
    semiTruck: 2.5,
    tankerTruck: 3.0,
    cargoVan: 1.8,
    deliveryTruck: 2.0,
    dumpTruck: 2.3
  };

  const accidentTypeMultipliers: { [key: string]: number } = {
    rearEnd: 2.0,
    headOn: 3.5,
    jackknife: 3.0,
    underride: 4.0,
    rollover: 3.2,
    blindSpot: 2.5
  };

  const injurySeverityMultipliers: { [key: string]: number } = {
    minor: 1.0,
    moderate: 2.5,
    serious: 4.0,
    catastrophic: 6.0,
    fatal: 7.0
  };

  const fmcsaMultipliers: { [key: string]: number } = {
    multipleViolations: 2.0,
    hoursOfService: 1.8,
    maintenanceIssues: 1.7,
    driverQualification: 1.6,
    noViolations: 1.0
  };

  const driverConductMultipliers: { [key: string]: number } = {
    impaired: 2.5,
    distracted: 2.0,
    fatigued: 2.2,
    speeding: 1.8,
    reckless: 2.3
  };

  const medicalCostMultipliers: { [key: string]: number } = {
    under50k: 1.0,
    '50k-200k': 2.0,
    '200k-500k': 3.5,
    '500k-1m': 5.0,
    over1m: 7.0
  };

  const employmentMultipliers: { [key: string]: number } = {
    totalDisability: 2.0,
    permanentRestrictions: 1.6,
    temporaryDisability: 1.3,
    minimalImpact: 1.0
  };

  baseAmount *= truckTypeMultipliers[data.truckType] || 1;
  baseAmount *= accidentTypeMultipliers[data.accidentType] || 1;
  baseAmount *= injurySeverityMultipliers[data.injurySeverity] || 1;
  baseAmount *= fmcsaMultipliers[data.fmcsaViolations] || 1;
  baseAmount *= driverConductMultipliers[data.driverConduct] || 1;
  baseAmount *= medicalCostMultipliers[data.medicalCosts] || 1;
  baseAmount *= employmentMultipliers[data.employmentImpact] || 1;

  const age = parseInt(data.age);
  if (age < 40) baseAmount *= 1.3;
  else if (age >= 65) baseAmount *= 0.9;

  const min = Math.round(baseAmount * 0.6);
  const max = Math.round(baseAmount * 1.5);

  return { min, max };
}

function validateForm(data: TruckingAccidentFormData, step: number): boolean {
  if (step === 1) return !!(data.truckType && data.accidentType && data.injurySeverity && data.fmcsaViolations);
  if (step === 2) return !!(data.driverConduct && data.age && data.medicalCosts && data.employmentImpact);
  return true;
}

const TruckingAccidentCalculator = () => {
  const { step, formData, results, updateField, handleNext, handleBack, resetForm, isStepValid } = 
    useCalculatorForm<TruckingAccidentFormData>(initialFormData, calculateCompensation, validateForm);

  return (
    <>
      <Helmet>
        <title>Trucking Accident Calculator | Semi-Truck Injury Compensation | Trembach Law</title>
        <meta name="description" content="Calculate trucking accident compensation for semi-truck crashes and commercial vehicle injuries." />
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
              <Truck className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight leading-[1.1]">
              Trucking Accident<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Semi-truck crash compensation
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
                  <h2 className="text-3xl font-bold text-foreground mb-2">Accident Details</h2>
                  <p className="text-muted-foreground">Tell us about the trucking accident</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Type of Commercial Truck</label>
                    <select value={formData.truckType} onChange={(e) => updateField('truckType', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select truck type</option>
                      <option value="semiTruck">Semi-Truck/18-Wheeler</option>
                      <option value="tankerTruck">Tanker Truck (hazardous materials)</option>
                      <option value="cargoVan">Cargo Van/Box Truck</option>
                      <option value="deliveryTruck">Delivery Truck (FedEx, UPS, Amazon)</option>
                      <option value="dumpTruck">Dump Truck/Construction Vehicle</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Type of Accident</label>
                    <select value={formData.accidentType} onChange={(e) => updateField('accidentType', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select accident type</option>
                      <option value="rearEnd">Rear-End Collision</option>
                      <option value="headOn">Head-On Collision</option>
                      <option value="jackknife">Jackknife Accident</option>
                      <option value="underride">Underride Accident (car under truck)</option>
                      <option value="rollover">Truck Rollover</option>
                      <option value="blindSpot">Blind Spot/Merge Accident</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Injury Severity</label>
                    <select value={formData.injurySeverity} onChange={(e) => updateField('injurySeverity', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select injury severity</option>
                      <option value="minor">Minor (soft tissue, whiplash)</option>
                      <option value="moderate">Moderate (fractures, hospitalizations)</option>
                      <option value="serious">Serious (surgery, permanent injury)</option>
                      <option value="catastrophic">Catastrophic (paralysis, brain injury)</option>
                      <option value="fatal">Fatal (wrongful death)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">FMCSA Violations</label>
                    <select value={formData.fmcsaViolations} onChange={(e) => updateField('fmcsaViolations', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select violations</option>
                      <option value="multipleViolations">Multiple Federal Violations</option>
                      <option value="hoursOfService">Hours of Service Violation (fatigued driving)</option>
                      <option value="maintenanceIssues">Maintenance/Inspection Violations</option>
                      <option value="driverQualification">Driver Qualification Issues</option>
                      <option value="noViolations">No Known Violations</option>
                    </select>
                  </div>
                </div>

                <FormNavigation currentStep={step} isValid={isStepValid()} onBack={handleBack} onNext={handleNext} />
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Damages & Impact</h2>
                  <p className="text-muted-foreground">Additional case details</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Driver Conduct</label>
                    <select value={formData.driverConduct} onChange={(e) => updateField('driverConduct', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select driver conduct</option>
                      <option value="impaired">Impaired (DUI, drugs)</option>
                      <option value="distracted">Distracted (phone, eating)</option>
                      <option value="fatigued">Fatigued (hours of service violation)</option>
                      <option value="speeding">Speeding/Aggressive Driving</option>
                      <option value="reckless">Reckless Driving</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Your Age</label>
                    <select value={formData.age} onChange={(e) => updateField('age', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select age range</option>
                      <option value="30">Under 40</option>
                      <option value="50">40-64</option>
                      <option value="70">65 or older</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Medical Costs</label>
                    <select value={formData.medicalCosts} onChange={(e) => updateField('medicalCosts', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select medical costs</option>
                      <option value="under50k">Under $50,000</option>
                      <option value="50k-200k">$50,000 - $200,000</option>
                      <option value="200k-500k">$200,000 - $500,000</option>
                      <option value="500k-1m">$500,000 - $1,000,000</option>
                      <option value="over1m">Over $1,000,000</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Employment Impact</label>
                    <select value={formData.employmentImpact} onChange={(e) => updateField('employmentImpact', e.target.value)}
                      className="w-full h-14 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select employment impact</option>
                      <option value="totalDisability">Total Disability (cannot work)</option>
                      <option value="permanentRestrictions">Permanent Work Restrictions</option>
                      <option value="temporaryDisability">Temporary Disability</option>
                      <option value="minimalImpact">Minimal Impact (returned to work)</option>
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
                  <p className="text-muted-foreground">Based on your trucking accident</p>
                </div>

                <div className="bg-muted/50 rounded-2xl p-8 text-center border border-border">
                  <div className="text-sm font-medium text-muted-foreground mb-2">Estimated Range</div>
                  <div className="text-4xl md:text-5xl font-bold text-foreground">
                    ${results.min.toLocaleString()} - ${results.max.toLocaleString()}
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-4">Trucking Accident Compensation Includes:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>
                      <span>All medical expenses and ongoing treatment</span></li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>
                      <span>Lost wages and reduced earning capacity</span></li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>
                      <span>Pain, suffering, and emotional distress</span></li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>
                      <span>Vehicle repair or replacement costs</span></li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>
                      <span>Punitive damages (for gross negligence)</span></li>
                  </ul>
                </div>

                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-3">Important Disclaimer</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This estimate is for informational purposes only. Trucking accidents involve complex federal regulations 
                    (FMCSA), multiple liable parties (driver, trucking company, maintenance company), and substantial insurance 
                    policies. Actual compensation depends on liability, insurance coverage, and case-specific factors. Consult 
                    a trucking accident attorney experienced in federal motor carrier regulations.
                  </p>
                </div>

                <div className="calculator-cta-section">
                  <h3 className="text-2xl font-bold mb-4">Hold trucking companies accountable</h3>
                  <p className="mb-6 max-w-2xl mx-auto">
                    Truck accidents involve federal regulations and multiple liable parties. Our attorneys understand FMCSA 
                    rules and will investigate all responsible parties to maximize your recovery. No fee unless we win.
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
              <div><div className="text-4xl font-bold text-foreground mb-2">Higher</div>
                <p className="text-muted-foreground">Insurance limits</p></div>
              <div><div className="text-4xl font-bold text-foreground mb-2">Federal</div>
                <p className="text-muted-foreground">FMCSA regulations</p></div>
              <div><div className="text-4xl font-bold text-foreground mb-2">No Fee</div>
                <p className="text-muted-foreground">Unless we win</p></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default TruckingAccidentCalculator;
