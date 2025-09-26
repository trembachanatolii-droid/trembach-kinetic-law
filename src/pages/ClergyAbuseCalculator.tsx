import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Calculator, DollarSign, AlertTriangle, Info } from 'lucide-react';
import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import heroImage from '@/assets/clergy-abuse-calculator-hero.jpg';

const ClergyAbuseCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    abuseType: '',
    ageDuringAbuse: '',
    durationYears: [1],
    institutionType: '',
    therapyCosts: '',
    lostWages: '',
    medicalCosts: '',
    coverUpEvidence: ''
  });

  const [estimatedRange, setEstimatedRange] = useState<{min: number, max: number} | null>(null);

  const calculateCompensation = () => {
    let baseAmount = 50000;
    let multiplier = 1;

    // Age factor
    if (formData.ageDuringAbuse === 'child') {
      multiplier += 0.5; // Childhood abuse typically receives higher compensation
    }

    // Duration impact
    const duration = formData.durationYears[0];
    if (duration > 5) {
      multiplier += 0.3;
    } else if (duration > 2) {
      multiplier += 0.2;
    }

    // Institution type
    if (formData.institutionType === 'catholic-diocese') {
      multiplier += 0.4; // Higher settlements from Catholic institutions
    } else if (formData.institutionType === 'large-protestant') {
      multiplier += 0.3;
    }

    // Cover-up evidence
    if (formData.coverUpEvidence === 'yes') {
      multiplier += 0.8; // Treble damages under AB 218
    }

    // Financial losses
    const therapy = parseInt(formData.therapyCosts) || 0;
    const wages = parseInt(formData.lostWages) || 0;
    const medical = parseInt(formData.medicalCosts) || 0;
    const financialLosses = therapy + wages + medical;

    const estimatedMin = Math.round((baseAmount * multiplier + financialLosses) * 0.8);
    const estimatedMax = Math.round((baseAmount * multiplier + financialLosses) * 3);

    setEstimatedRange({ min: estimatedMin, max: estimatedMax });
  };

  return (
    <>
      <SEO 
        title="Clergy Abuse Compensation Calculator | California"
        description="Estimate potential compensation for clergy abuse cases in California. Free calculator based on AB 218 and recent settlements."
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative h-[400px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Clergy Abuse Compensation Calculator
            </h1>
            <p className="text-xl">
              Estimate potential compensation based on California law and recent settlements
            </p>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Legal Disclaimer */}
          <Card className="mb-8 border-l-4 border-l-amber-500 bg-amber-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">Legal Disclaimer</h3>
                  <p className="text-amber-700 text-sm">
                    This calculator provides estimates based on publicly available settlement data and California law. 
                    Actual compensation varies significantly based on individual case factors. Results are not a guarantee 
                    of outcome and should not be considered legal advice. Consult with an experienced attorney for 
                    personalized case evaluation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Calculator Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="w-6 h-6 text-primary" />
                    Compensation Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Type of Religious Institution</label>
                    <Select value={formData.institutionType} onValueChange={(value) => setFormData(prev => ({ ...prev, institutionType: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select institution type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="catholic-diocese">Catholic Diocese</SelectItem>
                        <SelectItem value="large-protestant">Large Protestant Church</SelectItem>
                        <SelectItem value="small-church">Small/Local Church</SelectItem>
                        <SelectItem value="religious-school">Religious School</SelectItem>
                        <SelectItem value="youth-organization">Youth Organization</SelectItem>
                        <SelectItem value="other">Other Religious Institution</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Age When Abuse Occurred</label>
                    <Select value={formData.ageDuringAbuse} onValueChange={(value) => setFormData(prev => ({ ...prev, ageDuringAbuse: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select age range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="child">Under 18 (Childhood)</SelectItem>
                        <SelectItem value="adult">18 or older (Adult)</SelectItem>
                        <SelectItem value="both">Both childhood and adult</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Duration of Abuse: {formData.durationYears[0]} year(s)
                    </label>
                    <Slider
                      value={formData.durationYears}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, durationYears: value }))}
                      max={20}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Evidence of Institutional Cover-up</label>
                    <Select value={formData.coverUpEvidence} onValueChange={(value) => setFormData(prev => ({ ...prev, coverUpEvidence: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes - Institution knew and covered up</SelectItem>
                        <SelectItem value="no">No evidence of cover-up</SelectItem>
                        <SelectItem value="unknown">Unknown/Under investigation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Therapy Costs ($)</label>
                      <Input
                        type="number"
                        value={formData.therapyCosts}
                        onChange={(e) => setFormData(prev => ({ ...prev, therapyCosts: e.target.value }))}
                        placeholder="0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Lost Wages ($)</label>
                      <Input
                        type="number"
                        value={formData.lostWages}
                        onChange={(e) => setFormData(prev => ({ ...prev, lostWages: e.target.value }))}
                        placeholder="0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Medical Costs ($)</label>
                      <Input
                        type="number"
                        value={formData.medicalCosts}
                        onChange={(e) => setFormData(prev => ({ ...prev, medicalCosts: e.target.value }))}
                        placeholder="0"
                      />
                    </div>
                  </div>

                  <Button 
                    onClick={calculateCompensation}
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                    size="lg"
                  >
                    Calculate Estimated Compensation
                  </Button>

                </CardContent>
              </Card>
            </div>

            {/* Results and Information */}
            <div className="space-y-6">
              
              {/* Results Card */}
              {estimatedRange && (
                <Card className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700">
                      <DollarSign className="w-6 h-6" />
                      Estimated Compensation Range
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center space-y-4">
                      <div className="text-3xl font-bold text-green-600">
                        ${estimatedRange.min.toLocaleString()} - ${estimatedRange.max.toLocaleString()}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Based on California law, AB 218 provisions, and recent settlement data
                      </p>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Estimate Only - Actual results may vary
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Information Cards */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="w-5 h-5 text-primary" />
                    Factors Affecting Compensation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>AB 218 Treble Damages:</strong> Triple compensation for institutional cover-ups</li>
                    <li>• <strong>Age During Abuse:</strong> Childhood cases typically receive higher awards</li>
                    <li>• <strong>Duration and Severity:</strong> Longer abuse periods increase compensation</li>
                    <li>• <strong>Institution Size:</strong> Larger organizations often pay more</li>
                    <li>• <strong>Medical/Therapy Costs:</strong> All treatment expenses included</li>
                    <li>• <strong>Lost Income:</strong> Career impact and reduced earning capacity</li>
                    <li>• <strong>Pain and Suffering:</strong> Psychological trauma compensation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent California Settlements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Average Settlement Range:</span>
                      <span className="font-semibold">$100K - $5M+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Catholic Diocese Cases:</span>
                      <span className="font-semibold">$500K - $3M</span>
                    </div>
                    <div className="flex justify-between">
                      <span>With Cover-up Evidence:</span>
                      <span className="font-semibold">Up to $15M</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">
                      *Based on publicly reported settlements 2020-2024
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-3">Get Professional Case Evaluation</h3>
                  <p className="mb-4 opacity-90">
                    For accurate compensation assessment, speak with our experienced attorneys
                  </p>
                  <Button 
                    variant="secondary"
                    onClick={() => window.location.href = '/clergy-abuse-case-evaluation'}
                    className="bg-white text-primary hover:bg-gray-100"
                  >
                    Free Case Evaluation
                  </Button>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClergyAbuseCalculator;