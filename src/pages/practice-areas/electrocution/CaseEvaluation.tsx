import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { CalendarDays, Clock, Phone, Mail, AlertTriangle, Star, Zap } from 'lucide-react';
import GoBack from '@/components/GoBack';
import heroImage from '@/assets/electrocution-hero-bg.jpg';
import SEO from '@/components/SEO';

const ElectrocutionCaseEvaluation: React.FC = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: 'California',
    zipCode: '',

    // Incident Details
    incidentDate: '',
    incidentTime: '',
    incidentLocation: '',
    locationAddress: '',
    incidentDescription: '',
    injuryType: [],
    medicalTreatment: '',
    hospitalized: '',
    ongoingTreatment: '',

    // Electrical Details
    electricalSource: '',
    voltage: '',
    contactDuration: '',
    weatherConditions: '',
    safetyEquipment: '',
    witnesses: '',
    witnessContact: '',

    // Legal and Insurance
    reportedToEmployer: '',
    reportedToAuthorities: '',
    insuranceClaim: '',
    attorneyConsulted: '',
    workersComp: '',

    // Additional Information
    additionalInfo: '',
    urgency: '',
    preferredContact: 'phone'
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (field: string, value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...(prev[field] as string[]), value]
        : (prev[field] as string[]).filter(item => item !== value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Free Electrocution Case Evaluation | California Electrical Injury Lawyers"
        description="Get a free case evaluation for your California electrocution injury. Experienced electrical accident attorneys. No fees unless we win."
        keywords="electrocution case evaluation, electrical injury lawyer, California electrical accident attorney"
        canonical="/practice-areas/electrocution/case-evaluation"
      />

      <GoBack fallbackPath="/practice-areas/electrocution" />

      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Free Electrocution Case Evaluation
          </h1>
          <div className="flex items-center justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
            ))}
            <span className="ml-2">No Fees Unless We Win</span>
          </div>
          <p className="text-xl">
            Complete confidential assessment of your electrical injury case
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Urgency Notice */}
        <Card className="mb-8 border-destructive/20 bg-destructive/5">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Time Is Critical</h3>
                <p className="text-muted-foreground">
                  California has strict time limits for electrical injury cases. Generally, you have only 
                  <strong> 2 years</strong> to file a lawsuit. Don't wait - evidence can disappear and 
                  witnesses' memories fade.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-6 h-6" />
              Electrocution Case Evaluation Form
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange('zipCode', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Incident Details */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Electrical Incident Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="incidentDate">Date of Incident *</Label>
                    <Input
                      id="incidentDate"
                      type="date"
                      value={formData.incidentDate}
                      onChange={(e) => handleInputChange('incidentDate', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="incidentTime">Time of Incident</Label>
                    <Input
                      id="incidentTime"
                      type="time"
                      value={formData.incidentTime}
                      onChange={(e) => handleInputChange('incidentTime', e.target.value)}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="incidentLocation">Where did the electrical accident occur? *</Label>
                    <Select value={formData.incidentLocation} onValueChange={(value) => handleInputChange('incidentLocation', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="construction-site">Construction Site</SelectItem>
                        <SelectItem value="workplace">Workplace</SelectItem>
                        <SelectItem value="home">Home/Residence</SelectItem>
                        <SelectItem value="public-property">Public Property</SelectItem>
                        <SelectItem value="commercial-building">Commercial Building</SelectItem>
                        <SelectItem value="industrial-facility">Industrial Facility</SelectItem>
                        <SelectItem value="utility-area">Utility Area</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="locationAddress">Specific Address/Location</Label>
                    <Input
                      id="locationAddress"
                      value={formData.locationAddress}
                      onChange={(e) => handleInputChange('locationAddress', e.target.value)}
                      placeholder="Street address, building name, etc."
                    />
                  </div>
                </div>
              </div>

              {/* Electrical Source */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Electrical Source & Circumstances</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="electricalSource">What was the source of electricity? *</Label>
                    <Select value={formData.electricalSource} onValueChange={(value) => handleInputChange('electricalSource', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select electrical source" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="power-lines">Power Lines/Overhead Lines</SelectItem>
                        <SelectItem value="electrical-panel">Electrical Panel/Breaker Box</SelectItem>
                        <SelectItem value="wiring">Defective Wiring</SelectItem>
                        <SelectItem value="appliance">Electrical Appliance</SelectItem>
                        <SelectItem value="equipment">Construction Equipment</SelectItem>
                        <SelectItem value="outlet">Electrical Outlet</SelectItem>
                        <SelectItem value="generator">Generator</SelectItem>
                        <SelectItem value="extension-cord">Extension Cord</SelectItem>
                        <SelectItem value="tool">Power Tool</SelectItem>
                        <SelectItem value="lighting">Lighting System</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="voltage">Voltage (if known)</Label>
                    <Select value={formData.voltage} onValueChange={(value) => handleInputChange('voltage', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select voltage level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="unknown">Unknown</SelectItem>
                        <SelectItem value="low-110-240v">Low Voltage (110-240V)</SelectItem>
                        <SelectItem value="medium-480-4160v">Medium Voltage (480V-4.16kV)</SelectItem>
                        <SelectItem value="high-4160v-plus">High Voltage (4.16kV+)</SelectItem>
                        <SelectItem value="transmission-69kv-plus">Transmission Lines (69kV+)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="contactDuration">How long was contact with electricity?</Label>
                    <Select value={formData.contactDuration} onValueChange={(value) => handleInputChange('contactDuration', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="instant">Instantaneous</SelectItem>
                        <SelectItem value="few-seconds">Few Seconds</SelectItem>
                        <SelectItem value="several-seconds">Several Seconds</SelectItem>
                        <SelectItem value="minute-plus">More than a Minute</SelectItem>
                        <SelectItem value="unknown">Unknown</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="weatherConditions">Weather Conditions</Label>
                    <Select value={formData.weatherConditions} onValueChange={(value) => handleInputChange('weatherConditions', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select weather" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dry">Dry Conditions</SelectItem>
                        <SelectItem value="wet-rain">Wet/Raining</SelectItem>
                        <SelectItem value="humid">High Humidity</SelectItem>
                        <SelectItem value="windy">Windy</SelectItem>
                        <SelectItem value="storm">Storm/Lightning</SelectItem>
                        <SelectItem value="unknown">Unknown</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Injury Details */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Injury Information</h3>
                <div className="space-y-4">
                  <div>
                    <Label className="text-base font-medium">What types of injuries did you sustain? (Check all that apply)</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                      {[
                        'Electrical burns',
                        'Entry/exit wound burns',
                        'Arc flash burns',
                        'Cardiac arrest',
                        'Heart rhythm problems',
                        'Neurological damage',
                        'Memory problems',
                        'Muscle damage',
                        'Bone fractures',
                        'Internal organ damage',
                        'Respiratory problems',
                        'Vision problems',
                        'Hearing loss',
                        'Psychological trauma',
                        'Other injuries'
                      ].map((injury) => (
                        <div key={injury} className="flex items-center space-x-2">
                          <Checkbox
                            id={injury}
                            checked={formData.injuryType.includes(injury)}
                            onCheckedChange={(checked) => handleCheckboxChange('injuryType', injury, checked as boolean)}
                          />
                          <Label htmlFor={injury} className="text-sm">{injury}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="medicalTreatment">Did you receive immediate medical treatment? *</Label>
                    <RadioGroup 
                      value={formData.medicalTreatment} 
                      onValueChange={(value) => handleInputChange('medicalTreatment', value)}
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="emergency-room" id="emergency-room" />
                        <Label htmlFor="emergency-room">Emergency Room</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="hospital-admission" id="hospital-admission" />
                        <Label htmlFor="hospital-admission">Hospital Admission</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="urgent-care" id="urgent-care" />
                        <Label htmlFor="urgent-care">Urgent Care</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="doctor-visit" id="doctor-visit" />
                        <Label htmlFor="doctor-visit">Doctor Visit</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no-treatment" id="no-treatment" />
                        <Label htmlFor="no-treatment">No Medical Treatment</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="hospitalized">Were you hospitalized?</Label>
                    <RadioGroup 
                      value={formData.hospitalized} 
                      onValueChange={(value) => handleInputChange('hospitalized', value)}
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="hosp-yes" />
                        <Label htmlFor="hosp-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="hosp-no" />
                        <Label htmlFor="hosp-no">No</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="ongoingTreatment">Are you still receiving medical treatment?</Label>
                    <RadioGroup 
                      value={formData.ongoingTreatment} 
                      onValueChange={(value) => handleInputChange('ongoingTreatment', value)}
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="ongoing-yes" />
                        <Label htmlFor="ongoing-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="ongoing-no" />
                        <Label htmlFor="ongoing-no">No</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>

              {/* Witnesses & Reports */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Witnesses & Reporting</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="witnesses">Were there any witnesses to the electrical accident?</Label>
                    <RadioGroup 
                      value={formData.witnesses} 
                      onValueChange={(value) => handleInputChange('witnesses', value)}
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="witness-yes" />
                        <Label htmlFor="witness-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="witness-no" />
                        <Label htmlFor="witness-no">No</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="unknown" id="witness-unknown" />
                        <Label htmlFor="witness-unknown">Unknown</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {formData.witnesses === 'yes' && (
                    <div>
                      <Label htmlFor="witnessContact">Witness Contact Information</Label>
                      <Textarea
                        id="witnessContact"
                        value={formData.witnessContact}
                        onChange={(e) => handleInputChange('witnessContact', e.target.value)}
                        placeholder="Names, phone numbers, or addresses of witnesses"
                      />
                    </div>
                  )}

                  <div>
                    <Label htmlFor="reportedToEmployer">Was the incident reported to your employer? (if workplace)</Label>
                    <RadioGroup 
                      value={formData.reportedToEmployer} 
                      onValueChange={(value) => handleInputChange('reportedToEmployer', value)}
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="employer-yes" />
                        <Label htmlFor="employer-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="employer-no" />
                        <Label htmlFor="employer-no">No</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="not-applicable" id="employer-na" />
                        <Label htmlFor="employer-na">Not Applicable</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="reportedToAuthorities">Was the incident reported to authorities (police, fire dept, Cal/OSHA)?</Label>
                    <RadioGroup 
                      value={formData.reportedToAuthorities} 
                      onValueChange={(value) => handleInputChange('reportedToAuthorities', value)}
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="auth-yes" />
                        <Label htmlFor="auth-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="auth-no" />
                        <Label htmlFor="auth-no">No</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="unknown" id="auth-unknown" />
                        <Label htmlFor="auth-unknown">Unknown</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>

              {/* Insurance & Legal */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Insurance & Legal Status</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="workersComp">Did you file a workers' compensation claim?</Label>
                    <RadioGroup 
                      value={formData.workersComp} 
                      onValueChange={(value) => handleInputChange('workersComp', value)}
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="wc-yes" />
                        <Label htmlFor="wc-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="wc-no" />
                        <Label htmlFor="wc-no">No</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="not-applicable" id="wc-na" />
                        <Label htmlFor="wc-na">Not Applicable</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="insuranceClaim">Have you contacted any insurance companies?</Label>
                    <RadioGroup 
                      value={formData.insuranceClaim} 
                      onValueChange={(value) => handleInputChange('insuranceClaim', value)}
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="ins-yes" />
                        <Label htmlFor="ins-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="ins-no" />
                        <Label htmlFor="ins-no">No</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="attorneyConsulted">Have you consulted with another attorney about this case?</Label>
                    <RadioGroup 
                      value={formData.attorneyConsulted} 
                      onValueChange={(value) => handleInputChange('attorneyConsulted', value)}
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="atty-yes" />
                        <Label htmlFor="atty-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="atty-no" />
                        <Label htmlFor="atty-no">No</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Additional Information</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="incidentDescription">Please describe what happened in detail</Label>
                    <Textarea
                      id="incidentDescription"
                      value={formData.incidentDescription}
                      onChange={(e) => handleInputChange('incidentDescription', e.target.value)}
                      placeholder="Provide as much detail as possible about how the electrical accident occurred, what you were doing, safety equipment used, etc."
                      rows={5}
                    />
                  </div>

                  <div>
                    <Label htmlFor="additionalInfo">Any additional information you'd like to share?</Label>
                    <Textarea
                      id="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                      placeholder="Photos, documents, concerns, questions, etc."
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="urgency">How urgent is your situation?</Label>
                    <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select urgency level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="emergency">Emergency - Need immediate help</SelectItem>
                        <SelectItem value="urgent">Urgent - Within 24 hours</SelectItem>
                        <SelectItem value="soon">Soon - Within a few days</SelectItem>
                        <SelectItem value="normal">Normal - Within a week</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="preferredContact">Preferred Contact Method</Label>
                    <RadioGroup 
                      value={formData.preferredContact} 
                      onValueChange={(value) => handleInputChange('preferredContact', value)}
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="phone" id="contact-phone" />
                        <Label htmlFor="contact-phone">Phone Call</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="email" id="contact-email" />
                        <Label htmlFor="contact-email">Email</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="text" id="contact-text" />
                        <Label htmlFor="contact-text">Text Message</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>

              {/* Legal Disclaimer */}
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Legal Disclaimer:</strong> This form is for case evaluation purposes only. 
                  Submitting this form does not create an attorney-client relationship. All information 
                  is confidential and will be reviewed by an experienced electrocution attorney. 
                  No fees unless we win your case.
                </p>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button type="submit" size="lg" className="px-8">
                  Submit Case Evaluation
                </Button>
                <Button type="button" variant="outline" size="lg" className="px-8">
                  <Phone className="w-4 h-4 mr-2" />
                  Call (818) 123-4567
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Call Now</h3>
              <p className="text-2xl font-bold text-primary">(818) 123-4567</p>
              <p className="text-sm text-muted-foreground">24/7 Free Consultation</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Email Response</h3>
              <p className="text-muted-foreground">Within 1 hour during business hours</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">No Fees</h3>
              <p className="text-muted-foreground">Unless we win your case</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ElectrocutionCaseEvaluation;