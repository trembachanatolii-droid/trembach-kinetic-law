import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Calculator, AlertTriangle, DollarSign, FileText, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GoBack from '@/components/GoBack';
import calculatorHero from '@/assets/swimming-pool-calculator-hero.jpg';

gsap.registerPlugin(ScrollTrigger);

interface CalculatorData {
  incidentType: string;
  injuryType: string;
  injurySeverity: string;
  medicalTreatment: string;
  hospitalStay: string;
  surgeryRequired: string;
  ongoingTreatment: string;
  missedWork: string;
  monthsMissed: string;
  age: string;
  dependents: string;
  poolType: string;
  poolLocation: string;
  supervisionPresent: string;
  safetyViolations: string;
  priorIncidents: string;
  alcoholInvolved: string;
}

const SwimmingPoolCompensationCalculator: React.FC = () => {
  const [formData, setFormData] = useState<CalculatorData>({
    incidentType: '',
    injuryType: '',
    injurySeverity: '',
    medicalTreatment: '',
    hospitalStay: '',
    surgeryRequired: '',
    ongoingTreatment: '',
    missedWork: '',
    monthsMissed: '',
    age: '',
    dependents: '',
    poolType: '',
    poolLocation: '',
    supervisionPresent: '',
    safetyViolations: '',
    priorIncidents: '',
    alcoholInvolved: ''
  });
  
  const [calculationResult, setCalculationResult] = useState<any>(null);
  const [showResult, setShowResult] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );

      gsap.fromTo('.calculator-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.calculator-form',
            start: 'top 80%'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const calculateCompensation = () => {
    if (!formData.incidentType || !formData.injuryType) {
      toast.error('Please fill in the required fields');
      return;
    }

    let baseValue = 50000;
    const factors = [];
    
    // Incident type factors
    if (formData.incidentType === 'drowning') {
      baseValue *= 5.0;
      factors.push('Near-drowning or drowning incident significantly increases case value');
    } else if (formData.incidentType === 'slip-fall') {
      baseValue *= 2.5;
      factors.push('Slip and fall incidents around pools often result in serious injuries');
    } else if (formData.incidentType === 'diving') {
      baseValue *= 4.0;
      factors.push('Diving accidents frequently cause catastrophic spinal injuries');
    } else if (formData.incidentType === 'chemical') {
      baseValue *= 3.0;
      factors.push('Chemical burns and exposure cases require specialized treatment');
    } else if (formData.incidentType === 'equipment') {
      baseValue *= 2.8;
      factors.push('Equipment malfunction cases involve product liability claims');
    }

    // Injury severity multipliers
    if (formData.injurySeverity === 'catastrophic') {
      baseValue *= 3.5;
      factors.push('Catastrophic injuries warrant maximum compensation');
    } else if (formData.injurySeverity === 'severe') {
      baseValue *= 2.5;
      factors.push('Severe injuries require substantial compensation for ongoing care');
    } else if (formData.injurySeverity === 'moderate') {
      baseValue *= 1.8;
      factors.push('Moderate injuries still impact quality of life significantly');
    }

    // Medical treatment factors
    if (formData.surgeryRequired === 'yes') {
      baseValue *= 2.0;
      factors.push('Surgical procedures increase medical costs and pain/suffering');
    }
    
    if (formData.hospitalStay === 'week-plus') {
      baseValue *= 1.8;
      factors.push('Extended hospitalization increases medical expenses');
    } else if (formData.hospitalStay === 'few-days') {
      baseValue *= 1.4;
      factors.push('Hospital stay indicates serious injury requiring immediate care');
    }

    if (formData.ongoingTreatment === 'yes') {
      baseValue *= 2.2;
      factors.push('Ongoing treatment creates future medical expenses');
    }

    // Lost wages factors
    if (formData.missedWork === 'yes') {
      if (formData.monthsMissed === '6-plus') {
        baseValue *= 2.5;
        factors.push('Extended time off work creates significant wage loss');
      } else if (formData.monthsMissed === '3-6') {
        baseValue *= 1.8;
        factors.push('Several months of missed work impacts financial stability');
      } else if (formData.monthsMissed === '1-3') {
        baseValue *= 1.4;
        factors.push('Missed work time requires compensation');
      }
    }

    // Age considerations
    if (formData.age === 'child') {
      baseValue *= 2.8;
      factors.push('Child victims receive higher compensation for lifetime impact');
    } else if (formData.age === 'young-adult') {
      baseValue *= 2.2;
      factors.push('Young adults have longer life expectancy affecting damages');
    } else if (formData.age === 'middle') {
      baseValue *= 1.8;
      factors.push('Peak earning years lost due to injury');
    }

    // Dependents
    if (formData.dependents === 'multiple') {
      baseValue *= 1.6;
      factors.push('Multiple dependents increase family impact damages');
    } else if (formData.dependents === 'one') {
      baseValue *= 1.3;
      factors.push('Dependents affected by victim\'s injury');
    }

    // Pool type and safety violations
    if (formData.poolType === 'public') {
      baseValue *= 1.8;
      factors.push('Public pools have higher safety obligations');
    } else if (formData.poolType === 'hotel') {
      baseValue *= 2.0;
      factors.push('Commercial establishments have duty to ensure guest safety');
    } else if (formData.poolType === 'apartment') {
      baseValue *= 1.6;
      factors.push('Apartment complexes must maintain safe common areas');
    }

    if (formData.safetyViolations === 'multiple') {
      baseValue *= 2.5;
      factors.push('Multiple safety violations indicate gross negligence');
    } else if (formData.safetyViolations === 'some') {
      baseValue *= 1.8;
      factors.push('Safety violations strengthen liability case');
    }

    if (formData.supervisionPresent === 'no') {
      baseValue *= 1.5;
      factors.push('Lack of proper supervision increases liability');
    }

    if (formData.priorIncidents === 'yes') {
      baseValue *= 2.0;
      factors.push('Prior incidents show knowledge of dangerous conditions');
    }

    // Calculate ranges
    const lowEnd = Math.round(baseValue * 0.6);
    const highEnd = Math.round(baseValue * 1.8);

    setCalculationResult({
      lowEnd,
      highEnd,
      factors,
      baseValue: Math.round(baseValue)
    });
    setShowResult(true);

    // Scroll to results
    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  const handleInputChange = (field: keyof CalculatorData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <GoBack fallbackPath="/practice-areas/swimming-pool-accidents" />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${calculatorHero})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <Calculator className="w-16 h-16 mx-auto mb-4 text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Swimming Pool Accident Compensation Calculator
            </h1>
            <p className="text-xl">
              Get an estimate of your potential swimming pool accident claim value
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Form */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Card className="calculator-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="w-6 h-6 mr-2 text-primary" />
              Incident Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="incidentType">Type of Swimming Pool Incident *</Label>
                <Select value={formData.incidentType} onValueChange={(value) => handleInputChange('incidentType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select incident type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="drowning">Near-Drowning/Drowning</SelectItem>
                    <SelectItem value="slip-fall">Slip and Fall</SelectItem>
                    <SelectItem value="diving">Diving Accident</SelectItem>
                    <SelectItem value="chemical">Chemical Burns/Exposure</SelectItem>
                    <SelectItem value="equipment">Equipment Malfunction</SelectItem>
                    <SelectItem value="entrapment">Drain Entrapment</SelectItem>
                    <SelectItem value="electrocution">Electrical Injury</SelectItem>
                    <SelectItem value="glass">Broken Glass Injury</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="poolType">Type of Pool</Label>
                <Select value={formData.poolType} onValueChange={(value) => handleInputChange('poolType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select pool type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">Private Residential</SelectItem>
                    <SelectItem value="public">Public Pool</SelectItem>
                    <SelectItem value="hotel">Hotel/Resort</SelectItem>
                    <SelectItem value="apartment">Apartment/Condo Complex</SelectItem>
                    <SelectItem value="school">School Pool</SelectItem>
                    <SelectItem value="gym">Gym/Health Club</SelectItem>
                    <SelectItem value="waterpark">Water Park</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="injuryType">Primary Injury Type *</Label>
                <Select value={formData.injuryType} onValueChange={(value) => handleInputChange('injuryType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select injury type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="brain-injury">Traumatic Brain Injury</SelectItem>
                    <SelectItem value="spinal-cord">Spinal Cord Injury</SelectItem>
                    <SelectItem value="drowning-injury">Drowning/Near-Drowning</SelectItem>
                    <SelectItem value="fractures">Broken Bones/Fractures</SelectItem>
                    <SelectItem value="lacerations">Cuts/Lacerations</SelectItem>
                    <SelectItem value="burns">Chemical/Thermal Burns</SelectItem>
                    <SelectItem value="soft-tissue">Soft Tissue Injuries</SelectItem>
                    <SelectItem value="wrongful-death">Wrongful Death</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="injurySeverity">Injury Severity</Label>
                <Select value={formData.injurySeverity} onValueChange={(value) => handleInputChange('injurySeverity', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select severity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="minor">Minor (Full Recovery Expected)</SelectItem>
                    <SelectItem value="moderate">Moderate (Some Permanent Effects)</SelectItem>
                    <SelectItem value="severe">Severe (Significant Disability)</SelectItem>
                    <SelectItem value="catastrophic">Catastrophic (Life-Altering)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Medical Treatment Section */}
        <Card className="calculator-card mb-8">
          <CardHeader>
            <CardTitle>Medical Treatment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="hospitalStay">Hospital Stay</Label>
                <Select value={formData.hospitalStay} onValueChange={(value) => handleInputChange('hospitalStay', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select hospital stay" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No Hospitalization</SelectItem>
                    <SelectItem value="overnight">Overnight Stay</SelectItem>
                    <SelectItem value="few-days">Few Days</SelectItem>
                    <SelectItem value="week-plus">Week or More</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="surgeryRequired">Surgery Required</Label>
                <Select value={formData.surgeryRequired} onValueChange={(value) => handleInputChange('surgeryRequired', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Surgery required?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no">No</SelectItem>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="multiple">Multiple Surgeries</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="ongoingTreatment">Ongoing Treatment Required</Label>
              <Select value={formData.ongoingTreatment} onValueChange={(value) => handleInputChange('ongoingTreatment', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Ongoing treatment needed?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="yes">Yes - Physical Therapy</SelectItem>
                  <SelectItem value="lifelong">Yes - Lifelong Care</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Economic Impact Section */}
        <Card className="calculator-card mb-8">
          <CardHeader>
            <CardTitle>Economic Impact</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="missedWork">Missed Work Due to Injury</Label>
                <Select value={formData.missedWork} onValueChange={(value) => handleInputChange('missedWork', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Missed work?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no">No</SelectItem>
                    <SelectItem value="yes">Yes</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {formData.missedWork === 'yes' && (
                <div>
                  <Label htmlFor="monthsMissed">Duration of Missed Work</Label>
                  <Select value={formData.monthsMissed} onValueChange={(value) => handleInputChange('monthsMissed', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="few-days">Few Days</SelectItem>
                      <SelectItem value="few-weeks">Few Weeks</SelectItem>
                      <SelectItem value="1-3">1-3 Months</SelectItem>
                      <SelectItem value="3-6">3-6 Months</SelectItem>
                      <SelectItem value="6-plus">6+ Months</SelectItem>
                      <SelectItem value="permanent">Permanently Disabled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="age">Age at Time of Incident</Label>
                <Select value={formData.age} onValueChange={(value) => handleInputChange('age', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select age range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="child">Child (Under 18)</SelectItem>
                    <SelectItem value="young-adult">Young Adult (18-30)</SelectItem>
                    <SelectItem value="middle">Middle Age (31-50)</SelectItem>
                    <SelectItem value="older">Older Adult (51+)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="dependents">Number of Dependents</Label>
                <Select value={formData.dependents} onValueChange={(value) => handleInputChange('dependents', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select dependents" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None</SelectItem>
                    <SelectItem value="one">One</SelectItem>
                    <SelectItem value="multiple">Multiple</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Liability Factors Section */}
        <Card className="calculator-card mb-8">
          <CardHeader>
            <CardTitle>Liability Factors</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="supervisionPresent">Proper Supervision Present</Label>
                <Select value={formData.supervisionPresent} onValueChange={(value) => handleInputChange('supervisionPresent', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Was supervision present?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes - Adequate Supervision</SelectItem>
                    <SelectItem value="no">No - No Lifeguard/Supervision</SelectItem>
                    <SelectItem value="inadequate">Inadequate Supervision</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="safetyViolations">Safety Violations Present</Label>
                <Select value={formData.safetyViolations} onValueChange={(value) => handleInputChange('safetyViolations', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any safety violations?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None Apparent</SelectItem>
                    <SelectItem value="some">Some Violations</SelectItem>
                    <SelectItem value="multiple">Multiple Violations</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="priorIncidents">Prior Similar Incidents</Label>
                <Select value={formData.priorIncidents} onValueChange={(value) => handleInputChange('priorIncidents', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Prior incidents at location?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no">No Known Prior Incidents</SelectItem>
                    <SelectItem value="yes">Yes - Prior Incidents</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="alcoholInvolved">Alcohol/Substances Involved</Label>
                <Select value={formData.alcoholInvolved} onValueChange={(value) => handleInputChange('alcoholInvolved', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Alcohol/substances involved?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no">No</SelectItem>
                    <SelectItem value="victim">Victim Had Been Drinking</SelectItem>
                    <SelectItem value="facility">Facility Served Alcohol</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Calculate Button */}
        <div className="text-center mb-8">
          <Button 
            onClick={calculateCompensation}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-12 py-4 text-lg font-semibold"
          >
            <Calculator className="w-5 h-5 mr-2" />
            Calculate My Case Value
          </Button>
        </div>

        {/* Results Section */}
        {showResult && (
          <Card id="results" className="calculator-card border-primary">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <DollarSign className="w-6 h-6 mr-2" />
                Estimated Case Value
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  ${calculationResult?.lowEnd?.toLocaleString()} - ${calculationResult?.highEnd?.toLocaleString()}
                </div>
                <p className="text-muted-foreground">Estimated compensation range for your swimming pool accident case</p>
              </div>

              <div className="bg-muted p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">Factors Affecting Your Case Value:</h4>
                <ul className="space-y-2">
                  {calculationResult?.factors?.map((factor: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm">{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-yellow-800 mb-1">Important Disclaimer</h5>
                    <p className="text-sm text-yellow-700">
                      This calculator provides estimates based on typical case factors and should not be considered a guarantee of results. 
                      Every case is unique, and actual compensation may vary significantly based on specific circumstances, evidence, 
                      and California law. Consult with an experienced swimming pool accident attorney for a proper case evaluation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  size="lg"
                  onClick={() => window.location.href = '/practice-areas/swimming-pool/case-evaluation'}
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  Get Free Professional Case Review
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Legal Disclaimer */}
        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Legal Disclaimer</h3>
          <p className="text-sm text-muted-foreground mb-3">
            This swimming pool accident compensation calculator is for informational purposes only and does not constitute legal advice. 
            The estimates provided are based on general factors and historical case outcomes but cannot account for all variables that 
            may affect your specific case.
          </p>
          <p className="text-sm text-muted-foreground">
            Actual compensation depends on many factors including the strength of evidence, degree of negligence, insurance policy limits, 
            and specific California laws. No attorney-client relationship is created by using this calculator. For accurate case evaluation, 
            consult with a qualified California swimming pool accident attorney who can review your specific circumstances.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwimmingPoolCompensationCalculator;