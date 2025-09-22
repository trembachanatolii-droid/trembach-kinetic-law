import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Phone, Shield, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import GoBack from '@/components/GoBack';

const ClergyAbuseCaseEvaluation: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    abuseType: '',
    religiousInstitution: '',
    timeframe: '',
    additionalInfo: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out. Your information has been received confidentially. A member of our team will contact you within 24 hours.');
  };

  return (
    <>
      <SEO 
        title="Free Clergy Abuse Case Evaluation | California Attorney"
        description="Get a free, confidential case evaluation for clergy abuse. No fees unless we win. Former defense attorney fights for survivors."
      />
      
      <Navigation />
      <GoBack fallbackPath="/practice-areas/clergy-abuse" />
      
      <div className="min-h-screen bg-background py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Free Clergy Abuse Case Evaluation</h1>
            <p className="text-xl text-muted-foreground">
              Confidential consultation with experienced California clergy abuse attorneys
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-6 h-6 text-primary" />
                    Confidential Case Evaluation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name *</label>
                        <Input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name *</label>
                        <Input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone *</label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email *</label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Type of Religious Institution *</label>
                      <Select value={formData.religiousInstitution} onValueChange={(value) => setFormData(prev => ({ ...prev, religiousInstitution: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select institution type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="catholic-church">Catholic Church</SelectItem>
                          <SelectItem value="protestant-church">Protestant Church</SelectItem>
                          <SelectItem value="jewish-synagogue">Jewish Synagogue</SelectItem>
                          <SelectItem value="mormon-temple">Mormon Temple/Ward</SelectItem>
                          <SelectItem value="islamic-mosque">Islamic Mosque</SelectItem>
                          <SelectItem value="buddhist-temple">Buddhist Temple</SelectItem>
                          <SelectItem value="other-religious">Other Religious Institution</SelectItem>
                          <SelectItem value="religious-school">Religious School</SelectItem>
                          <SelectItem value="youth-organization">Youth Organization</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">When did the abuse occur? *</label>
                      <Select value={formData.timeframe} onValueChange={(value) => setFormData(prev => ({ ...prev, timeframe: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeframe" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="childhood">During childhood (under 18)</SelectItem>
                          <SelectItem value="adult">As an adult</SelectItem>
                          <SelectItem value="both">Both childhood and adult</SelectItem>
                          <SelectItem value="not-sure">Not sure/prefer to discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Additional Information (Optional)</label>
                      <Textarea
                        value={formData.additionalInfo}
                        onChange={(e) => setFormData(prev => ({ ...prev, additionalInfo: e.target.value }))}
                        placeholder="Any additional details you'd like to share..."
                        className="min-h-[100px]"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-3">
                      Submit Confidential Evaluation
                    </Button>

                    <p className="text-center text-sm text-muted-foreground">
                      Your information is protected by attorney-client privilege and will be kept strictly confidential.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle>Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">100% Confidential</h4>
                      <p className="text-sm text-muted-foreground">All communications protected by attorney-client privilege</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">24/7 Available</h4>
                      <p className="text-sm text-muted-foreground">We're here when you need us most</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 flex items-center gap-2"
                      onClick={() => window.open('tel:8181234567')}
                    >
                      <Phone className="w-4 h-4" />
                      Call (818) 123-4567
                    </Button>
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

export default ClergyAbuseCaseEvaluation;