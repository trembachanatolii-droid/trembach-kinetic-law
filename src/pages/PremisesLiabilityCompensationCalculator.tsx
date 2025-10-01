import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import SEO from '@/components/SEO';
import {
  Phone, 
  Calculator,
  DollarSign,
  AlertTriangle,
  Info,
  FileText,
  Star,
  Shield
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/premises-liability-hero.jpg';

const PremisesLiabilityCompensationCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    injuryType: '',
    medicalCosts: '',
    lostWages: '',
    painSeverity: '',
    recoveryTime: '',
    age: '',
    impactOnLife: ''
  });

  const [calculation, setCalculation] = useState<{
    economic: number;
    nonEconomic: number;
    total: number;
  } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateCompensation = () => {
    const medicalCosts = parseFloat(formData.medicalCosts) || 0;
    const lostWages = parseFloat(formData.lostWages) || 0;
    
    // Economic damages (actual costs)
    const economic = medicalCosts + lostWages;
    
    // Non-economic damages (pain and suffering)
    let multiplier = 1.5; // Base multiplier
    
    // Adjust multiplier based on injury severity and other factors
    if (formData.injuryType === 'severe-fracture' || formData.injuryType === 'spinal-injury') {
      multiplier += 1;
    }
    if (formData.painSeverity === 'severe') {
      multiplier += 0.5;
    }
    if (formData.recoveryTime === 'long-term') {
      multiplier += 0.5;
    }
    if (formData.impactOnLife === 'significant') {
      multiplier += 0.5;
    }
    
    const nonEconomic = economic * multiplier;
    const total = economic + nonEconomic;
    
    setCalculation({
      economic,
      nonEconomic,
      total
    });
  };

  return (
    <>
      <SEO 
        title="Premises Liability Compensation Calculator | California Injury Settlement"
        description="Calculate your potential premises liability compensation in California. Free calculator for slip and fall, property negligence, and safety violation settlements."
        canonical="https://trembachlaw.com/premises-liability-compensation-calculator"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section 
          className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Premises Liability Compensation Calculator
            </h1>
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Trusted Calculation Tool</span>
            </div>
            <p className="text-xl">
              Get an estimate of your potential compensation for premises liability injuries
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Calculator Section */}
            <div className="lg:col-span-2">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center">
                    <Calculator className="w-6 h-6 mr-2" />
                    Compensation Calculator
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Provide information about your premises liability case to estimate potential compensation.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Injury Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Injury Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Type of Injury</label>
                          <Select value={formData.injuryType} onValueChange={(value) => handleSelectChange('injuryType', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select injury type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="minor-cuts">Minor Cuts/Bruises</SelectItem>
                              <SelectItem value="soft-tissue">Soft Tissue Injury</SelectItem>
                              <SelectItem value="simple-fracture">Simple Fracture</SelectItem>
                              <SelectItem value="severe-fracture">Severe/Multiple Fractures</SelectItem>
                              <SelectItem value="back-injury">Back/Neck Injury</SelectItem>
                              <SelectItem value="spinal-injury">Spinal Cord Injury</SelectItem>
                              <SelectItem value="head-injury">Head/Brain Injury</SelectItem>
                              <SelectItem value="burns">Burns</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Pain Level</label>
                          <Select value={formData.painSeverity} onValueChange={(value) => handleSelectChange('painSeverity', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select pain level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="mild">Mild (1-3)</SelectItem>
                              <SelectItem value="moderate">Moderate (4-6)</SelectItem>
                              <SelectItem value="severe">Severe (7-10)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Recovery Time</label>
                          <Select value={formData.recoveryTime} onValueChange={(value) => handleSelectChange('recoveryTime', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select recovery time" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="short-term">Less than 3 months</SelectItem>
                              <SelectItem value="medium-term">3-12 months</SelectItem>
                              <SelectItem value="long-term">Over 1 year</SelectItem>
                              <SelectItem value="permanent">Permanent disability</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Age</label>
                          <Input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleInputChange}
                            placeholder="Your age"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Economic Damages */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Economic Damages</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Medical Expenses ($)</label>
                          <Input
                            type="number"
                            name="medicalCosts"
                            value={formData.medicalCosts}
                            onChange={handleInputChange}
                            placeholder="Total medical costs"
                          />
                          <p className="text-xs text-muted-foreground mt-1">
                            Include emergency room, doctors, therapy, medications
                          </p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Lost Wages ($)</label>
                          <Input
                            type="number"
                            name="lostWages"
                            value={formData.lostWages}
                            onChange={handleInputChange}
                            placeholder="Lost income amount"
                          />
                          <p className="text-xs text-muted-foreground mt-1">
                            Include past and future lost earnings
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Impact on Life */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Impact on Life</h3>
                      <div>
                        <label className="block text-sm font-medium mb-2">How has this injury affected your daily life?</label>
                        <Select value={formData.impactOnLife} onValueChange={(value) => handleSelectChange('impactOnLife', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select impact level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="minimal">Minimal impact</SelectItem>
                            <SelectItem value="moderate">Moderate - some limitations</SelectItem>
                            <SelectItem value="significant">Significant - major limitations</SelectItem>
                            <SelectItem value="severe">Severe - life-changing</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button 
                      onClick={calculateCompensation}
                      size="lg"
                      className="w-full bg-red-600 hover:bg-red-700"
                    >
                      Calculate My Compensation
                    </Button>

                    {/* Results */}
                    {calculation && (
                      <div className="mt-8 p-6 bg-muted rounded-lg">
                        <h3 className="text-xl font-semibold mb-4 text-center">Estimated Compensation Range</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                          <div className="bg-blue-50 p-4 rounded">
                            <p className="text-sm text-blue-600 font-medium">Economic Damages</p>
                            <p className="text-2xl font-bold text-blue-800">
                              ${calculation.economic.toLocaleString()}
                            </p>
                            <p className="text-xs text-blue-600">Medical + Lost Wages</p>
                          </div>
                          <div className="bg-green-50 p-4 rounded">
                            <p className="text-sm text-green-600 font-medium">Non-Economic Damages</p>
                            <p className="text-2xl font-bold text-green-800">
                              ${calculation.nonEconomic.toLocaleString()}
                            </p>
                            <p className="text-xs text-green-600">Pain & Suffering</p>
                          </div>
                          <div className="bg-red-50 p-4 rounded">
                            <p className="text-sm text-red-600 font-medium">Total Estimate</p>
                            <p className="text-2xl font-bold text-red-800">
                              ${calculation.total.toLocaleString()}
                            </p>
                            <p className="text-xs text-red-600">Combined Damages</p>
                          </div>
                        </div>
                        
                        <div className="mt-6 p-4 bg-yellow-50 rounded border border-yellow-200">
                          <div className="flex items-start">
                            <Info className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" />
                            <div>
                              <p className="text-sm text-yellow-800 font-medium">Important Disclaimer</p>
                              <p className="text-xs text-yellow-700 mt-1">
                                This is only an estimate. Actual compensation depends on many factors including liability, 
                                insurance coverage, and case-specific circumstances. Consult with an attorney for an accurate assessment.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 text-center">
                          <Button 
                            onClick={() => window.location.href = '/premises-liability-case-evaluation'}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            Get Professional Case Review
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Contact Card */}
                <Card className="glass-card border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-primary">Maximize Your Compensation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Get a professional case evaluation to ensure you receive fair compensation for your premises liability injury.
                      </p>
                      <Button className="w-full" onClick={() => window.location.href = 'tel:8181234567'}>
                        <Phone className="w-4 h-4 mr-2" />
                        Call (818) 123-4567
                      </Button>
                      <p className="text-xs text-center text-muted-foreground">
                        Free consultation - No fees unless we win
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Compensation Factors */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Compensation Factors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div>
                        <h4 className="font-medium">Economic Damages:</h4>
                        <ul className="text-muted-foreground">
                          <li>• Medical expenses</li>
                          <li>• Lost wages</li>
                          <li>• Future medical care</li>
                          <li>• Property damage</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium">Non-Economic Damages:</h4>
                        <ul className="text-muted-foreground">
                          <li>• Pain and suffering</li>
                          <li>• Emotional distress</li>
                          <li>• Loss of enjoyment</li>
                          <li>• Disability/disfigurement</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Time Sensitive */}
                <Card className="glass-card border-yellow-500/20 bg-yellow-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-yellow-700">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Act Quickly
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-yellow-700">
                      California's 2-year statute of limitations means you have limited time to file your premises liability claim.
                    </p>
                  </CardContent>
                </Card>

                {/* Why Choose Us */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Why Choose Our Firm?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <Shield className="w-4 h-4 text-green-600 mr-2" />
                        <span>95%+ success rate</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 text-green-600 mr-2" />
                        <span>Maximum compensation</span>
                      </div>
                      <div className="flex items-center">
                        <FileText className="w-4 h-4 text-green-600 mr-2" />
                        <span>No fees unless we win</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PremisesLiabilityCompensationCalculator;