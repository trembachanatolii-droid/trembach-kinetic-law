import React, { useState } from 'react';
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Phone, Mail, Clock, FileText, Star, Video, MapPin, Home, MessageCircle } from 'lucide-react';
import { cn } from "@/lib/utils"
import heroBackground from '@/assets/dog-bite-case-evaluation-hero.jpg';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';
import { ThreeDVisualEffects } from '@/components/3DVisualEffects';
import '@/styles/premium-3d-effects.css';

const DogBiteConsultationScheduler: React.FC = () => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    consultationType: '',
    preferredTime: '',
    caseDescription: '',
    urgency: ''
  });

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !formData.preferredTime) {
      alert('Please select both a date and time for your consultation.');
      return;
    }

    const consultationData = {
      ...formData,
      consultationDate: format(date, 'PPP'),
      consultationTime: formData.preferredTime
    };

    console.log('Dog Bite Consultation Scheduled:', consultationData);
    
    // Create email with consultation details
    const subject = encodeURIComponent('Dog Bite Consultation Request');
    const body = encodeURIComponent(`
Hello,

I would like to schedule a dog bite consultation with the following details:

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}

Preferred Date: ${format(date, 'PPP')}
Preferred Time: ${formData.preferredTime}
Consultation Type: ${formData.consultationType}

Case Overview:
${formData.caseDescription}

Urgency Level: ${formData.urgency}

Please confirm my consultation appointment.

Best regards,
${formData.firstName} ${formData.lastName}
    `);

    window.location.href = `mailto:info@trembachlaw.com?subject=${subject}&body=${body}`;
    
    alert('Your consultation request has been sent! We will contact you within 24 hours to confirm your appointment.');
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
            {/* Scheduling Form */}
            <div className="lg:col-span-2">
              <ThreeDVisualEffects className="premium-3d-container">
                <Card className="glass-card shadow-2xl border-0">
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-3xl font-bold text-slate-900 mb-4">
                      Schedule Your Consultation
                    </CardTitle>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto"></div>
                  </CardHeader>
                  
                  <CardContent className="space-y-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Personal Information */}
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

                      {/* Date and Time Selection */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label>Preferred Date *</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full h-12 justify-start text-left font-normal",
                                  !date && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : "Select consultation date"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
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
                          <Label>Preferred Time *</Label>
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

                      {/* Consultation Type */}
                      <div className="space-y-2">
                        <Label>Consultation Type *</Label>
                        <Select 
                          value={formData.consultationType} 
                          onValueChange={(value) => handleInputChange('consultationType', value)}
                        >
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select consultation method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="phone">
                              <div className="flex items-center">
                                <Phone className="w-4 h-4 mr-2" />
                                Phone Consultation
                              </div>
                            </SelectItem>
                            <SelectItem value="video">
                              <div className="flex items-center">
                                <Video className="w-4 h-4 mr-2" />
                                Video Conference
                              </div>
                            </SelectItem>
                            <SelectItem value="office">
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-2" />
                                In-Person Meeting
                              </div>
                            </SelectItem>
                            <SelectItem value="home">
                              <div className="flex items-center">
                                <Home className="w-4 h-4 mr-2" />
                                Home Visit
                              </div>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Case Urgency */}
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

                      {/* Brief Case Description */}
                      <div className="space-y-2">
                        <Label htmlFor="caseDescription">Brief Case Description</Label>
                        <Textarea
                          id="caseDescription"
                          value={formData.caseDescription}
                          onChange={(e) => handleInputChange('caseDescription', e.target.value)}
                          placeholder="Briefly describe your dog bite incident (optional but helpful for preparation)"
                          className="min-h-[100px] resize-none"
                        />
                      </div>

                      {/* Submit Button */}
                      <Button 
                        type="submit" 
                        className="w-full h-14 bg-red-600 hover:bg-red-700 text-white font-bold text-lg"
                        disabled={!date || !formData.preferredTime || !formData.consultationType}
                      >
                        Schedule My Free Consultation
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </ThreeDVisualEffects>
            </div>

            {/* Sidebar Information */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Consultation Options */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MessageCircle className="w-5 h-5 mr-2 text-primary" />
                      Consultation Options
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-primary mt-0.5 mr-3" />
                      <div>
                        <h4 className="font-semibold text-sm">Phone Consultation</h4>
                        <p className="text-sm text-muted-foreground">Convenient and immediate</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Video className="w-5 h-5 text-primary mt-0.5 mr-3" />
                      <div>
                        <h4 className="font-semibold text-sm">Video Conference</h4>
                        <p className="text-sm text-muted-foreground">Face-to-face from home</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-primary mt-0.5 mr-3" />
                      <div>
                        <h4 className="font-semibold text-sm">In-Person Meeting</h4>
                        <p className="text-sm text-muted-foreground">Meet at our office</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Home className="w-5 h-5 text-primary mt-0.5 mr-3" />
                      <div>
                        <h4 className="font-semibold text-sm">Home Visit</h4>
                        <p className="text-sm text-muted-foreground">We come to you</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Why Schedule Today */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-primary" />
                      Why Schedule Today?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Evidence preservation is critical</li>
                      <li>• California has strict time limits</li>
                      <li>• Medical bills keep accumulating</li>
                      <li>• Insurance companies move fast</li>
                      <li>• Free consultation - no obligations</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* What to Prepare */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-primary" />
                      What to Prepare
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Medical records and bills</li>
                      <li>• Photos of injuries</li>
                      <li>• Witness contact information</li>
                      <li>• Police or animal control reports</li>
                      <li>• Insurance correspondence</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Contact Directly */}
                <Card className="glass-card bg-blue-50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-blue-900">Need Immediate Help?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button 
                        className="w-full bg-red-600 hover:bg-red-700"
                        onClick={() => window.location.href = 'tel:8559851234'}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call (855) 985-1234
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => window.location.href = 'mailto:info@trembachlaw.com'}
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Email Us Directly
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

export default DogBiteConsultationScheduler;