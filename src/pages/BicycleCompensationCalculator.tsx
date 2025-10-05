import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Bike } from 'lucide-react';
import { useCalculatorForm, CalculatorFormData, CalculatorResults } from '@/hooks/useCalculatorForm';
import { CalculatorProgress } from '@/components/calculator/CalculatorProgress';
import { FormNavigation } from '@/components/calculator/FormNavigation';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface BicycleFormData extends CalculatorFormData {
  accidentType: string;
  vehicleType: string;
  vehicleSpeed: string;
  location: string;
  injuryType: string;
  injurySeverity: string;
  helmetUse: string;
  rightOfWay: string;
  medicalCosts: string;
  lostWages: string;
  age: string;
  permanentImpairment: string;
  comparativeFault: string;
}

const initialFormData: BicycleFormData = {
  accidentType: '',
  vehicleType: '',
  vehicleSpeed: '',
  location: '',
  injuryType: '',
  injurySeverity: '',
  helmetUse: '',
  rightOfWay: '',
  medicalCosts: '',
  lostWages: '',
  age: '',
  permanentImpairment: '',
  comparativeFault: ''
};

function calculateBicycleCompensation(data: BicycleFormData): CalculatorResults {
  let baseMin = 30000;
  let baseMax = 200000;

  // Accident type multipliers
  const accidentTypeMultipliers: Record<string, number> = {
    'dooring': 2.2,
    'right-hook': 2.5,
    'left-turn': 2.8,
    'rear-end': 2.0,
    'head-on': 3.5,
    'sideswipe': 1.8,
    'hit-run': 2.4,
    'road-defect': 2.6
  };
  const accidentMult = accidentTypeMultipliers[data.accidentType] || 1.5;
  baseMin *= accidentMult;
  baseMax *= accidentMult;

  // Vehicle type multipliers
  const vehicleMultipliers: Record<string, number> = {
    'car': 1.8,
    'suv-truck': 2.2,
    'commercial': 2.5,
    'bus': 2.8,
    'semi-truck': 3.2,
    'motorcycle': 1.5,
    'other': 1.6
  };
  const vehicleMult = vehicleMultipliers[data.vehicleType] || 1.5;
  baseMin *= vehicleMult;
  baseMax *= vehicleMult;

  // Vehicle speed multipliers
  const speedMultipliers: Record<string, number> = {
    'under-15': 1.2,
    '15-25': 1.5,
    '26-35': 2.0,
    '36-45': 2.5,
    '46-55': 3.0,
    'over-55': 3.5
  };
  const speedMult = speedMultipliers[data.vehicleSpeed] || 1.5;
  baseMin *= speedMult;
  baseMax *= speedMult;

  // Location multipliers
  const locationMultipliers: Record<string, number> = {
    'bike-lane': 2.2,
    'crosswalk': 2.5,
    'intersection': 2.0,
    'highway': 2.8,
    'parking-lot': 1.6,
    'residential': 1.8,
    'trail': 1.5
  };
  const locationMult = locationMultipliers[data.location] || 1.5;
  baseMin *= locationMult;
  baseMax *= locationMult;

  // Injury type multipliers
  const injuryTypeMultipliers: Record<string, number> = {
    'soft-tissue': 1.3,
    'fractures': 2.0,
    'head-injury': 3.0,
    'spinal': 4.0,
    'internal': 2.8,
    'multiple': 3.2,
    'amputation': 4.5,
    'fatal': 5.0
  };
  const injuryMult = injuryTypeMultipliers[data.injuryType] || 1.5;
  baseMin *= injuryMult;
  baseMax *= injuryMult;

  // Injury severity multipliers
  const severityMultipliers: Record<string, number> = {
    'minor': 1.0,
    'moderate': 1.8,
    'severe': 2.5,
    'critical': 3.5,
    'life-threatening': 4.0
  };
  const severityMult = severityMultipliers[data.injurySeverity] || 1.5;
  baseMin *= severityMult;
  baseMax *= severityMult;

  // Helmet use factor (affects perception but not liability in CA)
  const helmetMultipliers: Record<string, number> = {
    'yes': 1.1,
    'no': 1.0,
    'not-required': 1.0
  };
  const helmetMult = helmetMultipliers[data.helmetUse] || 1.0;
  baseMin *= helmetMult;
  baseMax *= helmetMult;

  // Right of way multipliers
  const rightOfWayMultipliers: Record<string, number> = {
    'cyclist': 1.5,
    'vehicle': 0.8,
    'unclear': 1.0,
    'both-violated': 0.9
  };
  const rightOfWayMult = rightOfWayMultipliers[data.rightOfWay] || 1.0;
  baseMin *= rightOfWayMult;
  baseMax *= rightOfWayMult;

  // Economic damages
  const medicalCosts = parseInt(data.medicalCosts) || 0;
  const lostWages = parseInt(data.lostWages) || 0;
  
  baseMin += medicalCosts + lostWages;
  baseMax += (medicalCosts + lostWages) * 2;

  // Age adjustments
  const ageMultipliers: Record<string, number> = {
    'under-18': 1.3,
    '18-25': 1.4,
    '26-40': 1.3,
    '41-55': 1.2,
    '56-65': 1.1,
    'over-65': 1.0
  };
  const ageMult = ageMultipliers[data.age] || 1;
  baseMin *= ageMult;
  baseMax *= ageMult;

  // Permanent impairment multipliers
  const impairmentMultipliers: Record<string, number> = {
    'none': 1.0,
    'minor': 1.3,
    'moderate': 1.8,
    'severe': 2.5,
    'total-disability': 3.5
  };
  const impairmentMult = impairmentMultipliers[data.permanentImpairment] || 1;
  baseMin *= impairmentMult;
  baseMax *= impairmentMult;

  // Comparative fault reduction (CA comparative negligence)
  const faultReductions: Record<string, number> = {
    '0': 1.0,
    '10': 0.9,
    '20': 0.8,
    '30': 0.7,
    '40': 0.6,
    '50': 0.5
  };
  const faultReduction = faultReductions[data.comparativeFault] || 1.0;
  baseMin *= faultReduction;
  baseMax *= faultReduction;

  return {
    min: Math.max(10000, Math.round(baseMin)),
    max: Math.round(baseMax),
    medicalCosts,
    lostWages
  };
}

