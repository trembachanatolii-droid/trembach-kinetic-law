import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calculator, DollarSign, FileText, Users } from 'lucide-react';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';
import compensationHero from '@/assets/silicosis-compensation-calculator.jpg';

const SilicosisCompensationCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    age: '',
    exposureYears: '',
    diagnosisDate: '',
    severity: '',
    workplaceType: '',
    currentSymptoms: '',
    medicalExpenses: '',
    lostWages: '',
    additionalInfo: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Compensation calculator data:', formData);
  };

  return (
    <>
      <SEO 
        title="Silicosis Compensation Calculator | Estimate Your Case Value"
        description="Use our free silicosis compensation calculator to estimate potential compensation for your silicosis case. Get an instant evaluation based on your specific circumstances."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/5">
        <GoBack className="container mx-auto px-4" />
        
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: `url(${compensationHero})` }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Calculator className="w-12 h-12 text-primary" />
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Silicosis Compensation Calculator
                </h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                Get a free estimate of your potential silicosis compensation based on your specific case details
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-2xl border-0 bg-card/80 backdrop-blur">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl font-bold text-primary mb-4">
                    Calculate Your Potential Compensation
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Provide the following information for a personalized estimate
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="age">Current Age</Label>
                        <Input
                          id="age"
                          type="number"
                          placeholder="Your age"
                          value={formData.age}
                          onChange={(e) => handleInputChange('age', e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="exposureYears">Years of Silica Exposure</Label>
                        <Input
                          id="exposureYears"
                          type="number"
                          placeholder="Years exposed to silica"
                          value={formData.exposureYears}
                          onChange={(e) => handleInputChange('exposureYears', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="diagnosisDate">Date of Diagnosis</Label>
                        <Input
                          id="diagnosisDate"
                          type="date"
                          value={formData.diagnosisDate}
                          onChange={(e) => handleInputChange('diagnosisDate', e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="severity">Silicosis Severity</Label>
                        <Select onValueChange={(value) => handleInputChange('severity', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select severity level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="simple">Simple Silicosis</SelectItem>
                            <SelectItem value="complicated">Complicated Silicosis</SelectItem>
                            <SelectItem value="acute">Acute Silicosis</SelectItem>
                            <SelectItem value="progressive">Progressive Massive Fibrosis</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="workplaceType">Type of Workplace Exposure</Label>
                      <Select onValueChange={(value) => handleInputChange('workplaceType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select workplace type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="countertop">Countertop/Stone Fabrication</SelectItem>
                          <SelectItem value="construction">Construction</SelectItem>
                          <SelectItem value="mining">Mining</SelectItem>
                          <SelectItem value="foundry">Foundry Work</SelectItem>
                          <SelectItem value="sandblasting">Sandblasting</SelectItem>
                          <SelectItem value="ceramics">Ceramics/Glass Manufacturing</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="medicalExpenses">Estimated Medical Expenses</Label>
                        <Input
                          id="medicalExpenses"
                          type="number"
                          placeholder="Total medical costs"
                          value={formData.medicalExpenses}
                          onChange={(e) => handleInputChange('medicalExpenses', e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="lostWages">Lost Wages/Income</Label>
                        <Input
                          id="lostWages"
                          type="number"
                          placeholder="Lost income amount"
                          value={formData.lostWages}
                          onChange={(e) => handleInputChange('lostWages', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="currentSymptoms">Current Symptoms</Label>
                      <Textarea
                        id="currentSymptoms"
                        placeholder="Describe your current symptoms and how they affect your daily life"
                        value={formData.currentSymptoms}
                        onChange={(e) => handleInputChange('currentSymptoms', e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="additionalInfo">Additional Information</Label>
                      <Textarea
                        id="additionalInfo"
                        placeholder="Any other relevant information about your case"
                        value={formData.additionalInfo}
                        onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                      />
                    </div>

                    <Button type="submit" className="w-full py-6 text-lg font-semibold">
                      <DollarSign className="w-5 h-5 mr-2" />
                      Calculate My Compensation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SilicosisCompensationCalculator;