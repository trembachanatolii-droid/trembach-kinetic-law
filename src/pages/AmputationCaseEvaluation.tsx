import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';
import ThreeDVisualEffects from '@/components/3DVisualEffects';
import { 
  Phone, 
  Star,
  CheckCircle,
  AlertTriangle,
  ChevronDown,
  Check,
  X
} from 'lucide-react';
import heroBackground from '@/assets/amputation-case-evaluation-hero.jpg';

const AmputationCaseEvaluation: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    accidentDate: '',
    accidentLocation: '',
    amputationType: '',
    accidentCause: '',
    accidentResponsible: '',
    currentSymptoms: [] as string[],
    medicalTreatment: '',
    workStatus: '',
    priorAttorney: '',
    description: '',
    consent: false
  });

  const [symptomsOpen, setSymptomsOpen] = useState(false);

  const availableSymptoms = [
    "Phantom limb pain",
    "Residual limb pain", 
    "Difficulty with prosthetics",
    "Balance problems",
    "Mobility limitations",
    "Depression/anxiety",
    "Sleep disturbances",
    "Infection at amputation site",
    "Chronic fatigue",
    "Loss of independence",
    "Relationship difficulties",
    "Financial stress"
  ];

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

  const handleSymptomToggle = (symptom: string) => {
    setFormData(prev => ({
      ...prev,
      currentSymptoms: prev.currentSymptoms.includes(symptom)
        ? prev.currentSymptoms.filter(s => s !== symptom)
        : [...prev.currentSymptoms, symptom]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Amputation case evaluation submitted:', formData);
  };

  return (
    <>
      <SEO 
        title="Free Amputation Case Evaluation | California Limb Loss Lawyers"
        description="Get a free case evaluation for your California amputation injury claim. Experienced lawyers handling traumatic limb loss and catastrophic injury cases."
        canonical="https://trembachlaw.com/amputation-case-evaluation"
      />
      
      <div className="min-h-screen bg-background">
        <ThreeDVisualEffects>
          <section 
            className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBackground})` }}
          >
            <div className="absolute inset-0 bg-black/70"></div>
            <GoBack />
            
            <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Free Amputation Case Evaluation
              </h1>
              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                ))}
                <span className="ml-2 text-lg text-white">Trusted by Amputation Victims</span>
              </div>
              <p className="text-xl text-white">
                Get expert legal advice about your amputation injury case - completely free
              </p>
            </div>
          </section>

          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="premium-form-container interactive-card rounded-3xl shadow-xl border border-blue-200/30 overflow-hidden backdrop-blur-md">
                  <div className="text-center py-12 px-8 bg-gradient-to-b from-blue-50/80 to-white/90 backdrop-blur-sm">
                    <h1 className="text-4xl font-display font-bold text-slate-900 mb-4">
                      Free Case Evaluation
                    </h1>
                    <p className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
                      Get Your Free Consultation for Amputation Injuries
                    </p>
                  </div>

                  <div className="px-8 pb-12 bg-white/95 backdrop-blur-sm">
                    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
                      <div className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-slate-900 mb-3">
                              Accident Date
                            </label>
                            <Input
                              type="date"
                              name="accidentDate"
                              value={formData.accidentDate}
                              onChange={handleInputChange}
                              className="h-14 text-lg border-gray-200 rounded-2xl bg-white text-slate-900"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-900 mb-3">
                              Accident Location
                            </label>
                            <Select value={formData.accidentLocation} onValueChange={(value) => handleSelectChange('accidentLocation', value)}>
                              <SelectTrigger className="h-14 text-lg border-gray-200 rounded-2xl bg-white text-slate-900">
                                <SelectValue placeholder="Where did the accident occur?" />
                              </SelectTrigger>
                              <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                                <SelectItem value="workplace">Workplace</SelectItem>
                                <SelectItem value="construction-site">Construction Site</SelectItem>
                                <SelectItem value="factory">Factory/Manufacturing</SelectItem>
                                <SelectItem value="hospital">Hospital/Medical Facility</SelectItem>
                                <SelectItem value="road">Road/Highway</SelectItem>
                                <SelectItem value="home">Home/Residence</SelectItem>
                                <SelectItem value="store">Store/Business</SelectItem>
                                <SelectItem value="other">Other Location</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-slate-900 mb-3">
                              Type of Amputation
                            </label>
                            <Select value={formData.amputationType} onValueChange={(value) => handleSelectChange('amputationType', value)}>
                              <SelectTrigger className="h-14 text-lg border-gray-200 rounded-2xl bg-white text-slate-900">
                                <SelectValue placeholder="Select amputation type" />
                              </SelectTrigger>
                              <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                                <SelectItem value="finger">Finger/Thumb</SelectItem>
                                <SelectItem value="hand">Hand</SelectItem>
                                <SelectItem value="arm-below">Below-Elbow Arm</SelectItem>
                                <SelectItem value="arm-above">Above-Elbow Arm</SelectItem>
                                <SelectItem value="toe">Toe</SelectItem>
                                <SelectItem value="foot">Foot</SelectItem>
                                <SelectItem value="leg-below">Below-Knee Leg</SelectItem>
                                <SelectItem value="leg-above">Above-Knee Leg</SelectItem>
                                <SelectItem value="multiple">Multiple Limbs</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-900 mb-3">
                              Cause of Accident
                            </label>
                            <Select value={formData.accidentCause} onValueChange={(value) => handleSelectChange('accidentCause', value)}>
                              <SelectTrigger className="h-14 text-lg border-gray-200 rounded-2xl bg-white text-slate-900">
                                <SelectValue placeholder="What caused the accident?" />
                              </SelectTrigger>
                              <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                                <SelectItem value="machinery">Defective Machinery</SelectItem>
                                <SelectItem value="workplace-accident">Workplace Accident</SelectItem>
                                <SelectItem value="car-accident">Car Accident</SelectItem>
                                <SelectItem value="medical-malpractice">Medical Malpractice</SelectItem>
                                <SelectItem value="product-defect">Defective Product</SelectItem>
                                <SelectItem value="construction">Construction Accident</SelectItem>
                                <SelectItem value="industrial-accident">Industrial Accident</SelectItem>
                                <SelectItem value="other">Other Cause</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-900 mb-3">
                            Who Was Responsible
                          </label>
                          <Select value={formData.accidentResponsible} onValueChange={(value) => handleSelectChange('accidentResponsible', value)}>
                            <SelectTrigger className="h-14 text-lg border-gray-200 rounded-2xl bg-white text-slate-900">
                              <SelectValue placeholder="Who was responsible for your accident?" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                              <SelectItem value="employer">My Employer</SelectItem>
                              <SelectItem value="contractor">Contractor/Subcontractor</SelectItem>
                              <SelectItem value="manufacturer">Equipment Manufacturer</SelectItem>
                              <SelectItem value="doctor">Doctor/Medical Professional</SelectItem>
                              <SelectItem value="driver">Another Driver</SelectItem>
                              <SelectItem value="property-owner">Property Owner</SelectItem>
                              <SelectItem value="unknown">Unknown/Not Sure</SelectItem>
                              <SelectItem value="multiple">Multiple Parties</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-900 mb-3">
                            Current Symptoms & Challenges
                          </label>
                          <Popover open={symptomsOpen} onOpenChange={setSymptomsOpen}>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className="h-14 w-full justify-between text-lg border-gray-200 rounded-2xl bg-white text-slate-900 hover:bg-gray-50"
                                type="button"
                              >
                                {formData.currentSymptoms.length > 0
                                  ? `${formData.currentSymptoms.length} symptoms selected`
                                  : "Select your current symptoms"}
                                <ChevronDown className="h-4 w-4 opacity-50" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-full p-0 bg-white border border-gray-200 shadow-lg z-50" align="start">
                              <div className="max-h-60 overflow-y-auto p-4">
                                <div className="space-y-2">
                                  {availableSymptoms.map((symptom) => (
                                    <div
                                      key={symptom}
                                      className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded"
                                      onClick={() => handleSymptomToggle(symptom)}
                                    >
                                      <div className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center bg-white">
                                        {formData.currentSymptoms.includes(symptom) && (
                                          <Check className="w-3 h-3 text-blue-600" />
                                        )}
                                      </div>
                                      <span className="text-sm text-slate-900">{symptom}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </PopoverContent>
                          </Popover>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-900 mb-3">
                            Current Work Status
                          </label>
                          <Select value={formData.workStatus} onValueChange={(value) => handleSelectChange('workStatus', value)}>
                            <SelectTrigger className="h-14 text-lg border-gray-200 rounded-2xl bg-white text-slate-900">
                              <SelectValue placeholder="What is your work status?" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                              <SelectItem value="unable-to-work">Unable to Work</SelectItem>
                              <SelectItem value="modified-duties">Working Modified Duties</SelectItem>
                              <SelectItem value="part-time">Working Part-Time</SelectItem>
                              <SelectItem value="full-time">Working Full-Time</SelectItem>
                              <SelectItem value="retired">Retired</SelectItem>
                              <SelectItem value="unemployed">Unemployed Before Accident</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-900 mb-3">
                            Have You Consulted an Attorney?
                          </label>
                          <Select value={formData.priorAttorney} onValueChange={(value) => handleSelectChange('priorAttorney', value)}>
                            <SelectTrigger className="h-14 text-lg border-gray-200 rounded-2xl bg-white text-slate-900">
                              <SelectValue placeholder="Have you spoken with a lawyer about this case?" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                              <SelectItem value="no">No, this is my first consultation</SelectItem>
                              <SelectItem value="consultation-only">Yes, but only consultations</SelectItem>
                              <SelectItem value="hired-attorney">Yes, I hired an attorney</SelectItem>
                              <SelectItem value="previous-attorney">Yes, but no longer working with them</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-slate-900 mb-3">First Name *</label>
                            <Input
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              className="h-14 text-lg border-gray-200 rounded-2xl bg-white text-slate-900"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-900 mb-3">Last Name *</label>
                            <Input
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              className="h-14 text-lg border-gray-200 rounded-2xl bg-white text-slate-900"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-slate-900 mb-3">Email *</label>
                            <Input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="h-14 text-lg border-gray-200 rounded-2xl bg-white text-slate-900"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-900 mb-3">Phone *</label>
                            <Input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="h-14 text-lg border-gray-200 rounded-2xl bg-white text-slate-900"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-900 mb-3">
                            Please describe your amputation injury and its impact *
                          </label>
                          <Textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            placeholder="Please provide details about how the amputation occurred and how it has affected your life..."
                            rows={5}
                            className="text-lg border-gray-200 rounded-2xl bg-white text-slate-900 placeholder:text-gray-500"
                            required
                          />
                        </div>

                        <div className="bg-blue-50/80 rounded-2xl p-6 backdrop-blur-sm">
                          <div className="flex items-start">
                            <input
                              type="checkbox"
                              name="consent"
                              checked={formData.consent}
                              onChange={handleInputChange}
                              className="mt-1 mr-4 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              required
                            />
                            <label className="text-sm text-slate-700 leading-relaxed">
                              I consent to being contacted by Trembach Law Firm regarding my amputation case. I understand this consultation is free and there is no obligation. *
                            </label>
                          </div>
                        </div>

                        <div className="pt-4">
                          <Button 
                            type="submit" 
                            className="btn-enhanced w-full h-16 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                          >
                            Start My Free Case Evaluation
                          </Button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <Card className="glass-card border-blue-200/30 bg-white/90 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-blue-800">Need Immediate Help?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <Button 
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white" 
                          onClick={() => window.location.href = 'tel:8181234567'}
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Call (818) 123-4567
                        </Button>
                        <p className="text-sm text-slate-600 text-center">
                          Available 24/7 for amputation cases
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-yellow-500/20 bg-yellow-50/90 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center text-yellow-800">
                        <AlertTriangle className="w-5 h-5 mr-2" />
                        Time Sensitive
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-yellow-800">
                        California amputation cases have a 2-year statute of limitations. Don't wait - protect your rights today.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-green-200/30 bg-green-50/90 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-green-800">Why Choose Us?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          <span className="text-sm text-green-800">Amputation specialists</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          <span className="text-sm text-green-800">$50M+ recovered</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          <span className="text-sm text-green-800">No fees unless we win</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </ThreeDVisualEffects>
      </div>
    </>
  );
};

export default AmputationCaseEvaluation;