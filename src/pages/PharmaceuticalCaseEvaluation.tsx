import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Phone, Mail, FileText } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useToast } from '@/hooks/use-toast';
import SEO from '@/components/SEO';
import heroImage from '@/assets/practice-areas/pharmaceutical-hero.jpg';

gsap.registerPlugin(ScrollTrigger);

const PharmaceuticalCaseEvaluation: React.FC = () => {
  const { toast } = useToast();
  const heroRef = useRef<HTMLDivElement>(null);
  const [showGoBack, setShowGoBack] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    drugInvolved: '',
    injuryDescription: '',
    diagnosisDate: '',
    stillTaking: '',
    symptoms: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowGoBack(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Case Evaluation Submitted",
      description: "Thank you for contacting Trembach Law Firm! We will review your pharmaceutical injury case and contact you within 24 hours.",
    });
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Free Pharmaceutical Case Evaluation | Trembach Law Firm"
        description="Get a free evaluation of your pharmaceutical injury case. Experienced attorneys ready to fight for your rights. No fees unless we win."
        canonical="https://www.trembachlawfirm.com/pharmaceutical-case-evaluation"
      />

      {showGoBack && (
        <Button 
          variant="ghost" 
          onClick={handleGoBack}
          className="fixed top-20 left-6 z-50 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm animate-fade-in"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Go Back
        </Button>
      )}

      <section 
        ref={heroRef}
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Free Pharmaceutical Case Evaluation
          </h1>
          <p className="text-xl">
            Get expert legal review of your dangerous drug injury case - completely free
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-red-600">Pharmaceutical Injury Case Evaluation</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>First Name *</Label>
                      <Input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <Label>Last Name *</Label>
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
                      <Label>Phone *</Label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <Label>Email *</Label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label>Drug/Medication Involved *</Label>
                    <Select value={formData.drugInvolved} onValueChange={(value) => setFormData(prev => ({ ...prev, drugInvolved: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select medication..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ozempic">Ozempic (semaglutide)</SelectItem>
                        <SelectItem value="wegovy">Wegovy (semaglutide)</SelectItem>
                        <SelectItem value="mounjaro">Mounjaro (tirzepatide)</SelectItem>
                        <SelectItem value="trulicity">Trulicity (dulaglutide)</SelectItem>
                        <SelectItem value="other">Other Prescription Drug</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label>Describe Your Injury/Side Effects *</Label>
                    <Textarea
                      placeholder="Please describe your injury or side effects in detail"
                      value={formData.injuryDescription}
                      onChange={(e) => setFormData(prev => ({ ...prev, injuryDescription: e.target.value }))}
                      rows={4}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Submit Case Evaluation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">Contact Us Directly</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call (818) 123-4567
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.location.href = 'mailto:info@trembachlawfirm.com'}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmaceuticalCaseEvaluation;