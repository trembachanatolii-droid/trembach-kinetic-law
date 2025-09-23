import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Calculator, DollarSign, AlertTriangle, Info, Phone, FileText } from 'lucide-react';
import GoBack from '@/components/GoBack';
import heroImage from '@/assets/uber-lyft-calculator-hero.jpg';

const UberLyftCompensationCalculator = () => {
  const [formData, setFormData] = useState({
    injuryType: '',
    medicalExpenses: '',
    lostWages: '',
    painSuffering: '',
    futureExpenses: '',
    accidentSeverity: '',
    faultPercentage: '',
    insuranceCoverage: ''
  });

  const [results, setResults] = useState<{
    estimated: number;
    lowRange: number;
    highRange: number;
  } | null>(null);

  const calculateCompensation = () => {
    const medical = parseFloat(formData.medicalExpenses) || 0;
    const wages = parseFloat(formData.lostWages) || 0;
    const future = parseFloat(formData.futureExpenses) || 0;
    
    let multiplier = 1.5; // Base multiplier
    
    // Adjust multiplier based on injury type
    switch (formData.injuryType) {
      case 'brain-injury':
      case 'spinal-injury':
        multiplier = 5.0;
        break;
      case 'whiplash':
        multiplier = 2.5;
        break;
      case 'broken-bones':
        multiplier = 3.0;
        break;
      case 'internal-injuries':
        multiplier = 4.0;
        break;
      case 'psychological':
        multiplier = 2.8;
        break;
      default:
        multiplier = 2.0;
    }

    // Adjust for accident severity
    if (formData.accidentSeverity === 'severe') {
      multiplier *= 1.3;
    } else if (formData.accidentSeverity === 'catastrophic') {
      multiplier *= 1.6;
    }

    // Adjust for fault percentage
    const faultReduction = (100 - (parseFloat(formData.faultPercentage) || 0)) / 100;

    const economicDamages = medical + wages + future;
    const painAndSuffering = economicDamages * multiplier;
    const totalDamages = economicDamages + painAndSuffering;
    const adjustedTotal = totalDamages * faultReduction;

    setResults({
      estimated: Math.round(adjustedTotal),
      lowRange: Math.round(adjustedTotal * 0.7),
      highRange: Math.round(adjustedTotal * 1.4)
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <GoBack />
      
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-gradient-to-r from-primary/90 to-secondary/90 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Uber/Lyft Accident Compensation Calculator
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get an estimate of your potential rideshare accident settlement based on California law and similar cases.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center gap-2">
                    <Calculator className="w-6 h-6" />
                    Compensation Calculator
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Enter your case details to get an estimated compensation range.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label>Type of Injury</Label>
                    <Select value={formData.injuryType} onValueChange={(value) => setFormData({...formData, injuryType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select injury type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="brain-injury">Traumatic Brain Injury</SelectItem>
                        <SelectItem value="spinal-injury">Spinal Cord Injury</SelectItem>
                        <SelectItem value="whiplash">Whiplash/Neck Injury</SelectItem>
                        <SelectItem value="broken-bones">Broken Bones/Fractures</SelectItem>
                        <SelectItem value="internal-injuries">Internal Injuries</SelectItem>
                        <SelectItem value="psychological">PTSD/Psychological Trauma</SelectItem>
                        <SelectItem value="soft-tissue">Soft Tissue Injuries</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Medical Expenses to Date ($)</Label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={formData.medicalExpenses}
                      onChange={(e) => setFormData({...formData, medicalExpenses: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label>Lost Wages ($)</Label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={formData.lostWages}
                      onChange={(e) => setFormData({...formData, lostWages: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label>Future Medical Expenses ($)</Label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={formData.futureExpenses}
                      onChange={(e) => setFormData({...formData, futureExpenses: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label>Accident Severity</Label>
                    <Select value={formData.accidentSeverity} onValueChange={(value) => setFormData({...formData, accidentSeverity: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select severity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="minor">Minor</SelectItem>
                        <SelectItem value="moderate">Moderate</SelectItem>
                        <SelectItem value="severe">Severe</SelectItem>
                        <SelectItem value="catastrophic">Catastrophic</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Your Fault Percentage (%)</Label>
                    <Input
                      type="number"
                      placeholder="0"
                      min="0"
                      max="100"
                      value={formData.faultPercentage}
                      onChange={(e) => setFormData({...formData, faultPercentage: e.target.value})}
                    />
                  </div>

                  <Button onClick={calculateCompensation} size="lg" className="w-full">
                    <Calculator className="w-5 h-5 mr-2" />
                    Calculate My Case Value
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Results & Contact */}
            <div className="space-y-6">
              {results && (
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-2xl text-green-800 flex items-center gap-2">
                      <DollarSign className="w-6 h-6" />
                      Estimated Compensation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-green-700 mb-2">
                          ${results.estimated.toLocaleString()}
                        </div>
                        <p className="text-green-600">Estimated Settlement</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-semibold text-green-700">
                            ${results.lowRange.toLocaleString()}
                          </div>
                          <p className="text-sm text-green-600">Low Range</p>
                        </div>
                        <div>
                          <div className="text-2xl font-semibold text-green-700">
                            ${results.highRange.toLocaleString()}
                          </div>
                          <p className="text-sm text-green-600">High Range</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Legal Disclaimer:</strong> This calculator provides estimates only and should not be considered legal advice. Actual settlement amounts depend on many factors including specific case details, insurance coverage, and legal representation quality.
                </AlertDescription>
              </Alert>

              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Get Professional Case Review</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    For an accurate case valuation by experienced rideshare accident attorneys:
                  </p>
                  
                  <Button 
                    className="w-full" 
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call (818) 123-4567
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.location.href = '/uber-lyft-case-evaluation'}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Free Case Evaluation
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Factors Affecting Your Settlement</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Severity and permanence of injuries</li>
                    <li>• Medical treatment costs and future care needs</li>
                    <li>• Lost wages and earning capacity</li>
                    <li>• Pain and suffering impact</li>
                    <li>• Available insurance coverage ($1M+ for rideshare)</li>
                    <li>• Fault determination and liability</li>
                    <li>• Quality of legal representation</li>
                    <li>• Evidence preservation and case strength</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Don't Wait Section */}
      <section className="bg-gradient-to-r from-destructive to-destructive/80 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Don't Wait - Time Limits Apply for California Rideshare Cases</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            California's statute of limitations gives you only 2 years to file. Contact us now for maximum compensation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-destructive hover:bg-gray-100"
              onClick={() => window.location.href = '/uber-lyft-case-evaluation'}
            >
              <FileText className="w-5 h-5 mr-2" />
              Start Your Free Case Evaluation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-primary-foreground hover:bg-white/20 hover:!text-primary"
              onClick={() => window.location.href = 'tel:8181234567'}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (818) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UberLyftCompensationCalculator;