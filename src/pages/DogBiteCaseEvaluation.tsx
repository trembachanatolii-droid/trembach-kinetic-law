import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Phone, Mail, AlertTriangle, Clock, FileText, Stethoscope, PawPrint, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import heroBackground from '@/assets/dog-bite-case-evaluation-hero.jpg';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';
import { ThreeDVisualEffects } from '@/components/3DVisualEffects';
import '@/styles/premium-3d-effects.css';

const DogBiteCaseEvaluation: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
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
    dogOwnerName: '',
    dogOwnerAddress: '',
    dogBreed: '',
    dogSize: '',
    dogColor: '',
    animalVaccinated: '',
    attackType: '',
    attackDuration: '',
    dogOnLeash: '',
    dogOffProperty: '',
    multipleAnimals: '',
    animalBehaviorBefore: '',
    warningGiven: '',
    previousIncidents: '',
    animalControlCalled: '',
    
    // Injury Details
    injuryType: '',
    injurySeverity: '',
    bodyPartsAffected: '',
    hospitalTreatment: '',
    emergencyRoom: '',
    surgeryRequired: '',
    medicalTreatmentCost: '',
    ongoingMedicalNeeds: '',
    scarringVisible: '',
    infectionsOccurred: '',
    tetanusShot: '',
    rabiesShot: '',
    physicalTherapy: '',
    mentalHealthTreatment: '',
    permanentDisability: '',
    timeOffWork: '',
    lostWages: '',
    
    // Witness and Evidence
    witnessesPresent: '',
    witnessCount: '',
    witnessNames: '',
    policeReportFiled: '',
    policeReportNumber: '',
    photosAvailable: '',
    videoAvailable: '',
    medicalRecords: '',
    clothingDamaged: '',
    
    // Insurance and Legal
    healthInsurance: '',
    homeownersInsurance: '',
    reportedToInsurance: '',
    attorneyConsulted: '',
    lawsuitFiled: '',
    previousClaims: '',
    
    // Additional Details
    emotionalTrauma: '',
    fearOfDogs: '',
    impactOnDailyLife: '',
    childrenInvolved: '',
    elderlyVictim: '',
    medicationsTaken: '',
    priorMedicalConditions: '',
    describeIncident: '',
    additionalComments: '',
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

  const nextStep = () => {
    if (currentStep < 8) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      <SEO 
        title="Schedule Your Free Dog Bite Consultation | California Animal Attack Lawyers"
        description="Schedule your confidential dog bite consultation today. No fees unless we win your case. Experienced California attorneys specializing in dog attacks and animal bite cases."
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Schedule Your Free Dog Bite Consultation
            </h1>
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg text-white">Trusted by Dog Bite Victims</span>
            </div>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Book your confidential dog bite consultation today. No fees unless we win your case.
            </p>
            <p className="text-xl text-white">
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

                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="flex justify-between text-sm text-slate-700 mb-2 font-medium">
                      <span>Step {currentStep} of 8</span>
                      <span>{Math.round((currentStep / 8) * 100)}% Complete</span>
                    </div>
                    <Progress value={(currentStep / 8) * 100} className="h-3 bg-blue-100">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${(currentStep / 8) * 100}%` }}
                      />
                    </Progress>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Step 1: Personal Information */}
                    {currentStep === 1 && (
                      <div className="space-y-6 animate-fade-in">
                        <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">Personal Information</h4>
                        
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
                      </div>
                    )}

                    {/* Step 2: Incident Date and Location */}
                    {currentStep === 2 && (
                      <div className="space-y-6 animate-fade-in">
                        <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">Incident Details</h4>
                        
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
                      </div>
                    )}

                    {/* Step 3: Dog and Owner Information */}
                    {currentStep === 3 && (
                      <div className="space-y-6 animate-fade-in">
                        <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">Dog and Owner Information</h4>
                        
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
                                <SelectItem value="partially">Partially</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-slate-800 text-base font-medium">Dog Owner's Name</label>
                            <Input
                              name="dogOwnerName"
                              value={formData.dogOwnerName}
                              onChange={handleInputChange}
                              className="h-12 text-base"
                              placeholder="If known"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-slate-800 text-base font-medium">Dog Owner's Address</label>
                          <Input
                            name="dogOwnerAddress"
                            value={formData.dogOwnerAddress}
                            onChange={handleInputChange}
                            className="h-12 text-base"
                            placeholder="If known"
                          />
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="space-y-2">
                            <label className="text-slate-800 text-base font-medium">Dog Breed</label>
                            <Select
                              value={formData.dogBreed}
                              onValueChange={(value) => handleSelectChange('dogBreed', value)}
                            >
                              <SelectTrigger className="h-12 text-base">
                                <SelectValue placeholder="Select breed" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pit-bull">Pit Bull</SelectItem>
                                <SelectItem value="german-shepherd">German Shepherd</SelectItem>
                                <SelectItem value="rottweiler">Rottweiler</SelectItem>
                                <SelectItem value="doberman">Doberman</SelectItem>
                                <SelectItem value="golden-retriever">Golden Retriever</SelectItem>
                                <SelectItem value="labrador">Labrador</SelectItem>
                                <SelectItem value="mixed-breed">Mixed Breed</SelectItem>
                                <SelectItem value="chihuahua">Chihuahua</SelectItem>
                                <SelectItem value="bulldog">Bulldog</SelectItem>
                                <SelectItem value="boxer">Boxer</SelectItem>
                                <SelectItem value="husky">Husky</SelectItem>
                                <SelectItem value="mastiff">Mastiff</SelectItem>
                                <SelectItem value="unknown">Unknown</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-slate-800 text-base font-medium">Dog Size</label>
                            <Select
                              value={formData.dogSize}
                              onValueChange={(value) => handleSelectChange('dogSize', value)}
                            >
                              <SelectTrigger className="h-12 text-base">
                                <SelectValue placeholder="Select size" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="toy">Toy (under 10 lbs)</SelectItem>
                                <SelectItem value="small">Small (10-25 lbs)</SelectItem>
                                <SelectItem value="medium">Medium (26-60 lbs)</SelectItem>
                                <SelectItem value="large">Large (61-100 lbs)</SelectItem>
                                <SelectItem value="giant">Giant (over 100 lbs)</SelectItem>
                                <SelectItem value="unknown">Unknown</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-slate-800 text-base font-medium">Dog Color</label>
                            <Input
                              name="dogColor"
                              value={formData.dogColor}
                              onChange={handleInputChange}
                              className="h-12 text-base"
                              placeholder="Describe color/markings"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Attack Details */}
                    {currentStep === 4 && (
                      <div className="space-y-6 animate-fade-in">
                        <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">Attack Details</h4>
                        
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
                                <SelectItem value="single-bite">Single Bite</SelectItem>
                                <SelectItem value="multiple-bites">Multiple Bites</SelectItem>
                                <SelectItem value="bite-and-shake">Bite and Shake</SelectItem>
                                <SelectItem value="knockdown">Knocked Down</SelectItem>
                                <SelectItem value="mauling">Mauling</SelectItem>
                                <SelectItem value="scratching">Scratching</SelectItem>
                                <SelectItem value="jumping">Jumping</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-slate-800 text-base font-medium">Attack Duration</label>
                            <Select
                              value={formData.attackDuration}
                              onValueChange={(value) => handleSelectChange('attackDuration', value)}
                            >
                              <SelectTrigger className="h-12 text-base">
                                <SelectValue placeholder="How long did it last?" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="seconds">A few seconds</SelectItem>
                                <SelectItem value="30-seconds">About 30 seconds</SelectItem>
                                <SelectItem value="1-minute">About 1 minute</SelectItem>
                                <SelectItem value="several-minutes">Several minutes</SelectItem>
                                <SelectItem value="unknown">Unknown</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-slate-800 text-base font-medium">Was the dog on a leash?</label>
                            <Select
                              value={formData.dogOnLeash}
                              onValueChange={(value) => handleSelectChange('dogOnLeash', value)}
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
                          <div className="space-y-2">
                            <label className="text-slate-800 text-base font-medium">Was the dog off its property?</label>
                            <Select
                              value={formData.dogOffProperty}
                              onValueChange={(value) => handleSelectChange('dogOffProperty', value)}
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
                      </div>
                    )}

                    {/* Step 5: Injury Information */}
                    {currentStep === 5 && (
                      <div className="space-y-6 animate-fade-in">
                        <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">Injury Information</h4>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-slate-800 text-base font-medium">Primary Type of Injuries</label>
                            <Select
                              value={formData.injuryType}
                              onValueChange={(value) => handleSelectChange('injuryType', value)}
                            >
                              <SelectTrigger className="h-12 text-base">
                                <SelectValue placeholder="Select injury type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="puncture-wounds">Puncture Wounds</SelectItem>
                                <SelectItem value="lacerations">Lacerations/Cuts</SelectItem>
                                <SelectItem value="bruising">Bruising</SelectItem>
                                <SelectItem value="scarring">Scarring</SelectItem>
                                <SelectItem value="nerve-damage">Nerve Damage</SelectItem>
                                <SelectItem value="broken-bones">Broken Bones</SelectItem>
                                <SelectItem value="infection">Infection</SelectItem>
                                <SelectItem value="avulsion">Avulsion (Torn Flesh)</SelectItem>
                                <SelectItem value="disfigurement">Disfigurement</SelectItem>
                                <SelectItem value="multiple">Multiple Types</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
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
                                <SelectItem value="life-threatening">Life-Threatening</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-slate-800 text-base font-medium">Body Parts Affected (check all that apply)</label>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {[
                              'Face', 'Head', 'Neck', 'Arms', 'Hands', 'Fingers',
                              'Chest', 'Back', 'Legs', 'Feet', 'Ankles', 'Other'
                            ].map((bodyPart) => (
                              <label key={bodyPart} className="flex items-center space-x-2">
                                <Checkbox />
                                <span className="text-sm">{bodyPart}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 6: Medical Treatment */}
                    {currentStep === 6 && (
                      <div className="space-y-6 animate-fade-in">
                        <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">Medical Treatment</h4>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-slate-800 text-base font-medium">Did you go to the emergency room?</label>
                            <Select
                              value={formData.emergencyRoom}
                              onValueChange={(value) => handleSelectChange('emergencyRoom', value)}
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
                            <label className="text-slate-800 text-base font-medium">Was surgery required?</label>
                            <Select
                              value={formData.surgeryRequired}
                              onValueChange={(value) => handleSelectChange('surgeryRequired', value)}
                            >
                              <SelectTrigger className="h-12 text-base">
                                <SelectValue placeholder="Select an option" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="yes">Yes</SelectItem>
                                <SelectItem value="no">No</SelectItem>
                                <SelectItem value="may-need">May need in future</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-slate-800 text-base font-medium">Did you receive a tetanus shot?</label>
                            <Select
                              value={formData.tetanusShot}
                              onValueChange={(value) => handleSelectChange('tetanusShot', value)}
                            >
                              <SelectTrigger className="h-12 text-base">
                                <SelectValue placeholder="Select an option" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="yes">Yes</SelectItem>
                                <SelectItem value="no">No</SelectItem>
                                <SelectItem value="already-current">Already current</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-slate-800 text-base font-medium">Did you receive rabies treatment?</label>
                            <Select
                              value={formData.rabiesShot}
                              onValueChange={(value) => handleSelectChange('rabiesShot', value)}
                            >
                              <SelectTrigger className="h-12 text-base">
                                <SelectValue placeholder="Select an option" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="yes">Yes</SelectItem>
                                <SelectItem value="no">No</SelectItem>
                                <SelectItem value="not-needed">Not needed</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 7: Witnesses and Evidence */}
                    {currentStep === 7 && (
                      <div className="space-y-6 animate-fade-in">
                        <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">Witnesses and Evidence</h4>
                        
                        <div className="grid md:grid-cols-2 gap-6">
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
                                <SelectItem value="unknown">Unknown</SelectItem>
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
                                <SelectItem value="yes">Yes</SelectItem>
                                <SelectItem value="no">No</SelectItem>
                                <SelectItem value="some">Some</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-slate-800 text-base font-medium">Is video available?</label>
                            <Select
                              value={formData.videoAvailable}
                              onValueChange={(value) => handleSelectChange('videoAvailable', value)}
                            >
                              <SelectTrigger className="h-12 text-base">
                                <SelectValue placeholder="Select an option" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="yes">Yes</SelectItem>
                                <SelectItem value="no">No</SelectItem>
                                <SelectItem value="possible">Possibly</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 8: Additional Information */}
                    {currentStep === 8 && (
                      <div className="space-y-6 animate-fade-in">
                        <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">Additional Information</h4>
                        
                        <div className="space-y-2">
                          <label className="text-slate-800 text-base font-medium">Please describe what happened</label>
                          <Textarea
                            name="describeIncident"
                            value={formData.describeIncident}
                            onChange={handleInputChange}
                            rows={4}
                            className="text-base"
                            placeholder="Please provide details about the incident, including what led up to the attack, what you were doing, and how the attack occurred."
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-slate-800 text-base font-medium">Have you experienced emotional trauma?</label>
                            <Select
                              value={formData.emotionalTrauma}
                              onValueChange={(value) => handleSelectChange('emotionalTrauma', value)}
                            >
                              <SelectTrigger className="h-12 text-base">
                                <SelectValue placeholder="Select an option" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="severe">Severe</SelectItem>
                                <SelectItem value="moderate">Moderate</SelectItem>
                                <SelectItem value="mild">Mild</SelectItem>
                                <SelectItem value="none">None</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-slate-800 text-base font-medium">Do you now fear dogs?</label>
                            <Select
                              value={formData.fearOfDogs}
                              onValueChange={(value) => handleSelectChange('fearOfDogs', value)}
                            >
                              <SelectTrigger className="h-12 text-base">
                                <SelectValue placeholder="Select an option" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="yes">Yes</SelectItem>
                                <SelectItem value="no">No</SelectItem>
                                <SelectItem value="somewhat">Somewhat</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-slate-800 text-base font-medium">Additional comments</label>
                          <Textarea
                            name="additionalComments"
                            value={formData.additionalComments}
                            onChange={handleInputChange}
                            rows={3}
                            className="text-base"
                            placeholder="Any additional information you'd like to share about your case"
                          />
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox
                            checked={formData.consent}
                            onCheckedChange={(checked) => setFormData(prev => ({ ...prev, consent: !!checked }))}
                          />
                          <label className="text-sm text-slate-700">
                            I consent to being contacted by Trembach Law Firm regarding my case evaluation. *
                          </label>
                        </div>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between pt-6 border-t">
                      {currentStep > 1 && (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={prevStep}
                          className="flex items-center gap-2"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          Previous
                        </Button>
                      )}
                      
                      <div className="ml-auto">
                        {currentStep < 8 ? (
                          <Button
                            type="button"
                            onClick={nextStep}
                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
                          >
                            Next
                            <ChevronRight className="w-4 h-4" />
                          </Button>
                        ) : (
                          <Button
                            type="submit"
                            disabled={!formData.consent}
                            className="bg-red-600 hover:bg-red-700 text-white font-bold"
                          >
                            Submit Evaluation
                          </Button>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
              </ThreeDVisualEffects>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-primary" />
                      Why Act Quickly?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Evidence can disappear</li>
                      <li>• Witness memories fade</li>
                      <li>• California has strict time limits</li>
                      <li>• Insurance companies move fast</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-primary" />
                      What We Need
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Medical records and bills</li>
                      <li>• Photos of injuries</li>
                      <li>• Witness information</li>
                      <li>• Police or animal control reports</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="glass-card bg-blue-50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-blue-900">Contact Us Directly</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button className="w-full bg-red-600 hover:bg-red-700">
                        <Phone className="w-4 h-4 mr-2" />
                        Call (855) 985-1234
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Mail className="w-4 h-4 mr-2" />
                        Email Consultation
                      </Button>
                    </div>
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

export default DogBiteCaseEvaluation;