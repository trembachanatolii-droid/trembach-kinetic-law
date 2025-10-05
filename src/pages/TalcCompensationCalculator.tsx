import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCalculatorForm, CalculatorFormData, CalculatorResults } from '@/hooks/useCalculatorForm';
import { FormNavigation } from '@/components/calculator/FormNavigation';
import { CalculatorResults as ResultsDisplay } from '@/components/calculator/CalculatorResults';

interface TalcFormData extends CalculatorFormData {
  cancerType: string;
  cancerStage: string;
  exposureDuration: string;
  usageFrequency: string;
  productType: string;
  age: string;
  hasPathologyEvidence: string;
  medicalCosts: string;
  futureCareCosts: string;
  lostWages: string;
}

const initialFormData: TalcFormData = {
  cancerType: '',
  cancerStage: '',
  exposureDuration: '',
  usageFrequency: '',
  productType: '',
  age: '',
  hasPathologyEvidence: '',
  medicalCosts: '',
  futureCareCosts: '',
  lostWages: ''
};

const calculateCompensation = (data: TalcFormData): CalculatorResults => {
  let baseMin = 150000;
  let baseMax = 300000;

  // Cancer type multipliers
  const cancerMultipliers: Record<string, number> = {
    'ovarian-cancer': 2.5,
    'mesothelioma': 3.0,
    'lung-cancer': 2.2,
    'endometrial-cancer': 2.0,
    'other-cancer': 1.5
  };
  const cancerMultiplier = cancerMultipliers[data.cancerType] || 1;

  // Cancer stage multipliers
  const stageMultipliers: Record<string, number> = {
    'stage-1': 1.2,
    'stage-2': 1.5,
    'stage-3': 2.0,
    'stage-4': 2.5,
    'terminal': 3.0
  };
  const stageMultiplier = stageMultipliers[data.cancerStage] || 1;

  // Exposure duration multipliers
  const durationMultipliers: Record<string, number> = {
    '1-5-years': 1.0,
    '6-10-years': 1.3,
    '11-20-years': 1.7,
    '21-30-years': 2.0,
    '30-plus-years': 2.5
  };
  const durationMultiplier = durationMultipliers[data.exposureDuration] || 1;

  // Usage frequency multipliers
  const frequencyMultipliers: Record<string, number> = {
    'occasional': 1.0,
    'weekly': 1.3,
    'daily': 1.8,
    'multiple-daily': 2.2
  };
  const frequencyMultiplier = frequencyMultipliers[data.usageFrequency] || 1;

  // Product type multipliers
  const productMultipliers: Record<string, number> = {
    'baby-powder': 2.0,
    'shower-to-shower': 1.8,
    'body-powder': 1.5,
    'multiple-products': 2.2,
    'other': 1.3
  };
  const productMultiplier = productMultipliers[data.productType] || 1;

  // Age-based adjustments (younger = higher future damages)
  const ageMultipliers: Record<string, number> = {
    'under-40': 1.5,
    '40-50': 1.3,
    '51-60': 1.1,
    '61-70': 1.0,
    'over-70': 0.9
  };
  const ageMultiplier = ageMultipliers[data.age] || 1;

  // Pathology evidence (crucial for talc cases)
  const evidenceMultiplier = data.hasPathologyEvidence === 'yes' ? 1.8 : 1.0;

  // Economic damages
  const medicalCosts = parseInt(data.medicalCosts) || 0;
  const futureCareCosts = parseInt(data.futureCareCosts) || 0;
  const lostWages = parseInt(data.lostWages) || 0;
  const economicDamages = medicalCosts + futureCareCosts + lostWages;

  // Calculate compensation
  const multiplier = cancerMultiplier * stageMultiplier * durationMultiplier * 
                     frequencyMultiplier * productMultiplier * ageMultiplier * evidenceMultiplier;
  
  const min = Math.round((baseMin * multiplier + economicDamages) / 1000) * 1000;
  const max = Math.round((baseMax * multiplier + economicDamages * 1.5) / 1000) * 1000;

  return {
    min: Math.max(min, 100000),
    max: Math.max(max, 250000)
  };
};

const validateForm = (data: TalcFormData, step: number): boolean => {
  if (step === 1) {
    return !!(data.cancerType && data.cancerStage && data.exposureDuration);
  }
  if (step === 2) {
    return !!(data.usageFrequency && data.productType && data.age && 
              data.hasPathologyEvidence && data.medicalCosts && data.futureCareCosts && data.lostWages);
  }
  return true;
};

