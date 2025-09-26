import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, DollarSign, AlertTriangle } from 'lucide-react';
import heroBackground from '@/assets/aviation-calculator-hero.jpg';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';

const AviationCompensationCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    age: '',
    income: '',
    accidentType: '',
    injurySeverity: '',
    medicalExpenses: '',
    timeOffWork: ''
  });
  const [results, setResults] = useState<any>(null);

  const calculateCompensation = () => {
    const age = parseInt(formData.age) || 0;
    const income = parseInt(formData.income) || 0;
    const medicalExpenses = parseInt(formData.medicalExpenses) || 0;
    
    let baseCompensation = 0;
    let multiplier = 1;

    // Aviation accident base values are higher due to catastrophic nature
    switch (formData.accidentType) {
      case 'commercial-airline':
        baseCompensation = 2500000;
        multiplier = 1.5;
        break;
      case 'private-plane':
        baseCompensation = 1800000;
        multiplier = 1.3;
        break;
      case 'helicopter':
        baseCompensation = 2200000;
        multiplier = 1.4;
        break;
      case 'military':
        baseCompensation = 2000000;
        multiplier = 1.2;
        break;
      default:
        baseCompensation = 1500000;
    }

    // Injury severity adjustment
    switch (formData.injurySeverity) {
      case 'catastrophic':
        multiplier *= 2.5;
        break;
      case 'severe':
        multiplier *= 2.0;
        break;
      case 'moderate':
        multiplier *= 1.5;
        break;
      case 'minor':
        multiplier *= 1.0;
        break;
    }

    // Age factor - younger victims typically receive higher awards
    if (age < 40) multiplier *= 1.3;
    else if (age < 60) multiplier *= 1.1;

    // Income-based calculation for economic damages
    const yearsOfWork = Math.max(0, 65 - age);
    const lostEarnings = income * yearsOfWork * 0.8; // Present value factor

    const totalCompensation = (baseCompensation * multiplier) + lostEarnings + medicalExpenses;

    setResults({
      estimatedRange: {
        low: Math.round(totalCompensation * 0.7),
        high: Math.round(totalCompensation * 1.3)
      },
      components: {
        economic: Math.round(lostEarnings + medicalExpenses),
        nonEconomic: Math.round(baseCompensation * multiplier),
        punitive: Math.round(totalCompensation * 0.2) // Potential punitive damages
      }
    });
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
    <div className="min-h-screen bg-background">
      <SEO 
        title="Aviation Accident Compensation Calculator | Estimate Your Case Value California"
        description="Calculate potential compensation for your aviation accident case. Free tool estimates airplane crash and helicopter accident settlement values in California."
        keywords="aviation accident compensation calculator, airplane crash settlement, helicopter accident damages, California aviation injury compensation"
        canonical="https://www.trembachlawfirm.com/aviation/compensation-calculator"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Aviation Accident Compensation Calculator",
          "description": "Calculate potential compensation for aviation accidents in California",
          "url": "https://www.trembachlawfirm.com/aviation/compensation-calculator",
          "applicationCategory": "Legal Calculator",
          "operatingSystem": "Any"
        }}
      />
      <GoBack fallbackPath="/practice-areas/aviation-accidents" />
      
      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Aviation Accident Compensation Calculator
          </h1>
          <p className="text-xl">Estimate potential compensation for your airplane or helicopter crash case</p>
        </div>
      </section>

      {/* Calculator Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Calculator Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center">
                <Calculator className="w-6 h-6 mr-2" />
                Aviation Accident Details
              </CardTitle>
              <p className="text-muted-foreground">Provide information to estimate your case value</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Your Age</label>
                  <Input
                    type="number"
                    value={formData.age}
                    onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                    placeholder="35"
                    className="bg-background border-border text-foreground"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Annual Income</label>
                  <Input
                    type="number"
                    value={formData.income}
                    onChange={(e) => setFormData(prev => ({ ...prev, income: e.target.value }))}
                    placeholder="75000"
                    className="bg-background border-border text-foreground"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Type of Aviation Accident</label>
                <Select value={formData.accidentType} onValueChange={(value) => setFormData(prev => ({ ...prev, accidentType: value }))}>
                  <SelectTrigger className="bg-background border-border text-foreground">
                    <SelectValue placeholder="Select accident type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="commercial-airline">Commercial Airline Crash</SelectItem>
                    <SelectItem value="private-plane">Private Plane Accident</SelectItem>
                    <SelectItem value="helicopter">Helicopter Crash</SelectItem>
                    <SelectItem value="military">Military Aircraft</SelectItem>
                    <SelectItem value="charter">Charter Flight</SelectItem>
                    <SelectItem value="other">Other Aviation Accident</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Injury Severity</label>
                <Select value={formData.injurySeverity} onValueChange={(value) => setFormData(prev => ({ ...prev, injurySeverity: value }))}>
                  <SelectTrigger className="bg-background border-border text-foreground">
                    <SelectValue placeholder="Select injury severity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="catastrophic">Catastrophic (Paralysis, Brain Injury, Death)</SelectItem>
                    <SelectItem value="severe">Severe (Multiple Fractures, Burns, Organ Damage)</SelectItem>
                    <SelectItem value="moderate">Moderate (Broken Bones, Soft Tissue Injury)</SelectItem>
                    <SelectItem value="minor">Minor (Cuts, Bruises, Sprains)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Medical Expenses</label>
                  <Input
                    type="number"
                    value={formData.medicalExpenses}
                    onChange={(e) => setFormData(prev => ({ ...prev, medicalExpenses: e.target.value }))}
                    placeholder="50000"
                    className="bg-background border-border text-foreground"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Time Off Work (weeks)</label>
                  <Input
                    type="number"
                    value={formData.timeOffWork}
                    onChange={(e) => setFormData(prev => ({ ...prev, timeOffWork: e.target.value }))}
                    placeholder="12"
                    className="bg-background border-border text-foreground"
                  />
                </div>
              </div>

              <Button 
                onClick={calculateCompensation}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3"
              >
                Calculate My Aviation Case Value
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <div>
            {results ? (
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-green-600 flex items-center">
                    <DollarSign className="w-6 h-6 mr-2" />
                    Estimated Compensation Range
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {formatCurrency(results.estimatedRange.low)} - {formatCurrency(results.estimatedRange.high)}
                    </div>
                    <p className="text-green-700">Estimated Compensation Range</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Breakdown by Category:</h3>
                    
                    <div className="flex justify-between items-center p-3 bg-muted rounded">
                      <span className="text-foreground">Economic Damages</span>
                      <span className="font-semibold text-foreground">{formatCurrency(results.components.economic)}</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-muted rounded">
                      <span className="text-foreground">Non-Economic Damages</span>
                      <span className="font-semibold text-foreground">{formatCurrency(results.components.nonEconomic)}</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-muted rounded">
                      <span className="text-foreground">Potential Punitive Damages</span>
                      <span className="font-semibold text-foreground">{formatCurrency(results.components.punitive)}</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold"
                      onClick={() => window.location.href = '/aviation/case-evaluation'}
                    >
                      Get Free Professional Case Review
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Aviation Accident Compensation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Aviation accident cases typically result in higher compensation than other personal injury cases due to the catastrophic nature of aircraft crashes and complex liability issues.
                    </p>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-800 mb-2">Average Aviation Settlements in California:</h3>
                      <ul className="space-y-1 text-blue-700 text-sm">
                        <li>• Commercial airline crashes: $2M - $50M+</li>
                        <li>• Private plane accidents: $1M - $20M</li>
                        <li>• Helicopter crashes: $1.5M - $25M</li>
                        <li>• Military aircraft: $1M - $15M</li>
                      </ul>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      Complete the form to get a personalized estimate based on your specific circumstances.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Legal Disclaimer */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg text-amber-600 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Important Legal Disclaimer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>This calculator provides estimates only and does not constitute legal advice. Actual case values depend on many factors including:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Specific facts and circumstances of your accident</li>
                    <li>Strength of evidence and liability proof</li>
                    <li>Available insurance coverage and defendant assets</li>
                    <li>Jurisdiction and applicable laws</li>
                    <li>Quality of legal representation</li>
                  </ul>
                  <p className="mt-3 font-medium text-foreground">
                    Consult with an experienced aviation attorney for accurate case evaluation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AviationCompensationCalculator;