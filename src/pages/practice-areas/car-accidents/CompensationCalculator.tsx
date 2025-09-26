import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { 
  Phone, 
  Calculator, 
  DollarSign, 
  Star,
  AlertTriangle,
  FileText,
  TrendingUp,
  Shield,
  Clock
} from 'lucide-react';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';

gsap.registerPlugin(ScrollTrigger);

interface CalculatorData {
  injuryType: string;
  injurySeverity: string;
  medicalExpenses: string;
  lostWages: string;
  timeOffWork: string;
  treatmentNeeds: string[];
  qualityOfLifeImpact: string;
  faultPercentage: string;
  ageRange: string;
  recoveryTime: string;
}

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  description: string;
}

const AnimatedSphere: React.FC = () => (
  <Canvas camera={{ position: [0, 0, 6] }}>
    <ambientLight intensity={0.8} />
    <directionalLight position={[2, 2, 5]} />
    <Sphere args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="hsl(var(--accent))"
        attach="material"
        wireframe={false}
        distort={0.3}
        speed={1.2}
        roughness={0.1}
        metalness={0.9}
      />
    </Sphere>
    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
  </Canvas>
);

const CarAccidentCompensationCalculator: React.FC = () => {
  const [calculatorData, setCalculatorData] = useState<CalculatorData>({
    injuryType: '',
    injurySeverity: '',
    medicalExpenses: '',
    lostWages: '',
    timeOffWork: '',
    treatmentNeeds: [],
    qualityOfLifeImpact: '',
    faultPercentage: '',
    ageRange: '',
    recoveryTime: '',
  });

  const [contactForm, setContactForm] = useState<ContactForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    description: '',
  });

  const [estimatedCompensation, setEstimatedCompensation] = useState<{
    low: number;
    high: number;
  } | null>(null);

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
      );

      // Content sections animation
      gsap.fromTo(contentRef.current?.querySelectorAll('.content-section'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleInputChange = (field: keyof CalculatorData, value: string) => {
    setCalculatorData(prev => ({ ...prev, [field]: value }));
  };

  const handleTreatmentNeedsChange = (treatment: string, checked: boolean) => {
    setCalculatorData(prev => ({
      ...prev,
      treatmentNeeds: checked
        ? [...prev.treatmentNeeds, treatment]
        : prev.treatmentNeeds.filter(t => t !== treatment)
    }));
  };

  const handleContactFormChange = (field: keyof ContactForm, value: string) => {
    setContactForm(prev => ({ ...prev, [field]: value }));
  };

  const calculateCompensation = () => {
    let baseAmount = 0;
    
    // Base amount by injury type
    const injuryMultipliers: Record<string, number> = {
      'minor': 15000,
      'soft-tissue': 35000,
      'fractures': 75000,
      'head': 150000,
      'spinal': 250000,
      'multiple': 100000,
      'permanent': 300000
    };

    baseAmount = injuryMultipliers[calculatorData.injuryType] || 25000;

    // Severity multiplier
    const severityMultipliers: Record<string, number> = {
      'minor': 1,
      'moderate': 1.5,
      'severe': 2.5,
      'critical': 4
    };

    baseAmount *= severityMultipliers[calculatorData.injurySeverity] || 1;

    // Add medical expenses
    if (calculatorData.medicalExpenses) {
      const medicalAmount = parseInt(calculatorData.medicalExpenses.replace(/[^\d]/g, '')) || 0;
      baseAmount += medicalAmount * 3; // Pain and suffering multiplier
    }

    // Add lost wages
    if (calculatorData.lostWages) {
      const lostWagesAmount = parseInt(calculatorData.lostWages.replace(/[^\d]/g, '')) || 0;
      baseAmount += lostWagesAmount;
    }

    // Treatment needs adjustment
    const treatmentMultiplier = 1 + (calculatorData.treatmentNeeds.length * 0.15);
    baseAmount *= treatmentMultiplier;

    // Quality of life impact
    const qualityMultipliers: Record<string, number> = {
      'none': 1,
      'minimal': 1.1,
      'moderate': 1.3,
      'significant': 1.6,
      'severe': 2.2
    };

    baseAmount *= qualityMultipliers[calculatorData.qualityOfLifeImpact] || 1;

    // Age factor (younger victims typically receive higher awards)
    const ageMultipliers: Record<string, number> = {
      '18-30': 1.3,
      '31-45': 1.2,
      '46-60': 1.1,
      '61-75': 1,
      '75+': 0.9
    };

    baseAmount *= ageMultipliers[calculatorData.ageRange] || 1;

    // Recovery time factor
    const recoveryMultipliers: Record<string, number> = {
      '1-3': 1,
      '3-6': 1.2,
      '6-12': 1.5,
      '12+': 2,
      'permanent': 3
    };

    baseAmount *= recoveryMultipliers[calculatorData.recoveryTime] || 1;

    // Fault percentage reduction
    if (calculatorData.faultPercentage) {
      const faultPercent = parseInt(calculatorData.faultPercentage) / 100;
      baseAmount *= (1 - faultPercent);
    }

    const low = Math.max(baseAmount * 0.7, 5000);
    const high = baseAmount * 1.4;

    setEstimatedCompensation({ low: Math.round(low), high: Math.round(high) });
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    // Handle contact form submission
  };

  return (
    <>
      <SEO 
        title="Car Accident Compensation Calculator - Estimate Your Claim Value | California Auto Injury"
        description="Calculate potential compensation for your California car accident claim. Free estimate tool for auto injury settlements. Get expert legal help. Call (877) 647-1564."
        keywords="car accident compensation calculator, California auto injury settlement, car crash claim value, personal injury calculator"
        canonical="/practice-areas/car-accidents/compensation-calculator"
      />

      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-accent/5">
        <GoBack />
        
        {/* Hero Section */}
        <section ref={heroRef} className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-accent/5 to-primary/10" />
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-20">
            <AnimatedSphere />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="hero-content max-w-4xl">
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-muted-foreground font-medium">$100M+ Recovered for Clients</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-accent via-accent/80 to-primary bg-clip-text text-transparent mb-6">
                Car Accident Compensation Calculator
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Get an estimate of your potential car accident claim value. Our calculator considers 
                injury severity, medical costs, lost wages, and other factors to provide a realistic range.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (877) 647-1564
                </Button>
                <Button variant="outline" size="lg">
                  <Calculator className="w-5 h-5 mr-2" />
                  Free Case Review
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section ref={contentRef} className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Calculator */}
              <div className="lg:col-span-2 content-section">
                <Card className="p-8 shadow-xl">
                  <CardHeader className="text-center mb-8">
                    <CardTitle className="text-3xl font-bold text-accent mb-4">
                      Compensation Calculator
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Answer the questions below to estimate your car accident claim value
                    </p>
                  </CardHeader>
                  
                  <CardContent className="space-y-8">
                    {/* Accident & Injury Information */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold">Accident & Injury Information</h3>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="injuryType">Type of Injury</Label>
                          <Select value={calculatorData.injuryType} onValueChange={(value) => handleInputChange('injuryType', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select injury type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="minor">Minor (cuts, bruises)</SelectItem>
                              <SelectItem value="soft-tissue">Soft Tissue (whiplash)</SelectItem>
                              <SelectItem value="fractures">Broken Bones</SelectItem>
                              <SelectItem value="head">Head/Brain Injury</SelectItem>
                              <SelectItem value="spinal">Spinal Cord Injury</SelectItem>
                              <SelectItem value="multiple">Multiple Injuries</SelectItem>
                              <SelectItem value="permanent">Permanent Disability</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="injurySeverity">Injury Severity</Label>
                          <Select value={calculatorData.injurySeverity} onValueChange={(value) => handleInputChange('injurySeverity', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select severity" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="minor">Minor</SelectItem>
                              <SelectItem value="moderate">Moderate</SelectItem>
                              <SelectItem value="severe">Severe</SelectItem>
                              <SelectItem value="critical">Critical</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="ageRange">Age Range</Label>
                          <Select value={calculatorData.ageRange} onValueChange={(value) => handleInputChange('ageRange', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select age range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="18-30">18-30 years</SelectItem>
                              <SelectItem value="31-45">31-45 years</SelectItem>
                              <SelectItem value="46-60">46-60 years</SelectItem>
                              <SelectItem value="61-75">61-75 years</SelectItem>
                              <SelectItem value="75+">75+ years</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="recoveryTime">Expected Recovery Time</Label>
                          <Select value={calculatorData.recoveryTime} onValueChange={(value) => handleInputChange('recoveryTime', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select recovery time" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-3">1-3 months</SelectItem>
                              <SelectItem value="3-6">3-6 months</SelectItem>
                              <SelectItem value="6-12">6-12 months</SelectItem>
                              <SelectItem value="12+">12+ months</SelectItem>
                              <SelectItem value="permanent">Permanent condition</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Financial Details */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold">Financial Information</h3>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="medicalExpenses">Medical Expenses to Date</Label>
                          <Input
                            id="medicalExpenses"
                            placeholder="$10,000"
                            value={calculatorData.medicalExpenses}
                            onChange={(e) => handleInputChange('medicalExpenses', e.target.value)}
                          />
                        </div>

                        <div>
                          <Label htmlFor="lostWages">Lost Wages to Date</Label>
                          <Input
                            id="lostWages"
                            placeholder="$5,000"
                            value={calculatorData.lostWages}
                            onChange={(e) => handleInputChange('lostWages', e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="timeOffWork">Time Off Work</Label>
                        <Select value={calculatorData.timeOffWork} onValueChange={(value) => handleInputChange('timeOffWork', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time off work" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">No time off</SelectItem>
                            <SelectItem value="1-2">1-2 weeks</SelectItem>
                            <SelectItem value="3-4">3-4 weeks</SelectItem>
                            <SelectItem value="1-3">1-3 months</SelectItem>
                            <SelectItem value="3-6">3-6 months</SelectItem>
                            <SelectItem value="6+">6+ months</SelectItem>
                            <SelectItem value="permanent">Unable to return</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Treatment Needs */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold">Ongoing Treatment Needs</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          'Physical Therapy',
                          'Surgery Required',
                          'Ongoing Medication',
                          'Specialist Care',
                          'Mental Health Treatment',
                          'Home Health Care',
                          'Medical Equipment',
                          'Home Modifications'
                        ].map((treatment) => (
                          <div key={treatment} className="flex items-center space-x-2">
                            <Checkbox
                              id={treatment}
                              checked={calculatorData.treatmentNeeds.includes(treatment)}
                              onCheckedChange={(checked) => handleTreatmentNeedsChange(treatment, checked as boolean)}
                            />
                            <Label htmlFor={treatment} className="text-sm">{treatment}</Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quality of Life & Fault */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold">Additional Factors</h3>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="qualityOfLifeImpact">Quality of Life Impact</Label>
                          <Select value={calculatorData.qualityOfLifeImpact} onValueChange={(value) => handleInputChange('qualityOfLifeImpact', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select impact level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="none">No impact</SelectItem>
                              <SelectItem value="minimal">Minimal impact</SelectItem>
                              <SelectItem value="moderate">Moderate impact</SelectItem>
                              <SelectItem value="significant">Significant impact</SelectItem>
                              <SelectItem value="severe">Severe impact</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="faultPercentage">Your Fault Percentage (if any)</Label>
                          <Select value={calculatorData.faultPercentage} onValueChange={(value) => handleInputChange('faultPercentage', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select fault %" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0">0% (Not at fault)</SelectItem>
                              <SelectItem value="10">10%</SelectItem>
                              <SelectItem value="25">25%</SelectItem>
                              <SelectItem value="50">50%</SelectItem>
                              <SelectItem value="75">75%</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <Button 
                      onClick={calculateCompensation} 
                      size="lg" 
                      className="w-full bg-accent hover:bg-accent/90"
                    >
                      <Calculator className="w-5 h-5 mr-2" />
                      Calculate Compensation Estimate
                    </Button>

                    {/* Results */}
                    {estimatedCompensation && (
                      <Card className="mt-8 p-6 bg-gradient-to-r from-accent/5 to-primary/5 border-accent/20">
                        <CardHeader className="text-center">
                          <CardTitle className="text-2xl font-bold text-accent flex items-center justify-center">
                            <DollarSign className="w-8 h-8 mr-2" />
                            Estimated Compensation Range
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                          <div className="text-4xl font-bold text-primary mb-4">
                            {formatCurrency(estimatedCompensation.low)} - {formatCurrency(estimatedCompensation.high)}
                          </div>
                          <p className="text-muted-foreground mb-4">
                            This is an estimate based on the information provided. Actual settlement values 
                            may vary based on case specifics and negotiation.
                          </p>
                          <Button size="lg" className="bg-primary hover:bg-primary/90">
                            <Phone className="w-5 h-5 mr-2" />
                            Get Accurate Valuation - Call Now
                          </Button>
                        </CardContent>
                      </Card>
                    )}
                  </CardContent>
                </Card>

                {/* Contact Form */}
                <Card className="mt-8 p-8 shadow-xl content-section">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold">Get Professional Case Evaluation</CardTitle>
                    <p className="text-muted-foreground">
                      Speak with an experienced car accident attorney for a more accurate assessment
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="contactFirstName">First Name</Label>
                          <Input
                            id="contactFirstName"
                            value={contactForm.firstName}
                            onChange={(e) => handleContactFormChange('firstName', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="contactLastName">Last Name</Label>
                          <Input
                            id="contactLastName"
                            value={contactForm.lastName}
                            onChange={(e) => handleContactFormChange('lastName', e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="contactEmail">Email</Label>
                          <Input
                            id="contactEmail"
                            type="email"
                            value={contactForm.email}
                            onChange={(e) => handleContactFormChange('email', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="contactPhone">Phone</Label>
                          <Input
                            id="contactPhone"
                            type="tel"
                            value={contactForm.phone}
                            onChange={(e) => handleContactFormChange('phone', e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="contactDescription">Brief Description of Your Case</Label>
                        <Textarea
                          id="contactDescription"
                          value={contactForm.description}
                          onChange={(e) => handleContactFormChange('description', e.target.value)}
                          placeholder="Please provide a brief description of your car accident and injuries..."
                          rows={4}
                        />
                      </div>
                      <Button type="submit" size="lg" className="w-full">
                        <Phone className="w-5 h-5 mr-2" />
                        Request Free Consultation
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Important Notes */}
                <Card className="content-section p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold flex items-center text-amber-800">
                      <AlertTriangle className="w-6 h-6 mr-2" />
                      Important Notes
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-amber-700 space-y-3">
                    <p className="text-sm">
                      • This calculator provides estimates only
                    </p>
                    <p className="text-sm">
                      • Actual settlements depend on case specifics
                    </p>
                    <p className="text-sm">
                      • California uses comparative fault rules
                    </p>
                    <p className="text-sm">
                      • Pain and suffering varies by individual
                    </p>
                    <p className="text-sm font-semibold">
                      Consult an attorney for accurate valuation
                    </p>
                  </CardContent>
                </Card>

                {/* Quick Facts */}
                <Card className="content-section">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold flex items-center">
                      <TrendingUp className="w-6 h-6 mr-2 text-accent" />
                      California Car Accident Facts
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-primary" />
                      <span className="text-sm">Average settlement: $15,000-$75,000</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-primary" />
                      <span className="text-sm">2-year statute of limitations</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-sm">Cases settle in 6-18 months</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <DollarSign className="w-5 h-5 text-primary" />
                      <span className="text-sm">No upfront attorney fees</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Card */}
                <Card className="content-section p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold text-primary">
                      Get Accurate Valuation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <p className="text-muted-foreground">
                      Speak with an experienced attorney for a precise case evaluation
                    </p>
                    <Button size="lg" className="w-full">
                      <Phone className="w-5 h-5 mr-2" />
                      Call (877) 647-1564
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      Free consultation • No upfront costs
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CarAccidentCompensationCalculator;