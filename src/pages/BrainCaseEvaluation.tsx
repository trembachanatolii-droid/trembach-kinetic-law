import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Calendar, 
  MapPin, 
  FileText, 
  Phone, 
  Clock,
  Shield,
  Award,
  AlertTriangle,
  Activity
} from 'lucide-react';
import heroImage from '@/assets/brain-case-evaluation-hero.jpg';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';

const BrainCaseEvaluation: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    injuryDate: '',
    injuryType: '',
    symptoms: '',
    medicalTreatment: '',
    accidentType: '',
    accidentLocation: '',
    insuranceContact: '',
    description: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your submission. Our brain injury attorneys will review your case and contact you within 24 hours with your evaluation.');
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Free Brain Injury Case Evaluation | California TBI Attorneys | Trembach Law"
        description="Get your free brain injury case evaluation from experienced California TBI attorneys. Former defense attorney fighting for maximum compensation. Available 24/7."
        canonical="/brain-case-evaluation"
      />
      
      <GoBack />
      
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Badge className="bg-white/10 text-white border-white/20">
              <Award className="w-4 h-4 mr-2" />
              Former Defense Attorney
            </Badge>
            <Badge className="bg-white/10 text-white border-white/20">
              <Shield className="w-4 h-4 mr-2" />
              No Fees Unless We Win
            </Badge>
            <Badge className="bg-white/10 text-white border-white/20">
              <Clock className="w-4 h-4 mr-2" />
              24/7 Available
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Free Brain Injury Case Evaluation
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get expert legal analysis of your TBI case from attorneys who understand the complexity of brain injuries and insurance company tactics.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Brain className="w-6 h-6 text-primary" />
                  Brain Injury Case Information
                </CardTitle>
                <p className="text-muted-foreground">
                  Help us understand your brain injury situation. All information is confidential and protected by attorney-client privilege.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="injuryDate">Date of Brain Injury *</Label>
                      <Input
                        id="injuryDate"
                        type="date"
                        value={formData.injuryDate}
                        onChange={(e) => handleInputChange('injuryDate', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="accidentType">Type of Accident *</Label>
                      <Select value={formData.accidentType} onValueChange={(value) => handleInputChange('accidentType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select accident type..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="car-accident">Car/Auto Accident</SelectItem>
                          <SelectItem value="truck-accident">Truck Accident</SelectItem>
                          <SelectItem value="motorcycle-accident">Motorcycle Accident</SelectItem>
                          <SelectItem value="pedestrian-accident">Pedestrian Accident</SelectItem>
                          <SelectItem value="bicycle-accident">Bicycle Accident</SelectItem>
                          <SelectItem value="slip-fall">Slip and Fall</SelectItem>
                          <SelectItem value="workplace-accident">Workplace Accident</SelectItem>
                          <SelectItem value="sports-injury">Sports Injury</SelectItem>
                          <SelectItem value="assault">Assault/Violence</SelectItem>
                          <SelectItem value="medical-malpractice">Medical Malpractice</SelectItem>
                          <SelectItem value="defective-product">Defective Product</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="accidentLocation">Where did the accident occur?</Label>
                    <Input
                      id="accidentLocation"
                      placeholder="City, State (e.g., Los Angeles, CA)"
                      value={formData.accidentLocation}
                      onChange={(e) => handleInputChange('accidentLocation', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="injuryType">Type of Brain Injury *</Label>
                    <Select value={formData.injuryType} onValueChange={(value) => handleInputChange('injuryType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select brain injury type..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="concussion">Concussion/Mild TBI</SelectItem>
                        <SelectItem value="moderate-tbi">Moderate TBI</SelectItem>
                        <SelectItem value="severe-tbi">Severe TBI</SelectItem>
                        <SelectItem value="diffuse-axonal">Diffuse Axonal Injury</SelectItem>
                        <SelectItem value="anoxic-hypoxic">Anoxic/Hypoxic Brain Injury</SelectItem>
                        <SelectItem value="penetrating">Penetrating Brain Injury</SelectItem>
                        <SelectItem value="coup-contrecoup">Coup-Contrecoup Injury</SelectItem>
                        <SelectItem value="post-concussion">Post-Concussion Syndrome</SelectItem>
                        <SelectItem value="unknown">Not Sure/Undiagnosed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="symptoms">Current Symptoms *</Label>
                    <Textarea
                      id="symptoms"
                      placeholder="Describe your current symptoms: headaches, memory problems, dizziness, mood changes, difficulty concentrating, etc."
                      value={formData.symptoms}
                      onChange={(e) => handleInputChange('symptoms', e.target.value)}
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="medicalTreatment">Medical Treatment Received</Label>
                    <Textarea
                      id="medicalTreatment"
                      placeholder="List hospitals, doctors, therapists you've seen and any ongoing treatment..."
                      value={formData.medicalTreatment}
                      onChange={(e) => handleInputChange('medicalTreatment', e.target.value)}
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="insuranceContact">Insurance Company Contact</Label>
                    <Select value={formData.insuranceContact} onValueChange={(value) => handleInputChange('insuranceContact', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Have you been contacted by insurance?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="no-contact">No, not yet</SelectItem>
                        <SelectItem value="contacted-briefly">Yes, briefly</SelectItem>
                        <SelectItem value="gave-statement">Yes, gave recorded statement</SelectItem>
                        <SelectItem value="settlement-offer">Yes, received settlement offer</SelectItem>
                        <SelectItem value="denied-claim">Yes, claim was denied</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Additional Details</Label>
                    <Textarea
                      id="description"
                      placeholder="Provide any additional details about how the accident happened and how your brain injury has affected your life..."
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg">
                    <FileText className="w-5 h-5 mr-2" />
                    Get My Free Brain Injury Case Evaluation
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy. Information is protected by attorney-client privilege.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="bg-red-600 text-white">
              <CardHeader>
                <CardTitle className="text-center">Immediate Help Available</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-white text-red-600 hover:bg-gray-100">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (818) 123-4567
                </Button>
                <p className="text-center text-sm">Available 24/7 for brain injury emergencies</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  Why Act Quickly?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-primary mt-0.5" />
                    <span>California has strict 2-year deadline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-primary mt-0.5" />
                    <span>Evidence can disappear quickly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Activity className="w-4 h-4 text-primary mt-0.5" />
                    <span>Brain injuries can worsen over time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-primary mt-0.5" />
                    <span>Insurance companies act immediately</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What Happens Next?</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm">
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-primary text-white rounded-full text-xs flex items-center justify-center font-bold">1</span>
                    <span>We review your case within 24 hours</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-primary text-white rounded-full text-xs flex items-center justify-center font-bold">2</span>
                    <span>Free consultation with brain injury attorney</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-primary text-white rounded-full text-xs flex items-center justify-center font-bold">3</span>
                    <span>If we take your case, no fees unless we win</span>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-lg text-white">
            <h2 className="text-2xl font-bold mb-4">Don't Face Brain Injury Alone</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Brain injuries are complex and insurance companies use this against victims. 
              Get experienced legal help to protect your rights and secure the compensation you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (818) 123-4567
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white hover:bg-white hover:text-primary">
                Email Us Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrainCaseEvaluation;