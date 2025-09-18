import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calculator, 
  DollarSign, 
  Phone, 
  Clock,
  Shield,
  Award,
  AlertTriangle,
  Brain,
  TrendingUp,
  FileText
} from 'lucide-react';
import heroImage from '@/assets/brain-compensation-calculator-hero.jpg';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';

const BrainCompensationCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    injurySeverity: '',
    age: '',
    income: '',
    medicalCosts: '',
    futureCareCosts: '',
    workDaysMissed: '',
    permanentDisability: '',
    painLevel: '',
    liabilityStrength: ''
  });

  const [estimation, setEstimation] = useState<{
    economic: number;
    nonEconomic: number;
    total: number;
    range: { min: number; max: number };
  } | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateEstimation = () => {
    // Basic calculation logic for demonstration
    const medicalCosts = parseInt(formData.medicalCosts) || 0;
    const income = parseInt(formData.income) || 50000;
    const workDaysMissed = parseInt(formData.workDaysMissed) || 0;
    
    // Economic damages
    const lostWages = (income / 365) * workDaysMissed;
    const futureCareCosts = parseInt(formData.futureCareCosts) || 0;
    const economic = medicalCosts + lostWages + futureCareCosts;
    
    // Non-economic damages multiplier based on severity
    let multiplier = 1.5;
    switch (formData.injurySeverity) {
      case 'mild':
        multiplier = 2;
        break;
      case 'moderate':
        multiplier = 4;
        break;
      case 'severe':
        multiplier = 6;
        break;
      case 'catastrophic':
        multiplier = 8;
        break;
    }
    
    const nonEconomic = economic * multiplier;
    const total = economic + nonEconomic;
    
    // Create range (±30%)
    const range = {
      min: Math.round(total * 0.7),
      max: Math.round(total * 1.3)
    };
    
    setEstimation({
      economic: Math.round(economic),
      nonEconomic: Math.round(nonEconomic),
      total: Math.round(total),
      range
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
        title="Brain Injury Compensation Calculator | California TBI Settlement Estimator"
        description="Calculate potential compensation for your California brain injury case. Free TBI settlement estimator from experienced attorneys. Get your case value estimate today."
        canonical="/brain-compensation-calculator"
      />
      
      <GoBack />
      
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Badge className="bg-white/10 text-white border-white/20">
              <Award className="w-4 h-4 mr-2" />
              Former Defense Attorney
            </Badge>
            <Badge className="bg-white/10 text-white border-white/20">
              <Calculator className="w-4 h-4 mr-2" />
              Free Calculator
            </Badge>
            <Badge className="bg-white/10 text-white border-white/20">
              <Clock className="w-4 h-4 mr-2" />
              Instant Results
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Brain Injury Compensation Calculator
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get an estimate of your potential TBI settlement based on California case values and our experience with brain injury claims.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calculator Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Calculator className="w-6 h-6 text-primary" />
                  Brain Injury Case Calculator
                </CardTitle>
                <p className="text-muted-foreground">
                  Answer these questions to get an estimate of your potential brain injury compensation in California.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="injurySeverity">Brain Injury Severity *</Label>
                  <Select value={formData.injurySeverity} onValueChange={(value) => handleInputChange('injurySeverity', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select injury severity..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mild">Mild TBI/Concussion</SelectItem>
                      <SelectItem value="moderate">Moderate TBI</SelectItem>
                      <SelectItem value="severe">Severe TBI</SelectItem>
                      <SelectItem value="catastrophic">Catastrophic/Vegetative</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="age">Your Age</Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="e.g., 35"
                      value={formData.age}
                      onChange={(e) => handleInputChange('age', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="income">Annual Income</Label>
                    <Input
                      id="income"
                      type="number"
                      placeholder="e.g., 75000"
                      value={formData.income}
                      onChange={(e) => handleInputChange('income', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="medicalCosts">Medical Costs to Date</Label>
                    <Input
                      id="medicalCosts"
                      type="number"
                      placeholder="e.g., 25000"
                      value={formData.medicalCosts}
                      onChange={(e) => handleInputChange('medicalCosts', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="futureCareCosts">Estimated Future Care Costs</Label>
                    <Input
                      id="futureCareCosts"
                      type="number"
                      placeholder="e.g., 100000"
                      value={formData.futureCareCosts}
                      onChange={(e) => handleInputChange('futureCareCosts', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="workDaysMissed">Work Days Missed</Label>
                  <Input
                    id="workDaysMissed"
                    type="number"
                    placeholder="e.g., 90"
                    value={formData.workDaysMissed}
                    onChange={(e) => handleInputChange('workDaysMissed', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="permanentDisability">Permanent Disability Level</Label>
                  <Select value={formData.permanentDisability} onValueChange={(value) => handleInputChange('permanentDisability', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select disability level..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No permanent disability</SelectItem>
                      <SelectItem value="mild">Mild (0-25%)</SelectItem>
                      <SelectItem value="moderate">Moderate (25-50%)</SelectItem>
                      <SelectItem value="severe">Severe (50-75%)</SelectItem>
                      <SelectItem value="total">Total (75-100%)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="painLevel">Daily Pain/Suffering Level</Label>
                  <Select value={formData.painLevel} onValueChange={(value) => handleInputChange('painLevel', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Rate your daily pain..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mild">Mild (1-3/10)</SelectItem>
                      <SelectItem value="moderate">Moderate (4-6/10)</SelectItem>
                      <SelectItem value="severe">Severe (7-8/10)</SelectItem>
                      <SelectItem value="extreme">Extreme (9-10/10)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="liabilityStrength">Strength of Your Case</Label>
                  <Select value={formData.liabilityStrength} onValueChange={(value) => handleInputChange('liabilityStrength', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="How strong is liability?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weak">Weak liability</SelectItem>
                      <SelectItem value="moderate">Moderate liability</SelectItem>
                      <SelectItem value="strong">Strong liability</SelectItem>
                      <SelectItem value="clear">Clear liability</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={calculateEstimation} 
                  size="lg" 
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg"
                  disabled={!formData.injurySeverity}
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate My Brain Injury Compensation
                </Button>

                {estimation && (
                  <Card className="bg-green-50 border-green-200">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-green-800">
                        <DollarSign className="w-5 h-5" />
                        Your Estimated Compensation
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-white rounded border">
                          <p className="text-sm text-muted-foreground">Economic Damages</p>
                          <p className="text-2xl font-bold text-green-600">{formatCurrency(estimation.economic)}</p>
                          <p className="text-xs">Medical bills, lost wages, future care</p>
                        </div>
                        <div className="text-center p-4 bg-white rounded border">
                          <p className="text-sm text-muted-foreground">Non-Economic Damages</p>
                          <p className="text-2xl font-bold text-green-600">{formatCurrency(estimation.nonEconomic)}</p>
                          <p className="text-xs">Pain, suffering, life impact</p>
                        </div>
                      </div>
                      
                      <div className="text-center p-6 bg-green-600 text-white rounded">
                        <p className="text-lg">Total Estimated Range</p>
                        <p className="text-3xl font-bold">
                          {formatCurrency(estimation.range.min)} - {formatCurrency(estimation.range.max)}
                        </p>
                      </div>
                      
                      <div className="text-center">
                        <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                          <Phone className="w-5 h-5 mr-2" />
                          Discuss My Case: (818) 123-4567
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
                  <p className="text-sm text-yellow-800">
                    <AlertTriangle className="w-4 h-4 inline mr-2" />
                    <strong>Important:</strong> This calculator provides estimates only. Every brain injury case is unique. 
                    Actual compensation depends on many factors including liability, insurance coverage, and case-specific circumstances.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="bg-red-600 text-white">
              <CardHeader>
                <CardTitle className="text-center">Get Accurate Case Value</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-white text-red-600 hover:bg-gray-100">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (818) 123-4567
                </Button>
                <p className="text-center text-sm">Free consultation with brain injury attorney</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  California TBI Settlements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium">Mild TBI/Concussion</p>
                    <p className="text-muted-foreground">$100,000 - $500,000+</p>
                  </div>
                  <div>
                    <p className="font-medium">Moderate TBI</p>
                    <p className="text-muted-foreground">$500,000 - $2,000,000+</p>
                  </div>
                  <div>
                    <p className="font-medium">Severe TBI</p>
                    <p className="text-muted-foreground">$2M - $10,000,000+</p>
                  </div>
                  <div>
                    <p className="font-medium">Catastrophic TBI</p>
                    <p className="text-muted-foreground">$5M - $20,000,000+</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  Factors Affecting Value
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Injury severity and permanence</li>
                  <li>• Age and life expectancy</li>
                  <li>• Income and career impact</li>
                  <li>• Medical costs and future care</li>
                  <li>• Pain and suffering level</li>
                  <li>• Liability strength</li>
                  <li>• Available insurance coverage</li>
                  <li>• Quality of legal representation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-lg text-white">
            <h2 className="text-2xl font-bold mb-4">Maximize Your Brain Injury Compensation</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Insurance companies use complex formulas to minimize brain injury claims. 
              Get experienced legal help to ensure you receive full compensation for your TBI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (818) 123-4567
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white hover:bg-white hover:text-primary">
                <FileText className="w-5 h-5 mr-2" />
                Start Case Evaluation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrainCompensationCalculator;