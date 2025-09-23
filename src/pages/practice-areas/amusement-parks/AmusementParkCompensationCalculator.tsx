import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft, Calculator, DollarSign, Star } from 'lucide-react';
import heroBackground from '@/assets/amusement-park-compensation-hero.jpg';
import SEO from '@/components/SEO';

const AmusementParkCompensationCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    injuryType: '',
    medicalCosts: '',
    timeOffWork: '',
    permanentDisability: false,
    ongoingTreatment: false
  });

  const [estimatedRange, setEstimatedRange] = useState<{min: number, max: number} | null>(null);

  const calculateCompensation = () => {
    const medicalCosts = parseFloat(formData.medicalCosts) || 0;
    const timeOff = parseFloat(formData.timeOffWork) || 0;

    // Base calculations
    const lostWages = timeOff * 800; // Approximate weekly wage
    
    // Injury multipliers
    const injuryMultipliers: Record<string, number> = {
      'head-brain': 5.0,
      'spinal': 4.5,
      'broken-bones': 2.5,
      'burns': 3.0,
      'cuts': 1.5,
      'soft-tissue': 1.2
    };

    const multiplier = injuryMultipliers[formData.injuryType] || 2.0;
    const painSuffering = medicalCosts * multiplier;

    // Additional factors
    let additionalDamages = 0;
    if (formData.permanentDisability) additionalDamages += medicalCosts;
    if (formData.ongoingTreatment) additionalDamages += medicalCosts * 0.5;

    const total = medicalCosts + lostWages + painSuffering + additionalDamages;

    setEstimatedRange({
      min: Math.round(total * 0.7),
      max: Math.round(total * 1.3)
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateCompensation();
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Amusement Park Injury Compensation Calculator | Trembach Law Firm"
        description="Calculate your potential amusement park injury compensation. Free estimation tool by experienced attorneys."
        keywords="amusement park injury compensation, settlement calculator, theme park accident settlement"
      />

      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="absolute top-6 left-6">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-black/30 text-white hover:bg-black/50"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Compensation Calculator
          </h1>
          
          <div className="flex items-center justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
            ))}
            <span className="ml-2 text-white">Estimate Your Case Value</span>
          </div>
          
          <p className="text-lg text-white opacity-90">
            Get an estimate of your potential amusement park injury compensation
          </p>
        </div>
      </section>

      {/* Calculator Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Calculator Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-primary" />
                  Compensation Calculator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Type of Injury</label>
                    <Select value={formData.injuryType} onValueChange={(value) => setFormData(prev => ({ ...prev, injuryType: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select injury type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="head-brain">Head/Brain Injury</SelectItem>
                        <SelectItem value="spinal">Spinal Cord Injury</SelectItem>
                        <SelectItem value="broken-bones">Broken Bones</SelectItem>
                        <SelectItem value="burns">Burns</SelectItem>
                        <SelectItem value="cuts">Cuts and Lacerations</SelectItem>
                        <SelectItem value="soft-tissue">Soft Tissue Injuries</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

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

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="permanentDisability"
                        checked={formData.permanentDisability}
                        onCheckedChange={(checked) => setFormData(prev => ({ ...prev, permanentDisability: !!checked }))}
                      />
                      <label htmlFor="permanentDisability" className="text-sm">Permanent disability</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="ongoingTreatment"
                        checked={formData.ongoingTreatment}
                        onCheckedChange={(checked) => setFormData(prev => ({ ...prev, ongoingTreatment: !!checked }))}
                      />
                      <label htmlFor="ongoingTreatment" className="text-sm">Ongoing treatment required</label>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Calculate My Compensation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Results & Info */}
          <div className="space-y-6">
            
            {/* Results */}
            {estimatedRange && (
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-700">
                    <DollarSign className="w-5 h-5 mr-2" />
                    Estimated Compensation Range
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      ${estimatedRange.min.toLocaleString()} - ${estimatedRange.max.toLocaleString()}
                    </div>
                    <p className="text-sm text-green-700">
                      This is an estimate based on similar cases. Actual compensation may vary.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Important Notice */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-700">Important to Know</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-blue-700">
                <div>• This is an estimate only</div>
                <div>• Each case is unique</div>
                <div>• Professional evaluation recommended</div>
                <div>• No fees unless we win</div>
              </CardContent>
            </Card>

            {/* Contact CTA */}
            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-red-600">Get Professional Help</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-red-700 mb-4">
                  Get a detailed case evaluation from experienced attorneys.
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  Free Case Evaluation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmusementParkCompensationCalculator;