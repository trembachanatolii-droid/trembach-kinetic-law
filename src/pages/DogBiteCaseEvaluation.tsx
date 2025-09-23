import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Phone, Mail, AlertTriangle, Clock, FileText, Stethoscope, PawPrint } from 'lucide-react';
import heroImage from '@/assets/dog-bite-case-evaluation-hero.jpg';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';

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
    
    // Injury Details
    injuryType: [] as string[],
    injurySeverity: '',
    bodyPartsAffected: [] as string[],
    hospitalTreatment: '',
    medicalTreatmentCost: '',
    ongoingMedicalNeeds: '',
    
    // Witness and Evidence
    witnessesPresent: '',
    witnessCount: '',
    policeReportFiled: '',
    photosAvailable: '',
    
    // Additional Details
    priorIncidents: '',
    workMissed: '',
    describeIncident: '',
    additionalInfo: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayInputChange = (field: string, value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...(prev[field as keyof typeof prev] as string[]), value]
        : (prev[field as keyof typeof prev] as string[]).filter(item => item !== value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dog bite case evaluation form submitted:', formData);
    // Form submission logic here
  };

  return (
    <>
      <SEO 
        title="Dog Bite Case Evaluation - Free Legal Consultation | California Personal Injury Lawyers"
        description="Get a free case evaluation for your dog bite injury. Experienced California attorneys helping victims secure maximum compensation. Available 24/7."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
        <GoBack className="top-20 z-[60]" />
        
        {/* Hero Section */}
        <div 
          className="relative h-[50vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImage})` }}
        >
          <div className="text-center text-white max-w-4xl mx-auto px-6">
            <div className="flex items-center justify-center mb-4">
              <PawPrint className="w-16 h-16 text-primary mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold">
                Dog Bite Case Evaluation
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Get a free, confidential evaluation of your dog bite case from experienced California attorneys
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <Card className="border border-primary/20 shadow-xl bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center bg-primary text-primary-foreground rounded-t-lg">
                  <CardTitle className="text-2xl font-bold">Free Consultation</CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-lg">Call Now</p>
                      <p className="text-2xl font-bold text-primary">(818) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Mail className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-lg">Email Us</p>
                      <p className="text-primary">info@trembachlawfirm.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Clock className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-lg">Available</p>
                      <p className="text-muted-foreground">24/7 Emergency Support</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-accent/20 shadow-lg bg-accent/5">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Time Limits Apply</h3>
                      <p className="text-sm text-muted-foreground">
                        California law imposes strict deadlines for filing dog bite claims. 
                        Don't wait - contact us immediately to protect your rights.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Evaluation Form */}
            <div className="lg:col-span-2">
              <Card className="border border-primary/20 shadow-2xl bg-card/50 backdrop-blur-sm">
                <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
                  <CardTitle className="text-3xl font-bold text-center">
                    Dog Bite Case Evaluation Form
                  </CardTitle>
                  <p className="text-center text-primary-foreground/90 text-lg">
                    All information is confidential and protected by attorney-client privilege
                  </p>
                </CardHeader>
                
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    
                    {/* Personal Information */}
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-primary border-b border-primary/20 pb-2">
                        Personal Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="firstName" className="text-base font-semibold">First Name *</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            className="mt-2 h-12 text-base"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName" className="text-base font-semibold">Last Name *</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            className="mt-2 h-12 text-base"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-base font-semibold">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="mt-2 h-12 text-base"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-base font-semibold">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="mt-2 h-12 text-base"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Incident Details */}
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-primary border-b border-primary/20 pb-2">
                        Incident Details
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="incidentDate" className="text-base font-semibold">Date of Incident *</Label>
                          <Input
                            id="incidentDate"
                            type="date"
                            value={formData.incidentDate}
                            onChange={(e) => handleInputChange('incidentDate', e.target.value)}
                            className="mt-2 h-12 text-base"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="incidentTime" className="text-base font-semibold">Time of Incident</Label>
                          <Input
                            id="incidentTime"
                            type="time"
                            value={formData.incidentTime}
                            onChange={(e) => handleInputChange('incidentTime', e.target.value)}
                            className="mt-2 h-12 text-base"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor="incidentLocation" className="text-base font-semibold">Location of Incident *</Label>
                          <Input
                            id="incidentLocation"
                            value={formData.incidentLocation}
                            onChange={(e) => handleInputChange('incidentLocation', e.target.value)}
                            placeholder="Street address, city, and state"
                            className="mt-2 h-12 text-base"
                            required
                          />
                        </div>
                        <div>
                          <Label className="text-base font-semibold">Do you know the dog owner? *</Label>
                          <Select
                            value={formData.dogOwnerKnown}
                            onValueChange={(value) => handleInputChange('dogOwnerKnown', value)}
                          >
                            <SelectTrigger className="mt-2 h-12 text-base">
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="no">No</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="dogBreed" className="text-base font-semibold">Dog Breed (if known)</Label>
                          <Input
                            id="dogBreed"
                            value={formData.dogBreed}
                            onChange={(e) => handleInputChange('dogBreed', e.target.value)}
                            className="mt-2 h-12 text-base"
                          />
                        </div>
                        <div>
                          <Label className="text-base font-semibold">Dog Size</Label>
                          <Select onValueChange={(value) => handleInputChange('dogSize', value)}>
                            <SelectTrigger className="mt-2 h-12 text-base">
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
                        <div>
                          <Label className="text-base font-semibold">Was the dog vaccinated?</Label>
                          <Select
                            value={formData.animalVaccinated}
                            onValueChange={(value) => handleInputChange('animalVaccinated', value)}
                          >
                            <SelectTrigger className="mt-2 h-12 text-base">
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

                    {/* Injury Details */}
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-primary border-b border-primary/20 pb-2">
                        Injury Details
                      </h3>
                      <div className="space-y-6">
                        <div>
                          <Label className="text-base font-semibold">Type of Injuries (check all that apply)</Label>
                          <div className="mt-2 grid grid-cols-2 gap-3">
                            {[
                              'Puncture wounds',
                              'Lacerations',
                              'Bruising',
                              'Scarring',
                              'Nerve damage',
                              'Broken bones',
                              'Infection',
                              'Emotional trauma'
                            ].map((injury) => (
                              <div key={injury} className="flex items-center space-x-2">
                                <Checkbox
                                  id={injury}
                                  checked={formData.injuryType.includes(injury)}
                                  onCheckedChange={(checked) => 
                                    handleArrayInputChange('injuryType', injury, checked as boolean)
                                  }
                                />
                                <Label htmlFor={injury} className="text-sm">{injury}</Label>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <Label className="text-base font-semibold">Body Parts Affected (check all that apply)</Label>
                          <div className="mt-2 grid grid-cols-2 gap-3">
                            {[
                              'Face',
                              'Arms',
                              'Hands',
                              'Legs',
                              'Torso',
                              'Neck'
                            ].map((bodyPart) => (
                              <div key={bodyPart} className="flex items-center space-x-2">
                                <Checkbox
                                  id={bodyPart}
                                  checked={formData.bodyPartsAffected.includes(bodyPart)}
                                  onCheckedChange={(checked) => 
                                    handleArrayInputChange('bodyPartsAffected', bodyPart, checked as boolean)
                                  }
                                />
                                <Label htmlFor={bodyPart} className="text-sm">{bodyPart}</Label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Label className="text-base font-semibold">Injury Severity</Label>
                            <Select onValueChange={(value) => handleInputChange('injurySeverity', value)}>
                              <SelectTrigger className="mt-2 h-12 text-base">
                                <SelectValue placeholder="Select severity" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="minor">Minor (first aid only)</SelectItem>
                                <SelectItem value="moderate">Moderate (medical treatment required)</SelectItem>
                                <SelectItem value="severe">Severe (hospitalization required)</SelectItem>
                                <SelectItem value="critical">Critical (life-threatening)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div>
                            <Label className="text-base font-semibold">Did you receive hospital treatment?</Label>
                            <Select
                              value={formData.hospitalTreatment}
                              onValueChange={(value) => handleInputChange('hospitalTreatment', value)}
                            >
                              <SelectTrigger className="mt-2 h-12 text-base">
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
                          <div>
                            <Label htmlFor="medicalTreatmentCost" className="text-base font-semibold">Estimated Medical Costs</Label>
                            <Select onValueChange={(value) => handleInputChange('medicalTreatmentCost', value)}>
                              <SelectTrigger className="mt-2 h-12 text-base">
                                <SelectValue placeholder="Select cost range" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="under-1000">Under $1,000</SelectItem>
                                <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                                <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                                <SelectItem value="10000-25000">$10,000 - $25,000</SelectItem>
                                <SelectItem value="25000-50000">$25,000 - $50,000</SelectItem>
                                <SelectItem value="over-50000">Over $50,000</SelectItem>
                                <SelectItem value="unknown">Unknown</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div>
                            <Label className="text-base font-semibold">Do you need ongoing medical care?</Label>
                            <Select
                              value={formData.ongoingMedicalNeeds}
                              onValueChange={(value) => handleInputChange('ongoingMedicalNeeds', value)}
                            >
                              <SelectTrigger className="mt-2 h-12 text-base">
                                <SelectValue placeholder="Select an option" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="yes">Yes</SelectItem>
                                <SelectItem value="no">No</SelectItem>
                                <SelectItem value="uncertain">Uncertain</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Witness and Evidence */}
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-primary border-b border-primary/20 pb-2">
                        Witnesses and Evidence
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label className="text-base font-semibold">Were there witnesses?</Label>
                          <Select
                            value={formData.witnessesPresent}
                            onValueChange={(value) => handleInputChange('witnessesPresent', value)}
                            className="mt-2"
                          >
                            <SelectTrigger className="mt-2 h-12 text-base">
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="no">No</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label htmlFor="witnessCount" className="text-base font-semibold">Number of Witnesses</Label>
                          <Input
                            id="witnessCount"
                            type="number"
                            value={formData.witnessCount}
                            onChange={(e) => handleInputChange('witnessCount', e.target.value)}
                            className="mt-2 h-12 text-base"
                            min="0"
                          />
                        </div>
                        
                        <div>
                          <Label className="text-base font-semibold">Was a police report filed?</Label>
                          <Select
                            value={formData.policeReportFiled}
                            onValueChange={(value) => handleInputChange('policeReportFiled', value)}
                            className="mt-2"
                          >
                            <SelectTrigger className="mt-2 h-12 text-base">
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="no">No</SelectItem>
                              <SelectItem value="unknown">Unknown</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label className="text-base font-semibold">Do you have photos of injuries/scene?</Label>
                          <Select
                            value={formData.photosAvailable}
                            onValueChange={(value) => handleInputChange('photosAvailable', value)}
                            className="mt-2"
                          >
                            <SelectTrigger className="mt-2 h-12 text-base">
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="no">No</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-primary border-b border-primary/20 pb-2">
                        Additional Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label className="text-base font-semibold">Has this dog been involved in prior incidents?</Label>
                          <Select
                            value={formData.priorIncidents}
                            onValueChange={(value) => handleInputChange('priorIncidents', value)}
                            className="mt-2"
                          >
                            <SelectTrigger className="mt-2 h-12 text-base">
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="no">No</SelectItem>
                              <SelectItem value="unknown">Unknown</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label htmlFor="workMissed" className="text-base font-semibold">Days of Work Missed</Label>
                          <Input
                            id="workMissed"
                            type="number"
                            value={formData.workMissed}
                            onChange={(e) => handleInputChange('workMissed', e.target.value)}
                            className="mt-2 h-12 text-base"
                            min="0"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="describeIncident" className="text-base font-semibold">
                          Describe the incident in detail *
                        </Label>
                        <Textarea
                          id="describeIncident"
                          value={formData.describeIncident}
                          onChange={(e) => handleInputChange('describeIncident', e.target.value)}
                          placeholder="Please provide a detailed description of what happened, including the circumstances leading up to the attack, how the attack occurred, and any relevant details about the dog's behavior."
                          className="mt-2 min-h-[120px] text-base"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="additionalInfo" className="text-base font-semibold">
                          Additional Information
                        </Label>
                        <Textarea
                          id="additionalInfo"
                          value={formData.additionalInfo}
                          onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                          placeholder="Any other information you think might be relevant to your case"
                          className="mt-2 min-h-[100px] text-base"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center pt-8">
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="px-12 py-4 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <FileText className="w-6 h-6 mr-2" />
                        Submit Case Evaluation
                      </Button>
                      <p className="text-sm text-muted-foreground mt-4">
                        Your information is confidential and protected. We'll contact you within 24 hours.
                      </p>
                    </div>
                  </form>
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