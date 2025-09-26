import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  Phone, 
  Mail, 
  MessageCircle, 
  HardHat,
  Shield,
  Scale,
  Clock,
  AlertTriangle,
  FileText,
  User,
  MapPin,
  Calendar,
  Stethoscope,
  Camera,
  Users
} from 'lucide-react';
import heroBackground from '@/assets/construction-case-evaluation-hero.jpg';
import SEO from '@/components/SEO';
import ThreeDVisualEffects from '@/components/ThreeDVisualEffects';
import '@/styles/premium-3d-effects.css';

const ConstructionCaseEvaluation: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
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
    
    // Accident Details
    accidentDate: '',
    accidentTime: '',
    constructionSite: '',
    siteAddress: '',
    weatherConditions: '',
    accidentType: '',
    equipmentInvolved: '',
    safetyViolations: '',
    
    // Injury Information
    injuryType: '',
    injuryLocation: '',
    severityLevel: '',
    hospitalTreatment: '',
    currentTreatment: '',
    workStatus: '',
    
    // Legal and Case Details
    workersCompClaim: '',
    previousAttorney: '',
    witnessesPresent: '',
    evidencePreserved: '',
    oshaInvestigation: '',
    caseDescription: '',
    additionalInfo: '',
    urgencyLevel: '',
    
    // Consent
    consent: false
  });

  const handleInputChange = (name: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Create email body with all form data
    const emailBody = `
Construction Accident Case Evaluation Submission

PERSONAL INFORMATION:
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}, ${formData.city}, ${formData.state} ${formData.zipCode}

ACCIDENT DETAILS:
Date: ${formData.accidentDate}
Time: ${formData.accidentTime}
Construction Site: ${formData.constructionSite}
Site Address: ${formData.siteAddress}
Weather Conditions: ${formData.weatherConditions}
Type of Accident: ${formData.accidentType}
Equipment Involved: ${formData.equipmentInvolved}
Safety Violations: ${formData.safetyViolations}

INJURY INFORMATION:
Type of Injury: ${formData.injuryType}
Location of Injury: ${formData.injuryLocation}
Severity Level: ${formData.severityLevel}
Hospital Treatment: ${formData.hospitalTreatment}
Current Treatment: ${formData.currentTreatment}
Work Status: ${formData.workStatus}

LEGAL DETAILS:
Workers' Comp Claim: ${formData.workersCompClaim}
Previous Attorney: ${formData.previousAttorney}
Witnesses Present: ${formData.witnessesPresent}
Evidence Preserved: ${formData.evidencePreserved}
OSHA Investigation: ${formData.oshaInvestigation}
Urgency Level: ${formData.urgencyLevel}

CASE DESCRIPTION:
${formData.caseDescription}

ADDITIONAL INFORMATION:
${formData.additionalInfo}

This evaluation was submitted through the Construction Accident Case Evaluation form.
    `.trim();

    // Open email client
    window.location.href = `mailto:info@trembachlawfirm.com?subject=Construction Accident Case Evaluation - ${formData.firstName} ${formData.lastName}&body=${encodeURIComponent(emailBody)}`;
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <SEO 
          title="Thank You - Construction Accident Case Evaluation Submitted"
          description="Your construction accident case evaluation has been submitted. Our experienced attorneys will review your case and contact you within 24 hours."
        />
        
        <div className="pt-24 pb-12">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-12">
              <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-foreground mb-4">Thank You for Your Submission</h1>
              <p className="text-xl text-muted-foreground">
                Your construction accident case evaluation has been received and is being reviewed by our experienced attorneys.
              </p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="w-6 h-6 text-primary" />
                  What Happens Next?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold">Immediate Review</h3>
                    <p className="text-muted-foreground">Our construction accident specialists will review your case details within 2 hours.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold">Attorney Consultation</h3>
                    <p className="text-muted-foreground">A senior attorney will contact you within 24 hours to discuss your case and legal options.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold">Case Investigation</h3>
                    <p className="text-muted-foreground">If we take your case, we immediately begin investigating and preserving evidence.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">Emergency Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">If this is an urgent construction accident case:</p>
                  <Button 
                    className="w-full mb-2"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call (818) 123-4567 Now
                  </Button>
                  <p className="text-sm text-muted-foreground">Available 24/7 for construction accident emergencies</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Return to Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Learn more about construction accident claims:</p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.location.href = '/practice-areas/construction-accidents'}
                  >
                    <HardHat className="w-4 h-4 mr-2" />
                    Construction Accidents Info
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Construction Accident Case Evaluation | Free Legal Assessment California"
        description="Get your free construction accident case evaluation. Experienced attorneys will assess your OSHA violations, third-party liability, and compensation potential. No fees unless we win."
      />
      
      {/* Hero Section */}
      <section 
        className="relative pt-20 pb-16 bg-gradient-to-r from-primary/95 to-primary/85 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <CheckCircle className="w-4 h-4 mr-2" />
                Free Evaluation
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Shield className="w-4 h-4 mr-2" />
                No Fees Unless We Win
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Clock className="w-4 h-4 mr-2" />
                24 Hour Response
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Construction Accident <span className="text-accent">Case Evaluation</span>
            </h1>
            
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Get your free legal assessment from our experienced construction accident attorneys. We'll identify all liable parties, assess OSHA violations, and explain your compensation options.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <HardHat className="w-5 h-5" />
                <span>Construction Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <Scale className="w-5 h-5" />
                <span>Former Defense Attorney</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                <span>OSHA Violation Expert</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Form */}
            <div className="lg:w-2/3">
              {/* Progress Indicator */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">Step {currentStep} of 4</h2>
                  <div className="text-sm text-muted-foreground">
                    {Math.round((currentStep / 4) * 100)}% Complete
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(currentStep / 4) * 100}%` }}
                  ></div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <User className="w-6 h-6" />
                        Personal Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">First Name *</label>
                          <Input 
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Last Name *</label>
                          <Input 
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Email *</label>
                          <Input 
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Phone *</label>
                          <Input 
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Address</label>
                        <Input 
                          value={formData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                        />
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">City</label>
                          <Input 
                            value={formData.city}
                            onChange={(e) => handleInputChange('city', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">State</label>
                          <Select onValueChange={(value) => handleInputChange('state', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="California" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="California">California</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Zip Code</label>
                          <Input 
                            value={formData.zipCode}
                            onChange={(e) => handleInputChange('zipCode', e.target.value)}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Step 2: Accident Details */}
                {currentStep === 2 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <HardHat className="w-6 h-6" />
                        Construction Accident Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Date of Accident *</label>
                          <Input 
                            type="date"
                            value={formData.accidentDate}
                            onChange={(e) => handleInputChange('accidentDate', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Time of Accident</label>
                          <Input 
                            type="time"
                            value={formData.accidentTime}
                            onChange={(e) => handleInputChange('accidentTime', e.target.value)}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Construction Site/Project Name *</label>
                        <Input 
                          value={formData.constructionSite}
                          onChange={(e) => handleInputChange('constructionSite', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Construction Site Address *</label>
                        <Input 
                          value={formData.siteAddress}
                          onChange={(e) => handleInputChange('siteAddress', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Type of Construction Accident *</label>
                        <Select onValueChange={(value) => handleInputChange('accidentType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select accident type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fall-from-height">Fall from Height</SelectItem>
                            <SelectItem value="scaffolding-collapse">Scaffolding Collapse</SelectItem>
                            <SelectItem value="crane-accident">Crane/Equipment Accident</SelectItem>
                            <SelectItem value="electrocution">Electrocution</SelectItem>
                            <SelectItem value="struck-by-object">Struck by Object</SelectItem>
                            <SelectItem value="caught-in-between">Caught In/Between</SelectItem>
                            <SelectItem value="trench-collapse">Trench Collapse</SelectItem>
                            <SelectItem value="toxic-exposure">Toxic Exposure</SelectItem>
                            <SelectItem value="explosion-fire">Explosion/Fire</SelectItem>
                            <SelectItem value="vehicle-related">Vehicle Related</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Equipment Involved</label>
                        <Input 
                          value={formData.equipmentInvolved}
                          onChange={(e) => handleInputChange('equipmentInvolved', e.target.value)}
                          placeholder="Scaffolding, crane, ladder, power tools, etc."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Weather Conditions</label>
                        <Select onValueChange={(value) => handleInputChange('weatherConditions', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select weather conditions" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="clear">Clear/Sunny</SelectItem>
                            <SelectItem value="rainy">Rainy</SelectItem>
                            <SelectItem value="windy">Windy</SelectItem>
                            <SelectItem value="foggy">Foggy</SelectItem>
                            <SelectItem value="hot">Extremely Hot</SelectItem>
                            <SelectItem value="cold">Cold</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Safety Violations Observed</label>
                        <Textarea 
                          value={formData.safetyViolations}
                          onChange={(e) => handleInputChange('safetyViolations', e.target.value)}
                          placeholder="Describe any safety violations, missing equipment, inadequate training, etc."
                          rows={3}
                        />
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Step 3: Injury Information */}
                {currentStep === 3 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Stethoscope className="w-6 h-6" />
                        Injury Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Type of Injury *</label>
                        <Select onValueChange={(value) => handleInputChange('injuryType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select primary injury type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="brain-injury">Traumatic Brain Injury</SelectItem>
                            <SelectItem value="spinal-injury">Spinal Cord Injury</SelectItem>
                            <SelectItem value="broken-bones">Broken Bones/Fractures</SelectItem>
                            <SelectItem value="crush-injury">Crush Injury</SelectItem>
                            <SelectItem value="amputation">Amputation</SelectItem>
                            <SelectItem value="burn-injury">Burn Injury</SelectItem>
                            <SelectItem value="electrocution-injury">Electrocution Injury</SelectItem>
                            <SelectItem value="back-injury">Back Injury</SelectItem>
                            <SelectItem value="internal-injuries">Internal Injuries</SelectItem>
                            <SelectItem value="cuts-lacerations">Cuts/Lacerations</SelectItem>
                            <SelectItem value="respiratory">Respiratory Problems</SelectItem>
                            <SelectItem value="multiple-injuries">Multiple Injuries</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Location of Injury on Body</label>
                        <Input 
                          value={formData.injuryLocation}
                          onChange={(e) => handleInputChange('injuryLocation', e.target.value)}
                          placeholder="Head, back, arm, leg, etc."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Severity Level *</label>
                        <Select onValueChange={(value) => handleInputChange('severityLevel', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select severity level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="minor">Minor (First Aid Only)</SelectItem>
                            <SelectItem value="moderate">Moderate (Doctor Visit Required)</SelectItem>
                            <SelectItem value="serious">Serious (Hospitalization Required)</SelectItem>
                            <SelectItem value="severe">Severe (Major Surgery/ICU)</SelectItem>
                            <SelectItem value="catastrophic">Catastrophic (Life-Altering)</SelectItem>
                            <SelectItem value="fatal">Fatal</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Hospital Treatment Received *</label>
                        <Select onValueChange={(value) => handleInputChange('hospitalTreatment', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select treatment received" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="emergency-room">Emergency Room Visit</SelectItem>
                            <SelectItem value="hospitalized">Hospitalized</SelectItem>
                            <SelectItem value="surgery">Surgery Required</SelectItem>
                            <SelectItem value="icu">ICU Treatment</SelectItem>
                            <SelectItem value="outpatient">Outpatient Treatment Only</SelectItem>
                            <SelectItem value="none">No Medical Treatment Yet</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Current Treatment Status</label>
                        <Select onValueChange={(value) => handleInputChange('currentTreatment', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select current status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ongoing-treatment">Ongoing Medical Treatment</SelectItem>
                            <SelectItem value="physical-therapy">Physical Therapy</SelectItem>
                            <SelectItem value="recovered">Fully Recovered</SelectItem>
                            <SelectItem value="permanent-disability">Permanent Disability</SelectItem>
                            <SelectItem value="needs-more-treatment">Needs Additional Treatment</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Current Work Status *</label>
                        <Select onValueChange={(value) => handleInputChange('workStatus', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select work status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="unable-to-work">Unable to Work</SelectItem>
                            <SelectItem value="light-duty">Light Duty Only</SelectItem>
                            <SelectItem value="returned-full-duty">Returned to Full Duty</SelectItem>
                            <SelectItem value="different-job">Working Different Job</SelectItem>
                            <SelectItem value="permanent-disability">Permanent Work Disability</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Step 4: Legal and Case Details */}
                {currentStep === 4 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Scale className="w-6 h-6" />
                        Legal Details & Case Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Workers' Compensation Claim Status *</label>
                        <Select onValueChange={(value) => handleInputChange('workersCompClaim', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select workers' comp status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="filed-accepted">Filed and Accepted</SelectItem>
                            <SelectItem value="filed-denied">Filed but Denied</SelectItem>
                            <SelectItem value="filed-pending">Filed - Still Pending</SelectItem>
                            <SelectItem value="not-filed">Not Filed Yet</SelectItem>
                            <SelectItem value="not-eligible">Not Eligible for Workers' Comp</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Previous Attorney Representation</label>
                        <Select onValueChange={(value) => handleInputChange('previousAttorney', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Previous attorney involvement" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">No Previous Attorney</SelectItem>
                            <SelectItem value="workers-comp-only">Workers' Comp Attorney Only</SelectItem>
                            <SelectItem value="personal-injury">Personal Injury Attorney</SelectItem>
                            <SelectItem value="unsatisfied">Had Attorney - Unsatisfied</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Witnesses Present *</label>
                        <Select onValueChange={(value) => handleInputChange('witnessesPresent', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Were there witnesses?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes-coworkers">Yes - Coworkers</SelectItem>
                            <SelectItem value="yes-other-contractors">Yes - Other Contractors</SelectItem>
                            <SelectItem value="yes-supervisors">Yes - Supervisors</SelectItem>
                            <SelectItem value="yes-multiple">Yes - Multiple Witnesses</SelectItem>
                            <SelectItem value="no">No Witnesses</SelectItem>
                            <SelectItem value="unsure">Not Sure</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Evidence Preserved *</label>
                        <Select onValueChange={(value) => handleInputChange('evidencePreserved', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Evidence preservation status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="photos-taken">Photos Taken</SelectItem>
                            <SelectItem value="equipment-preserved">Equipment Preserved</SelectItem>
                            <SelectItem value="reports-obtained">Reports Obtained</SelectItem>
                            <SelectItem value="multiple-evidence">Multiple Types Preserved</SelectItem>
                            <SelectItem value="limited">Limited Evidence</SelectItem>
                            <SelectItem value="none">No Evidence Preserved</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">OSHA Investigation</label>
                        <Select onValueChange={(value) => handleInputChange('oshaInvestigation', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="OSHA investigation status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="conducted-citations">Conducted with Citations</SelectItem>
                            <SelectItem value="conducted-no-citations">Conducted - No Citations</SelectItem>
                            <SelectItem value="ongoing">Investigation Ongoing</SelectItem>
                            <SelectItem value="not-reported">Not Reported to OSHA</SelectItem>
                            <SelectItem value="unknown">Unknown</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Detailed Case Description *</label>
                        <Textarea 
                          value={formData.caseDescription}
                          onChange={(e) => handleInputChange('caseDescription', e.target.value)}
                          placeholder="Please provide a detailed description of how the accident occurred, safety violations observed, and any other relevant details..."
                          rows={5}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Additional Information</label>
                        <Textarea 
                          value={formData.additionalInfo}
                          onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                          placeholder="Any additional information you think might be relevant to your case..."
                          rows={3}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Case Urgency Level *</label>
                        <Select onValueChange={(value) => handleInputChange('urgencyLevel', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select urgency level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="emergency">Emergency (Life-threatening)</SelectItem>
                            <SelectItem value="urgent">Urgent (Serious injury)</SelectItem>
                            <SelectItem value="normal">Normal Priority</SelectItem>
                            <SelectItem value="consultation">General Consultation</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-start space-x-2">
                        <input
                          type="checkbox"
                          id="consent"
                          checked={formData.consent}
                          onChange={(e) => handleInputChange('consent', e.target.checked)}
                          className="mt-1"
                          required
                        />
                        <label htmlFor="consent" className="text-sm">
                          I consent to being contacted by Trembach Law Firm regarding my construction accident case evaluation and understand that submitting this form does not create an attorney-client relationship. *
                        </label>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center pt-6">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Previous Step
                  </Button>
                  
                  {currentStep < 4 ? (
                    <Button 
                      type="button" 
                      onClick={nextStep}
                      className="flex items-center gap-2"
                    >
                      Next Step
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  ) : (
                    <Button 
                      type="submit"
                      className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Submit Evaluation
                    </Button>
                  )}
                </div>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-6">
              <Card className="bg-primary text-white">
                <CardHeader>
                  <CardTitle>Emergency Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-primary-foreground/90">
                    If this is a construction accident emergency:
                  </p>
                  <Button 
                    className="w-full bg-white text-primary hover:bg-gray-100"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call (818) 123-4567
                  </Button>
                  <p className="text-sm text-primary-foreground/80">
                    Available 24/7 for construction accident emergencies
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Why Choose Our Firm?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Former Defense Attorney</p>
                      <p className="text-sm text-muted-foreground">We know insurance company tactics</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <HardHat className="w-5 h-5 text-orange-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Construction Accident Specialists</p>
                      <p className="text-sm text-muted-foreground">Focused expertise in construction law</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Scale className="w-5 h-5 text-purple-600 mt-0.5" />
                    <div>
                      <p className="font-medium">No Fees Unless We Win</p>
                      <p className="text-sm text-muted-foreground">Contingency fee structure</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    Factors Affecting Case Value
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>• Severity and permanence of injuries</p>
                  <p>• OSHA violations and safety failures</p>
                  <p>• Multiple liable parties and insurance coverage</p>
                  <p>• Lost wages and earning capacity</p>
                  <p>• Medical expenses and future treatment needs</p>
                  <p>• Pain and suffering damages</p>
                  <p>• Strength of liability evidence</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionCaseEvaluation;