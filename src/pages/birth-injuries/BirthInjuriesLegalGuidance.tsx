import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  Scale, 
  Shield, 
  Clock, 
  FileText, 
  Gavel, 
  AlertTriangle, 
  Phone, 
  Mail,
  ChevronDown,
  ChevronUp,
  DollarSign,
  Users,
  Building
} from 'lucide-react';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';
import { useScrollMemory } from '@/hooks/useScrollMemory';
import heroBackground from '@/assets/birth-injuries-legal-steps.jpg';
import legalProcessImage from '@/assets/birth-injuries-legal-process-new.jpg';

gsap.registerPlugin(ScrollTrigger);

const BirthInjuriesLegalGuidance: React.FC = () => {
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

  const legalGuidanceData = [
    {
      id: 'legal-rights',
      title: 'Your Legal Rights in Birth Injury Cases',
      icon: Scale,
      content: [
        {
          heading: 'Fundamental Rights of Families',
          points: [
            'Right to quality medical care that meets the standard of care during pregnancy, labor, and delivery',
            'Right to informed consent about all medical procedures and potential risks',
            'Right to pursue compensation if medical negligence caused your child\'s birth injury',
            'Right to access all medical records related to your pregnancy, delivery, and your child\'s treatment',
            'Right to seek second opinions and transfer care to other healthcare providers'
          ]
        },
        {
          heading: 'Patient Protection Laws',
          points: [
            'California Patient Safety Act protects your right to report medical errors',
            'HIPAA laws ensure your medical information privacy while allowing you access to records',
            'Emergency Medical Treatment and Labor Act (EMTALA) requires hospitals to provide emergency care',
            'Anti-retaliation laws protect you from healthcare provider retaliation for filing complaints',
            'Disability rights laws ensure your child receives appropriate accommodations and services'
          ]
        },
        {
          heading: 'Legal Protections for Children',
          points: [
            'Extended statute of limitations - claims can be filed until child\'s 8th birthday in California',
            'Right to lifetime care and support if permanently disabled due to medical negligence',
            'Protection against discrimination in education and employment due to disability',
            'Right to guardianship proceedings if child cannot make decisions independently',
            'Inheritance and estate planning protections for disabled children'
          ]
        }
      ]
    },
    {
      id: 'statute-limitations',
      title: 'Statute of Limitations for Birth Injury Claims',
      icon: Clock,
      content: [
        {
          heading: 'California Time Limits',
          points: [
            'General rule: 3 years from discovery of injury or before child\'s 8th birthday, whichever is longer',
            'For children under 6: You have until the child\'s 8th birthday to file suit',
            'Discovery rule: Time begins when you knew or should have known injury was caused by medical negligence',
            'Government entities: Special 6-month notice requirement for claims against public hospitals',
            'Wrongful death: 2 years from date of death, but special rules may apply for minors'
          ]
        },
        {
          heading: 'Factors Affecting Deadlines',
          points: [
            'Type of healthcare provider (private vs. government hospital affects deadlines)',
            'Whether fraud or concealment by healthcare providers is involved (may extend deadline)',
            'Mental incapacity of the child may toll (pause) the statute of limitations',
            'Discovery of additional injuries or consequences may restart limitation periods',
            'Criminal charges against healthcare providers may affect civil case timelines'
          ]
        },
        {
          heading: 'Important Exceptions and Extensions',
          points: [
            'Fraudulent concealment by doctors can extend the filing deadline',
            'Continuing treatment doctrine may delay when limitation period begins',
            'Foreign object cases have different rules (discovered within 1 year of discovery)',
            'Failure to diagnose cases may have extended discovery periods',
            'Some states have special rules for birth injuries - California law applies if injury occurred here'
          ]
        }
      ]
    },
    {
      id: 'proving-negligence',
      title: 'Proving Medical Negligence in Birth Injury Cases',
      icon: Gavel,
      content: [
        {
          heading: 'Four Elements of Medical Malpractice',
          points: [
            'Duty: Healthcare provider owed a duty of care to mother and baby',
            'Breach: Provider breached the standard of care through action or inaction',
            'Causation: The breach directly caused or contributed to the birth injury',
            'Damages: Actual harm resulted from the negligent care (medical expenses, pain, disability)'
          ]
        },
        {
          heading: 'Types of Evidence Needed',
          points: [
            'Complete medical records from prenatal care through current treatment',
            'Expert medical testimony from qualified physicians in relevant specialties',
            'Fetal monitoring strips showing signs of distress that weren\'t addressed',
            'Hospital policies and procedures that weren\'t followed properly',
            'Witness testimony from medical staff present during delivery'
          ]
        },
        {
          heading: 'Common Areas of Negligence',
          points: [
            'Failure to monitor fetal heart rate and respond to signs of distress',
            'Delayed or unnecessary cesarean section decisions',
            'Improper use of delivery instruments (vacuum, forceps)',
            'Failure to diagnose and treat maternal conditions (preeclampsia, infection)',
            'Medication errors including incorrect dosages of Pitocin or anesthesia'
          ]
        }
      ]
    },
    {
      id: 'legal-process',
      title: 'The Legal Process for Birth Injury Claims',
      icon: FileText,
      content: [
        {
          heading: 'Initial Case Evaluation',
          points: [
            'Free consultation with experienced birth injury attorney to assess case merit',
            'Review of medical records and documentation by legal and medical experts',
            'Determination of which parties may be liable (doctors, nurses, hospitals)',
            'Assessment of potential compensation based on injury severity and future needs',
            'Explanation of legal process, timeline, and what to expect throughout case'
          ]
        },
        {
          heading: 'Investigation and Discovery',
          points: [
            'Formal filing of lawsuit within statute of limitations period',
            'Comprehensive medical record review and analysis by expert witnesses',
            'Depositions of healthcare providers, medical staff, and expert witnesses',
            'Discovery of hospital policies, staff training records, and other relevant documents',
            'Life care planning to determine future medical and care costs'
          ]
        },
        {
          heading: 'Resolution Options',
          points: [
            'Settlement negotiations - most cases resolve through negotiated settlement',
            'Mediation - neutral third party helps facilitate settlement discussions',
            'Trial - jury or judge determines liability and damages if settlement isn\'t reached',
            'Post-trial appeals process if either party disputes the verdict',
            'Structured settlements for long-term financial security for the child'
          ]
        }
      ]
    },
    {
      id: 'compensation-types',
      title: 'Types of Compensation Available',
      icon: DollarSign,
      content: [
        {
          heading: 'Economic Damages',
          points: [
            'Past and future medical expenses including surgeries, medications, and treatments',
            'Rehabilitation costs including physical, occupational, and speech therapy',
            'Special education costs and tutoring for learning disabilities',
            'Lost wages for parents who must provide care or reduce work hours',
            'Medical equipment, mobility aids, and home modification costs'
          ]
        },
        {
          heading: 'Non-Economic Damages',
          points: [
            'Pain and suffering endured by the child due to the birth injury',
            'Loss of enjoyment of life and inability to participate in normal activities',
            'Emotional distress and mental anguish experienced by child and family',
            'Loss of companionship and parental guidance if wrongful death occurred',
            'Disfigurement and permanent disability compensation'
          ]
        },
        {
          heading: 'Special Considerations',
          points: [
            'Life care plans calculating lifetime costs for severe disabilities',
            'Lost earning capacity if child\'s ability to work is impacted',
            'Punitive damages in cases of gross negligence or intentional misconduct',
            'Interest and attorney fees may be recoverable in some circumstances',
            'Tax implications of different types of compensation and structured settlements'
          ]
        }
      ]
    },
    {
      id: 'choosing-attorney',
      title: 'Choosing the Right Birth Injury Attorney',
      icon: Users,
      content: [
        {
          heading: 'Essential Qualifications',
          points: [
            'Specialized experience in birth injury and medical malpractice law',
            'Track record of successful verdicts and settlements in similar cases',
            'Access to qualified medical experts in obstetrics, pediatrics, and neurology',
            'Resources to handle complex, expensive litigation including expert witness fees',
            'Board certification in medical malpractice or personal injury law'
          ]
        },
        {
          heading: 'Important Questions to Ask',
          points: [
            'How many birth injury cases have you handled and what were the outcomes?',
            'What medical experts do you work with for birth injury cases?',
            'How do you handle case expenses and what happens if we don\'t win?',
            'What is your experience with cases similar to my child\'s specific injury?',
            'Can you provide references from other birth injury clients?'
          ]
        },
        {
          heading: 'Red Flags to Avoid',
          points: [
            'Attorneys who guarantee specific outcomes or settlement amounts',
            'Lawyers who pressure you to sign immediately without explanation',
            'Firms without specific experience in birth injury or medical malpractice',
            'Attorneys who request upfront fees for contingency cases',
            'Lawyers who don\'t have relationships with qualified medical experts'
          ]
        }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Birth Injury Legal Guidance | Know Your Rights & Legal Options"
        description="Comprehensive legal guidance for birth injury claims. Learn about your rights, statute of limitations, proving negligence, and choosing the right attorney in California."
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
              <Scale className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold">Birth Injury Legal Guidance</h1>
            </div>
            <p className="text-xl mb-8 leading-relaxed">
              Understanding your legal rights and options in birth injury cases
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div ref={contentRef} className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {legalGuidanceData.map((section) => (
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

              {/* Legal Process Image */}
              <Card className="content-section">
                <CardContent className="p-6">
                  <img 
                    src={legalProcessImage} 
                    alt="Birth injury legal process and litigation" 
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <p className="text-center text-muted-foreground">
                    Experienced birth injury attorneys guide families through the complex legal process.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Urgent Legal Action */}
              <Card className="content-section glass-card border-red-200">
                <CardHeader>
                  <CardTitle className="text-lg text-red-600 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Time-Sensitive Legal Action
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Don't wait - California law gives you until your child's 8th birthday to file a claim.
                  </p>
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700"
                    onClick={() => window.location.href = '/birth-injuries/case-evaluation'}
                  >
                    Get Free Legal Consultation
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Legal Team */}
              <Card className="content-section glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Speak With Our Legal Team</CardTitle>
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

              {/* Legal Facts */}
              <Card className="content-section glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Important Legal Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">Statute of Limitations</h4>
                      <p className="text-sm text-muted-foreground">Until child's 8th birthday in California</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">No Win, No Fee</h4>
                      <p className="text-sm text-muted-foreground">Contingency fee - no upfront costs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <DollarSign className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">No Damage Caps</h4>
                      <p className="text-sm text-muted-foreground">California has no limits on birth injury damages</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Legal Resources */}
              <Card className="content-section glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Related Legal Resources</CardTitle>
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
                    onClick={() => window.location.href = '/birth-injuries/medical-guidance'}
                  >
                    Medical Guidance
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
                    Legal FAQ
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

export default BirthInjuriesLegalGuidance;