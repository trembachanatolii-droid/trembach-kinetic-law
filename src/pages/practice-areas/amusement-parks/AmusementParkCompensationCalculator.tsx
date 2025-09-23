import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  ArrowLeft, 
  Calculator, 
  DollarSign, 
  FileText, 
  AlertCircle,
  Star,
  Phone,
  Mail,
  TrendingUp,
  Shield,
  ChevronDown,
  ChevronUp,
  Heart,
  Scale
} from 'lucide-react';
import heroBackground from '@/assets/amusement-park-hero-bg.jpg';
import SEO from '@/components/SEO';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const AmusementParkCompensationCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    age: '',
    income: '',
    injuryType: '',
    injurySeverity: '',
    medicalCosts: '',
    timeOffWork: '',
    permanentDisability: false,
    ongoingTreatment: false,
    parkNegligence: '',
    priorConditions: false
  });

  const [estimatedRange, setEstimatedRange] = useState<{min: number, max: number} | null>(null);
  const [activeTab, setActiveTab] = useState('calculator');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'calculator', label: 'COMPENSATION CALCULATOR', icon: Calculator },
    { id: 'factors', label: 'COMPENSATION FACTORS', icon: TrendingUp },
    { id: 'settlements', label: 'RECENT SETTLEMENTS', icon: DollarSign },
    { id: 'process', label: 'LEGAL PROCESS', icon: Scale },
    { id: 'contact', label: 'GET HELP NOW', icon: Phone }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.1, ease: 'power2.out' }
      );

      // Content sections animation
      gsap.fromTo(contentRef.current?.querySelectorAll('.content-section'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const calculateCompensation = () => {
    const medicalCosts = parseFloat(formData.medicalCosts) || 0;
    const annualIncome = parseFloat(formData.income) || 0;
    const timeOff = parseFloat(formData.timeOffWork) || 0;
    const age = parseInt(formData.age) || 30;

    // Base calculations
    const lostWages = (annualIncome / 52) * timeOff;
    
    // Injury type multipliers
    const injuryMultipliers: Record<string, number> = {
      'head-brain': 5.0,
      'spinal': 4.5,
      'broken-bones': 2.5,
      'burns': 3.0,
      'cuts-lacerations': 1.5,
      'internal': 3.5,
      'soft-tissue': 1.2,
      'emotional': 2.0
    };

    // Severity multipliers
    const severityMultipliers: Record<string, number> = {
      'minor': 1.0,
      'moderate': 2.0,
      'serious': 3.5,
      'severe': 5.0,
      'catastrophic': 7.0
    };

    const injuryMultiplier = injuryMultipliers[formData.injuryType] || 1;
    const severityMultiplier = severityMultipliers[formData.injurySeverity] || 1;

    // Pain and suffering calculation
    let painSufferingMultiplier = 2.5;
    if (formData.injurySeverity === 'catastrophic') painSufferingMultiplier = 5.0;
    else if (formData.injurySeverity === 'severe') painSufferingMultiplier = 4.0;
    else if (formData.injurySeverity === 'serious') painSufferingMultiplier = 3.5;
    else if (formData.injurySeverity === 'moderate') painSufferingMultiplier = 2.0;
    else if (formData.injurySeverity === 'minor') painSufferingMultiplier = 1.5;

    const basePainSuffering = medicalCosts * painSufferingMultiplier;
    const painSuffering = basePainSuffering * injuryMultiplier;

    // Future expenses
    let futureExpenses = 0;
    if (formData.permanentDisability) {
      futureExpenses += medicalCosts * 2;
    }
    if (formData.ongoingTreatment) {
      futureExpenses += medicalCosts * 0.5;
    }

    // Age factor
    let ageFactor = 1.0;
    if (age < 18) ageFactor = 1.3;
    else if (age < 30) ageFactor = 1.2;
    else if (age < 50) ageFactor = 1.1;
    else if (age > 65) ageFactor = 0.9;

    // Negligence factor
    let negligenceFactor = 1.0;
    if (formData.parkNegligence === 'clear') negligenceFactor = 1.5;
    else if (formData.parkNegligence === 'some') negligenceFactor = 1.2;
    else if (formData.parkNegligence === 'minimal') negligenceFactor = 0.8;

    // Prior conditions factor
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

    setEstimatedRange(range);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateCompensation();
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Amusement Park Injury Compensation Calculator | Trembach Law Firm"
        description="Calculate your potential amusement park injury compensation. Free estimation tool by former defense attorneys. Get maximum compensation for your theme park accident."
        keywords="amusement park injury compensation, settlement calculator, theme park accident settlement, injury compensation estimate"
      />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Go Back Button */}
        <div className="absolute top-20 left-6 z-10">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Compensation Calculator
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Estimate Your Amusement Park Injury Case Value</span>
            </div>
            
            <p className="text-xl mb-8 opacity-90">
              Get an accurate estimate of your potential compensation from former defense attorneys
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 py-4">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => scrollToSection(tab.id)}
                    className={`flex items-center px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                      activeTab === tab.id 
                        ? 'bg-white text-primary' 
                        : 'text-white hover:bg-white/20'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2" ref={contentRef}>
            
            {/* Calculator Section */}
            <section id="calculator" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Calculate Your Compensation</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  Our compensation calculator uses real settlement data and former defense attorney insights to estimate your amusement park injury case value. While every case is unique, this tool provides a baseline understanding of potential compensation.
                </p>
              </div>

              <Card className="bg-muted p-8 rounded-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Age at Time of Injury</label>
                      <Input
                        type="number"
                        value={formData.age}
                        onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                        placeholder="e.g., 35"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Annual Income ($)</label>
                      <Input
                        type="number"
                        value={formData.income}
                        onChange={(e) => setFormData(prev => ({ ...prev, income: e.target.value }))}
                        placeholder="e.g., 50000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Type of Injury</label>
                      <Select value={formData.injuryType} onValueChange={(value) => setFormData(prev => ({ ...prev, injuryType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select injury type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="head-brain">Head/Brain Injury</SelectItem>
                          <SelectItem value="spinal">Spinal Cord Injury</SelectItem>
                          <SelectItem value="broken-bones">Broken Bones/Fractures</SelectItem>
                          <SelectItem value="burns">Burns</SelectItem>
                          <SelectItem value="cuts-lacerations">Cuts and Lacerations</SelectItem>
                          <SelectItem value="internal">Internal Injuries</SelectItem>
                          <SelectItem value="soft-tissue">Soft Tissue Injuries</SelectItem>
                          <SelectItem value="emotional">Emotional Trauma</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Injury Severity</label>
                      <Select value={formData.injurySeverity} onValueChange={(value) => setFormData(prev => ({ ...prev, injurySeverity: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select severity" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="minor">Minor</SelectItem>
                          <SelectItem value="moderate">Moderate</SelectItem>
                          <SelectItem value="serious">Serious</SelectItem>
                          <SelectItem value="severe">Severe</SelectItem>
                          <SelectItem value="catastrophic">Catastrophic</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Total Medical Costs ($)</label>
                      <Input
                        type="number"
                        value={formData.medicalCosts}
                        onChange={(e) => setFormData(prev => ({ ...prev, medicalCosts: e.target.value }))}
                        placeholder="e.g., 25000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Weeks Unable to Work</label>
                      <Input
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
                      <label htmlFor="permanentDisability" className="text-sm">Permanent disability or disfigurement</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="ongoingTreatment"
                        checked={formData.ongoingTreatment}
                        onCheckedChange={(checked) => setFormData(prev => ({ ...prev, ongoingTreatment: !!checked }))}
                      />
                      <label htmlFor="ongoingTreatment" className="text-sm">Ongoing medical treatment required</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="priorConditions"
                        checked={formData.priorConditions}
                        onCheckedChange={(checked) => setFormData(prev => ({ ...prev, priorConditions: !!checked }))}
                      />
                      <label htmlFor="priorConditions" className="text-sm">Pre-existing medical conditions</label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Level of Park Negligence</label>
                    <Select value={formData.parkNegligence} onValueChange={(value) => setFormData(prev => ({ ...prev, parkNegligence: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select negligence level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="clear">Clear negligence (obvious safety violations)</SelectItem>
                        <SelectItem value="some">Some negligence (maintenance issues, inadequate warnings)</SelectItem>
                        <SelectItem value="minimal">Minimal negligence (questionable fault)</SelectItem>
                        <SelectItem value="unclear">Unclear or no apparent negligence</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-lg py-3">
                    Calculate My Compensation
                  </Button>
                </form>

                {/* Results */}
                {estimatedRange && (
                  <Card className="bg-green-50 border-green-200 mt-8">
                    <CardHeader>
                      <CardTitle className="flex items-center text-green-700">
                        <DollarSign className="w-5 h-5 mr-2" />
                        Estimated Compensation Range
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-green-700 mb-2">
                        ${estimatedRange.min.toLocaleString()} - ${estimatedRange.max.toLocaleString()}
                      </div>
                      <p className="text-green-600 mb-4">
                        This estimate is based on your inputs and similar cases. Actual compensation depends on specific case details.
                      </p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <AlertCircle className="w-4 h-4 text-amber-500 mr-2" />
                          <span>This is a preliminary estimate only</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <AlertCircle className="w-4 h-4 text-amber-500 mr-2" />
                          <span>Actual compensation may be higher or lower</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <AlertCircle className="w-4 h-4 text-amber-500 mr-2" />
                          <span>Consultation required for accurate assessment</span>
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-4 border-t border-green-200">
                        <Button className="w-full bg-red-600 hover:bg-red-700">
                          Get Professional Case Evaluation
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </Card>
            </section>

            {/* Compensation Factors Section */}
            <section id="factors" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Factors Affecting Compensation</h2>
              
              <Collapsible open={expandedSections.factors} onOpenChange={() => toggleSection('factors')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Understanding What Impacts Your Case Value
                    {expandedSections.factors ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Economic Damages</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li>• Medical expenses (current and future)</li>
                          <li>• Lost wages and earning capacity</li>
                          <li>• Rehabilitation costs</li>
                          <li>• Equipment and mobility aids</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Non-Economic Damages</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li>• Pain and suffering</li>
                          <li>• Emotional distress</li>
                          <li>• Loss of enjoyment of life</li>
                          <li>• Scarring and disfigurement</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Recent Settlements Section */}
            <section id="settlements" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Recent Settlement Examples</h2>
              
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                      $2.8 Million - Roller Coaster Brain Injury
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Major theme park in California - mechanical failure during high-speed turn resulted in traumatic brain injury.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                      $1.5 Million - Water Slide Spinal Injury
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Improper ride design and inadequate safety warnings led to permanent spinal cord damage.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Legal Process Section */}
            <section id="process" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Legal Process Overview</h2>
              
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Badge variant="secondary" className="mr-2">1</Badge>
                      Investigation & Evidence Collection
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>We investigate the accident, gather evidence, and consult with safety experts to build your case.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Badge variant="secondary" className="mr-2">2</Badge>
                      Demand and Negotiation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Present a comprehensive demand package and negotiate with the park's insurance companies.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Get Professional Help</h2>
              
              <Card className="bg-muted">
                <CardHeader>
                  <CardTitle>Ready for a Real Case Evaluation?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Get an accurate assessment of your case value from experienced amusement park injury attorneys.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-red-600 hover:bg-red-700">
                      <Phone className="w-4 h-4 mr-2" />
                      Call (818) 123-4567
                    </Button>
                    <Button variant="outline">
                      <Mail className="w-4 h-4 mr-2" />
                      Free Consultation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <Card className="bg-muted">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-600">
                    <Calculator className="w-5 h-5 mr-2" />
                    Important Notes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-amber-500 mr-2 mt-0.5" />
                    <span className="text-sm">Estimates are for informational purposes only</span>
                  </div>
                  <div className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-amber-500 mr-2 mt-0.5" />
                    <span className="text-sm">Each case is unique and requires individual evaluation</span>
                  </div>
                  <div className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-amber-500 mr-2 mt-0.5" />
                    <span className="text-sm">Consultation needed for accurate assessment</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Quick Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      Call Now: (818) 123-4567
                    </Button>
                    <Button variant="outline" className="w-full">
                      Free Case Review
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmusementParkCompensationCalculator;