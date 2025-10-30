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
  Scale, 
  Star,
  ChevronDown,
  ChevronUp,
  Shield,
  Clock,
  FileText,
  AlertTriangle,
  Gavel,
  Users,
  CheckCircle,
  BookOpen
} from 'lucide-react';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';
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
        color="hsl(var(--primary))"
        attach="material"
        wireframe={false}
        distort={0.4}
        speed={1.2}
        roughness={0.3}
        metalness={0.7}
      />
    </Sphere>
    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.4} />
  </Canvas>
);

const CarAccidentLegalGuidance: React.FC = () => {
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
        title="Car Accident Legal Guidance - California Auto Injury Law | Expert Legal Help"
        description="Comprehensive legal guidance for California car accident victims. Understand your rights, insurance laws, and legal process. Expert car accident attorneys. Call (877) 647-1564."
        keywords="California car accident law, auto injury legal rights, car crash lawsuit process, vehicle accident attorney guidance"
        canonical="/practice-areas/car-accidents/legal-guidance"
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
                <span className="text-muted-foreground font-medium">Expert Legal Counsel Since 1999</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent mb-6">
                Car Accident Legal Guidance
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Navigate California's complex car accident laws with confidence. Our comprehensive legal 
                guidance helps you understand your rights, the claims process, and how to maximize your recovery.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (877) 647-1564
                </Button>
                <Button variant="outline" size="lg">
                  <Scale className="w-5 h-5 mr-2" />
                  Free Legal Consultation
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
                
                {/* California Car Accident Laws */}
                <Card className="content-section">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold flex items-center">
                      <Gavel className="w-7 h-7 mr-3 text-primary" />
                      California Car Accident Laws
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="prose max-w-none">
                      <p className="text-muted-foreground mb-4">
                        California operates under specific laws that affect how car accident claims are handled. 
                        Understanding these laws is crucial for protecting your rights and maximizing your recovery.
                      </p>
                    </div>

                    <Collapsible open={expandedSections['comparative-fault']} onOpenChange={() => toggleSection('comparative-fault')}>
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                        <h3 className="text-lg font-semibold">Comparative Fault Rule</h3>
                        {expandedSections['comparative-fault'] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </CollapsibleTrigger>
                      <CollapsibleContent className="p-4 space-y-3">
                        <p className="text-muted-foreground">
                          California follows a "pure comparative fault" system, meaning you can recover damages 
                          even if you're partially at fault for the accident. Your compensation is reduced by 
                          your percentage of fault.
                        </p>
                        <div className="bg-primary/5 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Example:</h4>
                          <p className="text-sm text-muted-foreground">
                            If you're 30% at fault for an accident with $100,000 in damages, you can still 
                            recover $70,000 (100% - 30% = 70% of total damages).
                          </p>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    <Collapsible open={expandedSections['insurance-requirements']} onOpenChange={() => toggleSection('insurance-requirements')}>
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                        <h3 className="text-lg font-semibold">Minimum Insurance Requirements</h3>
                        {expandedSections['insurance-requirements'] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </CollapsibleTrigger>
                      <CollapsibleContent className="p-4 space-y-3">
                        <p className="text-muted-foreground">
                          California requires all drivers to carry minimum liability insurance:
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• $15,000 bodily injury per person</li>
                          <li>• $30,000 bodily injury per accident</li>
                          <li>• $5,000 property damage</li>
                        </ul>
                        <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                          <div className="flex items-start space-x-3">
                            <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5" />
                            <div>
                              <h4 className="font-semibold text-amber-800">Important Note</h4>
                              <p className="text-sm text-amber-700">
                                These minimums are often inadequate for serious accidents. We recommend carrying 
                                higher limits and uninsured/underinsured motorist coverage.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    <Collapsible open={expandedSections['reporting-requirements']} onOpenChange={() => toggleSection('reporting-requirements')}>
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                        <h3 className="text-lg font-semibold">Accident Reporting Requirements</h3>
                        {expandedSections['reporting-requirements'] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </CollapsibleTrigger>
                      <CollapsibleContent className="p-4 space-y-3">
                        <p className="text-muted-foreground">
                          California law requires reporting accidents to the DMV within 10 days if:
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Anyone was injured or killed</li>
                          <li>• Property damage exceeds $1,000</li>
                          <li>• Any vehicle was towed from the scene</li>
                        </ul>
                        <p className="text-sm text-muted-foreground">
                          Police reports should be filed immediately for any accident involving injuries, 
                          significant damage, or disputes about fault.
                        </p>
                      </CollapsibleContent>
                    </Collapsible>
                  </CardContent>
                </Card>

                {/* Legal Process Timeline */}
                <Card className="content-section">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold flex items-center">
                      <Clock className="w-7 h-7 mr-3 text-primary" />
                      Legal Process Timeline
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                        <div>
                          <h3 className="font-semibold">Immediate Response (Day 1-7)</h3>
                          <p className="text-sm text-muted-foreground">
                            Seek medical attention, document the scene, notify insurance companies, 
                            and consult with an attorney before giving recorded statements.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                        <div>
                          <h3 className="font-semibold">Investigation Phase (Week 1-4)</h3>
                          <p className="text-sm text-muted-foreground">
                            Gather evidence, obtain police reports, interview witnesses, review medical 
                            records, and assess liability and damages.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                        <div>
                          <h3 className="font-semibold">Medical Treatment (Ongoing)</h3>
                          <p className="text-sm text-muted-foreground">
                            Focus on recovery while documenting all medical treatment. Don't settle 
                            until you reach maximum medical improvement.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
                        <div>
                          <h3 className="font-semibold">Demand Package (Month 3-6)</h3>
                          <p className="text-sm text-muted-foreground">
                            Prepare comprehensive demand letter with medical records, bills, wage 
                            statements, and documentation of pain and suffering.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">5</div>
                        <div>
                          <h3 className="font-semibold">Negotiations (Month 6-12)</h3>
                          <p className="text-sm text-muted-foreground">
                            Negotiate with insurance companies to reach fair settlement. Most cases 
                            resolve during this phase without going to trial.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">6</div>
                        <div>
                          <h3 className="font-semibold">Litigation (If Necessary)</h3>
                          <p className="text-sm text-muted-foreground">
                            File lawsuit if settlement negotiations fail. Discovery, depositions, 
                            and trial preparation typically take 12-24 months.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Your Rights as an Accident Victim */}
                <Card className="content-section">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold flex items-center">
                      <Shield className="w-7 h-7 mr-3 text-primary" />
                      Your Rights as an Accident Victim
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Right to Medical Treatment</h4>
                            <p className="text-sm text-muted-foreground">
                              Seek necessary medical care without worrying about immediate payment
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Right to Legal Representation</h4>
                            <p className="text-sm text-muted-foreground">
                              Consult with an attorney before speaking to insurance companies
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Right to Fair Compensation</h4>
                            <p className="text-sm text-muted-foreground">
                              Recover damages for medical bills, lost wages, and pain and suffering
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Right to Privacy</h4>
                            <p className="text-sm text-muted-foreground">
                              Control what information you share with insurance companies
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Right to Choose Your Doctor</h4>
                            <p className="text-sm text-muted-foreground">
                              Select your own healthcare providers for treatment
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Right to Time</h4>
                            <p className="text-sm text-muted-foreground">
                              Don't rush into settlements - you have up to 2 years to file a claim
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Important Deadlines */}
                <Card className="content-section bg-amber-50 border-amber-200">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold flex items-center text-amber-800">
                      <AlertTriangle className="w-7 h-7 mr-3" />
                      Critical Deadlines
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-amber-800 mb-2">Statute of Limitations</h3>
                        <ul className="space-y-2 text-sm text-amber-700">
                          <li>• Personal injury claims: 2 years from accident date</li>
                          <li>• Property damage claims: 3 years from accident date</li>
                          <li>• Wrongful death claims: 2 years from death date</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-amber-800 mb-2">Reporting Deadlines</h3>
                        <ul className="space-y-2 text-sm text-amber-700">
                          <li>• DMV accident report: 10 days</li>
                          <li>• Insurance notification: "Promptly" (preferably within 24 hours)</li>
                          <li>• Government claims: 6 months if government vehicle involved</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-amber-100 p-4 rounded-lg">
                      <p className="text-sm text-amber-800 font-medium">
                        Missing these deadlines can bar your claim entirely. Contact an attorney 
                        immediately to protect your rights.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Section */}
                <Card className="content-section">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">
                      Get Expert Legal Guidance Today
                    </CardTitle>
                    <p className="text-center text-muted-foreground">
                      Don't navigate California's complex car accident laws alone
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Why Choose Our Firm?</h3>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <Users className="w-5 h-5 text-primary" />
                            <span className="text-sm">25+ years of car accident experience</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Scale className="w-5 h-5 text-primary" />
                            <span className="text-sm">$100M+ recovered for clients</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Shield className="w-5 h-5 text-primary" />
                            <span className="text-sm">No fees unless we win</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <BookOpen className="w-5 h-5 text-primary" />
                            <span className="text-sm">Former insurance defense experience</span>
                          </div>
                        </div>
                        <Button size="lg" className="w-full">
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
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            value={contactForm.message}
                            onChange={(e) => handleContactFormChange('message', e.target.value)}
                            placeholder="Tell us about your car accident..."
                            rows={4}
                          />
                        </div>
                        <Button type="submit" size="lg" className="w-full">
                          <FileText className="w-5 h-5 mr-2" />
                          Request Free Consultation
                        </Button>
                      </form>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6 content-section">
                <Card className="sticky top-8 p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold text-primary">
                      Need Legal Help?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <p className="text-muted-foreground">
                      Get expert guidance from experienced California car accident attorneys
                    </p>
                    <Button size="lg" className="w-full">
                      <Phone className="w-5 h-5 mr-2" />
                      Call (877) 647-1564
                    </Button>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>Free Consultation</p>
                      <p>No Upfront Costs</p>
                      <p>Available 24/7</p>
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

export default CarAccidentLegalGuidance;