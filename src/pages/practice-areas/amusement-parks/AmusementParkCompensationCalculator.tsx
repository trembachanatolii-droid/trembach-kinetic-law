import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calculator, DollarSign, TrendingUp, AlertTriangle, Info, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GoBack from "@/components/GoBack";

gsap.registerPlugin(ScrollTrigger);

const AmusementParkCompensationCalculator = () => {
  const [formData, setFormData] = useState({
    age: "",
    income: "",
    injuryType: "",
    injurySeverity: "",
    medicalCosts: "",
    timeOffWork: "",
    permanentDisability: false,
    ongoingTreatment: false,
    emotionalDistress: "",
    parkNegligence: "",
    priorConditions: false
  });

  const [calculation, setCalculation] = useState<{
    total: number;
    breakdown: {
      medical: number;
      lostWages: number;
      painSuffering: number;
      futureExpenses: number;
    };
    range: { min: number; max: number };
  } | null>(null);

  useEffect(() => {
    // Hero animation
    gsap.fromTo(".hero-content", 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    // Calculator animation
    gsap.fromTo(".calculator-form", 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        delay: 0.3,
        scrollTrigger: {
          trigger: ".calculator-form",
          start: "top 80%"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const injuryTypes = [
    { value: "head-brain", label: "Head/Brain Injury", multiplier: 5.0 },
    { value: "spinal", label: "Spinal Cord Injury", multiplier: 4.5 },
    { value: "broken-bones", label: "Broken Bones/Fractures", multiplier: 2.5 },
    { value: "burns", label: "Burns", multiplier: 3.0 },
    { value: "cuts-lacerations", label: "Cuts and Lacerations", multiplier: 1.5 },
    { value: "internal", label: "Internal Injuries", multiplier: 3.5 },
    { value: "soft-tissue", label: "Soft Tissue Injuries", multiplier: 1.2 },
    { value: "emotional", label: "Emotional Trauma Only", multiplier: 2.0 }
  ];

  const severityLevels = [
    { value: "minor", label: "Minor", multiplier: 1.0 },
    { value: "moderate", label: "Moderate", multiplier: 2.0 },
    { value: "serious", label: "Serious", multiplier: 3.5 },
    { value: "severe", label: "Severe", multiplier: 5.0 },
    { value: "catastrophic", label: "Catastrophic", multiplier: 7.0 }
  ];

  const calculateCompensation = () => {
    const medicalCosts = parseFloat(formData.medicalCosts) || 0;
    const annualIncome = parseFloat(formData.income) || 0;
    const timeOff = parseFloat(formData.timeOffWork) || 0;

    // Base calculations
    const lostWages = (annualIncome / 52) * timeOff;
    
    // Get multipliers
    const injuryMultiplier = injuryTypes.find(t => t.value === formData.injuryType)?.multiplier || 1;
    const severityMultiplier = severityLevels.find(s => s.value === formData.injurySeverity)?.multiplier || 1;

    // Calculate pain and suffering (typically 1.5-5x medical costs)
    let painSufferingMultiplier = 2.5;
    if (formData.injurySeverity === "catastrophic") painSufferingMultiplier = 5.0;
    else if (formData.injurySeverity === "severe") painSufferingMultiplier = 4.0;
    else if (formData.injurySeverity === "serious") painSufferingMultiplier = 3.5;
    else if (formData.injurySeverity === "moderate") painSufferingMultiplier = 2.0;
    else if (formData.injurySeverity === "minor") painSufferingMultiplier = 1.5;

    const basePainSuffering = medicalCosts * painSufferingMultiplier;
    const painSuffering = basePainSuffering * injuryMultiplier;

    // Future expenses calculation
    let futureExpenses = 0;
    if (formData.permanentDisability) {
      futureExpenses += medicalCosts * 2; // Estimate 2x current costs for future care
    }
    if (formData.ongoingTreatment) {
      futureExpenses += medicalCosts * 0.5; // Additional 50% for ongoing care
    }

    // Age factor (younger victims often receive higher awards)
    const age = parseInt(formData.age) || 30;
    let ageFactor = 1.0;
    if (age < 18) ageFactor = 1.3;
    else if (age < 30) ageFactor = 1.2;
    else if (age < 50) ageFactor = 1.1;
    else if (age > 65) ageFactor = 0.9;

    // Negligence factor
    let negligenceFactor = 1.0;
    if (formData.parkNegligence === "clear") negligenceFactor = 1.5;
    else if (formData.parkNegligence === "some") negligenceFactor = 1.2;
    else if (formData.parkNegligence === "minimal") negligenceFactor = 0.8;

    // Prior conditions reduction
    const priorConditionsFactor = formData.priorConditions ? 0.8 : 1.0;

    // Calculate totals
    const adjustedMedical = medicalCosts * ageFactor * negligenceFactor * priorConditionsFactor;
    const adjustedWages = lostWages * ageFactor * negligenceFactor;
    const adjustedPainSuffering = painSuffering * ageFactor * negligenceFactor * priorConditionsFactor;
    const adjustedFutureExpenses = futureExpenses * ageFactor * negligenceFactor;

    const total = adjustedMedical + adjustedWages + adjustedPainSuffering + adjustedFutureExpenses;

    // Calculate range (±30% for settlement negotiation range)
    const range = {
      min: Math.round(total * 0.7),
      max: Math.round(total * 1.3)
    };

    setCalculation({
      total: Math.round(total),
      breakdown: {
        medical: Math.round(adjustedMedical),
        lostWages: Math.round(adjustedWages),
        painSuffering: Math.round(adjustedPainSuffering),
        futureExpenses: Math.round(adjustedFutureExpenses)
      },
      range
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateCompensation();
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <>
      <Helmet>
        <title>Amusement Park Injury Compensation Calculator | Estimate Your Settlement Value</title>
        <meta name="description" content="Calculate potential compensation for your amusement park injury case. Our free calculator estimates settlement values based on medical costs, lost wages, and injury severity." />
        <meta name="keywords" content="amusement park injury compensation, settlement calculator, theme park accident damages, injury settlement estimate" />
        <link rel="canonical" href="/practice-areas/amusement-parks/compensation-calculator" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <GoBack />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 px-4">
          <div className="max-w-4xl mx-auto text-center hero-content">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Calculator className="h-4 w-4" />
              <span className="text-sm font-medium">Compensation Calculator</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              Amusement Park Injury Compensation Calculator
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get an estimate of potential compensation for your amusement park injury. Our calculator considers medical costs, lost wages, injury severity, and other key factors.
            </p>
          </div>
        </section>

        {/* Important Disclaimer */}
        <section className="py-6 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-blue-200 bg-blue-50/50 dark:bg-blue-950/20 dark:border-blue-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Important Disclaimer</h3>
                    <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed">
                      This calculator provides estimates based on general factors and should not be considered legal advice. 
                      Actual compensation depends on many case-specific factors. Consult with an experienced attorney for accurate case evaluation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Calculator Form */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="calculator-form shadow-xl">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Compensation Calculator</CardTitle>
                <CardDescription>
                  Provide accurate information to get a more precise estimate of your potential compensation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-primary" />
                      Personal Information
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="age">Age at Time of Injury</Label>
                        <Input 
                          id="age"
                          type="number"
                          value={formData.age}
                          onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                          placeholder="e.g., 35"
                        />
                      </div>
                      <div>
                        <Label htmlFor="income">Annual Income</Label>
                        <Input 
                          id="income"
                          type="number"
                          value={formData.income}
                          onChange={(e) => setFormData(prev => ({ ...prev, income: e.target.value }))}
                          placeholder="e.g., 50000"
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Injury Details */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-primary" />
                      Injury Details
                    </h3>

                    <div>
                      <Label className="text-base font-medium mb-3 block">Type of Injury</Label>
                      <Select value={formData.injuryType} onValueChange={(value) => setFormData(prev => ({ ...prev, injuryType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select injury type" />
                        </SelectTrigger>
                        <SelectContent>
                          {injuryTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-base font-medium mb-3 block">Injury Severity</Label>
                      <RadioGroup 
                        value={formData.injurySeverity} 
                        onValueChange={(value) => setFormData(prev => ({ ...prev, injurySeverity: value }))}
                        className="grid md:grid-cols-2 gap-3"
                      >
                        {severityLevels.map((level) => (
                          <div key={level.value} className="flex items-center space-x-2">
                            <RadioGroupItem value={level.value} id={level.value} />
                            <Label htmlFor={level.value} className="text-sm">{level.label}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="medicalCosts">Total Medical Costs ($)</Label>
                        <Input 
                          id="medicalCosts"
                          type="number"
                          value={formData.medicalCosts}
                          onChange={(e) => setFormData(prev => ({ ...prev, medicalCosts: e.target.value }))}
                          placeholder="e.g., 25000"
                        />
                      </div>
                      <div>
                        <Label htmlFor="timeOffWork">Weeks Unable to Work</Label>
                        <Input 
                          id="timeOffWork"
                          type="number"
                          value={formData.timeOffWork}
                          onChange={(e) => setFormData(prev => ({ ...prev, timeOffWork: e.target.value }))}
                          placeholder="e.g., 8"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="permanentDisability"
                          checked={formData.permanentDisability}
                          onCheckedChange={(checked) => setFormData(prev => ({ ...prev, permanentDisability: !!checked }))}
                        />
                        <Label htmlFor="permanentDisability">Permanent disability or disfigurement</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="ongoingTreatment"
                          checked={formData.ongoingTreatment}
                          onCheckedChange={(checked) => setFormData(prev => ({ ...prev, ongoingTreatment: !!checked }))}
                        />
                        <Label htmlFor="ongoingTreatment">Ongoing medical treatment required</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="priorConditions"
                          checked={formData.priorConditions}
                          onCheckedChange={(checked) => setFormData(prev => ({ ...prev, priorConditions: !!checked }))}
                        />
                        <Label htmlFor="priorConditions">Pre-existing medical conditions</Label>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Case Factors */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold">Case Strength Factors</h3>

                    <div>
                      <Label className="text-base font-medium mb-3 block">Level of Park Negligence</Label>
                      <RadioGroup 
                        value={formData.parkNegligence} 
                        onValueChange={(value) => setFormData(prev => ({ ...prev, parkNegligence: value }))}
                        className="space-y-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="clear" id="negligence-clear" />
                          <Label htmlFor="negligence-clear">Clear negligence (obvious safety violations)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="some" id="negligence-some" />
                          <Label htmlFor="negligence-some">Some negligence (maintenance issues, inadequate warnings)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="minimal" id="negligence-minimal" />
                          <Label htmlFor="negligence-minimal">Minimal negligence (questionable fault)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="unclear" id="negligence-unclear" />
                          <Label htmlFor="negligence-unclear">Unclear or no apparent negligence</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button type="submit" size="lg" className="w-full">
                      <Calculator className="h-4 w-4 mr-2" />
                      Calculate Compensation
                    </Button>
                  </div>
                </form>

                {/* Calculation Results */}
                {calculation && (
                  <div className="mt-8 space-y-6">
                    <Separator />
                    <div>
                      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <TrendingUp className="h-6 w-6 text-primary" />
                        Compensation Estimate
                      </h3>

                      {/* Total Estimate */}
                      <Card className="mb-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
                        <CardContent className="p-6 text-center">
                          <h4 className="text-lg font-semibold mb-2">Estimated Total Compensation</h4>
                          <div className="text-4xl font-bold text-primary mb-2">
                            {formatCurrency(calculation.total)}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Settlement Range: {formatCurrency(calculation.range.min)} - {formatCurrency(calculation.range.max)}
                          </div>
                        </CardContent>
                      </Card>

                      {/* Breakdown */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <Card>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium">Medical Expenses</span>
                              <span className="font-bold">{formatCurrency(calculation.breakdown.medical)}</span>
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium">Lost Wages</span>
                              <span className="font-bold">{formatCurrency(calculation.breakdown.lostWages)}</span>
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium">Pain & Suffering</span>
                              <span className="font-bold">{formatCurrency(calculation.breakdown.painSuffering)}</span>
                            </div>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium">Future Expenses</span>
                              <span className="font-bold">{formatCurrency(calculation.breakdown.futureExpenses)}</span>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      <Card className="mt-6 border-amber-200 bg-amber-50/50 dark:bg-amber-950/20 dark:border-amber-800">
                        <CardContent className="p-4">
                          <p className="text-amber-800 dark:text-amber-200 text-sm">
                            <strong>Important:</strong> This is an estimate based on the information provided. 
                            Actual compensation may vary significantly based on case specifics, local laws, 
                            jury verdicts, and negotiation skills. Consult with an attorney for accurate assessment.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4">Ready to Pursue Maximum Compensation?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  This calculator provides an estimate, but our experienced attorneys can help you pursue the full compensation you deserve for your amusement park injury.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    <Phone className="h-4 w-4 mr-2" />
                    Call (555) 123-4567
                  </Button>
                  <Button variant="outline" size="lg">
                    Free Case Evaluation
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  No fees unless we win your case • Available 24/7
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};

export default AmusementParkCompensationCalculator;