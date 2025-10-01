import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Calculator, AlertTriangle, DollarSign, Star } from 'lucide-react';
import SEO from '@/components/SEO';
import useScrollRestoration from '@/hooks/useScrollRestoration';
import heroBackground from '@/assets/benzene-calculator-hero.jpg';

interface CompensationFactors {
  bloodCancerType: string;
  age: string;
  exposureDuration: string;
  medicalCosts: string;
  severity: string;
}

const BenzeneCalculator: React.FC = () => {
  const [factors, setFactors] = useState<CompensationFactors>({
    bloodCancerType: '',
    age: '',
    exposureDuration: '',
    medicalCosts: '',
    severity: ''
  });
  
  const [results, setResults] = useState<{
    range: string;
    factors: string[];
    confidence: string;
  } | null>(null);

  // Add scroll restoration
  useScrollRestoration();

  const calculateCompensation = () => {
    const factorsList: string[] = [];
    let baseAmount = 50000;
    let multiplier = 1;

    // Blood cancer type impact
    switch (factors.bloodCancerType) {
      case 'aml':
        baseAmount = 500000;
        multiplier = 3.0;
        factorsList.push('Acute Myeloid Leukemia significantly increases compensation potential');
        break;
      case 'all':
        baseAmount = 450000;
        multiplier = 2.8;
        factorsList.push('Acute Lymphoblastic Leukemia from benzene exposure');
        break;
      case 'multiple-myeloma':
        baseAmount = 400000;
        multiplier = 2.5;
        factorsList.push('Multiple Myeloma linked to benzene exposure');
        break;
      case 'non-hodgkin':
        baseAmount = 350000;
        multiplier = 2.2;
        factorsList.push('Non-Hodgkin Lymphoma associated with benzene');
        break;
      case 'cll':
        baseAmount = 300000;
        multiplier = 2.0;
        factorsList.push('Chronic Lymphocytic Leukemia from benzene');
        break;
      case 'cml':
        baseAmount = 280000;
        multiplier = 1.9;
        factorsList.push('Chronic Myeloid Leukemia related to benzene');
        break;
      case 'mds':
        baseAmount = 250000;
        multiplier = 1.8;
        factorsList.push('Myelodysplastic Syndromes from benzene exposure');
        break;
      case 'aplastic-anemia':
        baseAmount = 200000;
        multiplier = 1.6;
        factorsList.push('Aplastic Anemia caused by benzene');
        break;
      default:
        factorsList.push('Blood cancer type impacts compensation value');
    }

    // Age impact
    switch (factors.age) {
      case 'under-30':
        multiplier += 0.8;
        factorsList.push('Younger age increases compensation due to longer life impact');
        break;
      case '30-45':
        multiplier += 0.6;
        factorsList.push('Prime working age affects earning capacity calculations');
        break;
      case '45-60':
        multiplier += 0.4;
        factorsList.push('Peak earning years impact compensation');
        break;
      case '60-70':
        multiplier += 0.2;
        factorsList.push('Pre-retirement age considered in calculations');
        break;
      case 'over-70':
        multiplier += 0.1;
        factorsList.push('Retirement age affects future earning calculations');
        break;
    }

    // Exposure duration impact
    switch (factors.exposureDuration) {
      case 'more-than-20':
        multiplier += 0.7;
        factorsList.push('Long-term exposure significantly strengthens your case');
        break;
      case '10-20':
        multiplier += 0.5;
        factorsList.push('Extended exposure period supports causation claims');
        break;
      case '5-10':
        multiplier += 0.3;
        factorsList.push('Moderate exposure duration builds case strength');
        break;
      case '1-5':
        multiplier += 0.2;
        factorsList.push('Short-term but significant exposure documented');
        break;
      case 'less-than-1':
        multiplier += 0.1;
        factorsList.push('Even brief exposure to benzene can cause cancer');
        break;
    }

    // Medical costs impact
    switch (factors.medicalCosts) {
      case 'over-500k':
        multiplier += 0.6;
        factorsList.push('Extensive medical expenses significantly increase damages');
        break;
      case '250k-500k':
        multiplier += 0.4;
        factorsList.push('Substantial medical costs strengthen compensation claim');
        break;
      case '100k-250k':
        multiplier += 0.3;
        factorsList.push('Significant medical expenses included in calculations');
        break;
      case '50k-100k':
        multiplier += 0.2;
        factorsList.push('Medical costs contribute to overall compensation');
        break;
      case 'under-50k':
        multiplier += 0.1;
        factorsList.push('All medical expenses are recoverable');
        break;
    }

    // Severity impact
    switch (factors.severity) {
      case 'terminal':
        multiplier += 1.0;
        factorsList.push('Terminal diagnosis maximizes pain and suffering damages');
        break;
      case 'advanced':
        multiplier += 0.7;
        factorsList.push('Advanced cancer stage increases compensation significantly');
        break;
      case 'moderate':
        multiplier += 0.4;
        factorsList.push('Ongoing treatment impacts quality of life');
        break;
      case 'early':
        multiplier += 0.2;
        factorsList.push('Early detection allows for comprehensive treatment planning');
        break;
      case 'remission':
        multiplier += 0.3;
        factorsList.push('Successful treatment still merits compensation for suffering endured');
        break;
    }

    const finalAmount = baseAmount * multiplier;
    const lowEnd = Math.floor(finalAmount * 0.7);
    const highEnd = Math.floor(finalAmount * 1.5);

    let confidence = 'Low';
    if (factors.bloodCancerType && factors.age && factors.exposureDuration) {
      confidence = 'Moderate';
    }
    if (factors.bloodCancerType && factors.age && factors.exposureDuration && factors.medicalCosts && factors.severity) {
      confidence = 'High';
    }

    setResults({
      range: `$${lowEnd.toLocaleString()} - $${highEnd.toLocaleString()}`,
      factors: factorsList,
      confidence
    });
  };

  const resetCalculator = () => {
    setFactors({
      bloodCancerType: '',
      age: '',
      exposureDuration: '',
      medicalCosts: '',
      severity: ''
    });
    setResults(null);
  };

  return (
    <>
      <SEO
        title="Benzene Exposure Compensation Calculator | Estimate Your Blood Cancer Settlement"
        description="Calculate potential compensation for benzene exposure blood cancer cases. Free settlement estimator for leukemia, lymphoma, and other benzene-related cancers."
        canonical="/benzene-calculator"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section 
          className="relative h-[400px] flex items-center justify-center bg-cover bg-center" 
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Professional Compensation Analysis</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Benzene Compensation Calculator</h1>
            <p className="text-xl">
              Get an estimate of your potential benzene exposure compensation based on your specific circumstances.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Calculator Form */}
            <Card className="shadow-xl">
              <CardHeader className="bg-red-600 text-white">
                <CardTitle className="flex items-center text-xl">
                  <Calculator className="w-6 h-6 mr-2" />
                  Compensation Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Blood Cancer Type</label>
                    <Select value={factors.bloodCancerType} onValueChange={(value) => setFactors(prev => ({ ...prev, bloodCancerType: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your diagnosis..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="aml">Acute Myeloid Leukemia (AML)</SelectItem>
                        <SelectItem value="all">Acute Lymphoblastic Leukemia (ALL)</SelectItem>
                        <SelectItem value="multiple-myeloma">Multiple Myeloma</SelectItem>
                        <SelectItem value="non-hodgkin">Non-Hodgkin Lymphoma</SelectItem>
                        <SelectItem value="cll">Chronic Lymphocytic Leukemia (CLL)</SelectItem>
                        <SelectItem value="cml">Chronic Myeloid Leukemia (CML)</SelectItem>
                        <SelectItem value="mds">Myelodysplastic Syndromes (MDS)</SelectItem>
                        <SelectItem value="aplastic-anemia">Aplastic Anemia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Age at Diagnosis</label>
                    <Select value={factors.age} onValueChange={(value) => setFactors(prev => ({ ...prev, age: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select age range..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-30">Under 30 years old</SelectItem>
                        <SelectItem value="30-45">30-45 years old</SelectItem>
                        <SelectItem value="45-60">45-60 years old</SelectItem>
                        <SelectItem value="60-70">60-70 years old</SelectItem>
                        <SelectItem value="over-70">Over 70 years old</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Benzene Exposure Duration</label>
                    <Select value={factors.exposureDuration} onValueChange={(value) => setFactors(prev => ({ ...prev, exposureDuration: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="How long were you exposed?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="less-than-1">Less than 1 year</SelectItem>
                        <SelectItem value="1-5">1-5 years</SelectItem>
                        <SelectItem value="5-10">5-10 years</SelectItem>
                        <SelectItem value="10-20">10-20 years</SelectItem>
                        <SelectItem value="more-than-20">More than 20 years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Estimated Medical Costs</label>
                    <Select value={factors.medicalCosts} onValueChange={(value) => setFactors(prev => ({ ...prev, medicalCosts: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Total medical expenses..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-50k">Under $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                        <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                        <SelectItem value="over-500k">Over $500,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Cancer Severity/Stage</label>
                    <Select value={factors.severity} onValueChange={(value) => setFactors(prev => ({ ...prev, severity: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Current condition..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="early">Early stage/Newly diagnosed</SelectItem>
                        <SelectItem value="moderate">Moderate stage/Ongoing treatment</SelectItem>
                        <SelectItem value="advanced">Advanced stage/Aggressive treatment</SelectItem>
                        <SelectItem value="terminal">Terminal/End-stage</SelectItem>
                        <SelectItem value="remission">In remission/Completed treatment</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      onClick={calculateCompensation} 
                      className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                      disabled={!factors.bloodCancerType || !factors.age}
                    >
                      Calculate Compensation
                    </Button>
                    <Button 
                      onClick={resetCalculator} 
                      variant="outline"
                      className="text-foreground border-border hover:bg-muted"
                    >
                      Reset
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <div className="space-y-6">
              {results ? (
                <>
                  <Card className="shadow-xl border-2 border-green-200">
                    <CardHeader className="bg-green-600 text-white">
                      <CardTitle className="flex items-center text-xl">
                        <DollarSign className="w-6 h-6 mr-2" />
                        Estimated Compensation Range
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="text-center mb-6">
                        <div className="text-4xl font-bold text-green-600 mb-2">{results.range}</div>
                        <Badge variant={results.confidence === 'High' ? 'default' : results.confidence === 'Moderate' ? 'secondary' : 'outline'}>
                          {results.confidence} Confidence
                        </Badge>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Factors Affecting Your Compensation:</h4>
                        <ul className="space-y-2">
                          {results.factors.map((factor, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-green-600 mr-2">•</span>
                              <span className="text-sm text-muted-foreground">{factor}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-3 text-foreground">Next Steps:</h4>
                      <div className="space-y-3">
                        <Button 
                          className="w-full bg-red-600 hover:bg-red-700 text-white"
                          onClick={() => window.location.href = '/benzene-case-evaluation'}
                        >
                          Get Free Case Evaluation
                        </Button>
                        <Button 
                          variant="outline"
                          className="w-full text-foreground border-border hover:bg-muted"
                          onClick={() => window.location.href = 'tel:8181234567'}
                        >
                          Call (818) 123-4567
                        </Button>
                      </div>
                      <p className="text-xs text-center text-muted-foreground mt-3">
                        For an accurate assessment, schedule a free consultation with our experienced benzene attorneys.
                      </p>
                    </CardContent>
                  </Card>
                </>
              ) : (
                <Card>
                  <CardContent className="p-6 text-center">
                    <Calculator className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Ready to Calculate?</h3>
                    <p className="text-muted-foreground mb-4">
                      Fill out the form to get an estimate of your potential benzene exposure compensation.
                    </p>
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-medium mb-2 text-foreground">Compensation May Include:</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Medical expenses (past and future)</li>
                        <li>• Lost wages and earning capacity</li>
                        <li>• Pain and suffering</li>
                        <li>• Loss of life enjoyment</li>
                        <li>• Punitive damages</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Important Notice */}
              <Card className="border-amber-200 bg-amber-50">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <AlertTriangle className="w-6 h-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-amber-800 mb-2">Important Legal Disclaimer</h4>
                      <p className="text-sm text-amber-700">
                        This calculator provides estimates only and is not a guarantee of compensation. Actual settlement amounts depend on many factors including case strength, available evidence, defendant assets, and negotiation outcomes. Each case is unique and requires individual evaluation by qualified attorneys. Consult with our experienced benzene lawyers for an accurate assessment of your specific situation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BenzeneCalculator;