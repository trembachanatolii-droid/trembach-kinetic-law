import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription } from '@/components/ui/alert';
import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import GoBack from '@/components/GoBack';
import { 
  Calculator, 
  DollarSign, 
  AlertTriangle, 
  Info,
  Stethoscope,
  Clock,
  Scale,
  FileText
} from 'lucide-react';
import heroImage from '@/assets/sexual-abuse-calculator-hero.jpg';

gsap.registerPlugin(ScrollTrigger);

interface CalculatorData {
  ageAtAbuse: string;
  abuseType: string;
  therapyCosts: number;
  medicalCosts: number;
  lostWages: number;
  duration: string;
  institution: string;
  reportedToAuthorities: boolean;
}

const SexualAbuseCalculator: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [calculatorData, setCalculatorData] = useState<CalculatorData>({
    ageAtAbuse: '',
    abuseType: '',
    therapyCosts: 0,
    medicalCosts: 0,
    lostWages: 0,
    duration: '',
    institution: '',
    reportedToAuthorities: false
  });
  const [estimatedRange, setEstimatedRange] = useState<{ min: number; max: number } | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      const cards = contentRef.current.querySelectorAll('.content-card');
      
      gsap.fromTo(cards, 
        { 
          opacity: 0, 
          y: 50,
          scale: 0.95
        },
        {
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "cubic-bezier(0.22, 1, 0.36, 1)",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  const seo = {
    title: "Sexual Abuse Compensation Calculator | California Case Value Estimator",
    description: "Estimate potential compensation for your sexual abuse case in California. Free confidential calculator helps understand possible damages and recovery amounts."
  };

  const hero = {
    backgroundImage: heroImage,
    title: "Sexual Abuse Compensation Calculator",
    subtitle: "Estimate Your Potential Case Value in California"
  };

  const calculateEstimate = () => {
    // Basic calculation logic - this is simplified and would be more complex in practice
    let baseAmount = 50000; // Base compensation
    let multiplier = 1;

    // Age factor
    if (calculatorData.ageAtAbuse === 'child') {
      multiplier += 0.5; // Higher compensation for childhood abuse
    }

    // Abuse type factor
    if (calculatorData.abuseType === 'severe') {
      multiplier += 0.8;
    } else if (calculatorData.abuseType === 'moderate') {
      multiplier += 0.4;
    }

    // Duration factor
    if (calculatorData.duration === 'ongoing') {
      multiplier += 0.6;
    } else if (calculatorData.duration === 'multiple') {
      multiplier += 0.4;
    }

    // Institution factor
    if (calculatorData.institution === 'yes') {
      multiplier += 0.3; // Institutional liability often increases damages
    }

    // Add documented costs
    const documentedCosts = calculatorData.therapyCosts + calculatorData.medicalCosts + calculatorData.lostWages;
    
    const estimatedMin = Math.round((baseAmount * multiplier + documentedCosts) * 0.7);
    const estimatedMax = Math.round((baseAmount * multiplier + documentedCosts) * 1.8);

    setEstimatedRange({ min: estimatedMin, max: estimatedMax });
  };

  const handleInputChange = (field: keyof CalculatorData, value: any) => {
    setCalculatorData(prev => ({
      ...prev,
      [field]: value
    }));
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
      <SEO 
        title={seo.title}
        description={seo.description}
      />
      
      <Navigation />
      <GoBack fallbackPath="/practice-areas/sexual-abuse" />
      
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hero.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              {hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-muted/20">
        <div ref={contentRef} className="container mx-auto px-4 py-16">
          
          {/* Disclaimer */}
          <Alert className="content-card mb-8 border-yellow-200 bg-yellow-50">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription className="text-sm">
              <strong>Legal Disclaimer:</strong> This calculator provides only rough estimates based on general factors. 
              Actual case values vary significantly based on specific circumstances, evidence, jurisdiction, and many other factors. 
              This tool is for informational purposes only and does not constitute legal advice. 
              Consult with a qualified attorney for an accurate evaluation of your specific case.
            </AlertDescription>
          </Alert>
          
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Calculator Form */}
            <div className="content-card">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Calculator className="w-8 h-8 text-primary" />
                    Case Value Calculator
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Answer these questions to get an estimate of your potential compensation
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Your age when the abuse occurred</label>
                    <Select onValueChange={(value) => handleInputChange('ageAtAbuse', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select age range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="child">Under 18 (Minor)</SelectItem>
                        <SelectItem value="adult">18 or older (Adult)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Severity of abuse</label>
                    <Select onValueChange={(value) => handleInputChange('abuseType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select severity level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="severe">Severe (including penetration)</SelectItem>
                        <SelectItem value="moderate">Moderate (inappropriate touching)</SelectItem>
                        <SelectItem value="other">Other unwanted contact</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Duration of abuse</label>
                    <Select onValueChange={(value) => handleInputChange('duration', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single">Single incident</SelectItem>
                        <SelectItem value="multiple">Multiple incidents</SelectItem>
                        <SelectItem value="ongoing">Ongoing abuse</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Did the abuse involve an institution? (school, church, etc.)</label>
                    <Select onValueChange={(value) => handleInputChange('institution', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes, institution involved</SelectItem>
                        <SelectItem value="no">No, individual perpetrator only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Therapy/Counseling costs (if any)</label>
                    <Input 
                      type="number" 
                      placeholder="$0" 
                      onChange={(e) => handleInputChange('therapyCosts', Number(e.target.value))}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Medical expenses (if any)</label>
                    <Input 
                      type="number" 
                      placeholder="$0" 
                      onChange={(e) => handleInputChange('medicalCosts', Number(e.target.value))}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Lost wages/income (if any)</label>
                    <Input 
                      type="number" 
                      placeholder="$0" 
                      onChange={(e) => handleInputChange('lostWages', Number(e.target.value))}
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox 
                      id="reported" 
                      onCheckedChange={(checked) => handleInputChange('reportedToAuthorities', checked as boolean)}
                    />
                    <label htmlFor="reported" className="text-sm text-muted-foreground">
                      The abuse was reported to authorities (police, CPS, etc.)
                    </label>
                  </div>

                  <Button onClick={calculateEstimate} size="lg" className="w-full">
                    Calculate Estimated Range
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Results and Information */}
            <div className="space-y-6">
              
              {/* Results */}
              {estimatedRange && (
                <Card className="content-card bg-green-50 border-green-200">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-3 text-green-700">
                      <DollarSign className="w-8 h-8" />
                      Estimated Compensation Range
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-6">
                      <div className="text-4xl font-bold text-green-700 mb-2">
                        {formatCurrency(estimatedRange.min)} - {formatCurrency(estimatedRange.max)}
                      </div>
                      <p className="text-green-600">Estimated potential compensation</p>
                    </div>
                    
                    <Alert className="bg-blue-50 border-blue-200">
                      <Info className="h-4 w-4" />
                      <AlertDescription className="text-sm">
                        This is a rough estimate only. Actual compensation depends on many specific factors 
                        including evidence strength, defendant's assets, and case-specific circumstances. 
                        Contact an attorney for a detailed evaluation.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              )}

              {/* Factors Affecting Compensation */}
              <Card className="content-card">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Scale className="w-6 h-6 text-primary" />
                    Factors Affecting Compensation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Stethoscope className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Medical Impact</h4>
                      <p className="text-muted-foreground">Physical injuries, psychological trauma, ongoing therapy needs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Life Impact</h4>
                      <p className="text-muted-foreground">Effect on relationships, career, daily functioning</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Evidence Strength</h4>
                      <p className="text-muted-foreground">Documentation, witness testimony, medical records</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Defendant's Assets</h4>
                      <p className="text-muted-foreground">Individual or institutional defendant's ability to pay</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Types of Damages */}
              <Card className="content-card">
                <CardHeader>
                  <CardTitle className="text-xl">Types of Compensation Available</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span>Medical expenses (past and future)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span>Therapy and counseling costs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span>Lost wages and future earning capacity</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span>Pain and suffering</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span>Emotional distress</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span>Loss of enjoyment of life</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span>Punitive damages (in certain cases)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="content-card bg-primary text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4">Get a Professional Case Evaluation</h3>
                  <p className="mb-6 opacity-90">
                    For an accurate assessment of your case value, speak with our experienced attorneys.
                  </p>
                  <Button variant="secondary" size="lg" className="mb-4">
                    Free Case Evaluation
                  </Button>
                  <p className="text-sm opacity-75">No upfront costs • Completely confidential</p>
                </CardContent>
              </Card>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default SexualAbuseCalculator;