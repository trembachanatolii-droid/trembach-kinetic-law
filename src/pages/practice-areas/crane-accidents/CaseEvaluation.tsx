import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MessageCircle } from 'lucide-react';

import SEO from '@/components/SEO';
import caseEvaluationImage from '@/assets/crane-case-evaluation-hero.jpg';
import ThreeDVisualEffects from '@/components/ThreeDVisualEffects';
import '@/styles/premium-3d-effects.css';

const CraneAccidentsCaseEvaluation: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    accidentDate: '',
    craneType: '',
    injuryType: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = 'Crane Accident Case Evaluation Request';
    const body = `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Accident Date: ${formData.accidentDate}
Crane Type: ${formData.craneType}
Injury Type: ${formData.injuryType}
Description: ${formData.description}
    `;
    window.location.href = `mailto:info@trembachlawfirm.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Free Crane Accident Case Evaluation | Trembach Law Firm"
        description="Get a free case evaluation for your crane accident. Our experienced attorneys will review your case and determine your legal options."
        keywords="crane accident case evaluation, free consultation, crane accident lawyer"
        canonical="/practice-areas/crane-accidents/case-evaluation"
      />

      

      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${caseEvaluationImage})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Free Crane Accident Case Evaluation
          </h1>
          <p className="text-xl md:text-2xl text-white mb-6">
            Get Expert Legal Assessment for Your Construction Accident
          </p>
          <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed">
            Our experienced attorneys will review your crane accident case at no cost. 
            Complete this confidential evaluation to understand your legal rights and potential compensation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <ThreeDVisualEffects>
          <Card className="p-8 premium-form-container interactive-card">
            <h2 className="text-2xl font-bold mb-6 text-blue-600 font-display">
              Crane Accident Case Evaluation
            </h2>
            <form onSubmit={(e) => { e.preventDefault(); const subject = 'Crane Accident Case Evaluation Request'; const body = `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nAccident Date: ${formData.accidentDate}\nCrane Type: ${formData.craneType}\nInjury Type: ${formData.injuryType}\nDescription: ${formData.description}`; console.log('Crane accident form submitted:', formData); alert('Thank you for your submission. We will contact you within 24 hours.'); }} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name *</label>
                  <Input
                    value={formData.firstName}
                    onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                    required
                    className="interactive-card"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name *</label>
                  <Input
                    value={formData.lastName}
                    onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                    required
                    className="interactive-card"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                    className="interactive-card"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone *</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    required
                    className="interactive-card"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Accident Date</label>
                  <Input
                    type="date"
                    value={formData.accidentDate}
                    onChange={(e) => setFormData(prev => ({ ...prev, accidentDate: e.target.value }))}
                    className="interactive-card"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Type of Crane</label>
                  <Select value={formData.craneType} onValueChange={(value) => setFormData(prev => ({ ...prev, craneType: value }))}>
                    <SelectTrigger className="interactive-card">
                      <SelectValue placeholder="Select crane type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mobile-crane">Mobile Crane</SelectItem>
                      <SelectItem value="tower-crane">Tower Crane</SelectItem>
                      <SelectItem value="overhead-crane">Overhead Crane</SelectItem>
                      <SelectItem value="crawler-crane">Crawler Crane</SelectItem>
                      <SelectItem value="truck-mounted-crane">Truck-Mounted Crane</SelectItem>
                      <SelectItem value="unknown">Unknown/Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Type of Injury</label>
                <Select value={formData.injuryType} onValueChange={(value) => setFormData(prev => ({ ...prev, injuryType: value }))}>
                  <SelectTrigger className="interactive-card">
                    <SelectValue placeholder="Select injury type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="crush-injury">Crush Injury</SelectItem>
                    <SelectItem value="spinal-injury">Spinal Cord Injury</SelectItem>
                    <SelectItem value="head-injury">Head/Brain Injury</SelectItem>
                    <SelectItem value="fractures">Broken Bones/Fractures</SelectItem>
                    <SelectItem value="internal-injuries">Internal Injuries</SelectItem>
                    <SelectItem value="burns">Burns/Electrical Injuries</SelectItem>
                    <SelectItem value="wrongful-death">Wrongful Death</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Describe Your Accident</label>
                <Textarea
                  className="interactive-card h-32"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Please describe how your crane accident occurred..."
                />
              </div>

              <Button type="submit" className="w-full btn-enhanced py-4 text-lg">
                Submit Case Evaluation
              </Button>
            </form>
          </Card>
        </ThreeDVisualEffects>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="p-6 text-center">
            <Phone className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">Call Now</h3>
            <Button 
              className="w-full bg-green-600 hover:bg-green-700 text-white"
              onClick={() => window.location.href = 'tel:8181234567'}
            >
              <span className="text-white">(818) 123-4567</span>
            </Button>
          </Card>

          <Card className="p-6 text-center">
            <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">Free Calculator</h3>
            <Button 
              variant="outline"
              className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              onClick={() => window.location.href = '/practice-areas/crane-accidents/compensation-calculator'}
            >
              Calculate Compensation
            </Button>
          </Card>

          <Card className="p-6 text-center">
            <Mail className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">Email Us</h3>
            <Button 
              variant="outline"
              className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
              onClick={() => window.location.href = 'mailto:info@trembachlawfirm.com'}
            >
              Send Email
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CraneAccidentsCaseEvaluation;