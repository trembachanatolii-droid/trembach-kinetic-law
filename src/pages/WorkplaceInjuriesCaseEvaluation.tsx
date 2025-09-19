import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  ArrowLeft, 
  CheckCircle, 
  Star,
  Shield,
  Clock,
  Users,
  HardHat,
  AlertTriangle,
  FileText,
  Calculator
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import heroBackground from '@/assets/practice-areas/workplace-case-evaluation-hero.jpg';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';

const WorkplaceInjuriesCaseEvaluation: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    accidentDate: '',
    workplaceType: '',
    injuryType: '',
    employmentStatus: '',
    medicalTreatment: '',
    workersCompFiled: '',
    thirdPartyInvolved: '',
    description: '',
    urgency: '',
    consent: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast({
        title: "Consent Required",
        description: "Please agree to the terms before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Case Evaluation Submitted!",
        description: "We'll contact you within 2 hours to discuss your workplace injury case.",
      });
      setIsSubmitting(false);
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        accidentDate: '',
        workplaceType: '',
        injuryType: '',
        employmentStatus: '',
        medicalTreatment: '',
        workersCompFiled: '',
        thirdPartyInvolved: '',
        description: '',
        urgency: '',
        consent: false
      });
    }, 2000);
  };

  return (
    <>
      <SEO 
        title="Free Workplace Injury Case Evaluation | California Attorneys"
        description="Get a free case evaluation for your California workplace injury. Expert attorneys evaluate third-party claims beyond workers' compensation. Available 24/7."
        canonical="/workplace-injuries-case-evaluation"
      />

      <GoBack />

      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] flex items-center justify-center text-white overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBackground})` }}
      >
        <div className="text-center px-6 max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Badge className="bg-red-600/90 hover:bg-red-700 text-white px-4 py-2">
              <CheckCircle className="w-4 h-4 mr-2" />
              Free Consultation
            </Badge>
            <Badge className="bg-red-600/90 hover:bg-red-700 text-white px-4 py-2">
              <Clock className="w-4 h-4 mr-2" />
              24/7 Availability
            </Badge>
            <Badge className="bg-red-600/90 hover:bg-red-700 text-white px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              No Fees Unless We Win
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Free Workplace Injury <span className="text-red-400">Case Evaluation</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Get expert legal analysis of your workplace injury case and discover if you have third-party claims beyond workers' compensation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Form Column */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-red-200">
              <CardHeader className="bg-red-50 border-b border-red-200">
                <CardTitle className="text-2xl text-red-600 flex items-center">
                  <FileText className="w-6 h-6 mr-3" />
                  Workplace Injury Case Evaluation Form
                </CardTitle>
                <p className="text-red-700 mt-2">
                  Complete this form for a comprehensive evaluation of your workplace injury case. All information is confidential.
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-red-600 border-b border-red-200 pb-2">
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name *</label>
                        <Input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                          className="border-red-300 focus:border-red-500 focus:ring-red-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name *</label>
                        <Input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                          className="border-red-300 focus:border-red-500 focus:ring-red-500"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone Number *</label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                          className="border-red-300 focus:border-red-500 focus:ring-red-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address</label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="border-red-300 focus:border-red-500 focus:ring-red-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Workplace Injury Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-red-600 border-b border-red-200 pb-2">
                      Workplace Injury Details
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Accident Date *</label>
                        <Input
                          type="date"
                          value={formData.accidentDate}
                          onChange={(e) => handleInputChange('accidentDate', e.target.value)}
                          required
                          className="border-red-300 focus:border-red-500 focus:ring-red-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Workplace Type *</label>
                        <Select value={formData.workplaceType} onValueChange={(value) => handleInputChange('workplaceType', value)}>
                          <SelectTrigger className="border-red-300 focus:border-red-500 focus:ring-red-500">
                            <SelectValue placeholder="Select workplace type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="construction-site">Construction Site</SelectItem>
                            <SelectItem value="manufacturing">Manufacturing Plant</SelectItem>
                            <SelectItem value="warehouse">Warehouse</SelectItem>
                            <SelectItem value="office">Office Building</SelectItem>
                            <SelectItem value="retail">Retail Store</SelectItem>
                            <SelectItem value="healthcare">Healthcare Facility</SelectItem>
                            <SelectItem value="restaurant">Restaurant/Food Service</SelectItem>
                            <SelectItem value="transportation">Transportation/Logistics</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Type of Injury *</label>
                        <Select value={formData.injuryType} onValueChange={(value) => handleInputChange('injuryType', value)}>
                          <SelectTrigger className="border-red-300 focus:border-red-500 focus:ring-red-500">
                            <SelectValue placeholder="Select injury type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="construction-accident">Construction Accident</SelectItem>
                            <SelectItem value="equipment-malfunction">Equipment/Machinery Malfunction</SelectItem>
                            <SelectItem value="toxic-exposure">Toxic Chemical Exposure</SelectItem>
                            <SelectItem value="vehicle-accident">Vehicle Accident at Work</SelectItem>
                            <SelectItem value="fall-height">Fall from Height</SelectItem>
                            <SelectItem value="electrocution">Electrocution</SelectItem>
                            <SelectItem value="slip-fall">Slip and Fall</SelectItem>
                            <SelectItem value="repetitive-stress">Repetitive Stress Injury</SelectItem>
                            <SelectItem value="workplace-violence">Workplace Violence</SelectItem>
                            <SelectItem value="third-party-negligence">Third-Party Negligence</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Employment Status *</label>
                        <Select value={formData.employmentStatus} onValueChange={(value) => handleInputChange('employmentStatus', value)}>
                          <SelectTrigger className="border-red-300 focus:border-red-500 focus:ring-red-500">
                            <SelectValue placeholder="Select employment status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="full-time-employee">Full-Time Employee</SelectItem>
                            <SelectItem value="part-time-employee">Part-Time Employee</SelectItem>
                            <SelectItem value="independent-contractor">Independent Contractor</SelectItem>
                            <SelectItem value="temporary-worker">Temporary Worker</SelectItem>
                            <SelectItem value="subcontractor">Subcontractor</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Medical and Legal Status */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-red-600 border-b border-red-200 pb-2">
                      Medical and Legal Status
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Medical Treatment Received</label>
                        <Select value={formData.medicalTreatment} onValueChange={(value) => handleInputChange('medicalTreatment', value)}>
                          <SelectTrigger className="border-red-300 focus:border-red-500 focus:ring-red-500">
                            <SelectValue placeholder="Select medical treatment" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="emergency-room">Emergency Room</SelectItem>
                            <SelectItem value="urgent-care">Urgent Care</SelectItem>
                            <SelectItem value="company-doctor">Company Doctor</SelectItem>
                            <SelectItem value="personal-doctor">Personal Doctor</SelectItem>
                            <SelectItem value="no-treatment">No Treatment Yet</SelectItem>
                            <SelectItem value="ongoing-treatment">Ongoing Treatment</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Workers' Compensation Filed?</label>
                        <Select value={formData.workersCompFiled} onValueChange={(value) => handleInputChange('workersCompFiled', value)}>
                          <SelectTrigger className="border-red-300 focus:border-red-500 focus:ring-red-500">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes-filed">Yes, Filed</SelectItem>
                            <SelectItem value="no-not-filed">No, Not Filed</SelectItem>
                            <SelectItem value="in-process">In Process</SelectItem>
                            <SelectItem value="denied">Denied</SelectItem>
                            <SelectItem value="unsure">Unsure</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Third Party Involved?</label>
                        <Select value={formData.thirdPartyInvolved} onValueChange={(value) => handleInputChange('thirdPartyInvolved', value)}>
                          <SelectTrigger className="border-red-300 focus:border-red-500 focus:ring-red-500">
                            <SelectValue placeholder="Select if third party involved" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes-contractor">Yes, Another Contractor</SelectItem>
                            <SelectItem value="yes-equipment">Yes, Equipment Manufacturer</SelectItem>
                            <SelectItem value="yes-property">Yes, Property Owner</SelectItem>
                            <SelectItem value="yes-vehicle">Yes, Vehicle Driver</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                            <SelectItem value="unsure">Unsure</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Case Urgency</label>
                        <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                          <SelectTrigger className="border-red-300 focus:border-red-500 focus:ring-red-500">
                            <SelectValue placeholder="Select urgency level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="emergency">Emergency (Severe/Recent)</SelectItem>
                            <SelectItem value="urgent">Urgent (This Week)</SelectItem>
                            <SelectItem value="normal">Normal (This Month)</SelectItem>
                            <SelectItem value="low">Low Priority</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-red-600 border-b border-red-200 pb-2">
                      Case Description
                    </h3>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Describe Your Workplace Injury (Include details about what happened, where, equipment involved, etc.)
                      </label>
                      <Textarea
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        rows={5}
                        className="border-red-300 focus:border-red-500 focus:ring-red-500"
                        placeholder="Please provide as much detail as possible about your workplace injury..."
                      />
                    </div>
                  </div>

                  {/* Consent */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => handleInputChange('consent', checked as boolean)}
                        className="mt-1"
                      />
                      <label htmlFor="consent" className="text-sm text-gray-700 leading-relaxed">
                        I agree to the consultation and understand that submitting this form does not create an attorney-client relationship. 
                        I consent to be contacted regarding my case via phone, email, or text message.
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Free Case Evaluation'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              
              {/* Contact Card */}
              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-red-600 text-center">Need Immediate Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-center">
                  <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
                    <Link to="tel:8181234567">
                      <Phone className="w-4 h-4 mr-2" />
                      Call (818) 123-4567
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full border-red-300 text-red-600 hover:bg-red-100" asChild>
                    <Link to="mailto:info@trembachlawfirm.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Us
                    </Link>
                  </Button>
                  <p className="text-sm text-red-700">
                    Available 24/7 for workplace injury emergencies
                  </p>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">Why Choose Our Firm?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Former defense attorney experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Rising Star Super Lawyers 2026</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Personalized attention to every case</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HardHat className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Specialized in workplace injury law</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>No fees unless we win your case</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Process Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                      <div>
                        <p className="font-medium">Case Review</p>
                        <p className="text-gray-600">We review your submission within 2 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                      <div>
                        <p className="font-medium">Free Consultation</p>
                        <p className="text-gray-600">Detailed discussion of your case and options</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                      <div>
                        <p className="font-medium">Case Strategy</p>
                        <p className="text-gray-600">Develop comprehensive legal strategy</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                      <div>
                        <p className="font-medium">Maximum Recovery</p>
                        <p className="text-gray-600">Fight for full compensation beyond workers' comp</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Resources */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">Additional Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/workplace-injuries-compensation-calculator">
                      <Calculator className="w-4 h-4 mr-2" />
                      Compensation Calculator
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/practice-areas/workplace-injuries">
                      <HardHat className="w-4 h-4 mr-2" />
                      Workplace Injury Guide
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkplaceInjuriesCaseEvaluation;