import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  Scale, 
  FileText, 
  Clock, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  ChevronDown,
  ChevronUp,
  Shield,
  BookOpen,
  Users,
  Gavel,
  ArrowLeft
} from 'lucide-react';
import Navigation from '@/components/Navigation';

import SEO from '@/components/SEO';
import heroBackground from '@/assets/explosions-legal-guidance-hero.jpg';

gsap.registerPlugin(ScrollTrigger);

interface GuideSection {
  id: string;
  title: string;
  icon: React.ElementType;
  content: React.ReactNode;
}

const ExplosionsLegalGuidance: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [activeSection, setActiveSection] = useState('overview');

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );

      // Content animation
      gsap.fromTo(contentRef.current?.querySelectorAll('.guide-section'),
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

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const immediateDos = [
    "Seek immediate medical attention, even if injuries seem minor",
    "Call 911 and ensure the scene is secure",
    "Take photos/videos of the accident scene if safe to do so",
    "Get contact information from witnesses",
    "Keep all medical records and bills",
    "Report the incident to appropriate authorities",
    "Contact an experienced explosion injury attorney",
    "Preserve any physical evidence (clothing, equipment, etc.)",
    "Document your injuries and recovery process",
    "Keep a detailed journal of pain and suffering"
  ];

  const neverDos = [
    "Don't give recorded statements to insurance companies without attorney advice",
    "Don't sign any documents from insurance companies",
    "Don't discuss fault or blame anyone at the scene",
    "Don't delay seeking medical treatment",
    "Don't throw away evidence or damaged items",
    "Don't post about the incident on social media",
    "Don't accept early settlement offers without legal consultation",
    "Don't wait too long to contact an attorney",
    "Don't ignore your doctor's treatment recommendations",
    "Don't speak to the other party's insurance company alone"
  ];

  const guideSections: GuideSection[] = [
    {
      id: 'legal-basics',
      title: 'Legal Basics of Explosion Cases',
      icon: Scale,
      content: (
        <div className="space-y-4">
          <p>
            Explosion injury cases in California typically involve multiple areas of law, including personal injury, 
            product liability, premises liability, and sometimes wrongful death claims. Understanding the legal 
            framework is crucial for protecting your rights.
          </p>
          
          <h4 className="font-semibold text-lg">Types of Legal Claims</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Negligence:</strong> When someone fails to exercise reasonable care, leading to an explosion</li>
            <li><strong>Product Liability:</strong> When defective equipment or products cause explosions</li>
            <li><strong>Premises Liability:</strong> When property owners fail to maintain safe conditions</li>
            <li><strong>Strict Liability:</strong> For abnormally dangerous activities involving explosives</li>
            <li><strong>Workers' Compensation:</strong> For workplace explosion injuries (though we don't handle these)</li>
          </ul>
          
          <h4 className="font-semibold text-lg">Key Legal Concepts</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-muted rounded-lg">
              <h5 className="font-semibold">Burden of Proof</h5>
              <p className="text-sm">You must prove the defendant's negligence or liability caused your injuries.</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h5 className="font-semibold">Comparative Negligence</h5>
              <p className="text-sm">California uses comparative fault - your compensation may be reduced by your percentage of fault.</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h5 className="font-semibold">Statute of Limitations</h5>
              <p className="text-sm">Generally 2 years from the date of injury to file a personal injury lawsuit.</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h5 className="font-semibold">Damages</h5>
              <p className="text-sm">Economic, non-economic, and potentially punitive damages may be available.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'evidence-preservation',
      title: 'Evidence Preservation',
      icon: FileText,
      content: (
        <div className="space-y-4">
          <p>
            Preserving evidence is critical in explosion cases, as evidence can be destroyed quickly by cleanup 
            efforts, weather, or intentional destruction. Acting fast is essential.
          </p>
          
          <h4 className="font-semibold text-lg">Critical Evidence to Preserve</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Physical Evidence</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>• Equipment and machinery involved</p>
                <p>• Damaged structures and buildings</p>
                <p>• Personal protective equipment</p>
                <p>• Chemical samples or residue</p>
                <p>• Clothing and personal items</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Documentary Evidence</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>• Safety inspection reports</p>
                <p>• Maintenance records</p>
                <p>• Training documentation</p>
                <p>• Safety protocols and procedures</p>
                <p>• Incident reports</p>
              </CardContent>
            </Card>
          </div>
          
          <h4 className="font-semibold text-lg">Documentation Steps</h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Photograph the scene from multiple angles</li>
            <li>Video record the aftermath if possible</li>
            <li>Collect witness contact information</li>
            <li>Obtain police and fire department reports</li>
            <li>Request preservation of evidence through legal channels</li>
            <li>Hire expert investigators and engineers when necessary</li>
          </ol>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start">
              <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 mr-2" />
              <div>
                <h5 className="font-semibold text-yellow-800">Time-Sensitive Warning</h5>
                <p className="text-yellow-700 text-sm">
                  Evidence in explosion cases can be lost forever within hours or days. Contact an attorney 
                  immediately to ensure proper evidence preservation procedures are initiated.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'investigation-process',
      title: 'Investigation Process',
      icon: BookOpen,
      content: (
        <div className="space-y-4">
          <p>
            A thorough investigation is the foundation of a successful explosion injury case. This process 
            involves multiple experts and can take several months to complete properly.
          </p>
          
          <h4 className="font-semibold text-lg">Investigation Team</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Explosion Experts</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p>Analyze blast patterns, determine cause, and reconstruct the sequence of events.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Safety Engineers</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p>Review safety protocols, equipment design, and identify safety violations.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Medical Experts</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p>Document injuries, treatment needs, and long-term medical consequences.</p>
              </CardContent>
            </Card>
          </div>
          
          <h4 className="font-semibold text-lg">Investigation Timeline</h4>
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mr-4">1</div>
              <div>
                <h5 className="font-semibold">Immediate Response (0-48 hours)</h5>
                <p className="text-sm text-muted-foreground">Secure scene, preserve evidence, hire experts</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mr-4">2</div>
              <div>
                <h5 className="font-semibold">Initial Investigation (1-4 weeks)</h5>
                <p className="text-sm text-muted-foreground">Expert scene examination, document collection, witness interviews</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mr-4">3</div>
              <div>
                <h5 className="font-semibold">Detailed Analysis (1-6 months)</h5>
                <p className="text-sm text-muted-foreground">Laboratory testing, engineering analysis, cause determination</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mr-4">4</div>
              <div>
                <h5 className="font-semibold">Report Preparation (2-4 weeks)</h5>
                <p className="text-sm text-muted-foreground">Expert reports, findings compilation, case strategy development</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'compensation-types',
      title: 'Types of Compensation',
      icon: Gavel,
      content: (
        <div className="space-y-4">
          <p>
            Explosion injury victims in California may be entitled to various types of compensation, 
            depending on the circumstances of their case and the extent of their damages.
          </p>
          
          <h4 className="font-semibold text-lg">Economic Damages</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h5 className="font-semibold text-green-800">Medical Expenses</h5>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Emergency room treatment</li>
                <li>• Hospitalization costs</li>
                <li>• Surgery and procedures</li>
                <li>• Rehabilitation therapy</li>
                <li>• Future medical care</li>
                <li>• Medical equipment and devices</li>
              </ul>
            </div>
            
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h5 className="font-semibold text-blue-800">Lost Income</h5>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Lost wages during recovery</li>
                <li>• Reduced earning capacity</li>
                <li>• Lost benefits and bonuses</li>
                <li>• Future income losses</li>
                <li>• Career advancement losses</li>
                <li>• Retirement benefit impacts</li>
              </ul>
            </div>
          </div>
          
          <h4 className="font-semibold text-lg">Non-Economic Damages</h4>
          <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-purple-800">Pain and Suffering</h5>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Physical pain and discomfort</li>
                  <li>• Mental anguish and emotional distress</li>
                  <li>• Loss of enjoyment of life</li>
                  <li>• Anxiety and depression</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-purple-800">Life Impact</h5>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Disfigurement and scarring</li>
                  <li>• Loss of consortium</li>
                  <li>• Disability and impairment</li>
                  <li>• Loss of life's pleasures</li>
                </ul>
              </div>
            </div>
          </div>
          
          <h4 className="font-semibold text-lg">Punitive Damages</h4>
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700">
              <strong>Available when:</strong> The defendant's conduct was especially reckless, malicious, or intentional. 
              These damages are designed to punish the wrongdoer and deter similar conduct.
            </p>
          </div>
          
          <h4 className="font-semibold text-lg">Factors Affecting Compensation Amount</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Severity and permanence of injuries</li>
            <li>Age and life expectancy of the victim</li>
            <li>Pre-injury income and earning capacity</li>
            <li>Degree of defendant's negligence</li>
            <li>Quality of medical treatment and documentation</li>
            <li>Strength of evidence and expert testimony</li>
            <li>Insurance coverage and defendant's assets</li>
            <li>Jurisdiction and local jury tendencies</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="California Explosion Injury Legal Guide | Trembach Law Firm"
        description="Comprehensive legal guidance for explosion injury victims in California. Learn about your rights, evidence preservation, investigation process, and compensation options."
        canonical="https://www.trembachlawfirm.com/practice-areas/explosions/legal-guidance"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="hero-content text-center text-white">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                Explosion Injury Legal Guidance
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-6">
                Comprehensive Legal Information for Explosion Victims
              </p>
              <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                Understanding your legal rights and options after an explosion injury is crucial for protecting your interests and securing fair compensation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Go Back Button */}
      

      {/* Main Content */}
      <div className="container mx-auto px-8 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Quick Action Guide */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Immediate Action Guide</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Do's */}
              <Card className="border-green-200">
                <CardHeader className="bg-green-50">
                  <CardTitle className="flex items-center text-green-800">
                    <CheckCircle className="w-6 h-6 mr-2" />
                    What You SHOULD Do
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {immediateDos.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Don'ts */}
              <Card className="border-red-200">
                <CardHeader className="bg-red-50">
                  <CardTitle className="flex items-center text-red-800">
                    <XCircle className="w-6 h-6 mr-2" />
                    What You Should NEVER Do
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {neverDos.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <XCircle className="w-4 h-4 text-red-600 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {guideSections.map((section) => (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? "default" : "outline"}
                  onClick={() => setActiveSection(section.id)}
                  className="flex items-center"
                >
                  <section.icon className="w-4 h-4 mr-2" />
                  {section.title}
                </Button>
              ))}
            </div>
          </div>

          {/* Guide Sections */}
          <div ref={contentRef} className="space-y-8">
            {guideSections.map((section) => (
              <div key={section.id} className="guide-section">
                <Collapsible 
                  open={activeSection === section.id || expandedSections[section.id]} 
                  onOpenChange={() => toggleSection(section.id)}
                >
                  <CollapsibleTrigger asChild>
                    <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <div className="flex items-center">
                            <section.icon className="w-6 h-6 mr-3 text-primary" />
                            {section.title}
                          </div>
                          {(activeSection === section.id || expandedSections[section.id]) ? 
                            <ChevronUp className="w-5 h-5" /> : 
                            <ChevronDown className="w-5 h-5" />
                          }
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent>
                    <Card className="mt-2">
                      <CardContent className="pt-6">
                        {section.content}
                      </CardContent>
                    </Card>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <Card className="bg-primary/5 border-primary">
              <CardHeader>
                <CardTitle className="text-2xl">Need Legal Help?</CardTitle>
                <p className="text-muted-foreground">
                  Our experienced explosion injury attorneys are here to help you navigate this complex legal process.
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    onClick={() => window.location.href = '/practice-areas/explosions/case-evaluation'}
                  >
                    Free Case Evaluation
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    Call (818) 123-4567
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplosionsLegalGuidance;