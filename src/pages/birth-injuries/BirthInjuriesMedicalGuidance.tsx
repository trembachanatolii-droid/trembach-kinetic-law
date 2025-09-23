import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  Stethoscope, 
  Brain, 
  Heart, 
  Baby, 
  Activity, 
  Shield, 
  Clock, 
  Phone, 
  Mail,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  FileText
} from 'lucide-react';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';
import { useScrollMemory } from '@/hooks/useScrollMemory';
import heroBackground from '@/assets/birth-injuries-medical-facility-new.jpg';
import diagnosisImage from '@/assets/birth-injuries-diagnosis-new.jpg';

gsap.registerPlugin(ScrollTrigger);

const BirthInjuriesMedicalGuidance: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  useScrollMemory();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      const heroContent = heroRef.current?.querySelector('.hero-content');
      if (heroContent) {
        gsap.set(heroContent, { opacity: 0, y: 100, scale: 0.8 });
        gsap.to(heroContent, { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.5, 
          ease: 'power3.out' 
        });
      }

      // Content sections animation
      const contentSections = contentRef.current?.querySelectorAll('.content-section');
      if (contentSections) {
        gsap.fromTo(contentSections,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.4,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 90%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    });

    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      ctx.revert();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const medicalGuidanceData = [
    {
      id: 'immediate-care',
      title: 'Immediate Medical Care After Birth Injury',
      icon: AlertTriangle,
      content: [
        {
          heading: 'Emergency Response',
          points: [
            'Ensure your child receives immediate medical attention for any concerning symptoms',
            'Document all medical treatments and interventions provided',
            'Request copies of all medical records from birth through current treatment',
            'Seek second opinions from pediatric specialists for complex conditions',
            'Contact emergency services if your child shows severe neurological symptoms'
          ]
        },
        {
          heading: 'Critical First Steps',
          points: [
            'Stabilize breathing and circulation - top priority in HIE cases',
            'Begin therapeutic hypothermia (cooling therapy) within 6 hours if HIE is suspected',
            'Conduct immediate neurological assessments and imaging studies',
            'Monitor for seizures and provide anticonvulsant medications if needed',
            'Establish feeding protocols if swallowing or feeding difficulties exist'
          ]
        },
        {
          heading: 'Documentation Requirements',
          points: [
            'Maintain detailed records of all symptoms and medical responses',
            'Photograph any visible injuries or medical devices being used',
            'Keep a daily log of your child\'s condition and any changes',
            'Save all medical bills, prescriptions, and treatment receipts',
            'Document communication with healthcare providers'
          ]
        }
      ]
    },
    {
      id: 'diagnosis-process',
      title: 'Birth Injury Diagnosis Process',
      icon: Brain,
      content: [
        {
          heading: 'Neurological Evaluations',
          points: [
            'MRI scans to detect brain damage, bleeding, or structural abnormalities',
            'CT scans for immediate assessment of skull fractures or brain swelling',
            'EEG testing to monitor for seizure activity and brain function',
            'Ultrasound examinations for premature infants to detect brain bleeds',
            'Comprehensive neurological exams by pediatric neurologists'
          ]
        },
        {
          heading: 'Physical Assessments',
          points: [
            'APGAR scores assessment at 1, 5, and 10 minutes after birth',
            'Muscle tone evaluation and reflex testing for signs of nerve damage',
            'Range of motion testing for joints and limbs affected by injury',
            'Developmental milestone tracking and early intervention screening',
            'Vision and hearing tests to assess sensory function impacts'
          ]
        },
        {
          heading: 'Specialized Testing',
          points: [
            'Genetic testing to rule out hereditary conditions vs. birth trauma',
            'Blood tests for metabolic disorders and infection markers',
            'Lumbar puncture if infection or bleeding in brain is suspected',
            'Electromyography (EMG) for muscle and nerve function assessment',
            'Developmental and cognitive testing as child grows'
          ]
        }
      ]
    },
    {
      id: 'treatment-options',
      title: 'Treatment Options and Therapies',
      icon: Heart,
      content: [
        {
          heading: 'Medical Interventions',
          points: [
            'Therapeutic hypothermia (cooling therapy) for HIE within 6 hours of birth',
            'Anti-seizure medications to control epileptic episodes',
            'Muscle relaxants and anti-spasticity medications for cerebral palsy',
            'Growth hormone therapy for children with growth deficiencies',
            'Surgical interventions for orthopedic complications or severe spasticity'
          ]
        },
        {
          heading: 'Rehabilitation Therapies',
          points: [
            'Physical therapy to improve motor function, strength, and mobility',
            'Occupational therapy for daily living skills and fine motor development',
            'Speech-language therapy for communication and swallowing difficulties',
            'Aquatic therapy for low-impact strength and coordination building',
            'Hippotherapy (therapeutic horseback riding) for balance and coordination'
          ]
        },
        {
          heading: 'Assistive Technologies',
          points: [
            'Mobility aids including wheelchairs, walkers, and standing frames',
            'Communication devices for children with speech impairments',
            'Adaptive equipment for eating, bathing, and daily activities',
            'Environmental controls and computer access technologies',
            'Orthotic devices and braces to support proper positioning'
          ]
        }
      ]
    },
    {
      id: 'long-term-care',
      title: 'Long-term Care Planning',
      icon: Clock,
      content: [
        {
          heading: 'Care Team Assembly',
          points: [
            'Pediatric neurologist for ongoing neurological management',
            'Developmental pediatrician for comprehensive developmental support',
            'Orthopedic surgeon for musculoskeletal complications',
            'Rehabilitation medicine physician for therapy coordination',
            'Case manager to coordinate services and navigate insurance'
          ]
        },
        {
          heading: 'Educational Planning',
          points: [
            'Early intervention services from birth to age 3',
            'Individualized Education Plan (IEP) development for school-age children',
            'Special education services and classroom accommodations',
            'Transition planning for adulthood and independent living skills',
            'Vocational training and supported employment programs'
          ]
        },
        {
          heading: 'Family Support Services',
          points: [
            'Respite care services to provide family relief and support',
            'Support groups for parents and siblings of children with birth injuries',
            'Financial planning and benefits navigation assistance',
            'Home modification consulting for accessibility improvements',
            'Mental health counseling for family members dealing with trauma'
          ]
        }
      ]
    },
    {
      id: 'warning-signs',
      title: 'Warning Signs to Watch For',
      icon: AlertTriangle,
      content: [
        {
          heading: 'Immediate Newborn Concerns',
          points: [
            'Difficulty breathing, irregular breathing patterns, or blue coloring',
            'Seizures, including subtle movements like eye deviation or lip smacking',
            'Extreme floppy or rigid muscle tone (hypotonia or hypertonia)',
            'Difficulty feeding, poor sucking reflex, or frequent vomiting',
            'Unusual crying patterns - either excessive crying or lack of crying'
          ]
        },
        {
          heading: 'Developmental Red Flags',
          points: [
            'Missing developmental milestones like rolling, sitting, or walking',
            'Persistent primitive reflexes that should have disappeared',
            'Significant delays in speech and language development',
            'Problems with coordination, balance, or fine motor skills',
            'Social interaction difficulties or lack of eye contact'
          ]
        },
        {
          heading: 'Emergency Symptoms',
          points: [
            'New onset seizures or increase in seizure frequency',
            'Sudden changes in consciousness or alertness levels',
            'Severe headaches, vomiting, or signs of increased brain pressure',
            'Regression in previously acquired skills or abilities',
            'Signs of infection including fever, lethargy, or unusual irritability'
          ]
        }
      ]
    },
    {
      id: 'choosing-providers',
      title: 'Choosing Healthcare Providers',
      icon: Stethoscope,
      content: [
        {
          heading: 'Specialist Selection Criteria',
          points: [
            'Board certification in pediatric neurology or developmental medicine',
            'Experience treating children with similar birth injuries',
            'Affiliation with children\'s hospitals or specialized treatment centers',
            'Participation in multidisciplinary care teams and coordinated approaches',
            'Research involvement and knowledge of latest treatment developments'
          ]
        },
        {
          heading: 'Treatment Center Evaluation',
          points: [
            'Comprehensive services available under one roof for convenience',
            'Evidence-based treatment protocols and outcome tracking',
            'Family-centered care approach with strong communication',
            'Access to clinical trials and experimental treatments',
            'Insurance acceptance and financial counseling services'
          ]
        },
        {
          heading: 'Second Opinion Guidelines',
          points: [
            'Seek additional opinions for complex diagnoses or treatment plans',
            'Consider major medical centers with birth injury expertise',
            'Ensure second opinion doctors have access to all medical records',
            'Don\'t delay necessary treatment while seeking additional opinions',
            'Insurance may cover second opinions - check with your provider'
          ]
        }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Birth Injury Medical Guidance | Treatment & Care Information"
        description="Comprehensive medical guidance for birth injury treatment, diagnosis, and long-term care. Expert advice on therapies, warning signs, and choosing healthcare providers."
      />

      <GoBack />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative bg-cover bg-center bg-no-repeat min-h-[60vh] flex items-center justify-center"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 hero-content">
            <div className="flex items-center justify-center mb-4">
              <Stethoscope className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold">Birth Injury Medical Guidance</h1>
            </div>
            <p className="text-xl mb-8 leading-relaxed">
              Comprehensive medical information for birth injury treatment and care
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div ref={contentRef} className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {medicalGuidanceData.map((section) => (
                <Card key={section.id} className="content-section glass-card">
                  <Collapsible 
                    open={expandedSections[section.id]} 
                    onOpenChange={() => toggleSection(section.id)}
                  >
                    <CollapsibleTrigger asChild>
                      <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                        <CardTitle className="flex items-center justify-between text-xl">
                          <div className="flex items-center">
                            <section.icon className="w-6 h-6 text-primary mr-3" />
                            {section.title}
                          </div>
                          {expandedSections[section.id] ? 
                            <ChevronUp className="w-5 h-5" /> : 
                            <ChevronDown className="w-5 h-5" />
                          }
                        </CardTitle>
                      </CardHeader>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent>
                      <CardContent className="space-y-6">
                        {section.content.map((subsection, index) => (
                          <div key={index}>
                            <h4 className="font-semibold text-lg mb-3 text-primary">
                              {subsection.heading}
                            </h4>
                            <ul className="space-y-2">
                              {subsection.points.map((point, pointIndex) => (
                                <li key={pointIndex} className="flex items-start">
                                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  <span className="text-muted-foreground">{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}

              {/* Medical Resources Image */}
              <Card className="content-section">
                <CardContent className="p-6">
                  <img 
                    src={diagnosisImage} 
                    alt="Birth injury medical diagnosis and treatment" 
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <p className="text-center text-muted-foreground">
                    Working with specialized medical teams ensures the best outcomes for children with birth injuries.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Emergency Contact */}
              <Card className="content-section glass-card border-red-200">
                <CardHeader>
                  <CardTitle className="text-lg text-red-600 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Emergency Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    If your child shows severe symptoms, seek immediate medical attention.
                  </p>
                  <Button 
                    variant="destructive" 
                    className="w-full"
                    onClick={() => window.location.href = 'tel:911'}
                  >
                    Call 911 - Emergency
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="content-section glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Get Legal Help</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    variant="outline" 
                    className="w-full text-primary border-primary hover:bg-primary hover:text-white"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call (818) 123-4567
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full text-primary border-primary hover:bg-primary hover:text-white"
                    onClick={() => window.location.href = '/birth-injuries/case-evaluation'}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Free Case Evaluation
                  </Button>

                  <Button 
                    variant="outline" 
                    className="w-full text-primary border-primary hover:bg-primary hover:text-white"
                    onClick={() => window.location.href = '/schedule-consultation'}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Schedule Consultation
                  </Button>
                </CardContent>
              </Card>

              {/* Important Facts */}
              <Card className="content-section glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Important Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">Time Limits</h4>
                      <p className="text-sm text-muted-foreground">California gives you until your child's 8th birthday to file a claim</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">No Win, No Fee</h4>
                      <p className="text-sm text-muted-foreground">We only get paid if you win your case</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Baby className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">Early Intervention</h4>
                      <p className="text-sm text-muted-foreground">Early treatment can significantly improve outcomes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Pages */}
              <Card className="content-section glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Related Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-left"
                    onClick={() => window.location.href = '/birth-injuries/compensation-calculator'}
                  >
                    Compensation Calculator
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-left"
                    onClick={() => window.location.href = '/birth-injuries/legal-guidance'}
                  >
                    Legal Guidance
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-left"
                    onClick={() => window.location.href = '/birth-injuries/resources'}
                  >
                    Resources & Support
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-left"
                    onClick={() => window.location.href = '/birth-injuries/faq'}
                  >
                    Frequently Asked Questions
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

export default BirthInjuriesMedicalGuidance;