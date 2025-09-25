import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Star, Phone, Scale, ChevronDown, Check, X, AlertTriangle, CheckCircle } from 'lucide-react';
import heroBackground from '@/assets/amusement-park-case-evaluation-hero.jpg';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';
import ThreeDVisualEffects from '@/components/3DVisualEffects';

const AmusementParkCaseEvaluation: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    accidentDate: '',
    parkName: '',
    rideOrArea: '',
    accidentCause: '',
    currentSymptoms: [] as string[],
    injurySeverity: '',
    medicalTreatment: '',
    workStatus: '',
    priorAttorney: '',
    injuryDescription: '',
    consent: false
  });

  const [symptomsOpen, setSymptomsOpen] = useState(false);

  const availableSymptoms = [
    "Back pain",
    "Neck pain", 
    "Head injuries",
    "Broken bones",
    "Cuts/lacerations",
    "Bruising",
    "Concussion",
    "Whiplash",
    "Sprains/strains",
    "Emotional trauma",
    "Anxiety about rides",
    "PTSD symptoms"
  ];

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
    console.log('Amusement park case evaluation submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Free Amusement Park Injury Case Evaluation | Trembach Law Firm"
        description="Get a free evaluation of your California amusement park injury case. Expert attorneys with a proven track record."
        keywords="amusement park injury lawyer, case evaluation, California theme park accident attorney, free consultation"
      />

      <ThreeDVisualEffects>
        {/* Hero Section */}
        <section 
          className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <GoBack />
          
          <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Free Amusement Park Case Evaluation
            </h1>
            
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-white">Expert Legal Review</span>
            </div>
            
            <p className="text-lg text-white opacity-90">
              Get your amusement park injury case evaluated by experienced attorneys
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Form Column */}
            <div className="lg:col-span-2">
              <div className="premium-form-container interactive-card rounded-3xl shadow-xl border border-blue-200/30 overflow-hidden backdrop-blur-md">
                <div className="text-center py-12 px-8 bg-gradient-to-b from-blue-50/80 to-white/90 backdrop-blur-sm">
                  <h1 className="text-4xl font-display font-bold text-slate-900 mb-4">
                    Free Case Evaluation
                  </h1>
                  <p className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
                    Get Your Free Consultation for Amusement Park Injuries
                  </p>
                </div>

                <div className="px-8 pb-12 bg-white/95 backdrop-blur-sm">
                  <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
                    <div className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-900 mb-3">Accident Date</label>
                          <Input
                            type="date"
                            value={formData.accidentDate}
                            onChange={(e) => updateFormData('accidentDate', e.target.value)}
                            className="h-14 text-lg border-gray-200 rounded-2xl bg-white text-slate-900"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-900 mb-3">Amusement Park</label>
                          <Select value={formData.parkName} onValueChange={(value) => updateFormData('parkName', value)}>
                            <SelectTrigger className="h-14 text-lg border-gray-200 rounded-2xl bg-white text-slate-900">
                              <SelectValue placeholder="Which park were you visiting?" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                              <SelectItem value="disneyland">Disneyland Resort</SelectItem>
                              <SelectItem value="california-adventure">Disney California Adventure</SelectItem>
                              <SelectItem value="six-flags">Six Flags Magic Mountain</SelectItem>
                              <SelectItem value="knotts">Knott's Berry Farm</SelectItem>
                              <SelectItem value="universal">Universal Studios Hollywood</SelectItem>
                              <SelectItem value="seaworld">SeaWorld San Diego</SelectItem>
                              <SelectItem value="water-park">Water Park</SelectItem>
                              <SelectItem value="other">Other Amusement Park</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-900 mb-3">Ride or Area</label>
                          <Select value={formData.rideOrArea} onValueChange={(value) => updateFormData('rideOrArea', value)}>
                            <SelectTrigger className="h-14 text-lg border-gray-200 rounded-2xl bg-white text-slate-900">
                              <SelectValue placeholder="Where did the accident occur?" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                              <SelectItem value="roller-coaster">Roller Coaster</SelectItem>
                              <SelectItem value="water-ride">Water Ride</SelectItem>
                              <SelectItem value="spinning-ride">Spinning Ride</SelectItem>
                              <SelectItem value="ferris-wheel">Ferris Wheel</SelectItem>
                              <SelectItem value="bumper-cars">Bumper Cars</SelectItem>
                              <SelectItem value="kiddie-ride">Children's Ride</SelectItem>
                              <SelectItem value="walkway">Walkway/Pathway</SelectItem>
                              <SelectItem value="restaurant">Restaurant/Food Area</SelectItem>
                              <SelectItem value="restroom">Restroom</SelectItem>
                              <SelectItem value="parking">Parking Area</SelectItem>
                              <SelectItem value="other">Other Area</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-900 mb-3">Cause of Accident</label>
                          <Select value={formData.accidentCause} onValueChange={(value) => updateFormData('accidentCause', value)}>
                            <SelectTrigger className="h-14 text-lg border-gray-200 rounded-2xl bg-white text-slate-900">
                              <SelectValue placeholder="What caused your accident?" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                              <SelectItem value="ride-malfunction">Ride Malfunction</SelectItem>
                              <SelectItem value="safety-restraint">Faulty Safety Restraint</SelectItem>
                              <SelectItem value="operator-error">Operator Error</SelectItem>
                              <SelectItem value="slip-fall">Slip and Fall</SelectItem>
                              <SelectItem value="wet-surface">Wet/Slippery Surface</SelectItem>
                              <SelectItem value="inadequate-lighting">Poor Lighting</SelectItem>
                              <SelectItem value="defective-equipment">Defective Equipment</SelectItem>
                              <SelectItem value="inadequate-warnings">Lack of Warning Signs</SelectItem>
                              <SelectItem value="overcrowding">Overcrowding</SelectItem>
                              <SelectItem value="other">Other Cause</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-900 mb-3">
                          Current Symptoms & Injuries
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
                        <label className="block text-sm font-medium text-slate-900 mb-3">Injury Severity</label>
                        <Select value={formData.injurySeverity} onValueChange={(value) => updateFormData('injurySeverity', value)}>
                          <SelectTrigger className="h-14 text-lg border-gray-200 rounded-2xl bg-white text-slate-900">
                            <SelectValue placeholder="How severe are your injuries?" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                            <SelectItem value="minor">Minor injuries (bruises, cuts)</SelectItem>
                            <SelectItem value="moderate">Moderate injuries (sprains, fractures)</SelectItem>
                            <SelectItem value="severe">Severe injuries (broken bones, head trauma)</SelectItem>
                            <SelectItem value="permanent">Permanent disability/disfigurement</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-900 mb-3">Medical Treatment</label>
                        <Select value={formData.medicalTreatment} onValueChange={(value) => updateFormData('medicalTreatment', value)}>
                          <SelectTrigger className="h-14 text-lg border-gray-200 rounded-2xl bg-white text-slate-900">
                            <SelectValue placeholder="What medical treatment did you receive?" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                            <SelectItem value="first-aid">First aid at park</SelectItem>
                            <SelectItem value="ambulance">Ambulance transport</SelectItem>
                            <SelectItem value="emergency-room">Emergency room visit</SelectItem>
                            <SelectItem value="doctor-visit">Doctor visit</SelectItem>
                            <SelectItem value="hospitalization">Hospitalization</SelectItem>
                            <SelectItem value="surgery">Surgery required</SelectItem>
                            <SelectItem value="ongoing">Ongoing treatment</SelectItem>
                            <SelectItem value="none">No medical treatment</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-900 mb-3">Work Status</label>
                        <Select value={formData.workStatus} onValueChange={(value) => updateFormData('workStatus', value)}>
                          <SelectTrigger className="h-14 text-lg border-gray-200 rounded-2xl bg-white text-slate-900">
                            <SelectValue placeholder="How has this affected your work?" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                            <SelectItem value="no-impact">No impact on work</SelectItem>
                            <SelectItem value="missed-days">Missed some work days</SelectItem>
                            <SelectItem value="modified-duties">Working modified duties</SelectItem>
                            <SelectItem value="part-time">Reduced to part-time</SelectItem>
                            <SelectItem value="unable-work">Unable to work</SelectItem>
                            <SelectItem value="not-working">Not employed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-900 mb-3">Have You Consulted an Attorney?</label>
                        <Select value={formData.priorAttorney} onValueChange={(value) => updateFormData('priorAttorney', value)}>
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
                            value={formData.firstName}
                            onChange={(e) => updateFormData('firstName', e.target.value)}
                            placeholder="Your first name"
                            className="h-14 text-lg border-gray-200 rounded-2xl bg-white text-slate-900"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-900 mb-3">Last Name *</label>
                          <Input
                            value={formData.lastName}
                            onChange={(e) => updateFormData('lastName', e.target.value)}
                            placeholder="Your last name"
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
                            value={formData.email}
                            onChange={(e) => updateFormData('email', e.target.value)}
                            placeholder="your.email@example.com"
                            className="h-14 text-lg border-gray-200 rounded-2xl bg-white text-slate-900"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-900 mb-3">Phone *</label>
                          <Input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => updateFormData('phone', e.target.value)}
                            placeholder="(555) 123-4567"
                            className="h-14 text-lg border-gray-200 rounded-2xl bg-white text-slate-900"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-900 mb-3">Describe Your Injury *</label>
                        <Textarea
                          value={formData.injuryDescription}
                          onChange={(e) => updateFormData('injuryDescription', e.target.value)}
                          placeholder="Please describe what happened and your injuries in detail..."
                          rows={5}
                          className="text-lg border-gray-200 rounded-2xl bg-white text-slate-900 placeholder:text-gray-500"
                          required
                        />
                      </div>

                      <div className="bg-blue-50/80 rounded-2xl p-6 backdrop-blur-sm">
                        <div className="flex items-start">
                          <input
                            type="checkbox"
                            checked={formData.consent}
                            onChange={(e) => updateFormData('consent', e.target.checked)}
                            className="mt-1 mr-4 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            required
                          />
                          <label className="text-sm text-slate-700 leading-relaxed">
                            I consent to being contacted by Trembach Law Firm regarding my amusement park injury case. I understand this consultation is free and there is no obligation. *
                          </label>
                        </div>
                      </div>

                      <Button 
                        type="submit" 
                        className="btn-enhanced w-full h-16 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Get My Free Case Evaluation
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
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
                      Available 24/7 for amusement park injury cases
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
                    California amusement park injury cases have a 2-year statute of limitations. Don't wait - protect your rights today.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border-green-200/30 bg-green-50/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-green-800">Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                    <span className="text-sm text-green-800">Amusement park law experts</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                    <span className="text-sm text-green-800">No fees unless we win</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                    <span className="text-sm text-green-800">Free case evaluation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                    <span className="text-sm text-green-800">24/7 availability</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </ThreeDVisualEffects>
    </div>
  );
};

export default AmusementParkCaseEvaluation;