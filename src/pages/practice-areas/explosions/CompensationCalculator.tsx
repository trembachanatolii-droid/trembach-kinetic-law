import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Flame } from 'lucide-react';
import { useCalculatorForm, CalculatorFormData, CalculatorResults } from '@/hooks/useCalculatorForm';
import { CalculatorProgress } from '@/components/calculator/CalculatorProgress';
import { FormNavigation } from '@/components/calculator/FormNavigation';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface ExplosionFormData extends CalculatorFormData {
  explosionType: string;
  blastRadius: string;
  injuryType: string;
  burnDegree: string;
  respiratoryDamage: string;
  hearingLoss: string;
  blastInjuries: string;
  medicalCosts: string;
  futureCareCosts: string;
  lostWages: string;
  age: string;
  permanentDisability: string;
  thirdPartyLiability: string;
  oshaViolation: string;
}

const initialFormData: ExplosionFormData = {
  explosionType: '',
  blastRadius: '',
  injuryType: '',
  burnDegree: '',
  respiratoryDamage: '',
  hearingLoss: '',
  blastInjuries: '',
  medicalCosts: '',
  futureCareCosts: '',
  lostWages: '',
  age: '',
  permanentDisability: '',
  thirdPartyLiability: '',
  oshaViolation: ''
};

function calculateExplosionCompensation(data: ExplosionFormData): CalculatorResults {
  let baseMin = 100000;
  let baseMax = 500000;

  // Explosion type multipliers
  const explosionTypeMultipliers: Record<string, number> = {
    'gas-leak': 2.8,
    'industrial': 3.0,
    'chemical': 3.5,
    'electrical': 2.5,
    'propane': 2.6,
    'fireworks': 1.8,
    'building': 3.2,
    'vehicle': 2.4
  };
  const explosionMult = explosionTypeMultipliers[data.explosionType] || 1.5;
  baseMin *= explosionMult;
  baseMax *= explosionMult;

  // Blast radius multipliers
  const blastRadiusMultipliers: Record<string, number> = {
    'immediate': 2.5,
    'within-10ft': 2.2,
    'within-25ft': 1.9,
    'within-50ft': 1.6,
    'within-100ft': 1.3,
    'over-100ft': 1.1
  };
  const blastMult = blastRadiusMultipliers[data.blastRadius] || 1;
  baseMin *= blastMult;
  baseMax *= blastMult;

  // Injury type multipliers
  const injuryTypeMultipliers: Record<string, number> = {
    'burns-only': 1.8,
    'blast-trauma': 2.2,
    'respiratory': 2.5,
    'multiple-systems': 3.0,
    'traumatic-brain': 3.5,
    'amputation': 4.0,
    'spinal': 4.5,
    'fatal': 5.0
  };
  const injuryMult = injuryTypeMultipliers[data.injuryType] || 1.5;
  baseMin *= injuryMult;
  baseMax *= injuryMult;

  // Burn degree multipliers
  const burnDegreeMultipliers: Record<string, number> = {
    'first-degree': 1.1,
    'second-degree': 1.5,
    'third-degree': 2.5,
    'fourth-degree': 3.5,
    'facial-burns': 2.8,
    'body-over-30': 3.2,
    'inhalation': 2.6
  };
  const burnMult = burnDegreeMultipliers[data.burnDegree] || 1;
  baseMin *= burnMult;
  baseMax *= burnMult;

  // Respiratory damage multipliers
  const respiratoryMultipliers: Record<string, number> = {
    'none': 1.0,
    'smoke-inhalation': 1.4,
    'chemical-exposure': 1.8,
    'permanent-lung': 2.5,
    'ventilator-dependent': 3.5,
    'lung-transplant': 4.5
  };
  const respMult = respiratoryMultipliers[data.respiratoryDamage] || 1;
  baseMin *= respMult;
  baseMax *= respMult;

  // Hearing loss multipliers
  const hearingMultipliers: Record<string, number> = {
    'none': 1.0,
    'tinnitus': 1.2,
    'partial-loss': 1.5,
    'severe-loss': 2.0,
    'total-deafness': 2.8,
    'bilateral': 3.0
  };
  const hearingMult = hearingMultipliers[data.hearingLoss] || 1;
  baseMin *= hearingMult;
  baseMax *= hearingMult;

  // Blast injuries multipliers
  const blastInjuryMultipliers: Record<string, number> = {
    'none': 1.0,
    'tympanic-rupture': 1.3,
    'internal-organs': 2.2,
    'broken-bones': 1.8,
    'shrapnel-wounds': 2.0,
    'traumatic-amputation': 3.5,
    'multiple-injuries': 2.8
  };
  const blastInjuryMult = blastInjuryMultipliers[data.blastInjuries] || 1;
  baseMin *= blastInjuryMult;
  baseMax *= blastInjuryMult;

  // Economic damages
  const medicalCosts = parseInt(data.medicalCosts) || 0;
  const futureCareCosts = parseInt(data.futureCareCosts) || 0;
  const lostWages = parseInt(data.lostWages) || 0;
  
  baseMin += medicalCosts + futureCareCosts + lostWages;
  baseMax += (medicalCosts + futureCareCosts + lostWages) * 2;

  // Age adjustments (younger = more future damages)
  const ageMultipliers: Record<string, number> = {
    'under-25': 1.4,
    '25-35': 1.3,
    '36-45': 1.2,
    '46-55': 1.1,
    '56-65': 1.0,
    'over-65': 0.9
  };
  const ageMult = ageMultipliers[data.age] || 1;
  baseMin *= ageMult;
  baseMax *= ageMult;

  // Permanent disability multipliers
  const disabilityMultipliers: Record<string, number> = {
    'none': 1.0,
    '1-25': 1.3,
    '26-50': 1.8,
    '51-75': 2.5,
    '76-99': 3.2,
    '100': 4.0
  };
  const disabilityMult = disabilityMultipliers[data.permanentDisability] || 1;
  baseMin *= disabilityMult;
  baseMax *= disabilityMult;

  // Third-party liability additions
  if (data.thirdPartyLiability === 'yes') {
    baseMin *= 1.5;
    baseMax *= 1.8;
  }

  // OSHA violation additions
  if (data.oshaViolation === 'willful') {
    baseMin += 150000;
    baseMax += 400000;
  } else if (data.oshaViolation === 'serious') {
    baseMin += 75000;
    baseMax += 200000;
  } else if (data.oshaViolation === 'repeat') {
    baseMin += 100000;
    baseMax += 300000;
  }

  return {
    min: Math.max(50000, Math.round(baseMin)),
    max: Math.round(baseMax),
    medicalCosts,
    futureCareCosts,
    lostWages
  };
}

