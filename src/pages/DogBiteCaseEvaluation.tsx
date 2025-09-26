import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Phone, Mail, AlertTriangle, Clock, FileText, Stethoscope, PawPrint, Star } from 'lucide-react';
import heroBackground from '@/assets/dog-bite-case-evaluation-hero.jpg';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';
import { ThreeDVisualEffects } from '@/components/3DVisualEffects';
import '@/styles/premium-3d-effects.css';

const DogBiteCaseEvaluation: React.FC = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Incident Details
    incidentDate: '',
    incidentTime: '',
    incidentLocation: '',
    dogOwnerKnown: '',
    dogBreed: '',
    dogSize: '',
    animalVaccinated: '',
    attackType: '',
    
    // Injury Details
    injuryType: '',
    injurySeverity: '',
    bodyPartsAffected: '',
    hospitalTreatment: '',
    medicalTreatmentCost: '',
    ongoingMedicalNeeds: '',
    scarringVisible: '',
    infectionsOccurred: '',
    
    // Witness and Evidence
    witnessesPresent: '',
    witnessCount: '',
    policeReportFiled: '',
    photosAvailable: '',
    
    // Additional Details
    priorIncidents: '',
    workMissed: '',
    emotionalTrauma: '',
    describeIncident: '',
    consent: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dog bite case evaluation form submitted:', formData);
  };

  return (
    <>
      <SEO 
        title="Free Dog Bite Case Evaluation | California Animal Attack Lawyers"
        description="Get a free case evaluation for your California dog bite injury claim. Experienced lawyers handling dog attacks and animal bite cases throughout California."
        canonical="https://trembachlaw.com/dog-bite-case-evaluation"
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
              Free Dog Bite Case Evaluation
            </h1>
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Trusted by Dog Bite Victims</span>
            </div>
            <p className="text-xl">
              Get expert legal advice about your dog bite case - completely free
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ThreeDVisualEffects>
                <div className="premium-form-container premium-form-container--blue-solid interactive-card glass-card rounded-2xl p-8 gpu-accelerated">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-display text-slate-900 mb-2 font-bold">Get Your Free Dog Bite Case Evaluation</h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto mb-4"></div>
                    <p className="text-slate-700 text-lg leading-relaxed">Specialized evaluation for dog bite injury cases throughout California</p>
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

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-slate-800 text-base font-medium">Date of Dog Bite *</label>
                        <Input
                          type="date"
                          name="incidentDate"
                          value={formData.incidentDate}
                          onChange={handleInputChange}
                          required
                          className="h-12 text-base"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-slate-800 text-base font-medium">Time of Incident</label>
                        <Input
                          type="time"
                          name="incidentTime"
                          value={formData.incidentTime}
                          onChange={handleInputChange}
                          className="h-12 text-base"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-slate-800 text-base font-medium">Location of Dog Bite *</label>
                      <Input
                        name="incidentLocation"
                        value={formData.incidentLocation}
                        onChange={handleInputChange}
                        required
                        className="h-12 text-base"
                        placeholder="Street address, city, and state"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-slate-800 text-base font-medium">Do you know the dog owner? *</label>
                        <Select
                          value={formData.dogOwnerKnown}
                          onValueChange={(value) => handleSelectChange('dogOwnerKnown', value)}
                        >
                          <SelectTrigger className="h-12 text-base">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-slate-800 text-base font-medium">Dog Breed (if known)</label>
                        <Select
                          value={formData.dogBreed}
                          onValueChange={(value) => handleSelectChange('dogBreed', value)}
                        >
                          <SelectTrigger className="h-12 text-base">
                            <SelectValue placeholder="Select dog breed" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pit-bull">Pit Bull</SelectItem>
                            <SelectItem value="german-shepherd">German Shepherd</SelectItem>
                            <SelectItem value="rottweiler">Rottweiler</SelectItem>
                            <SelectItem value="doberman">Doberman</SelectItem>
                            <SelectItem value="golden-retriever">Golden Retriever</SelectItem>
                            <SelectItem value="labrador">Labrador</SelectItem>
                            <SelectItem value="mixed-breed">Mixed Breed</SelectItem>
                            <SelectItem value="unknown">Unknown</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-slate-800 text-base font-medium">Dog Size</label>
                        <Select
                          value={formData.dogSize}
                          onValueChange={(value) => handleSelectChange('dogSize', value)}
                        >
                          <SelectTrigger className="h-12 text-base">
                            <SelectValue placeholder="Select dog size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">Small (under 25 lbs)</SelectItem>
                            <SelectItem value="medium">Medium (25-60 lbs)</SelectItem>
                            <SelectItem value="large">Large (60-100 lbs)</SelectItem>
                            <SelectItem value="extra-large">Extra Large (over 100 lbs)</SelectItem>
                            <SelectItem value="unknown">Unknown</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-slate-800 text-base font-medium">Was the dog vaccinated?</label>
                        <Select
                          value={formData.animalVaccinated}
                          onValueChange={(value) => handleSelectChange('animalVaccinated', value)}
                        >
                          <SelectTrigger className="h-12 text-base">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                            <SelectItem value="unknown">Unknown</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-slate-800 text-base font-medium">Type of Attack</label>
                        <Select
                          value={formData.attackType}
                          onValueChange={(value) => handleSelectChange('attackType', value)}
                        >
                          <SelectTrigger className="h-12 text-base">
                            <SelectValue placeholder="Select attack type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bite-only">Bite Only</SelectItem>
                            <SelectItem value="bite-and-shake">Bite and Shake</SelectItem>
                            <SelectItem value="multiple-bites">Multiple Bites</SelectItem>
                            <SelectItem value="knockdown">Knocked Down</SelectItem>
                            <SelectItem value="mauling">Mauling</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-slate-800 text-base font-medium">Type of Injuries</label>
                        <Select
                          value={formData.injuryType}
                          onValueChange={(value) => handleSelectChange('injuryType', value)}
                        >
                          <SelectTrigger className="h-12 text-base">
                            <SelectValue placeholder="Select injury type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="puncture-wounds">Puncture Wounds</SelectItem>
                            <SelectItem value="lacerations">Lacerations</SelectItem>
                            <SelectItem value="bruising">Bruising</SelectItem>
                            <SelectItem value="scarring">Scarring</SelectItem>
                            <SelectItem value="nerve-damage">Nerve Damage</SelectItem>
                            <SelectItem value="broken-bones">Broken Bones</SelectItem>
                            <SelectItem value="infection">Infection</SelectItem>
                            <SelectItem value="emotional-trauma">Emotional Trauma</SelectItem>
                            <SelectItem value="multiple">Multiple Types</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-slate-800 text-base font-medium">Injury Severity</label>
                        <Select
                          value={formData.injurySeverity}
                          onValueChange={(value) => handleSelectChange('injurySeverity', value)}
                        >
                          <SelectTrigger className="h-12 text-base">
                            <SelectValue placeholder="Select severity" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="minor">Minor (First Aid Only)</SelectItem>
                            <SelectItem value="moderate">Moderate (Doctor Visit)</SelectItem>
                            <SelectItem value="serious">Serious (ER Visit)</SelectItem>
                            <SelectItem value="severe">Severe (Hospitalization)</SelectItem>
                            <SelectItem value="critical">Critical (Surgery Required)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-slate-800 text-base font-medium">Body Parts Affected</label>
                        <Select
                          value={formData.bodyPartsAffected}
                          onValueChange={(value) => handleSelectChange('bodyPartsAffected', value)}
                        >
                          <SelectTrigger className="h-12 text-base">
                            <SelectValue placeholder="Select body part" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="face">Face</SelectItem>
                            <SelectItem value="arms">Arms</SelectItem>
                            <SelectItem value="hands">Hands</SelectItem>
                            <SelectItem value="legs">Legs</SelectItem>
                            <SelectItem value="torso">Torso</SelectItem>
                            <SelectItem value="neck">Neck</SelectItem>
                            <SelectItem value="multiple">Multiple Areas</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-slate-800 text-base font-medium">Did you receive hospital treatment?</label>
                        <Select
                          value={formData.hospitalTreatment}
                          onValueChange={(value) => handleSelectChange('hospitalTreatment', value)}
                        >
                          <SelectTrigger className="h-12 text-base">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes-er">Yes - Emergency Room</SelectItem>
                            <SelectItem value="yes-admitted">Yes - Admitted to Hospital</SelectItem>
                            <SelectItem value="yes-urgent-care">Yes - Urgent Care</SelectItem>
                            <SelectItem value="yes-doctor">Yes - Doctor's Office</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-slate-800 text-base font-medium">Estimated Medical Costs</label>
                        <Select
                          value={formData.medicalTreatmentCost}
                          onValueChange={(value) => handleSelectChange('medicalTreatmentCost', value)}
                        >
                          <SelectTrigger className="h-12 text-base">
                            <SelectValue placeholder="Select cost range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-500">Under $500</SelectItem>
                            <SelectItem value="500-2000">$500 - $2,000</SelectItem>
                            <SelectItem value="2000-5000">$2,000 - $5,000</SelectItem>
                            <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                            <SelectItem value="10000-25000">$10,000 - $25,000</SelectItem>
                            <SelectItem value="over-25000">Over $25,000</SelectItem>
                            <SelectItem value="unknown">Unknown</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-slate-800 text-base font-medium">Do you need ongoing medical treatment?</label>
                        <Select
                          value={formData.ongoingMedicalNeeds}
                          onValueChange={(value) => handleSelectChange('ongoingMedicalNeeds', value)}
                        >
                          <SelectTrigger className="h-12 text-base">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes-physical-therapy">Yes - Physical Therapy</SelectItem>
                            <SelectItem value="yes-surgery">Yes - Surgery Needed</SelectItem>
                            <SelectItem value="yes-counseling">Yes - Psychological Counseling</SelectItem>
                            <SelectItem value="yes-multiple">Yes - Multiple Treatments</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                            <SelectItem value="unsure">Unsure</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-slate-800 text-base font-medium">Is there visible scarring?</label>
                        <Select
                          value={formData.scarringVisible}
                          onValueChange={(value) => handleSelectChange('scarringVisible', value)}
                        >
                          <SelectTrigger className="h-12 text-base">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes-significant">Yes - Significant</SelectItem>
                            <SelectItem value="yes-moderate">Yes - Moderate</SelectItem>
                            <SelectItem value="yes-minimal">Yes - Minimal</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                            <SelectItem value="too-early">Too Early to Tell</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-slate-800 text-base font-medium">Did infections occur?</label>
                        <Select
                          value={formData.infectionsOccurred}
                          onValueChange={(value) => handleSelectChange('infectionsOccurred', value)}
                        >
                          <SelectTrigger className="h-12 text-base">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes-treated">Yes - Treated Successfully</SelectItem>
                            <SelectItem value="yes-ongoing">Yes - Still Treating</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                            <SelectItem value="unknown">Unknown</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-slate-800 text-base font-medium">Were there witnesses?</label>
                        <Select
                          value={formData.witnessesPresent}
                          onValueChange={(value) => handleSelectChange('witnessesPresent', value)}
                        >
                          <SelectTrigger className="h-12 text-base">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-slate-800 text-base font-medium">How many witnesses?</label>
                        <Select
                          value={formData.witnessCount}
                          onValueChange={(value) => handleSelectChange('witnessCount', value)}
                        >
                          <SelectTrigger className="h-12 text-base">
                            <SelectValue placeholder="Select number" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0">0</SelectItem>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4-or-more">4 or more</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-slate-800 text-base font-medium">Was a police report filed?</label>
                        <Select
                          value={formData.policeReportFiled}
                          onValueChange={(value) => handleSelectChange('policeReportFiled', value)}
                        >
                          <SelectTrigger className="h-12 text-base">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                            <SelectItem value="unsure">Unsure</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-slate-800 text-base font-medium">Do you have photos of injuries?</label>
                        <Select
                          value={formData.photosAvailable}
                          onValueChange={(value) => handleSelectChange('photosAvailable', value)}
                        >
                          <SelectTrigger className="h-12 text-base">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes-many">Yes - Many Photos</SelectItem>
                            <SelectItem value="yes-few">Yes - A Few Photos</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-slate-800 text-base font-medium">Prior incidents with this dog?</label>
                        <Select
                          value={formData.priorIncidents}
                          onValueChange={(value) => handleSelectChange('priorIncidents', value)}
                        >
                          <SelectTrigger className="h-12 text-base">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes-known">Yes - I Know of Prior Incidents</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                            <SelectItem value="unknown">Unknown</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-slate-800 text-base font-medium">Did you miss work?</label>
                        <Select
                          value={formData.workMissed}
                          onValueChange={(value) => handleSelectChange('workMissed', value)}
                        >
                          <SelectTrigger className="h-12 text-base">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="no">No</SelectItem>
                            <SelectItem value="1-3-days">1-3 Days</SelectItem>
                            <SelectItem value="1-week">About 1 Week</SelectItem>
                            <SelectItem value="2-weeks">About 2 Weeks</SelectItem>
                            <SelectItem value="1-month">About 1 Month</SelectItem>
                            <SelectItem value="over-1-month">Over 1 Month</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-slate-800 text-base font-medium">Experiencing emotional trauma?</label>
                        <Select
                          value={formData.emotionalTrauma}
                          onValueChange={(value) => handleSelectChange('emotionalTrauma', value)}
                        >
                          <SelectTrigger className="h-12 text-base">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes-severe">Yes - Severe</SelectItem>
                            <SelectItem value="yes-moderate">Yes - Moderate</SelectItem>
                            <SelectItem value="yes-mild">Yes - Mild</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-slate-800 text-base font-medium">
                        Please describe your dog bite incident *
                      </label>
                      <Textarea
                        name="describeIncident"
                        value={formData.describeIncident}
                        onChange={handleInputChange}
                        rows={6}
                        className="text-base resize-none"
                        placeholder="Please provide details about what happened, including the circumstances leading to the dog bite, where it occurred, and how you were injured..."
                        required
                      />
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-slate-50 rounded-lg">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => setFormData(prev => ({ ...prev, consent: checked as boolean }))}
                        className="mt-1"
                      />
                      <label htmlFor="consent" className="text-sm text-slate-700 leading-relaxed">
                        I consent to be contacted by Trembach Law Firm regarding my potential dog bite case. 
                        I understand this consultation is free and there are no fees unless we win my case. 
                        All information shared will be kept confidential and protected by attorney-client privilege.
                      </label>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 text-lg"
                      disabled={!formData.consent}
                    >
                      Get My Free Dog Bite Case Evaluation
                    </Button>
                  </form>
                </div>
              </ThreeDVisualEffects>
            </div>

            <div className="space-y-6">
              <Card className="border-2 border-primary/20 shadow-lg">
                <CardHeader className="bg-primary text-white text-center">
                  <CardTitle className="text-xl font-bold">
                    <Phone className="w-6 h-6 mx-auto mb-2" />
                    Call for Immediate Help
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <p className="text-3xl font-bold text-primary">(818) 123-4567</p>
                    <p className="text-muted-foreground">Available 24/7 for dog bite emergencies</p>
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700"
                      onClick={() => window.location.href = 'tel:+18181234567'}
                    >
                      Call Now
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-yellow-200 bg-yellow-50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-yellow-800">Important: Time Limits Apply</h3>
                      <p className="text-sm text-yellow-700 mb-3">
                        California law requires dog bite claims to be filed within 2 years of the incident. 
                        Don't wait - evidence can disappear and witnesses can forget details.
                      </p>
                      <p className="text-sm font-semibold text-yellow-800">
                        Act now to protect your rights and maximize your compensation.
                      </p>
                    </div>
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

export default DogBiteCaseEvaluation;