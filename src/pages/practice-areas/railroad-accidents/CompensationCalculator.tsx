import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, ArrowLeft, Phone, Clock, Shield } from 'lucide-react';
import heroBackground from '@/assets/railroad-calculator-hero.jpg';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';

const RailroadAccidentsCompensationCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    accidentType: '',
    injurySeverity: '',
    workRelated: '',
    medicalExpenses: '',
    lostWages: '',
    ageRange: ''
  });

  const [estimatedRange, setEstimatedRange] = useState<string>('');

  const calculateEstimate = () => {
    // Simple calculation logic for demonstration
    let baseAmount = 50000;
    
    // Adjust based on injury severity
    switch (formData.injurySeverity) {
      case 'catastrophic':
        baseAmount *= 10;
        break;
      case 'serious':
        baseAmount *= 5;
        break;
      case 'moderate':
        baseAmount *= 2;
        break;
      default:
        baseAmount *= 1;
    }

    // FELA cases typically have higher compensation
    if (formData.workRelated === 'yes-employee') {
      baseAmount *= 1.5;
    }

    const lowEstimate = Math.floor(baseAmount * 0.7);
    const highEstimate = Math.floor(baseAmount * 1.8);

    setEstimatedRange(`$${lowEstimate.toLocaleString()} - $${highEstimate.toLocaleString()}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Railroad Accident Compensation Calculator | FELA Claims Calculator | Trembach Law Firm"
        description="Calculate potential compensation for California railroad accidents. Free FELA claims calculator for train accidents, derailments, and railroad worker injuries."
        keywords="railroad accident compensation calculator, FELA calculator, train accident settlement, railroad injury compensation"
      />

      <GoBack fallbackPath="/practice-areas/railroad-accidents" />

      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Railroad Accident Compensation Calculator
          </h1>
          <p className="text-xl text-white">
            Get an estimate of your potential FELA or railroad accident compensation
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-primary flex items-center justify-center">
              <Calculator className="w-6 h-6 mr-2" />
              Railroad Accident Compensation Estimator
            </CardTitle>
            <p className="text-center text-muted-foreground">
              This calculator provides estimates based on typical railroad accident settlements
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Type of Railroad Accident</label>
                  <Select value={formData.accidentType} onValueChange={(value) => setFormData(prev => ({ ...prev, accidentType: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select accident type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="train-derailment">Train Derailment</SelectItem>
                      <SelectItem value="grade-crossing">Grade Crossing Accident</SelectItem>
                      <SelectItem value="railroad-worker-fela">Railroad Worker Injury (FELA)</SelectItem>
                      <SelectItem value="passenger-train">Passenger Train Accident</SelectItem>
                      <SelectItem value="freight-collision">Freight Train Collision</SelectItem>
                      <SelectItem value="platform-station">Platform/Station Accident</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Injury Severity</label>
                  <Select value={formData.injurySeverity} onValueChange={(value) => setFormData(prev => ({ ...prev, injurySeverity: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select injury severity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="minor">Minor Injuries</SelectItem>
                      <SelectItem value="moderate">Moderate Injuries</SelectItem>
                      <SelectItem value="serious">Serious Injuries</SelectItem>
                      <SelectItem value="catastrophic">Catastrophic Injuries</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Were you a railroad employee?</label>
                  <Select value={formData.workRelated} onValueChange={(value) => setFormData(prev => ({ ...prev, workRelated: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes-employee">Yes - Railroad Employee (FELA)</SelectItem>
                      <SelectItem value="yes-contractor">Yes - Railroad Contractor</SelectItem>
                      <SelectItem value="no-passenger">No - Passenger</SelectItem>
                      <SelectItem value="no-motorist">No - Motorist</SelectItem>
                      <SelectItem value="no-pedestrian">No - Pedestrian</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Age Range</label>
                  <Select value={formData.ageRange} onValueChange={(value) => setFormData(prev => ({ ...prev, ageRange: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select age range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="18-30">18-30 years</SelectItem>
                      <SelectItem value="31-45">31-45 years</SelectItem>
                      <SelectItem value="46-60">46-60 years</SelectItem>
                      <SelectItem value="60+">60+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Estimated Medical Expenses</label>
                  <Input
                    type="number"
                    placeholder="Enter amount"
                    value={formData.medicalExpenses}
                    onChange={(e) => setFormData(prev => ({ ...prev, medicalExpenses: e.target.value }))}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Lost Wages (Monthly)</label>
                  <Input
                    type="number"
                    placeholder="Enter amount"
                    value={formData.lostWages}
                    onChange={(e) => setFormData(prev => ({ ...prev, lostWages: e.target.value }))}
                  />
                </div>
              </div>

              <Button 
                onClick={calculateEstimate}
                className="w-full bg-red-600 hover:bg-red-700"
                disabled={!formData.accidentType || !formData.injurySeverity}
              >
                Calculate Compensation Estimate
              </Button>

              {estimatedRange && (
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-green-700 mb-2">
                        Estimated Compensation Range
                      </h3>
                      <p className="text-3xl font-bold text-green-800 mb-4">{estimatedRange}</p>
                      <p className="text-sm text-green-600">
                        This is an estimate only. Actual compensation depends on many factors including the specific circumstances of your case, the extent of your injuries, and other variables.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <Card className="mt-8 bg-yellow-50 border-yellow-200">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-yellow-800 mb-2">Important Legal Disclaimer</h3>
            <p className="text-sm text-yellow-700">
              This calculator provides estimates only and should not be considered legal advice. Actual compensation varies significantly based on specific case facts, the extent of injuries, available insurance coverage, and other factors. Railroad accident cases involve complex federal and state laws. For an accurate assessment of your case value, schedule a free consultation with our experienced railroad accident attorneys. No fees unless we win your case.
            </p>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="mt-8 text-center">
          <Card className="glass-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center space-x-8">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary mr-2" />
                  <span className="font-semibold">Call (818) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-primary mr-2" />
                  <span>Available 24/7</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-primary mr-2" />
                  <span>No Fees Unless We Win</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RailroadAccidentsCompensationCalculator;