function validateExplosionForm(data: ExplosionFormData, step: number): boolean {
  if (step === 1) {
    return !!(data.explosionType && data.blastRadius && data.injuryType && data.burnDegree);
  }
  if (step === 2) {
    return !!(data.respiratoryDamage && data.hearingLoss && data.blastInjuries && 
              data.medicalCosts && data.age && data.permanentDisability);
  }
  return true;
}

const ExplosionsCompensationCalculator = () => {
  const {
    step,
    formData,
    results,
    updateField,
    handleNext,
    handleBack,
    resetForm,
    isStepValid
  } = useCalculatorForm<ExplosionFormData>(
    initialFormData,
    calculateExplosionCompensation,
    validateExplosionForm
  );

  return (
    <>
      <Helmet>
        <title>Explosion Calculator | Blast Injury Compensation | Trembach Law</title>
        <meta name="description" content="Calculate explosion compensation for blast injuries. Free gas explosion and industrial fire estimates." />
      </Helmet>

      <main className="min-h-screen bg-background">
        <div className="border-b">
          <div className="container mx-auto px-6 py-4 max-w-5xl">
            <Link to="/calculators" className="inline-flex items-center text-muted-foreground hover:text-foreground">
              <ArrowLeft size={16} className="mr-2" />
              <span className="text-sm font-medium">Back to All Calculators</span>
            </Link>
          </div>
        </div>

        <section className="pt-20 pb-12 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-6">
              <Flame className="w-8 h-8 text-orange-600" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
              Explosions & Fires<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Blast injury compensation estimates
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6 max-w-3xl">
            <CalculatorProgress currentStep={step} totalSteps={3} />

            {step === 1 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Explosion Details</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="explosionType" className="text-base font-semibold mb-3 block">
                        Type of Explosion *
                      </Label>
                      <select
                        id="explosionType"
                        value={formData.explosionType}
                        onChange={(e) => updateField('explosionType', e.target.value)}
                        className="w-full h-14 px-4 rounded-lg border bg-background text-foreground"
                      >
                        <option value="">Select explosion type</option>
                        <option value="gas-leak">Gas Leak Explosion</option>
                        <option value="industrial">Industrial Explosion</option>
                        <option value="chemical">Chemical Explosion</option>
                        <option value="electrical">Electrical Explosion</option>
                        <option value="propane">Propane Tank Explosion</option>
                        <option value="fireworks">Fireworks Explosion</option>
                        <option value="building">Building Explosion</option>
                        <option value="vehicle">Vehicle Explosion</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="blastRadius" className="text-base font-semibold mb-3 block">
                        Distance from Blast *
                      </Label>
                      <select
                        id="blastRadius"
                        value={formData.blastRadius}
                        onChange={(e) => updateField('blastRadius', e.target.value)}
                        className="w-full h-14 px-4 rounded-lg border bg-background text-foreground"
                      >
                        <option value="">Select distance</option>
                        <option value="immediate">Immediate Blast Zone (0-5ft)</option>
                        <option value="within-10ft">Within 10 Feet</option>
                        <option value="within-25ft">Within 25 Feet</option>
                        <option value="within-50ft">Within 50 Feet</option>
                        <option value="within-100ft">Within 100 Feet</option>
                        <option value="over-100ft">Over 100 Feet</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="injuryType" className="text-base font-semibold mb-3 block">
                        Primary Injury Type *
                      </Label>
                      <select
                        id="injuryType"
                        value={formData.injuryType}
                        onChange={(e) => updateField('injuryType', e.target.value)}
                        className="w-full h-14 px-4 rounded-lg border bg-background text-foreground"
                      >
                        <option value="">Select injury type</option>
                        <option value="burns-only">Burns Only</option>
                        <option value="blast-trauma">Blast Trauma</option>
                        <option value="respiratory">Respiratory Damage</option>
                        <option value="multiple-systems">Multiple System Injuries</option>
                        <option value="traumatic-brain">Traumatic Brain Injury</option>
                        <option value="amputation">Amputation</option>
                        <option value="spinal">Spinal Cord Injury</option>
                        <option value="fatal">Fatal (Wrongful Death)</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="burnDegree" className="text-base font-semibold mb-3 block">
                        Burn Severity (if applicable) *
                      </Label>
                      <select
                        id="burnDegree"
                        value={formData.burnDegree}
                        onChange={(e) => updateField('burnDegree', e.target.value)}
                        className="w-full h-14 px-4 rounded-lg border bg-background text-foreground"
                      >
                        <option value="">Select burn severity</option>
                        <option value="none">No Burns</option>
                        <option value="first-degree">First-Degree Burns</option>
                        <option value="second-degree">Second-Degree Burns</option>
                        <option value="third-degree">Third-Degree Burns</option>
                        <option value="fourth-degree">Fourth-Degree Burns</option>
                        <option value="facial-burns">Facial Burns</option>
                        <option value="body-over-30">Burns Over 30% Body</option>
                        <option value="inhalation">Inhalation Burns</option>
                      </select>
                    </div>
                  </div>
                </div>

                <FormNavigation
                  currentStep={step}
                  totalSteps={3}
                  isValid={isStepValid()}
                  onBack={handleBack}
                  onNext={handleNext}
                />
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Injury Details & Financial Impact</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="respiratoryDamage" className="text-base font-semibold mb-3 block">
                        Respiratory Damage *
                      </Label>
                      <select
                        id="respiratoryDamage"
                        value={formData.respiratoryDamage}
                        onChange={(e) => updateField('respiratoryDamage', e.target.value)}
                        className="w-full h-14 px-4 rounded-lg border bg-background text-foreground"
                      >
                        <option value="">Select respiratory damage</option>
                        <option value="none">None</option>
                        <option value="smoke-inhalation">Smoke Inhalation</option>
                        <option value="chemical-exposure">Chemical Exposure</option>
                        <option value="permanent-lung">Permanent Lung Damage</option>
                        <option value="ventilator-dependent">Ventilator Dependent</option>
                        <option value="lung-transplant">Requires Lung Transplant</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="hearingLoss" className="text-base font-semibold mb-3 block">
                        Hearing Loss *
                      </Label>
                      <select
                        id="hearingLoss"
                        value={formData.hearingLoss}
                        onChange={(e) => updateField('hearingLoss', e.target.value)}
                        className="w-full h-14 px-4 rounded-lg border bg-background text-foreground"
                      >
                        <option value="">Select hearing loss</option>
                        <option value="none">No Hearing Loss</option>
                        <option value="tinnitus">Tinnitus Only</option>
                        <option value="partial-loss">Partial Hearing Loss (One Ear)</option>
                        <option value="severe-loss">Severe Hearing Loss</option>
                        <option value="total-deafness">Total Deafness (One Ear)</option>
                        <option value="bilateral">Bilateral Deafness</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="blastInjuries" className="text-base font-semibold mb-3 block">
                        Additional Blast Injuries *
                      </Label>
                      <select
                        id="blastInjuries"
                        value={formData.blastInjuries}
                        onChange={(e) => updateField('blastInjuries', e.target.value)}
                        className="w-full h-14 px-4 rounded-lg border bg-background text-foreground"
                      >
                        <option value="">Select blast injuries</option>
                        <option value="none">None</option>
                        <option value="tympanic-rupture">Tympanic Membrane Rupture</option>
                        <option value="internal-organs">Internal Organ Damage</option>
                        <option value="broken-bones">Broken Bones/Fractures</option>
                        <option value="shrapnel-wounds">Shrapnel Wounds</option>
                        <option value="traumatic-amputation">Traumatic Amputation</option>
                        <option value="multiple-injuries">Multiple Blast Injuries</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="medicalCosts" className="text-base font-semibold mb-3 block">
                        Medical Costs to Date *
                      </Label>
                      <select
                        id="medicalCosts"
                        value={formData.medicalCosts}
                        onChange={(e) => updateField('medicalCosts', e.target.value)}
                        className="w-full h-14 px-4 rounded-lg border bg-background text-foreground"
                      >
                        <option value="">Select medical costs</option>
                        <option value="10000">Under $10,000</option>
                        <option value="25000">$10,000 - $25,000</option>
                        <option value="50000">$25,000 - $50,000</option>
                        <option value="100000">$50,000 - $100,000</option>
                        <option value="250000">$100,000 - $250,000</option>
                        <option value="500000">$250,000 - $500,000</option>
                        <option value="1000000">Over $500,000</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="futureCareCosts" className="text-base font-semibold mb-3 block">
                        Estimated Future Care Costs
                      </Label>
                      <select
                        id="futureCareCosts"
                        value={formData.futureCareCosts}
                        onChange={(e) => updateField('futureCareCosts', e.target.value)}
                        className="w-full h-14 px-4 rounded-lg border bg-background text-foreground"
                      >
                        <option value="0">None/Unknown</option>
                        <option value="50000">$50,000 - $100,000</option>
                        <option value="150000">$100,000 - $250,000</option>
                        <option value="400000">$250,000 - $500,000</option>
                        <option value="750000">$500,000 - $1,000,000</option>
                        <option value="1500000">Over $1,000,000</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="lostWages" className="text-base font-semibold mb-3 block">
                        Lost Wages
                      </Label>
                      <select
                        id="lostWages"
                        value={formData.lostWages}
                        onChange={(e) => updateField('lostWages', e.target.value)}
                        className="w-full h-14 px-4 rounded-lg border bg-background text-foreground"
                      >
                        <option value="0">None</option>
                        <option value="10000">Under $10,000</option>
                        <option value="25000">$10,000 - $25,000</option>
                        <option value="50000">$25,000 - $50,000</option>
                        <option value="100000">$50,000 - $100,000</option>
                        <option value="250000">Over $100,000</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="age" className="text-base font-semibold mb-3 block">
                        Your Age *
                      </Label>
                      <select
                        id="age"
                        value={formData.age}
                        onChange={(e) => updateField('age', e.target.value)}
                        className="w-full h-14 px-4 rounded-lg border bg-background text-foreground"
                      >
                        <option value="">Select age range</option>
                        <option value="under-25">Under 25</option>
                        <option value="25-35">25-35</option>
                        <option value="36-45">36-45</option>
                        <option value="46-55">46-55</option>
                        <option value="56-65">56-65</option>
                        <option value="over-65">Over 65</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="permanentDisability" className="text-base font-semibold mb-3 block">
                        Permanent Disability Rating *
                      </Label>
                      <select
                        id="permanentDisability"
                        value={formData.permanentDisability}
                        onChange={(e) => updateField('permanentDisability', e.target.value)}
                        className="w-full h-14 px-4 rounded-lg border bg-background text-foreground"
                      >
                        <option value="">Select disability rating</option>
                        <option value="none">No Permanent Disability</option>
                        <option value="1-25">1-25% Disability</option>
                        <option value="26-50">26-50% Disability</option>
                        <option value="51-75">51-75% Disability</option>
                        <option value="76-99">76-99% Disability</option>
                        <option value="100">100% Disabled</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="thirdPartyLiability" className="text-base font-semibold mb-3 block">
                        Third-Party Liability Identified?
                      </Label>
                      <select
                        id="thirdPartyLiability"
                        value={formData.thirdPartyLiability}
                        onChange={(e) => updateField('thirdPartyLiability', e.target.value)}
                        className="w-full h-14 px-4 rounded-lg border bg-background text-foreground"
                      >
                        <option value="">Select</option>
                        <option value="yes">Yes (Manufacturer, Contractor, etc.)</option>
                        <option value="no">No/Unknown</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="oshaViolation" className="text-base font-semibold mb-3 block">
                        OSHA Safety Violations
                      </Label>
                      <select
                        id="oshaViolation"
                        value={formData.oshaViolation}
                        onChange={(e) => updateField('oshaViolation', e.target.value)}
                        className="w-full h-14 px-4 rounded-lg border bg-background text-foreground"
                      >
                        <option value="">Select violation type</option>
                        <option value="none">No Violations</option>
                        <option value="other">Other/Minor Violation</option>
                        <option value="serious">Serious Violation</option>
                        <option value="willful">Willful Violation</option>
                        <option value="repeat">Repeat Violation</option>
                      </select>
                    </div>
                  </div>
                </div>

                <FormNavigation
                  currentStep={step}
                  totalSteps={3}
                  isValid={isStepValid()}
                  onBack={handleBack}
                  onNext={handleNext}
                />
              </div>
            )}

            {step === 3 && results && (
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-bold">Your Estimated Compensation</h2>
                  <p className="text-muted-foreground">Based on the information provided</p>
                </div>

                <div className="bg-primary/5 rounded-2xl p-8 text-center border-2 border-primary/20">
                  <div className="text-5xl font-bold text-primary mb-2">
                    ${results.min.toLocaleString()} - ${results.max.toLocaleString()}
                  </div>
                  <p className="text-muted-foreground">Estimated Compensation Range</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Compensation Breakdown</h3>
                  <div className="grid gap-4">
                    <div className="flex justify-between p-4 bg-muted/50 rounded-lg">
                      <span>Medical Costs</span>
                      <span className="font-semibold">${results.medicalCosts.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between p-4 bg-muted/50 rounded-lg">
                      <span>Future Care Costs</span>
                      <span className="font-semibold">${results.futureCareCosts.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between p-4 bg-muted/50 rounded-lg">
                      <span>Lost Wages</span>
                      <span className="font-semibold">${results.lostWages.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between p-4 bg-primary/10 rounded-lg border border-primary/20">
                      <span className="font-semibold">Pain & Suffering</span>
                      <span className="font-semibold">
                        ${(results.min - results.medicalCosts - results.futureCareCosts - results.lostWages).toLocaleString()} - ${(results.max - results.medicalCosts - results.futureCareCosts - results.lostWages).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                  <h3 className="font-semibold text-amber-900 mb-2">Important Disclaimer</h3>
                  <p className="text-sm text-amber-800">
                    This estimate is based on general factors and should not be considered a guarantee of compensation. 
                    Actual settlement values depend on specific case details, evidence quality, liable parties, insurance 
                    coverage, jurisdiction, and negotiation. Explosion and fire cases often involve complex liability 
                    issues, OSHA violations, and third-party claims. Consult with an experienced attorney for a detailed 
                    case evaluation.
                  </p>
                </div>

                <div className="flex gap-4">
                  <Button size="lg" className="flex-1" onClick={() => window.location.href = '/contact'}>
                    Get Free Case Review
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1" onClick={resetForm}>
                    Start New Calculation
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default ExplosionsCompensationCalculator;
