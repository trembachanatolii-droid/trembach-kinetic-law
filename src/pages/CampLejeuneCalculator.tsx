import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  ArrowLeft,
  Phone,
  Calculator,
  AlertTriangle,
  DollarSign,
  Info
} from 'lucide-react';
import heroBackground from '@/assets/camp-lejeune-calculator-hero.jpg';
import SEO from '@/components/SEO';

gsap.registerPlugin(ScrollTrigger);

const CampLejeuneCalculator: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    condition: '',
    age: '',
    severity: '',
    timeAtBase: '',
    additionalConditions: '',
    pathway: ''
  });
  const [estimate, setEstimate] = useState<{
    low: number;
    high: number;
    pathway: string;
  } | null>(null);

  const heroRef = useRef<HTMLDivElement>(null);
  const calculatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );

      gsap.fromTo(calculatorRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.3,
          scrollTrigger: {
            trigger: calculatorRef.current,
            start: 'top 80%'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const calculateEstimate = () => {
    if (!formData.condition || !formData.age || !formData.severity) {
      alert('Please fill in all required fields to calculate your estimate.');
      return;
    }

    let baseAmount = 0;
    let pathway = 'Traditional Litigation';

    // Base amounts by condition
    switch (formData.condition) {
      case 'parkinsons':
        baseAmount = 825000; // Average of $450K-$1.2M
        break;
      case 'wrongful-death':
        baseAmount = 1000000; // Average of $500K-$1.5M
        break;
      case 'leukemia':
        baseAmount = 700000; // Average of $400K-$1M
        break;
      case 'myeloma':
        baseAmount = 650000; // Average of $350K-$950K
        break;
      case 'kidney-cancer':
        baseAmount = 600000; // Average of $300K-$900K
        break;
      case 'bladder-cancer':
        baseAmount = 500000; // Average of $200K-$800K
        break;
      case 'liver-cancer':
        baseAmount = 500000; // Average of $250K-$750K
        break;
      case 'lymphoma':
        baseAmount = 575000; // Average of $300K-$850K
        break;
      case 'birth-defects':
        baseAmount = 400000; // Average of $200K-$600K
        break;
      default:
        baseAmount = 350000; // Other conditions
    }

    // Adjust for severity
    const severityMultiplier = formData.severity === 'severe' ? 1.3 : 
                              formData.severity === 'moderate' ? 1.0 : 0.7;
    
    // Adjust for age (younger = higher settlements)
    const ageMultiplier = parseInt(formData.age) < 50 ? 1.2 :
                         parseInt(formData.age) < 70 ? 1.0 : 0.8;

    // Adjust for pathway
    if (formData.pathway === 'elective') {
      baseAmount = Math.min(baseAmount, 150000); // Cap at $150K for elective option
      pathway = 'Elective Option (Fast Track)';
    }

    const adjustedAmount = baseAmount * severityMultiplier * ageMultiplier;
    
    setEstimate({
      low: Math.round(adjustedAmount * 0.7),
      high: Math.round(adjustedAmount * 1.3),
      pathway
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Camp Lejeune Compensation Calculator | Estimate Your Settlement"
        description="Calculate your potential Camp Lejeune settlement amount. Free compensation calculator based on condition, severity, and case factors. Former defense attorney insights."
        canonical="/camp-lejeune-calculator"
      />

      {/* Go Back Button - Fade in on scroll */}
      <div className={`fixed top-24 left-6 z-50 transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
        <Button 
          variant="ghost" 
          onClick={() => window.history.back()}
          className="flex items-center gap-2 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Go Back
        </Button>
      </div>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-2xl">
              Camp Lejeune Compensation Calculator
            </h1>
            <p className="text-xl drop-shadow-lg">
              Estimate your potential settlement based on your specific circumstances
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Calculator Column */}
          <div ref={calculatorRef}>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <Calculator className="w-6 h-6 mr-2" />
                  Compensation Calculator
                </CardTitle>
                <p className="text-muted-foreground text-lg">Answer these questions to get an estimate of your potential settlement.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="condition" className="text-base font-semibold">Primary Health Condition *</Label>
                  <Select value={formData.condition} onValueChange={(value) => setFormData(prev => ({ ...prev, condition: value }))}>
                    <SelectTrigger className="text-base">
                      <SelectValue placeholder="Select your condition..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="parkinsons">Parkinson's Disease</SelectItem>
                      <SelectItem value="wrongful-death">Wrongful Death</SelectItem>
                      <SelectItem value="leukemia">Leukemia</SelectItem>
                      <SelectItem value="myeloma">Multiple Myeloma</SelectItem>
                      <SelectItem value="kidney-cancer">Kidney Cancer</SelectItem>
                      <SelectItem value="bladder-cancer">Bladder Cancer</SelectItem>
                      <SelectItem value="liver-cancer">Liver Cancer</SelectItem>
                      <SelectItem value="lymphoma">Non-Hodgkin's Lymphoma</SelectItem>
                      <SelectItem value="birth-defects">Birth Defects</SelectItem>
                      <SelectItem value="other">Other Condition</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="severity" className="text-base font-semibold">Condition Severity *</Label>
                  <Select value={formData.severity} onValueChange={(value) => setFormData(prev => ({ ...prev, severity: value }))}>
                    <SelectTrigger className="text-base">
                      <SelectValue placeholder="Select severity..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mild">Mild - Early stage, minimal impact</SelectItem>
                      <SelectItem value="moderate">Moderate - Noticeable impact on daily life</SelectItem>
                      <SelectItem value="severe">Severe - Significant disability or advanced stage</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="age" className="text-base font-semibold">Age at Diagnosis *</Label>
                  <Select value={formData.age} onValueChange={(value) => setFormData(prev => ({ ...prev, age: value }))}>
                    <SelectTrigger className="text-base">
                      <SelectValue placeholder="Select age range..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-40">Under 40</SelectItem>
                      <SelectItem value="40-49">40-49</SelectItem>
                      <SelectItem value="50-59">50-59</SelectItem>
                      <SelectItem value="60-69">60-69</SelectItem>
                      <SelectItem value="70-79">70-79</SelectItem>
                      <SelectItem value="over-80">Over 80</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="timeAtBase" className="text-base font-semibold">Time at Camp Lejeune</Label>
                  <Select value={formData.timeAtBase} onValueChange={(value) => setFormData(prev => ({ ...prev, timeAtBase: value }))}>
                    <SelectTrigger className="text-base">
                      <SelectValue placeholder="Select time period..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="less-1-year">Less than 1 year</SelectItem>
                      <SelectItem value="1-3-years">1-3 years</SelectItem>
                      <SelectItem value="3-5-years">3-5 years</SelectItem>
                      <SelectItem value="over-5-years">Over 5 years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="pathway" className="text-base font-semibold">Preferred Legal Pathway</Label>
                  <Select value={formData.pathway} onValueChange={(value) => setFormData(prev => ({ ...prev, pathway: value }))}>
                    <SelectTrigger className="text-base">
                      <SelectValue placeholder="Select pathway..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="litigation">Traditional Litigation (Higher compensation, longer timeline)</SelectItem>
                      <SelectItem value="elective">Elective Option (Faster settlement, lower amount)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={calculateEstimate}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 text-lg"
                >
                  <DollarSign className="w-5 h-5 mr-2" />
                  Calculate My Estimate
                </Button>
              </CardContent>
            </Card>

            {/* Legal Disclaimer */}
            <Alert className="mt-6">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="text-sm">
                <strong>Legal Disclaimer:</strong> This calculator provides estimates only and should not be considered a guarantee of settlement amounts. Actual compensation depends on many case-specific factors including medical records, exposure evidence, and legal precedents. Consult with an attorney for accurate case evaluation.
              </AlertDescription>
            </Alert>
          </div>

          {/* Results Column */}
          <div>
            {estimate ? (
              <Card className="glass-card border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Your Estimated Settlement Range</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">
                      ${estimate.low.toLocaleString()} - ${estimate.high.toLocaleString()}
                    </div>
                    <div className="text-lg text-muted-foreground">
                      via {estimate.pathway}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-base">Important Notes:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Estimates based on similar case outcomes</li>
                        <li>• Actual settlements may vary significantly</li>
                        <li>• Timeline varies: Elective (3-6 months), Litigation (12-24 months)</li>
                        <li>• Attorney fees: 20% (administrative) or 25% (litigation)</li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-3"
                        onClick={() => window.location.href = '/camp-lejeune-case-evaluation'}
                      >
                        Get Free Professional Case Review
                      </Button>
                      
                      <Button 
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-white text-lg py-3"
                        onClick={() => window.location.href = 'tel:8181234567'}
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        Call (818) 123-4567
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-xl">Settlement Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <Info className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-base">How This Calculator Works</h4>
                      <p className="text-sm text-muted-foreground">Our calculator uses data from actual Camp Lejeune settlements, considering factors like condition type, severity, age, and legal pathway to provide realistic estimates.</p>
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-base">Typical Settlement Ranges:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Parkinson's Disease: $450,000-$1.2M</li>
                      <li>• Wrongful Death: $500,000-$1.5M+</li>
                      <li>• Cancer Cases: $200,000-$900,000</li>
                      <li>• Birth Defects: $200,000-$600,000</li>
                    </ul>
                  </div>

                  <Alert>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription className="text-sm">
                      Fill out the calculator form to get your personalized estimate based on your specific circumstances.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampLejeuneCalculator;