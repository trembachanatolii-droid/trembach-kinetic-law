import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Phone, 
  Mail, 
  Clock, 
  Shield, 
  FileText,
  AlertTriangle,
  Bus,
  Calendar,
  MapPin,
  User
} from 'lucide-react';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';
import heroImage from '@/assets/bus-case-evaluation-hero.jpg';

const BusAccidentCaseEvaluation: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    accidentDate: '',
    busType: '',
    location: '',
    injuries: '',
    medicalTreatment: '',
    description: '',
    governmentEntity: false,
    policeReport: '',
    witnesses: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Free Bus Accident Case Evaluation | California Bus Injury Lawyers | Trembach Law Firm"
        description="Get your free California bus accident case evaluation. Former defense attorney evaluates MTA, school bus & charter bus cases. 6-month government deadline. No fees unless we win."
        canonical="https://www.trembachlawfirm.com/bus-accident/case-evaluation"
      />

      <GoBack />

      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Free Bus Accident Case Evaluation
          </h1>
          <p className="text-xl md:text-2xl mb-6 leading-relaxed text-white">
            Get immediate legal assessment for your California bus accident case
          </p>
          <div className="flex items-center justify-center gap-4 text-lg">
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span className="text-white">6-Month Government Deadline</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              <span className="text-white">No Win, No Fee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Form Section */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader className="bg-red-50 border-b">
                <CardTitle className="text-2xl text-red-600 flex items-center">
                  <FileText className="w-6 h-6 mr-3" />
                  Bus Accident Case Details
                </CardTitle>
                <p className="text-muted-foreground">
                  Please provide detailed information about your bus accident. This helps us evaluate your case immediately.
                </p>
              </CardHeader>
              
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name *</label>
                      <Input
                        required
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name *</label>
                      <Input
                        required
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number *</label>
                      <Input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full"
                      />
                    </div>
                  </div>

                  {/* Accident Details */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Bus className="w-5 h-5 mr-2 text-red-600" />
                      Accident Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Accident Date *</label>
                        <Input
                          type="date"
                          required
                          value={formData.accidentDate}
                          onChange={(e) => handleInputChange('accidentDate', e.target.value)}
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Type of Bus *</label>
                        <Select onValueChange={(value) => handleInputChange('busType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select bus type..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mta">MTA/Metro Bus</SelectItem>
                            <SelectItem value="school">School Bus</SelectItem>
                            <SelectItem value="charter">Charter/Tour Bus</SelectItem>
                            <SelectItem value="shuttle">Private Shuttle</SelectItem>
                            <SelectItem value="greyhound">Greyhound/Interstate</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">Accident Location *</label>
                      <Input
                        required
                        placeholder="City, intersection, or address"
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        className="w-full"
                      />
                    </div>

                    <div className="flex items-center space-x-2 mb-4">
                      <Checkbox
                        id="governmentEntity"
                        checked={formData.governmentEntity}
                        onCheckedChange={(checked) => handleInputChange('governmentEntity', checked as boolean)}
                      />
                      <label htmlFor="governmentEntity" className="text-sm font-medium">
                        This was a government-operated bus (MTA, school district, city bus, etc.)
                      </label>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Police Report Number</label>
                      <Input
                        placeholder="If available"
                        value={formData.policeReport}
                        onChange={(e) => handleInputChange('policeReport', e.target.value)}
                        className="w-full"
                      />
                    </div>
                  </div>

                  {/* Injury Information */}
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4 text-red-600">Injury Details</h3>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">What injuries did you sustain? *</label>
                      <Textarea
                        required
                        placeholder="Describe your injuries in detail..."
                        value={formData.injuries}
                        onChange={(e) => handleInputChange('injuries', e.target.value)}
                        className="w-full h-24"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">Have you received medical treatment? *</label>
                      <Select onValueChange={(value) => handleInputChange('medicalTreatment', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select treatment status..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="emergency">Emergency room only</SelectItem>
                          <SelectItem value="ongoing">Ongoing treatment</SelectItem>
                          <SelectItem value="completed">Treatment completed</SelectItem>
                          <SelectItem value="none">No treatment yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Accident Description */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Describe what happened *</label>
                    <Textarea
                      required
                      placeholder="Please provide a detailed description of how the accident occurred..."
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      className="w-full h-32"
                    />
                  </div>

                  {/* Witnesses */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Witness Information</label>
                    <Textarea
                      placeholder="Names and contact information of any witnesses (if available)"
                      value={formData.witnesses}
                      onChange={(e) => handleInputChange('witnesses', e.target.value)}
                      className="w-full h-20"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 text-lg"
                  >
                    SUBMIT MY CASE FOR EVALUATION
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="shadow-lg">
              <CardHeader className="bg-red-600 text-white">
                <CardTitle className="text-xl">Immediate Response</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => window.location.href = 'tel:8559851234'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call (855) 985-1234
                  </Button>
                  
                  <div className="text-sm text-muted-foreground">
                    <p className="mb-2">Available 24/7 for emergency cases</p>
                    <p>We respond to government deadline cases within hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Important Deadlines */}
            <Card className="shadow-lg border-l-4 border-l-red-600">
              <CardHeader>
                <CardTitle className="text-red-600 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Critical Deadlines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                    <span className="text-sm font-medium">Government Claims</span>
                    <span className="text-red-600 font-bold">6 Months</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-sm font-medium">Private Bus Companies</span>
                    <span className="text-gray-600 font-bold">2 Years</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                    <span className="text-sm font-medium">Video Evidence</span>
                    <span className="text-red-600 font-bold">72 Hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Why Choose Our Team?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                    <span>Former defense attorney advantage</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                    <span>Specialized in California bus accident law</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                    <span>Experience with government claims</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                    <span>No fees unless we win your case</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusAccidentCaseEvaluation;