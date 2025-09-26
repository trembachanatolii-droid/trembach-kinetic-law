import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Phone, 
  Stethoscope, 
  Star,
  ChevronDown,
  ChevronUp,
  Heart,
  Brain,
  Bone,
  AlertTriangle,
  FileText,
  Clock,
  CheckCircle,
  Shield,
  Users
} from 'lucide-react';
import SEO from '@/components/SEO';

import useScrollRestoration from '@/hooks/useScrollRestoration';

gsap.registerPlugin(ScrollTrigger);

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const AnimatedSphere: React.FC = () => (
  <Canvas camera={{ position: [0, 0, 6] }}>
    <ambientLight intensity={0.8} />
    <directionalLight position={[2, 2, 5]} />
    <Sphere args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="hsl(var(--accent))"
        attach="material"
        wireframe={false}
        distort={0.3}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
  </Canvas>
);

const CarAccidentMedicalGuidance: React.FC = () => {
  useScrollRestoration();
  
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [contactForm, setContactForm] = useState<ContactForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
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

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const handleContactFormChange = (field: keyof ContactForm, value: string) => {
    setContactForm(prev => ({ ...prev, [field]: value }));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    // Handle contact form submission
  };

  return (
    <>
      <SEO 
        title="Car Accident Medical Guidance - Post-Accident Healthcare | California Auto Injury"
        description="Comprehensive medical guidance for California car accident victims. Learn about injuries, treatment options, and recovery. Expert medical-legal support. Call (877) 647-1564."
        keywords="car accident medical treatment, auto injury recovery, California car crash healthcare, post-accident medical care"
        canonical="/practice-areas/car-accidents/medical-guidance"
      />

      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-accent/5">
        
        
        {/* Hero Section */}
        <section ref={heroRef} className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-accent/5 to-primary/10" />
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
                <span className="text-muted-foreground font-medium">Medical-Legal Expertise Since 1999</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-accent via-accent/80 to-primary bg-clip-text text-transparent mb-6">
                Car Accident Medical Guidance
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Navigate your medical recovery after a California car accident. Our comprehensive guide 
                covers common injuries, treatment options, and how to protect both your health and legal rights.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (877) 647-1564
                </Button>
                <Button variant="outline" size="lg">
                  <Stethoscope className="w-5 h-5 mr-2" />
                  Medical Help Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section ref={contentRef} className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Immediate Medical Response */}
                <Card className="content-section">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold flex items-center">
                      <AlertTriangle className="w-7 h-7 mr-3 text-red-500" />
                      Immediate Medical Response
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-green-600 mb-3">What to Do</h3>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                            <div>
                              <p className="font-medium">Seek immediate care for any injuries</p>
                              <p className="text-sm text-muted-foreground">Call 911 if seriously injured</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                            <div>
                              <p className="font-medium">Document all symptoms</p>
                              <p className="text-sm text-muted-foreground">Even minor pain should be noted</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                            <div>
                              <p className="font-medium">Follow all medical advice</p>
                              <p className="text-sm text-muted-foreground">Attend all appointments</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                            <div>
                              <p className="font-medium">Keep detailed records</p>
                              <p className="text-sm text-muted-foreground">Save all medical documents</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-red-600 mb-3">What Not to Do</h3>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
                            <div>
                              <p className="font-medium">Don't delay seeking treatment</p>
                              <p className="text-sm text-muted-foreground">Can hurt your health and claim</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
                            <div>
                              <p className="font-medium">Don't minimize symptoms</p>
                              <p className="text-sm text-muted-foreground">Adrenaline can mask injuries</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
                            <div>
                              <p className="font-medium">Don't skip medical appointments</p>
                              <p className="text-sm text-muted-foreground">Gaps in treatment hurt your case</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
                            <div>
                              <p className="font-medium">Don't agree to insurance medical exams</p>
                              <p className="text-sm text-muted-foreground">Without attorney guidance</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Common Car Accident Injuries */}
                <Card className="content-section">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold flex items-center">
                      <Heart className="w-7 h-7 mr-3 text-red-500" />
                      Common Car Accident Injuries
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    
                    <Collapsible open={expandedSections['whiplash']} onOpenChange={() => toggleSection('whiplash')}>
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex items-center space-x-3">
                          <Bone className="w-6 h-6 text-accent" />
                          <h3 className="text-lg font-semibold">Whiplash & Neck Injuries</h3>
                        </div>
                        {expandedSections['whiplash'] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </CollapsibleTrigger>
                      <CollapsibleContent className="p-4 space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold mb-2">Symptoms</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Neck pain and stiffness</li>
                              <li>• Headaches</li>
                              <li>• Shoulder pain</li>
                              <li>• Dizziness</li>
                              <li>• Fatigue</li>
                              <li>• Difficulty concentrating</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Treatment Options</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Physical therapy</li>
                              <li>• Chiropractic care</li>
                              <li>• Pain medication</li>
                              <li>• Muscle relaxants</li>
                              <li>• Heat/cold therapy</li>
                              <li>• Massage therapy</li>
                            </ul>
                          </div>
                        </div>
                        <div className="bg-accent/5 p-4 rounded-lg">
                          <p className="text-sm text-muted-foreground">
                            <strong>Important:</strong> Whiplash symptoms may not appear immediately. 
                            Even if you feel fine after the accident, see a doctor within 24-48 hours.
                          </p>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    <Collapsible open={expandedSections['tbi']} onOpenChange={() => toggleSection('tbi')}>
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex items-center space-x-3">
                          <Brain className="w-6 h-6 text-primary" />
                          <h3 className="text-lg font-semibold">Traumatic Brain Injuries (TBI)</h3>
                        </div>
                        {expandedSections['tbi'] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </CollapsibleTrigger>
                      <CollapsibleContent className="p-4 space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold mb-2">Mild TBI Symptoms</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Headaches</li>
                              <li>• Confusion</li>
                              <li>• Memory problems</li>
                              <li>• Nausea/vomiting</li>
                              <li>• Dizziness</li>
                              <li>• Sleep disturbances</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Severe TBI Symptoms</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Loss of consciousness</li>
                              <li>• Severe confusion</li>
                              <li>• Slurred speech</li>
                              <li>• Seizures</li>
                              <li>• Coordination loss</li>
                              <li>• Profound confusion</li>
                            </ul>
                          </div>
                        </div>
                        <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                          <div className="flex items-start space-x-3">
                            <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                            <div>
                              <h4 className="font-semibold text-red-800">Emergency Warning</h4>
                              <p className="text-sm text-red-700">
                                Seek immediate emergency care for loss of consciousness, severe headache, 
                                repeated vomiting, or increasing confusion.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    <Collapsible open={expandedSections['back-injuries']} onOpenChange={() => toggleSection('back-injuries')}>
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex items-center space-x-3">
                          <Bone className="w-6 h-6 text-accent" />
                          <h3 className="text-lg font-semibold">Back & Spinal Injuries</h3>
                        </div>
                        {expandedSections['back-injuries'] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </CollapsibleTrigger>
                      <CollapsibleContent className="p-4 space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold mb-2">Common Injuries</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Herniated discs</li>
                              <li>• Muscle strains</li>
                              <li>• Compression fractures</li>
                              <li>• Spinal cord injuries</li>
                              <li>• Lower back pain</li>
                              <li>• Sciatica</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Treatment Approaches</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Physical therapy</li>
                              <li>• Epidural injections</li>
                              <li>• Chiropractic treatment</li>
                              <li>• Surgery (if needed)</li>
                              <li>• Pain management</li>
                              <li>• Activity modification</li>
                            </ul>
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    <Collapsible open={expandedSections['fractures']} onOpenChange={() => toggleSection('fractures')}>
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex items-center space-x-3">
                          <Bone className="w-6 h-6 text-primary" />
                          <h3 className="text-lg font-semibold">Fractures & Broken Bones</h3>
                        </div>
                        {expandedSections['fractures'] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </CollapsibleTrigger>
                      <CollapsibleContent className="p-4 space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold mb-2">Common Fracture Sites</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Ribs</li>
                              <li>• Arms and wrists</li>
                              <li>• Legs and ankles</li>
                              <li>• Pelvis</li>
                              <li>• Collarbone</li>
                              <li>• Facial bones</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Recovery Process</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Immobilization (cast/splint)</li>
                              <li>• Surgery (if needed)</li>
                              <li>• Physical therapy</li>
                              <li>• Gradual activity return</li>
                              <li>• Follow-up X-rays</li>
                              <li>• Pain management</li>
                            </ul>
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </CardContent>
                </Card>

                {/* Treatment & Recovery Process */}
                <Card className="content-section">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold flex items-center">
                      <Clock className="w-7 h-7 mr-3 text-primary" />
                      Treatment & Recovery Timeline
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                        <div>
                          <h3 className="font-semibold">Emergency Care (Day 1)</h3>
                          <p className="text-sm text-muted-foreground">
                            Immediate medical attention for serious injuries. Emergency room evaluation, 
                            diagnostic tests (X-rays, CT scans), and initial treatment.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                        <div>
                          <h3 className="font-semibold">Primary Care Follow-up (Day 1-7)</h3>
                          <p className="text-sm text-muted-foreground">
                            See your doctor within 72 hours even if injuries seem minor. Document all 
                            symptoms and get referrals to specialists if needed.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                        <div>
                          <h3 className="font-semibold">Specialist Treatment (Week 1-4)</h3>
                          <p className="text-sm text-muted-foreground">
                            Orthopedists, neurologists, pain specialists, or other specialists as needed. 
                            MRI, CT scans, or other advanced diagnostics may be ordered.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
                        <div>
                          <h3 className="font-semibold">Active Treatment (Month 1-6)</h3>
                          <p className="text-sm text-muted-foreground">
                            Physical therapy, chiropractic care, pain management, surgery if needed. 
                            Focus on following treatment plans and attending all appointments.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">5</div>
                        <div>
                          <h3 className="font-semibold">Recovery & Rehabilitation</h3>
                          <p className="text-sm text-muted-foreground">
                            Continued therapy, gradual return to activities, maximum medical improvement 
                            assessment. This phase varies greatly depending on injury severity.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Medical Documentation */}
                <Card className="content-section">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold flex items-center">
                      <FileText className="w-7 h-7 mr-3 text-primary" />
                      Medical Documentation Tips
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-3">Essential Documentation</h3>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm">All medical records</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm">Bills and receipts</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm">Prescription records</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm">Diagnostic test results</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm">Treatment schedules</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-3">How to Protect Your Records</h3>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-3">
                            <Shield className="w-4 h-4 text-primary" />
                            <span className="text-sm">Request copies of all records</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Shield className="w-4 h-4 text-primary" />
                            <span className="text-sm">Keep detailed pain journals</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Shield className="w-4 h-4 text-primary" />
                            <span className="text-sm">Photograph visible injuries</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Shield className="w-4 h-4 text-primary" />
                            <span className="text-sm">Track all expenses</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Shield className="w-4 h-4 text-primary" />
                            <span className="text-sm">Don't sign releases without attorney review</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Section */}
                <Card className="content-section">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">
                      Need Medical or Legal Help?
                    </CardTitle>
                    <p className="text-center text-muted-foreground">
                      Get expert guidance for your medical recovery and legal rights
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">How We Help</h3>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <Stethoscope className="w-5 h-5 text-accent" />
                            <span className="text-sm">Medical referrals to top specialists</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Shield className="w-5 h-5 text-accent" />
                            <span className="text-sm">Protection from insurance tactics</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <FileText className="w-5 h-5 text-accent" />
                            <span className="text-sm">Help organizing medical records</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Users className="w-5 h-5 text-accent" />
                            <span className="text-sm">Coordination with medical providers</span>
                          </div>
                        </div>
                        <Button size="lg" className="w-full bg-accent hover:bg-accent/90">
                          <Phone className="w-5 h-5 mr-2" />
                          Call (877) 647-1564
                        </Button>
                      </div>
                      
                      <form onSubmit={handleContactSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="firstName">First Name</Label>
                            <Input
                              id="firstName"
                              value={contactForm.firstName}
                              onChange={(e) => handleContactFormChange('firstName', e.target.value)}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                              id="lastName"
                              value={contactForm.lastName}
                              onChange={(e) => handleContactFormChange('lastName', e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={contactForm.email}
                            onChange={(e) => handleContactFormChange('email', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={contactForm.phone}
                            onChange={(e) => handleContactFormChange('phone', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="message">Describe Your Injuries</Label>
                          <Textarea
                            id="message"
                            value={contactForm.message}
                            onChange={(e) => handleContactFormChange('message', e.target.value)}
                            placeholder="Tell us about your injuries and medical concerns..."
                            rows={4}
                          />
                        </div>
                        <Button type="submit" size="lg" className="w-full">
                          <Stethoscope className="w-5 h-5 mr-2" />
                          Get Medical-Legal Help
                        </Button>
                      </form>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6 content-section">
                {/* Emergency Card */}
                <Card className="p-6 bg-gradient-to-br from-red-50 to-red-100 border-red-200">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl font-bold text-red-800 flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 mr-2" />
                      Medical Emergency?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <p className="text-red-700 font-medium">
                      Call 911 immediately for serious injuries
                    </p>
                    <div className="text-sm text-red-600 space-y-1">
                      <p>For non-emergency medical guidance:</p>
                      <Button size="lg" className="w-full bg-red-600 hover:bg-red-700">
                        <Phone className="w-5 h-5 mr-2" />
                        Call (877) 647-1564
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Medical Support Network */}
                <Card className="p-6 bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl font-bold text-accent">
                      Medical Support Network
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <p className="text-muted-foreground">
                      We work with California's top medical specialists
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Orthopedic specialists</p>
                      <p>• Neurologists</p>
                      <p>• Pain management doctors</p>
                      <p>• Physical therapists</p>
                      <p>• Chiropractors</p>
                    </div>
                    <Button size="lg" className="w-full">
                      <Stethoscope className="w-5 h-5 mr-2" />
                      Get Medical Referral
                    </Button>
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

export default CarAccidentMedicalGuidance;