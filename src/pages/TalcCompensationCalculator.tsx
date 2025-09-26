import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Calculator, DollarSign, AlertTriangle, Scale, Heart } from 'lucide-react';
import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import GoBack from '@/components/GoBack';
import heroBackground from '@/assets/practice-areas/talc-compensation-calculation.jpg';

const TalcCompensationCalculator = () => {
  const [formData, setFormData] = useState({
    age: '',
    cancerType: '',
    cancerStage: '',
    diagnosisDate: '',
    exposureDuration: '',
    usageFrequency: '',
    medicalExpenses: '',
    lostWages: '',
    treatmentStatus: '',
    prognosis: '',
    hasPathologyEvidence: '',
    familyHistory: ''
  });

  const [results, setResults] = useState<{
    lowEstimate: number;
    highEstimate: number;
    factors: string[];
    recommendations: string[];
  } | null>(null);

  const calculateCompensation = () => {
    let baseAmount = 0;
    let multiplier = 1;
    const factors: string[] = [];
    const recommendations: string[] = [];

    // Base compensation by cancer type
    switch (formData.cancerType) {
      case 'ovarian-cancer':
        baseAmount = 150000;
        factors.push('Ovarian cancer strongly linked to talc use');
        break;
      case 'mesothelioma':
        baseAmount = 200000;
        factors.push('Mesothelioma exclusively caused by asbestos exposure');
        break;
      case 'fallopian-tube':
        baseAmount = 140000;
        factors.push('Fallopian tube cancer linked to talc exposure');
        break;
      case 'peritoneal-cancer':
        baseAmount = 160000;
        factors.push('Primary peritoneal cancer associated with talc use');
        break;
      default:
        baseAmount = 100000;
    }

    // Cancer stage multiplier
    switch (formData.cancerStage) {
      case 'stage-1':
        multiplier *= 0.8;
        factors.push('Early stage cancer (Stage I)');
        break;
      case 'stage-2':
        multiplier *= 1.0;
        factors.push('Stage II cancer');
        break;
      case 'stage-3':
        multiplier *= 1.3;
        factors.push('Advanced stage cancer (Stage III)');
        break;
      case 'stage-4':
        multiplier *= 1.8;
        factors.push('Late stage cancer (Stage IV)');
        break;
    }

    // Age factor (younger patients typically receive higher awards)
    const age = parseInt(formData.age);
    if (age < 50) {
      multiplier *= 1.4;
      factors.push('Younger age at diagnosis increases compensation');
    } else if (age < 65) {
      multiplier *= 1.2;
      factors.push('Working age at diagnosis');
    } else {
      multiplier *= 1.0;
      factors.push('Senior age at diagnosis');
    }

    // Exposure duration
    switch (formData.exposureDuration) {
      case 'more-than-20-years':
        multiplier *= 1.4;
        factors.push('Long-term exposure (20+ years)');
        break;
      case '11-20-years':
        multiplier *= 1.2;
        factors.push('Extended exposure (11-20 years)');
        break;
      case '6-10-years':
        multiplier *= 1.1;
        factors.push('Moderate exposure duration (6-10 years)');
        break;
      default:
        factors.push('Shorter exposure duration');
    }

    // Usage frequency
    switch (formData.usageFrequency) {
      case 'daily':
        multiplier *= 1.3;
        factors.push('Daily talc use increases exposure risk');
        break;
      case 'several-times-week':
        multiplier *= 1.2;
        factors.push('Frequent talc use (several times weekly)');
        break;
      case 'weekly':
        multiplier *= 1.1;
        factors.push('Regular weekly talc use');
        break;
    }

    // Medical expenses
    const medicalExpenses = parseInt(formData.medicalExpenses) || 0;
    if (medicalExpenses > 100000) {
      multiplier *= 1.2;
      factors.push('Significant medical expenses incurred');
    }

    // Treatment status
    switch (formData.treatmentStatus) {
      case 'currently-treating':
        multiplier *= 1.3;
        factors.push('Currently undergoing treatment');
        break;
      case 'palliative-care':
        multiplier *= 1.8;
        factors.push('Palliative care indicates terminal prognosis');
        break;
      case 'completed-treatment':
        multiplier *= 1.1;
        factors.push('Completed treatment');
        break;
    }

    // Pathology evidence
    if (formData.hasPathologyEvidence === 'yes') {
      multiplier *= 1.3;
      factors.push('Pathology evidence of talc particles strengthens case');
    }

    const lowEstimate = Math.round(baseAmount * multiplier * 0.7);
    const highEstimate = Math.round(baseAmount * multiplier * 1.5);

    // Add medical expenses and lost wages
    const totalMedical = parseInt(formData.medicalExpenses) || 0;
    const totalLostWages = parseInt(formData.lostWages) || 0;

    // Recommendations
    recommendations.push('Gather all medical records documenting your cancer diagnosis and treatment');
    recommendations.push('Document your talc use history, including brands and usage patterns');
    
    if (formData.hasPathologyEvidence !== 'yes') {
      recommendations.push('Request pathology reports from your oncologist to check for talc particles');
    }
    
    if (formData.treatmentStatus === 'currently-treating' || formData.treatmentStatus === 'palliative-care') {
      recommendations.push('Consider expedited case filing due to your current health situation');
    }
    
    recommendations.push('Consult with an experienced talc cancer attorney immediately');
    recommendations.push('California has strict time limits for filing cancer claims');

    setResults({
      lowEstimate: lowEstimate + totalMedical + totalLostWages,
      highEstimate: highEstimate + totalMedical + totalLostWages,
      factors,
      recommendations
    });

    // Scroll to results
    setTimeout(() => {
      document.getElementById('results-section')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 100);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateCompensation();
  };

  const seoData = {
    title: "Talc Cancer Compensation Calculator | Baby Powder Lawsuit Values",
    description: "Calculate potential compensation for talc cancer cases. Free estimation tool for ovarian cancer and mesothelioma from baby powder. Get your case value estimate.",
    keywords: "talc cancer compensation calculator, baby powder lawsuit settlement amounts, ovarian cancer compensation estimate",
    canonical: "/talc-compensation-calculator"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={seoData.title}
        description={seoData.description}
        canonical={seoData.canonical}
      />
      <Navigation />
      <GoBack />

      {/* Hero Section */}
      <section 
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        
        <div className="relative z-10 container mx-auto px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="w-12 h-12 text-primary" />
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground">
                Talc Cancer Compensation Calculator
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Estimate Your Potential Compensation for Baby Powder Cancer Cases
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-4xl">
              Use our compensation calculator to get an estimate of your potential settlement or verdict value based on your specific talc cancer case details.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Form */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-center mb-2">
                  Compensation Estimation Tool
                </CardTitle>
                <p className="text-muted-foreground text-center">
                  Provide your case details to receive a personalized compensation estimate
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="age">Your Age</Label>
                      <Input
                        id="age"
                        type="number"
                        value={formData.age}
                        onChange={(e) => setFormData({...formData, age: e.target.value})}
                        placeholder="Enter your age"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="cancerType">Type of Cancer</Label>
                      <Select onValueChange={(value) => setFormData({...formData, cancerType: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select cancer type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ovarian-cancer">Ovarian Cancer</SelectItem>
                          <SelectItem value="mesothelioma">Mesothelioma</SelectItem>
                          <SelectItem value="fallopian-tube">Fallopian Tube Cancer</SelectItem>
                          <SelectItem value="peritoneal-cancer">Primary Peritoneal Cancer</SelectItem>
                          <SelectItem value="cervical-cancer">Cervical Cancer</SelectItem>
                          <SelectItem value="uterine-cancer">Uterine Cancer</SelectItem>
                          <SelectItem value="other">Other Cancer Type</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="cancerStage">Cancer Stage</Label>
                      <Select onValueChange={(value) => setFormData({...formData, cancerStage: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select cancer stage" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="stage-1">Stage I</SelectItem>
                          <SelectItem value="stage-2">Stage II</SelectItem>
                          <SelectItem value="stage-3">Stage III</SelectItem>
                          <SelectItem value="stage-4">Stage IV</SelectItem>
                          <SelectItem value="unknown">Unknown</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="diagnosisDate">Year of Diagnosis</Label>
                      <Input
                        id="diagnosisDate"
                        type="number"
                        value={formData.diagnosisDate}
                        onChange={(e) => setFormData({...formData, diagnosisDate: e.target.value})}
                        placeholder="e.g., 2023"
                        min="2000"
                        max={new Date().getFullYear()}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="exposureDuration">Duration of Talc Use</Label>
                      <Select onValueChange={(value) => setFormData({...formData, exposureDuration: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="less-than-1-year">Less than 1 year</SelectItem>
                          <SelectItem value="1-5-years">1-5 years</SelectItem>
                          <SelectItem value="6-10-years">6-10 years</SelectItem>
                          <SelectItem value="11-20-years">11-20 years</SelectItem>
                          <SelectItem value="more-than-20-years">More than 20 years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="usageFrequency">Frequency of Use</Label>
                      <Select onValueChange={(value) => setFormData({...formData, usageFrequency: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="several-times-week">Several times per week</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                          <SelectItem value="occasionally">Occasionally</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="medicalExpenses">Total Medical Expenses ($)</Label>
                      <Input
                        id="medicalExpenses"
                        type="number"
                        value={formData.medicalExpenses}
                        onChange={(e) => setFormData({...formData, medicalExpenses: e.target.value})}
                        placeholder="Enter total medical costs"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="lostWages">Lost Wages/Income ($)</Label>
                      <Input
                        id="lostWages"
                        type="number"
                        value={formData.lostWages}
                        onChange={(e) => setFormData({...formData, lostWages: e.target.value})}
                        placeholder="Enter lost income"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="treatmentStatus">Current Treatment Status</Label>
                      <Select onValueChange={(value) => setFormData({...formData, treatmentStatus: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="currently-treating">Currently Undergoing Treatment</SelectItem>
                          <SelectItem value="completed-treatment">Completed Treatment</SelectItem>
                          <SelectItem value="in-remission">In Remission</SelectItem>
                          <SelectItem value="palliative-care">Palliative Care</SelectItem>
                          <SelectItem value="not-yet-started">Treatment Not Yet Started</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="hasPathologyEvidence">Pathology Evidence of Talc?</Label>
                      <Select onValueChange={(value) => setFormData({...formData, hasPathologyEvidence: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select answer" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes - Talc particles found in tissue</SelectItem>
                          <SelectItem value="no">No evidence found</SelectItem>
                          <SelectItem value="unknown">Unknown/Not tested</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-white py-6 text-lg font-semibold"
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    Calculate My Compensation Estimate
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Results Section */}
            {results && (
              <div id="results-section" className="mt-8 space-y-6">
                <Card className="p-8 bg-green-50 border-green-200">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-green-800 flex items-center gap-2">
                      <DollarSign className="w-6 h-6" />
                      Your Estimated Compensation Range
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-6">
                      <div className="text-4xl font-bold text-green-600 mb-2">
                        ${results.lowEstimate.toLocaleString()} - ${results.highEstimate.toLocaleString()}
                      </div>
                      <p className="text-green-700">
                        Estimated compensation range based on your case details
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-green-800 mb-3">Factors Considered:</h3>
                        <ul className="space-y-2">
                          {results.factors.map((factor, index) => (
                            <li key={index} className="flex items-start gap-2 text-green-700">
                              <span className="text-green-500">•</span>
                              {factor}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-green-800 mb-3">Next Steps:</h3>
                        <ul className="space-y-2">
                          {results.recommendations.map((rec, index) => (
                            <li key={index} className="flex items-start gap-2 text-green-700">
                              <span className="text-green-500">•</span>
                              {rec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <Button asChild className="bg-green-600 hover:bg-green-700">
                        <a href="/talc-case-evaluation">Get Free Case Evaluation</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Important Disclaimer:</strong> This calculator provides estimates only and does not constitute legal advice. 
                    Actual compensation depends on many factors including specific case details, strength of evidence, defendant's liability, 
                    and court jurisdiction. Consult with an experienced talc cancer attorney for an accurate case evaluation.
                  </AlertDescription>
                </Alert>
              </div>
            )}

            {/* Additional Information */}
            <Card className="mt-8 p-6">
              <h3 className="text-xl font-semibold mb-4">Understanding Talc Cancer Compensation</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Economic Damages</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Medical expenses (past and future)</li>
                    <li>• Lost wages and benefits</li>
                    <li>• Loss of earning capacity</li>
                    <li>• Medical monitoring costs</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-600 mb-2">Non-Economic Damages</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Pain and suffering</li>
                    <li>• Emotional distress</li>
                    <li>• Loss of life enjoyment</li>
                    <li>• Loss of consortium</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-red-600 mb-2">Punitive Damages</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Corporate misconduct penalties</li>
                    <li>• Concealment of health risks</li>
                    <li>• Failure to warn consumers</li>
                    <li>• Intentional deception</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TalcCompensationCalculator;