function validateBicycleForm(data: BicycleFormData, step: number): boolean {
  if (step === 1) {
    return !!(data.accidentType && data.vehicleType && data.vehicleSpeed && 
              data.location && data.injuryType);
  }
  if (step === 2) {
    return !!(data.injurySeverity && data.helmetUse && data.rightOfWay && 
              data.medicalCosts && data.age && data.permanentImpairment);
  }
  return true;
}

const BicycleCompensationCalculator = () => {
  const {
    step,
    formData,
    results,
    updateField,
    handleNext,
    handleBack,
    resetForm,
    isStepValid
  } = useCalculatorForm<BicycleFormData>(
    initialFormData,
    calculateBicycleCompensation,
    validateBicycleForm
  );

  return (
    <>
      <Helmet>
        <title>Bicycle Accident Calculator | Cyclist Injury Compensation | Trembach Law</title>
        <meta name="description" content="Calculate bicycle accident compensation for cyclist injuries. Free estimates for road bike crashes and permanent disabilities." />
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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
              <Bike className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
              Bicycle Accident<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Cyclist injury compensation estimates
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6 max-w-3xl">
            <CalculatorProgress currentStep={step} totalSteps={3} />

            {step === 1 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Accident & Injury Details</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="accidentType" className="text-base font-semibold mb-3 block">
                        Type of Accident *
                      </Label>
                      <select
                        id="accidentType"
                        value={formData.accidentType}
                        onChange={(e) => updateField('accidentType', e.target.value)}
                        className="w-full h-14 px-4 rounded-lg border bg-background text-foreground"
                      >
                        <option value="">Select accident type</option>
                        <option value="dooring">Car Door Opened (Dooring)</option>
                        <option value="right-hook">Right Hook Turn</option>
                        <option value="left-turn">Left Turn Collision</option>
                        <option value="rear-end">Rear-End Collision</option>
                        <option value="head-on">Head-On Collision</option>
                        <option value="sideswipe">Sideswipe</option>
                        <option value="hit-run">Hit and Run</option>
                        <option value="road-defect">Road Defect/Hazard</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="vehicleType" className="text-base font-semibold mb-3 block">
                        Vehicle Type Involved *
                      </Label>
                      <select
                        id="vehicleType"
                        value={formData.vehicleType}
                        onChange={(e) => updateField('vehicleType', e.target.value)}
                        className="w-full h-14 px-4 rounded-lg border bg-background text-foreground"
                      >
                        <option value="">Select vehicle type</option>
                        <option value="car">Passenger Car</option>
                        <option value="suv-truck">SUV/Pickup Truck</option>
                        <option value="commercial">Commercial Vehicle</option>
                        <option value="bus">Bus</option>
                        <option value="semi-truck">Semi-Truck/18-Wheeler</option>
                        <option value="motorcycle">Motorcycle</option>
                        <option value="other">Other/Unknown</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="vehicleSpeed" className="text-base font-semibold mb-3 block">
                        Estimated Vehicle Speed *
                      </Label>
                      <select
                        id="vehicleSpeed"
                        value={formData.vehicleSpeed}
                        onChange={(e) => updateField('vehicleSpeed', e.target.value)}
                        className="w-full h-14 px-4 rounded-lg border bg-background text-foreground"
                      >
                        <option value="">Select speed</option>
                        <option value="under-15">Under 15 mph</option>
                        <option value="15-25">15-25 mph</option>
                        <option value="26-35">26-35 mph</option>
                        <option value="36-45">36-45 mph</option>
                        <option value="46-55">46-55 mph</option>
                        <option value="over-55">Over 55 mph</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="location" className="text-base font-semibold mb-3 block">
                        Accident Location *
                      </Label>
                      <select
                        id="location"
                        value={formData.location}
                        onChange={(e) => updateField('location', e.target.value)}
                        className="w-full h-14 px-4 rounded-lg border bg-background text-foreground"
                      >
                        <option value="">Select location</option>
                        <option value="bike-lane">Designated Bike Lane</option>
                        <option value="crosswalk">Crosswalk</option>
                        <option value="intersection">Intersection</option>
                        <option value="highway">Highway/Freeway</option>
                        <option value="parking-lot">Parking Lot</option>
                        <option value="residential">Residential Street</option>
                        <option value="trail">Bike Trail/Path</option>
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
                        <option value="soft-tissue">Soft Tissue (Bruises, Sprains)</option>
                        <option value="fractures">Bone Fractures</option>
                        <option value="head-injury">Head/Brain Injury</option>
                        <option value="spinal">Spinal Cord Injury</option>
                        <option value="internal">Internal Injuries</option>
                        <option value="multiple">Multiple Injuries</option>
                        <option value="amputation">Amputation</option>
                        <option value="fatal">Fatal (Wrongful Death)</option>
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
                  <h2 className="text-3xl font-bold mb-6">Additional Details & Impact</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="injurySeverity" className="text-base font-semibold mb-3 block">
                        Injury Severity *
                      </Label>
                      <select
                        id="injurySeverity"
                        value={formData.injurySeverity}
                        onChange={(e) => updateField('injurySeverity', e.target.value)}
                        className="w-full h-14 px-4 rounded-lg border bg-background text-foreground"
                      >
                        <option value="">Select severity</option>
                        <option value="minor">Minor (Full Recovery Expected)</option>
                        <option value="moderate">Moderate (Several Months Recovery)</option>
                        <option value="severe">Severe (Long-Term Recovery)</option>
                        <option value="critical">Critical (ICU/Major Surgery)</option>
                        <option value="life-threatening">Life-Threatening</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="helmetUse" className="text-base font-semibold mb-3 block">
                        Were You Wearing a Helmet? *
                      </Label>
                      <select
                        id="helmetUse"
                        value={formData.helmetUse}
                        onChange={(e) => updateField('helmetUse', e.target.value)}
                        className="w-full h-14 px-4 rounded-lg border bg-background text-foreground"
                      >
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No (Adult - Not Required in CA)</option>
                        <option value="not-required">Not Applicable</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="rightOfWay" className="text-base font-semibold mb-3 block">
                        Right-of-Way Status *
                      </Label>
                      <select
                        id="rightOfWay"
                        value={formData.rightOfWay}
                        onChange={(e) => updateField('rightOfWay', e.target.value)}
                        className="w-full h-14 px-4 rounded-lg border bg-background text-foreground"
                      >
                        <option value="">Select</option>
                        <option value="cyclist">Cyclist Had Right-of-Way</option>
                        <option value="vehicle">Vehicle Had Right-of-Way</option>
                        <option value="unclear">Unclear/Disputed</option>
                        <option value="both-violated">Both Violated Traffic Laws</option>
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
                        <option value="5000">Under $5,000</option>
                        <option value="15000">$5,000 - $15,000</option>
                        <option value="35000">$15,000 - $50,000</option>
                        <option value="75000">$50,000 - $100,000</option>
                        <option value="150000">$100,000 - $200,000</option>
                        <option value="300000">Over $200,000</option>
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
                        <option value="5000">Under $5,000</option>
                        <option value="15000">$5,000 - $15,000</option>
                        <option value="35000">$15,000 - $50,000</option>
                        <option value="75000">$50,000 - $100,000</option>
                        <option value="150000">Over $100,000</option>
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
                        <option value="under-18">Under 18</option>
                        <option value="18-25">18-25</option>
                        <option value="26-40">26-40</option>
                        <option value="41-55">41-55</option>
                        <option value="56-65">56-65</option>
                        <option value="over-65">Over 65</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="permanentImpairment" className="text-base font-semibold mb-3 block">
                        Permanent Impairment *
                      </Label>
                      <select
                        id="permanentImpairment"
                        value={formData.permanentImpairment}
                        onChange={(e) => updateField('permanentImpairment', e.target.value)}
                        className="w-full h-14 px-4 rounded-lg border bg-background text-foreground"
                      >
                        <option value="">Select impairment level</option>
                        <option value="none">No Permanent Impairment</option>
                        <option value="minor">Minor (Scarring, Limited Mobility)</option>
                        <option value="moderate">Moderate (Chronic Pain, Reduced Function)</option>
                        <option value="severe">Severe (Major Disability)</option>
                        <option value="total-disability">Total Disability</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="comparativeFault" className="text-base font-semibold mb-3 block">
                        Your Estimated Fault Percentage
                      </Label>
                      <select
                        id="comparativeFault"
                        value={formData.comparativeFault}
                        onChange={(e) => updateField('comparativeFault', e.target.value)}
                        className="w-full h-14 px-4 rounded-lg border bg-background text-foreground"
                      >
                        <option value="0">0% (Not at Fault)</option>
                        <option value="10">10%</option>
                        <option value="20">20%</option>
                        <option value="30">30%</option>
                        <option value="40">40%</option>
                        <option value="50">50%</option>
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
                      <span>Lost Wages</span>
                      <span className="font-semibold">${results.lostWages.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between p-4 bg-primary/10 rounded-lg border border-primary/20">
                      <span className="font-semibold">Pain & Suffering</span>
                      <span className="font-semibold">
                        ${(results.min - results.medicalCosts - results.lostWages).toLocaleString()} - ${(results.max - results.medicalCosts - results.lostWages).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                  <h3 className="font-semibold text-amber-900 mb-2">Important Disclaimer</h3>
                  <p className="text-sm text-amber-800">
                    This estimate is based on general factors and should not be considered a guarantee of compensation. 
                    Actual settlement values depend on specific case details, evidence quality, insurance coverage, 
                    comparative fault determination, and negotiation. California's comparative negligence law allows 
                    recovery even if you were partially at fault. Consult with an experienced bicycle accident attorney 
                    for a detailed case evaluation.
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

export default BicycleCompensationCalculator;
