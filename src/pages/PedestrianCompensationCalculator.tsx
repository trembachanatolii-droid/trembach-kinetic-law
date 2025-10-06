import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users } from 'lucide-react';
import { useCalculatorForm, CalculatorFormData, CalculatorResults } from '@/hooks/useCalculatorForm';
import { CalculatorProgress } from '@/components/calculator/CalculatorProgress';
import { FormNavigation } from '@/components/calculator/FormNavigation';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface PedestrianFormData extends CalculatorFormData {
  accidentType: string;
  location: string;
  vehicleType: string;
  vehicleSpeed: string;
  injuryType: string;
  injurySeverity: string;
  crosswalkUse: string;
  medicalCosts: string;
  futureCareCosts: string;
  lostWages: string;
  age: string;
  permanentDisability: string;
  mobilityImpairment: string;
  comparativeFault: string;
}

const initialFormData: PedestrianFormData = {
  accidentType: '',
  location: '',
  vehicleType: '',
  vehicleSpeed: '',
  injuryType: '',
  injurySeverity: '',
  crosswalkUse: '',
  medicalCosts: '',
  futureCareCosts: '',
  lostWages: '',
  age: '',
  permanentDisability: '',
  mobilityImpairment: '',
  comparativeFault: ''
};

function calculatePedestrianCompensation(data: PedestrianFormData): CalculatorResults {
  let baseMin = 40000;
  let baseMax = 250000;

  // Accident type multipliers
  const accidentTypeMultipliers: Record<string, number> = {
    'crosswalk': 2.8,
    'jaywalking': 1.6,
    'parking-lot': 1.8,
    'backing-up': 2.0,
    'hit-run': 2.5,
    'intersection': 2.6,
    'sidewalk': 3.0,
    'highway': 3.5
  };
  const accidentMult = accidentTypeMultipliers[data.accidentType] || 2.0;
  baseMin *= accidentMult;
  baseMax *= accidentMult;

  // Location multipliers
  const locationMultipliers: Record<string, number> = {
    'marked-crosswalk': 2.5,
    'unmarked-crosswalk': 2.2,
    'intersection': 2.3,
    'mid-block': 1.8,
    'parking-lot': 1.9,
    'driveway': 2.0,
    'sidewalk': 2.8,
    'highway': 3.2
  };
  const locationMult = locationMultipliers[data.location] || 2.0;
  baseMin *= locationMult;
  baseMax *= locationMult;

  // Vehicle type multipliers
  const vehicleMultipliers: Record<string, number> = {
    'car': 2.0,
    'suv-truck': 2.4,
    'commercial': 2.8,
    'bus': 3.0,
    'semi-truck': 3.5,
    'motorcycle': 1.6,
    'bicycle': 1.4
  };
  const vehicleMult = vehicleMultipliers[data.vehicleType] || 2.0;
  baseMin *= vehicleMult;
  baseMax *= vehicleMult;

  // Vehicle speed multipliers
  const speedMultipliers: Record<string, number> = {
    'under-10': 1.2,
    '10-20': 1.6,
    '21-30': 2.2,
    '31-40': 2.8,
    '41-50': 3.4,
    'over-50': 4.0
  };
  const speedMult = speedMultipliers[data.vehicleSpeed] || 2.0;
  baseMin *= speedMult;
  baseMax *= speedMult;

  // Injury type multipliers
  const injuryTypeMultipliers: Record<string, number> = {
    'soft-tissue': 1.4,
    'fractures': 2.2,
    'head-injury': 3.5,
    'spinal': 4.5,
    'internal': 3.2,
    'multiple': 3.8,
    'amputation': 5.0,
    'fatal': 5.5
  };
  const injuryMult = injuryTypeMultipliers[data.injuryType] || 2.0;
  baseMin *= injuryMult;
  baseMax *= injuryMult;

  // Injury severity multipliers
  const severityMultipliers: Record<string, number> = {
    'minor': 1.0,
    'moderate': 2.0,
    'severe': 3.0,
    'critical': 4.0,
    'life-threatening': 5.0
  };
  const severityMult = severityMultipliers[data.injurySeverity] || 2.0;
  baseMin *= severityMult;
  baseMax *= severityMult;

  // Crosswalk use multipliers (affects liability)
  const crosswalkMultipliers: Record<string, number> = {
    'marked-crosswalk': 1.4,
    'unmarked-crosswalk': 1.2,
    'jaywalking': 0.8,
    'sidewalk': 1.5,
    'not-applicable': 1.0
  };
  const crosswalkMult = crosswalkMultipliers[data.crosswalkUse] || 1.0;
  baseMin *= crosswalkMult;
  baseMax *= crosswalkMult;

  // Economic damages
  const medicalCosts = parseInt(data.medicalCosts) || 0;
  const futureCareCosts = parseInt(data.futureCareCosts) || 0;
  const lostWages = parseInt(data.lostWages) || 0;
  
  baseMin += medicalCosts + futureCareCosts + lostWages;
  baseMax += (medicalCosts + futureCareCosts + lostWages) * 2;

  // Age adjustments (vulnerability and future damages)
  const ageMultipliers: Record<string, number> = {
    'child': 1.6,
    'under-25': 1.5,
    '26-40': 1.4,
    '41-55': 1.3,
    '56-65': 1.2,
    'over-65': 1.4
  };
  const ageMult = ageMultipliers[data.age] || 1.3;
  baseMin *= ageMult;
  baseMax *= ageMult;

  // Permanent disability multipliers
  const disabilityMultipliers: Record<string, number> = {
    'none': 1.0,
    '1-25': 1.4,
    '26-50': 2.0,
    '51-75': 2.8,
    '76-99': 3.6,
    '100': 4.5
  };
  const disabilityMult = disabilityMultipliers[data.permanentDisability] || 1.0;
  baseMin *= disabilityMult;
  baseMax *= disabilityMult;

  // Mobility impairment multipliers
  const mobilityMultipliers: Record<string, number> = {
    'none': 1.0,
    'cane-walker': 1.4,
    'wheelchair-part': 2.2,
    'wheelchair-full': 3.0,
    'bedridden': 3.8,
    'paralysis': 4.5
  };
  const mobilityMult = mobilityMultipliers[data.mobilityImpairment] || 1.0;
  baseMin *= mobilityMult;
  baseMax *= mobilityMult;

  // Comparative fault reduction
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
    min: Math.max(15000, Math.round(baseMin)),
    max: Math.round(baseMax),
    medicalCosts,
    futureCareCosts,
    lostWages
  };
}

