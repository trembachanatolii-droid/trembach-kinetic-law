import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';
import { 
  Phone, 
  Star,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import heroBackground from '@/assets/amputation-case-evaluation-hero.jpg';
import ThreeDVisualEffects from '@/components/ThreeDVisualEffects';
import '@/styles/premium-3d-effects.css';

const AmputationCaseEvaluation: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    incidentDate: '',
    incidentLocation: '',
    amputationType: '',
    injuryType: '',
    medicalTreatment: '',
    description: '',
    consent: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <SEO 
        title="Free Amputation Case Evaluation | California Limb Loss Lawyers"
        description="Get a free case evaluation for your California amputation injury claim. Experienced lawyers handling traumatic limb loss and catastrophic injury cases."
        canonical="https://trembachlaw.com/amputation-case-evaluation"
      />
      
      <div className="min-h-screen bg-background">
        <section 
          className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <GoBack />
          
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Free Amputation Case Evaluation
            </h1>
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Trusted by Amputation Victims</span>
            </div>
            <p className="text-xl">
              Get expert legal advice about your amputation injury case - completely free
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ThreeDVisualEffects>
                <div className="premium-form-container premium-form-container--blue-solid interactive-card glass-card rounded-2xl p-8 gpu-accelerated">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-display text-slate-900 mb-2 font-bold">Get Your Free Amputation Case Evaluation</h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto mb-4"></div>
                    <p className="text-slate-700 text-lg leading-relaxed">Specialized evaluation for amputation injury cases throughout California</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-slate-800 text-base font-medium">First Name *</label>
                        <Input
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="h-12 text-base"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-slate-800 text-base font-medium">Last Name *</label>
                        <Input
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="h-12 text-base"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-slate-800 text-base font-medium">Email *</label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="h-12 text-base"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-slate-800 text-base font-medium">Phone *</label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="h-12 text-base"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-slate-800 text-base font-medium">
                        Please describe your amputation injury *
                      </label>
                      <Textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Please provide details about how the amputation occurred..."
                        rows={5}
                        className=""
                        required
                      />
                    </div>

                    <div className="flex items-start space-x-2">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleInputChange}
                        className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded"
                        required
                      />
                      <label className="text-slate-700 text-sm leading-relaxed">
                        I consent to being contacted by Trembach Law Firm regarding my amputation case. I understand this consultation is free and there is no obligation. *
                      </label>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full btn-enhanced py-4 text-lg"
                    >
                      Get My Free Case Evaluation
                    </Button>
                  </form>
                </div>
              </ThreeDVisualEffects>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card className="glass-card border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-primary">Need Immediate Help?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Button className="w-full" onClick={() => window.location.href = 'tel:8181234567'}>
                        <Phone className="w-4 h-4 mr-2" />
                        Call (818) 123-4567
                      </Button>
                      <p className="text-sm text-muted-foreground text-center">
                        Available 24/7 for amputation cases
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-yellow-500/20 bg-yellow-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-yellow-700">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Time Sensitive
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-yellow-700">
                      California amputation cases have a 2-year statute of limitations. Don't wait - protect your rights today.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AmputationCaseEvaluation;