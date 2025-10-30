import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Star, 
  Shield,
  Scale,
  Clock,
  Users,
  Award,
  ArrowLeft,
  FileText,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  accidentDate: string;
  accidentLocation: string;
  accidentDescription: string;
  injuryType: string;
  injurySeverity: string;
  medicalTreatment: string;
  insuranceClaim: string;
  policeCalled: string;
  currentlyTreating: string;
  additionalInfo: string;
}

const AnimatedSphere: React.FC = () => (
  <Canvas camera={{ position: [0, 0, 6] }}>
    <ambientLight intensity={0.8} />
    <directionalLight position={[2, 2, 5]} />
    <Sphere args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="hsl(var(--primary))"
        attach="material"
        wireframe={false}
        distort={0.4}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
  </Canvas>
);

const CarAccidentCaseEvaluation: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    accidentDate: '',
    accidentLocation: '',
    accidentDescription: '',
    injuryType: '',
    injurySeverity: '',
    medicalTreatment: '',
    insuranceClaim: '',
    policeCalled: '',
    currentlyTreating: '',
    additionalInfo: '',
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
      );

      // Content sections animation
      gsap.fromTo(contentRef.current?.querySelectorAll('.content-section'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <>
      <SEO 
        title="Car Accident Case Evaluation - Free Legal Assessment | California Auto Injury Lawyers"
        description="Get a free case evaluation for your California car accident claim. Expert legal assessment of your auto injury case. No fees unless we win. Call (877) 647-1564."
        keywords="car accident case evaluation, California auto injury lawyer, free consultation, car crash claim assessment"
        canonical="/practice-areas/car-accidents/case-evaluation"
      />

      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
        <GoBack />
        
        {/* Hero Section */}
        <section ref={heroRef} className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10" />
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-20">
            <AnimatedSphere />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="hero-content max-w-4xl">
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-muted-foreground font-medium">Trusted by 10,000+ Clients</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent mb-6">
                Free Car Accident Case Evaluation
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Get expert legal assessment of your California car accident claim. Our experienced attorneys 
                evaluate your case for free and help you understand your rights and options.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (877) 647-1564
                </Button>
                <Button variant="outline" size="lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Free Case Review
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section ref={contentRef} className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Case Evaluation Form */}
              <div className="lg:col-span-2 content-section">
                <Card className="p-8 shadow-xl">
                  <CardHeader className="text-center mb-8">
                    <CardTitle className="text-3xl font-bold text-primary mb-4">
                      Case Evaluation Form
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Please provide details about your car accident to help us evaluate your case
                    </p>
                  </CardHeader>
                  
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Personal Information */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Personal Information</h3>
                        <div className="grid md:grid-cols-2 gap-4">
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
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="email">Email *</Label>
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
                        </div>
                      </div>

                      {/* Accident Details */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Accident Details</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="accidentDate">Date of Accident *</Label>
                            <Input
                              id="accidentDate"
                              type="date"
                              value={formData.accidentDate}
                              onChange={(e) => handleInputChange('accidentDate', e.target.value)}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="accidentLocation">Accident Location *</Label>
                            <Input
                              id="accidentLocation"
                              placeholder="City, State"
                              value={formData.accidentLocation}
                              onChange={(e) => handleInputChange('accidentLocation', e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="accidentDescription">Describe the Accident *</Label>
                          <Textarea
                            id="accidentDescription"
                            placeholder="Please describe how the accident occurred..."
                            value={formData.accidentDescription}
                            onChange={(e) => handleInputChange('accidentDescription', e.target.value)}
                            rows={4}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="policeCalled">Were Police Called?</Label>
                          <Select value={formData.policeCalled} onValueChange={(value) => handleInputChange('policeCalled', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="no">No</SelectItem>
                              <SelectItem value="unsure">Not Sure</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Injury Information */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Injury Information</h3>
                        <div>
                          <Label htmlFor="injuryType">Type of Injuries</Label>
                          <Select value={formData.injuryType} onValueChange={(value) => handleInputChange('injuryType', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select injury type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="none">No Injuries</SelectItem>
                              <SelectItem value="minor">Minor Injuries (bruises, minor cuts)</SelectItem>
                              <SelectItem value="soft-tissue">Soft Tissue (whiplash, sprains)</SelectItem>
                              <SelectItem value="fractures">Broken Bones/Fractures</SelectItem>
                              <SelectItem value="head">Head/Brain Injuries</SelectItem>
                              <SelectItem value="spinal">Spinal Cord Injuries</SelectItem>
                              <SelectItem value="multiple">Multiple Injuries</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="injurySeverity">Injury Severity</Label>
                          <Select value={formData.injurySeverity} onValueChange={(value) => handleInputChange('injurySeverity', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select severity" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="none">No Injuries</SelectItem>
                              <SelectItem value="minor">Minor</SelectItem>
                              <SelectItem value="moderate">Moderate</SelectItem>
                              <SelectItem value="severe">Severe</SelectItem>
                              <SelectItem value="critical">Critical/Life-threatening</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="medicalTreatment">Medical Treatment Received</Label>
                          <Select value={formData.medicalTreatment} onValueChange={(value) => handleInputChange('medicalTreatment', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select treatment" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="none">No Treatment</SelectItem>
                              <SelectItem value="first-aid">First Aid Only</SelectItem>
                              <SelectItem value="clinic">Urgent Care/Clinic</SelectItem>
                              <SelectItem value="er">Emergency Room</SelectItem>
                              <SelectItem value="hospital">Hospitalization</SelectItem>
                              <SelectItem value="surgery">Surgery Required</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="currentlyTreating">Currently Receiving Treatment?</Label>
                          <Select value={formData.currentlyTreating} onValueChange={(value) => handleInputChange('currentlyTreating', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="no">No</SelectItem>
                              <SelectItem value="completed">Treatment Completed</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Insurance Information */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Insurance Information</h3>
                        <div>
                          <Label htmlFor="insuranceClaim">Have you filed an insurance claim?</Label>
                          <Select value={formData.insuranceClaim} onValueChange={(value) => handleInputChange('insuranceClaim', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="no">No</SelectItem>
                              <SelectItem value="pending">In Progress</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Additional Information */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Additional Information</h3>
                        <div>
                          <Label htmlFor="additionalInfo">Any additional details you'd like to share?</Label>
                          <Textarea
                            id="additionalInfo"
                            placeholder="Please include any other relevant information..."
                            value={formData.additionalInfo}
                            onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                            rows={3}
                          />
                        </div>
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        <FileText className="w-5 h-5 mr-2" />
                        Submit Case for Evaluation
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Immediate Contact */}
                <Card className="content-section p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold text-primary">
                      Need Immediate Help?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <p className="text-muted-foreground">
                      Don't wait - speak with an experienced car accident attorney today
                    </p>
                    <Button size="lg" className="w-full">
                      <Phone className="w-5 h-5 mr-2" />
                      Call (877) 647-1564
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      24/7 Free Consultation Available
                    </p>
                  </CardContent>
                </Card>

                {/* Next Steps */}
                <Card className="content-section">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold flex items-center">
                      <CheckCircle className="w-6 h-6 mr-2 text-green-500" />
                      What Happens Next?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                        <p className="text-sm">We review your case details within 24 hours</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                        <p className="text-sm">Free consultation to discuss your options</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                        <p className="text-sm">We handle everything - no upfront costs</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Why Choose Us */}
                <Card className="content-section">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold flex items-center">
                      <Award className="w-6 h-6 mr-2 text-accent" />
                      Why Choose Our Firm?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Scale className="w-5 h-5 text-primary" />
                      <span className="text-sm">$100M+ recovered for clients</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-primary" />
                      <span className="text-sm">No fees unless we win</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-sm">25+ years experience</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="text-sm">Personal attention to every case</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CarAccidentCaseEvaluation;