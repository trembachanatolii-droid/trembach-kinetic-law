import React, { useState } from 'react';
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Phone, Mail, AlertTriangle, Clock, FileText, Stethoscope, PawPrint, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from "@/lib/utils"
import heroBackground from '@/assets/dog-bite-case-evaluation-hero.jpg';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';
import { ThreeDVisualEffects } from '@/components/3DVisualEffects';
import '@/styles/premium-3d-effects.css';

const DogBiteCaseEvaluation: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [consultationDate, setConsultationDate] = useState<Date>();
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Consultation Scheduling
    consultationType: '',
    preferredTime: '',
    urgency: '',
    
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
    surgeryRequired: '',
    scarringExpected: '',
    ongoingTreatment: '',
    medicalBills: '',
    lostWages: '',
    painLevel: '',
    
    // Witness Information
    witnessesPresent: '',
    witnessNames: '',
    witnessContacts: '',
    photosTaken: '',
    videoEvidence: '',
    
    // Insurance and Legal
    insuranceClaimed: '',
    insuranceCompany: '',
    claimNumber: '',
    lawyerContacted: '',
    previousLawyer: '',
    
    // Additional Details
    additionalDetails: '',
    consent: false
  });

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      alert('Please provide consent to proceed with your case evaluation.');
      return;
    }

    const submissionData = {
      ...formData,
      consultationDate: consultationDate ? format(consultationDate, 'PPP') : '',
      submissionDate: new Date().toISOString()
    };

    console.log('Dog Bite Case Evaluation Submitted:', submissionData);
    
    // Create email with all case details
    const subject = encodeURIComponent('Dog Bite Case Evaluation Submission');
    const body = encodeURIComponent(`
Hello,

Please find my detailed dog bite case evaluation below:

PERSONAL INFORMATION:
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}

CONSULTATION PREFERENCES:
Preferred Date: ${consultationDate ? format(consultationDate, 'PPP') : 'Not specified'}
Preferred Time: ${formData.preferredTime || 'Not specified'}
Consultation Type: ${formData.consultationType || 'Not specified'}
Case Urgency: ${formData.urgency || 'Not specified'}

INCIDENT DETAILS:
Date of Incident: ${formData.incidentDate}
Time of Incident: ${formData.incidentTime}
Location: ${formData.incidentLocation}
Dog Owner Known: ${formData.dogOwnerKnown}
Dog Owner Name: ${formData.dogOwnerName}
Dog Owner Address: ${formData.dogOwnerAddress}
Dog Breed: ${formData.dogBreed}
Dog Size: ${formData.dogSize}
Dog Color: ${formData.dogColor}
Animal Vaccinated: ${formData.animalVaccinated}
Attack Type: ${formData.attackType}
Attack Duration: ${formData.attackDuration}
Dog On Leash: ${formData.dogOnLeash}
Dog Off Property: ${formData.dogOffProperty}
Multiple Animals: ${formData.multipleAnimals}
Animal Behavior Before: ${formData.animalBehaviorBefore}
Warning Given: ${formData.warningGiven}
Previous Incidents: ${formData.previousIncidents}
Animal Control Called: ${formData.animalControlCalled}

INJURY DETAILS:
Injury Type: ${formData.injuryType}
Injury Severity: ${formData.injurySeverity}
Body Parts Affected: ${formData.bodyPartsAffected}
Hospital Treatment: ${formData.hospitalTreatment}
Surgery Required: ${formData.surgeryRequired}
Scarring Expected: ${formData.scarringExpected}
Ongoing Treatment: ${formData.ongoingTreatment}
Medical Bills: ${formData.medicalBills}
Lost Wages: ${formData.lostWages}
Pain Level: ${formData.painLevel}

WITNESS INFORMATION:
Witnesses Present: ${formData.witnessesPresent}
Witness Names: ${formData.witnessNames}
Witness Contacts: ${formData.witnessContacts}
Photos Taken: ${formData.photosTaken}
Video Evidence: ${formData.videoEvidence}

INSURANCE AND LEGAL:
Insurance Claimed: ${formData.insuranceClaimed}
Insurance Company: ${formData.insuranceCompany}
Claim Number: ${formData.claimNumber}
Lawyer Contacted: ${formData.lawyerContacted}
Previous Lawyer: ${formData.previousLawyer}

ADDITIONAL DETAILS:
${formData.additionalDetails}

Please contact me to discuss my case further.

Best regards,
${formData.firstName} ${formData.lastName}
    `);

    window.location.href = `mailto:info@trembachlaw.com?subject=${subject}&body=${body}`;
    
    alert('Your case evaluation has been submitted. We will contact you within 24 hours to schedule your consultation.');
    
    // Reset form
    setCurrentStep(1);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      consultationType: '',
      preferredTime: '',
      urgency: '',
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
      injuryType: '',
      injurySeverity: '',
      bodyPartsAffected: '',
      hospitalTreatment: '',
      surgeryRequired: '',
      scarringExpected: '',
      ongoingTreatment: '',
      medicalBills: '',
      lostWages: '',
      painLevel: '',
      witnessesPresent: '',
      witnessNames: '',
      witnessContacts: '',
      photosTaken: '',
      videoEvidence: '',
      insuranceClaimed: '',
      insuranceCompany: '',
      claimNumber: '',
      lawyerContacted: '',
      previousLawyer: '',
      additionalDetails: '',
      consent: false
    });
    setConsultationDate(undefined);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Personal Information</h3>
              <p className="text-slate-600">Let's start with your contact details</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="h-12"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="h-12"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="h-12"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="h-12"
                  required
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Consultation Preferences</h3>
              <p className="text-slate-600">When would you like to schedule your free consultation?</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Preferred Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full h-12 justify-start text-left font-normal",
                        !consultationDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {consultationDate ? format(consultationDate, "PPP") : "Select consultation date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={consultationDate}
                      onSelect={setConsultationDate}
                      disabled={(date) => 
                        date < new Date() || 
                        date.getDay() === 0 || 
                        date.getDay() === 6
                      }
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div className="space-y-2">
                <Label>Preferred Time</Label>
                <Select 
                  value={formData.preferredTime} 
                  onValueChange={(value) => handleInputChange('preferredTime', value)}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Consultation Type</Label>
              <Select 
                value={formData.consultationType} 
                onValueChange={(value) => handleInputChange('consultationType', value)}
              >
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select consultation method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="phone">Phone Consultation</SelectItem>
                  <SelectItem value="video">Video Conference</SelectItem>
                  <SelectItem value="office">In-Person Meeting</SelectItem>
                  <SelectItem value="home">Home Visit</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Case Urgency</Label>
              <Select 
                value={formData.urgency} 
                onValueChange={(value) => handleInputChange('urgency', value)}
              >
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select urgency level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediate">Immediate - Urgent medical bills</SelectItem>
                  <SelectItem value="high">High - Recent incident (within 30 days)</SelectItem>
                  <SelectItem value="normal">Normal - Need legal guidance</SelectItem>
                  <SelectItem value="planning">Planning - Future consultation</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Incident Details</h3>
              <p className="text-slate-600">Tell us about when and where the incident occurred</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="incidentDate">Date of Incident *</Label>
                <Input
                  id="incidentDate"
                  type="date"
                  value={formData.incidentDate}
                  onChange={(e) => handleInputChange('incidentDate', e.target.value)}
                  className="h-12"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="incidentTime">Time of Incident</Label>
                <Input
                  id="incidentTime"
                  type="time"
                  value={formData.incidentTime}
                  onChange={(e) => handleInputChange('incidentTime', e.target.value)}
                  className="h-12"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="incidentLocation">Location of Incident *</Label>
              <Input
                id="incidentLocation"
                value={formData.incidentLocation}
                onChange={(e) => handleInputChange('incidentLocation', e.target.value)}
                placeholder="Street address, park, neighborhood, etc."
                className="h-12"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Do you know the dog owner? *</Label>
              <Select 
                value={formData.dogOwnerKnown} 
                onValueChange={(value) => handleInputChange('dogOwnerKnown', value)}
              >
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes, I know the owner</SelectItem>
                  <SelectItem value="no">No, I don't know the owner</SelectItem>
                  <SelectItem value="partially">I have some information about the owner</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {formData.dogOwnerKnown === 'yes' && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="dogOwnerName">Dog Owner's Name</Label>
                  <Input
                    id="dogOwnerName"
                    value={formData.dogOwnerName}
                    onChange={(e) => handleInputChange('dogOwnerName', e.target.value)}
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dogOwnerAddress">Dog Owner's Address</Label>
                  <Input
                    id="dogOwnerAddress"
                    value={formData.dogOwnerAddress}
                    onChange={(e) => handleInputChange('dogOwnerAddress', e.target.value)}
                    className="h-12"
                  />
                </div>
              </>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">About the Dog</h3>
              <p className="text-slate-600">Details about the animal involved</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="dogBreed">Dog Breed (if known)</Label>
                <Input
                  id="dogBreed"
                  value={formData.dogBreed}
                  onChange={(e) => handleInputChange('dogBreed', e.target.value)}
                  placeholder="e.g., German Shepherd, Mixed breed"
                  className="h-12"
                />
              </div>
              <div className="space-y-2">
                <Label>Dog Size</Label>
                <Select 
                  value={formData.dogSize} 
                  onValueChange={(value) => handleInputChange('dogSize', value)}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select dog size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small (under 25 lbs)</SelectItem>
                    <SelectItem value="medium">Medium (25-60 lbs)</SelectItem>
                    <SelectItem value="large">Large (60-90 lbs)</SelectItem>
                    <SelectItem value="giant">Giant (over 90 lbs)</SelectItem>
                    <SelectItem value="unknown">Unknown</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dogColor">Dog Color/Description</Label>
              <Input
                id="dogColor"
                value={formData.dogColor}
                onChange={(e) => handleInputChange('dogColor', e.target.value)}
                placeholder="e.g., Brown and black, White with spots"
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label>Was the animal vaccinated?</Label>
              <Select 
                value={formData.animalVaccinated} 
                onValueChange={(value) => handleInputChange('animalVaccinated', value)}
              >
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select vaccination status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes, vaccinated</SelectItem>
                  <SelectItem value="no">No, not vaccinated</SelectItem>
                  <SelectItem value="unknown">Unknown</SelectItem>
                  <SelectItem value="expired">Expired vaccinations</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Type of attack</Label>
              <Select 
                value={formData.attackType} 
                onValueChange={(value) => handleInputChange('attackType', value)}
              >
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select attack type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bite">Single bite</SelectItem>
                  <SelectItem value="multiple-bites">Multiple bites</SelectItem>
                  <SelectItem value="mauling">Mauling/prolonged attack</SelectItem>
                  <SelectItem value="knock-down">Knocked down without bite</SelectItem>
                  <SelectItem value="chase">Chased but not bitten</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>How long did the attack last?</Label>
              <Select 
                value={formData.attackDuration} 
                onValueChange={(value) => handleInputChange('attackDuration', value)}
              >
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="seconds">A few seconds</SelectItem>
                  <SelectItem value="30-seconds">About 30 seconds</SelectItem>
                  <SelectItem value="1-minute">About 1 minute</SelectItem>
                  <SelectItem value="several-minutes">Several minutes</SelectItem>
                  <SelectItem value="unknown">Unknown/unclear</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Circumstances</h3>
              <p className="text-slate-600">Details about the situation when the incident occurred</p>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <Label>Was the dog on a leash?</Label>
                <Select 
                  value={formData.dogOnLeash} 
                  onValueChange={(value) => handleInputChange('dogOnLeash', value)}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select leash status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes, on leash</SelectItem>
                    <SelectItem value="no">No, not on leash</SelectItem>
                    <SelectItem value="broken">Leash broke during incident</SelectItem>
                    <SelectItem value="unknown">Unknown</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Was the dog off the owner's property?</Label>
                <Select 
                  value={formData.dogOffProperty} 
                  onValueChange={(value) => handleInputChange('dogOffProperty', value)}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes, off owner's property</SelectItem>
                    <SelectItem value="no">No, on owner's property</SelectItem>
                    <SelectItem value="public">On public property</SelectItem>
                    <SelectItem value="unknown">Unknown</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Were there multiple animals involved?</Label>
                <Select 
                  value={formData.multipleAnimals} 
                  onValueChange={(value) => handleInputChange('multipleAnimals', value)}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Single dog only</SelectItem>
                    <SelectItem value="multiple">Multiple dogs</SelectItem>
                    <SelectItem value="pack">Pack of dogs</SelectItem>
                    <SelectItem value="other-animals">Other animals present</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>How did the animal behave before the attack?</Label>
                <Select 
                  value={formData.animalBehaviorBefore} 
                  onValueChange={(value) => handleInputChange('animalBehaviorBefore', value)}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select behavior" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="friendly">Appeared friendly</SelectItem>
                    <SelectItem value="aggressive">Showed aggression</SelectItem>
                    <SelectItem value="nervous">Seemed nervous/scared</SelectItem>
                    <SelectItem value="territorial">Acting territorial</SelectItem>
                    <SelectItem value="playful">Acting playful</SelectItem>
                    <SelectItem value="unprovoked">Unprovoked attack</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Did anyone give you a warning about the dog?</Label>
                <Select 
                  value={formData.warningGiven} 
                  onValueChange={(value) => handleInputChange('warningGiven', value)}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no-warning">No warning given</SelectItem>
                    <SelectItem value="owner-warned">Owner warned me</SelectItem>
                    <SelectItem value="others-warned">Others warned me</SelectItem>
                    <SelectItem value="signs-posted">Warning signs posted</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Had this dog attacked before?</Label>
                <Select 
                  value={formData.previousIncidents} 
                  onValueChange={(value) => handleInputChange('previousIncidents', value)}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="unknown">Unknown</SelectItem>
                    <SelectItem value="first-time">First time incident</SelectItem>
                    <SelectItem value="previous-attacks">Had attacked before</SelectItem>
                    <SelectItem value="aggressive-history">History of aggression</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Was animal control called?</Label>
                <Select 
                  value={formData.animalControlCalled} 
                  onValueChange={(value) => handleInputChange('animalControlCalled', value)}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes, animal control came</SelectItem>
                    <SelectItem value="no">No, not called</SelectItem>
                    <SelectItem value="police">Police responded instead</SelectItem>
                    <SelectItem value="both">Both police and animal control</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Injury Details</h3>
              <p className="text-slate-600">Information about your injuries and medical treatment</p>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <Label>Type of injuries sustained</Label>
                <Select 
                  value={formData.injuryType} 
                  onValueChange={(value) => handleInputChange('injuryType', value)}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select injury type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="puncture">Puncture wounds</SelectItem>
                    <SelectItem value="lacerations">Lacerations/cuts</SelectItem>
                    <SelectItem value="bruising">Bruising/contusions</SelectItem>
                    <SelectItem value="fractures">Broken bones</SelectItem>
                    <SelectItem value="nerve-damage">Nerve damage</SelectItem>
                    <SelectItem value="multiple">Multiple injury types</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Severity of injuries</Label>
                <Select 
                  value={formData.injurySeverity} 
                  onValueChange={(value) => handleInputChange('injurySeverity', value)}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select severity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="minor">Minor - treated at home</SelectItem>
                    <SelectItem value="moderate">Moderate - doctor visit needed</SelectItem>
                    <SelectItem value="serious">Serious - emergency room</SelectItem>
                    <SelectItem value="severe">Severe - hospitalization</SelectItem>
                    <SelectItem value="life-threatening">Life-threatening</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bodyPartsAffected">Body parts affected</Label>
                <Textarea
                  id="bodyPartsAffected"
                  value={formData.bodyPartsAffected}
                  onChange={(e) => handleInputChange('bodyPartsAffected', e.target.value)}
                  placeholder="e.g., Right arm, left leg, face, etc."
                  className="min-h-[80px] resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label>Did you receive hospital treatment?</Label>
                <Select 
                  value={formData.hospitalTreatment} 
                  onValueChange={(value) => handleInputChange('hospitalTreatment', value)}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select treatment level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No medical treatment</SelectItem>
                    <SelectItem value="first-aid">First aid only</SelectItem>
                    <SelectItem value="urgent-care">Urgent care visit</SelectItem>
                    <SelectItem value="emergency-room">Emergency room</SelectItem>
                    <SelectItem value="hospitalized">Hospitalized</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Was surgery required?</Label>
                <Select 
                  value={formData.surgeryRequired} 
                  onValueChange={(value) => handleInputChange('surgeryRequired', value)}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no">No surgery needed</SelectItem>
                    <SelectItem value="yes">Yes, already had surgery</SelectItem>
                    <SelectItem value="scheduled">Surgery scheduled</SelectItem>
                    <SelectItem value="multiple">Multiple surgeries</SelectItem>
                    <SelectItem value="cosmetic">Cosmetic surgery needed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Do you expect permanent scarring?</Label>
                <Select 
                  value={formData.scarringExpected} 
                  onValueChange={(value) => handleInputChange('scarringExpected', value)}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no">No scarring expected</SelectItem>
                    <SelectItem value="minor">Minor scarring</SelectItem>
                    <SelectItem value="moderate">Moderate scarring</SelectItem>
                    <SelectItem value="severe">Severe scarring</SelectItem>
                    <SelectItem value="disfigurement">Permanent disfigurement</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Are you receiving ongoing treatment?</Label>
                <Select 
                  value={formData.ongoingTreatment} 
                  onValueChange={(value) => handleInputChange('ongoingTreatment', value)}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Treatment completed</SelectItem>
                    <SelectItem value="physical-therapy">Physical therapy</SelectItem>
                    <SelectItem value="follow-up">Regular follow-up visits</SelectItem>
                    <SelectItem value="psychological">Psychological counseling</SelectItem>
                    <SelectItem value="multiple">Multiple treatments</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="medicalBills">Estimated medical bills</Label>
                  <Input
                    id="medicalBills"
                    value={formData.medicalBills}
                    onChange={(e) => handleInputChange('medicalBills', e.target.value)}
                    placeholder="e.g., $5,000"
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lostWages">Lost wages/income</Label>
                  <Input
                    id="lostWages"
                    value={formData.lostWages}
                    onChange={(e) => handleInputChange('lostWages', e.target.value)}
                    placeholder="e.g., $2,000"
                    className="h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Pain level (1-10 scale)</Label>
                <Select 
                  value={formData.painLevel} 
                  onValueChange={(value) => handleInputChange('painLevel', value)}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select pain level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-2">1-2 (Mild discomfort)</SelectItem>
                    <SelectItem value="3-4">3-4 (Moderate pain)</SelectItem>
                    <SelectItem value="5-6">5-6 (Significant pain)</SelectItem>
                    <SelectItem value="7-8">7-8 (Severe pain)</SelectItem>
                    <SelectItem value="9-10">9-10 (Excruciating pain)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Witnesses & Evidence</h3>
              <p className="text-slate-600">Information about witnesses and any evidence collected</p>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <Label>Were there witnesses to the attack?</Label>
                <Select 
                  value={formData.witnessesPresent} 
                  onValueChange={(value) => handleInputChange('witnessesPresent', value)}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No witnesses</SelectItem>
                    <SelectItem value="one">One witness</SelectItem>
                    <SelectItem value="multiple">Multiple witnesses</SelectItem>
                    <SelectItem value="unknown">Unknown/unsure</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {formData.witnessesPresent !== 'none' && formData.witnessesPresent !== '' && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="witnessNames">Witness names (if known)</Label>
                    <Textarea
                      id="witnessNames"
                      value={formData.witnessNames}
                      onChange={(e) => handleInputChange('witnessNames', e.target.value)}
                      placeholder="List witness names"
                      className="min-h-[80px] resize-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="witnessContacts">Witness contact information</Label>
                    <Textarea
                      id="witnessContacts"
                      value={formData.witnessContacts}
                      onChange={(e) => handleInputChange('witnessContacts', e.target.value)}
                      placeholder="Phone numbers, emails, addresses"
                      className="min-h-[80px] resize-none"
                    />
                  </div>
                </>
              )}

              <div className="space-y-2">
                <Label>Were photos taken of the scene/injuries?</Label>
                <Select 
                  value={formData.photosTaken} 
                  onValueChange={(value) => handleInputChange('photosTaken', value)}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No photos taken</SelectItem>
                    <SelectItem value="injuries">Photos of injuries only</SelectItem>
                    <SelectItem value="scene">Photos of scene only</SelectItem>
                    <SelectItem value="both">Photos of both injuries and scene</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Is there video evidence of the attack?</Label>
                <Select 
                  value={formData.videoEvidence} 
                  onValueChange={(value) => handleInputChange('videoEvidence', value)}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No video evidence</SelectItem>
                    <SelectItem value="security">Security camera footage</SelectItem>
                    <SelectItem value="phone">Cell phone video</SelectItem>
                    <SelectItem value="traffic">Traffic camera</SelectItem>
                    <SelectItem value="multiple">Multiple video sources</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Have you filed an insurance claim?</Label>
                <Select 
                  value={formData.insuranceClaimed} 
                  onValueChange={(value) => handleInputChange('insuranceClaimed', value)}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No claim filed</SelectItem>
                    <SelectItem value="homeowners">Homeowner's insurance</SelectItem>
                    <SelectItem value="renters">Renter's insurance</SelectItem>
                    <SelectItem value="health">Health insurance only</SelectItem>
                    <SelectItem value="multiple">Multiple insurance claims</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {formData.insuranceClaimed !== 'none' && formData.insuranceClaimed !== '' && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="insuranceCompany">Insurance company name</Label>
                    <Input
                      id="insuranceCompany"
                      value={formData.insuranceCompany}
                      onChange={(e) => handleInputChange('insuranceCompany', e.target.value)}
                      placeholder="Name of insurance company"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="claimNumber">Claim number (if available)</Label>
                    <Input
                      id="claimNumber"
                      value={formData.claimNumber}
                      onChange={(e) => handleInputChange('claimNumber', e.target.value)}
                      placeholder="Insurance claim number"
                      className="h-12"
                    />
                  </div>
                </>
              )}

              <div className="space-y-2">
                <Label>Have you contacted a lawyer about this incident?</Label>
                <Select 
                  value={formData.lawyerContacted} 
                  onValueChange={(value) => handleInputChange('lawyerContacted', value)}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No lawyer contacted</SelectItem>
                    <SelectItem value="consulted">Consulted but not hired</SelectItem>
                    <SelectItem value="hired">Currently have a lawyer</SelectItem>
                    <SelectItem value="shopping">Shopping for a lawyer</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {formData.lawyerContacted === 'hired' && (
                <div className="space-y-2">
                  <Label htmlFor="previousLawyer">Current/previous lawyer information</Label>
                  <Input
                    id="previousLawyer"
                    value={formData.previousLawyer}
                    onChange={(e) => handleInputChange('previousLawyer', e.target.value)}
                    placeholder="Lawyer name and firm"
                    className="h-12"
                  />
                </div>
              )}
            </div>
          </div>
        );

      case 8:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Final Details</h3>
              <p className="text-slate-600">Any additional information and consent</p>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="additionalDetails">Additional details about your case</Label>
                <Textarea
                  id="additionalDetails"
                  value={formData.additionalDetails}
                  onChange={(e) => handleInputChange('additionalDetails', e.target.value)}
                  placeholder="Is there anything else you'd like us to know about your case? Any special circumstances, ongoing concerns, or questions?"
                  className="min-h-[120px] resize-none"
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-semibold text-blue-900 mb-3">What happens next?</h4>
                <ul className="text-sm text-blue-800 space-y-2">
                  <li>• We'll review your case evaluation within 24 hours</li>
                  <li>• One of our experienced dog bite attorneys will contact you</li>
                  <li>• We'll schedule your free consultation at your convenience</li>
                  <li>• We'll discuss your legal options and potential compensation</li>
                  <li>• No fees unless we win your case</li>
                </ul>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  checked={formData.consent}
                  onCheckedChange={(checked) => handleInputChange('consent', !!checked)}
                />
                <label className="text-sm text-slate-700 leading-relaxed">
                  I consent to being contacted by Trembach Law Firm regarding my case evaluation. I understand this is a free consultation and there are no fees unless they win my case. *
                </label>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <SEO 
        title="Schedule Your Free Dog Bite Consultation | California Animal Attack Lawyers"
        description="Schedule your confidential dog bite consultation today. Choose your preferred date and time. No fees unless we win your case."
        canonical="https://trembachlaw.com/dog-bite-case-evaluation"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section 
          className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-blue-900/80"></div>
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
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <ThreeDVisualEffects className="premium-3d-container">
                <Card className="glass-card shadow-2xl border-0">
                  <CardHeader className="text-center pb-8">
                    <div className="flex justify-between items-center mb-6">
                      <div className="text-sm text-slate-600">
                        Step {currentStep} of 8
                      </div>
                      <div className="text-sm text-slate-600">
                        {Math.round((currentStep / 8) * 100)}% Complete
                      </div>
                    </div>
                    <Progress 
                      value={(currentStep / 8) * 100} 
                      className="mb-6"
                    />
                    <CardTitle className="text-3xl font-bold text-slate-900 mb-4">
                      Dog Bite Case Evaluation
                    </CardTitle>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto"></div>
                  </CardHeader>
                  
                  <CardContent className="space-y-8">
                    <form onSubmit={handleSubmit} className="space-y-8">
                      {renderStepContent()}

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
                              Submit Case Evaluation
                            </Button>
                          )}
                        </div>
                      </div>
                    </form>
                  </CardContent>
                </Card>
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
                      <li>• Medical bills keep growing</li>
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
                      <li>• Police/animal control reports</li>
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
                        Email Us
                      </Button>
                    </div>
                    <p className="text-xs text-blue-700 mt-3 text-center">
                      Available 24/7 for urgent cases
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

export default DogBiteCaseEvaluation;