import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Plane, Scale } from 'lucide-react';
import heroBackground from '@/assets/aviation-case-evaluation-hero.jpg';
import GoBack from '@/components/GoBack';

const AviationCaseEvaluation: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <GoBack fallbackPath="/practice-areas/aviation-accidents" />
      
      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Free Aviation Accident Case Evaluation
          </h1>
          <p className="text-xl">Get expert legal assessment of your airplane or helicopter crash case</p>
        </div>
      </section>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary flex items-center justify-center">
              <Scale className="w-6 h-6 mr-2" />
              Aviation Accident Case Evaluation Form
            </CardTitle>
            <p className="text-muted-foreground">All information is confidential and protected by attorney-client privilege</p>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name *</label>
                  <Input required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name *</label>
                  <Input required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <Input type="tel" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <Input type="email" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Accident Date</label>
                  <Input type="date" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Type of Aircraft</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select aircraft type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="commercial-airline">Commercial Airline</SelectItem>
                      <SelectItem value="private-plane">Private Plane</SelectItem>
                      <SelectItem value="helicopter">Helicopter</SelectItem>
                      <SelectItem value="charter">Charter Flight</SelectItem>
                      <SelectItem value="military">Military Aircraft</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Describe Your Aviation Accident</label>
                <Textarea 
                  placeholder="Please provide details about what happened, your injuries, and how the accident has affected you..."
                  rows={6}
                />
              </div>

              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3">
                Submit My Free Case Evaluation
              </Button>
              
              <p className="text-sm text-center text-muted-foreground">
                By submitting this form, you agree to our terms and conditions. No fees unless we win your case.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AviationCaseEvaluation;