import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  ArrowLeft,
  Star,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Shield,
  Award,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import heroBackground from '@/assets/birth-injuries-hero-bg.jpg';
import useScrollRestoration from '@/hooks/useScrollRestoration';
import ThreeDVisualEffects from '@/components/ThreeDVisualEffects';
import '@/styles/premium-3d-effects.css';

gsap.registerPlugin(ScrollTrigger);

const BirthInjuriesCaseEvaluation: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    injuryType: '',
    birthDate: '',
    hospital: '',
    description: '',
    medicalRecords: false,
    consent: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  useScrollRestoration();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );

      // Form animation
      gsap.fromTo(formRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%'
          }
        }
      );
    });

    // Go Back button scroll visibility
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setVisible(scrolled > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      ctx.revert();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleGoBack = () => {
    const currentPosition = window.scrollY;
    sessionStorage.setItem('birth-injuries-scroll-position', currentPosition.toString());
    window.history.back();
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Scroll to top to show success message
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <Card className="max-w-2xl mx-auto text-center glass-card">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2 text-2xl text-green-600">
              <CheckCircle className="w-8 h-8" />
              Thank You for Contacting Us
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg">
              Your birth injury case evaluation has been submitted successfully. Our experienced legal team will review your case and contact you within 24 hours.
            </p>
            
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2">What happens next?</h3>
              <ul className="text-sm space-y-1 text-left">
                <li>• We'll review your case details within 24 hours</li>
                <li>• A birth injury attorney will contact you for a free consultation</li>
                <li>• We'll discuss your legal options with no obligation</li>
                <li>• If we take your case, you pay nothing unless we win</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                className="bg-red-600 hover:bg-red-700 text-white"
                onClick={() => window.location.href = 'tel:8181234567'}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call (818) 123-4567 Now
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.location.href = '/practice-areas/birth-injuries'}
                className="text-primary border-primary hover:bg-primary hover:text-white"
              >
                Back to Birth Injuries
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Birth Injury Case Evaluation | Free Consultation | Trembach Law Firm</title>
        <meta name="description" content="Get a free birth injury case evaluation from experienced California attorneys. We handle cerebral palsy, HIE, Erb's palsy and all birth injury cases. No fees unless we win." />
        <meta name="keywords" content="birth injury case evaluation, cerebral palsy lawyer, HIE attorney, free consultation, birth injury lawsuit, California medical malpractice" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Go Back Button */}
        <div 
          className={`fixed top-20 left-6 z-50 transition-all duration-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <Button 
            variant="ghost" 
            onClick={handleGoBack}
            className="flex items-center gap-2 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>

        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            <div className="hero-content">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Free Birth Injury Case Evaluation
              </h1>
              
              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                ))}
                <span className="ml-2 text-lg text-white">Get Expert Legal Help Today</span>
              </div>
              
              <p className="text-xl">
                Complete our confidential form below. No fees unless we win your case.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Form Column */}
            <div className="lg:col-span-2" ref={formRef}>
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-red-600">Birth Injury Case Evaluation Form</CardTitle>
                  <p className="text-center text-muted-foreground">
                    All information is confidential and protected by attorney-client privilege
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Contact Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold border-b pb-2">Your Contact Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            required
                            className="mt-1"
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
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Child Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold border-b pb-2">Child's Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="childName">Child's Name *</Label>
                          <Input
                            id="childName"
                            value={formData.childName}
                            onChange={(e) => handleInputChange('childName', e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="birthDate">Date of Birth *</Label>
                          <Input
                            id="birthDate"
                            type="date"
                            value={formData.birthDate}
                            onChange={(e) => handleInputChange('birthDate', e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="childAge">Child's Current Age</Label>
                          <Input
                            id="childAge"
                            value={formData.childAge}
                            onChange={(e) => handleInputChange('childAge', e.target.value)}
                            placeholder="e.g., 2 years old"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="hospital">Hospital Where Birth Occurred *</Label>
                          <Input
                            id="hospital"
                            value={formData.hospital}
                            onChange={(e) => handleInputChange('hospital', e.target.value)}
                            required
                            placeholder="Hospital name and city"
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Injury Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold border-b pb-2">Birth Injury Details</h3>
                      <div>
                        <Label htmlFor="injuryType">Type of Birth Injury *</Label>
                        <Select value={formData.injuryType} onValueChange={(value) => handleInputChange('injuryType', value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select the type of injury" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cerebral-palsy">Cerebral Palsy</SelectItem>
                            <SelectItem value="hie">HIE (Hypoxic-Ischemic Encephalopathy)</SelectItem>
                            <SelectItem value="erbs-palsy">Erb's Palsy / Brachial Plexus Injury</SelectItem>
                            <SelectItem value="shoulder-dystocia">Shoulder Dystocia</SelectItem>
                            <SelectItem value="birth-asphyxia">Birth Asphyxia</SelectItem>
                            <SelectItem value="kernicterus">Kernicterus / Jaundice</SelectItem>
                            <SelectItem value="brain-damage">Brain Damage</SelectItem>
                            <SelectItem value="fractures">Bone Fractures</SelectItem>
                            <SelectItem value="nerve-damage">Nerve Damage</SelectItem>
                            <SelectItem value="seizure-disorder">Seizure Disorder</SelectItem>
                            <SelectItem value="developmental-delays">Developmental Delays</SelectItem>
                            <SelectItem value="wrongful-death">Wrongful Death</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                            <SelectItem value="not-sure">Not Sure</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="description">Description of What Happened *</Label>
                        <Textarea
                          id="description"
                          value={formData.description}
                          onChange={(e) => handleInputChange('description', e.target.value)}
                          placeholder="Please describe the circumstances of your child's birth injury, any complications during delivery, and your child's current condition. Include any details about medical negligence you suspect."
                          rows={6}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold border-b pb-2">Additional Information</h3>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="medicalRecords"
                          checked={formData.medicalRecords}
                          onCheckedChange={(checked) => handleInputChange('medicalRecords', checked)}
                        />
                        <Label htmlFor="medicalRecords" className="text-sm">
                          I have access to medical records related to this birth injury
                        </Label>
                      </div>
                    </div>

                    {/* Consent */}
                    <div className="space-y-4">
                      <div className="flex items-start space-x-2">
                        <Checkbox 
                          id="consent"
                          checked={formData.consent}
                          onCheckedChange={(checked) => handleInputChange('consent', checked)}
                          required
                        />
                        <Label htmlFor="consent" className="text-sm leading-relaxed">
                          I consent to be contacted by Trembach Law Firm regarding my potential birth injury case. I understand that submitting this form does not create an attorney-client relationship and that all information will be kept confidential. *
                        </Label>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-semibold"
                      disabled={!formData.consent}
                    >
                      Submit My Case for Free Evaluation
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      By submitting this form, you agree to our Privacy Policy and Terms of Service. 
                      This is a confidential consultation and no attorney-client relationship is formed until a written agreement is signed.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-center text-xl text-red-600">Why Choose Our Firm?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold">Former Defense Experience</h4>
                        <p className="text-sm text-muted-foreground">Unique insights into hospital defense strategies</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold">No Fees Unless We Win</h4>
                        <p className="text-sm text-muted-foreground">100% contingency fee - you pay nothing upfront</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold">Available 24/7</h4>
                        <p className="text-sm text-muted-foreground">Immediate response to birth injury emergencies</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-center text-lg">Need Immediate Help?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                      onClick={() => window.location.href = 'tel:8181234567'}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call (818) 123-4567
                    </Button>
                    
                    <Button 
                      variant="outline"
                      className="w-full text-primary border-primary hover:bg-primary hover:!text-primary-foreground"
                      onClick={() => window.location.href = 'mailto:contact@trembachlawfirm.com'}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email Us
                    </Button>

                    <div className="text-center text-sm text-muted-foreground">
                      <p>Available 24/7 for Birth Injury Emergencies</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card bg-gradient-to-br from-red-50 to-orange-50">
                  <CardHeader>
                    <CardTitle className="text-center text-lg flex items-center justify-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                      Time Limits Apply
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-center">
                      California gives you until your child's 8th birthday to file a birth injury claim. 
                      Don't wait - evidence can be lost and witnesses' memories fade.
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

export default BirthInjuriesCaseEvaluation;