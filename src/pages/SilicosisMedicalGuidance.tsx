import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Heart, Stethoscope, FileText, Users } from 'lucide-react';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';
import medicalGuidanceHero from '@/assets/silicosis-medical-guidance-hero.jpg';

const SilicosisMedicalGuidance: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    symptoms: '',
    exposureHistory: '',
    questions: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Medical guidance request:', formData);
  };

  return (
    <>
      <SEO 
        title="Silicosis Medical Guidance | Expert Health Resources"
        description="Get expert medical guidance for silicosis. Connect with specialized healthcare providers and understand your treatment options for silicosis-related health issues."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/5">
        <GoBack className="container mx-auto px-4" />
        
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: `url(${medicalGuidanceHero})` }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Stethoscope className="w-12 h-12 text-primary" />
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Silicosis Medical Guidance
                </h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                Expert medical resources and guidance for silicosis patients and their families
              </p>
            </div>
          </div>
        </section>

        {/* Medical Information */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <Card className="shadow-lg border-0 bg-card/80 backdrop-blur">
                    <CardHeader>
                      <CardTitle className="text-2xl text-primary flex items-center gap-2">
                        <Heart className="w-6 h-6" />
                        Understanding Silicosis
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        Silicosis is a lung disease caused by inhaling crystalline silica dust. Early detection and proper medical care are crucial for managing this condition.
                      </p>
                      <div className="space-y-3">
                        <h4 className="font-semibold">Common Symptoms:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          <li>Persistent cough</li>
                          <li>Shortness of breath</li>
                          <li>Chest pain</li>
                          <li>Fatigue</li>
                          <li>Loss of appetite</li>
                          <li>Weight loss</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-lg border-0 bg-card/80 backdrop-blur">
                    <CardHeader>
                      <CardTitle className="text-2xl text-primary flex items-center gap-2">
                        <FileText className="w-6 h-6" />
                        Medical Resources
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <h4 className="font-semibold">Specialized Care:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          <li>Pulmonologists specializing in occupational lung disease</li>
                          <li>Occupational medicine physicians</li>
                          <li>Respiratory therapists</li>
                          <li>Social workers familiar with silicosis cases</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold">Diagnostic Tests:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          <li>Chest X-rays</li>
                          <li>High-resolution CT scans</li>
                          <li>Pulmonary function tests</li>
                          <li>Occupational exposure history assessment</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card className="shadow-2xl border-0 bg-card/80 backdrop-blur">
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl text-primary flex items-center justify-center gap-2">
                        <Users className="w-6 h-6" />
                        Request Medical Guidance
                      </CardTitle>
                      <CardDescription>
                        Connect with our medical guidance specialists
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="(555) 123-4567"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="symptoms">Current Symptoms</Label>
                          <Textarea
                            id="symptoms"
                            placeholder="Describe your current symptoms"
                            value={formData.symptoms}
                            onChange={(e) => handleInputChange('symptoms', e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="exposureHistory">Exposure History</Label>
                          <Textarea
                            id="exposureHistory"
                            placeholder="Describe your workplace exposure to silica"
                            value={formData.exposureHistory}
                            onChange={(e) => handleInputChange('exposureHistory', e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="questions">Medical Questions</Label>
                          <Textarea
                            id="questions"
                            placeholder="What medical questions do you have about silicosis?"
                            value={formData.questions}
                            onChange={(e) => handleInputChange('questions', e.target.value)}
                          />
                        </div>

                        <Button type="submit" className="w-full py-3 text-lg font-semibold">
                          <Stethoscope className="w-5 h-5 mr-2" />
                          Request Medical Guidance
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Information */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
                <h3 className="text-xl font-bold text-destructive mb-3">Medical Emergency</h3>
                <p className="text-destructive/80 mb-4">
                  If you are experiencing severe breathing difficulties, chest pain, or other emergency symptoms, seek immediate medical attention.
                </p>
                <Button variant="destructive" size="lg">
                  Call 911 or Go to Emergency Room
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SilicosisMedicalGuidance;