const TalcCompensationCalculator = () => {
  const {
    step,
    formData,
    results,
    updateField,
    handleNext,
    handleBack,
    resetForm,
    isStepValid
  } = useCalculatorForm(initialFormData, calculateCompensation, validateForm);

  const progressPercentage = (step / 3) * 100;

  return (
    <>
      <Helmet>
        <title>Talc Cancer Calculator | Baby Powder Compensation | Trembach Law</title>
        <meta name="description" content="Calculate talc cancer compensation for baby powder cases. Free estimates for ovarian cancer and mesothelioma." />
      </Helmet>

      <main className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
        <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-6 py-4 max-w-4xl">
            <Link to="/calculators" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              <span className="text-sm font-medium">Back to All Calculators</span>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Talc Cancer Compensation Calculator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estimate potential compensation for talc-related cancer cases
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
            <div className="h-2 bg-secondary">
              <div 
                className="h-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>

            <div className="p-8 md:p-12">
              {step < 3 && (
                <div className="mb-8">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <span>Step {step} of 2</span>
                    <span>{Math.round(progressPercentage)}% Complete</span>
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div>
                    <h2 className="text-2xl font-semibold mb-6 text-foreground">Cancer Information</h2>
                    
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="cancerType" className="text-base font-medium">
                          Type of Cancer *
                        </Label>
                        <Select value={formData.cancerType} onValueChange={(value) => updateField('cancerType', value)}>
                          <SelectTrigger id="cancerType" className="h-12 bg-background">
                            <SelectValue placeholder="Select cancer type" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border">
                            <SelectItem value="ovarian-cancer">Ovarian Cancer</SelectItem>
                            <SelectItem value="mesothelioma">Mesothelioma</SelectItem>
                            <SelectItem value="lung-cancer">Lung Cancer</SelectItem>
                            <SelectItem value="endometrial-cancer">Endometrial Cancer</SelectItem>
                            <SelectItem value="other-cancer">Other Cancer Type</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cancerStage" className="text-base font-medium">
                          Cancer Stage *
                        </Label>
                        <Select value={formData.cancerStage} onValueChange={(value) => updateField('cancerStage', value)}>
                          <SelectTrigger id="cancerStage" className="h-12 bg-background">
                            <SelectValue placeholder="Select cancer stage" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border">
                            <SelectItem value="stage-1">Stage I (Early, Localized)</SelectItem>
                            <SelectItem value="stage-2">Stage II (Local Spread)</SelectItem>
                            <SelectItem value="stage-3">Stage III (Regional Spread)</SelectItem>
                            <SelectItem value="stage-4">Stage IV (Metastatic)</SelectItem>
                            <SelectItem value="terminal">Terminal/Advanced Stage</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="exposureDuration" className="text-base font-medium">
                          How Long Did You Use Talc Products? *
                        </Label>
                        <Select value={formData.exposureDuration} onValueChange={(value) => updateField('exposureDuration', value)}>
                          <SelectTrigger id="exposureDuration" className="h-12 bg-background">
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border">
                            <SelectItem value="1-5-years">1-5 Years</SelectItem>
                            <SelectItem value="6-10-years">6-10 Years</SelectItem>
                            <SelectItem value="11-20-years">11-20 Years</SelectItem>
                            <SelectItem value="21-30-years">21-30 Years</SelectItem>
                            <SelectItem value="30-plus-years">30+ Years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div>
                    <h2 className="text-2xl font-semibold mb-6 text-foreground">Exposure & Economic Details</h2>
                    
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="usageFrequency" className="text-base font-medium">
                          How Often Did You Use Talc Products? *
                        </Label>
                        <Select value={formData.usageFrequency} onValueChange={(value) => updateField('usageFrequency', value)}>
                          <SelectTrigger id="usageFrequency" className="h-12 bg-background">
                            <SelectValue placeholder="Select frequency" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border">
                            <SelectItem value="occasional">Occasional Use</SelectItem>
                            <SelectItem value="weekly">Weekly</SelectItem>
                            <SelectItem value="daily">Daily</SelectItem>
                            <SelectItem value="multiple-daily">Multiple Times Daily</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="productType" className="text-base font-medium">
                          Which Talc Product(s) Did You Use? *
                        </Label>
                        <Select value={formData.productType} onValueChange={(value) => updateField('productType', value)}>
                          <SelectTrigger id="productType" className="h-12 bg-background">
                            <SelectValue placeholder="Select product type" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border">
                            <SelectItem value="baby-powder">Johnson's Baby Powder</SelectItem>
                            <SelectItem value="shower-to-shower">Shower to Shower</SelectItem>
                            <SelectItem value="body-powder">Other Body Powder</SelectItem>
                            <SelectItem value="multiple-products">Multiple Products</SelectItem>
                            <SelectItem value="other">Other Talc Product</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="age" className="text-base font-medium">
                          Your Current Age *
                        </Label>
                        <Select value={formData.age} onValueChange={(value) => updateField('age', value)}>
                          <SelectTrigger id="age" className="h-12 bg-background">
                            <SelectValue placeholder="Select age range" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border">
                            <SelectItem value="under-40">Under 40</SelectItem>
                            <SelectItem value="40-50">40-50</SelectItem>
                            <SelectItem value="51-60">51-60</SelectItem>
                            <SelectItem value="61-70">61-70</SelectItem>
                            <SelectItem value="over-70">Over 70</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="hasPathologyEvidence" className="text-base font-medium">
                          Do You Have Pathology Evidence Showing Talc Particles? *
                        </Label>
                        <Select value={formData.hasPathologyEvidence} onValueChange={(value) => updateField('hasPathologyEvidence', value)}>
                          <SelectTrigger id="hasPathologyEvidence" className="h-12 bg-background">
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border">
                            <SelectItem value="yes">Yes - Have Pathology Evidence</SelectItem>
                            <SelectItem value="no">No - No Pathology Evidence Yet</SelectItem>
                            <SelectItem value="unknown">Unknown/Not Sure</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="medicalCosts" className="text-base font-medium">
                          Past Medical Costs *
                        </Label>
                        <Select value={formData.medicalCosts} onValueChange={(value) => updateField('medicalCosts', value)}>
                          <SelectTrigger id="medicalCosts" className="h-12 bg-background">
                            <SelectValue placeholder="Select amount" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border">
                            <SelectItem value="25000">Under $25,000</SelectItem>
                            <SelectItem value="75000">$25,000 - $100,000</SelectItem>
                            <SelectItem value="150000">$100,000 - $250,000</SelectItem>
                            <SelectItem value="350000">$250,000 - $500,000</SelectItem>
                            <SelectItem value="750000">Over $500,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="futureCareCosts" className="text-base font-medium">
                          Estimated Future Care Costs *
                        </Label>
                        <Select value={formData.futureCareCosts} onValueChange={(value) => updateField('futureCareCosts', value)}>
                          <SelectTrigger id="futureCareCosts" className="h-12 bg-background">
                            <SelectValue placeholder="Select amount" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border">
                            <SelectItem value="50000">Under $50,000</SelectItem>
                            <SelectItem value="150000">$50,000 - $200,000</SelectItem>
                            <SelectItem value="350000">$200,000 - $500,000</SelectItem>
                            <SelectItem value="750000">$500,000 - $1,000,000</SelectItem>
                            <SelectItem value="1500000">Over $1,000,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="lostWages" className="text-base font-medium">
                          Lost Wages & Income *
                        </Label>
                        <Select value={formData.lostWages} onValueChange={(value) => updateField('lostWages', value)}>
                          <SelectTrigger id="lostWages" className="h-12 bg-background">
                            <SelectValue placeholder="Select amount" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-border">
                            <SelectItem value="0">None/Retired</SelectItem>
                            <SelectItem value="25000">Under $25,000</SelectItem>
                            <SelectItem value="75000">$25,000 - $100,000</SelectItem>
                            <SelectItem value="150000">$100,000 - $250,000</SelectItem>
                            <SelectItem value="350000">Over $250,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && results && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <ResultsDisplay
                    min={results.min}
                    max={results.max}
                    title="Estimated Talc Cancer Compensation Range"
                    subtitle="Based on your cancer type, exposure history, and economic damages"
                    damageCategories={[
                      {
                        title: "Economic Damages",
                        description: "Medical expenses, future care costs, lost wages and earning capacity"
                      },
                      {
                        title: "Non-Economic Damages",
                        description: "Pain and suffering, loss of quality of life, emotional distress"
                      },
                      {
                        title: "Punitive Damages",
                        description: "Additional damages awarded to punish corporate misconduct"
                      }
                    ]}
                    disclaimer="This estimate is based on historical talc lawsuit settlements and verdicts. Actual compensation depends on specific medical evidence, pathology results showing talc particles, exposure duration, product liability factors, and individual case circumstances. Talc cases often involve multiple defendants and may be part of mass tort litigation. Many cases have resulted in significant verdicts and settlements. Consultation with an experienced product liability attorney is essential."
                    ctaText="Speak with a Talc Attorney"
                  />
                  
                  <div className="mt-8 text-center">
                    <Button 
                      onClick={resetForm}
                      variant="outline"
                      size="lg"
                      className="min-w-[200px]"
                    >
                      Calculate Another Case
                    </Button>
                  </div>
                </div>
              )}

              {step < 3 && (
                <FormNavigation
                  currentStep={step}
                  totalSteps={3}
                  isValid={isStepValid()}
                  onBack={handleBack}
                  onNext={handleNext}
                  nextButtonText={step === 2 ? 'Calculate Compensation' : 'Continue'}
                />
              )}
            </div>
          </div>

          <div className="mt-8 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-blue-900 dark:text-blue-100">
                <p className="font-semibold mb-2">Important Information About Talc Litigation</p>
                <p>
                  Thousands of lawsuits have been filed against manufacturers of talc-based products. 
                  Juries have awarded significant verdicts, with some exceeding $4 billion. 
                  Key evidence includes pathology reports showing talc particles in tissue samples and 
                  documented history of product use. Time limits apply for filing claims.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default TalcCompensationCalculator;
