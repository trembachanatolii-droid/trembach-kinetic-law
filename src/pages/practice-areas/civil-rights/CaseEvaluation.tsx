import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Scale, Shield } from 'lucide-react';
import SEO from '@/components/SEO';
import heroImage from '@/assets/civil-rights-case-evaluation-hero.jpg';

const CaseEvaluation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    violationType: '',
    incidentDate: '',
    location: '',
    description: '',
    injuries: '',
    policeReport: '',
    consent: false
  });

  const [showGoBack, setShowGoBack] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoBack(window.scrollY > 200);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goBack = () => {
    const scrollPos = localStorage.getItem('scrollPosition');
    window.history.back();
    if (scrollPos) {
      setTimeout(() => window.scrollTo(0, parseInt(scrollPos)), 100);
    }
  };

  return (
    <>
      <SEO 
        title="Civil Rights Case Evaluation | Free Consultation | Trembach Law Firm"
        description="Get a free civil rights case evaluation. Experienced California attorney fighting police brutality, false arrest, and discrimination. No fees unless we win."
        keywords="civil rights case evaluation, police brutality lawyer, false arrest attorney, free consultation"
      />
      
      <div className="min-h-screen bg-background">
        <button 
          onClick={goBack}
          className={`fixed top-24 left-6 z-50 flex items-center px-4 py-2 bg-white shadow-lg rounded-lg hover:bg-gray-50 transition-all duration-300 ${
            showGoBack ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Go Back
        </button>

        {/* Hero Section */}
        <section 
          className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Free Civil Rights Case Evaluation
            </h1>
            <p className="text-xl mb-6 text-white">
              Get expert legal analysis of your civil rights case. No fees unless we win.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Scale className="w-6 h-6 mr-3 text-red-600" />
                Civil Rights Case Evaluation Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input 
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <Input 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      required 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <Input 
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required 
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Type of Violation *</label>
                    <Select value={formData.violationType} onValueChange={(value) => setFormData(prev => ({ ...prev, violationType: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select violation type" />
                      </SelectTrigger>
                      <SelectContent className="bg-white z-50">
                        <SelectItem value="police-brutality">Police Brutality/Excessive Force</SelectItem>
                        <SelectItem value="false-arrest">False Arrest/Wrongful Detention</SelectItem>
                        <SelectItem value="racial-profiling">Racial Profiling</SelectItem>
                        <SelectItem value="malicious-prosecution">Malicious Prosecution</SelectItem>
                        <SelectItem value="jail-abuse">Jail/Prison Abuse</SelectItem>
                        <SelectItem value="wrongful-death">Wrongful Death</SelectItem>
                        <SelectItem value="other">Other Civil Rights Violation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Incident Date *</label>
                    <Input 
                      type="date"
                      value={formData.incidentDate}
                      onChange={(e) => setFormData(prev => ({ ...prev, incidentDate: e.target.value }))}
                      required 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Description of Incident *</label>
                  <Textarea 
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Please describe what happened in detail..."
                    required 
                  />
                </div>

                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-3">
                  Submit My Case for Free Evaluation
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CaseEvaluation;