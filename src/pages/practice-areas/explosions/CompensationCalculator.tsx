import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Calculator, 
  DollarSign, 
  TrendingUp,
  AlertTriangle,
  Info,
  ArrowLeft,
  FileText,
  Clock,
  Users,
  Shield
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';
import heroBackground from '@/assets/explosions-compensation-calculator-hero.jpg';

gsap.registerPlugin(ScrollTrigger);

interface CalculatorData {
  incomeLevel: string;
  ageGroup: string;
  injurySeverity: string;
  medicalCosts: string;
  timeOffWork: string;
  familyImpact: string;
  explosionType: string;
  negligenceLevel: string;
}

const ExplosionsCompensationCalculator: React.FC = () => {
  const [calculatorData, setCalculatorData] = useState<CalculatorData>({
    incomeLevel: '',
    ageGroup: '',
    injurySeverity: '',
    medicalCosts: '',
    timeOffWork: '',
    familyImpact: '',
    explosionType: '',
    negligenceLevel: ''
  });

  const [calculatedAmount, setCalculatedAmount] = useState<{
    min: number;
    max: number;
    average: number;
  } | null>(null);
  
  const [showResults, setShowResults] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const calculatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );

      // Calculator animation
      gsap.fromTo(calculatorRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: calculatorRef.current,
            start: 'top 80%'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setCalculatorData(prev => ({ ...prev, [field]: value }));
  };

  const calculateCompensation = () => {
    // Base calculation factors
    let baseAmount = 50000;
    let multiplier = 1;

    // Income level adjustments
    const incomeMultipliers = {
      'under-30k': 0.7,
      '30k-50k': 1.0,
      '50k-75k': 1.3,
      '75k-100k': 1.6,
      'over-100k': 2.0
    };

    // Age adjustments
    const ageMultipliers = {
      'under-25': 1.4,
      '25-35': 1.3,
      '35-45': 1.2,
      '45-55': 1.1,
      '55-65': 1.0,
      'over-65': 0.8
    };

    // Injury severity adjustments
    const injuryMultipliers = {
      'minor': 0.5,
      'moderate': 1.0,
      'severe': 2.0,
      'catastrophic': 3.5,
      'permanent-disability': 4.0
    };

    // Medical costs adjustments
    const medicalMultipliers = {
      'under-10k': 0.8,
      '10k-50k': 1.0,
      '50k-100k': 1.3,
      '100k-250k': 1.6,
      'over-250k': 2.2
    };

    // Explosion type adjustments
    const explosionMultipliers = {
      'industrial': 1.2,
      'chemical': 1.5,
      'gas': 1.1,
      'electrical': 1.0,
      'pipeline': 1.4,
      'refinery': 1.6,
      'construction': 1.1
    };

    // Apply all multipliers
    if (calculatorData.incomeLevel) {
      multiplier *= incomeMultipliers[calculatorData.incomeLevel as keyof typeof incomeMultipliers] || 1;
    }
    if (calculatorData.ageGroup) {
      multiplier *= ageMultipliers[calculatorData.ageGroup as keyof typeof ageMultipliers] || 1;
    }
    if (calculatorData.injurySeverity) {
      multiplier *= injuryMultipliers[calculatorData.injurySeverity as keyof typeof injuryMultipliers] || 1;
    }
    if (calculatorData.medicalCosts) {
      multiplier *= medicalMultipliers[calculatorData.medicalCosts as keyof typeof medicalMultipliers] || 1;
    }
    if (calculatorData.explosionType) {
      multiplier *= explosionMultipliers[calculatorData.explosionType as keyof typeof explosionMultipliers] || 1;
    }

    // Calculate range
    const average = baseAmount * multiplier;
    const min = average * 0.6;
    const max = average * 1.8;

    setCalculatedAmount({
      min: Math.round(min),
      max: Math.round(max),
      average: Math.round(average)
    });

    setShowResults(true);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const resetCalculator = () => {
    setCalculatorData({
      incomeLevel: '',
      ageGroup: '',
      injurySeverity: '',
      medicalCosts: '',
      timeOffWork: '',
      familyImpact: '',
      explosionType: '',
      negligenceLevel: ''
    });
    setCalculatedAmount(null);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="California Explosion Injury Compensation Calculator | Free Estimate"
        description="Calculate potential compensation for your explosion injury case in California. Get a free estimate of what your explosion injury claim might be worth."
        canonical="https://www.trembachlawfirm.com/practice-areas/explosions/compensation-calculator"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="hero-content text-center text-white">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                Explosion Injury Compensation Calculator
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-6">
                Estimate Your Potential Case Value
              </p>
              <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                Get a free, confidential estimate of what your explosion injury case might be worth based on California legal standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Go Back Button */}
      <GoBack className="container mx-auto px-8 pt-8" fallbackPath="/practice-areas/explosions" />

      {/* Main Content */}
      <div className="container mx-auto px-8 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Important Disclaimer */}
          <Alert className="mb-8">
            <Info className="h-4 w-4" />
            <AlertDescription className="text-sm">
              <strong>Important:</strong> This calculator provides estimates only. Actual compensation depends on many factors specific to your case. 
              Consult with an experienced explosion injury attorney for a personalized evaluation.
            </AlertDescription>
          </Alert>

          {/* Calculator Form */}
          <Card className="shadow-lg mb-8" ref={calculatorRef}>
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Calculator className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-3xl font-bold">Compensation Calculator</CardTitle>
              <p className="text-muted-foreground">
                Answer the questions below to get your estimated compensation range
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Annual Income */}
                <div className="space-y-2">
                  <Label>Annual Income Before Injury</Label>
                  <Select value={calculatorData.incomeLevel} onValueChange={(value) => handleInputChange('incomeLevel', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select income range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-30k">Under $30,000</SelectItem>
                      <SelectItem value="30k-50k">$30,000 - $50,000</SelectItem>
                      <SelectItem value="50k-75k">$50,000 - $75,000</SelectItem>
                      <SelectItem value="75k-100k">$75,000 - $100,000</SelectItem>
                      <SelectItem value="over-100k">Over $100,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Age Group */}
                <div className="space-y-2">
                  <Label>Age at Time of Injury</Label>
                  <Select value={calculatorData.ageGroup} onValueChange={(value) => handleInputChange('ageGroup', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select age group" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-25">Under 25</SelectItem>
                      <SelectItem value="25-35">25-35</SelectItem>
                      <SelectItem value="35-45">35-45</SelectItem>
                      <SelectItem value="45-55">45-55</SelectItem>
                      <SelectItem value="55-65">55-65</SelectItem>
                      <SelectItem value="over-65">Over 65</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Injury Severity */}
                <div className="space-y-2">
                  <Label>Injury Severity</Label>
                  <Select value={calculatorData.injurySeverity} onValueChange={(value) => handleInputChange('injurySeverity', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select injury severity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="minor">Minor injuries</SelectItem>
                      <SelectItem value="moderate">Moderate injuries</SelectItem>
                      <SelectItem value="severe">Severe injuries</SelectItem>
                      <SelectItem value="catastrophic">Catastrophic injuries</SelectItem>
                      <SelectItem value="permanent-disability">Permanent disability</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Medical Costs */}
                <div className="space-y-2">
                  <Label>Medical Costs (Current + Future)</Label>
                  <Select value={calculatorData.medicalCosts} onValueChange={(value) => handleInputChange('medicalCosts', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select cost range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-10k">Under $10,000</SelectItem>
                      <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                      <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                      <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                      <SelectItem value="over-250k">Over $250,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Time Off Work */}
                <div className="space-y-2">
                  <Label>Time Unable to Work</Label>
                  <Select value={calculatorData.timeOffWork} onValueChange={(value) => handleInputChange('timeOffWork', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No time off</SelectItem>
                      <SelectItem value="days">Days to weeks</SelectItem>
                      <SelectItem value="months">Months</SelectItem>
                      <SelectItem value="year">Over a year</SelectItem>
                      <SelectItem value="permanent">Permanently unable</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Explosion Type */}
                <div className="space-y-2">
                  <Label>Type of Explosion</Label>
                  <Select value={calculatorData.explosionType} onValueChange={(value) => handleInputChange('explosionType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select explosion type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="industrial">Industrial Explosion</SelectItem>
                      <SelectItem value="chemical">Chemical Explosion</SelectItem>
                      <SelectItem value="gas">Gas Explosion</SelectItem>
                      <SelectItem value="electrical">Electrical Explosion</SelectItem>
                      <SelectItem value="pipeline">Pipeline Explosion</SelectItem>
                      <SelectItem value="refinery">Refinery Explosion</SelectItem>
                      <SelectItem value="construction">Construction Site</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

              </div>

              {/* Calculate Button */}
              <div className="text-center pt-6">
                <Button 
                  onClick={calculateCompensation}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate My Compensation
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          {showResults && calculatedAmount && (
            <Card className="shadow-lg mb-8 border-primary">
              <CardHeader className="text-center bg-primary/5">
                <CardTitle className="text-2xl font-bold text-primary">
                  Your Estimated Compensation Range
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="p-6 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-2">
                      {formatCurrency(calculatedAmount.min)}
                    </div>
                    <div className="text-sm text-muted-foreground">Minimum Estimate</div>
                  </div>
                  
                  <div className="p-6 bg-primary/10 rounded-lg border-2 border-primary">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {formatCurrency(calculatedAmount.average)}
                    </div>
                    <div className="text-sm text-primary font-semibold">Average Estimate</div>
                  </div>
                  
                  <div className="p-6 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-2">
                      {formatCurrency(calculatedAmount.max)}
                    </div>
                    <div className="text-sm text-muted-foreground">Maximum Estimate</div>
                  </div>
                </div>

                <Alert className="mt-6">
                  <TrendingUp className="h-4 w-4" />
                  <AlertDescription>
                    This estimate is based on typical California explosion injury cases. Your actual compensation may be higher or lower 
                    depending on specific circumstances, evidence, and legal representation quality.
                  </AlertDescription>
                </Alert>

                <div className="text-center mt-6 space-y-4">
                  <Button 
                    onClick={resetCalculator}
                    variant="outline"
                    className="mr-4"
                  >
                    Reset Calculator
                  </Button>
                  <Button 
                    onClick={() => window.location.href = '/practice-areas/explosions/case-evaluation'}
                    className="bg-primary hover:bg-primary/90"
                  >
                    Get Free Case Evaluation
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Legal Disclaimer */}
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-yellow-600" />
                Legal Disclaimer
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>
                <strong>This calculator is for informational purposes only and does not constitute legal advice.</strong> 
                The estimates provided are based on general factors and should not be relied upon as a guarantee of compensation.
              </p>
              <p>
                Actual case values depend on numerous specific factors including the strength of evidence, defendant's ability to pay, 
                jury composition, attorney skill, and many other variables that cannot be captured in a calculator.
              </p>
              <p>
                <strong>No attorney-client relationship is formed</strong> by using this calculator. For a personalized case evaluation, 
                please consult with a qualified California explosion injury attorney.
              </p>
              <p className="font-semibold">
                Results are estimates only. Past results do not guarantee future outcomes.
              </p>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-6">Ready to Take the Next Step?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Free Case Evaluation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Get a detailed analysis of your specific case from our experienced attorneys.</p>
                  <Button 
                    onClick={() => window.location.href = '/practice-areas/explosions/case-evaluation'}
                    className="w-full"
                  >
                    Start Evaluation
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Speak with an Attorney</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Discuss your case directly with one of our explosion injury specialists.</p>
                  <Button 
                    variant="outline"
                    className="w-full"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    Call (818) 123-4567
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplosionsCompensationCalculator;