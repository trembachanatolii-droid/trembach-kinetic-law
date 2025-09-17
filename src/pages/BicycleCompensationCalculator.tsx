import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { 
  ArrowLeft, 
  Phone, 
  Mail, 
  MessageCircle, 
  Calculator,
  DollarSign,
  AlertTriangle,
  TrendingUp,
  FileText,
  Clock,
  Heart,
  Scale,
  Info
} from 'lucide-react';
import heroBackground from '@/assets/bicycle-compensation-calculator-hero.jpg';

const BicycleCompensationCalculator = () => {
  const [formData, setFormData] = useState({
    injuryType: '',
    medicalCosts: '',
    lostWages: '',
    painLevel: [5],
    treatmentDuration: '',
    ageRange: '',
    liability: ''
  });

  const [estimate, setEstimate] = useState<{
    low: number;
    high: number;
    medical: number;
    economic: number;
    nonEconomic: number;
  } | null>(null);

  const handleInputChange = (field: string, value: string | number[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateEstimate = () => {
    const medicalCosts = parseFloat(formData.medicalCosts) || 0;
    const lostWages = parseFloat(formData.lostWages) || 0;
    const painLevel = formData.painLevel[0];

    // Base multipliers for different injury types
    const injuryMultipliers: Record<string, number> = {
      'minor': 1.5,
      'moderate': 3,
      'severe-fractures': 4,
      'head-brain': 6,
      'spinal': 8,
      'permanent': 10
    };

    // Treatment duration multipliers
    const durationMultipliers: Record<string, number> = {
      'weeks': 1,
      'months': 1.5,
      'year-plus': 2.5,
      'permanent': 4
    };

    // Age multipliers (younger victims typically get higher awards)
    const ageMultipliers: Record<string, number> = {
      'under-25': 1.3,
      '25-40': 1.2,
      '41-55': 1,
      'over-55': 0.8
    };

    // Liability multipliers
    const liabilityMultipliers: Record<string, number> = {
      'clear': 1,
      'shared-minor': 0.8,
      'shared-major': 0.5,
      'disputed': 0.3
    };

    const baseMultiplier = (injuryMultipliers[formData.injuryType] || 2) *
                          (durationMultipliers[formData.treatmentDuration] || 1.5) *
                          (ageMultipliers[formData.ageRange] || 1) *
                          (liabilityMultipliers[formData.liability] || 0.8);

    // Pain and suffering calculation
    const painMultiplier = Math.max(1.5, painLevel * 0.5);
    
    const economicDamages = medicalCosts + lostWages;
    const nonEconomicBase = economicDamages * baseMultiplier * painMultiplier;
    
    // Conservative and optimistic estimates
    const lowEstimate = economicDamages + (nonEconomicBase * 0.7);
    const highEstimate = economicDamages + (nonEconomicBase * 1.5);

    setEstimate({
      low: Math.round(lowEstimate),
      high: Math.round(highEstimate),
      medical: medicalCosts,
      economic: economicDamages,
      nonEconomic: Math.round(nonEconomicBase)
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Go Back Button */}
      <Button
        variant="ghost"
        size="sm"
        className="fixed top-20 left-4 z-[60] bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white/95"
        onClick={() => window.history.back()}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Go Back
      </Button>

      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/80"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm font-semibold">
            Bicycle Accident Compensation Calculator
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Estimate Your <span className="text-indigo-300">Bicycle Accident</span> Case Value
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get a preliminary estimate of your bicycle accident compensation based on injury severity, 
            medical costs, and other key factors. Professional case evaluation included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Call (818) 123-4567
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg backdrop-blur-sm">
              <Scale className="w-5 h-5 mr-2" />
              Free Case Review
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Calculator Form */}
          <div>
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Calculator className="w-6 h-6 mr-2 text-red-600" />
                  Bicycle Accident Calculator
                </CardTitle>
                <p className="text-muted-foreground">
                  Enter your accident details below to get an estimated compensation range.
                </p>
              </CardHeader>
              
              <CardContent className="px-0 space-y-6">
                
                {/* Injury Type */}
                <div>
                  <Label htmlFor="injuryType">Type of Injury *</Label>
                  <Select value={formData.injuryType} onValueChange={(value) => handleInputChange('injuryType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select injury type..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="minor">Minor injuries (cuts, bruises, minor sprains)</SelectItem>
                      <SelectItem value="moderate">Moderate injuries (fractures, concussion)</SelectItem>
                      <SelectItem value="severe-fractures">Severe fractures (multiple bones, surgery needed)</SelectItem>
                      <SelectItem value="head-brain">Head/Brain injury (TBI, skull fracture)</SelectItem>
                      <SelectItem value="spinal">Spinal cord injury</SelectItem>
                      <SelectItem value="permanent">Permanent disability/disfigurement</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Medical Costs */}
                <div>
                  <Label htmlFor="medicalCosts">Current Medical Expenses</Label>
                  <Input
                    id="medicalCosts"
                    type="number"
                    placeholder="Enter amount (e.g., 15000)"
                    value={formData.medicalCosts}
                    onChange={(e) => handleInputChange('medicalCosts', e.target.value)}
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Include hospital bills, doctor visits, tests, medications, therapy
                  </p>
                </div>

                {/* Lost Wages */}
                <div>
                  <Label htmlFor="lostWages">Lost Wages</Label>
                  <Input
                    id="lostWages"
                    type="number"
                    placeholder="Enter amount (e.g., 5000)"
                    value={formData.lostWages}
                    onChange={(e) => handleInputChange('lostWages', e.target.value)}
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Total income lost due to time off work
                  </p>
                </div>

                {/* Pain Level */}
                <div>
                  <Label>Pain and Suffering Level: {formData.painLevel[0]}/10</Label>
                  <div className="mt-2">
                    <Slider
                      value={formData.painLevel}
                      onValueChange={(value) => handleInputChange('painLevel', value)}
                      max={10}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>Minimal</span>
                    <span>Moderate</span>
                    <span>Severe</span>
                  </div>
                </div>

                {/* Treatment Duration */}
                <div>
                  <Label htmlFor="treatmentDuration">Expected Treatment Duration *</Label>
                  <Select value={formData.treatmentDuration} onValueChange={(value) => handleInputChange('treatmentDuration', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weeks">Few weeks</SelectItem>
                      <SelectItem value="months">Several months</SelectItem>
                      <SelectItem value="year-plus">1+ years</SelectItem>
                      <SelectItem value="permanent">Permanent/Ongoing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Age Range */}
                <div>
                  <Label htmlFor="ageRange">Your Age Range *</Label>
                  <Select value={formData.ageRange} onValueChange={(value) => handleInputChange('ageRange', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select age range..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-25">Under 25</SelectItem>
                      <SelectItem value="25-40">25-40</SelectItem>
                      <SelectItem value="41-55">41-55</SelectItem>
                      <SelectItem value="over-55">Over 55</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Liability */}
                <div>
                  <Label htmlFor="liability">Driver Liability *</Label>
                  <Select value={formData.liability} onValueChange={(value) => handleInputChange('liability', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select liability..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clear">Driver clearly at fault</SelectItem>
                      <SelectItem value="shared-minor">Shared fault (you minor %)</SelectItem>
                      <SelectItem value="shared-major">Shared fault (you major %)</SelectItem>
                      <SelectItem value="disputed">Liability disputed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={calculateEstimate} 
                  className="w-full" 
                  size="lg"
                  disabled={!formData.injuryType || !formData.treatmentDuration || !formData.ageRange || !formData.liability}
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  Calculate Compensation Estimate
                </Button>

              </CardContent>
            </Card>
          </div>

          {/* Results & Information */}
          <div className="space-y-6">
            
            {/* Calculation Results */}
            {estimate && (
              <Card className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-xl font-bold flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                    Estimated Compensation Range
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <div className="space-y-4">
                    <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                      <p className="text-sm text-green-700 mb-2">Estimated Settlement Range</p>
                      <p className="text-3xl font-bold text-green-600">
                        {formatCurrency(estimate.low)} - {formatCurrency(estimate.high)}
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Economic Damages:</span>
                        <span className="font-semibold">{formatCurrency(estimate.economic)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Pain & Suffering:</span>
                        <span className="font-semibold">{formatCurrency(estimate.nonEconomic)}</span>
                      </div>
                      <hr />
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span>Total Estimate:</span>
                        <span className="text-green-600">{formatCurrency(estimate.low)}+</span>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200">
                      <p className="text-sm text-blue-700">
                        <Info className="w-4 h-4 inline mr-1" />
                        This is a preliminary estimate. Actual compensation depends on many factors. 
                        Contact us for a detailed case evaluation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Factors Affecting Value */}
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-xl font-bold flex items-center">
                  <Scale className="w-5 h-5 mr-2 text-red-600" />
                  Factors That Increase Case Value
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <DollarSign className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                    <span className="text-sm">Severe or permanent injuries</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <DollarSign className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                    <span className="text-sm">High medical expenses and ongoing treatment</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <DollarSign className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                    <span className="text-sm">Lost wages and reduced earning capacity</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <DollarSign className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                    <span className="text-sm">Clear driver liability (DUI, texting, violations)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <DollarSign className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                    <span className="text-sm">Young age (longer life impact)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <DollarSign className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                    <span className="text-sm">Good documentation and witness testimony</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <DollarSign className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                    <span className="text-sm">Experienced bicycle accident attorney</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-xl font-bold">Get Professional Case Review</CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <p className="text-muted-foreground mb-4">
                  This calculator provides estimates only. For accurate case valuation, contact our bicycle accident specialists.
                </p>
                <div className="space-y-3">
                  <Button className="w-full" size="lg">
                    <Phone className="w-4 h-4 mr-2" />
                    Call (818) 123-4567
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <FileText className="w-4 h-4 mr-2" />
                    Free Case Evaluation
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Live Chat
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-3 text-center">
                  No fees unless we win your case
                </p>
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <Card className="p-4 bg-yellow-50 border-yellow-200">
              <CardContent className="px-0 pb-0">
                <p className="text-sm text-yellow-800">
                  <AlertTriangle className="w-4 h-4 inline mr-2" />
                  <strong>Disclaimer:</strong> This calculator provides estimates for educational purposes only. 
                  Actual compensation varies significantly based on specific case circumstances, evidence, 
                  jurisdiction, and many other factors. Past results do not guarantee future outcomes.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BicycleCompensationCalculator;