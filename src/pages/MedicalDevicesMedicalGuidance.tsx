import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  ArrowLeft, 
  Heart, 
  AlertTriangle, 
  FileText, 
  Stethoscope, 
  Phone,
  ChevronDown,
  ChevronUp,
  Clock,
  Shield,
  BookOpen
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '@/components/SEO';
import heroImage from '@/assets/practice-areas/medical-devices-guidance-hero.jpg';

gsap.registerPlugin(ScrollTrigger);

const MedicalDevicesMedicalGuidance: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [showGoBack, setShowGoBack] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = heroRef.current?.offsetHeight || 0;
      setShowGoBack(window.scrollY > heroHeight * 0.3);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );

      gsap.fromTo(contentRef.current?.querySelectorAll('.content-section'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleGoBack = () => {
    window.history.back();
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const medicalGuidanceData = [
    {
      id: 'immediate-steps',
      title: 'Immediate Steps After Device Complications',
      content: `
        <h4>Seek Immediate Medical Attention</h4>
        <p>If you experience symptoms related to your medical device, contact your healthcare provider immediately. Document all symptoms with dates and severity levels.</p>
        
        <h4>Emergency Warning Signs</h4>
        <ul>
          <li>Severe pain at the implant site</li>
          <li>Signs of infection (fever, redness, swelling)</li>
          <li>Device migration or visible displacement</li>
          <li>Sudden onset of new symptoms</li>
          <li>Allergic reactions or skin changes</li>
        </ul>
        
        <h4>Documentation is Critical</h4>
        <p>Keep detailed records of all symptoms, medical visits, treatments, and how the complications affect your daily life.</p>
      `
    },
    {
      id: 'device-recalls',
      title: 'Understanding FDA Device Recalls',
      content: `
        <h4>Class I Recalls - High Risk</h4>
        <p>Situations where there is reasonable probability that use of the product will cause serious adverse health consequences or death.</p>
        
        <h4>Class II Recalls - Moderate Risk</h4>
        <p>Situations where use of the product may cause temporary or medically reversible adverse health consequences.</p>
        
        <h4>Class III Recalls - Low Risk</h4>
        <p>Situations where use of the product is not likely to cause adverse health consequences.</p>
        
        <h4>How to Check for Recalls</h4>
        <p>Visit the FDA's medical device recall database regularly. Your device manufacturer should also notify you directly of any recalls.</p>
      `
    },
    {
      id: 'types-devices',
      title: 'Common Problematic Device Types',
      content: `
        <h4>Hip and Knee Implants</h4>
        <p>Metal-on-metal implants can cause metallosis, tissue death, and need for revision surgery. Symptoms include pain, swelling, and reduced mobility.</p>
        
        <h4>Hernia and Transvaginal Mesh</h4>
        <p>Can cause mesh erosion, organ perforation, chronic pain, and infections. May require multiple surgeries to correct.</p>
        
        <h4>IVC Filters</h4>
        <p>Retrievable filters that become permanent can cause filter migration, organ perforation, and blood clots.</p>
        
        <h4>Cardiac Devices</h4>
        <p>Pacemakers and defibrillators may malfunction, causing inappropriate shocks or failure to pace properly.</p>
      `
    },
    {
      id: 'treatment-options',
      title: 'Treatment and Management Options',
      content: `
        <h4>Conservative Management</h4>
        <p>Pain management, anti-inflammatory medications, and physical therapy may help manage symptoms initially.</p>
        
        <h4>Revision Surgery</h4>
        <p>Removal or replacement of the defective device may be necessary. This is typically more complex than the original implantation.</p>
        
        <h4>Long-term Monitoring</h4>
        <p>Regular imaging studies and blood tests may be required to monitor device function and detect complications early.</p>
        
        <h4>Specialist Care</h4>
        <p>You may need care from multiple specialists including orthopedic surgeons, cardiologists, or gynecologists depending on your device type.</p>
      `
    },
    {
      id: 'legal-medical',
      title: 'Medical Evidence for Legal Claims',
      content: `
        <h4>Medical Records</h4>
        <p>Obtain copies of all medical records related to your device implantation, complications, and treatments.</p>
        
        <h4>Imaging Studies</h4>
        <p>X-rays, CT scans, MRIs, and ultrasounds showing device failure or complications are crucial evidence.</p>
        
        <h4>Expert Medical Opinions</h4>
        <p>Independent medical evaluations can establish the link between your device and your injuries.</p>
        
        <h4>Device Information</h4>
        <p>Collect all information about your device including model numbers, lot numbers, and manufacturer details.</p>
      `
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Medical Device Injury Medical Guidance | Trembach Law Firm"
        description="Medical guidance for device injuries. Hip implants, hernia mesh, IVC filters, pacemakers. What to do after complications, treatment options, FDA recalls."
        canonical="/medical-devices-medical-guidance"
      />

      {/* Go Back Button */}
      <button
        onClick={handleGoBack}
        className={`fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg shadow-lg transition-all duration-300 hover:bg-primary/90 ${
          showGoBack ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="font-medium">Go Back</span>
      </button>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-center text-white"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})` 
        }}
      >
        <div className="hero-content max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Medical Device Injury Guidance
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Essential medical information for device injury victims and their families
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Stethoscope className="w-5 h-5" />
              <span>Medical Expertise</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              <span>Educational Resources</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Patient Advocacy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section ref={contentRef} className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Emergency Alert */}
              <Card className="content-section bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-red-800 mb-2">Medical Emergency</h3>
                      <p className="text-red-700 text-sm leading-relaxed">
                        If you are experiencing severe symptoms such as chest pain, difficulty breathing, 
                        severe bleeding, or signs of infection, seek immediate emergency medical care. 
                        Call 911 or go to your nearest emergency room.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Medical Guidance Sections */}
              {medicalGuidanceData.map((section) => (
                <Card key={section.id} className="content-section shadow-lg">
                  <Collapsible
                    open={expandedSections[section.id]}
                    onOpenChange={() => toggleSection(section.id)}
                  >
                    <CollapsibleTrigger asChild>
                      <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl font-bold text-left">
                            {section.title}
                          </CardTitle>
                          {expandedSections[section.id] ? (
                            <ChevronUp className="w-5 h-5 text-muted-foreground" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-muted-foreground" />
                          )}
                        </div>
                      </CardHeader>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="pt-0">
                        <div 
                          className="prose prose-sm max-w-none medical-content"
                          dangerouslySetInnerHTML={{ __html: section.content }}
                        />
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}

              {/* Additional Resources */}
              <Card className="content-section bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-800">
                    <BookOpen className="w-5 h-5" />
                    Additional Medical Resources
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">FDA Resources</h4>
                      <ul className="text-blue-700 text-sm space-y-1">
                        <li>• FDA Medical Device Safety Communications</li>
                        <li>• Device Recall Database</li>
                        <li>• Adverse Event Reporting System</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">Patient Support</h4>
                      <ul className="text-blue-700 text-sm space-y-1">
                        <li>• Medical device support groups</li>
                        <li>• Patient advocacy organizations</li>
                        <li>• Second opinion networks</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick Actions */}
              <Card className="sticky top-6 bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">Need Immediate Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => window.location.href = '/medical-devices-case-evaluation'}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Free Case Review
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call (818) 123-4567
                  </Button>
                </CardContent>
              </Card>

              {/* Key Points */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Heart className="w-5 h-5 text-red-500" />
                    Key Points
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <Badge variant="secondary" className="w-full justify-start p-2 h-auto">
                      <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-xs">Act quickly if symptoms develop</span>
                    </Badge>
                    <Badge variant="secondary" className="w-full justify-start p-2 h-auto">
                      <FileText className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-xs">Document everything thoroughly</span>
                    </Badge>
                    <Badge variant="secondary" className="w-full justify-start p-2 h-auto">
                      <Stethoscope className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-xs">Get second medical opinions</span>
                    </Badge>
                    <Badge variant="secondary" className="w-full justify-start p-2 h-auto">
                      <Shield className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-xs">Know your legal rights</span>
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .medical-content h4 {
          font-weight: 600;
          margin: 1rem 0 0.5rem 0;
          color: hsl(var(--foreground));
        }
        .medical-content p {
          margin: 0.5rem 0;
          line-height: 1.6;
          color: hsl(var(--muted-foreground));
        }
        .medical-content ul {
          margin: 0.5rem 0;
          padding-left: 1.25rem;
        }
        .medical-content li {
          margin: 0.25rem 0;
          line-height: 1.5;
          color: hsl(var(--muted-foreground));
        }
      `}</style>
    </div>
  );
};

export default MedicalDevicesMedicalGuidance;