function validatePedestrianForm(data: PedestrianFormData, step: number): boolean {
  if (step === 1) {
    return !!(data.accidentType && data.location && data.vehicleType && 
              data.vehicleSpeed && data.injuryType);
  }
  if (step === 2) {
    return !!(data.injurySeverity && data.crosswalkUse && data.medicalCosts && 
              data.age && data.permanentDisability);
  }
  return true;
}

const PedestrianCompensationCalculator = () => {
  const {
    step,
    formData,
    results,
    updateField,
    handleNext,
    handleBack,
    resetForm,
    isStepValid
  } = useCalculatorForm<PedestrianFormData>(
    initialFormData,
    calculatePedestrianCompensation,
    validatePedestrianForm
  );

  return (
    <>
      <Helmet>
        <title>Pedestrian Accident Calculator | Crosswalk Injury Compensation | Trembach Law</title>
        <meta name="description" content="Calculate pedestrian accident compensation for crosswalk injuries. Free estimates for hit-and-run and fault cases." />
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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
              Pedestrian Accident<br />Calculator
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Crosswalk injury compensation estimates
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
                        <option value="crosswalk">Crosswalk Collision</option>
                        <option value="jaywalking">Jaywalking Incident</option>
                        <option value="parking-lot">Parking Lot Accident</option>
                        <option value="backing-up">Vehicle Backing Up</option>
                        <option value="hit-run">Hit and Run</option>
                        <option value="intersection">Intersection Collision</option>
                        <option value="sidewalk">On Sidewalk</option>
                        <option value="highway">Highway/Freeway</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="location" className="text-base font-semibold mb-3 block">
                        Specific Location *
                      </Label>
                      <select
                        id="location"
                        value={formData.location}
                        onChange={(e) => updateField('location', e.target.value)}
                        className="w-full h-14 px-4 rounded-lg border bg-background text-foreground"
                      >
                        <option value="">Select location</option>
                        <option value="marked-crosswalk">Marked Crosswalk</option>
                        <option value="unmarked-crosswalk">Unmarked Crosswalk</option>
                        <option value="intersection">Intersection</option>
                        <option value="mid-block">Mid-Block</option>
                        <option value="parking-lot">Parking Lot</option>
                        <option value="driveway">Driveway</option>
                        <option value="sidewalk">Sidewalk</option>
                        <option value="highway">Highway/Road Shoulder</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="vehicleType" className="text-base font-semibold mb-3 block">
                        Vehicle Type *
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
                        <option value="bicycle">Bicycle</option>
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
                        <option value="under-10">Under 10 mph</option>
                        <option value="10-20">10-20 mph</option>
                        <option value="21-30">21-30 mph</option>
                        <option value="31-40">31-40 mph</option>
                        <option value="41-50">41-50 mph</option>
                        <option value="over-50">Over 50 mph</option>
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
                  <h2 className="text-3xl font-bold mb-6">Injury Severity & Financial Impact</h2>
                  
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
                      <Label htmlFor="crosswalkUse" className="text-base font-semibold mb-3 block">
                        Were You Using a Crosswalk? *
                      </Label>
                      <select
                        id="crosswalkUse"
                        value={formData.crosswalkUse}
                        onChange={(e) => updateField('crosswalkUse', e.target.value)}
                        className="w-full h-14 px-4 rounded-lg border bg-background text-foreground"
                      >
                        <option value="">Select</option>
                        <option value="marked-crosswalk">Yes, Marked Crosswalk</option>
                        <option value="unmarked-crosswalk">Yes, Unmarked Crosswalk</option>
                        <option value="jaywalking">No, Jaywalking</option>
                        <option value="sidewalk">On Sidewalk</option>
                        <option value="not-applicable">Not Applicable</option>
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
                        <option value="300000">$200,000 - $500,000</option>
                        <option value="750000">Over $500,000</option>
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
                        <option value="child">Child (Under 18)</option>
                        <option value="under-25">Under 25</option>
                        <option value="26-40">26-40</option>
                        <option value="41-55">41-55</option>
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
                      <Label htmlFor="mobilityImpairment" className="text-base font-semibold mb-3 block">
                        Mobility Impairment
                      </Label>
                      <select
                        id="mobilityImpairment"
                        value={formData.mobilityImpairment}
                        onChange={(e) => updateField('mobilityImpairment', e.target.value)}
                        className="w-full h-14 px-4 rounded-lg border bg-background text-foreground"
                      >
                        <option value="">Select impairment</option>
                        <option value="none">None</option>
                        <option value="cane-walker">Cane/Walker Required</option>
                        <option value="wheelchair-part">Wheelchair (Part-Time)</option>
                        <option value="wheelchair-full">Wheelchair (Full-Time)</option>
                        <option value="bedridden">Bedridden</option>
                        <option value="paralysis">Paralysis</option>
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
                    Actual settlement values depend on specific case details, evidence quality, witness statements, 
                    insurance coverage, comparative fault determination, and negotiation. California pedestrians generally 
                    have right-of-way in crosswalks, but comparative negligence applies. Consult with an experienced 
                    pedestrian accident attorney for a detailed case evaluation.
                  </p>
                </div>

                <div className="flex gap-4">
                  <Link to="/contact" className="flex-1">
                    <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Get My Free Case Evaluation
                    </Button>
                  </Link>
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

export default PedestrianCompensationCalculator;
